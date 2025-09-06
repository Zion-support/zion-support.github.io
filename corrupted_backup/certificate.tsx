import { useRouter } from 'next/router',
import CertificatePreview from '../../../components/learn/CertificatePreview',
export default function CertificatePage() {
  const router = useRouter(),
  const { courseId } = router.query as { courseId: string },
  if (!courseId) return null,
  return (
<<<<<<< HEAD:pages/learn/[courseId]/certificate.tsx
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Certificate</h1>
      <CertificatePreview courseId={courseId} />
    </div>
  )
}
=======
<<<<<<< HEAD
    <div className='space-y-4'>
      <h1 className='text-2xl font-semibold'>Certificate</h1>
      <CertificatePreview courseId={courseId} />
    </div>
=======
    <main className="min-h-screen bg-black text-zinc-100 p-8">
      <section className="prose prose-invert max-w-3xl mx-auto">
        <h1>learn [courseId] certificate</h1>
        <p>Auto-healed placeholder. Replace with real content.</p>
      </section>
    </main>
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  );
}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/certificate.tsx
