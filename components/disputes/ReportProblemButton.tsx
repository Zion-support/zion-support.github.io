<<<<<<< HEAD
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = null;
export default function ReportProblemButton({
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
<<<<<<< HEAD
=======
  });


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

  });

  return (
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    <Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">;
        {" "}
        Report a Problem;
      </a>;
    </Link>;
  );
}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
pr-12243
=======
<<<<<<< HEAD


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
  );
}
pr-12243
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
  );
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  });



<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
<<<<<<< HEAD
pr-12243
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD


}

pr-12243


=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======



ursor/fix-website-loading-errors-and-merge-6662
=======
}

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


  );
}
  );


<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <Link href={`/disputes/new?${query.toString()}`}>
      <a className='inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm'>
        Report a Problem
      </a>
    </Link>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
pr-12243
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
