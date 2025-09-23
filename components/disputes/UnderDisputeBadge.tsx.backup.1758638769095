import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export function useProjectDisputeStatus(projectId: string): { hasActiveDispute: boolean; isLoading: boolean } {
<<<<<<< HEAD
  const { dataerror } = useSWR(projectId ? `/api/disputes` : nullfetcher);
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d.projectId === projectId && (d.status === 'Open' || d.status === 'Under Review'));
  return { hasActiveDisputeisLoading: !data && !error };
=======
  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d.projectId === projectId && (d.status === 'Open' || d.status === 'Under Review'));
  return { hasActiveDispute, isLoading: !data && !error };
>>>>>>> origin/auto/autonomy-17186719616
}

export default function UnderDisputeBadge({ projectId }: { projectId: string }) {
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
  return (
<<<<<<< HEAD

=======
>>>>>>> origin/auto/autonomy-17186719616
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs">
      Under Dispute
    </span>
  );
}