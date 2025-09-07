<<<<<<< HEAD
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });
=======
import Link from 'next/link';
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
export default function ReportProblemButton() {const query = null;
}
<<<<<<< HEAD

export default function ReportProblemButton() {const query = new URLSearchParams({projectId;
    ...(entityType ? { entityType } : {})...(entityId ? { entityId } : {})})return (})return (<Link href={`/disputes/new?${query && query.toString()}`}>;

<<<<<<< HEAD
import Link from 'next/link';
export default function ReportProblemButton() {const query = null;
export default function ReportProblemButton() {const query = new URLSearchParams({projectId;
    ...(entityType ? { entityType } : {})...(entityId ? { entityId } : {})})return (})return (<Link href={`/disputes/new?${query && query.toString()}`}>;
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string;, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = null;
export default function ReportProblemButton({
origin/cursor/automate-test-improve-and-merge-code-2533
=======


import Link from "next/link";

import Link from "next/link";
export default function ReportProblemButton({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  projectId
  entityType
  entityId
}: {
<<<<<<< HEAD
  projectId;
  entityType;
  entityId;
}: {}
=======
export default function ReportProblemButton() {const query = new URLSearchParams({projectId;}
    ...(entityType ? { entityType } : {})...(entityId ? { entityId } : {})})return (})return (<Link href={`/disputes/new?${query && query.toString()}`}    />;
  projectId;
entityType,
entityId;
}: {
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  projectId,
  entityType}
  entityId}
}: {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  projectId: string;
  entityType?: "milestone" | "contract" | "thread";
  entityId?: string;
}) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const query = new URLSearchParams({
    }
    projectId
    ...(entityType ? { entityType } : {})
    ...(entityId ? { entityId } : {})

  });

  return (

    <Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm>;
        { "}
        Report a Problem;
      </a>;
    </Link>;
  );
}

  projectId: string;
  entityType?: "milestone | contract" | "thread;
  entityId?: string;
}) {}
  const query = new URLSearchParams({}
    projectId;
    ...(entityType ? { entityType } : {})
    ...(entityId ? { entityId } : {})

=======


  projectId: string;
  entityType?: \"milestone\" | \"contract\" | \'thread\';}
  entityId?: string;}
}) {
  const query = new URLSearchParams({}
    projectId}
    ...(entityType ? { entityType } : {})
    ...(entityId ? { entityId } : {})

>>>>>>> origin/chore/fix-lint-and-merge
export default function ReportProblemButton(): any ({;
  projectId,;
  entityType,;}
  entityId,;}
}: {;
  projectId: string;"
  entityType?: \"milestone\" | \"contract\" | \'thread\';}
  entityId?: string;}
}) {;

const query = new URLSearchParams({;}
    projectId,;}
    ...(entityType ? { entityType } : {}),;
    ...(entityId ? { entityId } : {}),;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  });

<<<<<<< HEAD
  });


    <Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">;
        {" "}
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
pr-12243


  });


  return (
pr-12243
    <Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">;
  });


  return (
pr-12243
    <Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className=inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">;
  });

  return (


    <Link href={`/disputes/new?${query && query.toString()}`}>;"
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">;"
        {" "}
        {" }
        Report a Problem;
      </a>;
    </Link>;
  );
}

pr-12243
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

pr-12243
  });
  return (`
    <Link href={`/disputes/new?${query && query.toString()}`}>;"
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm"></a>;
  });

  return (
    <Link href={`/disputes/new?${query && query.toString()}`} />;"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm\" />;"
        {\" \"}
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
export default function ReportProblemButton(): any ({projectId,entityType,entityId}: {projectId: string;"
  entityType?: \"milestone\" | \"contract\" | \"thread\";}
  entityId?: string;}
}) {const query = new URLSearchParams({projectId,...(entityType ? { entityType } : {}),...(entityId ? { entityId } : {})};
  return (<Link href={`/disputes/new?${query && query.toString()}`}>;`      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white "hover":bg-red-700 text-sm">;"
        {" "}"
=======
  return (
    <Link href={`/disputes/new?${query && query.toString()}`}    />;"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm\"    />;"
        {\" \"}
>>>>>>> origin/chore/fix-lint-and-merge
        Report a Problem;
      </a>;
    </Link>;
  )}

<<<<<<< HEAD
=======
export default function ReportProblemButton(): any ({projectId,entityType,entityId}: {projectId: string;"
  entityType?: \"milestone\" | \"contract\" | \'thread\';}
  entityId?: string;}
}) {const query = new URLSearchParams({projectId,...(entityType ? { entityType } : {}),...(entityId ? { entityId } : {})};
  return (<Link href={`/disputes/new?${query && query.toString()}`}    />;"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm\"    />;"
        {\" \"}
        Report a Problem;
      </a>;
    </Link>;
  )}

export default function ReportProblemButton(): any ({projectId,entityType,entityId}: {projectId: string;"
  entityType?: \"milestone\" | \"contract\" | \'thread\';}
  entityId?: string;}
}) {const query = new URLSearchParams({projectId,...(entityType ? { entityType } : {}),...(entityId ? { entityId } : {})};
  return (<Link href={`/disputes/new?${query && query.toString()}`}    />;"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm\"    /></a>;
>>>>>>> origin/chore/fix-lint-and-merge
    </Link>;

export default function ReportProblemButton() {const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });
}

export default function ReportProblemButton() ;
<<<<<<< HEAD

=======
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) })};
  return (<Link href={`/disputes/new?${query.toString()}`}    />;"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm\"    />;
        Report a Problem;
      </a>;
    </Link>;
import Link from './next / link';

export default /**;
 * ReportProblemButton - Function description;
 */;
function ReportProblemButton() {const query = new URLSearchParams ({project_id,...(entity_type ? { entity_type } : {}),...(entity_id ? { entity_id } : {})...(entity_id ? { entity_id } : {})};
  return (<Link href={`/disputes/new?${query.toString()}`}    />;"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm\"    /></a>;
>>>>>>> origin/chore/fix-lint-and-merge
    </Link>;
  )}

export default /**;
 * ReportProblemButton - Function description;
 */;
<<<<<<< HEAD

=======
function ReportProblemButton() {const query = new URLSearchParams ({project_id,...(entity_type ? { entity_type } : {}),...(entity_id ? { entity_id } : {})...(entity_id ? { entity_id } : {})...(entity_id ? { entity_id } : {})};
  return (<Link href={`/disputes / new?${query.to_string ()}`}    />;"
      <a className=\"inline - flex items - center gap - 2 px - 3 py - 2 rounded - md bg - red - 600 text - white hover: bg - red - 700 text - sm\"    /></a>;
    </Link>)}ursor/fix-website-loading-errors-and-merge-6662;
  )}
  )return (<Link href={`/disputes/new?${query.toString()}`}    />;
      <a className='inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm'    />;
>>>>>>> origin/chore/fix-lint-and-merge
        Report a Problem;
      </a>;
    </Link>;
  )}
  );
}
<<<<<<< HEAD

=======

export default function ReportProblemButton(): any ({;
  projectId,;
  entityType,;}
  entityId,;}
}: {;
  projectId: string;"
  entityType?: \"milestone\" | \"contract\" | \'thread\';}
  entityId?: string;}
}) {;

const query = new URLSearchParams({;}
    projectId,;}
    ...(entityType ? { entityType } : {}),;
    ...(entityId ? { entityId } : {}),;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  });
  return (
    <Link href={`/disputes/new?${query && query.toString()}`}    />;"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm\"    /></a>;
>>>>>>> origin/chore/fix-lint-and-merge
    </Link>;

  );
}
<<<<<<< HEAD
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });
<<<<<<< HEAD


  );
}
=======
<<<<<<< HEAD
  });




=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> origin/chore/fix-lint-and-merge
  });


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
<<<<<<< HEAD
    <Link href={`/disputes/new?${query.toString()}`}>
  return (`
    <Link href={`/disputes/new?${query.toString()}`}>"
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm">
      <a className=inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm>
  });



  });

>>>>>>> merged-prs-20250907-203621
  return (
    <Link href={`/disputes/new?${query.toString()}`}>
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm">
        Report a Problem
<<<<<<< HEAD
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
  return (
    <Link href={`/disputes/new?${query.toString()}`}>

      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm">

        Report a Problem
      </a>
=======
  return (

        Report a Problem;
      </a>
    </Link>
  )
}
pr-12243


import Link from './next / link';
pr-12243
import Link from ./next / link';
pr-12243
=======
    <Link href={`/disputes/new?${query.toString()}`}    />"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm\"    />
        Report a Problem;
      </a>
    </Link>
<<<<<<< HEAD
  );
}
export default function ReportProblemButton({
  projectId
  entityType
  entityId
}: {
);
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
    <Link href={`/disputes/new?${query.toString()}`}>
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm"></a>
    </Link>
);
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import Link from './next / link';
>>>>>>> origin/chore/fix-lint-and-merge
;

export default /**
 * ReportProblemButton - Function description;
 */
<<<<<<< HEAD
  const query = new URLSearchParams ({}
    project_id,

export default /**
 * ReportProblemButton - Function description
 */
function ReportProblemButton() {
  const query = new URLSearchParams ({
    }
    project_id,
    ...(entity_type ? { entity_type } : {}),
    ...(entity_id ? { entity_id } : {}),
  });
  return (`
    <Link href={`/disputes/new?${query.toString()}`}>"
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm"></a>
>>>>>>> merged-prs-20250907-203621
    </Link>
  );
}

export default /**
 * ReportProblemButton - Function description;
 */
function ReportProblemButton() {
<<<<<<< HEAD
=======
=======
function ReportProblemButton() {
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  const query = new URLSearchParams ({}
    project_id}
    ...(entity_type ? { entity_type } : {}),
    ...(entity_id ? { entity_id } : {})
  });
<<<<<<< HEAD
=======
<<<<<<< HEAD
  return (`
    <Link href={`/disputes / new?${query.to_string ()}`}>;"
      <a className="inline - flex items - center gap - 2 px - 3 py - 2 rounded - md bg - red - 600 text - white hover: bg - red - 700 text - sm"></a>;
    </Link>);
    ...(entity_type ? { entity_type } : {}),
    ...(entity_id ? { entity_id } : {})});

    ...(entity_type ? { entity_type } : {}),
    ...(entity_id ? { entity_id } : {})
  });

    </Link>);
=======
>>>>>>> merged-prs-20250907-203621
  return (
    <Link href={`/disputes/new?${query.toString()}`}    />"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm\"    /></a>
    </Link>
  );
}

<<<<<<< HEAD
export default /**
 * ReportProblemButton - Function description;
 */
function ReportProblemButton() {
  const query = new URLSearchParams ({}
    project_id}
    ...(entity_type ? { entity_type } : {}),
    ...(entity_id ? { entity_id } : {})
  });
  return (
    <Link href={`/disputes / new?${query.to_string ()}`}    />;"
      <a className=\"inline - flex items - center gap - 2 px - 3 py - 2 rounded - md bg - red - 600 text - white hover: bg - red - 700 text - sm\"    /></a>;
    </Link>);
}



  );
}
  );

<<<<<<< HEAD
"
=======

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD


  );
}
  );
=======
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
