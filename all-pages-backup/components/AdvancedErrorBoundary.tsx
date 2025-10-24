<<<<<<< HEAD:all-pages-backup/components/AdvancedErrorBoundary.tsx
  className?: string
<<<<<<< HEAD:all-pages-backup/components/AdvancedErrorBoundary.tsx
    const errorReport: ErrorReport = {;
      errorId: this.state.errorId || this.generateErrorId()
      error,
  errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
