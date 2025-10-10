import { Helmet } from 'react-helmet-async';
import {
  Shield,
  Code,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Lock,
  Unlock,
  FileText,
  Search,
  Filter,
  Download,
  Upload,
  Settings,
  Zap,
  Star,
  Users,
  Clock,
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Brain,
  BarChart3,
  DollarSign,
  Calendar,
  MessageSquare,
  Activity,
  TrendingUp,
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
  EyeOff,
  Search as SearchIcon,
  Filter as FilterIcon,
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
  Code as CodeIcon,
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

interface CodeSecurityAuditorProps {
  className?: string;
}

export default function CodeSecurityAuditor({ className = '' }: CodeSecurityAuditorProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<any[]>([]);
  const [selectedFile, setSelectedFile] = useStat</any[]>e</any[]><string | null>(null);
  const [codeContent, setCodeContent] = useState('');
  const [vulnerabilities, setVulnerabilities] = useStat</string | null>e</string | null><any[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const securityIssues = [
    {
      id: 1,
      type: 'SQL Injection',
      severity: 'High',
      file: 'user-controller.js',
      line: 45,
      description: 'Potential SQL injection vulnerability in user authentication query',
      recommendation: 'Use parameterized queries or prepared statements',
      status: 'Open'
    },
    {
      id: 2,
      type: 'XSS Vulnerability',
      severity: 'Medium',
      file: 'dashboard.html',
      line: 23,
      description: 'Unescaped user input in HTML output',
      recommendation: 'Sanitize user input before rendering',
      status: 'Open'
    },
    {
      id: 3,
      type: 'Hardcoded Password',
      severity: 'Critical',
      file: 'config.js',
      line: 12,
      description: 'Hardcoded database password found',
      recommendation: 'Use environment variables for sensitive data',
      status: 'Fixed'
    },
    {
      id: 4,
      type: 'Insecure Random',
      severity: 'Medium',
      file: 'auth-service.js',
      line: 67,
      description: 'Using Math.random() for cryptographic purposes',
      recommendation: 'Use crypto.randomBytes() for secure random generation',
      status: 'Open'
    },
    {
      id: 5,
      type: 'Missing CSRF Protection',
      severity: 'High',
      file: 'api-routes.js',
      line: 89,
      description: 'API endpoints lack CSRF protection',
      recommendation: 'Implement CSRF tokens for state-changing operations',
      status: 'Open'
    }
  ];

  const features = [
    {
      title: "Automated Vulnerability Scanning",
      description: "AI-powered detection of security vulnerabilities in your codebase",
      icon: Shield,
      price: "Included"
    },
    {
      title: "Code Quality Analysis",
      description: "Comprehensive analysis of code quality and best practices",
      icon: Code,
      price: "Included"
    },
    {
      title: "Compliance Checking",
      description: "Ensure compliance with security standards (OWASP, PCI-DSS, etc.)",
      icon: CheckCircle,
      price: "Included"
    },
    {
      title: "Auto-fix Suggestions",
      description: "Get automated suggestions to fix security issues",
      icon: Zap,
      price: "Included"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of your codebase for new vulnerabilities",
      icon: Activity,
      price: "Pro Feature"
    },
    {
      title: "Custom Rules Engine",
      description: "Create custom security rules for your specific requirements",
      icon: Settings,
      price: "Enterprise"
    }
  ];

  const pricingPlans = [
    {
      name: "Developer",
      price: "$49",
      period: "/month",
      description: "Perfect for individual developers and small projects",
      features: [
        "Up to 5 repositories",
        "100 scans/month",
        "Basic vulnerability detection",
        "Email support",
        "PDF reports"
      ],
      popular: false
    },
    {
      name: "Team",
      price: "$149",
      period: "/month",
      description: "Ideal for development teams and growing companies",
      features: [
        "Up to 25 repositories",
        "Unlimited scans",
        "Advanced vulnerability detection",
        "Priority support",
        "API access",
        "Team collaboration",
        "Custom rules"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations with complex security needs",
      features: [
        "Unlimited repositories",
        "Unlimited scans",
        "Full vulnerability detection",
        "24/7 support",
        "Custom integration",
        "SLA guarantee",
        "Security consulting",
        "Compliance reporting"
      ],
      popular: false
    }
  ];

  const handleStartScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setScanResults(securityIssues);
      setIsScanning(false);
    }, 3000);
  };

  const handleAnalyzeCode = () => {
    if (!codeContent.trim()) return;

    setIsAnalyzing(true);
    // Simulate code analysis
    setTimeout(() => {
      setVulnerabilities([
        {
          type: 'Potential XSS',
          severity: 'Medium',
          line: 15,
          description: 'Unescaped user input detected',
          recommendation: 'Use proper input sanitization'
        }
      ]);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'text-red-400 bg-red-400/10';
      case 'High': return 'text-orange-400 bg-orange-400/10';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'Low': return 'text-green-400 bg-green-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
   </any[]> </any[]><div className={`min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 ${className}`}>
    </div className={`min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 ${className}`}> </div className={`min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 ${className}`}> </div><Helmet>
      </Helmet> </Helmet> </Helmet><title>AI Code Security Auditor Pro - Automated Security Analysis | Zion Tech Gro</title>u</title>p</title>
       <//title> <//title><meta name="description" content="Automated code security analysis with AI Code Security Auditor Pro. Detect vulnerabilities, ensure compliance, and get auto-fix suggestions for your codebase." />
       </meta name="description" content="Automated code security analysis with AI Code Security Auditor Pro. Detect vulnerabilities, ensure compliance, and get auto-fix suggestions for your codebase." /> </meta name="description" content="Automated code security analysis with AI Code Security Auditor Pro. Detect vulnerabilities, ensure compliance, and get auto-fix suggestions for your codebase." /><meta name="keywords" content="code security, vulnerability scanning, security audit, code analysis, OWASP, compliance, security testing" />
       </meta name="keywords" content="code security, vulnerability scanning, security audit, code analysis, OWASP, compliance, security testing" /> </meta name="keywords" content="code security, vulnerability scanning, security audit, code analysis, OWASP, compliance, security testing" /><link rel="canonical" href="https://ziontechgroup.com/ai-code-security-auditor" />
    </link rel="canonical" href="https://ziontechgroup.com/ai-code-security-auditor" /> </link rel="canonical" href="https://ziontechgroup.com/ai-code-security-auditor" /> </Helmet>

      {/* Hero Section */}
     <//Helmet> <//Helmet><div className="relative py-20 overflow-hidden">
       </div className="relative py-20 overflow-hidden"> </div className="relative py-20 overflow-hidden"><div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

       <//div> <//div><div className="container mx-auto px-4 relative z-10">
         </div className="container mx-auto px-4 relative z-10"> </div className="container mx-auto px-4 relative z-10"><div className="text-center mb-16">
           </div className="text-center mb-16"> </div className="text-center mb-16"><div className="inline-flex items-center bg-red-500/10 border border-red-400/20 rounded-full px-6 py-3 mb-8">
            </div className="inline-flex items-center bg-red-500/10 border border-red-400/20 rounded-full px-6 py-3 mb-8"> </div className="inline-flex items-center bg-red-500/10 border border-red-400/20 rounded-full px-6 py-3 mb-8"> </div><Shield className="w-5 h-5 text-red-400 mr-2" />
             </Shield className="w-5 h-5 text-red-400 mr-2" /> </Shield className="w-5 h-5 text-red-400 mr-2" /><span className="text-red-300 font-medium">AI Code Security Auditor </span className="text-red-300 font-medium">P</span className="text-red-300 font-medium">r</span>o</span>
          <//span> <//span> </div>

           <//div> <//div><h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent neon-text">
              Automated Security Analysis
         </h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent neon-text"> </h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent neon-text"> </h1>

           <//h1> <//h1><p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Secure Your Code with AI-Powered Analysis
          </p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"> </p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"> </p>

           <//p> <//p><p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
              Detect vulnerabilities, ensure compliance, and get automated fix suggestions.
              Protect your applications with comprehensive security analysis powered by advanced AI.
          </p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"> </p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"> </p>

           <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            </div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"> </div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"> </div><button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
               </button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"> </button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"><span className="relative z-10">Start Free S</span className="relative z-10">c</span className="relative z-10">a</span>n</span>
               <//span> <//span><ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
               </ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /> </ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /><div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <//div> <//div> </button>

             <//button> <//button><button className="group inline-flex items-center px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
               </button className="group inline-flex items-center px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"> </button className="group inline-flex items-center px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"><Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
            </Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> </Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> </button>
          <//button> <//button> </div>

            {/* Stats */}
           <//div> <//div><div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
             </div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"> </div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"><div className="text-center">
               </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-red-400 mb-2">99</div className="text-3xl font-bold text-red-400 mb-2">.</div className="text-3xl font-bold text-red-400 mb-2">9</div>%</div>
               <//div> <//div><div className="text-gray-400">Detection R</div className="text-gray-400">a</div className="text-gray-400">t</div>e</div>
            <//div> <//div> </div>
             <//div> <//div><div className="text-center">
               </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-orange-400 mb-2">5</div className="text-3xl font-bold text-orange-400 mb-2">0</div>+</div>
               <//div> <//div><div className="text-gray-400">Vulnerability Ty</div className="text-gray-400">p</div className="text-gray-400">e</div>s</div>
            <//div> <//div> </div>
             <//div> <//div><div className="text-center">
               </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-yellow-400 mb-2">1</div className="text-3xl font-bold text-yellow-400 mb-2">0</div>s</div>
               <//div> <//div><div className="text-gray-400">Scan T</div className="text-gray-400">i</div className="text-gray-400">m</div>e</div>
            <//div> <//div> </div>
             <//div> <//div><div className="text-center">
               </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-green-400 mb-2">2</div className="text-3xl font-bold text-green-400 mb-2">4</div className="text-3xl font-bold text-green-400 mb-2">/</div>7</div>
               <//div> <//div><div className="text-gray-400">Monitor</div className="text-gray-400">i</div className="text-gray-400">n</div>g</div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>

      {/* Security Scanner Interface */}
     <//div> <//div><div className="py-20 bg-gradient-to-br from-slate-800 via-red-900 to-slate-800">
       </div className="py-20 bg-gradient-to-br from-slate-800 via-red-900 to-slate-800"> </div className="py-20 bg-gradient-to-br from-slate-800 via-red-900 to-slate-800"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Security Scanner
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Upload your code or connect your repository for instant security analysis
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="max-w-6xl mx-auto">
           </div className="max-w-6xl mx-auto"> </div className="max-w-6xl mx-auto"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Code Input Section */}
             </div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> </div className="grid grid-cols-1 lg:grid-cols-2 gap-12"><div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div><h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                 </h3 className="text-2xl font-bold text-white mb-6 flex items-center"> </h3 className="text-2xl font-bold text-white mb-6 flex items-center"><Code className="w-8 h-8 text-red-400 mr-3" />
                  Code Analysis
              </Code className="w-8 h-8 text-red-400 mr-3" /> </Code className="w-8 h-8 text-red-400 mr-3" /> </h3>

               <//h3> <//h3><div className="space-y-6">
                  {/* File Upload */}
                 </div className="space-y-6"> </div className="space-y-6"><div>
                  </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Code Files
                  </label className="block text-sm font-medium text-gray-300 mb-2"> </label className="block text-sm font-medium text-gray-300 mb-2"> </label>
                   <//label> <//label><div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-red-400 transition-colors cursor-pointer">
                    </div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-red-400 transition-colors cursor-pointer"> </div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-red-400 transition-colors cursor-pointer"> </div><Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                     </Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" /> </Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" /><p className="text-gray-400">Click to upload or drag and dr</p className="text-gray-400">o</p className="text-gray-400">p</p>
                     <//p> <//p><p className="text-gray-500 text-sm">JS, TS, Python, Java, C++, et</p className="text-gray-500 text-sm">c</p className="text-gray-500 text-sm">.</p>
                  <//p> <//p> </div>
                <//div> <//div> </div>

                  {/* Code Input */}
                 <//div> <//div><div>
                  </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">
                      Or Paste Code
                  </label className="block text-sm font-medium text-gray-300 mb-2"> </label className="block text-sm font-medium text-gray-300 mb-2"> </label>
                   <//label> <//label><textarea
                      value={codeContent}
                      onChange={(e) => setCodeContent(e.target.value)}
                      placeholder="Paste your code here for analysis..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 resize-none font-mono text-sm"
                      rows={8}
                    />
                </textarea
                      value={codeContent}
                      onChange={(e) => </textarea
                      value={codeContent}
                      onChange={(e) => </div>

                  {/* Scan Button */}
                 <//div> <//div><button
                    onClick={handleAnalyzeCode}
                    disabled={!codeContent.trim() || isAnalyzing}
                    className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isAnalyzing ? (
                     </button
                    onClick={handleAnalyzeCode}
                    disabled={!codeContent.trim() || isAnalyzing}
                    className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  > </button
                    onClick={handleAnalyzeCode}
                    disabled={!codeContent.trim() || isAnalyzing}
                    className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  ><>
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin inline" />
                        Analyzing Code...
                     </RefreshCw className="w-5 h-5 mr-2 animate-spin inline" /> </RefreshCw className="w-5 h-5 mr-2 animate-spin inline" /></>
                    ) : (
                     <//> <//><>
                        <Search className="w-5 h-5 mr-2 inline" />
                        Analyze Code
                     </Search className="w-5 h-5 mr-2 inline" /> </Search className="w-5 h-5 mr-2 inline" /></>
                    )}
                <//> <//> </button>
              <//button> <//button> </div>
            <//div> <//div> </div>

              {/* Results Section */}
             <//div> <//div><div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div><h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                 </h3 className="text-2xl font-bold text-white mb-6 flex items-center"> </h3 className="text-2xl font-bold text-white mb-6 flex items-center"><Shield className="w-8 h-8 text-red-400 mr-3" />
                  Security Results
              </Shield className="w-8 h-8 text-red-400 mr-3" /> </Shield className="w-8 h-8 text-red-400 mr-3" /> </h3>

               <//h3> <//h3><div className="space-y-4">
                  {vulnerabilities.length > 0 ? (
                    vulnerabilities.map((vuln, index) => (
                     </div className="space-y-4"> </div className="space-y-4"><div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                       </div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10"> </div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10"><div className="flex items-center justify-between mb-2">
                        </div className="flex items-center justify-between mb-2"> </div className="flex items-center justify-between mb-2"> </div><span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(vuln.severity)}`}>
                            {vuln.severity}
                       </span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(vuln.severity)}`}> </span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(vuln.severity)}`}> </span>
                         <//span> <//span><span className="text-gray-400 text-sm">Line {vuln.li</span className="text-gray-400 text-sm">n</span className="text-gray-400 text-sm">e</span>}</span>
                      <//span> <//span> </div>
                       <//div> <//div><h4 className="text-white font-semibold mb-1">{vuln.typ</h4 className="text-white font-semibold mb-1">e</h4 className="text-white font-semibold mb-1">}</h4>
                       <//h4> <//h4><p className="text-gray-300 text-sm mb-2">{vuln.descriptio</p className="text-gray-300 text-sm mb-2">n</p className="text-gray-300 text-sm mb-2">}</p>
                       <//p> <//p><p className="text-green-400 text-sm">{vuln.recommendatio</p className="text-green-400 text-sm">n</p className="text-green-400 text-sm">}</p>
                    <//p> <//p> </div>
                    ))
                  ) : (
                   <//div> <//div><div className="text-center py-8">
                    </div className="text-center py-8"> </div className="text-center py-8"> </div><Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                     </Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" /> </Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" /><p className="text-gray-400">No vulnerabilities detect</p className="text-gray-400">e</p className="text-gray-400">d</p>
                     <//p> <//p><p className="text-gray-500 text-sm">Upload code to start analys</p className="text-gray-500 text-sm">i</p className="text-gray-500 text-sm">s</p>
                  <//p> <//p> </div>
                  )}
              <//div> <//div> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>

      {/* Security Issues Dashboard */}
     <//div> <//div><div className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
       </div className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"> </div className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Security Dashboard
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor and manage security issues across your codebase
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="max-w-6xl mx-auto">
           </div className="max-w-6xl mx-auto"> </div className="max-w-6xl mx-auto"><div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
             </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"><div className="flex items-center justify-between mb-6">
              </div className="flex items-center justify-between mb-6"> </div className="flex items-center justify-between mb-6"> </div><h3 className="text-2xl font-bold text-white">Security Issu</h3 className="text-2xl font-bold text-white">e</h3 className="text-2xl font-bold text-white">s</h3>
               <//h3> <//h3><button
                  onClick={handleStartScan}
                  disabled={isScanning}
                  className="bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50"
                >
                  {isScanning ? (
                   </button
                  onClick={handleStartScan}
                  disabled={isScanning}
                  className="bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50"
                > </button
                  onClick={handleStartScan}
                  disabled={isScanning}
                  className="bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50"
                ><>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin inline" />
                      Scanning...
                   </RefreshCw className="w-4 h-4 mr-2 animate-spin inline" /> </RefreshCw className="w-4 h-4 mr-2 animate-spin inline" /></>
                  ) : (
                   <//> <//><>
                      <Search className="w-4 h-4 mr-2 inline" />
                      Start Scan
                   </Search className="w-4 h-4 mr-2 inline" /> </Search className="w-4 h-4 mr-2 inline" /></>
                  )}
              <//> <//> </button>
            <//button> <//button> </div>

             <//div> <//div><div className="space-y-4">
                {securityIssues.map((issue) => (
                 </div className="space-y-4"> </div className="space-y-4"><div key={issue.id} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors">
                   </div key={issue.id} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors"> </div key={issue.id} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors"><div className="flex items-center justify-between mb-2">
                     </div className="flex items-center justify-between mb-2"> </div className="flex items-center justify-between mb-2"><div className="flex items-center space-x-3">
                      </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"> </div><span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(issue.severity)}`}>
                          {issue.severity}
                     </span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(issue.severity)}`}> </span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(issue.severity)}`}> </span>
                       <//span> <//span><span className="text-white font-semibold">{issue.ty</span className="text-white font-semibold">p</span className="text-white font-semibold">e</span>}</span>
                       <//span> <//span><span className="text-gray-400 text-sm">{issue.file}:{issue.li</span className="text-gray-400 text-sm">n</span className="text-gray-400 text-sm">e</span>}</span>
                    <//span> <//span> </div>
                     <//div> <//div><span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        issue.status === 'Fixed'
                          ? 'text-green-400 bg-green-400/10'
                          : 'text-yellow-400 bg-yellow-400/10'
                      }`}>
                        {issue.status}
                   </span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        issue.status === 'Fixed'
                          ? 'text-green-400 bg-green-400/10'
                          : 'text-yellow-400 bg-yellow-400/10'
                      }`}> </span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        issue.status === 'Fixed'
                          ? 'text-green-400 bg-green-400/10'
                          : 'text-yellow-400 bg-yellow-400/10'
                      }`}> </span>
                  <//span> <//span> </div>
                   <//div> <//div><p className="text-gray-300 mb-2">{issue.descriptio</p className="text-gray-300 mb-2">n</p className="text-gray-300 mb-2">}</p>
                   <//p> <//p><p className="text-green-400 text-sm">{issue.recommendatio</p className="text-green-400 text-sm">n</p className="text-green-400 text-sm">}</p>
                <//p> <//p> </div>
                ))}
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>

      {/* Features Section */}
     <//div> <//div><div className="py-20 bg-gradient-to-br from-slate-800 via-red-900 to-slate-800">
       </div className="py-20 bg-gradient-to-br from-slate-800 via-red-900 to-slate-800"> </div className="py-20 bg-gradient-to-br from-slate-800 via-red-900 to-slate-800"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Security Features
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security analysis tools for modern development
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
             </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"> </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"><div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105">
               </div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105"> </div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105"><div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                </div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-600 rounded-lg flex items-center justify-center mb-4"> </div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-600 rounded-lg flex items-center justify-center mb-4"> </div><feature.icon className="w-6 h-6 text-white" />
              </feature.icon className="w-6 h-6 text-white" /> </feature.icon className="w-6 h-6 text-white" /> </div>
               <//div> <//div><h3 className="text-xl font-bold text-white mb-2">{feature.titl</h3 className="text-xl font-bold text-white mb-2">e</h3 className="text-xl font-bold text-white mb-2">}</h3>
               <//h3> <//h3><p className="text-gray-400 mb-4">{feature.descriptio</p className="text-gray-400 mb-4">n</p className="text-gray-400 mb-4">}</p>
               <//p> <//p><div className="flex items-center justify-between">
                </div className="flex items-center justify-between"> </div className="flex items-center justify-between"> </div><span className="text-red-400 font-semibold">{feature.pri</span className="text-red-400 font-semibold">c</span className="text-red-400 font-semibold">e</span>}</span>
                 <//span> <//span><CheckCircle className="w-5 h-5 text-green-400" />
              </CheckCircle className="w-5 h-5 text-green-400" /> </CheckCircle className="w-5 h-5 text-green-400" /> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>

      {/* Pricing Section */}
     <//div> <//div><div className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
       </div className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"> </div className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Security Plans
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your development needs
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
             </div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"> </div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"><div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-red-400/50 ring-2 ring-red-400/30' : 'border-white/10'}`}>
                {plan.popular && (
                 </div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-red-400/50 ring-2 ring-red-400/30' : 'border-white/10'}`}> </div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-red-400/50 ring-2 ring-red-400/30' : 'border-white/10'}`}><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div><span className="bg-gradient-to-r from-red-400 to-orange-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular
                 </span className="bg-gradient-to-r from-red-400 to-orange-600 text-white text-sm font-bold px-4 py-2 rounded-full"> </span className="bg-gradient-to-r from-red-400 to-orange-600 text-white text-sm font-bold px-4 py-2 rounded-full"> </span>
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
                     </li key={featureIndex} className="flex items-center"> </li key={featureIndex} className="flex items-center"><CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                     </CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" /><span className="text-gray-300">{featu</span className="text-gray-300">r</span className="text-gray-300">e</span>}</span>
                  <//span> <//span> </li>
                  ))}
              <//li> <//li> </ul>

               <//ul> <//ul><button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
              </button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}> </button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}> </button>
            <//button> <//button> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>

      {/* Contact Section */}
     <//div> <//div><div className="py-20 bg-gradient-to-br from-slate-800 via-red-900 to-slate-800">
       </div className="py-20 bg-gradient-to-br from-slate-800 via-red-900 to-slate-800"> </div className="py-20 bg-gradient-to-br from-slate-800 via-red-900 to-slate-800"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Secure Your Code Today
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our security experts to discuss your code security needs
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="max-w-4xl mx-auto">
           </div className="max-w-4xl mx-auto"> </div className="max-w-4xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div><h3 className="text-2xl font-bold text-white mb-6">Contact Informati</h3 className="text-2xl font-bold text-white mb-6">o</h3 className="text-2xl font-bold text-white mb-6">n</h3>
               <//h3> <//h3><div className="space-y-4">
                 </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center">
                  </div className="flex items-center"> </div className="flex items-center"> </div><Phone className="w-5 h-5 text-red-400 mr-3" />
                   </Phone className="w-5 h-5 text-red-400 mr-3" /> </Phone className="w-5 h-5 text-red-400 mr-3" /><a href="tel:+13024640950" className="text-gray-300 hover:text-red-400 transition-colors">
                      +1 (302) 464-0950
                  </a href="tel:+13024640950" className="text-gray-300 hover:text-red-400 transition-colors"> </a href="tel:+13024640950" className="text-gray-300 hover:text-red-400 transition-colors"> </a>
                <//a> <//a> </div>
                 <//div> <//div><div className="flex items-center">
                  </div className="flex items-center"> </div className="flex items-center"> </div><Mail className="w-5 h-5 text-red-400 mr-3" />
                   </Mail className="w-5 h-5 text-red-400 mr-3" /> </Mail className="w-5 h-5 text-red-400 mr-3" /><a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-red-400 transition-colors">
                      kleber@ziontechgroup.com
                  </a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-red-400 transition-colors"> </a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-red-400 transition-colors"> </a>
                <//a> <//a> </div>
                 <//div> <//div><div className="flex items-start">
                  </div className="flex items-start"> </div className="flex items-start"> </div><MapPin className="w-5 h-5 text-red-400 mr-3 mt-1" />
                   </MapPin className="w-5 h-5 text-red-400 mr-3 mt-1" /> </MapPin className="w-5 h-5 text-red-400 mr-3 mt-1" /><div className="text-gray-300">
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
                   </CheckCircle className="w-5 h-5 text-green-400 mr-3" /> </CheckCircle className="w-5 h-5 text-green-400 mr-3" /><span className="text-gray-300">Free security s</span className="text-gray-300">c</span className="text-gray-300">a</span>n</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex items-center">
                  </div className="flex items-center"> </div className="flex items-center"> </div><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-3" /> </CheckCircle className="w-5 h-5 text-green-400 mr-3" /><span className="text-gray-300">No credit card requi</span className="text-gray-300">r</span className="text-gray-300">e</span>d</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex items-center">
                  </div className="flex items-center"> </div className="flex items-center"> </div><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-3" /> </CheckCircle className="w-5 h-5 text-green-400 mr-3" /><span className="text-gray-300">Instant resu</span className="text-gray-300">l</span className="text-gray-300">t</span>s</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex items-center">
                  </div className="flex items-center"> </div className="flex items-center"> </div><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-3" /> </CheckCircle className="w-5 h-5 text-green-400 mr-3" /><span className="text-gray-300">Expert supp</span className="text-gray-300">o</span className="text-gray-300">r</span>t</span>
                <//span> <//span> </div>
              <//div> <//div> </div>
               <//div> <//div><button className="w-full mt-6 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Scan
              </button className="w-full mt-6 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"> </button className="w-full mt-6 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"> </button>
            <//button> <//button> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>
  <//div> <//div> </div>
  );
<//div>}<//div>