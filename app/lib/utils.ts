<<<<<<< HEAD
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
=======
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}