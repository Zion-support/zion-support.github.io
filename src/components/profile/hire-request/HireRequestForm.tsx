<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { useHireRequestForm, FormValues } from './useHireRequestForm';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { Loader2 } from 'lucide-react';
import { TalentProfile } from '@/types/talent';
import { PersonalInfoFields } from './PersonalInfoFields';
import { ProjectDetailsField } from './ProjectDetailsField';
import { TimelineField } from './TimelineField';
import { BudgetFields } from './BudgetFields';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

import React from "react";
import { useHireRequestForm, FormValues } from "./useHireRequestForm";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Loader2 } from 'lucide-react'
import { TalentProfile } from "@/types/talent";
import { PersonalInfoFields } from "./PersonalInfoFields";
import { ProjectDetailsField } from "./ProjectDetailsField";
import { TimelineField } from "./TimelineField";
import { BudgetFields } from "./BudgetFields";
export interface HireRequestFormProps {
  talent: TalentProfile,
  onClose: () => void,
  initialJobTitle?: string;
  userDetails?: {
    name?: string;
    email?: string;
    id?: string
  };
  onSubmitSuccess?: () => void
}

export function HireRequestForm({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) {
  const { form, isSubmitting, onSubmit } = useHireRequestForm({ 
    talent, 
    onClose: onSubmitSuccess || onClose, 
    initialJobTitle;
    userDetails 
  });
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PersonalInfoFields form={form} />
        </div>
        
        <ProjectDetailsField form={form} />
        <TimelineField form={form} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BudgetFields form={form} talent={talent} />
        </div>
        
        <DialogFooter className="pt-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onClose}
<<<<<<< HEAD
            className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'
=======

import React from "react";
import { useHireRequestForm, FormValues } from "./useHireRequestForm";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Loader2 } from 'lucide-react'
import { TalentProfile } from "@/types/talent";
import { PersonalInfoFields } from "./PersonalInfoFields";
import { ProjectDetailsField } from "./ProjectDetailsField";
import { TimelineField } from "./TimelineField";
import { BudgetFields } from "./BudgetFields";
export interface HireRequestFormProps {
  talent: TalentProfile,
  onClose: () => void, initialJobTitle?: string,
  userDetails?: {
    name?: string;
    email?: string;
    id?: string
  };
  onSubmitSuccess?: () => void
}

export function HireRequestForm({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) { const { form, isSubmitting, onSubmit  } = useHireRequestForm({ 
    talent, 

    onClose: onSubmitSuccess || onClose,
    initialJobTitle,

    userDetails 
  });
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PersonalInfoFields form={form} />
        </div>
        
        <ProjectDetailsField form={form} />
        <TimelineField form={form} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BudgetFields form={form} talent={talent} />
        </div>
        
        <DialogFooter className="pt-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onClose}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            disabled={isSubmitting}
          >
            Cancel
          </Button>
<<<<<<< HEAD
<<<<<<< HEAD
          <Button
            type='submit'
            className='bg-zion-purple hover:bg-zion-purple-dark text-white'
=======
          <Button 
            type="submit"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <Button 
            type="submit"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
<<<<<<< HEAD
<<<<<<< HEAD
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
=======
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Submitting...
              </>
            ) : (
              'Submit Request'
            )}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
