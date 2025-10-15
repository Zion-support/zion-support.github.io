<<<<<<< HEAD

}
=======
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | boolean)[]) {
  return twMerge(clsx(inputs));
}
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
