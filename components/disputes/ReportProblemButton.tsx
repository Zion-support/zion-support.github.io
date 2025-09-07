import Link from 'next/link';

interface ReportProblemButtonProps {
  projectId: string;
  entityType?: 'milestone' | 'contract' | 'thread';
  entityId?: string;
}

export default function ReportProblemButton({ 
  projectId, 
  entityType, 
  entityId 
}: ReportProblemButtonProps) {
  const query = new URLSearchParams({
    projectId,
    ...(entityType && { entityType }),
    ...(entityId && { entityId }),
  }).toString();

  return (
    <Link
      href={`/disputes/report?${query}`}
      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      Report Problem
    </Link>
  );
}