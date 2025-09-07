import useSWR from 'swr';
const fetcher = $2;
export function useProjectDisputeStatus(projectId: string): { hasActiveDispute: boolean, isLoading: boolean} {
  const { data, error } = useSWR($2);
  const hasActiveDispute = $2;
  return { hasActiveDispute, isLoading: !data && !error }
}

export default function UnderDisputeBadge({ projectId }: { projectId: string}) {
  const { hasActiveDispute } = useProjectDisputeStatus($2);
  if (!hasActiveDispute) return null,
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs">
      Under Dispute
    </span>
  )
}