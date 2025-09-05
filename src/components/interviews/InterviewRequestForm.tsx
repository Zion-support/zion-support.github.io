
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
=======
import React, {_useState} from "react";
import type {_UserProfile} from "@/types/auth";


interface InterviewRequestFormProps {_talent: TalentProfile;
  onClose: () => void;
  userDetails?: UserProfile;}

const _formSchema = z.object({_date: z.date({
    required_error: "Please select a date for the interview."}).refine(date => date > new Date(), {_message: "Interview date must be in the future"}),
  time: z.string().min(1, "Please select a time for the interview."),
  duration: z.string().min(1, "Please select the interview duration."),
  platform: z.string().min(1, "Please select a meeting platform."),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  meetingLink: z.string().optional(),
<<<<<<< HEAD
  title: z.string().min(3, "Please provide a brief title for the interview."),
  notes: z.string().optional()}),
=======
  title: z.string().min(3, &quot;Please provide a brief title for the interview.&quot;),
  notes: z.string().optional()});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
export function InterviewRequestForm({ talent, onClose, userDetails }: InterviewRequestFormProps) {
  const { requestInterview } = useInterviews(),
  const [isSubmitting, setIsSubmitting] = useState(false),
=======
export function InterviewRequestForm(_{_talent, _onClose, _userDetails}: InterviewRequestFormProps) {_const { requestInterview} = useInterviews();
  const [isSubmitting, setIsSubmitting] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _form = useForm<z.infer<typeof formSchema>>({_resolver: zodResolver(formSchema), _defaultValues: {
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

  async function onSubmit(_values: z.infer<typeof formSchema>) {_if (!userDetails?.id) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Authentication required",
        description: "Please log in to schedule an interview",
        variant: "destructive"}),
      return
=======
        title: &quot;Authentication required&quot;,
        description: &quot;Please log in to schedule an interview&quot;,
        variant: &quot;destructive&quot;});
=======
        title: "Authentication required", _description: "Please log in to schedule an interview", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    setIsSubmitting(true),

<<<<<<< HEAD
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
=======
    try {_// Combine date and time
      const _dateTimeString = `${format(values.date, _'yyyy-MM-dd')}T${_values.time}:00`;
      const _scheduledDate = new Date(dateTimeString);
      
      // Calculate end time based on duration
      const _durationMinutes = parseInt(values.duration);

      await requestInterview({_talent_id: talent.id, _client_id: userDetails.id, _scheduled_date: scheduledDate.toISOString(), _duration_minutes: durationMinutes, _notes: values.notes, _meeting_platform: values.platform as any, _meeting_link: values.meetingLink, _interview_type: "video", _title: values.title});

      toast({_title: "Interview requested", _description: `Your interview request with ${talent.full_name} has been sent.`});
      onClose();
    } catch (error) {_logErrorToProduction('Failed to schedule interview:', _{ data: error});
      toast({_title: "Failed to schedule interview", _description: "An error occurred while scheduling the interview. Please try again.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  }

  const _timeSlots = [
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
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
=======
    <Form {_...form}>
      <form onSubmit={_form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4">
            <img
              src={_talent.profile_picture_url || "/placeholder.svg"}
              alt={_talent.full_name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">{_talent.full_name}</h3>
            <p className="text-sm text-zion-slate-light">{_talent.professional_title}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        </div>

        <FormField
<<<<<<< HEAD
          control={form.control}
          name=&quot;title&quot;
          render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, &quot;title&quot;> }) => (
            <FormItem>
              <FormLabel>Interview Title</FormLabel>
              <FormControl>
                <Input placeholder=&quot;Brief title for the interview&quot; {...field} />
=======
          control={_form.control}
          name="title"
          render={_(_{ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"title">}) => (
            <FormItem>
              <FormLabel>Interview Title</FormLabel>
              <FormControl>
                <Input placeholder="Brief title for the interview" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <FormField
<<<<<<< HEAD
            control={form.control}
            name=&quot;date&quot;
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, &quot;date&quot;> }) => (
              <FormItem className=&quot;flex flex-col&quot;>
=======
            control={_form.control}
            name="date"
            render={_(_{ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"date">}) => (
              <FormItem className="flex flex-col">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
<<<<<<< HEAD
                        variant=&quot;outline&quot;
                        className={cn(
                          &quot;w-full pl-3 text-left font-normal&quot;,
                          !field.value && &quot;text-muted-foreground&quot;
                        )}
                      >
                        {field.value ? (
                          format(field.value, &quot;PPP&quot;)
=======
                        variant="outline"
                        className={_cn(
                          "w-full pl-3 text-left font-normal", _!field.value && "text-muted-foreground"
                        )}
                      >
                        {_field.value ? (
                          format(field.value, _"PPP")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className=&quot;ml-auto h-4 w-4 opacity-50&quot; />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className=&quot;w-auto p-0&quot; align=&quot;start&quot;>
                    <Calendar
<<<<<<< HEAD
                      mode=&quot;single&quot;
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
=======
                      mode="single"
                      selected={_field.value}
                      onSelect={_field.onChange}
                      disabled={_(_date) => date < new Date() || date > addDays(new Date(), _90)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      initialFocus
                      className=&quot;p-3 pointer-events-auto&quot;
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
<<<<<<< HEAD
            control={form.control}
            name=&quot;time&quot;
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, &quot;time&quot;> }) => (
              <FormItem>
=======
            control={_form.control}
            name="time"
            render={_(_{ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"time">}) => (_<FormItem>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <FormLabel>Time</FormLabel>
                <Select onValueChange={_field.onChange} defaultValue={_field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder=&quot;Select time&quot; />
                    </SelectTrigger>
                  </FormControl>
<<<<<<< HEAD
                  <SelectContent className=&quot;max-h-[300px]&quot;>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
=======
                  <SelectContent className="max-h-[300px]">
                    {_timeSlots.map((time) => (
                      <SelectItem key={time} value={_time}>
                        {_time}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <FormField
<<<<<<< HEAD
            control={form.control}
            name=&quot;duration&quot;
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, &quot;duration&quot;> }) => (
=======
            control={_form.control}
            name="duration"
            render={_(_{ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"duration">}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <FormItem>
                <FormLabel>Duration</FormLabel>
                <Select onValueChange={_field.onChange} defaultValue={_field.value}>
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
            )}
          />

          <FormField
<<<<<<< HEAD
            control={form.control}
            name=&quot;platform&quot;
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, &quot;platform&quot;> }) => (
=======
            control={_form.control}
            name="platform"
            render={_(_{ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"platform">}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <FormItem>
                <FormLabel>Platform</FormLabel>
                <Select onValueChange={_field.onChange} defaultValue={_field.value}>
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
            )}
          />
        </div>

        {_form.watch('platform') !== 'in-app' && (_<FormField
            control={form.control}
<<<<<<< HEAD
            name=&quot;meetingLink&quot;
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, &quot;meetingLink&quot;> }) => (
=======
            name="meetingLink"
            render={_({ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"meetingLink">}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <FormItem>
                <FormLabel>Meeting Link (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder={_`Add your ${form.watch('platform')} link here`}
                    {_...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
<<<<<<< HEAD
          control={form.control}
          name=&quot;notes&quot;
          render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, &quot;notes&quot;> }) => (
=======
          control={_form.control}
          name="notes"
          render={_(_{ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"notes">}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <FormItem>
              <FormLabel>Notes (Optional)</FormLabel>
              <FormControl>
                <Textarea 
<<<<<<< HEAD
                  placeholder=&quot;Share what you'd like to discuss in this interview&quot;
                  className=&quot;h-20&quot;
                  {...field}
=======
                  placeholder="Share what you'd like to discuss in this interview"
                  className="h-20"
                  {_...field}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<<<<<<< HEAD
        <div className=&quot;flex justify-end gap-4 pt-4&quot;>
          <Button variant=&quot;outline&quot; onClick={onClose} type=&quot;button&quot;>
            Cancel
          </Button>
          <Button type=&quot;submit&quot; disabled={isSubmitting}>
            {isSubmitting ? &quot;Scheduling...&quot; : &quot;Schedule Interview&quot;}
=======
        <div className="flex justify-end gap-4 pt-4">
          <Button variant="outline" onClick={_onClose} type="button">
            Cancel
          </Button>
          <Button type="submit" disabled={_isSubmitting}>
            {_isSubmitting ? "Scheduling..." : "Schedule Interview"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </Button>
        </div>
      </form>
    </Form>
  )
}
