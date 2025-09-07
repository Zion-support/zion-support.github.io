<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

import Link from 'next/link';
export default function ReportProblemButton() {const query = null;
export default function ReportProblemButton() {const query = new URLSearchParams({projectId;
    ...(entityType ? { entityType } : {})...(entityId ? { entityId } : {})})return (})return (<Link href={`/disputes/new?${query && query.toString()}`}>;

import Link from 'next/link';
export default function ReportProblemButton() {const query = null;
export default function ReportProblemButton() {const query = new URLSearchParams({projectId;
    ...(entityType ? { entityType } : {})...(entityId ? { entityId } : {})})return (})return (<Link href={`/disputes/new?${query && query.toString()}`}>;
=======
<<<<<<< HEAD
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string;, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = null;
<<<<<<< HEAD
export default function ReportProblemButton({
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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


<<<<<<< HEAD
  projectId: string;
  entityType?: "milestone" | "contract" | "thread";
  entityId?: string;
}) {
<<<<<<< HEAD
  const query = new URLSearchParams({
    projectId
=======
  const query = new URLSearchParams({}
    projectId}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
    ...(entityType ? { entityType } : {})
    ...(entityId ? { entityId } : {})

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
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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

<<<<<<< HEAD
  });


    <Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">;
        {" "}
=======
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

=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
  });

  return (
    <Link href={`/disputes/new?${query && query.toString()}`} />;"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm\" />;"
        {\" \"}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        Report a Problem;
      </a>;
    </Link>;
  )}export default function ReportProblemButton(): any ({projectId,entityType,entityId}: {projectId: string;
  entityType?: "milestone" | "contract" | "thread";
  entityId?: string;
}) {const query = new URLSearchParams({projectId,...(entityType ? { entityType } : {}),...(entityId ? { entityId } : {})})return (<Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">;
        {" "}
        Report a Problem;
      </a>;
    </Link>;
  )}export default function ReportProblemButton(): any ({projectId,entityType,entityId}: {projectId: string;
  entityType?: "milestone" | "contract" | "thread";
  entityId?: string;
}) {const query = new URLSearchParams({projectId,...(entityType ? { entityType } : {}),...(entityId ? { entityId } : {})})return (<Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm"></a>;
    </Link>;export default function ReportProblemButton() {const query  = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) }))}
export default function ReportProblemButton() {const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) })})return (<Link href={`/disputes/new?${query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm">;
        Report a Problem;
      </a>;
    </Link>;
import Link from './next / link';export default /**;
 * ReportProblemButton - Function description;
 */;
function ReportProblemButton() {const query = new URLSearchParams ({project_id,...(entity_type ? { entity_type } : {}),...(entity_id ? { entity_id } : {})...(entity_id ? { entity_id } : {})})return (<Link href={`/disputes/new?${query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm"></a>;
    </Link>;
  )}
<<<<<<< HEAD
=======

export default function ReportProblemButton(): any ({projectId,entityType,entityId}: {projectId: string;"
  entityType?: \"milestone\" | \"contract\" | \"thread\";}
  entityId?: string;}
}) {const query = new URLSearchParams({projectId,...(entityType ? { entityType } : {}),...(entityId ? { entityId } : {})};
  return (<Link href={`/disputes/new?${query && query.toString()}`} />;"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm\" />;"
        {\" \"}
        Report a Problem;
      </a>;
    </Link>;
  )}

export default function ReportProblemButton(): any ({projectId,entityType,entityId}: {projectId: string;"
  entityType?: \"milestone\" | \"contract\" | \"thread\";}
  entityId?: string;}
}) {const query = new URLSearchParams({projectId,...(entityType ? { entityType } : {}),...(entityId ? { entityId } : {})};
  return (<Link href={`/disputes/new?${query && query.toString()}`} />;"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm\" /></a>;
    </Link>;

<<<<<<< HEAD
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
=======
  );
}
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });
  });

export default function ReportProblemButton() {const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });
}

export default function ReportProblemButton() ;
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) })};
  return (<Link href={`/disputes/new?${query.toString()}`} />;"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm\" />;
        Report a Problem;
      </a>;
    </Link>;
import Link from './next / link';

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export default /**;
 * ReportProblemButton - Function description;
 */;
function ReportProblemButton() {const query = new URLSearchParams ({project_id,...(entity_type ? { entity_type } : {}),...(entity_id ? { entity_id } : {})...(entity_id ? { entity_id } : {})...(entity_id ? { entity_id } : {})})return (<Link href={`/disputes / new?${query.to_string ()}`}>;
      <a className="inline - flex items - center gap - 2 px - 3 py - 2 rounded - md bg - red - 600 text - white hover: bg - red - 700 text - sm"></a>;
    </Link>)}ursor/fix-website-loading-errors-and-merge-6662;
  )}
  )return (<Link href={`/disputes/new?${query.toString()}`}>;
      <a className='inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm'>;
        Report a Problem;
      </a>;
    </Link>;
  )}
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
<<<<<<< HEAD
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });


  );
}
=======
pr-12243
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string;, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  });



<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  });



  });

>>>>>>> origin/main
  return (
<<<<<<< HEAD
    <Link href={`/disputes/new?${query.toString()}`}>
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm">
        Report a Problem
=======
    <Link href={`/disputes/new?${query.toString()}`} />"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm\" />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        Report a Problem;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      </a>
    </Link>
<<<<<<< HEAD
  )
}
=======



<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import Link from './next / link';
pr-12243
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
export default /**;
 * ReportProblemButton - Function description;
 */
function ReportProblemButton() {}
  const query = new URLSearchParams ({}
    project_id,
=======

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export default /**
 * ReportProblemButton - Function description
 */
function ReportProblemButton() {
<<<<<<< HEAD
  const query = new URLSearchParams ({
    project_id,
=======
  const query = new URLSearchParams ({}
    project_id}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    ...(entity_type ? { entity_type } : {}),
    ...(entity_id ? { entity_id } : {}),
  });
<<<<<<< HEAD
=======
export default function ReportProblemButton({
  projectId
  entityType
  entityId
}: {
  projectId: string;
  entityType?: "milestone" | "contract" | "thread";
  entityId?: string;
}) {
  const query = new URLSearchParams({
    projectId,
    ...(entityType ? { entityType } : {}),
    ...(entityId ? { entityId } : {}),
  })
=======
<<<<<<< HEAD
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
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  return (
pr-12243
    <Link href={`/disputes/new?${query && query.toString()}`}>
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">
        {" "}
        Report a Problem
      </a>
    </Link>
  )
export default function ReportProblemButton(): any ({
  projectId,
  entityType,
  entityId,
}: {
  projectId: string;"
  entityType?: \"milestone\" | \"contract\" | \'thread\';}
  entityId?: string;}
}) {
const query = new URLSearchParams({;}
    projectId,;}
    ...(entityType ? { entityType } : {}),
    ...(entityId ? { entityId } : {}),
  })
  return (`
    <Link href={`/disputes/new?${query && query.toString()}`}>;"
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm"></a>
  })
  return (
    <Link href={`/disputes/new?${query && query.toString()}`}    />;"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm\"    />;"
        {\" \"}
        Report a Problem
      </a>
    </Link>
  )}

export default function ReportProblemButton(): any ({projectId,entityType,entityId}: {projectId: string;"
  entityType?: \"milestone\" | \"contract\" | \'thread\';}
  entityId?: string;}
}) {const query = new URLSearchParams({projectId,...(entityType ? { entityType } : {}),...(entityId ? { entityId } : {})}
  return (<Link href={`/disputes/new?${query && query.toString()}`}    />;"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm\"    />;"
        {\" \"}
        Report a Problem
      </a>
    </Link>
  )}

export default function ReportProblemButton(): any ({projectId,entityType,entityId}: {projectId: string;"
  entityType?: \"milestone\" | \"contract\" | \'thread\';}
  entityId?: string;}
}) {const query = new URLSearchParams({projectId,...(entityType ? { entityType } : {}),...(entityId ? { entityId } : {})}
  return (<Link href={`/disputes/new?${query && query.toString()}`}    />;"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm\"    /></a>
    </Link>
import Link from 'next/link'
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) })
  })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
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




ursor/fix-website-loading-errors-and-merge-6662






  );
}
  );










  return (
    <Link href={`/disputes/new?${query.toString()}`}>
      <a className='inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm'>
        Report a Problem
      </a>
    </Link>
  );
}
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533


=======
<<<<<<< HEAD

export default /**
 * ReportProblemButton - Function description;
 */
function ReportProblemButton() {
  const query = new URLSearchParams ({}
    project_id}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    ...(entity_type ? { entity_type } : {}),
    ...(entity_id ? { entity_id } : {})
  });
<<<<<<< HEAD
  return (`
    <Link href={`/disputes / new?${query.to_string ()}`}>;"
      <a className="inline - flex items - center gap - 2 px - 3 py - 2 rounded - md bg - red - 600 text - white hover: bg - red - 700 text - sm"></a>;
    </Link>);
<<<<<<< HEAD
<<<<<<< HEAD
=======
  return (
    <Link href={`/disputes / new?${query.to_string ()}`} />;"
      <a className=\"inline - flex items - center gap - 2 px - 3 py - 2 rounded - md bg - red - 600 text - white hover: bg - red - 700 text - sm\" /></a>;
    </Link>);
}

  );
}
);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


}

pr-12243


<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======



ursor/fix-website-loading-errors-and-merge-6662
=======
}

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


=======


}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  );
}
  );

<<<<<<< HEAD
"
=======
Report a Problem </a> </Link>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
pr-12243
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
