import React from "react";

interface EmptyComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EmptyComponent({
  className = "",
  children,
}: EmptyComponentProps) {
  return (
    <div className={`emptycomponent ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Empty Component</h3>
          <p className="text-gray-600">Component content will be added here.</p>
        </div>
      )}
    </div>
  );
}
