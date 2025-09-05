
import React from &quot;react&quot;;
import { useHireRequestForm, FormValues } from &quot;./useHireRequestForm&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { DialogFooter } from &quot;@/components/ui/dialog&quot;;
import { Form } from &quot;@/components/ui/form&quot;;
import { Loader2 } from &quot;lucide-react&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import { PersonalInfoFields } from &quot;./PersonalInfoFields&quot;;
import { ProjectDetailsField } from &quot;./ProjectDetailsField&quot;;
import { TimelineField } from &quot;./TimelineField&quot;;
import { BudgetFields } from &quot;./BudgetFields&quot;;

export interface HireRequestFormProps {
  talent: TalentProfile;
  onClose: () => void;
  initialJobTitle?: string;
  userDetails?: {
    name?: string;
    email?: string;
    id?: string;
  };
  onSubmitSuccess?: () => void;
}

export function HireRequestForm({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess }: HireRequestFormProps) {
  const { form, isSubmitting, onSubmit } = useHireRequestForm({ 
    talent, 
    onClose: onSubmitSuccess || onClose, 
    initialJobTitle,
    userDetails 
  });
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=&quot;space-y-6&quot;>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <PersonalInfoFields form={form} />
        </div>
        
        <ProjectDetailsField form={form} />
        <TimelineField form={form} />
        
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <BudgetFields form={form} talent={talent} />
        </div>
        
        <DialogFooter className=&quot;pt-4&quot;>
          <Button 
            type=&quot;button&quot; 
            variant=&quot;outline&quot; 
            onClick={onClose}
            className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button 
            type=&quot;submit&quot;
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
            disabled={isSubmitting}
          >
            {isSubmitting ? (
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
  );
}
