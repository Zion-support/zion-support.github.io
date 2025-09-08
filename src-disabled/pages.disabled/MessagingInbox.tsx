
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { MessageSquare, Video } from 'lucide-react';
import { use_messaging } from '@/context / MessagingContext';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { ConversationsList, ConversationDetailView } from '@/components / messaging';
import { useIsMobile } from '@/hooks / use - mobile';


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {logErrorToProduction} from '@/utils/productionLogger';

import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states';
import { useRouter } from 'next/router'; // Changed from react-router-dom
import React, { useEffect, useState } from 'react',;
import React, { useEffect, useState } from 'react';
import { MessageSquare, Video } from 'lucide-react'

<<<<<<< HEAD
import { useMessaging } from '@/context/MessagingContext',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ConversationsList, ConversationDetailView } from '@/components/messaging',
import { useIsMobile } from '@/hooks/use-mobile',
import { toast } from 'sonner',
import { Button } from '@/components/ui/button',
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states',

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useRouter } from 'next/router', // Changed from react-router-dom
import {logErrorToProduction} from '@/utils/productionLogger',;
export default function MessagingInbox() {


export default function MessagingInbox() {

  const {
    conversations
    activeConversation
    setActiveConversation

<<<<<<< HEAD

=======
    conversations;
>>>>>>> origin/cursor/delete-old-data-records-6bba


    markAsRead;
    fetchConversations;
<<<<<<< HEAD

    isLoading
  } = useMessaging();

  const isMobile = useIsMobile();
  const router = useRouter(), // Changed from navigate
  const [activeCall, setActiveCall] = useState<string | null>(null);
=======
export default function MessagingInbox() {

    isLoading
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>
              <MessageSquare className="h-6 w-6" />
              Messages
            </h1>


  useEffect((,) => {;


            {activeConversation && (
              <Button 
                onClick={startVideoCall}


                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"
              >
                <Video className="h-4 w-4" />
                Start Call
              </Button>
            )}
          </div>
<<<<<<< HEAD


=======
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">"
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>`,
              {/* Conversations List */}
              {isLoading ? (
                <div className="flex-1 flex items-center justify-center p-8">"
                  <LoadingSpinner variant="primary" />"
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>
              {/* Conversations List */}
              {isLoading ? (
                <div className="flex-1 flex items-center justify-center p-8">
                  <LoadingSpinner variant="primary" />
                </div>
              ) : (
                <ConversationsList

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { MessageSquare, Video } from 'lucide-react';
import { useMessaging } from '@/context/MessagingContext',;
import { ProtectedRoute } from '@/components/ProtectedRoute',;
import { ConversationsList, ConversationDetailView } from '@/components/messaging',;
import { useIsMobile } from '@/hooks/use-mobile',;
import { toast } from 'sonner',;
import { Button } from '@/components/ui/button',;
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states',;
import { useRouter } from 'next/router', // Changed from react-router-dom;
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
  const router = useRouter(), // Changed from navigate;,
  const router = useRouter(), // Changed from navigate;
  const [activeCall, setActiveCall] = useState<string | null>(null),;
  useEffect(() => {;
    // Fetch conversations when component mounts;
    const loadData = async () => {;
      try {;
        await fetchConversations();
      } catch (error) {;
        logErrorToProduction('Failed to load conversations:', { data: error }),;
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
<<<<<<< HEAD


=======
    const roomId = `msg-${activeConversation.id}`,;`
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const roomId = `msg-${activeConversation.id}`,;
    setActiveCall(roomId),;
    // Show toast notification;
    toast.success("Starting video call", {;
      description: "Initializing video call connection...";
    });
    // Navigate to video call page;
<<<<<<< HEAD


=======
    router.push(`/call/${roomId}`), // Changed from navigate;`
>>>>>>> origin/cursor/delete-old-data-records-6bba
    router.push(`/call/${roomId}`), // Changed from navigate;
  };
  return (;
    <ProtectedRoute>;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto py-8 px-4">;
          <div className="flex justify-between items-center mb-6">;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>;`
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>;
              <MessageSquare className="h-6 w-6" />;
              Messages;
            </h1>;
            {activeConversation && (;
              <Button
                onClick = {startVideoCall,}
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light">;
              <Button;
                onClick={startVideoCall}
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light";
              >;
                <Video className="h-4 w-4" />;
                Start Call;
              </Button>;
            )}
<<<<<<< HEAD


=======
          </div>;
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">;
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>;`,
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
              {/* Conversations List */}
              {isLoading ? (;
                <div className="flex-1 flex items-center justify-center p-8">;
                  <LoadingSpinner variant="primary" />;
                </div>;
              ) : (;
                <ConversationsList;
                  conversations={conversations}
                  activeConversation={activeConversation}
                  setActiveConversation={setActiveConversation}
                  markAsRead={markAsRead}
<<<<<<< HEAD


                />;
              )}
=======
                />;
              )}
;
              {/* Conversation Detail */}
              <ConversationDetailView />
                <ConversationsList
                  conversations = {conversations,}
                  activeConversation = {activeConversation,}
                  setActiveConversation = {setActiveConversation,}
                  markAsRead = {markAsRead,}
                />;
              )}
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
;


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba





              {/* Conversation Detail */}
            </div>
          </div>
        </div>
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}"
      </div>
    </ProtectedRoute>
<<<<<<< HEAD


=======
              {/* Conversation Detail */}
              <ConversationDetailView />;
            </div>;
          </div>;
        </div>;
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}"
      </div>;
    </ProtectedRoute>;
  );
};
loadData () ;
}, [fetchConversations]);,
}const roomId = `msg-$ {;`
  activeConversation && activeConversation.id ;
}`;`
setActiveCall (roomId);
//Show toast notification //Navigate to video call page router && router.push (`/call/$ {;`
  roomId ;
}`), //Changed from navigate ;`
};
return (<ProtectedRoute> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto py-8 px-4" > <div className="flex justify-between items-center mb-6" > <h1className= {"
  `text-$ {`
  isMobile ? '2xl' : '3xl' '
}font-bold text-white flex items-center gap-2` ""
}> <MessageSquare className="h-6 w-6" /> activeConversation && (<ButtononClick={"
  startVideoCall ""
}className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"> <Video className="h-4 w-4" /> Start Call </Button>) ;
}</div> </div>) : (<ConversationsListconversations= {
  conversations
}activeConversation= {
  activeConversation
}setActiveConversation= {
  setActiveConversation
}markAsRead= {
  markAsRead
}/>) ;
}{/* Conversation Detail */ ;
}<ConversationDetailView /> </div> </div> </div> </div> </ProtectedRoute>) ;
}'"}"
        logErrorToProduction ('Failed to load conversations:', { data: error }),'
        {isMobile && <div className="h-16"></div>}
      </div>
    </ProtectedRoute>
>>>>>>> origin/cursor/delete-old-data-records-6bba
}/>) ;
}{/* Conversation Detail */ ;
}<ConversationDetailView /> </div> </div> </div> </div> </ProtectedRoute>) ;
}'"}



        logErrorToProduction ('Failed to load conversations:', { data: error }),
        toast.error ("Failed to load messages. Please try again.");
      }
    }
;
    load_data ();
  }, [fetch_conversations]);,
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
    const room_id = `msg-${active_conversation.id}`;`
    setActiveCall (room_id);
;
    // Show toast notification;
    toast.success ("Starting video call", {"
    const room_id = `msg-${active_conversation.id}`;
    setActiveCall (room_id);
;
    // Show toast notification;
    toast.success ("Starting video call", {
      description: "Initializing video call connection...";
    });
;
    // Navigate to video call page;
    router.push (`/call/${room_id}`), // Changed from navigate;`
    router.push (`/call/${room_id}`), // Changed from navigate;
  }
;
  return (
    <ProtectedRoute>;
      <div className="min - h-screen bg - zion - blue">;
        <div className="container mx - auto py - 8 px - 4">;
          <div className="flex justify - between items - center mb - 6">;
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold text - white flex items - center gap - 2`}>;`
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold text - white flex items - center gap - 2`}>;
              <MessageSquare className="h - 6 w - 6" />;
              Messages;
            </h1>;
            {active_conversation && (
              <Button;
                on_click = {startVideoCall, }
                className="flex items - center gap - 2 bg - zion - purple hover:bg - zion - purple - light";
              >;
                <Video className="h - 4 w - 4" />;
                Start Call;
              </Button>)}
          </div>;
          <div className="bg - zion - blue - light / 10 rounded - lg shadow - lg border border - zion - purple / 20 overflow - hidden">;
            <div className={`flex flex - col md:flex - row h-[${is_mobile ? '85vh' : '75vh'}]`}>;`,
            <div className={`flex flex - col md:flex - row h-[${is_mobile ? '85vh' : '75vh'}]`}>;
              {/* Conversations List */}
              {is_loading ? (
                <div className="flex - 1 flex items - center justify - center p - 8">;
                  <LoadingSpinner variant="primary" />;
                </div>) : (
                <ConversationsList;
                  conversations = {conversations, }
                  active_conversation = {active_conversation, }
                  setActiveConversation = {setActiveConversation, }
                  markAsRead = {markAsRead, }
                />)}
              {/* Conversation Detail */}
              <ConversationDetailView />;
            </div>;
          </div>;
        </div>;
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {is_mobile && <div className="h - 16"></div>}"
        {is_mobile && <div className="h - 16"></div>}
      </div>;
    </ProtectedRoute>);
;
}
load_data () ;
}, [fetch_conversations]);,
}const room_id = `msg-$ {`
  active_conversation.id ;
}`;`
setActiveCall (room_id);
//Show toast notification //Navigate to video call page router.push (`/call/$ {`
  room_id ;
}`), //Changed from navigate ;`
}
return (<ProtectedRoute> <div className="min - h-screen bg - zion - blue" > <div className="container mx - auto py - 8 px - 4" > <div className="flex justify - between items - center mb - 6" > <h1 className= {"
  `text-$ {`
  is_mobile ? '2xl' : '3xl' ;
}font - bold text - white flex items - center gap - 2` ";
}> <MessageSquare className="h - 6 w - 6" /> active_conversation && (<Button on_click={"
}, [fetch_conversations]);
}const room_id = `msg-$ {
  active_conversation.id ;
}`;
setActiveCall (room_id);
//Show toast notification //Navigate to video call page router.push (`/call/$ {
  room_id ;
}`), //Changed from navigate ;
}
return (<ProtectedRoute> <div className="min - h-screen bg - zion - blue" > <div className="container mx - auto py - 8 px - 4" > <div className="flex justify - between items - center mb - 6" > <h1 className= {
  `text-$ {
  is_mobile ? '2xl' : '3xl' ;
}font - bold text - white flex items - center gap - 2` ";
}> <MessageSquare className="h - 6 w - 6" /> active_conversation && (<Button on_click={
  startVideoCall ";
}className="flex items - center gap - 2 bg - zion - purple hover:bg - zion - purple - light" > <Video className="h - 4 w - 4" /> Start Call </Button>) ;
}</div> </div>) : (<ConversationsList conversations= {
  conversations ;
}active_conversation= {
  active_conversation ;
}setActiveConversation= {
  setActiveConversation ;
}markAsRead= {
  markAsRead ;
}/>) ;
}{
  /* Conversation Detail */ ;
}<ConversationDetailView /> </div> </div> </div> </div> </ProtectedRoute>) ;
}'"}"
  )
}
;
              <ConversationDetailView />;
            </div>;
          </div>;
        </div>;
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}
      </div>
    </ProtectedRoute>
  )
}
;
}'"}

  )
}
<<<<<<< HEAD


=======
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/delete-old-data-records-6bba
