import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Brain, BarChart3, Star, ArrowRight, Monitor, Users, Award, Globe, Wifi, Smartphone, Settings, Headphones, MessageCircle, FileText, Search, Filter, Download, Upload, Share, Bookmark, Heart, ThumbsUp, Eye, Clock, Calendar, MapPin, Phone, Mail, ExternalLink, ChevronRight, ChevronDown as ChevronDownIcon, Menu as MenuIcon, X as XIcon, Play, Pause, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RefreshCw, Plus, Minus, Edit, Trash2, Save, Copy, Scissors, Undo, Redo, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, Grid, Layout, Palette, Type, Image, Video, Music, File, Folder, Archive, Inbox, Send, Reply, Forward, Flag, Tag, Star as StarIcon, Bookmark as BookmarkIcon, Heart as HeartIcon, ThumbsUp as ThumbsUpIcon, Eye as EyeIcon, Clock as ClockIcon, Calendar as CalendarIcon, MapPin as MapPinIcon, Phone as PhoneIcon, ExternalLink as ExternalLinkIcon, ChevronRight as ChevronRightIcon, ChevronDown as ChevronDownIconIcon, Menu as MenuIconIcon, X as XIconIcon, Play as PlayIcon, Pause as PauseIcon, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, RotateCcw as RotateCcwIcon, RefreshCw as RefreshCwIcon, Plus as PlusIcon, Minus as MinusIcon, Edit as EditIcon, Trash2 as Trash2Icon, Save as SaveIcon, Copy as CopyIcon, Scissors as ScissorsIcon, Undo as UndoIcon, Redo as RedoIcon, Bold as BoldIcon, Italic as ItalicIcon, Underline as UnderlineIcon, AlignLeft as AlignLeftIcon, AlignCenter as AlignCenterIcon, AlignRight as AlignRightIcon, List as ListIcon, Grid as GridIcon, Layout as LayoutIcon, Palette as PaletteIcon, Type as TypeIcon, Image as ImageIcon, Video as VideoIcon, Music as MusicIcon, File as FileIcon, Folder as FolderIcon, Archive as ArchiveIcon, Inbox as InboxIcon, Send as SendIcon, Reply as ReplyIcon, Forward as ForwardIcon, Flag as FlagIcon, Tag as TagIcon } from 'lucide-react'

interface NavigationProps {
  onSidebarToggle: () => void
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = useCallback((name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }, [activeDropdown])

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null)
  }, [])

  const navigationItems = useMemo(() => [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: '5G Solutions', href: '/5g-solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ], [])

  return (
    <nav className="bg-slate-900/95 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/demo"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Demo
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={onSidebarToggle}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
