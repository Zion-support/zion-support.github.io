import React, { SVGProps } from 'react';
import { logWarn } from '@/utils/productionLogger';
import { Home as LucideHome, Bot as LucideBot, Sparkles as LucideSparkles, User as LucideUser, ArrowRight as LucideArrowRight, BarChart3 as LucideBarChart3, Briefcase as LucideBriefcase, Monitor as LucideMonitor, Server as LucideServer, Bell as LucideBell, Calendar as LucideCalendar, Check as LucideCheck, ChevronDown as LucideChevronDown, ChevronUp as LucideChevronUp, ChevronLeft as LucideChevronLeft, ChevronRight as LucideChevronRight, Plus as LucidePlus, Minus as LucideMinus, X as LucideX, Edit as LucideEdit, Trash as LucideTrash, Settings as LucideSettings, Search as LucideSearch, Filter as LucideFilter, UploadCloud as LucideUploadCloud, DownloadCloud as LucideDownloadCloud, Copy as LucideCopy, ExternalLink as LucideExternalLink, Link as LucideLink, MessageSquare as LucideMessageSquare, Users as LucideUsers, FileText as LucideFileText, Image as LucideImage, AlertTriangle as LucideAlertTriangle, Info as LucideInfo, Mail as LucideMail, Lock as LucideLock, LogOut as LucideLogOut, LogIn as LucideLogIn, ShoppingCart as LucideShoppingCart, CreditCard as LucideCreditCard, DollarSign as LucideDollarSign, Percent as LucidePercent, Award as LucideAward, Activity as LucideActivity, Airplay as LucideAirplay, AlignCenter as LucideAlignCenter, AlignJustify as LucideAlignJustify, AlignLeft as LucideAlignLeft, AlignRight as LucideAlignRight, Anchor as LucideAnchor, Aperture as LucideAperture, Archive as LucideArchive, ArrowDownCircle as LucideArrowDownCircle, ArrowDownLeft as LucideArrowDownLeft, ArrowDownRight as LucideArrowDownRight, ArrowLeftCircle as LucideArrowLeftCircle, ArrowRightCircle as LucideArrowRightCircle, ArrowUpCircle as LucideArrowUpCircle, ArrowUpLeft as LucideArrowUpLeft, ArrowUpRight as LucideArrowUpRight, AtSign as LucideAtSign, BarChart as LucideBarChart, BarChart2 as LucideBarChart2, BatteryCharging as LucideBatteryCharging, Battery as LucideBattery, BellOff as LucideBellOff, Bluetooth as LucideBluetooth, Bold as LucideBold, BookOpen as LucideBookOpen, Book as LucideBook, Bookmark as LucideBookmark, Box as LucideBox, CameraOff as LucideCameraOff, Camera as LucideCamera, Cast as LucideCast, CheckCircle as LucideCheckCircle, CheckSquare as LucideCheckSquare, ChevronDownSquare as LucideChevronDownSquare, ChevronLeftSquare as LucideChevronLeftSquare, ChevronRightSquare as LucideChevronRightSquare, ChevronUpSquare as LucideChevronUpSquare, ChevronsDown as LucideChevronsDown, ChevronsLeft as LucideChevronsLeft, ChevronsRight as LucideChevronsRight, ChevronsUp as LucideChevronsUp, Chrome as LucideChrome, Circle as LucideCircle, Clipboard as LucideClipboard, Clock as LucideClock, CloudDrizzle as LucideCloudDrizzle, CloudLightning as LucideCloudLightning, CloudOff as LucideCloudOff, CloudRain as LucideCloudRain, CloudSnow as LucideCloudSnow, Cloud as LucideCloud, Code as LucideCode, Codepen as LucideCodepen, Codesandbox as LucideCodesandbox, Coffee as LucideCoffee, Columns as LucideColumns, Command as LucideCommand, Compass as LucideCompass, Copyleft as LucideCopyleft, Copyright as LucideCopyright, CornerDownLeft as LucideCornerDownLeft, CornerDownRight as LucideCornerDownRight, CornerLeftDown as LucideCornerLeftDown, CornerLeftUp as LucideCornerLeftUp, CornerRightDown as LucideCornerRightDown, CornerRightUp as LucideCornerRightUp, CornerUpLeft as LucideCornerUpLeft, CornerUpRight as LucideCornerUpRight, Cpu as LucideCpu, Crop as LucideCrop, Crosshair as LucideCrosshair, Database as LucideDatabase, Delete as LucideDelete, Disc as LucideDisc, DivideCircle as LucideDivideCircle, DivideSquare as LucideDivideSquare, Divide as LucideDivide, Download as LucideDownload, Dribbble as LucideDribbble, Droplet as LucideDroplet, Edit2 as LucideEdit2, Edit3 as LucideEdit3, EyeOff as LucideEyeOff, Eye as LucideEye, Facebook as LucideFacebook, FastForward as LucideFastForward, Feather as LucideFeather, Figma as LucideFigma, FileMinus as LucideFileMinus, FilePlus as LucideFilePlus, File as LucideFile, Film as LucideFilm, Flag as LucideFlag, FolderMinus as LucideFolderMinus, FolderPlus as LucideFolderPlus, Folder as LucideFolder, Framer as LucideFramer, Frown as LucideFrown, Gift as LucideGift, GitBranch as LucideGitBranch, GitCommit as LucideGitCommit, GitMerge as LucideGitMerge, GitPullRequest as LucideGitPullRequest, Github as LucideGithub, Gitlab as LucideGitlab, Globe as LucideGlobe, Grid as LucideGrid, HardDrive as LucideHardDrive, Hash as LucideHash, Headphones as LucideHeadphones, Heart as LucideHeart, HelpCircle as LucideHelpCircle, Hexagon as LucideHexagon, Inbox as LucideInbox, Instagram as LucideInstagram, Italic as LucideItalic, Key as LucideKey, Layers as LucideLayers, Layout as LucideLayout, LifeBuoy as LucideLifeBuoy, Link2 as LucideLink2, Linkedin as LucideLinkedin, List as LucideList, Loader as LucideLoader, Loader2 as LucideLoader2, MapPin as LucideMapPin, Map as LucideMap, Maximize2 as LucideMaximize2, Maximize as LucideMaximize, Meh as LucideMeh, Menu as LucideMenu, MessageCircle as LucideMessageCircle, MicOff as LucideMicOff, Mic as LucideMic, Minimize2 as LucideMinimize2, Minimize as LucideMinimize, Moon as LucideMoon, MoreHorizontal as LucideMoreHorizontal, MoreVertical as LucideMoreVertical, MousePointer as LucideMousePointer, Move as LucideMove, Music as LucideMusic, Megaphone as LucideMegaphone, Navigation2 as LucideNavigation2, Navigation as LucideNavigation, Network as LucideNetwork, Octagon as LucideOctagon, Package as LucidePackage, Paperclip as LucidePaperclip, PauseCircle as LucidePauseCircle, Pause as LucidePause, PenTool as LucidePenTool, PhoneCall as LucidePhoneCall, PhoneForwarded as LucidePhoneForwarded, PhoneIncoming as LucidePhoneIncoming, PhoneMissed as LucidePhoneMissed, PhoneOff as LucidePhoneOff, PhoneOutgoing as LucidePhoneOutgoing, Phone as LucidePhone, PieChart as LucidePieChart, PlayCircle as LucidePlayCircle, Play as LucidePlay, Pocket as LucidePocket, Power as LucidePower, PowerOff as LucidePowerOff, Printer as LucidePrinter, Radio as LucideRadio, RefreshCcw as LucideRefreshCcw, RefreshCw as LucideRefreshCw, Repeat as LucideRepeat, Rewind as LucideRewind, RotateCcw as LucideRotateCcw, RotateCw as LucideRotateCw, Recycle as LucideRecycle, Rss as LucideRss, Save as LucideSave, Scissors as LucideScissors, ScreenShare as LucideScreenShare, ScreenShareOff as LucideScreenShareOff, Send as LucideSend, Share2 as LucideShare2, Share as LucideShare, ShieldOff as LucideShieldOff, Shield as LucideShield, ShoppingBag as LucideShoppingBag, Shuffle as LucideShuffle, Sidebar as LucideSidebar, SkipBack as LucideSkipBack, SkipForward as LucideSkipForward, Slack as LucideSlack, Slash as LucideSlash, Sliders as LucideSliders, Smartphone as LucideSmartphone, Smile as LucideSmile, Speaker as LucideSpeaker, Square as LucideSquare, Star as LucideStar, StopCircle as LucideStopCircle, Sun as LucideSun, Sunrise as LucideSunrise, Sunset as LucideSunset, Table as LucideTable, Tablet as LucideTablet, Tag as LucideTag, Target as LucideTarget, Terminal as LucideTerminal, ThumbsDown as LucideThumbsDown, ThumbsUp as LucideThumbsUp, ToggleLeft as LucideToggleLeft, ToggleRight as LucideToggleRight, Trash2 as LucideTrash2, Trello as LucideTrello, TrendingDown as LucideTrendingDown, TrendingUp as LucideTrendingUp, Triangle as LucideTriangle, Truck as LucideTruck, Tv as LucideTv, Twitch as LucideTwitch, Twitter as LucideTwitter, Type as LucideType, Umbrella as LucideUmbrella, Underline as LucideUnderline, Unlock as LucideUnlock, Upload as LucideUpload, UserCheck as LucideUserCheck, UserMinus as LucideUserMinus, UserPlus as LucideUserPlus, UserX as LucideUserX, VideoOff as LucideVideoOff, Video as LucideVideo, Voicemail as LucideVoicemail, Wallet as LucideWallet, Volume1 as LucideVolume1, Volume2 as LucideVolume2, VolumeX as LucideVolumeX, Volume as LucideVolume, Watch as LucideWatch, WifiOff as LucideWifiOff, Wifi as LucideWifi, Wind as LucideWind, XCircle as LucideXCircle, XOctagon as LucideXOctagon, XSquare as LucideXSquare, Youtube as LucideYoutube, ZapOff as LucideZapOff, Zap as LucideZap, ZoomIn as LucideZoomIn, ZoomOut as LucideZoomOut } from 'lucide-react'

export const Home = $2;
export const Bot = $2;
export const Sparkles = $2;
export const User = $2;
export const ArrowRight = $2;
export const BarChart3 = $2;
export const Briefcase = $2;
export const BriefcaseIcon = $2;
export const Monitor = $2;
export const Server = $2;
export const Bell = $2;
export const Calendar = $2;
export const CalendarIcon = $2;
export const Check = $2;
export const CheckIcon = $2;
export const ChevronDown = $2;
export const ChevronUp = $2;
export const ChevronLeft = $2;
export const ChevronRight = $2;
export const ChevronRightIcon = $2;
export const Plus = $2;
export const Minus = $2;
export const X = $2;
export const Edit = $2;
export const Trash = $2;
export const Settings = $2;
export const Search = $2;
export const Filter = $2;
export const UploadCloud = $2;
export const DownloadCloud = $2;
export const Copy = $2;
export const ExternalLink = $2;
export const ExternalLinkIcon = $2;
export const Link = $2;
export const MessageSquare = $2;
export const MessageSquareIcon = $2;
export const Users = $2;
export const FileText = $2;
export const Image = $2;
export const AlertTriangle = $2;
export const Info = $2;
export const Mail = $2;
export const Lock = $2;
export const LogOut = $2;
export const LogIn = $2;
export const ShoppingCart = $2;
export const CreditCard = $2;
export const DollarSign = $2;
export const Percent = $2;
export const Award = $2;
export const Activity = $2;
export const Airplay = $2;
export const AlignCenter = $2;
export const AlignJustify = $2;
export const AlignLeft = $2;
export const AlignRight = $2;
export const Anchor = $2;
export const Aperture = $2;
export const Archive = $2;
export const ArrowDownCircle = $2;
export const ArrowDownLeft = $2;
export const ArrowDownRight = $2;
export const ArrowLeftCircle = $2;
export const ArrowRightCircle = $2;
export const ArrowUpCircle = $2;
export const ArrowUpLeft = $2;
export const ArrowUpRight = $2;
export const AtSign = $2;
export const BarChart = $2;
export const BarChart2 = $2;
export const BatteryCharging = $2;
export const Battery = $2;
export const BellOff = $2;
export const Bluetooth = $2;
export const Bold = $2;
export const BookOpen = $2;
export const Book = $2;
export const Bookmark = $2;
export const Box = $2;
export const CameraOff = $2;
export const Camera = $2;
export const Cast = $2;
export const CheckCircle = $2;
export const CheckSquare = $2;
export const ChevronDownSquare = $2;
export const ChevronLeftSquare = $2;
export const ChevronRightSquare = $2;
export const ChevronUpSquare = $2;
export const ChevronsDown = $2;
export const ChevronsLeft = $2;
export const ChevronsRight = $2;
export const ChevronsUp = $2;
export const Chrome = $2;
export const Circle = $2;
export const Clipboard = $2;
export const Clock = $2;
export const CloudDrizzle = $2;
export const CloudLightning = $2;
export const CloudOff = $2;
export const CloudRain = $2;
export const CloudSnow = $2;
export const Cloud = $2;
export const Code = $2;
export const Codepen = $2;
export const Codesandbox = $2;
export const Coffee = $2;
export const Columns = $2;
export const Command = $2;
export const Compass = $2;
export const Copyleft = $2;
export const Copyright = $2;
export const CornerDownLeft = $2;
export const CornerDownRight = $2;
export const CornerLeftDown = $2;
export const CornerLeftUp = $2;
export const CornerRightDown = $2;
export const CornerRightUp = $2;
export const CornerUpLeft = $2;
export const CornerUpRight = $2;
export const Cpu = $2;
export const Crop = $2;
export const Crosshair = $2;
export const Database = $2;
export const Delete = $2;
export const Disc = $2;
export const DivideCircle = $2;
export const DivideSquare = $2;
export const Divide = $2;
export const Download = $2;
export const Dribbble = $2;
export const Droplet = $2;
export const Edit2 = $2;
export const Edit3 = $2;
export const EyeOff = $2;
export const Eye = $2;
export const Facebook = $2;
export const FastForward = $2;
export const Feather = $2;
export const Figma = $2;
export const FileMinus = $2;
export const FilePlus = $2;
export const File = $2;
export const Film = $2;
export const Flag = $2;
export const FolderMinus = $2;
export const FolderPlus = $2;
export const Folder = $2;
export const Framer = $2;
export const Frown = $2;
export const Gift = $2;
export const GitBranch = $2;
export const GitCommit = $2;
export const GitMerge = $2;
export const GitPullRequest = $2;
export const Github = $2;
export const Gitlab = $2;
export const Globe = $2;
export const Grid = $2;
export const HardDrive = $2;
export const Hash = $2;
export const Headphones = $2;
export const Heart = $2;
export const HelpCircle = $2;
export const Hexagon = $2;
export const Inbox = $2;
export const Instagram = $2;
export const Italic = $2;
export const Key = $2;
export const Layers = $2;
export const Layout = $2;
export const LifeBuoy = $2;
export const Link2 = $2;
export const Linkedin = $2;
export const List = $2;
export const Loader = $2;
export const Loader2 = $2;
export const MapPin = $2;
export const Map = $2;
export const Maximize2 = $2;
export const Maximize = $2;
export const Meh = $2;
export const Menu = $2;
export const MessageCircle = $2;
export const MicOff = $2;
export const Mic = $2;
export const Minimize2 = $2;
export const Minimize = $2;
export const Moon = $2;
export const MoreHorizontal = $2;
export const MoreHorizontalIcon = $2;
export const MoreVertical = $2;
export const MousePointer = $2;
export const Move = $2;
export const Music = $2;
export const Megaphone = $2;
export const Navigation2 = $2;
export const Navigation = $2;
export const Network = $2;
export const Octagon = $2;
export const Package = $2;
export const Paperclip = $2;
export const PauseCircle = $2;
export const Pause = $2;
export const PenTool = $2;
export const PhoneCall = $2;
export const PhoneForwarded = $2;
export const PhoneIncoming = $2;
export const PhoneMissed = $2;
export const PhoneOff = $2;
export const PhoneOutgoing = $2;
export const Phone = $2;
export const PieChart = $2;
export const PlayCircle = $2;
export const Play = $2;
export const Pocket = $2;
export const Power = $2;
export const PowerOff = $2;
export const Printer = $2;
export const Radio = $2;
export const RefreshCcw = $2;
export const RefreshCw = $2;
export const Repeat = $2;
export const Rewind = $2;
export const RotateCcw = $2;
export const RotateCw = $2;
export const Recycle = $2;
export const Rss = $2;
export const Save = $2;
export const Scissors = $2;
export const ScreenShare = $2;
export const ScreenShareOff = $2;
export const ScreenShareOffIcon = $2;
export const Send = $2;
export const Share2 = $2;
export const Share = $2;
export const ShieldOff = $2;
export const Shield = $2;
export const ShoppingBag = $2;
export const Shuffle = $2;
export const Sidebar = $2;
export const SkipBack = $2;
export const SkipForward = $2;
export const Slack = $2;
export const Slash = $2;
export const Sliders = $2;
export const Smartphone = $2;
export const Smile = $2;
export const Speaker = $2;
export const Square = $2;
export const Star = $2;
export const StopCircle = $2;
export const Sun = $2;
export const Sunrise = $2;
export const Sunset = $2;
export const Table = $2;
export const Tablet = $2;
export const Tag = $2;
export const Target = $2;
export const Terminal = $2;
export const ThumbsDown = $2;
export const ThumbsUp = $2;
export const ToggleLeft = $2;
export const ToggleRight = $2;
export const Trash2 = $2;
export const Trello = $2;
export const TrendingDown = $2;
export const TrendingUp = $2;
export const Triangle = $2;
export const Truck = $2;
export const Tv = $2;
export const Twitch = $2;
export const Twitter = $2;
export const Type = $2;
export const Umbrella = $2;
export const Underline = $2;
export const Unlock = $2;
export const Upload = $2;
export const UserCheck = $2;
export const UserMinus = $2;
export const UserPlus = $2;
export const UserX = $2;
export const VideoOff = $2;
export const Video = $2;
export const Voicemail = $2;
export const Wallet = $2;
export const Volume1 = $2;
export const Volume2 = $2;
export const VolumeX = $2;
export const Volume = $2;
export const Watch = $2;
export const WifiOff = $2;
export const Wifi = $2;
export const Wind = $2;
export const XCircle = $2;
export const XOctagon = $2;
export const XSquare = $2;
export const Youtube = $2;
export const ZapOff = $2;
export const Zap = $2;
export const ZoomIn = $2;
export const ZoomOut = $2;
// Define the props for your Icon component
export type IconProps = $2;
  size?: number | string,
  className?: string
},

// Create a map of icon names to component references
const iconMap = $2;
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
  const LucideIconComponent = $2;
  if (!LucideIconComponent) {
    logWarn($2);
    return null
  }

  // Render the dynamically selected Lucide icon component
  return <LucideIconComponent size = $2;
export default Icon, // Default export the Icon component
export const Icons = iconMap, // Export the map if you need to refer to available icons