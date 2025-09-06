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
  ),;}
import React from 'react';
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 p-8">
      <section className="prose prose-invert max-w-3xl mx-auto">
        <h1>admin index</h1>
        <p>Auto-healed placeholder. Replace with real content.</p>
      </section>
    </main>
  );
}
