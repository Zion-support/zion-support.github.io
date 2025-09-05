
import React from "react";

interface QuickReplyButtonProps {_text: string;
  onClick: () => void;}

export function QuickReplyButton(_{_text, _onClick}: QuickReplyButtonProps) {_return (
    <Button
      variant="outline"
      size="sm"
      className={cn(
        "border-zion-purple/30 hover:bg-zion-purple hover:text-white", _"transition-colors duration-200"
      )}
      onClick={_onClick}
    >
      {_text}
    </Button>
  );
}
