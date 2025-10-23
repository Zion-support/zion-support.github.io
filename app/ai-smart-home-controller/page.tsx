import { Helmet } from 'react-helmet-async';
import {
  Home,
  Lightbulb,
  Thermometer,
  Shield,
  Camera,
  Speaker,
  Wifi,
  Battery,
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
  WifiOff,
  Signal,
  SignalZero,
  SignalLow,
  SignalMedium,
  SignalHigh,
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
  Thermometer as ThermometerIcon,
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
  Camera as CameraIcon,
  Microphone,
  Speaker as SpeakerIcon,
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

interface SmartHomeControllerProps {
  className?: string;
}

export default function SmartHomeController({ className = '' }: SmartHomeControllerProps) {
  const [devices, setDevices] = useState([
    { id: 1, name: 'Living Room Light', type: 'light', status: 'on', brightness: 80, room: 'Living Room' },
    { id: 2, name: 'Bedroom Light', type: 'light', status: 'off', brightness: 0, room: 'Bedroom' },
    { id: 3, name: 'Thermostat', type: 'thermostat', status: 'on', temperature: 72, room: 'Living Room' },
    { id: 4, name: 'Security Camera', type: 'camera', status: 'on', room: 'Front Door' },
    { id: 5, name: 'Smart Speaker', type: 'speaker', status: 'on', volume: 50, room: 'Living Room' },
    { id: 6, name: 'Door Lock', type: 'lock', status: 'locked', room: 'Front Door' }
  ]);

  const [scenes, setScenes] = useState([
    { id: 1, name: 'Good Morning', icon: Sun, devices: ['Living Room Light', 'Thermostat'], active: false },
    { id: 2, name: 'Movie Night', icon: Video, devices: ['Living Room Light', 'Smart Speaker'], active: false },
    { id: 3, name: 'Sleep Mode', icon: Moon, devices: ['All Lights', 'Thermostat'], active: false },
    { id: 4, name: 'Away Mode', icon: Shield, devices: ['All Lights', 'Door Lock', 'Security Camera'], active: false }
  ]);

  const [energyUsage, setEnergyUsage] = useState({
    today: 45.2,
    thisWeek: 312.8,
    thisMonth: 1284.5,
    savings: 15.3
  });

  const features = [
    {
      title: "Voice Control",
      description: "Control your home with natural voice commands using AI",
      icon: Microphone,
      price: "Included"
    },
    {
      title: "Predictive Maintenance",
      description: "AI predicts when devices need maintenance or replacement",
      icon: Brain,
      price: "Included"
    },
    {
      title: "Energy Optimization",
      description: "Automatically optimize energy usage to reduce costs",
      icon: Zap,
      price: "Included"
    },
    {
      title: "Security Integration",
      description: "Comprehensive security monitoring and alerts",
      icon: Shield,
      price: "Included"
    },
    {
      title: "Custom Scenes",
      description: "Create and manage custom automation scenes",
      icon: Settings,
      price: "Included"
    },
    {
      title: "Mobile App",
      description: "Control your home from anywhere with our mobile app",
      icon: Smartphone,
      price: "Included"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small apartments and single rooms",
      features: [
        "Up to 10 devices",
        "Basic voice control",
        "Mobile app access",
        "Email support",
        "Basic automation"
      ],
      popular: false
    },
    {
      name: "Home",
      price: "$79",
      period: "/month",
      description: "Ideal for medium-sized homes and families",
      features: [
        "Up to 50 devices",
        "Advanced voice control",
        "Predictive maintenance",
        "Energy optimization",
        "Priority support",
        "Custom scenes",
        "Security monitoring"
      ],
      popular: true
    },
    {
      name: "Mansion",
      price: "$199",
      period: "/month",
      description: "For large homes and estates with complex needs",
      features: [
        "Unlimited devices",
        "Premium voice control",
        "Full predictive maintenance",
        "Advanced energy optimization",
        "24/7 support",
        "Custom integrations",
        "Professional installation",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const toggleDevice = (deviceId: number) => {
    setDevices(devices.map(device =>
      device.id === deviceId
        ? { ...device, status: device.status === 'on' ? 'off' : 'on' }
        : device
    ));
  };

  const adjustBrightness = (deviceId: number, brightness: number) => {
    setDevices(devices.map(device =>
      device.id === deviceId
        ? { ...device, brightness }
        : device
    ));
  };

  const adjustTemperature = (deviceId: number, temperature: number) => {
    setDevices(devices.map(device =>
      device.id === deviceId
        ? { ...device, temperature }
        : device
    ));
  };

  const activateScene = (sceneId: number) => {
    setScenes(scenes.map(scene =>
      scene.id === sceneId
        ? { ...scene, active: !scene.active }
        : scene
    ));
  };

      return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 ${className}`}>
      <Helmet>
        <title>AI Smart Home Controller Pro - Intelligent Home Automation | Zion Tech Group</title>
        <meta name="description" content="Control your smart home with AI-powered automation. Voice control, predictive maintenance, energy optimization, and security integration for the ultimate smart home experience." />
        <meta name="keywords" content="smart home, home automation, voice control, IoT, energy optimization, security, predictive maintenance" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-smart-home-controller" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-500/10 border border-green-400/20 rounded-full px-6 py-3 mb-8">
              <Home className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">AI Smart Home Controller Pro</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              Intelligent Home Automation
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Control Your Home with AI-Powered Intelligence
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your home into a smart, energy-efficient, and secure environment.
              Control everything with voice commands, automate routines, and optimize energy usage with advanced AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </button>

              <button className="group inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-400">Device Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">30%</div>
                <div className="text-gray-400">Energy Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-400">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Home Dashboard */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-green-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Smart Home Dashboard
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Control and monitor all your smart devices from one place
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Devices Control */}
              <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Home className="w-8 h-8 text-green-400 mr-3" />
                  Smart Devices
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {devices.map((device) => (
                    <div key={device.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-semibold">{device.name}</h4>
                        <button
                          onClick={() => toggleDevice(device.id)}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            device.status === 'on' ? 'bg-green-500' : 'bg-gray-600'
                          }`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                            device.status === 'on' ? 'translate-x-6' : 'translate-x-0.5'
                          }`} />
                        </button>
                      </div>

                      <p className="text-gray-400 text-sm mb-3">{device.room}</p>

                      {device.type === 'light' && (
                        <div className="space-y-2">
                          <label className="text-gray-300 text-sm">Brightness: {device.brightness}%</label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={device.brightness}
                            onChange={(e) => adjustBrightness(device.id, parseInt(e.target.value))}
                            className="w-full"
                          />
                        </div>
                      )}

                      {device.type === 'thermostat' && (
                        <div className="space-y-2">
                          <label className="text-gray-300 text-sm">Temperature: {device.temperature}°F</label>
                          <input
                            type="range"
                            min="60"
                            max="80"
                            value={device.temperature}
                            onChange={(e) => adjustTemperature(device.id, parseInt(e.target.value))}
                            className="w-full"
                          />
                        </div>
                      )}

                      {device.type === 'speaker' && (
                        <div className="space-y-2">
                          <label className="text-gray-300 text-sm">Volume: {device.volume}%</label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={device.volume}
                            onChange={(e) => setDevices(devices.map(d =>
                              d.id === device.id ? { ...d, volume: parseInt(e.target.value) } : d
                            ))}
                            className="w-full"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Scenes and Energy */}
              <div className="space-y-8">
                {/* Scenes */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Settings className="w-6 h-6 text-green-400 mr-2" />
                    Scenes
                  </h3>
                  <div className="space-y-3">
                    {scenes.map((scene) => (
                      <button
                        key={scene.id}
                        onClick={() => activateScene(scene.id)}
                        className={`w-full p-3 rounded-lg border transition-all ${
                          scene.active
                            ? 'border-green-400 bg-green-400/10'
                            : 'border-white/20 hover:border-green-400/50'
                        }`}
                      >
                        <div className="flex items-center">
                          <scene.icon className="w-5 h-5 text-green-400 mr-3" />
                          <span className="text-white font-medium">{scene.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Energy Usage */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Zap className="w-6 h-6 text-green-400 mr-2" />
                    Energy Usage
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Today</span>
                      <span className="text-white font-semibold">{energyUsage.today} kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">This Week</span>
                      <span className="text-white font-semibold">{energyUsage.thisWeek} kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">This Month</span>
                      <span className="text-white font-semibold">{energyUsage.thisMonth} kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-400">Savings</span>
                      <span className="text-green-400 font-semibold">{energyUsage.savings}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Smart Home Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI-powered features for the ultimate smart home experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-semibold">{feature.price}</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-green-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Smart Home Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the smart home plan that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-green-400/50 ring-2 ring-green-400/30' : 'border-white/10'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-400 to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 transform hover:scale-105'
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
      <div className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Transform Your Home Today
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our smart home experts to get started with your AI-powered home automation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-green-400 mr-3" />
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-green-400 transition-colors">
                      +1 (302) 464-0950
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-green-400 mr-3" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-green-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-green-400 mr-3 mt-1" />
                    <div className="text-gray-300">
                      <div>364 E Main St STE 1008</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get Started</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Free consultation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Professional installation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">30-day money back guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">24/7 support</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
