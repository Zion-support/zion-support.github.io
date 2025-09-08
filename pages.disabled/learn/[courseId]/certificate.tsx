



  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Certificate</h1>
      <CertificatePreview courseId={courseId} />
    </div>


)
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}

import { use_router } from 'next / router',
import CertificatePreview from '../../../components / learn / CertificatePreview',

}

import { use_router } from 'next / router',;
import CertificatePreview from '../../../components / learn / CertificatePreview',;
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

}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}



