<<<<<<< HEAD
import { clsx } from "clsx";
=======
import clsx from "clsx";
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
