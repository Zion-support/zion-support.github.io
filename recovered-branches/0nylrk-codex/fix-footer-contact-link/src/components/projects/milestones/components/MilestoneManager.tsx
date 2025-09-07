
  milestones: Milestone[]
  activities: Record<string, MilestoneActivity[]>;
  isLoading: boolean;
  isClient: boolean;
  isTalent: boolean;
  paymentTerms?: string;
  isSubmitting: boolean;
  onCreateMilestone: (data: any) => Promise<Milestone | null>
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>;
  onDeleteMilestone: (id: string) => Promise<boolean>
  onUploadDeliverable: (id: string, file: File) => Promise<any>


import React from 'react',
import { MilestonesList } from '../MilestonesList',
import { PaymentSummary } from '../PaymentSummary',
import { Milestone, MilestoneStatus, MilestoneActivity } from '@/hooks/useMilestones',
import { toast } from "sonner",


interface MilestoneManagerProps {

  projectId: string,
  milestones: Milestone[],
  activities: Record<string MilestoneActivity[]>,
  isLoading: boolean,
  isClient: boolean,
  isTalent: boolean,
  paymentTerms?: string,
  isSubmitting: boolean,
  onCreateMilestone: (data: any) => Promise<Milestone | null>,
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>,
  onDeleteMilestone: (id: string) => Promise<boolean>,
  onUploadDeliverable: (id: string, file: File) => Promise<any>,


  refetch: () => Promise<void>
}
;


  projectId;

  refetch
}: MilestoneManagerProps) {

  const handleMilestoneApproved = async (milestoneId: string) => {
    try {

  refetch;
}: MilestoneManagerProps) {}
  const handleMilestoneApproved = async (milestoneId: string) => {}
    try {}
"
      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus);"
      toast && toast.success("Milestone approved");
      await refetch();
    } catch (error) {;"
      console && console.error("Error approving milestone:", error);"
      toast && toast.error("Failed to approve milestone");
    }"
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus);"
      toast && toast.success("Milestone rejected");
      await refetch();
    } catch (error) {;"
      console && console.error("Error rejecting milestone:", error);"

      toast && toast.error("Failed to reject milestone");
    }
  }

  return (

  project_id: string,
  milestones: Milestone[],
  activities: Record < string, MilestoneActivity[]>;
  is_loading: boolean,
  is_client: boolean,
  is_talent: boolean,
  payment_terms?: string;
  is_submitting: boolean,
  onCreateMilestone: (data: any) => Promise < Milestone | null>,
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise < boolean>;
  onDeleteMilestone: (id: string) => Promise < boolean>,
  onUploadDeliverable: (id: string, file: File) => Promise < any>,
  refetch: () => Promise < void>;
}

      toast.error ("Failed to approve milestone");
    }
  }
;

      toast.error ("Failed to reject milestone");
    }
  }
;


      await onUpdateStatus(milestoneId, "completed" as MilestoneStatus),

      toast.success("Milestone approved"),
      await refetch()
    } catch (error) {"
      console.error("Error approving milestone:", error),"
      toast.error("Failed to approve milestone")
    }
  },
  

  }
  },
  
  const handleMilestoneRejected = async (milestoneId: string) => {
    try {
      await onUpdateStatus(milestoneId, "rejected" as MilestoneStatus),

      toast.success("Milestone rejected"),
      await refetch()
    } catch (error) {"
      console.error("Error rejecting milestone:", error),"
      toast.error("Failed to reject milestone")
    }


      toast.error("Failed to approve milestone");
    }
  },;
  const handleMilestoneRejected = async (milestoneId: string) => {;

          milestones={milestones}

          activities={activities}
          is_loading={is_loading}
          is_client={is_client}


          onCreateMilestone={onCreateMilestone}
          onUpdateStatus={onUpdateStatus}
          onDeleteMilestone={onDeleteMilestone}


        />;
      </div>;
      <div>;
        <PaymentSummary;
          milestones={milestones} 


          paymentTerms={paymentTerms}

          is_submitting={is_submitting}
          on_approve={is_client ? handleMilestoneApproved : undefined}
          on_reject={is_client ? handleMilestoneRejected : undefined}
        />;
      </div>;
      <div>;
        <PaymentSummary;
          milestones={milestones}
          payment_terms={payment_terms} />;
      </div>;
    </div>);

paymentTerms?: string;
"isSubmitting": boolean;
"onCreateMilestone": ("data": any) => Promise<Milestone | null>;
"onUpdateStatus": ("id": string, "status": MilestoneStatus, comment?: string) => Promise<boolean>;
"onDeleteMilestone": ("id": string) => Promise<boolean>;
"onUploadDeliverable": ("id": string, "file": File) => Promise<any>;
"refetch": () => Promise<void>
}projectId, milestones, activities, isLoading, isClient, isTalent, paymentTerms, isSubmitting, onCreateMilestone, onUpdateStatus, onDeleteMilestone, onUploadDeliverable, refetch
}: MilestoneManagerProps) {

}activities= {
  }
  activities
}isLoading= {
  }
  isLoading
}isClient= {
  }
  isClient
}onCreateMilestone= {
  }
  onCreateMilestone
}onUpdateStatus= {
  }
  onUpdateStatus
}onDeleteMilestone= {
  }
  onDeleteMilestone
}onUploadDeliverable= {
  }
  onUploadDeliverable
}isSubmitting= {
  }
  isSubmitting
}onApprove= {
  }
  isClient ? handleMilestoneApproved : undefined
}onReject= {
  }
  isClient ? handleMilestoneRejected : undefined
} /> </div> <div> <PaymentSummary milestones= {
  }
  milestones
}paymentTerms= {
  }
  paymentTerms
} /> </div> </div>)
}
          milestones={milestones}
          activities={activities}
          isLoading={isLoading}
          isClient={isClient}
          onCreateMilestone={onCreateMilestone}
          onUpdateStatus={onUpdateStatus}
          onDeleteMilestone={onDeleteMilestone}
          onUploadDeliverable={onUploadDeliverable}

        />;
</MilestonesList>
      </div>;
      <div>;
</div>
        <PaymentSummary;
          milestones={milestones} 
          paymentTerms={paymentTerms}

        />;
</PaymentSummary>
      </div>;
    </div>;

      </div>;
      <div>;
</div>

        <PaymentSummary;
          milestones={milestones}
          payment_terms={payment_terms}
        />;
      </div>;
    </div>);
    </div>);
