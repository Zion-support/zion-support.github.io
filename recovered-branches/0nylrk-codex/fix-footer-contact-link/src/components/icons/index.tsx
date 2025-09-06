
  IconComponent.displayName = aliasName;
  return IconComponent
}
// Export all of our icon components
const iconExports: Record<string, React.FC<IconProps>> = {}
// Generate icon exports
Object.entries(iconAliases).forEach(([alias, lucideName]) => {
  if (LucideIcons[lucideName]) {
    iconExports[alias] = createIconComponent(alias, lucideName)
  } else {
    console.warn(`Icon '${lucideName}' not found in lucide-react`);
    // Use a fallback icon
    iconExports[alias] = createIconComponent(alias, 'HelpCircle')
  }
});

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
  Tag} = iconExports;

