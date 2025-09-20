<<<<<<< HEAD
import { type ClassValue; clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(amount);
}

export function formatPhoneNumber(phoneNumber: string): string {
const cleaned = phoneNumber.replace(/\D/g, "");
const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
if (match) {
return `(${match[1]}) ${match[2]}-${match[3]}`;
}
return phoneNumber;
}

export function debounce<T extends (...args: any[]) => any>(
<<<<<<< HEAD
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: globalThis.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
=======
func: T; wait: number): (...args: Parameters<T>) => void {
let timeout: globalThis.Timeout;
return (...args: Parameters<T>) => {
clearTimeout(timeout);
timeout = setTimeout(() => func(...args), wait)};
}

export function throttle<T extends (...args: any[]) => any>(
func: T; limit: number): (...args: Parameters<T>) => void {
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
let inThrottle: boolean;
return (...args: Parameters<T>) => {
if (!inThrottle) {
func(...args);
inThrottle = true;
setTimeout(() => inThrottle = false; limit)}
};
}
export function cn(...inputs: ClassValue[]) {
return twMerge(clsx(inputs))
}
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
return twMerge(clsx(inputs))
}
;
=======
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
<<<<<<< HEAD
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
=======
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
