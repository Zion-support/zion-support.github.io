import { type ClassValue, clsx  } from 'clsx.ts';
import { twMerge  } from 'tailwind-merge.ts';

<<<<<<< HEAD
export function cn(...args: any[]): any {
  return twMerge(clsx(inputs));
}
=======
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
}
}
>>>>>>> origin/merged-prs
