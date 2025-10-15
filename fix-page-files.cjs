const fs = require('fs');
const path = require('path');

// Common imports that all pages need
const commonImports = `import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Target, 
  FileText, 
  Users, 
  Globe, 
  Box, 
  Clock, 
  Sparkles,
  Check,
  Star,
  ArrowRight,
  Play,
  Download,
  Share2,
  Heart,
  MessageCircle,
  ThumbsUp,
  Shield,
  Lock,
  Award,
  TrendingUp,
  BarChart3,
  Database,
  Cloud,
  Smartphone,
  Laptop,
  Monitor,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Settings,
  Cog,
  Wrench,
  Tool,
  Layers,
  Palette,
  Brush,
  Image,
  Video,
  Music,
  Headphones,
  Camera,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Search,
  Filter,
  Sort,
  Grid,
  List,
  Calendar,
  Clock as ClockIcon,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Send,
  Plus,
  Minus,
  X,
  Edit,
  Trash2,
  Copy,
  Save,
  Upload,
  Download as DownloadIcon,
  ExternalLink,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Info,
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  XCircle,
  HelpCircle,
  Lightbulb,
  BookOpen,
  File,
  Folder,
  FolderOpen,
  Archive,
  Tag,
  Tags,
  Flag,
  Bookmark,
  BookmarkCheck,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Sad,
  Surprised,
  Wink,
  Blush,
  Kiss,
  Hug,
  Hand,
  HandHeart,
  Handshake,
  Fingerprint,
  Key,
  Lock as LockIcon,
  Unlock,
  Shield as ShieldIcon,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  Security,
  Privacy,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Sort as SortIcon,
  Grid as GridIcon,
  List as ListIcon,
  Calendar as CalendarIcon,
  Clock as ClockIconAlt,
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MessageSquare as MessageSquareIcon,
  Send as SendIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  X as XIcon,
  Edit as EditIcon,
  Trash2 as TrashIcon,
  Copy as CopyIcon,
  Save as SaveIcon,
  Upload as UploadIcon,
  Download as DownloadIconAlt,
  ExternalLink as ExternalLinkIcon,
  ArrowUp as ArrowUpIcon,
  ArrowDown as ArrowDownIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
  Menu as MenuIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MoreVertical as MoreVerticalIcon,
  Info as InfoIcon,
  AlertCircle as AlertCircleIcon,
  AlertTriangle as AlertTriangleIcon,
  CheckCircle as CheckCircleIcon,
  XCircle as XCircleIcon,
  HelpCircle as HelpCircleIcon,
  Lightbulb as LightbulbIcon,
  BookOpen as BookOpenIcon,
  File as FileIcon,
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon,
  Archive as ArchiveIcon,
  Tag as TagIcon,
  Tags as TagsIcon,
  Flag as FlagIcon,
  Bookmark as BookmarkIcon,
  BookmarkCheck as BookmarkCheckIcon
} from "lucide-react";`;

// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the malformed structure
    if (content.includes('export default function') && content.includes('return;')) {
      console.log(`Fixing ${filePath}...`);
      
      // Extract the function name from the export
      const functionNameMatch = content.match(/export default function (\w+)/);
      if (!functionNameMatch) return;
      
      const functionName = functionNameMatch[1];
      
      // Find the title from the content (look for title in quotes)
      const titleMatch = content.match(/title:\s*"([^"]+)"/);
      const title = titleMatch ? titleMatch[1] : functionName.replace(/([A-Z])/g, ' $1').trim();
      
      // Create a basic page structure
      const newContent = `${commonImports}

export default function ${functionName}() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="Discover our ${title.toLowerCase()} solutions powered by advanced AI technology." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ${title}
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our advanced ${title.toLowerCase()} solutions powered by cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  to="#demo"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Powerful capabilities designed to meet your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-purple-400 mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Advanced AI
                </h3>
                <p className="text-gray-300">
                  Leverage cutting-edge artificial intelligence for optimal results
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-purple-400 mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Secure & Reliable
                </h3>
                <p className="text-gray-300">
                  Enterprise-grade security and reliability for your peace of mind
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-purple-400 mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Scalable Solutions
                </h3>
                <p className="text-gray-300">
                  Scale your operations with our flexible and adaptable platform
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn more about our ${title.toLowerCase()} solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="#demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}`;

      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files in the app directory
const appDir = path.join(__dirname, 'app');
const files = fs.readdirSync(appDir, { recursive: true });

// Filter for page.tsx files
const pageFiles = files
  .filter(file => file.endsWith('page.tsx'))
  .map(file => path.join(appDir, file));

console.log(`Found ${pageFiles.length} page files to check...`);

// Fix each page file
pageFiles.forEach(fixPageFile);

console.log('Done fixing page files!');