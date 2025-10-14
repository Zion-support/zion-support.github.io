import React from "react";

interface LazyWrapperProps {
  children: React.ReactNode;
}

export default function LazyWrapper({ children }: LazyWrapperProps) {
  return <div className="lazy-wrapper">{children}</div>;
}
f7f852c0f7415181a1b362c4aa5a784585ad5828;
