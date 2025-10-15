<<<<<<< HEAD
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {}

export default ComponentName;
}return twMerge(clsx(inputs))
=======
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | boolean)[]) {
  return twMerge(clsx(inputs));
>>>>>>> 8a706cc6720bc3c546c68f8f243fe5fc4236601c
}