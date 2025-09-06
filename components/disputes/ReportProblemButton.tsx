<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Link from "next/link";

import Link from "next/link";
export default function ReportProblemButton({
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = null;
export default function ReportProblemButton({
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  projectId
  entityType
  entityId
}: {
  projectId,
  entityType,
  entityId,
}: {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  projectId: string;
  entityType?: "milestone" | "contract" | "thread";
  entityId?: string;
}) {
  const query = new URLSearchParams({
    projectId
    ...(entityType ? { entityType } : {})
<<<<<<< HEAD
    ...(entityId ? { entityId } : {})  });
=======
    ...(entityId ? { entityId } : {})

  });

<<<<<<< HEAD
  return (
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

    <Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">;
        {" "}
        Report a Problem;
      </a>;
    </Link>;
  );
}

export default function ReportProblemButton(): any ({;
  projectId,;
  entityType,;
  entityId,;
}: {;
  projectId: string;
  entityType?: "milestone" | "contract" | "thread";
  entityId?: string;
}) {;
  const query = new URLSearchParams({;
    projectId,;
    ...(entityType ? { entityType } : {}),;
    ...(entityId ? { entityId } : {}),;

<<<<<<< HEAD
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm"></a>;
    </Link>;

<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
=======
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  });

=======
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });

  });






>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  return (
    <Link href={`/disputes/new?${query.toString()}`}>
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm">
        Report a Problem
      </a>
    </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import Link from './next / link';
;
export default /**
 * ReportProblemButton - Function description
 */
function ReportProblemButton() {
  const query = new URLSearchParams ({
    project_id,
    ...(entity_type ? { entity_type } : {}),
    ...(entity_id ? { entity_id } : {}),
<<<<<<< HEAD
=======
}
export default function ReportProblemButton({
  projectId,
  entityType,
  entityId,
}: {;

  projectId: string;
  entityType?: "milestone" | "contract" | "thread";
  entityId?: string;
}) {
  const query = new URLSearchParams({
    projectId
    ...(entityType ? { entityType } : {})
    ...(entityId ? { entityId } : {})

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  });
  return (
    <Link href={`/disputes/new?${query.toString()}`}>
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm"></a>
    </Link>
  );
}
export default /**
 * ReportProblemButton - Function description
 */
function ReportProblemButton() {
  const query = new URLSearchParams ({
    project_id,
    ...(entity_type ? { entity_type } : {}),
    ...(entity_id ? { entity_id } : {}),
  });
  return (
    <Link href={`/disputes / new?${query.to_string ()}`}>;
      <a className="inline - flex items - center gap - 2 px - 3 py - 2 rounded - md bg - red - 600 text - white hover: bg - red - 700 text - sm"></a>;
    </Link>);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}

<<<<<<< HEAD
=======
  );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======



ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 61d39dd026fe5549161165ead85b131541010508


  );
}
  );


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}  });

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  return (
    <Link href={`/disputes/new?${query.toString()}`}>
      <a className='inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm'>
        Report a Problem
      </a>
    </Link>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
