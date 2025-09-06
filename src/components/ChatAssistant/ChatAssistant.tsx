  const isGuest = !auth?.isAuthenticated;


  const handleSendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return;

