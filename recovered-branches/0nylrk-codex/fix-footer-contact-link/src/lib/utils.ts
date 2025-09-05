import clsx, { type ClassValue } from &quot;clsx&quot;
import { twMerge } from &quot;tailwind-merge&quot; 
export function cn(_...inputs: ClassValue[]) {_return twMerge(clsx(inputs))}