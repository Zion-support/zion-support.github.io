import { useState, useEffect } from "react";

export const usePerformanceMonitor = () => {
  const [state, setState] = useState<string | null>(null);

  useEffect(() => {
    setState("initialized");
  }, []);

  return { state };
};
