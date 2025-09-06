import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
<<<<<<< HEAD
export function cn(...inputs: ClassValue[]) {
<<<<<<< HEAD
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
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
  return twMerge(clsx(inputs));
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
=======
}
<<<<<<< HEAD
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
=======
=======
  return twMerge(clsx(inputs));}
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20

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

<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
},


>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
