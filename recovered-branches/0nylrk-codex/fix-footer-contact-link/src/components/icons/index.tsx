<<<<<<< HEAD
import React from 'react';
import * as LucideIcons from 'lucide-react';
// Alias for missing icons or for icons with different names
const iconAliases: Record<string, keyof typeof LucideIcons> = {
  // Grid views

=======
const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>,
    return <LucideIcon {...props} />;
  };

<<<<<<< HEAD
    const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>,

>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
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

type IconProps = $2;
// Create a type safe export for each icon
const createIconComponent = (aliasName: string, iconName: keyof typeof LucideIcons) => {
  const IconComponent = $2;
    return <LucideIcon {...props} />
  },
  IconComponent.displayName = $2;
  return IconComponent
},

// Export all of our icon components
const iconExports: Record<string, React.FC<IconProps>> = {},

// Generate icon exports
Object.entries(iconAliases).forEach(([alias, lucideName]) => {
  if (LucideIcons[lucideName]) {
    iconExports[alias] = createIconComponent(alias, lucideName)
  } else {
    console.warn($2);
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

// Also export all original icons from lucide-react
export * from 'lucide-react',
=======
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
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>,
    return <LucideIcon {...props} />;
  };

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

<<<<<<< HEAD
import React from 'react';
import * as LucideIcons from 'lucide-react';
// Alias for missing icons or for icons with different names
const iconAliases: Record<string, keyof typeof LucideIcons> = {
  // Grid views

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
  IconComponent.displayName = aliasName;
  return IconComponent
}
// Export all of our icon components
const iconExports: Record<string, React.FC<IconProps>> = {}
// Generate icon exports
Object.entries(iconAliases).forEach(([alias, lucideName]) => {
  if (LucideIcons[lucideName]) {
<<<<<<< HEAD

=======
    iconExports[alias] = createIconComponent(alias, lucideName)
<<<<<<< HEAD
import React from 'react',;
import * as LucideIcons from 'lucide-react',;
;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Alias for missing icons or for icons with different names;
const iconAliases:Record<string keyof typeof LucideIcons> = {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
const createIconComponent = (alias_name: string, icon_name: keyof typeof LucideIcons) =>: any {
  const IconComponent = (props: IconProps) =>: any {
    // Fix: Use proper type casting to access the icon component;
    const LucideIcon = LucideIcons[icon_name] as React.FC < IconProps>,
    return <LucideIcon {...props} />;
  }
  IconComponent.display_name = alias_name;

  return IconComponent;
}
// Export all of our icon components;
const iconExports: Record<string, React.FC<IconProps>> = {}
// Generate icon exports;

  } else {

    console.warn (`Icon '${lucide_name}' not found in lucide-react`);
    // Use a fallback icon;'
    icon_exports[alias] = createIconComponent (alias, 'HelpCircle');
  }
});

export const {

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Alias for missing icons or for icons with different names;

const iconAliases: Record<string, keyof typeof LucideIcons> = {;
  // Grid views;'
  LayoutGrid: 'LayoutGrid',;'
  List: 'List',;
<<<<<<< HEAD
  // UI elements;'
  Zap: 'Zap',;'
  Settings: 'Settings',;'
  Plus: 'Plus',;'
  HelpCircle: 'HelpCircle',;
  // Social media;'
  Twitter: 'Twitter',;'
  Linkedin: 'Linkedin',;'
  Facebook: 'Facebook',;'
  Instagram: 'Instagram',;'
  Github: 'Github',;
  // Services;'
  Server: 'Server',;'
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // There is no 'Network' icon in lucide-react.;
  // Map to a similar existing icon.;'
  Network: 'Share2',;'
  Recycle: 'Recycle',;'
  Truck: 'Truck',;'
  HardDrive: 'HardDrive',;
<<<<<<< HEAD
  // Status and actions;'
  Check: 'Check',;'
  CheckIcon: 'Check',;'
  Handshake: 'Handshake',;'
  StarIcon: 'Star',;
  // Theme;'
  Moon: 'Moon',;'
  Sun: 'Sun',;
  // Notifications;'
  Bell: 'Bell',;
  // Calendar;'
  CalendarIcon: 'Calendar',;
  // Navigation;'
  ChevronRight: 'ChevronRight',;'
  MoreHorizontal: 'MoreHorizontal',;'
  MoreVertical: 'MoreVertical',;
  // Content;'
  Quote: 'Quote',;
  // Alerts;'
  Info: 'Info',;'
  AlertTriangle: 'AlertTriangle',;'
  Ban: 'Ban',;'
  ShieldAlert: 'ShieldAlert',;
  // Actions;'
  Archive: 'Archive',;'
  Trash2: 'Trash2',;'
  Trash: 'Trash2',;'
  Power: 'Power',;'
  RefreshCw: 'RefreshCcw',;'
  Copy: 'Copy',;'
  ClipboardCopy: 'ClipboardCopy',;'
  Download: 'Download',;
  // Auth;'
  LogIn: 'LogIn',;'
  EyeOff: 'EyeOff',;'
  Wallet: 'Wallet',;
  // Development;'
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  Code: 'Code',;
  // Cast to any to work around missing type for Megaphone;'
  Megaphone: 'Megaphone' as unknown as keyof typeof LucideIcons,;'
  Terminal: 'Terminal',;
<<<<<<< HEAD
  // Community;'
  ThumbsUp: 'ThumbsUp',;'
  ThumbsDown: 'ThumbsDown',;'
  Pin: 'Pin',;'
  Lock: 'Lock',;'
  Trophy: 'Trophy',;'
  Award: 'Award',;'
  BadgeCheck: 'BadgeCheck',;'
  MessageSquare: 'MessageSquare',;
  // Misc;'
  Link: 'Link',;'
  Briefcase: 'Briefcase',;'
  FileText: 'FileText',;'
  Clock: 'Clock',;'
  Save: 'Save',;'
  StarOff: 'Star',;'
  LayoutDashboard: 'LayoutDashboard',;'
  BarChart: 'BarChart3',;'
  BookOpen: 'BookOpen',;'
  Key: 'Key',;'
  Tag: 'Tag' as keyof typeof LucideIcons},;

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

=======
// Export all of our icon components;
const iconExports: Record<string, React.FC<IconProps>> = {};
// Generate icon exports;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
Object && Object.entries(iconAliases).forEach(([alias, lucideName]) => {;
  if (LucideIcons[lucideName]) {;
    iconExports[alias] = createIconComponent(alias, lucideName);
  } else {;'`
    console && console.warn(`Icon '${lucideName}' not found in lucide-react`);
    // Use a fallback icon;'
    iconExports[alias] = createIconComponent(alias, 'HelpCircle');
  }

export const {;

export const {;

  } else {
    console.warn(`Icon '${lucideName}' not found in lucide-react`);
    // Use a fallback icon
    iconExports[alias] = createIconComponent(alias, 'HelpCircle')
  }
});
<<<<<<< HEAD
export const {

export const {;

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

import * as LucideIcons from 'lucide-react',;
// Alias for missing icons or for icons with different names;
const iconAliases: Record<string keyof typeof LucideIcons> = {;
  // Grid views;'
  LayoutGrid: 'LayoutGrid',;'
  List: 'List',;
  // UI elements;'
  Zap: 'Zap',;'
  Settings: 'Settings',;'
  Plus: 'Plus',;'
  HelpCircle: 'HelpCircle',;
  // Social media;'
  Twitter: 'Twitter',;'
  Linkedin: 'Linkedin',;'
  Facebook: 'Facebook',;'
  Instagram: 'Instagram',;'
  Github: 'Github',;
  // Services;'
  Server: 'Server',;'
  // There is no 'Network' icon in lucide-react.;
  // Map to a similar existing icon.;'
  Network: 'Share2',;'
  Recycle: 'Recycle',;'
  Truck: 'Truck',;'
  HardDrive: 'HardDrive',;
  // Status and actions;'
  Check: 'Check',;'
  CheckIcon: 'Check',;'
  Handshake: 'Handshake',;'
  StarIcon: 'Star',;
  // Theme;'
  Moon: 'Moon',;'
  Sun: 'Sun',;
  // Notifications;'
  Bell: 'Bell',;
  // Calendar;'
  CalendarIcon: 'Calendar',;
  // Navigation;'
  ChevronRight: 'ChevronRight',;'
  MoreHorizontal: 'MoreHorizontal',;'
  MoreVertical: 'MoreVertical',;
  // Content;'
  Quote: 'Quote',;
  // Alerts;'
  Info: 'Info',;'
  AlertTriangle: 'AlertTriangle',;'
  Ban: 'Ban',;'
  ShieldAlert: 'ShieldAlert',;
  // Actions;'
  Archive: 'Archive',;'
  Trash2: 'Trash2',;'
  Trash: 'Trash2',;'
  Power: 'Power',;'
  RefreshCw: 'RefreshCcw',;'
  Copy: 'Copy',;'
  ClipboardCopy: 'ClipboardCopy',;'
  Download: 'Download',;
  // Auth;'
  LogIn: 'LogIn',;'
  EyeOff: 'EyeOff',;'
  Wallet: 'Wallet',;
  // Development;'
  Code: 'Code',;
  // Cast to any to work around missing type for Megaphone;'
  Megaphone: 'Megaphone' as unknown as keyof typeof LucideIcons,;'
  Terminal: 'Terminal',;
  // Community;'
  ThumbsUp: 'ThumbsUp',;'
  ThumbsDown: 'ThumbsDown',;'
  Pin: 'Pin',;'
  Lock: 'Lock',;'
  Trophy: 'Trophy',;'
  Award: 'Award',;'
  BadgeCheck: 'BadgeCheck',;'
  MessageSquare: 'MessageSquare',;
  // Misc;'
  Link: 'Link',;'
  Briefcase: 'Briefcase',;'
  FileText: 'FileText',;'
  Clock: 'Clock',;'
  Save: 'Save',;'
  StarOff: 'Star',;'
  LayoutDashboard: 'LayoutDashboard',;'
  BarChart: 'BarChart3',;'
  BookOpen: 'BookOpen',;'
  Key: 'Key',;'
  Tag: 'Tag' as keyof typeof LucideIcons},;
type IconProps = LucideIcons.LucideProps,;
// Create a type safe export for each icon;
<<<<<<< HEAD
const createIconComponent = ("aliasName": string, "iconName": keyof typeof LucideIcons) => {;
  }
  const IconComponent = ("props": IconProps) => {;
    // "Fix": Use proper type casting to access the icon component;
    }
=======
const createIconComponent = (aliasName: string, iconName: keyof typeof LucideIcons) => {;
  const IconComponent = (props: IconProps) => {;
    // Fix: Use proper type casting to access the icon component;
    const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>,;
>>>>>>> origin/chore/fix-lint-and-merge
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
  } else {;'`
    console.warn(`Icon '${lucideName}' not found in lucide-react`),;
    // Use a fallback icon;'
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

=======
  Key;
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
  Tag} = icon_exports;
;
// Also export all original icons from lucide-react;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export * from 'lucide-react';
<<<<<<< HEAD
;
// Alias for missing icons or for icons with different names type IconProps = LucideIcons.LucideProps;
// Create a type safe export for each icon const createIconComponent = (aliasName: string, iconName: keyof typeof LucideIcons) => {
  const IconComponent = (props: IconProps) => {
  // Fix: Use proper type casting to access the icon component // Export all of our icon components const iconExports: Record<string React.FC<IconProps>> = {
  
};
// Generate icon exports // Also export all original icons from lucide-react export * from 'lucide-react';
=======

<<<<<<< HEAD
// Alias for missing icons or for icons with different names type IconProps = LucideIcons.LucideProps;
// Create a type safe export for each icon const createIconComponent = (aliasName: string, iconName: keyof typeof LucideIcons) => {
  const IconComponent = (props: IconProps) => {
  // Fix: Use proper type casting to access the icon component // Export all of our icon components const iconExports: Record<string React.FC<IconProps>> = {
  
};
// Generate icon exports // Also export all original icons from lucide-react export * from 'lucide-react';
;
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
