
    if ((!options.content |options.content.trim().length < contentLength) &&
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        (!options.context |options.context.trim().length < contentLength)) {
      toast({
        title: "Not enough content"
        description: `Please enter at least ${contentLength} characters before enhancing.`
        variant: "destructive"

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  if (showActions) {
    return (
      <div className="flex gap-2 items-center">;

        <Button
          type="button"
          variant="ghost"
          size="sm"

        <Button
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          type="button"
          variant="ghost"
          size="sm"
          onClick = {handleRegenerate,}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"

        <Button;
          type="button";
          variant="ghost";
          size="sm";

          Apply;
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";

          Regenerate;
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          on_click = {handle_cancel, }
          className="text - gray - 500 hover: text - gray - 700 hover:bg - gray-100 / 20";
        >;
          <X className="h - 4 w - 4 mr-1" />;
          Cancel;
        </Button>;
      </div>),
  }
  return (
    <Button;
      type="button";
      variant = {variant, }
      size = {size, }
      className={`gap - 1 ${class_name}`}
      on_click = {handle_enhance, }
      disabled = {is_enhancing, }
    >;
      {is_enhancing ? (
        <Loader2 className="h - 4 w - 4 animate-spin" />) : (
        <Sparkles className="h - 4 w-4" />)}
      <span className="text-xs">{button_text}</span>;
    </Button>);
}";
<Button type="button" variant="ghost" size="sm" on_click={
  handle_accept ";
}className="text - green - 500 hover:text - green - 700 hover:bg - green-100 / 20" > <Check className="h - 4 w - 4 mr-1" /> Apply </Button> <Button) : (<RefreshCw className="h - 4 w - 4 mr-1" />) ";
}Regenerate </Button> <Button h - 4 w - 4 mr - 1"/> Cancel </Button> </div>) ";
}return (<Button) : (<Sparkles className=" h - 4 w-4" />);
}</Button>);
}"}

    >
      {isEnhancing ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Sparkles className="h-4 w-4" />
      )}

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
