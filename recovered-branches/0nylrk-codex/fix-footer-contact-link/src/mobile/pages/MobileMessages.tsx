
<<<<<<< HEAD
import React, { useState } from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { MobileConversationList } from "../components/messaging/MobileConversationList",
import { MobileChatView } from "../components/messaging/MobileChatView",
=======
import React, { useState } from &quot;react&quot;;
import { MobileHeader } from &quot;../components/common/MobileHeader&quot;;
import { BottomNavigation } from &quot;../components/common/BottomNavigation&quot;;
import { MobileConversationList } from &quot;../components/messaging/MobileConversationList&quot;;
import { MobileChatView } from &quot;../components/messaging/MobileChatView&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Mock data for demonstration
const mockConversations = [
  {
    id: &quot;1&quot;,
    name: &quot;Sarah Johnson&quot;,
    lastMessage: &quot;Looking forward to discussing the project tomorrow!&quot;,
    timestamp: &quot;10:45 AM&quot;,
    unreadCount: 2},
  {
    id: &quot;2&quot;,
    name: &quot;TechCorp Inc.&quot;,
    lastMessage: &quot;We'd like to schedule an interview for the React Developer position&quot;,
    timestamp: &quot;Yesterday&quot;,
    unreadCount: 0},
  {
    id: &quot;3&quot;,
    name: &quot;David Wilson&quot;,
    lastMessage: &quot;Can you share your portfolio link again?&quot;,
    timestamp: &quot;Wed&quot;,
    unreadCount: 0,
    isTyping: true},
  {
<<<<<<< HEAD
    id: "4",
    name: "Creative Studios",
    lastMessage: "Your application has been received. We'll review it shortly.",
    timestamp: "Mon",
    unreadCount: 0}],

// Define the Message type to resolve the type error
interface Message {
  id: string,
  content: string,
  timestamp: string,
  isMe: boolean,
  status: "read" | "sent" | "delivered"
=======
    id: &quot;4&quot;,
    name: &quot;Creative Studios&quot;,
    lastMessage: &quot;Your application has been received. We'll review it shortly.&quot;,
    timestamp: &quot;Mon&quot;,
    unreadCount: 0}];

// Define the Message type to resolve the type error
interface Message {
  id: string;
  content: string;
  timestamp: string;
  isMe: boolean;
  status: &quot;read&quot; | &quot;sent&quot; | &quot;delivered&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

const mockMessages: Message[] = [
  {
    id: &quot;1&quot;,
    content: &quot;Hi there! I noticed your profile and think you'd be perfect for our project.&quot;,
    timestamp: &quot;10:30 AM&quot;,
    isMe: false,
    status: &quot;read&quot;},
  {
    id: &quot;2&quot;,
    content: &quot;Thanks for reaching out! I'd be interested in learning more about it.&quot;,
    timestamp: &quot;10:32 AM&quot;,
    isMe: true,
    status: &quot;read&quot;},
  {
    id: &quot;3&quot;,
    content: &quot;Great! It's a web application for a fintech company. We need someone with React and TypeScript experience. The project would last about 3 months. Are you available?&quot;,
    timestamp: &quot;10:35 AM&quot;,
    isMe: false,
    status: &quot;read&quot;},
  {
    id: &quot;4&quot;,
    content: &quot;Yes, I'm available for the next few months. My hourly rate is $75 for this kind of project. Can you share more details about the specific requirements?&quot;,
    timestamp: &quot;10:40 AM&quot;,
    isMe: true,
    status: &quot;read&quot;},
  {
    id: &quot;5&quot;,
    content: &quot;That works for us. I'll send over a detailed brief later today. Would you be available for a quick call tomorrow to discuss further?&quot;,
    timestamp: &quot;10:45 AM&quot;,
    isMe: false,
<<<<<<< HEAD
    status: "read"}],
=======
    status: &quot;read&quot;}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function MobileMessages() {
  const [activeConversation, setActiveConversation] = useState<string | null>(null),
  const [messages, setMessages] = useState<Message[]>(mockMessages),
  
  const handleSelectConversation = (id: string) => {
    setActiveConversation(id)
  },
  
  const handleBack = () => {
    setActiveConversation(null)
  },
  
  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: `${Date.now()}`,
      content,
      timestamp: &quot;Just now&quot;,
      isMe: true,
<<<<<<< HEAD
      status: "sent"},
    setMessages([...messages, newMessage])
  },
=======
      status: &quot;sent&quot;};
    setMessages([...messages, newMessage]);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  const currentContact = mockConversations.find(c => c.id === activeConversation),
  
  return (
    <div className=&quot;min-h-screen flex flex-col&quot;>
      {activeConversation ? (
        <MobileChatView
          contact={{
            id: currentContact?.id || "&quot;,
            name: currentContact?.name || "&quot;,
            status: &quot;Online&quot;
          }}
          messages={messages}
          onBack={handleBack}
          onSendMessage={handleSendMessage}
        />
      ) : (
        <>
          <MobileHeader
            title=&quot;Messages&quot;
          />
          
          <main className=&quot;flex-1 overflow-y-auto&quot;>
            <MobileConversationList
              conversations={mockConversations}
              onSelectConversation={handleSelectConversation}
            />
          </main>
          
          <BottomNavigation />
        </>
      )}
    </div>
  )
}
