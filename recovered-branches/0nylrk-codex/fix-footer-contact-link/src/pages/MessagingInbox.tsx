
<<<<<<< HEAD
import React, { useEffect, useState } from 'react',
import { MessageSquare, Video } from 'lucide-react',
import { useMessaging } from '@/context/MessagingContext',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ConversationsList, ConversationDetailView } from '@/components/messaging',
import { useIsMobile } from '@/hooks/use-mobile',
import { toast } from 'sonner',
import { Button } from '@/components/ui/button',
import { useNavigate } from 'react-router-dom',
export default function MessagingInbox() {
  const { 
    conversations,
    activeConversation, 
    setActiveConversation, 
    markAsRead,
    fetchConversations,
    isLoading
  } = useMessaging(),
  const isMobile = useIsMobile(),
  const navigate = useNavigate(),
  const [activeCall, setActiveCall] = useState<string | null>(null),
=======
import React, {_useEffect, _useState} from 'react';

export default function MessagingInbox() {_const { 
    conversations, _activeConversation, _setActiveConversation, _markAsRead, _fetchConversations, _isLoading} = useMessaging();
  const _isMobile = useIsMobile();
  const _navigate = useNavigate();
  const [activeCall, setActiveCall] = useState<string | null>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  useEffect__(() => {_// Fetch conversations when component mounts
    const _loadData = async () => {
      try {
<<<<<<< HEAD
        await fetchConversations()
      } catch (error) {
<<<<<<< HEAD
        console.error("Failed to load conversations:", error),
        toast.error("Failed to load messages. Please try again.")
=======
        console.error(&quot;Failed to load conversations:&quot;, error);
        toast.error(&quot;Failed to load messages. Please try again.&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
    },
=======
        await fetchConversations();} catch (error) {_toast.error("Failed to load messages. Please try again.");}
    };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    loadData()
  }, [fetchConversations]),
  
<<<<<<< HEAD
  const startVideoCall = () => {
    if (!activeConversation) {
<<<<<<< HEAD
      toast.error("Please select a conversation first"),
      return
=======
      toast.error(&quot;Please select a conversation first&quot;);
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
    
    // Show toast notification
<<<<<<< HEAD
    toast.success("Starting video call", {
      description: "Initializing video call connection..."
    }),
=======
    toast.success(&quot;Starting video call&quot;, {
      description: &quot;Initializing video call connection...&quot;
    });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  },
  
  return (
    <ProtectedRoute>
      <div className=&quot;min-h-screen bg-zion-blue&quot;>
        <div className=&quot;container mx-auto py-8 px-4&quot;>
          <div className=&quot;flex justify-between items-center mb-6&quot;>
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>
              <MessageSquare className=&quot;h-6 w-6&quot; />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Messages
            </h1>
            
            {_activeConversation && (
              <Button 
                onClick={startVideoCall}
                className=&quot;flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light&quot;
              >
                <Video className=&quot;h-4 w-4&quot; />
                Start Call
              </Button>
            )}
          </div>
          
<<<<<<< HEAD
          <div className=&quot;bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden&quot;>
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>
              {/* Conversations List */}
              {isLoading ? (
                <div className=&quot;flex-1 flex items-center justify-center p-8&quot;>
                  <div className=&quot;animate-pulse&quot;>Loading conversations...</div>
=======
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">
            <div className={_`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>
              {_/* Conversations List */}
              {_isLoading ? (
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="animate-pulse">Loading conversations...</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className=&quot;h-16&quot;></div>}
=======
        {_/* Add extra bottom padding on mobile to account for the bottom nav */}
        {_isMobile && <div className="h-16"></div>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    </ProtectedRoute>
  )
}
