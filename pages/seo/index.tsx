import React from 'react';
export default function Page() {
  return (
<<<<<<< HEAD
    <div>
      <h1 className='text-2xl font-semibold mb-4'>SEO Landing Pages</h1>
      {slugs.length === 0 ? (
        <div className='text-sm text-gray-500'>
          Generated pages will appear once deployed.
        </div>
      ) : (
        <ul className='list-disc ml-5'>
          {slugs.map(s => (
            <li key={s}>
              <a className='text-cyan-600' href={`/seo/${s}`}>
                {s}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
=======
    <main className="min-h-screen bg-black text-zinc-100 p-8">
      <section className="prose prose-invert max-w-3xl mx-auto">
        <h1>seo index</h1>
        <p>Auto-healed placeholder. Replace with real content.</p>
      </section>
    </main>
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  );
}
