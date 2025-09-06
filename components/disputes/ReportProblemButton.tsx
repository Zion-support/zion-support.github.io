<<<<<<< HEAD
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = null;
export default function ReportProblemButton({
origin/cursor/automate-test-improve-and-merge-code-2533
  projectId
  entityType
  entityId
}: {
=======
  projectId;
  entityType;
  entityId;
}: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  projectId,
  entityType,
  entityId,
}: {;
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  projectId: string;
  entityType?: "milestone" | "contract" | "thread";
  entityId?: string;
}) {}
  const query = new URLSearchParams({}
    projectId;
    ...(entityType ? { entityType } : {})
    ...(entityId ? { entityId } : {})

<<<<<<< HEAD
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

pr-12243
  });

  return (
pr-12243
    <Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">;
=======
  });

  return (


    <Link href={`/disputes/new?${query && query.toString()}`}>;"
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        {" "}
        Report a Problem;
      </a>;
    </Link>;
  );
}

<<<<<<< HEAD
pr-12243
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export default function ReportProblemButton(): any ({;
  projectId,;
  entityType,;
  entityId,;
}: {;
  projectId: string;"
  entityType?: "milestone" | "contract" | "thread";
  entityId?: string;
}) {;
  const query = new URLSearchParams({;
    projectId,;
    ...(entityType ? { entityType } : {}),;
    ...(entityId ? { entityId } : {}),;

<<<<<<< HEAD
pr-12243
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  });
  return (`
    <Link href={`/disputes/new?${query && query.toString()}`}>;"
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm"></a>;
    </Link>;

<<<<<<< HEAD
  );
}
pr-12243
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  });




<<<<<<< HEAD

  return (
    <Link href={`/disputes/new?${query.toString()}`}>
=======
  return (`
    <Link href={`/disputes/new?${query.toString()}`}>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm">
        Report a Problem;
      </a>
    </Link>

<<<<<<< HEAD
pr-12243
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import Link from './next / link';
;
export default /**;
 * ReportProblemButton - Function description;
 */
function ReportProblemButton() {}
  const query = new URLSearchParams ({}
    project_id,
    ...(entity_type ? { entity_type } : {}),
    ...(entity_id ? { entity_id } : {}),
  });
  return (`
    <Link href={`/disputes/new?${query.toString()}`}>"
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm"></a>
    </Link>
  );
}
export default /**;
 * ReportProblemButton - Function description;
 */
function ReportProblemButton() {}
  const query = new URLSearchParams ({}
    project_id,
    ...(entity_type ? { entity_type } : {}),
    ...(entity_id ? { entity_id } : {}),
  });
  return (`
    <Link href={`/disputes / new?${query.to_string ()}`}>;"
      <a className="inline - flex items - center gap - 2 px - 3 py - 2 rounded - md bg - red - 600 text - white hover: bg - red - 700 text - sm"></a>;
    </Link>);
<<<<<<< HEAD


}

pr-12243


=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  );
}
  );


<<<<<<< HEAD
  return (
    <Link href={`/disputes/new?${query.toString()}`}>
      <a className='inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm'>
        Report a Problem
      </a>
    </Link>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
