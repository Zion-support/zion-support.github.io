
import React, { useState } from 'react',;
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',;
import { useAuth } from '@/hooks/useAuth',;
import { MilestoneCard } from './MilestoneCard',;
import { AddMilestoneForm } from './AddMilestoneForm',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent } from '@/components/ui/card',;
<<<<<<< HEAD
import React, { useState } from 'react';
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones';
import { useAuth } from '@/hooks/useAuth';
import { MilestoneCard } from './MilestoneCard';
import { AddMilestoneForm } from './AddMilestoneForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
// lucide-react doesn't export PlusIcon, use our icon wrapper;
import { Plus } from 'lucide-react';
import { EmptyState } from '@/components/ui/empty-state',;
<<<<<<< HEAD
import { EmptyState } from '@/components/ui/empty-state';
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
;
interface MilestonesListProps {;
  milestones:Milestone[],;
  activities:Record<string MilestoneActivity[]>,;
  isLoading:boolean,;
  isClient:boolean,;
  onCreateMilestone:(data:any) => Promise<Milestone | null>,;
  onUpdateStatus:(id:string, status:MilestoneStatus, comment?:string) => Promise<boolean>,;
  onDeleteMilestone:(id:string) => Promise<boolean>,;
  onUploadDeliverable:(id:string, file:File) => Promise<any>,;
  isSubmitting:boolean,;
  onApprove?:(id:string) => Promise<void>,;
  onReject?:(id:string) => Promise<void>;
}
;
export const MilestonesList:React.FC<MilestonesListProps> = ({;
  milestones,;
  activities,;
  isLoading,;
  isClient,;
  onCreateMilestone,;
  onUpdateStatus,;
  onDeleteMilestone,;
  onUploadDeliverable,;
  isSubmitting,;
  onApprove,;
  onReject;
}) => {;
  const [showAddForm, setShowAddForm] = useState(false),;
  ;
  const handleSubmit = async (data:any) => {;
    await onCreateMilestone(data),;
    setShowAddForm(false);
  },;
;
  if (isLoading) {;
    return (;
      <div className="space-y-4">;
        {[1, 2, 3].map((i) => (;
<<<<<<< HEAD

      <div className="space-y-4">;"
</div>
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
          <Card key={i}>;
            <CardContent className="p-6">;
              <div className="h-6 w-48 bg-muted rounded animate-pulse mb-4"></div>;
              <div className="h-4 bg-muted rounded animate-pulse w-full mb-2"></div>;
              <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
<<<<<<< HEAD
=======
    ),;
  }
  ;
  if (milestones.length === 0 && !showAddForm) {;
    return (;
      <EmptyState;
        icon={<span className="text-3xl"></span>}
        title="No Milestones Yet";
        description={isClient ? ;
          "Break down the project into manageable milestones to track progress and payments." :;
          "No milestones have been created for this project yet."}
        action={isClient ? ;
          {;
            text:"Create First Milestone",;
            onClick:() => setShowAddForm(true);
          } undefined;
        }
      />;
    ),;
  }
;
  return (;
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
    <div className="space-y-6">;
      {isClient && !showAddForm && (;
        <div className="flex justify-end">;
          <Button onClick={() => setShowAddForm(true)}>;
            <Plus className="h-4 w-4 mr-2" />;
            Add Milestone;
          </Button>;
        </div>;
      )}
<<<<<<< HEAD
=======
      ;
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
      {showAddForm && (;
        <Card>;
          <CardContent className="pt-6">;
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>;
<<<<<<< HEAD
<AddMilestoneForm ;
=======
            <AddMilestoneForm ;
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              onCancel={() => setShowAddForm(false)}
            />;
          </CardContent>;
        </Card>;
      )}
      ;
      <div className="space-y-4">;
        {milestones.map((milestone) => (;
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
        ))}
      </div>;
    </div>;
  ),;
},; <Card key= {;
  i ;
}> <CardContent className="p-6" > <div className="h-6 w-48 bg-muted rounded animate-pulse mb-4" ></div> <div className="h-4 bg-muted rounded animate-pulse w-full mb-2" ></div> <div className="h-4 bg-muted rounded animate-pulse w-3/4" ></div> </CardContent> </Card>) ) ;
}</div>) ;
}
}/>) ;
}<Button onClick={;"  () => setShowAddForm (true) ";"}> <Plus className="h-4 w-4 mr-2" /> Add Milestone </Button> </div>) ;
}<AddMilestoneForm onSubmit= {;
  handleSubmit ;
}isSubmitting= {;
  isSubmitting ;
}onCancel= {;
  () => setShowAddForm (false) ;
}/> </CardContent> </Card>) ;
}<MilestoneCard key= {;
  milestone.id ;
}id= {;
  milestone.id ;
}projectId= {;
  milestone.project id ;
}title= {;
  milestone.title ;
}description= {;
  milestone.description ;
}amount= {;
  parseFloat (milestone.amount.toString () ) ;
}status= {;
  milestone.status ;
}dueDate= {;
  milestone.due date ;
}onApprove= {;
  onApprove ;
}onReject= {;
  onReject ;
}/>) ) ;
}</div> </div>) ;
<<<<<<< HEAD
:temp_broken_files/projects/milestones/MilestonesList.tsx
};""
};
"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/projects/milestones/MilestonesList.tsx
=======


>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
