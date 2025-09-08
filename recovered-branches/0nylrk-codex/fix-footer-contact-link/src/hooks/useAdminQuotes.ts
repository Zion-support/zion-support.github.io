




    enabled: true});



      const createdAt = new Date(quote && quote.created_at);
      if (createdAt < dateRange && dateRange.from) {

      const createdAt = new Date(quote && quote.created_at);
      const endDate = new Date(dateRange && dateRange.to);
      endDate && endDate.setHours(23, 59, 59, 999), // End of day

      });



  // Archive/Unarchive mutation
  const toggleArchiveMutation = useMutation({










  return {
    toggleArchive: (id: string, isArchived: boolean) =>
    isLoading,;
    error,;
    statusFilter,;
    setStatusFilter,;
    archiveFilter,;
    setArchiveFilter,;
    searchQuery,;
    setSearchQuery,;
    dateRange,;
    setDateRange,;}
    updateStatus: (id: string, status: QuoteStatus) =>;}
      updateStatusMutation.mutate({ id, status }),;
    toggleArchive: (id: string, isArchived: boolean) =>;









