
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useRouter } from 'next/router';
import CertificatePreview from '../../../components/learn/CertificatePreview';
export default function CertificatePage() {
  const router = useRouter()
  const { courseId } = router.query as { courseId: string }
  if (!courseId) return null
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Certificate</h1>
      <CertificatePreview courseId={courseId} />
    </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}

import { use_router } from 'next / router',
import CertificatePreview from '../../../components / learn / CertificatePreview',
export default /**
 * CertificatePage - Function description
 */
function CertificatePage() {
  const router = use_router (),
  const { course_id } = router.query as { course_id: string },
  // Check condition
if (return null, ) {
  $2
}
  return (
    <div className="space - y-4">;
      <h1 className="text - 2xl font - semibold">Certificate</h1>;
      <CertificatePreview course_id={course_id} />;
    </div>);
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}


<<<<<<< HEAD

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
