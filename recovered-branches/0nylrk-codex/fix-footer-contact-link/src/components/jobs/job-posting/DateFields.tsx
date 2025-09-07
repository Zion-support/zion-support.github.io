<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Popover
  PopoverContent
  PopoverTrigger
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { FormControl } from "@/components/ui/form";
import { cn } from "@/lib/utils";
interface DateFieldsProps {
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  Popover,
  PopoverContent,
  PopoverTrigger,;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Calendar } from "@/components/ui/calendar";
"
import { FormControl } from "@/components/ui/form";"
import { cn } from "@/lib/utils";

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { FormControl } from "@/components/ui/form";
import { cn } from "@/lib/utils";

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Popover
  PopoverContent
  PopoverTrigger
  Popover,
  PopoverContent,
  PopoverTrigger,;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { FormControl } from "@/components/ui/form";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import { cn } from "@/lib/utils";
<<<<<<< HEAD
interface DateFieldsProps {
  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void
}
export function DateFields({
  startDate
  setStartDate
  endDate
  setEndDate
}: DateFieldsProps) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

interface DateFieldsProps {

  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function DateFields({
  startDate
  setStartDate
  endDate
  setEndDate
}: DateFieldsProps) {
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React from 'react',
import { format } from 'date-fns',
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Calendar } from "@/components/ui/calendar",
import { FormControl } from "@/components/ui/form",
import { cn } from "@/lib/utils",

<<<<<<< HEAD
interface DateFieldsProps {

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface DateFieldsProps {

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  startDate: Date | undefined,
  setStartDate: (date: Date | undefined) => void,
  endDate: Date | undefined,
  setEndDate: (date: Date | undefined) => void
<<<<<<< HEAD

}

=======
<<<<<<< HEAD
}

export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {
  return (
    <div className = $2;
=======

}

<<<<<<< HEAD
=======
export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>"
        <Label htmlFor="publishedDate">Published Date (Optional)</Label>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button"
                variant={"outline"}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                className={cn(
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export function DateFields(): any ({;
  startDate,;
  setStartDate,;
  endDate,;
  setEndDate,;
}: DateFieldsProps) {;
  return (
<<<<<<< HEAD

              >
                {startDate ? ("
=======
<<<<<<< HEAD

=======

                  "w-full md: w-[240px] pl-3 text-left font-normal"
                  "w-full md:w-[240px] pl-3 text-left font-normal",
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                  !startDate && "text-muted-foreground"
                )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              >
<<<<<<< HEAD
                {startDate ? (
=======
                {startDate ? ("
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  format(startDate, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
<<<<<<< HEAD
=======
<<<<<<< HEAD
          </PopoverTrigger>
          <PopoverContent className = $2;
                  !endDate && "text-muted-foreground"
                )}
              >
                {endDate ? (
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </PopoverTrigger>"
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar"
              mode="single"
<<<<<<< HEAD

import { format } from 'date-fns',;
import { Label } from "@/components/ui/label",;
import { Button } from "@/components/ui/button",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Calendar } from "@/components/ui/calendar",;
import { FormControl } from "@/components/ui/form",;
import { cn } from "@/lib/utils",;
              selected={startDate}
              onSelect={setStartDate}
=======
<<<<<<< HEAD
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) => date > new Date()}
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { format } from 'date-fns',;
import { Label } from "@/components/ui/label",;
import { Button } from "@/components/ui/button",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Calendar } from "@/components/ui/calendar",;
import { FormControl } from "@/components/ui/form",;
import { cn } from "@/lib/utils",;
              selected={startDate}
              onSelect={setStartDate}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

interface DateFieldsProps {;
  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void;
<<<<<<< HEAD
}

=======
}
<<<<<<< HEAD
=======
;
export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {;
  return (;
<<<<<<< HEAD
;
interface DateFieldsProps {;
  startDate:Date | undefined,;
  setStartDate:(date:Date | undefined) => void,;
  endDate:Date | undefined,;
  setEndDate:(date:Date | undefined) => void;
}
;
export function DateFields({ startDate, setStartDate, endDate, setEndDate } DateFieldsProps) {;
  return (;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      <div>;"
        <Label htmlFor="publishedDate">Published Date (Optional)</Label>;
        <Popover>;
          <PopoverTrigger asChild>;
            <FormControl>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
              <Button;
                variant={"outline"}
                className={cn(;
                  "w-full md:w-[240px] pl-3 text-left font-normal",;
              <Button;
                variant={"outline"}
                className={cn(;
                  "w-full md:w-[240px] pl-3 text-left font-normal";
                  !startDate && "text-muted-foreground";
                )}
              >;
=======
              <Button
                variant={"outline"}
                className={cn(
                  "w-full md: w-[240px] pl-3 text-left font-normal",
                  !startDate && "text-muted-foreground",
                )}>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {startDate ? (;
                  format(startDate, "PPP");
                ) : (;
                  <span>Pick a date</span>;
<<<<<<< HEAD
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                )}

              </Button>;
            </FormControl>;
          </PopoverTrigger>;"
          <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD

            <Calendar"

              mode="single"
              selected={startDate}
              onSelect={setStartDate}
=======
<<<<<<< HEAD

            <Calendar"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Calendar
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
<<<<<<< HEAD
              disabled={(date) =>;
                date > new Date();
              }
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              disabled={(date) =>;
                date > new Date();
              }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              initialFocus

            />
          </PopoverContent>
        </Popover>
      </div>
      <div>"
        <Label htmlFor="expiryDate">Expiry Date (Optional)</Label>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button"
                variant={"outline"}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
                className={cn(

<<<<<<< HEAD
                  "w-full md:w-[240px] pl-3 text-left font-normal",

                  "w-full md: w-[240px] pl-3 text-left font-normal"

                  "w-full md:w-[240px] pl-3 text-left font-normal",
=======
=======

                  "w-full md:w-[240px] pl-3 text-left font-normal",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  !endDate && "text-muted-foreground"

                )}
              >
                {endDate ? ("
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  format(endDate, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
<<<<<<< HEAD
          </PopoverTrigger>"
          <PopoverContent className="w-auto p-0" align="start">
              disabled={(date) => date > new Date()}"
                {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
              </Button>;
            </FormControl>;
          </PopoverTrigger>;"
          <PopoverContent className="w-auto p-0" align="start">;
            <Calendar"
              mode="single"
              selected={endDate}
              onSelect={setEndDate}

=======
<<<<<<< HEAD
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
=======
          </PopoverTrigger>"
          <PopoverContent className="w-auto p-0" align="start">
              disabled={(date) => date > new Date()}"
                {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
              </Button>;
            </FormControl>;
          </PopoverTrigger>;"
          <PopoverContent className="w-auto p-0" align="start">;
            <Calendar"
              mode="single"
              selected={endDate}
              onSelect={setEndDate}

<<<<<<< HEAD
=======
<<<<<<< HEAD
              disabled={(date) =>;
                date < new Date();
              }

              disabled={(date) => date > new Date()}
            <Calendar;
              mode="single";
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) =>;
                date > new Date();
              }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              initialFocus;
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
<<<<<<< HEAD
=======
;
      <div>;
        <Label htmlFor="expiryDate">Expiry Date (Optional)</Label>;
        <Popover>;
          <PopoverTrigger asChild>;
            <FormControl>;
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
              </Button>;
            </FormControl>;
          </PopoverTrigger>;
          <PopoverContent className="w-auto p-0" align="start">;
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
    </div>);
}
            <Calendar;
              mode="single";
              selected={endDate}
              onSelect={setEndDate}
>>>>>>> merged-prs-20250907-203621
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
<<<<<<< HEAD
  )
=======
              disabled={(date) =>;
                date < new Date();
              }
=======

=======
              disabled={(date) =>;
                date < new Date();
              }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              initialFocus;
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
<<<<<<< HEAD
    </div>;
  );
}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          </PopoverContent>;
        </Popover>;
      </div>;
);
  );
    </div>);            />;
          </PopoverContent>;
        </Popover>;
      </div>;
  );
    </div>);
      <div>;

        <Label html_for="expiry_date">Expiry Date (Optional)</Label>;
        <Popover>;
          <PopoverTrigger as_child>;
            <FormControl>;
              <Button;"
                variant={"outline"}
                className={cn ("
                  "w - full md: w-[240px] pl - 3 text - left font - normal","
                  !end_date && "text - muted - foreground",
                )}
              >;"
                {end_date ? format (end_date, "PPP") : <span > Pick a date</span>}
              </Button>;
            </FormControl>;

              mode="single";
              selected={end_date}
              on_select={setEndDate}
              disabled={(date) => date < new Date ()}
              initial_focus;
            />;
          </PopoverContent>;
        </Popover>;
      </div>;

    </div>);
<<<<<<< HEAD
}
            <Calendar;
              mode="single";
=======
<<<<<<< HEAD
}
            <Calendar;
              mode="single";
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> merged-prs-20250907-203621
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
