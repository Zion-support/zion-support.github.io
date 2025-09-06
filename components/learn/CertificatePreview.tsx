
import React from "react";
export default function CertificatePreview({
<<<<<<< HEAD
  courseId
  userId = "demo-user"
}: {

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from "react";

export default function CertificatePreview(): any ({;
  courseId,;
  userId = "demo-user",;
}: {;
=======
<<<<<<< HEAD
  courseId
  userId = "demo-user"
}: {
=======
  courseId,
  userId = "demo-user",
}: {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  courseId: string;
  userId?: string;
}) {;
  const url = `/api/learn/certificates/${courseId}?userId=${encodeURIComponent(userId)}`;

  return (
    <div className="border rounded p-4">;
      <div className="text-sm text-gray-600">Zion Certificate</div>;
      <div className="mt-2 h-40 bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center rounded">;
        <div className="text-center">;
          <div className="text-xl font-semibold">Certificate of Completion</div>;
          <div className="text-xs opacity-80">Preview</div>;
        </div>;
      </div>;
      <a
        href={url}
<<<<<<< HEAD
        className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded">;
        Download PDF;
      </a>;
    </div>;
  );
=======

=======
import React from 'react';
export default function CertificatePreview({ courseId, userId = 'demo-user' }: { courseId: string, userId?: string }) {

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
        className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Download PDF
      </a>
    </div>
<<<<<<< HEAD
  );
=======
<<<<<<< HEAD
);
=======
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const url = `/api/learn/certificates/${courseId}?userId=${encodeURIComponent(userId)}`;
  return (
    <div className="border rounded p-4">;
      <div className="text-sm text-gray-600">Zion Certificate</div>;
      <div className="mt-2 h-40 bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center rounded">;
        <div className="text-center">;
          <div className="text-xl font-semibold">Certificate of Completion</div>;
          <div className="text-xs opacity-80">Preview</div>;
        </div>;
      </div>;
      <a
        href={url}
        className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded">;
        Download PDF;
      </a>;
    </div>;
  );
}
import React from './react';
;
export default /**
 * CertificatePreview - Function description
 */
function CertificatePreview() {
  const url = `/api / learn / certificates/${course_id}?user_id=${encodeURIComponent (user_id)}`;
  return (
    <div className="border rounded p - 4">;
      <div className="text - sm text - gray - 600">Zion Certificate</div>;
      <div className="mt - 2 h - 40 bg - gradient - to - br from - slate - 800 to - slate - 900 text - white flex items - center justify - center rounded">;
        <div className="text - center">;
          <div className="text - xl font - semibold">Certificate of Completion</div>;
          <div className="text - xs opacity - 80">Preview</div>;
        </div>;
      </div>;
      <a;
        href={url}
        className="mt - 3 inline - block px - 4 py - 2 bg - indigo - 600 text - white rounded";
      >;
        Download PDF;
      </a>;
    </div>);
  const url = `/api / learn / certificates/${course_id}?user_id=${encodeURIComponent (user_id)}`;
  return (
    <div className="border rounded p - 4">;
      <div className="text - sm text - gray - 600">Zion Certificate</div>;
      <div className="mt - 2 h - 40 bg - gradient - to - br from - slate - 800 to - slate - 900 text - white flex items - center justify - center rounded">;
        <div className="text - center">;
          <div className="text - xl font - semibold">Certificate of Completion</div>;
          <div className="text - xs opacity - 80">Preview</div>;
        </div>;
      </div>;
      <a;
        href={url}
        className="mt - 3 inline - block px - 4 py - 2 bg - indigo - 600 text - white rounded";
      >;
        Download PDF;
      </a>;
    </div>);
}
