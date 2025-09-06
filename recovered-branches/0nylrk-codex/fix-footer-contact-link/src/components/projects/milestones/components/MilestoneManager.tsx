 interface MilestoneManagerProps {
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