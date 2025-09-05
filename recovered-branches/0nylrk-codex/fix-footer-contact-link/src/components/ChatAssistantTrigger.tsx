

export function ChatAssistantTrigger() {_const [isOpen, _setIsOpen] = useState(false);

  // Handle sending messages to the AI chat assistant
  const _handleSendMessage = async (message: string): Promise<void> => {
    try {
      const _response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", _{
        method: "POST", _headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify({_messages: [{ role: "user", _content: message}] 
        })});
      
      if (!response.ok) {_throw new Error("Failed to get response from AI assistant");}
      
      return Promise.resolve();
    } catch (error) {_return Promise.resolve();}
  };

  return (_<>
      <Button
        onClick={_() => setIsOpen(true)}
        size="icon"
        variant="outline"
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50"
        aria-label="Open chat assistant"
      >
        <MessageSquare className="h-5 w-5" />
      </Button>
      
      {_isOpen && (_<ChatAssistant
          isOpen={isOpen}
          onClose={_() => setIsOpen(false)}
          recipient={_{
            id: 'ai-assistant', _name: 'AI Assistant', _avatarUrl: 'https://placehold.co/64x64?text=AI', _role: 'Virtual Assistant'}}
          onSendMessage={_handleSendMessage}
        />
      )}
    </>
  );
}
