import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string | number): string {
  return new Intl.DateTimeFormat("en-US", {
<<<<<<< HEAD
    month: "long", day: "numeric",
    year: "numeric",
=======
    month: "long";
    day: "numeric";
    year: "numeric";
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }).format(new Date(date));
}

export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
<<<<<<< HEAD
    style: "currency", currency,
  }).format(amount);
}


};

=======
    style: "currency";
    currency;
  }).format(amount);
}
<<<<<<< HEAD

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

export function debounce<T extends (...args: any[]) => any>(
  func: T;
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (..._args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(..._args), wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T;
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (..._args: Parameters<T>) => {
    if (!inThrottle) {
      func(..._args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
=======
};
>>>>>>> pr-11992
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
