

import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Sparkles, Loader2, RefreshCw, Check, X } from 'lucide-react'
import { useAIContentEnhancer, AIEnhancementOptions  } from '@/hooks/useAIContentEnhancer';
import { toast } from '@/hooks/use-toast';
interface AIEnhancementButtonProps {
  options: AIEnhancementOptions;
  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  contentLength?: number

}
export function AIEnhancementButton({
  options;
  onEnhanced;

  if (showActions) {
    return (
      <div className="flex gap-2 items-center">
        <Button
          type="button""
          variant="ghost""
          size="sm""
          onClick = {handleAccept,}
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20">;
          <Check className="h-4 w-4 mr-1" />;
          Apply;
        </Button>;
        <Button
          type="button""
          variant="ghost""
          size="sm""
          onClick = {handleRegenerate,}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"",
          disabled = {isEnhancing,}>;
  if (showActions) {
    return (
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
          onClick={handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20"
          disabled={isEnhancing}
        >
          {isEnhancing ? (
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
          onClick={handleCancel}
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20"
        >
          <X className="h-4 w-4 mr-1" />
          Cancel
        </Button>
      </div>
    )
  }
  return (
    <Button
      type="button"
  },;
  const handleAccept = () => {;
    if (generatedContent) {;
      onEnhanced(generatedContent),;
      setShowActions(false),;
      setGeneratedContent(null),;
      toast({;
        title: "Content applied",;
        description: "AI-enhanced content has been applied."});
    }
  },;
  const handleRegenerate = async () => {;
    await handleEnhance();
  },;
  const handleCancel = () => {;
    setShowActions(false);
    setGeneratedContent(null);
  };
  if (showActions) {;
    return (;
      <div className="flex gap-2 items-center">;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          onClick={handleAccept}
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20";
        >;
          <Check className="h-4 w-4 mr-1" />;
          Apply;
        </Button>;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          onClick={handleRegenerate}
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20";
          disabled={isEnhancing}
        >;
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;
          ) : (;
            <RefreshCw className="h-4 w-4 mr-1" />;
          )}
          Regenerate;
        </Button>;
        <Button
          type="button""
          variant="ghost""
          size="sm""
          onClick = {handleCancel,}
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20">;
        <Button;
          type="button";
          variant="ghost";
          size="sm";
          onClick={handleCancel}
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20";
        >;
          <X className="h-4 w-4 mr-1" />;
          Cancel;
        </Button>;
      </div>;
    ),;
  }
  return (
    <Button
      type="button""
      variant = {variant,}
      size = {size,}
      className={`gap-1 ${className}`}`
      onClick = {handleEnhance,}
      disabled = {isEnhancing,}>;
      {isEnhancing ? (;
        <Loader2 className="h-4 w-4 animate-spin" />;
      ) : (;
        <Sparkles className="h-4 w-4" />;
      )}
      <span className="text-xs">{buttonText}</span>;
    </Button>;
  );
};";
<Buttontype="button" variant="ghost" size="sm" onClick={"
  handleAccept ""
}className="text-green-500 hover:text-green-700 hover:bg-green-100/20"> <Check className="h-4 w-4 mr-1" /> Apply </Button> <Button) : (<RefreshCw className="h-4 w-4 mr-1" />) ";
}Regenerate </Button> <Button h-4 w-4 mr-1"/> Cancel </Button> </div>) ";
}return (<Button) : (<Sparkles className=" h-4 w-4" />) ;
}</Button>) ;
}"}"
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
          className="text - blue - 500 hover:text - blue - 700 hover:bg - blue - 100 / 20";",
          disabled = {is_enhancing, }
        >;
          {is_enhancing ? (
            <Loader2 className="h - 4 w - 4 mr - 1 animate - spin" />) : ("
            <RefreshCw className="h - 4 w - 4 mr - 1" />)}"
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
      type="button";
      variant = {variant, }
      size = {size, }
      className={`gap - 1 ${class_name}`}`
      on_click = {handle_enhance, }
      disabled = {is_enhancing, }
    >;
      {is_enhancing ? (
        <Loader2 className="h - 4 w - 4 animate - spin" />) : ("
        <Sparkles className="h - 4 w - 4" />)}"
      <span className="text - xs">{button_text}</span>;
    </Button>);
}";
<Button type="button" variant="ghost" size="sm" on_click={"
  handle_accept ";
}className="text - green - 500 hover:text - green - 700 hover:bg - green - 100 / 20" > <Check className="h - 4 w - 4 mr - 1" /> Apply </Button> <Button) : (<RefreshCw className="h - 4 w - 4 mr - 1" />) ";
}Regenerate </Button> <Button h - 4 w - 4 mr - 1"/> Cancel </Button> </div>) ";
}return (<Button) : (<Sparkles className=" h - 4 w - 4" />);
}</Button>);
}"}"
    >
      {isEnhancing ? (
        <Loader2 className="h-4 w-4 animate-spin" />"
      ) : (
        <Sparkles className="h-4 w-4" />"
      )}
      <span className="text-xs">{buttonText}</span>
    );
  }
;
  return (;
    <Button;
      type="button";
}"}


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
}
;
  );

};";
<Button type="button" variant="ghost" size="sm" onClick={;
  handleAccept ";
}className="text-green-500 hover:text-green-700 hover:bg-green-100/20" > <Check className="h-4 w-4 mr-1" /> Apply </Button> <Button) : (<RefreshCw className="h-4 w-4 mr-1" />) ";
}Regenerate </Button> <Button h-4 w-4 mr-1"/> Cancel </Button> </div>) ";
}return (<Button) : (<Sparkles className=" h-4 w-4" />) ;
}</Button>) ;
}"
origin/cursor/automate-test-improve-and-merge-code-2533
    return ("
      <div className="flex gap-2 items-center">;"
</div>
        <Button;"
          type="button"""
          variant="ghost"""
          size="sm""
          onClick = {handleAccept,}"
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20">;"
          <Check className="h-4 w-4 mr-1" />;"

        ;
          onClick = {handleRegenerate,}"
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20""
          disabled = {isEnhancing,}>;
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;"
</Loader2>"
            <RefreshCw className="h-4 w-4 mr-1" />;"

          onClick = {handleCancel,}
          className="text-gray-500 hover: text-gray-700 hover:bg-gray-100/20">;"
          <X className="h-4 w-4 mr-1" />;"

      </div>;
      type="button""
      variant = {variant,}
      size = {size,}`;
      className={`gap-1 ${className}`}
      onClick = {handleEnhance,}
        <Loader2 className="h-4 w-4 animate-spin" />;"
        <Sparkles className="h-4 w-4" />;"
      <span className="text-xs">{buttonText}</span>;"
    ;"
<Buttontype="button" variant="ghost" size="sm" onClick={""
  handleAccept "")"
}className="text-green-500 hover:text-green-700 hover:bg-green-100/20"> <Check className="h-4 w-4 mr-1" /> Apply  <Button) : (<RefreshCw className="h-4 w-4 mr-1" />) ";"
}Regenerate  <Button h-4 w-4 mr-1"/> Cancel  </div>) ";""
}return (<Button) : (<Sparkles className=" h-4 w-4" />) ;"

}) ;"
      <div className="flex gap - 2 items - center">;"
          type="button";""
          variant="ghost";""
          size="sm";"
          on_click = {handle_accept, }"
          className="text - green - 500 hover:text - green - 700 hover:bg - green - 100 / 20";"
        >;
          <Check className="h - 4 w - 4 mr - 1" />;"

          on_click = {handle_regenerate, }"
          className="text - blue - 500 hover:text - blue - 700 hover:bg - blue - 100 / 20";"
          disabled = {is_enhancing, }
            <Loader2 className="h - 4 w - 4 mr - 1 animate - spin" />) : ("
</Loader2>)"
            <RefreshCw className="h - 4 w - 4 mr - 1" />)}"

          on_click = {handle_cancel, }"
          className="text - gray - 500 hover: text - gray - 700 hover:bg - gray - 100 / 20";"
          <X className="h - 4 w - 4 mr - 1" />;"

      </div>),
      type="button";"
      variant = {variant, }
      size = {size, }`;
      className={`gap - 1 ${class_name}`}
      on_click = {handle_enhance, }
        <Loader2 className="h - 4 w - 4 animate - spin" />) : ("
        <Sparkles className="h - 4 w - 4" />)}"
      <span className="text - xs">{button_text}</span>;"
    );"
<Button type="button" variant="ghost" size="sm" on_click={""
  handle_accept ";""
}className="text - green - 500 hover:text - green - 700 hover:bg - green - 100 / 20" > <Check className="h - 4 w - 4 mr - 1" /> Apply  <Button) : (<RefreshCw className="h - 4 w - 4 mr - 1" />) ";""
}Regenerate  <Button h - 4 w - 4 mr - 1"/> Cancel  </div>) ";""
}return (<Button) : (<Sparkles className=" h - 4 w - 4" />);"

});"
        <Loader2 className="h-4 w-4 animate-spin" />"
        <Sparkles className="h-4 w-4" />"
      <span className="text-xs">{buttonText}</span>""`;
pr-12325
