<<<<<<< HEAD
interface SwitchProps {} // Add your props here; checked?: boolean; onCheckedChange?: checked: boolean void; disabled?: boolean; className?: string; id?: string; "aria-label"?: string; export function Switch(function Switch(function Switch(function Switch({} checked = false, onCheckedChange, disabled = false," className,;" id,;" "aria-label": ariaLabel,; ...props}: SwitchProps) {): any {): any {): any {; if (!disabled && onCheckedChange) {; onCheckedChange(!checked)}; return() <button" type = "button" role="switch" aria-checked={checked} aria-label={ariaLabel} disabled={disabled} onClick={handleToggle} className = {} " " " cn(" "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"," checked ? "bg-primary" : "bg-input"," disabled && "opacity-50 cursor-not-allowed", className; ) } id={id} {...props} <span; className = {} " " " cn(" "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform"," checked ? "translate-x-5" : "translate-x-0" ); ; 
=======
import React from 'react.ts';
import { cn               } from '../../utils/cn';

interface SwitchProps extends React.PropsWithChildren<{}> {

  checked?: boolean;
  onCheckedChange?: (checked: anyanyanyanyanyanyanyanyanyanyanyanyanyanyboolean)               => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  'aria-label'?: string;

export function Switch(...args: any[]): any {;
  const handleToggle = () => {;
    if (!disabled && onCheckedChange) {;
      onCheckedChange(!checked);

  
};

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
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
