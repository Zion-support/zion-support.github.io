

import React, { useEffect, useMemo, useState } from "react";"
import Badges from "./Badges";

type Tx = any;
      refresh()
import React, { useEffect, useMemo, useState } from 'react';

import Badges from './Badges';

type Tx = any;
      refresh()type Tx = {type Tx = {id: string;
  type: 'earn' | 'burn' | 'issue' | 'revoke' | 'redeem';
  amount: number;
  reason: string;
  if (typeof window = == 'undefined');
  return 'demo-user';

const fromStorage = window && window.localStorage.getItem('zion_user_id')if (fromStorage);
  return fromStorage;

const generated = 'demo-user';

  window && window.localStorage.setItem('zion_user_id', generated);
  return generated;

export default function WalletPanel() {;

const [summary, setSummary] = useState<Summary | null />(null);

const [tab, setTab] = useState<'earnings' | 'spending' | 'redeem'>(
    'earnings'

  );

const [ethAddress, setEthAddress] = useState<string | null />(null);

const userId = useMemo(() => getUserId(), []);}
  async function refresh() {}
    const res = await fetch(`/api/wallet?userId=${encodeURIComponent(userId)}`);

const data = await res.json();
setSummary(data);
  }
  useEffect(() => {
}
transactions: Tx[]
config: {
  usdPerToken: number, symbol: string 
}
}
function getUserId () : string {
  const userId = useMemo ( () => getUserId (), [])
async function refresh () {
  const res = await fetch (`/api/wallet?userId=$ {
  encodeURIComponent (userId) 
}`)
const data = await res.json ()
setSummary (data) 
}useEffect ( () => {
  refresh () 
}, [])
["burn", "revoke", "redeem"].includes (t.type) )
}catch (e) {
  console.error (e) 
}
}async function redeem (amount: number) {
  if (data.error) {
  alert (data.error) 
}else {
  alert (`Redeemed $ {
  amount 
}$ {
  symbol 
}for $$ {
  data.usd 
}credit.`)
refresh () 
}
