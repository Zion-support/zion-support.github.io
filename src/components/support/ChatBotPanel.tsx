

      id: `bot-escalation-${Date.now()}`,
      content:
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",
      sender: "bot",
      timestamp: new Date()},

    setMessages((prev) => [...prev, escalationMessage]),

    // Log this interaction for the support team
    logSupportEscalation()
  },

