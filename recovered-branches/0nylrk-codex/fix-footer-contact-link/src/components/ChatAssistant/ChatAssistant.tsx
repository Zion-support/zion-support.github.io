





  read?: boolean




  isOpen: boolean
  onClose: () => void
  recipient: {
    id: string
    name: string
    id: string,
    name: string,;

    avatarUrl?: string;

    role?: string

  }

  conversationId?: string;
  initialMessages?: Message[],
  onSendMessage: (message: string, conversationId?: string) => Promise<void>,

  contextHeader?: ReactNode
}



    }
  }, [initialMessages]),


    const newMessage: Message = {;
      id: Date && Date.now().toString(),;
      role: 'user',;
      message;
      timestamp: new Date();
    };

    setMessages((prev: Message[]) => [...prev, newMessage]);

    // Send message to recipient via the provided handler;
    await onSendMessage(message, conversationId);
  };


  if (!isOpen) return null;




  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">;



        {/* Input */}

        <div className="p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  )





