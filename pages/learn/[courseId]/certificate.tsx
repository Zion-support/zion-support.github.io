import { useRouter } from 'next/router';
import CertificatePreview from '../../../components/learn/CertificatePreview';

export default function CertificatePage() {
  const router = useRouter();
  const { courseId } = router.query as { courseId: string };
  if (!courseId) return null;
  return (
    <div className=&quot;space-y-4&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Certificate</h1>
      <CertificatePreview courseId={courseId} />
    </div>
  );
}