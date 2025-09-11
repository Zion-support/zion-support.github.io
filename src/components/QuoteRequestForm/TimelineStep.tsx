<<<<<<< HEAD
<<<<<<< HEAD
import { format } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { CalendarIcon } from 'lucide-react'
<div

import {
  Popover
  PopoverContent
  PopoverTrigger
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { QuoteFormData } from '@/types/quotes'
=======
<div

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<div

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface TimelineStepProps {
  formData: QuoteFormData
  updateFormData: (data: Partial<QuoteFormData>) => void


<<<<<<< HEAD
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



export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (

<<<<<<< HEAD
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
interface TimelineStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void
xport function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (

interface TimelineStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (

    <div className='space-y-6'>
      <div>
<<<<<<< HEAD
        <h3 className='text-xl font-semibold text-white mb-4'>
          When do you need this?
        </h3>
        <div className='space-y-4'>
          <div className='flex items-center space-x-4'>
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
            <div
            <div
    <div className="space-y-6">
      <div>
        <h3 className='text-xl font-semibold text-white mb-4'>
          When do you need this?
        </h3>
        <div className='space-y-4'>
          <div className='flex items-center space-x-4'>
            <div
        <h3 className="text-xl font-semibold text-white mb-4">When do you need this?</h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div 
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === "fixed" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
=======

              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData && formData.timeline === 'fixed'
                  ? 'bg-zion-purple/20 border-zion-purple'
                  : 'bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }`}
              onClick={() => updateFormData({ timeline: 'fixed' })}            >
              <h4 className='font-medium text-white'>Fixed Dates</h4>
              <p className='text-sm text-zion-slate-light'>
                I have specific start and end dates
              </p>
            </div>
<<<<<<< HEAD
              onClick={() => updateFormData({ timeline: 'fixed' })}            >;
              <h4 className='font-medium text-white'>Fixed Dates</h4>;
              <p className='text-sm text-zion-slate-light'>;
                I have specific start and end dates;
              </p>;
            </div>;
            <div
            <div
              onClick={() => updateFormData({ timeline: "fixed" })}
            >
              <h4 className="font-medium text-white">Fixed Dates</h4>
              <p className="text-sm text-zion-slate-light">I have specific start and end dates</p>
            </div>
            
            <div 
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === "flexible" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}
              onClick={() => updateFormData({ timeline: "flexible" })}
            >
              <h4 className="font-medium text-white">Flexible Timeline</h4>
              <p className="text-sm text-zion-slate-light">I'm flexible on the timing</p>
            </div>
          </div>
          {formData.timeline === 'fixed' && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
          {formData.timeline === 'fixed' && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
          
          {formData.timeline === "fixed" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <Label className="block mb-2 text-zion-slate-light">Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
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
=======
    <div className="space-y-6">
      <div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div

              onClick={() => updateFormData({ timeline: "fixed" })}
            >
              <h4 className="font-medium text-white">Fixed Dates</h4>
              <p className="text-sm text-zion-slate-light">I have specific start and end dates</p>
            </div>
            
            <div 

              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData && formData.timeline === 'flexible'
                  ? 'bg-zion-purple/20 border-zion-purple'
                  : 'bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50'
              }`}
<<<<<<< HEAD
              onClick={() => updateFormData({ timeline: 'flexible' })}


=======
              onClick={() => updateFormData({ timeline: "flexible" })}
            >
              <h4 className="font-medium text-white">Flexible Timeline</h4>
              <p className="text-sm text-zion-slate-light">I'm flexible on the timing</p>
            </div>
          </div>
          {formData.timeline === 'fixed' && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          
          {formData.timeline === "fixed" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">


              <div>
                <Label className='block mb-2 text-zion-slate-light'>
                  Start Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button

<<<<<<< HEAD
              onClick={() => updateFormData({ timeline: 'flexible' })}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                I'm flexible on the timing;
              </p>;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
                        !formData.startDate && "text-zion-slate-light"
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.startDate ? format(formData.startDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">
                    <Calendar
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      mode='single'
                      selected={formData.startDate}
                      onSelect={date => updateFormData({ startDate: date })}                      initialFocus
                      className='p-3 pointer-events-auto'
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      mode="single"
                      selected={formData.startDate}
                      onSelect={(date) => updateFormData({ startDate: date })}
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
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
              
              <div>
                <Label className="block mb-2 text-zion-slate-light">End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
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

                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
                        !formData.endDate && "text-zion-slate-light"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.endDate ? format(formData.endDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">
                    <Calendar
                      mode='single'
                      onSelect={date => updateFormData({ endDate: date })}
                      initialFocus
                      mode='single'
                      mode="single"
                      selected={formData.endDate}
                      onSelect={date => updateFormData({ endDate: date })}
                      initialFocus
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
                    />
                  </PopoverContent>
                </Popover>
              </div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              


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


<<<<<<< HEAD
                      selected={formData && formData.startDate}
                      onSelect={date => updateFormData({ startDate: date })}                      initialFocus;
                      className='p-3 pointer-events-auto';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    />;
                  </PopoverContent>;
                </Popover>;
              </div>;
<<<<<<< HEAD
=======

                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
                        !formData.endDate && "text-zion-slate-light"



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      )}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent
                    className='w-auto p-0 bg-zion-blue-dark border border-zion-blue-light'
                    align='start'>;
                    <Calendar

<<<<<<< HEAD
=======
                      initialFocus;
                      className='p-3 pointer-events-auto';
                      disabled={date =>;
                        date < (formData && formData.startDate || new Date());
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                      mode="single"


                      selected={formData.endDate}
                      onSelect={date => updateFormData({ endDate: date })}
                      initialFocus
<<<<<<< HEAD

=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>)}
        </div>;
      </div>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
              ;
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
              <div>;
                <Label className="block mb-2 text-zion-slate-light">End Date</Label>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <Button;
                      variant="outline";
                      className={cn(;
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark";
                        !formData.endDate && "text-zion-slate-light";
                      )}
                    >;
                      <CalendarIcon className="mr-2 h-4 w-4" />;
                      {formData.endDate ? format(formData.endDate, "PPP") : <span>Pick a date</span>}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">;
                    <Calendar;
                      mode="single";
                      selected={formData.endDate}
                      onSelect={(date) => updateFormData({ endDate: date })}
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
  );
}
;
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
