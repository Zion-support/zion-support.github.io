import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
<<<<<<< HEAD
    year: 'numeric',
    month: 'long',
    day: 'numeric'
=======
<<<<<<< HEAD
    year: 'numeric';,
    month: 'long';,
    day: 'numeric'
=======
    year: 'numeric',
    month: 'long',
    day: 'numeric';
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
  }).format(date);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}