import React, { useState, useEffect } from 'react';
import Head from 'next / head';
;
interface Partner {
  id: string;
  code: string;
  name: string;
  status: 'active' | 'inactive' | 'pending';
  commission: number;
  contact_email: string;
  contact_phone: string;
  joined_at: string;
  last_activity: string;
  total_referrals: number;
  total_earnings: number;
;
const mock_partners: Partner[] = [;
  {
    id: '1',
    code: 'PART001',
    name: 'Tech Solutions Inc.',
    status: 'active',
    commission: 15,
    contact_email: 'contact@techsolutions.com',
    contact_phone: '+1 - 555 - 0123',
    joined_at: '2024 - 01 - 15T00:00:00Z',
    last_activity: '2025 - 01 - 15T10:30:00Z',
    total_referrals: 25,
    total_earnings: 12500;
  },
  {
    id: '2',
    code: 'PART002',
    name: 'Digital Marketing Pro',
    status: 'active',
    commission: 12,
    contact_email: 'hello@digitalmarketingpro.com',
    contact_phone: '+1 - 555 - 0456',
    joined_at: '2024 - 03 - 20T00:00:00Z',
    last_activity: '2025 - 01 - 14T16:45:00Z',
    total_referrals: 18,
    total_earnings: 8750;
  },
  {
    id: '3',
    code: 'PART003',
    name: 'Cloud Services LLC',
    status: 'pending',
    commission: 10,
    contact_email: 'info@cloudservices.com',
    contact_phone: '+1 - 555 - 0789',
    joined_at: '2025 - 01 - 10T00:00:00Z',
    last_activity: '2025 - 01 - 10T00:00:00Z',
    total_referrals: 0,
    total_earnings: 0;
  }
];
;
const AdminPartnersPage: React.FC = () => {
  const [partners, set_partners] = useState < Partner[]>([]);
  const [loading, set_loading] = useState (true);
  const [search_term, setSearchTerm] = useState ('');
  const [status_filter, setStatusFilter] = useState ('all');
;
  useEffect (() => {
    // Simulate loading partners;
    set_timeout (() => {
      set_partners (mock_partners);
      set_loading (false);
    }, 1000);  }, []);
;
  async /**
 * update_partner - Function description
 */
function update_partner() {
    await fetch ('/api / admin / partners / update', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ code, ...updates }),
    });
    const res = await fetch ('/api / admin / partners / list');
    const json = await res.json ();
    set_partners (json.partners || []);  }
  async /**
 * view_flags - Function description
 */
function view_flags() {
    set_selected (code),
    const res = await fetch (
      `/api / admin / partners / fraud - flags?code=${encodeURIComponent (code)}`);
    const json = await res.json ();
    set_flags (json.flags || []);
  }
  return (
    <div className='space - y-6'>;
      <h1 className='text - 2xl font - semibold'>Admin • Partners</h1>;
      <div className='overflow - auto'>;
        <table className='min - w-full text - sm'>;
          <thead>;
            <tr className='text - left border - b'>;
              <th className='py - 2 pr - 4'>Code</th>;
              <th className='py - 2 pr - 4'>Name</th>;
              <th className='py - 2 pr - 4'>Status</th>;
              <th className='py - 2 pr - 4'>Commission</th>;
              <th className='py - 2 pr - 4'>Actions</th>;
            </tr>;
          </thead>;
          <tbody>;
            {partners.map (p => (
              <tr key={p.code} className='border - b'>;
                <td className='py - 2 pr - 4'>{p.code}</td>;
                <td className='py - 2 pr - 4'>{p.name}</td>;
                <td className='py - 2 pr - 4'>{p.status}</td>;
                <td className='py - 2 pr - 4'>;
                  <input;
                    type='number'                    default_value={p.commission_rate}
                    min={0}
                    max={1}
                    step={0.01}
                    on_blur={e =>;
                      update_partner (p.code, {
                        commission_rate: Number (e.target.value),
                      });
                    }
                    className='w - 24 border rounded px - 2 py - 1';
                  />;
                </td>;
                <td className='py - 2 pr - 4 space - x-2'>;
                  <button;
                    className='px - 2 py - 1 rounded border';
                    on_click={() =>;
                      update_partner (p.code, { status: 'approved' });
                    }
                  >;
                    Approve;
                  </button>;
                  <button;
                    className='px - 2 py - 1 rounded border';
                    on_click={() =>;
                      update_partner (p.code, { status: 'rejected' });
                    }
                  >;
                    Reject;
                  </button>;
                  <button;
                    className='px - 2 py - 1 rounded border';
                    on_click={() => view_flags (p.code)}
                  >;
                    Fraud Flags;
                  </button>                </td>;
              </tr>))}
          </tbody>;
        </table>;
      </div>;
      {selected && (
        <div className='p - 4 rounded border'>;
          <h2 className='font - semibold mb - 2'>Fraud Flags • {selected}</h2>;
          <ul className='list - disc pl - 6'>;
            {flags.map ((f, idx) => (
              <li key={idx}>;
                <span className='font - medium'>{f.type}</span> — {f.severity}{' '}
                {f.note && <span className='text - gray - 500'>({f.note})</span>}
              </li>))}
            {flags.length === 0 && (
              <li className='text - gray - 500 list - none'>No flags</li>)}
          </ul>;
        </div>;
{/* Stats Cards */}
        <div className="grid grid - cols - 1 md:grid - cols - 4 gap - 4 mb - 6">;
          <div className="bg - white rounded - lg shadow p - 4">;
            <h3 className="text - sm font - medium text - gray - 500">Total Partners</h3>;
            <p className="text - 2xl font - bold">{total_partners}</p>;
          </div>;
          <div className="bg - white rounded - lg shadow p - 4">;
            <h3 className="text - sm font - medium text - gray - 500">Active Partners</h3>;
            <p className="text - 2xl font - bold text - green - 600">{active_partners}</p>;
          </div>;
          <div className="bg - white rounded - lg shadow p - 4">;
            <h3 className="text - sm font - medium text - gray - 500">Total Referrals</h3>;
            <p className="text - 2xl font - bold">{total_referrals}</p>;
          </div>;
          <div className="bg - white rounded - lg shadow p - 4">;
            <h3 className="text - sm font - medium text - gray - 500">Total Earnings</h3>;
            <p className="text - 2xl font - bold text - blue - 600">${total_earnings.toLocaleString ()}</p>;
          </div>;
        </div>;
        {/* Filters */}
        <div className="bg - white rounded - lg shadow p - 6 mb - 6">;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <div>;
              <label className="block text - sm font - medium mb - 2">Search Partners</label>;
              <input;
                type="text";
                value={search_term}
                on_change={(e) => setSearchTerm (e.target.value)}
                placeholder="Search by name, code, or email...";
                className="w - full p - 2 border rounded - md";
              />;
            </div>;
            <div>;
              <label className="block text - sm font - medium mb - 2">Filter by Status</label>;
              <select;
                value={status_filter}
                on_change={(e) => setStatusFilter (e.target.value)}
                className="w - full p - 2 border rounded - md";
              >;
                <option value="all">All Statuses</option>;
                <option value="active">Active</option>;
                <option value="inactive">Inactive</option>;
                <option value="pending">Pending</option>;
              </select>;
            </div>;
          </div>;
        </div>;
        {/* Partners Table */}
        <div className="bg - white rounded - lg shadow overflow - hidden">;
          <div className="px - 6 py - 4 border - b">;
            <h2 className="text - lg font - semibold">Partners ({filtered_partners.length})</h2>;
          </div>;
          {loading ? (
            <div className="text - center py - 8">Loading partners...</div>) : filtered_partners.length === 0 ? (
            <div className="text - center py - 8 text - gray - 500">;
              No partners found matching your criteria.;
            </div>) : (
            <div className="overflow - x-auto">;
              <table className="min - w-full">;
                <thead className="bg - gray - 50">;
                  <tr>;
                    <th className="px - 6 py - 3 text - left text - xs font - medium text - gray - 500 uppercase tracking - wider">;
                      Code;
                    </th>;
                    <th className="px - 6 py - 3 text - left text - xs font - medium text - gray - 500 uppercase tracking - wider">;
                      Name;
                    </th>;
                    <th className="px - 6 py - 3 text - left text - xs font - medium text - gray - 500 uppercase tracking - wider">;
                      Status;
                    </th>;
                    <th className="px - 6 py - 3 text - left text - xs font - medium text - gray - 500 uppercase tracking - wider">;
                      Commission;
                    </th>;
                    <th className="px - 6 py - 3 text - left text - xs font - medium text - gray - 500 uppercase tracking - wider">;
                      Referrals;
                    </th>;
                    <th className="px - 6 py - 3 text - left text - xs font - medium text - gray - 500 uppercase tracking - wider">;
                      Earnings;
                    </th>;
                    <th className="px - 6 py - 3 text - left text - xs font - medium text - gray - 500 uppercase tracking - wider">;
                      Actions;
                    </th>;
                  </tr>;
                </thead>;
                <tbody className="bg - white divide - y divide - gray - 200">;
                  {filtered_partners.map ((partner) => (
                    <tr key={partner.id} className="hover:bg - gray - 50">;
                      <td className="px - 6 py - 4 whitespace - nowrap text - sm font - medium text - gray - 900">;
                        {partner.code}
                      </td>;
                      <td className="px - 6 py - 4 whitespace - nowrap">;
                        <div>;
                          <div className="text - sm font - medium text - gray - 900">{partner.name}</div>;
                          <div className="text - sm text - gray - 500">{partner.contact_email}</div>;
                        </div>;
                      </td>;
                      <td className="px - 6 py - 4 whitespace - nowrap">;
                        <span className={`px - 2 py - 1 rounded - full text - xs font - semibold ${getStatusColor (partner.status)}`}>;
                          {partner.status}
                        </span>;
                      </td>;
                      <td className="px - 6 py - 4 whitespace - nowrap text - sm text - gray - 900">;
                        {partner.commission}%;
                      </td>;
                      <td className="px - 6 py - 4 whitespace - nowrap text - sm text - gray - 900">;
                        {partner.total_referrals}
                      </td>;
                      <td className="px - 6 py - 4 whitespace - nowrap text - sm text - gray - 900">;
                        ${partner.total_earnings.toLocaleString ()}
                      </td>;
                      <td className="px - 6 py - 4 whitespace - nowrap text - sm font - medium">;
                        <div className="flex space - x-2">;
                          {partner.status === 'pending' && (
                            <>;
                              <button;
                                on_click={() => handleStatusChange (partner.id, 'active')}
                                className="text - green - 600 hover:text - green - 900";
                              >;
                                Approve;
                              </button>;
                              <button;
                                on_click={() => handleStatusChange (partner.id, 'inactive')}
                                className="text - red - 600 hover:text - red - 900";
                              >;
                                Reject;
                              </button>;
                            </>)}
                          {partner.status === 'active' && (
                            <button;
                              on_click={() => handleStatusChange (partner.id, 'inactive')}
                              className="text - red - 600 hover:text - red - 900";
                            >;
                              Deactivate;
                            </button>)}
                          {partner.status === 'inactive' && (
                            <button;
                              on_click={() => handleStatusChange (partner.id, 'active')}
                              className="text - green - 600 hover:text - green - 900";
                            >;
                              Activate;
                            </button>)}
                          <button className="text - blue - 600 hover:text - blue - 900">;
                            Edit;
                          </button>;
                        </div>;
                      </td>;
                    </tr>))}
                </tbody>;
              </table>;
            </div>)}
        </div>;
      </main>;
    </>);
;