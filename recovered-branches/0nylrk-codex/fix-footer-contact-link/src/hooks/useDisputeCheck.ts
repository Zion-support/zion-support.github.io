

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const checkDispute = async () => {
      if (!projectId && !milestoneId) {
        setIsLoading(false),
        return
      }
      try {

        // If milestone ID is provided, filter by that too
        if (milestoneId) {
          query = query.eq("milestone_id", milestoneId)
        }
        // Order by status priority: open, under_review, resolved, closed

        if (data && data.length > 0) {
          // Get the first dispute (highest priority based on status)
          setIsUnderDispute(true),
          setDisputeStatus(data[0].status as any),
          setDisputeId(data[0].id)
        } else {
          setIsUnderDispute(false),
          setDisputeStatus(null),
          setDisputeId(null)
        }
      } catch (err) {
        console.error("Error checking dispute status:", err),
        setIsUnderDispute(false),
        setDisputeStatus(null),
        setDisputeId(null)
      } finally {
        setIsLoading(false)

  }
}