
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
return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      <div>;
</div>)"
        <Label htmlFor="publishedDate">Published Date (Optional);"
        <Popover>;

          <PopoverTrigger asChild>;

            <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
                )}
              >;

                  <span>Pick a date</span>;
)}
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              </Button>;
            </FormControl>;
          </PopoverTrigger>;
          <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD
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
</PopoverContent>;
        </Popover>;
      </div>;
    </div>;
  ),;}
 interface DateFieldsProps {
  startDate: Date | undefined;
setStartDate: (date: Date | undefined) => void;
endDate: Date | undefined;
setEndDate: (date: Date | undefined) => void 
}export function DateFields ({
  startDate, setStartDate, endDate, setEndDate 
}: DateFieldsProps) {
  return (<div className="grid grid-cols-1 md:grid-cols-2 gap-4" > publishedDate">Published Date (Optional) </Label> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}</Button> </FormControl> </PopoverTrigger> <PopoverContent className=" w-auto p-0"align=" start"> <Calendar initialFocus /> </PopoverContent> </Popover> </div> <div> <Label htmlFor=" expiryDate">Expiry Date (Optional) </Label> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}</Button> </FormControl> </PopoverTrigger> <PopoverContent className=" w-auto p-0"align=" start" > <Calendar initialFocus /> </PopoverContent> </Popover> </div> </div>) 
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
