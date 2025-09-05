<<<<<<< HEAD
import React, { SVGProps } from 'react',
import { logWarn } from '@/utils/productionLogger',
import { Home as LucideHome, Bot as LucideBot, Sparkles as LucideSparkles, User as LucideUser, ArrowRight as LucideArrowRight, BarChart3 as LucideBarChart3, Briefcase as LucideBriefcase, Monitor as LucideMonitor, Server as LucideServer, Bell as LucideBell, Calendar as LucideCalendar, Check as LucideCheck, ChevronDown as LucideChevronDown, ChevronUp as LucideChevronUp, ChevronLeft as LucideChevronLeft, ChevronRight as LucideChevronRight, Plus as LucidePlus, Minus as LucideMinus, X as LucideX, Edit as LucideEdit, Trash as LucideTrash, Settings as LucideSettings, Search as LucideSearch, Filter as LucideFilter, UploadCloud as LucideUploadCloud, DownloadCloud as LucideDownloadCloud, Copy as LucideCopy, ExternalLink as LucideExternalLink, Link as LucideLink, MessageSquare as LucideMessageSquare, Users as LucideUsers, FileText as LucideFileText, Image as LucideImage, AlertTriangle as LucideAlertTriangle, Info as LucideInfo, Mail as LucideMail, Lock as LucideLock, LogOut as LucideLogOut, LogIn as LucideLogIn, ShoppingCart as LucideShoppingCart, CreditCard as LucideCreditCard, DollarSign as LucideDollarSign, Percent as LucidePercent, Award as LucideAward, Activity as LucideActivity, Airplay as LucideAirplay, AlignCenter as LucideAlignCenter, AlignJustify as LucideAlignJustify, AlignLeft as LucideAlignLeft, AlignRight as LucideAlignRight, Anchor as LucideAnchor, Aperture as LucideAperture, Archive as LucideArchive, ArrowDownCircle as LucideArrowDownCircle, ArrowDownLeft as LucideArrowDownLeft, ArrowDownRight as LucideArrowDownRight, ArrowLeftCircle as LucideArrowLeftCircle, ArrowRightCircle as LucideArrowRightCircle, ArrowUpCircle as LucideArrowUpCircle, ArrowUpLeft as LucideArrowUpLeft, ArrowUpRight as LucideArrowUpRight, AtSign as LucideAtSign, BarChart as LucideBarChart, BarChart2 as LucideBarChart2, BatteryCharging as LucideBatteryCharging, Battery as LucideBattery, BellOff as LucideBellOff, Bluetooth as LucideBluetooth, Bold as LucideBold, BookOpen as LucideBookOpen, Book as LucideBook, Bookmark as LucideBookmark, Box as LucideBox, CameraOff as LucideCameraOff, Camera as LucideCamera, Cast as LucideCast, CheckCircle as LucideCheckCircle, CheckSquare as LucideCheckSquare, ChevronDownSquare as LucideChevronDownSquare, ChevronLeftSquare as LucideChevronLeftSquare, ChevronRightSquare as LucideChevronRightSquare, ChevronUpSquare as LucideChevronUpSquare, ChevronsDown as LucideChevronsDown, ChevronsLeft as LucideChevronsLeft, ChevronsRight as LucideChevronsRight, ChevronsUp as LucideChevronsUp, Chrome as LucideChrome, Circle as LucideCircle, Clipboard as LucideClipboard, Clock as LucideClock, CloudDrizzle as LucideCloudDrizzle, CloudLightning as LucideCloudLightning, CloudOff as LucideCloudOff, CloudRain as LucideCloudRain, CloudSnow as LucideCloudSnow, Cloud as LucideCloud, Code as LucideCode, Codepen as LucideCodepen, Codesandbox as LucideCodesandbox, Coffee as LucideCoffee, Columns as LucideColumns, Command as LucideCommand, Compass as LucideCompass, Copyleft as LucideCopyleft, Copyright as LucideCopyright, CornerDownLeft as LucideCornerDownLeft, CornerDownRight as LucideCornerDownRight, CornerLeftDown as LucideCornerLeftDown, CornerLeftUp as LucideCornerLeftUp, CornerRightDown as LucideCornerRightDown, CornerRightUp as LucideCornerRightUp, CornerUpLeft as LucideCornerUpLeft, CornerUpRight as LucideCornerUpRight, Cpu as LucideCpu, Crop as LucideCrop, Crosshair as LucideCrosshair, Database as LucideDatabase, Delete as LucideDelete, Disc as LucideDisc, DivideCircle as LucideDivideCircle, DivideSquare as LucideDivideSquare, Divide as LucideDivide, Download as LucideDownload, Dribbble as LucideDribbble, Droplet as LucideDroplet, Edit2 as LucideEdit2, Edit3 as LucideEdit3, EyeOff as LucideEyeOff, Eye as LucideEye, Facebook as LucideFacebook, FastForward as LucideFastForward, Feather as LucideFeather, Figma as LucideFigma, FileMinus as LucideFileMinus, FilePlus as LucideFilePlus, File as LucideFile, Film as LucideFilm, Flag as LucideFlag, FolderMinus as LucideFolderMinus, FolderPlus as LucideFolderPlus, Folder as LucideFolder, Framer as LucideFramer, Frown as LucideFrown, Gift as LucideGift, GitBranch as LucideGitBranch, GitCommit as LucideGitCommit, GitMerge as LucideGitMerge, GitPullRequest as LucideGitPullRequest, Github as LucideGithub, Gitlab as LucideGitlab, Globe as LucideGlobe, Grid as LucideGrid, HardDrive as LucideHardDrive, Hash as LucideHash, Headphones as LucideHeadphones, Heart as LucideHeart, HelpCircle as LucideHelpCircle, Hexagon as LucideHexagon, Inbox as LucideInbox, Instagram as LucideInstagram, Italic as LucideItalic, Key as LucideKey, Layers as LucideLayers, Layout as LucideLayout, LifeBuoy as LucideLifeBuoy, Link2 as LucideLink2, Linkedin as LucideLinkedin, List as LucideList, Loader as LucideLoader, Loader2 as LucideLoader2, MapPin as LucideMapPin, Map as LucideMap, Maximize2 as LucideMaximize2, Maximize as LucideMaximize, Meh as LucideMeh, Menu as LucideMenu, MessageCircle as LucideMessageCircle, MicOff as LucideMicOff, Mic as LucideMic, Minimize2 as LucideMinimize2, Minimize as LucideMinimize, Moon as LucideMoon, MoreHorizontal as LucideMoreHorizontal, MoreVertical as LucideMoreVertical, MousePointer as LucideMousePointer, Move as LucideMove, Music as LucideMusic, Megaphone as LucideMegaphone, Navigation2 as LucideNavigation2, Navigation as LucideNavigation, Network as LucideNetwork, Octagon as LucideOctagon, Package as LucidePackage, Paperclip as LucidePaperclip, PauseCircle as LucidePauseCircle, Pause as LucidePause, PenTool as LucidePenTool, PhoneCall as LucidePhoneCall, PhoneForwarded as LucidePhoneForwarded, PhoneIncoming as LucidePhoneIncoming, PhoneMissed as LucidePhoneMissed, PhoneOff as LucidePhoneOff, PhoneOutgoing as LucidePhoneOutgoing, Phone as LucidePhone, PieChart as LucidePieChart, PlayCircle as LucidePlayCircle, Play as LucidePlay, Pocket as LucidePocket, Power as LucidePower, PowerOff as LucidePowerOff, Printer as LucidePrinter, Radio as LucideRadio, RefreshCcw as LucideRefreshCcw, RefreshCw as LucideRefreshCw, Repeat as LucideRepeat, Rewind as LucideRewind, RotateCcw as LucideRotateCcw, RotateCw as LucideRotateCw, Recycle as LucideRecycle, Rss as LucideRss, Save as LucideSave, Scissors as LucideScissors, ScreenShare as LucideScreenShare, ScreenShareOff as LucideScreenShareOff, Send as LucideSend, Share2 as LucideShare2, Share as LucideShare, ShieldOff as LucideShieldOff, Shield as LucideShield, ShoppingBag as LucideShoppingBag, Shuffle as LucideShuffle, Sidebar as LucideSidebar, SkipBack as LucideSkipBack, SkipForward as LucideSkipForward, Slack as LucideSlack, Slash as LucideSlash, Sliders as LucideSliders, Smartphone as LucideSmartphone, Smile as LucideSmile, Speaker as LucideSpeaker, Square as LucideSquare, Star as LucideStar, StopCircle as LucideStopCircle, Sun as LucideSun, Sunrise as LucideSunrise, Sunset as LucideSunset, Table as LucideTable, Tablet as LucideTablet, Tag as LucideTag, Target as LucideTarget, Terminal as LucideTerminal, ThumbsDown as LucideThumbsDown, ThumbsUp as LucideThumbsUp, ToggleLeft as LucideToggleLeft, ToggleRight as LucideToggleRight, Trash2 as LucideTrash2, Trello as LucideTrello, TrendingDown as LucideTrendingDown, TrendingUp as LucideTrendingUp, Triangle as LucideTriangle, Truck as LucideTruck, Tv as LucideTv, Twitch as LucideTwitch, Twitter as LucideTwitter, Type as LucideType, Umbrella as LucideUmbrella, Underline as LucideUnderline, Unlock as LucideUnlock, Upload as LucideUpload, UserCheck as LucideUserCheck, UserMinus as LucideUserMinus, UserPlus as LucideUserPlus, UserX as LucideUserX, VideoOff as LucideVideoOff, Video as LucideVideo, Voicemail as LucideVoicemail, Wallet as LucideWallet, Volume1 as LucideVolume1, Volume2 as LucideVolume2, VolumeX as LucideVolumeX, Volume as LucideVolume, Watch as LucideWatch, WifiOff as LucideWifiOff, Wifi as LucideWifi, Wind as LucideWind, XCircle as LucideXCircle, XOctagon as LucideXOctagon, XSquare as LucideXSquare, Youtube as LucideYoutube, ZapOff as LucideZapOff, Zap as LucideZap, ZoomIn as LucideZoomIn, ZoomOut as LucideZoomOut } from 'lucide-react'

export const Home = LucideHome,
export const Bot = LucideBot,
export const Sparkles = LucideSparkles,
export const User = LucideUser,
export const ArrowRight = LucideArrowRight,
export const BarChart3 = LucideBarChart3,
export const Briefcase = LucideBriefcase,
export const BriefcaseIcon = LucideBriefcase,
export const Monitor = LucideMonitor,
export const Server = LucideServer,
export const Bell = LucideBell,
export const Calendar = LucideCalendar,
export const CalendarIcon = LucideCalendar,
export const Check = LucideCheck,
export const CheckIcon = LucideCheck,
export const ChevronDown = LucideChevronDown,
export const ChevronUp = LucideChevronUp,
export const ChevronLeft = LucideChevronLeft,
export const ChevronRight = LucideChevronRight,
export const ChevronRightIcon = LucideChevronRight,
export const Plus = LucidePlus,
export const Minus = LucideMinus,
export const X = LucideX,
export const Edit = LucideEdit,
export const Trash = LucideTrash,
export const Settings = LucideSettings,
export const Search = LucideSearch,
export const Filter = LucideFilter,
export const UploadCloud = LucideUploadCloud,
export const DownloadCloud = LucideDownloadCloud,
export const Copy = LucideCopy,
export const ExternalLink = LucideExternalLink,
export const ExternalLinkIcon = LucideExternalLink,
export const Link = LucideLink,
export const MessageSquare = LucideMessageSquare,
export const MessageSquareIcon = LucideMessageSquare,
export const Users = LucideUsers,
export const FileText = LucideFileText,
export const Image = LucideImage,
export const AlertTriangle = LucideAlertTriangle,
export const Info = LucideInfo,
export const Mail = LucideMail,
export const Lock = LucideLock,
export const LogOut = LucideLogOut,
export const LogIn = LucideLogIn,
export const ShoppingCart = LucideShoppingCart,
export const CreditCard = LucideCreditCard,
export const DollarSign = LucideDollarSign,
export const Percent = LucidePercent,
export const Award = LucideAward,
export const Activity = LucideActivity,
export const Airplay = LucideAirplay,
export const AlignCenter = LucideAlignCenter,
export const AlignJustify = LucideAlignJustify,
export const AlignLeft = LucideAlignLeft,
export const AlignRight = LucideAlignRight,
export const Anchor = LucideAnchor,
export const Aperture = LucideAperture,
export const Archive = LucideArchive,
export const ArrowDownCircle = LucideArrowDownCircle,
export const ArrowDownLeft = LucideArrowDownLeft,
export const ArrowDownRight = LucideArrowDownRight,
export const ArrowLeftCircle = LucideArrowLeftCircle,
export const ArrowRightCircle = LucideArrowRightCircle,
export const ArrowUpCircle = LucideArrowUpCircle,
export const ArrowUpLeft = LucideArrowUpLeft,
export const ArrowUpRight = LucideArrowUpRight,
export const AtSign = LucideAtSign,
export const BarChart = LucideBarChart,
export const BarChart2 = LucideBarChart2,
export const BatteryCharging = LucideBatteryCharging,
export const Battery = LucideBattery,
export const BellOff = LucideBellOff,
export const Bluetooth = LucideBluetooth,
export const Bold = LucideBold,
export const BookOpen = LucideBookOpen,
export const Book = LucideBook,
export const Bookmark = LucideBookmark,
export const Box = LucideBox,
export const CameraOff = LucideCameraOff,
export const Camera = LucideCamera,
export const Cast = LucideCast,
export const CheckCircle = LucideCheckCircle,
export const CheckSquare = LucideCheckSquare,
export const ChevronDownSquare = LucideChevronDownSquare,
export const ChevronLeftSquare = LucideChevronLeftSquare,
export const ChevronRightSquare = LucideChevronRightSquare,
export const ChevronUpSquare = LucideChevronUpSquare,
export const ChevronsDown = LucideChevronsDown,
export const ChevronsLeft = LucideChevronsLeft,
export const ChevronsRight = LucideChevronsRight,
export const ChevronsUp = LucideChevronsUp,
export const Chrome = LucideChrome,
export const Circle = LucideCircle,
export const Clipboard = LucideClipboard,
export const Clock = LucideClock,
export const CloudDrizzle = LucideCloudDrizzle,
export const CloudLightning = LucideCloudLightning,
export const CloudOff = LucideCloudOff,
export const CloudRain = LucideCloudRain,
export const CloudSnow = LucideCloudSnow,
export const Cloud = LucideCloud,
export const Code = LucideCode,
export const Codepen = LucideCodepen,
export const Codesandbox = LucideCodesandbox,
export const Coffee = LucideCoffee,
export const Columns = LucideColumns,
export const Command = LucideCommand,
export const Compass = LucideCompass,
export const Copyleft = LucideCopyleft,
export const Copyright = LucideCopyright,
export const CornerDownLeft = LucideCornerDownLeft,
export const CornerDownRight = LucideCornerDownRight,
export const CornerLeftDown = LucideCornerLeftDown,
export const CornerLeftUp = LucideCornerLeftUp,
export const CornerRightDown = LucideCornerRightDown,
export const CornerRightUp = LucideCornerRightUp,
export const CornerUpLeft = LucideCornerUpLeft,
export const CornerUpRight = LucideCornerUpRight,
export const Cpu = LucideCpu,
export const Crop = LucideCrop,
export const Crosshair = LucideCrosshair,
export const Database = LucideDatabase,
export const Delete = LucideDelete,
export const Disc = LucideDisc,
export const DivideCircle = LucideDivideCircle,
export const DivideSquare = LucideDivideSquare,
export const Divide = LucideDivide,
export const Download = LucideDownload,
export const Dribbble = LucideDribbble,
export const Droplet = LucideDroplet,
export const Edit2 = LucideEdit2,
export const Edit3 = LucideEdit3,
export const EyeOff = LucideEyeOff,
export const Eye = LucideEye,
export const Facebook = LucideFacebook,
export const FastForward = LucideFastForward,
export const Feather = LucideFeather,
export const Figma = LucideFigma,
export const FileMinus = LucideFileMinus,
export const FilePlus = LucideFilePlus,
export const File = LucideFile,
export const Film = LucideFilm,
export const Flag = LucideFlag,
export const FolderMinus = LucideFolderMinus,
export const FolderPlus = LucideFolderPlus,
export const Folder = LucideFolder,
export const Framer = LucideFramer,
export const Frown = LucideFrown,
export const Gift = LucideGift,
export const GitBranch = LucideGitBranch,
export const GitCommit = LucideGitCommit,
export const GitMerge = LucideGitMerge,
export const GitPullRequest = LucideGitPullRequest,
export const Github = LucideGithub,
export const Gitlab = LucideGitlab,
export const Globe = LucideGlobe,
export const Grid = LucideGrid,
export const HardDrive = LucideHardDrive,
export const Hash = LucideHash,
export const Headphones = LucideHeadphones,
export const Heart = LucideHeart,
export const HelpCircle = LucideHelpCircle,
export const Hexagon = LucideHexagon,
export const Inbox = LucideInbox,
export const Instagram = LucideInstagram,
export const Italic = LucideItalic,
export const Key = LucideKey,
export const Layers = LucideLayers,
export const Layout = LucideLayout,
export const LifeBuoy = LucideLifeBuoy,
export const Link2 = LucideLink2,
export const Linkedin = LucideLinkedin,
export const List = LucideList,
export const Loader = LucideLoader,
export const Loader2 = LucideLoader2,
export const MapPin = LucideMapPin,
export const Map = LucideMap,
export const Maximize2 = LucideMaximize2,
export const Maximize = LucideMaximize,
export const Meh = LucideMeh,
export const Menu = LucideMenu,
export const MessageCircle = LucideMessageCircle,
export const MicOff = LucideMicOff,
export const Mic = LucideMic,
export const Minimize2 = LucideMinimize2,
export const Minimize = LucideMinimize,
export const Moon = LucideMoon,
export const MoreHorizontal = LucideMoreHorizontal,
export const MoreHorizontalIcon = LucideMoreHorizontal,
export const MoreVertical = LucideMoreVertical,
export const MousePointer = LucideMousePointer,
export const Move = LucideMove,
export const Music = LucideMusic,
export const Megaphone = LucideMegaphone,
export const Navigation2 = LucideNavigation2,
export const Navigation = LucideNavigation,
export const Network = LucideNetwork,
export const Octagon = LucideOctagon,
export const Package = LucidePackage,
export const Paperclip = LucidePaperclip,
export const PauseCircle = LucidePauseCircle,
export const Pause = LucidePause,
export const PenTool = LucidePenTool,
export const PhoneCall = LucidePhoneCall,
export const PhoneForwarded = LucidePhoneForwarded,
export const PhoneIncoming = LucidePhoneIncoming,
export const PhoneMissed = LucidePhoneMissed,
export const PhoneOff = LucidePhoneOff,
export const PhoneOutgoing = LucidePhoneOutgoing,
export const Phone = LucidePhone,
export const PieChart = LucidePieChart,
export const PlayCircle = LucidePlayCircle,
export const Play = LucidePlay,
export const Pocket = LucidePocket,
export const Power = LucidePower,
export const PowerOff = LucidePowerOff,
export const Printer = LucidePrinter,
export const Radio = LucideRadio,
export const RefreshCcw = LucideRefreshCcw,
export const RefreshCw = LucideRefreshCw,
export const Repeat = LucideRepeat,
export const Rewind = LucideRewind,
export const RotateCcw = LucideRotateCcw,
export const RotateCw = LucideRotateCw,
export const Recycle = LucideRecycle,
export const Rss = LucideRss,
export const Save = LucideSave,
export const Scissors = LucideScissors,
export const ScreenShare = LucideScreenShare,
export const ScreenShareOff = LucideScreenShareOff,
export const ScreenShareOffIcon = LucideScreenShareOff,
export const Send = LucideSend,
export const Share2 = LucideShare2,
export const Share = LucideShare,
export const ShieldOff = LucideShieldOff,
export const Shield = LucideShield,
export const ShoppingBag = LucideShoppingBag,
export const Shuffle = LucideShuffle,
export const Sidebar = LucideSidebar,
export const SkipBack = LucideSkipBack,
export const SkipForward = LucideSkipForward,
export const Slack = LucideSlack,
export const Slash = LucideSlash,
export const Sliders = LucideSliders,
export const Smartphone = LucideSmartphone,
export const Smile = LucideSmile,
export const Speaker = LucideSpeaker,
export const Square = LucideSquare,
export const Star = LucideStar,
export const StopCircle = LucideStopCircle,
export const Sun = LucideSun,
export const Sunrise = LucideSunrise,
export const Sunset = LucideSunset,
export const Table = LucideTable,
export const Tablet = LucideTablet,
export const Tag = LucideTag,
export const Target = LucideTarget,
export const Terminal = LucideTerminal,
export const ThumbsDown = LucideThumbsDown,
export const ThumbsUp = LucideThumbsUp,
export const ToggleLeft = LucideToggleLeft,
export const ToggleRight = LucideToggleRight,
export const Trash2 = LucideTrash2,
export const Trello = LucideTrello,
export const TrendingDown = LucideTrendingDown,
export const TrendingUp = LucideTrendingUp,
export const Triangle = LucideTriangle,
export const Truck = LucideTruck,
export const Tv = LucideTv,
export const Twitch = LucideTwitch,
export const Twitter = LucideTwitter,
export const Type = LucideType,
export const Umbrella = LucideUmbrella,
export const Underline = LucideUnderline,
export const Unlock = LucideUnlock,
export const Upload = LucideUpload,
export const UserCheck = LucideUserCheck,
export const UserMinus = LucideUserMinus,
export const UserPlus = LucideUserPlus,
export const UserX = LucideUserX,
export const VideoOff = LucideVideoOff,
export const Video = LucideVideo,
export const Voicemail = LucideVoicemail,
export const Wallet = LucideWallet,
export const Volume1 = LucideVolume1,
export const Volume2 = LucideVolume2,
export const VolumeX = LucideVolumeX,
export const Volume = LucideVolume,
export const Watch = LucideWatch,
export const WifiOff = LucideWifiOff,
export const Wifi = LucideWifi,
export const Wind = LucideWind,
export const XCircle = LucideXCircle,
export const XOctagon = LucideXOctagon,
export const XSquare = LucideXSquare,
export const Youtube = LucideYoutube,
export const ZapOff = LucideZapOff,
export const Zap = LucideZap,
export const ZoomIn = LucideZoomIn,
export const ZoomOut = LucideZoomOut,

// Define the props for your Icon component
export type IconProps = SVGProps<SVGSVGElement> & {
  name: keyof typeof iconMap,
  size?: number | string,
  className?: string
},

// Create a map of icon names to component references
const iconMap = {
  home: LucideHome,
  'bot-message-square': LucideBot, // Assuming Bot is used for bot-message-square
  sparkles: LucideSparkles,
  user: LucideUser,
  briefcase: LucideBriefcase,
  server: LucideServer,
  bell: LucideBell,
  calendar: LucideCalendar,
  check: LucideCheck,
  'chevron-down': LucideChevronDown,
  'chevron-up': LucideChevronUp,
  'chevron-left': LucideChevronLeft,
  'chevron-right': LucideChevronRight,
  plus: LucidePlus,
  minus: LucideMinus,
  x: LucideX,
  edit: LucideEdit,
  trash: LucideTrash,
  settings: LucideSettings,
  search: LucideSearch,
  filter: LucideFilter,
  'upload-cloud': LucideUploadCloud,
  'download-cloud': LucideDownloadCloud,
  copy: LucideCopy,
  'external-link': LucideExternalLink,
  link: LucideLink,
  'message-square': LucideMessageSquare,
  users: LucideUsers,
  'file-text': LucideFileText,
  image: LucideImage,
  'alert-triangle': LucideAlertTriangle,
  info: LucideInfo,
  mail: LucideMail,
  lock: LucideLock,
  'log-out': LucideLogOut,
  'log-in': LucideLogIn,
  'shopping-cart': LucideShoppingCart,
  'credit-card': LucideCreditCard,
  'dollar-sign': LucideDollarSign,
  percent: LucidePercent,
  award: LucideAward,
  activity: LucideActivity,
  airplay: LucideAirplay,
  'align-center': LucideAlignCenter,
  'align-justify': LucideAlignJustify,
  'align-left': LucideAlignLeft,
  'align-right': LucideAlignRight,
  anchor: LucideAnchor,
  aperture: LucideAperture,
  archive: LucideArchive,
  'arrow-down-circle': LucideArrowDownCircle,
  'arrow-down-left': LucideArrowDownLeft,
  'arrow-down-right': LucideArrowDownRight,
  'arrow-left-circle': LucideArrowLeftCircle,
  'arrow-right': LucideArrowRight,
  'arrow-right-circle': LucideArrowRightCircle,
  'arrow-up-circle': LucideArrowUpCircle,
  'arrow-up-left': LucideArrowUpLeft,
  'arrow-up-right': LucideArrowUpRight,
  'at-sign': LucideAtSign,
  'bar-chart': LucideBarChart,
  'bar-chart-2': LucideBarChart2,
  'bar-chart-3': LucideBarChart3,
  'battery-charging': LucideBatteryCharging,
  battery: LucideBattery,
  'bell-off': LucideBellOff,
  bluetooth: LucideBluetooth,
  bold: LucideBold,
  'book-open': LucideBookOpen,
  book: LucideBook,
  bookmark: LucideBookmark,
  box: LucideBox,
  'camera-off': LucideCameraOff,
  camera: LucideCamera,
  cast: LucideCast,
  'check-circle': LucideCheckCircle,
  'check-square': LucideCheckSquare,
  'chevron-down-square': LucideChevronDownSquare,
  'chevron-left-square': LucideChevronLeftSquare,
  'chevron-right-square': LucideChevronRightSquare,
  'chevron-up-square': LucideChevronUpSquare,
  'chevrons-down': LucideChevronsDown,
  'chevrons-left': LucideChevronsLeft,
  'chevrons-right': LucideChevronsRight,
  'chevrons-up': LucideChevronsUp,
  chrome: LucideChrome,
  circle: LucideCircle,
  clipboard: LucideClipboard,
  clock: LucideClock,
  'cloud-drizzle': LucideCloudDrizzle,
  'cloud-lightning': LucideCloudLightning,
  'cloud-off': LucideCloudOff,
  'cloud-rain': LucideCloudRain,
  'cloud-snow': LucideCloudSnow,
  cloud: LucideCloud,
  code: LucideCode,
  codepen: LucideCodepen,
  codesandbox: LucideCodesandbox,
  coffee: LucideCoffee,
  columns: LucideColumns,
  command: LucideCommand,
  compass: LucideCompass,
  copyleft: LucideCopyleft,
  copyright: LucideCopyright,
  'corner-down-left': LucideCornerDownLeft,
  'corner-down-right': LucideCornerDownRight,
  'corner-left-down': LucideCornerLeftDown,
  'corner-left-up': LucideCornerLeftUp,
  'corner-right-down': LucideCornerRightDown,
  'corner-right-up': LucideCornerRightUp,
  'corner-up-left': LucideCornerUpLeft,
  'corner-up-right': LucideCornerUpRight,
  cpu: LucideCpu,
  crop: LucideCrop,
  crosshair: LucideCrosshair,
  database: LucideDatabase,
  delete: LucideDelete,
  disc: LucideDisc,
  'divide-circle': LucideDivideCircle,
  'divide-square': LucideDivideSquare,
  divide: LucideDivide,
  download: LucideDownload,
  dribbble: LucideDribbble,
  droplet: LucideDroplet,
  'edit-2': LucideEdit2,
  'edit-3': LucideEdit3,
  'eye-off': LucideEyeOff,
  eye: LucideEye,
  facebook: LucideFacebook,
  'fast-forward': LucideFastForward,
  feather: LucideFeather,
  figma: LucideFigma,
  'file-minus': LucideFileMinus,
  'file-plus': LucideFilePlus,
  file: LucideFile,
  film: LucideFilm,
  flag: LucideFlag,
  'folder-minus': LucideFolderMinus,
  'folder-plus': LucideFolderPlus,
  folder: LucideFolder,
  framer: LucideFramer,
  frown: LucideFrown,
  gift: LucideGift,
  'git-branch': LucideGitBranch,
  'git-commit': LucideGitCommit,
  'git-merge': LucideGitMerge,
  'git-pull-request': LucideGitPullRequest,
  github: LucideGithub,
  gitlab: LucideGitlab,
  globe: LucideGlobe,
  grid: LucideGrid,
  'hard-drive': LucideHardDrive,
  hash: LucideHash,
  headphones: LucideHeadphones,
  heart: LucideHeart,
  'help-circle': LucideHelpCircle,
  hexagon: LucideHexagon,
  inbox: LucideInbox,
  instagram: LucideInstagram,
  italic: LucideItalic,
  key: LucideKey,
  layers: LucideLayers,
  layout: LucideLayout,
  'life-buoy': LucideLifeBuoy,
  'link-2': LucideLink2,
  linkedin: LucideLinkedin,
  list: LucideList,
  loader: LucideLoader,
  'loader-2': LucideLoader2,
  'map-pin': LucideMapPin,
  map: LucideMap,
  'maximize-2': LucideMaximize2,
  maximize: LucideMaximize,
  meh: LucideMeh,
  menu: LucideMenu,
  'message-circle': LucideMessageCircle,
  'mic-off': LucideMicOff,
  mic: LucideMic,
  'minimize-2': LucideMinimize2,
  minimize: LucideMinimize,
  monitor: LucideMonitor,
  moon: LucideMoon,
  'more-horizontal': LucideMoreHorizontal,
  'more-vertical': LucideMoreVertical,
  'mouse-pointer': LucideMousePointer,
  move: LucideMove,
  music: LucideMusic,
  megaphone: LucideMegaphone,
  'navigation-2': LucideNavigation2,
  navigation: LucideNavigation,
  network: LucideNetwork,
  octagon: LucideOctagon,
  package: LucidePackage,
  paperclip: LucidePaperclip,
  'pause-circle': LucidePauseCircle,
  pause: LucidePause,
  'pen-tool': LucidePenTool,
  'phone-call': LucidePhoneCall,
  'phone-forwarded': LucidePhoneForwarded,
  'phone-incoming': LucidePhoneIncoming,
  'phone-missed': LucidePhoneMissed,
  'phone-off': LucidePhoneOff,
  'phone-outgoing': LucidePhoneOutgoing,
  phone: LucidePhone,
  'pie-chart': LucidePieChart,
  'play-circle': LucidePlayCircle,
  play: LucidePlay,
  pocket: LucidePocket,
  power: LucidePower,
  'power-off': LucidePowerOff,
  printer: LucidePrinter,
  radio: LucideRadio,
  'refresh-ccw': LucideRefreshCcw,
  'refresh-cw': LucideRefreshCw,
  repeat: LucideRepeat,
  rewind: LucideRewind,
  'rotate-ccw': LucideRotateCcw,
  'rotate-cw': LucideRotateCw,
  recycle: LucideRecycle,
  rss: LucideRss,
  save: LucideSave,
  scissors: LucideScissors,
  'screen-share': LucideScreenShare,
  'screen-share-off': LucideScreenShareOff,
  send: LucideSend,
  share2: LucideShare2,
  share: LucideShare,
  'shield-off': LucideShieldOff,
  shield: LucideShield,
  'shopping-bag': LucideShoppingBag,
  shuffle: LucideShuffle,
  sidebar: LucideSidebar,
  'skip-back': LucideSkipBack,
  'skip-forward': LucideSkipForward,
  slack: LucideSlack,
  slash: LucideSlash,
  sliders: LucideSliders,
  smartphone: LucideSmartphone,
  smile: LucideSmile,
  speaker: LucideSpeaker,
  square: LucideSquare,
  star: LucideStar,
  'stop-circle': LucideStopCircle,
  sun: LucideSun,
  sunrise: LucideSunrise,
  sunset: LucideSunset,
  table: LucideTable,
  tablet: LucideTablet,
  tag: LucideTag,
  target: LucideTarget,
  terminal: LucideTerminal,
  'thumbs-down': LucideThumbsDown,
  'thumbs-up': LucideThumbsUp,
  'toggle-left': LucideToggleLeft,
  'toggle-right': LucideToggleRight,
  'trash-2': LucideTrash2,
  trello: LucideTrello,
  'trending-down': LucideTrendingDown,
  'trending-up': LucideTrendingUp,
  triangle: LucideTriangle,
  truck: LucideTruck,
  tv: LucideTv,
  twitch: LucideTwitch,
  twitter: LucideTwitter,
  type: LucideType,
  umbrella: LucideUmbrella,
  underline: LucideUnderline,
  unlock: LucideUnlock,
  upload: LucideUpload,
  'user-check': LucideUserCheck,
  'user-minus': LucideUserMinus,
  'user-plus': LucideUserPlus,
  'user-x': LucideUserX,
  'video-off': LucideVideoOff,
  video: LucideVideo,
  voicemail: LucideVoicemail,
  wallet: LucideWallet,
  'volume-1': LucideVolume1,
  'volume-2': LucideVolume2,
  'volume-x': LucideVolumeX,
  volume: LucideVolume,
  watch: LucideWatch,
  'wifi-off': LucideWifiOff,
  wifi: LucideWifi,
  wind: LucideWind,
  'x-circle': LucideXCircle,
  'x-octagon': LucideXOctagon,
  'x-square': LucideXSquare,
  youtube: LucideYoutube,
  'zap-off': LucideZapOff,
  zap: LucideZap,
  'zoom-in': LucideZoomIn,
  'zoom-out': LucideZoomOut},

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24, // Default size
  className,
  ...props
}) => {
  const LucideIconComponent = iconMap[name],
=======
import React, {_SVGProps} from 'react';

export const _Home = LucideHome;
export const _Bot = LucideBot;
export const _Sparkles = LucideSparkles;
export const _User = LucideUser;
export const _ArrowRight = LucideArrowRight;
export const _BarChart3 = LucideBarChart3;
export const _Briefcase = LucideBriefcase;
export const _BriefcaseIcon = LucideBriefcase;
export const _Monitor = LucideMonitor;
export const _Server = LucideServer;
export const _Bell = LucideBell;
export const _Calendar = LucideCalendar;
export const _CalendarIcon = LucideCalendar;
export const _Check = LucideCheck;
export const _CheckIcon = LucideCheck;
export const _ChevronDown = LucideChevronDown;
export const _ChevronUp = LucideChevronUp;
export const _ChevronLeft = LucideChevronLeft;
export const _ChevronRight = LucideChevronRight;
export const _ChevronRightIcon = LucideChevronRight;
export const _Plus = LucidePlus;
export const _Minus = LucideMinus;
export const _X = LucideX;
export const _Edit = LucideEdit;
export const _Trash = LucideTrash;
export const _Settings = LucideSettings;
export const _Search = LucideSearch;
export const _Filter = LucideFilter;
export const _UploadCloud = LucideUploadCloud;
export const _DownloadCloud = LucideDownloadCloud;
export const _Copy = LucideCopy;
export const _ExternalLink = LucideExternalLink;
export const _ExternalLinkIcon = LucideExternalLink;
export const _Link = LucideLink;
export const _MessageSquare = LucideMessageSquare;
export const _MessageSquareIcon = LucideMessageSquare;
export const _Users = LucideUsers;
export const _FileText = LucideFileText;
export const _Image = LucideImage;
export const _AlertTriangle = LucideAlertTriangle;
export const _Info = LucideInfo;
export const _Mail = LucideMail;
export const _Lock = LucideLock;
export const _LogOut = LucideLogOut;
export const _LogIn = LucideLogIn;
export const _ShoppingCart = LucideShoppingCart;
export const _CreditCard = LucideCreditCard;
export const _DollarSign = LucideDollarSign;
export const _Percent = LucidePercent;
export const _Award = LucideAward;
export const _Activity = LucideActivity;
export const _Airplay = LucideAirplay;
export const _AlignCenter = LucideAlignCenter;
export const _AlignJustify = LucideAlignJustify;
export const _AlignLeft = LucideAlignLeft;
export const _AlignRight = LucideAlignRight;
export const _Anchor = LucideAnchor;
export const _Aperture = LucideAperture;
export const _Archive = LucideArchive;
export const _ArrowDownCircle = LucideArrowDownCircle;
export const _ArrowDownLeft = LucideArrowDownLeft;
export const _ArrowDownRight = LucideArrowDownRight;
export const _ArrowLeftCircle = LucideArrowLeftCircle;
export const _ArrowRightCircle = LucideArrowRightCircle;
export const _ArrowUpCircle = LucideArrowUpCircle;
export const _ArrowUpLeft = LucideArrowUpLeft;
export const _ArrowUpRight = LucideArrowUpRight;
export const _AtSign = LucideAtSign;
export const _BarChart = LucideBarChart;
export const _BarChart2 = LucideBarChart2;
export const _BatteryCharging = LucideBatteryCharging;
export const _Battery = LucideBattery;
export const _BellOff = LucideBellOff;
export const _Bluetooth = LucideBluetooth;
export const _Bold = LucideBold;
export const _BookOpen = LucideBookOpen;
export const _Book = LucideBook;
export const _Bookmark = LucideBookmark;
export const _Box = LucideBox;
export const _CameraOff = LucideCameraOff;
export const _Camera = LucideCamera;
export const _Cast = LucideCast;
export const _CheckCircle = LucideCheckCircle;
export const _CheckSquare = LucideCheckSquare;
export const _ChevronDownSquare = LucideChevronDownSquare;
export const _ChevronLeftSquare = LucideChevronLeftSquare;
export const _ChevronRightSquare = LucideChevronRightSquare;
export const _ChevronUpSquare = LucideChevronUpSquare;
export const _ChevronsDown = LucideChevronsDown;
export const _ChevronsLeft = LucideChevronsLeft;
export const _ChevronsRight = LucideChevronsRight;
export const _ChevronsUp = LucideChevronsUp;
export const _Chrome = LucideChrome;
export const _Circle = LucideCircle;
export const _Clipboard = LucideClipboard;
export const _Clock = LucideClock;
export const _CloudDrizzle = LucideCloudDrizzle;
export const _CloudLightning = LucideCloudLightning;
export const _CloudOff = LucideCloudOff;
export const _CloudRain = LucideCloudRain;
export const _CloudSnow = LucideCloudSnow;
export const _Cloud = LucideCloud;
export const _Code = LucideCode;
export const _Codepen = LucideCodepen;
export const _Codesandbox = LucideCodesandbox;
export const _Coffee = LucideCoffee;
export const _Columns = LucideColumns;
export const _Command = LucideCommand;
export const _Compass = LucideCompass;
export const _Copyleft = LucideCopyleft;
export const _Copyright = LucideCopyright;
export const _CornerDownLeft = LucideCornerDownLeft;
export const _CornerDownRight = LucideCornerDownRight;
export const _CornerLeftDown = LucideCornerLeftDown;
export const _CornerLeftUp = LucideCornerLeftUp;
export const _CornerRightDown = LucideCornerRightDown;
export const _CornerRightUp = LucideCornerRightUp;
export const _CornerUpLeft = LucideCornerUpLeft;
export const _CornerUpRight = LucideCornerUpRight;
export const _Cpu = LucideCpu;
export const _Crop = LucideCrop;
export const _Crosshair = LucideCrosshair;
export const _Database = LucideDatabase;
export const _Delete = LucideDelete;
export const _Disc = LucideDisc;
export const _DivideCircle = LucideDivideCircle;
export const _DivideSquare = LucideDivideSquare;
export const _Divide = LucideDivide;
export const _Download = LucideDownload;
export const _Dribbble = LucideDribbble;
export const _Droplet = LucideDroplet;
export const _Edit2 = LucideEdit2;
export const _Edit3 = LucideEdit3;
export const _EyeOff = LucideEyeOff;
export const _Eye = LucideEye;
export const _Facebook = LucideFacebook;
export const _FastForward = LucideFastForward;
export const _Feather = LucideFeather;
export const _Figma = LucideFigma;
export const _FileMinus = LucideFileMinus;
export const _FilePlus = LucideFilePlus;
export const _File = LucideFile;
export const _Film = LucideFilm;
export const _Flag = LucideFlag;
export const _FolderMinus = LucideFolderMinus;
export const _FolderPlus = LucideFolderPlus;
export const _Folder = LucideFolder;
export const _Framer = LucideFramer;
export const _Frown = LucideFrown;
export const _Gift = LucideGift;
export const _GitBranch = LucideGitBranch;
export const _GitCommit = LucideGitCommit;
export const _GitMerge = LucideGitMerge;
export const _GitPullRequest = LucideGitPullRequest;
export const _Github = LucideGithub;
export const _Gitlab = LucideGitlab;
export const _Globe = LucideGlobe;
export const _Grid = LucideGrid;
export const _HardDrive = LucideHardDrive;
export const _Hash = LucideHash;
export const _Headphones = LucideHeadphones;
export const _Heart = LucideHeart;
export const _HelpCircle = LucideHelpCircle;
export const _Hexagon = LucideHexagon;
export const _Inbox = LucideInbox;
export const _Instagram = LucideInstagram;
export const _Italic = LucideItalic;
export const _Key = LucideKey;
export const _Layers = LucideLayers;
export const _Layout = LucideLayout;
export const _LifeBuoy = LucideLifeBuoy;
export const _Link2 = LucideLink2;
export const _Linkedin = LucideLinkedin;
export const _List = LucideList;
export const _Loader = LucideLoader;
export const _Loader2 = LucideLoader2;
export const _MapPin = LucideMapPin;
export const _Map = LucideMap;
export const _Maximize2 = LucideMaximize2;
export const _Maximize = LucideMaximize;
export const _Meh = LucideMeh;
export const _Menu = LucideMenu;
export const _MessageCircle = LucideMessageCircle;
export const _MicOff = LucideMicOff;
export const _Mic = LucideMic;
export const _Minimize2 = LucideMinimize2;
export const _Minimize = LucideMinimize;
export const _Moon = LucideMoon;
export const _MoreHorizontal = LucideMoreHorizontal;
export const _MoreHorizontalIcon = LucideMoreHorizontal;
export const _MoreVertical = LucideMoreVertical;
export const _MousePointer = LucideMousePointer;
export const _Move = LucideMove;
export const _Music = LucideMusic;
export const _Megaphone = LucideMegaphone;
export const _Navigation2 = LucideNavigation2;
export const _Navigation = LucideNavigation;
export const _Network = LucideNetwork;
export const _Octagon = LucideOctagon;
export const _Package = LucidePackage;
export const _Paperclip = LucidePaperclip;
export const _PauseCircle = LucidePauseCircle;
export const _Pause = LucidePause;
export const _PenTool = LucidePenTool;
export const _PhoneCall = LucidePhoneCall;
export const _PhoneForwarded = LucidePhoneForwarded;
export const _PhoneIncoming = LucidePhoneIncoming;
export const _PhoneMissed = LucidePhoneMissed;
export const _PhoneOff = LucidePhoneOff;
export const _PhoneOutgoing = LucidePhoneOutgoing;
export const _Phone = LucidePhone;
export const _PieChart = LucidePieChart;
export const _PlayCircle = LucidePlayCircle;
export const _Play = LucidePlay;
export const _Pocket = LucidePocket;
export const _Power = LucidePower;
export const _PowerOff = LucidePowerOff;
export const _Printer = LucidePrinter;
export const _Radio = LucideRadio;
export const _RefreshCcw = LucideRefreshCcw;
export const _RefreshCw = LucideRefreshCw;
export const _Repeat = LucideRepeat;
export const _Rewind = LucideRewind;
export const _RotateCcw = LucideRotateCcw;
export const _RotateCw = LucideRotateCw;
export const _Recycle = LucideRecycle;
export const _Rss = LucideRss;
export const _Save = LucideSave;
export const _Scissors = LucideScissors;
export const _ScreenShare = LucideScreenShare;
export const _ScreenShareOff = LucideScreenShareOff;
export const _ScreenShareOffIcon = LucideScreenShareOff;
export const _Send = LucideSend;
export const _Share2 = LucideShare2;
export const _Share = LucideShare;
export const _ShieldOff = LucideShieldOff;
export const _Shield = LucideShield;
export const _ShoppingBag = LucideShoppingBag;
export const _Shuffle = LucideShuffle;
export const _Sidebar = LucideSidebar;
export const _SkipBack = LucideSkipBack;
export const _SkipForward = LucideSkipForward;
export const _Slack = LucideSlack;
export const _Slash = LucideSlash;
export const _Sliders = LucideSliders;
export const _Smartphone = LucideSmartphone;
export const _Smile = LucideSmile;
export const _Speaker = LucideSpeaker;
export const _Square = LucideSquare;
export const _Star = LucideStar;
export const _StopCircle = LucideStopCircle;
export const _Sun = LucideSun;
export const _Sunrise = LucideSunrise;
export const _Sunset = LucideSunset;
export const _Table = LucideTable;
export const _Tablet = LucideTablet;
export const _Tag = LucideTag;
export const _Target = LucideTarget;
export const _Terminal = LucideTerminal;
export const _ThumbsDown = LucideThumbsDown;
export const _ThumbsUp = LucideThumbsUp;
export const _ToggleLeft = LucideToggleLeft;
export const _ToggleRight = LucideToggleRight;
export const _Trash2 = LucideTrash2;
export const _Trello = LucideTrello;
export const _TrendingDown = LucideTrendingDown;
export const _TrendingUp = LucideTrendingUp;
export const _Triangle = LucideTriangle;
export const _Truck = LucideTruck;
export const _Tv = LucideTv;
export const _Twitch = LucideTwitch;
export const _Twitter = LucideTwitter;
export const _Type = LucideType;
export const _Umbrella = LucideUmbrella;
export const _Underline = LucideUnderline;
export const _Unlock = LucideUnlock;
export const _Upload = LucideUpload;
export const _UserCheck = LucideUserCheck;
export const _UserMinus = LucideUserMinus;
export const _UserPlus = LucideUserPlus;
export const _UserX = LucideUserX;
export const _VideoOff = LucideVideoOff;
export const _Video = LucideVideo;
export const _Voicemail = LucideVoicemail;
export const _Wallet = LucideWallet;
export const _Volume1 = LucideVolume1;
export const _Volume2 = LucideVolume2;
export const _VolumeX = LucideVolumeX;
export const _Volume = LucideVolume;
export const _Watch = LucideWatch;
export const _WifiOff = LucideWifiOff;
export const _Wifi = LucideWifi;
export const _Wind = LucideWind;
export const _XCircle = LucideXCircle;
export const _XOctagon = LucideXOctagon;
export const _XSquare = LucideXSquare;
export const _Youtube = LucideYoutube;
export const _ZapOff = LucideZapOff;
export const _Zap = LucideZap;
export const _ZoomIn = LucideZoomIn;
export const _ZoomOut = LucideZoomOut;

// Define the props for your Icon component
export type IconProps = SVGProps<SVGSVGElement> & {_name: keyof typeof iconMap;
  size?: number | string;
  className?: string;};

// Create a map of icon names to component references
const _iconMap = {_home: LucideHome, _'bot-message-square': LucideBot, _// Assuming Bot is used for bot-message-square
  sparkles: LucideSparkles, _user: LucideUser, _briefcase: LucideBriefcase, _server: LucideServer, _bell: LucideBell, _calendar: LucideCalendar, _check: LucideCheck, _'chevron-down': LucideChevronDown, _'chevron-up': LucideChevronUp, _'chevron-left': LucideChevronLeft, _'chevron-right': LucideChevronRight, _plus: LucidePlus, _minus: LucideMinus, _x: LucideX, _edit: LucideEdit, _trash: LucideTrash, _settings: LucideSettings, _search: LucideSearch, _filter: LucideFilter, _'upload-cloud': LucideUploadCloud, _'download-cloud': LucideDownloadCloud, _copy: LucideCopy, _'external-link': LucideExternalLink, _link: LucideLink, _'message-square': LucideMessageSquare, _users: LucideUsers, _'file-text': LucideFileText, _image: LucideImage, _'alert-triangle': LucideAlertTriangle, _info: LucideInfo, _mail: LucideMail, _lock: LucideLock, _'log-out': LucideLogOut, _'log-in': LucideLogIn, _'shopping-cart': LucideShoppingCart, _'credit-card': LucideCreditCard, _'dollar-sign': LucideDollarSign, _percent: LucidePercent, _award: LucideAward, _activity: LucideActivity, _airplay: LucideAirplay, _'align-center': LucideAlignCenter, _'align-justify': LucideAlignJustify, _'align-left': LucideAlignLeft, _'align-right': LucideAlignRight, _anchor: LucideAnchor, _aperture: LucideAperture, _archive: LucideArchive, _'arrow-down-circle': LucideArrowDownCircle, _'arrow-down-left': LucideArrowDownLeft, _'arrow-down-right': LucideArrowDownRight, _'arrow-left-circle': LucideArrowLeftCircle, _'arrow-right': LucideArrowRight, _'arrow-right-circle': LucideArrowRightCircle, _'arrow-up-circle': LucideArrowUpCircle, _'arrow-up-left': LucideArrowUpLeft, _'arrow-up-right': LucideArrowUpRight, _'at-sign': LucideAtSign, _'bar-chart': LucideBarChart, _'bar-chart-2': LucideBarChart2, _'bar-chart-3': LucideBarChart3, _'battery-charging': LucideBatteryCharging, _battery: LucideBattery, _'bell-off': LucideBellOff, _bluetooth: LucideBluetooth, _bold: LucideBold, _'book-open': LucideBookOpen, _book: LucideBook, _bookmark: LucideBookmark, _box: LucideBox, _'camera-off': LucideCameraOff, _camera: LucideCamera, _cast: LucideCast, _'check-circle': LucideCheckCircle, _'check-square': LucideCheckSquare, _'chevron-down-square': LucideChevronDownSquare, _'chevron-left-square': LucideChevronLeftSquare, _'chevron-right-square': LucideChevronRightSquare, _'chevron-up-square': LucideChevronUpSquare, _'chevrons-down': LucideChevronsDown, _'chevrons-left': LucideChevronsLeft, _'chevrons-right': LucideChevronsRight, _'chevrons-up': LucideChevronsUp, _window.chrome: LucideChrome, _circle: LucideCircle, _clipboard: LucideClipboard, _clock: LucideClock, _'cloud-drizzle': LucideCloudDrizzle, _'cloud-lightning': LucideCloudLightning, _'cloud-off': LucideCloudOff, _'cloud-rain': LucideCloudRain, _'cloud-snow': LucideCloudSnow, _cloud: LucideCloud, _code: LucideCode, _codepen: LucideCodepen, _codesandbox: LucideCodesandbox, _coffee: LucideCoffee, _columns: LucideColumns, _command: LucideCommand, _compass: LucideCompass, _copyleft: LucideCopyleft, _copyright: LucideCopyright, _'corner-down-left': LucideCornerDownLeft, _'corner-down-right': LucideCornerDownRight, _'corner-left-down': LucideCornerLeftDown, _'corner-left-up': LucideCornerLeftUp, _'corner-right-down': LucideCornerRightDown, _'corner-right-up': LucideCornerRightUp, _'corner-up-left': LucideCornerUpLeft, _'corner-up-right': LucideCornerUpRight, _cpu: LucideCpu, _crop: LucideCrop, _crosshair: LucideCrosshair, _database: LucideDatabase, _delete: LucideDelete, _disc: LucideDisc, _'divide-circle': LucideDivideCircle, _'divide-square': LucideDivideSquare, _divide: LucideDivide, _download: LucideDownload, _dribbble: LucideDribbble, _droplet: LucideDroplet, _'edit-2': LucideEdit2, _'edit-3': LucideEdit3, _'eye-off': LucideEyeOff, _eye: LucideEye, _facebook: LucideFacebook, _'fast-forward': LucideFastForward, _feather: LucideFeather, _figma: LucideFigma, _'file-minus': LucideFileMinus, _'file-plus': LucideFilePlus, _file: LucideFile, _film: LucideFilm, _flag: LucideFlag, _'folder-minus': LucideFolderMinus, _'folder-plus': LucideFolderPlus, _folder: LucideFolder, _framer: LucideFramer, _frown: LucideFrown, _gift: LucideGift, _'git-branch': LucideGitBranch, _'git-commit': LucideGitCommit, _'git-merge': LucideGitMerge, _'git-pull-request': LucideGitPullRequest, _github: LucideGithub, _gitlab: LucideGitlab, _globe: LucideGlobe, _grid: LucideGrid, _'hard-drive': LucideHardDrive, _hash: LucideHash, _headphones: LucideHeadphones, _heart: LucideHeart, _'help-circle': LucideHelpCircle, _hexagon: LucideHexagon, _inbox: LucideInbox, _instagram: LucideInstagram, _italic: LucideItalic, _key: LucideKey, _layers: LucideLayers, _layout: LucideLayout, _'life-buoy': LucideLifeBuoy, _'link-2': LucideLink2, _linkedin: LucideLinkedin, _list: LucideList, _loader: LucideLoader, _'loader-2': LucideLoader2, _'map-pin': LucideMapPin, _map: LucideMap, _'maximize-2': LucideMaximize2, _maximize: LucideMaximize, _meh: LucideMeh, _menu: LucideMenu, _'message-circle': LucideMessageCircle, _'mic-off': LucideMicOff, _mic: LucideMic, _'minimize-2': LucideMinimize2, _minimize: LucideMinimize, _monitor: LucideMonitor, _moon: LucideMoon, _'more-horizontal': LucideMoreHorizontal, _'more-vertical': LucideMoreVertical, _'mouse-pointer': LucideMousePointer, _move: LucideMove, _music: LucideMusic, _megaphone: LucideMegaphone, _'navigation-2': LucideNavigation2, _navigation: LucideNavigation, _network: LucideNetwork, _octagon: LucideOctagon, _package: LucidePackage, _paperclip: LucidePaperclip, _'pause-circle': LucidePauseCircle, _pause: LucidePause, _'pen-tool': LucidePenTool, _'phone-call': LucidePhoneCall, _'phone-forwarded': LucidePhoneForwarded, _'phone-incoming': LucidePhoneIncoming, _'phone-missed': LucidePhoneMissed, _'phone-off': LucidePhoneOff, _'phone-outgoing': LucidePhoneOutgoing, _phone: LucidePhone, _'pie-chart': LucidePieChart, _'play-circle': LucidePlayCircle, _play: LucidePlay, _pocket: LucidePocket, _power: LucidePower, _'power-off': LucidePowerOff, _printer: LucidePrinter, _radio: LucideRadio, _'refresh-ccw': LucideRefreshCcw, _'refresh-cw': LucideRefreshCw, _repeat: LucideRepeat, _rewind: LucideRewind, _'rotate-ccw': LucideRotateCcw, _'rotate-cw': LucideRotateCw, _recycle: LucideRecycle, _rss: LucideRss, _save: LucideSave, _scissors: LucideScissors, _'screen-share': LucideScreenShare, _'screen-share-off': LucideScreenShareOff, _send: LucideSend, _share2: LucideShare2, _share: LucideShare, _'shield-off': LucideShieldOff, _shield: LucideShield, _'shopping-bag': LucideShoppingBag, _shuffle: LucideShuffle, _sidebar: LucideSidebar, _'skip-back': LucideSkipBack, _'skip-forward': LucideSkipForward, _slack: LucideSlack, _slash: LucideSlash, _sliders: LucideSliders, _smartphone: LucideSmartphone, _smile: LucideSmile, _speaker: LucideSpeaker, _square: LucideSquare, _star: LucideStar, _'stop-circle': LucideStopCircle, _sun: LucideSun, _sunrise: LucideSunrise, _sunset: LucideSunset, _table: LucideTable, _tablet: LucideTablet, _tag: LucideTag, _target: LucideTarget, _terminal: LucideTerminal, _'thumbs-down': LucideThumbsDown, _'thumbs-up': LucideThumbsUp, _'toggle-left': LucideToggleLeft, _'toggle-right': LucideToggleRight, _'trash-2': LucideTrash2, _trello: LucideTrello, _'trending-down': LucideTrendingDown, _'trending-up': LucideTrendingUp, _triangle: LucideTriangle, _truck: LucideTruck, _tv: LucideTv, _twitch: LucideTwitch, _twitter: LucideTwitter, _type: LucideType, _umbrella: LucideUmbrella, _underline: LucideUnderline, _unlock: LucideUnlock, _upload: LucideUpload, _'user-check': LucideUserCheck, _'user-minus': LucideUserMinus, _'user-plus': LucideUserPlus, _'user-x': LucideUserX, _'video-off': LucideVideoOff, _video: LucideVideo, _voicemail: LucideVoicemail, _wallet: LucideWallet, _'volume-1': LucideVolume1, _'volume-2': LucideVolume2, _'volume-x': LucideVolumeX, _volume: LucideVolume, _watch: LucideWatch, _'wifi-off': LucideWifiOff, _wifi: LucideWifi, _wind: LucideWind, _'x-circle': LucideXCircle, _'x-octagon': LucideXOctagon, _'x-square': LucideXSquare, _youtube: LucideYoutube, _'zap-off': LucideZapOff, _zap: LucideZap, _'zoom-in': LucideZoomIn, _'zoom-out': LucideZoomOut};

export const Icon: React.FC<IconProps> = (_{_name, _size = 24, _// Default size
  className, _...props}) => {_const _LucideIconComponent = iconMap[name];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (!LucideIconComponent) {
<<<<<<< HEAD
    logWarn(`Icon "${name}" not found.`),
    return null
=======
    logWarn(`Icon &quot;${name}&quot; not found.`);
    return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  // Render the dynamically selected Lucide icon component
<<<<<<< HEAD
  return <LucideIconComponent size={size} className={className} {...props} />
},

export default Icon, // Default export the Icon component
export const Icons = iconMap, // Export the map if you need to refer to available icons
=======
  return <LucideIconComponent size={_size} className={_className} {_...props} />;
};

export default Icon; // Default export the Icon component
export const _Icons = iconMap; // Export the map if you need to refer to available icons
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
