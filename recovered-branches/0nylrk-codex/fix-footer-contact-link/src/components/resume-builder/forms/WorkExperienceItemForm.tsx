
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react',
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm } from "react-hook-form",
import { z } from "zod",
import { WorkExperience } from "@/types/resume",
import { Button } from "@/components/ui/button",
import { Calendar } from "@/components/ui/calendar",
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Textarea } from "@/components/ui/textarea",
import { cn } from "@/lib/utils",
import { Switch } from "@/components/ui/switch",
import { format } from "date-fns",
import { CalendarIcon, Loader2 } from "lucide-react",
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",
=======
import { useState } from 'react';
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { useForm } from &quot;react-hook-form&quot;;
import { z } from &quot;zod&quot;;
import { WorkExperience } from &quot;@/types/resume&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Calendar } from &quot;@/components/ui/calendar&quot;;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Popover, PopoverContent, PopoverTrigger } from &quot;@/components/ui/popover&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { Switch } from &quot;@/components/ui/switch&quot;;
import { format } from &quot;date-fns&quot;;
import { CalendarIcon, Loader2 } from &quot;lucide-react&quot;;
import { AIEnhancementButton } from &quot;@/components/ai-enhancement/AIEnhancementButton&quot;;
import { AIEnhancementDialog } from &quot;@/components/ai-enhancement/AIEnhancementDialog&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Define form schema
const formSchema = z.object({
  company_name: z.string().min(1, &quot;Company name is required&quot;),
  role_title: z.string().min(1, &quot;Role title is required&quot;),
  start_date: z.date({
    required_error: &quot;Start date is required&quot;}),
  end_date: z.date().optional(),
  is_current: z.boolean().default(false),
  description: z.string().optional(),
  location: z.string().optional()}),

type FormValues = z.infer<typeof formSchema>,

interface WorkExperienceItemFormProps {
  initialData?: WorkExperience,
  onSubmit: (data: WorkExperience) => Promise<void>,
  onCancel: () => void
}

export function WorkExperienceItemForm({
  initialData,
  onSubmit,
  onCancel}: WorkExperienceItemFormProps) {
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false),

  // Set up form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_name: initialData?.company_name || "&quot;,
      role_title: initialData?.role_title || "&quot;,
      start_date: initialData?.start_date ? new Date(initialData.start_date) : new Date(),
      end_date: initialData?.end_date ? new Date(initialData.end_date) : undefined,
      is_current: initialData?.is_current || false,
<<<<<<< HEAD
      description: initialData?.description || "",
      location: initialData?.location || ""}}),
  
  const { isSubmitting } = form.formState,
  const watchIsCurrent = form.watch("is_current"),
  const watchRoleTitle = form.watch("role_title"),
  const watchCompanyName = form.watch("company_name"),
=======
      description: initialData?.description || "&quot;,
      location: initialData?.location || "&quot;}});
  
  const { isSubmitting } = form.formState;
  const watchIsCurrent = form.watch(&quot;is_current&quot;);
  const watchRoleTitle = form.watch(&quot;role_title&quot;);
  const watchCompanyName = form.watch(&quot;company_name&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const handleFormSubmit = async (values: FormValues) => {
    // Create a properly typed WorkExperience object with all required fields
    const workExperience: WorkExperience = {
      id: initialData?.id,
      company_name: values.company_name,  // Required
      role_title: values.role_title,      // Required
      start_date: values.start_date,      // Required
      end_date: values.end_date,          // Optional
      is_current: values.is_current,      // Required
      description: values.description,    // Optional
      location: values.location,          // Optional
    },
    
    await onSubmit(workExperience)
  },

  const handleAIEnhancement = (content: string) => {
<<<<<<< HEAD
    form.setValue("description", content, { shouldDirty: true }),
    setIsEnhancementDialogOpen(false)
  },
=======
    form.setValue(&quot;description&quot;, content, { shouldDirty: true });
    setIsEnhancementDialogOpen(false);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className=&quot;space-y-6&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            <FormField
              control={form.control}
              name=&quot;company_name&quot;
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder=&quot;e.g. Acme Corporation&quot; {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
=======
import { useState } from 'react',;
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
import { CalendarIcon, Loader2 } from "lucide-react",;
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",;
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",;
// Define form schema;
const formSchema = z.object({;
  company_name: z.string().min(1, "Company name is required"),;
  role_title: z.string().min(1, "Role title is required"),;
  start_date: z.date({;
    required_error: "Start date is required"}),;
  end_date: z.date().optional(),;
  is_current: z.boolean().default(false),;
  description: z.string().optional(),;
  location: z.string().optional()}),;
type FormValues = z.infer<typeof formSchema>,;
interface WorkExperienceItemFormProps {;
  initialData?: WorkExperience,;
  onSubmit: (data: WorkExperience) => Promise<void>,;
  onCancel: () => void;
}
;
export function WorkExperienceItemForm({;
  initialData,;
  onSubmit,;
  onCancel}: WorkExperienceItemFormProps) {;
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false),;
  // Set up form;
  const form = useForm<FormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      company_name: initialData?.company_name || "",;
      role_title: initialData?.role_title || "",;
      start_date: initialData?.start_date ? new Date(initialData.start_date) : new Date(),;
      end_date: initialData?.end_date ? new Date(initialData.end_date) : undefined,;
      is_current: initialData?.is_current || false,;
      description: initialData?.description || "",;
      location: initialData?.location || ""}}),;
  const { isSubmitting } = form.formState,;
  const watchIsCurrent = form.watch("is_current"),;
  const watchRoleTitle = form.watch("role_title"),;
  const watchCompanyName = form.watch("company_name"),;
  const handleFormSubmit = async (values: FormValues) => {;
    // Create a properly typed WorkExperience object with all required fields;
    const workExperience: WorkExperience = {;
      id: initialData?.id,;
      company_name: values.company_name,  // Required;
      role_title: values.role_title,      // Required;
      start_date: values.start_date,      // Required;
      end_date: values.end_date,          // Optional;
      is_current: values.is_current,      // Required;
      description: values.description,    // Optional;
      location: values.location,          // Optional;
    },;
    await onSubmit(workExperience);
  },;
  const handleAIEnhancement = (content: string) => {;
    form.setValue("description", content, { shouldDirty: true }),;
    setIsEnhancementDialogOpen(false);
  },;
  return (;
    <>;
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField;
              control={form.control}
              name="company_name";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Company Name</FormLabel>;
                  <FormControl>;
                    <Input placeholder="e.g. Acme Corporation" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              )}
            />;
            <FormField;
              control={form.control}
<<<<<<< HEAD
              name=&quot;role_title&quot;
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role Title</FormLabel>
                  <FormControl>
                    <Input placeholder=&quot;e.g. Senior Developer&quot; {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            <FormField
              control={form.control}
              name=&quot;location&quot;
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder=&quot;e.g. New York, NY (Remote)&quot; {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
=======
              name="role_title";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Role Title</FormLabel>;
                  <FormControl>;
                    <Input placeholder="e.g. Senior Developer" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField;
              control={form.control}
              name="location";
              render={({ field }) => (;
                <FormItem>;
                  <FormLabel>Location</FormLabel>;
                  <FormControl>;
                    <Input placeholder="e.g. New York, NY (Remote)" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              )}
            />;
            <FormField;
              control={form.control}
<<<<<<< HEAD
              name=&quot;is_current&quot;
              render={({ field }) => (
                <FormItem className=&quot;flex flex-col&quot;>
                  <FormLabel>Current Position</FormLabel>
                  <div className=&quot;flex items-center gap-2 h-10&quot;>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id=&quot;current-position&quot;
                    />
                    <label htmlFor=&quot;current-position&quot; className=&quot;text-sm text-muted-foreground&quot;>
                      I currently work here
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            <FormField
              control={form.control}
              name=&quot;start_date&quot;
              render={({ field }) => (
                <FormItem className=&quot;flex flex-col&quot;>
                  <FormLabel>Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={&quot;outline&quot;}
                          className={cn(
                            &quot;w-full pl-3 text-left font-normal&quot;,
                            !field.value && &quot;text-muted-foreground&quot;
                          )}
                        >
                          {field.value ? (
                            format(field.value, &quot;MMM yyyy&quot;)
                          ) : (
                            <span>Select date</span>
                          )}
                          <CalendarIcon className=&quot;ml-auto h-4 w-4 opacity-50&quot; />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className=&quot;w-auto p-0&quot; align=&quot;start&quot;>
                      <Calendar
                        mode=&quot;single&quot;
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        captionLayout=&quot;dropdown-buttons&quot;
=======
              name="is_current";
              render={({ field }) => (;
                <FormItem className="flex flex-col">;
                  <FormLabel>Current Position</FormLabel>;
                  <div className="flex items-center gap-2 h-10">;
                    <Switch;
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="current-position";
                    />;
                    <label htmlFor="current-position" className="text-sm text-muted-foreground">;
                      I currently work here;
                    </label>;
                  </div>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <FormField;
              control={form.control}
              name="start_date";
              render={({ field }) => (;
                <FormItem className="flex flex-col">;
                  <FormLabel>Start Date</FormLabel>;
                  <Popover>;
                    <PopoverTrigger asChild>;
                      <FormControl>;
                        <Button;
                          variant={"outline"}
                          className={cn(;
                            "w-full pl-3 text-left font-normal",;
                            !field.value && "text-muted-foreground";
                          )}
                        >;
                          {field.value ? (;
                            format(field.value, "MMM yyyy");
                          ) : (;
                            <span>Select date</span>;
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                        </Button>;
                      </FormControl>;
                    </PopoverTrigger>;
                    <PopoverContent className="w-auto p-0" align="start">;
                      <Calendar;
                        mode="single";
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus;
                        captionLayout="dropdown-buttons";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                        fromYear={1990}
                        toYear={new Date().getFullYear()}
                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;
                </FormItem>;
              )}
            />;
            {!watchIsCurrent && (;
              <FormField;
                control={form.control}
<<<<<<< HEAD
                name=&quot;end_date&quot;
                render={({ field }) => (
                  <FormItem className=&quot;flex flex-col&quot;>
                    <FormLabel>End Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={&quot;outline&quot;}
                            className={cn(
                              &quot;w-full pl-3 text-left font-normal&quot;,
                              !field.value && &quot;text-muted-foreground&quot;
                            )}
                          >
                            {field.value ? (
                              format(field.value, &quot;MMM yyyy&quot;)
                            ) : (
                              <span>Select date</span>
                            )}
                            <CalendarIcon className=&quot;ml-auto h-4 w-4 opacity-50&quot; />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className=&quot;w-auto p-0&quot; align=&quot;start&quot;>
                        <Calendar
                          mode=&quot;single&quot;
                          selected={field.value || undefined}
                          onSelect={field.onChange}
                          initialFocus
                          captionLayout=&quot;dropdown-buttons&quot;
=======
                name="end_date";
                render={({ field }) => (;
                  <FormItem className="flex flex-col">;
                    <FormLabel>End Date</FormLabel>;
                    <Popover>;
                      <PopoverTrigger asChild>;
                        <FormControl>;
                          <Button;
                            variant={"outline"}
                            className={cn(;
                              "w-full pl-3 text-left font-normal",;
                              !field.value && "text-muted-foreground";
                            )}
                          >;
                            {field.value ? (;
                              format(field.value, "MMM yyyy");
                            ) : (;
                              <span>Select date</span>;
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                          </Button>;
                        </FormControl>;
                      </PopoverTrigger>;
                      <PopoverContent className="w-auto p-0" align="start">;
                        <Calendar;
                          mode="single";
                          selected={field.value || undefined}
                          onSelect={field.onChange}
                          initialFocus;
                          captionLayout="dropdown-buttons";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                          fromYear={1990}
                          toYear={new Date().getFullYear()}
                          disabled={(date) => date > new Date()}
                        />;
                      </PopoverContent>;
                    </Popover>;
                    <FormMessage />;
                  </FormItem>;
                )}
              />;
            )}
          </div>;
          <FormField;
            control={form.control}
<<<<<<< HEAD
            name=&quot;description&quot;
            render={({ field }) => (
              <FormItem>
                <div className=&quot;flex justify-between items-center&quot;>
                  <FormLabel>Description</FormLabel>
                  <div className=&quot;flex gap-2&quot;>
                    <AIEnhancementButton
                      options={{
                        enhancementType: &quot;work-description&quot;,
                        content: field.value || "&quot;,
                        context: `${watchRoleTitle} at ${watchCompanyName}`
                      }}
                      onEnhanced={(content) => form.setValue(&quot;description&quot;, content, { shouldDirty: true })}
                      buttonText=&quot;Enhance with AI&quot;
                    />
                    <Button
                      type=&quot;button&quot;
                      variant=&quot;outline&quot;
                      size=&quot;sm"
                      onClick={() => setIsEnhancementDialogOpen(true)}
                      className="text-xs&quot;
                    >
                      AI Writer
                    </Button>
                  </div>
                </div>
                <FormControl>
                  <Textarea
                    placeholder=&quot;Describe your responsibilities, achievements, and skills used in this role..."
                    className="min-h-[150px]"
=======
            name="description";
            render={({ field }) => (;
              <FormItem>;
                <div className="flex justify-between items-center">;
                  <FormLabel>Description</FormLabel>;
                  <div className="flex gap-2">;
                    <AIEnhancementButton;
                      options={{;
                        enhancementType: "work-description",;
                        content: field.value || "",;
                        context: `${watchRoleTitle} at ${watchCompanyName}`;
                      }}
                      onEnhanced={(content) => form.setValue("description", content, { shouldDirty: true })}
                      buttonText="Enhance with AI";
                    />;
                    <Button;
                      type="button";
                      variant="outline";
                      size="sm";
                      onClick={() => setIsEnhancementDialogOpen(true)}
                      className="text-xs";
                    >;
                      AI Writer;
                    </Button>;
                  </div>;
                </div>;
                <FormControl>;
                  <Textarea;
                    placeholder="Describe your responsibilities, achievements, and skills used in this role...";
                    className="min-h-[150px]";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
<<<<<<< HEAD
          />
          
          <div className="flex justify-end gap-2&quot;>
            <Button type=&quot;button&quot; variant=&quot;outline&quot; onClick={onCancel}>
              Cancel
            </Button>
            <Button type=&quot;submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin&quot; />
                  Saving...
                </>
              ) : (
                <>Save</>
              )}
            </Button>
          </div>
        </form>
      </Form>

      <AIEnhancementDialog
        title=&quot;Enhance Work Experience Description&quot;
        isOpen={isEnhancementDialogOpen}
        onClose={() => setIsEnhancementDialogOpen(false)}
        onApply={handleAIEnhancement}
        defaultOptions={{
          enhancementType: &quot;work-description&quot;,
          content: form.getValues(&quot;description&quot;) || "&quot;,
          context: `${watchRoleTitle} at ${watchCompanyName}`}}
        initialContent={form.getValues(&quot;description&quot;) || ""}
      />
    </>
  )
=======
          />;
          <div className="flex justify-end gap-2">;
            <Button type="button" variant="outline" onClick={onCancel}>;
              Cancel;
            </Button>;
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? (;
                <>;
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Saving...;
                </>;
              ) : (;
                <>Save</>;
              )}
            </Button>;
          </div>;
        </form>;
      </Form>;
      <AIEnhancementDialog;
        title="Enhance Work Experience Description";
        isOpen={isEnhancementDialogOpen}
        onClose={() => setIsEnhancementDialogOpen(false)}
        onApply={handleAIEnhancement}
        defaultOptions={{;
          enhancementType: "work-description";
          content: form.getValues("description") || "";
          context: `${watchRoleTitle} at ${watchCompanyName}`}}
        initialContent={form.getValues("description") || ""}
      />;
    </>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;