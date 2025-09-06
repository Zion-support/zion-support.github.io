

import { CalendarIcon } from 'lucide-react'
import { toast } from "@/components/ui/use-toast";
import { useInterviews } from "@/hooks/useInterviews";
import {logErrorToProduction} from '@/utils/productionLogger';
interface InterviewRequestFormProps {
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
      await requestInterview({
        talent_id: talent.id,
        client_id: user_details.id,
        scheduled_date: scheduled_date.toISOString (),
        duration_minutes: duration_minutes,
        notes: values.notes,
        meeting_platform: values.platform as any,
        meeting_link: values.meetingLink,

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
      setIsSubmitting (false);
    }
  }
  const timeSlots = [

  ]

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4">
            <img

              alt={talent.full_name}
              className='h-full w-full object-cover'
              loading='lazy'            />

          </div>
          <div>
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
          name='title';

          render={({
            field
          }: {

          control={form.control}

          name="title"
          render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "title"> }) => (
            <FormItem>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

              <FormLabel>Interview Title</FormLabel>
              <FormControl>
                <Input placeholder='Brief title for the interview' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

            name='date'
            render={({
              field
            }: {
              field: ControllerRenderProps<z.infer<typeof formSchema>, 'date'>
            }) => (
              <FormItem className='flex flex-col'>                <FormLabel>Date</FormLabel>

                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button

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

                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>

                <FormLabel>Time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                  </FormControl>

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

                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

            Cancel
          </Button>
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Scheduling...' : 'Schedule Interview'}
          </Button>
        </div>
      </form>
    </Form>
  )

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
