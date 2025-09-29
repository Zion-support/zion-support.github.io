import React from "react";

type PerformanceOptimizerProps = {
  isVisible?: boolean;
  onClose?: () => void;
};

export default function PerformanceOptimizer(props: PerformanceOptimizerProps): React.JSX.Element {
  const { isVisible } = props;
  if (!isVisible) return <></>;
  return (
    <div aria-hidden="true" style={{ display: "none" }} />
  );
}

