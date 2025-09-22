<<<<<<< HEAD
import React from 'react'
export default function CertificatePreview({ courseId, userId = 'demo-user' }: { courseId: string, userId?: string }) {
  const url = `/api/learn/certificates/${courseId}?userId=${encodeURIComponent(userId)}`
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React from "react";
export default function CertificatePreview({
  courseId,
  userId = "demo-user",
}: {
  courseId: string;
  userId?: string;
}) {
  const url = `/api/learn/certificates/${courseId}?userId=${encodeURIComponent(userId)}`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <div className="border rounded p-4">
      <div className="text-sm text-gray-600">Zion Certificate</div>
      <div className="mt-2 h-40 bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center rounded">
        <div className="text-center">
          <div className="text-xl font-semibold">Certificate of Completion</div>
          <div className="text-xs opacity-80">Preview</div>
        </div>
      </div>
<<<<<<< HEAD
      <a href={url} className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded">Download PDF</a>
    </div>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
=======
      <a
        href={url}
        className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Download PDF
      </a>
    </div>
  );
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
