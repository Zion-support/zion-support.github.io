import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  PhoneOff, 
  Hand, 
  ScreenShare, 
  Square,
  FileText,
  Search,
  Send,
  X,
  Maximize2,
  Minimize2,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const mockParticipants = [
  { id: '1', name: 'Sarah Johnson', role: 'Project Manager', isOnline: true, hasRaisedHand: false, isSpeaking: true },
  { id: '2', name: 'Mike Chen', role: 'Developer', isOnline: true, hasRaisedHand: false, isSpeaking: false },
  { id: '3', name: 'Emily Davis', role: 'Designer', isOnline: true, hasRaisedHand: true, isSpeaking: false },
  { id: '4', name: 'Alex Thompson', role: 'QA Engineer', isOnline: false, hasRaisedHand: false, isSpeaking: false }
];

const mockDocuments = [
  { id: '1', name: 'Q4_Strategy_2024.pdf', type: 'pdf', size: '2.4 MB', lastModified: '2024-01-15' },
  { id: '2', name: 'Budget_Planning.xlsx', type: 'excel', size: '1.8 MB', lastModified: '2024-01-14' },
  { id: '3', name: 'Design_Mockups.fig', type: 'figma', size: '5.2 MB', lastModified: '2024-01-13' },
  { id: '4', name: 'Meeting_Notes.docx', type: 'word', size: '0.8 MB', lastModified: '2024-01-15' }
];

const mockTasks = [
  { id: '1', title: 'Review Q4 performance metrics', assignee: 'Sarah Johnson', dueDate: '2024-01-20', status: 'in-progress' },
  { id: '2', title: 'Finalize budget allocation', assignee: 'Mike Chen', dueDate: '2024-01-18', status: 'completed' },
  { id: '3', title: 'Update design system', assignee: 'Emily Davis', dueDate: '2024-01-25', status: 'pending' },
  { id: '4', title: 'Conduct user testing', assignee: 'Alex Thompson', dueDate: '2024-01-22', status: 'in-progress' }
];

export function AdvancedCollaborationPlatform() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState('meeting');
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [participants, setParticipants] = useState(mockParticipants);
  const [documents, setDocuments] = useState(mockDocuments);
  const [tasks, setTasks] = useState(mockTasks);
  const [chatMessages, setChatMessages] = useState([
    {
      id: '1',
      senderId: '2',
      senderName: 'Mike Chen',
      message: 'Great presentation, Sarah!',
      timestamp: new Date(Date.now() - 300000).toISOString(),
      type: 'text',
      reactions: []
    }
  ]);

  const containerRef = useRef(null);

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleVideo = () => setIsVideoOff(!isVideoOff);
  const toggleScreenShare = () => setIsScreenSharing(!isScreenSharing);
  const toggleRecording = () => setIsRecording(!isRecording);

  const sendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        senderId: '1',
        senderName: 'Sarah Johnson',
        message: chatMessage,
        timestamp: new Date().toISOString(),
        type: 'text',
        reactions: []
      };
      setChatMessages(prev => [...prev, newMessage]);
      setChatMessage('');
    }
  };

  const raiseHand = () => {
    setParticipants(prev => prev.map(p => 
      p.id === '1' ? { ...p, hasRaisedHand: !p.hasRaisedHand } : p
    ));
  };

  const filteredDocuments = documents.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Open Collaboration Platform"
      >
        <Users className="w-6 h-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
        <div className="flex items-center gap-2 p-3">
          <Users className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-900">Collaboration</span>
          <button
            onClick={() => setIsMinimized(false)}
            className="ml-auto p-1 hover:bg-gray-200 rounded"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-300 ${
      isMinimized ? 'w-64 h-12' : isFullscreen ? 'w-screen h-screen bottom-0 right-0' : 'w-[1400px] h-[900px]'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6" />
          <div>
            <h2 className="text-lg font-bold">Advanced Collaboration Platform</h2>
            <p className="text-sm opacity-90">Real-time Team Collaboration & Communication</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Meeting Controls */}
      <div className="bg-gray-50 p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="font-semibold text-gray-900">Q4 2024 Review Meeting</h3>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Live
            </span>
            <span className="text-sm text-gray-600">
              {participants.length} participants
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={raiseHand}
              className={`p-3 rounded-full transition-colors ${
                participants.find(p => p.id === '1')?.hasRaisedHand
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
              title="Raise Hand"
            >
              <Hand className="w-4 h-4" />
            </button>
            <button
              onClick={toggleMute}
              className={`p-3 rounded-full transition-colors ${
                isMuted ? 'bg-red-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleVideo}
              className={`p-3 rounded-full transition-colors ${
                isVideoOff ? 'bg-red-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
              title={isVideoOff ? 'Turn on video' : 'Turn off video'}
            >
              {isVideoOff ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleScreenShare}
              className={`p-3 rounded-full transition-colors ${
                isScreenSharing ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
              title={isScreenSharing ? 'Stop sharing' : 'Share screen'}
            >
              {isScreenSharing ? <Square className="w-4 h-4" /> : <ScreenShare className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleRecording}
              className={`p-3 rounded-full transition-colors ${
                isRecording ? 'bg-red-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
              title={isRecording ? 'Stop recording' : 'Start recording'}
            >
              <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-white' : 'bg-gray-700'}`} />
            </button>
            <button
              className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              title="End call"
            >
              <PhoneOff className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100%-140px)]">
        {/* Main Meeting Area */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Video Grid */}
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-xl p-4 h-64 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Video feed will appear here</p>
                </div>
              </div>
              
              {/* Participants */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Participants</h4>
                <div className="space-y-2">
                  {participants.map(participant => (
                    <div key={participant.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                      <div className={`w-3 h-3 rounded-full ${participant.isOnline ? 'bg-green-500' : 'bg-gray-400'}`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">{participant.name}</span>
                          {participant.hasRaisedHand && <Hand className="w-4 h-4 text-yellow-500" />}
                          {participant.isSpeaking && <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />}
                        </div>
                        <span className="text-sm text-gray-600">{participant.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat and Documents */}
            <div className="space-y-4">
              {/* Chat */}
              <div className="bg-white border border-gray-200 rounded-lg h-64 flex flex-col">
                <div className="p-3 border-b border-gray-200">
                  <h4 className="font-semibold text-gray-900">Chat</h4>
                </div>
                
                <div className="flex-1 overflow-y-auto p-3 space-y-3">
                  {chatMessages.map(message => (
                    <div key={message.id} className="flex gap-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {message.senderName.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900">{message.senderName}</span>
                          <span className="text-xs text-gray-500">
                            {new Date(message.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                        <p className="text-gray-700">{message.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-3 border-t border-gray-200">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Type a message..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={sendMessage}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Shared Documents</h4>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search documents..."
                      className="pl-10 pr-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  {filteredDocuments.map(doc => (
                    <div key={doc.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{doc.name}</div>
                        <div className="text-sm text-gray-600">{doc.size} • {doc.lastModified}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 bg-gray-50 border-l border-gray-200 p-4">
          <div className="space-y-6">
            {/* Tasks */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Tasks</h4>
              <div className="space-y-2">
                {tasks.map(task => (
                  <div key={task.id} className="bg-white p-3 rounded-lg border border-gray-200">
                    <div className="flex items-start gap-2">
                      <div className={`w-4 h-4 rounded-full mt-1 ${
                        task.status === 'completed' ? 'bg-green-500' : 
                        task.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300'
                      }`} />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{task.title}</div>
                        <div className="text-sm text-gray-600">{task.assignee}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{task.dueDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Meeting Info */}
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Meeting Info</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Duration: 45 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">4 participants</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">Recording active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
