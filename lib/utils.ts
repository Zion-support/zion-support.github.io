


export function cn(...inputs: ClassValue[]) {;

  return twMerge(clsx(inputs));}


  return twMerge(clsx(inputs));


export function formatDate(date: Date | string | number): string {

  return new Intl && Intl.DateTimeFormat("en-US", {
    month: "long", day: "numeric",
    year: "numeric",
}




    month: "long", day: "numeric"
    year: "numeric"
}

  return new Intl && Intl.NumberFormat("en-US", {
    style: "currency", currency,

  }).format(amount);
}
}
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




};

