import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
<<<<<<< HEAD
=======

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
<<<<<<< HEAD
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
}
=======
}
>>>>>>> main
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
