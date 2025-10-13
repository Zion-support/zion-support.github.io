<<<<<<< HEAD
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
=======
<<<<<<< HEAD
export function cn(...inputs: ClassValue[]) {
=======
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
>>>>>>> origin/main
}
>>>>>>> cursor/fix-errors-and-merge-to-main-eba1
