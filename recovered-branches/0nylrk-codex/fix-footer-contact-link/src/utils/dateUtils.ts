
<<<<<<< HEAD
<<<<<<< HEAD
import { format } from "date-fns";
=======
import { format } from "date-fns",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import {format} from "date-fns";
=======
import { format } from "date-fns",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
/**
 * Formats a date string into a readable format
 * @param dateString ISO date string to format
 * @returns Formatted date string
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const formatDate = null;
=======
=======
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export const formatDate = (dateString: string): string => {
  try {
    return format(new Date(dateString), 'PP')
  } catch (e) {
    return dateString
<<<<<<< HEAD
<<<<<<< HEAD
  }
}

=======
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { format } from "date-fns",;
/**;
 * Formats a date string into a readable format;
 * @param dateString ISO date string to format;
 * @returns Formatted date string;
 */;
export const formatDate = (dateString: string): string => {;
  try {;
    return format(new Date(dateString), 'PP');
  } catch (e) {;
    return dateString;
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
