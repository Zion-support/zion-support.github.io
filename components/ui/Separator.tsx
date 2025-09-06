import React from "react";
<<<<<<< HEAD
interface SeparatorProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
}
const Separator: React.FC<SeparatorProps> = ({
  className = ""
  orientation = "horizontal"
}) => {
=======

interface SeparatorProps {;
  className?: string;
  orientation?: "horizontal" | "vertical";
}

const Separator: React.FC<SeparatorProps> = ({;
  className = "",;
  orientation = "horizontal",;
}) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div
      className={`bg-gray-200 ${orientation === "horizontal" ? "h-px w-full" : "w-px h-full"} ${className}`}
    />;
  );
}
export { Separator }