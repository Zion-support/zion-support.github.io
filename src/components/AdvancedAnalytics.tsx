<<<<<<< HEAD
import React from "react";

const AdvancedAnalytics: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">Advanced Analytics</h2>
      <p className="text-gray-400">Advanced analytics dashboard component</p>
    </div>
  );
};

<<<<<<< HEAD
export default AdvancedAnalytics;
=======
export default AdvancedAnalytics;
>>>>>>> cursor/fix-errors-and-merge-to-main-6f5b
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
}

>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
