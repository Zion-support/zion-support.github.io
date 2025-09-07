


        }}
        initialContent={form.getValues('description') |''}      />

import { useState  } from 'react';
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
import { z } from "zod",;
import { WorkExperience } from "@/types/resume",;
import { Button } from "@/components/ui/button",;
import { Calendar } from "@/components/ui/calendar",;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Textarea } from "@/components/ui/textarea",;
import { cn } from "@/lib/utils",;
import { Switch } from "@/components/ui/switch",;
import { format } from "date-fns",;
import {
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
  Popover
  PopoverContent
  PopoverTrigger
} from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Switch } from '@/components/ui/switch'
import { format } from 'date-fns'
import { CalendarIcon, Loader2 } from 'lucide-react'
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton";
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog";
// Define form schema
const formSchema = null;
          context: `${watchRoleTitle} at ${watchCompanyName}`}}
        initialContent={form.getValues("description") || ""}
      />
origin/cursor/automate-test-improve-and-merge-code-2533
    </>
  )
is current: z.boolean () .default (false)
description: z.string () .optional ()
location: z.string () .optional ()
})
type FormValues = z.infer<typeof formSchema>
//Create a properly typed WorkExperience object with all required fields const workExperience: WorkExperience = {
  await onSubmit (workExperience)
      <AIEnhancementDialog;
        title='Enhance Work Experience Description';
        is_open={isEnhancementDialogOpen}
        on_close={() => setIsEnhancementDialogOpen (false)}
        on_apply={handleAIEnhancement}
        default_options={{
          enhancement_type: 'work - description',
          content: form.get_values ('description') || '',
          context: `${watchRoleTitle} at ${watchCompanyName}`,
        }}
        initial_content={form.get_values ('description') || ''}      />;
    </>);
is current: z.boolean () .default (false);
description: z.string () .optional ();
location: z.string () .optional ();
});
type FormValues = z.infer < typeof form_schema>;
//Create a properly typed WorkExperience object with all required fields const work_experience: WorkExperience = {
  await on_submit (work_experience);
}
setIsEnhancementDialogOpen (false);
}

        defaultOptions={{;
          enhancementType: 'work-description',;
          content: form && form.getValues('description') || '',;
          context: `${watchRoleTitle} at ${watchCompanyName}`,;
        }}
        initialContent={form && form.getValues('description') || ''}      />;
    </>;
  );

is current: z && z.boolean () .default (false);
description: z && z.string () .optional ();
location: z && z.string () .optional () ;
});
type FormValues = z && z.infer<typeof formSchema>;
//Create a properly typed WorkExperience object with all required fields const workExperience: WorkExperience = {;
  await onSubmit (workExperience) ;
};
setIsEnhancementDialogOpen (false);
};
}/> <FormField </FormControl> <FormMessage /> </FormItem>) ;
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormField <FormLabel>Current Position</FormLabel> <div className="flex items-center gap-2 h-10" > <Switch /> <label htmlFor="current-position" className="text-sm text-muted-foreground" > I currently work here </label> </div> <FormMessage /> </FormItem>) ";
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Start Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) ";
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) ;
}/> {;
  !watchIsCurrent && (<FormFieldcontrol= {
  form && form.control 
}<FormLabel>End Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) ";
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) ;
}/>) ";
}</div> <FormField <FormLabel>Description</FormLabel> <div className="flex gap-2" > <AIEnhancementButton > AI Writer </Button> </div> </div> <FormControl> <Textareaplaceholder="Describe your responsibilities, achievements, and skills used in this role..." className="min-h-[150px]" {
  ...field 
}/> </FormControl> <FormMessage /> </FormItem>) ";
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (<>Save</>) ;
}</Button> </div> </form> </Form> <AIEnhancementDialog /> </>) ;
}";

}
}



}/> <FormField </FormControl> <FormMessage /> </FormItem>);
}/> </div> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4" > <FormField </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormField <FormLabel > Current Position</FormLabel> <div className="flex items - center gap - 2 h - 10" > <Switch /> <label html_for="current - position" className="text - sm text - muted - foreground" > I currently work here </label> </div> <FormMessage /> </FormItem>) ";
}/> </div> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4" > <FormField <FormLabel > Start Date</FormLabel> <Popover> <PopoverTrigger as_child> <FormControl> <Button) : (<span > Select date</span>) ";
}<CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" aria - hidden="true" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w - auto p - 0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>);
}/> {
  !watchIsCurrent && (<FormField control= {
  form.control;
}<FormLabel > End Date</FormLabel> <Popover> <PopoverTrigger as_child> <FormControl> <Button) : (<span > Select date</span>) ";
}<CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" aria - hidden="true" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w - auto p - 0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>);
}/>) ";
}</div> <FormField <FormLabel > Description</FormLabel> <div className="flex gap - 2" > <AIEnhancementButton > AI Writer </Button> </div> </div> <FormControl> <Textarea placeholder="Describe your responsibilities, achievements, and skills used in this role..." className="min - h-[150px]" {
  ...field;
}/> </FormControl> <FormMessage /> </FormItem>) ";
}/> <> <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" /> Saving... </>) : (<>Save</>);
}</Button> </div> </form> </Form> <AIEnhancementDialog /> </>);
}";
}
}

}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (<>Save</>) 
}</Button> </div> </form> </Form> <AIEnhancementDialog /> </>) ;
}";
};
};

          enhancementType: "work-description",
          content: form.getValues("description") || "",
          context: `${watchRoleTitle} at ${watchCompanyName}`}}
        initialContent={form.getValues("description") || ""}
      />
    </>
  )
}
;
  form.control
}<FormLabel>End Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) "
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>)
}/>) "
}</div> <FormField <FormLabel>Description</FormLabel> <div className="flex gap-2" > <AIEnhancementButton > AI Writer </Button> </div> </div> <FormControl> <Textarea placeholder="Describe your responsibilities, achievements, and skills used in this role..." className="min-h-[150px]" {
  ...field
}/> </FormControl> <FormMessage /> </FormItem>) "
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (<>Save</>)
}</Button> </div> </form> </Form> <AIEnhancementDialog /> </>)
}"
origin/cursor/automate-test-improve-and-merge-code-2533
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" />"

                    <PopoverContent className="w-auto p-0" align="start">"

                      <Calendar;"
                        mode="single""
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus;"
                        captionLayout="dropdown-buttons""
                        fromYear={1990}
                        toYear={new Date().getFullYear()}



                name='end_date

                  <FormItem className='flex flex-col'>                    <FormLabel>End Date;


                      <PopoverTrigger asChild>;


                          <Button;)
pr-12325
