/* global HTMLDivElement */
import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FileText, Mic, MicOff, Play, Plus, Share, Square, Users, Video, VideoOff, X } from 'lucide-react';
import {
  advancedCollaborationSystem,
  ChatMessage,
  CollaborationSession,
  Poll,
  SharedFile,
  User,
  WhiteboardElement
} from '../utils/advancedCollaborationSystem';

interface AdvancedCollaborationDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const AdvancedCollaborationDashboard: React.FC<AdvancedCollaborationDashboardProps> = ({ 
  isVisible, 
  onClose 
}) => {
  const [activeTab, setActiveTab] = useState('sessions');
  const [sessions, setSessions] = useState<CollaborationSession[]>([]);
  const [currentSession, setCurrentSession] = useState<CollaborationSession | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [polls, setPolls] = useState<Poll[]>([]);
  const [sharedFiles, setSharedFiles] = useState<SharedFile[]>([]);
  const [whiteboardElements, setWhiteboardElements] = useState<WhiteboardElement[]>([]);
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [newPollQuestion, setNewPollQuestion] = useState('');
  const [newPollOptions, setNewPollOptions] = useState(['']);
  const [showCreateSession, setShowCreateSession] = useState(false);
  const [sessionName, setSessionName] = useState('');
  const [sessionType, setSessionType] = useState<CollaborationSession['type']>('meeting');
  // eslint-disable-next-line no-undef
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      // Initialize collaboration system
      advancedCollaborationSystem.initialize();
      
      // Load sessions
      setSessions(advancedCollaborationSystem.getAllSessions());
      
      // Set up event listeners
      advancedCollaborationSystem.on('sessionCreated', handleSessionCreated as unknown as (...args: unknown[]) => void);
      advancedCollaborationSystem.on('sessionStarted', handleSessionStarted as unknown as (...args: unknown[]) => void);
      advancedCollaborationSystem.on('sessionEnded', handleSessionEnded as unknown as (...args: unknown[]) => void);
      advancedCollaborationSystem.on('userJoined', handleUserJoined as unknown as (...args: unknown[]) => void);
      advancedCollaborationSystem.on('userLeft', handleUserLeft as unknown as (...args: unknown[]) => void);
      advancedCollaborationSystem.on('chatMessage', handleChatMessage as unknown as (...args: unknown[]) => void);
      advancedCollaborationSystem.on('pollCreated', handlePollCreated as unknown as (...args: unknown[]) => void);
      advancedCollaborationSystem.on('fileShared', handleFileShared as unknown as (...args: unknown[]) => void);
      advancedCollaborationSystem.on('whiteboardElementAdded', handleWhiteboardElementAdded as unknown as (...args: unknown[]) => void);
    }
  }, [isVisible]);

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSessionCreated = (session: CollaborationSession) => {
    setSessions(prev => [...prev, session]);
  };

  const handleSessionStarted = (session: CollaborationSession) => {
    setCurrentSession(session);
    setUsers(session.participants);
    setChatMessages(session.chat);
    setPolls(session.polls);
    setSharedFiles(session.sharedFiles);
    setWhiteboardElements(session.whiteboard.elements);
  };

  const handleSessionEnded = (session: CollaborationSession) => {
    setCurrentSession(null);
    setIsVideoEnabled(false);
    setIsAudioEnabled(false);
    setIsScreenSharing(false);
    setIsRecording(false);
  };

  const handleUserJoined = ({ session, user }: { session: CollaborationSession; user: User }) => {
    setUsers(prev => [...prev, user]);
  };

  const handleUserLeft = ({ session, userId }: { session: CollaborationSession; userId: string }) => {
    setUsers(prev => prev.filter(u => u.id !== userId));
  };

  const handleChatMessage = (message: ChatMessage) => {
    setChatMessages(prev => [...prev, message]);
  };

  const handlePollCreated = (poll: Poll) => {
    setPolls(prev => [...prev, poll]);
  };

  const handleFileShared = (file: SharedFile) => {
    setSharedFiles(prev => [...prev, file]);
  };

  const handleWhiteboardElementAdded = (element: WhiteboardElement) => {
    setWhiteboardElements(prev => [...prev, element]);
  };

  const createSession = async () => {
    if (!sessionName.trim()) return;

    try {
      const session = await advancedCollaborationSystem.createSession(
        sessionName,
        sessionType
      );
      setShowCreateSession(false);
      setSessionName('');
      setSessionType('meeting');
    } catch (error) {
      console.error('Error creating session:', error);
    }
  };

  const joinSession = async (sessionId: string) => {
    try {
      const currentUser = advancedCollaborationSystem.getCurrentUser();
      if (!currentUser) {
        // Create a default user for demo
        const user: User = {
          id: 'demo-user',
          name: 'Demo User',
          email: 'demo@example.com',
          role: 'user',
          status: 'online',
          lastSeen: new Date(),
          permissions: [],
          preferences: {
            theme: 'light',
            language: 'en',
            notifications: true,
            soundEnabled: true,
            videoEnabled: false,
            screenSharingEnabled: false,
            autoSave: true,
            showPresence: true,
            showTyping: true,
            showCursors: true
          }
        };
        advancedCollaborationSystem.setCurrentUser(user);
      }

      await advancedCollaborationSystem.joinSession(sessionId, currentUser!);
      await advancedCollaborationSystem.startSession(sessionId);
    } catch (error) {
      console.error('Error joining session:', error);
    }
  };

  const leaveSession = async () => {
    if (!currentSession) return;

    try {
      const currentUser = advancedCollaborationSystem.getCurrentUser();
      if (currentUser) {
        await advancedCollaborationSystem.leaveSession(currentSession.id, currentUser.id);
      }
      await advancedCollaborationSystem.endSession(currentSession.id);
    } catch (error) {
      console.error('Error leaving session:', error);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !currentSession) return;

    try {
      const currentUser = advancedCollaborationSystem.getCurrentUser();
      if (currentUser) {
        await advancedCollaborationSystem.sendChatMessage(
          currentSession.id,
          currentUser.id,
          newMessage
        );
        setNewMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const createPoll = async () => {
    if (!newPollQuestion.trim() || !currentSession) return;

    try {
      await advancedCollaborationSystem.createPoll(
        currentSession.id,
        newPollQuestion,
        newPollOptions.filter(opt => opt.trim())
      );
      setNewPollQuestion('');
      setNewPollOptions(['']);
    } catch (error) {
      console.error('Error creating poll:', error);
    }
  };

  const addPollOption = () => {
    setNewPollOptions(prev => [...prev, '']);
  };

  const updatePollOption = (index: number, value: string) => {
    setNewPollOptions(prev => prev.map((opt, i) => i === index ? value : opt));
  };

  const removePollOption = (index: number) => {
    setNewPollOptions(prev => prev.filter((_, i) => i !== index));
  };

  const toggleVideo = () => {
    setIsVideoEnabled(!isVideoEnabled);
  };

  const toggleAudio = () => {
    setIsAudioEnabled(!isAudioEnabled);
  };

  const toggleScreenSharing = () => {
    setIsScreenSharing(!isScreenSharing);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const renderSessionsTab = () => (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Collaboration Sessions</h3>
        <button
          onClick={() => setShowCreateSession(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus size={18} />
          <span>Create Session</span>
        </button>
      </div>

      <div className="grid gap-4">
        {sessions.map(session => (
          <div key={session.id} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium">{session.name}</h4>
                <p className="text-sm text-gray-600 capitalize">{session.type}</p>
                <p className="text-xs text-gray-500">
                  {session.participants.length} participants
                </p>
              </div>
              <div className="flex space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  session.status === 'active' ? 'bg-green-100 text-green-800' :
                  session.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {session.status}
                </span>
                {session.status === 'scheduled' && (
                  <button
                    onClick={() => joinSession(session.id)}
                    className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
                  >
                    Join
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderActiveSessionTab = () => {
    if (!currentSession) {
      return (
        <div className="p-4 text-center">
          <p className="text-gray-600">No active session</p>
        </div>
      );
    }

    return (
      <div className="flex flex-col h-full">
        {/* Session Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{currentSession.name}</h3>
              <p className="text-sm text-gray-600 capitalize">{currentSession.type}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">
                {users.length} participants
              </span>
              <button
                onClick={leaveSession}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
              >
                Leave
              </button>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={toggleVideo}
              className={`p-2 rounded-full transition-colors ${
                isVideoEnabled ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {isVideoEnabled ? <Video size={20} /> : <VideoOff size={20} />}
            </button>
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full transition-colors ${
                isAudioEnabled ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {isAudioEnabled ? <Mic size={20} /> : <MicOff size={20} />}
            </button>
            <button
              onClick={toggleScreenSharing}
              className={`p-2 rounded-full transition-colors ${
                isScreenSharing ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              <Share size={20} />
            </button>
            <button
              onClick={toggleRecording}
              className={`p-2 rounded-full transition-colors ${
                isRecording ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {isRecording ? <Square size={20} /> : <Play size={20} />}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Chat Panel */}
          <div className="w-1/3 border-r border-gray-200 flex flex-col">
            <div className="p-3 border-b border-gray-200">
              <h4 className="font-medium">Chat</h4>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {chatMessages.map(message => (
                <div key={message.id} className="text-sm">
                  <span className="font-medium text-blue-600">{message.userName}:</span>
                  <span className="ml-2">{message.content}</span>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div className="p-3 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={sendMessage}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-4">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Participants */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-3">Participants</h4>
                <div className="space-y-2">
                  {users.map(user => (
                    <div key={user.id} className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${
                        user.status === 'online' ? 'bg-green-500' :
                        user.status === 'away' ? 'bg-yellow-500' :
                        user.status === 'busy' ? 'bg-red-500' :
                        'bg-gray-500'
                      }`} />
                      <span className="text-sm">{user.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Polls */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-3">Polls</h4>
                <div className="space-y-3">
                  {polls.map(poll => (
                    <div key={poll.id} className="text-sm">
                      <p className="font-medium">{poll.question}</p>
                      <div className="mt-2 space-y-1">
                        {poll.options.map(option => (
                          <div key={option.id} className="flex justify-between">
                            <span>{option.text}</span>
                            <span className="text-gray-600">{option.votes}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shared Files */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-3">Shared Files</h4>
                <div className="space-y-2">
                  {sharedFiles.map(file => (
                    <div key={file.id} className="flex items-center space-x-2 text-sm">
                      <FileText size={16} />
                      <span>{file.name}</span>
                      <span className="text-gray-500">({Math.round(file.size / 1024)}KB)</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Whiteboard */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-3">Whiteboard</h4>
                <div className="text-sm text-gray-600">
                  {whiteboardElements.length} elements
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCreateSessionModal = () => (
    <AnimatePresence>
      {showCreateSession && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg p-6 w-full max-w-md"
          >
            <h3 className="text-lg font-semibold mb-4">Create New Session</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Session Name</label>
                <input
                  type="text"
                  value={sessionName}
                  onChange={(e) => setSessionName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter session name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Session Type</label>
                <select
                  value={sessionType}
                  onChange={(e) => setSessionType(e.target.value as CollaborationSession['type'])}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="meeting">Meeting</option>
                  <option value="workshop">Workshop</option>
                  <option value="presentation">Presentation</option>
                  <option value="brainstorm">Brainstorm</option>
                  <option value="review">Review</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowCreateSession(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={createSession}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Create
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'sessions':
        return renderSessionsTab();
      case 'active':
        return renderActiveSessionTab();
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center p-4"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-lg shadow-xl w-full max-w-6xl h-full max-h-[90vh] flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Collaboration Dashboard</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Close dashboard"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex border-b border-gray-200">
              <button
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium ${
                  activeTab === 'sessions' 
                    ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                } transition-colors duration-200`}
                onClick={() => setActiveTab('sessions')}
              >
                <Users size={18} />
                <span>Sessions</span>
              </button>
              <button
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium ${
                  activeTab === 'active' 
                    ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                } transition-colors duration-200`}
                onClick={() => setActiveTab('active')}
              >
                <Video size={18} />
                <span>Active Session</span>
              </button>
            </div>
            
            <div className="flex-1 overflow-hidden">
              {renderContent()}
            </div>
          </motion.div>
          
          {renderCreateSessionModal()}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdvancedCollaborationDashboard;
