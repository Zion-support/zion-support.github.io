<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
activeConversation,
    setActiveConversation,
    markAsRead,
    fetchConversations,
    isLoading

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD

  useEffect(() => {
    // Fetch conversations when component mounts
}
const loadData = async () => {import {Button} from '@/components / ui / button';'
import {use_navigate} from 'react-router-dom';'
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import React, { useEffect, useState } from 'react';
import { MessageSquare, Video  } from 'lucide-react';
import { useMessaging  } from '@/context/MessagingContext';
import { ProtectedRoute  } from '@/components/ProtectedRoute';
import { ConversationsList, ConversationDetailView  } from '@/components/messaging';
import { useIsMobile  } from '@/hooks/use-mobile';
import { toast  } from 'sonner';
import { Button  } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======
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
import React, { useEffect, useState } from 'react',
import { MessageSquare, Video } from 'lucide-react',
import { useMessaging } from '@/context/MessagingContext',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ConversationsList, ConversationDetailView } from '@/components/messaging',
import { useIsMobile } from '@/hooks/use-mobile',
import { toast } from 'sonner',
import { Button } from '@/components/ui/button',
import { useNavigate } from 'react-router-dom',
>>>>>>> merged-prs-20250907-203621
export default function MessagingInbox() {
  const { 
    conversations,
    activeConversation, 
    setActiveConversation, 
    markAsRead,
    fetchConversations,
    isLoading
<<<<<<< HEAD
  } = useMessaging($2);
  const isMobile = useIsMobile($2);
  const navigate = useNavigate($2);
=======
  } = useMessaging(),
  const isMobile = useIsMobile(),
  const navigate = useNavigate(),
>>>>>>> merged-prs-20250907-203621
  const [activeCall, setActiveCall] = useState<string | null>(null),
  
  useEffect(() => {
    // Fetch conversations when component mounts
    const loadData = async () => {
      try {
        await fetchConversations()
      } catch (error) {
<<<<<<< HEAD
        console.error($2);
        toast.error("Failed to load messages. Please try again.")
      }
=======
        console.error("Failed to load conversations:", error),
        toast.error("Failed to load messages. Please try again.")
      }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React, { useEffect, useState } from 'react';

import React, { useEffect, useState } from 'react';
import {MessageSquare, Video} from 'lucide-react';
import {use_messaging} from '@/context / MessagingContext';
import {ProtectedRoute} from '@/components / ProtectedRoute';
import {ConversationsList, ConversationDetailView} from '@/components / messaging';
import {useIsMobile} from '@/hooks / use - mobile';
import {toast} from 'sonner';
import {Button} from '@/components / ui / button';
import {use_navigate} from 'react-router-dom';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      try {
        }
        await fetch_conversations ();
      } catch (error) {
        }
        console.error ("Failed to load "conversations":", error);"
        toast.error ("Failed to load messages. Please try again.");"
      }
=======
import React, { useEffect, useState } from 'react';
import {MessageSquare, Video} from 'lucide-react';
import {use_messaging} from '@/context / MessagingContext';
import {ProtectedRoute} from '@/components / ProtectedRoute';
import {ConversationsList, ConversationDetailView} from '@/components / messaging';
import {useIsMobile} from '@/hooks / use - mobile';
import {toast} from 'sonner';
<<<<<<< HEAD

  useEffect(() => {
    // Fetch conversations when component mounts
>>>>>>> origin/chore/fix-lint-and-merge

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

=======

  useEffect(() => {
    // Fetch conversations when component mounts
>>>>>>> origin/chore/fix-lint-and-merge

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
    }
    loadData()
  }, [fetchConversations]);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    },
    
    loadData()
  }, [fetchConversations]),
<<<<<<< HEAD

  const startVideoCall = () => {
    if (!activeConversation) {
      toast.error("Please select a conversation first");
      return
    }

  const startVideoCall = () => {
    if (!activeConversation) {

      toast.error("Please select a conversation first"),
      return;
    }
    // Show toast notification"
    toast.success("Starting video call", {"
      description: "Initializing video call connection..."
    });
    // Navigate to video call page;
    navigate(`/call/${roomId}`)
  }

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

                onClick={startVideoCall}

                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"
              >"
                <Video className="h-4 w-4" />
                Start Call;
              </Button>
            )}
=======
<<<<<<< HEAD
  
  const startVideoCall = () => {
    if (!activeConversation) {
      toast.error($2);
      return
    }
    
    const roomId = $2;
    setActiveCall($2);
    // Show toast notification
    toast.success($2);
    // Navigate to video call page
    navigate(`/call/${roomId}`)
  },
  
  return (
=======
<<<<<<< HEAD
=======
  

<<<<<<< HEAD
  const startVideoCall = () => {
    if (!activeConversation) {
      toast.error("Please select a conversation first"),
      return
    }
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const startVideoCall = () => {
    if (!activeConversation) {
      toast.error("Please select a conversation first");
      return
    }

<<<<<<< HEAD
  const startVideoCall = () => {
    if (!activeConversation) {

      toast.error("Please select a conversation first"),
      return;
    }
    // Show toast notification"
    toast.success("Starting video call", {"
      description: "Initializing video call connection..."
    });
    // Navigate to video call page;
    navigate(`/call/${roomId}`)
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
=======
  
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
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
=======
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                onClick={startVideoCall}

                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"
              >"
                <Video className="h-4 w-4" />
                Start Call;
              </Button>
            )}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </div>"
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">'`
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>
              {/* Conversations List */}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
              {isLoading ? (
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="animate-pulse">Loading conversations...</div>
                </div>
              ) : (
                <ConversationsList
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  } = useMessaging(),;
  const isMobile = useIsMobile(),;
  const navigate = useNavigate(),;
  const [activeCall, setActiveCall] = useState<string | null>(null),;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  useEffect(() => {;
    // Fetch conversations when component mounts;
    const loadData = async () => {;
      try {;
        await fetchConversations();
      } catch (error) {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
        console && console.error("Failed to load conversations:", error);
        toast && toast.error("Failed to load messages. Please try again.");
      }
    };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
    toast && toast.success("Starting video call", {,
  description: "Initializing video call connection...";
    });

    // Navigate to video call page;
    navigate(`/call/${roomId}`)
};

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

              <Button

                onClick={startVideoCall}
=======
<<<<<<< HEAD
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
=======

              <Button

                onClick={startVideoCall}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {/* Conversations List */}
            )}              {/* Conversations List */}
              {isLoading ? (;
                <div className="flex-1 flex items-center justify-center p-8">;
                  <div className="animate-pulse">Loading conversations...</div>;
                </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
              ) : (;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              Messages;
            </h1>;
            {active_conversation && (
              <Button;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                  conversations={conversations}
                  active_conversation={active_conversation}
                  setActiveConversation={setActiveConversation}
                  markAsRead={markAsRead}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <ConversationDetailView />;
            </div>;
          </div>;

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {/* Conversation Detail */}
              <ConversationDetailView />;
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}
      </div>;
    </ProtectedRoute>;
<<<<<<< HEAD
  );
}

=======
<<<<<<< HEAD
  );
}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
}
}
;
  ),; useEffect ( () => {

=======
  ),; useEffect ( () => {
  //Fetch conversations when component mounts const loadData = async () => {
  try {
  
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
;
  ),; useEffect ( () => {

<<<<<<< HEAD
}

}

};
}, [fetchConversations]);`
}const roomId = `msg-$ {}
  activeConversation.id;`
}`;
setActiveCall (roomId);`
//Show toast notification //Navigate to video call page navigate (`/call/$ {}
  roomId;`
}`) 
};"
return (<ProtectedRoute> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto py-8 px-4" > <div className="flex justify-between items-center mb-6" > <h1 className= {}`
  `text-$ {'
  isMobile ? '2xl' : '3xl' `
}font-bold text-white flex items-center gap-2` "
}> <MessageSquare className="h-6 w-6" /> activeConversation && (<Button onClick= {}
  startVideoCall "
}className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light" > <Video className="h-4 w-4" /> Start Call </Button>) 
}</div> </div>) : (<ConversationsList conversations= {}
  conversations;
}activeConversation= {}
  activeConversation;
}setActiveConversation= {}
  setActiveConversation;
}markAsRead= {}
  markAsRead;
}/>) 
}{}
<<<<<<< HEAD
  /* Conversation Detail */ 
}<ConversationDetailView /> </div> </div> </div> </div> </ProtectedRoute>) 
}
    <ProtectedRoute>
</ProtectedRoute>"
      <div className="min-h-screen bg-zion-blue">"
</div>"
        <div className="container mx-auto py-8 px-4">"
</div>"
          <div className="flex justify-between items-center mb-6">"
</div>"
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>'
</h1>'
              <MessageSquare className="h-6 w-6" />"
</MessageSquare>
            </h1>
              <Button;
                onClick={startVideoCall}"
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light""
              >
</Button>"
                <Video className="h-4 w-4" />"
</Video>
              </Button>
          </div>"
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">"
</div>"
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>'
</div>'
                <div className="flex-1 flex items-center justify-center p-8">"
</div>"
                  <div className="animate-pulse">Loading conversations...</div>"
                </div>
                <ConversationsList;"
import React, { useEffect, useState } from 'react',;''
import { MessageSquare, Video } from 'lucide-react',;''
import { useMessaging } from '@/context/MessagingContext',;''
import { ProtectedRoute } from '@/components/ProtectedRoute',;''
import { ConversationsList, ConversationDetailView } from '@/components/messaging',;''
import { useIsMobile } from '@/hooks/use-mobile',;''
import { toast } from 'sonner',;''
import { Button } from '@/components/ui/button',;''
import { useNavigate } from 'react-router-dom',;')
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
</ConversationsList>
    <ProtectedRoute>;
</ProtectedRoute>'
      <div className="min-h-screen bg-zion-blue">;"
</div>"
        <div className="container mx-auto py-8 px-4">;"
</div>"
          <div className="flex justify-between items-center mb-6">;"
</div>"
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>;'
</h1>'
              <MessageSquare className="h-6 w-6" />;"
</MessageSquare>
            </h1>;
              <Button;
                onClick={startVideoCall}"
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light">;"
</Button>"
                <Video className="h-4 w-4" />;"
</Video>
              </Button>;
          </div>;"
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">;"
</div>"
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>;'
</div>'
                <div className="flex-1 flex items-center justify-center p-8">;"
</div>"
                  <div className="animate-pulse">Loading conversations...</div>;"
                </div>;
    <ProtectedRoute>;
</ProtectedRoute>"
      <div className="min - h-screen bg - zion - blue">;"
</div>"
        <div className="container mx - auto py - 8 px - 4">;"
</div>"
          <div className="flex justify - between items - center mb - 6">;"
</div>"
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold text - white flex items - center gap - 2`}>;'
</h1>'
              <MessageSquare className="h - 6 w - 6" />;"
</MessageSquare>
            </h1>;
              <Button;
                on_click={startVideoCall}"
                className="flex items - center gap - 2 bg - zion - purple hover:bg - zion - purple - light";"
              >;
</Button>"
                <Video className="h - 4 w - 4" />;"
</Video>
              </Button>)}
          </div>;"
          <div className="bg - zion - blue - light / 10 rounded - lg shadow - lg border border - zion - purple / 20 overflow - hidden">;"
</div>"
            <div className={`flex flex - col md:flex - row h-[${is_mobile ? '85vh' : '75vh'}]`}>;'
</div>'
                <div className="flex - 1 flex items - center justify - center p - 8">;"
</div>"
                  <div className="animate - pulse">Loading conversations...</div>;"

                </div>) : (
                <ConversationsList;
              <ConversationDetailView />;
</ConversationsList>
            </div>;
          </div>;

        </div>;"
        {isMobile && <div className="h-16"></div>}"
      </div>;
    </ProtectedRoute>;
              <ConversationDetailView />;
</ConversationDetailView>
            </div>;
          </div>;
        </div>;"
        {is_mobile && <div className="h - 16"></div>}"
      </div>;)
    </ProtectedRoute>);"
return (<ProtectedRoute> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto py-8 px-4" > <div className="flex justify-between items-center mb-6" > <h1 className= {"
</ProtectedRoute>"
}> <MessageSquare className="h-6 w-6" /> activeConversation && (<Button onClick= {"
</MessageSquare>)"
}className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light" > <Video className="h-4 w-4" /> Start Call </Button>)"
</Video>
}</div> </div>) : (<ConversationsList conversations= {
  conversations;
}activeConversation= {
  activeConversation;
}setActiveConversation= {
  setActiveConversation;
}markAsRead= {
  markAsRead;)
}/>) 
</ConversationsList>

}<ConversationDetailView /> </div> </div> </div> </div> </ProtectedRoute>) 
</ConversationDetailView>
=======
  /* Conversation Detail */ 
}<ConversationDetailView /> </div> </div> </div> </div> </ProtectedRoute>) 
}
    <ProtectedRoute>
</ProtectedRoute>"
      <div className="min-h-screen bg-zion-blue">"
</div>"
        <div className="container mx-auto py-8 px-4">"
</div>"
          <div className="flex justify-between items-center mb-6">"
</div>"
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>'
</h1>'
              <MessageSquare className="h-6 w-6" />"
</MessageSquare>
            </h1>
              <Button;
                onClick={startVideoCall}"
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light""
              >
</Button>"
                <Video className="h-4 w-4" />"
</Video>
              </Button>
          </div>"
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">"
</div>"
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>'
</div>'
                <div className="flex-1 flex items-center justify-center p-8">"
</div>"
                  <div className="animate-pulse">Loading conversations...</div>"
                </div>
                <ConversationsList;"
import React, { useEffect, useState } from 'react',;''
import { MessageSquare, Video } from 'lucide-react',;''
import { useMessaging } from '@/context/MessagingContext',;''
import { ProtectedRoute } from '@/components/ProtectedRoute',;''
import { ConversationsList, ConversationDetailView } from '@/components/messaging',;''
import { useIsMobile } from '@/hooks/use-mobile',;''
import { toast } from 'sonner',;''
import { Button } from '@/components/ui/button',;''
import { useNavigate } from 'react-router-dom',;')
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
</ConversationsList>
    <ProtectedRoute>;
</ProtectedRoute>'
      <div className="min-h-screen bg-zion-blue">;"
</div>"
        <div className="container mx-auto py-8 px-4">;"
</div>"
          <div className="flex justify-between items-center mb-6">;"
</div>"
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>;'
</h1>'
              <MessageSquare className="h-6 w-6" />;"
</MessageSquare>
            </h1>;
              <Button;
                onClick={startVideoCall}"
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light">;"
</Button>"
                <Video className="h-4 w-4" />;"
</Video>
              </Button>;
          </div>;"
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">;"
</div>"
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>;'
</div>'
                <div className="flex-1 flex items-center justify-center p-8">;"
</div>"
                  <div className="animate-pulse">Loading conversations...</div>;"
                </div>;
    <ProtectedRoute>;
</ProtectedRoute>"
      <div className="min - h-screen bg - zion - blue">;"
</div>"
        <div className="container mx - auto py - 8 px - 4">;"
</div>"
          <div className="flex justify - between items - center mb - 6">;"
</div>"
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold text - white flex items - center gap - 2`}>;'
</h1>'
              <MessageSquare className="h - 6 w - 6" />;"
</MessageSquare>
            </h1>;
              <Button;
                on_click={startVideoCall}"
                className="flex items - center gap - 2 bg - zion - purple hover:bg - zion - purple - light";"
              >;
</Button>"
                <Video className="h - 4 w - 4" />;"
</Video>
              </Button>)}
          </div>;"
          <div className="bg - zion - blue - light / 10 rounded - lg shadow - lg border border - zion - purple / 20 overflow - hidden">;"
</div>"
            <div className={`flex flex - col md:flex - row h-[${is_mobile ? '85vh' : '75vh'}]`}>;'
</div>'
                <div className="flex - 1 flex items - center justify - center p - 8">;"
</div>"
                  <div className="animate - pulse">Loading conversations...</div>;"

                </div>) : (
                <ConversationsList;
              <ConversationDetailView />;
</ConversationsList>
            </div>;
          </div>;

        </div>;"
        {isMobile && <div className="h-16"></div>}"
      </div>;
    </ProtectedRoute>;
              <ConversationDetailView />;
</ConversationDetailView>
            </div>;
          </div>;
        </div>;"
        {is_mobile && <div className="h - 16"></div>}"
      </div>;)
    </ProtectedRoute>);"
return (<ProtectedRoute> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto py-8 px-4" > <div className="flex justify-between items-center mb-6" > <h1 className= {"
</ProtectedRoute>"
}> <MessageSquare className="h-6 w-6" /> activeConversation && (<Button onClick= {"
</MessageSquare>)"
}className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light" > <Video className="h-4 w-4" /> Start Call </Button>)"
</Video>
}</div> </div>) : (<ConversationsList conversations= {
  conversations;
}activeConversation= {
  activeConversation;
}setActiveConversation= {
  setActiveConversation;
}markAsRead= {
  markAsRead;)
}/>) 
</ConversationsList>

}<ConversationDetailView /> </div> </div> </div> </div> </ProtectedRoute>) 
</ConversationDetailView>
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <ConversationsList;
>>>>>>> merged-prs-20250907-203621
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
        {/* Add extra bottom padding on mobile to account for the bottom nav */}"
        {isMobile && <div className="h-16"></div>}
      </div>
    </ProtectedRoute>
  )
=======
<<<<<<< HEAD
        {/* Add extra bottom padding on mobile to account for the bottom nav */}"
        {isMobile && <div className="h-16"></div>}
      </div>
    </ProtectedRoute>
  )
=======
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}
      </div>
    </ProtectedRoute>
  )
}
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
