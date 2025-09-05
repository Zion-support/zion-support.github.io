<<<<<<< HEAD
=======
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
=======
<<<<<<< HEAD

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
=======
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {;
  "children": React.ReactNode;
>>>>>>> main
  className?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
';
export function Select(props: any) {';';
=======
;
export function Select(props: any) {;
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus: outlin e-none focus: rin g-2 focus: rin g-ring focus: rin g-offset-2 disabled: curso r-not-allowed disabled: opacit y-50';
;
=======
export function Select($1) {
  const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background "focus": outlin e-none focus: rin g-2 focus: rin g-ring focus: rin g-offset-2 disabled: curso r-not-allowed disabled: opacit y-50';
>>>>>>> main
>>>>>>> main
  return (;
    <select;
      className={`${baseClasses"} ${className}`}
      {...props}
    >;
      {children}
    </select>;
  );
}
<<<<<<< HEAD

interface SelectTriggerProps {

  children: React.ReactNode;
=======
;
interface SelectTriggerProps {;
<<<<<<< HEAD
  "children": "React.ReactNode;
  className?: string;
;
"}
;
export function SelectTrigger("props": "any) {;
  return (;
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background "focus": outlin e-none "focus": rin g-2 "focus": rin g-ring "focus": rin g-offset-2 "disabled": curso r-not-allowed "disabled": opacit y-50 ${className"}`}>;
=======
  "children": React.ReactNode;
>>>>>>> main
  className?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD

export function SelectTrigger(props: any) {
  return (
    <div className="min-h-screen bg-white">
=======
;
export function SelectTrigger(props: any) {;
  return (;
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus: outlin e-none focus: rin g-2 focus: rin g-ring focus: rin g-offset-2 disabled: curso r-not-allowed disabled: opacit y-50 ${className}`}>;
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
export function SelectTrigger($1) {
  return (
    <div className="min-h-screen bg-white">
>>>>>>> main
>>>>>>> main
      {children}
<<<<<<< HEAD
    </div>
    );
}

interface SelectContentProps {

  children: React.ReactNode;
=======
    </div>;
  );
}
;
interface SelectContentProps {;
<<<<<<< HEAD
  "children": "React.ReactNode;
  className?: string;
;
"}
;
export function SelectContent("props": "any) {;
  return (;
    <div className={`relative ${className"}`}>;
=======
  "children": React.ReactNode;
>>>>>>> main
  className?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD

export function SelectContent(props: any) {
  return (
    <div className="min-h-screen bg-white">
=======
;
export function SelectContent(props: any) {;
  return (;
    <div className={`relative ${className}`}>;
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
export function SelectContent($1) {
  return (
    <div className="min-h-screen bg-white">
>>>>>>> main
>>>>>>> main
      {children}
<<<<<<< HEAD
    </div>
    );
=======
    </div>;
  );
>>>>>>> main
}
;
interface SelectValueProps {;
  children?: "React.ReactNode;
  placeholder?: string;
<<<<<<< HEAD
;
"}
;
export function SelectValue("props": "any) {;
=======
}
;
export function SelectValue($1) {;
>>>>>>> main
  return (;
    <span className="block truncate">;
      {children || placeholder"}
    </span>;
  );
}
<<<<<<< HEAD

interface SelectItemProps {

  children: React.ReactNode;
=======
;
interface SelectItemProps {;
<<<<<<< HEAD
  "children": "React.ReactNode;
  "value": string;
  className?: string;
;
"}
;
export function SelectItem("props": "any) {;
=======
  "children": React.ReactNode;
>>>>>>> main
  value: string;
  className?: string;
}
;
export function SelectItem($1) {;
>>>>>>> main
  return (;
    <option value={value"} className={className}>;
      {children}
    </option>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
}';
</HTMLSelectElement>;';;';
=======
}
</HTMLSelectElement>;
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
}
</HTMLSelectElement>;';';
import React from 'react'; ; interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {; children: React.ReactNode; className?: string} export function Select($1) { const baseClasses = 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus: outlin e-none focus: rin g-2 focus: rin g-ring focus: rin g-offset-2 disabled: curso r-not-allowed disabled: opacit y-50'; ; return (; <select; className={`${baseClasses} ${className}`} {...props} >; {children} </select>; )} ; interface SelectTriggerProps {; children: React.ReactNode; className?: string} export function SelectTrigger($1) { return ( <div className="min-h-screen bg-white"> {children} </div>; )} ; interface SelectContentProps {; children: React.ReactNode; className?: string} export function SelectContent($1) { return ( <div className="min-h-screen bg-white"> {children} </div>; )} ; interface SelectValueProps {; children?: React.ReactNode; placeholder?: string} ; export function SelectValue($1) {; return (; <span className="block truncate">; {children || placeholder} </span>; )} ; interface SelectItemProps {; children: React.ReactNode; value: string; className?: string} ; export function SelectItem($1) {; return (; <option value={value} className={className}>; {children} </option>; )} </HTMLSelectElement>;';';
>>>>>>> main
>>>>>>> main
