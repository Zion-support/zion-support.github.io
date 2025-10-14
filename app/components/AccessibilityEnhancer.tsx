import React, { ReactNode } from "react";

const AccessibilityEnhancer = () => {
  return (
    <div>
      <h2>AccessibilityEnhancer</h2>
      <p className="text-gray-300 text-lg">This component is under construction.</p>
    </div>
  )
}

export default function AccessibilityEnhancer({
  children,
}: AccessibilityEnhancerProps) {
  return <div className="accessibilityenhancer">{children}</div>;
}
