

import { cn } from "@/lib/utils";



interface DateFieldsProps {





                className={cn(

                  "w-full md: w-[240px] pl-3 text-left font-normal"
                  "w-full md:w-[240px] pl-3 text-left font-normal",

                  !startDate && "text-muted-foreground"
                )}

              >

                {startDate ? ("



;
export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {;
  return (;

            <Calendar

              mode="single"
              selected={startDate}
              onSelect={setStartDate}



                className={cn(





