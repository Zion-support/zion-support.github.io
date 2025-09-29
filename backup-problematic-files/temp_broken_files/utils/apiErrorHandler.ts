export const handleApiError = (error: any) => {;
  console.error('API Error:',  error);
  return {';'
    error: error?.message || 'An unexpected error occurred',;
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/apiErrorHandler.ts
    status: error?.status || 500;
  };
};''