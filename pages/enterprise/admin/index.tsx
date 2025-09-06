
import Link from 'next/link';

type Member = {
  id: string;
  name: string;
  email: string;

  );  const [members, setMembers] = useState<Member[]>([]);
  const [usage, setUsage] = useState<Usage | null>(null);
  const [activity, setActivity] = useState<any[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);

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


  const changeRole = async (id: string, newRole: Member['role']) => {
    await fetch(`/api/enterprise/companies/${COMPANY_ID}/members`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ memberId: id, role: newRole }) }),
    setMembers(members.map(m => m.id === id ? { ...m, role: newRole } : m))
  };


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

                {m.name}
              </td>;
              <td style={{ padding: 8, border_bottom: '1px solid #f3f4f6' }}>;
                {m.email}

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

              <td;

                style={{

                  padding: 8,

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
function UsageTab(): any ({;
  usage,;
  setUsage,;
  seatsUsed,;
}: {;
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
            </th>          </tr>
                  <option value="manager">Manager</option>
                  <option value="viewer">Viewer</option>
                  <option value="admin">Admin</option>
                </select>
              </td>

            </tr>

          ))}
        </tbody>
      </table>
    </section>

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
      <h2>Billing & invoices</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>

=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
                  padding: 8
                  borderBottom: '1px solid #f3f4f6'
                  textAlign: 'right'
                }}
              >

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
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.number}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.periodStartIso} → {inv.periodEndIso}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>${inv.amountUsd.toFixed(2)}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'center' }}>{inv.status}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>
<a href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv.id}`} target="_blank" rel="noreferrer">Download PDF</a>
              </td>

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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
