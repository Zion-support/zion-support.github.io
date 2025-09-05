
<<<<<<< HEAD
import React, { useState } from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { MobileConversationList } from "../components/messaging/MobileConversationList",;
import { MobileChatView } from "../components/messaging/MobileChatView",;
;
// Mock data for demonstration;
const mockConversations = [;
  {;
    id:"1",;
    name:"Sarah Johnson",;
    lastMessage:"Looking forward to discussing the project tomorrow!",;
    timestamp:"10:45 AM",;
    unreadCount:2},;
  {;
    id:"2",;
    name:"TechCorp Inc.",;
    lastMessage:"We'd like to schedule an interview for the React Developer position",;
    timestamp:"Yesterday",;
    unreadCount:0},;
  {;
    id:"3",;
    name:"David Wilson",;
    lastMessage:"Can you share your portfolio link again?",;
    timestamp:"Wed",;
    unreadCount:0,;
    isTyping:true},;
  {;
    id:"4",;
    name:"Creative Studios",;
    lastMessage:"Your application has been received. We'll review it shortly.",;
    timestamp:"Mon",;
    unreadCount:0}],;
;
// Define the Message type to resolve the type error;
interface Message {;
  id:string,;
  content:string,;
  timestamp:string,;
  isMe:boolean,;
  status:"read" | "sent" | "delivered";
}
;
const mockMessages:Message[] = [;
  {;
    id:"1",;
    content:"Hi there! I noticed your profile and think you'd be perfect for our project.",;
    timestamp:"10:30 AM",;
    isMe:false,;
    status:"read"},;
  {;
    id:"2",;
    content:"Thanks for reaching out! I'd be interested in learning more about it.",;
    timestamp:"10:32 AM",;
    isMe:true,;
    status:"read"},;
  {;
    id:"3",;
    content:"Great! It's a web application for a fintech company. We need someone with React and TypeScript experience. The project would last about 3 months. Are you available?",;
    timestamp:"10:35 AM",;
    isMe:false,;
    status:"read"},;
  {;
    id:"4",;
    content:"Yes, I'm available for the next few months. My hourly rate is $75 for this kind of project. Can you share more details about the specific requirements?",;
    timestamp:"10:40 AM",;
    isMe:true,;
    status:"read"},;
  {;
    id:"5",;
    content:"That works for us. I'll send over a detailed brief later today. Would you be available for a quick call tomorrow to discuss further?",;
    timestamp:"10:45 AM",;
    isMe:false,;
    status:"read"}],;
;
export function MobileMessages() {;
  const [activeConversation, setActiveConversation] = useState<string | null>(null),;
  const [messages, setMessages] = useState<Message[]>(mockMessages),;
  ;
  const handleSelectConversation = (id:string) => {;
    setActiveConversation(id);
  },;
  ;
  const handleBack = () => {;
    setActiveConversation(null),;
  },;
  ;
  const handleSendMessage = (content:string) => {;
    const newMessage:Message = {;
      id:`${Date.now()}`,;
      content,;
      timestamp:"Just now",;
      isMe:true,;
      status:"sent"},;
    setMessages([...messages, newMessage]),;
  },;
  ;
  const currentContact = mockConversations.find(c => c.id === activeConversation),;
  ;
  return (;
    <div className="min-h-screen flex flex-col">;
      {activeConversation ? (;
        <MobileChatView;
          contact={{;
            id:currentContact?.id || "",;
            name:currentContact?.name || "",;
            status:"Online";
          }}
          messages={messages}
          onBack={handleBack}
          onSendMessage={handleSendMessage}
        />;
      ) :(;
        <>;
          <MobileHeader;
            title="Messages";
          />;
          ;
          <main className="flex-1 overflow-y-auto">;
            <MobileConversationList;
              conversations={mockConversations}
              onSelectConversation={handleSelectConversation}
            />;
          </main>;
          ;
          <BottomNavigation />;
        </>;
      )}
    </div>;
  ),;
=======
import React, { useState } from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { MobileConversationList } from "../components/messaging/MobileConversationList",
import { MobileChatView } from "../components/messaging/MobileChatView",
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
// Define the Message type to resolve the type error
interface Message {_id: string;
  content: string;
  timestamp: string;
  isMe: boolean;
  status: &quot;read&quot; | &quot;sent&quot; | &quot;delivered&quot;;
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
    status: "read"}],
export function MobileMessages() {
  const [activeConversation, setActiveConversation] = useState<string | null>(null),
  const [messages, setMessages] = useState<Message[]>(mockMessages),
  
  const handleSelectConversation = (id: string) => {
    setActiveConversation(id)
  },
  
  const handleBack = () => {
    setActiveConversation(null)
  },
  status: "read" | "sent" | "delivered";}

const mockMessages: Message[] = [
  {_id: "1", _content: "Hi there! I noticed your profile and think you'd be perfect for our project.", _timestamp: "10:30 AM", _isMe: false, _status: "read"},
  {_id: "2", _content: "Thanks for reaching out! I'd be interested in learning more about it.", _timestamp: "10:32 AM", _isMe: true, _status: "read"},
  {_id: "3", _content: "Great! It's a web application for a fintech company. We need someone with React and TypeScript experience. The project would last about 3 months. Are you available?", _timestamp: "10:35 AM", _isMe: false, _status: "read"},
  {_id: "4", _content: "Yes, _I'm available for the next few months. My hourly rate is $75 for this kind of project. Can you share more details about the specific requirements?", _timestamp: "10:40 AM", _isMe: true, _status: "read"},
  {_id: "5", _content: "That works for us. I'll send over a detailed brief later today. Would you be available for a quick call tomorrow to discuss further?", _timestamp: "10:45 AM", _isMe: false, _status: "read"}];

export function MobileMessages() {_const [activeConversation, _setActiveConversation] = useState<string | null>(null);
  const [messages, _setMessages] = useState<Message[]>(mockMessages);
  
  const _handleSelectConversation = (_id: string) => {
    setActiveConversation(id);};
  
  const _handleBack = () => {_setActiveConversation(null);};
  
  const _handleSendMessage = (_content: string) => {_const newMessage: Message = {
      id: `${Date.now()}`,
      content,
      timestamp: &quot;Just now&quot;,
      isMe: true,
      status: "sent"},
    setMessages([...messages, newMessage])
  },  
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
          onSendMessage={handleSendMessage}        />
      ) : (
        <>
          <MobileHeader
            title=&quot;Messages&quot;
          />
          
          <main className=&quot;flex-1 overflow-y-auto&quot;>
            <MobileConversationList
              conversations={_mockConversations}
              onSelectConversation={_handleSelectConversation}
            />
          </main>
          
          <BottomNavigation />
        </>
      )}
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
