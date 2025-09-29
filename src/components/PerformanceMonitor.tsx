import React from "react";

type PerformanceMonitorProps = {
  showDashboard?: boolean;
};

export default function PerformanceMonitor(props: PerformanceMonitorProps): React.JSX.Element {
  void props;
  return <div aria-hidden="true" style={{ display: "none" }} />;
}

