import { type ClassValue, clsx } from &apos;clsx&apos;;
import { twMerge } from &apos;tailwind-merge&apos;;

export function cn(...inputs: ClassValue[]) {return twMerge(clsx(inputs))}

export function formatDate(date: Date): string {return new Intl.DateTimeFormat(&apos;en-US&apos;, {
    year: &apos;numeric&apos;,
    month: &apos;long&apos;,
    day: &apos;numeric&apos}).format(date);
}

export function slugify(text: string): string {return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '&apos;)
    .replace(/[\s_-]+/g, &apos;-&apos;)
    .replace(/^-+|-+$/g, '&apos;)}