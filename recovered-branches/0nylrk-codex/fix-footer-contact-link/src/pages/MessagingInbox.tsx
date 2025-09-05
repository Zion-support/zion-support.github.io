
import React, {_useEffect, _useState} from 'react';

export default function MessagingInbox() {_const { 
    conversations, _activeConversation, _setActiveConversation, _markAsRead, _fetchConversations, _isLoading} = useMessaging();
  const _isMobile = useIsMobile();
  const _navigate = useNavigate();
  const [activeCall, setActiveCall] = useState<string | null>(null);
  
  useEffect__(() => {_// Fetch conversations when component mounts
    const _loadData = async () => {
      try {
        await fetchConversations();} catch (error) {_toast.error("Failed to load messages. Please try again.");}
    };
    
    loadData();
  }, [fetchConversations]);
  
  const _startVideoCall = () => {_if (!activeConversation) {
      toast.error("Please select a conversation first");
      return;}
    
    const _roomId = `msg-${_activeConversation.id}`;
    setActiveCall(roomId);
    
    // Show toast notification
    toast.success("Starting video call", {_description: "Initializing video call connection..."});
    
    // Navigate to video call page
    navigate(`/call/${_roomId}`);
  };
  
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className={_`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>
              <MessageSquare className="h-6 w-6" />
              Messages
            </h1>
            
            {_activeConversation && (
              <Button 
                onClick={startVideoCall}
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"
              >
                <Video className="h-4 w-4" />
                Start Call
              </Button>
            )}
          </div>
          
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">
            <div className={_`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>
              {_/* Conversations List */}
              {_isLoading ? (
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="animate-pulse">Loading conversations...</div>
                </div>
              ) : (
                <ConversationsList
                  conversations={conversations}
                  activeConversation={_activeConversation}
                  setActiveConversation={_setActiveConversation}
                  markAsRead={_markAsRead}
                />
              )}
              
              {_/* Conversation Detail */}
              <ConversationDetailView />
            </div>
          </div>
        </div>

        {_/* Add extra bottom padding on mobile to account for the bottom nav */}
        {_isMobile && <div className="h-16"></div>}
      </div>
    </ProtectedRoute>
  );
}
