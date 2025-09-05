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
import { CalendarIcon, Loader2 } from 'lucide-react'
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
import { CalendarIcon, Loader2 } from 'lucide-react'
import { AIEnhancementButton } from &quot;@/components/ai-enhancement/AIEnhancementButton&quot;;
import { AIEnhancementDialog } from &quot;@/components/ai-enhancement/AIEnhancementDialog&quot;;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Define form schema
<<<<<<< HEAD
const formSchema = z.object({
  company_name: z.string().min(1, &quot;Company name is required&quot;),
  role_title: z.string().min(1, &quot;Role title is required&quot;),
  start_date: z.date({
    required_error: &quot;Start date is required&quot;}),
=======
const _formSchema = z.object({_company_name: z.string().min(1, _"Company name is required"), _role_title: z.string().min(1, _"Role title is required"), _start_date: z.date({
    required_error: "Start date is required"}),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  end_date: z.date().optional(),
  is_current: z.boolean().default(false),
  description: z.string().optional(),
  location: z.string().optional()}),

type FormValues = z.infer<typeof formSchema>,

<<<<<<< HEAD
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
=======
interface WorkExperienceItemFormProps {_initialData?: WorkExperience;
  onSubmit: (_data: WorkExperience) => Promise<void>;
  onCancel: () => void;}

export function WorkExperienceItemForm(_{_initialData, _onSubmit, _onCancel}: WorkExperienceItemFormProps) {_const [isEnhancementDialogOpen, _setIsEnhancementDialogOpen] = useState(false);

  // Set up form
  const _form = useForm<FormValues>({
    resolver: zodResolver(formSchema), _defaultValues: {
      company_name: initialData?.company_name || "", _role_title: initialData?.role_title || "", _start_date: initialData?.start_date ? new Date(initialData.start_date) : new Date(), _end_date: initialData?.end_date ? new Date(initialData.end_date) : undefined, _is_current: initialData?.is_current || false, _description: initialData?.description || "", _location: initialData?.location || ""}});
  
  const {_isSubmitting} = form.formState;
  const _watchIsCurrent = form.watch("is_current");
  const _watchRoleTitle = form.watch("role_title");
  const _watchCompanyName = form.watch("company_name");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleFormSubmit = async (_values: FormValues) => {_// Create a properly typed WorkExperience object with all required fields
    const workExperience: WorkExperience = {
<<<<<<< HEAD
      id: initialData?.id,
      company_name: values.company_name,  // Required
      role_title: values.role_title,      // Required
      start_date: values.start_date,      // Required
      end_date: values.end_date,          // Optional
      is_current: values.is_current,      // Required
      description: values.description,    // Optional
      location: values.location,          // Optional
    },
=======
      id: initialData?.id, _company_name: values.company_name, _// Required
      role_title: values.role_title, _// Required
      start_date: values.start_date, _// Required
      end_date: values.end_date, _// Optional
      is_current: values.is_current, _// Required
      description: values.description, _// Optional
      location: values.location, _// Optional};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    await onSubmit(workExperience)
  },

<<<<<<< HEAD
  const handleAIEnhancement = (content: string) => {
<<<<<<< HEAD
    form.setValue("description", content, { shouldDirty: true }),
    setIsEnhancementDialogOpen(false)
  },
=======
    form.setValue(&quot;description&quot;, content, { shouldDirty: true });
=======
  const _handleAIEnhancement = (_content: string) => {_form.setValue("description", _content, _{ shouldDirty: true});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    setIsEnhancementDialogOpen(false);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <>
<<<<<<< HEAD
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className=&quot;space-y-6&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            <FormField
              control={form.control}
              name=&quot;company_name&quot;
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder=&quot;e.g. Acme Corporation&quot; {...field} />
=======
      <Form {_...form}>
        <form onSubmit={_form.handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={_form.control}
              name="company_name"
              render={_(_{ field}: {_field: unknown}) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Acme Corporation" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
<<<<<<< HEAD
              control={form.control}
              name=&quot;role_title&quot;
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Role Title</FormLabel>
                  <FormControl>
                    <Input placeholder=&quot;e.g. Senior Developer&quot; {...field} />
=======
              control={_form.control}
              name="role_title"
              render={_(_{ field}: {_field: unknown}) => (
                <FormItem>
                  <FormLabel>Role Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Senior Developer" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            <FormField
<<<<<<< HEAD
              control={form.control}
              name=&quot;location&quot;
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder=&quot;e.g. New York, NY (Remote)&quot; {...field} />
=======
              control={_form.control}
              name="location"
              render={_(_{ field}: {_field: unknown}) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. New York, NY (Remote)" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
<<<<<<< HEAD
              control={form.control}
              name=&quot;is_current&quot;
              render={({ field }: { field: any }) => (
                <FormItem className=&quot;flex flex-col&quot;>
=======
              control={_form.control}
              name="is_current"
              render={_(_{ field}: {_field: unknown}) => (
                <FormItem className="flex flex-col">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <FormLabel>Current Position</FormLabel>
                  <div className=&quot;flex items-center gap-2 h-10&quot;>
                    <Switch
<<<<<<< HEAD
                      aria-label=&quot;Current position&quot;
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id=&quot;current-position&quot;
=======
                      aria-label="Current position"
                      checked={_field.value}
                      onCheckedChange={_field.onChange}
                      id="current-position"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
              control={form.control}
              name=&quot;start_date&quot;
              render={({ field }: { field: any }) => (
                <FormItem className=&quot;flex flex-col&quot;>
=======
              control={_form.control}
              name="start_date"
              render={_(_{ field}: {_field: unknown}) => (
                <FormItem className="flex flex-col">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <FormLabel>Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
<<<<<<< HEAD
                          variant={&quot;outline&quot;}
                          className={cn(
                            &quot;w-full pl-3 text-left font-normal&quot;,
                            !field.value && &quot;text-muted-foreground&quot;
                          )}
                        >
                          {field.value ? (
                            format(field.value, &quot;MMM yyyy&quot;)
=======
                          variant={_"outline"}
                          className={_cn(
                            "w-full pl-3 text-left font-normal", _!field.value && "text-muted-foreground"
                          )}
                        >
                          {_field.value ? (
                            format(field.value, _"MMM yyyy")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          ) : (
                            <span>Select date</span>
                          )}
                          <CalendarIcon className=&quot;ml-auto h-4 w-4 opacity-50&quot; aria-hidden=&quot;true&quot; />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className=&quot;w-auto p-0&quot; align=&quot;start&quot;>
                      <Calendar
<<<<<<< HEAD
                        mode=&quot;single&quot;
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        captionLayout=&quot;dropdown-buttons&quot;
                        fromYear={1990}
                        toYear={new Date().getFullYear()}
=======
                        mode="single"
                        selected={_field.value}
                        onSelect={_field.onChange}
                        initialFocus
                        captionLayout="dropdown-buttons"
                        fromYear={_1990}
                        toYear={_new Date().getFullYear()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {_!watchIsCurrent && (_<FormField
                control={form.control}
<<<<<<< HEAD
                name=&quot;end_date&quot;
                render={({ field }: { field: any }) => (
                  <FormItem className=&quot;flex flex-col&quot;>
=======
                name="end_date"
                render={_({ field}: {_field: unknown}) => (
                  <FormItem className="flex flex-col">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <FormLabel>End Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
<<<<<<< HEAD
                            variant={&quot;outline&quot;}
                            className={cn(
                              &quot;w-full pl-3 text-left font-normal&quot;,
                              !field.value && &quot;text-muted-foreground&quot;
                            )}
                          >
                            {field.value ? (
                              format(field.value, &quot;MMM yyyy&quot;)
=======
                            variant={_"outline"}
                            className={_cn(
                              "w-full pl-3 text-left font-normal", _!field.value && "text-muted-foreground"
                            )}
                          >
                            {_field.value ? (
                              format(field.value, _"MMM yyyy")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            ) : (
                              <span>Select date</span>
                            )}
                            <CalendarIcon className=&quot;ml-auto h-4 w-4 opacity-50&quot; aria-hidden=&quot;true&quot; />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className=&quot;w-auto p-0&quot; align=&quot;start&quot;>
                        <Calendar
<<<<<<< HEAD
                          mode=&quot;single&quot;
                          selected={field.value || undefined}
                          onSelect={field.onChange}
                          initialFocus
                          captionLayout=&quot;dropdown-buttons&quot;
                          fromYear={1990}
                          toYear={new Date().getFullYear()}
                          disabled={(date) => date > new Date()}
=======
                          mode="single"
                          selected={_field.value || undefined}
                          onSelect={_field.onChange}
                          initialFocus
                          captionLayout="dropdown-buttons"
                          fromYear={_1990}
                          toYear={_new Date().getFullYear()}
                          disabled={_(_date) => date > new Date()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>

          <FormField
<<<<<<< HEAD
            control={form.control}
            name=&quot;description&quot;
            render={({ field }: { field: any }) => (
              <FormItem>
                <div className=&quot;flex justify-between items-center&quot;>
=======
            control={_form.control}
            name="description"
            render={_(_{ field}: {_field: unknown}) => (_<FormItem>
                <div className="flex justify-between items-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <FormLabel>Description</FormLabel>
                  <div className=&quot;flex gap-2&quot;>
                    <AIEnhancementButton
<<<<<<< HEAD
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
=======
                      options={_{
                        enhancementType: "work-description", _content: field.value || "", _context: `${watchRoleTitle} at ${_watchCompanyName}`
                      }}
                      onEnhanced={_(content) => form.setValue("description", _content, _{ shouldDirty: true})}
                      buttonText="Enhance with AI"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={_() => setIsEnhancementDialogOpen(true)}
                      className="text-xs"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      AI Writer
                    </Button>
                  </div>
                </div>
                <FormControl>
                  <Textarea
                    placeholder=&quot;Describe your responsibilities, achievements, and skills used in this role..."
                    className="min-h-[150px]"
                    {_...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
<<<<<<< HEAD
          <div className="flex justify-end gap-2&quot;>
            <Button type=&quot;button&quot; variant=&quot;outline&quot; onClick={onCancel}>
              Cancel
            </Button>
            <Button type=&quot;submit" disabled={isSubmitting}>
              {isSubmitting ? (
=======
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={_onCancel}>
              Cancel
            </Button>
            <Button type="submit" disabled={_isSubmitting}>
              {_isSubmitting ? (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
        title=&quot;Enhance Work Experience Description&quot;
        isOpen={isEnhancementDialogOpen}
        onClose={() => setIsEnhancementDialogOpen(false)}
        onApply={handleAIEnhancement}
        defaultOptions={{
          enhancementType: &quot;work-description&quot;,
          content: form.getValues(&quot;description&quot;) || "&quot;,
          context: `${watchRoleTitle} at ${watchCompanyName}`}}
        initialContent={form.getValues(&quot;description&quot;) || ""}
=======
        title="Enhance Work Experience Description"
        isOpen={_isEnhancementDialogOpen}
        onClose={_() => setIsEnhancementDialogOpen(false)}
        onApply={_handleAIEnhancement}
        defaultOptions={_{
          enhancementType: "work-description", _content: form.getValues("description") || "", _context: `${watchRoleTitle} at ${_watchCompanyName}`}}
        initialContent={_form.getValues("description") || ""}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      />
    </>
  )
}
