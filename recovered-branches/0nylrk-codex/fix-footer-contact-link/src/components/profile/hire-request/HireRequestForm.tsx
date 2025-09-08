
talent: TalentProfile
  onClose: () => void


  initialJobTitle?: string;
  userDetails?: {;
    name?: string;
    email?: string;


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


  userDetails?: {
    name?: string,
    email?: string,

    id?: string

  onSubmitSuccess?: () => void
}

export function HireRequestForm({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) {

  const { form, isSubmitting, onSubmit } = useHireRequestForm({ 
    talent, 




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

            disabled={isSubmitting}
          >

            type="submit"""
            className="bg-zion-purple hover:bg-zion-purple-dark text-white""

              <>"
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />"
</Loader2>
              </>

            ) : (
              'Submit Request'

  initialJobTitle?: string,;
    name?: string,;
    email?: string,;



    id?: string;
  };

  onSubmitSuccess?: () => void;
}

export function HireRequestForm(): any ({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) {;
  const { form, isSubmitting, onSubmit } = useHireRequestForm({ ;
    talent, ;
    onClose: onSubmitSuccess || onClose, ;

    initialJobTitle;
    userDetails ;
  });

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

          <PersonalInfoFields form={form} />;

        </div>;

            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            disabled={isSubmitting}>;
            Cancel;
          </Button>;



          <Button
            type="submit"

            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            disabled={isSubmitting}>;


            {isSubmitting ? (;
              <>;"
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Submitting...;
              </>;

            ) :(;
              'Submit Request';




            )}


          </Button>;
        </DialogFooter>;
      </form>;
    </Form>;


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
export interface HireRequestFormProps {}
  talent: TalentProfile,
  on_close: () => void,;
  initialJobTitle?: string;
  user_details?: {}

    name?: string;
    email?: string;
    id?: string;
  }
  onSubmitSuccess?: () => void;
}

    talent,
    on_close: onSubmitSuccess || on_close,
    initialJobTitle;
    user_details;
  });
;
  return (

        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
          <PersonalInfoFields form={form} />;
        </div>;
        <ProjectDetailsField form={form} />;

            className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";

        </div>;"
        <DialogFooter className="pt-4">;"

            disabled={isSubmitting}>;

          ;

              <>;"
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;"
              </>;
            ) : (;)
            ) :(;"
              'Submit Request';')
            )}

      </form>;

      <form on_submit={form.handle_submit (on_submit)} className="space - y-6">;"
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"

        <DialogFooter className="pt - 4">;"

            type="button";""
            variant="outline";"
            on_click={on_close}"
            className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";"
            disabled={is_submitting}
          >;

            className="bg - zion - purple hover:bg - zion - purple - dark text - white";
            disabled={is_submitting}
          >;
            {is_submitting ? (

              'Submit Request')}
          </Button>;
        </DialogFooter>;
      </form>;
    </Form>);
}




