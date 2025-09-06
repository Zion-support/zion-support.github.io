import Link from "next/link";

<<<<<<< HEAD
import Link from "next/link";
export default function ReportProblemButton({
  projectId
  entityType
  entityId
}: {
=======




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  projectId,
  entityType,
  entityId,
}: {;
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  projectId: string;
  entityType?: "milestone" | "contract" | "thread";
  entityId?: string;
}) {
  const query = new URLSearchParams({
    projectId
    ...(entityType ? { entityType } : {})
    ...(entityId ? { entityId } : {})

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

  });

  return (
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

  });
  return (
    <Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm"></a>;
    </Link>;

  );
}
=======
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });
=======
  });



  return (
    <Link href={`/disputes/new?${query.toString()}`}>
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm">
        Report a Problem
      </a>
    </Link>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
<<<<<<< HEAD
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 25b772ac8bd79941dee781476b83a226cf2dd161
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
}

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
  );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
