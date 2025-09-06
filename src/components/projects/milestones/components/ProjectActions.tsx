

export function ProjectActions({
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  onAddMilestone
}: ProjectActionsProps) {
  return (
    <div className="flex gap-2">
      {isUnderDispute && disputeId ? (
        <Button variant="outline" asChild>
          <Link href={`/dashboard/disputes/${disputeId}`}>

            <ShieldAlert className="h-4 w-4 mr-2" />

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            View Active Dispute
          </Link>
        </Button>
      ) : (

    </div>;
  );
};

=======
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
