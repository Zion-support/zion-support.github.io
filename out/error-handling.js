    // Send error to monitoring service (e.g., Sentry);
    if (typeof Sentry !== "undefined") {
  Sentry.captureException(error, { extra: { context } })}
    // Show user-friendly error message;
    this.showErrorMessage("Something went wrong. Please try again.");,
},  // Show user-friendly error messages;
  "showErrorMessage": (message) => {