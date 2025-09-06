<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import React from 'react'
import { useHireRequestForm, FormValues } from './useHireRequestForm'
import { Button } from '@/components/ui/button'
import { DialogFooter } from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { Loader2 } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { PersonalInfoFields } from "./PersonalInfoFields",
import { ProjectDetailsField } from "./ProjectDetailsField",
import { TimelineField } from "./TimelineField";
import { BudgetFields } from "./BudgetFields";
export interface HireRequestFormProps {
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
    id?: string
  }
  onSubmitSuccess?: () => void
<<<<<<< HEAD
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
=======
}

export function HireRequestForm({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) {
  const { form, isSubmitting, onSubmit } = useHireRequestForm({ 
    talent, 
    onClose: onSubmitSuccess || onClose, 
    initialJobTitle,
    userDetails 
  }),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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
            className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'            disabled={isSubmitting}>;
            Cancel;
          </Button>;
          <Button
            type='submit'
            className='bg-zion-purple hover:bg-zion-purple-dark text-white'            disabled={isSubmitting}>;
            {isSubmitting ? (;
              <>;
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />                Submitting...  onSubmitSuccess?: () => void;
}
export function HireRequestForm({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) {

  const { form, isSubmitting, onSubmit } = useHireRequestForm({
    talent
    onClose: onSubmitSuccess |onClose
    initialJobTitle
    userDetails
  })

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
            disabled={isSubmitting}
        <DialogFooter className="pt-4">
          <Button
            type="button"
            variant="outline"

        <DialogFooter className="pt-4">;
          <Button
            type="button" 
            variant="outline" 
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
            )}
          </Button>
<<<<<<< HEAD
        </DialogFooter>
      </form>
    </Form>
  )
}
  );
}
=======
          <Button 
            type="submit"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                Submitting...
              </>
            ) : (
              'Submit Request'


}
<<<<<<< HEAD
=======
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
          </Button>;
        </DialogFooter>;
      </form>;
    </Form>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
