
import React from "react",
import { useHireRequestForm, FormValues } from "./useHireRequestForm",
import { Button } from "@/components/ui/button",
import { DialogFooter } from "@/components/ui/dialog",
import { Form } from "@/components/ui/form",
import { Loader2 } from "lucide-react",
import { TalentProfile } from "@/types/talent",
import { PersonalInfoFields } from "./PersonalInfoFields",
import { ProjectDetailsField } from "./ProjectDetailsField",
import { TimelineField } from "./TimelineField",
import { BudgetFields } from "./BudgetFields",export interface HireRequestFormProps {
  talent: TalentProfile,
  onClose: () => void,
  initialJobTitle?: string,
  userDetails?: {
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
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=&quot;space-y-6&quot;>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <PersonalInfoFields form={form} />
import React from "react";

export interface HireRequestFormProps {_talent: TalentProfile;
  onClose: () => void;
  initialJobTitle?: string;
  userDetails?: {
    name?: string;
    email?: string;
    id?: string;};
  onSubmitSuccess?: () => void;
}

export function HireRequestForm(_{_talent, _onClose, _initialJobTitle, _userDetails, _onSubmitSuccess}: HireRequestFormProps) {_const { form, _isSubmitting, _onSubmit} = useHireRequestForm({_talent, _onClose: onSubmitSuccess || onClose, _initialJobTitle, _userDetails});
  
  return (
    <Form {_...form}>
      <form onSubmit={_form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PersonalInfoFields form={_form} />
        </div>
        
        <ProjectDetailsField form={_form} />
        <TimelineField form={_form} />
        
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <BudgetFields form={form} talent={talent} />        </div>
        
        <DialogFooter className=&quot;pt-4&quot;>
          <Button 
            type=&quot;button&quot; 
            variant=&quot;outline&quot; 
            onClick={onClose}
            className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
            disabled={isSubmitting}          >
            Cancel
          </Button>
          <Button 
            type=&quot;submit&quot;
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
            disabled={isSubmitting}          >
            {_isSubmitting ? (
              <>
                <Loader2 className=&quot;mr-2 h-4 w-4 animate-spin&quot; />
                Submitting...
              </>
            ) : (
              'Submit Request'
            )}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
