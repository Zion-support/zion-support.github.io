
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select",
import { Calendar } from "@/components/ui/calendar",
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover",
import { TalentProfile } from "@/types/talent",
import { UserProfile } from "@/types/auth",
import { cn } from "@/lib/utils",
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm } from "react-hook-form",
import { z } from "zod",
import { format, addDays } from "date-fns",
import { CalendarIcon, Check, Clock } from "lucide-react",
import { toast } from "@/components/ui/use-toast",
import { useInterviews } from "@/hooks/useInterviews",interface InterviewRequestFormProps {
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
import React, {_useState} from "react";

interface InterviewRequestFormProps {_talent: TalentProfile;
  onClose: () => void;
  userDetails?: UserProfile;}

const _formSchema = z.object({_date: z.date({
    required_error: "Please select a date for the interview."}).refine(date => date > new Date(), {_message: "Interview date must be in the future"}),
  time: z.string().min(1, "Please select a time for the interview."),
  duration: z.string().min(1, "Please select the interview duration."),
  platform: z.string().min(1, "Please select a meeting platform."),
  meetingLink: z.string().optional(),
  title: z.string().min(3, "Please provide a brief title for the interview."),
  notes: z.string().optional()}),
export function InterviewRequestForm({ talent, onClose, userDetails }: InterviewRequestFormProps) {
  const { requestInterview } = useInterviews(),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const _form = useForm<z.infer<typeof formSchema>>({_resolver: zodResolver(formSchema), _defaultValues: {
      title: `Interview with ${talent.full_name}`,
      duration: "30",
      platform: "zoom",
      notes: "",
      meetingLink: ""}}),
  async function onSubmit(_values: z.infer<typeof formSchema>) {_if (!userDetails?.id) {
      toast({
        title: "Authentication required",
        description: "Please log in to schedule an interview",
        variant: "destructive"}),
      return      return;
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
        title: "Interview requested",
        description: `Your interview request with ${talent.full_name} has been sent.`}),
      onClose()
    } catch (error) {
      console.error("Failed to schedule interview:", error),
      toast({
        title: "Failed to schedule interview",
        description: "An error occurred while scheduling the interview. Please try again.",
        variant: "destructive"})    } finally {
      setIsSubmitting(false)
    }
  }

  const timeSlots = [
    try {_// Combine date and time
      const _dateTimeString = `${format(values.date, _'yyyy-MM-dd')}T${_values.time}:00`;
      const _scheduledDate = new Date(dateTimeString);
      
      // Calculate end time based on duration
      const _durationMinutes = parseInt(values.duration);

      await requestInterview({_talent_id: talent.id, _client_id: userDetails.id, _scheduled_date: scheduledDate.toISOString(), _duration_minutes: durationMinutes, _notes: values.notes, _meeting_platform: values.platform as any, _meeting_link: values.meetingLink, _interview_type: "video", _title: values.title});

      toast({_title: "Interview requested", _description: `Your interview request with ${talent.full_name} has been sent.`});
      onClose();
    } catch (error) {_toast({
        title: "Failed to schedule interview", _description: "An error occurred while scheduling the interview. Please try again.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  }

  const _timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20: 00"
  ],
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=&quot;space-y-5&quot;>
        <div className=&quot;flex items-center mb-6&quot;>
          <div className=&quot;flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4&quot;>
            <img 
              src={talent.profile_picture_url || &quot;/placeholder.svg&quot;} 
              alt={talent.full_name} 
              className=&quot;h-full w-full object-cover&quot;
            />
          </div>
          <div>
            <h3 className=&quot;text-lg font-medium text-white&quot;>{talent.full_name}</h3>
            <p className=&quot;text-sm text-zion-slate-light&quot;>{talent.professional_title}</p>          </div>
        </div>

        <FormField
          control={form.control}
          name=&quot;title&quot;
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interview Title</FormLabel>
              <FormControl>
                <Input placeholder=&quot;Brief title for the interview&quot; {...field} />              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <FormField
            control={form.control}
            name=&quot;date&quot;
            render={({ field }) => (
              <FormItem className=&quot;flex flex-col&quot;>                <FormLabel>Date</FormLabel>
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
                          format(field.value, &quot;PPP&quot;)                        ) : (
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
                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}                      initialFocus
                      className=&quot;p-3 pointer-events-auto&quot;
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name=&quot;time&quot;
            render={({ field }) => (
              <FormItem>                <FormLabel>Time</FormLabel>
                <Select onValueChange={_field.onChange} defaultValue={_field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder=&quot;Select time&quot; />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className=&quot;max-h-[300px]&quot;>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}                      </SelectItem>
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
            control={form.control}
            name=&quot;duration&quot;
            render={({ field }) => (              <FormItem>
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
            control={form.control}
            name=&quot;platform&quot;
            render={({ field }) => (              <FormItem>
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
            name=&quot;meetingLink&quot;
            render={({ field }) => (              <FormItem>
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
          control={form.control}
          name=&quot;notes&quot;
          render={({ field }) => (            <FormItem>
              <FormLabel>Notes (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder=&quot;Share what you'd like to discuss in this interview&quot;
                  className=&quot;h-20&quot;
                  {...field}                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=&quot;flex justify-end gap-4 pt-4&quot;>
          <Button variant=&quot;outline&quot; onClick={onClose} type=&quot;button&quot;>
            Cancel
          </Button>
          <Button type=&quot;submit&quot; disabled={isSubmitting}>
            {isSubmitting ? &quot;Scheduling...&quot; : &quot;Schedule Interview&quot;}          </Button>
        </div>
      </form>
    </Form>
  )
}
