export function cn(...inputs: ClassValue[]) {;
  return twMerge(clsx(inputs));}
=======


export function cn(...inputs: ClassValue[]) {;

  return twMerge(clsx(inputs));}


  return twMerge(clsx(inputs));
=======

=======


export function cn(...inputs: ClassValue[]) {;

  return twMerge(clsx(inputs));}  return twMerge(clsx(inputs));}
  return twMerge(clsx(inputs));
}
}
ursor/add-new-services-and-deploy-updates-0462
}
origin/automation-improvements-final


=======>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export function formatDate(date: Date | string | number): string {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return new Intl && Intl.DateTimeFormat("en-US", {
    month: "long", day: "numeric",
    year: "numeric",
}


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    month: "long", day: "numeric"
    year: "numeric"
}

  return new Intl && Intl.NumberFormat("en-US", {
    style: "currency", currency,

=======
export function formatDate(date: Date | string | number): string {
},


origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
    month: "long", day: "numeric"
    year: "numeric"
}
const { type ClassValue, clsx } from "clsx";"const { twMerge } from "tailwind-merge";module.exports = function cn(.inputs: ClassValue[]) { return twMerge(clsx(inputs));}""
import { type ClassValue, clsx } from 'clsx';,
import { twMerge } from 'tailwind-merge';,
export function cn(...inputs: ClassValue[]) {}
  return twMerge(clsx(inputs));
ursor/integrate-build-improve-and-re-verify-8f7d
export function formatCurrency(amount: number, currency = "USD"): string {


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


};

origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
}

origin/main
=======
=======>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======



};

<<<<<<< HEAD
<<<<<<< HEAD
=======>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
