import useSWR from 'swr';
<<<<<<< HEAD

<<<<<<< HEAD
const fetcher = (url: string) => fetch(url).then(r => r.json());
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
const fetcher = (url: string) => fetch(url).then(r => r && r.json());
export function useProjectDisputeStatus(): any (projectId: string): {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  hasActiveDispute: boolean;
  isLoading: boolean;
} {;
  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const hasActiveDispute = !!data?.disputes?.some(;
    (d: any) =>;
      d && d.projectId === projectId &&;
      (d && d.status === 'Open' || d && d.status === 'Under Review');
  );
<<<<<<< HEAD
  return { hasActiveDispute, isLoading: !data && !error }
export default function UnderDisputeBadge({

=======
  return { hasActiveDispute, isLoading: !data && !error };
export default function UnderDisputeBadge(): any ({;
  projectId,;
}: {;
<<<<<<< HEAD

=======

  projectId,
}: {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

export default function UnderDisputeBadge({ projectId }: { projectId: string }) {

export default function UnderDisputeBadge({ projectId }: { projectId: string }) {;
=======

  const hasActiveDispute = !!data?.disputes?.some((d: any) => d && d.projectId === projectId && (d && d.status === 'Open' || d && d.status === 'Under Review')),;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return { hasActiveDispute, isLoading: !data && !error }
}



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d && d.projectId === projectId && (d && d.status === 'Open' || d && d.status === 'Under Review')),;
const fetcher = (url: string) => fetch(url).then(r => r.json()),
export function useProjectDisputeStatus(projectId: string): { hasActiveDispute: boolean, isLoading: boolean } {
  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d.projectId === projectId && (d.status === 'Open' || d.status === 'Under Review')),
  return { hasActiveDispute, isLoading: !data && !error }
}
export default function UnderDisputeBadge(): any ({ projectId }: { projectId: string }) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs">
      Under Dispute
    </span>

}

  );
}

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs">;
      Under Dispute;
    </span>;
  );
}
<<<<<<< HEAD

=======

  );
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

const fetcher = (url: string) => fetch(url).then(r => r.json());
<<<<<<< HEAD
export function useProjectDisputeStatus(projectId: string): {
=======

export function useProjectDisputeStatus(projectId: string): {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
  projectId
}: {
=======
  projectId,
}: {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  projectId: string;
}) {
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
  return (
    <span className='inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs'>
      Under Dispute
    </span>
  );  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
<<<<<<< HEAD
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d.projectId === projectId && (d.status === 'Open' |d.status === 'Under Review'))
  return { hasActiveDispute, isLoading: !data && !error }
}
=======
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d.projectId === projectId && (d.status === 'Open' || d.status === 'Under Review')),
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

}
=======
  );
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
