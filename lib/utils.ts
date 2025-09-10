export function cn(...inputs: ClassValue[]) {;
  return twMerge(clsx(inputs));,
=======
export function cn(...classes: Array<string | undefined | null | false>) {;
  return classes.filter(Boolean).join(' ');
>>>>>>> origin/automation-fixes
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
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
