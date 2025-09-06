 export function MilestoneCreator ({
  onSubmit, isSubmitting, onCancel, projectScope, projectStartDate, projectEndDate, projectType 
}: MilestoneCreatorProps) {
  return (<AddMilestoneForm onSubmit= {
  onSubmit 
}isSubmitting= {
  isSubmitting 
}onCancel= {
  onCancel 
}projectScope= {
  projectScope 
}projectStartDate= {
  projectStartDate 
}projectEndDate= {
  projectEndDate 
}projectType= {
  projectType 
}/>) 
}