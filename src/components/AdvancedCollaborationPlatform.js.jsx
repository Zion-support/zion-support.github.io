import React, { useState, useEffect } from 'react';
import { 
  Users, 
  MessageSquare, 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  PhoneOff, 
  ScreenShare, 
  Square,
  Hand,
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

export function AdvancedCollaborationPlatform() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('chat');

  const [participants] = useState([
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Host',
      isOnline: true,
      isMuted: false,
      isVideoOff: false,
      hasRaisedHand: false,
      isScreenSharing: false
    },
    {
      id: '2',
      name: 'Mike Chen',
      role: 'Participant',
      isOnline: true,
      isMuted: true,
      isVideoOff: false,
      hasRaisedHand: false,
      isScreenSharing: false
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'Participant',
      isOnline: true,
      isMuted: false,
      isVideoOff: true,
      hasRaisedHand: true,
      isScreenSharing: false
    }
  ]);

  const [chatMessages] = useState([
    {
      id: '1',
      senderId: '1',
      senderName: 'Sarah Johnson',
      message: 'Welcome everyone to our Q4 review meeting!',
      timestamp: new Date(Date.now() - 300000).toISOString(),
      type: 'text',
      reactions: []
    },
    {
      id: '2',
      senderId: '2',
      senderName: 'Mike Chen',
      message: 'Thanks Sarah, looking forward to reviewing our progress.',
      timestamp: new Date(Date.now() - 240000).toISOString(),
      type: 'text',
      reactions: []
    },
    {
      id: '3',
      senderId: '3',
      senderName: 'Emily Rodriguez',
      message: 'I have some questions about the budget allocation.',
      timestamp: new Date(Date.now() - 180000).toISOString(),
      type: 'text',
      reactions: []
    }
  ]);

  const [documents] = useState([
    {
      id: '1',
      name: 'Q4 Financial Report.pdf',
      type: 'pdf',
      size: '2.4 MB',
      lastModified: '2024-01-15'
    },
    {
      id: '2',
      name: 'Marketing Strategy 2024.pptx',
      type: 'presentation',
      size: '8.1 MB',
      lastModified: '2024-01-14'
    },
    {
      id: '3',
      name: 'Customer Feedback Analysis.xlsx',
      type: 'spreadsheet',
      size: '1.2 MB',
      lastModified: '2024-01-13'
    }
  ]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleVideo = () => {
    setIsVideoOff(!isVideoOff);
  };

  const toggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const sendChatMessage = () => {
    if (chatMessage.trim()) {
      // In a real app, this would send the message to the server
      console.log('Sending message:', chatMessage);
      setChatMessage('');
    }
  };

  const raiseHand = () => {
    // In a real app, this would notify other participants
    console.log('Hand raised');
  };

  const filteredDocuments = documents.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-40"
        title="Open Collaboration Platform"
      >
        <Users className="w-6 h-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50">
        <div className="flex items-center gap-2 p-3">
          <Users className="w-5 h-5 text-green-600" />
          <span className="text-sm font-medium text-gray-900 dark:text-white">Collaboration</span>
          <button
            onClick={() => setIsMinimized(false)}
            className="ml-auto p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 ${
      isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[1400px] h-[900px]'
    }`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 flex items-center justify-between">
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
      <div className="bg-gray-50 dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Q4 2024 Review Meeting</h3>
            <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm font-medium">
              Live
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {participants.length} participants
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={raiseHand}
              className="p-3 rounded-full transition-colors bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
              title="Raise Hand"
            >
              <Hand className="w-4 h-4" />
            </button>
            <button
              onClick={toggleMute}
              className={`p-3 rounded-full transition-colors ${
                isMuted 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
              }`}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleVideo}
              className={`p-3 rounded-full transition-colors ${
                isVideoOff 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
              }`}
              title={isVideoOff ? 'Turn on video' : 'Turn off video'}
            >
              {isVideoOff ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleScreenShare}
              className={`p-3 rounded-full transition-colors ${
                isScreenSharing 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
              }`}
              title={isScreenSharing ? 'Stop sharing' : 'Share screen'}
            >
              {isScreenSharing ? <Square className="w-4 h-4" /> : <ScreenShare className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleRecording}
              className={`p-3 rounded-full transition-colors ${
                isRecording 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
              }`}
              title={isRecording ? 'Stop recording' : 'Start recording'}
            >
              <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-white' : 'bg-gray-700 dark:bg-gray-300'}`} />
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
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-full flex items-center justify-center">
            <div className="text-center">
              <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">Video meeting area</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                {participants.length} participants connected
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 border-l border-gray-200 dark:border-gray-700">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === 'chat'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Chat
            </button>
            <button
              onClick={() => setActiveTab('participants')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === 'participants'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Users className="w-4 h-4 inline mr-2" />
              Participants
            </button>
            <button
              onClick={() => setActiveTab('files')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === 'files'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Files
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4 h-[calc(100%-60px)] overflow-y-auto">
            {activeTab === 'chat' && (
              <div className="space-y-4">
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {chatMessages.map(message => (
                    <div key={message.id} className="flex gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {message.senderName.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900 dark:text-white text-sm">
                            {message.senderName}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(message.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          {message.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                  />
                  <button
                    onClick={sendChatMessage}
                    className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'participants' && (
              <div className="space-y-3">
                {participants.map(participant => (
                  <div key={participant.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {participant.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900 dark:text-white text-sm">
                          {participant.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {participant.role}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {participant.isMuted && <MicOff className="w-3 h-3 text-red-500" />}
                        {participant.isVideoOff && <VideoOff className="w-3 h-3 text-red-500" />}
                        {participant.hasRaisedHand && <Hand className="w-3 h-3 text-yellow-500" />}
                        {participant.isScreenSharing && <ScreenShare className="w-3 h-3 text-blue-500" />}
                      </div>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${participant.isOnline ? 'bg-green-500' : 'bg-gray-400'}`} />
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'files' && (
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search files..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                  />
                </div>
                <div className="space-y-2">
                  {filteredDocuments.map(doc => (
                    <div key={doc.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                      <FileText className="w-5 h-5 text-gray-500" />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white text-sm">
                          {doc.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {doc.size} • {doc.lastModified}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
