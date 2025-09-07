onAddMilestone;
}: ProjectActionsProps) {

  onAddMilestone: () => void;

export function ProjectActions(): any ({;
  projectId,;
  isUnderDispute,;
  disputeId,;
  isTalent,;
  onAddMilestone,;)
}: ProjectActionsProps) {;

  return (
    <div className='flex gap-2'>;
</div>
        <Button variant='outline' asChild>;

          <Link href={`/dashboard/disputes/${disputeId}`}>;

            <ShieldAlert className='h-4 w-4 mr-2' />            View Active Dispute;

          ;
        <RaiseDisputeButton projectId={projectId} variant='outline' />            <ShieldAlert className="h-4 w-4 mr-2" />;"

        ;"
        <RaiseDisputeButton projectId={projectId} variant='outline' />;

        <Button onClick={onAddMilestone}>Add Milestone;
    <div className="flex gap-2">"
</div>"
        <Button variant="outline" asChild>"
`;
          <Link href={`/dashboard/disputes/${disputeId}`}>

          
        
    </div>;
        <Button onClick={onAddMilestone}>;

    </div>;"
    <div className='flex gap - 2'>;
        <Button variant='outline' as_child>;
          <Link href={`/dashboard / disputes/${dispute_id}`}>;

            <ShieldAlert className='h - 4 w - 4 mr - 2' />            View Active Dispute;

          ;)
        ) : (
        <RaiseDisputeButton project_id={project_id} variant='outline' />            <ShieldAlert className="h - 4 w - 4 mr - 2" />;"

        ) : ("
        <RaiseDisputeButton project_id={project_id} variant='outline' />;
)
        <Button on_click={onAddMilestone}>Add Milestone)}
    </div>);
        <Button on_click={onAddMilestone}>;

        )}
    </div>);`;