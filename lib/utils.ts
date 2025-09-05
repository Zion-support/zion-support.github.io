<<<<<<< HEAD
import { type ClassValue, clsx } from 'clsx';';
import { twMerge } from 'tailwind-merge';';
export function cn(...inputs: ClassValue[]) {;
  return twMerge(clsx(inputs));,
=======
export function cn(...classes: Array<string | undefined | null | false>) {;
  return classes.filter(Boolean).join(' ');
>>>>>>> origin/automation-fixes
}
const { type ClassValue, clsx } from "clsx";"const { twMerge } from "tailwind-merge";module.exports = function cn(.inputs: ClassValue[]) { return twMerge(clsx(inputs));}""
import { type ClassValue, clsx } from 'clsx';,
import { twMerge } from 'tailwind-merge';,
export function cn(...inputs: ClassValue[]) {}
  return twMerge(clsx(inputs));
}