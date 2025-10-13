<<<<<<< HEAD
<<<<<<< HEAD
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
=======
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
=======
import { clsx } from 'clsx';
import { twMerge } from "tailwind-merge";
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
