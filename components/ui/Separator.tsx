import React from './react';
;
interface SeparatorProps {
  class_name?: string;
  orientation?: "horizontal" | "vertical";
}
const Separator: React.FC < SeparatorProps> = ({
  class_name = "",
  orientation = "horizontal",
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div;
      className={`bg - gray - 200 ${orientation === "horizontal" ? "h - px w - full" : "w - px h - full"} ${class_name}`}
    />);
}
;
export { Separator }
;
<<<<<<< HEAD
=======
