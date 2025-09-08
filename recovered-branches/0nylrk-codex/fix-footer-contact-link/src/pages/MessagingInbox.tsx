<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
activeConversation,
    setActiveConversation,
    markAsRead,
    fetchConversations,
    isLoading

<<<<<<< HEAD

=======

  } = useMessaging();

import React, { useEffect, useState } from 'react';

  } = useMessaging();

  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [activeCall, setActiveCall] = useState<string | null>(null);

import React, { useEffect, useState } from 'react',
import { MessageSquare, Video } from 'lucide-react',
import { useMessaging } from '@/context/MessagingContext',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ConversationsList, ConversationDetailView } from '@/components/messaging',
import { useIsMobile } from '@/hooks/use-mobile',
import { toast } from 'sonner',
import { Button } from '@/components/ui/button',

import { useNavigate } from 'react-router-dom',
export default function MessagingInbox() {}
  const {}
    conversations,
    activeConversation, 
    setActiveConversation, 
    markAsRead,;
    fetchConversations,;
    isLoading;
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
        console.error("Failed to load conversations:", error),
        toast.error("Failed to load messages. Please try again.")
      }

import React, { useEffect, useState } from 'react';


  useEffect(() => {
    // Fetch conversations when component mounts
}
const loadData = async () => {import {Button} from '@/components / ui / button';'
import {use_navigate} from 'react-router-dom';'

>>>>>>> origin/cursor/delete-old-data-records-6bba
export default /**
 * MessagingInbox - Function description
 */
function MessagingInbox() {
  }
    }
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
    }
    const load_data = async () => {

<<<<<<< HEAD

=======
      }
>>>>>>> origin/cursor/delete-old-data-records-6bba
      try {
        }
        await fetch_conversations ();
      } catch (error) {
        }
        console.error ("Failed to load "conversations":", error);"
        toast.error ("Failed to load messages. Please try again.");"
      }
<<<<<<< HEAD

=======
import React, { useEffect, useState } from 'react';
import {MessageSquare, Video} from 'lucide-react';
import {use_messaging} from '@/context / MessagingContext';
import {ProtectedRoute} from '@/components / ProtectedRoute';
import {ConversationsList, ConversationDetailView} from '@/components / messaging';
import {useIsMobile} from '@/hooks / use - mobile';
import {toast} from 'sonner';

  useEffect(() => {
    // Fetch conversations when component mounts
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {use_navigate} from 'react-router-dom';
export default /**;
 * MessagingInbox - Function description;
 */
function MessagingInbox() {}
  const {}

    conversations;

    activeConversation
    setActiveConversation

    markAsRead;


<<<<<<< HEAD


=======
import {use_navigate} from 'react-router-dom';
export default /**;
 * MessagingInbox - Function description;
 */
function MessagingInbox() {}
  const {}

    conversations;

    activeConversation
    setActiveConversation

    markAsRead;

    }
    loadData()
  }, [fetchConversations]);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    },
    
    loadData()
  }, [fetchConversations]),


<<<<<<< HEAD
=======
  const startVideoCall = () => {
    if (!activeConversation) {
      toast.error("Please select a conversation first");
      return
    }


>>>>>>> origin/cursor/delete-old-data-records-6bba

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


=======


  return (

>>>>>>> origin/cursor/delete-old-data-records-6bba
                onClick={startVideoCall}

                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"
              >"
                <Video className="h-4 w-4" />
                Start Call;
              </Button>
            )}
          </div>"
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">'`
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>
              {/* Conversations List */}

<<<<<<< HEAD

              {isLoading ? (
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="animate-pulse">Loading conversations...</div>
                </div>
              ) : (
                <ConversationsList


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  } = useMessaging(),;
  const isMobile = useIsMobile(),;
  const navigate = useNavigate(),;
  const [activeCall, setActiveCall] = useState<string | null>(null),;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  useEffect(() => {;
    // Fetch conversations when component mounts;
    const loadData = async () => {;
      try {;
        await fetchConversations();
      } catch (error) {;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  const startVideoCall = () => {;
    if (!activeConversation) {;
      toast && toast.error("Please select a conversation first");
      return;
    }

    const roomId = `msg-${activeConversation && activeConversation.id}`;
    setActiveCall(roomId);

    // Show toast notification;
    toast && toast.success("Starting video call", {,
  description: "Initializing video call connection...";
    });

    // Navigate to video call page;
    navigate(`/call/${roomId}`)
};

  return (

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

>>>>>>> origin/cursor/delete-old-data-records-6bba
    <ProtectedRoute>;
  return (    <ProtectedRoute>;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto py-8 px-4">;
          <div className="flex justify-between items-center mb-6">;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>;

              <MessageSquare className="h-6 w-6" />;
              Messages;
            </h1>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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


<<<<<<< HEAD
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
              {/* Conversations List */}
            )}              {/* Conversations List */}
              {isLoading ? (;
                <div className="flex-1 flex items-center justify-center p-8">;
                  <div className="animate-pulse">Loading conversations...</div>;
                </div>;

<<<<<<< HEAD
              ) : (;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              Messages;
            </h1>;
            {active_conversation && (
              <Button;

<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  conversations={conversations}
                  active_conversation={active_conversation}
                  setActiveConversation={setActiveConversation}
                  markAsRead={markAsRead}

<<<<<<< HEAD

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
=======

              <ConversationDetailView />;
            </div>;
          </div>;

>>>>>>> origin/cursor/delete-old-data-records-6bba

              {/* Conversation Detail */}
              <ConversationDetailView />;
            </div>;
          </div>;
        </div>;


;
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}
      </div>;
    </ProtectedRoute>;
<<<<<<< HEAD


=======

  );
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
;
  ),; useEffect ( () => {


<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}
      </div>
    </ProtectedRoute>
  )
}
}
;


=======
  )
>>>>>>> origin/cursor/delete-old-data-records-6bba
