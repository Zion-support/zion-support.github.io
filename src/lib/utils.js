import { twMerge } from 'tailwind-merge
import clsx from 'clsx

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}ursor/migrate-github-actions-to-pm2-and-clean-up-5599
