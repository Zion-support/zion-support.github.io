import React from "react";
interface SeparatorProps {
  class_name?: string;
  orientation?: "horizontal" | "vertical";
}
const Separator: React.FC<SeparatorProps> = ({
  className = ""
  orientation = "horizontal"
}) => {

interface SeparatorProps {;
  className?: string;
  orientation?: "horizontal" | "vertical";
}

const Separator: React.FC<SeparatorProps> = ({;
  className = "",;
  orientation = "horizontal",;
}) => {;
  return (
    <div
      className={`bg-gray-200 ${orientation === "horizontal" ? "h-px w-full" : "w-px h-full"} ${className}`}
    />;
  );
}
export { Separator }
