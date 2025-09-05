

interface AIEnhancementButtonProps {_currentContent: string;
  enhancementType: 'summary' | 'work-description' | 'skill-categorization' | 'general';
  context?: string;
  onEnhanced: (_enhancedContent: string) => void;
  buttonText?: string;
  className?: string;}

export function AIEnhancementButton(_{_currentContent, _enhancementType, _context, _onEnhanced, _buttonText = "Enhance with AI", _className}: AIEnhancementButtonProps) {_const { enhanceContent, _isEnhancing} = useResumeEnhancer();
  const [error, setError] = useState<string | null>(null);
  
  const _handleEnhance = async () => {_if (!currentContent || currentContent.trim().length < 10) {
      setError('Please enter at least some basic content before enhancing');
      return;}
    
    setError(null);
    const _enhancedContent = await enhanceContent(
      currentContent,
      enhancementType,
      context
    );
    
    if (enhancedContent) {_onEnhanced(enhancedContent);}
  };
  
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className={_`h-6 gap-1 text-primary hover:text-primary ${className}`}
      onClick={_handleEnhance}
      disabled={_isEnhancing}
    >
      {_isEnhancing ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (
        <Sparkles className="h-3 w-3" />
      )}
      <span className="text-xs">{_buttonText}</span>
    </Button>
  );
}
