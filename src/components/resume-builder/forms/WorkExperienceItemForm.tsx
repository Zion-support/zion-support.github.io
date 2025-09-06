
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
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton";
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog";
import { useState } from 'react',
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm } from "react-hook-form",
import { z } from "zod",
import { WorkExperience } from "@/types/resume",
import { Button } from "@/components/ui/button",
import { Calendar } from "@/components/ui/calendar",
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Textarea } from "@/components/ui/textarea",
import { cn } from "@/lib/utils",
import { Switch } from "@/components/ui/switch",
import { format } from "date-fns",
import { CalendarIcon, Loader2 } from 'lucide-react'
import { AIEnhancementButton } from "@/components/ai-enhancement/AIEnhancementButton",
import { AIEnhancementDialog } from "@/components/ai-enhancement/AIEnhancementDialog",

import { useState } from 'react',;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
import { z } from "zod",;
import { WorkExperience } from "@/types/resume",;
import { Button } from "@/components/ui/button",;
import { Calendar } from "@/components/ui/calendar",;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { Textarea } from "@/components/ui/textarea",;
import { cn } from "@/lib/utils",;
import { Switch } from "@/components/ui/switch",;
import { format } from "date-fns",;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <FormField
              control={form.control}
              name='location'
              render={({ field }: { field: any }) => (                <FormItem>
            />
            <FormField
              control={form.control}
              name='is_current'
              render={({ field }: { field: any }) => (
                <FormItem className='flex flex-col'>                  <FormLabel>Current Position</FormLabel>
                  <div className='flex items-center gap-2 h-10'>
                    <Switch
                      aria-label='Current position'
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id='current-position'                    />
                    <label
                      htmlFor='current-position'
                      className='text-sm text-muted-foreground'
                    >
              )}

            />;
          </div>;



          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >

                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >

                          disabled={date => date > new Date()}                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                      className='text-xs'                    >;
                      <PopoverContent className='w - auto p - 0' align='start'>;
                        <Calendar;
                          mode='single';
                          selected={field.value || undefined}
                          on_select={field.on_change}
                          initial_focus;
                          caption_layout='dropdown - buttons';
                          from_year={1990}
                          to_year={new Date ().getFullYear ()}
                          disabled={date => date > new Date ()}                        />;
                      </PopoverContent>;
                    </Popover>;
                    <FormMessage />;
                  </FormItem>)}
              />)}
          </div>;
          <FormField;
            control={form.control}
            name='description';
            render={({ field }: { field: any }) => (              <FormItem>;
                <div className='flex justify - between items - center'>;
                  <FormLabel > Description</FormLabel>;
                  <div className='flex gap - 2'>;
                    <AIEnhancementButton;
                      options={{
                        enhancement_type: 'work - description',
                        content: field.value || '',
                        context: `${watchRoleTitle} at ${watchCompanyName}`,
                      }}
                      on_enhanced={content =>;
                        form.set_value ('description', content, {
                          should_dirty: true,
                        });
                      }
                      button_text='Enhance with AI';
                    />;
                    <Button;
                      type='button';
                      variant='outline';
                      size='sm';
                      on_click={() => setIsEnhancementDialogOpen (true)}
                      className='text - xs'                    >;
                      AI Writer;
                    </Button>;
                  </div>;
                </div>;
                <FormControl>;

                  <Textarea;
                    placeholder='Describe your responsibilities, achievements, and skills used in this role...';
                    className='min - h-[150px]';

                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;


          </div>;
          <FormField;
            control={form.control}
            name="description"
            render={({ field }: { field: any }) => (
              <FormItem>
                <div className="flex justify-between items-center">


                  <FormLabel>Description</FormLabel>
                  <div className="flex gap-2">
                    <AIEnhancementButton
                      options={{


                      AI Writer
                    placeholder='Describe your responsibilities, achievements, and skills used in this role...'
                    className='min-h-[150px]'
          <div className='flex justify-end gap-2'>
            <Button type='button' variant='outline' onClick={onCancel}>
ursor/fix-website-loading-errors-and-merge-6662
          />;

          <div className='flex justify-end gap-2'>;
            <Button type='button' variant='outline' onClick={onCancel}>;
              Cancel;
            </Button>;
            <Button type='submit' disabled={isSubmitting}>;
              {isSubmitting ? (;
                <>;
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />;
                  Saving...;
                </>;
              ) : (;
                <>Save</>;
              )}
              </FormItem>)}
          />;
          <div className='flex justify - end gap - 2'>;
            <Button type='button' variant='outline' on_click={on_cancel}>;
              Cancel;
            </Button>;
            <Button type='submit' disabled={is_submitting}>;
              {is_submitting ? (
                <>;
                  <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />;
                  Saving...;
                </>) : (
                <>Save</>)}
            </Button>;
          </div>;
        </form>;
      </Form>;


        title="Enhance Work Experience Description"


          enhancementType: "work-description",
;
