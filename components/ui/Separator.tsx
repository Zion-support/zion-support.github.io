<<<<<<< HEAD
import React from './react';
;
=======

import React from './react';
;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface SeparatorProps {
  class_name?: string;
  orientation?: "horizontal" | "vertical";
}
<<<<<<< HEAD
const Separator: React.FC < SeparatorProps> = ({
  class_name = "",
  orientation = "horizontal",
=======

const Separator: React.FC < SeparatorProps> = ({
  class_name = "",
  orientation = "horizontal",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
