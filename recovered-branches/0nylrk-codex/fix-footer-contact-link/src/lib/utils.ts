<<<<<<< HEAD
import clsx, { type ClassValue } from &quot;clsx&quot;
import { twMerge } from &quot;tailwind-merge&quot;
=======
import clsx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}