<<<<<<< HEAD


=======
<<<<<<< HEAD
=======

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useRouter } from 'next/router';
import CertificatePreview from '../../../components/learn/CertificatePreview';
export default function CertificatePage() {
  const router = useRouter()
  const { courseId } = router.query as { courseId: string }
  if (!courseId) return null
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Certificate</h1>
      <CertificatePreview courseId={courseId} />
    </div>
<<<<<<< HEAD

<<<<<<< HEAD
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
=======
}

=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  );
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  )
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
    </div>
  )

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
