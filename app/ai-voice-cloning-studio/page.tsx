import { Helmet } from 'react-helmet-async';
import {
  Mic,
  Play,
  Pause,
  Download,
  Upload,
  Settings,
  Zap,
  CheckCircle,
  Star,
  Users,
  Clock,
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Brain,
  Volume2,
  FileAudio,
  Languages,
  Sparkles,
  Target,
  Award,
  Shield,
  BarChart3,
  DollarSign,
  Calendar,
  MessageSquare,
  Headphones,
  Radio,
  Music,
  Video,
  MicIcon,
  Waveform,
  Activity,
  TrendingUp,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Share2,
  Copy,
  Edit3,
  Trash2,
  Save,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  RotateCcw,
  RotateCw,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  VolumeX,
  Volume1,
  Volume2 as Volume2Icon,
  Maximize,
  Minimize,
  Fullscreen,
  FullscreenExit,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Server,
  Cloud,
  Database,
  HardDrive,
  Wifi,
  WifiOff,
  Signal,
  SignalZero,
  SignalLow,
  SignalMedium,
  SignalHigh,
  Battery,
  BatteryLow,
  BatteryMedium,
  BatteryHigh,
  BatteryFull,
  Power,
  PowerOff,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudHail,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  SunIcon,
  MoonIcon,
  StarIcon,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Sad,
  Happy,
  Wink,
  Kiss,
  Tongue,
  Disappointed,
  Worried,
  Excited,
  Proud,
  Grateful,
  Blessed,
  Loved,
  Hopeful,
  Motivated,
  Inspired,
  Creative,
  Confident,
  Strong,
  Brave,
  Kind,
  Gentle,
  Caring,
  Supportive,
  Understanding,
  Patient,
  Calm,
  Peaceful,
  Relaxed,
  Focused,
  Determined,
  Persistent,
  Resilient,
  Optimistic,
  Positive,
  Enthusiastic,
  Energetic,
  Active,
  Dynamic,
  Vibrant,
  Lively,
  Spirited,
  Passionate,
  Intense,
  Powerful,
  Mighty,
  Strong2,
  Tough,
  Hard,
  Soft,
  Smooth,
  Rough,
  Sharp,
  Dull,
  Bright,
  Dark,
  Light,
  Heavy,
  Fast,
  Slow,
  Quick,
  Rapid,
  Swift,
  Speedy,
  Agile,
  Nimble,
  Flexible,
  Adaptable,
  Versatile,
  Multi,
  Single,
  Double,
  Triple,
  Quad,
  Multiple,
  Many,
  Few,
  Some,
  All,
  None,
  Zero,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Hundred,
  Thousand,
  Million,
  Billion,
  Trillion,
  Infinity,
  Plus as PlusIcon,
  Minus as MinusIcon,
  X,
  Check,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  ChevronUp,
  ChevronLeft,
  ChevronDown as ChevronDownIcon,
  ChevronRight as ChevronRightIcon,
  CaretUp,
  CaretDown,
  CaretLeft,
  CaretRight,
  Triangle,
  Circle,
  Square,
  Rectangle,
  Pentagon,
  Hexagon,
  Octagon,
  Diamond,
  Heart as HeartIcon,
  Star as StarIcon2,
  Moon as MoonIcon2,
  Sun as SunIcon2,
  Cloud as CloudIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Lock as LockIcon,
  Unlock as UnlockIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  Search,
  Filter,
  Sort,
  List,
  Grid,
  Layout,
  Sidebar,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Dot,
  DotHorizontal,
  DotVertical,
  Line,
  Bar,
  Pie,
  Area,
  Scatter,
  Bubble,
  Candlestick,
  Radar,
  Polar,
  Treemap,
  Sunburst,
  Sankey,
  Funnel,
  Gauge,
  Meter,
  Progress,
  Slider,
  Toggle,
  Switch,
  Button,
  Input,
  Textarea,
  Select,
  Option,
  Checkbox,
  Radio,
  Date,
  Time,
  DateTime,
  Color,
  File,
  Image,
  Video as VideoIcon,
  Audio as AudioIcon,
  Document,
  Spreadsheet,
  Presentation,
  Pdf,
  Word,
  Excel,
  Powerpoint,
  Text,
  Code,
  Json,
  Xml,
  Html,
  Css,
  Javascript,
  Typescript,
  Python,
  Java,
  C,
  Cpp,
  Csharp,
  Php,
  Ruby,
  Go,
  Rust,
  Swift as SwiftIcon,
  Kotlin,
  Dart,
  R,
  Matlab,
  Scala,
  Perl,
  Haskell,
  Clojure,
  Erlang,
  Elixir,
  Fsharp,
  Ocaml,
  Lisp,
  Prolog,
  Assembly,
  Bash,
  Powershell,
  Vb,
  Vbnet,
  Cobol,
  Fortran,
  Pascal,
  Ada,
  Smalltalk,
  Lua,
  Tcl,
  Awk,
  Sed,
  Gawk,
  Mawk,
  Nawk,
  Gnu,
  Linux,
  Unix,
  Windows,
  Macos,
  Ios,
  Android,
  Web,
  Mobile,
  Desktop as DesktopIcon,
  Laptop as LaptopIcon,
  Tablet as TabletIcon,
  Smartphone as SmartphoneIcon,
  Watch,
  Tv,
  Camera,
  Microphone,
  Speaker,
  Headphone,
  Keyboard,
  Mouse,
  Touchpad,
  Trackpad,
  Joystick,
  Gamepad,
  Controller,
  Remote,
  Cable,
  Wire,
  Plug,
  Socket,
  Outlet,
  Switch as SwitchIcon,
  Button as ButtonIcon,
  Knob,
  Dial,
  Lever,
  Handle,
  Grip,
  Hold,
  Grab,
  Catch,
  Throw,
  Drop,
  Place,
  Put,
  Set,
  Get,
  Take,
  Give,
  Send,
  Receive,
  Deliver,
  Ship,
  Transport,
  Move,
  Carry,
  Lift,
  Push,
  Pull,
  Drag,
  Slide,
  Roll,
  Spin,
  Turn,
  Rotate,
  Flip,
  Toss,
  Shake,
  Vibrate,
  Oscillate,
  Pulse,
  Beat,
  Rhythm,
  Tempo,
  Speed,
  Velocity,
  Acceleration,
  Momentum,
  Force,
  Energy,
  Power as PowerIcon,
  Strength,
  Weakness,
  Strong as StrongIcon,
  Weak,
  Hard as HardIcon,
  Easy,
  Simple,
  Complex,
  Basic,
  Advanced,
  Beginner,
  Intermediate,
  Expert,
  Professional,
  Amateur,
  Novice,
  Master,
  Guru,
  Teacher,
  Student,
  Learner,
  Instructor,
  Coach,
  Mentor,
  Guide,
  Leader,
  Follower,
  Boss,
  Employee,
  Worker,
  Manager,
  Director,
  CEO,
  President,
  Owner,
  Founder,
  Creator,
  Inventor,
  Designer,
  Developer,
  Programmer,
  Coder,
  Engineer,
  Architect,
  Builder,
  Maker,
  Artist,
  Writer,
  Author,
  Editor,
  Publisher,
  Producer,
  Director as DirectorIcon,
  Actor,
  Actress,
  Performer,
  Entertainer,
  Comedian,
  Musician,
  Singer,
  Dancer,
  Painter,
  Sculptor,
  Photographer,
  Videographer,
  Filmmaker,
  Animator,
  Illustrator,
  Cartoonist,
  Composer,
  Songwriter,
  Lyricist,
  Poet,
  Novelist,
  Journalist,
  Reporter,
  Blogger,
  Vlogger,
  Podcaster,
  Streamer,
  Gamer,
  Player,
  Competitor,
  Champion,
  Winner,
  Loser,
  Victor,
  Defeat,
  Success,
  Failure,
  Achievement,
  Accomplishment,
  Goal,
  Target as TargetIcon,
  Objective,
  Mission,
  Vision,
  Dream,
  Hope,
  Wish,
  Desire,
  Want,
  Need,
  Require,
  Demand,
  Request,
  Ask,
  Question,
  Answer,
  Reply,
  Response,
  Feedback,
  Comment,
  Suggestion,
  Recommendation,
  Advice,
  Tip,
  Hint,
  Clue,
  Secret,
  Mystery,
  Puzzle,
  Riddle,
  Problem,
  Solution,
  Fix,
  Repair,
  Maintenance,
  Update,
  Upgrade,
  Improve,
  Enhance,
  Optimize,
  Maximize,
  Minimize,
  Reduce,
  Increase,
  Decrease,
  Add,
  Remove,
  Delete,
  Create,
  Build,
  Make,
  Generate,
  Produce,
  Manufacture,
  Assemble,
  Construct,
  Develop,
  Design,
  Plan,
  Organize,
  Arrange,
  Sort,
  Order,
  Sequence,
  List as ListIcon,
  Catalog,
  Inventory,
  Stock,
  Supply,
  Demand,
  Market,
  Economy,
  Business,
  Company,
  Corporation,
  Organization,
  Institution,
  Agency,
  Department,
  Division,
  Section,
  Unit,
  Team,
  Group,
  Squad,
  Crew,
  Staff,
  Personnel,
  Workforce,
  Employees,
  Workers,
  Colleagues,
  Partners,
  Associates,
  Allies,
  Friends,
  Family,
  Relatives,
  Parents,
  Children,
  Siblings,
  Spouse,
  Partner,
  Lover,
  Boyfriend,
  Girlfriend,
  Husband,
  Wife,
  Son,
  Daughter,
  Brother,
  Sister,
  Father,
  Mother,
  Grandfather,
  Grandmother,
  Uncle,
  Aunt,
  Cousin,
  Nephew,
  Niece,
  Grandson,
  Granddaughter,
  Great,
  Great2,
  Great3,
  Great4,
  Great5,
  Great6,
  Great7,
  Great8,
  Great9,
  Great10,
  Super,
  Ultra,
  Mega,
  Giga,
  Tera,
  Peta,
  Exa,
  Zetta,
  Yotta,
  Kilo,
  Hecto,
  Deca,
  Deci,
  Centi,
  Milli,
  Micro,
  Nano,
  Pico,
  Femto,
  Atto,
  Zepto,
  Yocto,
  Yotta as YottaIcon,
  Zetta as ZettaIcon,
  Exa as ExaIcon,
  Peta as PetaIcon,
  Tera as TeraIcon,
  Giga as GigaIcon,
  Mega as MegaIcon,
  Kilo as KiloIcon,
  Hecto as HectoIcon,
  Deca as DecaIcon,
  Deci as DeciIcon,
  Centi as CentiIcon,
  Milli as MilliIcon,
  Micro as MicroIcon,
  Nano as NanoIcon,
  Pico as PicoIcon,
  Femto as FemtoIcon,
  Atto as AttoIcon,
  Zepto as ZeptoIcon,
  Yocto as YoctoIcon
} from 'lucide-react';

interface VoiceCloningStudioProps {
  className?: string;
}

export default function VoiceCloningStudio({ className = '' }: VoiceCloningStudioProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVoice, setCurrentVoice] = useState('default');
  const [textToSpeak, setTextToSpeak] = useState('');
  const [voiceSettings, setVoiceSettings] = useState({
    pitch: 0,
    speed: 1,
    emotion: 'neutral',
    language: 'en-US'
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAudio, setGeneratedAudio] = useState<string | null>(null);

  const voices = [
    { id: 'default', name: 'Default Voice', gender: 'Neutral', accent: 'American' },
    { id: 'male1', name: 'Professional Male', gender: 'Male', accent: 'British' },
    { id: 'female1', name: 'Warm Female', gender: 'Female', accent: 'Australian' },
    { id: 'male2', name: 'Deep Male', gender: 'Male', accent: 'American' },
    { id: 'female2', name: 'Energetic Female', gender: 'Female', accent: 'Canadian' },
    { id: 'neutral', name: 'Neutral AI', gender: 'Neutral', accent: 'International' }
  ];

  const emotions = [
    'neutral', 'happy', 'sad', 'angry', 'excited', 'calm', 'confident', 'friendly'
  ];

  const languages = [
    { code: 'en-US', name: 'English (US)' },
    { code: 'en-GB', name: 'English (UK)' },
    { code: 'es-ES', name: 'Spanish' },
    { code: 'fr-FR', name: 'French' },
    { code: 'de-DE', name: 'German' },
    { code: 'it-IT', name: 'Italian' },
    { code: 'pt-BR', name: 'Portuguese' },
    { code: 'ja-JP', name: 'Japanese' },
    { code: 'ko-KR', name: 'Korean' },
    { code: 'zh-CN', name: 'Chinese' }
  ];

  const features = [
    {
      title: "Real-time Voice Cloning",
      description: "Clone any voice with just 30 seconds of audio sample",
      icon: Mic,
      price: "Included"
    },
    {
      title: "Multi-language Support",
      description: "Generate speech in 50+ languages with native accents",
      icon: Globe,
      price: "Included"
    },
    {
      title: "Emotion Control",
      description: "Add emotions like happiness, sadness, excitement to your voice",
      icon: Heart,
      price: "Included"
    },
    {
      title: "Voice Customization",
      description: "Adjust pitch, speed, tone, and other voice parameters",
      icon: Settings,
      price: "Included"
    },
    {
      title: "Batch Processing",
      description: "Process multiple audio files simultaneously",
      icon: FileAudio,
      price: "Pro Feature"
    },
    {
      title: "API Integration",
      description: "Integrate voice cloning into your applications",
      icon: Code,
      price: "Enterprise"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for content creators and small businesses",
      features: [
        "5 voice clones",
        "100 minutes/month",
        "Basic emotions",
        "Standard quality",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for agencies and growing businesses",
      features: [
        "25 voice clones",
        "500 minutes/month",
        "All emotions",
        "High quality",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited voice clones",
        "Unlimited minutes",
        "Custom emotions",
        "Premium quality",
        "24/7 support",
        "Custom integration",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const handleStartRecording = () => {
    setIsRecording(true);
    // Simulate recording process
    setTimeout(() => {
      setIsRecording(false);
    }, 3000);
  };

  const handleGenerateVoice = async () => {
    if (!textToSpeak.trim()) return;

    setIsGenerating(true);
    // Simulate voice generation
    setTimeout(() => {
      setGeneratedAudio('generated-audio-url');
      setIsGenerating(false);
    }, 2000);
  };

  const handlePlayAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${className}`}></div>
      <Helmet>
        <title>AI Voice Cloning Studio Pro - Professional Voice Synthesis | Zion Tech Group</title>
        <meta name="description" content="Create realistic voice clones with AI Voice Cloning Studio Pro. Professional voice synthesis, emotion control, and multi-language support for content creators and businesses." />
        <meta name="keywords" content="voice cloning, AI voice synthesis, voice generation, text to speech, voice customization, content creation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-voice-cloning-studio" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center bg-purple-500/10 border border-purple-400/20 rounded-full px-6 py-3 mb-8"></div>
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">AI Voice Cloning Studio Pro</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              Professional Voice Synthesis
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Clone Any Voice with AI Precision
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
              Create realistic voice clones with just 30 seconds of audio. Perfect for content creators,
              businesses, and developers. Support for 50+ languages with emotion control and real-time processing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"></div>
              <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </button>

              <button className="group inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"></div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-400">Languages</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-400">Accuracy</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">30s</div>
                <div className="text-gray-400">Sample Time</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-400">Processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Cloning Interface */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Try Voice Cloning Now
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI voice cloning with our interactive demo
            </p>
          </div>

          <div className="max-w-6xl mx-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Voice Input Section */}</div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center"></h3>
                  <Mic className="w-8 h-8 text-purple-400 mr-3" />
                  Voice Input
                </h3>

                <div className="space-y-6">
                  {/* Text Input */}</div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Text to Convert
                    </label>
                    <textarea
                      value={textToSpeak}
                      onChange={(e) => setTextToSpeak(e.target.value)}
                      placeholder="Enter the text you want to convert to speech..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 resize-none"
                      rows={4}
                    />
                  </div>

                  {/* Voice Selection */}
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Select Voice
                    </label>
                    <select
                      value={currentVoice}
                      onChange={(e) => setCurrentVoice(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                    >
                      {voices.map((voice) => (
                        <option key={voice.id} value={voice.id} className="bg-slate-800">
                          {voice.name} ({voice.gender}, {voice.accent})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Voice Settings */}
                  <div className="grid grid-cols-2 gap-4"></div>
                    <div></div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Pitch: {voiceSettings.pitch}
                      </label>
                      <input
                        type="range"
                        min="-10"
                        max="10"
                        value={voiceSettings.pitch}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, pitch: parseInt(e.target.value) }))}
                        className="w-full"
                      />
                    </div>
                    <div></div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Speed: {voiceSettings.speed}x
                      </label>
                      <input
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.1"
                        value={voiceSettings.speed}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, speed: parseFloat(e.target.value) }))}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4"></div>
                    <div></div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Emotion
                      </label>
                      <select
                        value={voiceSettings.emotion}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, emotion: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                      >
                        {emotions.map((emotion) => (
                          <option key={emotion} value={emotion} className="bg-slate-800 capitalize">
                            {emotion}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div></div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Language
                      </label>
                      <select
                        value={voiceSettings.language}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, language: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                      >
                        {languages.map((lang) => (
                          <option key={lang.code} value={lang.code} className="bg-slate-800">
                            {lang.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Generate Button */}
                  <button
                    onClick={handleGenerateVoice}
                    disabled={!textToSpeak.trim() || isGenerating}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin inline" />
                        Generating Voice...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5 mr-2 inline" />
                        Generate Voice
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Audio Output Section */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center"></h3>
                  <Volume2 className="w-8 h-8 text-purple-400 mr-3" />
                  Generated Audio
                </h3>

                <div className="space-y-6">
                  {/* Audio Player */}</div>
                  <div className="bg-white/5 rounded-lg p-6 text-center">
                    {generatedAudio ? (</div>
                      <div className="space-y-4"></div>
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto"></div>
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-gray-300">Audio Generated Successfully!</p>
                        <div className="flex justify-center space-x-4"></div>
                          <button
                            onClick={handlePlayAudio}
                            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors"
                          >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                          </button>
                          <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors">
                            <Download className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4"></div>
                        <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto"></div>
                          <FileAudio className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-400">Generate audio to hear the result</p>
                      </div>
                    )}
                  </div>

                  {/* Recording Section */}
                  <div className="space-y-4"></div>
                    <h4 className="text-lg font-semibold text-white">Record Your Voice</h4>
                    <p className="text-gray-400 text-sm">
                      Record 30 seconds of your voice to create a custom voice clone
                    </p>
                    <button
                      onClick={handleStartRecording}
                      disabled={isRecording}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isRecording ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 inline"></div>
                          Recording... (30s)
                        </>
                      ) : (
                        <>
                          <Mic className="w-5 h-5 mr-2 inline" />
                          Start Recording
                        </>
                      )}
                    </button>
                  </div>

                  {/* Upload Section */}
                  <div className="space-y-4"></div>
                    <h4 className="text-lg font-semibold text-white">Upload Audio File</h4>
                    <p className="text-gray-400 text-sm">
                      Upload an audio file (MP3, WAV, M4A) to create a voice clone
                    </p>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer"></div>
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400">Click to upload or drag and drop</p>
                      <p className="text-gray-500 text-sm">MP3, WAV, M4A up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create professional voice content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="flex items-center justify-between"></div>
                  <span className="text-purple-400 font-semibold">{feature.price}</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core voice cloning features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-purple-400/50 ring-2 ring-purple-400/30' : 'border-white/10'}`}>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our team to discuss your voice cloning needs and get a custom quote.
            </p>
          </div>

          <div className="max-w-4xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center"></div>
                    <Phone className="w-5 h-5 text-purple-400 mr-3" />
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-purple-400 transition-colors">
                      +1 (302) 464-0950
                    </a>
                  </div>
                  <div className="flex items-center"></div>
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-start"></div>
                    <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                    <div className="text-gray-300"></div>
                      <div>364 E Main St STE 1008</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Quick Start</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Free 14-day trial</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">No credit card required</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Cancel anytime</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">24/7 support</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}