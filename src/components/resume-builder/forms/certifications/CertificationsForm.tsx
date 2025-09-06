

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Certifications & Licenses</h2>
        <p className="text-muted-foreground">
          Add any professional certifications, licenses, or credentials you have earned.
        </p>
      </div>
      {certifications.length > 0 && (


=======
        <CertificationsList 
          certifications={certifications} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      )}

      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          {editingId ? 'Update Certification' : 'Add Certification'}
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className="space-y-4">
            <CertificationFormFields form={form} />


=======

            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

            <div className="flex justify-between pt-2">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  if (editingId) {

                    setEditingId(null),
=======
=======
                    setEditingId(null),

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    form.reset({
                      name: '',
                      issuing_organization: '',
                      issue_date: '',
                      expiration_date: '',
                      credential_id: '',


                  } else {
                    onBack()
                  }
                }}
              >
                {editingId ? 'Cancel' : 'Back'}
              </Button>


              <div className="flex gap-2">
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' : 'Add'} Certification
                </Button>

                <Button type="button" onClick={onComplete}>

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  Next
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )

}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
