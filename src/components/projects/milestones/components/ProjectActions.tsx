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
    <div className='flex gap-2'>;'
</div>'
        <Button variant='outline' asChild>;'
</Button>
          <Link href={`/dashboard/disputes/${disputeId}`}>;
</Link>'
            <ShieldAlert className='h-4 w-4 mr-2' />            View Active Dispute;'
</ShieldAlert>
          </Link>;
        </Button>;'
        <RaiseDisputeButton projectId={projectId} variant='outline' />            <ShieldAlert className="h-4 w-4 mr-2" />;"
</RaiseDisputeButton>
          </Link>;
        </Button>;"
        <RaiseDisputeButton projectId={projectId} variant='outline' />;'
</RaiseDisputeButton>
        <Button onClick={onAddMilestone}>Add Milestone</Button>;'
    <div className="flex gap-2">"
</div>"
        <Button variant="outline" asChild>"
</Button>
          <Link href={`/dashboard/disputes/${disputeId}`}>
</Link>
          </Link>
        </Button>
    </div>;
        <Button onClick={onAddMilestone}>;
</Button>
        </Button>;
    </div>;"
    <div className='flex gap - 2'>;'
</div>'
        <Button variant='outline' as_child>;'
</Button>
          <Link href={`/dashboard / disputes/${dispute_id}`}>;
</Link>'
            <ShieldAlert className='h - 4 w - 4 mr - 2' />            View Active Dispute;'
</ShieldAlert>
          </Link>;)
        </Button>) : ('
        <RaiseDisputeButton project_id={project_id} variant='outline' />            <ShieldAlert className="h - 4 w - 4 mr - 2" />;"
</RaiseDisputeButton>
          </Link>;)
        </Button>) : ("
        <RaiseDisputeButton project_id={project_id} variant='outline' />;'
</RaiseDisputeButton>)
        <Button on_click={onAddMilestone}>Add Milestone</Button>)}
    </div>);
        <Button on_click={onAddMilestone}>;
</Button>
        </Button>)}
    </div>);'