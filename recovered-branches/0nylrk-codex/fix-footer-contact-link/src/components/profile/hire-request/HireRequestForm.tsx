
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {useHireRequestForm, FormValues} from "./useHireRequestForm";
import {Button} from "@/components/ui/button";
import {DialogFooter} from "@/components/ui/dialog";
import {Form} from "@/components/ui/form";
import {Loader2} from "lucide-react";
import {TalentProfile} from "@/types/talent";
import {PersonalInfoFields} from "./PersonalInfoFields";
import {ProjectDetailsField} from "./ProjectDetailsField";
import {TimelineField} from "./TimelineField";
import {BudgetFields} from "./BudgetFields";
export interface HireRequestFormProps {;
  talent: TalentProfile,;
  onClose: () => void,;
  initialJobTitle?: string;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import React from "react",
import { useHireRequestForm, FormValues } from "./useHireRequestForm",
import { Button } from "@/components/ui/button",
import { DialogFooter } from "@/components/ui/dialog",
import { Form } from "@/components/ui/form",
import { Loader2 } from "lucide-react",
import { TalentProfile } from "@/types/talent",
import { PersonalInfoFields } from "./PersonalInfoFields",
import { ProjectDetailsField } from "./ProjectDetailsField",
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { TimelineField } from "./TimelineField";
import { BudgetFields } from "./BudgetFields";
export interface HireRequestFormProps {

  talent: TalentProfile
  onClose: () => void

  initialJobTitle?: string;
<<<<<<< HEAD
  userDetails?: {;
    name?: string;
    email?: string;
=======
=======
import { TimelineField } from "./TimelineField",
import { BudgetFields } from "./BudgetFields",
export interface HireRequestFormProps {
  talent: TalentProfile,
  onClose: () => void,
  initialJobTitle?: string,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  userDetails?: {
    name?: string,
    email?: string,
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    id?: string
  }
  onSubmitSuccess?: () => void
}
export function HireRequestForm({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) {

  const { form, isSubmitting, onSubmit } = useHireRequestForm({
    talent
    onClose: onSubmitSuccess |onClose

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
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            disabled={isSubmitting}>;
            {isSubmitting ? (;
              <>;
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Submitting...;
              </>;
            ) : (;
              'Submit Request';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            )}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
import React from './react';
import { useHireRequestForm, FormValues } from './useHireRequestForm';
import { Button } from '@/components / ui / button';
import { DialogFooter } from '@/components / ui / dialog';
import { Form } from '@/components / ui / form';
import { Loader2 } from './lucide-react';
import { TalentProfile } from '@/types / talent';
import { PersonalInfoFields } from './PersonalInfoFields';
import { ProjectDetailsField } from './ProjectDetailsField';
import { TimelineField } from './TimelineField';
import { BudgetFields } from './BudgetFields';
export interface HireRequestFormProps {
  talent: TalentProfile,
  on_close: () => void,
  initialJobTitle?: string;
  user_details?: {
    name?: string;
    email?: string;
    id?: string;
  }
  onSubmitSuccess?: () => void;
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
;
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
          >;
            Cancel;
          </Button>;
          <Button;
            type="submit";
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";
            disabled={is_submitting}
          >;
            {is_submitting ? (
              <>;
                <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />;
                Submitting...;
              </>) : (
              'Submit Request')}
          </Button>;
        </DialogFooter>;
      </form>;
    </Form>);
}
