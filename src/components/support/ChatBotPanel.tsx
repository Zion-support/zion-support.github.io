    
      timestamp: new Date()},
    
        timestamp: new Date()},
      
        description: "We're having trouble connecting to our support service."}),
      
      
      id: `bot-escalation-${Date.now()}`,
      content: 
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?";
      sender: "bot",
      timestamp: new Date()},
    

  const handleQuickReply = (text: string) => {
    handleSendMessage(text)
  };

    


