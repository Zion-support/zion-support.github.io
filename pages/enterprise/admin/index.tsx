
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

              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{m.name}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{m.email}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                <select value={m.role} onChange={e => changeRole(m.id, e.target.value as Member['role'])}>

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
