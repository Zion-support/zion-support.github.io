 import {
  ApplicationsTable;
EmptyState;
ErrorState;
LoadingState;
ScoreDialog interface JobApplicationsTableProps {
  jobId: string 
}export function JobApplicationsTable ({
  jobId 
}: JobApplicationsTableProps) {
  const {
  applications;
isLoading;
error;
updateApplicationStatus;
markApplicationAsViewed;
refetch 
}= useJobApplications (jobId);
const [selectedApplication, setSelectedApplication] = useState<JobApplication | null> (null);
const [showScoreDialog, setShowScoreDialog] = useState (false);
return (<> <ApplicationsTable applications= {
  applications 
}processingId= {
  processingId 
}onViewApplication= {
  handleViewApplication 
}onStatusChange= {
  handleStatusChange 
}onViewScore= {
  handleViewScore 
}/> <ScoreDialog open= {
  showScoreDialog 
}onOpenChange= {
  setShowScoreDialog 
}application= {
  selectedApplication 
}onScoreUpdated= {
  handleScoreUpdated 
}/> </>) 
}