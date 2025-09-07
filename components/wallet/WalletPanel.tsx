type Summary = {
  wallet: {
  userId: string, balance: number 
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
}return (<div className="space-y-6" > <div className="p-4 border rounded-lg bg-white dark:bg-zinc-900" > <div className="flex items-center justify-between" > <div className="flex items-center gap-2" > <span className="text-2xl" >⚡</span> <div> <div className="flex gap-2 items-center"> <button className="px-3 py-1 rounded border" onClick= {
  () => redeem (100) 
}>Redeem 100</button> <button className="px-3 py-1 rounded border" onClick= {
  () => redeem (250) 
}>Redeem 250</button> <button className="px-3 py-1 rounded border" onClick= {
  () => redeem (500) 
}>Redeem 500</button> </div> <div className="text-xs text-gray-500">Coming soon: Redeem for branded perks and courses.</div> </div>) 
}</div> </div>) 
}