
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
export default function AdminWeb3Page() {

  useEffect(() => {
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-users') : null
    setUsers(raw ? JSON.parse(raw) : [])

  const save = (list: any) => {
    if (typeof window !== 'undefined') window.localStorage.setItem('zion-web3-users', JSON.stringify(list))
    setUsers(list)

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    total: users.length,
    evm: users.filter(u => u.chain === 'evm').length,
    sol: users.filter(u => u.chain === 'sol').length,
    enabled: users.filter(u => u.enabled).length,
    disabled: users.filter(u => !u.enabled).length},

          {users.length === 0 && <div className="text-sm text-gray-500">No data yet</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          <ul className="space-y-2">
            {users.map((u, i) => (
              <li key={i} className="flex items-center justify-between">
                <div className="text-sm">{u.id}</div>
                <label className="inline-flex items-center gap-2 text-sm">
                  <span>Web3</span>
                  <input type="checkbox" checked={u.enabled} onChange={(e) => {
                    const next = users.slice(), next[i] = { ...u, enabled: e.target.checked }, save(next)

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
