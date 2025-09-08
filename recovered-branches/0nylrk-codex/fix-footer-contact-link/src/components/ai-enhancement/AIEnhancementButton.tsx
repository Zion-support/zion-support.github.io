
interface AIEnhancementButtonProps {




  options;


export function AIEnhancementButton(): any ({;
  options;
  onEnhanced;

  buttonText = "Enhance with AI";
  className;
  variant = "ghost";
  size = "sm";
  contentLength = 10;





interface AIEnhancementButtonProps {





}
const { enhanceContent, isEnhancing } = useAIContentEnhancer(),;
const [showActions, setShowActions] = useState(false),;
const [generatedContent, setGeneratedContent] = useState<string | null>(null),;
        return;


  },




  




  const handleAccept = () => {
    if (generatedContent) {

      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);

  

  },



            <RefreshCw className="h-4 w-4 mr-1" />
          )}
          Regenerate;
        </Button>
        <Button"
          type="button""
          variant="ghost""
          size="sm"
          onClick={handleCancel}"
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20"
        >"
          <X className="h-4 w-4 mr-1" />
          Cancel;
        </Button>
      </div>
    )
  }
  return (
    <Button"
      type="button"

      variant={variant}
      size={size}
      className={`gap-1 ${className}`}
      onClick={handleEnhance}
      disabled={isEnhancing}
    >
      {isEnhancing ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Sparkles className="h-4 w-4" />
      )}
      <span className="text-xs">{buttonText}</span>
    </Button>
  )

    return (
      <div className="flex gap-2 items-center">;
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleAccept}
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20">;
          <Check className="h-4 w-4 mr-1" />;
          Apply;
        </Button>;


  };

  const handleRegenerate = async () => {;
    await handleEnhance();
  };




  if (showActions) {;



          disabled={isEnhancing}>;


          Regenerate;
        </Button>;


          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20">;

          <X className="h-4 w-4 mr-1" />;
          Cancel;
        </Button>;
      </div>;
    );
  }

