

  const { user } = useAuth();


  const [error, setError] = useState<string | null>(null);
  const createResume = async (basicInfo: ResumeBasicInfo): Promise<string | null> => {
    if (!user) {
      setError('You must be logged in to create a resume')
      return null




    if (!user) {;
      setError('You must be logged in to create a resume'),;
      return null;



    







    }
    
    setIsLoading($2);
    setError($2);
    try {

      const { data, error } = await supabase;
        .from ('talent_resumes');
        .insert ({
          user_id: user.id;
          title: basic_info.title;
          headline: basic_info.headline,
          summary: basic_info.summary;
        });
        .select ('id');
        .single ();
;
      // Check condition
if (throw error) {
  $2
}
      showSuccessToast ("Resume created", "Your resume has been created successfully");
;
      return data.id;
    } catch (e: any) {
      return handleResumeError (e, 'Could not create resume') ? null : null;
    } finally {
      setIsLoading (false);
    }
  }




    




      if (error) throw error;
      return showSuccessToast("Resume updated", "Your resume information has been updated")




      setIsLoading(false)





    


        .update({ is_active: false })


        .eq('id', resumeId)





      






      const { error } = await supabase;'
        .from ('talent_resumes');
        .update ({ is_active: true });'
        .eq ('id', resume_id);'
        .eq ('user_id', user.id);
;
      // Check condition;
if (throw error) {}
  $2;
}"
      return showSuccessToast ("Active resume set", "Your selected resume is now marked as active");

      setIsLoading (false);

  return {}


    setActiveResume}

  const {
  error 
}= await supabase .from ('talent resumes') .update ({
  title: basicInfo.title, headline: basicInfo.headline, summary: basicInfo.summary 
}) .eq ('id', resumeId) .eq ('user id', user.id);
if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not update resume') 
}finally {
  setIsLoading (false) 
}
};
const setActiveResume = async (resumeId: string) : Promise<boolean> => {
  if (!user) {
  setError ('You must be logged in to set active resume');
return false;
}setError (null);
try {
  //First, set all user's resumes to inactive const {
  error: resetError 
}= await supabase .from ('talent resumes') if (resetError) throw resetError;
// Then, set the selected resume as active const {
  error 
}= await supabase .from ('talent resumes') .update ({
  is active: true 
}) .eq ('id', resumeId) .eq ('user id', user.id);
if (error) throw error;
}catch (e: any) {
  return handleResumeError (e, 'Could not set active resume') 
}finally {
  setIsLoading (false) 
}
};
return {
  isLoading;
error;
createResume;
updateBasicInfo;
setActiveResume 
}
}
}
}
;

