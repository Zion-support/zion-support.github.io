<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
type Member = any;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
import { useEffect, useMemo, useState  } from 'react';
=======
import {useEffect, useMemo, useState} from 'react';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import Link from 'next/link';

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
type Member = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'recruiter' | 'viewer'
}
type Usage = { monthlyJobPosts: number, budgetCapUsd: number }
type Invoice = {
  id: string;
  number: string;
  amountUsd: number;
  periodStartIso: string;
  periodEndIso: string;
<<<<<<< HEAD
  status: string
}
const COMPANY_ID = 'cmp_acme';
<<<<<<< HEAD
export default function CompanyAdmin() {
  const [tab, setTab] = useState<'members' | 'usage' | 'activity' | 'billing'>(
    'members'
=======

export default function CompanyAdmin() {
  const [tab, setTab] = useState<'members' | 'usage' | 'activity' | 'billing'>(
    'members';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );  const [members, setMembers] = useState<Member[]>([]);
=======
  status: string;
};

const COMPANY_ID = 'cmp_acme';
}

export default function CompanyAdmin() {
  const [tab, setTab] = useState<'members' | 'usage' | 'activity' | 'billing'>(
    'members'
  );
  const [members, setMembers] = useState<Member[]>([]);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const [usage, setUsage] = useState<Usage | null>(null);
  const [activity, setActivity] = useState<any[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
<<<<<<< HEAD
  useEffect(() => {
    fetch(`/api/enterprise/companies/${COMPANY_ID}/members`)
      .then(r => r.json())
      .then(setMembers);
    fetch(`/api/enterprise/companies/${COMPANY_ID}/usage`)
      .then(r => r.json())
      .then(setUsage);
    fetch(`/api/enterprise/companies/${COMPANY_ID}/activity`)
      .then(r => r.json())
      .then(setActivity);
    fetch(`/api/enterprise/companies/${COMPANY_ID}/billing/invoices`)
      .then(r => r.json())
<<<<<<< HEAD
      .then(setInvoices);  }, []);
=======
      .then(setInvoices);
  }, []);

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const seatsUsed = members.length;
  return (
    <main style={{ padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>
      <header
        style={{
          marginBottom: 16
          display: 'flex'
          alignItems: 'center'
          gap: 12
        }}
      >
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useEffect, useMemo, useState } from 'react',
import Link from 'next/link',
type Member = { id: string, name: string, email: string, role: 'admin' | 'manager' | 'recruiter' | 'viewer' },
type Usage = { monthlyJobPosts: number, budgetCapUsd: number },
type Invoice = { id: string, number: string, amountUsd: number, periodStartIso: string, periodEndIso: string, status: string },
const COMPANY_ID = 'cmp_acme',
export default function CompanyAdmin() {
  const [tab, setTab] = useState<'members' | 'usage' | 'activity' | 'billing'>('members'),
  const [members, setMembers] = useState<Member[]>([]),
  const [usage, setUsage] = useState<Usage | null>(null),
  const [activity, setActivity] = useState<any[]>([]),
  const [invoices, setInvoices] = useState<Invoice[]>([]),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  useEffect(() => {
    fetch(`/api/enterprise/companies/${COMPANY_ID}/members`).then(r => r.json()).then(setMembers),
    fetch(`/api/enterprise/companies/${COMPANY_ID}/usage`).then(r => r.json()).then(setUsage),
    fetch(`/api/enterprise/companies/${COMPANY_ID}/activity`).then(r => r.json()).then(setActivity),
    fetch(`/api/enterprise/companies/${COMPANY_ID}/billing/invoices`).then(r => r.json()).then(setInvoices)
  }, []),
  const seatsUsed = members.length,
  return (
    <main style={{ padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>
      <header style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <h1 style={{ margin: 0 }}>Company Admin</h1>
        <div style={{ marginLeft: 'auto' }}>
<<<<<<< HEAD
<<<<<<< HEAD
          <Link href='/workspace/acme'>Go to Workspace</Link>        </div>
=======
          <Link href='/workspace/acme'>Go to Workspace</Link>
        </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
          <Link href="/workspace/acme">Go to Workspace</Link>
        </div>
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
      </header>
      <nav style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
<<<<<<< HEAD
        {(['members', 'usage', 'activity', 'billing'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: '0.5rem 0.75rem'
              borderRadius: 8
              border: '1px solid #e5e7eb'
              background: tab === t ? '#111827' : 'white'
              color: tab === t ? 'white' : '#111827'
            }}
          >
            {t}
<<<<<<< HEAD
          </button>        ))}
=======
          </button>
        ))}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      </nav>
      {tab === 'members' && (
        <MembersTab members={members} setMembers={setMembers} />
      )}
      {tab === 'usage' && usage && (
        <UsageTab usage={usage} setUsage={setUsage} seatsUsed={seatsUsed} />
      )}
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      {tab === 'activity' && <ActivityTab events={activity} />}
      {tab === 'billing' && <BillingTab invoices={invoices} />}
    </main>
  );
function MembersTab({
  members
  setMembers
}: {
  members: Member[];
  setMembers: (m: Member[]) => void;
<<<<<<< HEAD
}) {  const [name, setName] = useState('');
=======
}) {
  const [name, setName] = useState('');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<Member['role']>('viewer');
<<<<<<< HEAD
  const add = async () => {
    const r = await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ name, email, role })
    });
    const created = await r.json();
    setMembers([created, ...members]);
    setName('');
    setEmail('');
    setRole('viewer');
  }
  const remove = async (id: string) => {
    await fetch(
      `/api/enterprise/companies/${COMPANY_ID}/members?memberId=${id}`
      { method: 'DELETE' }
    );
    setMembers(members.filter(m => m.id !== id));
  }
  const changeRole = async (id: string, newRole: Member['role']) => {
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, {
      method: 'PATCH'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ memberId: id, role: newRole })
    });
<<<<<<< HEAD
    setMembers(members.map(m => (m.id === id ? { ...m, role: newRole } : m)));  }
=======
<<<<<<< HEAD
    setMembers(members.map(m => (m.id === id ? { ...m, role: newRole } : m)));
  };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        {(['membersusageactivitybilling'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: '0.5rem 0.75rem', borderRadius: 8, border: '1px solid #e5e7eb', background: tab === t ? '#111827' : 'white', color: tab === t ? 'white' : '#111827' }}>{t}</button>
        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </nav>;
      {tab === 'members' && (;
        <MembersTab members={members} setMembers={setMembers} />;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      {tab === 'usage' && usage && (;
        <UsageTab usage={usage} setUsage={setUsage} seatsUsed={seatsUsed} />;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      {tab === 'activity' && (;
        <ActivityTab events={activity} />;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      {tab === 'billing' && (;
        <BillingTab invoices={invoices} />;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </main>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
function MembersTab({ members, setMembers }: { members: Member[], setMembers: (m: Member[]) => void }) {
  const [name, setName] = useState(''),
  const [email, setEmail] = useState(''),
  const [role, setRole] = useState<Member['role']>('viewer'),
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const add = async () => {
    const r = await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, role }) }),
    const created = await r.json(),
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  return (
    <section>
      <h2>Team members</h2>
      <div style={{ display: 'flex', gap: 8, margin: '12px 0' }}>
        <input placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <select value={role} onChange={e => setRole(e.target.value as Member['role'])}>
          <option value="recruiter">Recruiter</option>
          <option value="manager">Manager</option>
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
<<<<<<< HEAD
        <button onClick={add} style={{ padding: '0.5rem 0.75rem' }}>
          Add
<<<<<<< HEAD
        </button>      </div>
<<<<<<< HEAD
=======
        </button>
      </div>

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th
              style={{
                textAlign: 'left'
                padding: 8
                borderBottom: '1px solid #e5e7eb'
              }}
            >
              Name
            </th>
            <th
              style={{
                textAlign: 'left'
                padding: 8
                borderBottom: '1px solid #e5e7eb'
              }}
            >
              Email
            </th>
            <th
              style={{
                textAlign: 'left'
                padding: 8
                borderBottom: '1px solid #e5e7eb'
              }}
            >
              Role
            </th>
            <th
              style={{
                textAlign: 'right'
                padding: 8
                borderBottom: '1px solid #e5e7eb'
              }}
            >
              Actions
<<<<<<< HEAD
            </th>          </tr>
=======
<<<<<<< HEAD
            </th>
          </tr>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        <button onClick={add} style={{ padding: '0.5rem 0.75rem' }}>Add</button>
      </div>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Name</th>
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Email</th>
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Role</th>
            <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Actions</th>
          </tr>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
        </thead>
        <tbody>
          {members.map(m => (
            <tr key={m.id}>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{m.name}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{m.email}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                <select value={m.role} onChange={e => changeRole(m.id, e.target.value as Member['role'])}>
                  <option value="recruiter">Recruiter</option>
                  <option value="manager">Manager</option>
                  <option value="viewer">Viewer</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
<<<<<<< HEAD
              <td
                style={{
                  padding: 8
                  borderBottom: '1px solid #f3f4f6'
                  textAlign: 'right'
                }}
              >
                <button
                  onClick={() => remove(m.id)}
                  style={{ color: '#b91c1c' }}
                >
                  Remove
<<<<<<< HEAD
                </button>              </td>
=======
                </button>
              </td>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            </tr>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          ))}
        </tbody>
      </table>
    </section>
  );
function UsageTab({
  usage
  setUsage
  seatsUsed
}: {
  usage: Usage;
  setUsage: (u: Usage) => void;
  seatsUsed: number;
}) {
  const [monthlyJobPosts, setMonthlyJobPosts] = useState<number>(
    usage.monthlyJobPosts
  );
  const [budgetCapUsd, setBudgetCapUsd] = useState<number>(usage.budgetCapUsd);
  const save = async () => {
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/usage`, {
      method: 'PATCH'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ monthlyJobPosts, budgetCapUsd })
    });
<<<<<<< HEAD
    setUsage({ monthlyJobPosts, budgetCapUsd });  }
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
    setUsage({ monthlyJobPosts, budgetCapUsd });
  };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  return (
    <section>
      <h2>Usage limits</h2>
      <div
        style={{
          display: 'grid'
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
          gap: 12
          maxWidth: 600
        }}
      >
=======
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>
                <button onClick={() => remove(m.id)} style={{ color: '#b91c1c' }}>Remove</button>
              </td>
            </tr>
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </tbody>;
      </table>;
    </section>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
function UsageTab({ usage, setUsage, seatsUsed }: { usage: Usage, setUsage: (u: Usage) => void, seatsUsed: number }) {
  const [monthlyJobPosts, setMonthlyJobPosts] = useState<number>(usage.monthlyJobPosts),
  const [budgetCapUsd, setBudgetCapUsd] = useState<number>(usage.budgetCapUsd),
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const save = async () => {
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/usage`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ monthlyJobPosts, budgetCapUsd }) }),
    setUsage({ monthlyJobPosts, budgetCapUsd })
  },
  return (
    <section>
      <h2>Usage limits</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12, maxWidth: 600 }}>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <label>
          <div>Monthly job posts</div>
          <input type="number" value={monthlyJobPosts} onChange={e => setMonthlyJobPosts(Number(e.target.value))} />
        </label>
        <label>
          <div>Budget cap (USD)</div>
          <input type="number" value={budgetCapUsd} onChange={e => setBudgetCapUsd(Number(e.target.value))} />
        </label>
      </div>
<<<<<<< HEAD
      <div
        style={{
          marginTop: 12
          display: 'flex'
          alignItems: 'center'
          gap: 12
        }}
      >
        <button onClick={save} style={{ padding: '0.5rem 0.75rem' }}>
          Save limits
        </button>
        <span>Seats used: {seatsUsed}</span>
      </div>
    </section>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function ActivityTab({ events }: { events: any[] }) {
  return (
    <section>
      <h2>Team activity</h2>
      <ul>
        {events.map(e => (
          <li key={e.id}>
            <span style={{ color: '#6b7280' }}>
              {new Date(e.timestampIso).toLocaleString()} —{' '}
<<<<<<< HEAD
            </span>            <strong>{e.actorEmail}</strong> {e.action}
=======
            </span>
            <strong>{e.actorEmail}</strong> {e.action}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          </li>
        ))}
      </ul>
    </section>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
<<<<<<< HEAD
      <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={save} style={{ padding: '0.5rem 0.75rem' }}>Save limits</button>
        <span>Seats used: {seatsUsed}</span>
      </div>
    </section>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function ActivityTab({ events }: { events: any[] }) {;
  return (;
    <section>;
      <h2>Team activity</h2>;
      <ul>;
        {events.map((e) => (;
          <li key={e.id}>;
            <span style={{ color: '#6b7280' }}>{new Date(e.timestampIso).toLocaleString()} — </span>;
            <strong>{e.actorEmail}</strong> {e.action  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </li>;
        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </ul>;
    </section>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
function BillingTab({ invoices }: { invoices: Invoice[] }) {
  return (
    <section>
      <h2>Billing & invoices</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
<<<<<<< HEAD
            <th
              style={{
                textAlign: 'left'
                padding: 8
                borderBottom: '1px solid #e5e7eb'
              }}
            >
              Invoice #
            </th>
            <th
              style={{
                textAlign: 'left'
                padding: 8
                borderBottom: '1px solid #e5e7eb'
              }}
            >
              Period
            </th>
            <th
              style={{
                textAlign: 'right'
                padding: 8
                borderBottom: '1px solid #e5e7eb'
              }}
            >
              Amount
            </th>
            <th
              style={{
                textAlign: 'center'
                padding: 8
                borderBottom: '1px solid #e5e7eb'
              }}
            >
              Status
            </th>
            <th
              style={{
                textAlign: 'right'
                padding: 8
                borderBottom: '1px solid #e5e7eb'
              }}
            >
              Actions
<<<<<<< HEAD
            </th>          </tr>
=======
<<<<<<< HEAD
            </th>
          </tr>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Invoice #</th>
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Period</th>
            <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Amount</th>
            <th style={{ textAlign: 'center', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Status</th>
            <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Actions</th>
          </tr>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
        </thead>
        <tbody>
          {invoices.map(inv => (
            <tr key={inv.id}>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.number}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.periodStartIso} → {inv.periodEndIso}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>${inv.amountUsd.toFixed(2)}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'center' }}>{inv.status}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>
                <a href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv.id}`} target="_blank" rel="noreferrer">Download PDF</Link>
              </td>
<<<<<<< HEAD
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                {inv.periodStartIso} → {inv.periodEndIso}
              </td>
              <td
                style={{
                  padding: 8
                  borderBottom: '1px solid #f3f4f6'
                  textAlign: 'right'
                }}
              >
                ${inv.amountUsd.toFixed(2)}
              </td>
              <td
                style={{
                  padding: 8
                  borderBottom: '1px solid #f3f4f6'
                  textAlign: 'center'
                }}
              >
                {inv.status}
              </td>
              <td
                style={{
                  padding: 8
                  borderBottom: '1px solid #f3f4f6'
                  textAlign: 'right'
                }}
              >
                <a
                  href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv.id}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  Download PDF
<<<<<<< HEAD
                </a>              </td>
=======
                </a>
              </td>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            </tr>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          ))}
        </tbody>
      </table>
    </section>
<<<<<<< HEAD
<<<<<<< HEAD
);
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
);
<<<<<<< HEAD
=======
            </tr>
=======

}
}
}
}
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </tbody>;
      </table>;
    </section>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
