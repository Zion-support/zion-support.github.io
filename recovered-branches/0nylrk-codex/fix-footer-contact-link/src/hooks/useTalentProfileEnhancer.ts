

  name: string;
  title: string;
  bio: string;

  skills: string[]

  location?: string
}

  programming: string[];
  devops: string[];
  platforms: string[];

  softSkills: string[]

  other: string[]
}

    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('talent-profile-enhancer', {
        body: { talentData: profileData }
      });

      if (error) {
        throw new Error(error.message)

      }
      return data as EnhancedProfile
    } catch (err: any) {
      setError(err.message |'Failed to enhance profile')
      return null
    } finally {
      setIsGenerating(false)
    }

  return {
    enhanceProfile;
    isGenerating;

    error

  }
}