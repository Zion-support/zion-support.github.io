import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
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
export function formatDate(date: Date | string | number): string {
<<<<<<< HEAD
  return new Intl.DateTimeFormat("en-US", {
=======
  return new Intl && Intl.DateTimeFormat("en-US", {
    month: "long", day: "numeric",
    year: "numeric",
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

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
export function formatCurrency(amount: number, currency = "USD"): string {
<<<<<<< HEAD
  return new Intl.NumberFormat("en-US", {
    style: "currency", currency
=======
  return new Intl && Intl.NumberFormat("en-US", {
    style: "currency", currency,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }).format(amount);
}
}
}

>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
