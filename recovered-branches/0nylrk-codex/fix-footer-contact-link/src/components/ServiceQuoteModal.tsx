

import {useState} from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter} from "@/components/ui/dialog";""
import {Button} from "@/components/ui/button";""
import {Input} from "@/components/ui/input";""
import {Textarea} from "@/components/ui/textarea";""
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";""
import {Label} from "@/components/ui/label";""
import {Slider} from "@/components/ui/slider";""
import {Calendar} from "@/components/ui/calendar";""
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";""
import {format} from "date-fns";""
import {CalendarIcon} from "lucide-react";""
import {cn} from "@/lib/utils";""
import {ProductListing} from "@/types/listings";""
import {toast} from '@/hooks/use-toast';
import {supabase} from "@/integrations/supabase/client";""
import { useState } from 'react',
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog",""
import { Button } from "@/components/ui/button",""
import { Input } from "@/components/ui/input",""
import { Textarea } from "@/components/ui/textarea",""
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",""
import { Label } from "@/components/ui/label",""
import { Slider } from "@/components/ui/slider",""
import { Calendar } from "@/components/ui/calendar",""
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",""
import { format } from "date-fns",""
import { CalendarIcon } from "lucide-react",""
import { cn } from "@/lib/utils",""
import { ProductListing } from "@/types/listings",""
import { toast } from '@/hooks/use-toast',
import { supabase } from "@/integrations/supabase/client",""
import { ProductListing } from "@/types/listings";""
import { toast  } from '@/hooks/use-toast';
import { supabase } from "@/integrations/supabase/client";""
import { supabase } from "@/integrations/supabase/client","
interface ServiceQuoteModalProps {
  // TODO: Implement
}
  open: boolean;,
  onOpenChange: (open: boolean) => void;,
  service: ProductListing | null;
const BUDGET_RANGES = ["
  { label: "Less than $5,000", value: "0-5000" }""
  { label: "$5,000 - $10,000", value: "5000-10000" }""
  { label: "$10,000 - $25,000", value: "10000-25000" }""
  { label: "$25,000 - $50,000", value: "25000-50000" }"]"
  { label: "$50,000+", value: "50000+" }]"
const TIMELINE_OPTIONS = ["
  { label: "Less than 1 month", value: "lt-1month" }""
  { label: "1-3 months", value: "1-3months" }""
  { label: "3-6 months", value: "3-6months" }"]"
  { label: "6+ months", value: "6+months" }]"
export function ServiceQuoteModal({ open, onOpenChange, service }: ServiceQuoteModalProps) {
  const [formData, setFormData] = useState({
"
import {supabase} from "@/integrations/supabase/client";"
interface ServiceQuoteModalProps {;
  open: boolean,;)
  onOpenChange: (open: boolean) => void,;

const BUDGET_RANGES = [;"
  { label: "Less than $5,000", value: "0-5000" },;""
  { label: "$5,000 - $10,000", value: "5000-10000" },;""
  { label: "$10,000 - $25,000", value: "10000-25000" },;""
  { label: "$25,000 - $50,000", value: "25000-50000" },;"]"
  { label: "$50,000+", value: "50000+" }],;"
const TIMELINE_OPTIONS = [;"
  { label: "Less than 1 month", value: "lt-1month" },;""
  { label: "1-3 months", value: "1-3months" },;""
  { label: "3-6 months", value: "3-6months" },;"]"
  { label: "6+ months", value: "6+months" }],;"
export function ServiceQuoteModal(): any ({ open, onOpenChange, service }: ServiceQuoteModalProps) {;
  const [formData, setFormData] = useState({;"
    description: ,;
    email: ,;
    budget: BUDGET_RANGES[0].value,;)
    timeframe: TIMELINE_OPTIONS[0].value}),;

  const [startDate, setStartDate] = useState<Date | undefined>(new Date());

  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components / ui / dialog';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { Textarea } from '@/components / ui / textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Label } from '@/components / ui / label';
import { Slider } from '@/components / ui / slider';
import { Calendar } from '@/components / ui / calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components / ui / popover';
import { format } from './date - fns';
import { CalendarIcon } from './lucide-react';
import { cn } from '@/lib / utils';
import { ProductListing } from '@/types / listings';
import {toast} from '@/hooks / use - toast';
import { supabase } from '@/integrations / supabase / client';
  // TODO: Implement
  open: boolean,
  onOpenChange: (open: boolean) => void,
const BUDGET_RANGES = [;
  { label: "Less than $5, 000", value: "0 - 5000" },""
  { label: "$5, 000 - $10, 000", value: "5000 - 10000" },""
  { label: "$10, 000 - $25, 000", value: "10000 - 25000" },""
  { label: "$25, 000 - $50, 000", value: "25000 - 50000" },"]"
  { label: "$50, 000+", value: "50000+" }],"
  { label: "Less than 1 month", value: "lt - 1month" },""
  { label: "1 - 3 months", value: "1 - 3months" },""
  { label: "3 - 6 months", value: "3 - 6months" },"]"
  { label: "6+ months", value: "6 + months" }],"
export /**
 * ServiceQuoteModal - Function description;
 */
function ServiceQuoteModal() {
  const [form_data, setFormData] = useState ({"
    description: ,
    email: ,
    budget: BUDGET_RANGES[0].value,)
    timeframe: TIMELINE_OPTIONS[0].value}),
  const [start_date, setStartDate] = useState < Date | undefined>(new Date ());
  const [end_date, setEndDate] = useState < Date | undefined>(undefined);
  const [current_step, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details');
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const handleInputChange = (e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>) =>: any {
  // TODO: Implement
    const { name, value } = e.target;
    setFormData (prev => ({ ...prev, [name]: value }));
  const handle_submit = async (e: React.FormEvent < HTMLFormElement>) => {
    e.prevent_default ();
    setIsSubmitting (true),


    budget: BUDGET_RANGES[0].value,



  const [startDate, setStartDate] = useState<Date | undefined>(new Date()),

  const [endDate, setEndDate] = useState<Date | undefined>(undefined),

  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details'),
  const [isSubmitting, setIsSubmitting] = useState(false),


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;

  const handleSubmit = async (e: React && React.FormEvent<HTMLFormElement>) => {;

    <Dialog open={open} onOpenChange={onOpenChange}>

      <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]">"

        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-white">"

          
        <form onSubmit={handleSubmit} className="space-y-6">"
</form>"
            <div className="space-y-4">"
</div>"
              <div className="p-4 bg-zion-blue-dark rounded-md border border-zion-blue-light">"
                <h3 className="font-medium text-zion-cyan mb-2">Selected Service</h3>""
                <p className="text-white text-lg">{service?.title |"Custom Service"}</p>""
                <p className="text-zion-slate-light text-sm mt-1">{service?.category}</p>"
              <div className="space-y-2">"
                <Label htmlFor="description" className="text-white">Project Description"
                <Textarea;"
                  id="description"""
                  name="description""
                  value={formData.description}
                  onChange={handleInputChange}"
                  placeholder="Describe your project needs in detail..."""
                  className="h-32 bg-zion-blue-dark border-zion-blue-light text-white resize-none""
                  required;
                />

                <Label htmlFor="budget" className="text-white">Estimated Budget"
                <Select;
                  value={formData.budget}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">"
                    <SelectValue placeholder="Select your budget range" />"

                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">"
                      <SelectItem key={range.value} value={range.value} className="text-white hover:bg-zion-blue-light">"

  const [startDate, setStartDate] = useState<Date | undefined>(new Date()),;

  const [endDate, setEndDate] = useState<Date | undefined>(undefined),;
  const [currentStep, setCurrentStep] = useState<'details' | 'timeline' | 'contact'>('details'),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {;

    <Dialog open={open} onOpenChange={onOpenChange}>;

      <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]">;"

        <DialogHeader>;
          <DialogTitle className="text-2xl font-semibold text-white">;"

        ;"
        <form onSubmit={handleSubmit} className="space-y-6">;"
            <div className="space-y-4">;"
              <div className="p-4 bg-zion-blue-dark rounded-md border border-zion-blue-light">;"
                <h3 className="font-medium text-zion-cyan mb-2">Selected Service</h3>;""
                <p className="text-white text-lg">{service?.title || "Custom Service"}</p>;""
                <p className="text-zion-slate-light text-sm mt-1">{service?.category}</p>;"
              </div>;"
              <div className="space-y-2">;"
                <Label htmlFor="description" className="text-white">Project Description;"
                  value={formData && formData.description}
                />;

                <Label htmlFor="budget" className="text-white">Estimated Budget;"
                  value={formData && formData.budget} 

                  <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">;"
                    <SelectValue placeholder="Select your budget range" />;"

                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">;"
                      <SelectItem key={range.value} value={range.value} className="text-white hover:bg-zion-blue-light">;"

                      <SelectItem key={range && range.value} value={range && range.value} className="text-white hover:bg-zion-blue-light">;"

              </div>;
                <Label className="text-white">Project Timeline;"
                  value={formData && formData.timeframe}

                  onValueChange={(value) => setFormData(prev => ({ ...prev, timeframe: value }))}
                    <SelectValue placeholder="Select your timeline" />;"

                      <SelectItem key={option && option.value} value={option && option.value} className="text-white hover:bg-zion-blue-light">;"

              <div className="grid grid-cols-2 gap-4">;"
                  <Label className="text-white">Expected Start Date;"
                  <Popover>;

                    <PopoverTrigger asChild>;


                      <Button;"
                        variant={"outline"}"
                        className={cn("
                          "justify-start text-left font-normal w-full"""
                          "bg-zion-blue-dark border-zion-blue-light text-white"")
                        )}>;
                        <CalendarIcon className="mr-2 h-4 w-4" />;"
                        {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}"
                    <PopoverContent className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light">;"

                      <Calendar;"
                        mode="single""
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus;"
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white""

                  <Label className="text-white">Expected End Date;"


                          "justify-start text-left font-normal w-full""
                        className={cn(;"
                          "justify-start text-left font-normal w-full",;""
                          "bg-zion-blue-dark border-zion-blue-light text-white";")
                        )}
                      >;
                        {startDate ? format(startDate, "PPP") :<span>Pick a date</span>}"

                        mode="single";"
                        className="p-3 pointer-events-auto bg-zion-blue-dark text-white";"



                    
                  
                  <Label className="text-white">Expected End Date"
                  <Popover>

                    <PopoverTrigger asChild>

                          "justify-start text-left font-normal w-full",""
                        {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}"

                        selected={endDate}
                        onSelect={setEndDate}

                        disabled={(date) => !startDate || date < startDate}

                <Label htmlFor="email" className="text-white">Contact Email;"
                <Input;"
                  id="email"""
                  name="email"""
                  type="email""
                  value={formData && formData.email}
                  placeholder="your@email && email.com"""
                  className="bg-zion-blue-dark border-zion-blue-light text-white""
                  {endDate && ("
                    <div className="flex justify-between">"
                      <span className="text-zion-slate-light">End Date:</span>")"
                      <span className="text-white">{format(endDate, "PPP")}</span>"
                    </div>
                  id="email";""
                  name="email";""
                  type="email";"
                  value={formData.email}
                  placeholder="your@email.com";""
                  className="bg-zion-blue-dark border-zion-blue-light text-white";"

              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-md p-4">;"
                <h3 className="font-medium text-zion-cyan mb-2">Quote Summary</h3>;""
                <div className="space-y-2 text-sm">;"
                  <div className="flex justify-between">;"
                    <span className="text-zion-slate-light">Service:</span>;""
                    <span className="text-white">{service?.title || "Custom Service"}</span>;"
                    <span className="text-zion-slate-light">Budget:</span>;""
                    <span className="text-white">{BUDGET_RANGES && BUDGET_RANGES.find(b => b && b.value === formData && formData.budget)?.label}</span>;"
                    <span className="text-zion-slate-light">Timeline:</span>;""
                    <span className="text-white">{TIMELINE_OPTIONS && TIMELINE_OPTIONS.find(t => t && t.value === formData && formData.timeframe)?.label}</span>;""
                    <span className="text-white">{BUDGET_RANGES.find(b => b.value === formData.budget)?.label}</span>;"
                    <span className="text-white">{TIMELINE_OPTIONS.find(t => t.value === formData.timeframe)?.label}</span>;"
                      <span className="text-zion-slate-light">Start Date:</span>;""
                      <span className="text-white">{format(startDate, "PPP")}</span>;"
                      <span className="text-zion-slate-light">End Date:</span>;""
                      <span className="text-white">{format(endDate, "PPP")}</span>;"
          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">;"
          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-2">"

                type="button"""
                variant="outline""
                onClick={prevStep}"
                className="border-zion-blue-light text-white hover:bg-zion-blue-light">;"

            <div className={cn("flex gap-2", currentStep === 'details' && "ml-auto")}>;"
                onClick={() => onOpenChange(false)}

                  type="button""
                  onClick={nextStep}"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;"

                  type="submit""
                  disabled={isSubmitting}"

      <DialogContent className="bg - zion - blue border - zion - blue - light text - white sm:max - w-[600px]">;"

          <DialogTitle className="text - 2xl font - semibold text - white">;"

        <form on_submit={handle_submit} className="space - y-6">;"
            <div className="space - y-4">;"
              <div className="p - 4 bg - zion - blue - dark rounded - md border border - zion - blue - light">;"
                <h3 className="font - medium text - zion - cyan mb - 2">Selected Service</h3>;""
                <p className="text - white text - lg">{service?.title || "Custom Service"}</p>;""
                <p className="text - zion - slate - light text - sm mt - 1">{service?.category}</p>;"
              <div className="space - y-2">;"
                <Label html_for="description" className="text - white">Project Description;"
                  id="description";""
                  name="description";"
                  value={form_data.description}
                  on_change={handleInputChange}"
                  placeholder="Describe your project needs in detail...";""
                  className="h - 32 bg - zion - blue - dark border - zion - blue - light text - white resize - none";"

                <Label html_for="budget" className="text - white">Estimated Budget;"
                  value={form_data.budget}
                  onValueChange={(value) => setFormData (prev => ({ ...prev, budget: value }))}
                  <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text - white">;"

                  <SelectContent className="bg - zion - blue - dark border - zion - blue - light">;"
                      <SelectItem key={range.value} value={range.value} className="text - white hover:bg - zion - blue - light">;"

                      ))}
            </div>)}"
                <Label className="text - white">Project Timeline;"
                  value={form_data.timeframe}
                  onValueChange={(value) => setFormData (prev => ({ ...prev, timeframe: value }))}

                      <SelectItem key={option.value} value={option.value} className="text - white hover:bg - zion - blue - light">;"

              <div className="grid grid - cols - 2 gap - 4">;"
                  <Label className="text - white">Expected Start Date;"

                    <PopoverTrigger as_child>;

                        className={cn ("
                          "justify - start text - left font - normal w - full";")"
                          "bg - zion - blue - dark border - zion - blue - light text - white")}"
                        <CalendarIcon className="mr - 2 h - 4 w - 4" />;"
                        {start_date ? format (start_date, "PPP") : <span > Pick a date</span>}"
                    <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue - light">;"

                        selected={start_date}
                        on_select={setStartDate}
                        initial_focus;"
                        className="p - 3 pointer - events - auto bg - zion - blue - dark text - white";"

                  <Label className="text - white">Expected End Date;"


                        {end_date ? format (end_date, "PPP") : <span > Pick a date</span>}"

                        selected={end_date}
                        on_select={setEndDate}
                        disabled={(date) => !start_date || date < start_date}

                <Label html_for="email" className="text - white">Contact Email;"
                  value={form_data.email}
                  className="bg - zion - blue - dark border - zion - blue - light text - white";"

              <div className="bg - zion - blue - dark border border - zion - blue - light rounded - md p - 4">;"
                <h3 className="font - medium text - zion - cyan mb - 2">Quote Summary</h3>;""
                <div className="space - y-2 text - sm">;"
                  <div className="flex justify - between">;"
                    <span className="text - zion - slate - light">Service:</span>;""
                    <span className="text - white">{service?.title || "Custom Service"}</span>;"
                    <span className="text - zion - slate - light">Budget:</span>;""
                    <span className="text - white">{BUDGET_RANGES.find (boolean => b.value === form_data.budget)?.label}</span>;"
                    <span className="text - zion - slate - light">Timeline:</span>;""
                    <span className="text - white">{TIMELINE_OPTIONS.find (t => t.value === form_data.timeframe)?.label}</span>;"
                      <span className="text - zion - slate - light">Start Date:</span>;""
                      <span className="text - white">{format (start_date, "PPP")}</span>;"
                      <span className="text - zion - slate - light">End Date:</span>;""
                      <span className="text - white">{format (end_date, "PPP")}</span>;"
                    </div>)}
          <DialogFooter className="flex - col sm:flex - row sm:justify - between sm:space - x-2">;"

                type="button";""
                variant="outline";"
                on_click={prev_step}"
                className="border - zion - blue - light text - white hover:bg - zion - blue - light";"

              )}"
            <div className={cn ("flex gap - 2", current_step === 'details' && "ml - auto")}>;"
                on_click={() => onOpenChange (false)}

                  type="button";"
                  on_click={next_step}"
                  className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";"

                ) : (
                  type="submit";"
                  disabled={is_submitting}"
)
                <Button ;"
                  type="button" ;"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";"


              
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple""
                >

                

                
          
        </form>
      
    
        </form>;
    );
const [startDate, setStartDate] = useState<Date | undefined> (new Date () );

const [endDate, setEndDate] = useState<Date | undefined> (undefined);
const [currentStep, setCurrentStep] = useState<'details'| 'timeline'| 'contact'> ('details');
const [isSubmitting, setIsSubmitting] = useState (false);


return (<Dialog open= {
  open;
}onOpenChange= {
  onOpenChange;
}> <DialogContent className="bg-zion-blue border-zion-blue-light text-white sm:max-w-[600px]" > text-2xl font-semibold text-white"> Request Service Quote   </div> <div className=" space-y-2"> <Label htmlFor=" description"className=" text-white">Project Description <Textarea required /> </div> <div className=" space-y-2"> <Label htmlFor=" budget"className=" text-white">Estimated Budget <Select value= {"
)"
}> <SelectTrigger className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectValue placeholder=" Select your budget range"/>  ) )"
}  </div> </div>) 
}<Select value= {
  formData.timeframe;
}onValueChange= {
  (value) => setFormData (prev => ({
}> <SelectTrigger className=" bg-zion-blue-dark border-zion-blue-light text-white"> <SelectValue placeholder=" Select your timeline"/>  ) )""
}  </div> <div className=" grid grid-cols-2 gap-4"> <div className=" space-y-2"> <Label className=" text-white">Expected Start Date <Popover> <PopoverTrigger asChild> <Button   <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light"> <Calendar initialFocus className=" p-3 pointer-events-auto bg-zion-blue-dark text-white"/>   </div> <div className=" space-y-2"> <Label className=" text-white">Expected End Date <Popover> <PopoverTrigger asChild> <Button   <PopoverContent className=" w-auto p-0 bg-zion-blue-dark border-zion-blue-light"> <Calendar initialFocus className=" p-3 pointer-events-auto bg-zion-blue-dark text-white"/>   </div> </div> </div>)""
}<Input id=" email"name=" email"type=" email"value= {"
  formData.email;
}required /> </div> </div>) 

}</div> </div> </div>) "
}<Button type=" button"variant=" outline"onClick= {"
  prevStep;"
}className=" border-zion-blue-light text-white hover:bg-zion-blue-light"> Previous )"
}> Cancel  {"
  currentStep !== 'contact' ? (<Button type=" button"onClick= {"
  nextStep;)"
}className=" bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" > Next ) : (<Button )"
}</div>  </form>  ) 