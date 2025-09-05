
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
  
  useEffect(() => {
    // Fetch conversations when component mounts
    const loadData = async () => {
      try {
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
    
    loadData()
  }, [fetchConversations]),
  
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
              Messages
            </h1>
            
            {activeConversation && (
              <Button 
                onClick={startVideoCall}
                className=&quot;flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light&quot;
              >
                <Video className=&quot;h-4 w-4&quot; />
                Start Call
              </Button>
            )}
          </div>
          
          <div className=&quot;bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden&quot;>
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>
              {/* Conversations List */}
              {isLoading ? (
                <div className=&quot;flex-1 flex items-center justify-center p-8&quot;>
                  <div className=&quot;animate-pulse&quot;>Loading conversations...</div>
                </div>
              ) : (
                <ConversationsList
=======
import React, { useEffect, useState } from 'react',;
import { MessageSquare, Video } from 'lucide-react',;
import { useMessaging } from '@/context/MessagingContext',;
import { ProtectedRoute } from '@/components/ProtectedRoute',;
import { ConversationsList, ConversationDetailView } from '@/components/messaging',;
import { useIsMobile } from '@/hooks/use-mobile',;
import { toast } from 'sonner',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;
export default function MessagingInbox() {;
  const {;
    conversations,;
    activeConversation,;
    setActiveConversation,;
    markAsRead,;
    fetchConversations,;
    isLoading;
  } = useMessaging(),;
  const isMobile = useIsMobile(),;
  const navigate = useNavigate(),;
  const [activeCall, setActiveCall] = useState<string | null>(null),;
  useEffect(() => {;
    // Fetch conversations when component mounts;
    const loadData = async () => {;
      try {;
        await fetchConversations();
      } catch (error) {;
        console.error("Failed to load conversations:", error),;
        toast.error("Failed to load messages. Please try again.");
      }
    },;
    loadData();
  }, [fetchConversations]),;
  const startVideoCall = () => {;
    if (!activeConversation) {;
      toast.error("Please select a conversation first"),;
      return;
    }
;
    const roomId = `msg-${activeConversation.id}`,;
    setActiveCall(roomId),;
    // Show toast notification;
    toast.success("Starting video call", {;
      description: "Initializing video call connection...";
    });
    // Navigate to video call page;
    navigate(`/call/${roomId}`);
  };
  return (;
    <ProtectedRoute>;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto py-8 px-4">;
          <div className="flex justify-between items-center mb-6">;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>;
              <MessageSquare className="h-6 w-6" />;
              Messages;
            </h1>;
            {activeConversation && (;
              <Button;
                onClick={startVideoCall}
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light";
              >;
                <Video className="h-4 w-4" />;
                Start Call;
              </Button>;
            )}
          </div>;
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">;
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>;
              {/* Conversations List */}
              {isLoading ? (;
                <div className="flex-1 flex items-center justify-center p-8">;
                  <div className="animate-pulse">Loading conversations...</div>;
                </div>;
              ) : (;
                <ConversationsList;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  conversations={conversations}
                  activeConversation={activeConversation}
                  setActiveConversation={setActiveConversation}
                  markAsRead={markAsRead}
                />;
              )}
;
              {/* Conversation Detail */}
              <ConversationDetailView />;
            </div>;
          </div>;
        </div>;
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
<<<<<<< HEAD
        {isMobile && <div className=&quot;h-16&quot;></div>}
      </div>
    </ProtectedRoute>
  )
=======
        {isMobile && <div className="h-16"></div>}
      </div>;
    </ProtectedRoute>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;