
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BudgetFields form={_form} talent={_talent} />
        </div>
        
        <DialogFooter className="pt-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={_onClose}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            disabled={_isSubmitting}
          >
            Cancel
          </Button>
          <Button 
            type="submit"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            disabled={_isSubmitting}
          >
            {_isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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
