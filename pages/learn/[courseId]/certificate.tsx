import React from 'react';
export default function Page() {
<<<<<<< HEAD
=======
import { useRouter } from 'next/router';
import CertificatePreview from '../../../components/learn/CertificatePreview';
export default function CertificatePage() {
  const router = useRouter();
  const { courseId } = router.query as { courseId: string },
  if (!courseId) return null;
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl font-semibold'>Certificate</h1>
      <CertificatePreview courseId={courseId} />
    </div>
<<<<<<< HEAD
  );
=======
  );
import { useRouter } from 'next/router';
import CertificatePreview from '../../../components/learn/CertificatePreview';
export default function CertificatePage() {
  const router = useRouter();
  const { courseId } = router.query as { courseId: string },
  if (!courseId) return null;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Certificate</h1>
      <CertificatePreview courseId={courseId} />
    </div>
  )
}
  )
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
