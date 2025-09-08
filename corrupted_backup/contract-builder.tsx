<<<<<<< HEAD

=======
import { useEffect } from 'react',;
import { useRouter } from 'next/router',;
export default function ContractBuilderRedirect() {;
  const router = useRouter();
  useEffect(() => {;
    router.replace('/automation/contract-builder');
  }, [router]);
  return null;
}
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ContractBuilderRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/automation/contract-builder');
  }, [router]);
  return null;
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
