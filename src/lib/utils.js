import { clsx } from &apos;clsx';
import { twMerge } from &apos;tailwind-merge';&apos;&apos;

export function cn(...inputs) {
  return twMerge(clsx(inputs))}