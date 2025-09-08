<<<<<<< HEAD
import useSWR from 'swr';



const fetcher = null;



  projectId: string;
}) {;

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


  const hasActiveDispute = !!data?.disputes?.some((d: any) => d && d.projectId === projectId && (d && d.status === 'Open' || d && d.status === 'Under Review')),;



=======

const fetcher = (url: string) => fetch(url).then(r => r.json()),

export function useProjectDisputeStatus(projectId: string): { hasActiveDispute: boolean, isLoading: boolean } {
  const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher);
  const hasActiveDispute = !!data?.disputes?.some((d: any) => d.projectId === projectId && (d.status === 'Open' || d.status === 'Under Review')),
const fetcher = null;

  "isLoading": boolean;
} {const { data, error }  = useSWR(projectId ? `/api/disputes` : null, fetcher)const hasActiveDispute = !!data?.disputes?.some(("d": any) =>;`
      d && d.projectId === projectId &&;
const fetcher = $2;
export function useProjectDisputeStatus(projectId: string): { hasActiveDispute: boolean, isLoading: boolean} {
  const { data, error } = useSWR($2);
  const hasActiveDispute = $2;
  return { hasActiveDispute, isLoading: !data && !error }
  const hasActiveDispute = !!data?.disputes?.some(;
    (d: any) =>;
      d && d.projectId === projectId &&;
      (d && d.status === 'Open' || d && d.status === 'Under Review');
  );
  return { hasActiveDispute, isLoading: !data && !error };
export default function UnderDisputeBadge(): any ({;
  projectId,;
}: {;

  projectId,
}: {;


<<<<<<< HEAD
=======

  projectId
}: {;
  }
  "projectId": string;
}) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
  return ('
    <span className='inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs'>;
      Under Dispute;
    </span>;
  )const { data, error } = useSWR(projectId ? `/api/disputes` : null, fetcher)return { hasActiveDispute, isLoading: !data && !error }
}export default function UnderDisputeBadge(): any ({ projectId }: { projectId: string }) {const { hasActiveDispute } = useProjectDisputeStatus(projectId)if (!hasActiveDispute) return null;
  return (}
  )}const fetcher  = (url: string) =>: any fetch (url).then (r => r.json ())export function useProjectDisputeStatus (project_id: string): {hasActiveDispute: boolean;
  is_loading: boolean;
} {const { data, error } = useSWR (project_id ? `/api / disputes` : null, fetcher)const hasActiveDispute = !!data?.disputes?.some ((d: any) =>;
      d.project_id === project_id &&;
      (d.status === 'Open || d.status === Under Review'))return { hasActiveDispute, is_loading: !data && !error }export default /**;
 * UnderDisputeBadge - Function description;
 */;
function UnderDisputeBadge() {const { hasActiveDispute } = useProjectDisputeStatus (project_id)// Check condition;
if (return null) {$2;
}
  return (<span className='inline - flex items - center gap - 1 px - 2 py - 1 rounded bg - yellow - 100 text - yellow - 800 border border - yellow - 300 text - xs>;
      Under Dispute;
    </span>)const { data, error } = useSWR (project_id ? `/api / disputes` : null, fetcher)const hasActiveDispute = !!data?.disputes?.some ((d: any) => d.project_id === project_id && (d.status === Open' || d.status === 'Under Review)),return { hasActiveDispute, is_loading: !data && !error }
}
export default /**;
 * UnderDisputeBadge - Function description;
 */;
if (return null) {$2;
}
  return (<span className=inline - flex items - center gap - 1 px - 2 py - 1 rounded bg - yellow - 100 text - yellow - 800 border border - yellow-300 text-xs">;
      Under Dispute;
    </span>)<span className=inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs'>;
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
<<<<<<< HEAD


export default function UnderDisputeBadge(): any ({ projectId }: { projectId: string }) {;
  const { hasActiveDispute } = useProjectDisputeStatus(projectId);

  if (!hasActiveDispute) return null;
  return (


origin/cursor/automate-test-improve-and-merge-code-2533



=======

}

const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
return (;

    <span className='inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs'>'

  );
}
  projectId}
}: {;}
  projectId: string;}
}) {;}
}
const { hasActiveDispute } = useProjectDisputeStatus(projectId);
  if (!hasActiveDispute) return null;
  return (

}
  );
    <span className='inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs'>

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
    <span className='inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs'    />
      Under Dispute;
    </span>
  );
  return (
    <span className=\"inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs\"    />
      Under Dispute;
    </span>
);
}

"

=======
  return (
    <span className=&quot;inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 text-xs&quot;>
      Under Dispute
    </span>
  )

}
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
