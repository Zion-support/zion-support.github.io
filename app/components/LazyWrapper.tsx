import React from "react";

const LazyWrapper = () => {
  return (
    div>
      <h2>LazyWrapper</h2>
  )
      <p className="text-gray-300 text-lg">This component is under construction.</p>
  
  )
}

export default function LazyWrapper({ children }: LazyWrapperProps) {
  return <div className="lazy-wrapper">{children}</div>;
}
