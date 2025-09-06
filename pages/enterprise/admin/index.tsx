import { useEffect, useMemo, useState  } from 'react';
import Link from 'next/link';
<<<<<<< HEAD

type Member = {;
  id: string;
  name: string;
  email: string;
<<<<<<< HEAD
  role: 'admin' | 'manager' | 'recruiter' | 'viewer'
}
type Usage = { monthlyJobPosts: number, budgetCapUsd: number }
type Invoice = {
=======
  role: 'admin' | 'manager' | 'recruiter' | 'viewer',;
};

type Usage = { monthlyJobPosts: number, budgetCapUsd: number };

type Invoice = {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  id: string;
  number: string;
  amountUsd: number;
  periodStartIso: string;
  periodEndIso: string;
<<<<<<< HEAD
  status: string
}
const COMPANY_ID = 'cmp_acme';
export default function CompanyAdmin() {
  const [tab, setTab] = useState<'members' | 'usage' | 'activity' | 'billing'>(
    'members'
=======
  status: string,;
};
const COMPANY_ID = 'cmp_acme';

export default function CompanyAdmin() {;
  const [tab, setTab] = useState<'members' | 'usage' | 'activity' | 'billing'>(;
    'members';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );  const [members, setMembers] = useState<Member[]>([]);
  const [usage, setUsage] = useState<Usage | null>(null);
  const [activity, setActivity] = useState<any[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
<<<<<<< HEAD
  useEffect(() => {
    fetch(`/api/enterprise/companies/${COMPANY_ID}/members`)
      .then(r => r.json())
=======

  useEffect(() => {;
    fetch(`/api/enterprise/companies/${COMPANY_ID}/members`);
      .then(r => r && r.json());
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      .then(setMembers);
    fetch(`/api/enterprise/companies/${COMPANY_ID}/usage`);
      .then(r => r && r.json());
      .then(setUsage);
    fetch(`/api/enterprise/companies/${COMPANY_ID}/activity`);
      .then(r => r && r.json());
      .then(setActivity);
    fetch(`/api/enterprise/companies/${COMPANY_ID}/billing/invoices`);
      .then(r => r && r.json());
      .then(setInvoices);  }, []);
<<<<<<< HEAD
  const seatsUsed = members.length;
=======

  const seatsUsed = members && members.length;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <main style={{ padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>;
      <header
        style={{
<<<<<<< HEAD
          marginBottom: 16
          display: 'flex'
          alignItems: 'center'
          gap: 12
        }}
      >
        <h1 style={{ margin: 0 }}>Company Admin</h1>
        <div style={{ marginLeft: 'auto' }}>
          <Link href='/workspace/acme'>Go to Workspace</Link>        </div>
=======
type Member = { id: string, name: string, email: string, role: 'admin' | 'manager' | 'recruiter' | 'viewer' },
type Usage = { monthlyJobPosts: number, budgetCapUsd: number },
type Invoice = { id: string, number: string, amountUsd: number, periodStartIso: string, periodEndIso: string, status: string },

const COMPANY_ID = 'cmp_acme';

export default function CompanyAdmin() {
  const [tab, setTab] = useState<'members' | 'usage' | 'activity' | 'billing'>('members');
  const [members, setMembers] = useState<Member[]>([]);
  const [usage, setUsage] = useState<Usage | null>(null);
  const [activity, setActivity] = useState<any[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    fetch(`/api/enterprise/companies/${COMPANY_ID}/members`).then(r => r.json()).then(setMembers);
    fetch(`/api/enterprise/companies/${COMPANY_ID}/usage`).then(r => r.json()).then(setUsage);
    fetch(`/api/enterprise/companies/${COMPANY_ID}/activity`).then(r => r.json()).then(setActivity);
    fetch(`/api/enterprise/companies/${COMPANY_ID}/billing/invoices`).then(r => r.json()).then(setInvoices)
  }, []);

  const seatsUsed = members.length;

  return (
    <main style={{ padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>
      <header style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
        <h1 style={{ margin: 0 }}>Company Admin</h1>
        <div style={{ marginLeft: 'auto' }}>
          <Link href="/workspace/acme">Go to Workspace</Link>
        </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
=======
          marginBottom: 16,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>;
        <h1 style={{ margin: 0 }}>Company Admin</h1>;
        <div style={{ marginLeft: 'auto' }}>;
          <Link href='/workspace/acme'>Go to Workspace</Link>        </div>;
      </header>;
=======
        {(['membersusageactivitybilling'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: '0.5rem 0.75rem', borderRadius: 8, border: '1px solid #e5e7eb', background: tab === t ? '#111827' : 'white', color: tab === t ? 'white' : '#111827' }}>{t}</button>
        ))}
      </nav>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

      <nav style={{ display: 'flex', gap: 8, marginBottom: 16 }}>;
        {(['members', 'usage', 'activity', 'billing'] as const).map(t => (;
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{;
              padding: '0 && 0.5rem 0 && 0.75rem',;
              borderRadius: 8,;
              border: '1px solid #e5e7eb',;
              background: tab === t ? '#111827' : 'white',;
              color: tab === t ? 'white' : '#111827',;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            }}
          >;
            {t}
          </button>        ))}
<<<<<<< HEAD
      </nav>
      {tab === 'members' && (
        <MembersTab members={members} setMembers={setMembers} />
      )}
      {tab === 'usage' && usage && (
        <UsageTab usage={usage} setUsage={setUsage} seatsUsed={seatsUsed} />
=======
      </nav>;

      {tab === 'members' && (;
        <MembersTab members={members} setMembers={setMembers} />;
      )}

<<<<<<< HEAD
      {tab === 'usage' && usage && (;
        <UsageTab usage={usage} setUsage={setUsage} seatsUsed={seatsUsed} />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      )}
      {tab === 'activity' && <ActivityTab events={activity} />}
      {tab === 'billing' && <BillingTab invoices={invoices} />}
    </main>;
  );
<<<<<<< HEAD
function MembersTab({
  members
  setMembers
}: {
=======

function MembersTab(): any ({;
  members,;
  setMembers,;
}: {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  members: Member[];
  setMembers: (m: Member[]) => void;
}) {  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<Member['role']>('viewer');
<<<<<<< HEAD
  const add = async () => {
    const r = await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ name, email, role })
=======

  const add = async () => {;
    const r = await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ name, email, role }),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    const created = await r && r.json();
    setMembers([created, ...members]);
    setName('');
    setEmail('');
    setRole('viewer');
<<<<<<< HEAD
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
    setMembers(members.map(m => (m.id === id ? { ...m, role: newRole } : m)));  }
=======
=======
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<Member['role']>('viewer');

  const add = async () => {
    const r = await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, role }) });
    const created = await r.json();
    setMembers([created, ...members]);
    setName(''), setEmail(''), setRole('viewer')
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  };

  const remove = async (id: string) => {;
    await fetch(;
      `/api/enterprise/companies/${COMPANY_ID}/members?memberId=${id}`,;
      { method: 'DELETE' }
    );
    setMembers(members && members.filter(m => m && m.id !== id));
  };

<<<<<<< HEAD
  const changeRole = async (id: string, newRole: Member['role']) => {;
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, {;
      method: 'PATCH',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ memberId: id, role: newRole }),;
    });
    setMembers(members && members.map(m => (m && m.id === id ? { ...m, role: newRole } : m)));  };
=======
  const changeRole = async (id: string, newRole: Member['role']) => {
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ memberId: id, role: newRole }) }),
    setMembers(members.map(m => m.id === id ? { ...m, role: newRole } : m))
  };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
<<<<<<< HEAD
    <section>;
      <h2>Team members</h2>;
      <div style={{ display: 'flex', gap: 8, margin: '12px 0' }}>;
        <input
          placeholder='Full name'
          value={name}
          onChange={e => setName(e && e.target.value)}
        />;
        <input
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e && e.target.value)}
        />;
        <select
          value={role}
<<<<<<< HEAD
          onChange={e => setRole(e.target.value as Member['role'])}
        >
          <option value='recruiter'>Recruiter</option>
          <option value='manager'>Manager</option>
          <option value='viewer'>Viewer</option>
          <option value='admin'>Admin</option>
        </select>
        <button onClick={add} style={{ padding: '0.5rem 0.75rem' }}>
          Add
        </button>      </div>
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
            </th>          </tr>
=======
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
        <button onClick={add} style={{ padding: '0.5rem 0.75rem' }}>Add</button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Name</th>
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Email</th>
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Role</th>
            <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Actions</th>
          </tr>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        </thead>
        <tbody>
          {members.map(m => (
            <tr key={m.id}>
<<<<<<< HEAD
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                {m.name}
              </td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                {m.email}
              </td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
=======
          onChange={e => setRole(e && e.target.value as Member['role'])}
        >;
          <option value='recruiter'>Recruiter</option>;
          <option value='manager'>Manager</option>;
          <option value='viewer'>Viewer</option>;
          <option value='admin'>Admin</option>;
        </select>;
        <button onClick={add} style={{ padding: '0 && 0.5rem 0 && 0.75rem' }}>;
          Add;
        </button>      </div>;

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>;
        <thead>;
          <tr>;
            <th
              style={{
                textAlign: 'left',
                padding: 8,
                borderBottom: '1px solid #e5e7eb',
              }}>;
              Name;
            </th>;
            <th
              style={{
                textAlign: 'left',
                padding: 8,
                borderBottom: '1px solid #e5e7eb',
              }}>;
              Email;
            </th>;
            <th
              style={{
                textAlign: 'left',
                padding: 8,
                borderBottom: '1px solid #e5e7eb',
              }}>;
              Role;
            </th>;
            <th
              style={{
                textAlign: 'right',
                padding: 8,
                borderBottom: '1px solid #e5e7eb',
              }}>;
              Actions;
            </th>          </tr>;
        </thead>;
        <tbody>;
          {members && members.map(m => (;
            <tr key={m && m.id}>;
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>;
                {m && m.name}
              </td>;
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>;
                {m && m.email}
              </td>;
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <select
                  value={m && m.role}
                  onChange={e =>;
                    changeRole(m && m.id, e && e.target.value as Member['role']);
                  }
                >;
                  <option value='recruiter'>Recruiter</option>;
                  <option value='manager'>Manager</option>;
                  <option value='viewer'>Viewer</option>;
                  <option value='admin'>Admin</option>;
                </select>;
              </td>;
              <td
                style={{
<<<<<<< HEAD
                  padding: 8
                  borderBottom: '1px solid #f3f4f6'
                  textAlign: 'right'
                }}
              >
=======
                  padding: 8,
                  borderBottom: '1px solid #f3f4f6',
                  textAlign: 'right',
                }}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <button
                  onClick={() => remove(m && m.id)}
                  style={{ color: '#b91c1c' }}
                >;
                  Remove;
                </button>              </td>;
            </tr>;
          ))}
        </tbody>;
      </table>;
    </section>;
  );
<<<<<<< HEAD
function UsageTab({
  usage
  setUsage
  seatsUsed
}: {
=======

function UsageTab(): any ({;
  usage,;
  setUsage,;
  seatsUsed,;
}: {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  usage: Usage;
  setUsage: (u: Usage) => void;
  seatsUsed: number;
}) {;
  const [monthlyJobPosts, setMonthlyJobPosts] = useState<number>(;
    usage && usage.monthlyJobPosts;
  );
<<<<<<< HEAD
  const [budgetCapUsd, setBudgetCapUsd] = useState<number>(usage.budgetCapUsd);
  const save = async () => {
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/usage`, {
      method: 'PATCH'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ monthlyJobPosts, budgetCapUsd })
=======
  const [budgetCapUsd, setBudgetCapUsd] = useState<number>(usage && usage.budgetCapUsd);

  const save = async () => {;
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/usage`, {;
      method: 'PATCH',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ monthlyJobPosts, budgetCapUsd }),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    setUsage({ monthlyJobPosts, budgetCapUsd });  }

  return (
    <section>;
      <h2>Usage limits</h2>;
      <div
        style={{
<<<<<<< HEAD
          display: 'grid'
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
          gap: 12
          maxWidth: 600
        }}
      >
        <label>
          <div>Monthly job posts</div>
=======
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: 12,
          maxWidth: 600,
        }}>;
        <label>;
          <div>Monthly job posts</div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          <input
            type='number'
            value={monthlyJobPosts}
            onChange={e => setMonthlyJobPosts(Number(e && e.target.value))}
          />;
        </label>;
        <label>;
          <div>Budget cap (USD)</div>;
          <input
            type='number'
            value={budgetCapUsd}
            onChange={e => setBudgetCapUsd(Number(e && e.target.value))}
          />;
        </label>;
      </div>;
      <div
        style={{
<<<<<<< HEAD
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
=======
          marginTop: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>;
        <button onClick={save} style={{ padding: '0 && 0.5rem 0 && 0.75rem' }}>;
          Save limits;
        </button>;
        <span>Seats used: {seatsUsed}</span>;
      </div>;
    </section>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
function ActivityTab(): any ({ events }: { events: any[] }) {;
  return (
    <section>;
      <h2>Team activity</h2>;
      <ul>;
        {events && events.map(e => (;
          <li key={e && e.id}>;
            <span style={{ color: '#6b7280' }}>;
              {new Date(e && e.timestampIso).toLocaleString()} —{' '}
            </span>            <strong>{e && e.actorEmail}</strong> {e && e.action}
          </li>;
        ))}
      </ul>;
    </section>;
  );
function BillingTab(): any ({ invoices }: { invoices: Invoice[] }) {;
  return (
    <section>;
      <h2>Billing & invoices</h2>;
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>;
        <thead>;
          <tr>;
            <th
              style={{
<<<<<<< HEAD
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
            </th>          </tr>
=======
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
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>
                <button onClick={() => remove(m.id)} style={{ color: '#b91c1c' }}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

function UsageTab({ usage, setUsage, seatsUsed }: { usage: Usage, setUsage: (u: Usage) => void, seatsUsed: number }) {
  const [monthlyJobPosts, setMonthlyJobPosts] = useState<number>(usage.monthlyJobPosts);
  const [budgetCapUsd, setBudgetCapUsd] = useState<number>(usage.budgetCapUsd);

  const save = async () => {
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/usage`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ monthlyJobPosts, budgetCapUsd }) });
    setUsage({ monthlyJobPosts, budgetCapUsd })
  };

  return (
    <section>
      <h2>Usage limits</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12, maxWidth: 600 }}>
        <label>
          <div>Monthly job posts</div>
          <input type="number" value={monthlyJobPosts} onChange={e => setMonthlyJobPosts(Number(e.target.value))} />
        </label>
        <label>
          <div>Budget cap (USD)</div>
          <input type="number" value={budgetCapUsd} onChange={e => setBudgetCapUsd(Number(e.target.value))} />
        </label>
      </div>
      <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={save} style={{ padding: '0.5rem 0.75rem' }}>Save limits</button>
        <span>Seats used: {seatsUsed}</span>
      </div>
    </section>
  )
}

function ActivityTab({ events }: { events: any[] }) {
  return (
    <section>
      <h2>Team activity</h2>
      <ul>
        {events.map((e) => (
          <li key={e.id}>
            <span style={{ color: '#6b7280' }}>{new Date(e.timestampIso).toLocaleString()} — </span>
            <strong>{e.actorEmail}</strong> {e.action}
          </li>
        ))}
      </ul>
    </section>
  )
}

function BillingTab({ invoices }: { invoices: Invoice[] }) {
  return (
    <section>
      <h2>Billing & invoices</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Invoice #</th>
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Period</th>
            <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Amount</th>
            <th style={{ textAlign: 'center', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Status</th>
            <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Actions</th>
          </tr>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        </thead>
        <tbody>
          {invoices.map(inv => (
            <tr key={inv.id}>
<<<<<<< HEAD
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                {inv.number}
              </td>
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
=======
                textAlign: 'left',
                padding: 8,
                borderBottom: '1px solid #e5e7eb',
              }}>;
              Invoice #;
            </th>;
            <th
              style={{
                textAlign: 'left',
                padding: 8,
                borderBottom: '1px solid #e5e7eb',
              }}>;
              Period;
            </th>;
            <th
              style={{
                textAlign: 'right',
                padding: 8,
                borderBottom: '1px solid #e5e7eb',
              }}>;
              Amount;
            </th>;
            <th
              style={{
                textAlign: 'center',
                padding: 8,
                borderBottom: '1px solid #e5e7eb',
              }}>;
              Status;
            </th>;
            <th
              style={{
                textAlign: 'right',
                padding: 8,
                borderBottom: '1px solid #e5e7eb',
              }}>;
              Actions;
            </th>          </tr>;
        </thead>;
        <tbody>;
          {invoices && invoices.map(inv => (;
            <tr key={inv && inv.id}>;
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>;
                {inv && inv.number}
              </td>;
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>;
                {inv && inv.periodStartIso} → {inv && inv.periodEndIso}
              </td>;
              <td
                style={{
                  padding: 8,
                  borderBottom: '1px solid #f3f4f6',
                  textAlign: 'right',
                }}>;
                ${inv && inv.amountUsd.toFixed(2)}
              </td>;
              <td
                style={{
                  padding: 8,
                  borderBottom: '1px solid #f3f4f6',
                  textAlign: 'center',
                }}>;
                {inv && inv.status}
              </td>;
              <td
                style={{
                  padding: 8,
                  borderBottom: '1px solid #f3f4f6',
                  textAlign: 'right',
                }}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <a
                  href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv && inv.id}`}
                  target='_blank'
                  rel='noreferrer'>;
                  Download PDF;
                </a>              </td>;
            </tr>;
=======
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.number}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.periodStartIso} → {inv.periodEndIso}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>${inv.amountUsd.toFixed(2)}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'center' }}>{inv.status}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>
                <a href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv.id}`} target="_blank" rel="noreferrer">Download PDF</a>
              </td>
            </tr>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          ))}
<<<<<<< HEAD
        </tbody>
      </table>
    </section>
<<<<<<< HEAD
);
=======
        </tbody>;
      </table>;
    </section>;
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
