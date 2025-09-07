<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (...args: Parameters<T>) => {

export function throttle<T extends (..."args": any[]) => any>("
)
): (...args: Parameters<T>) => void {
<<<<<<< HEAD
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit)}
<<<<<<< HEAD



import { type ClassValue,clsx } from 'clsx'; import { twMerge } from 'tailwind-merge'; export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs))} export function formatPhoneNumber(phone: string): string { const cleaned = phone.replace(/\D/g,''); const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/); if (match) { return `(${match[1]}) ${match[2]}-${match[3]}`} return phone} export function formatEmail(email: string): string { return email.toLowerCase().trim()} export function debounce<T extends (...args: any[]) => any>( func: T,wait: number ): (...args: Parameters<T>) => void { let timeout: NodeJS.Timeout; return (...args: Parameters<T>) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args),wait)} export function throttle<T extends (...args: any[]) => any>( func: T,limit: number ): (...args: Parameters<T>) => void { let inThrottle: boolean; return (...args: Parameters<T>) => { if (!inThrottle) { func(...args); inThrottle = true; setTimeout(() => (inThrottle = false),limit)}

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/lib.broken/utils.ts
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
export function cn(...classes: Array<string | undefined | null | false>) {; return classes.filter(Boolean).join(' ');,}
export function cn(..."classes": Array<string | undefined | null | false>) {;
  return classes.filter(Boolean).join(' ')}
export function cn(...classes: Array<string | undefined | null | false>) {; return classes.filter(Boolean).join(' '),}
export function cn(...classes: Array<string | undefined | null | false>) {; return classes.filter(Boolean).join(' '),}
export function cn(...classes: Array<string | undefined | null | false>) {; return classes.filter(Boolean).join(' '),}
export function cn(...classes: Array<string | undefined | null | false>) {; return classes.filter(Boolean).join(' '),}
export function cn(...classes: Array<string | undefined | null | false>) {; return classes.filter(Boolean).join(' '),}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

"
export function cn(...classes: Array<string | undefined | null | false>) {; return classes.filter(Boolean).join(' ');,}
</string>
export function cn(..."classes": Array<string | undefined | null | false>) {;"
</string>"
export function cn(...classes: Array<string | undefined | null | false>) {; return classes.filter(Boolean).join(' '),}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
