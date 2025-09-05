<<<<<<< HEAD
import Link from 'next/link',;
;
export default function AdminIndex() {;
  return (;
    <div className="space-y-2">;
      <h1 className="text-2xl font-semibold">Admin</h1>;
      <ul className="list-disc pl-6">;
        <li><Link href="/admin/partners"><a className="text-blue-600 underline">Partners</a></Link></li>;
      </ul>;
    </div>;
  ),;
=======
import Link from 'next/link',
export default function AdminIndex() {
  return (
    <div className=&quot;space-y-2&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Admin</h1>
      <ul className=&quot;list-disc pl-6&quot;>
        <li><Link href=&quot;/admin/partners&quot;><a className=&quot;text-blue-600 underline&quot;>Partners</Link></Link></li>
      </ul>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}