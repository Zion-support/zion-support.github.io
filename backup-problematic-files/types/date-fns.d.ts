declare module "date-fns" {;
  // Minimal typing for the `format` helper we use in the codebase.  The real;
<<<<<<< HEAD
  // package provides far richer typings – this is only a safety-net so that;
  // isolated compilation doesn't fail if `@types/date-fns` isn't installed.;
  export function format(date:Date | number, formatStr:string):string;}
declare module "date-fns" {
  // Minimal typing for the `format` helper we use in the codebase. The real // package provides far richer typings – this is only a safety-net so that // isolated compilation doesn't fail if `@types/date-fns` isn't installed. 
=======
  // package provides far richer typings  this is only a safety-net so that;
  // isolated compilation doesn't fail if `@types/date-fns` isn't installed.;
  export function format(date:Date | number, formatStr:string):string;}
declare module "date-fns" {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
