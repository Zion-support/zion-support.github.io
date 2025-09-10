return (
    <div className='space-y-6'>;
      <div>;
        <h2 className='text-xl font-semibold mb-2'>;
          Certifications & Licenses;
        </h2>;
        <p className='text-muted-foreground'>;
          Add any professional certifications, licenses, or credentials you have;
          earned.;
        </p>;
      </div>;
      {certifications && certifications.length > 0 && (;


      )}
                    setEditingId(null),
                    setEditingId(null),
                    form.reset({
                      name: '',
                      issuing_organization: '',
                      issue_date: '',
                      expiration_date: '',
                      credential_id: '',
                      credential_url: ''})
                  } else {
                    onBack()
      <div className='bg-muted/40 p-6 rounded-lg'>;
        <h3 className='text-md font-medium mb-4'>;
          {editingId ? 'Update Certification' : 'Add Certification'}'
        </h3>;
        <Form {...form}>;
          <form
            onSubmit={form && form.handleSubmit(handleAddOrUpdate)}
            className='space-y-4'>;
            <CertificationFormFields form={form} />;
            {error && (;
              <Alert variant='destructive'>;
                <AlertDescription>{error}</AlertDescription>;
              </Alert>;
            )}
            <div className='flex justify-between pt-2'>;
              <Button
                type='button''
                variant='outline''
                onClick={() => {;
                  if (editingId) {;
                    setEditingId(null);
                    form && form.reset({;
                      name: '',;
                      issuing_organization: '',;
                      issue_date: '',;
                      expiration_date: '',;
                      credential_id: '',;
                      credential_url: '',;
                    });
                  } else {;
                    onBack();


                  }
                }}
              >


