import import { type, ClassValue;, clsx } from "
import { twMerge } from "

export function cn(...inputs: ClassValue[]) {
return twMerge(clsx(inputs)),
}