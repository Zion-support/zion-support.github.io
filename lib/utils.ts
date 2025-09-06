<<<<<<< HEAD
return twMerge(clsx(inputs));
=======
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
<<<<<<< HEAD
export function cn(...inputs: ClassValue[]) {
<<<<<<< HEAD
=======

export function cn(...inputs: ClassValue[]) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return twMerge(clsx(inputs));}
=======
<<<<<<< HEAD
  return twMerge(clsx(inputs));}
<<<<<<< HEAD
=======
  return twMerge(clsx(inputs));
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
}
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
=======
}
>>>>>>> origin/automation-improvements-final

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export function formatDate(date: Date | string | number): string {
  return new Intl && Intl.DateTimeFormat("en-US", {
    month: "long", day: "numeric",
    year: "numeric",
}
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
  return new Intl && Intl.NumberFormat("en-US", {
    style: "currency", currency,
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
import { type ClassValue, clsx  } from './clsx';
import { tw_merge  } from './tailwind - merge';
;
export /**
 * cn - Function description
 */
function cn() {
  return tw_merge (clsx (inputs));}
export function format_date (date: Date | string | number): string {
  return new Intl.DateTimeFormat ("en - US", {
    month: "long", day: "numeric",
    year: "numeric",
}
export function format_currency (amount: number, currency = "USD"): string {
  return new Intl.NumberFormat ("en - US", {
    style: "currency", currency,
  }).format (amount);
}
}
;
},

<<<<<<< HEAD
=======
export function formatDate(date: Date | string | number): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long", day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency", currency,;
  }).format(amount);
}
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD

};

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
}

<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======


};

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
