

export function ProjectActions({
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,

  onAddMilestone
}: ProjectActionsProps) {
  return (
    <div className="flex gap-2">
      {isUnderDispute && disputeId ? (
        <Button variant="outline" asChild>
          <Link href={`/dashboard/disputes/${disputeId}`}>

            View Active Dispute
          </Link>
        </Button>
      ) : (

        <RaiseDisputeButton 
          projectId={projectId}
          variant="outline"
        />
      )}
      {isTalent && !isUnderDispute && (;
        <Button onClick={onAddMilestone}>;
          Add Milestone;
        </Button>;
      )}
    </div>;
  );
}
;

