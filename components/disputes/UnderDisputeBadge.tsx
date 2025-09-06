import useSWR from 'swr';
<<<<<<< HEAD

const fetcher = (url: string) => fetch(url).then(r => r.json());

export function useProjectDisputeStatus(projectId: string): {
  hasActiveDispute: boolean;
  isLoading: boolean;
} {
  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
  const hasActiveDispute = !!data?.disputes?.some(
    (d: any) =>
      d.projectId === projectId &&
      (d.status === 'Open' || d.status === 'Under Review')
  );
  return { hasActiveDispute, isLoading: !data && !error };
}

export default function UnderDisputeBadge({
  projectId,
}: {
  projectId: string;
}) {
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
  return (
    <span className='inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs'>
      Under Dispute
    </span>
  );
}
=======
const fetcher = (url: string) => fetch (url) .then (r => r.json () );
return (<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs" > Under Dispute </span>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
