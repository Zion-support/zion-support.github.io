import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), {
  ssr: false
});const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), { ssr: false })
async function resolveDisplayName(addr: string): Promise<string | null> {
  try {

    const r = await fetch(`/api/did/get?address=${encodeURIComponent(addr)}`);
    const { data } = await r.json();
    const did = data?.payload |{}
    return did.lens |did.ens |null;
  } catch {
    return null;
  }


export default function Web3LoginButton() {;

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{
    address: string;
    chain: 'evm' | 'sol';
  } | null>(null);  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  useEffect(() => {    return did.lens |did.ens |null
  } catch { return null }
}


export default function Web3LoginButton() {;

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null)
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  useEffect(() => {
    const saved =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('zion-web3-user')
        : null;
    if (saved) setUser(JSON.parse(saved));
    const pref =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('zion-web3-display')
        : null;
    setDisplayWeb3(pref === 'true');  }, []);
  useEffect(() => {
    (async () => {    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-user') : null;
    if (saved) setUser(JSON.parse(saved));
    const pref = typeof window !== 'undefined' ? window.localStorage.getItem('zion-web3-display') : null;
    setDisplayWeb3(pref === 'true')
  useEffect(() => {
    (async () => {
      if (user && displayWeb3)
        setDisplayName(await resolveDisplayName(user.address));
      else setDisplayName(null);
    })();
  const onLoggedIn = (u: { address: string; chain: 'evm' | 'sol' }) => {
    window.localStorage.setItem('zion-web3-user', JSON.stringify(u));
    setUser(u);  }
  const disconnect = async () => {
    window.localStorage.removeItem('zion-web3-user');    setUser(u)
  }
  const disconnect = async () => {
    window.localStorage.removeItem('zion-web3-user');
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {}
    setUser(null);



