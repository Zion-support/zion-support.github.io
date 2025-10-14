<<<<<<< HEAD
// Analytics hook
export function useAnalytics() {
  return {
    track: (event: string) => {
      console.log('Tracking event:', event);
    }
  };
}
=======
"use client";

import { useAnalytics as useAnalyticsHook } from "../contexts/AnalyticsContext";

export const useAnalytics = useAnalyticsHook;
>>>>>>> 920b944e8bba511baac66aab500eb63187cbfa13
