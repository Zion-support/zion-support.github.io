import { 
  ArrowRight, Cloud, BarChart3, Zap, CheckCircle, 
  Clock, Target, TrendingUp, PieChart, Smartphone, Shield, 
  Lock, RefreshCw, Settings, Bot, FileText, AlertTriangle,
  CheckSquare, Star, Globe, Monitor, Smartphone as Mobile,
  Send, Eye, MousePointer, Calendar, Hash, AtSign, Headphones,
  Phone, Mail, HelpCircle, ThumbsUp, ThumbsDown, Cpu, Database,
  GitBranch, Terminal, Layers, Wrench, Search, Filter, Key,
  Lock as LockIcon, AlertTriangle as Alert, Activity, Network,
  Server, HardDrive, Wifi, Download, Upload
} from 'lucide-react'

export default function CloudMigrationProPage() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud migration strategy supporting AWS, Azure, Google Cloud, and hybrid environments'
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration with zero business disruption using advanced automation and orchestration'
