
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
import { toast } from "@/components/ui/use-toast";""
import { useInterviews } from "@/hooks/useInterviews";""
import {logErrorToProduction} from '@/utils/productionLogger';
interface InterviewRequestFormProps {;
  talent: TalentProfile;,;
  onClose: () => void;,;
  userDetails?:UserProfile;
}
;
const formSchema = z.object({;
  date: z.date({;,)
  required_error: "Please select a date for the interview.";}).refine(date => date > new Date(), {;""
    message:"Interview date must be in the future";"
  }),;"
  time: z.string().min(1;, "Please select a time for the interview."),;""
  duration: z.string().min(1;, "Please select the interview duration."),;""
  platform: z.string().min(1;, "Please select a meeting platform."),;"
  meetingLink: z.string().optional();,;"
  title: z.string().min(3;, "Please provide a brief title for the interview."),;"
  notes: z.string().optional();}),;
export function InterviewRequestForm({ talent, onClose, userDetails } InterviewRequestFormProps) {;
  const { requestInterview } = useInterviews(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const form = useForm<z.infer<typeof formSchema>>({;
</z>)
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
        talent_id: talent.id;,;
        client_id: userDetails.id;,;
        scheduled_date: scheduledDate.toISOString();,;
        duration_minutes: durationMinutes;,;
        notes: values.notes;,;
        meeting_platform: values.platform as any;,;
        meeting_link: values.meetingLink;,;
        interview_type: "video";,;
        title:values.title;
      }),;
;
      toast({;
title:"Interview requested",;
        description:`Your interview request with ${talent.full_name} has been sent.`}),;
      onClose(),;
    } catch (error) {;
      logErrorToProduction('Failed to schedule interview: ';, { data: error ;}),;
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
    "09: 00";, "09: 30";, "10: 00";, "10: 30";, "11: 00";, "11: 30";,;
    "12: 00";, "12: 30";, "13: 00";, "13: 30";, "14: 00";, "14: 30";,;
    "15: 00";, "15: 30";, "16: 00";, "16: 30";, "17: 00";, "17: 30";,;
    "18: 00";, "18: 30";, "19: 00";, "19: 30";, "20:00";
  ],;
;
  return (;
</typeof>
pr-12325
    <Form {...form}>;
"
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">;"
</form>"
        <div className="flex items-center mb-6">;"
</div>"
          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden mr-4">;"
</div>
            <img;"
              src={talent.profile_picture_url || "/placeholder.svg"}"
              alt={talent.full_name}"
              className="h-full w-full object-cover";""
              loading="lazy";"
            />;
</img>
          </div>;
          <div>;
            <h3 className="text-lg font-medium text-white">{talent.full_name}</h3>;""
            <p className="text-sm text-zion-slate-light">{talent.professional_title}</p>;"
        <FormField;
          control={form.control}"
          name="title";""
          render={({ field } { field: ControllerRenderProps<z.infer<typeof formSchema>;, "title"> }) => (;"

            <FormItem>;

              <FormLabel>Interview Title;
              <FormControl>;
                <Input placeholder="Brief title for the interview" {...field} />;"

              <FormMessage />;

            ;"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
            name="date";")"
            render={({ field } { field: ControllerRenderProps<z.infer<typeof formSchema>;, "date"> }) => (;"
              <FormItem className="flex flex-col">;"

                <FormLabel>Date;
                <Popover>;

                  <PopoverTrigger asChild>;

                      <Button;"
                        variant="outline";"
                        className={cn(;"
                          "w-full pl-3 text-left font-normal",;""
                          !field.value && "text-muted-foreground";")
                        )}
                      >;

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
                <Select onValueChange={field.onChange} defaultValue={field.value}>;

                    <SelectTrigger>;
                      <SelectValue placeholder="Select time" />;"

                  <SelectContent className="max-h-[300px]">;"

                      <SelectItem key={time} value={time}>;
)
                      ;                    ))}

        </div>;"
            name="duration";""
            render={({ field } { field: ControllerRenderProps<z.infer<typeof formSchema>;, "duration"> }) => (;"

                <FormLabel>Duration;

                      <SelectValue placeholder="Select duration" />;"

                  <SelectContent>;
                    <SelectItem value="15">15 minutes;""
                    <SelectItem value="30">30 minutes;""
                    <SelectItem value="45">45 minutes;""
                    <SelectItem value="60">60 minutes;"
            name="platform";""
            render={({ field } { field: ControllerRenderProps<z.infer<typeof formSchema>;, "platform"> }) => (;"

                <FormLabel>Platform;

                      <SelectValue placeholder="Select platform" />;"

                    <SelectItem value="zoom">Zoom;""
                    <SelectItem value="google-meet">Google Meet;""
                    <SelectItem value="teams">Microsoft Teams;""
                    <SelectItem value="other">Other;"

            name="meetingLink";")"
            render={({ field } { field: ControllerRenderProps<z.infer<typeof formSchema>;, "meetingLink"> }) => (;"

                <FormLabel>Meeting Link (Optional);

                  <Input;"
                    placeholder={`Add your ${form.watch('platform')} link here`}
                    {...field}
/>;
                </FormControl>;
                <FormMessage />;
                  {...field}
                />;
              </FormControl>;
              <FormMessage />;

          </Button>;
        </div>;
      </form>;
    </Form>;

const form = useForm<z.infer<typeof formSchema>> ({;
async function onSubmit (values: z.infer<typeof formSchema>) {;
if (!userDetails?.id) {;
  toast ({;
  return;
}setIsSubmitting (true);
}catch (error) {;
  logErrorToProduction ('Failed to schedule interview:', {;
  data: error ;
});
toast ({;
}finally {;
  setIsSubmitting (false) ;
}";
}const timeSlots = [ "09:00", "09:30", "10:00", "10:30", "11:00", "11:30";";
"12:00", "12:30", "13:00", "13:30", "14:00", "14:30";";
"15:00", "15:30", "16:00", "16:30", "17:00", "17:30";";
"18:00", "18:30", "19:00", "19:30", "20: 00" ];";
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) ";
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus className="p-3 pointer-events-auto" /> </PopoverContent> </Popover> <FormMessage /> </FormItem>) ;

}/> </FormControl> <FormMessage /> </FormItem>) ;
}/>) ;
}<FormField <FormItem> <FormLabel>Notes (Optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ;
}/> </Button> </div> </form> </Form>) ;
