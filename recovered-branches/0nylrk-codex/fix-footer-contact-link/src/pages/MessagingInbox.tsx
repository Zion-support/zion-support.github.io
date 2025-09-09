

  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [activeCall, setActiveCall] = useState<string | null>(null);

import React, { useEffect, useState } from 'react',
import { MessageSquare, Video } from 'lucide-react';
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
    const loadData = async () => {import {Button} from '@/components / ui / button';
import {use_navigate} from 'react-router-dom';
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



              <ConversationDetailView />;
            </div>;
          </div>;
        </div>;  ),; useEffect ( () => {
  //Fetch conversations when component mounts const loadData = async () => {
  try {
  
}

}
