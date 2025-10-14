import React, { ReactNode } from "react";

interface AccessibilityEnhancerProps {
  children: ReactNode;
}

export default function AccessibilityEnhancer({
  children,
}: AccessibilityEnhancerProps) {
  return <div className="accessibilityenhancer">{children}</div>;
}
f7f852c0f7415181a1b362c4aa5a784585ad5828;
