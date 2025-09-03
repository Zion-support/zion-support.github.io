import React, { useState, useRef } from 'react';
export function AdvancedCollaborationPlatform () {

import { Users, Video, Mic, MicOff, VideoOff, MessageSquare, FileText, Monitor, X, Maximize2, Minimize2, Plus, MoreVertical, PhoneOff, ScreenShare, Square, Hand, Clock, CheckCircle, UserPlus  } from 'lucide-react';
 : p))};
    const toggleVideo = () => {
        setIsVideoOff(!isVideoOff);
        setParticipants(prev => prev.map(p => p.id === '1' ? { ...p, isVideoOff: !isVideoOff } : p))};
    const toggleScreenShare = () => {
        setIsScreenSharing(!isScreenSharing);
        setParticipants(prev => prev.map(p => p.id === '1' ? { ...p, isScreenSharing: !isScreenSharing } : p))};
    const toggleRecording = () => {
        setIsRecording(!isRecording) };
    const sendChatMessage = () => {
        if(chatMessage.trim()) {

            const newMessage = {

  id: Date.now().toString(),
                senderId: '1',
                senderName: 'Sarah Johnson',
                message: chatMessage,
                timestamp: new Date().toISOString(),
                type: 'text',
