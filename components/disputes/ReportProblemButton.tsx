<<<<<<< HEAD

import Link from 'next/link';
=======
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = new URLSearchParams({ projectId, ...(entityType ? { entityType } : {}), ...(entityId ? { entityId } : {}) });
export default function ReportProblemButton() {const query = null;
}

export default function ReportProblemButton() {const query = new URLSearchParams({projectId;
    ...(entityType ? { entityType } : {})...(entityId ? { entityId } : {})})return (})return (<Link href={`/disputes/new?${query && query.toString()}`}>;

>>>>>>> origin/cursor/delete-old-data-records-6bba

  projectId,
  entityType}
  entityId}
}: {;

  projectId: string;
  entityType?: "milestone" | "contract" | "thread";
  entityId?: string;
}) {

  const query = new URLSearchParams({
    }
    projectId
    ...(entityType ? { entityType } : {})
    ...(entityId ? { entityId } : {})  });
  return (
    <Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">;
        {" "}
    <Link href={`/disputes/new?${query && query.toString()}`}>;
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">;
        {" "}

  return (
    <Link href={`/disputes/new?${query && query.toString()}`}    />;"
      <a className=\"inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm\"    />;"
        {\" \"}
        Report a Problem;
      </a>;
    </Link>;
  )}

    </Link>;

  );
}  });

