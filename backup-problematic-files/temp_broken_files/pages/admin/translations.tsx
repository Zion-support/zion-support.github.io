import dynamic from 'next/dynamic',;

const TranslationPreview = dynamic() => import('../../components/admin/TranslationPreview'), { ssr:false }),;

export default function TranslationsAdminPage() {;
  return (;
    <div className="container mx-auto px-4 py-8">;
      <TranslationPreview />;
    </div>;
  ),;}
import React from 'react';
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 p-8">
      <section className="prose prose-invert max-w-3xl mx-auto">
        <h1>admin translations</h1>
        <p>Auto-healed placeholder. Replace with real content.</p>
      </section>
    </main>
  );
