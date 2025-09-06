<<<<<<< HEAD
import clsx, { type ClassValue } from &quot;clsx&quot;
import { twMerge } from &quot;tailwind-merge&quot;
=======
import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}