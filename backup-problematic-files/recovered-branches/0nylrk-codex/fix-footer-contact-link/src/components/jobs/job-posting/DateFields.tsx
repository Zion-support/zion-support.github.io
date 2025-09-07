import React from 'react',;
import { format } from 'date-fns',;
import { Label } from "@/components/ui/label",;
import { Button } from "@/components/ui/button",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Calendar } from "@/components/ui/calendar",;
import { FormControl } from "@/components/ui/form",;
import { cn } from "@/lib/utils",;

;
interface DateFieldsProps {;
  startDate: Date | undefined;,;
  setStartDate: (date:Date | undefined) => void;,;
  endDate: Date | undefined;,;
  setEndDate:(date:Date | undefined) => void;
}
export function DateFields({ startDate, setStartDate, endDate, setEndDate } DateFieldsProps) {;

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

      <div>;
</div>)"
        <Label htmlFor="publishedDate">Published Date (Optional);"
        <Popover>;

          <PopoverTrigger asChild>;

            <FormControl>;

                )}
              >;

                  <span>Pick a date</span>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
                )}
=======
              <Button;
                variant={"outline"}
                className={cn(;
                  "w-full md:w-[240px] pl-3 text-left font-normal",;
                  !startDate && "text-muted-foreground";
                )}
              >;
                {startDate ? (;
                  format(startDate, "PPP");
                ) :(;
                  <span>Pick a date</span>;
                )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </Button>;
            </FormControl>;
          </PopoverTrigger>;
          <PopoverContent className="w-auto p-0" align="start">;
            <Calendar;
              mode="single";
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) =>;
                date > new Date();
              }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              initialFocus;
            />;
          </PopoverContent>;
        </Popover>;
      </div>;

      <div>;
        <Label htmlFor="expiryDate">Expiry Date (Optional)</Label>;
        <Popover>;
          <PopoverTrigger asChild>;
            <FormControl>;

              </Button>;
            </FormControl>;
          </PopoverTrigger>;
          <PopoverContent className="w-auto p-0" align="start">;

              selected={endDate}
              onSelect={setEndDate}

                date < new Date();
              initialFocus;
            />;