    } finally {
      setIsLoading (false);
    }
  }
  return {
    job;
    is_loading;
    error;
    loadJobDetails;
  }
}
