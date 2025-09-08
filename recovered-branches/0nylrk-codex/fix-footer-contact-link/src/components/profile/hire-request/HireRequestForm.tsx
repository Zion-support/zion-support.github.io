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
import React from "react",
import { useHireRequestForm, FormValues } from "./useHireRequestForm",
import { Button } from "@/components/ui/button",
import { DialogFooter } from "@/components/ui/dialog",
import { Form } from "@/components/ui/form",
import { Loader2 } from "lucide-react",
import { TalentProfile } from "@/types/talent",
import { PersonalInfoFields } from "./PersonalInfoFields",
import { ProjectDetailsField } from "./ProjectDetailsField",
import { TimelineField } from "./TimelineField";
import { BudgetFields } from "./BudgetFields";
export interface HireRequestFormProps {

  talent: TalentProfile
  onClose: () => void

  initialJobTitle?: string;  onSubmitSuccess?: () => void
}
export function HireRequestForm({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) {

    initialJobTitle;

    userDetails
  });    initialJobTitle;
    userDetails
  });
  return (
    <Form {...form}>"
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PersonalInfoFields form={form} />
        </div>
        <ProjectDetailsField form={form} />
        <TimelineField form={form} />"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BudgetFields form={form} talent={talent} />
        </div>"
        <DialogFooter className="pt-4">
          <Button"
            type="button""
            variant="outline"
            onClick={onClose}"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            disabled={isSubmitting}
          >

          </Button>

          <Button
            type="submit"

            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (

                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Request'

import { BudgetFields } from "./BudgetFields",;
import React from "react";""
import {useHireRequestForm, FormValues} from "./useHireRequestForm";""
import {Button} from "@/components/ui/button";""
import {DialogFooter} from "@/components/ui/dialog";""
import {Form} from "@/components/ui/form";""
import {Loader2} from "lucide-react";""
import {TalentProfile} from "@/types/talent";""
import {PersonalInfoFields} from "./PersonalInfoFields";""
import {ProjectDetailsField} from "./ProjectDetailsField";""
import {TimelineField} from "./TimelineField";""
import {BudgetFields} from "./BudgetFields";"

export interface HireRequestFormProps {;
  talent: TalentProfile,;
  onClose: () => void,;

  initialJobTitle?: string;
  userDetails?: {;
    name?: string;
    email?: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba

"
import React from "react",""
import { useHireRequestForm, FormValues } from "./useHireRequestForm",""
import { Button } from "@/components/ui/button",""
import { DialogFooter } from "@/components/ui/dialog",""
import { Form } from "@/components/ui/form",""
import { Loader2 } from "lucide-react",""
import { TalentProfile } from "@/types/talent",""
import { PersonalInfoFields } from "./PersonalInfoFields",""
import { ProjectDetailsField } from "./ProjectDetailsField",""
import { TimelineField } from "./TimelineField";""
import { BudgetFields } from "./BudgetFields";"
export interface HireRequestFormProps {
  // TODO: Implement
}
  talent: TalentProfile;,
  onClose: () => void;
  initialJobTitle?: string;"
import { TimelineField } from "./TimelineField",""
import { BudgetFields } from "./BudgetFields","
  // TODO: Implement
  talent: TalentProfile,
  onClose: () => void,
  initialJobTitle?: string,

<<<<<<< HEAD

  userDetails?: {
    name?: string,
    email?: string,

    id?: string

  onSubmitSuccess?: () => void
}

=======
  userDetails?: {
    name?: string,
    email?: string,
  userDetails?: {
    name?: string,
    email?: string,

>>>>>>> origin/cursor/delete-old-data-records-6bba
export function HireRequestForm({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) {

  const { form, isSubmitting, onSubmit } = useHireRequestForm({ 
    talent, 


<<<<<<< HEAD


=======
    initialJobTitle;
    userDetails;)
  });
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <Form {...form}>
)"
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">"
</form>"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
</div>

          <PersonalInfoFields form={form} />

        <ProjectDetailsField form={form} />

        <TimelineField form={form} />

</TimelineField>"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
</div>
          <BudgetFields form={form} talent={talent} />
<<<<<<< HEAD

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