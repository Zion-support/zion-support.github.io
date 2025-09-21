import { clsx } from "clsx"
// import { twMerge } from "tailwind-merge" // Temporarily disabled for build fix

export function cn(...inputs) {
  return clsx(inputs) // Simplified without twMerge for build fix
}