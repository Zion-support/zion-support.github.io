

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const checkDispute = async () => {
      if (!projectId && !milestoneId) {
        setIsLoading(false);
        return
      }
      try {

=======

        setIsLoading(true),
        
        let query = supabase
          .from("disputes")
          .select("id, status")
          .eq("project_id", projectId),
        


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        // If milestone ID is provided, filter by that too
        if (milestoneId) {
          query = query && query.eq("milestone_id", milestoneId)
        }
        // Order by status priority: open, under_review, resolved, closed

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        if (data && data.length > 0) {
          // Get the first dispute (highest priority based on status)
          setIsUnderDispute(true);
          setDisputeStatus(data[0].status as any);
          setDisputeId(data[0].id)
        } else {
          setIsUnderDispute (false);
          setDisputeStatus (null);
          setDisputeId (null);
        }
      } catch (err) {

        console.error ("Error checking dispute status:", err);
        setIsUnderDispute (false);
        setDisputeStatus (null);
        setDisputeId (null);

      } finally {
        setIsLoading (false);
      }
    }

=======
        console.error("Error checking dispute status:", err),
        setIsUnderDispute(false),
        setDisputeStatus(null),
        setDisputeId(null)
      } finally {
        setIsLoading(false)

=======
    isLoading 

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
}