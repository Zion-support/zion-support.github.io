import { clsx } from "clsx"

export function cn(...inputs) {
  // Simple class name merger without tailwind-merge
  return clsx(inputs)
}