

type EnhancementType = 
  | 'resume-summary' 
  | 'work-description' 
  | 'job-post' 
  | 'proposal' 
  | 'general';

export interface AIEnhancementOptions {_enhancementType: EnhancementType;
  content?: string;
  context?: string;
  instructions?: string;}

export function useAIContentEnhancer() {_const [isEnhancing, _setIsEnhancing] = useState(false);
  const [error, _setError] = useState<string | null>(null);
  
  const _enhanceContent = async ({
    enhancementType, _content = '', _context = '', _instructions = ''}: AIEnhancementOptions): Promise<string | null> => {_setIsEnhancing(true);
    setError(null);
    
    try {
      const { data, _error} = await supabase.functions.invoke('ai-content-enhancer', {_body: { 
          content, _enhancementType, _context, _instructions}
      });
      
      if (error) {_throw new Error(error.message);}
      
      return data.enhancedContent;
    } catch (err: unknown) {_const _errorMessage = err.message || 'Failed to enhance content';
      setError(errorMessage);
      toast({
        title: "AI Enhancement Failed", _description: errorMessage, _variant: "destructive"});
      
      return null;
    } finally {_setIsEnhancing(false);}
  };
  
  return {_enhanceContent, _isEnhancing, _error};
}
