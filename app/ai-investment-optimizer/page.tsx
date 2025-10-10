import { Helmet } from 'react-helmet-async';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart3,
  PieChart,
  Target,
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
  Brain,
  Zap,
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

interface InvestmentOptimizerProps {
  className?: string;
}

export default function InvestmentOptimizer({ className = '' }: InvestmentOptimizerProps) {
  const [portfolio, setPortfolio] = useState([
    { symbol: 'AAPL', name: 'Apple Inc.', shares: 100, price: 175.43, value: 17543, allocation: 25.5, change: 2.34 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 50, price: 378.85, value: 18942.5, allocation: 27.6, change: -1.23 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 30, price: 142.56, value: 4276.8, allocation: 6.2, change: 0.87 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', shares: 25, price: 155.12, value: 3878, allocation: 5.6, change: -0.45 },
    { symbol: 'TSLA', name: 'Tesla Inc.', shares: 20, price: 248.50, value: 4970, allocation: 7.2, change: 3.21 },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', shares: 15, price: 875.28, value: 13129.2, allocation: 19.1, change: 1.56 },
    { symbol: 'META', name: 'Meta Platforms Inc.', shares: 40, price: 485.20, value: 19408, allocation: 28.3, change: -2.15 }
  ]);

  const [riskProfile, setRiskProfile] = useState('moderate');
  const [investmentGoal, setInvestmentGoal] = useState('growth');
  const [timeHorizon, setTimeHorizon] = useState('5-10 years');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationResults, setOptimizationResults] = useState<any>(null);

  const totalValue = portfolio.reduce((sum, stock) => sum + stock.value, 0);

  const features = [
    {
      title: "AI Portfolio Analysis",
      description: "Advanced AI analyzes your portfolio and suggests optimizations",
      icon: Brain,
      price: "Included"
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and diversification recommendations",
      icon: Shield,
      price: "Included"
    },
    {
      title: "Market Prediction",
      description: "AI-powered market predictions and trend analysis",
      icon: TrendingUp,
      price: "Included"
    },
    {
      title: "Auto Rebalancing",
      description: "Automatically rebalance your portfolio based on market conditions",
      icon: RefreshCw,
      price: "Included"
    },
    {
      title: "Tax Optimization",
      description: "Minimize tax impact with smart tax-loss harvesting",
      icon: DollarSign,
      price: "Pro Feature"
    },
    {
      title: "Professional Advisor",
      description: "Access to certified financial advisors for complex strategies",
      icon: Users,
      price: "Enterprise"
    }
  ];

  const pricingPlans = [
    {
      name: "Individual",
      price: "$39",
      period: "/month",
      description: "Perfect for individual investors and small portfolios",
      features: [
        "Up to $100K portfolio",
        "Basic AI analysis",
        "Risk assessment",
        "Market predictions",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for serious investors and larger portfolios",
      features: [
        "Up to $1M portfolio",
        "Advanced AI analysis",
        "Auto rebalancing",
        "Tax optimization",
        "Priority support",
        "Real-time alerts",
        "Custom strategies"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For institutional investors and wealth management firms",
      features: [
        "Unlimited portfolio size",
        "Full AI analysis suite",
        "Professional advisor access",
        "Custom integrations",
        "24/7 support",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const handleOptimizePortfolio = () => {
    setIsOptimizing(true);
    // Simulate optimization process
    setTimeout(() => {
      setOptimizationResults({
        expectedReturn: 12.5,
        riskLevel: 'Moderate',
        sharpeRatio: 1.8,
        recommendations: [
          { action: 'Buy', symbol: 'AAPL', shares: 25, reason: 'Strong fundamentals and growth potential' },
          { action: 'Sell', symbol: 'META', shares: 10, reason: 'High volatility and regulatory concerns' },
          { action: 'Hold', symbol: 'MSFT', shares: 50, reason: 'Stable performance and dividend yield' }
        ]
      });

      setIsOptimizing(false);
    }, 3000);
  };

  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-green-400' : 'text-red-400';
  };

  const getChangeIcon = (change: number) => {
    return change >= 0 ? TrendingUp : TrendingDown;
  };

  return (
   </any> </any><div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 ${className}`}>
    </div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 ${className}`}> </div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 ${className}`}> </div><Helmet>
      </Helmet> </Helmet> </Helmet><title>AI Investment Portfolio Optimizer Pro - Advanced Portfolio Management | Zion Tech Gro</title>u</title>p</title>
       <//title> <//title><meta name="description" content="AI-powered investment portfolio optimization with advanced analytics, risk assessment, and auto-rebalancing. Maximize returns and minimize risk with our intelligent investment platform." />
       </meta name="description" content="AI-powered investment portfolio optimization with advanced analytics, risk assessment, and auto-rebalancing. Maximize returns and minimize risk with our intelligent investment platform." /> </meta name="description" content="AI-powered investment portfolio optimization with advanced analytics, risk assessment, and auto-rebalancing. Maximize returns and minimize risk with our intelligent investment platform." /><meta name="keywords" content="investment optimization, portfolio management, AI investing, risk assessment, auto rebalancing, financial planning, wealth management" />
       </meta name="keywords" content="investment optimization, portfolio management, AI investing, risk assessment, auto rebalancing, financial planning, wealth management" /> </meta name="keywords" content="investment optimization, portfolio management, AI investing, risk assessment, auto rebalancing, financial planning, wealth management" /><link rel="canonical" href="https://ziontechgroup.com/ai-investment-optimizer" />
    </link rel="canonical" href="https://ziontechgroup.com/ai-investment-optimizer" /> </link rel="canonical" href="https://ziontechgroup.com/ai-investment-optimizer" /> </Helmet>

      {/* Hero Section */}
     <//Helmet> <//Helmet><div className="relative py-20 overflow-hidden">
       </div className="relative py-20 overflow-hidden"> </div className="relative py-20 overflow-hidden"><div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

       <//div> <//div><div className="container mx-auto px-4 relative z-10">
         </div className="container mx-auto px-4 relative z-10"> </div className="container mx-auto px-4 relative z-10"><div className="text-center mb-16">
           </div className="text-center mb-16"> </div className="text-center mb-16"><div className="inline-flex items-center bg-blue-500/10 border border-blue-400/20 rounded-full px-6 py-3 mb-8">
            </div className="inline-flex items-center bg-blue-500/10 border border-blue-400/20 rounded-full px-6 py-3 mb-8"> </div className="inline-flex items-center bg-blue-500/10 border border-blue-400/20 rounded-full px-6 py-3 mb-8"> </div><TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
             </TrendingUp className="w-5 h-5 text-blue-400 mr-2" /> </TrendingUp className="w-5 h-5 text-blue-400 mr-2" /><span className="text-blue-300 font-medium">AI Investment Portfolio Optimizer </span className="text-blue-300 font-medium">P</span className="text-blue-300 font-medium">r</span>o</span>
          <//span> <//span> </div>

           <//div> <//div><h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              Advanced Portfolio Management
         </h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text"> </h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text"> </h1>

           <//h1> <//h1><p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Maximize Returns with AI-Powered Investment Optimization
          </p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"> </p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"> </p>

           <//p> <//p><p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
              Optimize your investment portfolio with advanced AI analytics, risk assessment,
              and automated rebalancing. Make smarter investment decisions and achieve better returns.
          </p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"> </p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"> </p>

           <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            </div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"> </div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"> </div><button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
               </button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"> </button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"><span className="relative z-10">Start Free Tr</span className="relative z-10">i</span className="relative z-10">a</span>l</span>
               <//span> <//span><ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
               </ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /> </ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /><div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <//div> <//div> </button>

             <//button> <//button><button className="group inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
               </button className="group inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"> </button className="group inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"><Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
            </Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> </Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> </button>
          <//button> <//button> </div>

            {/* Stats */}
           <//div> <//div><div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
             </div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"> </div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"><div className="text-center">
               </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-blue-400 mb-2">15</div className="text-3xl font-bold text-blue-400 mb-2">.</div className="text-3xl font-bold text-blue-400 mb-2">2</div>%</div>
               <//div> <//div><div className="text-gray-400">Average Ret</div className="text-gray-400">u</div className="text-gray-400">r</div>n</div>
            <//div> <//div> </div>
             <//div> <//div><div className="text-center">
               </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-purple-400 mb-2">2</div className="text-3xl font-bold text-purple-400 mb-2">3</div>%</div>
               <//div> <//div><div className="text-gray-400">Risk Reduct</div className="text-gray-400">i</div className="text-gray-400">o</div>n</div>
            <//div> <//div> </div>
             <//div> <//div><div className="text-center">
               </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-cyan-400 mb-2">$2</div className="text-3xl font-bold text-cyan-400 mb-2">.</div className="text-3xl font-bold text-cyan-400 mb-2">3</div>M</div>
               <//div> <//div><div className="text-gray-400">Assets Mana</div className="text-gray-400">g</div className="text-gray-400">e</div>d</div>
            <//div> <//div> </div>
             <//div> <//div><div className="text-center">
               </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-yellow-400 mb-2">9</div className="text-3xl font-bold text-yellow-400 mb-2">8</div>%</div>
               <//div> <//div><div className="text-gray-400">Accuracy R</div className="text-gray-400">a</div className="text-gray-400">t</div>e</div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>

      {/* Portfolio Dashboard */}
     <//div> <//div><div className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800">
       </div className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800"> </div className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Portfolio Dashboard
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor and optimize your investment portfolio with real-time analytics
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="max-w-7xl mx-auto">
           </div className="max-w-7xl mx-auto"> </div className="max-w-7xl mx-auto"><div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Portfolio Overview */}
             </div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> </div className="grid grid-cols-1 lg:grid-cols-3 gap-8"><div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
               </div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"><div className="flex items-center justify-between mb-6">
                </div className="flex items-center justify-between mb-6"> </div className="flex items-center justify-between mb-6"> </div><h3 className="text-2xl font-bold text-white flex items-center">
                   </h3 className="text-2xl font-bold text-white flex items-center"> </h3 className="text-2xl font-bold text-white flex items-center"><PieChart className="w-8 h-8 text-blue-400 mr-3" />
                    Portfolio Holdings
                </PieChart className="w-8 h-8 text-blue-400 mr-3" /> </PieChart className="w-8 h-8 text-blue-400 mr-3" /> </h3>
                 <//h3> <//h3><div className="text-right">
                   </div className="text-right"> </div className="text-right"><div className="text-3xl font-bold text-white">${totalValue.toLocaleString</div className="text-3xl font-bold text-white">(</div className="text-3xl font-bold text-white">)</div>}</div>
                   <//div> <//div><div className="text-gray-400">Total Va</div className="text-gray-400">l</div className="text-gray-400">u</div>e</div>
                <//div> <//div> </div>
              <//div> <//div> </div>

               <//div> <//div><div className="space-y-4">
                  {portfolio.map((stock) => {
                    const ChangeIcon = getChangeIcon(stock.change);
                    return (
                     </div className="space-y-4"> </div className="space-y-4"><div key={stock.symbol} className="bg-white/5 rounded-lg p-4 border border-white/10">
                       </div key={stock.symbol} className="bg-white/5 rounded-lg p-4 border border-white/10"> </div key={stock.symbol} className="bg-white/5 rounded-lg p-4 border border-white/10"><div className="flex items-center justify-between mb-2">
                         </div className="flex items-center justify-between mb-2"> </div className="flex items-center justify-between mb-2"><div className="flex items-center space-x-3">
                           </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                            </div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center"> </div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center"> </div><span className="text-white font-bold text-sm">{stock.symbol.slice(0, </span className="text-white font-bold text-sm">2</span className="text-white font-bold text-sm">)</span>}</span>
                          <//span> <//span> </div>
                           <//div> <//div><div>
                            </div> </div> </div><h4 className="text-white font-semibold">{stock.symbo</h4 className="text-white font-semibold">l</h4 className="text-white font-semibold">}</h4>
                             <//h4> <//h4><p className="text-gray-400 text-sm">{stock.nam</p className="text-gray-400 text-sm">e</p className="text-gray-400 text-sm">}</p>
                          <//p> <//p> </div>
                        <//div> <//div> </div>
                         <//div> <//div><div className="text-right">
                           </div className="text-right"> </div className="text-right"><div className="text-white font-semibold">${stock.value.toLocaleString</div className="text-white font-semibold">(</div className="text-white font-semibold">)</div>}</div>
                           <//div> <//div><div className={`flex items-center ${getChangeColor(stock.change)}`}>
                            </div className={`flex items-center ${getChangeColor(stock.change)}`}> </div className={`flex items-center ${getChangeColor(stock.change)}`}> </div><ChangeIcon className="w-4 h-4 mr-1" />
                             </ChangeIcon className="w-4 h-4 mr-1" /> </ChangeIcon className="w-4 h-4 mr-1" /><span className="text-sm">{stock.change > 0 ? '+' : ''}{stock.chang</span className="text-sm">e</span className="text-sm">}</span>%</span>
                          <//span> <//span> </div>
                        <//div> <//div> </div>
                      <//div> <//div> </div>
                       <//div> <//div><div className="flex items-center justify-between text-sm text-gray-400">
                        </div className="flex items-center justify-between text-sm text-gray-400"> </div className="flex items-center justify-between text-sm text-gray-400"> </div><span>{stock.shares} shares @ ${stock.pri</span>c</span>e</span>}</span>
                         <//span> <//span><span>{stock.allocation}% allocat</span>i</span>o</span>n</span>
                      <//span> <//span> </div>
                    <//div> <//div> </div>
                    );
                  })}
              <//div> <//div> </div>
            <//div> <//div> </div>

              {/* Optimization Panel */}
             <//div> <//div><div className="space-y-8">
                {/* Risk Profile */}
               </div className="space-y-8"> </div className="space-y-8"><div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"> </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"> </div><h3 className="text-xl font-bold text-white mb-4 flex items-center">
                   </h3 className="text-xl font-bold text-white mb-4 flex items-center"> </h3 className="text-xl font-bold text-white mb-4 flex items-center"><Shield className="w-6 h-6 text-blue-400 mr-2" />
                    Risk Profile
                </Shield className="w-6 h-6 text-blue-400 mr-2" /> </Shield className="w-6 h-6 text-blue-400 mr-2" /> </h3>
                 <//h3> <//h3><div className="space-y-4">
                   </div className="space-y-4"> </div className="space-y-4"><div>
                    </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">Risk Toleran</label className="block text-sm font-medium text-gray-300 mb-2">c</label className="block text-sm font-medium text-gray-300 mb-2">e</label>
                     <//label> <//label><select
                        value={riskProfile}
                        onChange={(e) => setRiskProfile(e.target.value)}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                      >
                       </select
                        value={riskProfile}
                        onChange={(e) => </select
                        value={riskProfile}
                        onChange={(e) =><option value="conservative" className="bg-slate-800">Conservati</option value="conservative" className="bg-slate-800">v</option value="conservative" className="bg-slate-800">e</option>
                       <//option> <//option><option value="moderate" className="bg-slate-800">Modera</option value="moderate" className="bg-slate-800">t</option value="moderate" className="bg-slate-800">e</option>
                       <//option> <//option><option value="aggressive" className="bg-slate-800">Aggressi</option value="aggressive" className="bg-slate-800">v</option value="aggressive" className="bg-slate-800">e</option>
                    <//option> <//option> </select>
                  <//select> <//select> </div>
                   <//div> <//div><div>
                    </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">Investment Go</label className="block text-sm font-medium text-gray-300 mb-2">a</label className="block text-sm font-medium text-gray-300 mb-2">l</label>
                     <//label> <//label><select
                        value={investmentGoal}
                        onChange={(e) => setInvestmentGoal(e.target.value)}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                      >
                       </select
                        value={investmentGoal}
                        onChange={(e) => </select
                        value={investmentGoal}
                        onChange={(e) =><option value="income" className="bg-slate-800">Inco</option value="income" className="bg-slate-800">m</option value="income" className="bg-slate-800">e</option>
                       <//option> <//option><option value="growth" className="bg-slate-800">Grow</option value="growth" className="bg-slate-800">t</option value="growth" className="bg-slate-800">h</option>
                       <//option> <//option><option value="balanced" className="bg-slate-800">Balanc</option value="balanced" className="bg-slate-800">e</option value="balanced" className="bg-slate-800">d</option>
                    <//option> <//option> </select>
                  <//select> <//select> </div>
                   <//div> <//div><div>
                    </div> </div> </div><label className="block text-sm font-medium text-gray-300 mb-2">Time Horiz</label className="block text-sm font-medium text-gray-300 mb-2">o</label className="block text-sm font-medium text-gray-300 mb-2">n</label>
                     <//label> <//label><select
                        value={timeHorizon}
                        onChange={(e) => setTimeHorizon(e.target.value)}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                      >
                       </select
                        value={timeHorizon}
                        onChange={(e) => </select
                        value={timeHorizon}
                        onChange={(e) =><option value="1-3 years" className="bg-slate-800">1-3 yea</option value="1-3 years" className="bg-slate-800">r</option value="1-3 years" className="bg-slate-800">s</option>
                       <//option> <//option><option value="3-5 years" className="bg-slate-800">3-5 yea</option value="3-5 years" className="bg-slate-800">r</option value="3-5 years" className="bg-slate-800">s</option>
                       <//option> <//option><option value="5-10 years" className="bg-slate-800">5-10 yea</option value="5-10 years" className="bg-slate-800">r</option value="5-10 years" className="bg-slate-800">s</option>
                       <//option> <//option><option value="10+ years" className="bg-slate-800">10+ yea</option value="10+ years" className="bg-slate-800">r</option value="10+ years" className="bg-slate-800">s</option>
                    <//option> <//option> </select>
                  <//select> <//select> </div>
                <//div> <//div> </div>
              <//div> <//div> </div>

                {/* Optimization Results */}
                {optimizationResults && (
                 <//div> <//div><div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"> </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"> </div><h3 className="text-xl font-bold text-white mb-4 flex items-center">
                     </h3 className="text-xl font-bold text-white mb-4 flex items-center"> </h3 className="text-xl font-bold text-white mb-4 flex items-center"><Target className="w-6 h-6 text-blue-400 mr-2" />
                      Optimization Results
                  </Target className="w-6 h-6 text-blue-400 mr-2" /> </Target className="w-6 h-6 text-blue-400 mr-2" /> </h3>
                   <//h3> <//h3><div className="space-y-4">
                     </div className="space-y-4"> </div className="space-y-4"><div className="flex justify-between">
                      </div className="flex justify-between"> </div className="flex justify-between"> </div><span className="text-gray-300">Expected Ret</span className="text-gray-300">u</span className="text-gray-300">r</span>n</span>
                       <//span> <//span><span className="text-green-400 font-semibold">{optimizationResults.expectedRetur</span className="text-green-400 font-semibold">n</span className="text-green-400 font-semibold">}</span>%</span>
                    <//span> <//span> </div>
                     <//div> <//div><div className="flex justify-between">
                      </div className="flex justify-between"> </div className="flex justify-between"> </div><span className="text-gray-300">Risk Le</span className="text-gray-300">v</span className="text-gray-300">e</span>l</span>
                       <//span> <//span><span className="text-yellow-400 font-semibold">{optimizationResults.riskLev</span className="text-yellow-400 font-semibold">e</span className="text-yellow-400 font-semibold">l</span>}</span>
                    <//span> <//span> </div>
                     <//div> <//div><div className="flex justify-between">
                      </div className="flex justify-between"> </div className="flex justify-between"> </div><span className="text-gray-300">Sharpe Ra</span className="text-gray-300">t</span className="text-gray-300">i</span>o</span>
                       <//span> <//span><span className="text-blue-400 font-semibold">{optimizationResults.sharpeRat</span className="text-blue-400 font-semibold">i</span className="text-blue-400 font-semibold">o</span>}</span>
                    <//span> <//span> </div>
                  <//div> <//div> </div>
                <//div> <//div> </div>
                )}

                {/* Optimize Button */}
               <//div> <//div><button
                  onClick={handleOptimizePortfolio}
                  disabled={isOptimizing}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isOptimizing ? (
                   </button
                  onClick={handleOptimizePortfolio}
                  disabled={isOptimizing}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                > </button
                  onClick={handleOptimizePortfolio}
                  disabled={isOptimizing}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                ><>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin inline" />
                      Optimizing...
                   </RefreshCw className="w-5 h-5 mr-2 animate-spin inline" /> </RefreshCw className="w-5 h-5 mr-2 animate-spin inline" /></>
                  ) : (
                   <//> <//><>
                      <Zap className="w-5 h-5 mr-2 inline" />
                      Optimize Portfolio
                   </Zap className="w-5 h-5 mr-2 inline" /> </Zap className="w-5 h-5 mr-2 inline" /></>
                  )}
              <//> <//> </button>
            <//button> <//button> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>

      {/* Features Section */}
     <//div> <//div><div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
       </div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"> </div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Investment Features
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI-powered tools for intelligent portfolio management
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
             </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"> </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"><div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
               </div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105"> </div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105"><div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                </div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mb-4"> </div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mb-4"> </div><feature.icon className="w-6 h-6 text-white" />
              </feature.icon className="w-6 h-6 text-white" /> </feature.icon className="w-6 h-6 text-white" /> </div>
               <//div> <//div><h3 className="text-xl font-bold text-white mb-2">{feature.titl</h3 className="text-xl font-bold text-white mb-2">e</h3 className="text-xl font-bold text-white mb-2">}</h3>
               <//h3> <//h3><p className="text-gray-400 mb-4">{feature.descriptio</p className="text-gray-400 mb-4">n</p className="text-gray-400 mb-4">}</p>
               <//p> <//p><div className="flex items-center justify-between">
                </div className="flex items-center justify-between"> </div className="flex items-center justify-between"> </div><span className="text-blue-400 font-semibold">{feature.pri</span className="text-blue-400 font-semibold">c</span className="text-blue-400 font-semibold">e</span>}</span>
                 <//span> <//span><CheckCircle className="w-5 h-5 text-green-400" />
              </CheckCircle className="w-5 h-5 text-green-400" /> </CheckCircle className="w-5 h-5 text-green-400" /> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>

      {/* Pricing Section */}
     <//div> <//div><div className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800">
       </div className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800"> </div className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Investment Plans
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the investment optimization plan that fits your portfolio size
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
             </div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"> </div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"><div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-blue-400/50 ring-2 ring-blue-400/30' : 'border-white/10'}`}>
                {plan.popular && (
                 </div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-blue-400/50 ring-2 ring-blue-400/30' : 'border-white/10'}`}> </div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-blue-400/50 ring-2 ring-blue-400/30' : 'border-white/10'}`}><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div><span className="bg-gradient-to-r from-blue-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular
                 </span className="bg-gradient-to-r from-blue-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full"> </span className="bg-gradient-to-r from-blue-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full"> </span>
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
                     </li key={featureIndex} className="flex items-center"> </li key={featureIndex} className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                     </CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" /><span className="text-gray-300">{featu</span className="text-gray-300">r</span className="text-gray-300">e</span>}</span>
                  <//span> <//span> </li>
                  ))}
              <//li> <//li> </ul>

               <//ul> <//ul><button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
              </button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}> </button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}> </button>
            <//button> <//button> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>

      {/* Contact Section */}
     <//div> <//div><div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
       </div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"> </div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"><div className="container mx-auto px-4">
         </div className="container mx-auto px-4"> </div className="container mx-auto px-4"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Start Optimizing Today
          </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"> </h2>
           <//h2> <//h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our investment experts to discuss your portfolio optimization needs
          </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p className="text-xl text-gray-300 max-w-3xl mx-auto"> </p>
        <//p> <//p> </div>

         <//div> <//div><div className="max-w-4xl mx-auto">
           </div className="max-w-4xl mx-auto"> </div className="max-w-4xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"> </div><h3 className="text-2xl font-bold text-white mb-6">Contact Informati</h3 className="text-2xl font-bold text-white mb-6">o</h3 className="text-2xl font-bold text-white mb-6">n</h3>
               <//h3> <//h3><div className="space-y-4">
                 </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center">
                  </div className="flex items-center"> </div className="flex items-center"> </div><Phone className="w-5 h-5 text-blue-400 mr-3" />
                   </Phone className="w-5 h-5 text-blue-400 mr-3" /> </Phone className="w-5 h-5 text-blue-400 mr-3" /><a href="tel:+13024640950" className="text-gray-300 hover:text-blue-400 transition-colors">
                      +1 (302) 464-0950
                  </a href="tel:+13024640950" className="text-gray-300 hover:text-blue-400 transition-colors"> </a href="tel:+13024640950" className="text-gray-300 hover:text-blue-400 transition-colors"> </a>
                <//a> <//a> </div>
                 <//div> <//div><div className="flex items-center">
                  </div className="flex items-center"> </div className="flex items-center"> </div><Mail className="w-5 h-5 text-blue-400 mr-3" />
                   </Mail className="w-5 h-5 text-blue-400 mr-3" /> </Mail className="w-5 h-5 text-blue-400 mr-3" /><a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                      kleber@ziontechgroup.com
                  </a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors"> </a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors"> </a>
                <//a> <//a> </div>
                 <//div> <//div><div className="flex items-start">
                  </div className="flex items-start"> </div className="flex items-start"> </div><MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                   </MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" /> </MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" /><div className="text-gray-300">
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
                   </CheckCircle className="w-5 h-5 text-green-400 mr-3" /> </CheckCircle className="w-5 h-5 text-green-400 mr-3" /><span className="text-gray-300">Free portfolio analy</span className="text-gray-300">s</span className="text-gray-300">i</span>s</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex items-center">
                  </div className="flex items-center"> </div className="flex items-center"> </div><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-3" /> </CheckCircle className="w-5 h-5 text-green-400 mr-3" /><span className="text-gray-300">No minimum investm</span className="text-gray-300">e</span className="text-gray-300">n</span>t</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex items-center">
                  </div className="flex items-center"> </div className="flex items-center"> </div><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-3" /> </CheckCircle className="w-5 h-5 text-green-400 mr-3" /><span className="text-gray-300">30-day money back guaran</span className="text-gray-300">t</span className="text-gray-300">e</span>e</span>
                <//span> <//span> </div>
                 <//div> <//div><div className="flex items-center">
                  </div className="flex items-center"> </div className="flex items-center"> </div><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-3" /> </CheckCircle className="w-5 h-5 text-green-400 mr-3" /><span className="text-gray-300">Expert supp</span className="text-gray-300">o</span className="text-gray-300">r</span>t</span>
                <//span> <//span> </div>
              <//div> <//div> </div>
               <//div> <//div><button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Analysis
              </button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"> </button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"> </button>
            <//button> <//button> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>
  <//div> <//div> </div>
  );
<//div>}<//div>