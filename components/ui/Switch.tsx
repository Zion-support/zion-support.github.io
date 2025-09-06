interface SwitchProps {
=======

interface SwitchProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  class_name?: string;
}
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
