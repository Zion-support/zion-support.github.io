
import { useState } from 'react',;''
import { zodResolver } from "@hookform/resolvers/zod",;""
import { useForm } from "react-hook-form",;""
import { z } from "zod",;""
import { WorkExperience } from "@/types/resume",;""
import { Button } from "@/components/ui/button",;""
import { Calendar } from "@/components/ui/calendar",;""
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;""
import { Input } from "@/components/ui/input",;""
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;""
import { Textarea } from "@/components/ui/textarea",;""
import { cn } from "@/lib/utils",;""
import { Switch } from "@/components/ui/switch",;""
import { format } from "date-fns",;""
import { CalendarIcon, Loader2 } from "lucide-react",;""
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",;""
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",;"
;
// Define form schema;
const formSchema = z.object({;)"
  company_name:z.string().min(1, "Company name is required"),;""
  role_title:z.string().min(1, "Role title is required"),;"
  start_date: z.date({;,)"
  required_error:"Start date is required"}),;"
  end_date:z.date().optional(),;
  is_current:z.boolean().default(false),;
  description:z.string().optional(),;
  location:z.string().optional()}),;
;
type FormValues = z.infer<typeof formSchema>,;
</typeof>
  onSubmit:(data:WorkExperience) => Promise<void>,;
</void>
  const form = useForm<FormValues>({;
</FormValues>
    <>;
      <Form {...form}>;
</Form>)"
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">;"
</form>"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
</div>
            <FormField;
              control={form.control}"
              name="company_name";"
              render={({ field }) => (;
</FormField>
                <FormItem>;
</FormItem>
                  <FormLabel>Company Name</FormLabel>;
                  <FormControl>;
</FormControl>"
                    <Input placeholder="e.g. Acme Corporation" {...field} />;"
</Input>
                  </FormControl>;
                  <FormMessage />;
</FormMessage>)
                </FormItem>;              )}
            <FormField;
              control={form.control}"
              name="role_title";"
              render={({ field }) => (;
</FormField>
                <FormItem>;
</FormItem>
                  <FormLabel>Role Title</FormLabel>;
                  <FormControl>;
</FormControl>"
                    <Input placeholder="e.g. Senior Developer" {...field} />;"
</Input>
                  </FormControl>;
                  <FormMessage />;
</FormMessage>
                </FormItem>;
          </div>;"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
</div>
            <FormField;
              control={form.control}"
              name="location";")
              render={({ field }) => (;
</FormField>
                <FormItem>;
</FormItem>
                  <FormLabel>Location</FormLabel>;
                  <FormControl>;
</FormControl>)"
                    <Input placeholder="e.g. New York, NY (Remote)" {...field} />;"
</Input>
                  </FormControl>;
                  <FormMessage />;
</FormMessage>
                </FormItem>;              )}
            <FormField;
              control={form.control}"
              name="is_current";"
              render={({ field }) => (;
</FormField>"
                <FormItem className="flex flex-col">;"
</FormItem>
                  <FormLabel>Current Position</FormLabel>;"
                  <div className="flex items-center gap-2 h-10">;"
</div>
                    <Switch;
                      checked={field.value}
                      onCheckedChange={field.onChange}"
                      id="current-position";"
                    />;
</Switch>"
                    <label htmlFor="current-position" className="text-sm text-muted-foreground">;"
</label>
                    </label>;
                  </div>;
                  <FormMessage />;
</FormMessage>
                </FormItem>;
          </div>;"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
</div>
            <FormField;
              control={form.control}"
              name="start_date";")
              render={({ field }) => (;
</FormField>"
                <FormItem className="flex flex-col">;"
</FormItem>
                  <FormLabel>Start Date</FormLabel>;
                  <Popover>;
</Popover>
                    <PopoverTrigger asChild>;
</PopoverTrigger>
                      <FormControl>;
</FormControl>
                        <Button;"
                          variant={"outline"}"
                          className={cn(;"
                            "w-full pl-3 text-left font-normal",;""
                            !field.value && "text-muted-foreground";")
                          )}
                        >;
</Button>
                            <span>Select date</span>;"
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;"
</CalendarIcon>
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;"
                    <PopoverContent className="w-auto p-0" align="start">;"
</PopoverContent>
                      <Calendar;"
                        mode="single";"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus;"
                        captionLayout="dropdown-buttons";"
                        fromYear={1990}
                        toYear={new Date().getFullYear()}
                      />;
</Calendar>
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;
</FormMessage>
                </FormItem>;
              <FormField;
                control={form.control}"
                name="end_date";"
                render={({ field }) => (;
</FormField>"
                  <FormItem className="flex flex-col">;"
</FormItem>
                    <FormLabel>End Date</FormLabel>;
                    <Popover>;
</Popover>
                      <PopoverTrigger asChild>;
</PopoverTrigger>
                        <FormControl>;
</FormControl>
                          <Button;"
                            variant={"outline"}"
                            className={cn(;"
                              "w-full pl-3 text-left font-normal",;""
                              !field.value && "text-muted-foreground";")
                            )}
                          >;
</Button>
                              <span>Select date</span>;
                          <Button;"
                            variant={"outline"}"
                            className={cn(;"
                              "w-full pl-3 text-left font-normal",;""
                              !field.value && "text-muted-foreground";")
                            )}
                          >;
</Button>
                              <span>Select date</span>;"
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;"
</CalendarIcon>
                          </Button>;
                        </FormControl>;
                      </PopoverTrigger>;"
                      <PopoverContent className="w-auto p-0" align="start">;"
</PopoverContent>
                        <Calendar;"
                          mode="single";"
                          selected={field.value || undefined}
                          onSelect={field.onChange}
                          initialFocus;"
                          captionLayout="dropdown-buttons";"
                          fromYear={1990}
                          toYear={new Date().getFullYear()}
                          disabled={(date) => date > new Date()}
</Calendar>
                      </PopoverContent>;
                    </Popover>;
                    <FormMessage />;
</FormMessage>
                  </FormItem>;                )}
          </div>;
          <FormField;
            control={form.control}"
            name="description";"
            render={({ field }) => (;
</FormField>
              <FormItem>;
</FormItem>"
                <div className="flex justify-between items-center">;"
</div>
                  <FormLabel>Description</FormLabel>;"
                  <div className="flex gap-2">;"
</div>
                    <AIEnhancementButton;
                      options={{;"
                        enhancementType:"work-description",;""
                        content:field.value || "",;"
                        context:`${watchRoleTitle} at ${watchCompanyName}`;
                      }})"
                      onEnhanced={(content) => form.setValue("description", content, { shouldDirty:true })}"
</AIEnhancementButton>
                    <Button;"
                      type="button";""
                      variant="outline";""
                      size="sm";"
                      onClick={() => setIsEnhancementDialogOpen(true)}
</Button>
                    </Button>;
                  </div>;
                </div>;
                <FormControl>;
</FormControl>
                  <Textarea;"
                    placeholder="Describe your responsibilities, achievements, and skills used in this role...";""
                    className="min-h-[150px]";"
                    {...field}
                  />;
</Textarea>
                </FormControl>;
                <FormMessage />;
</FormMessage>
              </FormItem>;"
          <div className="flex justify-end gap-2">;"
</div>"
            <Button type="button" variant="outline" onClick={onCancel}>;"
</Button>
            </Button>;"
            <Button type="submit" disabled={isSubmitting}>;"
</Button>
                <>;"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
</Loader2>
                </>;
              ) :(;
                <>Save</>;)
              )}
            </Button>;
          </div>;
        </form>;
      </Form>;
      <AIEnhancementDialog;"
        title="Enhance Work Experience Description";"
        isOpen={isEnhancementDialogOpen}
        onClose={() => setIsEnhancementDialogOpen(false)}
</AIEnhancementDialog>
    </>;
  ),;}
 is current: z.boolean () .default (false);,
  description: z.string () .optional ();
location: z.string () .optional () 
});
type FormValues = z.infer<typeof formSchema>;
</typeof>
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
</FormField>"
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField </FormControl> <FormMessage /> </FormItem>)"
</div>"
}/> <FormField <FormLabel>Current Position</FormLabel> <div className="flex items-center gap-2 h-10" > <Switch /> <label htmlFor="current-position" className="text-sm text-muted-foreground" > I currently work here </label> </div> <FormMessage /> </FormItem>)"
</FormField>"
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Start Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>)"
</div>"
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>)"
</CalendarIcon>
  !watchIsCurrent && (<FormField control= {
  form.control;)
}<FormLabel>End Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) 
</FormField>"
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>)"
</CalendarIcon>"
}</div> <FormField <FormLabel>Description</FormLabel> <div className="flex gap-2" > <AIEnhancementButton > AI Writer </Button> </div> </div> <FormControl> <Textarea placeholder="Describe your responsibilities, achievements, and skills used in this role..." className="min-h-[150px]" {"
</FormField>
}/> </FormControl> <FormMessage /> </FormItem>) 
</FormMessage>"
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (<>Save</>)"
</Loader2>
}</Button> </div> </form> </Form> <AIEnhancementDialog /> </>) 
</AIEnhancementDialog>"