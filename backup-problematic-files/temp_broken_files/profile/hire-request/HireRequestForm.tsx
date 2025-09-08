




;
export interface HireRequestFormProps {;
  talent: TalentProfile;,;
  onClose: () => void;,;


export function HireRequestForm({ talent, onClose, initialJobTitle, userDetails, onSubmitSuccess } HireRequestFormProps) {;
  const { form, isSubmitting, onSubmit } = useHireRequestForm({ ;
    talent, ;
    onClose: onSubmitSuccess || onClose;, ;


)"
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;"
</form>"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
</div>


"
          <BudgetFields form={form} talent={talent} />;

        </div>;"
        <DialogFooter className="pt-4">;"

          <Button ;"
            type="button" ;""
            variant="outline" ;"
            onClick={onClose}"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";"



              'Submit Request';








