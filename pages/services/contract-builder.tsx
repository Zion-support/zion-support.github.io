<<<<<<< HEAD
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ContractBuilderRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/automation/contract-builder');
  }, [router]);
  return null;
=======
import React from 'react';
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 p-8">
      <section className="prose prose-invert max-w-3xl mx-auto">
        <h1>services contract-builder</h1>
        <p>Auto-healed placeholder. Replace with real content.</p>
      </section>
    </main>
  );
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
}
