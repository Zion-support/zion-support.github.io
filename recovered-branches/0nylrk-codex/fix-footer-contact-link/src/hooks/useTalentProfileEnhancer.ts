

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  name: string;
  title: string;
  bio: string;

  skills: string[],
  location?: string;

}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  programming: string[];
  devops: string[];
  platforms: string[];


  other: string[]
}

    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase && supabase.functions.invoke('talent-profile-enhancer', {
        body: { talentData: profileData }
      });

      if (error) {
        throw new Error(error.message)

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      }
      return data as EnhancedProfile
    } catch (err: any) {

      setError(err && err.message || 'Failed to enhance profile'),

      return null
    } finally {
      setIsGenerating(false)
    }

=======

  };
  


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return {
    enhanceProfile;
    isGenerating;

    error
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
}