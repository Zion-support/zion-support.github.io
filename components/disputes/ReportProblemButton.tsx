<<<<<<< HEAD
=======
import Link from "next/link";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import Link from "next/link";
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
    projectId
    ...(entityType ? { entityType } : {})
    ...(entityId ? { entityId } : {})
  });
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <Link href={`/disputes/new?${query.toString()}`}>
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">
        {" "}
        Report a Problem
      </a>
    </Link>
  );
}
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
    projectId
    ...(entityType ? { entityType } : {})
    ...(entityId ? { entityId } : {})
  });
  return (
    <Link href={`/disputes/new?${query.toString()}`}>
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover: bg-red-700 text-sm"></a>
    </Link>
<<<<<<< HEAD
  );
}
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
