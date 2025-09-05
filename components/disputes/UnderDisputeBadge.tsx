import useSWR from 'swr';

const _fetcher = (_url: string) => fetch(url).then(r => r.json());

export function useProjectDisputeStatus(_projectId: string): {_hasActiveDispute: boolean; isLoading: boolean} {_const { data, _error} = useSWR(projectId ? `/api/disputes` : null, fetcher);
  const _hasActiveDispute = !!data?.disputes?.some(_(d: unknown) => d.projectId === projectId && (d.status === 'Open' || d.status === 'Under Review'));
  return {_hasActiveDispute, _isLoading: !data && !error};
}

export default function UnderDisputeBadge(_{_projectId}: {_projectId: string}) {_const { hasActiveDispute} = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs">
      Under Dispute
    </span>
  );
}