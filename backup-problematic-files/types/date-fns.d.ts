<<<<<<< HEAD
declare module "date - fns" {
  // Minimal typing for the `format` helper we use in the codebase.  The real;
  // package provides far richer typings – this is only a safety - net so that;
  // isolated compilation doesn't fail if `@types / date - fns` isn't installed.;
  export function format (date: Date | number, format_str: string): string;
}
=======
declare module "date-fns" {;
  // Minimal typing for the `format` helper we use in the codebase.  The real;
  // package provides far richer typings – this is only a safety-net so that;
  // isolated compilation doesn't fail if `@types/date-fns` isn't installed.;
  export function format(date:Date | number, formatStr:string):string;}
declare module "date-fns" {
  // Minimal typing for the `format` helper we use in the codebase. The real // package provides far richer typings – this is only a safety-net so that // isolated compilation doesn't fail if `@types/date-fns` isn't installed. 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
