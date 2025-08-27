<<<<<<< HEAD
import clsx from "clsx";
=======
import { clsx } from "clsx";
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
