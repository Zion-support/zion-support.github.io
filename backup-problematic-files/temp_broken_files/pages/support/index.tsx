import { GetServerSideProps } from 'next',;
;
export const getServerSideProps:GetServerSideProps = async () => {;
  return {;
    redirect:{;
      destination:'/help',;
      permanent:false}},;
},;
;
export default function SupportRedirect() { return null, }import React from 'react';
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 p-8">
      <section className="prose prose-invert max-w-3xl mx-auto">
        <h1>support index</h1>
        <p>Auto-healed placeholder. Replace with real content.</p>
      </section>
    </main>
  );
}
