import CertificatePreview from '../../../components/learn/CertificatePreview';

export default function CertificatePage() {_const _router = useRouter();
  const { courseId} = router.query as {_courseId: string};
  if (!courseId) return null;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Certificate</h1>
      <CertificatePreview courseId={_courseId} />
    </div>
  );
}