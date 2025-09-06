



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
  userDetails?: {;
    name?: string;
    email?: string;






>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



  userDetails?: {
    name?: string,
    email?: string,
    id?: string

  }
  },

  onSubmitSuccess?: () => void
}
export function HireRequestForm({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) {



    initialJobTitle;
    userDetails
  });
  const { form, isSubmitting, onSubmit } = useHireRequestForm({ 
    talent, 
    onClose: onSubmitSuccess || onClose, ;
    initialJobTitle;
    onClose: onSubmitSuccess || onClose, 
    initialJobTitle,
    userDetails 
  }),
  

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





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


            )}

          </Button>;
        </DialogFooter>;
      </form>;
    </Form>;
  );
}


