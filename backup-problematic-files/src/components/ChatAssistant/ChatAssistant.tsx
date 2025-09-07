
      <div className="w-full max-w-xl bg-zion-blue rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[80vh]">;
        {/* Header */}
        <div className="bg-zion-blue-dark p-3 flex items-center justify-between border-b border-zion-purple/20">;
          <div className="flex items-center space-x-3">;
            <Avatar className="h-10 w-10 border border-zion-purple/20">;

              </AvatarFallback>;
            </Avatar>;
            <div>;
              <h2 id="chat-assistant-title" className="font-medium text-white">;

        {/* Context Header (Optional) */}
        {contextHeader && (;
          <div className="border-b border-zion-purple/20 bg-zion-blue-dark/50 p-3">;
            {contextHeader}
          </div>;
        )}
;
        {/* Messages */}

                    </Button>;
                  ))}
                </div>;
              )}
            </div>;

        {/* Input */}
        <div className="p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30">;
          <ChatInput onSend={handleSendMessage} />;
        </div>;
      </div>;

              Confirm Message;
            </h3>;
            <p className="text-zion-slate mb-6 whitespace-pre-wrap break-words">;
              {guestMessage}
            </p>;
            <div className="flex justify-end space-x-3">;

              >;
                Cancel;
              </Button>;
              <Button;

              >;
                Send;
              </Button>;
            </div>;
          </div>;

}
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