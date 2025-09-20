import { CalendarIcon,,  } from 'lucide-react'
import React from "react";
import React from "react";
import import { logErrorToProduction } from '@/utils/productionLogger';
interface InterviewRequestFormProps {
  talent: TalentProfile;,
onClose: () => void;
  userDetails?: UserProfile
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={date =>
                        date < new Date() |date > addDays(new Date(), 90)
                      }                      initialFocus,
className='p-3 pointer-events-auto'
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
control={form.control}
            name='time'
            render={({
              field,
}: {
              field: ControllerRenderProps<z.infer<typeof formSchema>, 'time'>
            }) => (              <FormItem>
                <FormLabel>Time</FormLabel>
                <Select
onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select time' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className='max-h-[300px]'>
                    {timeSlots.map(time => (                      <SelectItem key={time} value={time}>
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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <FormField
control={form.control}
            name='duration'
            render={({
              field,
}: {
              field: ControllerRenderProps<
                z.infer<typeof formSchema>
                'duration'
              >
            }) => (              <FormItem>
                <FormLabel>Duration</FormLabel>
                <Select
onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select duration' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='15'>15 minutes</SelectItem>
                    <SelectItem value='30'>30 minutes</SelectItem>
                    <SelectItem value='45'>45 minutes</SelectItem>
                    <SelectItem value='60'>60 minutes</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
control={form.control}
            name='platform'
            render={({
              field,
}: {
              field: ControllerRenderProps<
                z.infer<typeof formSchema>
                'platform'
              >
            }) => (              <FormItem>
                <FormLabel>Platform</FormLabel>
                <Select
onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select platform' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='zoom'>Zoom</SelectItem>
                    <SelectItem value='google-meet'>Google Meet</SelectItem>
                    <SelectItem value='teams'>Microsoft Teams</SelectItem>
                    <SelectItem value='other'>Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {form.watch('platform') !== 'in-app' && (
          <FormField
control={form.control}
            name='meetingLink'
            render={({
              field,
}: {
              field: ControllerRenderProps<
                z.infer<typeof formSchema>
                'meetingLink'
              >
            }) => (              <FormItem>
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
control={form.control}
          name='notes'
          render={({
            field,
}: {
            field: ControllerRenderProps<z.infer<typeof formSchema>, 'notes'>
          }) => (            <FormItem>
              <FormLabel>Notes (Optional)</FormLabel>
              <FormControl>
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
        <div className='flex justify-end gap-4 pt-4'>
          <Button variant='outline' onClick={onClose} type='button'>
            Cancel
          </Button>
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Scheduling...' : 'Schedule Interview'}
          </Button>
        </div>
      </form>
    </Form>
  )
}setIsSubmitting (true)
}catch (error) {
  logErrorToProduction ('Failed to schedule interview:', {
  data: error;
})
toast ({
}finally {
  setIsSubmitting (false)
}"
}const timeSlots = [ "09:00", "09:30", "10:00", "10:30", "11:00", ""
"12:00", "12:30", "13:00", "13:30", "14:00", ""
"15:00", "15:30", "16:00", "16:30", "17:00", ""
"18:00", "18:30", "19:00", "19:30", "20: 00" ];"
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) "
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus className="p-3 pointer-events-auto" /> </PopoverContent> </Popover> <FormMessage /> </FormItem>)
}/> <FormField <FormLabel>Time</FormLabel> <Select onValueChange= {
  field.onChange,
}defaultValue= {
  field.value "
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select time" /> </SelectTrigger> </FormControl> </SelectItem>) )
}</SelectContent> </Select> <FormMessage /> </FormItem>) "
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormItem> <FormLabel>Duration</FormLabel> <Select onValueChange= {
  field.onChange,
}defaultValue= {
  field.value "
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select duration" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="15" >15 minutes</SelectItem> <SelectItem value="30" >30 minutes</SelectItem> <SelectItem value="45" >45 minutes</SelectItem> <SelectItem value="60" >60 minutes</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>)
}/> <FormField <FormItem> <FormLabel>Platform</FormLabel> <Select onValueChange= {
  field.onChange,
}defaultValue= {
  field.value "
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select platform" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="zoom" >Zoom</SelectItem> <SelectItem value="google-meet" >Google Meet</SelectItem> <SelectItem value="teams" >Microsoft Teams</SelectItem> <SelectItem value="other" >Other</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>)
}/> </div> {'
  form.watch ('platform') !== 'in-app' && (<FormField control= {
  form.control,
}<FormItem> <FormLabel>Meeting Link (Optional) </FormLabel> <FormControl> <Input placeholder= {
  `Add your $ {'
  form.watch ('platform')
}link here`
}{
  ...field,
}/> </FormControl> <FormMessage /> </FormItem>)
}/>)
}<FormField <FormItem> <FormLabel>Notes (Optional) </FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>)
}/> </Button> </div> </form> </Form>)
}'"}