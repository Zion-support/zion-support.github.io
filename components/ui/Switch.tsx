interface SwitchProps {

interface SwitchProps {;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  class_name?: string;
}
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
