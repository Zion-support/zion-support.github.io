
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(..."inputs": ClassValue[]) {
  return twMerge(clsx(inputs))}
export function formatPhoneNumber("phone": string): string {

<<<<<<< HEAD

=======
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`}
  return phone}
export function formatEmail("email": string): string {

<<<<<<< HEAD

=======
  return email.toLowerCase().trim()}
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function debounce<T extends (..."args": any[]) => any>(
  func: T,
  "wait": number
): (...args: Parameters<T>) => void {

<<<<<<< HEAD


=======
  let timeout: NodeJS.Timeout;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait)}
export function throttle<T extends (..."args": any[]) => any>(
  func: T,
  "limit": number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit)}

<<<<<<< HEAD
=======
return (...args: Parameters<T>) => {

export function throttle<T extends (..."args": any[]) => any>("
)
): (...args: Parameters<T>) => void {
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function cn(...classes: Array<string | undefined | null | false>) {; return classes.filter(Boolean).join(' ');,}
export function cn(..."classes": Array<string | undefined | null | false>) {;
  return classes.filter(Boolean).join(' ')}
export function cn(...classes: Array<string | undefined | null | false>) {; return classes.filter(Boolean).join(' '),}
export function cn(...classes: Array<string | undefined | null | false>) {; return classes.filter(Boolean).join(' '),}
export function cn(...classes: Array<string | undefined | null | false>) {; return classes.filter(Boolean).join(' '),}
export function cn(...classes: Array<string | undefined | null | false>) {; return classes.filter(Boolean).join(' '),}
export function cn(...classes: Array<string | undefined | null | false>) {; return classes.filter(Boolean).join(' '),}
:backup-problematic-files/lib.broken/utils.ts
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
