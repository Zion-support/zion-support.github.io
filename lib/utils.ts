import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
<<<<<<< HEAD
  return twMerge(clsx(inputs));}
=======
<<<<<<< HEAD
  return twMerge(clsx(inputs));}
<<<<<<< HEAD
=======
  return twMerge(clsx(inputs));
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
=======
}
>>>>>>> origin/automation-improvements-final

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
export function formatDate(date: Date | string | number): string {
  return new Intl.DateTimeFormat("en-US", {

<<<<<<< HEAD
},


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
    month: "long", day: "numeric"
    year: "numeric"
}
<<<<<<< HEAD
const { type ClassValue, clsx } from "clsx";"const { twMerge } from "tailwind-merge";module.exports = function cn(.inputs: ClassValue[]) { return twMerge(clsx(inputs));}""
import { type ClassValue, clsx } from 'clsx';,
import { twMerge } from 'tailwind-merge';,
export function cn(...inputs: ClassValue[]) {}
  return twMerge(clsx(inputs));
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency", currency
  }).format(amount);
>>>>>>> origin/main
}
}
<<<<<<< HEAD
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
<<<<<<< HEAD
=======
=======
}

export function formatDate(date: Date | string | number): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long", day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency", currency,
  }).format(amount);
}

<<<<<<< HEAD

};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
}

>>>>>>> origin/main
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
