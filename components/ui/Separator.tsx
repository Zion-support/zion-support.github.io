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
  return (
    <div;
      className={`bg - gray - 200 ${orientation === "horizontal" ? "h - px w - full" : "w - px h - full"} ${class_name}`}
    />);
}
;
export { Separator }
;