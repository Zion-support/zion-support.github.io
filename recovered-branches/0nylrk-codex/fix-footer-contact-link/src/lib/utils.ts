
=======

import clsx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
 


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
