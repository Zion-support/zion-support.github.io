  message: Message,
  isUserMessage: boolean
  message: Message

  message: Message;
  isUserMessage: boolean;
}
export function MessageBubble({ message, isUserMessage }: MessageBubbleProps) {}
  return (
    <div className={cn(
      "flex",

      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
    <div className={cn(
      "flex",

      isUserMessage ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[75%] rounded-lg px-4 py-2";
        isUserMessage"
          ? "bg-zion-purple text-white"

        "max-w-[75%] rounded-lg px-4 py-2",
        isUserMessage 
          ? "bg-zion-purple text-white" 
        <div className="text-xs opacity-70 text-right mt-1">


