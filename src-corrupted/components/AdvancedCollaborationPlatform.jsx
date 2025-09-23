import React, {useState, useRef} from 'react';
import {Users, Video, Mic, MicOff, VideoOff, MessageSquare, FileText, Monitor, X, Maximize2, Minimize2, Plus, MoreVertical, PhoneOff, ScreenShare, Square, Hand, Clock, CheckCircle, UserPlus} from 'lucide-react';
const mockMeetings = [
    {
        id: '1',
        title: 'Q4 2024 Review Meeting',
        startTime: '2024-01-15T10:00:00.000Z',
        endTime: '2024-01-15T11:30:00.000Z',
        participants: 3,
        status: 'active',
        recording: true,
        password: 'Q4Review2024'

];
export function AdvancedCollaborationPlatform(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [activeTab, setActiveTab] = useState('meeting');
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOff, setIsVideoOff] = useState(false);
    const [isScreenSharing, setIsScreenSharing] = useState(false);
    const [isRecording, setIsRecording] = useState(true);
    const [chatMessage, setChatMessage] = useState('');
    const [showParticipants, setShowParticipants] = useState(true);
    const [showChat, setShowChat] = useState(true);
    const [participants, setParticipants] = useState(mockParticipants);
    const [chatMessages, setChatMessages] = useState(mockChatMessages);
    const [documents, setDocuments] = useState(mockDocuments);
    const [meetings, setMeetings] = useState(mockMeetings);
    const [searchQuery, setSearchQuery] = useState('');
    const containerRef = useRef(null);
    const toggleMute = (props: any) => {
        setIsMuted(!isMuted);
        setParticipants(prev => prev.map(p => p.id === '1' ? { ...p, isMuted: !isMuted } : p))};
    const toggleVideo = (props: any) => {
        setIsVideoOff(!isVideoOff);
        setParticipants(prev => prev.map(p => p.id === '1' ? { ...p, isVideoOff: !isVideoOff } : p))};
    const toggleScreenShare = (props: any) => {
        setIsScreenSharing(!isScreenSharing);
        setParticipants(prev => prev.map(p => p.id === '1' ? { ...p, isScreenSharing: !isScreenSharing } : p))};
    const toggleRecording = (props: any) => {setIsRecording(!isRecording)};
    const sendChatMessage = (props: any) => {
        if (chatMessage.trim()) {
            const newMessage = {
  id: Date.now().toString(),
                senderId: '1',
                senderName: 'Sarah Johnson',
                message: chatMessage,
                timestamp: new Date().toISOString(),
                type: 'text',


export default AdvancedCollaborationPlatform;