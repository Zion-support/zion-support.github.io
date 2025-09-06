

<<<<<<< HEAD
import { CalendarIcon } from 'lucide-react'
import { toast } from "@/components/ui/use-toast";
import { useInterviews } from "@/hooks/useInterviews";
import {logErrorToProduction} from '@/utils/productionLogger';
interface InterviewRequestFormProps {
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  talent: TalentProfile;
  onClose: () => void;
  userDetails?: UserProfile

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
const formSchema = z.object({
=======
onst formSchema = z.object({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  date: z.date({
    required_error: "Please select a date for the interview."}).refine(date => date > new Date(), {
    message: "Interview date must be in the future"
  }),
  time: z.string().min(1, "Please select a time for the interview."),
  duration: z.string().min(1, "Please select the interview duration."),
  platform: z.string().min(1, "Please select a meeting platform."),
  meetingLink: z.string().optional(),
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  title: z.string().min(3, "Please provide a brief title for the interview."),
  notes: z.string().optional()}),


<<<<<<< HEAD
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
    defaultValues: {

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

=======
>>>>>>>   const form = useForm<z.infer<typeof formSchema>>({
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

=======
>>>>>>>       await requestInterview({
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>         talent_id: talent.id,
        client_id: user_details.id,
        scheduled_date: scheduled_date.toISOString (),
        duration_minutes: duration_minutes,
        notes: values.notes,
        meeting_platform: values.platform as any,
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

    } finally {
=======
>>>>>>>     } finally {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      setIsSubmitting(false)
    }
  }
  const timeSlots = [
<<<<<<< HEAD

  ]

=======
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
  ]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20: 00"
  ],

<<<<<<< HEAD
  return (
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4">
            <img
<<<<<<< HEAD

              alt={talent.full_name}
              className='h-full w-full object-cover'
              loading='lazy'            />

=======
              src={talent.profile_picture_url |'/placeholder.svg'}
              alt={talent.full_name}
              className='h-full w-full object-cover'
              loading='lazy'            />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              src={talent.profile_picture_url || "/placeholder.svg"}
              alt={talent.full_name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
<<<<<<< HEAD

=======
>>>>>>>           </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          </div>
>>>>>>>           <div>
            <h3 className="text-lg font-medium text-white">{talent.full_name}</h3>
            <p className="text-sm text-zion-slate-light">{talent.professional_title}</p>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <FormField

            </p>;
          </div>;
        </div>;
        <FormField;
          control={form.control}
<<<<<<< HEAD

=======
          name='title'
          render={({
            field
          }: {
            field: ControllerRenderProps<z.infer<typeof formSchema>, 'title'>
          }) => (            <FormItem>
>>>>>>>               <FormLabel>Interview Title</FormLabel>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <FormLabel>Interview Title</FormLabel>
>>>>>>>               <FormControl>
                <Input placeholder='Brief title for the interview' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            name='date'
            render={({
              field
            }: {
              field: ControllerRenderProps<z.infer<typeof formSchema>, 'date'>
            }) => (
              <FormItem className='flex flex-col'>                <FormLabel>Date</FormLabel>

<<<<<<< HEAD
=======
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            name="date"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "date"> }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
<<<<<<< HEAD

                <Popover>
=======
>>>>>>>                 <Popover>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button

                        variant="outline"
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
<<<<<<< HEAD

                        {field.value ? (
=======
>>>>>>>                         {field.value ? (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

=======
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={date =>
                        date < new Date() |date > addDays(new Date(), 90)
                      }                      initialFocus
                      className='p-3 pointer-events-auto'
>>>>>>>                     />
ursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                        )}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />;
                      </Button>;
                    </FormControl>;
                  </PopoverTrigger>;
                  <PopoverContent className='w-auto p-0' align='start'>;
                    <Calendar


                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                      initialFocus
                      className="p-3 pointer-events-auto"


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    />
>>>>>>>                   </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
<<<<<<< HEAD

                <FormLabel>Time</FormLabel>
=======
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
>>>>>>>                 <FormLabel>Time</FormLabel>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                  </FormControl>
<<<<<<< HEAD

=======
                  <SelectContent className='max-h-[300px]'>
                    {timeSlots.map(time => (                      <SelectItem key={time} value={time}>
>>>>>>>                         {time}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        {time}
>>>>>>>                       </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="duration"
            render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "duration"> }) => (
              <FormItem>
<<<<<<< HEAD

                <FormLabel>Duration</FormLabel>
=======
>>>>>>> >>>>>>>                 <FormLabel>Duration</FormLabel>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

                <FormLabel>Platform</FormLabel>
=======
          />
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                <FormLabel>Duration</FormLabel>
                z && z.infer<typeof formSchema>,;
                'duration';
              >;
            }) => (              <FormItem>;
                <FormLabel>Duration</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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

          />;


>>>>>>>           <FormField
            control={form && form.control}
            name='platform'
              </FormItem>)}
          />;
          <FormField;
            control={form.control}
            name='platform';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            render={({
              field
            }: {
              field: ControllerRenderProps<
                z.infer<typeof formSchema>
                'platform'
              >
            }) => (              <FormItem>
>>>>>>>                 <FormLabel>Platform</FormLabel>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

                <FormLabel>Meeting Link (Optional)</FormLabel>
=======
          />
        </div>
        {form.watch('platform') !== 'in-app' && (
ursor/fix-website-loading-errors-and-merge-6662
                <FormLabel>Platform</FormLabel>
                z && z.infer<typeof formSchema>,;
                'platform';
              >;
            }) => (              <FormItem>;
                <FormLabel>Platform</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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

>>>>>>>           <FormField
            control={form && form.control}
            name='meetingLink'
              </FormItem>)}
          />;
        </div>;
        {form.watch ('platform') !== 'in - app' && (
          <FormField;
            control={form.control}
            name='meeting_link';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            render={({
              field
            }: {
              field: ControllerRenderProps<
                z.infer<typeof formSchema>
                'meetingLink'
              >
            }) => (              <FormItem>
>>>>>>>                 <FormLabel>Meeting Link (Optional)</FormLabel>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

        <FormField
          control={form.control}
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>         <FormField
          control={form && form.control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          name='notes'
              </FormItem>)}
          />)}
        <FormField;
          control={form.control}
          name='notes';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

                  {...field}
=======
>>>>>>>                   {...field}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
<<<<<<< HEAD

            Cancel
=======
        <div className='flex justify-end gap-4 pt-4'>
          <Button variant='outline' onClick={onClose} type='button'>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>             Cancel
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          </Button>
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Scheduling...' : 'Schedule Interview'}
          </Button>
        </div>
      </form>
    </Form>
  )
<<<<<<< HEAD

=======
toast ({
}finally {
  setIsSubmitting (false)
}"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

}
;

=======
}
;
>>>>>>> 
}
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
