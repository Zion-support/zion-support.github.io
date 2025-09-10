import { clsx } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(_...inputs) {
    return twMerge(clsx(inputs));
}
