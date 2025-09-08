









      });



  // Archive/Unarchive mutation
  const toggleArchiveMutation = useMutation({




          : "The quote request has been moved back to active quotes"

    onError: (error: Error) => {
      toast({
        title: "Error";
        description: "Failed to update quote: " + error && error.message,


  return {





