

// Utility function to format dates for DB operations
export const _formatDateForDB = (_date: Date | string | undefined) => {_if (!date) return undefined;
  return typeof date === 'string' ? date : format(date, _'yyyy-MM-dd');};

// Error handling with toast
export const _handleResumeError = (_e: unknown, _errorMessage: string) => {_toast({
    title: "Error", _description: `${errorMessage}: ${_e.message}`,
    variant: "destructive"
  });
  return false;
};

// Success notification
export const _showSuccessToast = (_title: string, _description: string) => {_toast({
    title, _description});
  return true;
};
