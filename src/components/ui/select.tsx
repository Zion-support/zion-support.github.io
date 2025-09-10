import React from 'react';
<<<<<<< HEAD
;
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {;
  "children": "React.ReactNode;
  className?: string;
"}
;
export function Select("props": "any) {;
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background "focus": outlin e-none "focus": rin g-2 "focus": rin g-ring "focus": rin g-offset-2 "disabled": curso r-not-allowed "disabled": opacit y-50';
;
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;;
export function Select(props: any) {;
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus: outlin e-none focus: rin g-2 focus: rin g-ring focus: rin g-offset-2 disabled: curso r-not-allowed disabled: opacit y-50';
;
export function Select($1) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background "focus": outlin e-none focus: rin g-2 focus: rin g-ring focus: rin g-offset-2 disabled: curso r-not-allowed disabled: opacit y-50';
  return (;
    <select;
      className={`${baseClasses"} ${className}`}
      {...props}
    >;
      {children}
    </select>;
  );
}
interface SelectTriggerProps {
  children: React.ReactNode;
;
interface SelectTriggerProps {;
  "children": "React.ReactNode;
  className?: string;
;
"}
;
export function SelectTrigger("props": "any) {;
  return (;
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background "focus": outlin e-none "focus": rin g-2 "focus": rin g-ring "focus": rin g-offset-2 "disabled": curso r-not-allowed "disabled": opacit y-50 ${className"}`}>;
  "children": React.ReactNode;
  className?: string;
}
export function SelectTrigger(props: any) {
  return (
    <div className="min-h-screen bg-white">;
export function SelectTrigger(props: any) {;
  return (;
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus: outlin e-none focus: rin g-2 focus: rin g-ring focus: rin g-offset-2 disabled: curso r-not-allowed disabled: opacit y-50 ${className}`}>;
    </div>;
  );
}
;
interface SelectContentProps {;
  "children": "React.ReactNode;
  className?: string;
;
"}
;
export function SelectContent("props": "any) {;
  return (;
    <div className={`relative ${className"}`}>;
  "children": React.ReactNode;
  className?: string;
}
export function SelectContent(props: any) {
  return (
    <div className="min-h-screen bg-white">;
export function SelectContent(props: any) {;
  return (;
    <div className={`relative ${className}`}>;
}
;
interface SelectValueProps {;
  children?: "React.ReactNode;
  placeholder?: string;
;
"}
;
export function SelectValue("props": "any) {;  "children": React.ReactNode;
  value: string;
  className?: string;
}
;
export function SelectItem($1) {;
  return (;
    <option value={value"} className={className}>;
      {children}
    </option>;
  );
}';
</HTMLSelectElement>;';;';
}
</HTMLSelectElement>;
}
</HTMLSelectElement>;';';
import React from 'react'; ; interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {; children: React.ReactNode; className?: string} export function Select($1) { const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus: outlin e-none focus: rin g-2 focus: rin g-ring focus: rin g-offset-2 disabled: curso r-not-allowed disabled: opacit y-50'; ; return (; <select; className={`${baseClasses} ${className}`} {...props} >; {children} </select>; )} ; interface SelectTriggerProps {; children: React.ReactNode; className?: string} export function SelectTrigger($1) { return ( <div className="min-h-screen bg-white"> {children} </div>; )} ; interface SelectContentProps {; children: React.ReactNode; className?: string} export function SelectContent($1) { return ( <div className="min-h-screen bg-white"> {children} </div>; )} ; interface SelectValueProps {; children?: React.ReactNode; placeholder?: string} ; export function SelectValue($1) {; return (; <span className="block truncate">; {children || placeholder} </span>; )} ; interface SelectItemProps {; children: React.ReactNode; value: string; className?: string} ; export function SelectItem($1) {; return (; <option value={value} className={className}>; {children} </option>; )} </HTMLSelectElement>;';';
=======

export function Select({ children, className = '', value, onValueChange, disabled = false }) {
  const baseClasses = `
    flex h-10 w-full items-center justify-between rounded-md border 
    border-zion-blue-light/30 bg-zion-blue-dark/50 px-3 py-2 text-sm 
    text-white placeholder:text-zion-slate-light/50
    focus:outline-none focus:ring-2 focus:ring-zion-cyan 
    focus:border-transparent transition-colors
  `;
  
  return (
    <select 
      className={`${baseClasses} ${className}`} 
      value={value} 
      onChange={onValueChange} 
      disabled={disabled}
    >
      {children}
    </select>
  );
}

export function SelectTrigger({ children, className = '', ...props }) {
  return (
    <button 
      className={`
        flex h-10 w-full items-center justify-between rounded-md border 
        border-zion-blue-light/30 bg-zion-blue-dark/50 px-3 py-2 text-sm 
        text-white placeholder:text-zion-slate-light/50
        focus:outline-none focus:ring-2 focus:ring-zion-cyan 
        focus:border-transparent transition-colors
        ${className}
      `} 
      {...props}
    >
      {children}
    </button>
  );
}

export function SelectItem({ children, className = '', value, ...props }) {
  return (
    <div 
      className={`
        relative flex w-full cursor-pointer select-none items-center 
        rounded-sm px-3 py-2 text-sm text-white outline-none 
        hover:bg-zion-blue/20 focus:bg-zion-blue/20 
        focus:text-white transition-colors
        ${className}
      `} 
      data-value={value} 
      {...props}
    >
      {children}
    </div>
  );
}

export function SelectValue({ placeholder }) {
  return <span className="text-sm">{placeholder || 'Select an option'}</span>;
}

export function SelectContent({ children, className = '' }) {
  return (
    <div 
      className={`
        absolute top-full left-0 right-0 z-50 mt-1 rounded-md border 
        border-zion-blue-light/30 bg-zion-blue-dark/90 backdrop-blur-sm 
        shadow-lg ${className}
      `}
    >
      {children}
    </div>
  );
}
>>>>>>> origin/backup-improvements-20250827-015311
