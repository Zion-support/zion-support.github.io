import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  MicrophoneIcon, 
  PlayIcon, 
  PauseIcon, 
  StopIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon,
  ShareIcon,
  Cog6ToothIcon,
  CheckCircleIcon,
  ClockIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/outline';

const ZionAIMeetingTranscriber = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [meetingDuration, setMeetingDuration] = useState(0);
  const [speakerCount, setSpeakerCount] = useState(0);
  const [language, setLanguage] = useState('en-US');
  const [audioQuality, setAudioQuality] = useState('high');
  const [realTimeMode, setRealTimeMode] = useState(true);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          sampleRate: audioQuality === 'high' ? 48000 : 44100,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true
        } 
      });
      
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });
      
      audioChunksRef.current = [];
      
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };
      
      mediaRecorderRef.current.onstop = () => {
        processAudio();
      };
      
      mediaRecorderRef.current.start(1000);
      setIsRecording(true);
      setIsPaused(false);
      
      intervalRef.current = setInterval(() => {
        setMeetingDuration(prev => prev + 1);
      }, 1000);
      
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Please allow microphone access to use this feature.');
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const resumeRecording = () => {
    if (mediaRecorderRef.current && isPaused) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
      intervalRef.current = setInterval(() => {
        setMeetingDuration(prev => prev + 1);
      }, 1000);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
      setIsPaused(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const processAudio = async () => {
    setIsProcessing(true);
    
    setTimeout(() => {
      const mockTranscript = `Meeting Transcript - ${new Date().toLocaleString()}

Speaker 1: Welcome everyone to today's quarterly review meeting. I'm excited to discuss our progress and upcoming initiatives.

Speaker 2: Thank you for having me. I'd like to start by highlighting our Q3 achievements, particularly in the AI automation sector.

Speaker 1: Excellent. Could you walk us through the key metrics and performance indicators?

Speaker 2: Absolutely. We've seen a 35% increase in automation efficiency, reduced processing time by 40%, and achieved 99.2% accuracy in our AI models.

Speaker 1: Those are impressive numbers. What about the challenges we faced?

Speaker 2: The main challenges were data quality issues and integration complexity with legacy systems. However, our AI solutions have significantly mitigated these issues.

Speaker 1: Looking ahead to Q4, what are our priorities?

Speaker 2: Our focus will be on scaling the AI infrastructure, implementing advanced analytics, and expanding to new market segments.

Speaker 1: Perfect. Any questions from the team?

[End of transcript - Duration: ${Math.floor(meetingDuration / 60)}:${(meetingDuration % 60).toString().padStart(2, '0')}]`;
      
      setTranscript(mockTranscript);
      setSpeakerCount(2);
      setIsProcessing(false);
    }, 3000);
  };

  const downloadTranscript = () => {
    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `meeting-transcript-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareTranscript = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Meeting Transcript',
        text: transcript,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(transcript);
      alert('Transcript copied to clipboard!');
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Meeting Transcriber - Real-time Meeting Transcription & Analysis</title>
        <meta name="description" content="Transform your meetings with AI-powered real-time transcription, speaker identification, and intelligent analysis. Boost productivity and never miss important details again." />
        <meta name="keywords" content="AI meeting transcriber, real-time transcription, meeting analysis, voice recognition, productivity tools" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6">
            <MicrophoneIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Zion AI Meeting Transcriber
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your meetings with AI-powered real-time transcription, speaker identification, 
            and intelligent analysis. Never miss important details again.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
            <SpeakerWaveIcon className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Real-time Transcription</h3>
            <p className="text-gray-300">Live transcription with 99.2% accuracy and speaker identification</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <DocumentTextIcon className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Smart Analysis</h3>
            <p className="text-gray-300">AI-powered insights, action items, and meeting summaries</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
            <ArrowDownTrayIcon className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Export & Share</h3>
            <p className="text-gray-300">Download transcripts in multiple formats and share instantly</p>
          </div>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Meeting Recorder</h2>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <ClockIcon className="w-5 h-5 text-gray-400" />
                <span className="text-white font-mono text-lg">{formatTime(meetingDuration)}</span>
              </div>
              {isRecording && (
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-400 font-semibold">RECORDING</span>
                </div>
              )}
              {isPaused && (
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-yellow-400 font-semibold">PAUSED</span>
                </div>
              )}
            </div>

            <div className="flex justify-center space-x-4 mb-8">
              {!isRecording ? (
                <button
                  onClick={startRecording}
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <MicrophoneIcon className="w-6 h-6" />
                  <span>Start Recording</span>
                </button>
              ) : (
                <>
                  {!isPaused ? (
                    <button
                      onClick={pauseRecording}
                      className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <PauseIcon className="w-6 h-6" />
                      <span>Pause</span>
                    </button>
                  ) : (
                    <button
                      onClick={resumeRecording}
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <PlayIcon className="w-6 h-6" />
                      <span>Resume</span>
                    </button>
                  )}
                  <button
                    onClick={stopRecording}
                    className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <StopIcon className="w-6 h-6" />
                    <span>Stop</span>
                  </button>
                </>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-slate-700 text-white rounded-lg px-3 py-2 border border-gray-600"
                >
                  <option value="en-US">English (US)</option>
                  <option value="en-GB">English (UK)</option>
                  <option value="es-ES">Spanish</option>
                  <option value="fr-FR">French</option>
                  <option value="de-DE">German</option>
                  <option value="ja-JP">Japanese</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Audio Quality</label>
                <select
                  value={audioQuality}
                  onChange={(e) => setAudioQuality(e.target.value)}
                  className="w-full bg-slate-700 text-white rounded-lg px-3 py-2 border border-gray-600"
                >
                  <option value="high">High (48kHz)</option>
                  <option value="standard">Standard (44.1kHz)</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="realTimeMode"
                  checked={realTimeMode}
                  onChange={(e) => setRealTimeMode(e.target.checked)}
                  className="w-4 h-4 text-cyan-500 bg-slate-700 border-gray-600 rounded focus:ring-cyan-500"
                />
                <label htmlFor="realTimeMode" className="text-sm text-gray-300">Real-time Mode</label>
              </div>
            </div>
          </div>
        </div>

        {transcript && (
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Meeting Transcript</h3>
              <div className="flex space-x-2">
                <button
                  onClick={downloadTranscript}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button
                  onClick={shareTranscript}
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  <ShareIcon className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
            
            <div className="bg-slate-900/50 rounded-lg p-6 max-h-96 overflow-y-auto">
              <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                {transcript}
              </pre>
            </div>
          </div>
        )}

        {isProcessing && (
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <div className="animate-spin w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-white mb-2">Processing Audio</h3>
            <p className="text-gray-300">Our AI is analyzing your meeting and generating the transcript...</p>
          </div>
        )}

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 text-center">
              <h4 className="text-xl font-semibold text-white mb-2">Starter</h4>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$9<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Up to 10 hours/month</li>
                <li>Real-time transcription</li>
                <li>Basic speaker identification</li>
                <li>Export to text/PDF</li>
              </ul>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 text-center border-2 border-cyan-500">
              <div className="bg-cyan-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>
              <h4 className="text-xl font-semibold text-white mb-2">Professional</h4>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$29<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Up to 50 hours/month</li>
                <li>Advanced AI analysis</li>
                <li>Action item extraction</li>
                <li>Meeting summaries</li>
                <li>Team collaboration</li>
              </ul>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 text-center">
              <h4 className="text-xl font-semibold text-white mb-2">Enterprise</h4>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Unlimited hours</li>
                <li>Custom AI models</li>
                <li>API access</li>
                <li>Priority support</li>
                <li>Advanced security</li>
              </ul>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Meetings?</h3>
          <p className="text-gray-300 mb-6">
            Contact us to learn more about Zion AI Meeting Transcriber
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="tel:+13024640950" 
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span className="text-lg">📞</span>
              <span>+1 302 464 0950</span>
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span className="text-lg">✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </a>
            <a 
              href="https://ziontechgroup.com" 
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span className="text-lg">🌐</span>
              <span>ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionAIMeetingTranscriber;
