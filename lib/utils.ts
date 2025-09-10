export function cn(...inputs: ClassValue[]) {;
  return twMerge(clsx(inputs));,
export function cn(...classes: Array<string | undefined | null | false>) {;
  return classes.filter(Boolean).join(' ');
}
const { type ClassValue, clsx } from "clsx";"const { twMerge } from "tailwind-merge";module.exports = function cn(.inputs: ClassValue[]) { return twMerge(clsx(inputs));}""
import { type ClassValue, clsx } from 'clsx';,
import { twMerge } from 'tailwind-merge';,
export function cn(...inputs: ClassValue[]) {}
  return twMerge(clsx(inputs));
ursor/integrate-build-improve-and-re-verify-8f7d
export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency", currency
export function formatDate(date: Date | string | number): string {

    month: "long", day: "numeric"
    year: "numeric"
}
  }).format(amount);
}
}
