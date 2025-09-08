


export function WorkExperienceForm({ resumeId, workExperiences, onComplete, onBack }: WorkExperienceFormProps) {;



      let success

      const experienceData: WorkExperience = {
        company_name: data.company_name, // Required field
        role_title: data.role_title, // Required field
        start_date: data.start_date, // Required field

        end_date: data.is_current ? undefined : (data.end_date |undefined)
        is_current: data.is_current
        description: data.description
        location: data.location}

      if (editingId) {
        success = await updateWorkExperience(editingId, experienceData)
      } else {
        success = await addWorkExperience(resumeId, experienceData)
      }
      if (success) {
        form.reset({

          company_name: ''
          role_title: ''
          start_date: format(new Date(), 'yyyy-MM-dd');
          is_current: false
          description: ''
          location: ''})
        setEditingId(null)






  };













                {work.description && (;
                  <p className="text-sm mt-3 line-clamp-2">{work.description}</p>;
                )}
              </CardContent>;
            </Card>;          ))}
        </div>;
      )}
;
      <div className="bg-muted/40 p-6 rounded-lg">;
        <h3 className="text-md font-medium mb-4">;
          {editingId ? 'Update Experience' :'Add Experience'}
        </h3>;
;
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className="space-y-4">;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <FormField;
                control={form.control}
                name="company_name";
                render={({ field }) => (;
                  <FormItem>;
                    <FormLabel>Company Name</FormLabel>;
                    <FormControl>;
                      <Input placeholder="Google, Microsoft, etc." {...field} />;
                    </FormControl>;
                    <FormMessage />;
              />;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;











                      company_name: '',
                      role_title: '',
                      start_date: format(new Date(), 'yyyy-MM-dd'),
                      is_current: false,
                      description: '',



              </Button>;
              <div className="flex gap-2">;
                <Button type="submit" disabled={isLoading}>;
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' : 'Add'} Experience;
                </Button>;
                {!editingId && workExperiences && workExperiences.length > 0 && (;
                </FormItem>;
              )}
            />;
;
            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
;
            <div className="flex justify-between pt-2">;
              <Button;
                type="button";
                variant="outline";
                onClick={() => {;
                  if (editingId) {;
                    setEditingId(null),;
                    form.reset({;
                      company_name:'',;
                      role_title:'',;
                      start_date:format(new Date(), 'yyyy-MM-dd'),;
                      is_current:false,;
                      description:'',;
                      location:''}),;
                  } else {;
                    onBack(),;
                  }
                }}
              >;
                {editingId ? 'Cancel' :'Back'}
              </Button>;
;
              <div className="flex gap-2">;
                <Button type="submit" disabled={isLoading}>;
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' :'Add'} Experience;
                </Button>;
;
                {!editingId && workExperiences.length > 0 && (;
                  <Button type="button" onClick={onComplete}>;
                    Next;
                  </Button>;
                )}
                </FormItem>)}
            />;
            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
            <div className="flex justify - between pt - 2">;
              <Button;
                type="button";
                variant="outline";
                on_click={() => {
                  // Check condition
if ( {) {
  $2
}
                    setEditingId (null);
                    form.reset ({
                      company_name: '',
                      role_title: '',
                      start_date: format (new Date (), 'yyyy - MM - dd');
                      is_current: false,
                      description: '',
                      location: ''});
                  } else {
                    on_back ();
                  }
                }}
              >;
                {editing_id ? 'Cancel' : 'Back'}
              </Button>;
              <div className="flex gap - 2">;
                <Button type="submit" disabled={is_loading}>;
                  {is_loading && <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />}
                  {editing_id ? 'Update' : 'Add'} Experience;
                </Button>;
                {!editing_id && work_experiences.length > 0 && (
                  <Button type="button" on_click={on_complete}>;
                    Next;
                  </Button>)}


              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;


    </div>);
}




