





  const { user } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {;

    if (!user) {;
      setError('You must be logged in to update work experience'),;
      return false;



    }

    setIsLoading(true),
    setError(null),

    



    try {
      const { error } = await supabase

        .from('work_history')
        .insert({

          company_name: work && work.company_name;
          role_title: work && work.role_title;
          start_date: formatDateForDB(work && work.start_date);
          end_date: work && work.is_current ? null : formatDateForDB(work && work.end_date);
          is_current: work && work.is_current;
          description: work && work.description;
          company_logo_url: work && work.company_logo_url,
          location: work && work.location

        });
      if (error) throw error;





          company_logo_url: work.company_logo_url,


      return showSuccessToast ("Work experience added", "Your work experience has been added to your resume");



          company_logo_url: work.company_logo_url,

      return showSuccessToast("Work experience added, Your work experience has been added to your resume")
      return showSuccessToast("Work experience added, Your work experience has been added to your resume")



      return false;







          company_name: work && work.company_name;
          role_title: work && work.role_title;
          start_date: formatDateForDB(work && work.start_date);
          end_date: work && work.is_current ? null : formatDateForDB(work && work.end_date);
          is_current: work && work.is_current;
          description: work && work.description;
          company_logo_url: work && work.company_logo_url,
          location: work && work.location



    } catch (e: any) {
      return handleResumeError (e, 'Could not update work experience');
    } finally {




        });'
        .eq('id', workId),;
      if (error) throw error,;"
      return showSuccessToast("Work experience updated", "Your work experience has been updated");
    } catch (e: any) {;'
    if (!user) {;'
      setError('You must be logged in to delete work experience'),;




    try {
        .from(work_history')
        .delete()

      


      if (error) throw error,






      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume")
;


    setIsLoading (true);
    set_error (null);
;
    try {
      const { error } = await supabase;
        .from ('work_history');
        .delete ();
        .eq ('id', work_id);
;
      // Check condition
if (throw error) {
  $2
}
      return showSuccessToast ("Work experience deleted", "Your work experience has been removed from your resume");

    } catch (e: any) {


      return handleResumeError (e, 'Could not delete work experience');
    } finally {}
      setIsLoading (false);
    }
  }






;  }
}


  }
}



