

type EnhancementType = 'summary' | 'work-description' | 'skill-categorization' | 'general';

export function useResumeEnhancer() {_const [isEnhancing, _setIsEnhancing] = useState(false);
  const [error, _setError] = useState<string | null>(null);
  
  const _enhanceContent = async (
    content: string, _type: EnhancementType = 'general', _context?: string
  ): Promise<string | null> => {
    setIsEnhancing(true);
    setError(null);
    
    try {
      const { data, _error} = await supabase.functions.invoke('resume-enhancer', {_body: { 
          content, _enhancementType: type, _context}
      });
      
      if (error) {_throw new Error(error.message);}
      
      return data.enhancedContent;
    } catch (err: unknown) {_setError(err.message || 'Failed to enhance content');
      
      return null;} finally {_setIsEnhancing(false);}
  };
  
  return {_enhanceContent, _isEnhancing, _error};
}
