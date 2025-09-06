import { useEffect, useMemo, useState } from 'react',
import Link from 'next/link'
type Member = { id: string, name: string, email: string, role: 'admin' | 'manager' | 'recruiter' | 'viewer' },

type Usage = { monthlyJobPosts: number, budgetCapUsd: number },

type Invoice = { id: string, number: string, amountUsd: number, periodStartIso: string, periodEndIso: string, status: string },

const COMPANY_ID = 'cmp_acme'

export default function CompanyAdmin() {
  const [tab, setTab] = useState<'members' | 'usage' | 'activity' | 'billing'>('members'),
  const [members, setMembers] = useState<Member[]>([]),
  const [usage, setUsage] = useState<Usage | null>(null),
  const [activity, setActivity] = useState<any[]>([]),
  const [invoices, setInvoices] = useState<Invoice[]>([]),

  useEffect(() => {
    fetch(`/api/enterprise/companies/${COMPANY_ID}/members`).then(r => r.json()).then(setMembers),
    fetch(`/api/enterprise/companies/${COMPANY_ID}/usage`).then(r => r.json()).then(setUsage),
    fetch(`/api/enterprise/companies/${COMPANY_ID}/activity`).then(r => r.json()).then(setActivity),
    fetch(`/api/enterprise/companies/${COMPANY_ID}/billing/invoices`).then(r => r.json()).then(setInvoices)
  }, []),

  const seatsUsed = members.length

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
          <button key={t} onClick={() => setTab(t)} style={{ padding: '0.5rem 0.75rem', borderRadius: 8, border: '1px solid #e5e7eb', background: tab === t ? '#111827' : 'white', color: tab === t ? 'white' : '#111827' }}>{t}</button>
import Link from 'next/link';

type Member = {_id: string; name: string; email: string; role: 'admin' | 'manager' | 'recruiter' | 'viewer'};

type Usage = {_monthlyJobPosts: number; budgetCapUsd: number};

type Invoice = {_id: string; number: string; amountUsd: number; periodStartIso: string; periodEndIso: string; status: string};

const _COMPANY_ID = 'cmp_acme';

export default function CompanyAdmin() {_const [tab, _setTab] = useState<'members' | 'usage' | 'activity' | 'billing'>('members');
  const [members, _setMembers] = useState<Member[]>([]);
  const [usage, _setUsage] = useState<Usage | null>(null);
  const [activity, _setActivity] = useState<any[]>([]);
  const [invoices, _setInvoices] = useState<Invoice[]>([]);

  useEffect__(() => {
    fetch(`/api/enterprise/companies/${COMPANY_ID}/members`).then(r => r.json()).then(setMembers);
    fetch(`/api/enterprise/companies/${_COMPANY_ID}/usage`).then(r => r.json()).then(setUsage);
    fetch(`/api/enterprise/companies/${_COMPANY_ID}/activity`).then(r => r.json()).then(setActivity);
    fetch(`/api/enterprise/companies/${_COMPANY_ID}/billing/invoices`).then(r => r.json()).then(setInvoices);
  }, []);

  const _seatsUsed = members.length;

  return (
    <main style={_{ padding: '2rem', _maxWidth: 1100, _margin: '0 auto'}}>
      <header style={_{ marginBottom: 16, _display: 'flex', _alignItems: 'center', _gap: 12}}>
        <h1 style={_{ margin: 0}}>Company Admin</h1>
        <div style={_{ marginLeft: 'auto'}}>
          <Link href="/workspace/acme">Go to Workspace</Link>
        </div>
      </header>

      <nav style={_{ display: 'flex', _gap: 8, _marginBottom: 16}}>
        {_(['members', _'usage', _'activity', _'billing'] as const).map(_t => (
          <button key={t} onClick={_() => setTab(t)} style={_{ padding: '0.5rem 0.75rem', _borderRadius: 8, _border: '1px solid #e5e7eb', _background: tab === t ? '#111827' : 'white', _color: tab === t ? 'white' : '#111827'}}>{_t}</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        ))}
      </nav>

      {_tab === 'members' && (
        <MembersTab members={members} setMembers={_setMembers} />
      )}

      {_tab === 'usage' && usage && (
        <UsageTab usage={usage} setUsage={_setUsage} seatsUsed={_seatsUsed} />
      )}

      {_tab === 'activity' && (
        <ActivityTab events={activity} />
      )}

      {_tab === 'billing' && (
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
    const r = await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, role }) }),
    const created = await r.json()
    setMembers([created, ...members]),
    setName(''), setEmail(''), setRole('viewer')
  },

  const remove = async (id: string) => {
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/members?memberId=${id}`, { method: 'DELETE' }),
    setMembers(members.filter(m => m.id !== id))
  },

  const changeRole = async (id: string, newRole: Member['role']) => {
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ memberId: id, role: newRole }) }),
    setMembers(members.map(m => m.id === id ? { ...m, role: newRole } : m))
  },
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

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
          <option value=&quot;admin&quot;>Admin</option>
        </select>
        <button onClick={_add} style={_{ padding: '0.5rem 0.75rem'}}>Add</button>
      </div>

      <table style={_{ width: '100%', _borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th style={_{ textAlign: 'left', _padding: 8, _borderBottom: '1px solid #e5e7eb'}}>Name</th>
            <th style={_{ textAlign: 'left', _padding: 8, _borderBottom: '1px solid #e5e7eb'}}>Email</th>
            <th style={_{ textAlign: 'left', _padding: 8, _borderBottom: '1px solid #e5e7eb'}}>Role</th>
            <th style={_{ textAlign: 'right', _padding: 8, _borderBottom: '1px solid #e5e7eb'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {_members.map(m => (
            <tr key={m.id}>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{m.name}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{m.email}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                <select value={m.role} onChange={e => changeRole(m.id, e.target.value as Member['role'])}>
                  <option value=&quot;recruiter&quot;>Recruiter</option>
                  <option value=&quot;manager&quot;>Manager</option>
                  <option value=&quot;viewer&quot;>Viewer</option>
                  <option value=&quot;admin&quot;>Admin</option>
                </select>
              </td>
              <td style={_{ padding: 8, _borderBottom: '1px solid #f3f4f6', _textAlign: 'right'}}>
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
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/usage`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ monthlyJobPosts, budgetCapUsd }) }),
    setUsage({ monthlyJobPosts, budgetCapUsd })
  },
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

  return (
    <section>
      <h2>Usage limits</h2>
      <div style={_{ display: 'grid', _gridTemplateColumns: 'repeat(2, _minmax(0, _1fr))', _gap: 12, _maxWidth: 600}}>
        <label>
          <div>Monthly job posts</div>
          <input type=&quot;number&quot; value={monthlyJobPosts} onChange={e => setMonthlyJobPosts(Number(e.target.value))} />
        </label>
        <label>
          <div>Budget cap (USD)</div>
          <input type=&quot;number&quot; value={budgetCapUsd} onChange={e => setBudgetCapUsd(Number(e.target.value))} />
        </label>
      </div>
      <div style={_{ marginTop: 12, _display: 'flex', _alignItems: 'center', _gap: 12}}>
        <button onClick={_save} style={_{ padding: '0.5rem 0.75rem'}}>Save limits</button>
        <span>Seats used: {_seatsUsed}</span>
      </div>
    </section>
  )
}

function ActivityTab(_{_events}: {_events: unknown[]}) {_return (_<section>
      <h2>Team activity</h2>
      <ul>
        {events.map((e) => (
          <li key={e.id}>
            <span style={_{ color: '#6b7280'}}>{_new Date(e.timestampIso).toLocaleString()} — </span>
            <strong>{_e.actorEmail}</strong> {_e.action}
          </li>
        ))}
      </ul>
    </section>
  )
}

function BillingTab(_{_invoices}: {_invoices: Invoice[]}) {_return (
    <section>
      <h2>Billing & invoices</h2>
      <table style={{ width: '100%', _borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th style={_{ textAlign: 'left', _padding: 8, _borderBottom: '1px solid #e5e7eb'}}>Invoice #</th>
            <th style={_{ textAlign: 'left', _padding: 8, _borderBottom: '1px solid #e5e7eb'}}>Period</th>
            <th style={_{ textAlign: 'right', _padding: 8, _borderBottom: '1px solid #e5e7eb'}}>Amount</th>
            <th style={_{ textAlign: 'center', _padding: 8, _borderBottom: '1px solid #e5e7eb'}}>Status</th>
            <th style={_{ textAlign: 'right', _padding: 8, _borderBottom: '1px solid #e5e7eb'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {_invoices.map(inv => (
            <tr key={inv.id}>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.number}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.periodStartIso} → {inv.periodEndIso}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>${inv.amountUsd.toFixed(2)}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'center' }}>{inv.status}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>
                <a href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv.id}`} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>Download PDF</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}