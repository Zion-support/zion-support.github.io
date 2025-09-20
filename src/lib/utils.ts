<<<<<<< HEAD
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
=======
<<<<<<< HEAD
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
}

export function formatPhoneNumber(phoneNumber: string): string {
const cleaned = phoneNumber.replace(/\D/g, "");
const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
if (match) {
return `(${match[1]}) ${match[2]}-${match[3]}`;
}
return phoneNumber;
}

=======
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff

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
=======
  func: T, 
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: globalThis.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
<<<<<<< HEAD
  func: T,
=======
  func: T, 
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
<<<<<<< HEAD
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
=======
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-5df3
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
