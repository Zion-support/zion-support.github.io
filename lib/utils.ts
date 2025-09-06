import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {;

  return twMerge(clsx(inputs));}
=======

  return twMerge(clsx(inputs));


=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
export function formatDate(date: Date | string | number): string {
  return new Intl.DateTimeFormat("en-US", {



>>>>>>> origin/automation-improvements-final
=======
    month: "long", day: "numeric"
    year: "numeric"
}


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======


};

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
