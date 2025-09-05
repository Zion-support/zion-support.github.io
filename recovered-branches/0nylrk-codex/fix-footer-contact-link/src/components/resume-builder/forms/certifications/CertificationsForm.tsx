


interface CertificationsFormProps {_resumeId: string;
  certifications: Certification[];
  onComplete: () => void;
  onBack: () => void;}

export function CertificationsForm(_{_resumeId, _certifications, _onComplete, _onBack}: CertificationsFormProps) {_const { addCertification, _updateCertification, _deleteCertification, _isLoading} = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Helper function to format dates as strings for form inputs
  const _formatDateValue = (_dateValue: string | Date | undefined): string => {_if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue;
    return format(dateValue, _'yyyy-MM-dd');};

  const _form = useForm<CertificationFormValues>({_resolver: zodResolver(certificationSchema), _defaultValues: {
      name: '', _issuing_organization: '', _issue_date: '', _expiration_date: '', _credential_id: '', _credential_url: ''}});

  const _handleAddOrUpdate = async (_data: CertificationFormValues) => {_try {
      setError(null);
      let success;

      const certData: Certification = {
        name: data.name, _issuing_organization: data.issuing_organization, _issue_date: data.issue_date || undefined, _expiration_date: data.expiration_date || undefined, _credential_id: data.credential_id, _credential_url: data.credential_url};

      if (editingId) {_success = await updateCertification(editingId, _certData);} else {_success = await addCertification(resumeId, _certData);}

      if (success) {_form.reset({
          name: '', _issuing_organization: '', _issue_date: '', _expiration_date: '', _credential_id: '', _credential_url: ''});
        setEditingId(null);
      }
    } catch (err: unknown) {_setError(err.message || 'An error occurred');}
  };

  const _handleEdit = (_cert: Certification) => {_setEditingId(cert.id!);
    form.reset({
      ...cert, _issue_date: formatDateValue(cert.issue_date), _expiration_date: formatDateValue(cert.expiration_date)});
  };

  const _handleDelete = async (_id: string) => {_if (confirm('Are you sure you want to delete this certification?')) {
      await deleteCertification(id);}
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Certifications & Licenses</h2>
        <p className="text-muted-foreground">
          Add any professional certifications, licenses, or credentials you have earned.
        </p>
      </div>

      {_certifications.length > 0 && (
        <CertificationsList 
          certifications={certifications} 
          onEdit={_handleEdit} 
          onDelete={_handleDelete} 
        />
      )}

      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
          {_editingId ? 'Update Certification' : 'Add Certification'}
        </h3>

        <Form {_...form}>
          <form onSubmit={_form.handleSubmit(handleAddOrUpdate)} className="space-y-4">
            <CertificationFormFields form={_form} />

            {_error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

            <div className="flex justify-between pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={_() => {
                  if (editingId) {
                    setEditingId(null);
                    form.reset({
                      name: '', _issuing_organization: '', _issue_date: '', _expiration_date: '', _credential_id: '', _credential_url: ''});
                  } else {_onBack();}
                }}
              >
                {_editingId ? 'Cancel' : 'Back'}
              </Button>

              <div className="flex gap-2">
                <Button type="submit" disabled={_isLoading}>
                  {_isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {_editingId ? 'Update' : 'Add'} Certification
                </Button>

                <Button type="button" onClick={_onComplete}>
                  Next
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
