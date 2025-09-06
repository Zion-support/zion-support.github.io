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
