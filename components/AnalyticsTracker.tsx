import Head from "next/head";
import React, { useEffect } from "react";

interface AnalyticsTrackerProps {
  pageName?: string;
  customEvents?: Array<{ event: string; category: string; action: string; label?: string; value?: number }>;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ pageName = "Home", customEvents = [] }) => {
  useEffect(() => {
    // Minimal no-op to keep component safe during build
    void pageName;
    void customEvents;
  }, [pageName, customEvents]);

  return (
    <Head>
      <title>{pageName} | Zion Tech Group</title>
    </Head>
  );
};

export default AnalyticsTracker;