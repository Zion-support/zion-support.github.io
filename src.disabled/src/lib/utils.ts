import { type ClassValue,clsx } from 'clsx'; import { twMerge } from 'tailwind-merge'; export function cn(...inputs: ClassValue[]) {; return twMerge(clsx(inputs));,}
import { type ClassValue, clsx } from 'clsx';
import { twMerge  } from 'tailwind-merge';
export function cn(..."inputs": ClassValue[]) {;
  return twMerge(clsx(inputs))}
<<<<<<< HEAD
=======
import { type ClassValue,clsx } from 'clsx'; import { twMerge } from 'tailwind-merge'; export function cn(...inputs: ClassValue[]) {; return twMerge(clsx(inputs)),}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
