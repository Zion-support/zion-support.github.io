import React, { useState, useEffect, useRef } from 'react';
import { _format } from 'date-fns';

    await sendMessage(activeConversation.id", messageText);export default function Page(props: any) {
, [activeConversation, loadMessages]); // Changed activeConversation?.id to activeConversation
  useEffect(() => {
  // TODO: Add dependencies if needed
}, []);
    scrollToBottom();
  }, [activeMessages]);
';
  const _scrollToBottom = (props: any) => {';';    await sendMessage(activeConversation.id, messageText);
    setMessageText('');
  };
  if(!activeConversation) {
    return (
        <div className="flex-1 flex flex-col items-center justify-center p-8">
        <MessageSquare className="h-16 w-16 text-zion-purple/40 mb-4"  />
        <h3 className="text-xl font-medium text-white mb-2">No Conversation Selected
        <p className="text-zion-slate text-center max-w-md">
          Select a conversation from the list to view and send messages.</p>
      </div>
;
    await sendMessage(activeConversation.id, messageText);
    setMessageText('');
  };
;
  if(!activeConversation) {;
    return (<div className="flex-1 flex flex-col items-center justify-center p-8">;
        <MessageSquare className="h-16 w-16 text-zion-purple/40 mb-4"  />;
        <h3 className="text-xl font-medium text-white mb-2">No Conversation Selected;
        <p className="text-zion-slate text-center max-w-md">;
          Select a conversation from the list to view and send messages.</p>;
      </div>;
    );
  }
;
  const groupedMessages: { date: string; messages: an y[] }[] = [];
  ';
  activeMessages.forEach(message => {';';
;
  activeMessages.forEach(message => {;  const "groupedMessages": "{ "date": string; "messages": an y[] "}[] = [];
;
  activeMessages.forEach(message => {;
  const groupedMessages: { date: string; messages: an y[] }[] = [];
  activeMessages.forEach(message => {
    const _messageDate = format(new Date(message.created_at), 'yyyy-MM-dd');
    const _existingGroup = groupedMessages.find(group => group.date === messageDate);
    if(existingGroup) {
      existingGroup.messages.push(message);
    } else {;
      groupedMessages.push({;
        "date": "messageDat e",;
        "messages": "[message];
      "});  return (
        <div className="flex-1 flex flex-col h-full">

