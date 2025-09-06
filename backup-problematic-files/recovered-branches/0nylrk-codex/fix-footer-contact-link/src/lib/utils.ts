<<<<<<< HEAD
import clsx, { type ClassValue } from &quot;clsx & quot;
import { tw_merge } from &quot;tailwind - merge & quot;
;
export /**
 * cn - Function description
 */
function cn() {
  return tw_merge (clsx (inputs));
}
=======
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
 ;
export function cn(...inputs:ClassValue[]) {;
  return twMerge(clsx(inputs));
} export function cn (...inputs: ClassValue[]) {
  return twMerge (clsx (inputs) ) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
