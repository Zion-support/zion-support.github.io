<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// utils utility functions

export interface utilsConfig {
  enabled: boolean;
}
<<<<<<< HEAD

export class utils {
  private config: utilsConfig;

  constructor(config: Partial<utilsConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('utils initialized');
    }
  }
}

export const utilsInstance = new utils();
export default utilsInstance;
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
<<<<<<< HEAD
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
// utils
export const utils = () => {
  // Utility function implementation
  return null;
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======


import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))

}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
