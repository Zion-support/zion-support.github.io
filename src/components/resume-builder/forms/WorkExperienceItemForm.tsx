
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { WorkExperience } from '@/types/resume'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
  Popover
  PopoverContent
  PopoverTrigger
} from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Switch } from '@/components/ui/switch'
import { format } from 'date-fns'

import { CalendarIcon, Loader2 } from 'lucide-react'

// Define form schema

const formSchema = z.object({

})
type FormValues = z.infer<typeof formSchema>
interface WorkExperienceItemFormProps {
  initialData?: WorkExperience
  onSubmit: (data: WorkExperience) => Promise<void>
  onCancel: () => void
export function WorkExperienceItemForm({
  initialData
  onSubmit
  onCancel
}: WorkExperienceItemFormProps) {
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false)

  // Set up form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema)
    defaultValues: {

  })
  const { isSubmitting } = form.formState
  const watchIsCurrent = form.watch('is_current')
  const watchRoleTitle = form.watch('role_title')
  const watchCompanyName = form.watch('company_name')
  const handleFormSubmit = async (values: FormValues,) => {
    // Create a properly typed WorkExperience object with all required fields
    const workExperience: WorkExperience = {
      id: initialData?.id
      company_name: values.company_name, // Required
      role_title: values.role_title, // Required
      start_date: values.start_date, // Required
      end_date: values.end_date, // Optional
      is_current: values.is_current, // Required
      description: values.description, // Optional
      location: values.location, // Optional
    }
    await onSubmit(workExperience)
  }
  const handleAIEnhancement = (content: string) => {
    form.setValue('description', content, { shouldDirty: true })
    setIsEnhancementDialogOpen(false)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}

                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Acme Corporation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>

                  <FormLabel>Role Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Senior Developer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. New York, NY (Remote)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}

                      I currently work here
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button

                          {field.value ? (
                            format(field.value, "MMM yyyy")
                          ) : (
                            <span>Select date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar

                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button

                            {field.value ? (
                              format(field.value, "MMM yyyy")
                            ) : (
                              <span>Select date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar

                )}
              />
            )}

                  <FormLabel>Description</FormLabel>
                  <div className="flex gap-2">
                    <AIEnhancementButton
                      options={{

                      onEnhanced={content =>
                        form.setValue('description', content, {
                          shouldDirty: true
                        })
                      }
                      buttonText='Enhance with AI'
                    />
                    <Button
                      type='button'
                      variant='outline'
                      size='sm'
                      onClick={() => setIsEnhancementDialogOpen(true)}
                      className='text-xs'                    >

                      AI Writer
                    </Button>
                  </div>
                </div>
                <FormControl>
                  <Textarea

                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>Save</>
              )}
            </Button>
          </div>
        </form>
      </Form>
      <AIEnhancementDialog

        isOpen={isEnhancementDialogOpen}
        onClose={() => setIsEnhancementDialogOpen(false)}
        onApply={handleAIEnhancement}
        defaultOptions={{

        }}
        initialContent={form.getValues('description') |''}      />

    </>
  )
is current: z.boolean () .default (false)
description: z.string () .optional ()
location: z.string () .optional ()
})
type FormValues = z.infer<typeof formSchema>
//Create a properly typed WorkExperience object with all required fields const workExperience: WorkExperience = {
  await onSubmit (workExperience)
}
setIsEnhancementDialogOpen (false)
}
}/> <FormField </FormControl> <FormMessage /> </FormItem>)
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField </FormControl> <FormMessage /> </FormItem>) "
}/> <FormField <FormLabel>Current Position</FormLabel> <div className="flex items-center gap-2 h-10" > <Switch /> <label htmlFor="current-position" className="text-sm text-muted-foreground" > I currently work here </label> </div> <FormMessage /> </FormItem>) "
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormLabel>Start Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) "
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>)
}/> {
  !watchIsCurrent && (<FormField control= {
  form.control
}<FormLabel>End Date</FormLabel> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Select date</span>) "
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" aria-hidden="true" /> </Button> </FormControl> </PopoverTrigger> <PopoverContent className="w-auto p-0" align="start" > <Calendar /> </PopoverContent> </Popover> <FormMessage /> </FormItem>)
}/>) "
}</div> <FormField <FormLabel>Description</FormLabel> <div className="flex gap-2" > <AIEnhancementButton > AI Writer </Button> </div> </div> <FormControl> <Textarea placeholder="Describe your responsibilities, achievements, and skills used in this role..." className="min-h-[150px]" {
  ...field
}/> </FormControl> <FormMessage /> </FormItem>) "
