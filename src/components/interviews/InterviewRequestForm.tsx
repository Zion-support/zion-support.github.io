
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select",
import { Calendar } from "@/components/ui/calendar",
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover",
import { TalentProfile } from "@/types/talent",
import type { UserProfile } from "@/types/auth",
import { cn } from "@/lib/utils",
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { z } from "zod",
import { format, addDays } from "date-fns",
import { CalendarIcon } from 'lucide-react'
import { toast } from "@/components/ui/use-toast",
import { useInterviews } from "@/hooks/useInterviews",
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from &quot;@/components/ui/select&quot;;
import { Calendar } from &quot;@/components/ui/calendar&quot;;
import { Popover, PopoverTrigger, PopoverContent } from &quot;@/components/ui/popover&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import type { UserProfile } from &quot;@/types/auth&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { useForm, ControllerRenderProps } from &quot;react-hook-form&quot;;
import { z } from &quot;zod&quot;;
import { format, addDays } from &quot;date-fns&quot;;
import { CalendarIcon } from 'lucide-react'
import { toast } from &quot;@/components/ui/use-toast&quot;;
import { useInterviews } from &quot;@/hooks/useInterviews&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface InterviewRequestFormProps {
  talent: TalentProfile,
  onClose: () => void,
  userDetails?: UserProfile
}

const formSchema = z.object({
  date: z.date({
    required_error: &quot;Please select a date for the interview.&quot;}).refine(date => date > new Date(), {
    message: &quot;Interview date must be in the future&quot;
  }),
  time: z.string().min(1, &quot;Please select a time for the interview.&quot;),
  duration: z.string().min(1, &quot;Please select the interview duration.&quot;),
  platform: z.string().min(1, &quot;Please select a meeting platform.&quot;),
  meetingLink: z.string().optional(),
<<<<<<< HEAD
  title: z.string().min(3, "Please provide a brief title for the interview."),
  notes: z.string().optional()}),
=======
  title: z.string().min(3, &quot;Please provide a brief title for the interview.&quot;),
  notes: z.string().optional()});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function InterviewRequestForm({ talent, onClose, userDetails }: InterviewRequestFormProps) {
  const { requestInterview } = useInterviews(),
  const [isSubmitting, setIsSubmitting] = useState(false),

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: `Interview with ${talent.full_name}`,
<<<<<<< HEAD
      duration: "30",
      platform: "zoom",
      notes: "",
      meetingLink: ""}}),
=======
      duration: &quot;30&quot;,
      platform: &quot;zoom&quot;,
      notes: "&quot;,
      meetingLink: "&quot;}});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!userDetails?.id) {
      toast({
<<<<<<< HEAD
        title: "Authentication required",
        description: "Please log in to schedule an interview",
        variant: "destructive"}),
      return
=======
        title: &quot;Authentication required&quot;,
        description: &quot;Please log in to schedule an interview&quot;,
        variant: &quot;destructive&quot;});
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    setIsSubmitting(true),

    try {
      // Combine date and time
      const dateTimeString = `${format(values.date, 'yyyy-MM-dd')}T${values.time}:00`,
      const scheduledDate = new Date(dateTimeString),
      
      // Calculate end time based on duration
      const durationMinutes = parseInt(values.duration),

      await requestInterview({
        talent_id: talent.id,
        client_id: userDetails.id,
        scheduled_date: scheduledDate.toISOString(),
        duration_minutes: durationMinutes,
        notes: values.notes,
        meeting_platform: values.platform as any,
        meeting_link: values.meetingLink,
        interview_type: &quot;video&quot;,
        title: values.title
      }),

      toast({
<<<<<<< HEAD
        title: "Interview requested",
        description: `Your interview request with ${talent.full_name} has been sent.`}),
      onClose()
=======
        title: &quot;Interview requested&quot;,
        description: `Your interview request with ${talent.full_name} has been sent.`});
      onClose();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (error) {
      logErrorToProduction('Failed to schedule interview:', { data: error }),
      toast({
<<<<<<< HEAD
        title: "Failed to schedule interview",
        description: "An error occurred while scheduling the interview. Please try again.",
        variant: "destructive"})
=======
        title: &quot;Failed to schedule interview&quot;,
        description: &quot;An error occurred while scheduling the interview. Please try again.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  }

  const timeSlots = [
<<<<<<< HEAD
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20: 00"
  ],
=======
    &quot;09:00&quot;, &quot;09:30&quot;, &quot;10:00&quot;, &quot;10:30&quot;, &quot;11:00&quot;, &quot;11:30&quot;,
    &quot;12:00&quot;, &quot;12:30&quot;, &quot;13:00&quot;, &quot;13:30&quot;, &quot;14:00&quot;, &quot;14:30&quot;,
    &quot;15:00&quot;, &quot;15:30&quot;, &quot;16:00&quot;, &quot;16:30&quot;, &quot;17:00&quot;, &quot;17:30&quot;,
    &quot;18:00&quot;, &quot;18:30&quot;, &quot;19:00&quot;, &quot;19:30&quot;, &quot;20:00&quot;
  ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=&quot;space-y-5&quot;>
        <div className=&quot;flex items-center mb-6&quot;>
          <div className=&quot;flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4&quot;>
            <img
              src={talent.profile_picture_url || &quot;/placeholder.svg&quot;}
              alt={talent.full_name}
              className=&quot;h-full w-full object-cover&quot;
              loading=&quot;lazy&quot;
            />
          </div>
          <div>
            <h3 className=&quot;text-lg font-medium text-white&quot;>{talent.full_name}</h3>
            <p className=&quot;text-sm text-zion-slate-light&quot;>{talent.professional_title}</p>
          </div>
        </div>

        <FormField
          control={form.control}
          name=&quot;title&quot;
          render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, &quot;title&quot;> }) => (
            <FormItem>
              <FormLabel>Interview Title</FormLabel>
              <FormControl>
                <Input placeholder=&quot;Brief title for the interview&quot; {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <FormField
            control={form.control}
            name=&quot;date&quot;
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, &quot;date&quot;> }) => (
              <FormItem className=&quot;flex flex-col&quot;>
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant=&quot;outline&quot;
                        className={cn(
                          &quot;w-full pl-3 text-left font-normal&quot;,
                          !field.value && &quot;text-muted-foreground&quot;
                        )}
                      >
                        {field.value ? (
                          format(field.value, &quot;PPP&quot;)
                        ) : (
                          <span>Pick a date</span>
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
                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                      initialFocus
                      className=&quot;p-3 pointer-events-auto&quot;
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
=======
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select",;
import { Calendar } from "@/components/ui/calendar",;
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover",;
import { TalentProfile } from "@/types/talent",;
import type { UserProfile } from "@/types/auth",;
import { cn } from "@/lib/utils",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm, ControllerRenderProps } from "react-hook-form",;
import { z } from "zod",;
import { format, addDays } from "date-fns",;
import { CalendarIcon } from 'lucide-react';
import { toast } from "@/components/ui/use-toast",;
import { useInterviews } from "@/hooks/useInterviews",;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface InterviewRequestFormProps {;
  talent: TalentProfile,;
  onClose: () => void,;
  userDetails?: UserProfile;
}
;
const formSchema = z.object({;
  date: z.date({;
    required_error: "Please select a date for the interview."}).refine(date => date > new Date(), {;
    message: "Interview date must be in the future";
  }),;
  time: z.string().min(1, "Please select a time for the interview."),;
  duration: z.string().min(1, "Please select the interview duration."),;
  platform: z.string().min(1, "Please select a meeting platform."),;
  meetingLink: z.string().optional(),;
  title: z.string().min(3, "Please provide a brief title for the interview."),;
  notes: z.string().optional()}),;
export function InterviewRequestForm({ talent, onClose, userDetails }: InterviewRequestFormProps) {;
  const { requestInterview } = useInterviews(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const form = useForm<z.infer<typeof formSchema>>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      title: `Interview with ${talent.full_name}`,;
      duration: "30",;
      platform: "zoom",;
      notes: "",;
      meetingLink: ""}}),;
  async function onSubmit(values: z.infer<typeof formSchema>) {;
    if (!userDetails?.id) {;
      toast({;
        title: "Authentication required",;
        description: "Please log in to schedule an interview",;
        variant: "destructive"}),;
      return;
    }
;
    setIsSubmitting(true),;
    try {;
      // Combine date and time;
      const dateTimeString = `${format(values.date, 'yyyy-MM-dd')}T${values.time}:00`,;
      const scheduledDate = new Date(dateTimeString),;
      // Calculate end time based on duration;
      const durationMinutes = parseInt(values.duration),;
      await requestInterview({;
        talent_id: talent.id,;
        client_id: userDetails.id,;
        scheduled_date: scheduledDate.toISOString(),;
        duration_minutes: durationMinutes,;
        notes: values.notes,;
        meeting_platform: values.platform as any,;
        meeting_link: values.meetingLink,;
        interview_type: "video",;
        title: values.title;
      }),;
      toast({;
        title: "Interview requested",;
        description: `Your interview request with ${talent.full_name} has been sent.`}),;
      onClose();
    } catch (error) {;
      logErrorToProduction('Failed to schedule interview:', { data: error }),;
      toast({;
        title: "Failed to schedule interview",;
        description: "An error occurred while scheduling the interview. Please try again.",;
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  }
;
  const timeSlots = [;
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",;
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",;
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",;
    "18:00", "18:30", "19:00", "19:30", "20: 00";
  ];
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">;
        <div className="flex items-center mb-6">;
          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4">;
            <img;
              src={talent.profile_picture_url || "/placeholder.svg"}
              alt={talent.full_name}
              className="h-full w-full object-cover";
              loading="lazy";
            />;
          </div>;
          <div>;
            <h3 className="text-lg font-medium text-white">{talent.full_name}</h3>;
            <p className="text-sm text-zion-slate-light">{talent.professional_title}</p>;
          </div>;
        </div>;
        <FormField;
          control={form.control}
          name="title";
          render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "title"> }) => (;
            <FormItem>;
              <FormLabel>Interview Title</FormLabel>;
              <FormControl>;
                <Input placeholder="Brief title for the interview" {...field} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <FormField;
            control={form.control}
            name="date";
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "date"> }) => (;
              <FormItem className="flex flex-col">;
                <FormLabel>Date</FormLabel>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <FormControl>;
                      <Button;
                        variant="outline";
                        className={cn(;
                          "w-full pl-3 text-left font-normal";
                          !field.value && "text-muted-foreground";
                        )}
                      >;
                        {field.value ? (;
                          format(field.value, "PPP");
                        ) : (;
                          <span>Pick a date</span>;
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
                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                      initialFocus;
                      className="p-3 pointer-events-auto";
                    />;
                  </PopoverContent>;
                </Popover>;
                <FormMessage />;
              </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            )}
          />;
          <FormField;
            control={form.control}
<<<<<<< HEAD
            name=&quot;time&quot;
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, &quot;time&quot;> }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder=&quot;Select time&quot; />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className=&quot;max-h-[300px]&quot;>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
=======
            name="time";
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "time"> }) => (;
              <FormItem>;
                <FormLabel>Time</FormLabel>;
                <Select onValueChange={field.onChange} defaultValue={field.value}>;
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select time" />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent className="max-h-[300px]">;
                    {timeSlots.map((time) => (;
                      <SelectItem key={time} value={time}>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                        {time}
                      </SelectItem>;
                    ))}
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>;
            )}
<<<<<<< HEAD
          />
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <FormField
            control={form.control}
            name=&quot;duration&quot;
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, &quot;duration&quot;> }) => (
              <FormItem>
                <FormLabel>Duration</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder=&quot;Select duration&quot; />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value=&quot;15&quot;>15 minutes</SelectItem>
                    <SelectItem value=&quot;30&quot;>30 minutes</SelectItem>
                    <SelectItem value=&quot;45&quot;>45 minutes</SelectItem>
                    <SelectItem value=&quot;60&quot;>60 minutes</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
=======
          />;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <FormField;
            control={form.control}
            name="duration";
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "duration"> }) => (;
              <FormItem>;
                <FormLabel>Duration</FormLabel>;
                <Select onValueChange={field.onChange} defaultValue={field.value}>;
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select duration" />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
                    <SelectItem value="15">15 minutes</SelectItem>;
                    <SelectItem value="30">30 minutes</SelectItem>;
                    <SelectItem value="45">45 minutes</SelectItem>;
                    <SelectItem value="60">60 minutes</SelectItem>;
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            )}
          />;
          <FormField;
            control={form.control}
<<<<<<< HEAD
            name=&quot;platform&quot;
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, &quot;platform&quot;> }) => (
              <FormItem>
                <FormLabel>Platform</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder=&quot;Select platform&quot; />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value=&quot;zoom&quot;>Zoom</SelectItem>
                    <SelectItem value=&quot;google-meet&quot;>Google Meet</SelectItem>
                    <SelectItem value=&quot;teams&quot;>Microsoft Teams</SelectItem>
                    <SelectItem value=&quot;other&quot;>Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
=======
            name="platform";
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "platform"> }) => (;
              <FormItem>;
                <FormLabel>Platform</FormLabel>;
                <Select onValueChange={field.onChange} defaultValue={field.value}>;
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select platform" />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
                    <SelectItem value="zoom">Zoom</SelectItem>;
                    <SelectItem value="google-meet">Google Meet</SelectItem>;
                    <SelectItem value="teams">Microsoft Teams</SelectItem>;
                    <SelectItem value="other">Other</SelectItem>;
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            )}
          />;
        </div>;
        {form.watch('platform') !== 'in-app' && (;
          <FormField;
            control={form.control}
<<<<<<< HEAD
            name=&quot;meetingLink&quot;
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, &quot;meetingLink&quot;> }) => (
              <FormItem>
                <FormLabel>Meeting Link (Optional)</FormLabel>
                <FormControl>
                  <Input
=======
            name="meetingLink";
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "meetingLink"> }) => (;
              <FormItem>;
                <FormLabel>Meeting Link (Optional)</FormLabel>;
                <FormControl>;
                  <Input;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    placeholder={`Add your ${form.watch('platform')} link here`}
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;
            )}
          />;
        )}
;
        <FormField;
          control={form.control}
<<<<<<< HEAD
          name=&quot;notes&quot;
          render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, &quot;notes&quot;> }) => (
            <FormItem>
              <FormLabel>Notes (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder=&quot;Share what you'd like to discuss in this interview&quot;
                  className=&quot;h-20&quot;
=======
          name="notes";
          render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "notes"> }) => (;
            <FormItem>;
              <FormLabel>Notes (Optional)</FormLabel>;
              <FormControl>;
                <Textarea;
                  placeholder="Share what you'd like to discuss in this interview";
                  className="h-20";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  {...field}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
<<<<<<< HEAD
        />

        <div className=&quot;flex justify-end gap-4 pt-4&quot;>
          <Button variant=&quot;outline&quot; onClick={onClose} type=&quot;button&quot;>
            Cancel
          </Button>
          <Button type=&quot;submit&quot; disabled={isSubmitting}>
            {isSubmitting ? &quot;Scheduling...&quot; : &quot;Schedule Interview&quot;}
          </Button>
        </div>
      </form>
    </Form>
  )
=======
        />;
        <div className="flex justify-end gap-4 pt-4">;
          <Button variant="outline" onClick={onClose} type="button">;
            Cancel;
          </Button>;
          <Button type="submit" disabled={isSubmitting}>;
            {isSubmitting ? "Scheduling..." : "Schedule Interview"}
          </Button>;
        </div>;
      </form>;
    </Form>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;