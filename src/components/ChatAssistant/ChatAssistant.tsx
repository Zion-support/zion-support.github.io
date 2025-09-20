import React from "react,,
,
import { SEO  } from "@/components/SEO",
export default function ChatAssistant(props: any) {return (,
<div className="min-h-screen bg-white">,
<SEO title="ChatAssistant - Zion Tech Group" description="Professional ChatAssistant services by Zion Tech Group"  />,
<div className="container mx-auto px-4 py-20">,
<h1 className="text-4xl font-bold text-white mb-8">ChatAssistant</h1>,
<p className="text-gray-300 text-lg">,
Professional ChatAssistant services to help your business grow.,
</p>,
</div>",
</div>,;
),,',;
"}, ";<//div><///div>;
  const isGuest = !auth?.isAuthenticated,
const handleSendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return,
import React {
read?: boolean,
}
export interface ChatAssistantProps {
  /** Optional canned questions shown when the chat is empty */
  starterQuestions?: string[]
}
export function ChatAssistant({
return (
    <div,
className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="chat-assistant-title"
    >
      <div className="w-full max-w-xl bg-zion-blue rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Header */}
        <div className="bg-zion-blue-dark p-3 flex items-center justify-between border-b border-zion-purple/20">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border border-zion-purple/20">
              <AvatarImage src={recipient.avatarUrl} alt={recipient.name} />
              <AvatarFallback className="bg-zion-purple/20 text-white">
                {recipient.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 id="chat-assistant-title" className="font-medium text-white">
                {recipient.name}
              </h2>
              {recipient.role && (
                <div className="text-xs text-zion-slate">{recipient.role}</div>
              )}
            </div>
          </div>
          <Button,
variant="ghost"
            size="icon"
            className="text-white hover:bg-zion-purple/10 rounded-full"
            onClick = {onClose,}
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        {/* Context Header (Optional) */}
        {contextHeader && (
          <div className="border-b border-zion-purple/20 bg-zion-blue-dark/50 p-3">
            {contextHeader}
          </div>
        )}
        {/* Messages */}
        <div,
className="flex-1 overflow-y-auto p-4 space-y-4"
          aria-live="polite"
        >
          {currentMessages.length === 0 ? (
            <div className="text-center text-zion-slate py-8 space-y-4">
              <p>Start a conversation with {recipient.name}</p>
              {starterQuestions.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                  {starterQuestions.map((q idx,) => (
                    <Button,
key = {idx,}
                      variant="outline"
                      className="text-xs"
                      onClick = {(,) => handleSendMessage(q),}
                    >
                      {q}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            currentMessages.map((msg,) => (
              <ChatMessage key={msg.id} role={msg.role} message={msg.message} />
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
        {/* Input */}
        <div className="p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
      {showGuestModal && guestMessage && (
        <div,
className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-message-title"
        >
          <div className="bg-zion-blue-darker p-6 rounded-lg shadow-xl w-full max-w-md">
            <h3,
id="confirm-message-title"
              className="text-lg font-semibold text-white mb-4"
            >
              Confirm Message
            </h3>
            <p className="text-zion-slate mb-6 whitespace-pre-wrap break-words">
              {guestMessage}
            </p>
            <div className="flex justify-end space-x-3">
              <Button,
variant="outline"
                onClick = {handleModalCancel,}
                className="text-white border-zion-purple hover:bg-zion-purple/10"
              >
                Cancel
              </Button>
              <Button,
onClick = {handleModalSendConfirm,}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
}
