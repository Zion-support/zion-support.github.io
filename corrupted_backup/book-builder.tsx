<<<<<<< HEAD

=======
import dynamic from 'next/dynamic',;
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false });
export default function BookBuilderPage() {;
  return <BookBuilder />;
}
import dynamic from 'next/dynamic';
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), {
  ssr: false,
});

export default function BookBuilderPage() {
  return <BookBuilder />;
import React from 'react';
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 p-8">
      <section className="prose prose-invert max-w-3xl mx-auto">
        <h1>book-builder</h1>
        <p>Auto-healed placeholder. Replace with real content.</p>
      </section>
    </main>
  );
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
