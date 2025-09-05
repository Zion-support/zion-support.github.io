
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
  meetingLink: z.string().optional(),
  title: z.string().min(3, "Please provide a brief title for the interview."),
  notes: z.string().optional()});

export function InterviewRequestForm(_{_talent, _onClose, _userDetails}: InterviewRequestFormProps) {_const { requestInterview} = useInterviews();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const _form = useForm<z.infer<typeof formSchema>>({_resolver: zodResolver(formSchema), _defaultValues: {
      title: `Interview with ${talent.full_name}`,
      duration: "30",
      platform: "zoom",
      notes: "",
      meetingLink: ""}});

  async function onSubmit(_values: z.infer<typeof formSchema>) {_if (!userDetails?.id) {
      toast({
        title: "Authentication required", _description: "Please log in to schedule an interview", _variant: "destructive"});
      return;
    }

    setIsSubmitting(true);

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
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20:00"
  ];

  return (
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
          </div>
        </div>

        <FormField
          control={_form.control}
          name="title"
          render={_(_{ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"title">}) => (
            <FormItem>
              <FormLabel>Interview Title</FormLabel>
              <FormControl>
                <Input placeholder="Brief title for the interview" {_...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={_form.control}
            name="date"
            render={_(_{ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"date">}) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={_cn(
                          "w-full pl-3 text-left font-normal", _!field.value && "text-muted-foreground"
                        )}
                      >
                        {_field.value ? (
                          format(field.value, _"PPP")
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
                      selected={_field.value}
                      onSelect={_field.onChange}
                      disabled={_(_date) => date < new Date() || date > addDays(new Date(), _90)}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={_form.control}
            name="time"
            render={_(_{ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"time">}) => (_<FormItem>
                <FormLabel>Time</FormLabel>
                <Select onValueChange={_field.onChange} defaultValue={_field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-[300px]">
                    {_timeSlots.map((time) => (
                      <SelectItem key={time} value={_time}>
                        {_time}
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
            control={_form.control}
            name="duration"
            render={_(_{ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"duration">}) => (
              <FormItem>
                <FormLabel>Duration</FormLabel>
                <Select onValueChange={_field.onChange} defaultValue={_field.value}>
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
            control={_form.control}
            name="platform"
            render={_(_{ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"platform">}) => (
              <FormItem>
                <FormLabel>Platform</FormLabel>
                <Select onValueChange={_field.onChange} defaultValue={_field.value}>
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

        {_form.watch('platform') !== 'in-app' && (_<FormField
            control={form.control}
            name="meetingLink"
            render={_({ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"meetingLink">}) => (
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
          control={_form.control}
          name="notes"
          render={_(_{ field}: {_field: ControllerRenderProps<z.infer<typeof formSchema>, _"notes">}) => (
            <FormItem>
              <FormLabel>Notes (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Share what you'd like to discuss in this interview"
                  className="h-20"
                  {_...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4 pt-4">
          <Button variant="outline" onClick={_onClose} type="button">
            Cancel
          </Button>
          <Button type="submit" disabled={_isSubmitting}>
            {_isSubmitting ? "Scheduling..." : "Schedule Interview"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
