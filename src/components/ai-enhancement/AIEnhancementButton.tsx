

interface AIEnhancementButtonProps {_options: AIEnhancementOptions;
  onEnhanced: (_enhancedContent: string) => void;
  buttonText?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  contentLength?: number;}

export function AIEnhancementButton(_{_options, _onEnhanced, _buttonText = "Enhance with AI", _className, _variant = "ghost", _size = "sm", _contentLength = 10}: AIEnhancementButtonProps) {_const { enhanceContent, _isEnhancing} = useAIContentEnhancer();
  const [showActions, setShowActions] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  
  const _handleEnhance = async () => {_if ((!options.content || options.content.trim().length < contentLength) && 
        (!options.context || options.context.trim().length < contentLength)) {
      toast({
        title: "Not enough content", _description: `Please enter at least ${contentLength} characters before enhancing.`,
        variant: "destructive"
      });
      return;
    }
    
    const _enhancedContent = await enhanceContent(options);
    
    if (enhancedContent) {_setGeneratedContent(enhancedContent);
      setShowActions(true);}
  };
  
  const _handleAccept = () => {_if (generatedContent) {
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);
      toast({
        title: "Content applied", _description: "AI-enhanced content has been applied."});
    }
  };
  
  const _handleRegenerate = async () => {_await handleEnhance();};
  
  const _handleCancel = () => {_setShowActions(false);
    setGeneratedContent(null);};
  
  if (showActions) {_return (
      <div className="flex gap-2 items-center">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleAccept}
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20"
        >
          <Check className="h-4 w-4 mr-1" />
          Apply
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={_handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          disabled={_isEnhancing}
        >
          {_isEnhancing ? (
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4 mr-1" />
          )}
          Regenerate
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={_handleCancel}
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100/20"
        >
          <X className="h-4 w-4 mr-1" />
          Cancel
        </Button>
      </div>
    );
  }
  
  return (
    <Button
      type="button"
      variant={_variant}
      size={_size}
      className={_`gap-1 ${className}`}
      onClick={_handleEnhance}
      disabled={_isEnhancing}
    >
      {_isEnhancing ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Sparkles className="h-4 w-4" />
      )}
      <span className="text-xs">{_buttonText}</span>
    </Button>
  );
}
