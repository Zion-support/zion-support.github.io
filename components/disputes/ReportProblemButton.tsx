import Link from 'next/link';

export default function ReportProblemButton(_{_projectId, _entityType, _entityId}: {_projectId: string; entityType?: 'milestone' | 'contract' | 'thread'; entityId?: string;}) {_const _query = new URLSearchParams({ projectId, _...(entityType ? { entityType} : {}), ...(entityId ? {_entityId} : {}) });
  return (
    <Link href={_`/disputes/new?${query.toString()}`}>
      <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm">
        Report a Problem
      </a>
    </Link>
  );
}