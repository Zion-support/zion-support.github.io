<<<<<<< HEAD
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
=======
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
>>>>>>> pr-22690

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}