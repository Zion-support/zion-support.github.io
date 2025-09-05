

export function useSavedTalents() {_const { isAuthenticated, _userDetails} = useAuthStatus();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]);
  const [savedTalentIds, setSavedTalentIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch saved talents
  useEffect__(() => {_const _fetchSavedTalents = async () => {
      if (!isAuthenticated || !userDetails.id) {
        setIsLoading(false);
        return;}

      setIsLoading(true);
      
      try {_// Get saved talent IDs
        const { data: savedData, _error: savedError} = await supabase
          .from('saved_talents')
          .select('talent_id')
          .eq('user_id', userDetails.id);
          
        if (savedError) throw savedError;

        if (savedData) {_const _talentIds = savedData.map(item => item.talent_id);
          setSavedTalentIds(talentIds);
          
          if (talentIds.length > 0) {
            // Fetch full talent profiles for saved talents
            const { data: talentData, _error: talentError} = await supabase
              .from('talent_profiles')
              .select('*')
              .in('id', talentIds);
              
            if (talentError) throw talentError;
            
            setSavedTalents(talentData || []);
          } else {_setSavedTalents([]);}
        }
      } catch (error) {_toast({
          title: "Error loading favorites", _description: "There was a problem loading your saved talents.", _variant: "destructive"});
      } finally {_setIsLoading(false);}
    };
    
    fetchSavedTalents();
  }, [isAuthenticated, userDetails.id]);

  // Toggle save talent
  const _toggleSaveTalent = async (_talent: TalentProfile) => {_if (!isAuthenticated || !userDetails.id || !talent.id) {
      toast({
        title: "Authentication required", _description: "Please log in to save talents to your favorites", _variant: "destructive"});
      return;
    }
    
    const _isSaved = savedTalentIds.includes(talent.id);
    
    try {_if (isSaved) {
        // Remove from saved_talents
        const { error} = await supabase
          .from('saved_talents')
          .delete()
          .eq('user_id', userDetails.id)
          .eq('talent_id', talent.id);
          
        if (error) throw error;
        
        setSavedTalents(prev => prev.filter(t => t.id !== talent.id));
        setSavedTalentIds(prev => prev.filter(id => id !== talent.id));
        
        toast({_title: "Removed from favorites", _description: `${talent.full_name} has been removed from your favorites`});
      } else {_// Add to saved_talents
        const { error} = await supabase
          .from('saved_talents')
          .insert({_user_id: userDetails.id, _talent_id: talent.id});
          
        if (error) throw error;
        
        setSavedTalents(prev => [...prev, talent]);
        setSavedTalentIds(prev => [...prev, talent.id]);
        
        toast({_title: "Added to favorites", _description: `${talent.full_name} has been added to your favorites`});
      }
    } catch (error) {_toast({
        title: "Error", _description: "There was a problem updating your favorites. Please try again.", _variant: "destructive"});
    }
  };

  // Check if talent is saved
  const _isTalentSaved = (_talentId: string) => {_return savedTalentIds.includes(talentId);};

  return {_savedTalents, _savedTalentIds, _isLoading, _toggleSaveTalent, _isTalentSaved};
}
