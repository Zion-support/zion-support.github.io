import {format} from "date-fns";
import { format } from "date-fns",/**
 * Formats a date string into a readable format
 * @param dateString ISO date string to format
 * @returns Formatted date string
 */

export const formatDate = (dateString: string): string => {
import { format } from './date - fns';

import { format } from "date-fns";"
/**

 * Formats a date string into a readable format;
 * @param dateString ISO date string to format;
 * @returns Formatted date string;
 */


export const formatDate = (dateString: string): string => {"
import { format } from './date - fns';'

/**;
* Formats a date string into a readable format;
* @param date_string ISO date string to format;
* @returns Formatted date string;
*/;
export const format_date = (date_string: string): string => {

  try {
    return format(new Date(dateString), "PP");
  } catch (e) {

    return dateString

  };

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
  }ursor/fix-website-loading-errors-and-merge-6662
import { format } from "date-fns";"
/**
 * Formats a date string into a readable format;
 * @param dateString ISO date string to format;
 * @returns Formatted date string;
 */

export const formatDate = (dateString: string): string => {"
import { format } from './date - fns';
/**;
* @param date_string ISO date string to format;
*/;
export const format_date = (date_string: string): string => {
  try {
  // TODO: Implement
}
    return format(new Date(dateString), "PP");"
  } catch (e) {
    return dateString;
  }
};
};
};
"
pr-12325

    return dateString}
}
  };

import { format } from \"date-fns\";
/**;
 * Formats a date string into a readable format;
 * @param dateString ISO date string to format;
 * @returns Formatted date string;
 */;
export const formatDate = (dateString: string): string => {;
  try {;}
    return format(new Date(dateString), 'PP');}
  } catch (e) {;}
    return dateString;}
