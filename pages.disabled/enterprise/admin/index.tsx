

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
  );

function ActivityTab({ events }: { events: any[] }) {
  return (
    <section>
      <h2>Team activity</h2>
      <ul>
        {events.map(e => (
          <li key={e.id}>
            <span style={{ color: '#6b7280' }}>
              {new Date(e.timestampIso).toLocaleString()} —{' '}
            </span>            <strong>{e.actorEmail}</strong> {e.action}
{events.map(e => (
          <li key={e.id}>
            <span style={{ color: '#6b7280' }}>
              {new Date(e.timestampIso).toLocaleString()} —{' '}
            </span>
            <strong>{e.actorEmail}</strong> {e.action}
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

);
origin/cursor/automate-test-improve-and-merge-code-2533

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
            </th>
origin/cursor/automate-test-improve-and-merge-code-2533
          </tr>
        </thead>
        <tbody>
          {invoices.map(inv => (
            <tr key={inv.id}>

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
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.number}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.periodStartIso} → {inv.periodEndIso}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>${inv.amountUsd.toFixed(2)}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'center' }}>{inv.status}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>
                <a href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv.id}`} target="_blank" rel="noreferrer">Download PDF</Link>
              </td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
<td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                {inv.number}
              </td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
origin/cursor/automate-test-improve-and-merge-code-2533
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


                <a
                  href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv && inv.id}`}
                  target='_blank'
                  rel='noreferrer'>;
                  Download PDF;
                </a>              </td>;
            </tr>;

              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.number}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{inv.periodStartIso} → {inv.periodEndIso}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>${inv.amountUsd.toFixed(2)}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'center' }}>{inv.status}</td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6', textAlign: 'right' }}>
                  rel='noreferrer'
                >
                  Download PDF
                </a>
              </td>
            </tr>
origin/cursor/automate-test-improve-and-merge-code-2533
          ))}
        </tbody>
      </table>
    </section>
);

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
<a href={`/api/enterprise/companies/${COMPANY_ID}/billing/invoices/${inv.id}`} target="_blank" rel="noreferrer">Download PDF</a>
              </td>

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


origin/cursor/automate-test-improve-and-merge-code-2533
