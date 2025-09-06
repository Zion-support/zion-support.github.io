<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
export default function ReportProblemButton({ projectId, entityType, entityId }: { projectId: string, entityType?: 'milestone' | 'contract' | 'thread', entityId?: string }) {
  const query = null;
=======
import Link from "next/link";
=======
import Link from 'next/link';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <Link href={`/disputes/new?${query.toString()}`}>
<<<<<<< HEAD
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">
        {" "}
=======
      <a className='inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        Report a Problem
      </a>
    </Link>
  );
<<<<<<< HEAD
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
  );
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
