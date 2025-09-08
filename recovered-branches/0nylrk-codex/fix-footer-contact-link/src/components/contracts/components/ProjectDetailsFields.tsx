
<<<<<<< HEAD


  form: UseFormReturn<ContractFormValues>;
}


export function ProjectDetailsFields(): any ({ form }: ProjectDetailsFieldsProps) {;



  return (
    <>;
      <FormField
        control={form && form.control}
        name="projectName"


        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Project Name</FormLabel>;
import { format  } from './date - fns';
import { CalendarIcon  } from './lucide-react';
import { UseFormReturn  } from './react - hook - form';
=======
import { format } from "date-fns";

import { CalendarIcon } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
<<<<<<< HEAD

  }
  "form": UseFormReturn<ContractFormValues>
import { format } from "date-fns";"
import { UseFormReturn } from "react-hook-form",;"
import {;
  }
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage,;
} from "@/components/ui/form";"
import { Button } from "@/components/ui/button";} from "@/components/ui/popover";"
interface ProjectDetailsFieldsProps {;
  }
  "form": UseFormReturn<ContractFormValues>;
=======
FormMessage
} from "@/components/ui/form";"
import { Input } from "@/components/ui/input";"
import { Textarea } from "@/components/ui/textarea";"
import { Button } from "@/components/ui/button";"
} from "@/components/ui/popover";"
import { Calendar } from "@/components/ui/calendar";"
import { ContractFormValues } from "./ContractForm";"
interface ProjectDetailsFieldsProps {
}
import { CalendarIcon } from "lucide-react","
import { UseFormReturn } from "react-hook-form","
  }
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage 
} from "@/components/ui/form",
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Popover
  PopoverContent
  PopoverTrigger
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";
import { ContractFormValues } from "./ContractForm";
interface ProjectDetailsFieldsProps {


            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            </FormControl>;
            <FormMessage />;

      />;

/>;
      <FormField
      />;
      <FormField;

      <FormField

        control={form && form.control}
        name="scopeSummary"      <FormField
        control={form && form.control}

        name="scopeSummary"

import { format } from "date-fns",;
import { CalendarIcon } from "lucide-react",;
import { UseFormReturn } from "react-hook-form",;
import { ;
  FormField,;
  FormItem, ;
  FormLabel, ;
  FormControl, ;
  FormDescription, ;
  FormMessage ;
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Button } from "@/components/ui/button",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Calendar } from "@/components/ui/calendar",;
import { ContractFormValues } from "./ContractForm",;
;
interface ProjectDetailsFieldsProps {;
  form:UseFormReturn<ContractFormValues>;
}
;
export function ProjectDetailsFields({ form } ProjectDetailsFieldsProps) {;
  return (;
    <>;
      <FormField;


        control={form.control}
        name="projectName";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Project Name</FormLabel>;
            <FormControl>;
              <Input placeholder="AI Website Development" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;        )}
      />;
      ;
      <FormField;
        control={form.control}
        name="scopeSummary";


        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Scope Summary</FormLabel>;
            <FormControl>;


          </FormItem>)}
      />;
      <FormField;
        control={form.control}"
        name="scope_summary";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Scope Summary</FormLabel>;
            <FormControl>;


          control={form && form.control}
          name="startDate"          render={({ field }) => (;

        <FormField
          control={form && form.control}
>>>>>>> origin/cursor/delete-old-data-records-6bba


        />;
        <FormField;


<<<<<<< HEAD

          control={form.control}

          name="endDate"


          render={({ field }) => (;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <FormItem className="flex flex-col">;
              <FormLabel>End Date (Optional)</FormLabel>;
              <Popover>;
                <PopoverTrigger asChild>;
                  <FormControl>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

                    selected={field && field.value || undefined}
                    onSelect={field && field.onChange}"
                    disabled={(date) => date < form && form.getValues("startDate")}
                    initialFocus;
          </FormItem>)}

        <FormField;
          control={form.control}"
          name="start_date";

              <FormLabel > Start Date</FormLabel>;
              <Popover>;
                <PopoverTrigger as_child>;
                  <FormControl>;
                    <Button;"
                      variant={"outline"}"`
                      className={`w - full pl - 3 text - left font - normal ${!field.value && "text - muted - foreground"}`}
                    >;
                      {field.value ? ("
                        format (field.value, "PPP")) : (

                    mode="single";
                    selected={field.value}
                    on_select={field.on_change}
                    disabled={(date) => date < new Date ()}
                    initial_focus;
                  />;
                </PopoverContent>;
              </Popover>;
              <FormMessage />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}"
          name="end_date";

              <FormLabel > End Date (Optional)</FormLabel>;
              <Popover>;
                <PopoverTrigger as_child>;
                  <FormControl>;
                    <Button;"
                      variant={"outline"}"`
                      className={`w - full pl - 3 text - left font - normal ${!field.value && "text - muted - foreground"}`}
                    >;
                      {field.value ? ("
                        format (field.value, "PPP")) : (

                    mode="single";
                    selected={field.value || undefined}
                    on_select={field.on_change}"
                    disabled={(date) => date < form.get_values ("start_date")}
                    initial_focus;

                  <Calendar;

=======
                    mode="single"
    </>
        />;
  FormMessage;"
} from "@/components/ui/form",""
import { Input } from "@/components/ui/input",""
import { Textarea } from "@/components/ui/textarea",""
import { Button } from "@/components/ui/button",""
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",""
import { Calendar } from "@/components/ui/calendar",""
import { ContractFormValues } from "./ContractForm","
  // TODO: Implement
  form: UseFormReturn<ContractFormValues>

  form: UseFormReturn<ContractFormValues>;

    <>;
      <FormField;
        control={form && form.control}"
        name="projectName""
        render={({ field }) => (

          <FormItem>;

            <FormLabel > Project Name;
            <FormControl>;
"
              <Input placeholder="AI Website Development" {...field} />;"

            ;
            <FormMessage />;

        name="scopeSummary"")
        render={({ field }) => (;

            <FormLabel>Scope Summary;

              <Textarea;"
                placeholder="Describe the project scope, deliverables, and expectations..."""
                className="min-h-[120px]"")
          )}

        control={form.control}"
        name="scope_summary";"

            <FormLabel > Scope Summary;

                placeholder="Describe the project scope, deliverables, and expectations...";""
                className="min - h-[120px]";"
                {...field}

              />;
</Textarea>
            </FormControl>;

            <FormDescription>;

            <FormDescription>

            <FormMessage />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
</div>
          name="startDate""
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;"
          name="startDate";"
          name="startDate"")
            <FormItem className="flex flex-col">;"

              <FormLabel>Start Date;
              <Popover>;

                <PopoverTrigger asChild>;

                    <Button;"
                      variant={"outline"}""
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && "text-muted-foreground"}`}>;"

                        <span>Pick a date</span>;"
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;"

                ;"
                <PopoverContent className="w-auto p-0" align="start">;"

                  <Calendar;"
                    mode="single""
                    selected={field && field.value}
                    onSelect={field && field.onChange})
                    disabled={(date) => date < new Date()}

          control={form && form.control}

          name="endDate""
            ;          )}

</Calendar>

                </PopoverContent>;
              </Popover>;
              <FormMessage />;
</FormMessage>
            </FormItem>;

        <FormField;
          control={form && form.control}

        />;
</FormField>
        <FormField;

          control={form.control}"
          name="endDate""
          control={form.control}"
          name="endDate""
            </FormItem>;          )}
</FormField>

        <FormField;
          control={form.control}"
          name="endDate";"
          control={form.control}
)
              <FormLabel>End Date (Optional);

                      variant={"outline"}""`;

    </>

pr-12325

        <FormField;
          control={form && form.control}"
          name="endDate""
          render={({ field }) => (;
</FormField>"
            <FormItem className="flex flex-col">;"
</FormItem>)
              <FormLabel>End Date (Optional)</FormLabel>;
              <Popover>;
</Popover>
                <PopoverTrigger asChild>;
</PopoverTrigger>
                  <FormControl>;
</FormControl>
                    <Button;"
                      variant={"outline"}""
                      className={`w-full pl-3 text-left font-normal ${!field && field.value && "text-muted-foreground"}`}>;"
</Button>
                        <span>Pick a date</span>;"
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;"
</CalendarIcon>
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;"
                <PopoverContent className="w-auto p-0" align="start">;"
</PopoverContent>
                  <Calendar;"
                    mode="single""
                  <Calendar;"
                    mode="single""

    </>
</Calendar>
      </div>;
    </>;

                    selected={field && field.value || undefined}
                    onSelect={field && field.onChange}"
                    disabled={(date) => date < form && form.getValues("startDate")}
                    initialFocus;
          </FormItem>)}

        <FormField;
                        <span>Pick a date</span>;
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                    </Button>;
                  </FormControl>;
                </PopoverTrigger>;
                <PopoverContent className="w-auto p-0" align="start">;
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
        />;
        <FormField;
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date (Optional)</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"


<Calendar;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    mode="single";
                    selected={field.value || undefined}
                    onSelect={field.onChange}
                    disabled={(date) => date < form.getValues("startDate")}
                    initialFocus;
                  />;
                    onSelect={field && field.onChange}"
                    disabled={(date) => date < form && form.getValues("startDate")}"
                    initialFocus;
          )}"
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;"
          name="start_date";"
            <FormItem className="flex flex - col">;"

              <FormLabel > Start Date;

                <PopoverTrigger as_child>;

                      className={`w - full pl - 3 text - left font - normal ${!field.value && "text - muted - foreground"}`}"
                    >;
                        <span > Pick a date</span>)}"
                      <CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />;"

                <PopoverContent className="w - auto p - 0" align="start">;"

                    mode="single";"
                    selected={field.value}
                    on_select={field.on_change}
                    disabled={(date) => date < new Date ()}

</Calendar>

                </PopoverContent>;
              </Popover>;
              <FormMessage />;

        />;
      </div>;
    </>;


<<<<<<< HEAD



  );
            </FormItem>;
          )}

        />;
      </div>;

    </>);



=======
            </FormItem>)}
        />;
      </div>;
    </>;
  ),;}
 import {
  FormField;
FormItem;
FormLabel;
FormControl;
FormDescription;
FormMessage interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues> 
}form 
}: ProjectDetailsFieldsProps) {
  return (<> <FormField control= {
  form.control 
}</FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Scope Summary</FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> Be specific about what is included and any limitations </FormDescription> <FormMessage /> </FormItem>) 
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField <FormLabel>Start Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) 
}/> <FormField <FormLabel>End Date (Optional) </FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormDescription> Leave empty if the end date is flexible </FormDescription> <FormMessage /> </FormItem>) 
}/> </div> </>) 
}
        />
      </div>
    </>
        />;
      </div>;
    </>;
  );
}
}

            </FormItem>;
          )}
        />;
      </div>;
    </>;
  ),;}
 import {
  FormField;
FormItem;
FormLabel;
FormControl;
FormDescription;
FormMessage interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ContractFormValues> 
}form 
}: ProjectDetailsFieldsProps) {
  return (<> <FormField control= {
  form.control 
}</FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Scope Summary</FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> Be specific about what is included and any limitations </FormDescription> <FormMessage /> </FormItem>) 
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField <FormLabel>Start Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) 
}/> <FormField <FormLabel>End Date (Optional) </FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus /> </PopoverContent> </Popover> <FormDescription> Leave empty if the end date is flexible </FormDescription> <FormMessage /> </FormItem>) 
}/> </div> </>) 
}
        />
      </div>
    </>
        />;
      </div>;

    </>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
