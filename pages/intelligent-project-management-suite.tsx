<<<<<<< HEAD
import ServicePage, {
  getStaticProps as getSlugStaticProps,
} from './services/[slug]';

export async function getStaticProps() {
  return (getSlugStaticProps as any)({
    params: { slug: 'intelligent-project-management-suite' },
  });
}

export default function IntelligentProjectManagementSuite(props: any) {
  return <ServicePage {...props} />;
}
=======
import React from 'react';
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 p-8">
      <section className="prose prose-invert max-w-3xl mx-auto">
        <h1>intelligent-project-management-suite</h1>
        <p>Auto-healed placeholder. Replace with real content.</p>
      </section>
    </main>
  );
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
