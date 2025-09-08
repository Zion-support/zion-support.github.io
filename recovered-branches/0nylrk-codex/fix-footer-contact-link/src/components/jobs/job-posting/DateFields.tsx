<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;

<<<<<<< HEAD

=======

  Popover,
  PopoverContent,
  PopoverTrigger,;


import { Calendar } from "@/components/ui/calendar";
"
import { FormControl } from "@/components/ui/form";"
import { cn } from "@/lib/utils";


} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { FormControl } from "@/components/ui/form";
import { cn } from "@/lib/utils";


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
>>>>>>> origin/cursor/delete-old-data-records-6bba

} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { FormControl } from "@/components/ui/form";

<<<<<<< HEAD
import { cn } from "@/lib/utils";

=======

interface DateFieldsProps {

  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void;
}


export function DateFields({
  startDate
  setStartDate
  endDate
  setEndDate
}: DateFieldsProps) {

>>>>>>> origin/cursor/delete-old-data-records-6bba

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
interface DateFieldsProps {

>>>>>>> origin/cursor/delete-old-data-records-6bba
  startDate: Date | undefined,
  setStartDate: (date: Date | undefined) => void,
  endDate: Date | undefined,
  setEndDate: (date: Date | undefined) => void
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
                className={cn(

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function DateFields(): any ({;
  startDate,;
  setStartDate,;
  endDate,;
  setEndDate,;
}: DateFieldsProps) {;
  return (


<<<<<<< HEAD
                  "w-full md: w-[240px] pl-3 text-left font-normal"
                  "w-full md:w-[240px] pl-3 text-left font-normal",

                  !startDate && "text-muted-foreground"
                )}

              >

                {startDate ? ("

=======
              >
                {startDate ? (
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  format(startDate, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </PopoverTrigger>"
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar"
              mode="single"

<<<<<<< HEAD
=======
import { format } from 'date-fns',;
import { Label } from "@/components/ui/label",;
import { Button } from "@/components/ui/button",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Calendar } from "@/components/ui/calendar",;
import { FormControl } from "@/components/ui/form",;
import { cn } from "@/lib/utils",;
              selected={startDate}
              onSelect={setStartDate}
import React from 'react',;
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { format } from 'date-fns',;
import { Label } from "@/components/ui/label",;
import { Button } from "@/components/ui/button",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Calendar } from "@/components/ui/calendar",;
import { FormControl } from "@/components/ui/form",;
import { cn } from "@/lib/utils",;
              selected={startDate}
              onSelect={setStartDate}

interface DateFieldsProps {;
  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void;
}
<<<<<<< HEAD

;
export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {;
  return (;

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      <div>;"
        <Label htmlFor="publishedDate">Published Date (Optional)</Label>;
        <Popover>;
          <PopoverTrigger asChild>;
            <FormControl>;


                )}

              </Button>;
            </FormControl>;
          </PopoverTrigger>;"
          <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
            <Calendar

              mode="single"
              selected={startDate}
              onSelect={setStartDate}

=======
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) =>;
                date > new Date();
              }
>>>>>>> origin/cursor/delete-old-data-records-6bba

              disabled={(date) =>;
                date > new Date();
              }


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

                className={cn(
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


                  !endDate && "text-muted-foreground"

                )}
              >
                {endDate ? ("
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  format(endDate, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


              initialFocus;
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
<<<<<<< HEAD

=======
    </div>;
  );
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

}
<<<<<<< HEAD


=======
            <Calendar;
              mode="single";
>>>>>>> origin/cursor/delete-old-data-records-6bba
