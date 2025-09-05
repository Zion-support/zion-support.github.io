 export function useDisputeCheck (projectId?: string, milestoneId?: string) {
  const [isUnderDispute, setIsUnderDispute] = useState (false);
const [disputeStatus, setDisputeStatus] = useState<'open' | 'under review' | 'resolved' | 'closed' | null> (null);
const [disputeId, setDisputeId] = useState<string | null> (null);
const [isLoading, setIsLoading] = useState (true);
const checkDispute = async () => {
  if (!projectId && !milestoneId) {
  //If milestone ID is provided, filter by that too if (milestoneId) {
  //Order by status priority: open, under review, resolved, closed query = query.order ("status", {
  ascending: true 
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 const {
  data, error 
}= await query;
if (error) throw error;
}finally {
  setIsLoading (false) 
}
};
}, [projectId, milestoneId]);
}