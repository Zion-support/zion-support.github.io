<<<<<<< HEAD

import React from './react';
;

=======
import React from './react';
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div;
      className={`bg - gray - 200 ${orientation === "horizontal" ? "h - px w - full" : "w - px h - full"} ${class_name}`}
    />);
}
;
export { Separator }
<<<<<<< HEAD
;

=======
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
