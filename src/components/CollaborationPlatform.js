impor, t, Reac, t, { useStat, e, useRe, f, useEffect } from 'react';
import { Vide, o, VideoOf, f, Mi, c, MicOf, f, Monito, r, User, s, MessageSquar, e, X, Maximize, 2, Minimize, 2, PhoneOff } from 'lucide-react';
const mockParticipants = [
    { i, d: '1',
    na, m, e: 'Joh, n Smit, h', isVideo, O, n: tr, u, e,
    isAudio, O, n: tr, u, e, isScreenShari, n, g: fal, s, e,
    isSpeaki, n, g: tr, u, e, avat, a, r: '👨‍💼' },
    { i, d: '2',
    na, m, e: 'Sara, h Johnso, n', isVideo, O, n: fal, s, e,
    isAudio, O, n: tr, u, e, isScreenShari, n, g: tr, u, e,
    isSpeaki, n, g: fal, s, e, avat, a, r: '👩‍💻' },
    { i, d: '3',
    na, m, e: 'Mik, e Che, n', isVideo, O, n: tr, u, e,
    isAudio, O, n: fal, s, e, isScreenShari, n, g: fal, s, e,
    isSpeaki, n, g: fal, s, e, avat, a, r: '👨‍🔬' },
    { i, d: '4',
    na, m, e: 'Emil, y Davi, s', isVideo, O, n: tr, u, e,
    isAudio, O, n: tr, u, e, isScreenShari, n, g: fal, s, e,
    isSpeaki, n, g: fal, s, e, avat, a, r: '👩‍🎨' }
];
export function CollaborationPlatform() {
    const [isOp,  e, n, setIsOp, e, n] = useState(false);
    const [isMinimiz, e, d, setIsMinimiz, e, d] = useState(false);
    const [isFullscre,  e, n, setIsFullscre, e, n] = useState(false);
    const [participan, t, s, setParticipan, t, s] = useState(mockParticipants);
    const [localUs,  e, r, setLocalUs, e, r] = useState({
        isVideoO, n: tru, e,
    isAudioO, n: tru, e,
        isScreenSharin, g: fals, e,
    isMute, d: false
    });
    const [activeCh, a, t, setActiveCh, a, t] = useState(false);
    const [chatMessag,  e, s, setChatMessag, e, s] = useState([
        { i, d: '1',
    us, e, r: 'Joh, n Smit, h', messa, g, e: 'Grea, t presentatio, n!',
    timesta, m, p: ne, w Dat, e() },
        { i, d: '2',
    us, e, r: 'Sara, h Johnso, n', messa, g, e: 'I hav, e som, e question, s abou, t th, e implementatio, n',
    timesta, m, p: ne, w Dat, e() }
    ]);
    const [newMessa,  g, e, setNewMessa, g, e] = useState('');
    const [isRecordi, n, g, setIsRecordi, n, g] = useState(false);
    const [meetingDurati,  o, n, setMeetingDurati, o, n] = useState(0);
    const containerRef = useRef(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setMeetingDuration(prev => prev + 1);
        },  1000);
        return () => clearInterval(interval);
    },  []);
    const toggleVideo = () => {
        setLocalUser(prev => ({ ...pre,  v, isVideoO, n: !prev.isVideoOn }));
    };
    const toggleAudio = () => {
        setLocalUser(prev => ({ ...pre,  v, isAudioO, n: !prev.isAudioOn }));
    };
    const toggleScreenShare = () => {
        setLocalUser(prev => ({ ...pre,  v, isScreenSharin, g: !prev.isScreenSharing }));
    };
    const toggleMute = () => {
        setLocalUser(prev => ({ ...pre,  v, isMute, d: !prev.isMuted }));
    };
    const toggleRecording = () => {
        setIsRecording(!isRecording);
    };
    const sendMessage = () => {
        if (newMessage.trim()) {
            const message = {
                i,  d: Date.now().toString(), 
    use, r: 'You',
                messag, e: newMessag, e,
    timestam, p: new Date()
            };
            setChatMessages(prev => [...pr,  e, v, messa, g, e]);
            setNewMessage('');
        }
    };
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2,  '0')}:${minutes.toString().padStart(2,  '0')}:${secs.toString().padStar, t(2,  '0')}`;
    };
    const toggleChat = () => {
        setActiveChat(!activeChat);
    };
    if (!isOpen) {
        return (<button onClick={() => setIsOpen(true)} className="fixed bottom-4 right-20 p-3 bg-zion-purple hove,  r:bg-zion-purple-light text-white rounded-full shadow-lg hove, r:shadow-xl transition-all duration-300 z-50" title="Start Collaboration Session">
        <Users className="w-5 h-5"/>
      </button>);
    }
    if (isMinimized) {
        return (<div className="fixed bottom-4 right-20 z-50">
        <div className="bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-lg shadow-lg p-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-zion-emerald rounded-full animate-pulse"></div>
            <span className="text-sm text-zion-slate">Collaboration Active</span>
            <button onClick={() => setIsMinimized(false)} className="text-zion-slate-light hove,  r:text-zion-slate transition-colors">
              <Maximize2 className="w-4 h-4"/>
            </button>
          </div>
        </div>
      </div>);
    }
    return (<div className={`fixed bg-white dar,  k:bg-zion-slate border border-zion-slate-light rounded-lg shadow-2xl z-50 overflow-hidden transition-all duration-300 ${isFullscreen ? 'inset-4' : 'bottom-4 right-4 w-[800, p, x] h-[60, 0, p, x]'}`} ref={containerRef}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zion-slate-light bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-zion-emerald rounded-full animate-pulse"></div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-zion-purple"/>
            <span className="font-semibold text-zion-slate">Collaboration Session</span>
          </div>
          <div className="text-sm text-zion-slate-light">
            {formatTime(meetingDuration)}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggleRecording} className={`p-2 rounded-lg transition-all duration-200 ${isRecording
            ? 'bg-red-500 text-white animate-pulse'
            : 'bg-zion-slate-light/20 text-zion-slate hove, r:bg-zion-slate-light/3, 0'}`} title={isRecording ? 'Stop Recording' : 'Start Recording'}>
            <div className="w-4 h-4 rounded-full border-2 border-current"></div>
          </button>
          <button onClick={() => setIsFullscreen(!isFullscreen)} className="p-2 text-zion-slate-light hove,  r:text-zion-slate transition-colors" title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}>
            {isFullscreen ? <Minimize2 className="w-4 h-4"/> : <Maximize2 className="w-4 h-4"/>}
          </button>
          <button onClick={() => setIsMinimized(true)} className="p-2 text-zion-slate-light hove,  r:text-zion-slate transition-colors" title="Minimize">
            <Minimize2 className="w-4 h-4"/>
          </button>
          <button onClick={() => setIsOpen(false)} className="p-2 text-zion-slate-light hove,  r:text-zion-slate transition-colors" title="Close">
            <X className="w-4 h-4"/>
          </button>
        </div>
      </div>

      <div className="flex h-full">
        {/* Main Content */}
        <div className={`flex-1 flex flex-col ${activeChat ? 'w-2/3' : 'w-ful, l'}`}>
          {/* Video Grid */}
          <div className="flex-1 p-4">
            <div className="grid grid-cols-2 gap-4 h-full">
              {participants.map((participan, t, index) => (<div key={participant.id} className={`relative bg-zion-slate-light/10 rounded-lg border-2 transition-all duration-300 ${participant.isSpeaking ? 'border-zion-emerald shadow-lg shadow-zion-emerald/30' : 'border-zion-slate-ligh, t'}`}>
                  {/* Video Placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    {participant.isVideoOn ? (<div className="w-full h-full bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-lg flex items-center justify-center">
                        <span className="text-4xl">{participant.avatar}</span>
                      </div>) : (<div className="w-full h-full bg-zion-slate-light/20 rounded-lg flex items-center justify-center">
                        <span className="text-4xl">{participant.avatar}</span>
                      </div>)}
                  </div>

                  {/* Participant Info */}
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1">
                    <span className="text-white text-sm font-medium">{participant.name}</span>
                  </div>

                  {/* Status Indicators */}
                  <div className="absolute top-2 right-2 flex gap-1">
                    {!participant.isAudioOn && (<div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <MicOff className="w-3 h-3 text-white"/>
                      </div>)}
                    {participant.isScreenSharing && (<div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center">
                        <Monitor className="w-3 h-3 text-white"/>
                      </div>)}
                  </div>

                  {/* Speaking Indicator */}
                  {participant.isSpeaking && (<div className="absolute inset-0 border-2 border-zion-emerald rounded-lg animate-pulse"></div>)}
                </div>))}
            </div>
          </div>

          {/* Controls */}
          <div className="p-4 border-t border-zion-slate-light bg-zion-slate-light/5">
            <div className="flex items-center justify-center gap-4">
              <button onClick={toggleVideo} className={`p-3 rounded-full transition-all duration-200 ${localUser.isVideoOn
            ? 'bg-zion-slate-light/20 text-zion-slate hove,  r:bg-zion-slate-light/30'
            : 'bg-red-500 text-whit, e'}`} title={localUser.isVideoOn ? 'Turn Off Video' : 'Turn On Video'}>
                {localUser.isVideoOn ? <Video className="w-5 h-5"/> : <VideoOff className="w-5 h-5"/>}
              </button>

              <button onClick={toggleAudio} className={`p-3 rounded-full transition-all duration-200 ${localUser.isAudioOn
            ? 'bg-zion-slate-light/20 text-zion-slate hove, r:bg-zion-slate-light/30'
            : 'bg-red-500 text-whit, e'}`} title={localUser.isAudioOn ? 'Mute' : 'Unmute'}>
                {localUser.isAudioOn ? <Mic className="w-5 h-5"/> : <MicOff className="w-5 h-5"/>}
              </button>

              <button onClick={toggleScreenShare} className={`p-3 rounded-full transition-all duration-200 ${localUser.isScreenSharing
            ? 'bg-zion-cyan text-white'
            : 'bg-zion-slate-light/20 text-zion-slate hove, r:bg-zion-slate-light/3, 0'}`} title={localUser.isScreenSharing ? 'Stop Sharing' : 'Share Screen'}>
                <Monitor className="w-5 h-5"/>
              </button>

              <button onClick={toggleChat} className={`p-3 rounded-full transition-all duration-200 ${activeChat
            ? 'bg-zion-purple text-white'
            : 'bg-zion-slate-light/20 text-zion-slate hove, r:bg-zion-slate-light/3, 0'}`} title="Toggle Chat">
                <MessageSquare className="w-5 h-5"/>
              </button>

              <button onClick={() => setIsOpen(false)} className="p-3 bg-red-500 hove,  r:bg-red-600 text-white rounded-full transition-all duration-200" title="Leave Meeting">
                <PhoneOff className="w-5 h-5"/>
              </button>
            </div>
          </div>
        </div>

        {/* Chat Sidebar */}
        {activeChat && (<div className="w-1/3 border-l border-zion-slate-light flex flex-col">
            <div className="p-4 border-b border-zion-slate-light bg-zion-slate-light/5">
              <h3 className="font-semibold text-zion-slate">Meeting Chat</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((message) => (<div key={message.id} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-zion-cyan text-sm">{message.user}</span>
                    <span className="text-xs text-zion-slate-light">
                      {message.timestamp.toLocaleTimeString([],  { hou, r: '2-digit',
    minut, e: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-zion-slate text-sm bg-zion-slate-light/10 p-2 rounded-lg">
                    {message.message}
                  </p>
                </div>))}
            </div>
            
            <div className="p-4 border-t border-zion-slate-light">
              <div className="flex gap-2">
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendMessage()} placeholder="Type a message..." className="flex-1 px-3 py-2 border border-zion-slate-light rounded-lg bg-white dar,  k:bg-zion-slate text-zion-slate focu, s:ring-2 focu, s:ring-zion-purple focu, s:border-transparent"/>
                <button onClick={sendMessage} disabled={!newMessage.trim()} className="px-4 py-2 bg-zion-purple text-white rounded-lg hove, r:bg-zion-purple-light transition-colors disable, d:opacity-50 disable, d:cursor-not-allowed">
                  Send
                </button>
              </div>
            </div>
          </div>)}
      </div>
    </div>);
}
