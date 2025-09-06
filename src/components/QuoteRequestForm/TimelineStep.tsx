<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import { format } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { CalendarIcon } from 'lucide-react'

import {
  Popover
  PopoverContent
  PopoverTrigger
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { QuoteFormData } from '@/types/quotes'
<<<<<<< HEAD
=======
interface TimelineStepProps {
  formData: QuoteFormData
  updateFormData: (data: Partial<QuoteFormData>) => void
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { format } from "date-fns",
import { Calendar } from "@/components/ui/calendar",
import { Button } from "@/components/ui/button",
import { Label } from "@/components/ui/label",
import { CalendarIcon } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { cn } from "@/lib/utils",
import { QuoteFormData } from "@/types/quotes",
interface TimelineStepProps {
  formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>) => void
}
<<<<<<< HEAD
<<<<<<< HEAD

export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (

              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
=======
>>>>>>> 
interface TimelineStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void
xport function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
interface TimelineStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

    <div className='space-y-6'>
      <div>
        <h3 className='text-xl font-semibold text-white mb-4'>
          When do you need this?
        </h3>
        <div className='space-y-4'>
          <div className='flex items-center space-x-4'>
<<<<<<< HEAD
========
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CalendarIcon } from 'lucide-react';
import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { QuoteFormData } from '@/types/quotes';
interface TimelineStepProps {;
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
export function TimelineStep(): any ({ formData, updateFormData }: TimelineStepProps) {;
  return (
    <div className='space-y-6'>;
      <div>;
        <h3 className='text-xl font-semibold text-white mb-4'>;
          When do you need this?;
        </h3>;
        <div className='space-y-4'>;
          <div className='flex items-center space-x-4'>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/QuoteRequestForm/TimelineStep.tsx
            <div
=======
            <div
=======
    <div className="space-y-6">
      <div>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <h3 className='text-xl font-semibold text-white mb-4'>
          When do you need this?
        </h3>
        <div className='space-y-4'>
          <div className='flex items-center space-x-4'>
            <div
<<<<<<< HEAD
>>>>>>>               className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
        <h3 className="text-xl font-semibold text-white mb-4">When do you need this?</h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div 
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                formData.timeline === "fixed" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
<<<<<<< HEAD

              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              onClick={() => updateFormData({ timeline: 'fixed' })}            >
              <h4 className='font-medium text-white'>Fixed Dates</h4>
              <p className='text-sm text-zion-slate-light'>
                I have specific start and end dates
              </p>
            </div>
<<<<<<< HEAD
========
              onClick={() => updateFormData({ timeline: 'fixed' })}            >;
              <h4 className='font-medium text-white'>Fixed Dates</h4>;
              <p className='text-sm text-zion-slate-light'>;
                I have specific start and end dates;
              </p>;
            </div>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/QuoteRequestForm/TimelineStep.tsx
            <div
>>>>>>>               className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            <div
=======
              onClick={() => updateFormData({ timeline: "fixed" })}
            >
              <h4 className="font-medium text-white">Fixed Dates</h4>
              <p className="text-sm text-zion-slate-light">I have specific start and end dates</p>
            </div>
            
            <div 
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                formData.timeline === "flexible" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              onClick={() => updateFormData({ timeline: "flexible" })}
            >
              <h4 className="font-medium text-white">Flexible Timeline</h4>
              <p className="text-sm text-zion-slate-light">I'm flexible on the timing</p>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

              <div>
=======
          {formData.timeline === 'fixed' && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
>>>>>>>               <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          {formData.timeline === 'fixed' && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
=======
          
          {formData.timeline === "fixed" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <Label className="block mb-2 text-zion-slate-light">Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      variant='outline'
                      className={cn(
                        'w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark'
                        !formData.startDate && 'text-zion-slate-light'
                      )}                    >
                      <CalendarIcon className='mr-2 h-4 w-4' />
                      {formData.startDate ? (
                        format(formData.startDate, 'PPP')
                      ) : (
                        <span>Pick a date</span>
<<<<<<< HEAD
>>>>>>>                       )}



xport function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (

    <div className="space-y-6">
      <div>

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData && formData.timeline === 'fixed'
                  ? 'bg-zion-purple/20 border-zion-purple'
                  : 'bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50'
              }`}

              onClick={() => updateFormData({ timeline: 'fixed' })}            >;
              <h4 className='font-medium text-white'>Fixed Dates</h4>;
              <p className='text-sm text-zion-slate-light'>;
                I have specific start and end dates;
              </p>;
            </div>;


            <div
              onClick={() => updateFormData({ timeline: "fixed" })}
            >
              <h4 className="font-medium text-white">Fixed Dates</h4>
              <p className="text-sm text-zion-slate-light">I have specific start and end dates</p>
            </div>
            
            <div 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData && formData.timeline === 'flexible'
                  ? 'bg-zion-purple/20 border-zion-purple'
                  : 'bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50'
              }`}
              onClick={() => updateFormData({ timeline: 'flexible' })}


          
          {formData.timeline === "fixed" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
              <div>
                <Label className='block mb-2 text-zion-slate-light'>
                  Start Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button

========
              onClick={() => updateFormData({ timeline: 'flexible' })}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/QuoteRequestForm/TimelineStep.tsx
            >;
              <h4 className='font-medium text-white'>Flexible Timeline</h4>;
              <p className='text-sm text-zion-slate-light'>;
import { format } from 'date - fns';
import { Calendar } from '@/components / ui / calendar';
import { Button } from '@/components / ui / button';
import { Label } from '@/components / ui / label';
import { CalendarIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components / ui / popover';
import { cn } from '@/lib / utils';
import { QuoteFormData } from '@/types / quotes';
interface TimelineStepProps {
  form_data: QuoteFormData;
  updateFormData: (data: Partial < QuoteFormData>) => void;
export /**
 * TimelineStep - Function description
 */
function TimelineStep() {
  return (
    <div className='space - y-6'>;
      <div>;
        <h3 className='text - xl font - semibold text - white mb - 4'>;
          When do you need this?;
        </h3>;
        <div className='space - y-4'>;
          <div className='flex items - center space - x-4'>;
            <div;
              className={`flex - 1 p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${
                form_data.timeline === 'fixed';
                  ? 'bg - zion - purple / 20 border - zion - purple';
                  : 'bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50';
              }`}
              on_click={() => updateFormData ({ timeline: 'fixed' })}            >;
              <h4 className='font - medium text - white'>Fixed Dates</h4>;
              <p className='text - sm text - zion - slate - light'>;
                I have specific start and end dates;
              </p>;
            </div>;
            <div;
              className={`flex - 1 p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${
                form_data.timeline === 'flexible';
                  ? 'bg - zion - purple / 20 border - zion - purple';
                  : 'bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50';
              }`}
              on_click={() => updateFormData ({ timeline: 'flexible' })}
            >;
              <h4 className='font - medium text - white'>Flexible Timeline</h4>;
              <p className='text - sm text - zion - slate - light'>;
<<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/QuoteRequestForm/TimelineStep.tsx
                I'm flexible on the timing;
              </p>;
            </div>;
          </div>;
<<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
                        !formData.startDate && "text-zion-slate-light"
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                      )}
>>>>>>>                     >
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      )}
                    >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.startDate ? format(formData.startDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">
                    <Calendar
<<<<<<< HEAD
<<<<<<< HEAD

                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      mode='single'
                      selected={formData.startDate}
                      onSelect={date => updateFormData({ startDate: date })}                      initialFocus
                      className='p-3 pointer-events-auto'
<<<<<<< HEAD
>>>>>>>                     />
                  </PopoverContent>
                </Popover>
              </div>
>>>>>>>               <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                      mode="single"
                      selected={formData.startDate}
                      onSelect={(date) => updateFormData({ startDate: date })}
                      initialFocus
                      className="p-3 pointer-events-auto"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    />
                  </PopoverContent>
                </Popover>
              </div>
<<<<<<< HEAD
=======
              
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <Label className="block mb-2 text-zion-slate-light">End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
<<<<<<< HEAD

=======
<<<<<<< HEAD
                      variant='outline'
                      className={cn(
                        'w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark'
                        !formData.endDate && 'text-zion-slate-light'
                      )}                    >
                      <CalendarIcon className='mr-2 h-4 w-4' />
                      {formData.endDate ? (
                        format(formData.endDate, 'PPP')
                      ) : (
                        <span>Pick a date</span>
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
                        !formData.endDate && "text-zion-slate-light"
<<<<<<< HEAD
<<<<<<< HEAD

                      )}
=======
>>>>>>>                       )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.endDate ? format(formData.endDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">
                    <Calendar
<<<<<<< HEAD
<<<<<<< HEAD

                      selected={formData.endDate}
                      onSelect={date => updateFormData({ endDate: date })}
                      initialFocus

=======
                      mode='single'
>>>>>>>                       selected={formData.endDate}
                      onSelect={date => updateFormData({ endDate: date })}
                      initialFocus
=======
                      mode='single'
=======
                      mode="single"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      selected={formData.endDate}
                      onSelect={date => updateFormData({ endDate: date })}
                      initialFocus
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      className='p-3 pointer-events-auto'
                      disabled={date =>
                        date < (formData.startDate |new Date())
                      }                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>;
  );
};
}
<<<<<<< HEAD
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                    />
                  </PopoverContent>
                </Popover>
              </div>


              


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
              <div>
                <Label className='block mb-2 text-zion-slate-light'>
                  End Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button

                      selected={formData && formData.startDate}
                      onSelect={date => updateFormData({ startDate: date })}                      initialFocus;
                      className='p-3 pointer-events-auto';


========
                      selected={formData && formData.startDate}
                      onSelect={date => updateFormData({ startDate: date })}                      initialFocus;
                      className='p-3 pointer-events-auto';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/QuoteRequestForm/TimelineStep.tsx
          {form_data.timeline === 'fixed' && (
            <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4 mt - 6'>;
              <div>;
                <Label className='block mb - 2 text - zion - slate - light'>;
                  Start Date;
                </Label>;
                <Popover>;
                  <PopoverTrigger as_child>;
                    <Button;
                      variant='outline';
                      className={cn (
                        'w - full justify - start text - left font - normal bg - zion - blue border border - zion - blue - light hover:bg - zion - blue - dark',
                        !form_data.start_date && 'text - zion - slate - light')}                    >;
                      <CalendarIcon className='mr - 2 h - 4 w - 4' />;
                      {form_data.start_date ? (
                        format (form_data.start_date, 'PPP')) : (
                        <span > Pick a date</span>)}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent;
                    className='w - auto p - 0 bg - zion - blue - dark border border - zion - blue - light';
                    align='start';
                  >;
                    <Calendar;
                      mode='single';
                      selected={form_data.start_date}
                      on_select={date => updateFormData ({ start_date: date })}                      initial_focus;
                      className='p - 3 pointer - events - auto';
=======

import { format } from "date-fns",;
import { Calendar } from "@/components/ui/calendar",;
import { Button } from "@/components/ui/button",;
import { Label } from "@/components/ui/label",;
import { CalendarIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { cn } from "@/lib/utils",;
import { QuoteFormData } from "@/types/quotes",;
;
interface TimelineStepProps {;
  formData:QuoteFormData,;
  updateFormData:(data:Partial<QuoteFormData>) => void;
}
;
export function TimelineStep({ formData, updateFormData } TimelineStepProps) {;
  return (;
    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">When do you need this?</h3>;
        ;
        <div className="space-y-4">;
          <div className="flex items-center space-x-4">;
            <div ;
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${;
                formData.timeline === "fixed" ;
                  ? "bg-zion-purple/20 border-zion-purple" ;
                  :"bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50";
              }`}
              onClick={() => updateFormData({ timeline:"fixed" })}
            >;
              <h4 className="font-medium text-white">Fixed Dates</h4>;
              <p className="text-sm text-zion-slate-light">I have specific start and end dates</p>;
            </div>;
            ;
            <div ;
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${;
                formData.timeline === "flexible" ;
                  ? "bg-zion-purple/20 border-zion-purple" ;
                  :"bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50";
              }`}
              onClick={() => updateFormData({ timeline:"flexible" })}
            >;
              <h4 className="font-medium text-white">Flexible Timeline</h4>;
              <p className="text-sm text-zion-slate-light">I'm flexible on the timing</p>;
            </div>;
          </div>;
          ;
          {formData.timeline === "fixed" && (;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">;
              <div>;
                <Label className="block mb-2 text-zion-slate-light">Start Date</Label>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <Button;
                      variant="outline";
                      className={cn(;
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",;
                        !formData.startDate && "text-zion-slate-light";
                      )}
                    >;
                      <CalendarIcon className="mr-2 h-4 w-4" />;
                      {formData.startDate ? format(formData.startDate, "PPP") :<span>Pick a date</span>}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">;
                    <Calendar;
                      mode="single";
                      selected={formData.startDate}
                      onSelect={(date) => updateFormData({ startDate:date })}
                      initialFocus;
                      className="p-3 pointer-events-auto";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    />;
                  </PopoverContent>;
                </Popover>;
              </div>;
<<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx

                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
                        !formData.endDate && "text-zion-slate-light"



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                      )}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent
                    className='w-auto p-0 bg-zion-blue-dark border border-zion-blue-light'
                    align='start'>;
                    <Calendar

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/QuoteRequestForm/TimelineStep.tsx
                      initialFocus;
                      className='p-3 pointer-events-auto';
                      disabled={date =>;
                        date < (formData && formData.startDate || new Date());
<<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
                      mode="single"


                      selected={formData.endDate}
                      onSelect={date => updateFormData({ endDate: date })}
                      initialFocus

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      className="p-3 pointer-events-auto"
import { format } from "date-fns",;
import { Calendar } from "@/components/ui/calendar",;
import { Button } from "@/components/ui/button",;
import { Label } from "@/components/ui/label",;
import { CalendarIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { cn } from "@/lib/utils",;
import { QuoteFormData } from "@/types/quotes",;
interface TimelineStepProps {;
  formData: QuoteFormData,;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}
;
export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {;
  return (;
    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">When do you need this?</h3>;
        <div className="space-y-4">;
          <div className="flex items-center space-x-4">;
            <div;
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${;
                formData.timeline === "fixed";
                  ? "bg-zion-purple/20 border-zion-purple";
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50";
              }`}
              onClick={() => updateFormData({ timeline: "fixed" })}
            >;
              <h4 className="font-medium text-white">Fixed Dates</h4>;
              <p className="text-sm text-zion-slate-light">I have specific start and end dates</p>;
            </div>;
            <div;
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${;
                formData.timeline === "flexible";
                  ? "bg-zion-purple/20 border-zion-purple";
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50";
              }`}
              onClick={() => updateFormData({ timeline: "flexible" })}
            >;
              <h4 className="font-medium text-white">Flexible Timeline</h4>;
              <p className="text-sm text-zion-slate-light">I'm flexible on the timing</p>;
            </div>;
          </div>;
          {formData.timeline === "fixed" && (;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">;
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/QuoteRequestForm/TimelineStep.tsx
              <div>;
                <Label className='block mb - 2 text - zion - slate - light'>;
                  End Date;
                </Label>;
                <Popover>;
                  <PopoverTrigger as_child>;
                    <Button;
                      variant='outline';
                      className={cn (
                        'w - full justify - start text - left font - normal bg - zion - blue border border - zion - blue - light hover:bg - zion - blue - dark',
                        !form_data.end_date && 'text - zion - slate - light')}                    >;
                      <CalendarIcon className='mr - 2 h - 4 w - 4' />;
                      {form_data.end_date ? (
                        format (form_data.end_date, 'PPP')) : (
                        <span > Pick a date</span>)}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent;
                    className='w - auto p - 0 bg - zion - blue - dark border border - zion - blue - light';
                    align='start';
                  >;
                    <Calendar;
                      mode='single';
                      selected={form_data.end_date}
                      on_select={date => updateFormData ({ end_date: date })}
                      initial_focus;
                      className='p - 3 pointer - events - auto';
                      disabled={date =>;
                        date < (form_data.start_date || new Date ());
                      }                    />;
                  </PopoverContent>;
                </Popover>;
              </div>;
<<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/QuoteRequestForm/TimelineStep.tsx
            </div>)}
        </div>;
      </div>;
    </div>);
}
<<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> ;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
              ;
=======
              <div>;
                <Label className="block mb-2 text-zion-slate-light">Start Date</Label>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <Button;
                      variant="outline";
                      className={cn(;
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark";
                        !formData.startDate && "text-zion-slate-light";
                      )}
                    >;
                      <CalendarIcon className="mr-2 h-4 w-4" />;
                      {formData.startDate ? format(formData.startDate, "PPP") : <span>Pick a date</span>}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">;
                    <Calendar;
                      mode="single";
                      selected={formData.startDate}
                      onSelect={(date) => updateFormData({ startDate: date })}
                      initialFocus;
                      className="p-3 pointer-events-auto";
                    />;
                  </PopoverContent>;
                </Popover>;
              </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div>;
                <Label className="block mb-2 text-zion-slate-light">End Date</Label>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <Button;
                      variant="outline";
                      className={cn(;
<<<<<<< HEAD
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",;
=======
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        !formData.endDate && "text-zion-slate-light";
                      )}
                    >;
                      <CalendarIcon className="mr-2 h-4 w-4" />;
<<<<<<< HEAD
                      {formData.endDate ? format(formData.endDate, "PPP") :<span>Pick a date</span>}
=======
                      {formData.endDate ? format(formData.endDate, "PPP") : <span>Pick a date</span>}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">;
                    <Calendar;
                      mode="single";
                      selected={formData.endDate}
<<<<<<< HEAD
                      onSelect={(date) => updateFormData({ endDate:date })}
=======
                      onSelect={(date) => updateFormData({ endDate: date })}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      initialFocus;
                      className="p-3 pointer-events-auto";
                      disabled={(date) => date < (formData.startDate || new Date())}
                    />;
                  </PopoverContent>;
                </Popover>;
              </div>;
            </div>;
          )}
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
  ),;}
 interface TimelineStepProps {;
  formData: QuoteFormData;
updateFormData: (data: Partial<QuoteFormData>) => void ;
}export function TimelineStep ({;
  formData, updateFormData ;
}: TimelineStepProps) {;
  return (<div className="space-y-6" > text-xl font-semibold text-white mb-4">When do you need this?</h3> <div className=" space-y-4"> <div className=" flex items-center space-x-4"> <div className= {;
  `flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors $ {";
  > <h4 className=" font-medium text-white">Fixed Dates</h4> <p className=" text-sm text-zion-slate-light">I have specific start and end dates</p> </div> <div > <h4 className=" font-medium text-white">Flexible Timeline</h4> <p className=" text-sm text-zion-slate-light">I'm flexible on the timing</p> </div> </div> <div> <Label className=" block mb-2 text-zion-slate-light">Start Date</Label> <Popover> <PopoverTrigger asChild> <Button variant=" outline"className= {";
  cn (</Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border border-zion-blue-light"align=" start"> <Calendar initialFocus className=" p-3 pointer-events-auto"/> </PopoverContent> </Popover> </div> <div> <Label className=" block mb-2 text-zion-slate-light">End Date</Label> <Popover> <PopoverTrigger asChild> <Button </Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border border-zion-blue-light"align=" start" > <Calendar /> </PopoverContent> </Popover> </div> </div>) ;
}</div> </div> </div>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/QuoteRequestForm/TimelineStep.tsx
=======
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
