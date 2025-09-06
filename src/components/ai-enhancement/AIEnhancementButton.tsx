    if ((!options.content |options.content.trim().length < contentLength) &&
        (!options.context |options.context.trim().length < contentLength)) {
      toast({
        title: "Not enough content"
        description: `Please enter at least ${contentLength} characters before enhancing.`
        variant: "destructive"
      toast({;
        title: "Content applied",;
        description: "AI-enhanced content has been applied."});
    }

      toast({
        title: "Content applied"
        description: "AI-enhanced content has been applied."})
    }
  },
  
  const handleRegenerate = async () => {
    await handleEnhance()
  },
  
  const handleCancel = () => {
    setShowActions(false),
    setGeneratedContent(null)
  },
  
      <div className="flex gap-2 items-center">;
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick = {handleAccept,}
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20">;
          <Check className="h-4 w-4 mr-1" />;
          Apply;
        </Button>;
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick = {handleRegenerate,}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          disabled = {isEnhancing,}>;
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;
          ) : (;
            <RefreshCw className="h-4 w-4 mr-1" />;
          )}
          Regenerate;
        </Button>;
      {isEnhancing ? (;
        <Loader2 className="h-4 w-4 animate-spin" />;
      ) :(;
        <Sparkles className="h-4 w-4" />;
      )}
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex gap - 2 items - center">;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          on_click = {handle_accept, }
          className="text - green - 500 hover:text - green - 700 hover:bg - green - 100 / 20";
        >;
          <Check className="h - 4 w - 4 mr - 1" />;
          Apply;
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          on_click = {handle_regenerate, }
          className="text - blue - 500 hover:text - blue - 700 hover:bg - blue - 100 / 20";
          disabled = {is_enhancing, }
        >;
          {is_enhancing ? (
            <Loader2 className="h - 4 w - 4 mr - 1 animate - spin" />) : (
            <RefreshCw className="h - 4 w - 4 mr - 1" />)}
          Regenerate;
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          on_click = {handle_cancel, }
          className="text - gray - 500 hover: text - gray - 700 hover:bg - gray - 100 / 20";
        >;
          <X className="h - 4 w - 4 mr - 1" />;
          Cancel;
        </Button>;
      </div>),
  }
  return (
    <Button;
    );
  }
;
  return (;
    <Button;
      type="button";
    >
      {isEnhancing ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Sparkles className="h-4 w-4" />
      )}
