<<<<<<< HEAD
import React from 'react';
import { cn } from "../../utils/cn";
interface SwitchProps {
=======
<<<<<<< HEAD
import { cn               } from '../../utils/cn';
=======
import React from 'react.ts';
import { cn               } from '../../utils/cn';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface SwitchProps extends React.PropsWithChildren<{}> {

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  checked?: boolean;
  onCheckedChange?: (checked: anyanyanyanyanyanyanyanyanyanyanyanyanyanyboolean)               => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  'aria-label'?: string;
<<<<<<< HEAD
export function Switch({
  checked = false,
  onCheckedChange,
  disabled = false,
  className,;
  id,;
  'aria-label': ariaLabel,;
  ...props;
}: SwitchProps) {;
  const handleToggle = () => {;
    if (!disabled && onCheckedChange) {;
      onCheckedChange(!checked);
  };
=======

export function Switch(...args: any[]): any {;
  const handleToggle = () => {;
    if (!disabled && onCheckedChange) {;
      onCheckedChange(!checked);

  
};

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  return (
    <button
      type = "button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={handleToggle}
      className = {
  cn(
        'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
        checked ? 'bg-primary' : 'bg-input',
        disabled && 'opacity-50 cursor-not-allowed',
  className
      )
}
      id={id}
      {...props}
      <span
        className = {
  cn(
          'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
  checked ? 'translate-x-5' : 'translate-x-0'
        );
;
;
;
};
      />;
    </button>;
  );
}}}