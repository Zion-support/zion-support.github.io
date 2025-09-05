<<<<<<< HEAD
import { useRouter } from 'next/router',
import CertificatePreview from '../../../components/learn/CertificatePreview',
export default function CertificatePage() {
  const router = useRouter(),
  const { courseId } = router.query as { courseId: string },
  if (!courseId) return null,
  return (
    <div className=&quot;space-y-4&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Certificate</h1>
      <CertificatePreview courseId={courseId} />
=======
import CertificatePreview from '../../../components/learn/CertificatePreview';

export default function CertificatePage() {_const _router = useRouter();
  const { courseId} = router.query as {_courseId: string};
  if (!courseId) return null;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Certificate</h1>
      <CertificatePreview courseId={_courseId} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </div>
  )
}