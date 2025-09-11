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

        <CertificationsList
          certifications={certifications}
          onEdit={handleEdit}
          onDelete={handleDelete}        />;
      )}



        <CertificationsList 
          certifications={certifications} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />



      )}

      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
          {editingId ? 'Update Certification' : 'Add Certification'}
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className="space-y-4">
            <CertificationFormFields form={form} />




            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

            <div className="flex justify-between pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  if (editingId) {


                    setEditingId(null),
                    setEditingId(null),


                    form.reset({
                      name: '',
                      issuing_organization: '',
                      issue_date: '',
                      expiration_date: '',
                      credential_id: '',


                  } else {
                    onBack()

      <div className='bg-muted/40 p-6 rounded-lg'>;
        <h3 className='text-md font-medium mb-4'>;
          {editingId ? 'Update Certification' : 'Add Certification'}
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
                type='button'
                variant='outline'
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
                {editingId ? 'Cancel' : 'Back'}

              </Button>
              <div className='flex gap-2'>
                <Button type='submit' disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  )}
                  {editingId ? 'Update' : 'Add'} Certification
                </Button>
                <Button type='button' onClick={onComplete}>

              <div className="flex gap-2">
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' : 'Add'} Certification
                </Button>

                <Button type="button" onClick={onComplete}>


                  Next
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )

              </Button>;

              <div className='flex gap-2'>;
                <Button type='submit' disabled={isLoading}>;
                  {isLoading && (;
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />;
                  )}
                  {editingId ? 'Update' : 'Add'} Certification;
                </Button>;

                <Button type='button' onClick={onComplete}>;
                  Next;
                </Button>;
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;
    </div>;
  );

}> {;
  editingId ? 'Cancel' : 'Back' ;
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>) ;
}'"}

      // Check condition
if ( {) {
  $2
}
        form.reset ({
          name: '',
          issuing_organization: '',
          issue_date: '',
          expiration_date: '',
          credential_id: '',
          credential_url: '',
        });
        setEditingId (null);
      }
    } catch (err: any) {
      set_error (err.message || 'An error occurred');
    }
  }
  const handle_edit = (cert: Certification) =>: any {
    setEditingId (cert.id!);    form.reset ({
      ...cert,
  }
  const handle_edit = (cert: Certification) =>: any {
    setEditingId (cert.id!);
    form.reset ({
      issue_date: formatDateValue (cert.issue_date),
      expiration_date: formatDateValue (cert.expiration_date),
    });
  }
  const handle_delete = async (id: string, ) => {
    if () {) {
  $2
}
      await delete_certification (id);
    }
  }
  return (
    <div className='space - y-6'>;
      <div>;
        <h2 className='text - xl font - semibold mb - 2'>;
          Certifications & Licenses;
        </h2>;
        <p className='text - muted - foreground'>;
          Add any professional certifications, licenses, or credentials you have;
          earned.;
        </p>;
      </div>;
      {certifications.length > 0 && (
        <CertificationsList;
          certifications={certifications}
          on_edit={handle_edit}
          on_delete={handle_delete}        />)}
      <div className='bg - muted / 40 p - 6 rounded - lg'>;
        <h3 className='text - md font - medium mb - 4'>;
          {editing_id ? 'Update Certification' : 'Add Certification'}
        </h3>;
        <Form {...form}>;
          <form;
            on_submit={form.handle_submit (handleAddOrUpdate)}
            className='space - y-4';
          >;
            <CertificationFormFields form={form} />;
            {error && (
              <Alert variant='destructive'>;
                <AlertDescription>{error}</AlertDescription>;
              </Alert>)}
            <div className='flex justify - between pt - 2'>;
              <Button;
                type='button';
                variant='outline';
                on_click={() => {
                  // Check condition
if ( {) {
  $2
}
                    setEditingId (null);
                    form.reset ({
                      name: '',
                      issuing_organization: '',
                      issue_date: '',
                      expiration_date: '',
                      credential_id: '',
                      credential_url: '',
                    });
                  } else {
                    on_back ();
                  }
                }}
              >;
                {editing_id ? 'Cancel' : 'Back'}
              </Button>;
              <div className='flex gap - 2'>;
                <Button type='submit' disabled={is_loading}>;
                  {is_loading && (
                    <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />)}
                  {editing_id ? 'Update' : 'Add'} Certification;
                </Button>;
                <Button type='button' on_click={on_complete}>;
                  Next;
                </Button>;
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;
    </div>);
}> {
  editingId ? 'Cancel' : 'Back'
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>)
}'"}

}
;