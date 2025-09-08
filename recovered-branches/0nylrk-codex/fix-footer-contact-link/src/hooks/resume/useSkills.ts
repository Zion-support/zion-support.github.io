





  const { user } = useAuth();


  const [error, setError] = useState<string | null>(null);
  const addSkill = async (resumeId: string, skill: Skill): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add skills')
      return false




    if (!user) {;
      setError('You must be logged in to add skills'),;
      return false;



    


    try {
      const { error } = await supabase
        .from('resume_skills')
        .insert({



          name: skill && skill.name;
          proficiency: skill && skill.proficiency;
          category: skill && skill.category,
          years_experience: skill && skill.years_experience


        });
      if (error) throw error;


      return showSuccessToast("Skill added", "Your skill has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add skill')
    } finally {
      setIsLoading(false)






    }
    












  },;
  return {;
    isLoading,;
    error;
    addSkill;
    deleteSkill;



  }
}

;

        .from ('resume_skills');
        .insert ({}

          resume_id: resume_id;
          name: skill.name;
          proficiency: skill.proficiency;
          category: skill.category,
          years_experience: skill.years_experience;
        });
;

      setIsLoading (false);
    }
  }
;

      set_error ('You must be logged in to delete skills'),
      return false;
    }
    setIsLoading (true);
    set_error (null);
;

      setIsLoading (false);
    }
  }
;

    is_loading;
    error;
    add_skill;
    delete_skill;


