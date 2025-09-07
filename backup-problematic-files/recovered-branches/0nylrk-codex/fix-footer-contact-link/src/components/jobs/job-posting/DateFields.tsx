
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from 'react',;
import { format } from 'date-fns',;
import { Label } from "@/components/ui/label",;
import { Button } from "@/components/ui/button",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Calendar } from "@/components/ui/calendar",;
import { FormControl } from "@/components/ui/form",;
import { cn } from "@/lib/utils",;
=======
import React from 'react';
import { format } from 'date-fns';
import { Label } from "@/components/ui/label";""
import { Button } from "@/components/ui/button";""
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";""
import { Calendar } from "@/components/ui/calendar";""
import { FormControl } from "@/components/ui/form";""
import { cn } from "@/lib/utils";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
interface DateFieldsProps {;
  startDate: Date | undefined;,;
  setStartDate: (date:Date | undefined) => void;,;
  endDate: Date | undefined;,;
  setEndDate:(date:Date | undefined) => void;
}
export function DateFields({ startDate, setStartDate, endDate, setEndDate } DateFieldsProps) {;
<<<<<<< HEAD
  return (;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
=======
  return (;"
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
</div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div>;
</div>)"
        <Label htmlFor="publishedDate">Published Date (Optional);"
        <Popover>;

          <PopoverTrigger asChild>;

            <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
              <Button;
                variant={"outline"}
                className={cn(;
                  "w-full md:w-[240px] pl-3 text-left font-normal",;
                  !startDate && "text-muted-foreground";
=======

              <Button;"
                variant={"outline"}"
                className={cn(;"
                  "w-full md: w-[240px] pl-3 text-left font-normal";,;""
                  !startDate && "text-muted-foreground";")
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                )}
              >;

                  <span>Pick a date</span>;
<<<<<<< HEAD
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

=======
            <Calendar;
              mode="single";
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) =>;
                date > new Date();
              }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              initialFocus;
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
<<<<<<< HEAD

=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div>;
        <Label htmlFor="expiryDate">Expiry Date (Optional)</Label>;
        <Popover>;
          <PopoverTrigger asChild>;
            <FormControl>;
<<<<<<< HEAD

=======
              <Button;
                variant={"outline"}
                className={cn(;
                  "w-full md:w-[240px] pl-3 text-left font-normal",;
                  !endDate && "text-muted-foreground";
                )}
              >;
                {endDate ? (;
                  format(endDate, "PPP");
                ) :(;
                  <span>Pick a date</span>;
                )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              </Button>;
            </FormControl>;
          </PopoverTrigger>;
          <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD

=======
            <Calendar;
              mode="single";
=======

          ;"
          <PopoverContent className="w-auto p-0" align="start">;"

            <Calendar;"
              mode="single";"
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) =>;

      </div>;
</div>"
        <Label htmlFor="expiryDate">Expiry Date (Optional);"



                  !endDate && "text-muted-foreground";")


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              selected={endDate}
              onSelect={setEndDate}

                date < new Date();
              initialFocus;
            />;
<<<<<<< HEAD
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
=======
    </div>;"
  return (<div className="grid grid-cols-1 md: grid-cols-2 gap-4" > publishedDate">Published Date (Optional)  <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>)";
}   <PopoverContent className=" w-auto p-0"align=" start"> <Calendar initialFocus />   </div> <div> <Label htmlFor=" expiryDate">Expiry Date (Optional)  <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>)""
}   <PopoverContent className=" w-auto p-0"align=" start" > <Calendar initialFocus />   </div> </div>)""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
