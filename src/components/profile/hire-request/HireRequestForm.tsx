<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react'
import { useHireRequestForm, FormValues } from './useHireRequestForm'
import { Button } from '@/components/ui/button'
import { DialogFooter } from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
import { Loader2 } from 'lucide-react'
import { TalentProfile } from '@/types/talent'
import { PersonalInfoFields } from './PersonalInfoFields'
import { ProjectDetailsField } from './ProjectDetailsField'
import { TimelineField } from './TimelineField'
import { BudgetFields } from './BudgetFields'
export interface HireRequestFormProps {
  talent: TalentProfile
  onClose: () => void
  initialJobTitle?: string
  userDetails?: {
    name?: string
    email?: string
    id?: string
  }
  onSubmitSuccess?: () => void
export function HireRequestForm({
  talent,
  onClose,
  initialJobTitle,
  userDetails,
  onSubmitSuccess,
}: HireRequestFormProps) {
  const { form, isSubmitting, onSubmit } = useHireRequestForm({
    talent,
    onClose: onSubmitSuccess || onClose,
    initialJobTitle,
    userDetails,
  })

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import { useHireRequestForm, FormValues } from "./useHireRequestForm",
import { Button } from "@/components/ui/button",
import { DialogFooter } from "@/components/ui/dialog",
import { Form } from "@/components/ui/form",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { Loader2 } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { PersonalInfoFields } from "./PersonalInfoFields",
import { ProjectDetailsField } from "./ProjectDetailsField",
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> import { Loader2 } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { PersonalInfoFields } from "./PersonalInfoFields",
import { ProjectDetailsField } from "./ProjectDetailsField",
import { TimelineField } from "./TimelineField";
import { BudgetFields } from "./BudgetFields";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

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
export interface HireRequestFormProps {;
  talent: TalentProfile;
  onClose: () => void;
  initialJobTitle?: string;
  userDetails?: {;
    name?: string;
    email?: string;


import { TimelineField } from "./TimelineField",
import { BudgetFields } from "./BudgetFields",

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
export interface HireRequestFormProps {
  talent: TalentProfile,
  onClose: () => void,
  initialJobTitle?: string,
  userDetails?: {
<<<<<<< HEAD

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PersonalInfoFields form={form} />
        </div>

                Submitting...
              </>
            ) : (
              'Submit Request'

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { TimelineField } from "./TimelineField";
import { BudgetFields } from "./BudgetFields";
import { TimelineField } from "./TimelineField",
import { BudgetFields } from "./BudgetFields",
export interface HireRequestFormProps {
  talent: TalentProfile,
  onClose: () => void,
  initialJobTitle?: string,
  userDetails?: {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    name?: string;
    email?: string;
    id?: string
  }
  onSubmitSuccess?: () => void
export function HireRequestForm({
  talent
  onClose
  initialJobTitle
  userDetails
  onSubmitSuccess
}: HireRequestFormProps) {
  const { form, isSubmitting, onSubmit } = useHireRequestForm({
    talent
    onClose: onSubmitSuccess |onClose
    initialJobTitle
    userDetails
  })
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>   return (
ursor/fix-website-loading-errors-and-merge-6662
  return (
>>>>>>>     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    name?: string,
    email?: string,
    id?: string
  },
  onSubmitSuccess?: () => void
}

export function HireRequestForm({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) {
  const { form, isSubmitting, onSubmit } = useHireRequestForm({ 
    talent, 
    onClose: onSubmitSuccess || onClose, 
    initialJobTitle,
    userDetails 
  }),
  
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <PersonalInfoFields form={form} />
        </div>
        <ProjectDetailsField form={form} />
        <TimelineField form={form} />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <BudgetFields form={form} talent={talent} />
        </div>
        <DialogFooter className='pt-4'>
          <Button
            type='button'
            variant='outline'
            onClick={onClose}
            className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type='submit'
<<<<<<< HEAD
            className='bg-zion-purple hover:bg-zion-purple-dark text-white'            disabled={isSubmitting}>;
            {isSubmitting ? (;
              <>;
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />                Submitting...  onSubmitSuccess?: () => void;

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
=======
            className='bg-zion-purple hover:bg-zion-purple-dark text-white'            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />                Submitting...  onSubmitSuccess?: () => void
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
}
export function HireRequestForm({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

>>>>>>> }

<<<<<<< HEAD

export function HireRequestForm(): any ({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) {;
  const { form, isSubmitting, onSubmit } = useHireRequestForm({ ;
    talent, ;
    onClose: onSubmitSuccess || onClose, ;
    initialJobTitle;
    userDetails ;
  });

  return (
    <Form {...form}>;
      <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <PersonalInfoFields form={form} />;
        </div>;

        <ProjectDetailsField form={form} />;
        <TimelineField form={form} />;

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <BudgetFields form={form} talent={talent} />;
        </div>;

        <DialogFooter className="pt-4">;
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            disabled={isSubmitting}
        <DialogFooter className="pt-4">
          <Button
            type="button"
            variant="outline"
            onClick = {onClose,}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            disabled = {isSubmitting,}
          >
            Cancel
          </Button>
          <Button
            type='submit'
            className='bg-zion-purple hover:bg-zion-purple-dark text-white'          <Button
            type="submit"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            disabled={isSubmitting}
            disabled = {isSubmitting,}
          >
            {isSubmitting ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 Submitting...
              </>
            ) : (
              'Submit Request'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react",;
import { useHireRequestForm, FormValues } from "./useHireRequestForm",;
import { Button } from "@/components/ui/button",;
import { DialogFooter } from "@/components/ui/dialog",;
import { Form } from "@/components/ui/form",;
import { Loader2 } from 'lucide-react';
import { TalentProfile } from "@/types/talent",;
import { PersonalInfoFields } from "./PersonalInfoFields",;
import { ProjectDetailsField } from "./ProjectDetailsField",;
import { TimelineField } from "./TimelineField",;
import { BudgetFields } from "./BudgetFields",;
export interface HireRequestFormProps {;
  talent: TalentProfile,;
  onClose: () => void,;
  initialJobTitle?: string,;
  userDetails?: {;
    name?: string,;
    email?: string,;
    id?: string;
  },;
  onSubmitSuccess?: () => void;
}
;
export function HireRequestForm({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) {;
  const { form, isSubmitting, onSubmit } = useHireRequestForm({;
    talent,;
    onClose: onSubmitSuccess || onClose,;
    initialJobTitle;
    userDetails;
  });
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <PersonalInfoFields form={form} />;
        </div>;
        <ProjectDetailsField form={form} />;
        <TimelineField form={form} />;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <BudgetFields form={form} talent={talent} />;
        </div>;
        <DialogFooter className="pt-4">;
          <Button;
            type="button";
            variant="outline";
            onClick={onClose}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
            disabled={isSubmitting}
          >;
            Cancel;
          </Button>;
          <Button;
            type="submit";
            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
            disabled={isSubmitting}
          >;
            {isSubmitting ? (;
              <>;
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Submitting...;
              </>;
            ) : (;
              'Submit Request';
            )}
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
          <Button

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        
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
            disabled={isSubmitting}
<<<<<<< HEAD
=======


            onClick = {onClose,}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            disabled = {isSubmitting,}>;
            Cancel;
          </Button>;
          <Button
            type='submit'
            className='bg-zion-purple hover:bg-zion-purple-dark text-white'          <Button
            type="submit"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            disabled={isSubmitting}
            disabled = {isSubmitting,}>;
            {isSubmitting ? (;
              <>;
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Submitting...;
              </>;
            ) : (;
              'Submit Request';


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          >
            Cancel
          </Button>
          <Button 
            type="submit"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                Submitting...
              </>
            ) : (
              'Submit Request'
<<<<<<< HEAD
<<<<<<< HEAD


}


<<<<<<< HEAD
>>>>>>>           </Button>;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            )}
          </Button>
        </DialogFooter>
      </form>;
    </Form>;
  );
};
}
}
import React from "react",;
import { useHireRequestForm, FormValues } from "./useHireRequestForm",;
import { Button } from "@/components/ui/button",;
import { DialogFooter } from "@/components/ui/dialog",;
import { Form } from "@/components/ui/form",;
import { Loader2 } from 'lucide-react';
import { TalentProfile } from "@/types/talent",;
import { PersonalInfoFields } from "./PersonalInfoFields",;
import { ProjectDetailsField } from "./ProjectDetailsField",;
import { TimelineField } from "./TimelineField",;
import { BudgetFields } from "./BudgetFields",;
export interface HireRequestFormProps {;
  talent: TalentProfile,;
  onClose: () => void,;
  initialJobTitle?: string,;
  userDetails?: {;
    name?: string,;
    email?: string,;
    id?: string;
  },;
  onSubmitSuccess?: () => void;
}
;
export function HireRequestForm({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) {;
  const { form, isSubmitting, onSubmit } = useHireRequestForm({;
    talent,;
    onClose: onSubmitSuccess || onClose,;
    initialJobTitle;
    userDetails;
  });
  return (;
    <Form {...form}>;
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <PersonalInfoFields form={form} />;
        </div>;
        <ProjectDetailsField form={form} />;
        <TimelineField form={form} />;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <BudgetFields form={form} talent={talent} />;
        </div>;
        <DialogFooter className="pt-4">;
          <Button;
            type="button";
            variant="outline";
            onClick={onClose}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
            disabled={isSubmitting}
          >;
            Cancel;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          </Button>;
          <Button;
            type="submit";
            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
            disabled={isSubmitting}
          >;
            {isSubmitting ? (;
              <>;
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Submitting...;
              </>;
            ) : (;
              'Submit Request';
            )}
          </Button>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </DialogFooter>;
      </form>;
    </Form>;
  );
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

  );
}

import React from 'react';
import { useHireRequestForm, FormValues } from './useHireRequestForm';
import { Button } from '@/components / ui / button';
import { DialogFooter } from '@/components / ui / dialog';
import { Form } from '@/components / ui / form';
import { Loader2 } from 'lucide-react';
import { TalentProfile } from '@/types / talent';
import { PersonalInfoFields } from './PersonalInfoFields';
import { ProjectDetailsField } from './ProjectDetailsField';
import { TimelineField } from './TimelineField';
import { BudgetFields } from './BudgetFields';
export interface HireRequestFormProps {
  talent: TalentProfile;
  on_close: () => void;
  initialJobTitle?: string;
  user_details?: {
    name?: string;
    email?: string;
    id?: string;
  }
  onSubmitSuccess?: () => void;
export /**
 * HireRequestForm - Function description
 */
function HireRequestForm() {
  const { form, is_submitting, on_submit } = useHireRequestForm ({
    talent,
    on_close: onSubmitSuccess || on_close,
    initialJobTitle,
    user_details,
  });
  return (
    <Form {...form}>;
      <form on_submit={form.handle_submit (on_submit)} className='space - y-6'>;
        <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
          <PersonalInfoFields form={form} />;
        </div>;
        <ProjectDetailsField form={form} />;
        <TimelineField form={form} />;
        <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
          <BudgetFields form={form} talent={talent} />;
        </div>;
        <DialogFooter className='pt - 4'>;
          <Button;
            type='button';
            variant='outline';
            on_click={on_close}
            className='border - zion - purple text - zion - purple hover:bg - zion - purple / 10'            disabled={is_submitting}
          >;
            Cancel;
          </Button>;
          <Button;
            type='submit';
            className='bg - zion - purple hover:bg - zion - purple - dark text - white'            disabled={is_submitting}
          >;
            {is_submitting ? (
              <>;
                <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />                Submitting...  onSubmitSuccess?: () => void;
}
export /**
 * HireRequestForm - Function description
 */
function HireRequestForm() {
  const { form, is_submitting, on_submit } = useHireRequestForm ({
    talent,
    on_close: onSubmitSuccess || on_close,
    initialJobTitle;
    user_details;
  });
  return (
    <Form {...form}>;
      <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
          <PersonalInfoFields form={form} />;
        </div>;
        <ProjectDetailsField form={form} />;
        <TimelineField form={form} />;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
          <BudgetFields form={form} talent={talent} />;
        </div>;
        <DialogFooter className="pt - 4">;
          <Button;
            type="button";
            variant="outline";
            on_click={on_close}
            className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
            disabled={is_submitting}
        <DialogFooter className="pt - 4">;
          <Button;
            type="button";
            variant="outline";
            on_click = {on_close, }
            className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
            disabled = {is_submitting, }
          >;
            Cancel;
          </Button>;
          <Button;
            type='submit';
            className='bg - zion - purple hover:bg - zion - purple - dark text - white'          <Button;
            type="submit";
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";
            disabled={is_submitting}
            disabled = {is_submitting, }
          >;
            {is_submitting ? (
              <>;
                <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />                <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
                Submitting...;
              </>) : (
              'Submit Request')}
          </Button>;
        </DialogFooter>;
      </form>;
    </Form>);
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
