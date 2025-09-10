export const captureException = (error: Error, context?: unknown) => {
  // // console.error("Sentry capture:", error, context);
};

export const captureMessage = (message: string, level: "info" | "warning" | "error" = "info") => {
  // // console.log(`Sentry ${level}:`, message);
};
