<<<<<<< HEAD

import React from './react';
;

=======
import React from './react';
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div;
      className={`bg - gray - 200 ${orientation === "horizontal" ? "h - px w - full" : "w - px h - full"} ${class_name}`}
    />);
}
;
export { Separator }
;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
