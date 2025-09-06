<<<<<<< HEAD
<<<<<<< HEAD

=======

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

interface InterviewRequestFormProps {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface InterviewRequestFormProps {

  talent: TalentProfile
  onClose: () => void
  userDetails?: UserProfile

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
import { toast } from "@/components/ui/use-toast";
import { useInterviews } from "@/hooks/useInterviews";
import { toast } from "@/components/ui/use-toast",
import { useInterviews } from "@/hooks/useInterviews",
interface InterviewRequestFormProps {
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
interface InterviewRequestFormProps {}
  talent: TalentProfile;
  onClose: () => void;
  userDetails?: UserProfile;
import React, { useState } from "react";"
import {Button} from "@/components/ui/button";"
import {Form, FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";"
import {Input} from "@/components/ui/input";"
import {Textarea} from "@/components/ui/textarea";"
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";"
import {Calendar} from "@/components/ui/calendar";"
import {Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover";"
import {TalentProfile} from "@/types/talent";"
import {UserProfile} from "@/types/auth";"
import {cn} from "@/lib/utils";"
import {zodResolver} from "@hookform/resolvers/zod";"
import {useForm} from "react-hook-form";"
import {z} from "zod";"
import {format, addDays} from "date-fns";"
import {CalendarIcon, Check, Clock} from "lucide-react";"
import {toast} from "@/components/ui/use-toast";"
import {useInterviews} from "@/hooks/useInterviews";

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
interface InterviewRequestFormProps {;
  talent: TalentProfile,;
  onClose: () => void,;
  userDetails?: UserProfile;
}

const formSchema = z && z.object({;
  date: z && z.date({;"
    required_error: "Please select a date for the interview."}).refine(date => date > new Date(), {;"
    message: "Interview date must be in the future";
  });"
  time: z && z.string().min(1, "Please select a time for the interview.");"
  duration: z && z.string().min(1, "Please select the interview duration.");"
  platform: z && z.string().min(1, "Please select a meeting platform.");
  meetingLink: z && z.string().optional(),;"
  title: z && z.string().min(3, "Please provide a brief title for the interview.");
  notes: z && z.string().optional()}),;

export function InterviewRequestForm(): any ({ talent, onClose, userDetails }: InterviewRequestFormProps) {;
  const { requestInterview } = useInterviews();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z && z.infer<typeof formSchema>>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      title: `Interview with ${talent && talent.full_name}`,;"
      duration: "30",;"
      platform: "zoom",;"
      notes: "",;"
      meetingLink: ""}}),;

  async function onSubmit(): any (values: z && z.infer<typeof formSchema>) {;
    if (!userDetails?.id) {;
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title: "Authentication required",,
  description: "Please log in to schedule an interview",;
=======
      toast({;"
        title: "Authentication required",;"
        description: "Please log in to schedule an interview",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: "Authentication required",;
        description: "Please log in to schedule an interview",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive"}),;
      return;

    }
    setIsSubmitting(true);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc




}
const formSchema = z.object({}
  date: z.date({"
    required_error: "Please select a date for the interview."}).refine(date => date > new Date(), {"
    message: "Interview date must be in the future"
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  });
  time: z.string().min(1, "Please select a time for the interview.");
  duration: z.string().min(1, "Please select the interview duration.");
  platform: z.string().min(1, "Please select a meeting platform.");
  meetingLink: z.string().optional()
  title: z.string().min(3, "Please provide a brief title for the interview.");
  notes: z.string().optional()})
export function InterviewRequestForm({ talent, onClose, userDetails }: InterviewRequestFormProps) {
  const { requestInterview } = useInterviews();
  const [isSubmitting, setIsSubmitting] = useState(false);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }),
  time: z.string().min(1, "Please select a time for the interview."),
  duration: z.string().min(1, "Please select the interview duration."),
=======

  }),"
  time: z.string().min(1, "Please select a time for the interview."),"
  duration: z.string().min(1, "Please select the interview duration."),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  platform: z.string().min(1, "Please select a meeting platform."),
  meetingLink: z.string().optional(),"
  title: z.string().min(3, "Please provide a brief title for the interview."),
  notes: z.string().optional()}),

<<<<<<< HEAD
<<<<<<< HEAD
=======
export function InterviewRequestForm({ talent, onClose, userDetails }: InterviewRequestFormProps) {;
  const { requestInterview } = useInterviews();
  const [isSubmitting, setIsSubmitting] = useState(false);
export function InterviewRequestForm({ talent, onClose, userDetails }: InterviewRequestFormProps) {
  const { requestInterview } = useInterviews(),
  const [isSubmitting, setIsSubmitting] = useState(false),
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

}
const formSchema = z.object({
  date: z.date({
    required_error: "Please select a date for the interview."}).refine(date => date > new Date(), {
    message: "Interview date must be in the future"

  }),
  time: z.string().min(1, "Please select a time for the interview."),
  duration: z.string().min(1, "Please select the interview duration."),
  platform: z.string().min(1, "Please select a meeting platform."),
  meetingLink: z.string().optional(),
  title: z.string().min(3, "Please provide a brief title for the interview."),
  notes: z.string().optional()}),


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const form = useForm<z.infer<typeof formSchema>>({
=======




  const form = useForm<z.infer<typeof formSchema>>({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    resolver: zodResolver(formSchema)
    defaultValues: {}`
      title: `Interview with ${talent.full_name}`"
      duration: "30""
      platform: "zoom""
      notes: """
      meetingLink: ""}})
  async function onSubmit(values: z.infer<typeof formSchema>) {}
    if (!userDetails?.id) {}
      toast({"
        title: "Authentication required""
        description: "Please log in to schedule an interview""
        variant: "destructive"})
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    try {
      // Combine date and time
      const dateTimeString = `${format(values.date, 'yyyy-MM-dd')}T${values.time}:00`;
      const scheduledDate = new Date(dateTimeString);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      // Calculate end time based on duration
<<<<<<< HEAD
      const durationMinutes = parseInt(values.duration);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      // Calculate end time based on duration
      const durationMinutes = parseInt(values.duration);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    setIsSubmitting(true),

    try {
      // Combine date and time
      const dateTimeString = `${format(values.date, 'yyyy-MM-dd')}T${values.time}:00`,
      const scheduledDate = new Date(dateTimeString),
      
      // Calculate end time based on duration
      const durationMinutes = parseInt(values.duration),
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      await requestInterview({
        talent_id: talent.id
        client_id: userDetails.id
=======

    try {}
      // Combine date and time;`
      const dateTimeString = `${format(values.date, 'yyyy-MM-dd')}T${values.time}:00`;
      const scheduledDate = new Date(dateTimeString);
      // Calculate end time based on duration;
      await requestInterview({}
        talent_id: talent.id;
        client_id: userDetails.id;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        scheduled_date: scheduledDate.toISOString()
        duration_minutes: durationMinutes;
        notes: values.notes;
        meeting_platform: values.platform as any;
        meeting_link: values.meetingLink"
        interview_type: "video"
<<<<<<< HEAD
        title: values.title
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



      await requestInterview({
        talent_id: talent.id
        client_id: userDetails.id
        scheduled_date: scheduledDate.toISOString()
        duration_minutes: durationMinutes
        notes: values.notes
        meeting_platform: values.platform as any
        meeting_link: values.meetingLink
        interview_type: "video"
        title: values.title
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


      }),



<<<<<<< HEAD
<<<<<<< HEAD
=======
      });
      }),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      toast({
=======
      // Calculate end time based on duration      toast({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      // Calculate end time based on duration      toast({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      toast({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        title: "Interview requested"
        description: `Your interview request with ${talent.full_name} has been sent.`})
      onClose()
    } catch (error) {
      console.error("Failed to schedule interview:", error);
      console.error("Failed to schedule interview:", error),
      toast({
        title: "Failed to schedule interview"
        description: "An error occurred while scheduling the interview. Please try again."
        variant: "destructive"})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    }
    setIsSubmitting(true);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components / ui / form';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components / ui / select';
import { Calendar } from '@/components / ui / calendar';
import { Popover, PopoverTrigger, PopoverContent } from '@/components / ui / popover';
import { TalentProfile } from '@/types / talent';
import { UserProfile } from '@/types / auth';
import { cn } from '@/lib / utils';
import { zod_resolver } from '@hookform / resolvers / zod';
import { use_form } from './react - hook - form';
import { z } from './zod';
import { format, add_days } from './date - fns';
import { CalendarIcon, Check, Clock } from './lucide-react';
import { toast } from '@/components / ui / use - toast';
=======
        title: values.title;
      toast({"
        title: "Interview requested"`
        description: `Your interview request with ${talent.full_name} has been sent.`})
      onClose()
    } catch (error) {}
"
      console.error("Failed to schedule interview:", error),

      toast({"
        title: "Failed to schedule interview""
        description: "An error occurred while scheduling the interview. Please try again.""
        variant: "destructive"})


'
import React, { useState } from './react';'
import { Button } from '@/components / ui / button';'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components / ui / form';'
import { Input } from '@/components / ui / input';'
import { Textarea } from '@/components / ui / textarea';'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components / ui / select';'
import { Calendar } from '@/components / ui / calendar';'
import { Popover, PopoverTrigger, PopoverContent } from '@/components / ui / popover';'
import { TalentProfile } from '@/types / talent';'
import { UserProfile } from '@/types / auth';'
import { cn } from '@/lib / utils';'
import { zod_resolver } from '@hookform / resolvers / zod';'
import { use_form } from './react - hook - form';'
import { z } from './zod';'
import { format, add_days } from './date - fns';'
import { CalendarIcon, Check, Clock } from './lucide-react';'
import { toast } from '@/components / ui / use - toast';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { use_interviews } from '@/hooks / use_interviews';
interface InterviewRequestFormProps {}
  talent: TalentProfile,
  on_close: () => void,
  user_details?: UserProfile;
}
const form_schema = z.object ({}
  date: z.date ({"
    required_error: "Please select a date for the interview."}).refine (date => date > new Date (), {"
    message: "Interview date must be in the future";
  });"
  time: z.string ().min (1, "Please select a time for the interview.");"
  duration: z.string ().min (1, "Please select the interview duration.");"
  platform: z.string ().min (1, "Please select a meeting platform.");
  meeting_link: z.string ().optional (),"
  title: z.string ().min (3, "Please provide a brief title for the interview.");
  notes: z.string ().optional ()}),
export /**;
 * InterviewRequestForm - Function description;
 */
function InterviewRequestForm() {}
  const { request_interview } = use_interviews ();
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const form = use_form < z.infer < typeof form_schema>>({}
    resolver: zod_resolver (form_schema),
    default_values: {}`
      title: `Interview with ${talent.full_name}`,"
      duration: "30","
      platform: "zoom","
      notes: "","
      meeting_link: ""}}),
  async /**
 * on_submit - Function description;
 */
function on_submit() {}
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Authentication required","
        description: "Please log in to schedule an interview","
        variant: "destructive"}),
      return;
    }
    setIsSubmitting (true);
;
    try {}
      // Combine date and time;'`
      const dateTimeString = `${format (values.date, 'yyyy - MM - dd')}T${values.time}:00`;
      const scheduled_date = new Date (dateTimeString);
;
      // Calculate end time based on duration;
      const duration_minutes = parse_int (values.duration);
;
      await request_interview ({}
        talent_id: talent.id,
        client_id: user_details.id,
        scheduled_date: scheduled_date.toISOString (),
        duration_minutes: duration_minutes,
        notes: values.notes,
        meeting_platform: values.platform as any,
        meeting_link: values.meeting_link,"
        interview_type: "video",
        title: values.title;
      });
;
      toast ({"
        title: "Interview requested",`
        description: `Your interview request with ${talent.full_name} has been sent.`}),
      on_close ();
    } catch (error) {"
      console.error ("Failed to schedule interview:", error);
      toast ({"
        title: "Failed to schedule interview","
        description: "An error occurred while scheduling the interview. Please try again.","
        variant: "destructive"});
    }
    setIsSubmitting(true);
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } finally {
      setIsSubmitting (false);
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
    } finally {
      setIsSubmitting(false)
    }
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const timeSlots = [

=======
=======

  const timeSlots = [
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    "09:00", "09:30", "10:00", "10:30", "11:00", "11: 30"
    "12:00", "12:30", "13:00", "13:30", "14:00", "14: 30"
    "15:00", "15:30", "16:00", "16:30", "17:00", "17: 30"
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    } finally {}
      setIsSubmitting (false);
    }
  }

  const timeSlots = ["
    "09:00", "09:30", "10:00", "10:30", "11:00", "11: 30""
    "12:00", "12:30", "13:00", "13:30", "14:00", "14: 30""
    "15:00", "15:30", "16:00", "16:30", "17:00", "17: 30""
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30","
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30","
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30","
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30","
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30","
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    "18:00", "18:30", "19:00", "19:30", "20: 00"
  ]
  return (
    <Form {...form}>"
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">"
        <div className="flex items-center mb-6">"
          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4">
            <img"
              src={talent.profile_picture_url |"/placeholder.svg"}
              alt={talent.full_name}"
              className="h-full w-full object-cover"
            />
          </div>
          <div>"
            <h3 className="text-lg font-medium text-white">{talent.full_name}</h3>"
            <p className="text-sm text-zion-slate-light">{talent.professional_title}</p>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",


    "18:00", "18:30", "19:00", "19:30", "20: 00"
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    try {;
      // Combine date and time;'`
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
        meeting_link: values && values.meetingLink,;"
        interview_type: "video",;
        title: values && values.title;
      });
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title: "Interview requested",,
  description: `Your interview request with ${talent && talent.full_name} has been sent.`}),;
=======
      toast({;"
        title: "Interview requested",;`
        description: `Your interview request with ${talent && talent.full_name} has been sent.`}),;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: "Interview requested",;
        description: `Your interview request with ${talent && talent.full_name} has been sent.`}),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      onClose();
    } catch (error) {;"
      console && console.error("Failed to schedule interview:", error);
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title: "Failed to schedule interview",,
  description: "An error occurred while scheduling the interview. Please try again.",;
=======
      toast({;"
        title: "Failed to schedule interview",;"
        description: "An error occurred while scheduling the interview. Please try again.",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: "Failed to schedule interview",;
        description: "An error occurred while scheduling the interview. Please try again.",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  }
  const timeSlots = [;"
    "09:00", "09:30", "10:00", "10:30", "11:00", "11: 30",;"
    "12:00", "12:30", "13:00", "13:30", "14:00", "14: 30",;"
    "15:00", "15:30", "16:00", "16:30", "17:00", "17: 30",;"
    "18:00", "18:30", "19:00", "19:30", "20: 00";
  ],;
  return (
    <Form {...form}>;"
      <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-5">;"
        <div className="flex items-center mb-6">;"
          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4">;
            <img"
              src={talent && talent.profile_picture_url || "/placeholder && placeholder.svg"} 
              alt={talent && talent.full_name} "
              className="h-full w-full object-cover"
            />;
          </div>;
          <div>;"
            <h3 className="text-lg font-medium text-white">{talent && talent.full_name}</h3>;"
            <p className="text-sm text-zion-slate-light">{talent && talent.professional_title}</p>;
          </div>;
        </div>;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <FormField
          control={form && form.control}
=======
        <FormField;
          control={form && form.control}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          name="title"
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Interview Title</FormLabel>;
  const time_slots = [;"
    "09:00", "09:30", "10:00", "10:30", "11:00", "11: 30","
    "12:00", "12:30", "13:00", "13:30", "14:00", "14: 30","
    "15:00", "15:30", "16:00", "16:30", "17:00", "17: 30","
    "18:00", "18:30", "19:00", "19:30", "20: 00";
  ],
  return (
<<<<<<< HEAD
    <Form {...form}>;
      <form on_submit={form.handle_submit (on_submit)} className="space - y-5">;
        <div className="flex items - center mb - 6">;
          <div className="flex - shrink - 0 h - 12 w - 12 rounded - full overflow - hidden mr - 4">;
            <img;
              src={talent.profile_picture_url || "/placeholder.svg"}
              alt={talent.full_name}
              className="h - full w - full object - cover";
            />;
          </div>;
          <div>;
<<<<<<< HEAD
            <h3 className="text - lg font - medium text-white">{talent.full_name}</h3>;
            <p className="text - sm text - zion - slate-light">{talent.professional_title}</p>;
=======
    <Form {...form}>;"
      <form on_submit={form.handle_submit (on_submit)} className="space - y-5">;"
        <div className="flex items - center mb - 6">;"
          <div className="flex - shrink - 0 h - 12 w - 12 rounded - full overflow - hidden mr - 4">;
            <img;"
              src={talent.profile_picture_url || "/placeholder.svg"}
              alt={talent.full_name}"
              className="h - full w - full object - cover";
            />;
          </div>;
          <div>;"
            <h3 className="text - lg font - medium text - white">{talent.full_name}</h3>;"
            <p className="text - sm text - zion - slate - light">{talent.professional_title}</p>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <h3 className="text - lg font - medium text - white">{talent.full_name}</h3>;
            <p className="text - sm text - zion - slate - light">{talent.professional_title}</p>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </div>;
        </div>;
        <FormField;
          control={form.control}"
          name="title";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Interview Title</FormLabel>;
<<<<<<< HEAD
<<<<<<< HEAD
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
import { UserProfile } from "@/types/auth",;
import { cn } from "@/lib/utils",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
import { z } from "zod",;
import { format, addDays } from "date-fns",;
import { CalendarIcon, Check, Clock } from "lucide-react",;
import { toast } from "@/components/ui/use-toast",;
import { useInterviews } from "@/hooks/useInterviews",;
;
interface InterviewRequestFormProps {;
  talent:TalentProfile,;
  onClose:() => void,;
  userDetails?:UserProfile;
}
;
const formSchema = z.object({;
  date:z.date({;
    required_error:"Please select a date for the interview."}).refine(date => date > new Date(), {;
    message:"Interview date must be in the future";
  }),;
  time:z.string().min(1, "Please select a time for the interview."),;
  duration:z.string().min(1, "Please select the interview duration."),;
  platform:z.string().min(1, "Please select a meeting platform."),;
  meetingLink:z.string().optional(),;
  title:z.string().min(3, "Please provide a brief title for the interview."),;
  notes:z.string().optional()}),;
;
export function InterviewRequestForm({ talent, onClose, userDetails } InterviewRequestFormProps) {;
  const { requestInterview } = useInterviews(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
;
  const form = useForm<z.infer<typeof formSchema>>({;
    resolver:zodResolver(formSchema),;
    defaultValues:{;
      title:`Interview with ${talent.full_name}`,;
      duration:"30",;
      platform:"zoom",;
      notes:"",;
      meetingLink:""}}),;
;
  async function onSubmit(values:z.infer<typeof formSchema>) {;
    if (!userDetails?.id) {;
      toast({;
        title:"Authentication required",;
        description:"Please log in to schedule an interview",;
        variant:"destructive"}),;
      return,;
    }
;
    setIsSubmitting(true),;
;
    try {;
      // Combine date and time;
      const dateTimeString = `${format(values.date, 'yyyy-MM-dd')}T${values.time} 00`,;
      const scheduledDate = new Date(dateTimeString),;
      ;
      // Calculate end time based on duration;
      const durationMinutes = parseInt(values.duration),;
;
      await requestInterview({;
        talent_id:talent.id,;
        client_id:userDetails.id,;
        scheduled_date:scheduledDate.toISOString(),;
        duration_minutes:durationMinutes,;
        notes:values.notes,;
        meeting_platform:values.platform as any,;
        meeting_link:values.meetingLink,;
        interview_type:"video",;
        title:values.title;
      }),;
;
      toast({;
        title:"Interview requested",;
        description:`Your interview request with ${talent.full_name} has been sent.`}),;
      onClose(),;
    } catch (error) {;
      console.error("Failed to schedule interview:", error),;
      toast({;
        title:"Failed to schedule interview",;
        description:"An error occurred while scheduling the interview. Please try again.",;
        variant:"destructive"}),;
    } finally {;
      setIsSubmitting(false),;
    }
  }
;
  const timeSlots = [;
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",;
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",;
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",;
    "18:00", "18:30", "19:00", "19:30", "20:00";
  ],;
;
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">;
        <div className="flex items-center mb-6">;
          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4">;
            <img ;
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
;
        <FormField;
          control={form.control}
          name="title";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Interview Title</FormLabel>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <FormControl>;
=======



              <FormControl>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <Input placeholder="Brief title for the interview" {...field} />;
              </FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <FormMessage />;


          <FormField;
            control={form && form.control}"
            name="date"

            render={({ field }) => (;"
=======
              <FormMessage />;

        />;

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

          <FormField
            control={form && form.control}
            name="date"
          <FormField
            control={form && form.control}
            name="date"
            render={({ field }) => (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <FormItem className="flex flex-col">;
                <FormLabel>Date</FormLabel>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <Button
                        variant="outline"
                        className={cn(

<<<<<<< HEAD
=======
<<<<<<< HEAD
                          "w-full pl-3 text-left font-normal";

                          "w-full pl-3 text-left font-normal",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                          !field.value && "text-muted-foreground"
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
                          "w-full pl-3 text-left font-normal",

"
                          !field.value && "text-muted-foreground"


                      <Button"
                        variant="outline"
                        className={cn("
                          !field.value && "text-muted-foreground"
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                          "w-full pl-3 text-left font-normal"
=======
              <FormMessage />;                          "w-full pl-3 text-left font-normal"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              <FormMessage />;                          "w-full pl-3 text-left font-normal"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
                          "w-full pl-3 text-left font-normal""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

                          "w-full pl-3 text-left font-normal",


                          !field.value && "text-muted-foreground"
                      <Button
                        variant="outline"
                        className={cn(
                          !field.value && "text-muted-foreground"
                          "w-full pl-3 text-left font-normal"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                          !field && field.value && "text-muted-foreground"
                        )}>;
                        {field && field.value ? (;"
                          format(field && field.value, "PPP");
                        ) : (;
                          <span>Pick a date</span>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        )}
<<<<<<< HEAD
=======


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                      </Button>;
                    </FormControl>;
                  </PopoverTrigger>;"
                  <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD
                    <Calendar
                      mode="single"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <FormField
=======

                      selected={field && field.value}
                      onSelect={field && field.onChange}

import React, { useState } from "react",;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full pl-3 text-left font-normal";

                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
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
=======
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date() |date > addDays(new Date(), 90)}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      selected={field && field.value}
                      onSelect={field && field.onChange}
"
import React, { useState } from "react",;"
import { Button } from "@/components/ui/button",;"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;"
import { Input } from "@/components/ui/input",;"
import { Textarea } from "@/components/ui/textarea",;"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select",;"
import { Calendar } from "@/components/ui/calendar",;"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover",;"
import { TalentProfile } from "@/types/talent",;"
import { UserProfile } from "@/types/auth",;"
import { cn } from "@/lib/utils",;"
import { zodResolver } from "@hookform/resolvers/zod",;"
import { useForm } from "react-hook-form",;"
import { z } from "zod",;"
import { format, addDays } from "date-fns",;"
import { CalendarIcon, Check, Clock } from "lucide-react",;"
import { toast } from "@/components/ui/use-toast",;"
import { useInterviews } from "@/hooks/useInterviews",;
interface InterviewRequestFormProps {;
  talent: TalentProfile,;
  onClose: () => void,;
  userDetails?: UserProfile;
}
;
const formSchema = z.object({;
  date: z.date({;"
    required_error: "Please select a date for the interview."}).refine(date => date > new Date(), {;"
    message: "Interview date must be in the future";
  }),;"
  time: z.string().min(1, "Please select a time for the interview."),;"
  duration: z.string().min(1, "Please select the interview duration."),;"
  platform: z.string().min(1, "Please select a meeting platform."),;
  meetingLink: z.string().optional(),;"
  title: z.string().min(3, "Please provide a brief title for the interview."),;
  notes: z.string().optional()}),;
export function InterviewRequestForm() { return null; }
  const { requestInterview } = useInterviews(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const form = useForm<z.infer<typeof formSchema>>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;`
      title: `Interview with ${talent.full_name}`,;"
      duration: "30",;"
      platform: "zoom",;"
      notes: "",;"
      meetingLink: ""}}),;
<<<<<<< HEAD
  async function onSubmit(values: z.infer<typeof formSchema>) {;
    if (!userDetails?.id) {;
      toast({;
        title: "Authentication required",,
  description: "Please log in to schedule an interview",;
=======
  async function onSubmit() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive"}),;
      return;
    }
;
    setIsSubmitting(true),;
    try {;
      // Combine date and time;'`
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
        meeting_link: values.meetingLink,;"
        interview_type: "video",;
        title: values.title;
      }),;
<<<<<<< HEAD
      toast({;
        title: "Interview requested",,
  description: `Your interview request with ${talent.full_name} has been sent.`}),;
=======
      toast({;"
        title: "Interview requested",;`
        description: `Your interview request with ${talent.full_name} has been sent.`}),;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      onClose();
    } catch (error) {;"
      console.error("Failed to schedule interview:", error),;
<<<<<<< HEAD
      toast({;
        title: "Failed to schedule interview",,
  description: "An error occurred while scheduling the interview. Please try again.",;
=======
      toast({;"
        title: "Failed to schedule interview",;"
        description: "An error occurred while scheduling the interview. Please try again.",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  }
;
  const timeSlots = [;"
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",;"
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",;"
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",;"
    "18:00", "18:30", "19:00", "19:30", "20: 00";
  ];
  return (;
    <Form {...form}>;"
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">;"
        <div className="flex items-center mb-6">;"
          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4">;
            <img;"
              src={talent.profile_picture_url || "/placeholder.svg"} ;
              alt={talent.full_name} ;"
              className="h-full w-full object-cover";
            />;
          </div>;
          <div>;"
            <h3 className="text-lg font-medium text-white">{talent.full_name}</h3>;"
            <p className="text-sm text-zion-slate-light">{talent.professional_title}</p>;
          </div>;
        </div>;
        <FormField;
          control={form.control}"
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interview Title</FormLabel>
              <FormControl>"
                <Input placeholder="Brief title for the interview" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />;"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <FormField;
            control={form.control}"
            name="date";
            render={({ field }) => (;"
              <FormItem className="flex flex-col">;
                <FormLabel>Date</FormLabel>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <FormControl>;
                      <Button;"
                        variant="outline";
                        className={cn(;"
                          "w-full pl-3 text-left font-normal";"
                          !field.value && "text-muted-foreground";
                        )}
                      >;
                        {field.value ? (;"
                          format(field.value, "PPP");
                        ) : (;
                          <span>Pick a date</span>;
                        )}"
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>"
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar"
                      mode="single"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                      selected={field.value}
                      onSelect={field.onChange}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                      disabled={(date) => date < new Date() |date > addDays(new Date(), 90)}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                      initialFocus;
<<<<<<< HEAD
                      className="p-3 pointer-events-auto";                    <Calendar;
=======


                    <Calendar;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                      className="p-3 pointer-events-auto";
                    <Calendar;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      mode="single";
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                      initialFocus;"
                      className="p-3 pointer-events-auto";
                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                      initialFocus;"
                      className="p-3 pointer-events-auto";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                    <Calendar
                      mode="single"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
                    <Calendar
                      mode="single"
                    />;
                  </PopoverContent>;
                </Popover>;
                <FormMessage />;

              </FormItem>;


            )}
          />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


                    <Calendar"
                      mode="single"

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    />;
                  </PopoverContent>;
                </Popover>;
                <FormMessage />;

<<<<<<< HEAD
              </FormItem>;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            )}
          />;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

          <FormField;
            control={form && form.control}"
            name="time"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Time</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
<<<<<<< HEAD
=======
              </FormItem>)}
          />;
          <FormField;
            control={form.control}"
            name="time";
            render={({ field }) => (
<<<<<<< HEAD
              <FormItem>;
                <FormLabel > Time</FormLabel>;
                <Select onValueChange={field.on_change} default_value={field.value}>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </FormItem>;            )}
          />;
;
          <FormField;
            control={form.control}
            name="time";
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Time</FormLabel>;
                <Select onValueChange={field.onChange} defaultValue={field.value}>;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <FormControl>;
                    <SelectTrigger>;"
                      <SelectValue placeholder="Select time" />;
                    </SelectTrigger>;
                  </FormControl>;


<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

          <FormField
            control={form && form.control}
=======

          <FormField;
            control={form && form.control}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            name="duration"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Duration</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
<<<<<<< HEAD
<<<<<<< HEAD
                  <SelectContent className="max-h-[300px]">;
=======


"
                  <SelectContent className="max - h-[300px]">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  <SelectContent className="max - h-[300px]">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    {time_slots.map ((time) => (
                      <SelectItem key={time} value={time}>;
                        {time}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>)}
          />;
<<<<<<< HEAD
        </div>;
<<<<<<< HEAD
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
=======
        </div>;"
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <FormField;
            control={form.control}"
            name="duration";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Duration</FormLabel>;
                <Select onValueChange={field.on_change} default_value={field.value}>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  <FormControl>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <SelectTrigger>;
=======



                  <FormControl>;
                    <SelectTrigger>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      <SelectValue placeholder="Select duration" />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;"
                    <SelectItem value="15">15 minutes</SelectItem>;"
                    <SelectItem value="30">30 minutes</SelectItem>;"
                    <SelectItem value="45">45 minutes</SelectItem>;"
                    <SelectItem value="60">60 minutes</SelectItem>;
                  </SelectContent>;
                </Select>;
                <FormMessage />;

<<<<<<< HEAD
          />;
<<<<<<< HEAD
=======


          <FormField;
            control={form && form.control}"
=======


          <FormField
            control={form && form.control}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            name="platform"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Platform</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
<<<<<<< HEAD



              </FormItem>)}
          />;
          <FormField;
            control={form.control}"
            name="platform";
            render={({ field }) => (



                  <FormControl>;
                    <SelectTrigger>;"
                      <SelectValue placeholder="Select platform" />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;"
                    <SelectItem value="zoom">Zoom</SelectItem>;


"
                    <SelectItem value="teams">Microsoft Teams</SelectItem>;"
=======
              </FormItem>)}
          />;
          <FormField;
            control={form.control}
            name="platform";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Platform</FormLabel>;
                <Select onValueChange={field.on_change} default_value={field.value}>;
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select platform" />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
                    <SelectItem value="zoom">Zoom</SelectItem>;

                    <SelectItem value="google - meet">Google Meet</SelectItem>;

                    <SelectItem value="teams">Microsoft Teams</SelectItem>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <SelectItem value="other">Other</SelectItem>;
                  </SelectContent>;
                </Select>;
                <FormMessage />;

<<<<<<< HEAD

          <FormField;
            control={form && form.control}"
            name="meetingLink"

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          />;
        </div>;

        {form && form.watch('platform') !== 'in-app' && (;

          <FormField
            control={form && form.control}
            name="meetingLink"
          <FormField
            control={form && form.control}
            name="meetingLink"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Meeting Link (Optional)</FormLabel>;
                <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Input;
                    placeholder={`Add your ${form.watch('platform')} link here`}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

                  <Input'`
                    placeholder={`Add your ${form && form.watch('platform')} link here`}
              </FormItem>)}
          />;
        </div>;'
        {form.watch ('platform') !== 'in - app' && (
          <FormField;
            control={form.control}"
            name="meeting_link";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Meeting Link (Optional)</FormLabel>;
                <FormControl>;
                  <Input;'`
                    placeholder={`Add your ${form.watch ('platform')} link here`}



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  <Input
                    placeholder={`Add your ${form && form.watch('platform')} link here`}
              </FormItem>)}
          />;
        </div>;
        {form.watch ('platform') !== 'in - app' && (
          <FormField;
            control={form.control}
            name="meeting_link";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Meeting Link (Optional)</FormLabel>;
                <FormControl>;
                  <Input;
                    placeholder={`Add your ${form.watch ('platform')} link here`}
                  <Input;
                    placeholder={`Add your ${form.watch('platform')} link here`}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;

<<<<<<< HEAD
          <FormField;
            control={form.control}"
=======
          <FormField
            control={form.control}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            name="meetingLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meeting Link (Optional)</FormLabel>
                <FormControl>
<<<<<<< HEAD
                  <Input'`
=======
                  <Input
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    placeholder={`Add your ${form.watch('platform')} link here`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======



<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <FormField
          control={form && form.control}
          name="notes"

<<<<<<< HEAD
<<<<<<< HEAD
=======
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes (Optional)</FormLabel>
              <FormControl>
                <Textarea
                <Textarea 
                  placeholder="Share what you'd like to discuss in this interview"
                  className="h-20"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-4 pt-4">
          <Button variant="outline" onClick={onClose} type="button">
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Scheduling..." : "Schedule Interview"}
          </Button>
        </div>
      </form>
    </Form>
  )

              </FormItem>;            )}
          />;
        )}
;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <FormField;
          control={form && form.control}"
          name="notes"


=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Notes (Optional)</FormLabel>;
              <FormControl>;

<<<<<<< HEAD

                <Textarea;
'"
                  placeholder="Share what you'd like to discuss in this interview""
                  className="h-20"

              </FormItem>)}
          />)}
        <FormField;
          control={form.control}"
=======
                <Textarea

                <Textarea 

                  placeholder="Share what you'd like to discuss in this interview"
                  className="h-20"
              </FormItem>)}
          />)}
        <FormField;
          control={form.control}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          name="notes";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Notes (Optional)</FormLabel>;
              <FormControl>;
<<<<<<< HEAD
                <Textarea;'"
                  placeholder="Share what you'd like to discuss in this interview";"
                  className="h - 20";

                  {...field}
                />;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                <Textarea;
                  placeholder="Share what you'd like to discuss in this interview";
                  className="h - 20";
                <Textarea ;
                  placeholder="Share what you'd like to discuss in this interview";
                  className="h-20";
                  {...field}
                />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </FormControl>;
              <FormMessage />;
<<<<<<< HEAD

        />;

        <div className="flex justify-end gap-4 pt-4">;
=======
"
        <div className="flex justify-end gap-4 pt-4">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <Button variant="outline" onClick={onClose} type="button">;
            Cancel;
          </Button>;"
          <Button type="submit" disabled={isSubmitting}>;
<<<<<<< HEAD
<<<<<<< HEAD
            {isSubmitting ? "Scheduling..." : "Schedule Interview"}          </Button>;
=======
            {isSubmitting ? "Scheduling..." : "Schedule Interview"}
          </Button>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </div>;
      </form>;
    </Form>;
  );
}
<<<<<<< HEAD
=======

          </Button>;
        </div>;
      </form>;
    </Form>;


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            )}
          />
        )}'"
                  placeholder="Share what you'd like to discuss in this interview""
                  className="h-20"
                  {...field}
<<<<<<< HEAD
            </FormItem>)}
        />;
<<<<<<< HEAD
        <div className="flex justify - end gap - 4 pt-4">;
=======

            </FormItem>)}
        />;"
        <div className="flex justify - end gap - 4 pt - 4">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <div className="flex justify - end gap - 4 pt - 4">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Button variant="outline" on_click={on_close} type="button">;
            Cancel;
          </Button>;"
          <Button type="submit" disabled={is_submitting}>;"
            {is_submitting ? "Scheduling..." : "Schedule Interview"}
          </Button>;
        </div>;
      </form>;
    </Form>);
<<<<<<< HEAD
}

}
;

  ),; interface InterviewRequestFormProps {
=======


  ),; interface InterviewRequestFormProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  talent: TalentProfile;
onClose: () => void;
userDetails?: UserProfile;
}const formSchema = z.object ({}
  date: z.date ({"
  required error: "Please select a date for the interview." 
}) .refine (date => date > new Date (), {"
  message: "Interview date must be in the future" 
});"
time: z.string () .min (1, "Please select a time for the interview.");"
duration: z.string () .min (1, "Please select the interview duration.");"
platform: z.string () .min (1, "Please select a meeting platform.");
const form = useForm<z.infer<typeof formSchema>> ({}
  resolver: zodResolver (formSchema), defaultValues: {}`
  title: `Interview with $ {}
  talent.full name;`
}`;
async function onSubmit (values: z.infer<typeof formSchema>) {}
  if (!userDetails?.id) {}
  toast ({}
  return;
}setIsSubmitting (true);
}finally {}
  setIsSubmitting (false) 
}

}
;
"
}const timeSlots = [ "09:00", "09:30", "10:00", "10:30", "11:00", "11:30";"
"12:00", "12:30", "13:00", "13:30", "14:00", "14:30";"
"15:00", "15:30", "16:00", "16:30", "17:00", "17:30";"
"18:00", "18:30", "19:00", "19:30", "20: 00" ];"
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) "
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus className="p-3 pointer-events-auto" /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) 
}/> <FormField <FormLabel>Time</FormLabel> <Select onValueChange= {}
  field.onChange;
}defaultValue= {}
  field.value "
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select time" /> </SelectTrigger> </FormControl> </SelectItem>) ) 
}</SelectContent> </Select> <FormMessage /> </FormItem>) "
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormItem> <FormLabel>Duration</FormLabel> <Select onValueChange= {}
  field.onChange;
}defaultValue= {}
  field.value "
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select duration" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="15" >15 minutes</SelectItem> <SelectItem value="30" >30 minutes</SelectItem> <SelectItem value="45" >45 minutes</SelectItem> <SelectItem value="60" >60 minutes</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Platform</FormLabel> <Select onValueChange= {}
  field.onChange;
}defaultValue= {}
  field.value "
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select platform" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="zoom" >Zoom</SelectItem> <SelectItem value="google-meet" >Google Meet</SelectItem> <SelectItem value="teams" >Microsoft Teams</SelectItem> <SelectItem value="other" >Other</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>) 
}/> </div> {'
  form.watch ('platform') !== 'in-app' && (<FormField control= {}
  form.control;
}<FormItem> <FormLabel>Meeting Link (Optional) </FormLabel> <FormControl> <Input placeholder= {}`
  `Add your $ {'
  form.watch ('platform') `
}link here` 
}{}
  ...field;
}/> </FormControl> <FormMessage /> </FormItem>) 
}/>) 
}<FormField <FormItem> <FormLabel>Notes (Optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) 
}/> </Button> </div> </form> </Form>) 
}
}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


}

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
