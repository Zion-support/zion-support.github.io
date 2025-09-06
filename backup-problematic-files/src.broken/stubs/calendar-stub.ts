 Emergency stub for react-day-picker during build issues;

export interface CalendarProps {;
  className?:string,;
  classNames?:Record<string string>,;
  showOutsideDays?:boolean,;
  selected?:Date | Date[] | undefined,;
  onSelect?:(date:Date | undefined) => void,;
  mode?:string,;
  [key:string]:any;

export interface DateRange {;
  from?:Date,;
  to?:Date,;

 Stub DayPicker component - simple function that returns null during build;
export const DayPicker = (props:CalendarProps) => {;
  //
 Emergency stub for react-day-picker during build issues //