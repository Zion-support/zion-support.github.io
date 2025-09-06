<<<<<<< HEAD

import React from './react';
;

=======
import React from './react';
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const Switch: React.FC < SwitchProps> = ({
  checked = false,
  onCheckedChange,
  disabled = false,
  class_name = "",
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
