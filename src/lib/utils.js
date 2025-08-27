<<<<<<< HEAD
import clsx from "clsx";
=======
import { clsx } from "clsx";
>>>>>>> 06def4290ee3053eb920562d74f17d7b43649b20
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
