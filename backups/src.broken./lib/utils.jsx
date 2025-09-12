<<<<<<< HEAD:src/lib/utils.jsx
import { clsx } from "clsx";
=======
import clsx from "clsx";
>>>>>>> origin/chore/fix-links-and-build:src/lib/utils.js
import { twMerge } from "tailwind-merge";

export function cn(_...inputs) {
    return twMerge(clsx(inputs));
}
