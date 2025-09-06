<<<<<<< HEAD
<<<<<<< HEAD


import Link from "next/link";
export default function ReportProblemButton({
=======





  projectId,
  entityType,
  entityId,
}: {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  projectId: string;
  entityType?: "milestone" | "contract" | "thread";
  entityId?: string;
}) {
  const query = new URLSearchParams({
    projectId
    ...(entityType ? { entityType } : {})
    ...(entityId ? { entityId } : {})
<<<<<<< HEAD
  });

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default function ReportProblemButton(): any ({;
  projectId,;
  entityType,;
  entityId,;
}: {;

import Link from "next/link";
export default function ReportProblemButton({
projectId
  entityType
  entityId
}: {

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  });
  return (
    <Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm"></a>;
    </Link>;

  );
}
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });
<<<<<<< HEAD
=======
  });



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Link href={`/disputes/new?${query.toString()}`}>
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm">
        Report a Problem
      </a>
    </Link>
<<<<<<< HEAD

<<<<<<< HEAD
  projectId: string;
  entityType?: "milestone" | "contract" | "thread";
  entityId?: string;
}) {
  const query = new URLSearchParams({
    projectId
    ...(entityType ? { entityType } : {})
    ...(entityId ? { entityId } : {})
  });
  return (
    <Link href={`/disputes/new?${query.toString()}`}>
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm"></a>
    </Link>

=======
=======
);
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

  });
  return (
    <Link href={`/disputes / new?${query.to_string ()}`}>;
      <a className="inline - flex items - center gap - 2 px - 3 py - 2 rounded - md bg - red - 600 text - white hover:bg - red - 700 text - sm">;
        {" "}
        Report a Problem;
      </a>;
    </Link>);
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
        Report a Problem
      </a>
    </Link>
)

}

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
