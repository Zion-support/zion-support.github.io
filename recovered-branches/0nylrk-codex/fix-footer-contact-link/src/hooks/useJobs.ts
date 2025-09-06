    } finally {
      setIsLoading (false);
    }
  }
  return {
    jobs;
    is_loading;
    error;
    refetch: fetch_jobs;
    updateJobStatus;
