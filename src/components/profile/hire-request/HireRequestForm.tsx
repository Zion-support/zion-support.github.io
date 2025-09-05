
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { useHireRequestForm, FormValues } from "./useHireRequestForm",
import { Button } from "@/components/ui/button",
import { DialogFooter } from "@/components/ui/dialog",
import { Form } from "@/components/ui/form",
import { Loader2 } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { PersonalInfoFields } from "./PersonalInfoFields",
import { ProjectDetailsField } from "./ProjectDetailsField",
import { TimelineField } from "./TimelineField",
import { BudgetFields } from "./BudgetFields",
=======
import React from &quot;react&quot;;
import { useHireRequestForm, FormValues } from &quot;./useHireRequestForm&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { DialogFooter } from &quot;@/components/ui/dialog&quot;;
import { Form } from &quot;@/components/ui/form&quot;;
import { Loader2 } from 'lucide-react'
import { TalentProfile } from &quot;@/types/talent&quot;;
import { PersonalInfoFields } from &quot;./PersonalInfoFields&quot;;
import { ProjectDetailsField } from &quot;./ProjectDetailsField&quot;;
import { TimelineField } from &quot;./TimelineField&quot;;
import { BudgetFields } from &quot;./BudgetFields&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export interface HireRequestFormProps {
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
        
        <ProjectDetailsField form={_form} />
        <TimelineField form={_form} />
        
<<<<<<< HEAD
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <BudgetFields form={form} talent={talent} />
=======
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BudgetFields form={_form} talent={_talent} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
        
        <DialogFooter className=&quot;pt-4&quot;>
          <Button 
<<<<<<< HEAD
            type=&quot;button&quot; 
            variant=&quot;outline&quot; 
            onClick={onClose}
            className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
            disabled={isSubmitting}
=======
            type="button" 
            variant="outline" 
            onClick={_onClose}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            disabled={_isSubmitting}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Cancel
          </Button>
          <Button 
<<<<<<< HEAD
            type=&quot;submit&quot;
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
            disabled={isSubmitting}
=======
            type="submit"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            disabled={_isSubmitting}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
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
