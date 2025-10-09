import React from "react";

interface ResponsiveContainerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ResponsiveContainer({
  className = "",
  children,
}: ResponsiveContainerProps) {
  return (
    <div className={`responsivecontainer ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Responsive Container</h3>
          <p className="text-gray-600">Component content will be added here.</p>
        </div>
      )}
    </div>
  );
}
