import {MilestonesList} from '../MilestonesList';
import {PaymentSummary} from '../PaymentSummary';

import React from 'react';
import { MilestonesList  } from '../MilestonesList';
import { PaymentSummary  } from '../PaymentSummary';
import { Milestone, MilestoneStatus, MilestoneActivity  } from '@/hooks/useMilestones';
import { toast } from "sonner";
interface MilestoneManagerProps {


  refetch: () => Promise<void>
}

export function MilestoneManager({;
  projectId;
  onCreateMilestone: (data: any) => Promise<Milestone | null />,
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean />,
  onDeleteMilestone: (id: string) => Promise<boolean />,
  onUploadDeliverable: (id: string, file: File) => Promise<any />,}
  refetch: () => Promise<void />}
}  projectId;
  milestones;
  activities;
  isLoading;
  isClient;
  isTalent;
  paymentTerms;
  isSubmitting;
  onCreateMilestone;
  onUpdateStatus;
  onDeleteMilestone;
  onUploadDeliverable;

          milestones={milestones}
pr-12325

          activities={activities}
          is_loading={is_loading}
          is_client={is_client}
milestones={milestones}
          activities={activities}
          isLoading={isLoading}
          isClient={isClient}
          onCreateMilestone={onCreateMilestone}
          onUpdateStatus={onUpdateStatus}
          onDeleteMilestone={onDeleteMilestone}
          onUploadDeliverable={onUploadDeliverable}

isSubmitting={isSubmitting}
          onApprove={isClient ? handleMilestoneApproved : undefined}
          onReject={isClient ? handleMilestoneRejected : undefined}
        />
      </div>
      <div>
        <PaymentSummary
          milestones={milestones}
          paymentTerms={paymentTerms}
        />;
      </div>;
      <div>;
        <PaymentSummary
          milestones={milestones} 
isSubmitting={isSubmitting}
          onApprove={isClient ? handleMilestoneApproved :undefined}
          onReject={isClient ? handleMilestoneRejected :undefined}
        />;
      </div>;
      <div>;
        <PaymentSummary ;
          milestones={milestones} ;
          paymentTerms={paymentTerms}
          onCreateMilestone={onCreateMilestone}
          onUpdateStatus={onUpdateStatus}
          onDeleteMilestone={onDeleteMilestone}
          onUploadDeliverable={onUploadDeliverable}          paymentTerms={paymentTerms}
        />;
      </div>;
    </div>;
  );
}

          is_submitting={is_submitting}
          on_approve={is_client ? handleMilestoneApproved : undefined}
          on_reject={is_client ? handleMilestoneRejected : undefined}
        />;
      </div>;
      <div>;

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
}

;
  ),; interface MilestoneManagerProps {
}  ),; interface MilestoneManagerProps {
  projectId: string;
milestones: Milestone[];
activities: Record<string MilestoneActivity[]>;
isLoading: boolean;
isClient: boolean;
isTalent: boolean;
paymentTerms?: string;
isSubmitting: boolean;
onCreateMilestone: (data: any) => Promise<Milestone | null>;
onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>;
onDeleteMilestone: (id: string) => Promise<boolean>;
onUploadDeliverable: (id: string, file: File) => Promise<any>;
refetch: () => Promise<void> 
}projectId, milestones, activities, isLoading, isClient, isTalent, paymentTerms, isSubmitting, onCreateMilestone, onUpdateStatus, onDeleteMilestone, onUploadDeliverable, refetch 
}: MilestoneManagerProps) {
  const handleMilestoneApproved = async (milestoneId: string) => {
  try {
}
;

};
const handleMilestoneRejected = async (milestoneId: string) => {
  try {
}
};
grid grid-cols-1 lg:grid-cols-3 gap-6"> <div className=" lg:col-span-2" > <MilestonesList milestones= {
  milestones 
}activities= {
  activities 
}isLoading= {
  isLoading 
}isClient= {
  isClient 
}onCreateMilestone= {
  onCreateMilestone 
}onUpdateStatus= {
  onUpdateStatus 
}onDeleteMilestone= {
  onDeleteMilestone 
}onUploadDeliverable= {
  onUploadDeliverable 
}isSubmitting= {
  isSubmitting 
}onApprove= {
  isClient ? handleMilestoneApproved : undefined 
}onReject= {
  isClient ? handleMilestoneRejected : undefined 
}/> </div> <div> <PaymentSummary milestones= {
  milestones 
}paymentTerms= {
  paymentTerms 
}/> </div> </div>) 
}
        />
      </div>
    </div>
  )
}
        />;
      </div>;
    </div>;
  );
}
;
          onUploadDeliverable={onUploadDeliverable}

        />;

</PaymentSummary>
      </div>;
      <div>;
        <PaymentSummary;
          paymentTerms={paymentTerms}

          payment_terms={payment_terms}

    </div>);

activities: Record<string MilestoneActivity[]>;
onCreateMilestone: (data: any) => Promise<Milestone | null>;

onDeleteMilestone: (id: string) => Promise<boolean>;
onUploadDeliverable: (id: string, file: File) => Promise<any>;
grid grid-cols-1 lg:grid-cols-3 gap-6"> <div className=" lg:col-span-2" > <MilestonesList milestones= {"
}/> </div> <div> <PaymentSummary milestones= {
}/> </div> </div>) 
    </div>;"
pr-12325
</div>

}/> </div> </div>) 
      </div>
    </div>
      </div>;
    </div>;
  );
}
;
