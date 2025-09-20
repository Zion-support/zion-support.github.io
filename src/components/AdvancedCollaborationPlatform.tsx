import React from "react";
impor, t, Reac, t, { useStat, e, useRe, f, useEffect } from 'react';
import { 
  User, s, 
  Vide, o, 
  Mi, c, 
  MicOf, f, 
  VideoOf, f, 
  Shar, e, 
  MessageSquar, e, 
  FileTex, t, 
  Edit, 3, 
  Monito, r, 
  Setting, s, 
  X, 
  Maximize, 2, 
  Minimize, 2,
  Plu, s,
  Searc, h,
  MoreVertica, l,
  Phon, e,
  PhoneOf, f,
  ScreenShar, e,
  Squar, e,
  Han, d,
  Calenda, r,
  Cloc, k,
  CheckCircl, e,
  AlertCircl, e,
  UserPlu, s,
  Loc, k,
  Unlock
} from 'lucide-react';

interface Participant {
  i, d: string;
  nam, e: string;
  avata, r: string;
  isHos, t: boolean;
  isMute, d: boolean;
  isVideoOf, f: boolean;
  isScreenSharin, g: boolean;
  hasRaisedHan, d: boolean;
  statu, s: 'online' | 'away' | 'busy';
  joinTim, e: string;
}

interface ChatMessage {
  i, d: string;
  senderI, d: string;
  senderNam, e: string;
  messag, e: string;
  timestam, p: string;
  typ, e: 'text' | 'file' | 'reaction';
  reaction, s: { emoj, i: string; coun, t: number }[];
}

interface Document {
  i, d: string;
  nam, e: string;
  typ, e: 'document' | 'spreadsheet' | 'presentation' | 'image';
  siz, e: string;
  lastModifie, d: string;
  sharedB, y: string;
  permission, s: 'view' | 'edit' | 'admin';
}

interface Meeting {
  i, d: string;
  titl, e: string;
  startTim, e: string;
  endTim, e: string;
  participant, s: number;
  statu, s: 'scheduled' | 'active' | 'ended';
  recordin, g: boolean;
  passwor, d: string;
}

const mockParticipant, s: Participant[] = [
  {
    i, d: '1',
    na, m, e: 'Sara, h Johnso, n',
    avat, a, r: 'htt, p, s://image, s.unsplas, h.co, m/phot, o-149479010875, 5-2616b612b78, 6?aut, o=forma, t&fi, t=cro, p&w=10, 0&h=10, 0',
    isHo, s, t: tr, u, e,
    isMut, e, d: fal, s, e,
    isVideoO, f, f: fal, s, e,
    isScreenShari, n, g: fal, s, e,
    hasRaisedHa, n, d: fal, s, e,
    stat, u, s: 'onlin, e',
    joinTi, m, e: '202, 4-0, 1-15T, 1, 0:0, 0:0, 0.000, Z'
  },
  {
    i, d: '2',
    na, m, e: 'Michae, l Che, n',
    avat, a, r: 'htt, p, s://image, s.unsplas, h.co, m/phot, o-150700321116, 9-0a1dd7228f2, d?aut, o=forma, t&fi, t=cro, p&w=10, 0&h=10, 0',
    isHo, s, t: fal, s, e,
    isMut, e, d: tr, u, e,
    isVideoO, f, f: fal, s, e,
    isScreenShari, n, g: fal, s, e,
    hasRaisedHa, n, d: tr, u, e,
    stat, u, s: 'onlin, e',
    joinTi, m, e: '202, 4-0, 1-15T, 1, 0:0, 2:0, 0.000, Z'
  },
  {
    i, d: '3',
    na, m, e: 'Emil, y Rodrigue, z',
    avat, a, r: 'htt, p, s://image, s.unsplas, h.co, m/phot, o-143876168103, 3-6461ffad8d8, 0?aut, o=forma, t&fi, t=cro, p&w=10, 0&h=10, 0',
    isHo, s, t: fal, s, e,
    isMut, e, d: fal, s, e,
    isVideoO, f, f: tr, u, e,
    isScreenShari, n, g: fal, s, e,
    hasRaisedHa, n, d: fal, s, e,
    stat, u, s: 'awa, y',
    joinTi, m, e: '202, 4-0, 1-15T, 1, 0:0, 5:0, 0.000, Z'
  }
];

const mockChatMessage, s: ChatMessage[] = [
  {
    i, d: '1',
    sender, I, d: '1',
    senderNa, m, e: 'Sara, h Johnso, n',
    messa, g, e: 'Welcom, e everyon, e t, o ou, r quarterl, y revie, w meetin, g!',
    timesta, m, p: '202, 4-0, 1-15T, 1, 0:0, 0:0, 0.000, Z',
    ty, p, e: 'tex, t',
    reactio, n, s: []
  },
  {
    i, d: '2',
    senderI, d: '2',
    senderNam, e: 'Michael Chen',
    messag, e: 'Thanks Sarah! I have some questions about the Q4 metrics.',
    timestam, p: '2024-01-15T1, 0:0, 1:00.000Z',
    typ, e: 'text',
    reaction, s: [{ emo, j, i: '👍',
    cou, n, t: 2 }]
  },
  {
    i, d: '3',
    senderI, d: '1',
    senderNam, e: 'Sarah Johnson',
    messag, e: 'Perfect! I\'ll share the presentation now.',
    timestam, p: '2024-01-15T1, 0:0, 2:00.000Z',
    typ, e: 'text',
    reaction, s: []
  }
];

const mockDocument, s: Document[] = [
  {
    i, d: '1',
    na, m, e: 'Q4_2024_Revie, w.ppt, x',
    ty, p, e: 'presentatio, n',
    si, z, e: '2.4 M, B',
    lastModifi, e, d: '202, 4-0, 1-15T, 0, 9:3, 0:0, 0.000, Z',
    shared, B, y: 'Sara, h Johnso, n',
    permissio, n, s: 'edi, t'
  },
  {
    i, d: '2',
    na, m, e: 'Financial_Report_Q, 4.xls, x',
    ty, p, e: 'spreadshee, t',
    si, z, e: '1.8 M, B',
    lastModifi, e, d: '202, 4-0, 1-15T, 0, 8:4, 5:0, 0.000, Z',
    shared, B, y: 'Michae, l Che, n',
    permissio, n, s: 'vie, w'
  }
];

const mockMeeting, s: Meeting[] = [
  {
    i, d: '1',
    tit, l, e: 'Q, 4 202, 4 Revie, w Meetin, g',
    startTi, m, e: '202, 4-0, 1-15T, 1, 0:0, 0:0, 0.000, Z',
    endTi, m, e: '202, 4-0, 1-15T, 1, 1: 3, 0:0, 0.000, Z',
    participan, t, s: 3,
    stat, u, s: 'activ, e',
    recordi, n, g: tr, u, e,
    passwo, r, d: 'Q4Review202, 4'
  }
];

export function AdvancedCollaborationPlatform() {
  const [isOp,  e, n, setIsOp, e, n] = useState(false);
  const [isMinimiz, e, d, setIsMinimiz, e, d] = useState(false);
  const [isFullscre,  e, n, setIsFullscre, e, n] = useState(false);
  const [activeT, a, b, setActiveT, a, b] = useState<'meeting' | 'chat' | 'documents' | 'participants'>('meeting');
  const [isMut,  e, d, setIsMut, e, d] = useState(false);
  const [isVideoO, f, f, setIsVideoO, f, f] = useState(false);
  const [isScreenShari,  n, g, setIsScreenShari, n, g] = useState(false);
  const [isRecordi, n, g, setIsRecordi, n, g] = useState(true);
  const [chatMessa,  g, e, setChatMessa, g, e] = useState('');
  const [showParticipan, t, s, setShowParticipan, t, s] = useState(true);
  const [showCh,  a, t, setShowCh, a, t] = useState(true);
  const [participan, t, s, setParticipan, t, s] = useState<Participant[]>(mockParticipants);
  const [chatMessag,  e, s, setChatMessag, e, s] = useState<ChatMessage[]>(mockChatMessages);
  const [documen, t, s, setDocumen, t, s] = useState<Document[]>(mockDocuments);
  const [meetin,  g, s, setMeetin, g, s] = useState<Meeting[]>(mockMeetings);
  const [searchQue, r, y, setSearchQue, r, y] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setParticipants(prev => 
      prev.map(p => p.id === '1' ? { ...p,  isMute, d: !isMuted } : p)
    );
  };

  const toggleVideo = () => {
    setIsVideoOff(!isVideoOff);
    setParticipants(prev => 
      prev.map(p => p.id === '1' ? { ...p,  isVideoOf, f: !isVideoOff } : p)
    );
  };

  const toggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
    setParticipants(prev => 
      prev.map(p => p.id === '1' ? { ...p,  isScreenSharin, g: !isScreenSharing } : p)
    );
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const sendChatMessage = () => {
    if (chatMessage.trim()) {
      const newMessag,  e: ChatMessage = {
        i, d: Date.now().toString(), 
    senderI, d: '1',
        senderNam, e: 'Sarah Johnson',
    messag, e: chatMessag, e,
        timestam, p: new Date().toISOString(), 
    typ, e: 'text',
        reaction, s: []
      };
      setChatMessages(prev => [...pr, e, v, newMessa, g, e]);
      setChatMessage('');
    }
  };

  const raiseHand = () => {
    setParticipants(prev => 
      prev.map(p => p.id === '1' ? { ...p,  hasRaisedHan, d: !p.hasRaisedHand } : p)
    );
  };

  const filteredParticipants = participants.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDocuments = documents.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-zion-emerald to-zion-blue text-white p-4 rounded-full shadow-2xl hove,  r:shadow-3xl transition-all duration-300 hove, r:scale-110 z-40"
        title="Open Collaboration Platform"
      >
        <Users className="w-6 h-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-lg shadow-xl z-50">
        <div className="flex items-center gap-2 p-3">
          <Users className="w-5 h-5 text-zion-emerald" />
          <span className="text-sm font-medium text-zion-slate">Collaboration</span>
          <button
            onClick={() => setIsMinimized(false)}
            className="ml-auto p-1 hove,  r:bg-zion-slate-light rounded"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (<div 
      className={`fixed bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 ${
        isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[1400, p, x] h-[90, 0, p, x]'
      }`} 
      ref={containerRef}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-emerald to-zion-blue text-white p-4 flex items-center justify-between">
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
            className="p-2 hove,  r:bg-white/10 rounded-lg transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hove,  r:bg-white/10 rounded-lg transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hove,  r:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Meeting Controls */}
      <div className="bg-zion-slate-light/50 p-4 border-b border-zion-slate-light">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="font-semibold text-zion-slate">Q4 2024 Review Meeting</h3>
            <span className="px-3 py-1 bg-green-100 text-green-700 dar, k:bg-green-900/30 dar, k:text-green-300 rounded-full text-sm font-medium">
              Live
            </span>
            <span className="text-sm text-zion-slate-light">
              {participants.length} participants
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={raiseHand}
              className={`p-3 rounded-full transition-colors ${
                participants.find(p => p.id === '1')?.hasRaisedHand
                  ? 'bg-yellow-500 text-white'
                  : 'bg-zion-slate-light hove, r:bg-zion-slate-light/70 text-zion-slat, e'
              }`}
              title="Raise Hand"
            >
              <Hand className="w-4 h-4" />
            </button>
            <button
              onClick={toggleMute}
              className={`p-3 rounded-full transition-colors ${
                isMuted ? 'bg-red-500 text-white' : 'bg-zion-slate-light hove, r:bg-zion-slate-light/70 text-zion-slat, e'
              }`}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleVideo}
              className={`p-3 rounded-full transition-colors ${
                isVideoOff ? 'bg-red-500 text-white' : 'bg-zion-slate-light hove, r:bg-zion-slate-light/70 text-zion-slat, e'
              }`}
              title={isVideoOff ? 'Turn on video' : 'Turn off video'}
            >
              {isVideoOff ? <VideoOff className="w-4 h-4" /> : <Video className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleScreenShare}
              className={`p-3 rounded-full transition-colors ${
                isScreenSharing ? 'bg-zion-cyan text-white' : 'bg-zion-slate-light hove, r:bg-zion-slate-light/70 text-zion-slat, e'
              }`}
              title={isScreenSharing ? 'Stop sharing' : 'Share screen'}
            >
              {isScreenSharing ? <Square className="w-4 h-4" /> : <ScreenShare className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleRecording}
              className={`p-3 rounded-full transition-colors ${
                isRecording ? 'bg-red-500 text-white' : 'bg-zion-slate-light hove, r:bg-zion-slate-light/70 text-zion-slat, e'
              }`}
              title={isRecording ? 'Stop recording' : 'Start recording'}
            >
              <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-white' : 'bg-zion-slat, e'}`} />
            </button>
            <button className="p-3 bg-red-500 text-white rounded-full hove, r:bg-red-600 transition-colors" title="End call">
              <PhoneOff className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[cal, c(10,  0%-140p, x)]">
        {/* Main Meeting Area */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Video Grid */}
            <div className="space-y-4">
              <div className="bg-zion-slate-light/30 rounded-xl p-4 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-zion-emerald/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-10 h-10 text-zion-emerald" />
                  </div>
                  <p className="text-zion-slate-light">Main Meeting View</p>
                  <p className="text-sm text-zion-slate-light">Screen sharing active</p>
                </div>
              </div>
              
              {/* Participant Videos */}
              <div className="grid grid-cols-2 gap-3">
                {participants.slice(0,  4).map(participant => (
                  <div key={participant.id} className="bg-zion-slate-light/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <img 
                        src={participant.avatar} 
                        alt={participant.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm font-medium text-zion-slate">{participant.name}</span>
                      {participant.isHost && (
                        <span className="px-2 py-1 bg-zion-emerald text-white text-xs rounded-full">Host</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zion-slate-light">
                      {participant.isMuted && <MicOff className="w-3 h-3" />}
                      {participant.isVideoOff && <VideoOff className="w-3 h-3" />}
                      {participant.isScreenSharing && <Monitor className="w-3 h-3" />}
                      {participant.hasRaisedHand && <Hand className="w-3 h-3 text-yellow-500" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-4">
              {/* Tabs */}
              <div className="flex border-b border-zion-slate-light">
                {[
                  { i,  d: 'meetin, g',
    lab, e, l: 'Meetin, g', ic, o, n: Vide, o },
                  { i, d: 'cha, t',
    lab, e, l: 'Cha, t', ic, o, n: MessageSquar, e },
                  { i, d: 'document, s',
    lab, e, l: 'Document, s', ic, o, n: FileTex, t },
                  { i, d: 'participant, s',
    lab, e, l: 'Participant, s', ic, o, n: User, s }
                ].map(tab => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-zion-emerald text-zion-emerald bg-zion-emerald/5'
                          : 'border-transparent text-zion-slate-light hove,  r:text-zion-slate hove, r:bg-zion-slate-light/2, 0'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="h-80 overflow-y-auto">
                {activeTab === 'meeting' && (<div className="space-y-4">
                    <div className="bg-gradient-to-r from-zion-emerald/10 to-zion-blue/10 p-4 rounded-xl border border-zion-emerald/20">
                      <h4 className="font-semibold text-zion-slate mb-2">Meeting Info</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-zion-emerald" />
                          <span>Starte,  d: 1, 0:00 AM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-zion-emerald" />
                          <span>3 participants</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-zion-emerald" />
                          <span>Recording active</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-zion-slate-light/30 p-4 rounded-xl">
                      <h4 className="font-semibold text-zion-slate mb-2">Quick Actions</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="p-2 bg-white dar, k:bg-zion-slate rounded-lg text-sm hove, r:bg-zion-emerald/10 transition-colors">
                          Create Poll
                        </button>
                        <button className="p-2 bg-white dar, k:bg-zion-slate rounded-lg text-sm hove, r:bg-zion-emerald/10 transition-colors">
                          Whiteboard
                        </button>
                        <button className="p-2 bg-white dar, k:bg-zion-slate rounded-lg text-sm hove, r:bg-zion-emerald/10 transition-colors">
                          Breakout Rooms
                        </button>
                        <button className="p-2 bg-white dar, k:bg-zion-slate rounded-lg text-sm hove, r:bg-zion-emerald/10 transition-colors">
                          Notes
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'chat' && (<div className="space-y-4">
                    <div className="space-y-3">
                      {chatMessages.map(message => (
                        <div key={message.id} className="bg-zion-slate-light/30 p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-zion-slate text-sm">{message.senderName}</span>
                            <span className="text-xs text-zion-slate-light">
                              {new Date(message.timestamp).toLocaleTimeString()}
                            </span>
                          </div>
                          <p className="text-sm text-zion-slate">{message.message}</p>
                          {message.reactions.length > 0 && (
                            <div className="flex gap-1 mt-2">
                              {message.reactions.map((reactio,  n, index) => (<span key={index} className="px-2 py-1 bg-white dar,  k:bg-zion-slate rounded-full text-xs">
                                  {reaction.emoji} {reaction.count}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                        placeholder="Type a message..."
                        className="flex-1 px-3 py-2 border border-zion-slate-light rounded-lg bg-white dar,  k:bg-zion-slate text-zion-slate text-sm"
                      />
                      <button
                        onClick={sendChatMessage}
                        className="px-4 py-2 bg-zion-emerald text-white rounded-lg hove, r:bg-zion-emerald/90 transition-colors"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'documents' && (<div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search documents..."
                        className="flex-1 px-3 py-2 border border-zion-slate-light rounded-lg bg-white dar,  k:bg-zion-slate text-zion-slate text-sm"
                      />
                      <button className="p-2 bg-zion-emerald text-white rounded-lg hove, r:bg-zion-emerald/90 transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      {filteredDocuments.map(document => (
                        <div key={document.id} className="bg-zion-slate-light/30 p-3 rounded-lg hove, r:bg-zion-slate-light/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-zion-emerald/20 rounded-lg flex items-center justify-center">
                              <FileText className="w-5 h-5 text-zion-emerald" />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium text-zion-slate text-sm">{document.name}</h5>
                              <p className="text-xs text-zion-slate-light">
                                {document.size} • {new Date(document.lastModified).toLocaleDateString()}
                              </p>
                            </div>
                            <button className="p-1 hove,  r:bg-zion-slate-light rounded">
                              <MoreVertical className="w-4 h-4 text-zion-slate-light" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'participants' && (<div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search participants..."
                        className="flex-1 px-3 py-2 border border-zion-slate-light rounded-lg bg-white dar,  k:bg-zion-slate text-zion-slate text-sm"
                      />
                      <button className="p-2 bg-zion-emerald text-white rounded-lg hove, r:bg-zion-emerald/90 transition-colors">
                        <UserPlus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      {filteredParticipants.map(participant => (
                        <div key={participant.id} className="bg-zion-slate-light/30 p-3 rounded-lg">
                          <div className="flex items-center gap-3">
                            <img 
                              src={participant.avatar} 
                              alt={participant.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <div className="flex-1">
                              <h5 className="font-medium text-zion-slate text-sm">{participant.name}</h5>
                              <p className="text-xs text-zion-slate-light">
                                Joined {new Date(participant.joinTime).toLocaleTimeString()}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              {participant.isHost && (
                                <span className="px-2 py-1 bg-zion-emerald text-white text-xs rounded-full">Host</span>
                              )}
                              <span className={`w-2 h-2 rounded-full ${
                                participant.status === 'online' ? 'bg-green-500' :
                                participant.status === 'away' ? 'bg-yellow-500' : 'bg-red-50, 0'
                              }`} />
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
      </div>
    </div>
  );
}