
import { useEffect, useMemo, useState  } from 'react';
import Link from 'next/link';
type Member = any;

  return (
    <section>
      <h2>Usage limits</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: 12,
          maxWidth: 600,
        }}
      >
        <label>
          <div>Monthly job posts</div>
          <input
            type='number'
            value={monthlyJobPosts}
            onChange={e => setMonthlyJobPosts(Number(e.target.value))}
          />
        </label>
        <label>
          <div>Budget cap (USD)</div>
          <input
            type='number'
            value={budgetCapUsd}
            onChange={e => setBudgetCapUsd(Number(e.target.value))}
          />
        </label>
      </div>
      <div
        style={{
          marginTop: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
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
        {events.map(e => (
          <li key={e.id}>
            <span style={{ color: '#6b7280' }}>
              {new Date(e.timestampIso).toLocaleString()} —{' '}
            </span>            <strong>{e.actorEmail}</strong> {e.action}
          </li>
        ))}
      </ul>
    </section>
  );
function BillingTab({ invoices }: { invoices: Invoice[] }) {
  return (
    <section>
      <h2>Billing & invoices</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th
              style={{
                textAlign: 'left',
                padding: 8,
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              Invoice #
            </th>
            <th
              style={{
                textAlign: 'left',
                padding: 8,
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              Period
            </th>
            <th
              style={{
                textAlign: 'right',
                padding: 8,
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              Amount
            </th>
            <th
              style={{
                textAlign: 'center',
                padding: 8,
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              Status
            </th>
            <th
              style={{
                textAlign: 'right',
                padding: 8,
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              Actions
            </th>          </tr>
        </thead>
        <tbody>
          {invoices.map(inv => (
            <tr key={inv.id}>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                {inv.number}
              </td>
              <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                {inv.periodStartIso} → {inv.periodEndIso}
              </td>
              <td
                style={{
                  padding: 8,
                  borderBottom: '1px solid #f3f4f6',
                  textAlign: 'right',
                }}
              >
                ${inv.amountUsd.toFixed(2)}
              </td>
              <td
                style={{
                  padding: 8,
                  borderBottom: '1px solid #f3f4f6',
                  textAlign: 'center',
                }}
              >
                {inv.status}
              </td>
              <td
                style={{
                  padding: 8,
                  borderBottom: '1px solid #f3f4f6',
                  textAlign: 'right',
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
