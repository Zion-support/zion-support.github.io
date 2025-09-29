<<<<<<< HEAD
import React from "react";

interface AdvancedAnalyticsProps {
	enableConversionTracking?: boolean;
	enablePerformanceTracking?: boolean;
	enableErrorTracking?: boolean;
}

export default function AdvancedAnalytics(_props: AdvancedAnalyticsProps): React.JSX.Element | null {
	return null;
=======
import React, { useEffect } from "react";

interface AdvancedAnalyticsProps {
  enableConversionTracking?: boolean;
  enablePerformanceTracking?: boolean;
  enableErrorTracking?: boolean;
}

export default function AdvancedAnalytics(props: AdvancedAnalyticsProps): React.JSX.Element {
  useEffect(() => {
    void props;
  }, [props]);
  return <></>;
>>>>>>> origin/main
}

