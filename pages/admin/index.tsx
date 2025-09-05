import Link from 'next/link';

export default function AdminIndex() {
  return (
    <div className=&quot;space-y-2&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Admin</h1>
      <ul className=&quot;list-disc pl-6&quot;>
        <li><Link href=&quot;/admin/partners&quot;><a className=&quot;text-blue-600 underline&quot;>Partners</Link></Link></li>
      </ul>
    </div>
  );
}