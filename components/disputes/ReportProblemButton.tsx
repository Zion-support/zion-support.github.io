


import Link from "next/link";

import Link from "next/link";
export default function ReportProblemButton({
  projectId
  entityType
  entityId
}: {
=======
import Link from "next/link";




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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  });

  return (
=======

  });
return (    <Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">;
        {" "}
        Report a Problem;
      </a>;
    </Link>;
  );
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  });
  return (
    <Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm"></a>;
    </Link>;

  );
}



=======
=======
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });=======
  });


  return (
    <Link href={`/disputes/new?${query.toString()}`}>
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm">
        Report a Problem
      </a>
    </Link>
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
  });
  return (
=======
        Report a Problem
      </a>
    </Link>
)

}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
