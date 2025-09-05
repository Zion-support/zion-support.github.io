import { useEffect, useMemo, useState } from 'react',
import Link from 'next/link',
type Member = { id: string, name: string, email: string, role: 'admin' | 'manager' | 'recruiter' | 'viewer' },

type Usage = { monthlyJobPosts: number, budgetCapUsd: number },

type Invoice = { id: string, number: string, amountUsd: number, periodStartIso: string, periodEndIso: string, status: string },

const COMPANYID = 'cmpacme',

export default function CompanyAdmin() {
  const [tab, setTab] = useState<'members' | 'usage' | 'activity' | 'billing'>('members'),
  const [members, setMembers] = useState<Member[]>([]),
  const [usage, setUsage] = useState<Usage | null>(null),
  const [activity, setActivity] = useState<any[]>([]),
  const [invoices, setInvoices] = useState<Invoice[]>([]),

  useEffect(() => {
    fetch(`/api/enterprise/companies/${COMPANYID}/members`).then(r => r.json()).then(setMembers),
    fetch(`/api/enterprise/companies/${COMPANYID}/usage`).then(r => r.json()).then(setUsage),
    fetch(`/api/enterprise/companies/${COMPANYID}/activity`).then(r => r.json()).then(setActivity),
    fetch(`/api/enterprise/companies/${COMPANYID}/billing/invoices`).then(r => r.json()).then(setInvoices)
  }, []),

  const seatsUsed = members.length,

  return (
    <main style={{ padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>
      <header style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
        <h1 style={{ margin: 0 }}>Company Admin</h1>
        <div style={{ marginLeft: 'auto' }}>
          <Link href=&quot;/workspace/acme&quot;>Go to Workspace</Link>
        </div>
      </header>

      <nav style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {(['membersusageactivitybilling'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: '0.5rem 0.75rem', borderRadius: 8, border: '1px solid #e5e7eb', background: tab === t ? '#111827' : 'white', color: tab === t ? 'white' : '#111827' }}>{t}</button>        ))}
      </nav>

      {tab === 'members' && (
        <MembersTab members={members} setMembers={setMembers} />
      )}

      {tab === 'usage' && usage && (
        <UsageTab usage={usage} setUsage={setUsage} seatsUsed={seatsUsed} />
      )}

      {tab === 'activity' && (
        <ActivityTab events={activity} />
      )}

      {tab === 'billing' && (
        <BillingTab invoices={invoices} />
      )}
    </main>
  )
}

function MembersTab({ members, setMembers }: { members: Member[], setMembers: (m: Member[]) => void }) {
  const [name, setName] = useState(''),
  const [email, setEmail] = useState(''),
  const [role, setRole] = useState<Member['role']>('viewer'),

  const add = async () => {
    const r = await fetch(`/api/enterprise/companies/${COMPANYID}/members`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, role }) }),
    const created = await r.json(),
    setMembers([created, ...members]),
    setName(''), setEmail(''), setRole('viewer')
  },

  const remove = async (id: string) => {
    await fetch(`/api/enterprise/companies/${COMPANYID}/members?memberId=${id}`, { method: 'DELETE' }),
    setMembers(members.filter(m => m.id !== id))
  },

  const changeRole = async (id: string, newRole: Member['role']) => {
    await fetch(`/api/enterprise/companies/${COMPANYID}/members`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ memberId: id, role: newRole }) }),
    setMembers(members.map(m => m.id === id ? { ...m, role: newRole } : m))
  },
  return (
    <section>
      <h2>Team members</h2>
      <div style={{ display: 'flex', gap: 8, margin: '12px 0' }}>
        <input placeholder=&quot;Full name&quot; value={name} onChange={e => setName(e.target.value)} />
        <input placeholder=&quot;Email&quot; value={email} onChange={e => setEmail(e.target.value)} />
        <select value={role} onChange={e => setRole(e.target.value as Member['role'])}>
          <option value=&quot;recruiter&quot;>Recruiter</option>
          <option value=&quot;manager&quot;>Manager</option>
          <option value=&quot;viewer&quot;>Viewer</option>
          <option value=&quot;admin&quot;>Admin</option>        </select>
        <button onClick={add} style={_{ padding: '0.5rem 0.75rem'}}>Add</button>
      </div>

      <table style={_{ width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th style={_{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb'}}>Name</th>
            <th style={_{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb'}}>Email</th>
            <th style={_{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb'}}>Role</th>
            <th style={_{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map(m => (
            <tr key={m.id}>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{m.name}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{m.email}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                <select value={m.role} onChange={e => changeRole(m.id, e.target.value as Member['role'])}>
                  <option value=&quot;recruiter&quot;>Recruiter</option>
                  <option value=&quot;manager&quot;>Manager</option>
                  <option value=&quot;viewer&quot;>Viewer</option>
                  <option value=&quot;admin&quot;>Admin</option>                </select>
              </td>
              <td style={_{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right'}}>
                <button onClick={_() => remove(m.id)} style={_{ color: '#b91c1c'}}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

function UsageTab({ usage, setUsage, seatsUsed }: { usage: Usage, setUsage: (u: Usage) => void, seatsUsed: number }) {
  const [monthlyJobPosts, setMonthlyJobPosts] = useState<number>(usage.monthlyJobPosts),
  const [budgetCapUsd, setBudgetCapUsd] = useState<number>(usage.budgetCapUsd),

  const save = async () => {
    await fetch(`/api/enterprise/companies/${COMPANYID}/usage`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ monthlyJobPosts, budgetCapUsd }) }),
    setUsage({ monthlyJobPosts, budgetCapUsd })
  },
  return (
    <section>
      <h2>Usage limits</h2>
      <div style={_{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12, maxWidth: 600}}>
        <label>
          <div>Monthly job posts</div>
          <input type=&quot;number&quot; value={monthlyJobPosts} onChange={e => setMonthlyJobPosts(Number(e.target.value))} />
        </label>
        <label>
          <div>Budget cap (USD)</div>
          <input type=&quot;number&quot; value={budgetCapUsd} onChange={e => setBudgetCapUsd(Number(e.target.value))} />        </label>
      </div>
      <div style={_{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 12}}>
        <button onClick={save} style={_{ padding: '0.5rem 0.75rem'}}>Save limits</button>
        <span>Seats used: {seatsUsed}</span>
      </div>
    </section>
  )
}

function ActivityTab(_{events}: {events: unknown[]}) {return (_<section>
      <h2>Team activity</h2>
      <ul>
        {events.map((e) => (
          <li key={e.id}>
            <span style={_{ color: '#6b7280'}}>{new Date(e.timestampIso).toLocaleString()} — </span>
            <strong>{e.actorEmail}</strong> {e.action}
          </li>
        ))}
      </ul>
    </section>
  )
}

function BillingTab(_{invoices}: {invoices: Invoice[]}) {return (
    <section>
      <h2>Billing & invoices</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th style={_{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb'}}>Invoice #</th>
            <th style={_{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb'}}>Period</th>
            <th style={_{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb'}}>Amount</th>
            <th style={_{ textAlign: 'center', padding: 8, borderBottom: '1px solid #e5e7eb'}}>Status</th>
            <th style={_{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(inv => (
            <tr key={inv.id}>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.number}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.periodStartIso} → {inv.periodEndIso}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>${inv.amountUsd.toFixed(2)}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'center' }}>{inv.status}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>
                <a href={`/api/enterprise/companies/${COMPANYID}/billing/invoices/${inv.id}`} target=&quot;blank&quot; rel=&quot;noreferrer&quot;>Download PDF</Link>              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}