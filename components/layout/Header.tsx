
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import React, { useState, useEffect } from 'react'
import Link from 'next /
import Link from 'next/
import Button from '../ui/
    { name: 'Home', href: any
    { name: 'Services', href: any
    { name: 'About', href: any
 name: 'Contact', href: any
import React,{ useState,useEffect } from 'react'; import Link from 'next/link'; import { useRouter } from 'next/router'; import { motion,AnimatePresence } from 'framer-motion'; import { Menu,X,Home,Users,Briefcase,Phone,Mail,ChevronDown,Brain,Shield,Cloud,Database,Network,Zap,Target,DollarSign,BookOpen,Calendar,FileText,Award,Globe,Search,ArrowRight } from 'lucide-react'; import { Button } from '../ui/Button'; import { Badge } from '../ui/Badge'; const Header: React.FC = () => { const [isScrolled,setIsScrolled] = useState(false); useEffect() => { const handleScroll = () => { setIsScrolled(window && window.scrollY > 0)}; window && window.addEventListener('scroll',handleScroll); return () => window && window.removeEventListener('scroll',handleScroll)},[]); const navigationItems = [ { name: 'Home',href: '/' },{ name: 'Services',href: '/services' },{ name: 'Solutions',href: '/solutions' },{ name: 'About',href: '/about' },{ name: 'Careers',href: '/careers' },{ name: 'Contact',href: any
import React, { useState, useEffect } from 'react'; import Link from 'next / link'; import { use_router } from 'next / router'; import { motion, AnimatePresence } from 'framer-motion'; import { Menu, X, Home, Users, Briefcase, Phone, Mail, ChevronDown, Brain, Shield, Cloud, Database, Network, Zap, Target, DollarSign, BookOpen, Calendar, FileText, Award, Globe, Search, ArrowRight } from 'lucide-react'; import { Button } from '../ui / Button'; import { Badge } from '../ui / Badge'; const Header: React.FC = () => { const [is_scrolled, setIsScrolled] = useState (false); useEffect () => { const handle_scroll = () =>: any { setIsScrolled (window.scroll_y > 0)} window.addEventListener ('scroll', handle_scroll); return () => window.removeEventListener ('scroll', handle_scroll)}, []); const navigation_items = [ { name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Solutions', href: '/solutions' }, { name: 'About', href: '/about' }, { name: 'Careers', href: '/careers' }, { name: 'Contact', href: any