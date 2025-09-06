import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => r.json());
<<<<<<< HEAD
export function useProjectDisputeStatus(projectId: string): {
=======

export function useProjectDisputeStatus(projectId: string): {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  hasActiveDispute: boolean;
  isLoading: boolean;
} {;
  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);

  const hasActiveDispute = !!data?.disputes?.some(;
    (d: any) =>;
      d && d.projectId === projectId &&;
      (d && d.status === 'Open' || d && d.status === 'Under Review');
  );
  return { hasActiveDispute, isLoading: !data && !error }
export default function UnderDisputeBadge({
<<<<<<< HEAD
  projectId
}: {
=======

  projectId,
}: {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  projectId: string;
}) {;
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
  return (
    <span className='inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs'>;
      Under Dispute;
    </span>;
  );  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);

  const hasActiveDispute = !!data?.disputes?.some((d: any) => d && d.projectId === projectId && (d && d.status === 'Open' || d && d.status === 'Under Review')),;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return { hasActiveDispute, isLoading: !data && !error }
}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function UnderDisputeBadge({ projectId }: { projectId: string }) {
=======
export default function UnderDisputeBadge({ projectId }: { projectId: string }) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;

  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs">
      Under Dispute
    </span>
<<<<<<< HEAD
);
}
<<<<<<< HEAD
=======
  );
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs">;
      Under Dispute;
    </span>;
  );
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
