import useSWR from 'swr';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const fetcher = null;
=======
const fetcher = (url: string) => fetch(url).then(r => r.json());
=======

const fetcher = (url: string) => fetch(url).then(r => r.json());
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

const fetcher = (url: string) => fetch(url).then(r => r.json());
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
<<<<<<< HEAD
  return { hasActiveDispute, isLoading: !data && !error }
=======
  return { hasActiveDispute, isLoading: !data && !error };
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
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
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
