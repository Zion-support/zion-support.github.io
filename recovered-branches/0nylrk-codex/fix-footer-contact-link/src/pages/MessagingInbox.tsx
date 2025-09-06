
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MessagingInbox.tsx

=======
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
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
  } = useMessaging();

  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [activeCall, setActiveCall] = useState<string | null>(null);
=======
import {MessageSquare, Video} from 'lucide-react';
import {useMessaging} from '@/context/MessagingContext';
import {ProtectedRoute} from '@/components/ProtectedRoute';
import {ConversationsList, ConversationDetailView} from '@/components/messaging';
import {useIsMobile} from '@/hooks/use-mobile';
import {toast} from 'sonner';
import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
export default function MessagingInbox() {
  const { ;
    conversations;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    activeConversation, 
    setActiveConversation, 
    markAsRead,
    fetchConversations,
    isLoading
  } = useMessaging(),
  const isMobile = useIsMobile(),
  const navigate = useNavigate(),
  const [activeCall, setActiveCall] = useState<string | null>(null),
<<<<<<< HEAD

=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {
    // Fetch conversations when component mounts
    const loadData = async () => {
      try {
        await fetchConversations()
      } catch (error) {
        console.error("Failed to load conversations:", error),
        toast.error("Failed to load messages. Please try again.")
      }
<<<<<<< HEAD

=======

import React, { useEffect, useState } from 'react';

========
import React, { useEffect, useState } from 'react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MessagingInbox.tsx
import {MessageSquare, Video} from 'lucide-react';
import {use_messaging} from '@/context / MessagingContext';
import {ProtectedRoute} from '@/components / ProtectedRoute';
import {ConversationsList, ConversationDetailView} from '@/components / messaging';
import {useIsMobile} from '@/hooks / use - mobile';
import {toast} from 'sonner';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MessagingInbox.tsx

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  useEffect(() => {
    // Fetch conversations when component mounts
    const loadData = async () => {
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      try {
        await fetch_conversations ();
      } catch (error) {
        console.error ("Failed to load conversations:", error);
        toast.error ("Failed to load messages. Please try again.");
      }


=======
<<<<<<< HEAD
    }
    loadData()
  }, [fetchConversations]);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    },
    
    loadData()
  }, [fetchConversations]),
  
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const startVideoCall = () => {
    if (!activeConversation) {
      toast.error("Please select a conversation first");
      return
    }

<<<<<<< HEAD
=======

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const startVideoCall = () => {
    if (!activeConversation) {
      toast.error("Please select a conversation first"),
      return
    }
<<<<<<< HEAD
    const roomId = `msg-${activeConversation.id}`;
    setActiveCall(roomId);
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."
    });
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  }

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
    
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."
    }),
    
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  },
  
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
              {isLoading ? (
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="animate-pulse">Loading conversations...</div>
                </div>
              ) : (
                <ConversationsList
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {;
    // Fetch conversations when component mounts;
    const loadData = async () => {;
      try {;
        await fetchConversations();
      } catch (error) {;
<<<<<<< HEAD
        console && console.error("Failed to load conversations:", error);
        toast && toast.error("Failed to load messages. Please try again.");
      }
    };

    loadData();
  }, [fetchConversations]);

  const startVideoCall = () => {;
    if (!activeConversation) {;
      toast && toast.error("Please select a conversation first");
      return;
    }

    const roomId = `msg-${activeConversation && activeConversation.id}`;
    setActiveCall(roomId);

    // Show toast notification;
    toast && toast.success("Starting video call", {;
      description: "Initializing video call connection...";
    });

    // Navigate to video call page;
    navigate(`/call/${roomId}`);
  };

  return (
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <ProtectedRoute>;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto py-8 px-4">;
          <div className="flex justify-between items-center mb-6">;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>;
              <MessageSquare className="h-6 w-6" />;
              Messages;
            </h1>;
<<<<<<< HEAD

            {activeConversation && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Button
                onClick={startVideoCall}
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light">;
                <Video className="h-4 w-4" />;
                Start Call;
              </Button>;
            )}

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {/* Conversations List */}
              {isLoading ? (;
                <div className="flex-1 flex items-center justify-center p-8">;
                  <div className="animate-pulse">Loading conversations...</div>;
                </div>;
              ) : (;
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MessagingInbox.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MessagingInbox.tsx

=======
                <ConversationsList;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MessagingInbox.tsx
                  conversations={conversations}
                  active_conversation={active_conversation}
                  setActiveConversation={setActiveConversation}
                  markAsRead={markAsRead}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MessagingInbox.tsx

========
=======
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MessagingInbox.tsx

import React, { useEffect, useState } from 'react',;
import { MessageSquare, Video } from 'lucide-react',;
import { useMessaging } from '@/context/MessagingContext',;
import { ProtectedRoute } from '@/components/ProtectedRoute',;
import { ConversationsList, ConversationDetailView } from '@/components/messaging',;
import { useIsMobile } from '@/hooks/use-mobile',;
import { toast } from 'sonner',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;
;
export default function MessagingInbox() {;
  const { ;
    conversations,;
    activeConversation, ;
    setActiveConversation, ;
    markAsRead,;
    fetchConversations,;
    isLoading;
  } = useMessaging(),;
  const isMobile = useIsMobile(),;
  const navigate = useNavigate(),;
  const [activeCall, setActiveCall] = useState<string | null>(null),;
  ;
  useEffect(() => {;
    // Fetch conversations when component mounts;
    const loadData = async () => {;
      try {;
        await fetchConversations(),;
      } catch (error) {;
        console.error("Failed to load conversations:", error),;
        toast.error("Failed to load messages. Please try again."),;
      }
    },;
    ;
    loadData(),;
  }, [fetchConversations]),;
  ;
  const startVideoCall = () => {;
    if (!activeConversation) {;
      toast.error("Please select a conversation first"),;
      return,;
    }
    ;
    const roomId = `msg-${activeConversation.id}`,;
    setActiveCall(roomId),;
    ;
    // Show toast notification;
    toast.success("Starting video call", {;
      description:"Initializing video call connection...";
    }),;
    ;
    // Navigate to video call page;
    navigate(`/call/${roomId}`),;
  },;
  ;
  return (;
    <ProtectedRoute>;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto py-8 px-4">;
          <div className="flex justify-between items-center mb-6">;
            <h1 className={`text-${isMobile ? '2xl' :'3xl'} font-bold text-white flex items-center gap-2`}>;
              <MessageSquare className="h-6 w-6" />;
              Messages;
            </h1>;
            ;
            {activeConversation && (;
              <Button ;
                onClick={startVideoCall}
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light";
              >;
                <Video className="h-4 w-4" />;
                Start Call;
              </Button>;
            )}
          </div>;
          ;
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">;
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' :'75vh'}]`}>;
              {/* Conversations List */}
              {isLoading ? (;
                <div className="flex-1 flex items-center justify-center p-8">;
                  <div className="animate-pulse">Loading conversations...</div>;
                </div>;
              ) :(;
                <ConversationsList;
                  conversations={conversations}                  activeConversation={activeConversation}
                  setActiveConversation={setActiveConversation}
                  markAsRead={markAsRead}
                />;
              )}
              ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              {/* Conversation Detail */}
              <ConversationDetailView />;
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}
<<<<<<< HEAD
      </div>
    </ProtectedRoute>
  )

=======
      </div>;
    </ProtectedRoute>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MessagingInbox.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MessagingInbox.tsx
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
=======
  ),; useEffect ( () => {
  //Fetch conversations when component mounts const loadData = async () => {
  try {
  
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MessagingInbox.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MessagingInbox.tsx
=======
                <ConversationsList;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
}
=======
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
