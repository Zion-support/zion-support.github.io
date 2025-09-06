<<<<<<< HEAD
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/resume/preview',
      permanent: false,
    },
  };
};

export default function ResumeIndex() {
  return null;
=======
import React from 'react';
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 p-8">
      <section className="prose prose-invert max-w-3xl mx-auto">
        <h1>resume index</h1>
        <p>Auto-healed placeholder. Replace with real content.</p>
      </section>
    </main>
  );
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
}
