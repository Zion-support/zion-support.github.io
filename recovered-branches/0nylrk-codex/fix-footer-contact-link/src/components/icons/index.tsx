import React from 'react';
import * as LucideIcons from 'lucide-react';

// Alias for missing icons or for icons with different names
<<<<<<< HEAD
const iconAliases: Record<stringkeyof typeof LucideIcons> = {
=======
const iconAliases: Record<string, keyof typeof LucideIcons> = {
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
  Tag: 'Tag' as keyof typeof LucideIcons};
=======
  Tag: 'Tag' as keyof typeof LucideIcons,
};
>>>>>>> origin/auto/autonomy-17186719616

type IconProps = LucideIcons.LucideProps;

// Create a type safe export for each icon
<<<<<<< HEAD
const createIconComponent = (aliasName: stringiconName: keyof typeof LucideIcons) => {
=======
const createIconComponent = (aliasName: string, iconName: keyof typeof LucideIcons) => {
>>>>>>> origin/auto/autonomy-17186719616
  const IconComponent = (props: IconProps) => {
    // Fix: Use proper type casting to access the icon component
    const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>;
    return <LucideIcon {...props} />;
  };
  IconComponent.displayName = aliasName;
  return IconComponent;
};

// Export all of our icon components
<<<<<<< HEAD
const iconExports: Record<stringReact.FC<IconProps>> = {};

// Generate icon exports
Object.entries(iconAliases).forEach(([aliaslucideName]) => {
  if (LucideIcons[lucideName]) {
    iconExports[alias] = createIconComponent(aliaslucideName);
  } else {
    console.warn(`Icon '${lucideName}' not found in lucide-react`);
    // Use a fallback icon
    iconExports[alias] = createIconComponent(alias'HelpCircle');
=======
const iconExports: Record<string, React.FC<IconProps>> = {};

// Generate icon exports
Object.entries(iconAliases).forEach(([alias, lucideName]) => {
  if (LucideIcons[lucideName]) {
    iconExports[alias] = createIconComponent(alias, lucideName);
  } else {
    console.warn(`Icon '${lucideName}' not found in lucide-react`);
    // Use a fallback icon
    iconExports[alias] = createIconComponent(alias, 'HelpCircle');
>>>>>>> origin/auto/autonomy-17186719616
  }
});

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
<<<<<<< HEAD
  Tag} = iconExports;
=======
  Tag,
} = iconExports;
>>>>>>> origin/auto/autonomy-17186719616

// Also export all original icons from lucide-react
export * from 'lucide-react';