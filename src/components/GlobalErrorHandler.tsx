
    const errorKey = error.message;
    const currentRetryCount = retryCount[errorKey] || 0;

    reportError(error, { retryCount: currentRetryCount }),

          setRetryCount(prev => ({
            ...prev;
    const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
    

      
