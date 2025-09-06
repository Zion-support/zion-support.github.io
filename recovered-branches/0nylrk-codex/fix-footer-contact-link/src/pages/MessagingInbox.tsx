<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD

import React, { useEffect, useState } from 'react';

=======
import React, { useEffect, useState } from 'react';
import { MessageSquare, Video  } from 'lucide-react';
import { useMessaging  } from '@/context/MessagingContext';
import { ProtectedRoute  } from '@/components/ProtectedRoute';
import { ConversationsList, ConversationDetailView  } from '@/components/messaging';
import { useIsMobile  } from '@/hooks/use-mobile';
import { toast  } from 'sonner';
import { Button  } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
export default function MessagingInbox() {
  const {
    conversations;

    activeConversation
    setActiveConversation

    markAsRead;
    fetchConversations;
    isLoading
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  } = useMessaging();

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [activeCall, setActiveCall] = useState<string | null>(null);
import {MessageSquare, Video} from 'lucide-react';
import {use_messaging} from '@/context / MessagingContext';
import {ProtectedRoute} from '@/components / ProtectedRoute';
import {ConversationsList, ConversationDetailView} from '@/components / messaging';
import {useIsMobile} from '@/hooks / use - mobile';
import {toast} from 'sonner';
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
import {MessageSquare, Video} from 'lucide-react';
import {use_messaging} from '@/context / MessagingContext';
import {ProtectedRoute} from '@/components / ProtectedRoute';
import {ConversationsList, ConversationDetailView} from '@/components / messaging';
import {useIsMobile} from '@/hooks / use - mobile';
import {toast} from 'sonner';
  useEffect(() => {
    // Fetch conversations when component mounts
    const loadData = async () => {
import {Button} from '@/components / ui / button';
import {use_navigate} from 'react-router-dom';
export default /**
 * MessagingInbox - Function description
 */
function MessagingInbox() {
  const {
    conversations;
    active_conversation,
    setActiveConversation,
    markAsRead;
    fetch_conversations;
    is_loading;
  } = use_messaging ();
  const is_mobile = useIsMobile ();
  const navigate = use_navigate ();
  const [active_call, setActiveCall] = useState < string | null>(null);
;
  useEffect (() => {
    // Fetch conversations when component mounts;
    const load_data = async () => {
      try {
        await fetch_conversations ();
      } catch (error) {
        console.error ("Failed to load conversations:", error);
        toast.error ("Failed to load messages. Please try again.");
      }


    },
    
    loadData()
  }, [fetchConversations]),
  

  const startVideoCall = () => {
    if (!activeConversation) {
      toast.error("Please select a conversation first"),
      return
    }
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."
    });
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
    
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."
    }),
    
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  },
  

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>
              <MessageSquare className="h-6 w-6" />
              Messages
            </h1>
            {activeConversation && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>
              {/* Conversations List */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
              {isLoading ? (
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="animate-pulse">Loading conversations...</div>
                </div>
              ) : (
                <ConversationsList
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
    <ProtectedRoute>;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto py-8 px-4">;
          <div className="flex justify-between items-center mb-6">;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>;
              <MessageSquare className="h-6 w-6" />;
              Messages;
            </h1>;
<<<<<<< HEAD
=======
<<<<<<< HEAD

            {activeConversation && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <Button
                onClick={startVideoCall}
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light">;
                <Video className="h-4 w-4" />;
                Start Call;
              </Button>;
            )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

          </div>;

          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">;
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>;

=======
            {activeConversation && (;
              <Button;
                onClick={startVideoCall}
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"
              >
                <Video className="h-4 w-4" />
                Start Call
              </Button>
            )}
          </div>;
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">;
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              {/* Conversations List */}
              {isLoading ? (;
                <div className="flex-1 flex items-center justify-center p-8">;
                  <div className="animate-pulse">Loading conversations...</div>;
                </div>;
              ) : (;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    }
;
    load_data ();
  }, [fetch_conversations]);
;
  const startVideoCall = () =>: any {
    // Check condition
if ( {) {
  $2
}
      toast.error ("Please select a conversation first");
      return;
    }
    const room_id = `msg-${active_conversation.id}`;
    setActiveCall (room_id);
;
    // Show toast notification;
    toast.success ("Starting video call", {
      description: "Initializing video call connection...";
    });
;
    // Navigate to video call page;
    navigate (`/call/${room_id}`);
  }
;
  return (
    <ProtectedRoute>;
      <div className="min - h-screen bg - zion - blue">;
        <div className="container mx - auto py - 8 px - 4">;
          <div className="flex justify - between items - center mb - 6">;
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold text - white flex items - center gap - 2`}>;
              <MessageSquare className="h - 6 w - 6" />;
              Messages;
            </h1>;
            {active_conversation && (
              <Button;
                on_click={startVideoCall}
                className="flex items - center gap - 2 bg - zion - purple hover:bg - zion - purple - light";
              >;
                <Video className="h - 4 w - 4" />;
                Start Call;
              </Button>)}
          </div>;
          <div className="bg - zion - blue - light / 10 rounded - lg shadow - lg border border - zion - purple / 20 overflow - hidden">;
            <div className={`flex flex - col md:flex - row h-[${is_mobile ? '85vh' : '75vh'}]`}>;
              {/* Conversations List */}
              {is_loading ? (
                <div className="flex - 1 flex items - center justify - center p - 8">;
                  <div className="animate - pulse">Loading conversations...</div>;
                </div>) : (
                <ConversationsList;
                <ConversationsList;

                  conversations={conversations}
                  active_conversation={active_conversation}
                  setActiveConversation={setActiveConversation}
                  markAsRead={markAsRead}
              {/* Conversation Detail */}
              <ConversationDetailView />;
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}
      </div>;
    </ProtectedRoute>;
                />)}
              {/* Conversation Detail */}
              <ConversationDetailView />;
            </div>;
          </div>;
        </div>;
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {is_mobile && <div className="h - 16"></div>}
      </div>;
    </ProtectedRoute>);

}
;

  ),; useEffect ( () => {
  //Fetch conversations when component mounts const loadData = async () => {
  try {
  
}

}
;

};
}, [fetchConversations]);
}const roomId = `msg-$ {
  activeConversation.id 
}`;
setActiveCall (roomId);
//Show toast notification //Navigate to video call page navigate (`/call/$ {
  roomId 
}`) 
};
return (<ProtectedRoute> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto py-8 px-4" > <div className="flex justify-between items-center mb-6" > <h1 className= {
  `text-$ {
  isMobile ? '2xl' : '3xl' 
}font-bold text-white flex items-center gap-2` 
}> <MessageSquare className="h-6 w-6" /> activeConversation && (<Button onClick= {
  startVideoCall 
}className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light" > <Video className="h-4 w-4" /> Start Call </Button>) 
}</div> </div>) : (<ConversationsList conversations= {
  conversations 
}activeConversation= {
  activeConversation 
}setActiveConversation= {
  setActiveConversation 
}markAsRead= {
  markAsRead 
}/>) 
}{
  /* Conversation Detail */ 
}<ConversationDetailView /> </div> </div> </div> </div> </ProtectedRoute>) 
}
                <ConversationsList;
                  conversations={conversations}
                  activeConversation={activeConversation}
                  setActiveConversation={setActiveConversation}
                  markAsRead={markAsRead}
                />
              )}
              {/* Conversation Detail */}
              <ConversationDetailView />
            </div>
          </div>
        </div>
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}
      </div>
    </ProtectedRoute>
  )
}
}
;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
