
import Link from 'next/link';

  projectId: string;
  entityType?: "milestone" | "contract" | "thread";
  entityId?: string;
}) {

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





  return (

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

  const query = new URLSearchParams ({}
    project_id}
    ...(entity_type ? { entity_type } : {}),
    ...(entity_id ? { entity_id } : {})
  });





