<<<<<<< HEAD
import React from 'react';
export default function Page() {
  return (

=======
import { useRouter } from 'next/router',
import CertificatePreview from '../../../components/learn/CertificatePreview',
export default function CertificatePage() {
  const router = useRouter(),
  const { courseId } = router.query as { courseId: string },
  if (!courseId) return null,
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Certificate</h1>
      <CertificatePreview courseId={courseId} />
    </div>
  )
}
    <div className='space-y-4'>
      <h1 className='text-2xl font-semibold'>Certificate</h1>
      <CertificatePreview courseId={courseId} />
    </div>
    <main className="min-h-screen bg-black text-zinc-100 p-8">
      <section className="prose prose-invert max-w-3xl mx-auto">
        <h1>learn [courseId] certificate</h1>
        <p>Auto-healed placeholder. Replace with real content.</p>
      </section>
    </main>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );
}
