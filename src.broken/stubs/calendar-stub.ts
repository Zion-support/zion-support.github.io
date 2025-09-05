// Emergency stub for react-day-picker during build issues

export interface CalendarProps {_className?: string;
  classNames?: Record<string, _string>;
  showOutsideDays?: boolean;
  selected?: Date | Date[] | undefined;
  onSelect?: (_date: Date | undefined) => void;
  mode?: string;
  [key: string]: unknown;}

export interface DateRange {_from?: Date;
  to?: Date;}

// Stub DayPicker component - simple function that returns null during build
export const _DayPicker = (_props: CalendarProps) => {_// Return null for build compatibility
  return null;};

// Export as default
export default DayPicker;

// Additional exports that might be needed
export const _format = (_date: Date, _formatStr: string) => {_return date.toLocaleDateString();};

export const _isValid = (date: unknown): date is Date => {_return date instanceof Date && !isNaN(date.getTime());};