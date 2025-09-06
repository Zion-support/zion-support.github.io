<<<<<<< HEAD
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
=======
=======
import Link from "next/link";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import Link from "next/link";
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default function ReportProblemButton({
<<<<<<< HEAD
  projectId
  entityType
  entityId
}: {
=======
  projectId,
  entityType,
  entityId,
}: {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">
        {" "}
=======
      <a className='inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        Report a Problem
      </a>
    </Link>
<<<<<<< HEAD
  );
<<<<<<< HEAD
}
export default function ReportProblemButton({
  projectId
  entityType
  entityId
}: {
=======
<<<<<<< HEAD
);
}
export default function ReportProblemButton({
  projectId,
  entityType,
  entityId,
}: {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
