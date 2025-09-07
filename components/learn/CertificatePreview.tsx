<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';
export default function CertificatePreview({ courseId, userId;
export default function CertificatePreview({
  courseId
  userId = "demo-user"
}: {
<<<<<<< HEAD
=======
=======


<<<<<<< HEAD
import React from 'react';
export default function CertificatePreview({ courseId, userId;

import React from "react";
export default function CertificatePreview({
  courseId
  userId = "demo-user"
}: {
  courseId: string;
  userId?: string;
}) {
  const url = `/api/learn/certificates/${courseId}?userId=${encodeURIComponent(userId)}`;

=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react";


import React from "react";
export default function CertificatePreview({

  courseId,
  userId = "demo-user",
}: {;

<<<<<<< HEAD
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  courseId: string;
  userId?: string;
}) {;
  const url = `/api/learn/certificates/${courseId}?userId=${encodeURIComponent(userId)}`;
  const url = `/api/learn/certificates/${courseId}?userId=${encodeURIComponent(userId)}`;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <div className="border rounded p-4">
      <div className="text-sm text-gray-600">Zion Certificate</div>
      <div className="mt-2 h-40 bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center rounded">
        <div className="text-center">
          <div className="text-xl font-semibold">Certificate of Completion</div>
          <div className="text-xs opacity-80">Preview</div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </div>
      </div>
      <a
        href={url}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
  const url = `/api/learn/certificates/${courseId}?userId=${encodeURIComponent(userId)}`;"
=======

=======
        </div>
      </div>
      <a
        href={url}
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
  const url = `/api/learn/certificates/${courseId}?userId=${encodeURIComponent(userId)}`;"
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';
export default function CertificatePreview({ courseId, userId = 'demo-user' }: { courseId: string, userId?: string }) {

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Download PDF;
      </a>
    </div>
  );`
  const url = `/api/learn/certificates/${courseId}?userId=${encodeURIComponent(userId)}`;
  return ("
    <div className="border rounded p-4">"
      <div className="text-sm text-gray-600">Zion Certificate</div>"
      <div className="mt-2 h-40 bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center rounded">"
        <div className="text-center">"
          <div className="text-xl font-semibold">Certificate of Completion</div>"
          <div className="text-xs opacity-80">Preview</div>"
        </div>
      </div>
      <a;
        href={url}"
        className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Download PDF;
      </a>
    </div>

<<<<<<< HEAD
`
=======
<<<<<<< HEAD
`
=======

<<<<<<< HEAD
        className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded">;
        Download PDF;
      </a>;
    </div>;
  );
import React from 'react';
export default function CertificatePreview({ courseId, userId = 'demo-user' }: { courseId: string, userId?: string }) {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const url = `/api/learn/certificates/${courseId}?userId=${encodeURIComponent(userId)}`;
  return ("
    <div className="border rounded p-4">;"
      <div className="text-sm text-gray-600">Zion Certificate</div>;"
      <div className="mt-2 h-40 bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center rounded">;"
        <div className="text-center">;"
          <div className="text-xl font-semibold">Certificate of Completion</div>;"
          <div className="text-xs opacity-80">Preview</div>;
        </div>;
      </div>;
      <a;
        href={url}"
        className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded">;
        Download PDF;
      </a>;
    </div>;
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}

}

<<<<<<< HEAD
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from './react';
;
export default /**;
 * CertificatePreview - Function description;
 */
function CertificatePreview() {}`
  const url = `/api / learn / certificates/${course_id}?user_id=${encodeURIComponent (user_id)}`;
  return ("
    <div className="border rounded p - 4">;"
      <div className="text - sm text - gray - 600">Zion Certificate</div>;"
      <div className="mt - 2 h - 40 bg - gradient - to - br from - slate - 800 to - slate - 900 text - white flex items - center justify - center rounded">;"
        <div className="text - center">;"
          <div className="text - xl font - semibold">Certificate of Completion</div>;"
          <div className="text - xs opacity - 80">Preview</div>;
        </div>;
      </div>;
      <a;
        href={url}"
        className="mt - 3 inline - block px - 4 py - 2 bg - indigo - 600 text - white rounded";
      >;
        Download PDF;
      </a>;
    </div>);`
  const url = `/api / learn / certificates/${course_id}?user_id=${encodeURIComponent (user_id)}`;
  return ("
    <div className="border rounded p - 4">;"
      <div className="text - sm text - gray - 600">Zion Certificate</div>;"
      <div className="mt - 2 h - 40 bg - gradient - to - br from - slate - 800 to - slate - 900 text - white flex items - center justify - center rounded">;"
        <div className="text - center">;"
          <div className="text - xl font - semibold">Certificate of Completion</div>;"
          <div className="text - xs opacity - 80">Preview</div>;
        </div>;
      </div>;
      <a;
        href={url}"
        className="mt - 3 inline - block px - 4 py - 2 bg - indigo - 600 text - white rounded";
      >;
        Download PDF;
      </a>;
    </div>);
origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
origin/cursor/automate-test-improve-and-merge-code-2533
  courseId: string;}
  userId?: string;}
}) {;}
}
const url = `/api/learn/certificates/${courseId}?userId=${encodeURIComponent(userId)}`;
<<<<<<< HEAD
=======
=======
  return (
    <div className=&quot;border rounded p-4&quot;>
      <div className=&quot;text-sm text-gray-600&quot;>Zion Certificate</div>
      <div className=&quot;mt-2 h-40 bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center rounded&quot;>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-xl font-semibold&quot;>Certificate of Completion</div>
          <div className=&quot;text-xs opacity-80&quot;>Preview</div>
        </div>
      </div>
      <a href={url} className=&quot;mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded&quot;>Download PDF</a>
    </div>
  )

}
<<<<<<< HEAD


import React from "react";
export default function CertificatePreview({
courseId
  userId = "demo-user"
}: {
import React from "react";

import React from "react";
export default function CertificatePreview({
  courseId
  userId = "demo-user"
}: {
  courseId,
  userId = "demo-user",
}: {;
  courseId: string;
  userId?: string;
}) {
  const url = `/api/learn/certificates/${courseId}?userId=${encodeURIComponent(userId)}`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  return (
    <div className="border rounded p-4">
      <div className="text-sm text-gray-600">Zion Certificate</div>
      <div className="mt-2 h-40 bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center rounded">
        <div className="text-center">
          <div className="text-xl font-semibold">Certificate of Completion</div>
          <div className="text-xs opacity-80">Preview</div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  return (
    <div className="border rounded p-4">
      <div className=text-sm text-gray-600>Zion Certificate</div>
      <div className="mt-2 h-40 bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center rounded">
        <div className=text-center>
          <div className="text-xl font-semibold">Certificate of Completion</div>
          <div className=text-xs opacity-80>Preview</div>
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </div>
      </div>
      <a
        href={url}
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Download PDF
      </a>
    </div>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD

"
  );
  const url = `/api/learn/certificates/${courseId}?userId=${encodeURIComponent(userId)}`;
  return (
    <div className="border rounded p-4">
      <div className="text-sm text-gray-600">Zion Certificate</div>
      <div className="mt-2 h-40 bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center rounded">
        <div className="text-center">
          <div className="text-xl font-semibold">Certificate of Completion</div>
          <div className="text-xs opacity-80">Preview</div>
        </div>
      </div>
      <a
        href={url}"
        className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Download PDF
      </a>
    </div>
  );
}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
origin/cursor/automate-test-improve-and-merge-code-2533
=======


import React from 'react';

export default function CertificatePreview({ courseId, userId;

export default function CertificatePreview({
  courseId;}
userId = \"demo-user\"}
}: {
  courseId: string;}
  userId?: string;}
}) {;}
}
const url = `/api/learn/certificates/${courseId}?userId=${encodeURIComponent(userId)}`;

  return ("
    <div className=\"border rounded p-4\"    />"
      <div className=\"text-sm text-gray-600\"    />Zion Certificate</div>"
      <div className=\"mt-2 h-40 bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center rounded\"    />"
        <div className=\"text-center\"    />"
          <div className=\"text-xl font-semibold\"    />Certificate of Completion</div>"
          <div className=\"text-xs opacity-80\"    />Preview</div>
        </div>
      </div>
      <a;
href={url}"
        className=\"mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded\"
          />
        Download PDF;
      </a>
    </div>
  );


"
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
);
  );
  const url = `/api/learn/certificates/${courseId}?userId=${encodeURIComponent(userId)}`;
  return (
    <div className="border rounded p-4">
      <div className="text-sm text-gray-600">Zion Certificate</div>
      <div className="mt-2 h-40 bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center rounded">
        <div className="text-center">
          <div className="text-xl font-semibold">Certificate of Completion</div>
          <div className="text-xs opacity-80">Preview</div>
        </div>
      </div>
      <a
        href={url}
        className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Download PDF
      </a>
    </div>
  );
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
