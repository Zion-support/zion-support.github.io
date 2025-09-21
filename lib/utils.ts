import { clsx } from "clsx"
// Temporarily disabled due to Node.js compatibility issues
// import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return clsx(inputs) // Simplified without twMerge
}