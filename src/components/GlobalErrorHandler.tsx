 const reportError = useCallback ( (error: Error, context?: unknown) => {
  //Log to console for development if (process.env.NODE ENV === 'development') {
  //Report to Sentry for production if (process.env.NODE ENV === 'production') {
  Sentry.withScope ( (scope) => {
  if (context) {
  
}
}, []);
}
}: undefined 
}) 
}, [retryCount, reportError]);
//Clear any active toasts would go here if the toast system supports it 
}, []);
return (<ErrorContext.Provider value= {
  contextValue 
}> {
  children 
}</ErrorContext.Provider>) 
}//Fallback for unknown errors return "An unexpected error occurred. Please try again." 
}// Utility hook for common error scenarios 
}return result;
}catch (error: any) {
  reportError (error);
if (options?.onError) {
  options.onError (error) 
}else {
  handleApiError (error, options?.retryAction) 
}
}
}, [reportError, handleApiError]);
}