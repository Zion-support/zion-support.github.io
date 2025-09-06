<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
=======
import React from './react';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface SwitchProps {
=======

interface SwitchProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  class_name?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
const Switch: React.FC<SwitchProps> = ({
  checked = false
  onCheckedChange
  disabled = false
  className = ""
=======
const Switch: React.FC < SwitchProps> = ({
  checked = false,
  onCheckedChange,
  disabled = false,
  class_name = "",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}) => {
=======

const Switch: React.FC<SwitchProps> = ({;
  checked = false,;
  onCheckedChange,;
  disabled = false,;
  className = "",;
}) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <button;
      type="button";
      role="switch";
      aria - checked={checked}
      disabled={disabled}
<<<<<<< HEAD
      onClick={() => onCheckedChange?.(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${;
        checked ? "bg-blue-600" : "bg-gray-200";
      } ${className}`}
    >;
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />;
    </button>;
  );
}
export { Switch }
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
