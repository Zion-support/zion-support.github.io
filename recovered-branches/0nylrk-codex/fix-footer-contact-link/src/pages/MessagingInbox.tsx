

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
        console.error("Failed to load conversations:", error),
        toast.error("Failed to load messages. Please try again.")
      }
  } = useMessaging();


import React, { useEffect, useState } from 'react';

  } = useMessaging();

  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [activeCall, setActiveCall] = useState<string | null>(null);
import {MessageSquare, Video} from 'lucide-react';
import {use_messaging} from '@/context / MessagingContext';
import {ProtectedRoute} from '@/components / ProtectedRoute';
import {ConversationsList, ConversationDetailView} from '@/components / messaging';
import {useIsMobile} from '@/hooks / use - mobile';
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

import React, { useEffect, useState } from 'react';
import {MessageSquare, Video} from 'lucide-react';
import {use_messaging} from '@/context / MessagingContext';
import {ProtectedRoute} from '@/components / ProtectedRoute';
import {ConversationsList, ConversationDetailView} from '@/components / messaging';
import {useIsMobile} from '@/hooks / use - mobile';
import {toast} from 'sonner';

  useEffect(() => {
    // Fetch conversations when component mounts
const loadData = async () => {import {Button} from '@/components / ui / button';
    const loadData = async () => {
import {Button} from '@/components / ui / button';
import {use_navigate} from 'react-router-dom';
export default /**;
 * MessagingInbox - Function description;
 */
function MessagingInbox() {}
  const {}
import React, { useEffect, useState } from 'react';

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
fetch_conversations;
    is_loading;
  } = use_messaging ();
  const is_mobile = useIsMobile ();
  const navigate = use_navigate ();
  const [active_call, setActiveCall] = useState < string | null>(null);
;
  useEffect (() => {}
    // Fetch conversations when component mounts;
    const load_data = async () => {}
      try {}
        await fetch_conversations ();
      } catch (error) {}
        console.error ("Failed to load conversations:", error);"
        toast.error ("Failed to load messages. Please try again.");
      }


    },

    loadData()
  }, [fetchConversations]),

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
<ProtectedRoute>"
      <div className="min-h-screen bg-zion-blue">"
        <div className="container mx-auto py-8 px-4">"
          <div className="flex justify-between items-center mb-6">'`
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>"
              <MessageSquare className="h-6 w-6" />
              Messages;
            </h1>
            {activeConversation && (              <Button
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
{isLoading ? (
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="animate-pulse">Loading conversations...</div>
                </div>
              ) : (
                <ConversationsList
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
    <ProtectedRoute>;
  return (    <ProtectedRoute>;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto py-8 px-4">;
          <div className="flex justify-between items-center mb-6">;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>;
              <MessageSquare className="h-6 w-6" />;
              Messages;
            </h1>;

{activeConversation && (;
              <Button
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
              {/* Conversations List */}
            )}              {/* Conversations List */}
              {isLoading ? (;
                <div className="flex-1 flex items-center justify-center p-8">;
                  <div className="animate-pulse">Loading conversations...</div>;
                </div>;
) : (;    }
              ) : (;

    }
;
    load_data ();
  }, [fetch_conversations]);
;
  const startVideoCall = () =>: any {}
    // Check condition;
if ( {) {}
  $2;
}"
      toast.error ("Please select a conversation first");
      return;
    }`
    const room_id = `msg-${active_conversation.id}`;
    setActiveCall (room_id);
;
    // Show toast notification;"
    toast.success ("Starting video call", {"
      description: "Initializing video call connection...";
    });
;
    // Navigate to video call page;`
    navigate (`/call/${room_id}`);
  }
;
  return (
<ProtectedRoute>;
      <div className="min - h-screen bg - zion-blue">;
        <div className="container mx - auto py - 8 px-4">;
          <div className="flex justify - between items - center mb-6">;
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold text - white flex items - center gap - 2`}>;
              <MessageSquare className="h - 6 w-6" />;
              <MessageSquare className="h - 6 w-6" />;
              Messages;
            </h1>;
            {active_conversation && (
              <Button;
on_click={startVideoCall}
                className="flex items - center gap - 2 bg - zion - purple hover:bg - zion - purple-light";
              >;
                <Video className="h - 4 w-4" />;
                Start Call;
              </Button>)}
          </div>;
          <div className="bg - zion - blue - light / 10 rounded - lg shadow - lg border border - zion - purple / 20 overflow-hidden">;
            <div className={`flex flex - col md:flex - row h-[${is_mobile ? '85vh' : '75vh'}]`}>;
              {/* Conversations List */}
              {is_loading ? (
                <div className="flex - 1 flex items - center justify - center p-8">;
                  <div className="animate-pulse">Loading conversations...</div>;
                </div>) : (
                <ConversationsList;

                on_click={startVideoCall}"
                className="flex items - center gap - 2 bg - zion - purple hover:bg - zion - purple - light";
              >;"
                <Video className="h - 4 w - 4" />;
                Start Call;
              </Button>)}
          </div>;"
          <div className="bg - zion - blue - light / 10 rounded - lg shadow - lg border border - zion - purple / 20 overflow - hidden">;'`
            <div className={`flex flex - col md:flex - row h-[${is_mobile ? '85vh' : '75vh'}]`}>;
              {/* Conversations List */}
              {is_loading ? ("
                <div className="flex - 1 flex items - center justify - center p - 8">;"
                  <div className="animate - pulse">Loading conversations...</div>;
                </div>) : (
                <ConversationsList;

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
</div>;  ),; useEffect ( () => {
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
  );
}

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
}
;
  ),; useEffect ( () => {
  //Fetch conversations when component mounts const loadData = async () => {
  try {
              <ConversationDetailView />;
            </div>;
          </div>;
        </div>;  ),; useEffect ( () => {
  //Fetch conversations when component mounts const loadData = async () => {
  try {
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
        {/* Add extra bottom padding on mobile to account for the bottom nav */}"
        {isMobile && <div className="h-16"></div>}
      </div>
    </ProtectedRoute>
  )

}
;


'"`
  // TODO: Implement
}
        await fetch_conversations ();
      } catch (error) {
        console.error ("Failed to load conversations:", error);""
        toast.error ("Failed to load messages. Please try again.");"

    },
    loadData()
  }, [fetchConversations]),

  const startVideoCall = () => {
    if (!activeConversation) {"
      toast.error("Please select a conversation first");"
      return;

      toast.error("Please select a conversation first"),"
    // Show toast notification;"
    toast.success("Starting video call", {""
      description: "Initializing video call connection..."")
    });
    // Navigate to video call page;
    navigate(`/call/${roomId}`)

    `;
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
    // Show toast notification;"
    }),
    // Navigate to video call page;`;

  return (
    <ProtectedRoute>
"
      <div className="min-h-screen bg-zion-blue">"
</div>"
        <div className="container mx-auto py-8 px-4">"
          <div className="flex justify-between items-center mb-6">"
</div>"`;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>
</h1>
              <MessageSquare className="h-6 w-6" />"

              <Button;
                onClick={startVideoCall}"
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light""
              >
                <Video className="h-4 w-4" />"

          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">"
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>
</div>
                <div className="flex-1 flex items-center justify-center p-8">"
                  <div className="animate-pulse">Loading conversations...</div>"
                <ConversationsList;"
import React, { useEffect, useState } from 'react',;
import { MessageSquare, Video } from 'lucide-react',;
import { useMessaging } from '@/context/MessagingContext',;
import { ProtectedRoute } from '@/components/ProtectedRoute',;
import { ConversationsList, ConversationDetailView } from '@/components/messaging',;
import { useIsMobile } from '@/hooks/use-mobile',;
import { toast } from 'sonner',;
import { Button } from '@/components/ui/button',;
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

    <ProtectedRoute>;

      <div className="min-h-screen bg-zion-blue">;"
        <div className="container mx-auto py-8 px-4">;"
          <div className="flex justify-between items-center mb-6">;"
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>;
              <MessageSquare className="h-6 w-6" />;"

            </h1>;
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light">;"
                <Video className="h-4 w-4" />;"

          </div>;"
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">;"
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>;
                <div className="flex-1 flex items-center justify-center p-8">;"
                  <div className="animate-pulse">Loading conversations...</div>;"
                </div>;
      <div className="min - h-screen bg - zion - blue">;"
        <div className="container mx - auto py - 8 px - 4">;"
          <div className="flex justify - between items - center mb - 6">;"
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold text - white flex items - center gap - 2`}>;
              <MessageSquare className="h - 6 w - 6" />;"

                on_click={startVideoCall}"
                className="flex items - center gap - 2 bg - zion - purple hover:bg - zion - purple - light";"
              >;
                <Video className="h - 4 w - 4" />;"

              )}
          <div className="bg - zion - blue - light / 10 rounded - lg shadow - lg border border - zion - purple / 20 overflow - hidden">;"
            <div className={`flex flex - col md:flex - row h-[${is_mobile ? '85vh' : '75vh'}]`}>;
                <div className="flex - 1 flex items - center justify - center p - 8">;"
                  <div className="animate - pulse">Loading conversations...</div>;"
                </div>) : (
                <ConversationsList;

                  conversations={conversations}
                  active_conversation={active_conversation}
                  setActiveConversation={setActiveConversation}
                  markAsRead={markAsRead}

              {/* Conversation Detail */}
              <ConversationDetailView />;

        {isMobile && <div className="h-16"></div>}"

        {is_mobile && <div className="h - 16"></div>}"
      </div>;)
    );"
return (<ProtectedRoute> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto py-8 px-4" > <div className="flex justify-between items-center mb-6" > <h1 className= {"
}> <MessageSquare className="h-6 w-6" /> activeConversation && (<Button onClick= {"
)"
}className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light" > <Video className="h-4 w-4" /> Start Call )"

}</div> </div>) : (<ConversationsList conversations= {
  conversations;
}activeConversation= {
  activeConversation;
}setActiveConversation= {
  setActiveConversation;
}markAsRead= {
  markAsRead;)
}/>) 

}<ConversationDetailView /> </div> </div> </div> </div> ) 

                  activeConversation={activeConversation}
                />

              <ConversationDetailView />

    "`;
pr-12325
</ConversationsList>
              <ConversationDetailView />
</ConversationDetailView>
            </div>
          </div>

        </div>"
        {isMobile && <div className="h-16"></div>}"
      </div>
    </ProtectedRoute>"

