
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface InterviewRequestFormProps {

  talent: TalentProfile
  onClose: () => void
  userDetails?: UserProfile

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Form, FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";
import {Calendar} from "@/components/ui/calendar";
import {Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover";
import {TalentProfile} from "@/types/talent";
import {UserProfile} from "@/types/auth";
import {cn} from "@/lib/utils";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {format, addDays} from "date-fns";
import {CalendarIcon, Check, Clock} from "lucide-react";
import {toast} from "@/components/ui/use-toast";
import {useInterviews} from "@/hooks/useInterviews";
  talent: TalentProfile
  onClose: () => void
  userDetails?: UserProfile
=======
=======interface InterviewRequestFormProps {;
  talent: TalentProfile,;
  onClose: () => void,;
  userDetails?: UserProfile;
}

const formSchema = z && z.object({;
  date: z && z.date({;
    required_error: "Please select a date for the interview."}).refine(date => date > new Date(), {;
    message: "Interview date must be in the future";
  });
  time: z && z.string().min(1, "Please select a time for the interview.");
  duration: z && z.string().min(1, "Please select the interview duration.");
  platform: z && z.string().min(1, "Please select a meeting platform.");
  meetingLink: z && z.string().optional(),;
  title: z && z.string().min(3, "Please provide a brief title for the interview.");
  notes: z && z.string().optional()}),;

export function InterviewRequestForm(): any ({ talent, onClose, userDetails }: InterviewRequestFormProps) {;
  const { requestInterview } = useInterviews();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z && z.infer<typeof formSchema>>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      title: `Interview with ${talent && talent.full_name}`,;
      duration: "30",;
      platform: "zoom",;
      notes: "",;
      meetingLink: ""}}),;

  async function onSubmit(): any (values: z && z.infer<typeof formSchema>) {;
    if (!userDetails?.id) {;
      toast({;
        title: "Authentication required",;
        description: "Please log in to schedule an interview",;
        variant: "destructive"}),;
      return;

    }
    setIsSubmitting(true);

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11: 30"
    "12:00", "12:30", "13:00", "13:30", "14:00", "14: 30"
    "15:00", "15:30", "16:00", "16:30", "17:00", "17: 30"
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
=======    "18:00", "18:30", "19:00", "19:30", "20: 00"
  ]
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4">
            <img
              src={talent.profile_picture_url |"/placeholder.svg"}
              alt={talent.full_name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">{talent.full_name}</h3>
            <p className="text-sm text-zion-slate-light">{talent.professional_title}</p>
          </div>
        </div>
    try {;
      // Combine date and time;
      const dateTimeString = `${format(values && values.date, 'yyyy-MM-dd')}T${values && values.time}:00`;
      const scheduledDate = new Date(dateTimeString);
      // Calculate end time based on duration;
      const durationMinutes = parseInt(values && values.duration);
      await requestInterview({;
        talent_id: talent && talent.id,;
        client_id: userDetails && userDetails.id,;
        scheduled_date: scheduledDate && scheduledDate.toISOString(),;
        duration_minutes: durationMinutes,;
        notes: values && values.notes,;
        meeting_platform: values && values.platform as any,;
        meeting_link: values && values.meetingLink,;
        interview_type: "video",;
        title: values && values.title;
      });      toast({;
        title: "Interview requested",;
        description: `Your interview request with ${talent && talent.full_name} has been sent.`}),;
      onClose();
    } catch (error) {;
      console && console.error("Failed to schedule interview:", error);
      toast({;
        title: "Failed to schedule interview",;
        description: "An error occurred while scheduling the interview. Please try again.",;
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  }
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

          <FormField
            control={form && form.control}
            name="date"            render={({ field }) => (;
              <FormItem className="flex flex-col">;
                <FormLabel>Date</FormLabel>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <FormControl>;

                          !field.value && "text-muted-foreground"
                          "w-full pl-3 text-left font-normal"
                          !field && field.value && "text-muted-foreground"
                        )}>;
                        {field && field.value ? (;
                          format(field && field.value, "PPP");
                        ) : (;
                          <span>Pick a date</span>;
                        )}
                      <Button;
                        variant="outline";
                        className={cn(;
                          "w-full pl-3 text-left font-normal",;
                          !field.value && "text-muted-foreground";
                        )}
                      >;
                        {field.value ? (;
                          format(field.value, "PPP");
                        ) :(;
                          <span>Pick a date</span>;
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                      </Button>;
                    </FormControl>;
                  </PopoverTrigger>;
                  <PopoverContent className="w-auto p-0" align="start">;
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interview Title</FormLabel>
              <FormControl>
                <Input placeholder="Brief title for the interview" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
=======                      <Button
                        variant="outline"
                        className={cn(
                          "w-full pl-3 text-left font-normal";

                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                      selected={field && field.value}
                      onSelect={field && field.onChange}

=======import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select",;
import { Calendar } from "@/components/ui/calendar",;
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover",;
import { TalentProfile } from "@/types/talent",;
import { UserProfile } from "@/types/auth",;
import { cn } from "@/lib/utils",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
import { z } from "zod",;
import { format, addDays } from "date-fns",;
import { CalendarIcon, Check, Clock } from "lucide-react",;
import { toast } from "@/components/ui/use-toast",;
import { useInterviews } from "@/hooks/useInterviews",;
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
      console.error("Failed to schedule interview:", error),;
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
              src={talent.profile_picture_url || "/placeholder.svg"} ;
              alt={talent.full_name} ;
              className="h-full w-full object-cover";
            />;
          </div>;
          <div>;
            <h3 className="text-lg font-medium text-white">{talent.full_name}</h3>;
            <p className="text-sm text-zion-slate-light">{talent.professional_title}</p>;
          </div>;
        </div>;
        <FormField;
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interview Title</FormLabel>
              <FormControl>
                <Input placeholder="Brief title for the interview" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <FormField;
            control={form.control}
            name="date";
            render={({ field }) => (;
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
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                      initialFocus;
                      className="p-3 pointer-events-auto";
=======
            </FormItem>)}
        />;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
          <FormField;
            control={form.control}
            name="date";
            render={({ field }) => (
              <FormItem className="flex flex - col">;
                <FormLabel > Date</FormLabel>;
                <Popover>;
                  <PopoverTrigger as_child>;
                    <FormControl>;
                      <Button;
                        variant="outline";
                        className={cn (
                          "w - full pl - 3 text - left font - normal";
                          !field.value && "text - muted - foreground")}
                      >;
                        {field.value ? (
                          format (field.value, "PPP")) : (
                          <span > Pick a date</span>)}
                        <CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" />;
                      </Button>;
                    </FormControl>;
                  </PopoverTrigger>;
                  <PopoverContent className="w - auto p - 0" align="start">;
                    <Calendar;
                      mode="single";
                      selected={field.value}
                      on_select={field.on_change}
                      disabled={(date) => date < new Date () || date > add_days (new Date (), 90)}
                      initial_focus;
                      className="p - 3 pointer - events - auto";              </FormItem>;

            )}
          />;
          <FormField
            control={form && form.control}
            name="time"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Time</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
=======
              </FormItem>)}
          />;
          <FormField;
            control={form.control}
            name="time";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Time</FormLabel>;
                <Select onValueChange={field.on_change} default_value={field.value}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          />;
        </div>;

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;


                    <SelectItem value="teams">Microsoft Teams</SelectItem>;
                    <SelectItem value="other">Other</SelectItem>;
                  </SelectContent>;
                </Select>;
                <FormMessage />;
          />;
        </div>;

        {form && form.watch('platform') !== 'in-app' && (;

          <FormField
            control={form && form.control}
            name="meetingLink"
