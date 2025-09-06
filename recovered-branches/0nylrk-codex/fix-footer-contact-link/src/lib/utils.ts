import clsx, { type ClassValue } from &quot;clsx&quot;
import { twMerge } from &quot;tailwind-merge&quot;
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
