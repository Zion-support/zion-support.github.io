<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/icons/index.tsx

<<<<<<< HEAD
=======

    const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>,
    return <LucideIcon {...props} />;
  };


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
<<<<<<< HEAD
    const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>
    return <LucideIcon {...props} />
  }
=======
    const LucideIcon = LucideIcons[iconName] as React.FC<IconProps>,
    return <LucideIcon {...props} />;
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
========
import React from 'react',;
import * as LucideIcons from 'lucide-react',;
;
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
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/icons/index.tsx
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
  } else {
    console.warn (`Icon '${lucide_name}' not found in lucide-react`);
    // Use a fallback icon;
    icon_exports[alias] = createIconComponent (alias, 'HelpCircle');
  }
});
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/icons/index.tsx

<<<<<<< HEAD
=======
;

========
;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/icons/index.tsx
export const {
// Alias for missing icons or for icons with different names;
const iconAliases: Record<string, keyof typeof LucideIcons> = {;
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
type IconProps = LucideIcons && LucideIcons.LucideProps;
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
// Export all of our icon components;
const iconExports: Record<string, React.FC<IconProps>> = {};
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
export const {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/icons/index.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======


export const {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/icons/index.tsx
=======
  } else {
    console.warn(`Icon '${lucideName}' not found in lucide-react`);
    // Use a fallback icon
    iconExports[alias] = createIconComponent(alias, 'HelpCircle')
  }
});
<<<<<<< HEAD
export const {
=======

export const {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/icons/index.tsx
<<<<<<< HEAD
  Tag} = iconExports;

=======
  Tag} = iconExports;
<<<<<<< HEAD
// Also export all original icons from lucide-react
export * from 'lucide-react';

=======

// Also export all original icons from lucide-react;
export * from 'lucide-react';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======



=======
========
// Also export all original icons from lucide-react;
export * from 'lucide-react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/icons/index.tsx
  Tag} = icon_exports;
;
// Also export all original icons from lucide-react;
export * from 'lucide-react';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/icons/index.tsx




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
;
=======
// Alias for missing icons or for icons with different names type IconProps = LucideIcons.LucideProps;
// Create a type safe export for each icon const createIconComponent = (aliasName: string, iconName: keyof typeof LucideIcons) => {
  const IconComponent = (props: IconProps) => {
  // Fix: Use proper type casting to access the icon component // Export all of our icon components const iconExports: Record<string React.FC<IconProps>> = {
  
};
// Generate icon exports // Also export all original icons from lucide-react export * from 'lucide-react';
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/icons/index.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
