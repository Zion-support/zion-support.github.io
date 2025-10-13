import { clsx } from 'clsx';
<<<<<<< HEAD
import { twMerge } from "tailwind-merge";
=======
import { twMerge } from 'tailwind-merge';
>>>>>>> cursor/fix-errors-and-merge-to-main-9087

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}