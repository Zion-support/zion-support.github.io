import React, { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { MessageSquare } from 'lucide-react';
import { useMessaging } from '@/context/MessagingContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useAuth } from '@/hooks/useAuth';
import { MessageBubble } from "./MessageBubble";
import { DateDivider } from "./DateDivider";

export function ConversationDetailView() {
    const { user } = useAuth();
    const { activeConversation, activeMessages, sendMessage, loadMessages } = useMessaging();
    const [messageText, setMessageText] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (activeConversation) {
            loadMessages(activeConversation.id);
        }
    }, [activeConversation?.id, loadMessages]);

    useEffect(() => {
        scrollToBottom();
    }, [activeMessages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!messageText.trim() || !activeConversation) return;
        
        await sendMessage(activeConversation.id, messageText);
        setMessageText('');
    };

    if (!activeConversation) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center p-8">
                <MessageSquare className="h-16 w-16 text-zion-purple/40 mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No Conversation Selected</h3>
                <p className="text-zion-slate text-center max-w-md">
                    Select a conversation from the list to view and send messages.
                </p>
            </div>
        );
    }

    // Group messages by date
    const groupedMessages = [];
    activeMessages.forEach(message => {
        const messageDate = format(new Date(message.created_at), 'yyyy-MM-dd');
        const existingGroup = groupedMessages.find(group => group.date === messageDate);
        
        if (existingGroup) {
            existingGroup.messages.push(message);
        } else {
            groupedMessages.push({
                date: messageDate,
                messages: [message]
            });
        }
    });

    const hasContextData = activeConversation.context_data &&
        (activeConversation.context_data.title || activeConversation.context_data.description);

    return (
        <div className="flex-1 flex flex-col h-full">
            {/* Header */}
            <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30">
                <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-zion-purple/20">
                        <AvatarImage 
                            src={activeConversation.other_user.avatar_url} 
                            alt={activeConversation.other_user.name}
                        />
                        <AvatarFallback className="bg-zion-blue-dark text-white">
                            {activeConversation.other_user.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <div className="font-medium text-white">
                            {activeConversation.other_user.name}
                        </div>
                        <div className="text-xs text-zion-slate">
                            {activeConversation.other_user.user_type === 'talent' ? 'Talent' :
                             activeConversation.other_user.user_type === 'employer' ? 'Employer' :
                             activeConversation.other_user.user_type === 'admin' ? 'Admin' : 'User'}
                        </div>
                    </div>
                </div>
            </div>

            {/* Context information (if available) */}
            {hasContextData && (
                <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/10">
                    <div className="text-sm text-zion-slate flex items-start gap-3">
                        {activeConversation.context_data && activeConversation.context_data.image_url && (
                            <div className="w-16 h-16 flex-shrink-0">
                                <AspectRatio ratio={1 / 1} className="rounded bg-zion-blue-dark/30 overflow-hidden">
                                    <img
                                        src={activeConversation.context_data.image_url}
                                        alt={activeConversation.context_data.title || 'Context'}
                                        className="object-cover w-full h-full"
                                    />
                                </AspectRatio>
                            </div>
                        )}
                        <div className="flex-1">
                            {activeConversation.context_data.title && (
                                <div className="font-medium text-white mb-1">
                                    {activeConversation.context_data.title}
                                </div>
                            )}
                            {activeConversation.context_data.description && (
                                <div className="text-zion-slate">
                                    {activeConversation.context_data.description}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {groupedMessages.map((group, groupIndex) => (
                    <div key={group.date}>
                        <DateDivider date={group.date} />
                        <div className="space-y-3">
                            {group.messages.map((message, messageIndex) => (
                                <MessageBubble
                                    key={`${groupIndex}-${messageIndex}`}
                                    message={message}
                                    isOwn={message.sender_id === user?.id}
                                />
                            ))}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-zion-purple/20 bg-zion-blue-dark/30">
                <form onSubmit={handleSendMessage} className="flex gap-3">
                    <input
                        type="text"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 bg-zion-blue-dark/50 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
                    />
                    <Button
                        type="submit"
                        disabled={!messageText.trim()}
                        className="px-6 py-2 bg-zion-purple hover:bg-zion-purple-dark text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Send
                    </Button>
                </form>
            </div>
        </div>
    );
}
