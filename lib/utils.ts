import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
<<<<<<< HEAD
  return twMerge(clsx(inputs));
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
=======
}
=======
  return twMerge(clsx(inputs));}
>>>>>>> origin/main

export function formatDate(date: Date | string | number): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long", day: "numeric",
    year: "numeric",
}

export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency", currency,
  }).format(amount);
}


};

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
},


>>>>>>> origin/main
