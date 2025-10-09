import React from "react";

interface PlaceholderBannerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PlaceholderBanner({
  className = "",
  children,
}: PlaceholderBannerProps) {
  return (
    <div className={`placeholderbanner ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Placeholder Banner</h3>
          <p className="text-gray-600">Component content will be added here.</p>
        </div>
      )}
    </div>
  );
}
