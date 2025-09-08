
const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>,
    return <LucideIcon {...props} />;
  };




    iconExports[alias] = createIconComponent(alias, lucideName)
const createIconComponent = (aliasName:string, iconName:keyof typeof LucideIcons) => {;
  const IconComponent = (props:IconProps) => {;
    // Fix:Use proper type casting to access the icon component;
    const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>,;
    return <LucideIcon {...props} />,;
  },;
  IconComponent.displayName = aliasName,;
  return IconComponent,;
},;
;
// Export all of our icon components;
const iconExports:Record<string React.FC<IconProps>> = {},;
;
// Generate icon exports;
Object.entries(iconAliases).forEach(([alias, lucideName]) => {;
  if (LucideIcons[lucideName]) {;
    iconExports[alias] = createIconComponent(alias, lucideName),;
  } else {;
    console.warn(`Icon '${lucideName}' not found in lucide-react`),;
    // Use a fallback icon;
    iconExports[alias] = createIconComponent(alias, 'HelpCircle'),;
  }
}),;
;
export const {;
  LayoutGrid,;
  List,;
  Zap,;
  Settings,;
  Plus,;
  HelpCircle,;
  Twitter,;
  Linkedin,;
  Facebook,;
  Instagram,;
  Github,;
  Server,;
  Network,;
  Recycle,;
  Truck,;
  HardDrive,;
  Check,;
  CheckIcon,;
  Handshake,;
  StarIcon,;
  Moon,;
  Sun,;
  Bell,;
  CalendarIcon,;
  ChevronRight,;
  MoreHorizontal,;
  MoreVertical,;
  Quote,;
  Info,;
  AlertTriangle,;
  Ban,;
  ShieldAlert,;
  Archive,;
  Trash2,;
  Trash,;
  Power,;
  RefreshCw,;
  Copy,;
  ClipboardCopy,;
  Download,;
  LogIn,;
  EyeOff,;
  Wallet,;
  Code,;
  Megaphone,;
  Terminal,;
  ThumbsUp,;
  ThumbsDown,;
  Pin,;
  Lock,;
  Trophy,;
  Award,;
  BadgeCheck,;
  MessageSquare,;
  Link,;
  Briefcase,;
  FileText,;
  Clock,;
  Save,;
  StarOff,;
  LayoutDashboard,;
  BarChart,;
  BookOpen,;
  Key,;
  Tag} = iconExports,;
;
// Also export all original icons from lucide-react;export * from 'lucide-react',
import React from 'react';
import * as LucideIcons from 'lucide-react';
;

;
export const {

  // UI elements;
  Zap: 'Zap',;
  Settings: 'Settings',;
  Plus: 'Plus',;
  HelpCircle: 'HelpCircle',;
  // Social media;
  Twitter: 'Twitter',;
  Linkedin: 'Linkedin',;
  Facebook: 'Facebook',;
  Instagram: 'Instagram',;
  Github: 'Github',;
  // Services;
  Server: 'Server',;

  // Status and actions;
  Check: 'Check',;
  CheckIcon: 'Check',;
  Handshake: 'Handshake',;
  StarIcon: 'Star',;
  // Theme;
  Moon: 'Moon',;
  Sun: 'Sun',;
  // Notifications;
  Bell: 'Bell',;
  // Calendar;
  CalendarIcon: 'Calendar',;
  // Navigation;
  ChevronRight: 'ChevronRight',;
  MoreHorizontal: 'MoreHorizontal',;
  MoreVertical: 'MoreVertical',;
  // Content;
  Quote: 'Quote',;
  // Alerts;
  Info: 'Info',;
  AlertTriangle: 'AlertTriangle',;
  Ban: 'Ban',;
  ShieldAlert: 'ShieldAlert',;
  // Actions;
  Archive: 'Archive',;
  Trash2: 'Trash2',;
  Trash: 'Trash2',;
  Power: 'Power',;
  RefreshCw: 'RefreshCcw',;
  Copy: 'Copy',;
  ClipboardCopy: 'ClipboardCopy',;
  Download: 'Download',;
  // Auth;
  LogIn: 'LogIn',;
  EyeOff: 'EyeOff',;
  Wallet: 'Wallet',;
  // Development;

  // Community;
  ThumbsUp: 'ThumbsUp',;
  ThumbsDown: 'ThumbsDown',;
  Pin: 'Pin',;
  Lock: 'Lock',;
  Trophy: 'Trophy',;
  Award: 'Award',;
  BadgeCheck: 'BadgeCheck',;
  MessageSquare: 'MessageSquare',;
  // Misc;
  Link: 'Link',;
  Briefcase: 'Briefcase',;
  FileText: 'FileText',;
  Clock: 'Clock',;
  Save: 'Save',;
  StarOff: 'Star',;
  LayoutDashboard: 'LayoutDashboard',;
  BarChart: 'BarChart3',;
  BookOpen: 'BookOpen',;
  Key: 'Key',;
  Tag: 'Tag' as keyof typeof LucideIcons},;
type IconProps = LucideIcons && LucideIcons.LucideProps;

// Export all of our icon components;
const iconExports: Record<string, React.FC<IconProps>> = {};
// Generate icon exports;

export const {;




const createIconComponent = (aliasName: string, iconName: keyof typeof LucideIcons) => {;
  const IconComponent = (props: IconProps) => {;
    // Fix: Use proper type casting to access the icon component;
    const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>,;


export * from 'lucide-react';





