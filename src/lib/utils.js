<<<<<<< HEAD
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
=======
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
