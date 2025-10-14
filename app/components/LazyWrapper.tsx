import React from "react";

interface LazyWrapperProps {
  children: React.ReactNode;
}

export default function LazyWrapper({ children }: LazyWrapperProps) {
  return <div className="lazy-wrapper">{children}</div>;
}
