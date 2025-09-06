
=======
import clsx, { type ClassValue } from &quot;clsx&quot;
import { twMerge } from &quot;tailwind-merge&quot;
import clsx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
