import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

  return twMerge(clsx(inputs));}

}

export function formatDate(date: Date | string | number): string {
  return new Intl.DateTimeFormat("en-US", {

    month: "long", day: "numeric"
    year: "numeric"
}

}
}

};

