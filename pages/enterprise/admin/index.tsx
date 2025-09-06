<<<<<<< HEAD

import {useEffect, useMemo, useState} from 'react';


import Link from 'next/link';


import { useEffect, useMemo, useState  } from 'react';
import {useEffect, useMemo, useState} from 'react';
import Link from 'next/link';

type Member = {
  id: string;
  name: string;
  email: string;

  status: string,;
};
const COMPANY_ID = 'cmp_acme';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



export default function CompanyAdmin() {;
  const [tab, setTab] = useState<'members' | 'usage' | 'activity' | 'billing'>(;
    'members';



<<<<<<< HEAD
  status: string,;
};
const COMPANY_ID = 'cmp_acme';
export default function CompanyAdmin() {;
  const [tab, setTab] = useState<'members' | 'usage' | 'activity' | 'billing'>(;
    'members';
  role: 'admin' | 'manager' | 'recruiter' | 'viewer'
}
type Usage = { monthlyJobPosts: number, budgetCapUsd: number }
type Invoice = {
  id: string;
  number: string;
  amountUsd: number;
  periodStartIso: string;
  periodEndIso: string;
  status: string
}
const COMPANY_ID = 'cmp_acme';
export default function CompanyAdmin() {
  const [tab, setTab] = useState<'members' | 'usage' | 'activity' | 'billing'>(
    'members'
=======

  id: string;
  number: string;
  amount_usd: number;
  periodStartIso: string;
  periodEndIso: string;

  status: string,;
};
const COMPANY_ID = 'cmp_acme';
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export default function CompanyAdmin() {
  const [tab, setTab] = useState<'members' | 'usage' | 'activity' | 'billing'>(
    'members';
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );  const [members, setMembers] = useState<Member[]>([]);
  const [usage, setUsage] = useState<Usage | null>(null);
  const [activity, setActivity] = useState<any[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  useEffect(() => {;
    fetch(`/api/enterprise/companies/${COMPANY_ID}/members`);
      .then(r => r && r.json());

<<<<<<< HEAD
  const seatsUsed = members && members.length;
  return (
    <main style={{ padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>;
      <header
        style={{
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
=======
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



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const seatsUsed = members.length;
  return (

    <main style={{ padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>
      <header style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
        <h1 style={{ margin: 0 }}>Company Admin</h1>
        <div style={{ marginLeft: 'auto' }}>
<Link href="/workspace/acme">Go to Workspace</Link>
        </div>

      </header>
      <nav style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  status: string,
}
const COMPANY_ID = 'cmp_acme';
;
export default /**
 * CompanyAdmin - Function description
 */
function CompanyAdmin() {
  const [tab, set_tab] = useState<'members' | 'usage' | 'activity' | 'billing'>(
    'members');  const [members, set_members] = useState < Member[]>([]);
  const [usage, set_usage] = useState < Usage | null>(null);
  const [activity, set_activity] = useState < any[]>([]);
  const [invoices, set_invoices] = useState < Invoice[]>([]);
;
  useEffect (() => {
    fetch (`/api / enterprise / companies/${COMPANY_ID}/members`);
      .then (r => r.json ());
      .then (set_members);
    fetch (`/api / enterprise / companies/${COMPANY_ID}/usage`);
      .then (r => r.json ());
      .then (set_usage);
    fetch (`/api / enterprise / companies/${COMPANY_ID}/activity`);
      .then (r => r.json ());
      .then (set_activity);
    fetch (`/api / enterprise / companies/${COMPANY_ID}/billing / invoices`);
      .then (r => r.json ());
      .then (set_invoices);  }, []);
;
  const seats_used = members.length;
;
  return (
    <main style={{ padding: '2rem', max_width: 1100, margin: '0 auto' }}>;
      <header;

        style={{
          margin_bottom: 16,
          display: 'flex',
          align_items: 'center',
          gap: 12,
        }}
      >;
        <h1 style={{ margin: 0 }}>Company Admin</h1>;
        <div style={{ margin_left: 'auto' }}>;
          <Link href='/workspace / acme'>Go to Workspace</Link>        </div>;
      </header>;
      <nav style={{ display: 'flex', gap: 8, margin_bottom: 16 }}>;
        {(['members', 'usage', 'activity', 'billing'] as const).map (t => (
          <button;
            key={t}
            on_click={() => set_tab (t)}
            style={{
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          marginBottom: 16,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>;
        <h1 style={{ margin: 0 }}>Company Admin</h1>;
        <div style={{ marginLeft: 'auto' }}>;
          <Link href='/workspace/acme'>Go to Workspace</Link>        </div>;
      </header>;
        {(['membersusageactivitybilling'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: '0.5rem 0.75rem', borderRadius: 8, border: '1px solid #e5e7eb', background: tab === t ? '#111827' : 'white', color: tab === t ? 'white' : '#111827' }}>{t}</button>
        ))}
      </nav>
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
              padding: '0.5rem 0.75rem',
              border_radius: 8,
              border: '1px solid #e5e7eb',
              background: tab === t ? '#111827' : 'white',
              color: tab === t ? 'white' : '#111827',
            }}
          >;
            {t}
          </button>        ))}
<<<<<<< HEAD
      </nav>;
      {tab === 'members' && (;
        <MembersTab members={members} setMembers={setMembers} />;
      )}
function MembersTab(): any ({;
  members,;
  setMembers,;
}: {;
  members: Member[];
=======


  members: Member[];


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const add = async () => {;
    const r = await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ name, email, role }),;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    });
    const created = await r && r.json();
    setMembers([created, ...members]);
    setName('');
    setEmail('');
    setRole('viewer');
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {tab === 'activity' && (
        <ActivityTab events={activity} />
      )}

<<<<<<< HEAD
      {tab === 'activity' && (
        <ActivityTab events={activity} />
      )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {tab === 'billing' && (
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

<<<<<<< HEAD

  const [name, setName] = useState('');
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
      .then(setInvoices);  }, []);
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
        <h1 style={{ margin: 0 }}>Company Admin</h1>
        <div style={{ marginLeft: 'auto' }}>
          <Link href="/workspace/acme">Go to Workspace</Link>
        </div>
      </header>
      <nav style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
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
          </button>        ))}
      </nav>
      {tab === 'members' && (
        <MembersTab members={members} setMembers={setMembers} />
      )}
      {tab === 'usage' && usage && (
        <UsageTab usage={usage} setUsage={setUsage} seatsUsed={seatsUsed} />
      )}
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
}) {  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<Member['role']>('viewer');
=======
  const [name, setName] = useState(''),
  const [email, setEmail] = useState(''),
  const [role, setRole] = useState<Member['role']>('viewer'),



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const add = async () => {
    const r = await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, role }) });
    const created = await r.json();
    setMembers([created, ...members]);
    setName(''), setEmail(''), setRole('viewer')
  };
  const remove = async (id: string) => {;
    await fetch(;
      `/api/enterprise/companies/${COMPANY_ID}/members?memberId=${id}`,;
      { method: 'DELETE' }
    );
    setMembers(members && members.filter(m => m && m.id !== id));
  };
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const changeRole = async (id: string, newRole: Member['role']) => {
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ memberId: id, role: newRole }) }),
    setMembers(members.map(m => m.id === id ? { ...m, role: newRole } : m))
  };
<<<<<<< HEAD
  return (
=======


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  set_members: (m: Member[]) => void;
}) {  const [name, set_name] = useState ('');
  const [email, set_email] = useState ('');
  const [role, set_role] = useState < Member['role']>('viewer');
;
  const add = async () => {
    const r = await fetch (`/api / enterprise / companies/${COMPANY_ID}/members`, {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ name, email, role }),
    });
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const created = await r.json ();
    set_members ([created, ...members]);
    set_name ('');
    set_email ('');
    set_role ('viewer');
  }
;
  const remove = async (id: string) => {
    await fetch (
      `/api / enterprise / companies/${COMPANY_ID}/members?member_id=${id}`,
      { method: 'DELETE' }
    );
    set_members (members.filter (m => m.id !== id));
  }
;
  const change_role = async (id: string, new_role: Member['role']) => {
    await fetch (`/api / enterprise / companies/${COMPANY_ID}/members`, {
      method: 'PATCH',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ member_id: id, role: new_role }),
    });
    set_members (members.map (m => (m.id === id ? { ...m, role: new_role } : m)));  }
;
  return (
    <section>;
      <h2 > Team members</h2>;
      <div style={{ display: 'flex', gap: 8, margin: '12px 0' }}>;
        <input;
          placeholder='Full name';
          value={name}
          on_change={e => set_name (e.target.value)}
        />;
        <input;
          placeholder='Email';
          value={email}
          on_change={e => set_email (e.target.value)}
        />;
        <select;
          value={role}
          on_change={e => set_role (e.target.value as Member['role'])}
        >;
          <option value='recruiter'>Recruiter</option>;
          <option value='manager'>Manager</option>;
          <option value='viewer'>Viewer</option>;
          <option value='admin'>Admin</option>;
        </select>;
        <button on_click={add} style={{ padding: '0.5rem 0.75rem' }}>;
          Add;
        </button>      </div>;
      <table style={{ width: '100%', border_collapse: 'collapse' }}>;
        <thead>;
          <tr>;
            <th;
              style={{
                text_align: 'left',
                padding: 8,
                border_bottom: '1px solid #e5e7eb',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              }}
            >;
              Name;
            </th>;
            <th;
              style={{
<<<<<<< HEAD
                text_align: 'left',
                padding: 8,
                border_bottom: '1px solid #e5e7eb',
=======

                text_align: 'left',
                padding: 8,
                border_bottom: '1px solid #e5e7eb',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              }}
            >;
              Email;
            </th>;
            <th;
              style={{
<<<<<<< HEAD
                text_align: 'left',
                padding: 8,
                border_bottom: '1px solid #e5e7eb',
=======

                text_align: 'left',
                padding: 8,
                border_bottom: '1px solid #e5e7eb',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              }}
            >;
              Role;
            </th>;
            <th;
              style={{
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

        </thead>
        <tbody>
          {members.map(m => (
            <tr key={m.id}>

                text_align: 'right',
                padding: 8,
                border_bottom: '1px solid #e5e7eb',
              }}
            >;
              Actions;
            </th>          </tr>;
        </thead>;
        <tbody>;
          {members.map (m => (
            <tr key={m.id}>;
              <td style={{ padding: 8, border_bottom: '1px solid #f3f4f6' }}>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {m.name}
              </td>;
              <td style={{ padding: 8, border_bottom: '1px solid #f3f4f6' }}>;
                {m.email}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <select
                  value={m && m.role}
                  onChange={e =>;
                    changeRole(m && m.id, e && e.target.value as Member['role']);
              </td>;
              <td style={{ padding: 8, border_bottom: '1px solid #f3f4f6' }}>;
                <select;
                  value={m.role}
                  on_change={e =>;
                    change_role (m.id, e.target.value as Member['role']);
                  }
                >;
                  <option value='recruiter'>Recruiter</option>;
                  <option value='manager'>Manager</option>;
                  <option value='viewer'>Viewer</option>;
                  <option value='admin'>Admin</option>;
                </select>;
              </td>;
<<<<<<< HEAD
              <td;
                style={{
                  padding: 8,
                  border_bottom: '1px solid #f3f4f6',
                  text_align: 'right',
                }}
              >;
                <button;
                  on_click={() => remove (m.id)}
=======

              <td;

                style={{

                  padding: 8,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  style={{ color: '#b91c1c' }}
                >;
                  Remove;
                </button>              </td>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </tr>))}
        </tbody>;
      </table>;
    </section>);
;
function UsageTab ({
  usage,
  set_usage,
  seats_used,
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}: {
function UsageTab(): any ({;
  usage,;
  setUsage,;
  seatsUsed,;
}: {;
  usage: Usage;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [budgetCapUsd, setBudgetCapUsd] = useState<number>(usage && usage.budgetCapUsd);
  const save = async () => {;
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/usage`, {;
      method: 'PATCH',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ monthlyJobPosts, budgetCapUsd }),;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    });
    setUsage({ monthlyJobPosts, budgetCapUsd });  }
  return (
    <section>;
      <h2>Usage limits</h2>;
      <div
        style={{
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: 12,
          maxWidth: 600,
        }}>;
        <label>;
          <div>Monthly job posts</div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    setMembers(members.map(m => (m.id === id ? { ...m, role: newRole } : m)));  }

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                textAlign: 'right'
                padding: 8
                borderBottom: '1px solid #e5e7eb'
              }}
            >
              Actions
            </th>          </tr>
<<<<<<< HEAD
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
                </button>              </td>
            </tr>
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
    setUsage({ monthlyJobPosts, budgetCapUsd });  }

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
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>
                <button onClick={() => remove(m.id)} style={{ color: '#b91c1c' }}>Remove</button>
              </td>
            </tr>
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
  const save = async () => {
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/usage`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ monthlyJobPosts, budgetCapUsd }) }),
    setUsage({ monthlyJobPosts, budgetCapUsd })
  },
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
  );
function ActivityTab({ events }: { events: any[] }) {
  return (
    <section>
      <h2>Team activity</h2>
      <ul>
        {events.map((e) => (
          <li key={e.id}>
            <span style={{ color: '#6b7280' }}>
              {new Date(e.timestampIso).toLocaleString()} —{' '}
            </span>            <strong>{e.actorEmail}</strong> {e.action}
          </li>
        ))}
      </ul>
    </section>
  );
      <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={save} style={{ padding: '0.5rem 0.75rem' }}>Save limits</button>
        <span>Seats used: {seatsUsed}</span>
      </div>
    </section>
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
function BillingTab({ invoices }: { invoices: Invoice[] }) {
  return (
    <section>
      <h2>Billing & invoices</h2>
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
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Invoice #</th>
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Period</th>
            <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Amount</th>
            <th style={{ textAlign: 'center', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Status</th>
            <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Actions</th>
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
                <a href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv.id}`} target="_blank" rel="noreferrer">Download PDF</Link>
              </td>
=======
=======
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{m.name}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{m.email}</td>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                </a>              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
);
            </tr>

}
}
}
}
}
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


  const save = async () => {
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/usage`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ monthlyJobPosts, budgetCapUsd }) }),
    setUsage({ monthlyJobPosts, budgetCapUsd })
  },
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
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </thead>
        <tbody>
          {invoices.map(inv => (
            <tr key={inv.id}>
<<<<<<< HEAD
=======

  set_usage: (u: Usage) => void;
  seats_used: number;
}) {
  const [monthlyJobPosts, setMonthlyJobPosts] = useState < number>(
    usage.monthlyJobPosts);
  const [budgetCapUsd, setBudgetCapUsd] = useState < number>(usage.budgetCapUsd);
;
  const save = async () => {
    await fetch (`/api / enterprise / companies/${COMPANY_ID}/usage`, {
      method: 'PATCH',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ monthlyJobPosts, budgetCapUsd }),
    });
    set_usage ({ monthlyJobPosts, budgetCapUsd });  }
;
  return (
    <section>;
      <h2 > Usage limits</h2>;
      <div;
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat (2, minmax (0, 1fr))',
          gap: 12,
          max_width: 600,
        }}
      >;
        <label>;
          <div > Monthly job posts</div>;
          <input;
            type='number';
            value={monthlyJobPosts}
            on_change={e => setMonthlyJobPosts (Number (e.target.value))}
          />;
        </label>;
        <label>;
          <div > Budget cap (USD)</div>;
          <input;
            type='number';
            value={budgetCapUsd}
            on_change={e => setBudgetCapUsd (Number (e.target.value))}
          />;
        </label>;
      </div>;
      <div;
        style={{
          margin_top: 12,
          display: 'flex',
          align_items: 'center',
          gap: 12,
        }}
      >;
        <button on_click={save} style={{ padding: '0.5rem 0.75rem' }}>;
          Save limits;
        </button>;
        <span > Seats used: {seats_used}</span>;
      </div>;
    </section>);
/**
 * ActivityTab - Function description
 */
function ActivityTab() {
  return (
    <section>;
      <h2 > Team activity</h2>;
      <ul>;
        {events.map (e => (
          <li key={e.id}>;
            <span style={{ color: '#6b7280' }}>;
              {new Date (e.timestamp_iso).toLocaleString ()} —{' '}
            </span>            <strong>{e.actor_email}</strong> {e.action}
          </li>))}
      </ul>;
    </section>);
/**
 * BillingTab - Function description
 */
function BillingTab() {
  return (
    <section>;
      <h2 > Billing & invoices</h2>;
      <table style={{ width: '100%', border_collapse: 'collapse' }}>;
        <thead>;
          <tr>;
            <th;
              style={{
                text_align: 'left',
                padding: 8,
                border_bottom: '1px solid #e5e7eb',
              }}
            >;
              Invoice #;
            </th>;
            <th;
              style={{
                text_align: 'left',
                padding: 8,
                border_bottom: '1px solid #e5e7eb',
              }}
            >;
              Period;
            </th>;
            <th;
              style={{
                text_align: 'right',
                padding: 8,
                border_bottom: '1px solid #e5e7eb',
              }}
            >;
              Amount;
            </th>;
            <th;
              style={{
                text_align: 'center',
                padding: 8,
                border_bottom: '1px solid #e5e7eb',
              }}
            >;
              Status;
            </th>;
            <th;
              style={{
                text_align: 'right',
                padding: 8,
                border_bottom: '1px solid #e5e7eb',
              }}
            >;
              Actions;
            </th>          </tr>;
        </thead>;
        <tbody>;
          {invoices.map (inv => (
            <tr key={inv.id}>;
              <td style={{ padding: 8, border_bottom: '1px solid #f3f4f6' }}>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {inv.number}
              </td>;
              <td style={{ padding: 8, border_bottom: '1px solid #f3f4f6' }}>;
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.number}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.periodStartIso} → {inv.periodEndIso}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>${inv.amountUsd.toFixed(2)}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'center' }}>{inv.status}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>
                <a href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv.id}`} target="_blank" rel="noreferrer">Download PDF</Link>
              </td>
<<<<<<< HEAD
                  padding: 8,
                  border_bottom: '1px solid #f3f4f6',
                  text_align: 'right',
=======
<<<<<<< HEAD
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {inv.periodStartIso} → {inv.periodEndIso}
              </td>;
              <td;
                style={{

                  padding: 8,
                  border_bottom: '1px solid #f3f4f6',
                  text_align: 'right',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                }}
              >;
                ${inv.amount_usd.to_fixed (2)}
              </td>;
              <td;
                style={{
<<<<<<< HEAD
                  padding: 8,
                  border_bottom: '1px solid #f3f4f6',
                  text_align: 'center',
=======

                  padding: 8,
                  border_bottom: '1px solid #f3f4f6',
                  text_align: 'center',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                }}
              >;
                {inv.status}
              </td>;
              <td;
                style={{
                  padding: 8
                  borderBottom: '1px solid #f3f4f6'
                  textAlign: 'right'
                }}
              >
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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


                <a
                  href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv && inv.id}`}
                  target='_blank'
                  rel='noreferrer'>;
                  Download PDF;
                </a>              </td>;
            </tr>;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.number}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.periodStartIso} → {inv.periodEndIso}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>${inv.amountUsd.toFixed(2)}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'center' }}>{inv.status}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>
<a href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv.id}`} target="_blank" rel="noreferrer">Download PDF</a>
              </td>
<<<<<<< HEAD
                <a
                  href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv.id}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  Download PDF
                </a>              </td>
            </tr>
        </tbody>
      </table>
    </section>
);
            </tr>

}
}
}
}
}
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
=======

=======
                  border_bottom: '1px solid #f3f4f6',
                  text_align: 'right',
                }}
              >;
                <a;
                  href={`/api / enterprise / companies/${COMPANY_ID}/billing / invoices/${inv.id}`}
                  target='_blank';
                  rel='noreferrer';
                >;
                  Download PDF;
                </a>              </td>;
            </tr>))}
        </tbody>;
      </table>;
    </section>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
