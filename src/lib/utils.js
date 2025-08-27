<<<<<<< HEAD
import clsx from "clsx";
=======
import { clsx } from "clsx";
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
