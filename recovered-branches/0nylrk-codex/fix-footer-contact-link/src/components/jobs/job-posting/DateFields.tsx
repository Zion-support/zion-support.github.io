
import React from "react";""
import { format } from "date-fns";""
import { Label } from "@/components/ui/label";""
import { Button } from "@/components/ui/button";"
import {
  // TODO: Implement
}

import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;
  Popover,

  PopoverContent,
  PopoverTrigger,;
"
} from "@/components/ui/popover";""
import { Calendar } from "@/components/ui/calendar";""
import { FormControl } from "@/components/ui/form";""
import { cn } from "@/lib/utils";""
import React from "react";""
import { format } from "date-fns";""
import { Label } from "@/components/ui/label";""
import { Button } from "@/components/ui/button";"
import {
  // TODO: Implement
}
  Popover;
  PopoverContent;
  PopoverTrigger;
  Popover,
  PopoverContent,
  PopoverTrigger,;"
} from "@/components/ui/popover";""
import { Calendar } from "@/components/ui/calendar";""
import { FormControl } from "@/components/ui/form";""
import { cn } from "@/lib/utils";"
interface DateFieldsProps {
  // TODO: Implement
}
  startDate: Date | undefined;,
  setStartDate: (date: Date | undefined) => void;,
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void;
}
export function DateFields({
  startDate;
  setStartDate;
  endDate;
  setEndDate;)
}: DateFieldsProps) {



"
import React from 'react',''
import { format } from 'date-fns',''
import { Label } from "@/components/ui/label",""
import { Button } from "@/components/ui/button",""
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",""
import { Calendar } from "@/components/ui/calendar",""
import { FormControl } from "@/components/ui/form",""
import { cn } from "@/lib/utils","
interface DateFieldsProps {
  // TODO: Implement
}
  startDate: Date | undefined,
  setStartDate: (date: Date | undefined) => void,
  endDate: Date | undefined,
  setEndDate: (date: Date | undefined) => void;
}

export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {
  return (
"
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
</div>
      <div>
</div>)"
        <Label htmlFor="publishedDate">Published Date (Optional)</Label>"
        <Popover>
</Popover>
          <PopoverTrigger asChild>
</PopoverTrigger>
            <FormControl>
</FormControl>
              <Button;"
                variant={"outline"}"
                className={cn(

)
export function DateFields(): any ({;
  startDate,;
  setStartDate,;
  endDate,;
  setEndDate,;)
}: DateFieldsProps) {;
  return (
"
                  "w-full md:w-[240px] pl-3 text-left font-normal",""
                  !startDate && "text-muted-foreground"")
                )}
              >
</Button>
                  <span>Pick a date</span>
              </Button>
            </FormControl>
          </PopoverTrigger>"
          <PopoverContent className="w-auto p-0" align="start">"
</PopoverContent>
            <Calendar;"
              mode="single"""
import React from 'react',;''
import { format } from 'date-fns',;''
import { Label } from "@/components/ui/label",;""
import { Button } from "@/components/ui/button",;""
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;""
import { Calendar } from "@/components/ui/calendar",;""
import { FormControl } from "@/components/ui/form",;""
import { cn } from "@/lib/utils",;"
              selected={startDate}
              onSelect={setStartDate}
interface DateFieldsProps {;
  startDate: Date | undefined;,
  setStartDate: (date: Date | undefined) => void;
</Calendar>"
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
</div>
      <div>;
</div>"
        <Label htmlFor="publishedDate">Published Date (Optional)</Label>;"
        <Popover>;
</Popover>
          <PopoverTrigger asChild>;
</PopoverTrigger>
            <FormControl>;
</FormControl>
              <Button;"
                variant={"outline"}"
                className={cn("
                  "w-full md: w-[240px] pl-3 text-left font-normal",""
                  !startDate && "text-muted-foreground",")
                )}>;
</Button>
                  <span>Pick a date</span>;
              </Button>;
            </FormControl>;
          </PopoverTrigger>;"
          <PopoverContent className="w-auto p-0" align="start">;"
</PopoverContent>
            <Calendar;"
              mode="single""
              selected={startDate}
              onSelect={setStartDate}

              disabled={(date) =>;
</Calendar>
          </PopoverContent>
        </Popover>
      </div>
      <div>
</div>"
        <Label htmlFor="expiryDate">Expiry Date (Optional)</Label>"
        <Popover>
</Popover>
          <PopoverTrigger asChild>
</PopoverTrigger>
            <FormControl>
</FormControl>
              <Button;"
                variant={"outline"}"
                className={cn(
"
                  !endDate && "text-muted-foreground"")
                )}
              >
</Button>
                  <span>Pick a date</span>
              </Button>
            </FormControl>
          </PopoverTrigger>"
          <PopoverContent className="w-auto p-0" align="start">"
</PopoverContent>"
                {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}"
              </Button>;
            </FormControl>;
          </PopoverTrigger>;"
          <PopoverContent className="w-auto p-0" align="start">;"
</PopoverContent>
            <Calendar;"
              mode="single""
              selected={endDate}
              onSelect={setEndDate}
              disabled={(date) =>;
</Calendar>
                date < new Date();

              }
              initialFocus;
            />;
          </PopoverContent>;
        </Popover>;

      </div>;"
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
</div>
      <div>;
</div>"
        <Label html_for="published_date">Published Date (Optional)</Label>;"
        <Popover>;
</Popover>
          <PopoverTrigger as_child>;
</PopoverTrigger>
            <FormControl>;
</FormControl>
              <Button;"
                variant={"outline"}"
                className={cn ("
                  "w - full md: w-[240px] pl - 3 text - left font - normal",""
                  !start_date && "text - muted - foreground",")
                )}
              >;
</Button>
                  <span > Pick a date</span>)}
              </Button>;
            </FormControl>;
          </PopoverTrigger>;"
          <PopoverContent className="w - auto p - 0" align="start">;"
</PopoverContent>
            <Calendar;"
              mode="single";"
              selected={start_date}
              on_select={setStartDate}
              disabled={(date) => date > new Date ()}
</Calendar>
          </PopoverContent>;
        </Popover>;
      </div>;
      <div>;
</div>"
        <Label html_for="expiry_date">Expiry Date (Optional)</Label>;"
        <Popover>;
</Popover>
          <PopoverTrigger as_child>;
</PopoverTrigger>
            <FormControl>;
</FormControl>
              <Button;"
                variant={"outline"}"
                className={cn ("
                  "w - full md: w-[240px] pl - 3 text - left font - normal",""
                  !end_date && "text - muted - foreground",")
                )}
              >;
</Button>"
                {end_date ? format (end_date, "PPP") : <span > Pick a date</span>}"
              </Button>;
            </FormControl>;
          </PopoverTrigger>;"
          <PopoverContent className="w - auto p - 0" align="start">;"
</PopoverContent>
            <Calendar;"
              mode="single";"
              selected={end_date}
              on_select={setEndDate}
              disabled={(date) => date < new Date ()}
</Calendar>
          </PopoverContent>;
        </Popover>;
      </div>;"

