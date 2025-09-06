<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx

<<<<<<< HEAD
<<<<<<< HEAD

=======


=======
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "@/components/icons";
import {
  Popover
  PopoverContent
  PopoverTrigger
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { QuoteFormData } from "@/types/quotes";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useState} from "react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {CalendarIcon} from "@/components/icons";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {QuoteFormData} from "@/types/quotes";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react",
import { format } from "date-fns",
import { Calendar } from "@/components/ui/calendar",
import { Button } from "@/components/ui/button",
import { Label } from "@/components/ui/label",
import { CalendarIcon } from "@/components/icons",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { cn } from "@/lib/utils",
import { QuoteFormData } from "@/types/quotes",
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface TimelineStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void
=======

import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "@/components/icons";
import {
Popover
  PopoverContent
  PopoverTrigger
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { QuoteFormData } from "@/types/quotes";

interface TimelineStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void

  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { QuoteFormData } from "@/types/quotes";
interface TimelineStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (

    <div className="space-y-6">
      <div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

        <h3 className="text-xl font-semibold text-white mb-4">When do you need this?</h3>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<h3 className="text-xl font-semibold text-white mb-4">
          When do you need this?
        </h3>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        <h3 className="text-xl font-semibold text-white mb-4">
          When do you need this?
        </h3>
        <h3 className="text-xl font-semibold text-white mb-4">When do you need this?</h3>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === "fixed"
                  ? "bg-zion-purple/20 border-zion-purple"
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}
              onClick={() => updateFormData({ timeline: "fixed" })}
            >
              <h4 className="font-medium text-white">Fixed Dates</h4>
              <p className="text-sm text-zion-slate-light">
                I have specific start and end dates
              </p>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

            <div 


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<div
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
            <div
            <div 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === "flexible"
                  ? "bg-zion-purple/20 border-zion-purple"
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}
              onClick={() => updateFormData({ timeline: "flexible" })}
            >
              <h4 className="font-medium text-white">Flexible Timeline</h4>
              <p className="text-sm text-zion-slate-light">
                I'm flexible on the timing
              </p>
            </div>
          </div>
<<<<<<< HEAD
          {formData.timeline === "fixed" && (
            <div className="grid grid-cols-1 md: grid-cols-2 gap-4 mt-6">
=======

          {formData.timeline === "fixed" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div>
                <Label className="block mb-2 text-zion-slate-light">
                  Start Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
<<<<<<< HEAD
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark"
                        !formData.startDate && "text-zion-slate-light"
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx
import { useState  } from './react';
import { format  } from './date - fns';
import { Calendar  } from '@/components / ui / calendar';
import { Button  } from '@/components / ui / button';
import { Label  } from '@/components / ui / label';
import { CalendarIcon  } from '@/components / icons';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components / ui / popover';
import { cn  } from '@/lib / utils';
import { QuoteFormData  } from '@/types / quotes';
interface TimelineStepProps {
  form_data: QuoteFormData;
  updateFormData: (data: Partial < QuoteFormData>) => void;
}
export /**
 * TimelineStep - Function description
 */
function TimelineStep() {
  return (
    <div className="space - y-6">;
      <div>;
        <h3 className="text - xl font - semibold text - white mb - 4">;
          When do you need this?;
        </h3>;
        <div className="space - y-4">;
          <div className="flex items - center space - x-4">;
            <div;
              className={`flex - 1 p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${
                form_data.timeline === "fixed";
                  ? "bg - zion - purple / 20 border - zion - purple";
                  : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";
              }`}
              on_click={() => updateFormData ({ timeline: "fixed" })}
            >;
              <h4 className="font - medium text - white">Fixed Dates</h4>;
              <p className="text - sm text - zion - slate - light">;
                I have specific start and end dates;
              </p>;
            </div>;
            <div;
              className={`flex - 1 p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${
                form_data.timeline === "flexible";
                  ? "bg - zion - purple / 20 border - zion - purple";
                  : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";
              }`}
              on_click={() => updateFormData ({ timeline: "flexible" })}
            >;
              <h4 className="font - medium text - white">Flexible Timeline</h4>;
              <p className="text - sm text - zion - slate - light">;
                I'm flexible on the timing;
              </p>;
            </div>;
          </div>;
          {form_data.timeline === "fixed" && (
            <div className="grid grid - cols - 1 md: grid - cols - 2 gap - 4 mt - 6">;
              <div>;
                <Label className="block mb - 2 text - zion - slate - light">;
                  Start Date;
                </Label>;
                <Popover>;
                  <PopoverTrigger as_child>;
                    <Button;
                      variant="outline";
                      className={cn (
                        "w - full justify - start text - left font - normal bg - zion - blue border border - zion - blue - light hover:bg - zion - blue - dark",
                        !form_data.start_date && "text - zion - slate - light",
                      )}
                    >;
                      <CalendarIcon className="mr - 2 h - 4 w - 4" />;
                      {form_data.start_date ? (
                        format (form_data.start_date, "PPP")) : (
                        <span > Pick a date</span>)}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent;
                    className="w - auto p - 0 bg - zion - blue - dark border border - zion - blue - light";
                    align="start";
                  >;
                    <Calendar;
                      mode="single";
                      selected={form_data.start_date}
                      on_select={(date) => updateFormData ({ start_date: date })}
                      initial_focus;
                      className="p - 3 pointer - events - auto";
                    />;
                  </PopoverContent>;
                </Popover>;
              </div>;
              <div>;
                <Label className="block mb - 2 text - zion - slate - light">;
                  End Date;
                </Label>;
                <Popover>;
                  <PopoverTrigger as_child>;
                    <Button;
                      variant="outline";
                      className={cn (
                        "w - full justify - start text - left font - normal bg - zion - blue border border - zion - blue - light hover: bg - zion - blue - dark",
                        !form_data.end_date && "text - zion - slate - light",
                      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx
import {useState} from "react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {CalendarIcon} from "@/components/icons";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {QuoteFormData} from "@/types/quotes";
interface TimelineStepProps {;
  formData: QuoteFormData,;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}
export function TimelineStep(): any ({ formData, updateFormData }: TimelineStepProps) {;
  return (
    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">When do you need this?</h3>;
        <div className="space-y-4">;
          <div className="flex items-center space-x-4">;
            <div
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData && formData.timeline === "fixed" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}
              onClick={() => updateFormData({ timeline: "fixed" })}
=======

import { useState } from "react",;
import { format } from "date-fns",;
import { Calendar } from "@/components/ui/calendar",;
import { Button } from "@/components/ui/button",;
import { Label } from "@/components/ui/label",;
import { CalendarIcon } from "@/components/icons",;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            >;
              <h4 className="font-medium text-white">Fixed Dates</h4>;
              <p className="text-sm text-zion-slate-light">I have specific start and end dates</p>;
            </div>;
<<<<<<< HEAD
            <div
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData && formData.timeline === "flexible" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}
              onClick={() => updateFormData({ timeline: "flexible" })}
=======
            ;
            <div ;
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${;
                formData.timeline === "flexible" ;
                  ? "bg-zion-purple/20 border-zion-purple" ;
                  :"bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50";
              }`}
              onClick={() => updateFormData({ timeline:"flexible" })}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            >;
              <h4 className="font-medium text-white">Flexible Timeline</h4>;
              <p className="text-sm text-zion-slate-light">I'm flexible on the timing</p>;
            </div>;
          </div>;
<<<<<<< HEAD
          {formData && formData.timeline === "fixed" && (;
            <div className="grid grid-cols-1 md: grid-cols-2 gap-4 mt-6">;
=======
          ;
          {formData.timeline === "fixed" && (;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div>;
                <Label className="block mb-2 text-zion-slate-light">Start Date</Label>;
                <Popover>;
                  <PopoverTrigger asChild>;
<<<<<<< HEAD
                    <Button
                      variant="outline"
                      className={cn(
<<<<<<< HEAD
=======
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
                        !formData && formData.startDate && "text-zion-slate-light"
                      )}>;
                      <CalendarIcon className="mr-2 h-4 w-4" />;
                      {formData && formData.startDate ? format(formData && formData.startDate, "PPP") : <span>Pick a date</span>}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx
                    <Calendar
                      mode="single"
                      selected={formData && formData.startDate}
                      onSelect={(date) => updateFormData({ startDate: date })}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx


                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
"w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark"
                        !formData.startDate && "text-zion-slate-light"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.startDate ? (
                        format(formData.startDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={formData.startDate}
                      onSelect={(date) => updateFormData({ startDate: date })}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label className="block mb-2 text-zion-slate-light">
                  End Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
<<<<<<< HEAD
"w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover: bg-zion-blue-dark"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover: bg-zion-blue-dark"

                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                        !formData.endDate && "text-zion-slate-light"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.endDate ? (
                        format(formData.endDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light"
                    align="start"
                  >
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <Calendar
                      mode="single"
                      selected={formData.endDate}
                      onSelect={(date) => updateFormData({ endDate: date })}
                      initialFocus
                      className="p-3 pointer-events-auto"
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                      disabled={(date) =>
                        date < (formData.startDate |new Date())
                      }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react",;
import { format } from "date-fns",;
import { Calendar } from "@/components/ui/calendar",;
import { Button } from "@/components/ui/button",;
import { Label } from "@/components/ui/label",;
import { CalendarIcon } from "@/components/icons",;
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
                <Label className="block mb-2 text-zion-slate-light">Start Date</Label>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <Button;
                      variant="outline";
                      className={cn(;
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark";
========
=======
                    <Button;
                      variant="outline";
                      className={cn(;
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx
                        !formData.startDate && "text-zion-slate-light";
                      )}
                    >;
                      <CalendarIcon className="mr-2 h-4 w-4" />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx
                      {formData.startDate ? format(formData.startDate, "PPP") : <span>Pick a date</span>}
========
                      {formData.startDate ? format(formData.startDate, "PPP") :<span>Pick a date</span>}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">;
                    <Calendar;
                      mode="single";
                      selected={formData.startDate}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx
                      onSelect={(date) => updateFormData({ startDate: date })}

========
                      onSelect={(date) => updateFormData({ startDate:date })}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx
                      initialFocus;
                      className="p-3 pointer-events-auto";
                    />;
                  </PopoverContent>;
                </Popover>;
              </div>;
<<<<<<< HEAD
=======
              ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div>;
                <Label className="block mb-2 text-zion-slate-light">End Date</Label>;
                <Popover>;
                  <PopoverTrigger asChild>;
<<<<<<< HEAD
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover: bg-zion-blue-dark",
                        !formData && formData.endDate && "text-zion-slate-light"
                      )}>;
                      <CalendarIcon className="mr-2 h-4 w-4" />;
                      {formData && formData.endDate ? format(formData && formData.endDate, "PPP") : <span>Pick a date</span>}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">;
                    <Calendar
                      mode="single"
                      selected={formData && formData.endDate}
                      onSelect={(date) => updateFormData({ endDate: date })}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx

                      initialFocus;
                      className="p-3 pointer-events-auto";
<<<<<<< HEAD
<<<<<<< HEAD

                      disabled={(date) => date < (formData.startDate || new Date())}

=======
                      disabled={(date) =>
                        date < (formData.startDate |new Date())
                      }
                      disabled={(date) => date < (formData.startDate || new Date())}

                      disabled={(date) =>
                        date < (formData.startDate || new Date())
                      }

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                      disabled={(date) => date < (formData.startDate || new Date())}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
========
                      initialFocus;
                      className="p-3 pointer-events-auto";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx
                      disabled={(date) => date < (formData && formData.startDate || new Date())}
                    >;
                      <CalendarIcon className="mr - 2 h - 4 w - 4" />;
                      {form_data.end_date ? (
                        format (form_data.end_date, "PPP")) : (
                        <span > Pick a date</span>)}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent;
                    className="w - auto p - 0 bg - zion - blue - dark border border - zion - blue - light";
                    align="start";
                  >;
                    <Calendar;
                      mode="single";
                      selected={form_data.end_date}
                      on_select={(date) => updateFormData ({ end_date: date })}
                      initial_focus;
                      className="p - 3 pointer - events - auto";
                      disabled={(date) =>;
                        date < (form_data.start_date || new Date ());
                      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx

========
=======
                    <Button;
                      variant="outline";
                      className={cn(;
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",;
                        !formData.endDate && "text-zion-slate-light";
                      )}
                    >;
                      <CalendarIcon className="mr-2 h-4 w-4" />;
                      {formData.endDate ? format(formData.endDate, "PPP") :<span>Pick a date</span>}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">;
                    <Calendar;
                      mode="single";
                      selected={formData.endDate}
                      onSelect={(date) => updateFormData({ endDate:date })}
                      initialFocus;
                      className="p-3 pointer-events-auto";
                      disabled={(date) => date < (formData.startDate || new Date())}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx
                    />;
                  </PopoverContent>;
                </Popover>;
              </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx


  )

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
=======
</div>
      </div>
    </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  );

}
<<<<<<< HEAD
;

=======
  );

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx
            </div>)}
        </div>;
      </div>;
    </div>);
=======



}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
            </div>;
          )}
        </div>;
      </div>;
    </div>;
  ),;}
 interface TimelineStepProps {
  formData: QuoteFormData;
updateFormData: (data: Partial<QuoteFormData>) => void 
}export function TimelineStep ({
  formData, updateFormData 
}: TimelineStepProps) {
  return (<div className="space-y-6" > text-xl font-semibold text-white mb-4">When do you need this?</h3> <div className=" space-y-4"> <div className=" flex items-center space-x-4"> <div className= {
  `flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors $ {
  > <h4 className=" font-medium text-white">Fixed Dates</h4> <p className=" text-sm text-zion-slate-light">I have specific start and end dates</p> </div> <div > <h4 className=" font-medium text-white">Flexible Timeline</h4> <p className=" text-sm text-zion-slate-light">I'm flexible on the timing</p> </div> </div> <div> <Label className=" block mb-2 text-zion-slate-light">Start Date</Label> <Popover> <PopoverTrigger asChild> <Button variant=" outline"className= {
  cn (</Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border border-zion-blue-light"align=" start"> <Calendar initialFocus className=" p-3 pointer-events-auto"/> </PopoverContent> </Popover> </div> <div> <Label className=" block mb-2 text-zion-slate-light">End Date</Label> <Popover> <PopoverTrigger asChild> <Button </Button> </PopoverTrigger> <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border border-zion-blue-light"align=" start" > <Calendar /> </PopoverContent> </Popover> </div> </div>) 
}</div> </div> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm/TimelineStep.tsx
=======

}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        </div>
      </div>
    </div>
  )
        </div>;
      </div>;
    </div>;
  );
}
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
