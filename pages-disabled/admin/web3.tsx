<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
export default function AdminWeb3Page() {

<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
  const [users, setUsers] = useState<{ id: string, enabled: boolean, chain?: string }[]>([])
  const [users, setUsers] = useState<{ id: string, enabled: boolean, chain?: string }[]>([]),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  useEffect(() => {
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-users') : null
    setUsers(raw ? JSON.parse(raw) : [])

  const save = (list: any) => {
    if (typeof window !== 'undefined') window.localStorage.setItem('zion-web3-users', JSON.stringify(list))
    setUsers(list)

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  const metrics = {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
export default function AdminWeb3Page() {
=======
import React, { useEffect, useState } from 'react',
import Head from 'next/head';
export default function AdminWeb3Page() {
  const [users, setUsers] = useState<{ id: string, enabled: boolean, chain?: string }[]>([]);
  useEffect(() => {
    const raw =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('zion-web3-users')
        : null;
    setUsers(raw ? JSON.parse(raw) : []);
  }, []);

  const save = (list: any) => {
    if (typeof window !== 'undefined')
      window.localStorage.setItem('zion-web3-users', JSON.stringify(list));
    setUsers(list);
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

  const metrics = {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    total: users.length,
    evm: users.filter(u => u.chain === 'evm').length,
=======




import React, { useEffect, useState } from 'react';'
import Head from 'next/head';
export default function AdminWeb3Page() {}
  const metrics = {}
    total: users.length,'
    evm: users.filter(u => u.chain === 'evm').length,'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    sol: users.filter(u => u.chain === 'sol').length,
    enabled: users.filter(u => u.enabled).length,
<<<<<<< HEAD
    disabled: users.filter(u => !u.enabled).length},
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934






  return (
    <>
      <Head><title>Admin — Web3</title></Head>
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
<<<<<<< HEAD
    disabled: users.filter(u => !u.enabled).length},
=======
disabled: users.filter(u => !u.enabled).length,
  };

  return (
    <>
      <Head>
        <title>Admin — Web3</title>
      </Head>
      <div className='max-w-3xl mx-auto space-y-6'>
        <h1 className='text-xl font-semibold'>Web3 Admin</h1>
        <div className='rounded-md border p-4'>
          <div className='font-medium mb-2'>Usage Metrics</div>
          <div className='text-sm text-gray-600'>
            Total: {metrics.total} · EVM: {metrics.evm} · Solana: {metrics.sol}{' '}
            · Enabled: {metrics.enabled} · Disabled: {metrics.disabled}
          </div>
        </div>
        <div className='rounded-md border p-4'>
          <div className='font-medium mb-2'>Users</div>
          {users.length === 0 && (
            <div className='text-sm text-gray-500'>No data yet</div>
          )}
          <ul className='space-y-2'>
            {users.map((u, i) => (
              <li key={i} className='flex items-center justify-between'>
                <div className='text-sm'>{u.id}</div>
                <label className='inline-flex items-center gap-2 text-sm'>
                  <span>Web3</span>
                  <input
                    type='checkbox'
                    checked={u.enabled}
                    onChange={e => {
                      const next = users.slice();
                      next[i] = { ...u, enabled: e.target.checked };
                      save(next);
                    }}
                  />
                </label>
              </li>
            ))}
          </div>
        )}

        {/* Add New Project Button */}
        <div className="mt-6 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Add New Web3 Project
          </button>
        </div>
      </main>
    </>
  );
  return (
    <>
      <Head><title>Admin — Web3</title></Head>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-xl font-semibold">Web3 Admin</h1>
        <div className="rounded-md border p-4">
          <div className="font-medium mb-2">Usage Metrics</div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="text-sm text-gray-600">Total: {metrics.total} · EVM: {metrics.evm} · Solana: {metrics.sol} · Enabled: {metrics.enabled} · Disabled: {metrics.disabled}</div>
        </div>
        <div className="rounded-md border p-4">
          <div className="font-medium mb-2">Users</div>
=======


      <div className="max-w-3xl mx-auto space-y-6">"
        <h1 className="text-xl font-semibold">Web3 Admin</h1>"
        <div className="rounded-md border p-4">"
          <div className="font-medium mb-2">Usage Metrics</div>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          {users.length === 0 && <div className="text-sm text-gray-500">No data yet</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


"
          {users.length === 0 && <div className="text-sm text-gray-500">No data yet</div>  } catch (error) {";
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}







"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <ul className="space-y-2">
            {users.map((u, i) => ("
              <li key={i} className="flex items-center justify-between">"
                <div className="text-sm">{u.id}</div>"
                <label className="inline-flex items-center gap-2 text-sm">
                  <span>Web3</span>"
                  <input type="checkbox" checked={u.enabled} onChange={(e) => {}
                    const next = users.slice(), next[i] = { ...u, enabled: e.target.checked }, save(next)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  }} />
                </label>
              </li>


}

'
import React, { useEffect, useState } from 'react','
import Head from 'next / head',
export default /**;
 * AdminWeb3Page - Function description;
 */
function AdminWeb3Page() {}
  const [users, set_users] = useState<{ id: string, enabled: boolean, chain?: string }[]>([]),
  useEffect (() => {'
    const raw = typeof window !== 'undefined' ? window.local_storage.get_item ('zion - web3 - users') : null,
    set_users (raw ? JSON.parse (raw) : []);
  }, []),
  const save = (list: any) =>: any {'
    if (window.local_storage.set_item ('zion - web3 - users', JSON.stringify (list)), ) {}
  $2;
}
    set_users (list);
  },
  const metrics = {}
    total: users.length,'
    evm: users.filter (u => u.chain === 'evm').length,'
    sol: users.filter (u => u.chain === 'sol').length,
    enabled: users.filter (u => u.enabled).length,
    disabled: users.filter (u => !u.enabled).length},
  return (
    <>;
      <Head><title > Admin — Web3</title></Head>;"
      <div className="max - w-3xl mx - auto space - y-6">;"
        <h1 className="text - xl font - semibold">Web3 Admin</h1>;"
        <div className="rounded - md border p - 4">;"
          <div className="font - medium mb - 2">Usage Metrics</div>;"
          <div className="text - sm text - gray - 600">Total: {metrics.total} · EVM: {metrics.evm} · Solana: {metrics.sol} · Enabled: {metrics.enabled} · Disabled: {metrics.disabled}</div>;
        </div>;"
        <div className="rounded - md border p - 4">;"
          <div className="font - medium mb - 2">Users</div>;"
          {users.length === 0 && <div className="text - sm text - gray - 500">No data yet</div>}"
          <ul className="space - y-2">;
            {users.map ((u, i) => ("
              <li key={i} className="flex items - center justify - between">;"
                <div className="text - sm">{u.id}</div>;"
                <label className="inline - flex items - center gap - 2 text - sm">;
                  <span > Web3</span>;"
                  <input type="checkbox" checked={u.enabled} on_change={(e) => {}
                    const next = users.slice (), next[i] = { ...u, enabled: e.target.checked }, save (next);
                  }} />;
                </label>;
              </li>))}
          </ul>;
        </div>;
      </div>;
    </>);
}




}

                  }} />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
    </>);
}


  );
};

                  }} />
                </label>
              </li>
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
                  }} />
                </label>
              </li>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useEffect, useState } from 'react';
=======
'
import React, { useEffect, useState } from 'react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import Head from 'next/head';
export default function AdminWeb3Page(req, res) {}
  try {};
  const [users, setUsers] = useState<{ id: string, enabled: boolean, chain?: string }[]>([]),;
  useEffect(() => {;'
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-users') : null;
    setUsers(raw ? JSON.parse(raw) : []);
  }, []),;
  const save = (list: any) => {;'
    if (typeof window !== 'undefined') window.localStorage.setItem('zion-web3-users', JSON.stringify(list)),;
    setUsers(list);
  },;
  const metrics = {;
    total: users.length;'
    evm: users.filter(u => u.chain === 'evm').length;'
    sol: users.filter(u => u.chain === 'sol').length;
    enabled: users.filter(u => u.enabled).length;
    disabled: users.filter(u => !u.enabled).length};
  return (;
    <>;
      <Head><title>Admin — Web3</title></Head>;"
      <div className="max-w-3xl mx-auto space-y-6">;"
        <h1 className="text-xl font-semibold">Web3 Admin</h1>;"
        <div className="rounded-md border p-4">;"
          <div className="font-medium mb-2">Usage Metrics</div>;"
          <div className="text-sm text-gray-600">Total: {metrics.total} · EVM: {metrics.evm} · Solana: {metrics.sol} · Enabled: {metrics.enabled} · Disabled: {metrics.disabled}</div>;
        </div>;"
        <div className="rounded-md border p-4">;"
          <div className="font-medium mb-2">Users</div>;"
          {users.length === 0 && <div className="text-sm text-gray-500">No data yet</div>  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

}'
import React, { useEffect, useState } from 'react','
import Head from 'next / head',
export default /**;
 * AdminWeb3Page - Function description;
 */
function AdminWeb3Page() {}
  const [users, set_users] = useState<{ id: string, enabled: boolean, chain?: string }[]>([]),
  useEffect (() => {'
    const raw = typeof window !== 'undefined' ? window.local_storage.get_item ('zion - web3 - users') : null,
    set_users (raw ? JSON.parse (raw) : []);
  }, []),
  const save = (list: any) =>: any {'
    if (window.local_storage.set_item ('zion - web3 - users', JSON.stringify (list)), ) {}
  $2;
}
    set_users (list);
  },
  const metrics = {}
    total: users.length,'
    evm: users.filter (u => u.chain === 'evm').length,'
    sol: users.filter (u => u.chain === 'sol').length,
    enabled: users.filter (u => u.enabled).length,
    disabled: users.filter (u => !u.enabled).length},
  return (
    <>;"
      <div className="max - w-3xl mx - auto space - y-6">;"
        <h1 className="text - xl font - semibold">Web3 Admin</h1>;"
        <div className="rounded - md border p - 4">;"
          <div className="font - medium mb - 2">Usage Metrics</div>;
        </div>;"
        <div className="rounded - md border p - 4">;"
          <div className="font - medium mb - 2">Users</div>;"
          {users.length === 0 && <div className="text - sm text - gray - 500">No data yet</div>}"
          <ul className="space - y-2">;
            {users.map ((u, i) => ("
              <li key={i} className="flex items - center justify - between">;"
                <div className="text - sm">{u.id}</div>;"
                <label className="inline - flex items - center gap - 2 text - sm">;
                  <span > Web3</span>;"
                  <input type="checkbox" checked={u.enabled} on_change={(e) => {}
                    const next = users.slice (), next[i] = { ...u, enabled: e.target.checked }, save (next);
                  }} />;
                </label>;
              </li>))}
          </ul>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


=======
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======







'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
