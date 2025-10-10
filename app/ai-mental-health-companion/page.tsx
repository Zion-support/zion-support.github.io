import { Helmet } from 'react-helmet-async';
import {
  Heart,
  Brain,
  MessageCircle,
  Calendar,
  BarChart3,
  Shield,
  CheckCircle,
  Star,
  Users,
  Clock,
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Zap,
  Target,
  Award,
  Sparkles,
  RefreshCw,
  Play,
  Pause,
  Stop,
  RotateCcw,
  RotateCw,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  VolumeX,
  Volume1,
  Volume2,
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
  Heart as HeartIcon,
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
  Plus,
  Minus,
  X,
  Check,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  ChevronUp,
  ChevronLeft,
  ChevronDown,
  ChevronRight,
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
  Heart as HeartIcon2,
  Star as StarIcon2,
  Moon as MoonIcon2,
  Sun as SunIcon2,
  Cloud as CloudIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Lock,
  Unlock,
  Eye,
  EyeOff,
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
  Video,
  Audio,
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
  Swift,
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
  Sort as SortIcon,
  Order,
  Sequence,
  List as ListIcon,
  Catalog,
  Inventory,
  Stock,
  Supply,
  Demand as DemandIcon,
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

interface MentalHealthCompanionProps {
  className?: string;
}

export default function MentalHealthCompanion({ className = '' }: MentalHealthCompanionProps) {
  const [currentMood, setCurrentMood] = useState('neutral');
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [moodHistory, setMoodHistory] = useStat</any[]>e</any[]><any[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const moods = [
    { id: 'happy', label: 'Happy', icon: Smile, color: 'text-yellow-400' },
    { id: 'sad', label: 'Sad', icon: Frown, color: 'text-blue-400' },
    { id: 'anxious', label: 'Anxious', icon: Worried, color: 'text-orange-400' },
    { id: 'calm', label: 'Calm', icon: Calm, color: 'text-green-400' },
    { id: 'angry', label: 'Angry', icon: Angry, color: 'text-red-400' },
    { id: 'excited', label: 'Excited', icon: Excited, color: 'text-pink-400' },
    { id: 'tired', label: 'Tired', icon: Meh, color: 'text-gray-400' },
    { id: 'confident', label: 'Confident', icon: Confident, color: 'text-purple-400' }
  ];

  const features = [
    {
      title: "24/7 AI Companion",
      description: "Always available mental health support powered by advanced AI",
      icon: Heart,
      price: "Included"
    },
    {
      title: "Mood Tracking",
      description: "Track your daily mood and emotional patterns over time",
      icon: BarChart3,
      price: "Included"
    },
    {
      title: "Crisis Support",
      description: "Immediate support and resources during mental health crises",
      icon: Shield,
      price: "Included"
    },
    {
      title: "Therapy Sessions",
      description: "AI-powered therapy sessions with evidence-based techniques",
      icon: MessageCircle,
      price: "Included"
    },
    {
      title: "Progress Monitoring",
      description: "Track your mental health journey and celebrate milestones",
      icon: Target,
      price: "Included"
    },
    {
      title: "Professional Referrals",
      description: "Connect with licensed mental health professionals when needed",
      icon: Users,
      price: "Pro Feature"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$19",
      period: "/month",
      description: "Essential mental health support for individuals",
      features: [
        "AI companion chat",
        "Mood tracking",
        "Basic therapy sessions",
        "Crisis support",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Comprehensive mental health support with advanced features",
      features: [
        "Advanced AI companion",
        "Detailed mood analytics",
        "Full therapy sessions",
        "Crisis support",
        "Progress tracking",
        "Professional referrals",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Family",
      price: "$99",
      period: "/month",
      description: "Mental health support for the whole family",
      features: [
        "Up to 5 family members",
        "Family mood tracking",
        "Group therapy sessions",
        "Crisis support",
        "Family progress reports",
        "Professional referrals",
        "24/7 support",
        "Custom family plans"
      ],
      popular: false
    }
  ];

  const handleMoodSelection = (moodId: string) => {
    setCurrentMood(moodId);
    const newMoodEntry = {
      id: Date.now(),
      mood: moodId,
      timestamp: new Date(),
      note: ''
    };
    setMoodHistory(prev => [...prev, newMoodEntry]);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: userInput,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: "I understand how you're feeling. It's important to acknowledge your emotions. Would you like to talk about what's on your mind?",
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleCrisisSupport = () => {
    const crisisMessage = {
      id: Date.now(),
      type: 'system',
      content: "Crisis support activated. Please know that you're not alone. If you're having thoughts of self-harm, please contact the National Suicide Prevention Lifeline at 988 or text HOME to 741741.",
      timestamp: new Date()
    };
    setChatMessages(prev => [...prev, crisisMessage]);
  };

  return (
   </any[]> </any[]><div className={`min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 ${className}`}>
    </div className={`min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 ${className}`}> </div className={`min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 ${className}`}> </div><Helmet>
      </Helmet> </Helmet> </Helmet><title>AI Mental Health Companion Pro - 24/7 Mental Health Support | Zion Tech Gro</title>u</title>p</title>
       <//title> <//title><meta name="description" content="AI-powered mental health companion with mood tracking, therapy sessions, and crisis support. Get 24/7 mental health support with our advanced AI technology." />
       </meta name="description" content="AI-powered mental health companion with mood tracking, therapy sessions, and crisis support. Get 24/7 mental health support with our advanced AI technology." /> </meta name="description" content="AI-powered mental health companion with mood tracking, therapy sessions, and crisis support. Get 24/7 mental health support with our advanced AI technology." /><meta name="keywords" content="mental health, AI therapy, mood tracking, mental health support, crisis support, therapy sessions, emotional wellness" />
       </meta name="keywords" content="mental health, AI therapy, mood tracking, mental health support, crisis support, therapy sessions, emotional wellness" /> </meta name="keywords" content="mental health, AI therapy, mood tracking, mental health support, crisis support, therapy sessions, emotional wellness" /><link rel="canonical" href="https://ziontechgroup.com/ai-mental-health-companion" />
    </link rel="canonical" href="https://ziontechgroup.com/ai-mental-health-companion" /> </link rel="canonical" href="https://ziontechgroup.com/ai-mental-health-companion" /> </Helmet>

      {/* Hero Section */}
     <//Helmet> <//Helmet><div className="relative py-20 overflow-hidden">
       </div className="relative py-20 overflow-hidden"> </div className="relative py-20 overflow-hidden"><div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

       <//div> <//div><div className="container mx-auto px-4 relative z-10">
         </div className="container mx-auto px-4 relative z-10"> </div className="container mx-auto px-4 relative z-10"><div className="text-center mb-16">
           </div className="text-center mb-16"> </div className="text-center mb-16"><div className="inline-flex items-center bg-pink-500/10 border border-pink-400/20 rounded-full px-6 py-3 mb-8">
            </div className="inline-flex items-center bg-pink-500/10 border border-pink-400/20 rounded-full px-6 py-3 mb-8"> </div className="inline-flex items-center bg-pink-500/10 border border-pink-400/20 rounded-full px-6 py-3 mb-8"> </div><Heart className="w-5 h-5 text-pink-400 mr-2" />
             </Heart className="w-5 h-5 text-pink-400 mr-2" /> </Heart className="w-5 h-5 text-pink-400 mr-2" /><span className="text-pink-300 font-medium">AI Mental Health Companion </span className="text-pink-300 font-medium">P</span className="text-pink-300 font-medium">r</span>o</span>
          <//span> <//span> </div>

           <//div> <//div><h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              24/7 Mental Health Support
         </h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text"> </h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text"> </h1>

           <//h1> <//h1><p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Your AI-Powered Mental Health Companion
          </p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"> </p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"> </p>

           <//p> <//p><p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
              Get compassionate, professional mental health support anytime, anywhere.
              Track your mood, engage in therapy sessions, and access crisis support with our advanced AI technology.
          </p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"> </p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"> </p>

           <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            </div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"> </div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"> </div><button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25">
               </button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"> </button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"><span className="relative z-10">Start Free Tr</span className="relative z-10">i</span className="relative z-10">a</span>l</span>
               <//span> <//span><ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
               </ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /> </ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /><div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <//div> <//div> </button>

             <//button> <//button><button className="group inline-flex items-center px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
               </button className="group inline-flex items-center px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"> </button className="group inline-flex items-center px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-xl hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"><Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
            </Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> </Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> </button>
          <//button> <//button> </div>

            {/* Stats */}
           <//div> <//div><div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
             </div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"> </div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"><div className="text-center">
               </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-pink-400 mb-2">2</div className="text-3xl font-bold text-pink-400 mb-2">4</div className="text-3xl font-bold text-pink-400 mb-2">/</div>7</div>
               <//div> <//div><div className="text-gray-400">Support Availa</div className="text-gray-400">b</div className="text-gray-400">l</div>e</div>
            <//div> <//div> </div>
             <//div> <//div><div className="text-center">
               </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-purple-400 mb-2">9</div className="text-3xl font-bold text-purple-400 mb-2">5</div>%</div>
               <//div> <//div><div className="text-gray-400">User Satisfact</div className="text-gray-400">i</div className="text-gray-400">o</div>n</div>
            <//div> <//div> </div>
             <//div> <//div><div className="text-center">
               </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-cyan-400 mb-2">1</div className="text-3xl font-bold text-cyan-400 mb-2">0</div className="text-3xl font-bold text-cyan-400 mb-2">K</div>+</div>
               <//div> <//div><div className="text-gray-400">Lives Impro</div className="text-gray-400">v</div className="text-gray-400">e</div>d</div>
            <//div> <//div> </div>
             <//div> <//div><div className="text-center">
               </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-yellow-400 mb-2">HI</div className="text-3xl font-bold text-yellow-400 mb-2">P</div className="text-3xl font-bold text-yellow-400 mb-2">A</div>A</div>
               <//div> <//div><div className="text-gray-400">Compli</div className="text-gray-400">a</div className="text-gray-400">n</div>t</div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>

      {/* Mental Health Companion Interface */}
     <//div> <//div><div className="py-20 bg-gradient-to-br from-slate-800 via-pink-900 to-slate-800">
       </div className="py-20 bg-gradient-to-br from-slate-800 via-pink-900 to-slate-800"> </div className="py-20 bg-gradient-to-br from-slate-800 via-pink-900 to-slate-800"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Your Mental Health Companion
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track your mood, chat with your AI companion, and access professional support
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="max-w-6xl mx-auto">
           </div className="max-w-6xl mx-auto"> </div className="max-w-6xl mx-auto"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mood Tracking Section */}
             </div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> </div className="grid grid-cols-1 lg:grid-cols-2 gap-12"><div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div><h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                 </h3 className="text-2xl font-bold text-white mb-6 flex items-center"> </h3 className="text-2xl font-bold text-white mb-6 flex items-center"><Heart className="w-8 h-8 text-pink-400 mr-3" />
                  How are you feeling today?
              </Heart className="w-8 h-8 text-pink-400 mr-3" /> </Heart className="w-8 h-8 text-pink-400 mr-3" /> </h3>

               <//h3> <//h3><div className="space-y-6">
                 </div className="space-y-6"> </div className="space-y-6"><div className="grid grid-cols-2 gap-4">
                    {moods.map((mood) => (
                    </div className="grid grid-cols-2 gap-4"> </div className="grid grid-cols-2 gap-4"> </div><button
                        key={mood.id}
                        onClick={() => handleMoodSelection(mood.id)}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                          currentMood === mood.id
                            ? 'border-pink-400 bg-pink-400/10'
                            : 'border-white/20 hover:border-pink-400/50'
                        }`}
                      >
                       </button
                        key={mood.id}
                        onClick={() => </button
                        key={mood.id}
                        onClick={() =><mood.icon className={`w-8 h-8 mx-auto mb-2 ${mood.color}`} />
                       </mood.icon className={`w-8 h-8 mx-auto mb-2 ${mood.color}`} /> </mood.icon className={`w-8 h-8 mx-auto mb-2 ${mood.color}`} /><p className="text-white text-sm font-medium">{mood.labe</p className="text-white text-sm font-medium">l</p className="text-white text-sm font-medium">}</p>
                    <//p> <//p> </button>
                    ))}
                <//button> <//button> </div>

                 <//div> <//div><div className="bg-white/5 rounded-lg p-4">
                  </div className="bg-white/5 rounded-lg p-4"> </div className="bg-white/5 rounded-lg p-4"> </div><h4 className="text-white font-semibold mb-2">Mood Histo</h4 className="text-white font-semibold mb-2">r</h4 className="text-white font-semibold mb-2">y</h4>
                   <//h4> <//h4><div className="space-y-2">
                      {moodHistory.slice(-5).map((entry) => (
                       </div className="space-y-2"> </div className="space-y-2"><div key={entry.id} className="flex items-center justify-between text-sm">
                        </div key={entry.id} className="flex items-center justify-between text-sm"> </div key={entry.id} className="flex items-center justify-between text-sm"> </div><span className="text-gray-300">
                            {entry.timestamp.toLocaleDateString()}
                       </span className="text-gray-300"> </span className="text-gray-300"> </span>
                         <//span> <//span><span className="text-pink-400 capitalize">
                            {entry.mood}
                       </span className="text-pink-400 capitalize"> </span className="text-pink-400 capitalize"> </span>
                      <//span> <//span> </div>
                      ))}
                  <//div> <//div> </div>
                <//div> <//div> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>

              {/* Chat Interface */}
             <//div> <//div><div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div><h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                 </h3 className="text-2xl font-bold text-white mb-6 flex items-center"> </h3 className="text-2xl font-bold text-white mb-6 flex items-center"><MessageCircle className="w-8 h-8 text-pink-400 mr-3" />
                  Chat with Your AI Companion
              </MessageCircle className="w-8 h-8 text-pink-400 mr-3" /> </MessageCircle className="w-8 h-8 text-pink-400 mr-3" /> </h3>

               <//h3> <//h3><div className="space-y-4">
                  {/* Chat Messages */}
                 </div className="space-y-4"> </div className="space-y-4"><div className="h-64 overflow-y-auto space-y-4 mb-4">
                    {chatMessages.length === 0 ? (
                     </div className="h-64 overflow-y-auto space-y-4 mb-4"> </div className="h-64 overflow-y-auto space-y-4 mb-4"><div className="text-center py-8">
                      </div className="text-center py-8"> </div className="text-center py-8"> </div><MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                       </MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" /> </MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" /><p className="text-gray-400">Start a conversation with your AI compani</p className="text-gray-400">o</p className="text-gray-400">n</p>
                    <//p> <//p> </div>
                    ) : (
                      chatMessages.map((message) => (
                       <//div> <//div><div
                          key={message.id}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                         </div
                          key={message.id}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        > </div
                          key={message.id}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        ><div
                            className={`max-w-xs px-4 py-2 rounded-lg ${
                              message.type === 'user'
                                ? 'bg-pink-500 text-white'
                                : message.type === 'system'
                                ? 'bg-red-500 text-white'
                                : 'bg-white/10 text-gray-300'
                            }`}
                          >
                          </div
                            className={`max-w-xs px-4 py-2 rounded-lg ${
                              message.type === 'user'
                                ? 'bg-pink-500 text-white'
                                : message.type === 'system'
                                ? 'bg-red-500 text-white'
                                : 'bg-white/10 text-gray-300'
                            }`}
                          > </div
                            className={`max-w-xs px-4 py-2 rounded-lg ${
                              message.type === 'user'
                                ? 'bg-pink-500 text-white'
                                : message.type === 'system'
                                ? 'bg-red-500 text-white'
                                : 'bg-white/10 text-gray-300'
                            }`}
                          > </div><p className="text-sm">{message.conten</p className="text-sm">t</p className="text-sm">}</p>
                           <//p> <//p><p className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString()}
                          </p className="text-xs opacity-70 mt-1"> </p className="text-xs opacity-70 mt-1"> </p>
                        <//p> <//p> </div>
                      <//div> <//div> </div>
                      ))
                    )}
                    {isTyping && (
                     <//div> <//div><div className="flex justify-start">
                       </div className="flex justify-start"> </div className="flex justify-start"><div className="bg-white/10 text-gray-300 px-4 py-2 rounded-lg">
                         </div className="bg-white/10 text-gray-300 px-4 py-2 rounded-lg"> </div className="bg-white/10 text-gray-300 px-4 py-2 rounded-lg"><div className="flex space-x-1">
                           </div className="flex space-x-1"> </div className="flex space-x-1"><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                           <//div> <//div><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                           <//div> <//div><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <//div> <//div> </div>
                      <//div> <//div> </div>
                    <//div> <//div> </div>
                    )}
                <//div> <//div> </div>

                  {/* Message Input */}
                 <//div> <//div><div className="flex space-x-2">
                  </div className="flex space-x-2"> </div className="flex space-x-2"> </div><input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20"
                    />
                   </input
                      type="text"
                      value={userInput}
                      onChange={(e) => </input
                      type="text"
                      value={userInput}
                      onChange={(e) =><button
                      onClick={handleSendMessage}
                      disabled={!userInput.trim()}
                      className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Send
                  </button
                      onClick={handleSendMessage}
                      disabled={!userInput.trim()}
                      className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    > </button
                      onClick={handleSendMessage}
                      disabled={!userInput.trim()}
                      className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    > </button>
                <//button> <//button> </div>

                  {/* Crisis Support Button */}
                 <//div> <//div><button
                    onClick={handleCrisisSupport}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                  >
                    Crisis Support
                </button
                    onClick={handleCrisisSupport}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                  > </button
                    onClick={handleCrisisSupport}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                  > </button>
              <//button> <//button> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>

      {/* Features Section */}
     <//div> <//div><div className="py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
       </div className="py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900"> </div className="py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Mental Health Features
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive mental health support powered by advanced AI technology
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
             </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"> </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"><div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105">
               </div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105"> </div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105"><div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                </div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-600 rounded-lg flex items-center justify-center mb-4"> </div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-600 rounded-lg flex items-center justify-center mb-4"> </div><feature.icon className="w-6 h-6 text-white" />
              </feature.icon className="w-6 h-6 text-white" /> </feature.icon className="w-6 h-6 text-white" /> </div>
               <//div> <//div><h3 className="text-xl font-bold text-white mb-2">{feature.titl</h3 className="text-xl font-bold text-white mb-2">e</h3 className="text-xl font-bold text-white mb-2">}</h3>
               <//h3> <//h3><p className="text-gray-400 mb-4">{feature.descriptio</p className="text-gray-400 mb-4">n</p className="text-gray-400 mb-4">}</p>
               <//p> <//p><div className="flex items-center justify-between">
                </div className="flex items-center justify-between"> </div className="flex items-center justify-between"> </div><span className="text-pink-400 font-semibold">{feature.pri</span className="text-pink-400 font-semibold">c</span className="text-pink-400 font-semibold">e</span>}</span>
                 <//span> <//span><CheckCircle className="w-5 h-5 text-green-400" />
              </CheckCircle className="w-5 h-5 text-green-400" /> </CheckCircle className="w-5 h-5 text-green-400" /> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>

      {/* Pricing Section */}
     <//div> <//div><div className="py-20 bg-gradient-to-br from-slate-800 via-pink-900 to-slate-800">
       </div className="py-20 bg-gradient-to-br from-slate-800 via-pink-900 to-slate-800"> </div className="py-20 bg-gradient-to-br from-slate-800 via-pink-900 to-slate-800"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Mental Health Plans
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the mental health support plan that's right for you
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
             </div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"> </div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"><div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-pink-400/50 ring-2 ring-pink-400/30' : 'border-white/10'}`}>
                {plan.popular && (
                 </div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-pink-400/50 ring-2 ring-pink-400/30' : 'border-white/10'}`}> </div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-pink-400/50 ring-2 ring-pink-400/30' : 'border-white/10'}`}><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div><span className="bg-gradient-to-r from-pink-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular
                 </span className="bg-gradient-to-r from-pink-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full"> </span className="bg-gradient-to-r from-pink-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full"> </span>
                <//span> <//span> </div>
                )}

               <//div> <//div><div className="text-center mb-8">
                </div className="text-center mb-8"> </div className="text-center mb-8"> </div><h3 className="text-2xl font-bold text-white mb-2">{plan.nam</h3 className="text-2xl font-bold text-white mb-2">e</h3 className="text-2xl font-bold text-white mb-2">}</h3>
                 <//h3> <//h3><p className="text-gray-400 mb-4">{plan.descriptio</p className="text-gray-400 mb-4">n</p className="text-gray-400 mb-4">}</p>
                 <//p> <//p><div className="flex items-baseline justify-center">
                  </div className="flex items-baseline justify-center"> </div className="flex items-baseline justify-center"> </div><span className="text-5xl font-bold text-white">{plan.pri</span className="text-5xl font-bold text-white">c</span className="text-5xl font-bold text-white">e</span>}</span>
                   <//span> <//span><span className="text-gray-400 ml-2">{plan.peri</span className="text-gray-400 ml-2">o</span className="text-gray-400 ml-2">d</span>}</span>
                <//span> <//span> </div>
              <//div> <//div> </div>

               <//div> <//div><ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                   </ul className="space-y-4 mb-8"> </ul className="space-y-4 mb-8"><li key={featureIndex} className="flex items-center">
                     </li key={featureIndex} className="flex items-center"> </li key={featureIndex} className="flex items-center"><CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                     </CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" /><span className="text-gray-300">{featu</span className="text-gray-300">r</span className="text-gray-300">e</span>}</span>
                  <//span> <//span> </li>
                  ))}
              <//li> <//li> </ul>

               <//ul> <//ul><button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
              </button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}> </button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}> </button>
            <//button> <//button> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>

      {/* Contact Section */}
     <//div> <//div><div className="py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
       </div className="py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900"> </div className="py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Start Your Mental Health Journey
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our mental health team to learn more about our AI companion
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="max-w-4xl mx-auto">
           </div className="max-w-4xl mx-auto"> </div className="max-w-4xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div><h3 className="text-2xl font-bold text-white mb-6">Contact Informati</h3 className="text-2xl font-bold text-white mb-6">o</h3 className="text-2xl font-bold text-white mb-6">n</h3>
               <//h3> <//h3><div className="space-y-4">
                 </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center">
                  </div className="flex items-center"> </div className="flex items-center"> </div><Phone className="w-5 h-5 text-pink-400 mr-3" />
                   </Phone className="w-5 h-5 text-pink-400 mr-3" /> </Phone className="w-5 h-5 text-pink-400 mr-3" /><a href="tel:+13024640950" className="text-gray-300 hover:text-pink-400 transition-colors">
                      +1 (302) 464-0950
                  </a href="tel:+13024640950" className="text-gray-300 hover:text-pink-400 transition-colors"> </a href="tel:+13024640950" className="text-gray-300 hover:text-pink-400 transition-colors"> </a>
                <//a> <//a> </div>
                 <//div> <//div><div className="flex items-center">
                  </div className="flex items-center"> </div className="flex items-center"> </div><Mail className="w-5 h-5 text-pink-400 mr-3" />
                   </Mail className="w-5 h-5 text-pink-400 mr-3" /> </Mail className="w-5 h-5 text-pink-400 mr-3" /><a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-pink-400 transition-colors">
                      kleber@ziontechgroup.com
                  </a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-pink-400 transition-colors"> </a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-pink-400 transition-colors"> </a>
                <//a> <//a> </div>
                 <//div> <//div><div className="flex items-start">
                  </div className="flex items-start"> </div className="flex items-start"> </div><MapPin className="w-5 h-5 text-pink-400 mr-3 mt-1" />
                   </MapPin className="w-5 h-5 text-pink-400 mr-3 mt-1" /> </MapPin className="w-5 h-5 text-pink-400 mr-3 mt-1" /><div className="text-gray-300">
                     </div className="text-gray-300"> </div className="text-gray-300"><div>364 E Main St STE 1</div>0</div>0</div>8</div>
                     <//div> <//div><div>Middletown, DE 19</div>7</div>0</div>9</div>
                  <//div> <//div> </div>
                <//div> <//div> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>

             <//div> <//div><div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div><h3 className="text-2xl font-bold text-white mb-6">Get Start</h3 className="text-2xl font-bold text-white mb-6">e</h3 className="text-2xl font-bold text-white mb-6">d</h3>
               <//h3> <//h3><div className="space-y-4">
                 </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center">
                  </div className="flex items-center"> </div className="flex items-center"> </div><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-3" /> </CheckCircle className="w-5 h-5 text-green-400 mr-3" /><span className="text-gray-300">Free 14-day tr</span className="text-gray-300">i</span className="text-gray-300">a</span>l</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex items-center">
                  </div className="flex items-center"> </div className="flex items-center"> </div><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-3" /> </CheckCircle className="w-5 h-5 text-green-400 mr-3" /><span className="text-gray-300">HIPAA compli</span className="text-gray-300">a</span className="text-gray-300">n</span>t</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex items-center">
                  </div className="flex items-center"> </div className="flex items-center"> </div><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-3" /> </CheckCircle className="w-5 h-5 text-green-400 mr-3" /><span className="text-gray-300">24/7 supp</span className="text-gray-300">o</span className="text-gray-300">r</span>t</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex items-center">
                  </div className="flex items-center"> </div className="flex items-center"> </div><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-3" /> </CheckCircle className="w-5 h-5 text-green-400 mr-3" /><span className="text-gray-300">Crisis supp</span className="text-gray-300">o</span className="text-gray-300">r</span>t</span>
                <//span> <//span> </div>
              <//div> <//div> </div>
               <//div> <//div><button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
              </button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"> </button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"> </button>
            <//button> <//button> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>
  <//div> <//div> </div>
  );
<//div>}<//div>