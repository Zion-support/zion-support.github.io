<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface InterviewRequestFormProps {

  talent: TalentProfile
  onClose: () => void
  userDetails?: UserProfile

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
interface InterviewRequestFormProps {
<<<<<<< HEAD
  }
  "talent": TalentProfile;
    "onClose": () => void,
userDetails?: UserProfile,
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
import {useInterviews} from "@/hooks/useInterviews";"
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
  talent: TalentProfile,
  onClose: () => void,
  userDetails?: UserProfile
}

  talent: TalentProfile
  onClose: () => void
  userDetails?: UserProfile
=======

<<<<<<< HEAD
=======
  talent: TalentProfile
  onClose: () => void
  userDetails?: UserProfile
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
interface InterviewRequestFormProps {;
  }
  "talent": TalentProfile,;
  "onClose": () => void,;
  userDetails?: UserProfile;
}
const formSchema = z && z.object({;
  }
  "date": z && z.date({;
    }
    "required_error": "Please select a date for the interview."}).refine(date => date > new Date(), {;"
    }
    "message": "Interview date must be in the future";"
  });
  "time": z && z.string().min(1, "Please select a time for the interview.");"
  "duration": z && z.string().min(1, "Please select the interview duration.");"
  "platform": z && z.string().min(1, "Please select a meeting platform.");"
  "meetingLink": z && z.string().optional(),;
  "title": z && z.string().min(3, "Please provide a brief title for the interview.");"
  "notes": z && z.string().optional()}),;
export function InterviewRequestForm(): any ({ talent, onClose, userDetails }: InterviewRequestFormProps) {;
  }
  const { requestInterview } = useInterviews();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z && z.infer<typeof formSchema>>({;
    }
    "resolver": zodResolver(formSchema),;
    "defaultValues": {;
      }
      "title": `Interview with ${talent && talent.full_name}`,;`      "duration": "30",;"
      "platform": "zoom",;"
      "notes": "",;"
      "meetingLink": ""}),;"
  async function onSubmit(): any ("values": z && z.infer<typeof formSchema>) {;
    }
    if (!userDetails?.id) {;
      }
      toast({;
        }
        "title": "Authentication required",,"
  "description": "Please log in to schedule an interview",;"
        "variant": "destructive"}),;"
      return;

    }
    setIsSubmitting(true);
<<<<<<< HEAD
=======

<<<<<<< HEAD
  }),
  time: z.string().min(1, "Please select a time for the interview."),
  duration: z.string().min(1, "Please select the interview duration."),

  platform: z.string().min(1, "Please select a meeting platform."),
  meetingLink: z.string().optional(),"
  title: z.string().min(3, "Please provide a brief title for the interview."),
  notes: z.string().optional()}),

  const form = useForm<z.infer<typeof formSchema>>({

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

=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
}
const formSchema = z.object({
  date: z.date({
    required_error: "Please select a date for the interview."}).refine(date => date > new Date(), {
    message: "Interview date must be in the future"
  const form = useForm<z.infer<typeof formSchema>>({
    }
    "resolver": zodResolver(formSchema)
    "defaultValues": {
      }
      "title": `Interview with ${talent.full_name}``      "duration": "duration","
    "platform": "zoom""
      "notes": """
      "meetingLink": ""})"
  async function onSubmit() {
    }
    if (!userDetails?.id) {
      }
      toast({
        }
        "title": "Authentication required""
        "description": "Please log in to schedule an interview""
"variant": "destructive"});"
return;
    }

    try {
      // Combine date and time
}
const dateTimeString = `${format(values.date, 'yyyy-MM-dd')}T${values.time}:00`;`      const scheduledDate = new Date(dateTimeString);
      // Calculate end time based on duration      toast({
        }
        "title": "Interview requested""
        "description": `Your interview request with ${talent.full_name} has been sent.`})`      onClose()
    } catch (error) {
      }
      console.error("Failed to schedule "interview":", error),      console.error("Failed to schedule "interview":", error),"
      toast({
        }
        "title": "Failed to schedule interview""
        "description": "An error occurred while scheduling the interview. Please try again.""
"variant": "destructive"});"
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
import { use_interviews } from '@/hooks / use_interviews';'
interface InterviewRequestFormProps {
  }
  "talent": TalentProfile,
  "on_close": () => void,
  user_details?: UserProfile;
}
const form_schema = z.object ({
  }
  "date": z.date ({
    }
    "required_error": "Please select a date for the interview."}).refine (date => date > new Date (), {"
    }
    "message": "Interview date must be in the future";"
  });
  "time": z.string ().min (1, "Please select a time for the interview.");"
  "duration": z.string ().min (1, "Please select the interview duration.");"
  "platform": z.string ().min (1, "Please select a meeting platform.");"
  "meeting_link": z.string ().optional (),
  "title": z.string ().min (3, "Please provide a brief title for the interview.");"
  "notes": z.string ().optional ()}),
export /**
 * InterviewRequestForm - Function description
 */
function InterviewRequestForm() {
  }
  const { request_interview } = use_interviews ();
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const form = use_form < z.infer < typeof form_schema>>({
    }
    "resolver": zod_resolver (form_schema),
    "default_values": {
      }
      "title": `Interview with ${talent.full_name}`,`      "duration": "30","
      "platform": "zoom","
      "notes": "","
      "meeting_link": ""}),"
  async /**
 * on_submit - Function description
 */
function on_submit() {
    // Check condition
}
if ( {) {
  $2
}
      toast ({
        }
        "title": "Authentication required","
        "description": "Please log in to schedule an interview","
"variant": "destructive"}),;"
      return;
    }
    setIsSubmitting (true);
;
    try {
      // Combine date and time;
      }
      const dateTimeString = `${format (values.date, 'yyyy - MM - dd')}T${values.time}:00`;`      const scheduled_date = new Date (dateTimeString);
;
      // Calculate end time based on duration;
      const duration_minutes = parse_int (values.duration);
;
      await request_interview ({
        }
        "talent_id": talent.id,
        "client_id": user_details.id,
        "scheduled_date": scheduled_date.toISOString (),
        "duration_minutes": duration_minutes,
        "notes": values.notes,
        "meeting_platform": values.platform as any,
        "meeting_link": values.meeting_link,
        "interview_type": "video","
        "title": values.title;
      });
;
      toast ({
        }
        "title": "Interview requested","
        "description": `Your interview request with ${talent.full_name} has been sent.`}),`      on_close ();
    } catch (error) {
      }
      console.error ("Failed to schedule "interview":", error);"
      toast ({
        }
        "title": "Failed to schedule interview","
        "description": "An error occurred while scheduling the interview. Please try again.","
        "variant": "destructive"});"
    }
    setIsSubmitting(true);
    } finally {
      }
      setIsSubmitting (false);
    }
  }
    try {;
      // Combine date and time;
      }
      const dateTimeString = `${format(values && values.date, 'yyyy-MM-dd')}T${values && values.time}:00`;`      const scheduledDate = new Date(dateTimeString);
      // Calculate end time based on duration;
      const durationMinutes = parseInt(values && values.duration);
      await requestInterview({;
        }
        "talent_id": talent && talent.id,;
        "client_id": userDetails && userDetails.id,;
        "scheduled_date": scheduledDate && scheduledDate.toISOString(),;
        "duration_minutes": durationMinutes,;
        "notes": values && values.notes,;
        "meeting_platform": values && values.platform as any,;
        "meeting_link": values && values.meetingLink,;
        "interview_type": "video",;"
        "title": values && values.title;
      });
      toast({;
        }
        "title": "Interview requested",,"
  "description": `Your interview request with ${talent && talent.full_name} has been sent.`}),;`      onClose();
    } catch (error) {;
      }
      console && console.error("Failed to schedule "interview":", error);"
      toast({;
        }
        "title": "Failed to schedule interview",,"
  "description": "An error occurred while scheduling the interview. Please try again.",;"
        "variant": "destructive"});"
    } finally {;
      }
      setIsSubmitting(false);
    }
  }
  const timeSlots = [;
    ""09":00", ""09":30", ""10":00", ""10":30", ""11":00", ""11": 30",;"
    ""12":00", ""12":30", ""13":00", ""13":30", ""14":00", ""14": 30",;"
    ""15":00", ""15":30", ""16":00", ""16":30", ""17":00", ""17": 30",;"
    ""18":00", ""18":30", ""19":00", ""19":30", ""20": 00";"
  ],;
return (;
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-5">;"
        <div className="flex items-center mb-6">;"
          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4">;"
            <img,
src={talent && talent.profile_picture_url || "/placeholder && placeholder.svg"} "
              alt={talent && talent.full_name} 
              className="h-full w-full object-cover"" />;
          </div>;
          <div>;
            <h3 className="text-lg font-medium text-white">{talent && talent.full_name}</h3>;"
            <p className="text-sm text-zion-slate-light">{talent && talent.professional_title}</p>;"
          </div>;
        </div>;
        <FormField,
control={form && form.control}
          name="title""
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Interview Title</FormLabel>;
  const time_slots = [;
    ""09":00", ""09":30", ""10":00", ""10":30", ""11":00", ""11": 30","
    ""12":00", ""12":30", ""13":00", ""13":30", ""14":00", ""14": 30","
    ""15":00", ""15":30", ""16":00", ""16":30", ""17":00", ""17": 30","
    ""18":00", ""18":30", ""19":00", ""19":30", ""20": 00";"
  ],
return (;
    <Form {...form}>;
      <form on_submit={form.handle_submit (on_submit)} className="space-y-5">;"
        <div className="flex items - center mb-6">;"
          <div className="flex - shrink - 0 h - 12 w - 12 rounded - full overflow - hidden mr-4">;"
            <img;
              src={talent.profile_picture_url || "/placeholder.svg"}"
              alt={talent.full_name}
              className="h - full w - full object-cover";" />;
          </div>;
          <div>;
            <h3 className="text - lg font - medium text-white">{talent.full_name}</h3>;"
            <p className="text - sm text - zion - slate-light">{talent.professional_title}</p>;"
          </div>;
        </div>;
        <FormField;
          control={form.control}
          name="title";"
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Interview Title</FormLabel>;
              <FormControl>;
                <Input placeholder="Brief title for the interview" {...field} />;"
              </FormControl>;
              <FormMessage />;                          "w-full pl-3 text-left font-normal""
                          !field && field.value && "text-muted-foreground""
                        )}>;
                        {field && field.value ? (;
                          }
                          format(field && field.value, "PPP");"
                        ) : (;
                          <span>Pick a date</span>;
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;"
                      </Button>;
                    </FormControl>;
                  </PopoverTrigger>;
                  <PopoverContent className="w-auto p-0" align="start">;"
                    <Calendar,
mode="single""
                      selected={field && field.value}
                      onSelect={field && field.onChange}
import React, { useState } from "react";"
import { Button } from "@/components/ui/button";"
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
import { useInterviews } from "@/hooks/useInterviews",;"
interface InterviewRequestFormProps {;
  }
  "talent": TalentProfile,;
  "onClose": () => void,;
  userDetails?: UserProfile;
}
;
const formSchema = z.object({;
  }
  "date": z.date({;
    }
    "required_error": "Please select a date for the interview."}).refine(date => date > new Date(), {;"
    }
    "message": "Interview date must be in the future";"
  }),;
  "time": z.string().min(1, "Please select a time for the interview."),;"
  "duration": z.string().min(1, "Please select the interview duration."),;"
  "platform": z.string().min(1, "Please select a meeting platform."),;"
  "meetingLink": z.string().optional(),;
  "title": z.string().min(3, "Please provide a brief title for the interview."),;"
  "notes": z.string().optional()}),;
export function InterviewRequestForm() {;
  }
  const { requestInterview } = useInterviews(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const form = useForm<z.infer<typeof formSchema>>({;
    }
    "resolver": zodResolver(formSchema),;
    "defaultValues": {;
      }
      "title": `Interview with ${talent.full_name}`,;`      "duration": "30",;"
      "platform": "zoom",;"
      "notes": "",;"
      "meetingLink": ""}),;"
  async function onSubmit() {;
    }
    if (!userDetails?.id) {;
      }
      toast({;
        }
        "title": "Authentication required",,"
  "description": "Please log in to schedule an interview",;"
        "variant": "destructive"}),;"
      return;
    }
;
    setIsSubmitting(true),;
    try {;
      // Combine date and time;
      }
      const dateTimeString = `${format(values.date, 'yyyy-MM-dd')}T${values.time}:00`,;`      const scheduledDate = new Date(dateTimeString),;
      // Calculate end time based on duration;
      const durationMinutes = parseInt(values.duration),;
      await requestInterview({;
        }
        "talent_id": talent.id,;
        "client_id": userDetails.id,;
        "scheduled_date": scheduledDate.toISOString(),;
        "duration_minutes": durationMinutes,;
        "notes": values.notes,;
        "meeting_platform": values.platform as any,;
        "meeting_link": values.meetingLink,;
        "interview_type": "video",;"
        "title": values.title;
      }),;
      toast({;
        }
        "title": "Interview requested",,"
  "description": `Your interview request with ${talent.full_name} has been sent.`}),;`      onClose();
    } catch (error) {;
      }
      console.error("Failed to schedule "interview":", error),;"
      toast({;
        }
        "title": "Failed to schedule interview",,"
  "description": "An error occurred while scheduling the interview. Please try again.",;"
        "variant": "destructive"});"
    } finally {;
      }
      setIsSubmitting(false);
    }
  }
;
  const timeSlots = [;
    ""09":00", ""09":30", ""10":00", ""10":30", ""11":00", ""11":30",;"
    ""12":00", ""12":30", ""13":00", ""13":30", ""14":00", ""14":30",;"
    ""15":00", ""15":30", ""16":00", ""16":30", ""17":00", ""17":30",;"
    ""18":00", ""18":30", ""19":00", ""19":30", ""20": 00";"
  ];
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">;"
        <div className="flex items-center mb-6">;"
          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4">;"
            <img;
              src={talent.profile_picture_url || "/placeholder.svg"} ;"
              alt={talent.full_name} ;
              className="h-full w-full object-cover";" />;
          </div>;
          <div>;
            <h3 className="text-lg font-medium text-white">{talent.full_name}</h3>;"
            <p className="text-sm text-zion-slate-light">{talent.professional_title}</p>;"
          </div>;
        </div>;
        <FormField;
          control={form.control}
          name="title""
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interview Title</FormLabel>
              <FormControl>
                <Input placeholder="Brief title for the interview" {...field} />"
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />;
        <div className="grid grid-cols-1 "md":grid-cols-2 gap-4">;"
          <FormField;
            control={form.control}
            name="date";"
            render={({ field }) => (;
              <FormItem className="flex flex-col">;"
                <FormLabel>Date</FormLabel>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <FormControl>;
                      <Button;
                        variant="outline";"
                        className={cn(;
                          "w-full pl-3 text-left font-normal";"
                          !field.value && "text-muted-foreground";"
                        )}
                      >;
                        {field.value ? (;
                          }
                          format(field.value, "PPP");"
                        ) : (;
                          <span>Pick a date</span>;
      meetingLink: ""}),

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!userDetails?.id) {
      toast($2);
      return
    }

    setIsSubmitting($2);
    try {
      // Combine date and time
      const dateTimeString = `${format(values.date, 'yyyy-MM-dd')}T${values.time}:00`,
      const scheduledDate = new Date($2);
      // Calculate end time based on duration
      const durationMinutes = parseInt($2);
      await requestInterview($2);
        duration_minutes: durationMinutes,
        notes: values.notes,
        meeting_platform: values.platform as any,
        meeting_link: values.meetingLink,
        interview_type: "video",
        title: values.title
      }),

      toast($2);
      onClose()
    } catch (error) {
      console.error($2);
      toast({
        title: "Failed to schedule interview",
        description: "An error occurred while scheduling the interview. Please try again.",
        variant: "destructive"})
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }),
  time: z.string().min(1, "Please select a time for the interview."),
  duration: z.string().min(1, "Please select the interview duration."),

  platform: z.string().min(1, "Please select a meeting platform."),
  meetingLink: z.string().optional(),"
  title: z.string().min(3, "Please provide a brief title for the interview."),
  notes: z.string().optional()}),

<<<<<<< HEAD
=======
<<<<<<< HEAD
export function InterviewRequestForm({ talent, onClose, userDetails }: InterviewRequestFormProps) {;
  const { requestInterview } = useInterviews();
  const [isSubmitting, setIsSubmitting] = useState(false);
export function InterviewRequestForm({ talent, onClose, userDetails }: InterviewRequestFormProps) {
  const { requestInterview } = useInterviews(),
  const [isSubmitting, setIsSubmitting] = useState(false),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const form = useForm<z.infer<typeof formSchema>>({

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
=======
<<<<<<< HEAD

    setIsSubmitting(true);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    try {
      // Combine date and time
      const dateTimeString = `${format(values.date, 'yyyy-MM-dd')}T${values.time}:00`;
      const scheduledDate = new Date(dateTimeString);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      // Calculate end time based on duration
      const durationMinutes = parseInt(values.duration);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    setIsSubmitting(true),

    try {
      // Combine date and time
      const dateTimeString = `${format(values.date, 'yyyy-MM-dd')}T${values.time}:00`,
      const scheduledDate = new Date(dateTimeString),
      
      // Calculate end time based on duration
      const durationMinutes = parseInt(values.duration),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      await requestInterview({
        talent_id: talent.id
        client_id: userDetails.id

        scheduled_date: scheduledDate.toISOString()
        duration_minutes: durationMinutes;
        notes: values.notes;
        meeting_platform: values.platform as any;
        meeting_link: values.meetingLink"
        interview_type: "video"

      }),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
      });
      }),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      toast({

        title: "Interview requested"
        description: `Your interview request with ${talent.full_name} has been sent.`})
      onClose()
    } catch (error) {
<<<<<<< HEAD
      console.error("Failed to schedule interview:", error);
      console.error("Failed to schedule interview:", error),
=======
<<<<<<< HEAD
      console.error("Failed to schedule interview:", error),
=======
      console.error("Failed to schedule interview:", error);
<<<<<<< HEAD
      console.error("Failed to schedule interview:", error),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      toast({
        title: "Failed to schedule interview"
        description: "An error occurred while scheduling the interview. Please try again."
        variant: "destructive"})
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
    }
    setIsSubmitting(true);
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
    setIsSubmitting(true);

  const timeSlots = [

<<<<<<< HEAD
=======
=======
    } finally {
      setIsSubmitting (false);
    }
  }
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
    } finally {
      setIsSubmitting(false)
    }
  }
  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20: 00"
  ],

  return (
    <Form {...form}>
      <form onSubmit = $2;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    "09:00", "09:30", "10:00", "10:30", "11:00", "11: 30"
    "12:00", "12:30", "13:00", "13:30", "14:00", "14: 30"
    "15:00", "15:30", "16:00", "16:30", "17:00", "17: 30"
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
<<<<<<< HEAD

=======
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

=======
<<<<<<< HEAD

=======
      toast({;
        title: "Interview requested",;
        description: `Your interview request with ${talent && talent.full_name} has been sent.`}),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      onClose();
    } catch (error) {;"
      console && console.error("Failed to schedule interview:", error);

        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const timeSlots = [;"
    "09:00", "09:30", "10:00", "10:30", "11:00", "11: 30",;"
    "12:00", "12:30", "13:00", "13:30", "14:00", "14: 30",;"
    "15:00", "15:30", "16:00", "16:30", "17:00", "17: 30",;"
<<<<<<< HEAD
=======
=======
  const timeSlots = [;
    "09:00", "09:30", "10:00", "10:30", "11:00", "11: 30",;
    "12:00", "12:30", "13:00", "13:30", "14:00", "14: 30",;
    "15:00", "15:30", "16:00", "16:30", "17:00", "17: 30",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD

=======
        <FormField
          control={form && form.control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          name="title"
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Interview Title</FormLabel>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const time_slots = [;"
    "09:00", "09:30", "10:00", "10:30", "11:00", "11: 30","
    "12:00", "12:30", "13:00", "13:30", "14:00", "14: 30","
    "15:00", "15:30", "16:00", "16:30", "17:00", "17: 30","
<<<<<<< HEAD
=======
=======
  const time_slots = [;
    "09:00", "09:30", "10:00", "10:30", "11:00", "11: 30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14: 30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17: 30",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    "18:00", "18:30", "19:00", "19:30", "20: 00";
  ],
  return (

          </div>;
        </div>;
        <FormField;
          control={form.control}"
          name="title";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Interview Title</FormLabel>;

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <FormControl>;

                <Input placeholder="Brief title for the interview" {...field} />;
              </FormControl>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
              <FormMessage />;
          <FormField
            control={form && form.control}
            name="date"
            </FormItem>;
          )}
        />;
;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <FormField;
            control={form.control}
            name="date";
            render={({ field }) => (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <FormItem className="flex flex-col">;
                <FormLabel>Date</FormLabel>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <FormControl>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                      <Button
                        variant="outline"
                        className={cn(

                          !field.value && "text-muted-foreground"
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

"
                          "w-full pl-3 text-left font-normal",

"
                          !field.value && "text-muted-foreground"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                      <Button"
                        variant="outline"
                        className={cn("
                          !field.value && "text-muted-foreground"

<<<<<<< HEAD
=======
=======
                          "w-full pl-3 text-left font-normal"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          !field && field.value && "text-muted-foreground"
                        )}>;
                        {field && field.value ? (;"
                          format(field && field.value, "PPP");
                        ) : (;
                          <span>Pick a date</span>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        )}

                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                      </Button>;
                    </FormControl>;
                  </PopoverTrigger>;"
                  <PopoverContent className="w-auto p-0" align="start">;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
        <FormField
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
                          !field.value && "text-muted-foreground"

=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
                          !field.value && "text-muted-foreground"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />"
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
<<<<<<< HEAD
                  <PopoverContent className="w-auto p-0" align="start">"
                    <Calendar,
mode="single""
=======
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"

                      selected={field && field.value}
                      onSelect={field && field.onChange}
<<<<<<< HEAD
import { Button } from "@/components/ui/button";"
=======
"
import React, { useState } from "react",;"
import { Button } from "@/components/ui/button",;"
>>>>>>> origin/chore/fix-lint-and-merge
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

      onClose();
    } catch (error) {;"
      console.error("Failed to schedule interview:", error),;

        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  }
;
<<<<<<< HEAD
    ""09":00", ""09":30", ""10":00", ""10":30", ""11":00", ""11":30",;"
    ""12":00", ""12":30", ""13":00", ""13":30", ""14":00", ""14":30",;"
    ""15":00", ""15":30", ""16":00", ""16":30", ""17":00", ""17":30",;"
    ""18":00", ""18":30", ""19":00", ""19":30", ""20": 00";"
=======
  const timeSlots = [;"
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",;"
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",;"
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",;"
    "18:00", "18:30", "19:00", "19:30", "20: 00";
>>>>>>> origin/chore/fix-lint-and-merge
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

                      selected={field.value}
                      onSelect={field.onChange}

                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                      initialFocus;
=======
<<<<<<< HEAD
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
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
=======
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

                      selected={field && field.value}
                      onSelect={field && field.onChange}
<<<<<<< HEAD
import { Button } from "@/components/ui/button";"
=======
"
import React, { useState } from "react",;"
import { Button } from "@/components/ui/button",;"
>>>>>>> origin/chore/fix-lint-and-merge
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

      onClose();
    } catch (error) {;"
      console.error("Failed to schedule interview:", error),;

        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  }
;
<<<<<<< HEAD
    ""09":00", ""09":30", ""10":00", ""10":30", ""11":00", ""11":30",;"
    ""12":00", ""12":30", ""13":00", ""13":30", ""14":00", ""14":30",;"
    ""15":00", ""15":30", ""16":00", ""16":30", ""17":00", ""17":30",;"
    ""18":00", ""18":30", ""19":00", ""19":30", ""20": 00";"
=======
  const timeSlots = [;"
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",;"
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",;"
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",;"
    "18:00", "18:30", "19:00", "19:30", "20: 00";
>>>>>>> origin/chore/fix-lint-and-merge
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

                      selected={field.value}
                      onSelect={field.onChange}
<<<<<<< HEAD
                    <Calendar;
                      mode="single";
>>>>>>> origin/resolved-merge-conflicts
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                      initialFocus;
<<<<<<< HEAD
                      className="p-3 pointer-events-auto";                    <Calendar;"
                      mode="single";"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                      initialFocus;
                      className="p-3 pointer-events-auto";"
                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                      initialFocus;
                      className="p-3 pointer-events-auto";"
          <FormField,
control={form && form.control}
            name="time""
=======
                      className="p-3 pointer-events-auto";
                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                      initialFocus;
                      className="p-3 pointer-events-auto";
=======

                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                      initialFocus;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                    <Calendar"
                      mode="single"

<<<<<<< HEAD
=======
=======
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
                      className="p - 3 pointer - events - auto";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    />;
                  </PopoverContent>;
                </Popover>;
                <FormMessage />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            )}
          />;

          <FormField;
            control={form && form.control}"
            name="time"
>>>>>>> origin/resolved-merge-conflicts
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Time</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
              </FormItem>)}
          />;
          <FormField;
            control={form.control}
            name="time";"
            render={({ field }) => (
              <FormItem>;
<<<<<<< HEAD
                <FormLabel > Time</FormLabel>;
                <Select onValueChange={field.on_change} default_value={field.value}>;
=======
<<<<<<< HEAD
                <FormLabel>Time</FormLabel>;
                <Select onValueChange={field.onChange} defaultValue={field.value}>;

=======
<<<<<<< HEAD
                <FormLabel>Time</FormLabel>;
                <Select onValueChange={field.onChange} defaultValue={field.value}>;

=======
                <FormLabel > Time</FormLabel>;
                <Select onValueChange={field.on_change} default_value={field.value}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select time" />;"
                    </SelectTrigger>;
                  </FormControl>;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts

          />;
        </div>;
<<<<<<< HEAD
        <div className="grid grid-cols-1 "md":grid-cols-2 gap-4">;"
          <FormField,
control={form && form.control}
            name="duration""
=======

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <FormField
            control={form && form.control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            name="duration"
>>>>>>> origin/resolved-merge-conflicts
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Duration</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
<<<<<<< HEAD
                  <SelectContent className="max-h-[300px]">;"
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <SelectContent className="max - h-[300px]">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                    {time_slots.map ((time) => (
                      <SelectItem key={time} value={time}>;
                        {time}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>)}
          />;
        </div>;
        <div className="grid grid - cols - 1 "md":grid - cols - 2 gap-4">;"
          <FormField;
            control={form.control}
            name="duration";"
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Duration</FormLabel>;
                <Select onValueChange={field.on_change} default_value={field.value}>;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <FormControl>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                    <SelectTrigger>;
                      <SelectValue placeholder="Select duration" />;"
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
                    <SelectItem value="15">15 minutes</SelectItem>;"
                    <SelectItem value="30">30 minutes</SelectItem>;"
                    <SelectItem value="45">45 minutes</SelectItem>;"
                    <SelectItem value="60">60 minutes</SelectItem>;"
                  </SelectContent>;
                </Select>;
                <FormMessage />;
<<<<<<< HEAD

          />;
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
          />;
=======

<<<<<<< HEAD
=======
          />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <FormField
            control={form && form.control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            name="platform"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Platform</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </FormItem>)}
          />;
          <FormField;
            control={form.control}
            name="platform";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Platform</FormLabel>;
                <Select onValueChange={field.on_change} default_value={field.value}>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select platform" />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
                    <SelectItem value="zoom">Zoom</SelectItem>;
<<<<<<< HEAD
                    <SelectItem value="google - meet">Google Meet</SelectItem>;
=======

                    <SelectItem value="google - meet">Google Meet</SelectItem>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <SelectItem value="teams">Microsoft Teams</SelectItem>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    <SelectItem value="other">Other</SelectItem>;
                  </SelectContent>;
                </Select>;
                <FormMessage />;
<<<<<<< HEAD

=======
<<<<<<< HEAD
          />;
        </div>;
        {form && form.watch('platform') !== 'in-app' && (;
          <FormField
            control={form && form.control}
            name="meetingLink"
                  <SelectContent className="max-h-[300px]">;
                    {timeSlots.map((time) => (;
                      <SelectItem key={time} value={time}>;
                        {time}
                      </SelectItem>;                    ))}
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>;
            )}
          />;
        </div>;
;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <FormField;
            control={form.control}
            name="duration";
            render={({ field }) => (;
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
              </FormItem>;            )}
          />;
;
          <FormField;
            control={form.control}
            name="platform";
            render={({ field }) => (;
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
            )}
          />;
        </div>;
;
        {form.watch('platform') !== 'in-app' && (;
          <FormField;
            control={form.control}
            name="meetingLink";
=======

<<<<<<< HEAD
=======
          />;
        </div>;

        {form && form.watch('platform') !== 'in-app' && (;

          <FormField
            control={form && form.control}
            name="meetingLink"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Meeting Link (Optional)</FormLabel>;
                <FormControl>;
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
                  <Input;
                    placeholder={`Add your ${form.watch('platform')} link here`}
=======
                  <Input
                    placeholder={`Add your ${form && form.watch('platform')} link here`}
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;
<<<<<<< HEAD

=======
<<<<<<< HEAD
              </FormItem>;
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-[300px]">
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="45">45 minutes</SelectItem>
                    <SelectItem value="60">60 minutes</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="platform"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Platform</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="zoom">Zoom</SelectItem>
                    <SelectItem value="google-meet">Google Meet</SelectItem>
                    <SelectItem value="teams">Microsoft Teams</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {form.watch('platform') !== 'in-app' && (
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          <FormField
            control={form.control}
            name="meetingLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meeting Link (Optional)</FormLabel>
                <FormControl>
                  <Input
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
                  <Input;
                    placeholder={`Add your ${form.watch('platform')} link here`}`              </FormControl>;
              <FormMessage />;
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts

        />;
        <div className="flex justify-end gap-4 pt-4">;"
          <Button variant="outline" onClick={onClose} type="button">;"
            Cancel;
          </Button>;
          <Button type="submit" disabled={isSubmitting}>;"
            {isSubmitting ? "Scheduling..." : "Schedule Interview"}          </Button>;"
        </div>;
      </form>;
    </Form>;
  );
}
            )}
          />
        )}
                  placeholder="Share what you'd like to discuss in this interview""
                  className="h-20""
                  {...field}
            </FormItem>)}
        />;
        <div className="flex justify - end gap - 4 pt-4">;"
          <Button variant="outline" on_click={on_close} type="button">;"
            Cancel;
          </Button>;
          <Button type="submit" disabled={is_submitting}>;"
            {is_submitting ? "Scheduling..." : "Schedule Interview"}"
          </Button>;
        </div>;
      </form>;
    </Form>);
}
  ),; interface InterviewRequestFormProps {
  }
  "talent": TalentProfile;
"onClose": () => void;
userDetails?: UserProfile 
}const formSchema = z.object ({
  }
  "date": z.date ({
  }
  required "error": "Please select a date for the interview." "
}) .refine (date => date > new Date (), {
  }
  "message": "Interview date must be in the future" "
});
"time": z.string () .min (1, "Please select a time for the interview.");"
"duration": z.string () .min (1, "Please select the interview duration.");"
"platform": z.string () .min (1, "Please select a meeting platform.");"
const form = useForm<z.infer<typeof formSchema>> ({
  }
  "resolver": zodResolver (formSchema), "defaultValues": {
  }
  "title": `Interview with $ {`  }
  talent.full name 
}`;`async function onSubmit() {
  }
  if (!userDetails?.id) {
  }
  toast ({
  }
  return;
}setIsSubmitting (true);
}finally {
  }
  setIsSubmitting (false) 
}

<<<<<<< HEAD
}
;
}const timeSlots = [ ""09":00", ""09":30", ""10":00", ""10":30", ""11":00", ""11":30";"
""12":00", ""12":30", ""13":00", ""13":30", ""14":00", ""14":30";"
""15":00", ""15":30", ""16":00", ""16":30", ""17":00", ""17":30";"
""18":00", ""18":30", ""19":00", ""19":30", ""20": 00" ];"
}/> <div className="grid grid-cols-1 "md":grid-cols-2 gap-4" > <FormField <FormLabel>Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) "
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus className="p-3 pointer-events-auto" /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) "
}/> <FormField <FormLabel>Time</FormLabel> <Select onValueChange= {
  }
  field.onChange 
}defaultValue= {
  }
  field.value 
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select time" /> </SelectTrigger> </FormControl> </SelectItem>) ) "
}</SelectContent> </Select> <FormMessage /> </FormItem>) 
}/> </div> <div className="grid grid-cols-1 "md":grid-cols-2 gap-4" > <FormField <FormItem> <FormLabel>Duration</FormLabel> <Select onValueChange= {"
  }
  field.onChange 
}defaultValue= {
  }
  field.value 
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select duration" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="15" >15 minutes</SelectItem> <SelectItem value="30" >30 minutes</SelectItem> <SelectItem value="45" >45 minutes</SelectItem> <SelectItem value="60" >60 minutes</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>) "
}/> <FormField <FormItem> <FormLabel>Platform</FormLabel> <Select onValueChange= {
  }
  field.onChange 
}defaultValue= {
  }
  field.value 
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select platform" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="zoom" >Zoom</SelectItem> <SelectItem value="google-meet" >Google Meet</SelectItem> <SelectItem value="teams" >Microsoft Teams</SelectItem> <SelectItem value="other" >Other</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>) "
}/> </div> {
  }
  form.watch ('platform') !== 'in-app' && (<FormField control= {'
  }
  form.control 
}<FormItem> <FormLabel>Meeting Link (Optional) </FormLabel> <FormControl> <Input placeholder= {
  `Add your $ {`  }
  form.watch ('platform') '
}link here` `
}{
  ...field 
} /> </FormControl> <FormMessage /> </FormItem>) 
}/>) 
}<FormField <FormItem> <FormLabel>Notes (Optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) 
}/> </Button> </div> </form> </Form>) 
}
}
}
;
        <FormField
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <FormField
          control={form && form.control}
          name="notes"

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <FormField
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share what you'd like to discuss in this interview"
                  className="h-20"
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
}
=======

              </FormItem>;            )}
          />;
        )}
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        <FormField;
          control={form && form.control}"
          name="notes"

<<<<<<< HEAD
=======
=======
        <FormField;
          control={form.control}
          name="notes";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Notes (Optional)</FormLabel>;
              <FormControl>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                <Textarea 

                  placeholder="Share what you'd like to discuss in this interview"
                  className="h-20"
              </FormItem>)}
          />)}
        <FormField;
          control={form.control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          name="notes";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Notes (Optional)</FormLabel>;
              <FormControl>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        </div>;
      </form>;
    </Form>;
  );
}

            )}
          />
        )}'"
                  placeholder="Share what you'd like to discuss in this interview""
                  className="h-20"
                  {...field}

<<<<<<< HEAD
=======
=======
                <Textarea;
                  placeholder="Share what you'd like to discuss in this interview";
                  className="h - 20";
                <Textarea ;
                  placeholder="Share what you'd like to discuss in this interview";
                  className="h-20";
                  {...field}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
;
        <div className="flex justify-end gap-4 pt-4">;
          <Button variant="outline" onClick={onClose} type="button">;
            Cancel;
          </Button>;
          <Button type="submit" disabled={isSubmitting}>;
            {isSubmitting ? "Scheduling..." :"Schedule Interview"}
          </Button>;
        </div>;
      </form>;
    </Form>;
            </FormItem>)}
        />;
        <div className="flex justify - end gap - 4 pt - 4">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <Button variant="outline" on_click={on_close} type="button">;
            Cancel;
          </Button>;"
          <Button type="submit" disabled={is_submitting}>;"
            {is_submitting ? "Scheduling..." : "Schedule Interview"}
</FormMessage>
              </FormItem>)}

        </div>;"
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
</div>
          <FormField;
            control={form.control}"
            name="duration";"
            render={({ field }) => (
</FormField>
              <FormItem>;
</FormItem>
                <FormLabel > Duration</FormLabel>;
                <Select onValueChange={field.on_change} default_value={field.value}>;
</Select>
                  <FormControl>;
</FormControl>
                    <SelectTrigger>;
</SelectTrigger>"
                      <SelectValue placeholder="Select duration" />;"
</SelectValue>
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
</SelectContent>"
                    <SelectItem value="15">15 minutes</SelectItem>;""
                    <SelectItem value="30">30 minutes</SelectItem>;""
                    <SelectItem value="45">45 minutes</SelectItem>;""
                    <SelectItem value="60">60 minutes</SelectItem>;"
                  </SelectContent>;
                </Select>;
                <FormMessage />;
</FormMessage>
          <FormField;
            control={form && form.control}"
            name="platform"")
            render={({ field }) => (;
</FormField>
              <FormItem>;
</FormItem>
                <FormLabel>Platform</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
</Select>)
              </FormItem>)}
          <FormField;
            control={form.control}"
            name="platform";"
            render={({ field }) => (
</FormField>
              <FormItem>;
</FormItem>
                <FormLabel > Platform</FormLabel>;
                <Select onValueChange={field.on_change} default_value={field.value}>;
</Select>
                  <FormControl>;
</FormControl>
                    <SelectTrigger>;
</SelectTrigger>"
                      <SelectValue placeholder="Select platform" />;"
</SelectValue>
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
</SelectContent>"
                    <SelectItem value="zoom">Zoom</SelectItem>;""
                    <SelectItem value="google - meet">Google Meet</SelectItem>;""
                    <SelectItem value="teams">Microsoft Teams</SelectItem>;""
                    <SelectItem value="other">Other</SelectItem>;"
                  </SelectContent>;
                </Select>;
                <FormMessage />;
</FormMessage>
        </div>;
          <FormField;
            control={form && form.control}"
            name="meetingLink""
          <FormField;
            control={form && form.control}"
            name="meetingLink"")
            render={({ field }) => (;
</FormField>
              <FormItem>;
</FormItem>)
                <FormLabel>Meeting Link (Optional)</FormLabel>;
                <FormControl>;
</FormControl>
                  <Input;"
                    placeholder={`Add your ${form && form.watch('platform')} link here`}'
              </FormItem>)}
</Input>
        </div>;
          <FormField;
            control={form.control}'
            name="meeting_link";"
            render={({ field }) => (
</FormField>
              <FormItem>;
</FormItem>)
                <FormLabel > Meeting Link (Optional)</FormLabel>;
                <FormControl>;
</FormControl>
                  <Input;"
                    placeholder={`Add your ${form.watch ('platform')} link here`}'
                  <Input;'
                    placeholder={`Add your ${form.watch('platform')} link here`}'
                    {...field}
                  />;
</Input>
                </FormControl>;
                <FormMessage />;
</FormMessage>

          <FormField;
            control={form.control}'
            name="meetingLink""
            render={({ field }) => (
</FormField>
              <FormItem>
</FormItem>)
                <FormLabel>Meeting Link (Optional)</FormLabel>
                <FormControl>
</FormControl>
                  <Input;"
                    placeholder={`Add your ${form.watch('platform')} link here`}'
                    {...field}
                  />
</Input>
                </FormControl>
                <FormMessage />
</FormMessage>
              </FormItem>
        <FormField;
          control={form && form.control}'
          name="notes""
          render={({ field }) => (;
</FormField>
            <FormItem>;
</FormItem>)
              <FormLabel>Notes (Optional)</FormLabel>;
              <FormControl>;
</FormControl>

                <Textarea;
                <Textarea;"
                  placeholder="Share what you'd like to discuss in this interview"""
                  className="h-20""
              </FormItem>)}
</Textarea>
        <FormField;
          control={form.control}"
          name="notes";"
          render={({ field }) => (
</FormField>
            <FormItem>;
</FormItem>)
              <FormLabel > Notes (Optional)</FormLabel>;
              <FormControl>;
</FormControl>
                <Textarea;"
                  placeholder="Share what you'd like to discuss in this interview";""
                  className="h - 20";"
                <Textarea ;"
                  placeholder="Share what you'd like to discuss in this interview";""
                  className="h-20";"
                  {...field}
                />;
</Textarea>
              </FormControl>;
              <FormMessage />;
</FormMessage>"
        <div className="flex justify-end gap-4 pt-4">;"
</div>"
          <Button variant="outline" onClick={onClose} type="button">;"
</Button>
          </Button>;"
          <Button type="submit" disabled={isSubmitting}>;"
</Button>
          </Button>;
        </div>;
      </form>;
    </Form>;
            </FormItem>)}"
        <div className="flex justify - end gap - 4 pt - 4">;"
</div>"
          <Button variant="outline" on_click={on_close} type="button">;"
</Button>
          </Button>;"
          <Button type="submit" disabled={is_submitting}>;"
</Button>

          </Button>;
        </div>;
      </form>;
    </Form>);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
=======
=======
  ),; interface InterviewRequestFormProps {
  talent: TalentProfile;
onClose: () => void;
userDetails?: UserProfile 
}const formSchema = z.object ({
  date: z.date ({
  required error: "Please select a date for the interview." 
}) .refine (date => date > new Date (), {
  message: "Interview date must be in the future" 
});
time: z.string () .min (1, "Please select a time for the interview.");
duration: z.string () .min (1, "Please select the interview duration.");
platform: z.string () .min (1, "Please select a meeting platform.");
const form = useForm<z.infer<typeof formSchema>> ({
  resolver: zodResolver (formSchema), defaultValues: {
  title: `Interview with $ {
  talent.full name 
}`;
async function onSubmit (values: z.infer<typeof formSchema>) {
  if (!userDetails?.id) {
  toast ({
  return;
}setIsSubmitting (true);
}finally {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  setIsSubmitting (false) 
}

}
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
}const timeSlots = [ "09:00", "09:30", "10:00", "10:30", "11:00", "11:30";
"12:00", "12:30", "13:00", "13:30", "14:00", "14:30";
"15:00", "15:30", "16:00", "16:30", "17:00", "17:30";
"18:00", "18:30", "19:00", "19:30", "20: 00" ];
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus className="p-3 pointer-events-auto" /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) 
}/> <FormField <FormLabel>Time</FormLabel> <Select onValueChange= {
  field.onChange 
}defaultValue= {
  field.value 
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select time" /> </SelectTrigger> </FormControl> </SelectItem>) ) 
}</SelectContent> </Select> <FormMessage /> </FormItem>) 
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormItem> <FormLabel>Duration</FormLabel> <Select onValueChange= {
  field.onChange 
}defaultValue= {
  field.value 
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select duration" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="15" >15 minutes</SelectItem> <SelectItem value="30" >30 minutes</SelectItem> <SelectItem value="45" >45 minutes</SelectItem> <SelectItem value="60" >60 minutes</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Platform</FormLabel> <Select onValueChange= {
  field.onChange 
}defaultValue= {
  field.value 
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select platform" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="zoom" >Zoom</SelectItem> <SelectItem value="google-meet" >Google Meet</SelectItem> <SelectItem value="teams" >Microsoft Teams</SelectItem> <SelectItem value="other" >Other</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>) 
}/> </div> {
  form.watch ('platform') !== 'in-app' && (<FormField control= {
  form.control 
}<FormItem> <FormLabel>Meeting Link (Optional) </FormLabel> <FormControl> <Input placeholder= {
  `Add your $ {
  form.watch ('platform') 
}link here` 
}{
  ...field 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}/> </FormControl> <FormMessage /> </FormItem>) 
}/>) 
}<FormField <FormItem> <FormLabel>Notes (Optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) 
}/> </Button> </div> </form> </Form>) 
}
}
}
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
