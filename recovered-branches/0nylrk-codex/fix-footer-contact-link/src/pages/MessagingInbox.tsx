<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    activeConversation,
    setActiveConversation,
    markAsRead,
    fetchConversations,
    isLoading
<<<<<<< HEAD
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

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  } = useMessaging();
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import React, { useEffect, useState } from 'react';

  } = useMessaging();

  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [activeCall, setActiveCall] = useState<string | null>(null);
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {MessageSquare, Video} from 'lucide-react';
import {use_messaging} from '@/context / MessagingContext';
import {ProtectedRoute} from '@/components / ProtectedRoute';
import {ConversationsList, ConversationDetailView} from '@/components / messaging';
import {useIsMobile} from '@/hooks / use - mobile';
import {toast} from 'sonner';
<<<<<<< HEAD
import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
export default function MessagingInbox() {
  const { ;
    conversations;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useEffect, useState } from 'react',
import { MessageSquare, Video } from 'lucide-react',
import { useMessaging } from '@/context/MessagingContext',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ConversationsList, ConversationDetailView } from '@/components/messaging',
import { useIsMobile } from '@/hooks/use-mobile',
import { toast } from 'sonner',
import { Button } from '@/components/ui/button',
=======
import {MessageSquare, Video} from 'lucide-react';'
import {use_messaging} from '@/context / MessagingContext';'
import {ProtectedRoute} from '@/components / ProtectedRoute';'
import {ConversationsList, ConversationDetailView} from '@/components / messaging';'
import {useIsMobile} from '@/hooks / use - mobile';'
import {toast} from 'sonner';'
import React, { useEffect, useState } from 'react','
import { MessageSquare, Video } from 'lucide-react','
import { useMessaging } from '@/context/MessagingContext','
import { ProtectedRoute } from '@/components/ProtectedRoute','
import { ConversationsList, ConversationDetailView } from '@/components/messaging','
import { useIsMobile } from '@/hooks/use-mobile','
import { toast } from 'sonner','
import { Button } from '@/components/ui/button','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
    const loadData = async () => {import {Button} from '@/components / ui / button';
=======
  useEffect(() => {}
    // Fetch conversations when component mounts;
    const loadData = async () => {}
      try {}
'
import {Button} from '@/components / ui / button';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    const loadData = async () => {
import {Button} from '@/components / ui / button';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {use_navigate} from 'react-router-dom';
export default /**;
 * MessagingInbox - Function description;
 */
function MessagingInbox() {}
  const {}
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    conversations;

    activeConversation
    setActiveConversation

    markAsRead;
<<<<<<< HEAD
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    },
    
    loadData()
  }, [fetchConversations]),
  


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const startVideoCall = () => {
    if (!activeConversation) {
      toast.error("Please select a conversation first");
      return
    }

<<<<<<< HEAD
=======
=======
        await fetch_conversations ();
      } catch (error) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const startVideoCall = () => {
    if (!activeConversation) {
=======
  const startVideoCall = () => {}
    if (!activeConversation) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
    fetchConversations;
    isLoading
  } = useMessaging();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a



<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
<<<<<<< HEAD
    <ProtectedRoute>"
      <div className="min-h-screen bg-zion-blue">"
        <div className="container mx-auto py-8 px-4">"
          <div className="flex justify-between items-center mb-6">'`
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>"
              <MessageSquare className="h-6 w-6" />
              Messages;
            </h1>
<<<<<<< HEAD
<<<<<<< HEAD
            {activeConversation && (              <Button
=======
            {activeConversation && (


              <Button
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                onClick={startVideoCall}
=======
            {activeConversation && (



              <Button;
                onClick={startVideoCall}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
=======
'
import React, { useEffect, useState } from 'react',;'
import { MessageSquare, Video } from 'lucide-react',;'
import { useMessaging } from '@/context/MessagingContext',;'
import { ProtectedRoute } from '@/components/ProtectedRoute',;'
import { ConversationsList, ConversationDetailView } from '@/components/messaging',;'
import { useIsMobile } from '@/hooks/use-mobile',;'
import { toast } from 'sonner',;'
import { Button } from '@/components/ui/button',;'
import { useNavigate } from 'react-router-dom',;
export default function MessagingInbox() { return null; }
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  } = useMessaging(),;
  const isMobile = useIsMobile(),;
  const navigate = useNavigate(),;
  const [activeCall, setActiveCall] = useState<string | null>(null),;

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
=======

    <ProtectedRoute>;"
      <div className="min-h-screen bg-zion-blue">;"
        <div className="container mx-auto py-8 px-4">;"
          <div className="flex justify-between items-center mb-6">;'`
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <MessageSquare className="h-6 w-6" />;
              Messages;
            </h1>;

<<<<<<< HEAD
            {activeConversation && (;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <Button
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              <Button
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
              ) : (;    }
=======
              <Button;
                onClick={startVideoCall}"
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light">;"
                <Video className="h-4 w-4" />;
                Start Call;
              </Button>;
            )}



              {/* Conversations List */}
              {isLoading ? (;"
                <div className="flex-1 flex items-center justify-center p-8">;"
                  <div className="animate-pulse">Loading conversations...</div>;
                </div>;
              ) : (;



    }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              ) : (;

    }
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              ) : (;    }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
    <ProtectedRoute>;
      <div className="min - h-screen bg - zion-blue">;
        <div className="container mx - auto py - 8 px-4">;
          <div className="flex justify - between items - center mb-6">;
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold text - white flex items - center gap - 2`}>;
<<<<<<< HEAD
<<<<<<< HEAD
              <MessageSquare className="h - 6 w-6" />;
=======
    <ProtectedRoute>;"
      <div className="min - h-screen bg - zion - blue">;"
        <div className="container mx - auto py - 8 px - 4">;"
          <div className="flex justify - between items - center mb - 6">;'`
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold text - white flex items - center gap - 2`}>;"
              <MessageSquare className="h - 6 w - 6" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <MessageSquare className="h - 6 w - 6" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              <MessageSquare className="h - 6 w-6" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              Messages;
            </h1>;
            {active_conversation && (
              <Button;
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
                <ConversationsList;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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

<<<<<<< HEAD



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

                <ConversationsList;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<ConversationsList;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  conversations={conversations}
                  active_conversation={active_conversation}
                  setActiveConversation={setActiveConversation}
                  markAsRead={markAsRead}

<<<<<<< HEAD

<<<<<<< HEAD

              {/* Conversation Detail */}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <ConversationDetailView />;
            </div>;
          </div>;
<<<<<<< HEAD
        </div>;  ),; useEffect ( () => {
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  //Fetch conversations when component mounts const loadData = async () => {
  try {
  
=======
        </div>;

        {/* Add extra bottom padding on mobile to account for the bottom nav */}"
        {isMobile && <div className="h-16"></div>}
      </div>;
    </ProtectedRoute>;

                />)}
              {/* Conversation Detail */}
              <ConversationDetailView />;
            </div>;
          </div>;
        </div>;
        {/* Add extra bottom padding on mobile to account for the bottom nav */}"
        {is_mobile && <div className="h - 16"></div>}
      </div>;
    </ProtectedRoute>);


  ),; useEffect ( () => {}
  //Fetch conversations when component mounts const loadData = async () => {}
  try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <ConversationDetailView />;
            </div>;
          </div>;
        </div>;  ),; useEffect ( () => {
  //Fetch conversations when component mounts const loadData = async () => {
  try {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======

}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
