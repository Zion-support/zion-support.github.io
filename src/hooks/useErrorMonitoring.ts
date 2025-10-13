import { useState, useEffect, useCallback } from "react";

interface ErrorInfo {
  message: string;
  stack?: string;
  timestamp: number;
  component?: string;
  severity: "low" | "medium" | "high" | "critical";
}

interface UseErrorMonitoringReturn {
  errors: ErrorInfo[];
  logError: (
    error: Error,
    component?: string,
    severity?: ErrorInfo["severity"],
  ) => void;
  clearErrors: () => void;
  getErrorCount: () => number;
}

export const useErrorMonitoring = (): UseErrorMonitoringReturn => {
  const [errors, setErrors] = useState<ErrorInfo[]>([]);

  const logError = useCallback(
    (
      error: Error,
      component?: string,
      severity: ErrorInfo["severity"] = "medium",
    ) => {
      const errorInfo: ErrorInfo = {
        message: error.message,
        stack: error.stack,
        timestamp: Date.now(),
        component,
        severity,
      };

      setErrors((prev) => [...prev, errorInfo]);

      // Log to console in development
      if (process.env.NODE_ENV === "development") {
        console.error("Error logged:", errorInfo);
      }

      // Send to external monitoring service in production
      if (process.env.NODE_ENV === "production") {
        // This would typically send to a service like Sentry, LogRocket, etc.
        console.error("Production error:", errorInfo);
      }
    },
    [],
  );

  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  const getErrorCount = useCallback(() => {
    return errors.length;
  }, [errors]);

  useEffect(() => {
    // Global error handler
    const handleGlobalError = (event: ErrorEvent) => {
      logError(new Error(event.message), "Global", "high");
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      logError(new Error(event.reason), "Promise", "high");
    };

    window.addEventListener("error", handleGlobalError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleGlobalError);
      window.removeEventListener(
        "unhandledrejection",
        handleUnhandledRejection,
      );
    };
  }, [logError]);

  return {
    errors,
    logError,
    clearErrors,
    getErrorCount,
  };
};
