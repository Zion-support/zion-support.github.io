import useSWR from 'swr';

<<<<<<< HEAD
const fetcher = (url: string) => fetch(url).then(r => r.json());
export function useProjectDisputeStatus(projectId: string): {
=======
const fetcher = (url: string) => fetch(url).then(r => r && r.json());

export function useProjectDisputeStatus(): any (projectId: string): {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  hasActiveDispute: boolean;
  isLoading: boolean;
} {;
  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
<<<<<<< HEAD
  const hasActiveDispute = !!data?.disputes?.some(
    (d: any) =>
      d.projectId === projectId &&
      (d.status === 'Open' |d.status === 'Under Review')
  );
  return { hasActiveDispute, isLoading: !data && !error }
export default function UnderDisputeBadge({
  projectId
}: {
=======
  const hasActiveDispute = !!data?.disputes?.some(;
    (d: any) =>;
      d && d.projectId === projectId &&;
      (d && d.status === 'Open' || d && d.status === 'Under Review');
  );
  return { hasActiveDispute, isLoading: !data && !error };

export default function UnderDisputeBadge(): any ({;
  projectId,;
}: {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  projectId: string;
}) {;
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
  return (
    <span className='inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs'>;
      Under Dispute;
    </span>;
  );  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
<<<<<<< HEAD
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d.projectId === projectId && (d.status === 'Open' |d.status === 'Under Review'))
  return { hasActiveDispute, isLoading: !data && !error }
}
export default function UnderDisputeBadge({ projectId }: { projectId: string }) {
=======
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d && d.projectId === projectId && (d && d.status === 'Open' || d && d.status === 'Under Review')),;
  return { hasActiveDispute, isLoading: !data && !error }
}

export default function UnderDisputeBadge(): any ({ projectId }: { projectId: string }) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;

  return (
<<<<<<< HEAD
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs">
      Under Dispute
    </span>
);
}
=======
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs">;
      Under Dispute;
    </span>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
