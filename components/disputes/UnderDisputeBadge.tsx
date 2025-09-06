import useSWR from 'swr';
<<<<<<< HEAD
<<<<<<< HEAD
const fetcher = null;
=======
const fetcher = (url: string) => fetch(url).then(r => r.json());
=======

const fetcher = (url: string) => fetch(url).then(r => r.json());
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function useProjectDisputeStatus(projectId: string): {
  hasActiveDispute: boolean;
  isLoading: boolean;
} {
  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
  const hasActiveDispute = !!data?.disputes?.some(
    (d: any) =>
      d.projectId === projectId &&
      (d.status === 'Open' |d.status === 'Under Review')
  );
<<<<<<< HEAD
  return { hasActiveDispute, isLoading: !data && !error }
=======
  return { hasActiveDispute, isLoading: !data && !error };
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function UnderDisputeBadge({
  projectId
}: {
  projectId: string;
}) {
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
  return (
    <span className='inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs'>
      Under Dispute
    </span>
<<<<<<< HEAD
  );  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d.projectId === projectId && (d.status === 'Open' |d.status === 'Under Review'))
  return { hasActiveDispute, isLoading: !data && !error }
}
export default function UnderDisputeBadge({ projectId }: { projectId: string }) {
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs">
      Under Dispute
    </span>
);
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
