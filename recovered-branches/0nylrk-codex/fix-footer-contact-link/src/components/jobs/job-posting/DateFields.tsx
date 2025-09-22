<<<<<<< HEAD
import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;

  Popover,
  PopoverContent,
  PopoverTrigger,;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { Calendar } from "@/components/ui/calendar";
"
import { FormControl } from "@/components/ui/form";"
import { cn } from "@/lib/utils";

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { FormControl } from "@/components/ui/form";
<<<<<<< HEAD
import { cn } from "@/lib/utils";
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from 'react',
import { format } from 'date-fns',
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Calendar } from "@/components/ui/calendar",
import { FormControl } from "@/components/ui/form",
import { cn } from "@/lib/utils",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface DateFieldsProps {
=======
import { cn } from "@/lib/utils";interface DateFieldsProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { cn } from "@/lib/utils";interface DateFieldsProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

interface DateFieldsProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  startDate: Date | undefined,
  setStartDate: (date: Date | undefined) => void,
  endDate: Date | undefined,
  setEndDate: (date: Date | undefined) => void
<<<<<<< HEAD
}

export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
=======
}  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======

  return (
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>"
        <Label htmlFor="publishedDate">Published Date (Optional)</Label>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button"
                variant={"outline"}
className={cn(                )}
export function DateFields(): any ({;
  startDate,;
  setStartDate,;
  endDate,;
  setEndDate,;
}: DateFieldsProps) {;
  return (

"
                  !startDate && "text-muted-foreground"

                )}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              >
                {startDate ? ("
                  format(startDate, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
          </PopoverTrigger>"
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar"
              mode="single"
<<<<<<< HEAD
              selected={startDate}
              onSelect={setStartDate}import React from 'react',;
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
;
export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {;
  return (;

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
      <div>;"
        <Label htmlFor="publishedDate">Published Date (Optional)</Label>;
        <Popover>;
          <PopoverTrigger asChild>;
            <FormControl>;
<Button
                variant={"outline"}
                className={cn(
                  "w-full md: w-[240px] pl-3 text-left font-normal",
                  !startDate && "text-muted-foreground",
                )}>;
                {startDate ? (;
                  format(startDate, "PPP");
                ) : (;
                  <span>Pick a date</span>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                )}

              </Button>;
            </FormControl>;
          </PopoverTrigger>;"
          <PopoverContent className="w-auto p-0" align="start">;

            <Calendar"
              mode="single"
              selected={startDate}
              onSelect={setStartDate}

              disabled={(date) =>;
                date > new Date();
              }
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              initialFocus
=======
                )}              initialFocus
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                )}              initialFocus
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

              initialFocus;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              initialFocus
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  !endDate && "text-muted-foreground"
=======
                className={cn(                  !endDate && "text-muted-foreground"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                className={cn(                  !endDate && "text-muted-foreground"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                className={cn(

                  !endDate && "text-muted-foreground"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                )}
              >
                {endDate ? ("
                  format(endDate, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </FormControl>
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
disabled={(date) => date > new Date()}
            <Calendar;
              mode="single";
              selected={startDate}
              onSelect={setStartDate}
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              initialFocus;
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
);
    </div>);            />;
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
</PopoverTrigger>;
          <PopoverContent className="w - auto p-0" align="start">;
            <Calendar;
              mode="single";
              selected={end_date}
              on_select={setEndDate}
              disabled={(date) => date < new Date ()}
              initial_focus;
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </div>);
}
            <Calendar;
              mode="single";
selected={endDate}
              onSelect={setEndDate}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
              disabled={(date) =>;
                date < new Date();
              }
              initialFocus;
            />;
          </PopoverContent>;
        </Popover>;
      </div>;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    </div>;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  Popover,
  PopoverContent,
"
} from "@/components/ui/popover";""
import { Calendar } from "@/components/ui/calendar";""
import { FormControl } from "@/components/ui/form";""
import { cn } from "@/lib/utils";""
  // TODO: Implement
  Popover;
  PopoverContent;
  PopoverTrigger;
  PopoverTrigger,;"
import { cn } from "@/lib/utils";"
interface DateFieldsProps {
  // TODO: Implement
  startDate: Date | undefined;,
  setStartDate: (date: Date | undefined) => void;,
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void;
export function DateFields({
  startDate;
  setStartDate;
  endDate;
  setEndDate;)
}: DateFieldsProps) {

import React from 'react',;
import { format } from 'date-fns',;
import { Label } from "@/components/ui/label",""
import { Button } from "@/components/ui/button",""
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",""
import { Calendar } from "@/components/ui/calendar",""
import { FormControl } from "@/components/ui/form",""
import { cn } from "@/lib/utils","
  // TODO: Implement
  startDate: Date | undefined,
  setStartDate: (date: Date | undefined) => void,
  endDate: Date | undefined,

export function DateFields({ startDate, setStartDate, endDate, setEndDate }: DateFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"

      </div>;"
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
</div>
      <div>
</div>)"
        <Label htmlFor="publishedDate">Published Date (Optional)"
        <Popover>

          <PopoverTrigger asChild>

            <FormControl>

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
                  "w-full md:w-[240px] pl-3 text-left font-normal",""
                  !startDate && "text-muted-foreground"")
                )}
              >

                  <span>Pick a date</span>
          <PopoverContent className="w-auto p-0" align="start">"

            <Calendar;"
              mode="single"""
import React from 'react',;
import { format } from 'date-fns',;
import { Label } from "@/components/ui/label",;""
import { Button } from "@/components/ui/button",;""
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;""
import { Calendar } from "@/components/ui/calendar",;""
import { FormControl } from "@/components/ui/form",;""
import { cn } from "@/lib/utils",;"
              selected={startDate}
              onSelect={setStartDate}
interface DateFieldsProps {;
  setStartDate: (date: Date | undefined) => void;
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
      <div>;
</div>"
        <Label htmlFor="publishedDate">Published Date (Optional);"
        <Popover>;

          <PopoverTrigger asChild>;

            <FormControl>;

                className={cn("
                  "w-full md: w-[240px] pl-3 text-left font-normal",""
                  !startDate && "text-muted-foreground",")
                )}>;

                  <span>Pick a date</span>;
              ;
          ;"
          <PopoverContent className="w-auto p-0" align="start">;"

              mode="single""

              disabled={(date) =>;

        <Label htmlFor="expiryDate">Expiry Date (Optional)"

                  !endDate && "text-muted-foreground"")

                {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}"

              selected={endDate}
              onSelect={setEndDate}

                date < new Date();

              initialFocus;
            />;
      </div>;"
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
        <Label html_for="published_date">Published Date (Optional);"

          <PopoverTrigger as_child>;

                className={cn ("
                  "w - full md: w-[240px] pl - 3 text - left font - normal",""
                  !start_date && "text - muted - foreground",")
              >;

                  <span > Pick a date</span>)}
          <PopoverContent className="w - auto p - 0" align="start">;"

              mode="single";"
              selected={start_date}
              on_select={setStartDate}
              disabled={(date) => date > new Date ()}

      </div>;
        <Label html_for="expiry_date">Expiry Date (Optional);"

                  !end_date && "text - muted - foreground",")
                {end_date ? format (end_date, "PPP") : <span > Pick a date</span>}"

              selected={end_date}
              on_select={setEndDate}
              disabled={(date) => date < new Date ()}
pr-12325
</Calendar>
          </PopoverContent>;
        </Popover>;
      </div>;
    </div>;
  );
}
      </div>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
