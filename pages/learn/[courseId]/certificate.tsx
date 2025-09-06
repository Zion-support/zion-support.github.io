

import { useRouter } from 'next/router';
import CertificatePreview from '../../../components/learn/CertificatePreview';
export default function CertificatePage() {
  const router = useRouter()
  const { courseId } = router.query as { courseId: string }
  if (!courseId) return null

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Certificate</h1>
      <CertificatePreview courseId={courseId} />
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
  );
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
