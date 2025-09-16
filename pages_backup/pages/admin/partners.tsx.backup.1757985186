



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

import React, { useState, useEffect } from 'react';

import Head from 'next / head';
;

interface Partner {




  useEffect(() => {;
    // Simulate loading partners;
    setTimeout(() => {;
      setPartners(mockPartners);
      setLoading(false);
    }, 1000);  }, []);

  async function updatePartner(code: string, updates: any) {
    await fetch('/api/admin/partners/update', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ code, ...updates })
    });
    const res = await fetch('/api/admin/partners/list');
    const json = await res.json();
    setPartners(json.partners |[]);  }
  async function viewFlags(code: string) {
    setSelected(code)
    const res = await fetch(
      `/api/admin/partners/fraud-flags?code=${encodeURIComponent(code)}`
    );

    const json = await res.json();
    setFlags(json.flags |[]);

  }

import { useEffect, useState } from 'react';
export default function AdminPartners(req, res) {
  try {
  const [partners, setPartners] = useState<any[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [flags, setFlags] = useState<any[]>([]);
  useEffect(() => {;
    (async () => {;
      try {
        const res = await fetch('/api/admin/partners/list');
        const json = await res.json();

        setPartners(json.partners || [])
      } catch {}
    })()
  }, []);

  async function updatePartner(code: string, updates: any) {
    await fetch('/api/admin/partners/update', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ code, ...updates })
    });
    const res = await fetch('/api/admin/partners/list');
    const json = await res.json();
    setPartners(json.partners || [])

  }
}
    })();
  }, []),;
  async function updatePartner(code: string, updates: any) {;


  async function viewFlags(code: string) {
    setSelected(code)
    const res = await fetch(
      `/api/admin/partners/fraud-flags?code=${encodeURIComponent(code)}`
    );
    const json = await res && res.json();
    setFlags(json && json.flags || []);
  }

  useEffect(() => {;
    // Simulate loading partners;
    setTimeout(() => {;
      setPartners(mockPartners);
      setLoading(false);
    }, 1000);  }, []);

  async function updatePartner(): any (code: string, updates: any) {;

    await fetch('/api/admin/partners/update', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ code, ...updates }),;
    });
    const res = await fetch('/api/admin/partners/list');

    const json = await res.json();
    setPartners(json.partners || []);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  async function viewFlags(code: string) {;
    setSelected(code);
    const res = await fetch(`/api/admin/partners/fraud-flags?code=${encodeURIComponent(code)}`);







>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




    const json = await res.json();
    setFlags(json.flags || []);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

}

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Admin • Partners</h1>
      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2 pr-4">Code</th>
              <th className="py-2 pr-4">Name</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4">Commission</th>
              <th className="py-2 pr-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((p) => (
              <tr key={p.code} className="border-b">
                <td className="py-2 pr-4">{p.code}</td>
                <td className="py-2 pr-4">{p.name}</td>
                <td className="py-2 pr-4">{p.status}</td>
                <td className="py-2 pr-4">
                  <input

                    type='number'                    defaultValue={p.commission_rate}
                    min={0}
                    max={1}
                    step={0.01}
                    onBlur={e =>
                      updatePartner(p.code, {
                        commission_rate: Number(e.target.value)
                      })
                    }
                    className='w-24 border rounded px-2 py-1'
                    type="number"
                    defaultValue={p.commission_rate  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    min={0  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    max={1  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    step={0.01  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onBlur={(e) => updatePartner(p.code, { commission_rate: Number(e.target.value) })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className="w-24 border rounded px-2 py-1"




  return (


    <div className='space-y-6'>;
      <h1 className='text-2xl font-semibold'>Admin • Partners</h1>;
      <div className='overflow-auto'>;
        <table className='min-w-full text-sm'>;
          <thead>;
            <tr className='text-left border-b'>;
              <th className='py-2 pr-4'>Code</th>;
              <th className='py-2 pr-4'>Name</th>;
              <th className='py-2 pr-4'>Status</th>;
              <th className='py-2 pr-4'>Commission</th>;
              <th className='py-2 pr-4'>Actions</th>;
            </tr>;
          </thead>;
          <tbody>;
            {partners && partners.map(p => (;
              <tr key={p && p.code} className='border-b'>;
                <td className='py-2 pr-4'>{p && p.code}</td>;
                <td className='py-2 pr-4'>{p && p.name}</td>;
                <td className='py-2 pr-4'>{p && p.status}</td>;
                <td className='py-2 pr-4'>;
                  <input


                    }
                    className='w-24 border rounded px-2 py-1';
                  />;
                </td>;
                <td className='py-2 pr-4 space-x-2'>;
                  <button
                    className='px-2 py-1 rounded border'
                    onClick={() =>;
                      updatePartner(p && p.code, { status: 'approved' });



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




                  />
                </td>
                <td className="py-2 pr-4 space-x-2">
                  <button className="px-2 py-1 rounded border" onClick={() => updatePartner(p.code, { status: 'approved' })}>Approve</button>
                  <button className="px-2 py-1 rounded border" onClick={() => updatePartner(p.code, { status: 'rejected' })}>Reject</button>
                  <button className="px-2 py-1 rounded border" onClick={() => viewFlags(p.code)}>Fraud Flags</button>
                </td>
              </tr>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </tbody>
        </table>
      </div>
      {selected && (
        <div className="p-4 rounded border">
          <h2 className="font-semibold mb-2">Fraud Flags • {selected}</h2>
          <ul className="list-disc pl-6">
            {flags.map((f, idx) => (
              <li key={idx}>
                <span className="font-medium">{f.type}</span> — {f.severity} {f.note && <span className="text-gray-500">({f.note})</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </li>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            {flags.length === 0 && <li className="text-gray-500 list-none">No flags</li>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </ul>
        </div>

{/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Total Partners</h3>
            <p className="text-2xl font-bold">{totalPartners}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Active Partners</h3>
            <p className="text-2xl font-bold text-green-600">{activePartners}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Total Referrals</h3>
            <p className="text-2xl font-bold">{totalReferrals}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Total Earnings</h3>
            <p className="text-2xl font-bold text-blue-600">${totalEarnings.toLocaleString()}</p>
          </div>
        </div>
        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <div>;
              <label className="block text-sm font-medium mb-2">Search Partners</label>;
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e && e.target.value)}
                placeholder="Search by name, code, or email...";
                className="w-full p-2 border rounded-md";
              />;
            </div>;
            <div>;
              <label className="block text-sm font-medium mb-2">Filter by Status</label>;
              <select
                value={statusFilter}

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

                onChange={(e) => setStatusFilter(e && e.target.value)}
                className="w-full p-2 border rounded-md";
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
        <div className="bg-white rounded-lg shadow overflow-hidden">;
          <div className="px-6 py-4 border-b">;
            <h2 className="text-lg font-semibold">Partners ({filteredPartners && filteredPartners.length})</h2>;
          </div>;

          {loading ? (;
            <div className="text-center py-8">Loading partners...</div>;
          ) : filteredPartners && filteredPartners.length === 0 ? (;
            <div className="text-center py-8 text-gray-500">;
              No partners found matching your criteria.;
            </div>;
          ) : (;
            <div className="overflow-x-auto">;
              <table className="min-w-full">;
                <thead className="bg-gray-50">;
                  <tr>;
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">;
                      Code;
                    </th>;
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">;
                      Name;
                    </th>;
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">;
                      Status;
                    </th>;
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">;
                      Commission;
                    </th>;
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">;
                      Referrals;
                    </th>;
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">;
                      Earnings;
                    </th>;
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">;
                      Actions;
                    </th>;
                  </tr>;
                </thead>;
                <tbody className="bg-white divide-y divide-gray-200">;
                  {filteredPartners && filteredPartners.map((partner) => (;
                    <tr key={partner && partner.id} className="hover:bg-gray-50">;
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">;
                        {partner && partner.code}
                      </td>;
                      <td className="px-6 py-4 whitespace-nowrap">;
                        <div>;
                          <div className="text-sm font-medium text-gray-900">{partner && partner.name}</div>;
                          <div className="text-sm text-gray-500">{partner && partner.contactEmail}</div>;
                        </div>;
                      </td>;
                      <td className="px-6 py-4 whitespace-nowrap">;
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(partner && partner.status)}`}>;
                          {partner && partner.status}
                        </span>;
                      </td>;
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">;
                        {partner && partner.commission}%;
                      </td>;
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">;
                        {partner && partner.totalReferrals}
                      </td>;
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">;
                        ${partner && partner.totalEarnings.toLocaleString()}
                      </td>;
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">;
                        <div className="flex space-x-2">;
                          {partner && partner.status === 'pending' && (;
                            <>;

                              <button
                                onClick={() => handleStatusChange(partner && partner.id, 'active')}
                                className="text-green-600 hover:text-green-900";
                              >;
                                Approve;
                              </button>;
                              <button
                                onClick={() => handleStatusChange(partner && partner.id, 'inactive')}
                                className="text-red-600 hover:text-red-900";
                              >;
                                Reject;
                              </button>;
                            </>;
                          )}
                          {partner && partner.status === 'active' && (;
                            <button
                              onClick={() => handleStatusChange(partner && partner.id, 'inactive')}
                              className="text-red-600 hover:text-red-900";
                            >;
                              Deactivate;
                            </button>;
                          )}
                          {partner && partner.status === 'inactive' && (;
                            <button
                              onClick={() => handleStatusChange(partner && partner.id, 'active')}
                              className="text-green-600 hover:text-green-900";
                            >;
                              Activate;
                            </button>;
                          )}
                          <button className="text-blue-600 hover:text-blue-900">
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </>
  );








}
}
}






      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}






>>>>>>> cursor/fix-website-loading-errors-and-merge-6662




>>>>>>> origin/feature/merge-conflicts-and-improvements


