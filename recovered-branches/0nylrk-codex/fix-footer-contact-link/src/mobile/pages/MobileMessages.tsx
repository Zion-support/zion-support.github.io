<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileConversationList} from "../components/messaging/MobileConversationList";
import {MobileChatView} from "../components/messaging/MobileChatView";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React, { useState } from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileConversationList} from "../components/messaging/MobileConversationList";
import {MobileChatView} from "../components/messaging/MobileChatView";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { MobileConversationList } from "../components/messaging/MobileConversationList";
import { MobileChatView } from "../components/messaging/MobileChatView";
import { MobileConversationList } from "../components/messaging/MobileConversationList",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { MobileChatView } from "../components/messaging/MobileChatView",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { MobileChatView } from "../components/messaging/MobileChatView",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
// Mock data for demonstration

const mockConversations = [
  {
    id: "1"
    name: "Sarah Johnson"
    lastMessage: "Looking forward to discussing the project tomorrow!"
<<<<<<< HEAD
=======
import React, { useState } from "react","
import { MobileHeader } from "../components/common/MobileHeader","
import { BottomNavigation } from "../components/common/BottomNavigation",";
import { MobileConversationList } from "../components/messaging/MobileConversationList";"
import { MobileChatView } from "../components/messaging/MobileChatView";"
import { MobileConversationList } from "../components/messaging/MobileConversationList","
import { MobileChatView } from "../components/messaging/MobileChatView",
;
// Mock data for demonstration;
const mockConversations = []
  {"
    id: "1""
    name: "Sarah Johnson""
    lastMessage: "Looking forward to discussing the project tomorrow!""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    timestamp: "10:45 AM"
    unreadCount: 2}
  {"
    id: "2""
    name: "TechCorp Inc.""
    lastMessage: "We'd like to schedule an interview for the React Developer position""
    timestamp: "Yesterday"
    unreadCount: 0}
  {"
    id: "3""
    name: "David Wilson""
    lastMessage: "Can you share your portfolio link again?""
    timestamp: "Wed"
    unreadCount: 0;
    isTyping: true}
  {"
    id: "4""
    name: "Creative Studios"'"
    lastMessage: "Your application has been received. We'll review it shortly.""
    timestamp: "Mon"
    unreadCount: 0}]
// Define the Message type to resolve the type error;
interface Message {}
  id: string;
  content: string;
  timestamp: string;
  isMe: boolean"
  status: "read" | "sent" | "delivered"
}
const mockMessages: Message[] = []
  {"
    id: "1"'"
    content: "Hi there! I noticed your profile and think you'd be perfect for our project.""
    timestamp: "10:30 AM"
    isMe: false"
    status: "read"}
  {"
    id: "2"'"
    content: "Thanks for reaching out! I'd be interested in learning more about it.""
    timestamp: "10:32 AM"
    isMe: true"
    status: "read"}
  {"
    id: "3"'"
    content: "Great! It's a web application for a fintech company. We need someone with React and TypeScript experience. The project would last about 3 months. Are you available?""
    timestamp: "10:35 AM"
    isMe: false"
    status: "read"}
<<<<<<< HEAD
  {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import React, { useState } from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileConversationList} from "../components/messaging/MobileConversationList";
import {MobileChatView} from "../components/messaging/MobileChatView";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    id: "4"
=======
id: "4"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    id: "5"
    content: "That works for us. I'll send over a detailed brief later today. Would you be available for a quick call tomorrow to discuss further?"
=======
  {}
"
    id: "5"'"
    content: "That works for us. I'll send over a detailed brief later today. Would you be available for a quick call tomorrow to discuss further?""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    timestamp: "10:45 AM"
    isMe: false"
    status: "read"}]"
    id: "5",'"
    content: "That works for us. I'll send over a detailed brief later today. Would you be available for a quick call tomorrow to discuss further?","
    timestamp: "10:45 AM",
    isMe: false,"
    status: "read"}],

  {}
export function MobileMessages() {}
  const handleSelectConversation = (id: string) => {}
    setActiveConversation(id)
  },
  
  const handleBack = () => {}
    setActiveConversation(null)
  },
  
  const handleSendMessage = (content: string) => {}
    const newMessage: Message = {}
      id: `${Date.now()}`,
      content,"
      timestamp: "Just now",
      isMe: true,"
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

  {

export function MobileMessages() {

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      status: "sent"},
    setMessages([...messages, newMessage])
  },
  const currentContact = mockConversations.find(c => c.id === activeConversation),

<<<<<<< HEAD
  return ("
    <div className="min-h-screen flex flex-col">
      {activeConversation ? (;
        <MobileChatView;
          contact={{}
"
import React, { useState } from "react",;"
import { MobileHeader } from "../components/common/MobileHeader",;"
import { BottomNavigation } from "../components/common/BottomNavigation",;"
import { MobileConversationList } from "../components/messaging/MobileConversationList",;"
import { MobileChatView } from "../components/messaging/MobileChatView",;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
  return (
    <div className="min-h-screen flex flex-col">
      {activeConversation ? (
        <MobileChatView
          contact={{

<<<<<<< HEAD
import React, { useState } from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { MobileConversationList } from "../components/messaging/MobileConversationList",;
import { MobileChatView } from "../components/messaging/MobileChatView",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import React, { useState } from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileConversationList} from "../components/messaging/MobileConversationList";
import {MobileChatView} from "../components/messaging/MobileChatView";
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Mock data for demonstration;
const mockConversations = [;
=======
import { MobileChatView } from "../components/messaging/MobileChatView",const mockConversations = [;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { MobileChatView } from "../components/messaging/MobileChatView",const mockConversations = [;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
// Mock data for demonstration;
const mockConversations = [;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  {;
    id: "1",;
    name: "Sarah Johnson",;
    lastMessage: "Looking forward to discussing the project tomorrow!",;
=======

// Mock data for demonstration;
const mockConversations = [;
  {;"
    id: "1",;"
    name: "Sarah Johnson",;"
    lastMessage: "Looking forward to discussing the project tomorrow!",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    timestamp: "10:45 AM",;
    unreadCount: 2},;
  {;"
    id: "2",;"
    name: "TechCorp Inc.",;'"
    lastMessage: "We'd like to schedule an interview for the React Developer position",;"
    timestamp: "Yesterday",;
    unreadCount: 0},;
  {;"
    id: "3",;"
    name: "David Wilson",;"
    lastMessage: "Can you share your portfolio link again?",;"
    timestamp: "Wed",;
    unreadCount: 0,;
    isTyping: true},;
  {;"
    id: "4",;"
    name: "Creative Studios",;'"
    lastMessage: "Your application has been received. We'll review it shortly.",;"
    timestamp: "Mon",;
    unreadCount: 0}],;
// Define the Message type to resolve the type error;
interface Message {;
  id: string,;
  content: string,;
  timestamp: string,;
  isMe: boolean,;"
  status: "read" | "sent" | "delivered";
}
<<<<<<< HEAD
<<<<<<< HEAD
;;
=======


;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const mockMessages: Message[] = [;
  {;"
    id: "1",;'"
    content: "Hi there! I noticed your profile and think you'd be perfect for our project.",;"
    timestamp: "10:30 AM",;
    isMe: false,;"
    status: "read"},;
  {;"
    id: "2",;'"
    content: "Thanks for reaching out! I'd be interested in learning more about it.",;"
    timestamp: "10:32 AM",;
    isMe: true,;"
    status: "read"},;
  {;"
    id: "3",;'"
    content: "Great! It's a web application for a fintech company. We need someone with React and TypeScript experience. The project would last about 3 months. Are you available?",;"
    timestamp: "10:35 AM",;
    isMe: false,;"
    status: "read"},;
<<<<<<< HEAD
  {;
<<<<<<< HEAD
    id: "4",;  return (
=======
  {;"
    id: "4",;
"
    timestamp: "10:40 AM",;
    isMe: true,;"
    status: "read"},;
  {;"
    id: "5",;'"
    content: "That works for us. I'll send over a detailed brief later today. Would you be available for a quick call tomorrow to discuss further?",;"
    timestamp: "10:45 AM",;
    isMe: false,;"
    status: "read"}],;

export function MobileMessages() { return null; }
      status: "sent"},;
    setMessages([...messages, newMessage]);



  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    id: "4",;
    content: "Yes, I'm available for the next few months. My hourly rate is $75 for this kind of project. Can you share more details about the specific requirements?";
    timestamp: "10:40 AM",;
    isMe: true,;
    status: "read"},;
  {;
    id: "5",;
    content: "That works for us. I'll send over a detailed brief later today. Would you be available for a quick call tomorrow to discuss further?",;
    timestamp: "10:45 AM",;
    isMe: false,;
    status: "read"}],;

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
      timestamp: "Just now",;
      isMe: true,;
      status: "sent"},;
    setMessages([...messages, newMessage]);
  };

  const currentContact = mockConversations && mockConversations.find(c => c && c.id === activeConversation);


  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <div className="min-h-screen flex flex-col">;
      {activeConversation ? (;
        <MobileChatView;
          contact={{;"
            id: currentContact?.id || "";"
            name: currentContact?.name || "";"
            status: "Online";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



"
    id: "4",'"
    content: "Yes, I'm available for the next few months. My hourly rate is $75 for this kind of project. Can you share more details about the specific requirements?","
    timestamp: "10:40 AM",
    isMe: true,"
    status: "read"},

  {}
"
    id: "5",'"
    content: "That works for us. I'll send over a detailed brief later today. Would you be available for a quick call tomorrow to discuss further?","
    timestamp: "10:45 AM",
    isMe: false,"
    status: "read"}],

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
=======

  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <div className="min-h-screen flex flex-col">
      {activeConversation ? (
        <MobileChatView;
          contact={{}
"
            id: currentContact?.id || "","
            name: currentContact?.name || "","
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            status: "Online"

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          }}
          messages={messages}
          on_back={handle_back}
          onSendMessage={handleSendMessage}

<<<<<<< HEAD
              conversations={mockConversations}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              onSelectConversation={handleSelectConversation}
            />;
          </main>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          />;

          <main className="flex-1 overflow-y-auto">;
            <MobileConversationList
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
              conversations={mockConversations}
              onSelectConversation={handleSelectConversation}
            />;
          </main>;

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
;
              onSelectConversation={handleSelectConversation}
            />;
          </main>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <BottomNavigation />;
        </>;
      )}
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        />) : (
        <>;
          <MobileHeader;"
            title="Messages";
<<<<<<< HEAD
          />;
<<<<<<< HEAD
<<<<<<< HEAD
          <main className="flex - 1 overflow-y-auto">;
=======
          />;"
          <main className="flex - 1 overflow - y-auto">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <main className="flex - 1 overflow - y-auto">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          <main className="flex - 1 overflow-y-auto">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
  isMe: boolean,;"
  status: "read" | "sent" | "delivered";"

;
const mockMessages: Message[] = [;
    content: "Hi there! I noticed your profile and think you'd be perfect for our project.",;""
    timestamp: "10:30 AM",;"
    isMe: false,;"
    status: "read"},;"
    content: "Thanks for reaching out! I'd be interested in learning more about it.",;""
    timestamp: "10:32 AM",;"
    isMe: true,;"
    content: "Great! It's a web application for a fintech company. We need someone with React and TypeScript experience. The project would last about 3 months. Are you available?",;""
    timestamp: "10:35 AM",;"
    content: "Yes, I'm available for the next few months. My hourly rate is $75 for this kind of project. Can you share more details about the specific requirements?";""
    timestamp: "10:40 AM",;"
    id: "5",;""
    content: "That works for us. I'll send over a detailed brief later today. Would you be available for a quick call tomorrow to discuss further?",;""
    isMe: false,;]"
    status: "read"}],;")
export function MobileMessages() {;
  const [activeConversation, setActiveConversation] = useState<string | null>(null);

  const [messages, setMessages] = useState<Message[]>(mockMessages);
    <div className="min-h-screen flex flex-col">;"
          contact={{;"
            id: currentContact?.id || "";","
  name: currentContact?.name || "";""
            status: "Online";","
  id: "4",""
    content: "Yes, I'm available for the next few months. My hourly rate is $75 for this kind of project. Can you share more details about the specific requirements?",""
    timestamp: "10:40 AM","
    status: "read"},"

            id: currentContact?.id || "",""
            name: currentContact?.name || "",""
            status: "Online""
          }}
          messages={messages}
          on_back={handle_back}
          onSendMessage={handleSendMessage}

          />;

          <main className="flex-1 overflow-y-auto">;"
</main>
            <MobileConversationList;
              conversations={mockConversations}
              onSelectConversation={handleSelectConversation}

          </main>;
          <BottomNavigation />;

        </>;)
      )}
    </div>
  )
}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </div>;
        <>;
          <MobileHeader;"
            title="Messages";"
          <main className="flex - 1 overflow - y-auto">;"
              conversations={mock_conversations}


        </>)}
    </div>);
  const [activeConversation, setActiveConversation] = useState<string | null> (null);
</string>
const [messages, setMessages] = useState<Message[]> (mockMessages);
/>) : (<> <MobileHeader title="Messages" /> <main className="flex-1 overflow-y-auto" > <MobileConversationList conversations= {"
)
}/> </main> <BottomNavigation /> </>) 

}</div>) 
        <>
            title="Messages""
          />
          <main className="flex-1 overflow-y-auto">"

          <BottomNavigation />

        </>
    </div>"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
