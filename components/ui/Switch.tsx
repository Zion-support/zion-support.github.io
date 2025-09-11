import React from './react';
;
interface SwitchProps {
interface SwitchProps {;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  class_name?: string;
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const Switch: React.FC < SwitchProps> = ({
  checked = false,
  onCheckedChange,
  disabled = false,
  class_name = "",
<<<<<<< HEAD
=======
}) => {
const Switch: React.FC<SwitchProps> = ({;
  checked = false,;
  onCheckedChange,;
  disabled = false,;
  className = "",;
}) => {;
  return (
    <button;
      type="button";
      role="switch";
      aria - checked={checked}
      disabled={disabled}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      on_click={() => onCheckedChange?.(!checked)}
      className={`relative inline - flex h - 6 w - 11 items - center rounded - full transition - colors focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:ring - offset - 2 disabled:cursor - not - allowed disabled:opacity - 50 ${
        checked ? "bg - blue - 600" : "bg - gray - 200";
      } ${class_name}`}
    >;
      <span;
        className={`inline - block h - 4 w - 4 transform rounded - full bg - white transition - transform ${
          checked ? "translate - x-6" : "translate - x-1";
        }`}
      />;
    </button>);
}
;
export { Switch }
;
<<<<<<< HEAD
=======
