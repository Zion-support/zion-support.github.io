import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Web3LoginModal = dynamic(() => import('./Web3LoginModal'), {
  ssr: false,
});

async function resolveDisplayName(addr: string): Promise<string | null> {
  try {
    const r = await fetch(`/api/did/get?address=${encodeURIComponent(addr)}`);
    const { data } = await r.json();
    const did = data?.payload || {};
    return did.lens || did.ens || null;
  } catch {
    return null;
  }

export default function Web3LoginButton() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{
    address: string;
    chain: 'evm' | 'sol';
  } | null>(null);  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);

  useEffect(() => {

  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayWeb3, setDisplayWeb3] = useState<boolean>(false);

  useEffect(() => {

  }, []);

  useEffect(() => {
    (async () => {

  };

  const disconnect = async () => {
    window.localStorage.removeItem('zion-web3-user');

  }

  return (
    <>