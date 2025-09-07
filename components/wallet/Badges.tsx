export type Badge = {
  id: string
label: string
threshold: number, //token balance threshold 
}
const BADGES: Badge[] = [ export function currentBadge (balance: number) : Badge | null {
  let current: Badge | null = null
for (const b of BADGES) {
  if (balance >= b.threshold) current = b 
}return current
}export default function Badges ({
  balance 
}: {
  balance: number 
}) {
  const active = currentBadge (balance)
return (<div className="flex gap-2 items-center flex-wrap" > BADGES.map ( (b) => (<span key= {
  b.id 
}className= {
  `px-3 py-1 rounded-full text-xs border $ {
  balance >= b.threshold > {
  b.label 
}</span>) ) 
}) 
}</div>) 
}