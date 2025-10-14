import { clsx, type ClassValue } from 'clsx';'
import { twMerge } from 'tailwind-merge';
ursor/fix-errors-and-merge-to-main-94a7
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));',
},
