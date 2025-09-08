class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;

import React, { useEffect, useState } from 'react';

export default function Web3LoginButton() {;
const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), {;
  ssr: false,;
});const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), { ssr: false }),;
async function resolveDisplayName(): any (addr: string): Promise<string | null> {;
  try {;
    const r = await fetch(`/api/did/get?address=${encodeURIComponent(addr)}`);
    const { data } = await r && r.json();
}
export default function Web3LoginButton() {
}


export default function Web3LoginButton() {;

    return did && did.lens || did && did.ens || null;
  } catch {;
    return null;
  }

export default function Web3LoginButton() {;
  const [open, setOpen] = useState(false);

  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),

  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);

    const did = data?.payload || {};
    return did.lens || did.ens || null
  } catch { return null };
export default function Web3LoginButton() {;

  const [open, setOpen] = useState(false);

  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),

  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  useEffect(() => {


}
export default function Web3LoginButton() {
  const [open, setOpen] = useState(false);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  useEffect(() => {
  useEffect(() => {    return did && did.lens || did && did.ens || null;
  } catch { return null };
}
export default function Web3LoginButton() {;
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ address: string, chain: 'evm' | 'sol' } | null>(null),;
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);
  useEffect(() => {;
    const saved =;
      typeof window !== 'undefined';
        ? window && window.localStorage.getItem('zion-web3-user');

        : null;
    if (saved) setUser(JSON && JSON.parse(saved));
    const pref =;
      typeof window !== 'undefined';
        ? window && window.localStorage.getItem('zion-web3-display');
        : null;
    setDisplayWeb3(pref === 'true');  }, []);
  return (
    <>
