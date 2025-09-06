  const isGuest = !auth?.isAuthenticated;


  const handleSendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return;

<<<<<<< HEAD
=======
    if (!isGuest) {
      // Logged-in user
      const newMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        message: messageContent,
        timestamp: new Date()},
      setCurrentMessages((prev: Message[]) => [...prev, newMessage]);
      setPendingApiCallParams({ message: messageContent, conversationId })
    } else {
      // Guest user
      setGuestMessage(messageContent);
      setShowGuestModal(true)
    }
  };

  const handleModalSendConfirm = () => {
    if (!guestMessage) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      message: guestMessage,
      timestamp: new Date()},
    setCurrentMessages((prev: Message[]) => [...prev, newMessage]), // This will now use the guest-aware setCurrentMessages
    setPendingApiCallParams({ message: guestMessage, conversationId });

    setShowGuestModal(false);
    setGuestMessage(null)
  };

  const handleModalCancel = () => {
    setShowGuestModal(false);
    setGuestMessage(null)
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose()
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
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
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-zion-purple/10 rounded-full"
            onClick={onClose}
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
        <div
          className="flex-1 overflow-y-auto p-4 space-y-4"
          aria-live="polite"
        >
          {currentMessages.length === 0 ? (
            <div className="text-center text-zion-slate py-8 space-y-4">
              <p>Start a conversation with {recipient.name}</p>
              {starterQuestions.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                  {starterQuestions.map((q, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      className="text-xs"
                      onClick={() => handleSendMessage(q)}
                    >
                      {q}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            currentMessages.map((msg) => (
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
        <div
          className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-message-title"
        >
          <div className="bg-zion-blue-darker p-6 rounded-lg shadow-xl w-full max-w-md">
            <h3
              id="confirm-message-title"
              className="text-lg font-semibold text-white mb-4"
            >
              Confirm Message
            </h3>
            <p className="text-zion-slate mb-6 whitespace-pre-wrap break-words">
              {guestMessage}
            </p>
            <div className="flex justify-end space-x-3">
              <Button
                variant="outline"
                onClick={handleModalCancel}
                className="text-white border-zion-purple hover:bg-zion-purple/10"
              >
                Cancel
              </Button>
              <Button
                onClick={handleModalSendConfirm}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
<<<<<<< HEAD

}, [ isGuest;
initialMessages;
storedGuestMessages;
setStoredGuestMessages;
recipient.id]);
//Effect for logged-in user messages useEffect ( () => {;
  if (!isGuest) {;
  //Update state if initialMessages prop changes (e.g. new conversation loaded) useEffect ( () => {;
  if (debouncedApiCallParams) {;
  onSendMessage (if (!isGuest) {;
  //Logged-in user const newMessage: Message = {;
  setShowGuestModal (false);
setGuestMessage (null) ;
};
if (!isOpen) return null;
return (<div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="chat-assistant-title" >) ";
}</div> </div> <Button > <X className="h-5 w-5" /> </Button> </div> {;
  contextHeader ;
}</div>) ;
}{;
  /* Messages */ ";
}<div className="flex-1 overflow-y-auto p-4 space-y-4" aria-live="polite" > > {;
  q ;
}</Button>) ) ;
}</div>) ;
}</div>) : (currentMessages.map ( (msg) => (<ChatMessage key= {;
  msg.id ;
}role= {;
  msg.role ;
}message= {;
  msg.message ;
}/>) ) ) ;
}<div ref= {;
  messagesEndRef ;
}/> </div> </div> </div> {";
  showGuestModal && guestMessage && (<div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="confirm-message-title" > <div className="bg-zion-blue-darker p-6 rounded-lg shadow-xl w-full max-w-md" > <h3 id="confirm-message-title" className="text-lg font-semibold text-white mb-4" > Confirm Message </h3> <p className="text-zion-slate mb-6 whitespace-pre-wrap break-words" > {;
  guestMessage ";
}</p> <div className="flex justify-end space-x-3" > <Button > Cancel </Button> <Button > Send </Button> </div> </div> </div>) ;
}</div>) ;
}'"
=======

<<<<<<< HEAD
  const isGuest = !auth?.isAuthenticated;

<<<<<<< HEAD


  const handleSendMessage = async (messageContent: string) => {

    if (!messageContent.trim()) return,



>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
