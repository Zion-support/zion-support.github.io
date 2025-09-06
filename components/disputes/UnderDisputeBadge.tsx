import useSWR from 'swr';

<<<<<<< HEAD
=======

  hasActiveDispute: boolean;
  isLoading: boolean;
} {;
  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  projectId,
}: {;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return { hasActiveDispute, isLoading: !data && !error }
}




<<<<<<< HEAD
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d && d.projectId === projectId && (d && d.status === 'Open' || d && d.status === 'Under Review')),;
const fetcher = (url: string) => fetch(url).then(r => r.json()),
export function useProjectDisputeStatus(projectId: string): { hasActiveDispute: boolean, isLoading: boolean } {
  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d.projectId === projectId && (d.status === 'Open' || d.status === 'Under Review')),
  return { hasActiveDispute, isLoading: !data && !error }
}
export default function UnderDisputeBadge(): any ({ projectId }: { projectId: string }) {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
  return (

    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs">;
      Under Dispute;
    </span>;
  );
}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  );
}

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  return (
    <span className=&quot;inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs&quot;>
      Under Dispute
    </span>
  )

}
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
