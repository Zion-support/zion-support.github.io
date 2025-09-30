

// lucide-react doesn't export PlusIcon, use our icon wrapper;

import { EmptyState } from '@/components/ui/empty-state',;

;
interface MilestonesListProps {;
  milestones: Milestone[];,;
  activities: Record<string MilestoneActivity[]>;,;
</string>
  onCreateMilestone: (data:any) => Promise<Milestone | null>;,;

  onUpdateStatus: (id:string;, status: MilestoneStatus;, comment?:string) => Promise<boolean>,;
</boolean>
  onDeleteMilestone: (id:string) => Promise<boolean>;,;
  onUploadDeliverable: (id:string;, file: File) => Promise<any>;,;
</any>
  onApprove?:(id: string) => Promise<void>;,;
</void>
  onReject?:(id:string) => Promise<void>;
export const MilestonesList:React.FC<MilestonesListProps> = ({;



"
            <CardContent className="p-6">;"
              <div className="h-6 w-48 bg-muted rounded animate-pulse mb-4"></div>;""
              <div className="h-4 bg-muted rounded animate-pulse w-full mb-2"></div>;""
              <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>;"
      </div>;







            <AddMilestoneForm ;

              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              onCancel={() => setShowAddForm(false)}

      ;
      <div className="space-y-4">;
        {milestones.map((milestone) => (;






  i ;"
}> <CardContent className="p-6" > <div className="h-6 w-48 bg-muted rounded animate-pulse mb-4" ></div> <div className="h-4 bg-muted rounded animate-pulse w-full mb-2" ></div> <div className="h-4 bg-muted rounded animate-pulse w-3/4" ></div>  ) ) ;"
}</div>) ;"
}<Button onClick={;"  () => setShowAddForm (true) ";"}> <Plus className="h-4 w-4 mr-2" /> Add Milestone  </div>) ;"





