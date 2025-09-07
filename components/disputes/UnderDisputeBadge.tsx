<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import useSWR from 'swr';
<<<<<<< HEAD
const fetcher = (url: string) => fetch(url).then(r => r.json()),

export function useProjectDisputeStatus(projectId: string): { hasActiveDispute: boolean, isLoading: boolean } {
  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d.projectId === projectId && (d.status === 'Open' || d.status === 'Under Review')),
=======

<<<<<<< HEAD
const fetcher = null;

  hasActiveDispute: boolean;
const fetcher = (url: string) => fetch(url).then(r => r.json())export function useProjectDisputeStatus(projectId: string): {hasActiveDispute: boolean;
  isLoading: boolean;
} {const { data, error }  = useSWR(projectId ? `/api/disputes` : null, fetcher)const hasActiveDispute = !!data?.disputes?.some((d: any) =>;
      d && d.projectId === projectId &&;
const fetcher = $2;
export function useProjectDisputeStatus(projectId: string): { hasActiveDispute: boolean, isLoading: boolean} {
  const { data, error } = useSWR($2);
  const hasActiveDispute = $2;
>>>>>>> origin/main
  return { hasActiveDispute, isLoading: !data && !error }
}

export default function UnderDisputeBadge({ projectId }: { projectId: string }) {
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs">
      Under Dispute
    </span>
const fetcher = null;
const fetcher = (url: string) => fetch(url).then(r => r.json())export function useProjectDisputeStatus(projectId: string): {hasActiveDispute: boolean;
  isLoading: boolean;
} {const { data, error }  = useSWR(projectId ? `/api/disputes` : null, fetcher)const hasActiveDispute = !!data?.disputes?.some((d: any) =>;
      d && d.projectId === projectId &&;
      (d && d.status === 'Open' || d && d.status === 'Under Review'))return { hasActiveDispute, isLoading: !data && !error }export default function UnderDisputeBadge(): any ({projectId,}: {projectId,}: {projectId: string;
}) {const { hasActiveDispute } = useProjectDisputeStatus(projectId)if (!hasActiveDispute) return null;
  return (<span className='inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs'>;
      Under Dispute;
    </span>;
  )const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher)return { hasActiveDispute, isLoading: !data && !error }
}export default function UnderDisputeBadge(): any ({ projectId }: { projectId: string }) {const { hasActiveDispute } = useProjectDisputeStatus(projectId)if (!hasActiveDispute) return null;
  return (}
  )}const fetcher  = (url: string) =>: any fetch (url).then (r => r.json ())export function useProjectDisputeStatus (project_id: string): {hasActiveDispute: boolean;
  is_loading: boolean;
} {const { data, error } = useSWR (project_id ? `/api / disputes` : null, fetcher)const hasActiveDispute = !!data?.disputes?.some ((d: any) =>;
      d.project_id === project_id &&;
      (d.status === 'Open' || d.status === 'Under Review'))return { hasActiveDispute, is_loading: !data && !error }export default /**;
 * UnderDisputeBadge - Function description;
 */;
function UnderDisputeBadge() {const { hasActiveDispute } = useProjectDisputeStatus (project_id)// Check condition;
if (return null) {$2;
}
  return (<span className='inline - flex items - center gap - 1 px - 2 py - 1 rounded bg - yellow - 100 text - yellow - 800 border border - yellow - 300 text - xs'>;
      Under Dispute;
    </span>)const { data, error } = useSWR (project_id ? `/api / disputes` : null, fetcher)const hasActiveDispute = !!data?.disputes?.some ((d: any) => d.project_id === project_id && (d.status === 'Open' || d.status === 'Under Review')),return { hasActiveDispute, is_loading: !data && !error }
}
export default /**;
 * UnderDisputeBadge - Function description;
 */;
function UnderDisputeBadge() {const { hasActiveDispute } = useProjectDisputeStatus (project_id)// Check condition;
if (return null) {$2;
}
  return (<span className="inline - flex items - center gap - 1 px - 2 py - 1 rounded bg - yellow - 100 text - yellow - 800 border border - yellow-300 text-xs">;
      Under Dispute;
    </span>)<span className='inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs'>;
      Under Dispute;
    </span>;
  )return (<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs">;
      Under Dispute;
    </span>;

    <span className='inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs'>;
      Under Dispute;
    </span>;
  );  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
  return { hasActiveDispute, isLoading: !data && !error }
}

=======
<<<<<<< HEAD
  const hasActiveDispute = !!data?.disputes?.some(;
    (d: any) =>;
      d && d.projectId === projectId &&;'
      (d && d.status === 'Open' || d && d.status === 'Under Review');
  );
  return { hasActiveDispute, isLoading: !data && !error };

export default function UnderDisputeBadge(): any ({;
  projectId,;
}: {;

  projectId,
}: {;
  projectId: string;
}) {;
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
  return ('
    <span className='inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs'>;
      Under Dispute;
    </span>;`
  );  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
  return { hasActiveDispute, isLoading: !data && !error }
}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export default function UnderDisputeBadge(): any ({ projectId }: { projectId: string }) {;
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
  return (

}
<<<<<<< HEAD
  );
=======
  );
}

;
const fetcher = (url: string) =>: any fetch (url).then (r => r.json ());
;
export function useProjectDisputeStatus (project_id: string): {};
  hasActiveDispute: boolean;
  is_loading: boolean;
} {}`
  const { data, error } = useSWR (project_id ? `/api / disputes` : null, fetcher);
  const hasActiveDispute = !!data?.disputes?.some (
    (d: any) =>;
      d.project_id === project_id &&;'
      (d.status === 'Open' || d.status === 'Under Review'));
  return { hasActiveDispute, is_loading: !data && !error }
;
export default /**;
 * UnderDisputeBadge - Function description;
 */
function UnderDisputeBadge() {}
  const { hasActiveDispute } = useProjectDisputeStatus (project_id);
  // Check condition;
if (return null) {}
  $2;
}
  return ('
    <span className='inline - flex items - center gap - 1 px - 2 py - 1 rounded bg - yellow - 100 text - yellow - 800 border border - yellow - 300 text - xs'>;
      Under Dispute;`
    </span>);  const { data, error } = useSWR (project_id ? `/api / disputes` : null, fetcher);'
  const hasActiveDispute = !!data?.disputes?.some ((d: any) => d.project_id === project_id && (d.status === 'Open' || d.status === 'Under Review')),
  return { hasActiveDispute, is_loading: !data && !error }
}
export default /**;
 * UnderDisputeBadge - Function description;
 */
function UnderDisputeBadge() {}
  const { hasActiveDispute } = useProjectDisputeStatus (project_id);
  // Check condition;
if (return null) {}
  $2;
}
  return (
    <span className="inline - flex items - center gap - 1 px - 2 py - 1 rounded bg - yellow - 100 text - yellow - 800 border border - yellow-300 text-xs">;
      Under Dispute;
    </span>);
<<<<<<< HEAD
    <span className='inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs'>
      Under Dispute
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs">
      Under Dispute
=======
  return (
    <span className=\"inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs\" />
      Under Dispute;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    </span>
);
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

<<<<<<< HEAD
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
    <span className="inline - flex items - center gap - 1 px - 2 py - 1 rounded bg - yellow - 100 text - yellow - 800 border border - yellow-300 text-xs">;
      Under Dispute;
    </span>);
)}
  )
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

"
=======
import useSWR from 'swr'
const fetcher = (url: string) => fetch (url) .then (r => r.json () )
return (<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs" > Under Dispute </span>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
