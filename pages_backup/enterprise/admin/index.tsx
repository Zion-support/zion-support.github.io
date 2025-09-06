<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useMemo, useState  } from 'react';
import {useEffect, useMemo, useState} from 'react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


import {useEffect, useMemo, useState} from 'react';


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import Link from 'next/link';

type Member = {
  id: string;
<<<<<<< HEAD
  name: string;
  email: string;

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
import Link from 'next/link';
type Member = any;
type Member = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'recruiter' | 'viewer'
}
type Usage = { monthlyJobPosts: number, budgetCapUsd: number }
type Invoice = {
origin/cursor/automate-test-improve-and-merge-code-2533
  id: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  number: string;
  amount_usd: number;
  periodStartIso: string;
  periodEndIso: string;
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  status: string,;
};
const COMPANY_ID = 'cmp_acme';



export default function CompanyAdmin() {;
  const [tab, setTab] = useState<'members' | 'usage' | 'activity' | 'billing'>(;
    'members';
<<<<<<< HEAD
=======



<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  );  const [members, setMembers] = useState<Member[]>([]);
  const [usage, setUsage] = useState<Usage | null>(null);
  const [activity, setActivity] = useState<any[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
    fetch(`/api/enterprise/companies/${COMPANY_ID}/members`)
      .then(r => r.json())
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
  status: string;
};

const COMPANY_ID = 'cmp_acme';
export default function CompanyAdmin() {
const [tab, setTab] = useState<'members' | 'usage' | 'activity' | 'billing'>(
    'members'
  );
  const [members, setMembers] = useState<Member[]>([]);
  const [usage, setUsage] = useState<Usage | null>(null);
  const [activity, setActivity] = useState<any[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  useEffect(() => {
fetch(`/api/enterprise/companies/${COMPANY_ID}/members`)
      .then(r => r.json())
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
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
  const seatsUsed = members.length;
  return (
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      .then(setInvoices);
  }, []);

  const seatsUsed = members.length;
  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
<<<<<<< HEAD
<<<<<<< HEAD
  return (
=======
=======


  useEffect(() => {;
    fetch(`/api/enterprise/companies/${COMPANY_ID}/members`);
      .then(r => r && r.json());

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



  const seatsUsed = members.length;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return (

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <main style={{ padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>
=======
  return (

    <main style={{ padding: '2rem', maxWidth: 1100, margin: '0 auto' }}>
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <header style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>

        <h1 style={{ margin: 0 }}>Company Admin</h1>
        <div style={{ marginLeft: 'auto' }}>
          <Link href="/workspace/acme">Go to Workspace</Link>
        </div>
<<<<<<< HEAD
      </header>
      <nav style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
<<<<<<< HEAD

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

=======
<<<<<<< HEAD
=======

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


      <nav style={{ display: 'flex', gap: 8, marginBottom: 16 }}>;
        {(['members', 'usage', 'activity', 'billing'] as const).map(t => (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

      </header>
      <nav style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
<header
        style={{
          marginBottom: 16
          display: 'flex'
          alignItems: 'center'
          gap: 12
        }}
      >
        <h1 style={{ margin: 0 }}>Company Admin</h1>
        <div style={{ marginLeft: 'auto' }}>
          <Link href='/workspace/acme'>Go to Workspace</Link>
        </div>
      </header>
      <nav style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
{(['members', 'usage', 'activity', 'billing'] as const).map(t => (
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            }}
          >;
            {t}
          </button>        ))}
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  members: Member[];
  setMembers: (m: Member[]) => void;
}) {  const [name, setName] = useState('');
=======
            }}
          >;
            {t}
          </button>
        ))}
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
origin/cursor/automate-test-improve-and-merge-code-2533
  members: Member[];
  setMembers: (m: Member[]) => void;
}) {
  const [name, setName] = useState('');
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<Member['role']>('viewer');
  const add = async () => {
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    const r = await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ name, email, role })
=======
=======


  members: Member[];


  const add = async () => {;
    const r = await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ name, email, role }),;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
const r = await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, role }),
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
    });
    const created = await r && r.json();
    setMembers([created, ...members]);
    setName('');
    setEmail('');
    setRole('viewer');
<<<<<<< HEAD
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

<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      {tab === 'activity' && (
        <ActivityTab events={activity} />
      )}

      {tab === 'billing' && (
        <BillingTab invoices={invoices} />
      )}
    </main>
  )
<<<<<<< HEAD
=======



=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
<<<<<<< HEAD
    setMembers(members && members.filter(m => m && m.id !== id));
  };

<<<<<<< HEAD
=======

  const changeRole = async (id: string, newRole: Member['role']) => {
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ memberId: id, role: newRole }) }),
    setMembers(members.map(m => m.id === id ? { ...m, role: newRole } : m))
  };


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
    setMembers(members && members.filter(m => m && m.id !== id));
  };

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (

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
<<<<<<< HEAD
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th
              style={{
                textAlign: 'left'
                padding: 8
                borderBottom: '1px solid #e5e7eb'
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

              }}
            >;
              Name;
            </th>;
            <th;
              style={{

                text_align: 'left',
                padding: 8,
                border_bottom: '1px solid #e5e7eb',

              }}
            >;
              Email;
            </th>;
            <th;
              style={{

                text_align: 'left',
                padding: 8,
                border_bottom: '1px solid #e5e7eb',

              }}
            >;
              Role;
            </th>;
            <th;
              style={{

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
        </button>      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
    setMembers(members.filter(m => m.id !== id));
  }
  const changeRole = async (id: string, newRole: Member['role']) => {
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, {
      method: 'PATCH'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ memberId: id, role: newRole })
    });
    setMembers(members.map(m => (m.id === id ? { ...m, role: newRole } : m)));
  };

  return (
    <section>
      <h2>Team members</h2>
      <div style={{ display: 'flex', gap: 8, margin: '12px 0' }}>
<input
          placeholder='Full name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <select
          value={role}
          onChange={e => setRole(e.target.value as Member['role'])}
        >
          <option value='recruiter'>Recruiter</option>
          <option value='manager'>Manager</option>
          <option value='viewer'>Viewer</option>
          <option value='admin'>Admin</option>
        </select>
        <button onClick={add} style={{ padding: '0.5rem 0.75rem' }}>
          Add
        </button>
      </div>

origin/cursor/automate-test-improve-and-merge-code-2533
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
<th
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              style={{
                textAlign: 'left'
                padding: 8
                borderBottom: '1px solid #e5e7eb'
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

        </thead>
        <tbody>
          {members.map(m => (
            <tr key={m.id}>

                text_align: 'right',
                padding: 8,
                border_bottom: '1px solid #e5e7eb',
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              }}
            >;
              Actions;
            </th>          </tr>;
        </thead>;
        <tbody>;
          {members.map (m => (
            <tr key={m.id}>;
              <td style={{ padding: 8, border_bottom: '1px solid #f3f4f6' }}>;

                {m.name}
              </td>;
              <td style={{ padding: 8, border_bottom: '1px solid #f3f4f6' }}>;
                {m.email}
<<<<<<< HEAD
<<<<<<< HEAD
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <select
                  value={m && m.role}
                  onChange={e =>;
                    changeRole(m && m.id, e && e.target.value as Member['role']);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </td>;
              <td style={{ padding: 8, border_bottom: '1px solid #f3f4f6' }}>;
                <select;
                  value={m.role}
                  on_change={e =>;
                    change_role (m.id, e.target.value as Member['role']);
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  }
                >;
                  <option value='recruiter'>Recruiter</option>;
                  <option value='manager'>Manager</option>;
                  <option value='viewer'>Viewer</option>;
                  <option value='admin'>Admin</option>;
                </select>;
              </td>;

              <td;

                style={{

                  padding: 8,

                  style={{ color: '#b91c1c' }}
                >;
                  Remove;
                </button>              </td>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

            </tr>))}
        </tbody>;
      </table>;
    </section>);
;
function UsageTab ({
  usage,
  set_usage,
  seats_used,

}: {
function UsageTab(): any ({;
  usage,;
  setUsage,;
  seatsUsed,;
}: {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  usage: Usage;

  const [budgetCapUsd, setBudgetCapUsd] = useState<number>(usage && usage.budgetCapUsd);

  const save = async () => {;
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/usage`, {;
      method: 'PATCH',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ monthlyJobPosts, budgetCapUsd }),;

    });
    setUsage({ monthlyJobPosts, budgetCapUsd });  }

  return (
    <section>;
      <h2>Usage limits</h2>;
      <div
        style={{

          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: 12,
          maxWidth: 600,
        }}>;
        <label>;
          <div>Monthly job posts</div>;

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

                textAlign: 'right'
                padding: 8
                borderBottom: '1px solid #e5e7eb'
              }}
            >
              Actions
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
<<<<<<< HEAD
            </th>          </tr>
=======
=======
<<<<<<< HEAD
            </th>          </tr>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

<<<<<<< HEAD
=======
=======
            </th>
          </tr>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            </th>
          </tr>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
        </thead>
        <tbody>
          {members.map(m => (
            <tr key={m.id}>
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{m.name}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{m.email}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                <select value={m.role} onChange={e => changeRole(m.id, e.target.value as Member['role'])}>
                  <option value="recruiter">Recruiter</option>
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <option value="manager">Manager</option>
                  <option value="viewer">Viewer</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
<<<<<<< HEAD
<<<<<<< HEAD

            </tr>

=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
<td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                {m.name}
              </td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                {m.email}
              </td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                <select
                  value={m.role}
                  onChange={e =>
                    changeRole(m.id, e.target.value as Member['role'])
                  }
                >
                  <option value='recruiter'>Recruiter</option>
                  <option value='manager'>Manager</option>
                  <option value='viewer'>Viewer</option>
                  <option value='admin'>Admin</option>
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
                </button>
              </td>
            </tr>
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
          ))}
        </tbody>
      </table>
    </section>
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
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
    setUsage({ monthlyJobPosts, budgetCapUsd });
  };

  return (
    <section>
      <h2>Usage limits</h2>
<div
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          ))}
        </tbody>
      </table>
    </section>
  )
}

function UsageTab({ usage, setUsage, seatsUsed }: { usage: Usage, setUsage: (u: Usage) => void, seatsUsed: number }) {
  const [monthlyJobPosts, setMonthlyJobPosts] = useState<number>(usage.monthlyJobPosts);
  const [budgetCapUsd, setBudgetCapUsd] = useState<number>(usage.budgetCapUsd);

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
=======
  );

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
function ActivityTab({ events }: { events: any[] }) {
  return (
    <section>
      <h2>Team activity</h2>
      <ul>
<<<<<<< HEAD
        {events.map(e => (
          <li key={e.id}>
            <span style={{ color: '#6b7280' }}>
              {new Date(e.timestampIso).toLocaleString()} —{' '}
            </span>            <strong>{e.actorEmail}</strong> {e.action}
=======
{events.map(e => (
          <li key={e.id}>
            <span style={{ color: '#6b7280' }}>
              {new Date(e.timestampIso).toLocaleString()} —{' '}
            </span>
            <strong>{e.actorEmail}</strong> {e.action}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </li>
        ))}
      </ul>
    </section>
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
<<<<<<< HEAD
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
<<<<<<< HEAD
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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

<<<<<<< HEAD
  );

function ActivityTab({ events }: { events: any[] }) {
  return (
    <section>
      <h2>Team activity</h2>
      <ul>
        {events.map((e) => (
          <li key={e.id}>

          </li>
        ))}
      </ul>
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
    <section>
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
);
origin/cursor/automate-test-improve-and-merge-code-2533

function BillingTab({ invoices }: { invoices: Invoice[] }) {
  return (
    <section>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <h2>Billing & invoices</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
            <th
=======
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Invoice #</th>
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Period</th>
            <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Amount</th>
            <th style={{ textAlign: 'center', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Status</th>
            <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Actions</th>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
<th
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Invoice #</th>
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Period</th>
            <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Amount</th>
            <th style={{ textAlign: 'center', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Status</th>
            <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Actions</th>
          </tr>
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
            </th>
origin/cursor/automate-test-improve-and-merge-code-2533
          </tr>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </thead>
        <tbody>
          {invoices.map(inv => (
            <tr key={inv.id}>
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD

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

                {inv.number}
              </td>;
              <td style={{ padding: 8, border_bottom: '1px solid #f3f4f6' }}>;
=======
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.number}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.periodStartIso} → {inv.periodEndIso}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>${inv.amountUsd.toFixed(2)}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'center' }}>{inv.status}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>
                <a href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv.id}`} target="_blank" rel="noreferrer">Download PDF</Link>
              </td>
<<<<<<< HEAD
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
<td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                {inv.number}
              </td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
                {inv.periodStartIso} → {inv.periodEndIso}
              </td>;
              <td;
                style={{

                  padding: 8,
                  border_bottom: '1px solid #f3f4f6',
                  text_align: 'right',

                }}
              >;
                ${inv.amount_usd.to_fixed (2)}
              </td>;
              <td;
                style={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

                  padding: 8,
                  border_bottom: '1px solid #f3f4f6',
                  text_align: 'center',

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD

            </tr>

          ))}

          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

        </tbody>;
      </table>;
    </section>;
  );
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  rel='noreferrer'>;
                  Download PDF;
                </a>              </td>;
            </tr>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.number}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.periodStartIso} → {inv.periodEndIso}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>${inv.amountUsd.toFixed(2)}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'center' }}>{inv.status}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>
<<<<<<< HEAD
<<<<<<< HEAD
                <a href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv.id}`} target="_blank" rel="noreferrer">Download PDF</a>
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
                <a
                  href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv.id}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  Download PDF
                </a>              </td>
            </tr>
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
                  rel='noreferrer'
                >
                  Download PDF
                </a>
              </td>
            </tr>
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
          ))}
        </tbody>
      </table>
    </section>
);
<<<<<<< HEAD:pages/enterprise/admin/index.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
<a href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv.id}`} target="_blank" rel="noreferrer">Download PDF</a>
              </td>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/enterprise/admin/index.tsx
