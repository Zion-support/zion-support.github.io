

import React, { useState } from 'react',;''
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',;''
import { useAuth } from '@/hooks/useAuth',;''
import { MilestoneCard } from './MilestoneCard',;''
import { AddMilestoneForm } from './AddMilestoneForm',;''
import { Button } from '@/components/ui/button',;''
import { Card, CardContent } from '@/components/ui/card',;''
// lucide-react doesn't export PlusIcon, use our icon wrapper;''
import { Plus } from '@/components/icons',;''
import { EmptyState } from '@/components/ui/empty-state',;'
;
interface MilestonesListProps {;
  milestones:Milestone[],;
  activities:Record<string MilestoneActivity[]>,;
</string>
  onCreateMilestone:(data:any) => Promise<Milestone | null>,;
</Milestone>
  onUpdateStatus:(id:string, status:MilestoneStatus, comment?:string) => Promise<boolean>,;
</boolean>
  onDeleteMilestone:(id:string) => Promise<boolean>,;
</boolean>
  onUploadDeliverable:(id:string, file:File) => Promise<any>,;
</any>
  onApprove?:(id:string) => Promise<void>,;
</void>
  onReject?:(id:string) => Promise<void>;
</void>
export const MilestonesList:React.FC<MilestonesListProps> = ({;
</MilestonesListProps>'
      <div className="space-y-4">;"
</div>
          <Card key={i}>;
</Card>"
            <CardContent className="p-6">;"
</CardContent>"
              <div className="h-6 w-48 bg-muted rounded animate-pulse mb-4"></div>;""
              <div className="h-4 bg-muted rounded animate-pulse w-full mb-2"></div>;""
              <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>;"

            </CardContent>;
          </Card>;
      </div>;

      <EmptyState;"
        icon={<span className="text-3xl"></span>}"
</EmptyState>"
    <div className="space-y-6">;"
</div>"
        <div className="flex justify-end">;"
</div>)
          <Button onClick={() => setShowAddForm(true)}>;
</Button>"
            <Plus className="h-4 w-4 mr-2" />;"
</Plus>
          </Button>;
        </div>;
        <Card>;
</Card>"
          <CardContent className="pt-6">;"
</CardContent>"
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>;"
            <AddMilestoneForm ;
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              onCancel={() => setShowAddForm(false)}
</AddMilestoneForm>
          </CardContent>;
        </Card>;"
      <div className="space-y-4">;"
</div>
          <MilestoneCard;

            key={milestone.id}            id={milestone.id}
            projectId={milestone.projectid}
            title={milestone.title}
            description={milestone.description}
            amount={parseFloat(milestone.amount.toString())}
            status={milestone.status}
            dueDate={milestone.duedate}
            onApprove={onApprove}
            onReject={onReject}
          />;
</MilestoneCard>
      </div>;
    </div>;

},; <Card key= {
  i;"
}> <CardContent className="p-6" > <div className="h-6 w-48 bg-muted rounded animate-pulse mb-4" ></div> <div className="h-4 bg-muted rounded animate-pulse w-full mb-2" ></div> <div className="h-4 bg-muted rounded animate-pulse w-3/4" ></div> </CardContent> </Card>) )"
}</div>) 
}<Button onClick= {
  () => setShowAddForm (true) 
</Button>"
}> <Plus className="h-4 w-4 mr-2" /> Add Milestone </Button> </div>)"
</Plus>
}<AddMilestoneForm onSubmit= {
  handleSubmit;
}isSubmitting= {
  isSubmitting;
}onCancel= {
  () => setShowAddForm (false) 
</AddMilestoneForm>
}/> </CardContent> </Card>) 
}<MilestoneCard key= {
  milestone.id;
}id= {
  milestone.id;
}projectId= {
  milestone.project id;
}title= {
  milestone.title;
}description= {
  milestone.description;
}amount= {
  parseFloat (milestone.amount.toString () ) 
}status= {
  milestone.status;
}dueDate= {
  milestone.due date;
}onApprove= {
  onApprove;
}onReject= {
  onReject;
}/>) ) 
</MilestoneCard>
}</div> </div>) "

