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


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { MobileConversationList } from "../components/messaging/MobileConversationList";
import { MobileChatView } from "../components/messaging/MobileChatView";
import { MobileConversationList } from "../components/messaging/MobileConversationList",
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
=======
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileConversationList} from "../components/messaging/MobileConversationList";
import {MobileChatView} from "../components/messaging/MobileChatView";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
      status: "sent"},
    setMessages([...messages, newMessage])
  },
  
  const currentContact = mockConversations.find(c => c.id === activeConversation),

  return (
    <div className="min-h-screen flex flex-col">
      {activeConversation ? (
        <MobileChatView
          contact={{

import React, { useState } from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { MobileConversationList } from "../components/messaging/MobileConversationList",;
import { MobileChatView } from "../components/messaging/MobileChatView",;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

import React, { useState } from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileConversationList} from "../components/messaging/MobileConversationList";
import {MobileChatView} from "../components/messaging/MobileChatView";
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
// Define the Message type to resolve the type error;
interface Message {;
  id: string,;
  content: string,;
  timestamp: string,;
  isMe: boolean,;
  status: "read" | "sent" | "delivered";
}
;;
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
    id: "4",;  return (
    <div className="min-h-screen flex flex-col">;
      {activeConversation ? (;
        <MobileChatView;
          contact={{;
            id: currentContact?.id || "";
            name: currentContact?.name || "";
            status: "Online";
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
          }}
          messages={messages}
          on_back={handle_back}
          onSendMessage={handleSendMessage}
<<<<<<< HEAD

          />;

          <main className="flex-1 overflow-y-auto">;
            <MobileConversationList
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              conversations={mockConversations}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              onSelectConversation={handleSelectConversation}
            />;
          </main>;
          <BottomNavigation />;
        </>;
      )}
    </div>;
  );
}
        />) : (
        <>;
          <MobileHeader;
            title="Messages";
          />;
          <main className="flex - 1 overflow-y-auto">;
            <MobileConversationList;
              conversations={mock_conversations}
              onSelectConversation={handleSelectConversation}
            />;
          </main>;
          <BottomNavigation />;
        </>)}
    </div>);
}
