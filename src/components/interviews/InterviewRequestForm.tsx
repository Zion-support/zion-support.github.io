<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Form
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
  Select
  SelectTrigger
  SelectValue
  SelectContent
  SelectItem
} from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
  Popover
  PopoverTrigger
  PopoverContent
} from '@/components/ui/popover'
import { TalentProfile } from '@/types/talent'
import type { UserProfile } from '@/types/auth'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, ControllerRenderProps } from 'react-hook-form'
import { z } from 'zod'
import { format, addDays } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { toast } from '@/components/ui/use-toast'
import { useInterviews } from '@/hooks/useInterviews'
import { logErrorToProduction } from '@/utils/productionLogger'
interface InterviewRequestFormProps {
  talent: TalentProfile
  onClose: () => void
  userDetails?: UserProfile

import { CalendarIcon } from 'lucide-react'
import { toast } from "@/components/ui/use-toast";
import { useInterviews } from "@/hooks/useInterviews";
import {logErrorToProduction} from '@/utils/productionLogger';
interface InterviewRequestFormProps {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {;
  Form,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormMessage,;
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {;
  Select,;
  SelectTrigger,;
  SelectValue,;
  SelectContent,;
  SelectItem,;
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import {;
  Popover,;
  PopoverTrigger,;
  PopoverContent,;
} from '@/components/ui/popover';
import { TalentProfile } from '@/types/talent';
import type { UserProfile } from '@/types/auth';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';
import { format, addDays } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useInterviews } from '@/hooks/useInterviews';
import { logErrorToProduction } from '@/utils/productionLogger';
interface InterviewRequestFormProps {;
  talent: TalentProfile;
  onClose: () => void;
  userDetails?: UserProfile

<<<<<<< HEAD
const formSchema = z.object({
  date: z
    .date({
      required_error: 'Please select a date for the interview.'
    })
    .refine(date => date > new Date(), {
      message: 'Interview date must be in the future'
    })
  time: z.string().min(1, 'Please select a time for the interview.')
  duration: z.string().min(1, 'Please select the interview duration.')
  platform: z.string().min(1, 'Please select a meeting platform.')
  meetingLink: z.string().optional()
  title: z.string().min(3, 'Please provide a brief title for the interview.')
  notes: z.string().optional()
})
export function InterviewRequestForm({
  talent
  onClose
  userDetails
}: InterviewRequestFormProps) {
  const { requestInterview } = useInterviews()
  const [isSubmitting, setIsSubmitting] = useState(false)
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {;
  Form,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormMessage,;
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {;
  Select,;
  SelectTrigger,;
  SelectValue,;
  SelectContent,;
  SelectItem,;
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import {;
  Popover,;
  PopoverTrigger,;
  PopoverContent,;
} from '@/components/ui/popover';
import { TalentProfile } from '@/types/talent';
import type { UserProfile } from '@/types/auth';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';
import { format, addDays } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useInterviews } from '@/hooks/useInterviews';
import { logErrorToProduction } from '@/utils/productionLogger';
interface InterviewRequestFormProps {;
  talent: TalentProfile;
  onClose: () => void;
  userDetails?: UserProfile


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react';
import { Button } from '@/components / ui / button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components / ui / form';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components / ui / select';
import { Calendar } from '@/components / ui / calendar';
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components / ui / popover';
import { TalentProfile } from '@/types / talent';
import type { UserProfile } from '@/types / auth';
import { cn } from '@/lib / utils';
import { zod_resolver } from '@hookform / resolvers / zod';
import { use_form, ControllerRenderProps } from 'react - hook - form';
import { z } from 'zod';
import { format, add_days } from 'date - fns';
import { CalendarIcon } from 'lucide-react';
import { toast } from '@/components / ui / use - toast';
import { use_interviews } from '@/hooks / use_interviews';
import { logErrorToProduction } from '@/utils / production_logger';
interface InterviewRequestFormProps {
  talent: TalentProfile;
  on_close: () => void;
  user_details?: UserProfile;
const form_schema = z.object ({
  date: z;
    .date ({
      required_error: 'Please select a date for the interview.',
    });
    .refine (date => date > new Date (), {
      message: 'Interview date must be in the future',
    }),
<<<<<<< HEAD
    time: z.string().min(1, "Please select a time for the interview."),
    duration: z.string().min(1, "Please select the interview duration."),
    platform: z.string().min(1, "Please select a meeting platform."),
    meetingLink: z.string().optional(),
    title: z.string().min(3, "Please provide a brief title for the interview."),
    notes: z.string().optional(),
=======
  time: z.string ().min (1, 'Please select a time for the interview.'),
  duration: z.string ().min (1, 'Please select the interview duration.'),
  platform: z.string ().min (1, 'Please select a meeting platform.'),
  meeting_link: z.string ().optional (),
  title: z.string ().min (3, 'Please provide a brief title for the interview.'),
  notes: z.string ().optional (),
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
});
export /**
 * InterviewRequestForm - Function description
 */
function InterviewRequestForm() {
  const { request_interview } = use_interviews ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const form = use_form < z.infer < typeof form_schema>>({
    resolver: zod_resolver (form_schema),
    default_values: {
      title: `Interview with ${talent.full_name}`,
      duration: '30',
      platform: 'zoom',
      notes: '',
      meeting_link: '',
    },
  });
  async /**
 * on_submit - Function description
 */
function on_submit() {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Authentication required',
        description: 'Please log in to schedule an interview',
        variant: 'destructive',
      });
      return;
    }
    setIsSubmitting (true);
    try {
      // Combine date and time;
      const dateTimeString = `${format (values.date, 'yyyy - MM - dd')}T${values.time}:00`;
      const scheduled_date = new Date (dateTimeString);
      // Calculate end time based on duration;
      const duration_minutes = parse_int (values.duration);
      await request_interview ({
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
interface InterviewRequestFormProps {
  talent: TalentProfile,
  onClose: () => void,
  userDetails?: UserProfile
}

<<<<<<< HEAD
<<<<<<< HEAD
onst formSchema = z.object({
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const formSchema = z.object({
  date: z.date({
    required_error: "Please select a date for the interview."}).refine(date => date > new Date(), {
    message: "Interview date must be in the future"
  }),
  time: z.string().min(1, "Please select a time for the interview."),
  duration: z.string().min(1, "Please select the interview duration."),
  platform: z.string().min(1, "Please select a meeting platform."),
  meetingLink: z.string().optional(),
<<<<<<< HEAD
<<<<<<< HEAD
  title: z.string().min(3, 'Please provide a brief title for the interview.'),
  notes: z.string().optional(),
})
export function InterviewRequestForm({
  talent,
  onClose,
  userDetails,
}: InterviewRequestFormProps) {
  const { requestInterview } = useInterviews()
  const [isSubmitting, setIsSubmitting] = useState(false)
  title: z.string().min(3, "Please provide a brief title for the interview."),
  notes: z.string().optional()}),

export function InterviewRequestForm({ talent, onClose, userDetails }: InterviewRequestFormProps) {
  const { requestInterview } = useInterviews(),
  const [isSubmitting, setIsSubmitting] = useState(false),
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
    defaultValues: {
<<<<<<< HEAD
      title: `Interview with ${talent.full_name}`
      duration: '30'
      platform: 'zoom'
      notes: ''
      meetingLink: ''
    }
      title: `Interview with ${talent.full_name}`,
      duration: '30',
      platform: 'zoom',
      notes: '',
      meetingLink: '',
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!userDetails?.id) {
      toast({
        title: 'Authentication required'
        description: 'Please log in to schedule an interview'
        variant: 'destructive'
      })
      return;
    }
    setIsSubmitting(true)
    try {
      // Combine date and time
      const dateTimeString = `${format(values.date, 'yyyy-MM-dd')}T${values.time}:00`
      const scheduledDate = new Date(dateTimeString)
      // Calculate end time based on duration
      const durationMinutes = parseInt(values.duration)
    resolver: zodResolver(formSchema)
    defaultValues: {
      title: `Interview with ${talent.full_name}`
      duration: '30'
      platform: 'zoom'
      notes: ''
      meetingLink: ''
    }
      await requestInterview({
        talent_id: talent.id
        client_id: userDetails.id
        scheduled_date: scheduledDate.toISOString()
        duration_minutes: durationMinutes
        notes: values.notes
        meeting_platform: values.platform as any
        meeting_link: values.meetingLink
        interview_type: 'video'
        title: values.title
      })
      toast({
        title: 'Interview requested'
        description: `Your interview request with ${talent.full_name} has been sent.`
      })
      onClose()
    } catch (error) {
      logErrorToProduction('Failed to schedule interview:', { data: error })
      toast({
        title: 'Failed to schedule interview'
        description:
          'An error occurred while scheduling the interview. Please try again.'
        variant: 'destructive'
      })
      title: `Interview with ${talent.full_name}`,
      title: `Interview with ${talent.full_name}`,
=======
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
    defaultValues: {
      title: `Interview with ${talent.full_name}`,
      title: `Interview with ${talent.full_name}`,
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      duration: "30",
      platform: "zoom",
      notes: "",
      meetingLink: ""}}),

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!userDetails?.id) {
      toast({
        title: "Authentication required",
        description: "Please log in to schedule an interview",
        variant: "destructive"}),
      return
    }

    setIsSubmitting(true),

    try {
      // Combine date and time
      const dateTimeString = `${format(values.date, 'yyyy-MM-dd')}T${values.time}:00`,
      const scheduledDate = new Date(dateTimeString),
      
      // Calculate end time based on duration
      const durationMinutes = parseInt(values.duration),

<<<<<<< HEAD
      await requestInterview({
        talent_id: talent.id,
        client_id: userDetails.id,
        scheduled_date: scheduledDate.toISOString(),
        duration_minutes: durationMinutes,
        notes: values.notes,
        meeting_platform: values.platform as any,
        meeting_link: values.meetingLink,
ursor/fix-website-loading-errors-and-merge-6662
=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
    defaultValues: {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      title: `Interview with ${talent.full_name}`,

      await requestInterview({
        talent_id: talent.id,
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        client_id: user_details.id,
        scheduled_date: scheduled_date.toISOString (),
        duration_minutes: duration_minutes,
        notes: values.notes,
        meeting_platform: values.platform as any,
<<<<<<< HEAD
<<<<<<< HEAD
        meeting_link: values.meetingLink,
        interview_type: 'video',
        title: values.title,
      })
      toast({
        title: 'Interview requested',
        description: `Your interview request with ${talent.full_name} has been sent.`,
      })
      onClose()
    } catch (error) {
      logErrorToProduction('Failed to schedule interview:', { data: error })
      toast({
        title: 'Failed to schedule interview',
        description:
          'An error occurred while scheduling the interview. Please try again.',
        variant: 'destructive',
      })
        interview_type: "video",
        title: values.title
      }),

      toast({
        title: "Interview requested",
        description: `Your interview request with ${talent.full_name} has been sent.`}),
      onClose()
    } catch (error) {
      logErrorToProduction('Failed to schedule interview:', { data: error }),
      toast({
        title: "Failed to schedule interview",
        description: "An error occurred while scheduling the interview. Please try again.",
        variant: "destructive"})
    } finally {
      setIsSubmitting(false)
    }
  }
  const timeSlots = [
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        meeting_link: values.meetingLink,



    } finally {
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setIsSubmitting (false);
    }
  }

const formSchema = z && z.object({;
  date: z;
    .date({;
      required_error: 'Please select a date for the interview.',;
    });
    .refine(date => date > new Date(), {;
      message: 'Interview date must be in the future',;
    }),;
  time: z && z.string().min(1, 'Please select a time for the interview.'),;
  duration: z && z.string().min(1, 'Please select the interview duration.'),;
  platform: z && z.string().min(1, 'Please select a meeting platform.'),;
  meetingLink: z && z.string().optional(),;
  title: z && z.string().min(3, 'Please provide a brief title for the interview.'),;
  notes: z && z.string().optional(),;
});

export function InterviewRequestForm(): any ({;
  talent,;
  onClose,;
  userDetails,;
}: InterviewRequestFormProps) {;
  const { requestInterview } = useInterviews();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z && z.infer<typeof formSchema>>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      title: `Interview with ${talent && talent.full_name}`,;
      duration: '30',;
      platform: 'zoom',;
      notes: '',;
      meetingLink: '',;
    },;
  });

  async function onSubmit(): any (values: z && z.infer<typeof formSchema>) {;
    if (!userDetails?.id) {;
      toast({;
        title: 'Authentication required',;
        description: 'Please log in to schedule an interview',;
        variant: 'destructive',;
      });
      return;
    }

    setIsSubmitting(true);

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
        interview_type: 'video',;
        title: values && values.title,;
      });

      toast({;
        title: 'Interview requested',;
        description: `Your interview request with ${talent && talent.full_name} has been sent.`,;
      });
      onClose();
    } catch (error) {;
      logErrorToProduction('Failed to schedule interview:', { data: error });
      toast({;
        title: 'Failed to schedule interview',;
        description:;
          'An error occurred while scheduling the interview. Please try again.',;
        variant: 'destructive',;
      });
    } finally {;
      setIsSubmitting(false);
    }
  }

  const timeSlots = [;
    '09:00',;
    '09:30',;
    '10:00',;
    '10:30',;
    '11:00',;
    '11:30',;
    '12:00',;
    '12:30',;
    '13:00',;
    '13:30',;
    '14:00',;
    '14:30',;
    '15:00',;
    '15:30',;
    '16:00',;
    '16:30',;
    '17:00',;
    '17:30',;
    '18:00',;
    '18:30',;
    '19:00',;
    '19:30',;
    '20:00',;
  ];


  return (
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(onSubmit)} className='space-y-5'>;
        <div className='flex items-center mb-6'>;
          <div className='flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4'>;
            <img

  const time_slots = [;

<<<<<<< HEAD
  ]

<<<<<<< HEAD
    '09:00'
    '09:30'
    '10:00'
    '10:30'
    '11:00'
    '11:30'
    '12:00'
    '12:30'
    '13:00'
    '13:30'
    '14:00'
    '14:30'
    '15:00'
    '15:30'
    '16:00'
    '16:30'
    '17:00'
    '17:30'
    '18:00'
    '18:30'
    '19:00'
    '19:30'
    '20:00'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ]
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20: 00"
  ],

<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4">
            <img
<<<<<<< HEAD
<<<<<<< HEAD
              src={talent.profile_picture_url |'/placeholder.svg'}
              alt={talent.full_name}
              className='h-full w-full object-cover'
              loading='lazy'            />
              src={talent.profile_picture_url |'/placeholder.svg'}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              src={talent.profile_picture_url || '/placeholder.svg'}
=======

              src={talent.profile_picture_url || '/placeholder.svg'}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              alt={talent.full_name}
              className='h-full w-full object-cover'
              loading='lazy'            />
              src={talent.profile_picture_url || "/placeholder.svg"}
              alt={talent.full_name}
              className="h-full w-full object-cover"
              loading="lazy"
            />

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </div>
            <h3 className="text-lg font-medium text-white">{talent.full_name}</h3>
            <p className="text-sm text-zion-slate-light">{talent.professional_title}</p>
          </div>
        </div>
              src={talent && talent.profile_picture_url || '/placeholder && placeholder.svg'}
              alt={talent && talent.full_name}
              className='h-full w-full object-cover'
              loading='lazy'            />;
          </div>;
          <div>;
            <h3 className='text-lg font-medium text-white'>;
              {talent && talent.full_name}
            </h3>;
            <p className='text-sm text-zion-slate-light'>;
              {talent && talent.professional_title}
            </p>;
          </div>;
        </div>;

        <FormField

            </p>;
          </div>;
        </div>;
        <FormField;
          control={form.control}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">{talent.full_name}</h3>
            <p className="text-sm text-zion-slate-light">{talent.professional_title}</p>
          </div>
        </div>
<<<<<<< HEAD
        <FormField
=======
              src={talent && talent.profile_picture_url || '/placeholder && placeholder.svg'}
              alt={talent && talent.full_name}
              className='h-full w-full object-cover'
              loading='lazy'            />;
          </div>;
          <div>;
            <h3 className='text-lg font-medium text-white'>;
              {talent && talent.full_name}
            </h3>;
            <p className='text-sm text-zion-slate-light'>;
              {talent && talent.professional_title}
            </p>;
          </div>;
        </div>;

        <FormField

            </p>;
          </div>;
        </div>;
        <FormField;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          control={form.control}
          name='title'
          render={({
            field
          }: {
            field: ControllerRenderProps<z.infer<typeof formSchema>, 'title'>
          }) => (            <FormItem>
          name="title"
          render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "title"> }) => (
            <FormItem>


              <FormLabel>Interview Title</FormLabel>
              <FormControl>
<<<<<<< HEAD
<<<<<<< HEAD
                <Input placeholder="Brief title for the interview" {...field} />
=======
                <Input placeholder='Brief title for the interview' {...field} />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <Input placeholder='Brief title for the interview' {...field} />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <FormField
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            field: ControllerRenderProps<z && z.infer<typeof formSchema>, 'title'>;
          }) => (            <FormItem>;
              <FormLabel>Interview Title</FormLabel>;
            field: ControllerRenderProps < z.infer < typeof form_schema>, 'title'>;
          }) => (            <FormItem>;
              <FormLabel > Interview Title</FormLabel>;

              <FormControl>;
                <Input placeholder='Brief title for the interview' {...field} />;
              </FormControl>;
              <FormMessage />;

            </FormItem>)}
        />;
        <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
          <FormField;
            control={form.control}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <FormField
            control={form.control}
            name='date'
            render={({
              field
            }: {
              field: ControllerRenderProps<z.infer<typeof formSchema>, 'date'>
            }) => (
              <FormItem className='flex flex-col'>                <FormLabel>Date</FormLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "date"> }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            name='date';

            render={({
              field
            }: {




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
<<<<<<< HEAD
<<<<<<< HEAD
                        variant='outline'
                        className={cn(
                          'w-full pl-3 text-left font-normal'
                          !field.value && 'text-muted-foreground'
                        )}                      >
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



                        variant="outline"
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
<<<<<<< HEAD
<<<<<<< HEAD
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
=======



                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
              field: ControllerRenderProps<z && z.infer<typeof formSchema>, 'date'>;
            }) => (;
              <FormItem className='flex flex-col'>                <FormLabel>Date</FormLabel>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <FormControl>;
                      <Button
                        variant='outline'
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field && field.value && 'text-muted-foreground'
                        )}>;
                        {field && field.value ? (;
                          format(field && field.value, 'PPP');
                        ) : (;
                          <span>Pick a date</span>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={date =>
                        date < new Date() |date > addDays(new Date(), 90)
                      }                      initialFocus
                      className='p-3 pointer-events-auto'
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
              field: ControllerRenderProps<z && z.infer<typeof formSchema>, 'date'>;
            }) => (;
              <FormItem className='flex flex-col'>                <FormLabel>Date</FormLabel>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <FormControl>;
                      <Button
                        variant='outline'
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field && field.value && 'text-muted-foreground'
                        )}>;
                        {field && field.value ? (;
                          format(field && field.value, 'PPP');
                        ) : (;
                          <span>Pick a date</span>;
                        )}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />;
                      </Button>;
                    </FormControl>;
                  </PopoverTrigger>;
                  <PopoverContent className='w-auto p-0' align='start'>;
                    <Calendar


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                      initialFocus
                      className="p-3 pointer-events-auto"
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
<<<<<<< HEAD
<<<<<<< HEAD
            )}
          />
          <FormField
            control={form.control}
            name='time'
            render={({
              field
            }: {
              field: ControllerRenderProps<z.infer<typeof formSchema>, 'time'>
            }) => (              <FormItem>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      selected={field && field.value}
                      onSelect={field && field.onChange}
                      disabled={date =>;
                        date < new Date() || date > addDays(new Date(), 90);
                      }                      initialFocus;
                      className='p-3 pointer-events-auto';
              field: ControllerRenderProps < z.infer < typeof form_schema>, 'date'>;
            }) => (
              <FormItem className='flex flex - col'>                <FormLabel > Date</FormLabel>;

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
<<<<<<< HEAD
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
=======

                <Popover>;
                  <PopoverTrigger as_child>;
                    <FormControl>;
                      <Button;
                        variant='outline';
                        className={cn (
                          'w - full pl - 3 text - left font - normal',
                          !field.value && 'text - muted - foreground')}                      >;
                        {field.value ? (
                          format (field.value, 'PPP')) : (
                          <span > Pick a date</span>)}
                        <CalendarIcon className='ml - auto h - 4 w - 4 opacity - 50' />;
                      </Button>;
                    </FormControl>;
                  </PopoverTrigger>;
                  <PopoverContent className='w - auto p - 0' align='start'>;
                    <Calendar;
                      mode='single';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      selected={field.value}
                      on_select={field.on_change}
                      disabled={date =>;
                        date < new Date () || date > add_days (new Date (), 90);
                      }                      initial_focus;
                      className='p - 3 pointer - events - auto';
                    />;
                  </PopoverContent>;
                </Popover>;
                <FormMessage />;
<<<<<<< HEAD
              </FormItem>;
            )}
=======

              </FormItem>)}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          />;
          <FormField;
            control={form.control}

                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder='Select time' />;
                    </SelectTrigger>;
                  </FormControl>;

          />;
        </div>;

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;

          <FormField
            control={form && form.control}
            name='duration'
                  <SelectContent className='max - h-[300px]'>;
                    {time_slots.map (time => (                      <SelectItem key={time} value={time}>;
                        {time}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>)}
          />;
        </div>;
        <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
          <FormField;
            control={form.control}
            name='duration';
            render={({
              field
            }: {

            name="time"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "time"> }) => (
              <FormItem>
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                      selected={field && field.value}
                      onSelect={field && field.onChange}
                      disabled={date =>;
                        date < new Date() || date > addDays(new Date(), 90);
                      }                      initialFocus;
                      className='p-3 pointer-events-auto';
              field: ControllerRenderProps < z.infer < typeof form_schema>, 'date'>;
            }) => (
              <FormItem className='flex flex - col'>                <FormLabel > Date</FormLabel>;

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
                  <PopoverTrigger as_child>;
                    <FormControl>;
                      <Button;
                        variant='outline';
                        className={cn (
                          'w - full pl - 3 text - left font - normal',
                          !field.value && 'text - muted - foreground')}                      >;
                        {field.value ? (
                          format (field.value, 'PPP')) : (
                          <span > Pick a date</span>)}
                        <CalendarIcon className='ml - auto h - 4 w - 4 opacity - 50' />;
                      </Button>;
                    </FormControl>;
                  </PopoverTrigger>;
                  <PopoverContent className='w - auto p - 0' align='start'>;
                    <Calendar;
                      mode='single';
                      selected={field.value}
                      on_select={field.on_change}
                      disabled={date =>;
                        date < new Date () || date > add_days (new Date (), 90);
                      }                      initial_focus;
                      className='p - 3 pointer - events - auto';
                    />;
                  </PopoverContent>;
                </Popover>;
                <FormMessage />;

              </FormItem>)}
          />;
          <FormField;
            control={form.control}

                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder='Select time' />;
                    </SelectTrigger>;
                  </FormControl>;

          />;
        </div>;

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;

          <FormField
            control={form && form.control}
            name='duration'
                  <SelectContent className='max - h-[300px]'>;
                    {time_slots.map (time => (                      <SelectItem key={time} value={time}>;
                        {time}
                      </SelectItem>))}
                  </SelectContent>;
                </Select>;
                <FormMessage />;
              </FormItem>)}
          />;
        </div>;
        <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
          <FormField;
            control={form.control}
            name='duration';
            render={({
              field
            }: {

            name="time"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "time"> }) => (
              <FormItem>


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <FormLabel>Time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                  </FormControl>
<<<<<<< HEAD
<<<<<<< HEAD
                  <SelectContent className='max-h-[300px]'>
                    {timeSlots.map(time => (                      <SelectItem key={time} value={time}>
                        {time}
                  <SelectContent className='max-h-[300px]'>
                    {timeSlots.map(time => (                      <SelectItem key={time} value={time}>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <SelectContent className="max-h-[300px]">
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>

                        {time}
=======
                  <SelectContent className='max-h-[300px]'>
                    {timeSlots.map(time => (                      <SelectItem key={time} value={time}>
                  <SelectContent className="max-h-[300px]">
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>

                        {time}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
<<<<<<< HEAD
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <FormField
            control={form.control}
            name='duration'
            render={({
              field
            }: {
              field: ControllerRenderProps<
                z.infer<typeof formSchema>
                'duration'
              >
            }) => (              <FormItem>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="duration"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "duration"> }) => (
              <FormItem>

          <FormField
            control={form.control}
            name='duration'
            render={({
              field,
            }: {
              field: ControllerRenderProps<
                z.infer<typeof formSchema>,
                'duration'
              >
            }) => (              <FormItem>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="duration"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "duration"> }) => (
              <FormItem>
<<<<<<< HEAD
<<<<<<< HEAD
                <FormLabel>Duration</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration"/>
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
                <FormLabel>Duration</FormLabel>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <FormLabel>Duration</FormLabel>
=======
                <FormLabel>Duration</FormLabel>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                z && z.infer<typeof formSchema>,;
                'duration';
              >;
            }) => (              <FormItem>;
                <FormLabel>Duration</FormLabel>;
                <Select
                  onValueChange={field && field.onChange}
                  defaultValue={field && field.value}>;
              field: ControllerRenderProps<;
                z.infer < typeof form_schema>,
                'duration';
              >;
            }) => (              <FormItem>;
                <FormLabel > Duration</FormLabel>;
                <Select;
                  onValueChange={field.on_change}
                  default_value={field.value}
                >;
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder='Select duration' />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
                    <SelectItem value='15'>15 minutes</SelectItem>;
                    <SelectItem value='30'>30 minutes</SelectItem>;
                    <SelectItem value='45'>45 minutes</SelectItem>;
                    <SelectItem value='60'>60 minutes</SelectItem>;
                  </SelectContent>;
                </Select>;
                <FormMessage />;
<<<<<<< HEAD

          />;


            control={form && form.control}
            name='platform'
              </FormItem>)}
          />;
          <FormField;
            control={form.control}
            name='platform';
          />
          <FormField
            control={form.control}
            name='platform'
            render={({
              field
            }: {
<<<<<<< HEAD
              field: ControllerRenderProps<
                z.infer<typeof formSchema>
                'platform'
              >
            }) => (              <FormItem>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          />;
          <FormField;
            control={form.control}
            name="platform"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "platform"> }) => (
              <FormItem>
<<<<<<< HEAD
          />
        </div>
        {form.watch('platform') !== 'in-app' && (
ursor/fix-website-loading-errors-and-merge-6662
                <FormLabel>Platform</FormLabel>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                <FormLabel>Platform</FormLabel>
                z && z.infer<typeof formSchema>,;
                'platform';
              >;
            }) => (              <FormItem>;
                <FormLabel>Platform</FormLabel>;
                <Select
                  onValueChange={field && field.onChange}
                  defaultValue={field && field.value}>;
              field: ControllerRenderProps<;
                z.infer < typeof form_schema>,
                'platform';
              >;
            }) => (              <FormItem>;
                <FormLabel > Platform</FormLabel>;
                <Select;
                  onValueChange={field.on_change}
                  default_value={field.value}
                >;
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder='Select platform' />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
                    <SelectItem value='zoom'>Zoom</SelectItem>;

                    <SelectItem value='google - meet'>Google Meet</SelectItem>;

                    <SelectItem value='teams'>Microsoft Teams</SelectItem>;
                    <SelectItem value='other'>Other</SelectItem>;
                  </SelectContent>;
                </Select>;
                <FormMessage />;

          />;
        </div>;

        {form && form.watch('platform') !== 'in-app' && (;

            control={form && form.control}
            name='meetingLink'
              </FormItem>)}
          />;
        </div>;
        {form.watch ('platform') !== 'in - app' && (
          <FormField;
            control={form.control}
            name='meeting_link';
          />
        </div>
        {form.watch('platform') !== 'in-app' && (
          <FormField
            control={form.control}
            name='meetingLink'
            render={({
              field
            }: {
              field: ControllerRenderProps<
                z.infer<typeof formSchema>
                'meetingLink'
              >
            }) => (              <FormItem>
            render={({
              field
            }: {

                z && z.infer<typeof formSchema>,;
                'meetingLink';
              >;
            }) => (              <FormItem>;
                <FormLabel>Meeting Link (Optional)</FormLabel>;
                <FormControl>;

                  <Input
                    placeholder={`Add your ${form && form.watch('platform')} link here`}
              field: ControllerRenderProps<;
                z.infer < typeof form_schema>,
                'meeting_link';
              >;
            }) => (              <FormItem>;
                <FormLabel > Meeting Link (Optional)</FormLabel>;
                <FormControl>;
                  <Input;
                    placeholder={`Add your ${form.watch ('platform')} link here`}
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;


          />;
        </div>;
        {form.watch('platform') !== 'in-app' && (;
          <FormField;
            control={form.control}
            name="meetingLink"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "meetingLink"> }) => (
              <FormItem>
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          />;


          <FormField
            control={form && form.control}
            name='platform'
              </FormItem>)}
          />;
          <FormField;
            control={form.control}
            name='platform';
            render={({
              field
            }: {
              field: ControllerRenderProps<
                z.infer<typeof formSchema>
                'platform'
              >
            }) => (              <FormItem>
          />;
          <FormField;
            control={form.control}
            name="platform"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "platform"> }) => (
              <FormItem>


                <FormLabel>Platform</FormLabel>
                z && z.infer<typeof formSchema>,;
                'platform';
              >;
            }) => (              <FormItem>;
                <FormLabel>Platform</FormLabel>;
                <Select
                  onValueChange={field && field.onChange}
                  defaultValue={field && field.value}>;
              field: ControllerRenderProps<;
                z.infer < typeof form_schema>,
                'platform';
              >;
            }) => (              <FormItem>;
                <FormLabel > Platform</FormLabel>;
                <Select;
                  onValueChange={field.on_change}
                  default_value={field.value}
                >;
                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder='Select platform' />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
                    <SelectItem value='zoom'>Zoom</SelectItem>;

                    <SelectItem value='google - meet'>Google Meet</SelectItem>;

                    <SelectItem value='teams'>Microsoft Teams</SelectItem>;
                    <SelectItem value='other'>Other</SelectItem>;
                  </SelectContent>;
                </Select>;
                <FormMessage />;

          />;
        </div>;

        {form && form.watch('platform') !== 'in-app' && (;

          <FormField
            control={form && form.control}
            name='meetingLink'
              </FormItem>)}
          />;
        </div>;
        {form.watch ('platform') !== 'in - app' && (
          <FormField;
            control={form.control}
            name='meeting_link';
            render={({
              field
            }: {

                z && z.infer<typeof formSchema>,;
                'meetingLink';
              >;
            }) => (              <FormItem>;
                <FormLabel>Meeting Link (Optional)</FormLabel>;
                <FormControl>;

                  <Input
                    placeholder={`Add your ${form && form.watch('platform')} link here`}
              field: ControllerRenderProps<;
                z.infer < typeof form_schema>,
                'meeting_link';
              >;
            }) => (              <FormItem>;
                <FormLabel > Meeting Link (Optional)</FormLabel>;
                <FormControl>;
                  <Input;
                    placeholder={`Add your ${form.watch ('platform')} link here`}
                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;


          />;
        </div>;
        {form.watch('platform') !== 'in-app' && (;
          <FormField;
            control={form.control}
            name="meetingLink"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "meetingLink"> }) => (
              <FormItem>


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
          control={form && form.control}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        <FormField
          control={form && form.control}
          name='notes'
              </FormItem>)}
          />)}
        <FormField;
          control={form.control}
          name='notes';
          render={({
            field
          }: {

            field: ControllerRenderProps<z && z.infer<typeof formSchema>, 'notes'>;
          }) => (            <FormItem>;
              <FormLabel>Notes (Optional)</FormLabel>;
              <FormControl>;

                <Textarea
                  placeholder="Share what you'd like to discuss in this interview"
                  className='h-20'

<<<<<<< HEAD
<<<<<<< HEAD

        <FormField
          control={form.control}
          name='notes'
          render={({
            field
          }: {
            field: ControllerRenderProps<z.infer<typeof formSchema>, 'notes'>
          }) => (            <FormItem>
              <FormLabel>Notes (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share what you'd like to discuss in this interview"
                  className='h-20'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
        <FormField;
          control={form.control}
          name="notes"
          render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "notes"> }) => (
            <FormItem>
              <FormLabel>Notes (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Share what you'd like to discuss in this interview"
                  className="h-20"
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
        <FormField;
          control={form.control}
          name="notes"
          render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "notes"> }) => (
            <FormItem>
              <FormLabel>Notes (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Share what you'd like to discuss in this interview"
                  className="h-20"



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="flex justify-end gap-4 pt-4">
          <Button variant="outline" onClick={onClose} type="button">

            Cancel
<<<<<<< HEAD
        <div className='flex justify-end gap-4 pt-4'>
          <Button variant='outline' onClick={onClose} type='button'>
ursor/fix-website-loading-errors-and-merge-6662
          </Button>
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Scheduling...' : 'Schedule Interview'}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className='flex justify-end gap-4 pt-4'>
          <Button variant='outline' onClick={onClose} type='button'>

        <div className="flex justify-end gap-4 pt-4">
          <Button variant="outline" onClick={onClose} type="button">

            Cancel
          </Button>
<<<<<<< HEAD
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Scheduling..." : "Schedule Interview"}
=======
          </Button>
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Scheduling...' : 'Schedule Interview'}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Scheduling...' : 'Schedule Interview'}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Button>
        </div>
      </form>
    </Form>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}setIsSubmitting (true)
}catch (error) {
  logErrorToProduction ('Failed to schedule interview:', {
  data: error
})
toast ({
}finally {
  setIsSubmitting (false)
}"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
toast ({;
}finally {;
  setIsSubmitting (false) ;
}";
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}const timeSlots = [ "09:00", "09:30", "10:00", "10:30", "11:00", "11:30";"
"12:00", "12:30", "13:00", "13:30", "14:00", "14:30";"
"15:00", "15:30", "16:00", "16:30", "17:00", "17:30";"
"18:00", "18:30", "19:00", "19:30", "20: 00" ];"
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) "
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus className="p-3 pointer-events-auto" /> </PopoverContent> </Popover> <FormMessage /> </FormItem>)
}/> <FormField <FormLabel>Time</FormLabel> <Select onValueChange= {
  field.onChange
}defaultValue= {
  field.value "
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select time" /> </SelectTrigger> </FormControl> </SelectItem>) )
}</SelectContent> </Select> <FormMessage /> </FormItem>) "
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormItem> <FormLabel>Duration</FormLabel> <Select onValueChange= {
  field.onChange
}defaultValue= {
  field.value "
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select duration" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="15" >15 minutes</SelectItem> <SelectItem value="30" >30 minutes</SelectItem> <SelectItem value="45" >45 minutes</SelectItem> <SelectItem value="60" >60 minutes</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>)
}/> <FormField <FormItem> <FormLabel>Platform</FormLabel> <Select onValueChange= {
  field.onChange
}defaultValue= {
  field.value "
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select platform" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="zoom" >Zoom</SelectItem> <SelectItem value="google-meet" >Google Meet</SelectItem> <SelectItem value="teams" >Microsoft Teams</SelectItem> <SelectItem value="other" >Other</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>)
}/> </div> {'
  form.watch ('platform') !== 'in-app' && (<FormField control= {
  form.control
}<FormItem> <FormLabel>Meeting Link (Optional) </FormLabel> <FormControl> <Input placeholder= {
  `Add your $ {'
  form.watch ('platform')
}link here`
}{
  ...field
}/> </FormControl> <FormMessage /> </FormItem>)
}/>)
}<FormField <FormItem> <FormLabel>Notes (Optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>)
}/> </Button> </div> </form> </Form>)
}'"}
<<<<<<< HEAD
<<<<<<< HEAD

}
;

}
;
}
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


}
;
}
;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            </FormItem>)}
        />;
        <div className='flex justify - end gap - 4 pt - 4'>;
          <Button variant='outline' on_click={on_close} type='button'>;
            Cancel;
          </Button>;
          <Button type='submit' disabled={is_submitting}>;
            {is_submitting ? 'Scheduling...' : 'Schedule Interview'}
          </Button>;
        </div>;
      </form>;
    </Form>);
}setIsSubmitting (true);
}catch (error) {
  logErrorToProduction ('Failed to schedule interview:', {
  data: error;
});
toast ({
}finally {
  setIsSubmitting (false);
}";
}const time_slots = [ "09:00", "09:30", "10:00", "10:30", "11:00", "11:30";";
"12:00", "12:30", "13:00", "13:30", "14:00", "14:30";";
"15:00", "15:30", "16:00", "16:30", "17:00", "17:30";";
"18:00", "18:30", "19:00", "19:30", "20: 00" ];";
}/> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4" > <FormField <FormLabel > Date</FormLabel> <Popover> <PopoverTrigger as_child> <FormControl> <Button) : (<span > Pick a date</span>) ";
}<CalendarIcon className="ml - auto h - 4 w - 4 opacity - 50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w - auto p - 0" align="start" > <Calendar initial_focus className="p - 3 pointer - events - auto" /> </PopoverContent> </Popover> <FormMessage /> </FormItem>);
}/> <FormField <FormLabel > Time</FormLabel> <Select onValueChange= {
  field.on_change;
}default_value= {
  field.value ";
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select time" /> </SelectTrigger> </FormControl> </SelectItem>) );
}</SelectContent> </Select> <FormMessage /> </FormItem>) ";
}/> </div> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4" > <FormField <FormItem> <FormLabel > Duration</FormLabel> <Select onValueChange= {
  field.on_change;
}default_value= {
  field.value ";
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select duration" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="15" >15 minutes</SelectItem> <SelectItem value="30" >30 minutes</SelectItem> <SelectItem value="45" >45 minutes</SelectItem> <SelectItem value="60" >60 minutes</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>);
}/> <FormField <FormItem> <FormLabel > Platform</FormLabel> <Select onValueChange= {
  field.on_change;
}default_value= {
  field.value ";
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select platform" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="zoom" >Zoom</SelectItem> <SelectItem value="google - meet" >Google Meet</SelectItem> <SelectItem value="teams" >Microsoft Teams</SelectItem> <SelectItem value="other" >Other</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>);
}/> </div> {';
  form.watch ('platform') !== 'in - app' && (<FormField control= {
  form.control;
}<FormItem> <FormLabel > Meeting Link (Optional) </FormLabel> <FormControl> <Input placeholder= {
  `Add your $ {';
  form.watch ('platform');
}link here`;
}{
  ...field;
}/> </FormControl> <FormMessage /> </FormItem>);
}/>);
}<FormField <FormItem> <FormLabel > Notes (Optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>);
}/> </Button> </div> </form> </Form>);
}'"}
}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
