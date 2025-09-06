import useSWR from 'swr';
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  hasActiveDispute: boolean;
  isLoading: boolean;
} {;
  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const hasActiveDispute = !!data?.disputes?.some(;
    (d: any) =>;
      d && d.projectId === projectId &&;
      (d && d.status === 'Open' || d && d.status === 'Under Review');
  );
  return { hasActiveDispute, isLoading: !data && !error };

export default function UnderDisputeBadge(): any ({;
  projectId,;
}: {;
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  projectId,
}: {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


  projectId,
}: {;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

  const hasActiveDispute = !!data?.disputes?.some((d: any) => d && d.projectId === projectId && (d && d.status === 'Open' || d && d.status === 'Under Review')),;

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return { hasActiveDispute, isLoading: !data && !error }
}




<<<<<<< HEAD
=======
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d && d.projectId === projectId && (d && d.status === 'Open' || d && d.status === 'Under Review')),;
const fetcher = (url: string) => fetch(url).then(r => r.json()),
export function useProjectDisputeStatus(projectId: string): { hasActiveDispute: boolean, isLoading: boolean } {
  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d.projectId === projectId && (d.status === 'Open' || d.status === 'Under Review')),
  return { hasActiveDispute, isLoading: !data && !error }
}
export default function UnderDisputeBadge(): any ({ projectId }: { projectId: string }) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return { hasActiveDispute, isLoading: !data && !error }
}

export default function UnderDisputeBadge(): any ({ projectId }: { projectId: string }) {;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;

  return (

}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  );
}

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  );
}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
const fetcher = (url: string) =>: any fetch (url).then (r => r.json ());
;
export function useProjectDisputeStatus (project_id: string): {
  hasActiveDispute: boolean;
  is_loading: boolean;
} {
  const { data, error } = useSWR (project_id ? `/api / disputes` : null, fetcher);
  const hasActiveDispute = !!data?.disputes?.some (
    (d: any) =>;
      d.project_id === project_id &&;
      (d.status === 'Open' || d.status === 'Under Review'));
  return { hasActiveDispute, is_loading: !data && !error }
;
export default /**
 * UnderDisputeBadge - Function description
 */
function UnderDisputeBadge() {
  const { hasActiveDispute } = useProjectDisputeStatus (project_id);
  // Check condition
if (return null) {
  $2
}
  return (
    <span className='inline - flex items - center gap - 1 px - 2 py - 1 rounded bg - yellow - 100 text - yellow - 800 border border - yellow - 300 text - xs'>;
      Under Dispute;
    </span>);  const { data, error } = useSWR (project_id ? `/api / disputes` : null, fetcher);
  const hasActiveDispute = !!data?.disputes?.some ((d: any) => d.project_id === project_id && (d.status === 'Open' || d.status === 'Under Review')),
  return { hasActiveDispute, is_loading: !data && !error }
}
export default /**
 * UnderDisputeBadge - Function description
 */
function UnderDisputeBadge() {
  const { hasActiveDispute } = useProjectDisputeStatus (project_id);
  // Check condition
if (return null) {
  $2
}
  return (
    <span className="inline - flex items - center gap - 1 px - 2 py - 1 rounded bg - yellow - 100 text - yellow - 800 border border - yellow - 300 text - xs">;
      Under Dispute;
    </span>);
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

const fetcher = (url: string) => fetch(url).then(r => r.json());
export function useProjectDisputeStatus(projectId: string): {

export function useProjectDisputeStatus(projectId: string): {;
  hasActiveDispute: boolean;
  isLoading: boolean;
} {
  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
  const hasActiveDispute = !!data?.disputes?.some(
    (d: any) =>
      d.projectId === projectId &&
      (d.status === 'Open' |d.status === 'Under Review')
  );
  return { hasActiveDispute, isLoading: !data && !error }
export default function UnderDisputeBadge({
  projectId
}: {
  projectId,
}: {;
  projectId: string;
}) {
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
  return (
    <span className='inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs'>
      Under Dispute
    </span>
  );  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d.projectId === projectId && (d.status === 'Open' |d.status === 'Under Review'))
  return { hasActiveDispute, isLoading: !data && !error }
}
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d.projectId === projectId && (d.status === 'Open' || d.status === 'Under Review')),
  return { hasActiveDispute, isLoading: !data && !error }
}

export default function UnderDisputeBadge({ projectId }: { projectId: string }) {
export default function UnderDisputeBadge({ projectId }: { projectId: string }) {;
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;

  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs">
      Under Dispute
    </span>
);
}
  );
}

}
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
