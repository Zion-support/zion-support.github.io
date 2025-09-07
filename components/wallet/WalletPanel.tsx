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
