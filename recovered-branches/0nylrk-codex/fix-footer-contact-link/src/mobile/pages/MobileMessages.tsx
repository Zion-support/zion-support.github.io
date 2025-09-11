


<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileConversationList} from "../components/messaging/MobileConversationList";
import {MobileChatView} from "../components/messaging/MobileChatView";
import React, { useState } from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { MobileConversationList } from "../components/messaging/MobileConversationList";
import { MobileChatView } from "../components/messaging/MobileChatView";
import { MobileConversationList } from "../components/messaging/MobileConversationList",
import { MobileChatView } from "../components/messaging/MobileChatView",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Mock data for demonstration

const mockConversations = [
  {
    id: "1"
    name: "Sarah Johnson"
    lastMessage: "Looking forward to discussing the project tomorrow!"
    timestamp: "10:45 AM"
    unreadCount: 2}
  {
    id: "2"
    name: "TechCorp Inc."
    lastMessage: "We'd like to schedule an interview for the React Developer position"
    timestamp: "Yesterday"
    unreadCount: 0}
  {
    id: "3"
    name: "David Wilson"
    lastMessage: "Can you share your portfolio link again?"
    timestamp: "Wed"
    unreadCount: 0
    isTyping: true}
  {
    id: "4"
    name: "Creative Studios"
    lastMessage: "Your application has been received. We'll review it shortly."
    timestamp: "Mon"
    unreadCount: 0}]
// Define the Message type to resolve the type error
interface Message {
  id: string
  content: string
  timestamp: string
  isMe: boolean
  status: "read" | "sent" | "delivered"
}
const mockMessages: Message[] = [
  {
    id: "1"
    content: "Hi there! I noticed your profile and think you'd be perfect for our project."
    timestamp: "10:30 AM"
    isMe: false
    status: "read"}
  {
    id: "2"
    content: "Thanks for reaching out! I'd be interested in learning more about it."
    timestamp: "10:32 AM"
    isMe: true
    status: "read"}
  {
    id: "3"
    content: "Great! It's a web application for a fintech company. We need someone with React and TypeScript experience. The project would last about 3 months. Are you available?"
    timestamp: "10:35 AM"
    isMe: false
    status: "read"}
  {
<<<<<<< HEAD
<<<<<<< HEAD
    id: "4"
    content: "Yes, I'm available for the next few months. My hourly rate is $75 for this kind of project. Can you share more details about the specific requirements?";
    timestamp: "10:40 AM"
    isMe: true
    status: "read"}
    id: "4",
    content: "Yes, I'm available for the next few months. My hourly rate is $75 for this kind of project. Can you share more details about the specific requirements?",
    timestamp: "10:40 AM",
    isMe: true,
    status: "read"},
  {
    id: "5"
    content: "That works for us. I'll send over a detailed brief later today. Would you be available for a quick call tomorrow to discuss further?"
    timestamp: "10:45 AM"
    isMe: false
    status: "read"}]
    id: "5",
    content: "That works for us. I'll send over a detailed brief later today. Would you be available for a quick call tomorrow to discuss further?",
    timestamp: "10:45 AM",
    isMe: false,
    status: "read"}],

export function MobileMessages() {;
  const [activeConversation, setActiveConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
export function MobileMessages() {
  const [activeConversation, setActiveConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const handleSelectConversation = (id: string) => {
    setActiveConversation(id)
  }
  const handleBack = () => {
    setActiveConversation(null)
  }
  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: `${Date.now()}`
      content;
      timestamp: "Just now"
      isMe: true
      status: "sent"}
    setMessages([...messages, newMessage])
  }
  const currentContact = mockConversations.find(c => c.id === activeConversation);
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
      timestamp: "Just now",
      isMe: true,
      status: "sent"},
    setMessages([...messages, newMessage])
  },
  
  const currentContact = mockConversations.find(c => c.id === activeConversation),
  
  return (
    <div className="min-h-screen flex flex-col">
      {activeConversation ? (
        <MobileChatView
          contact={{
            id: currentContact?.id |""
            name: currentContact?.name |""

            status: "Online"
            id: currentContact?.id || "",
            name: currentContact?.name || "",
            status: "Online"
import React, { useState } from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { MobileConversationList } from "../components/messaging/MobileConversationList",;
import { MobileChatView } from "../components/messaging/MobileChatView",;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React, { useState } from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileConversationList} from "../components/messaging/MobileConversationList";
import {MobileChatView} from "../components/messaging/MobileChatView";
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Mock data for demonstration;
const mockConversations = [;
  {;
    id: "1",;
    name: "Sarah Johnson",;
    lastMessage: "Looking forward to discussing the project tomorrow!",;
    timestamp: "10:45 AM",;
    unreadCount: 2},;
  {;
    id: "2",;
    name: "TechCorp Inc.",;
    lastMessage: "We'd like to schedule an interview for the React Developer position",;
    timestamp: "Yesterday",;
    unreadCount: 0},;
  {;
    id: "3",;
    name: "David Wilson",;
    lastMessage: "Can you share your portfolio link again?",;
    timestamp: "Wed",;
    unreadCount: 0,;
    isTyping: true},;
  {;
    id: "4",;
    name: "Creative Studios",;
    lastMessage: "Your application has been received. We'll review it shortly.",;
    timestamp: "Mon",;
    unreadCount: 0}],;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Define the Message type to resolve the type error;
interface Message {;
  id: string,;
  content: string,;
  timestamp: string,;
  isMe: boolean,;
  status: "read" | "sent" | "delivered";
}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const mockMessages: Message[] = [;
  {;
    id: "1",;
    content: "Hi there! I noticed your profile and think you'd be perfect for our project.",;
    timestamp: "10:30 AM",;
    isMe: false,;
    status: "read"},;
  {;
    id: "2",;
    content: "Thanks for reaching out! I'd be interested in learning more about it.",;
    timestamp: "10:32 AM",;
    isMe: true,;
    status: "read"},;
  {;
    id: "3",;
    content: "Great! It's a web application for a fintech company. We need someone with React and TypeScript experience. The project would last about 3 months. Are you available?",;
    timestamp: "10:35 AM",;
    isMe: false,;
    status: "read"},;
  {;
    id: "4",;
<<<<<<< HEAD
<<<<<<< HEAD
    content: "Yes, I'm available for the next few months. My hourly rate is $75 for this kind of project. Can you share more details about the specific requirements?",;
=======
    content: "Yes, I'm available for the next few months. My hourly rate is $75 for this kind of project. Can you share more details about the specific requirements?";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    content: "Yes, I'm available for the next few months. My hourly rate is $75 for this kind of project. Can you share more details about the specific requirements?";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    timestamp: "10:40 AM",;
    isMe: true,;
    status: "read"},;
  {;
    id: "5",;
    content: "That works for us. I'll send over a detailed brief later today. Would you be available for a quick call tomorrow to discuss further?",;
    timestamp: "10:45 AM",;
    isMe: false,;
    status: "read"}],;
<<<<<<< HEAD
<<<<<<< HEAD
export function MobileMessages() {;
  const [activeConversation, setActiveConversation] = useState<string | null>(null),;
  const [messages, setMessages] = useState<Message[]>(mockMessages),;
  const handleSelectConversation = (id: string) => {;
    setActiveConversation(id);
  },;
  const handleBack = () => {;
    setActiveConversation(null);
  },;
  const handleSendMessage = (content: string) => {;
    const newMessage: Message = {;
      id: `${Date.now()}`,;
      content,;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function MobileMessages() {;
  const [activeConversation, setActiveConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>(mockMessages);

  const handleSelectConversation = (id: string) => {;
    setActiveConversation(id);
  };

  const handleBack = () => {;
    setActiveConversation(null);
  };

  const handleSendMessage = (content: string) => {;
    const newMessage: Message = {;
      id: `${Date && Date.now()}`,;
      content;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      timestamp: "Just now",;
      isMe: true,;
      status: "sent"},;
    setMessages([...messages, newMessage]);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };

  const currentContact = mockConversations && mockConversations.find(c => c && c.id === activeConversation);


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="min-h-screen flex flex-col">;
      {activeConversation ? (;
        <MobileChatView
          contact={{
            id: currentContact?.id |""
            name: currentContact?.name |""
            status: "Online"
import React, { useState } from './react';
import { MobileHeader } from '../components / common / MobileHeader';
import { BottomNavigation } from '../components / common / BottomNavigation';
import { MobileConversationList } from '../components / messaging / MobileConversationList';
import { MobileChatView } from '../components / messaging / MobileChatView';
// Mock data for demonstration;
const mock_conversations = [;
  {
    id: "1",
    name: "Sarah Johnson",
    last_message: "Looking forward to discussing the project tomorrow!",
    timestamp: "10:45 AM",
    unread_count: 2},
  {
    id: "2",
    name: "TechCorp Inc.",
    last_message: "We'd like to schedule an interview for the React Developer position",
    timestamp: "Yesterday",
    unread_count: 0},
  {
    id: "3",
    name: "David Wilson",
    last_message: "Can you share your portfolio link again?",
    timestamp: "Wed",
    unread_count: 0,
    is_typing: true},
  {
    id: "4",
    name: "Creative Studios",
    last_message: "Your application has been received. We'll review it shortly.",
    timestamp: "Mon",
    unread_count: 0}],
// Define the Message type to resolve the type error;
interface Message {
  id: string,
  content: string,
  timestamp: string,
  is_me: boolean,
  status: "read" | "sent" | "delivered";
}
const mock_messages: Message[] = [;
  {
    id: "1",
    content: "Hi there! I noticed your profile and think you'd be perfect for our project.",
    timestamp: "10:30 AM",
    is_me: false,
    status: "read"},
  {
    id: "2",
    content: "Thanks for reaching out! I'd be interested in learning more about it.",
    timestamp: "10:32 AM",
    is_me: true,
    status: "read"},
  {
    id: "3",
    content: "Great! It's a web application for a fintech company. We need someone with React and TypeScript experience. The project would last about 3 months. Are you available?",
    timestamp: "10:35 AM",
    is_me: false,
    status: "read"},
  {
    id: "4",
    content: "Yes, I'm available for the next few months. My hourly rate is $75 for this kind of project. Can you share more details about the specific requirements?";
    timestamp: "10:40 AM",
    is_me: true,
    status: "read"},
  {
    id: "5",
    content: "That works for us. I'll send over a detailed brief later today. Would you be available for a quick call tomorrow to discuss further?",
    timestamp: "10:45 AM",
    is_me: false,
    status: "read"}],
export /**
 * MobileMessages - Function description
 */
function MobileMessages() {
  const [active_conversation, setActiveConversation] = useState < string | null>(null);
  const [messages, set_messages] = useState < Message[]>(mock_messages);
;
  const handleSelectConversation = (id: string) =>: any {
    setActiveConversation (id);
  }
;
  const handle_back = () =>: any {
    setActiveConversation (null);
  }
;
  const handleSendMessage = (content: string) =>: any {
    const new_message: Message = {
      id: `${Date.now ()}`,
      content;
      timestamp: "Just now",
      is_me: true,
      status: "sent"},
    set_messages ([...messages, new_message]);
  }
;
  const current_contact = mock_conversations.find (c => c.id === active_conversation);
;
  return (
    <div className="min - h-screen flex flex - col">;
      {active_conversation ? (
        <MobileChatView;
          contact={{
            id: current_contact?.id || "",
            name: current_contact?.name || "",
            status: "Online";
=======
  return (
    <div className="min-h-screen flex flex-col">;
      {activeConversation ? (;
        <MobileChatView;
          contact={{;
            id: currentContact?.id || "";
            name: currentContact?.name || "";
            status: "Online";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    id: "4",
    content: "Yes, I'm available for the next few months. My hourly rate is $75 for this kind of project. Can you share more details about the specific requirements?",
    timestamp: "10:40 AM",
    isMe: true,
    status: "read"},

  {

    id: "5",
    content: "That works for us. I'll send over a detailed brief later today. Would you be available for a quick call tomorrow to discuss further?",
    timestamp: "10:45 AM",
    isMe: false,
    status: "read"}],


  return (
    <div className="min-h-screen flex flex-col">
      {activeConversation ? (
        <MobileChatView
          contact={{

            id: currentContact?.id || "",
            name: currentContact?.name || "",
            status: "Online"

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
  },;
  const currentContact = mockConversations.find(c => c.id === activeConversation),;
  return (;
    <div className="min-h-screen flex flex-col">;
      {activeConversation ? (;
        <MobileChatView;
          contact={{;
        />;
      ) :(;
        <>;
          <MobileHeader;
            title="Messages";
          />;
          ;
          <main className="flex-1 overflow-y-auto">;
            <MobileConversationList;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          }}
          messages={messages}
          on_back={handle_back}
          onSendMessage={handleSendMessage}

          />;

          <main className="flex-1 overflow-y-auto">;
            <MobileConversationList
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              conversations={mockConversations}
              onSelectConversation={handleSelectConversation}
            />;
          </main>;
<<<<<<< HEAD
          ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <BottomNavigation />;
        </>;
      )}
    </div>;
<<<<<<< HEAD
=======
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />) : (
        <>;
          <MobileHeader;
            title="Messages";
          />;
          <main className="flex - 1 overflow - y-auto">;
            <MobileConversationList;
              conversations={mock_conversations}
              onSelectConversation={handleSelectConversation}
            />;
          </main>;
          <BottomNavigation />;
        </>)}
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
  ),;}
   id: string;
content: string;
timestamp: string;
isMe: boolean;
export function MobileMessages () {
  const [activeConversation, setActiveConversation] = useState<string | null> (null);
const [messages, setMessages] = useState<Message[]> (mockMessages);
const handleSelectConversation = (id: string) => {
  setActiveConversation (id) 
};
const handleBack = () => {
  setActiveConversation (null) 
};
const newMessage: Message = {
  id: `$ {
  Date.now () 
}`;
content;
timestamp: "Just now";
isMe: true;
/>) : (<> <MobileHeader title="Messages" /> <main className="flex-1 overflow-y-auto" > <MobileConversationList conversations= {
  mockConversations 
}onSelectConversation= {
  handleSelectConversation 
}/> </main> <BottomNavigation /> </>) 
}</div>) 
}
            id: currentContact?.id || "";
            name: currentContact?.name || "";
            status: "Online";
          }}
          messages={messages}
          onBack={handleBack}
          onSendMessage={handleSendMessage}
        />
      ) : (
        <>
          <MobileHeader
            title="Messages"
          />
          <main className="flex-1 overflow-y-auto">
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
