import { useContext } from &apos;react&apos;;
import { AnalyticsContext } from &apos;../contexts/AnalyticsContext&apos;;

export const useAnalytics = () => {;
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error(&apos;useAnalytics must be used within an AnalyticsProvider&apos;)}
  return context;
};