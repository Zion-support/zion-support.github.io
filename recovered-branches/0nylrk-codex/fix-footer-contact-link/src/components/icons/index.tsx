import React from 'react',
import * as LucideIcons from 'lucide-react',
// Alias for missing icons or for icons with different names
<<<<<<< HEAD
const iconAliases: Record<string keyof typeof LucideIcons> = {
  // Grid views
  LayoutGrid: 'LayoutGrid',
  List: 'List',
  // UI elements
  Zap: 'Zap',
  Settings: 'Settings',
  Plus: 'Plus',
  HelpCircle: 'HelpCircle',
  // Social media
  Twitter: 'Twitter',
  Linkedin: 'Linkedin',
  Facebook: 'Facebook',
  Instagram: 'Instagram',
  Github: 'Github',
  // Services
  Server: 'Server',
  // There is no 'Network' icon in lucide-react.
  // Map to a similar existing icon.
  Network: 'Share2',
  Recycle: 'Recycle',
  Truck: 'Truck',
  HardDrive: 'HardDrive',
  // Status and actions
  Check: 'Check',
  CheckIcon: 'Check',
  Handshake: 'Handshake',
  StarIcon: 'Star',
  // Theme
  Moon: 'Moon',
  Sun: 'Sun',
  // Notifications
  Bell: 'Bell',
  // Calendar
  CalendarIcon: 'Calendar',
  // Navigation
  ChevronRight: 'ChevronRight',
  MoreHorizontal: 'MoreHorizontal',
  MoreVertical: 'MoreVertical',
  // Content
  Quote: 'Quote',
  // Alerts
  Info: 'Info',
  AlertTriangle: 'AlertTriangle',
  Ban: 'Ban',
  ShieldAlert: 'ShieldAlert',
  // Actions
  Archive: 'Archive',
  Trash2: 'Trash2',
  Trash: 'Trash2',
  Power: 'Power',
  RefreshCw: 'RefreshCcw',
  Copy: 'Copy',
  ClipboardCopy: 'ClipboardCopy',
  Download: 'Download',
  // Auth
  LogIn: 'LogIn',
  EyeOff: 'EyeOff',
  Wallet: 'Wallet',
  // Development
  Code: 'Code',
  // Cast to any to work around missing type for Megaphone
  Megaphone: 'Megaphone' as unknown as keyof typeof LucideIcons,
  Terminal: 'Terminal',
  // Community
  ThumbsUp: 'ThumbsUp',
  ThumbsDown: 'ThumbsDown',
  Pin: 'Pin',
  Lock: 'Lock',
  Trophy: 'Trophy',
  Award: 'Award',
  BadgeCheck: 'BadgeCheck',
  MessageSquare: 'MessageSquare',
  // Misc
  Link: 'Link',
  Briefcase: 'Briefcase',
  FileText: 'FileText',
  Clock: 'Clock',
  Save: 'Save',
  StarOff: 'Star',
  LayoutDashboard: 'LayoutDashboard',
  BarChart: 'BarChart3',
  BookOpen: 'BookOpen',
  Key: 'Key',
  Tag: 'Tag' as keyof typeof LucideIcons},
=======
const iconAliases: Record<string, keyof typeof LucideIcons> = {_// Grid views
  LayoutGrid: 'LayoutGrid', _List: 'List', _// UI elements
  Zap: 'Zap', _Settings: 'Settings', _Plus: 'Plus', _HelpCircle: 'HelpCircle', _// Social media
  Twitter: 'Twitter', _Linkedin: 'Linkedin', _Facebook: 'Facebook', _Instagram: 'Instagram', _Github: 'Github', _// Services
  Server: 'Server', _// There is no 'Network' icon in lucide-react.
  // Map to a similar existing icon.
  Network: 'Share2', _Recycle: 'Recycle', _Truck: 'Truck', _HardDrive: 'HardDrive', _// Status and actions
  Check: 'Check', _CheckIcon: 'Check', _Handshake: 'Handshake', _StarIcon: 'Star', _// Theme
  Moon: 'Moon', _Sun: 'Sun', _// Notifications
  Bell: 'Bell', _// Calendar
  CalendarIcon: 'Calendar', _// Navigation
  ChevronRight: 'ChevronRight', _MoreHorizontal: 'MoreHorizontal', _MoreVertical: 'MoreVertical', _// Content
  Quote: 'Quote', _// Alerts
  Info: 'Info', _AlertTriangle: 'AlertTriangle', _Ban: 'Ban', _ShieldAlert: 'ShieldAlert', _// Actions
  Archive: 'Archive', _Trash2: 'Trash2', _Trash: 'Trash2', _Power: 'Power', _RefreshCw: 'RefreshCcw', _Copy: 'Copy', _ClipboardCopy: 'ClipboardCopy', _Download: 'Download', _// Auth
  LogIn: 'LogIn', _EyeOff: 'EyeOff', _Wallet: 'Wallet', _// Development
  Code: 'Code', _// Cast to any to work around missing type for Megaphone
  Megaphone: 'Megaphone' as unknown as keyof typeof LucideIcons, _Terminal: 'Terminal', _// Community
  ThumbsUp: 'ThumbsUp', _ThumbsDown: 'ThumbsDown', _Pin: 'Pin', _Lock: 'Lock', _Trophy: 'Trophy', _Award: 'Award', _BadgeCheck: 'BadgeCheck', _MessageSquare: 'MessageSquare', _// Misc
  Link: 'Link', _Briefcase: 'Briefcase', _FileText: 'FileText', _Clock: 'Clock', _Save: 'Save', _StarOff: 'Star', _LayoutDashboard: 'LayoutDashboard', _BarChart: 'BarChart3', _BookOpen: 'BookOpen', _Key: 'Key', _Tag: 'Tag' as keyof typeof LucideIcons};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type IconProps = LucideIcons.LucideProps,

// Create a type safe export for each icon
const _createIconComponent = (_aliasName: string, _iconName: keyof typeof LucideIcons) => {_const _IconComponent = (_props: IconProps) => {
    // Fix: Use proper type casting to access the icon component
<<<<<<< HEAD
    const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>,
    return <LucideIcon {...props} />
  },
  IconComponent.displayName = aliasName,
  return IconComponent
},
=======
    const _LucideIcon = LucideIcons[iconName] as React.FC<IconProps>;
    return <LucideIcon {...props} />;
  };
  IconComponent.displayName = aliasName;
  return IconComponent;
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Export all of our icon components
const iconExports: Record<string React.FC<IconProps>> = {},

// Generate icon exports
<<<<<<< HEAD
Object.entries(iconAliases).forEach(([alias, lucideName]) => {
  if (LucideIcons[lucideName]) {
    iconExports[alias] = createIconComponent(alias, lucideName)
  } else {
    console.warn(`Icon '${lucideName}' not found in lucide-react`),
    // Use a fallback icon
    iconExports[alias] = createIconComponent(alias, 'HelpCircle')
  }
}),

export const {
  LayoutGrid,
  List,
  Zap,
  Settings,
  Plus,
  HelpCircle,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  Server,
  Network,
  Recycle,
  Truck,
  HardDrive,
  Check,
  CheckIcon,
  Handshake,
  StarIcon,
  Moon,
  Sun,
  Bell,
  CalendarIcon,
  ChevronRight,
  MoreHorizontal,
  MoreVertical,
  Quote,
  Info,
  AlertTriangle,
  Ban,
  ShieldAlert,
  Archive,
  Trash2,
  Trash,
  Power,
  RefreshCw,
  Copy,
  ClipboardCopy,
  Download,
  LogIn,
  EyeOff,
  Wallet,
  Code,
  Megaphone,
  Terminal,
  ThumbsUp,
  ThumbsDown,
  Pin,
  Lock,
  Trophy,
  Award,
  BadgeCheck,
  MessageSquare,
  Link,
  Briefcase,
  FileText,
  Clock,
  Save,
  StarOff,
  LayoutDashboard,
  BarChart,
  BookOpen,
  Key,
  Tag} = iconExports,
=======
Object.entries(iconAliases).forEach(_([alias, _lucideName]) => {_if (LucideIcons[lucideName]) {
    iconExports[alias] = createIconComponent(alias, _lucideName);} else {_// Use a fallback icon
    iconExports[alias] = createIconComponent(alias, _'HelpCircle');}
});

export const {_LayoutGrid, _List, _Zap, _Settings, _Plus, _HelpCircle, _Twitter, _Linkedin, _Facebook, _Instagram, _Github, _Server, _Network, _Recycle, _Truck, _HardDrive, _Check, _CheckIcon, _Handshake, _StarIcon, _Moon, _Sun, _Bell, _CalendarIcon, _ChevronRight, _MoreHorizontal, _MoreVertical, _Quote, _Info, _AlertTriangle, _Ban, _ShieldAlert, _Archive, _Trash2, _Trash, _Power, _RefreshCw, _Copy, _ClipboardCopy, _Download, _LogIn, _EyeOff, _Wallet, _Code, _Megaphone, _Terminal, _ThumbsUp, _ThumbsDown, _Pin, _Lock, _Trophy, _Award, _BadgeCheck, _MessageSquare, _Link, _Briefcase, _FileText, _Clock, _Save, _StarOff, _LayoutDashboard, _BarChart, _BookOpen, _Key, _Tag} = iconExports;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Also export all original icons from lucide-react
export * from 'lucide-react',