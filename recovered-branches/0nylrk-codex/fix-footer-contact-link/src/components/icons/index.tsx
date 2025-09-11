<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>,
    return <LucideIcon {...props} />;
  };


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import * as LucideIcons from 'lucide-react';
// Alias for missing icons or for icons with different names
const iconAliases: Record<string, keyof typeof LucideIcons> = {
  // Grid views

<<<<<<< HEAD
  LayoutGrid: 'LayoutGrid'
  List: 'List'
  // UI elements
  Zap: 'Zap'
  Settings: 'Settings'
  Plus: 'Plus'
  HelpCircle: 'HelpCircle'
  // Social media
  Twitter: 'Twitter'
  Linkedin: 'Linkedin'
  Facebook: 'Facebook'
  Instagram: 'Instagram'
  Github: 'Github'
  // Services
  Server: 'Server'
  // There is no 'Network' icon in lucide-react.
  // Map to a similar existing icon.
  Network: 'Share2'
  Recycle: 'Recycle'
  Truck: 'Truck'
  HardDrive: 'HardDrive'
  // Status and actions
  Check: 'Check'
  CheckIcon: 'Check'
  Handshake: 'Handshake'
  StarIcon: 'Star'
  // Theme
  Moon: 'Moon'
  Sun: 'Sun'
  // Notifications
  Bell: 'Bell'
  // Calendar
  CalendarIcon: 'Calendar'
  // Navigation
  ChevronRight: 'ChevronRight'
  MoreHorizontal: 'MoreHorizontal'
  MoreVertical: 'MoreVertical'
  // Content
  Quote: 'Quote'
  // Alerts
  Info: 'Info'
  AlertTriangle: 'AlertTriangle'
  Ban: 'Ban'
  ShieldAlert: 'ShieldAlert'
  // Actions
  Archive: 'Archive'
  Trash2: 'Trash2'
  Trash: 'Trash2'
  Power: 'Power'
  RefreshCw: 'RefreshCcw'
  Copy: 'Copy'
  ClipboardCopy: 'ClipboardCopy'
  Download: 'Download'
  // Auth
  LogIn: 'LogIn'
  EyeOff: 'EyeOff'
  Wallet: 'Wallet'
  // Development
  Code: 'Code'
  // Cast to any to work around missing type for Megaphone
  Megaphone: 'Megaphone' as unknown as keyof typeof LucideIcons
  Terminal: 'Terminal'
  // Community
  ThumbsUp: 'ThumbsUp'
  ThumbsDown: 'ThumbsDown'
  Pin: 'Pin'
  Lock: 'Lock'
  Trophy: 'Trophy'
  Award: 'Award'
  BadgeCheck: 'BadgeCheck'
  MessageSquare: 'MessageSquare'
  // Misc
  Link: 'Link'
  Briefcase: 'Briefcase'
  FileText: 'FileText'
  Clock: 'Clock'
  Save: 'Save'
  StarOff: 'Star'
  LayoutDashboard: 'LayoutDashboard'
  BarChart: 'BarChart3'
  BookOpen: 'BookOpen'
  Key: 'Key'
  Tag: 'Tag' as keyof typeof LucideIcons}
type IconProps = LucideIcons.LucideProps;
// Create a type safe export for each icon
const createIconComponent = (aliasName: string, iconName: keyof typeof LucideIcons) => {
  const IconComponent = (props: IconProps) => {
    // Fix: Use proper type casting to access the icon component
    const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>
    return <LucideIcon {...props} />
  }
    const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>,
    return <LucideIcon {...props} />;
  };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>,
    return <LucideIcon {...props} />;
  };


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  IconComponent.displayName = aliasName;
  return IconComponent
}
// Export all of our icon components
const iconExports: Record<string, React.FC<IconProps>> = {}
// Generate icon exports
Object.entries(iconAliases).forEach(([alias, lucideName]) => {
  if (LucideIcons[lucideName]) {
    iconExports[alias] = createIconComponent(alias, lucideName)
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',;
import * as LucideIcons from 'lucide-react',;
;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Alias for missing icons or for icons with different names;
const iconAliases:Record<string keyof typeof LucideIcons> = {;
  // Grid views;
  LayoutGrid:'LayoutGrid',;
  List:'List',;
  ;
  // UI elements;
  Zap:'Zap',;
  Settings:'Settings',;
  Plus:'Plus',;
  HelpCircle:'HelpCircle',;
  ;
  // Social media;
  Twitter:'Twitter',;
  Linkedin:'Linkedin',;
  Facebook:'Facebook',;
  Instagram:'Instagram',;
  Github:'Github',;
  ;
  // Services;
  Server:'Server',;
  // There is no 'Network' icon in lucide-react.;
  // Map to a similar existing icon.;
  Network:'Share2',;
  Recycle:'Recycle',;
  Truck:'Truck',;
  HardDrive:'HardDrive',;
  ;
  // Status and actions;
  Check:'Check',;
  CheckIcon:'Check',;
  Handshake:'Handshake',;
  StarIcon:'Star',;
  ;
  // Theme;
  Moon:'Moon',;
  Sun:'Sun',;
  ;
  // Notifications;
  Bell:'Bell',;
  ;
  // Calendar;
  CalendarIcon:'Calendar',;
  ;
  // Navigation;
  ChevronRight:'ChevronRight',;
  MoreHorizontal:'MoreHorizontal',;
  MoreVertical:'MoreVertical',;
  ;
  // Content;
  Quote:'Quote',;
  ;
  // Alerts;
  Info:'Info',;
  AlertTriangle:'AlertTriangle',;
  Ban:'Ban',;
  ShieldAlert:'ShieldAlert',;
  ;
  // Actions;
  Archive:'Archive',;
  Trash2:'Trash2',;
  Trash:'Trash2',;
  Power:'Power',;
  RefreshCw:'RefreshCcw',;
  Copy:'Copy',;
  ClipboardCopy:'ClipboardCopy',;
  Download:'Download',;
  ;
  // Auth;
  LogIn:'LogIn',;
  EyeOff:'EyeOff',;
  Wallet:'Wallet',;
  ;
  // Development;
  Code:'Code',;
  // Cast to any to work around missing type for Megaphone;
  Megaphone:'Megaphone' as unknown as keyof typeof LucideIcons,;
  Terminal:'Terminal',;
  ;
  // Community;
  ThumbsUp:'ThumbsUp',;
  ThumbsDown:'ThumbsDown',;
  Pin:'Pin',;
  Lock:'Lock',;
  Trophy:'Trophy',;
  Award:'Award',;
  BadgeCheck:'BadgeCheck',;
  MessageSquare:'MessageSquare',;
  ;
  // Misc;
  Link:'Link',;
  Briefcase:'Briefcase',;
  FileText:'FileText',;
  Clock:'Clock',;
  Save:'Save',;
  StarOff:'Star',;
  LayoutDashboard:'LayoutDashboard',;
  BarChart:'BarChart3',;
  BookOpen:'BookOpen',;
  Key:'Key',;
  Tag:'Tag' as keyof typeof LucideIcons},;
;
type IconProps = LucideIcons.LucideProps,;
;
// Create a type safe export for each icon;
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
=======
=======
// Alias for missing icons or for icons with different names;
const icon_aliases: Record < string, keyof typeof LucideIcons> = {
  // Grid views;
  LayoutGrid: 'LayoutGrid',
  List: 'List',
  // UI elements;
  Zap: 'Zap',
  Settings: 'Settings',
  Plus: 'Plus',
  HelpCircle: 'HelpCircle',
  // Social media;
  Twitter: 'Twitter',
  Linkedin: 'Linkedin',
  Facebook: 'Facebook',
  Instagram: 'Instagram',
  Github: 'Github',
  // Services;
  Server: 'Server',
  // There is no 'Network' icon in lucide-react.;
  // Map to a similar existing icon.;
  Network: 'Share2',
  Recycle: 'Recycle',
  Truck: 'Truck',
  HardDrive: 'HardDrive',
  // Status and actions;
  Check: 'Check',
  CheckIcon: 'Check',
  Handshake: 'Handshake',
  StarIcon: 'Star',
  // Theme;
  Moon: 'Moon',
  Sun: 'Sun',
  // Notifications;
  Bell: 'Bell',
  // Calendar;
  CalendarIcon: 'Calendar',
  // Navigation;
  ChevronRight: 'ChevronRight',
  MoreHorizontal: 'MoreHorizontal',
  MoreVertical: 'MoreVertical',
  // Content;
  Quote: 'Quote',
  // Alerts;
  Info: 'Info',
  AlertTriangle: 'AlertTriangle',
  Ban: 'Ban',
  ShieldAlert: 'ShieldAlert',
  // Actions;
  Archive: 'Archive',
  Trash2: 'Trash2',
  Trash: 'Trash2',
  Power: 'Power',
  RefreshCw: 'RefreshCcw',
  Copy: 'Copy',
  ClipboardCopy: 'ClipboardCopy',
  Download: 'Download',
  // Auth;
  LogIn: 'LogIn',
  EyeOff: 'EyeOff',
  Wallet: 'Wallet',
  // Development;
  Code: 'Code',
  // Cast to any to work around missing type for Megaphone;
  Megaphone: 'Megaphone' as unknown as keyof typeof LucideIcons,
  Terminal: 'Terminal',
  // Community;
  ThumbsUp: 'ThumbsUp',
  ThumbsDown: 'ThumbsDown',
  Pin: 'Pin',
  Lock: 'Lock',
  Trophy: 'Trophy',
  Award: 'Award',
  BadgeCheck: 'BadgeCheck',
  MessageSquare: 'MessageSquare',
  // Misc;
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
type IconProps = LucideIcons.LucideProps;
;
// Create a type safe export for each icon;
const createIconComponent = (alias_name: string, icon_name: keyof typeof LucideIcons) =>: any {
  const IconComponent = (props: IconProps) =>: any {
    // Fix: Use proper type casting to access the icon component;
    const LucideIcon = LucideIcons[icon_name] as React.FC < IconProps>,
    return <LucideIcon {...props} />;
  }
  IconComponent.display_name = alias_name;
  return IconComponent;
}
;
// Export all of our icon components;
const icon_exports: Record < string, React.FC < IconProps>> = {}
;
// Generate icon exports;
Object.entries (icon_aliases).for_each (([alias, lucide_name]) => {
  // Check condition
if ( {) {
  $2
}
    icon_exports[alias] = createIconComponent (alias, lucide_name);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  } else {
    console.warn (`Icon '${lucide_name}' not found in lucide-react`);
    // Use a fallback icon;
    icon_exports[alias] = createIconComponent (alias, 'HelpCircle');
  }
});
export const {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Alias for missing icons or for icons with different names;
const iconAliases: Record<string, keyof typeof LucideIcons> = {;
  // Grid views;
  LayoutGrid: 'LayoutGrid',;
  List: 'List',;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // UI elements;
  Zap: 'Zap',;
  Settings: 'Settings',;
  Plus: 'Plus',;
  HelpCircle: 'HelpCircle',;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Social media;
  Twitter: 'Twitter',;
  Linkedin: 'Linkedin',;
  Facebook: 'Facebook',;
  Instagram: 'Instagram',;
  Github: 'Github',;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Services;
  Server: 'Server',;
  // There is no 'Network' icon in lucide-react.;
  // Map to a similar existing icon.;
  Network: 'Share2',;
  Recycle: 'Recycle',;
  Truck: 'Truck',;
  HardDrive: 'HardDrive',;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Status and actions;
  Check: 'Check',;
  CheckIcon: 'Check',;
  Handshake: 'Handshake',;
  StarIcon: 'Star',;
<<<<<<< HEAD
  // Theme;
  Moon: 'Moon',;
  Sun: 'Sun',;
  // Notifications;
  Bell: 'Bell',;
  // Calendar;
  CalendarIcon: 'Calendar',;
=======

  // Theme;
  Moon: 'Moon',;
  Sun: 'Sun',;

  // Notifications;
  Bell: 'Bell',;

  // Calendar;
  CalendarIcon: 'Calendar',;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Navigation;
  ChevronRight: 'ChevronRight',;
  MoreHorizontal: 'MoreHorizontal',;
  MoreVertical: 'MoreVertical',;
<<<<<<< HEAD
  // Content;
  Quote: 'Quote',;
=======

  // Content;
  Quote: 'Quote',;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Alerts;
  Info: 'Info',;
  AlertTriangle: 'AlertTriangle',;
  Ban: 'Ban',;
  ShieldAlert: 'ShieldAlert',;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Actions;
  Archive: 'Archive',;
  Trash2: 'Trash2',;
  Trash: 'Trash2',;
  Power: 'Power',;
  RefreshCw: 'RefreshCcw',;
  Copy: 'Copy',;
  ClipboardCopy: 'ClipboardCopy',;
  Download: 'Download',;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Auth;
  LogIn: 'LogIn',;
  EyeOff: 'EyeOff',;
  Wallet: 'Wallet',;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Development;
  Code: 'Code',;
  // Cast to any to work around missing type for Megaphone;
  Megaphone: 'Megaphone' as unknown as keyof typeof LucideIcons,;
  Terminal: 'Terminal',;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Community;
  ThumbsUp: 'ThumbsUp',;
  ThumbsDown: 'ThumbsDown',;
  Pin: 'Pin',;
  Lock: 'Lock',;
  Trophy: 'Trophy',;
  Award: 'Award',;
  BadgeCheck: 'BadgeCheck',;
  MessageSquare: 'MessageSquare',;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
type IconProps = LucideIcons && LucideIcons.LucideProps;
=======

type IconProps = LucideIcons && LucideIcons.LucideProps;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Create a type safe export for each icon;
const createIconComponent = (aliasName: string, iconName: keyof typeof LucideIcons) => {;
  const IconComponent = (props: IconProps) => {;
    // Fix: Use proper type casting to access the icon component;
    const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>,;
    return <LucideIcon {...props} />;
  };
  IconComponent && IconComponent.displayName = aliasName;
  return IconComponent;
};
<<<<<<< HEAD
// Export all of our icon components;
const iconExports: Record<string, React.FC<IconProps>> = {};
=======

// Export all of our icon components;
const iconExports: Record<string, React.FC<IconProps>> = {};

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Generate icon exports;
Object && Object.entries(iconAliases).forEach(([alias, lucideName]) => {;
  if (LucideIcons[lucideName]) {;
    iconExports[alias] = createIconComponent(alias, lucideName);
  } else {;
    console && console.warn(`Icon '${lucideName}' not found in lucide-react`);
    // Use a fallback icon;
    iconExports[alias] = createIconComponent(alias, 'HelpCircle');
  }
});
<<<<<<< HEAD
export const {;


export const {;

<<<<<<< HEAD
  } else {
    console.warn(`Icon '${lucideName}' not found in lucide-react`);
    // Use a fallback icon
    iconExports[alias] = createIconComponent(alias, 'HelpCircle')
  }
});
export const {

export const {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export const {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======


export const {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  LayoutGrid;
  List;
  Zap;
  Settings;
  Plus;
  HelpCircle;
  Twitter;
  Linkedin;
  Facebook;
  Instagram;
  Github;
  Server;
  Network;
  Recycle;
  Truck;
  HardDrive;
  Check;
  CheckIcon;
  Handshake;
  StarIcon;
  Moon;
  Sun;
  Bell;
  CalendarIcon;
  ChevronRight;
  MoreHorizontal;
  MoreVertical;
  Quote;
  Info;
  AlertTriangle;
  Ban;
  ShieldAlert;
  Archive;
  Trash2;
  Trash;
  Power;
  RefreshCw;
  Copy;
  ClipboardCopy;
  Download;
  LogIn;
  EyeOff;
  Wallet;
  Code;
  Megaphone;
  Terminal;
  ThumbsUp;
  ThumbsDown;
  Pin;
  Lock;
  Trophy;
  Award;
  BadgeCheck;
  MessageSquare;
  Link;
  Briefcase;
  FileText;
  Clock;
  Save;
  StarOff;
  LayoutDashboard;
  BarChart;
  BookOpen;
  Key;
<<<<<<< HEAD
<<<<<<< HEAD
  Tag} = iconExports;
// Also export all original icons from lucide-react
export * from 'lucide-react';


// Also export all original icons from lucide-react;
export * from 'lucide-react';
import React from 'react',;
import * as LucideIcons from 'lucide-react',;
// Alias for missing icons or for icons with different names;
const iconAliases: Record<string keyof typeof LucideIcons> = {;
  // Grid views;
  LayoutGrid: 'LayoutGrid',;
  List: 'List',;
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
  // There is no 'Network' icon in lucide-react.;
  // Map to a similar existing icon.;
  Network: 'Share2',;
  Recycle: 'Recycle',;
  Truck: 'Truck',;
  HardDrive: 'HardDrive',;
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
  Code: 'Code',;
  // Cast to any to work around missing type for Megaphone;
  Megaphone: 'Megaphone' as unknown as keyof typeof LucideIcons,;
  Terminal: 'Terminal',;
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
type IconProps = LucideIcons.LucideProps,;
// Create a type safe export for each icon;
const createIconComponent = (aliasName: string, iconName: keyof typeof LucideIcons) => {;
  const IconComponent = (props: IconProps) => {;
    // Fix: Use proper type casting to access the icon component;
    const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>,;
    return <LucideIcon {...props} />;
  },;
  IconComponent.displayName = aliasName,;
  return IconComponent;
},;
// Export all of our icon components;
const iconExports: Record<string React.FC<IconProps>> = {},;
// Generate icon exports;
Object.entries(iconAliases).forEach(([alias, lucideName]) => {;
  if (LucideIcons[lucideName]) {;
    iconExports[alias] = createIconComponent(alias, lucideName);
  } else {;
    console.warn(`Icon '${lucideName}' not found in lucide-react`),;
    // Use a fallback icon;
    iconExports[alias] = createIconComponent(alias, 'HelpCircle');
  }
}),;
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
  Tag} = iconExports;
// Also export all original icons from lucide-react;
export * from 'lucide-react';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



// Also export all original icons from lucide-react;
export * from 'lucide-react';
=======



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Tag} = icon_exports;
;
// Also export all original icons from lucide-react;
export * from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
;
// Alias for missing icons or for icons with different names type IconProps = LucideIcons.LucideProps;
// Create a type safe export for each icon const createIconComponent = (aliasName: string, iconName: keyof typeof LucideIcons) => {
  const IconComponent = (props: IconProps) => {
  // Fix: Use proper type casting to access the icon component // Export all of our icon components const iconExports: Record<string React.FC<IconProps>> = {
  
};
// Generate icon exports // Also export all original icons from lucide-react export * from 'lucide-react';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
