import {useEffect, useMemo, useState} from 'react';
import Link from 'next / link';
;
type Member = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'recruiter' | 'viewer',
}
;
type Usage = { monthlyJobPosts: number, budgetCapUsd: number }
;
type Invoice = {
  id: string;
  number: string;
  amount_usd: number;
  periodStartIso: string;
  periodEndIso: string;
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
              padding: '0.5rem 0.75rem',
              border_radius: 8,
              border: '1px solid #e5e7eb',
              background: tab === t ? '#111827' : 'white',
              color: tab === t ? 'white' : '#111827',
            }}
          >;
            {t}
          </button>        ))}
      </nav>;
      {tab === 'members' && (
        <MembersTab members={members} set_members={set_members} />)}
      {tab === 'usage' && usage && (
        <UsageTab usage={usage} set_usage={set_usage} seats_used={seats_used} />)}
      {tab === 'activity' && <ActivityTab events={activity} />}
      {tab === 'billing' && <BillingTab invoices={invoices} />}
    </main>);
;
function MembersTab ({
  members,
  set_members,
}: {
  members: Member[];
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
                {m.name}
              </td>;
              <td style={{ padding: 8, border_bottom: '1px solid #f3f4f6' }}>;
                {m.email}
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
              <td;
                style={{
                  padding: 8,
                  border_bottom: '1px solid #f3f4f6',
                  text_align: 'right',
                }}
              >;
                <button;
                  on_click={() => remove (m.id)}
                  style={{ color: '#b91c1c' }}
                >;
                  Remove;
                </button>              </td>;
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
  usage: Usage;
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
                  padding: 8,
                  border_bottom: '1px solid #f3f4f6',
                  text_align: 'center',
                }}
              >;
                {inv.status}
              </td>;
              <td;
                style={{
                  padding: 8,
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