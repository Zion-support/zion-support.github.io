<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const filteredServices = ultimateFuturisticServices2025.filter (service => {
  const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || const sortedServices = [...filteredServices].sort ( (a, b) => {
  switch (sortBy) {
  case 'price-low': case 'rating': return b.rating - a.rating
case 'customers': const containerVariants = {
  hidden: {
  opacity: 0 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1 
}
}
}
const itemVariants = {
  hidden: {
  y: 20, opacity: 0 
}
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5 
}
}
}
return (<Layout> <Head> <title>Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title> <motion.div initial= {
  {
  opacity: 0, y: 30 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}> <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Ultimate Futuristic </span> <br /> <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent" > Services 2025 </span> </h1> </div> </motion.div>) ) 
}</div> </motion.div> </div> </section> </option>) ) 
}</select> {
  /* Sort Options */ 
}<select > <option value="popular" >Most Popular</option> <option value="price-low" >Price: Low to High</option> <option value="price-high" >Price: High to Low</option> <option value="rating" >Highest Rated</option> <option value="customers" >Most Customers</option> </select> <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded $ {
  viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400' 
}` 
}> <div className="grid grid-cols-2 gap-1 w-4 h-4" > <div className="bg-current rounded-sm" ></div> <div className="bg-current rounded-sm" ></div> <div className="bg-current rounded-sm" ></div> <div className="bg-current rounded-sm" ></div> </div> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded $ {
  viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400' 
}` 
}> <div className="space-y-1 w-4 h-4" > <div className="bg-current rounded-sm h-0.5" ></div> <div className="bg-current rounded-sm h-0.5" ></div> <div className="bg-current rounded-sm h-0.5" ></div> </div> </button> </div> </div> </div> </div> </section> > {
  sortedServices.map ( (service, index) => (<motion.div key= {
  service.id 
}variants= {
  itemVariants 
}className= {
  `group relative $ {
  viewMode === 'grid' ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105' : 'bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300' 
}` 
}> Popular </div>) 
}{
  /* Service Header */ 
}<div className= {
  `$ {
  viewMode === 'list' ? 'flex items-start space-x-6' : 'text-center' 
}` 
}> <div className= {
  `$ {
  viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-4' 
}` 
}> <div className= {
  `w-16 h-16 rounded-2xl bg-gradient-to-br $ {
  service.color 
}flex items-center justify-center text-3xl` 
}> {
  service.icon 
}</div> </div> </div> </div> </div> + {
  service.features.length - 4 
}more features </div>) 
}</div> </div> </div> </div> </div> > Get Started </a> <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors" > <Eye className="w-5 h-5" /> </button> </div> </a> </div> </div> </div> </motion.div>) ) 
}</motion.div> > Clear Filters </button> </div>) 
}</div> </section> <motion.div initial= {
  {
  opacity: 0, y: 30 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}viewport= {
  {
  once: true 
}
}> Ready to Experience the Future? </h2> <p className="text-xl text-gray-300 mb-8" > Transform your business with our revolutionary futuristic services. Get in touch with our experts to discuss your specific needs and implementation strategy. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <Link href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105" > Contact Our Experts </a> <Link href="/pricing" className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors" > View Pricing </a> </div> </motion.div> </div> </section> </Layout>) 
}
<<<<<<< HEAD
import Link from 'next/link';
=======
import Link from 'next/link';

>>>>>>> origin/chore/fix-lint-and-merge
import { motion, AnimatePresence } from 'framer-motion';

=======
=======
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from 'react';
import Head from 'next/head';


<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import React, { useState } from 'react';
import Head from 'next/head';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
<<<<<<< HEAD
  Star
  TrendingUp
  Users
  Award
  Clock
  Heart
  Brain
  Atom
  Shield
  Rocket
  Zap
  Globe
  CheckCircle
  ArrowRight
  Search
  Filter
  ChevronDown
  ChevronUp
  Eye
  Play
  Sparkles
  Target
  Microscope
  Lock
  Cloud
  BarChart3
  Settings
  Cpu
  Database
  Network
  Server
  ShieldCheck
  GlobeIcon
  StarIcon
  TrendingUpIcon
  UsersIcon
  CheckCircleIcon
  ArrowRightIcon
  CpuIcon
  DollarSign
  Phone
  Mail
  MapPin
  Dna
  Target as TargetIcon
  Shield as ShieldIcon
  BookOpen
  Sparkles as SparklesIcon
  Zap as ZapIcon
  Brain as BrainIcon
  Play as PlayIcon;
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services';import {
  Star, TrendingUp, Users, Award, Clock, Heart
  Brain, Atom, Shield, Rocket, Zap, Globe

=======


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1 
}
}
}
const itemVariants = {
  hidden: {
  y: 20, opacity: 0 
}
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5 
}
}
}
return (<Layout> <Head> <title>Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title> <motion.div initial= {
  {
  opacity: 0, y: 30 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}> <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Ultimate Futuristic </span> <br /> <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent" > Services 2025 </span> </h1> </div> </motion.div>) ) 
}</div> </motion.div> </div> </section> </option>) ) 
}</select> {
  /* Sort Options */ 
}<select > <option value="popular" >Most Popular</option> <option value="price-low" >Price: Low to High</option> <option value="price-high" >Price: High to Low</option> <option value="rating" >Highest Rated</option> <option value="customers" >Most Customers</option> </select> <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded $ {
  viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400' 
}` 
}> <div className="grid grid-cols-2 gap-1 w-4 h-4" > <div className="bg-current rounded-sm" ></div> <div className="bg-current rounded-sm" ></div> <div className="bg-current rounded-sm" ></div> <div className="bg-current rounded-sm" ></div> </div> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded $ {
  viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400' 
}` 
}> <div className="space-y-1 w-4 h-4" > <div className="bg-current rounded-sm h-0.5" ></div> <div className="bg-current rounded-sm h-0.5" ></div> <div className="bg-current rounded-sm h-0.5" ></div> </div> </button> </div> </div> </div> </div> </section> > {
  sortedServices.map ( (service, index) => (<motion.div key= {
  service.id 
}variants= {
  itemVariants 
}className= {
  `group relative $ {
  viewMode === 'grid' ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105' : 'bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300' 
}` 
}> Popular </div>) 
}{
  /* Service Header */ 
}<div className= {
  `$ {
  viewMode === 'list' ? 'flex items-start space-x-6' : 'text-center' 
}` 
}> <div className= {
  `$ {
  viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-4' 
}` 
}> <div className= {
  `w-16 h-16 rounded-2xl bg-gradient-to-br $ {
  service.color 
}flex items-center justify-center text-3xl` 
}> {
  service.icon 
}</div> </div> </div> </div> </div> + {
  service.features.length - 4 
}more features </div>) 
}</div> </div> </div> </div> </div> > Get Started </a> <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors" > <Eye className="w-5 h-5" /> </button> </div> </a> </div> </div> </div> </motion.div>) ) 
}</motion.div> > Clear Filters </button> </div>) 
}</div> </section> <motion.div initial= {
  {
  opacity: 0, y: 30 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}viewport= {
  {
  once: true 
}
}> Ready to Experience the Future? </h2> <p className="text-xl text-gray-300 mb-8" > Transform your business with our revolutionary futuristic services. Get in touch with our experts to discuss your specific needs and implementation strategy. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <Link href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105" > Contact Our Experts </a> <Link href="/pricing" className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors" > View Pricing </a> </div> </motion.div> </div> </section> </Layout>) 
}
import Link from 'next/link';
=======
import Link from 'next/link';

>>>>>>> origin/chore/fix-lint-and-merge
import { motion, AnimatePresence } from 'framer-motion';

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Star, TrendingUp, Users, Award, Clock, Heart;
  Brain, Atom, Shield, Rocket, Zap, Globe;
import {
  Star;
TrendingUp,
Users;
Award,
Clock;
Heart,
Brain;
Atom,
Shield;
Rocket,
Zap;
Globe,
CheckCircle;
ArrowRight,
Search;
Filter,
ChevronDown;
ChevronUp,
Eye;
Play,
Sparkles;
Target,
Microscope;
Lock,
Cloud;
BarChart3,
Settings;
Cpu,
Database;
Network,
Server;
ShieldCheck,
GlobeIcon;
StarIcon,
TrendingUpIcon;
UsersIcon,
CheckCircleIcon;
ArrowRightIcon,
CpuIcon;
DollarSign,
Phone;
Mail,
MapPin;
Dna,
Target as TargetIcon;
Shield as ShieldIcon;
BookOpen,
Sparkles as SparklesIcon;
Zap as ZapIcon;
Brain as BrainIcon;}
Play as PlayIcon;}
 } from 'lucide-react';
import Layout from '../components/layout/Layout';


import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',}
  website: 'https://ziontechgroup.com',}
};
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Star,
  TrendingUp,
  Users,
  Award,
  Clock,
  Heart,
  Brain,
  Atom,
  Shield,
  Rocket,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Eye,
  Play,
  Sparkles,
  Target,
  Microscope,
  Lock,
  Cloud,
  BarChart3,
  Settings,
  Cpu,
  Database,
  Network,
  Server,
  ShieldCheck,
  GlobeIcon,
  StarIcon,
  TrendingUpIcon,
  UsersIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CpuIcon,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Dna,
  Target as TargetIcon,
  Shield as ShieldIcon,
  BookOpen,
  Sparkles as SparklesIcon,
  Zap as ZapIcon,
<<<<<<< HEAD
import Layout from '../components / layout / Layout';
import { ultimateFuturisticServices2025 } from '../data / 2025 - ultimate - futuristic - services';import {
  Star, TrendingUp, Users, Award, Clock, Heart,
  Brain, Atom, Shield, Rocket, Zap, Globe,
  Brain as BrainIcon,;
  Play as PlayIcon,;
} from 'lucide-react';
=======
<<<<<<< HEAD
  Brain as BrainIcon,
  Play as PlayIcon,
} from 'lucide-react';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import Layout from '../components/layout/Layout';
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services';import {
  Star, TrendingUp, Users, Award, Clock, Heart, 
  Brain, Atom, Shield, Rocket, Zap, Globe, ;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  CheckCircle, ArrowRight, Search, Filter;

  ChevronDown, ChevronUp, Eye, Play, Sparkles;
  Target, Microscope, Lock, Cloud, BarChart3;
  Settings, Cpu, Database, Network, Server;
  ShieldCheck, GlobeIcon, StarIcon, TrendingUpIcon;
  UsersIcon, CheckCircleIcon, ArrowRightIcon;
  CpuIcon, DollarSign, Phone, Mail, MapPin;
  Dna, Target as TargetIcon, Shield as ShieldIcon;
<<<<<<< HEAD
  BookOpen, Sparkles as SparklesIcon, Zap as ZapIcon;
  Brain as BrainIcon, Play as PlayIcon
} from 'lucide-react;
import Layout from ../components/layout/Layout';
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services;
const contactInfo = {
  mobile: +1 302 464 0950',
  email: 'kleber@ziontechgroup.com,
  address: 364 E Main St STE 1008 Middletown DE 19709',
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services;import {
  Star, TrendingUp, Users, Award, Clock, Heart
  Brain, Atom, Shield, Rocket, Zap, Globe
  website: https://ziontechgroup.com'
}
=======
>>>>>>> origin/chore/fix-lint-and-merge

  BookOpen, Sparkles as SparklesIcon, Zap as ZapIcon;
<<<<<<< HEAD

  Brain as BrainIcon, Play as PlayIcon;
=======
<<<<<<< HEAD
  Brain as BrainIcon, Play as PlayIcon
 } from 'lucide-react';
=======

  Brain as BrainIcon, Play as PlayIcon;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
 } from 'lucide-react';

const contactInfo = null;
visible: {opacity: 1, transition: {staggerChildren: 0.1;}
}

const itemVariants = {hidden: {y: 20, opacity: 0;}
}
visible: {y: 0, opacity: 1, transition: {duration: 0.5;
];


const stats = [
  {
<<<<<<< HEAD

export default function UltimateFuturisticServicesShowcase2025() {
<<<<<<< HEAD
=======
=======
} from 'lucide-react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import Layout from '../components/layout/Layout';
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services';


export default function UltimateFuturisticServicesShowcase2025() {;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


export default function UltimateFuturisticServicesShowcase2025() {;

<<<<<<< HEAD
export default function UltimateFuturisticServicesShowcase2025() {

export default function UltimateFuturisticServicesShowcase2025() {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
<<<<<<< HEAD

  const filteredServices = ultimateFuturisticServices2025.filter(service => {
=======
<<<<<<< HEAD
  const filteredServices = ultimateFuturisticServices2025.filter(service => {
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' |service.category === selectedCategory;
    return matchesSearch && matchesCategory
=======

  const filteredServices = ultimateFuturisticServices2025.filter(service => {
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory
=======
    number: '15+',
  label: 'Revolutionary Services',
    icon: Star,}
    color: 'text-cyan-400',}
  },
  {
    number: '1000%+',
  label: 'Average ROI',
    icon: TrendingUp,}
    color: 'text-purple-400',}
  },
  {
    number: '99.9%',
  label: 'Success Rate',
    icon: Award,}
    color: 'text-green-400',}
  },
  {
    number: '24/7',
  label: 'Expert Support',
    icon: Clock,}
    color: 'text-pink-400',}
  },
];

export default function UltimateFuturisticServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const [selectedCategory, setSelectedCategory] = useState('all');

const [sortBy, setSortBy] = useState('popular');

const [viewMode, setViewMode] = useState('grid');

const filteredServices = ultimateFuturisticServices2025.filter(service => {;
  const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase());

const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;}
    return matchesSearch && matchesCategory;}
>>>>>>> origin/chore/fix-lint-and-merge
  });

const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
<<<<<<< HEAD

=======
      case 'price-low':;
  return (
          parseFloat(a.price.replace(/[^0-9.]/g, '')) -
          parseFloat(b.price.replace(/[^0-9.]/g, ''))
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const filteredServices = ultimateFuturisticServices2025 && ultimateFuturisticServices2025.filter(service => {;
    const matchesSearch =;
      service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
    const matchesCategory =;
      selectedCategory === 'all' || service && service.category === selectedCategory;
    return matchesSearch && matchesCategory;  });    const matchesSearch = service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service && service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'price-low':;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        return (
          parseFloat(a && a.price.replace(/[^0-9.]/g, '')) -;
          parseFloat(b && b.price.replace(/[^0-9.]/g, ''));
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        );
      case 'price-high':;
        return (

          parseFloat(b.price.replace(/[^0-9.]/g, '')) -
          parseFloat(a.price.replace(/[^0-9.]/g, ''))
        );
      case 'rating':
        return b.rating - a.rating;
      case 'customers':
>>>>>>> origin/chore/fix-lint-and-merge
        return b.customers - a.customers;
default:}
        return b.popular ? 1 : -1;}
    }
  });
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const containerVariants = {}
    hidden: { opacity: 0,}
}
<<<<<<< HEAD
    "visible": {
      }
      "opacity": 1,
"transition": {
}
"staggerChildren": 0.1
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };        staggerChildren: 0 && 0.1;
<<<<<<< HEAD
  return (


  });
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'rating':
  Brain as BrainIcon, Play as PlayIcon;
} from 'lucide-react';
import Layout from '../components / layout / Layout';
import { ultimateFuturisticServices2025 } from '../data / 2025 - ultimate - futuristic - services';
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
}
visible: {
  opacity: 1, transition: {
  stagger_children: 0.1;
}
const item_variants = {
  hidden: {
  coordinate_y: 20, opacity: 0;
}
visible: {
  coordinate_y: 0, opacity: 1, transition: {
  duration: 0.5;
];
;
const stats = [;
  {
    number: '15+',
    label: 'Revolutionary Services',
    icon: Star,
    color: 'text - cyan - 400',
  },
  {
    number: '1000%+',
    label: 'Average ROI',
    icon: TrendingUp,
    color: 'text - purple - 400',
  },
  {
    number: '99.9%',
    label: 'Success Rate',
    icon: Award,
    color: 'text - green - 400',
  },
  {
    number: '24 / 7',
    label: 'Expert Support',
    icon: Clock,
    color: 'text - pink - 400',
  }, ];  { number: '15+', label: 'Revolutionary Services', icon: Star, color: 'text - cyan - 400' },
  { number: '1000%+', label: 'Average ROI', icon: TrendingUp, color: 'text - purple - 400' },
  { number: '99.9%', label: 'Success Rate', icon: Award, color: 'text - green - 400' },
  { number: '24 / 7', label: 'Expert Support', icon: Clock, color: 'text - pink - 400' }
export default /**
 * UltimateFuturisticServicesShowcase2025 - Function description
 */
function UltimateFuturisticServicesShowcase2025() {
  const [search_term, setSearchTerm] = useState ('');
  const [selected_category, setSelectedCategory] = useState ('all');
  const [sort_by, setSortBy] = useState ('popular');
  const [view_mode, setViewMode] = useState ('grid');
;
  const filtered_services = ultimateFuturisticServices2025.filter (service => {
    const matches_search =;
      service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.category.toLowerCase ().includes (search_term.toLowerCase ());
    const matches_category =;
      selected_category === 'all' || service.category === selected_category;
    return matches_search && matches_category;  });    const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.category.toLowerCase ().includes (search_term.toLowerCase ());
    const matches_category = selected_category === 'all' || service.category === selected_category;
    return matches_search && matches_category;
  const sorted_services = [...filtered_services].sort ((a, b) => {
    switch (sort_by) {
      case 'price - low':;
        return (
          parse_float (a.price.replace (/[^0 - 9.]/g, '')) -;
          parse_float (b.price.replace (/[^0 - 9.]/g, '')));
      case 'price - high':;
        return (
          parse_float (b.price.replace (/[^0 - 9.]/g, '')) -;
          parse_float (a.price.replace (/[^0 - 9.]/g, '')));      case 'rating':;
        return b.rating - a.rating;
      case 'customers':;
        return b.customers - a.customers;
      default:;
        return b.popular ? 1 : -1;    }        return parse_float (a.price.replace (/[^0 - 9.]/g, '')) - parse_float (b.price.replace (/[^0 - 9.]/g, ''));
      case 'price - high':;
        return parse_float (b.price.replace (/[^0 - 9.]/g, '')) - parse_float (a.price.replace (/[^0 - 9.]/g, ''));
      case 'rating':;
        return b.rating - a.rating;
      case 'customers':;
        return b.customers - a.customers;
      default:;
        return b.popular ? 1 : -1;      default: return b.popular ? 1 : -1;
    }
  });
;
  const container_variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        stagger_children: 0.1,
      },
    },  }        stagger_children: 0.1;
      }
    }
  }
<<<<<<< HEAD
=======
;
  const item_variants = {
    hidden: { coordinate_y: 20, opacity: 0 },
    visible: {
      coordinate_y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },  }        duration: 0.5;
      }
    }
  }
;
  return (
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
    }
  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
    visible: {
      opacity: 1;
transition: {}
staggerChildren: 0.1,}
      },
    }}
>>>>>>> origin/chore/fix-lint-and-merge

const itemVariants = {}
    hidden: { y: 20, opacity: 0,}
},
<<<<<<< HEAD
    "visible": {
      }
      "y": 0,
      "opacity": 1,
      "transition": {
}
"duration": 0.5
      }
    }
  }

<<<<<<< HEAD
return (;
    <Layout>
      <Head>

                  </div>;
                </motion.div>;
              ))}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Layout>;
      <Head>;
        <title>;
          Ultimate Futuristic Services Showcase 2025 | Zion Tech Group;
        </title>;
<<<<<<< HEAD
    <Layout>
      <Head>
        <title>Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title>
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' |service.category === selectedCategory;
    return matchesSearch && matchesCategory;  });    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' |service.category === selectedCategory;
    return matchesSearch && matchesCategory
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return (
          parseFloat(a.price.replace(/[^0-9.]/g, '')) -
          parseFloat(b.price.replace(/[^0-9.]/g, ''))
        );
      case 'price-high':
        return (
          parseFloat(b.price.replace(/[^0-9.]/g, '')) -
          parseFloat(a.price.replace(/[^0-9.]/g, ''))
        );      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
      default:
        return b.popular ? 1 : -1;    }        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
      default:
        return b.popular ? 1 : -1;      default: return b.popular ? 1 : -1
    }
  });
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    },  };        staggerChildren: 0.1
      }
    }
  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }
    visible: {
      y: 0
      opacity: 1
      transition: {
        duration: 0.5
      }
    },  };        duration: 0.5
      }
    }
  }
        duration: 0.5,
      },
    },  };

  };

  return (
    <Layout>
      <Head>
        <title>
          Ultimate Futuristic Services Showcase 2025 | Zion Tech Group
        </title>
        <meta
          name='description'
          content='Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations. Transform your business with cutting-edge technology.'
        />
        <meta
          name='keywords'
          content='futuristic services, AI consciousness, quantum computing, space technology, breakthrough innovations, Zion Tech Group'
        />
        <meta
          property='og:title'
          content='Ultimate Futuristic Services Showcase 2025 | Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations.'
        />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025'
        />
        <meta property='og:type' content='website' />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025'
        />
      </Head>
      {/* Hero Section */}
      <section className='relative py-20 lg:py-32 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'></div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion.div        <title>Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title>
=======

    <Layout>
      <Head>
        <title>Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <meta name="description" content="Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="futuristic services, AI consciousness, quantum computing, space technology, breakthrough innovations, Zion Tech Group" />
        <meta property="og:title" content="Ultimate Futuristic Services Showcase 2025 | Zion Tech Group" />
        <meta property="og:description" content="Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations." />
        <meta property="og:url" content="https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025" />
      </Head>
<<<<<<< HEAD
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ultimate Futuristic
              </span>
              <br />
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                Ultimate Futuristic
              </span>
              <br />
              <span className='bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent'>
                Services 2025
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>
              Experience the future of technology with our revolutionary
              services that combine AI consciousness, quantum computing, space
              technology, and breakthrough innovations to transform your
              business.
            </p>
            <div className='flex flex-wrap justify-center gap-4 mb-12'>              {stats.map((stat, index) => (                Ultimate Futuristic
=======
<<<<<<< HEAD
          href='https://ziontechgroup && ziontechgroup.com/ultimate-futuristic-services-showcase-2025'
        />;
      </Head>;

      {/* Hero Section */}

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<<<<<<< HEAD
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ultimate Futuristic

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary services that combine AI consciousness
              quantum computing, space technology, and breakthrough innovations to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
<<<<<<< HEAD
=======
              {stats.map((stat, index) => (
                <motion.div

            transition={{ duration: 0 && 0.8 }}
          >;
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                Ultimate Futuristic;
              </span>;
              <br />;
              <span className='bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent'>;
                Services 2025;
              </span>;
            </h1>;
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>;
        <meta;
          name='description';
          content='Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations. Transform your business with cutting - edge technology.';
        />;
        <meta;
          name='keywords';
          content='futuristic services, AI consciousness, quantum computing, space technology, breakthrough innovations, Zion Tech Group';
        />;
        <meta;
          property='og:title';
          content='Ultimate Futuristic Services Showcase 2025 | Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations.';
        />;
        <meta;
          property='og:url';
          content='https://ziontechgroup.com / ultimate - futuristic - services - showcase - 2025';
        />;
        <meta property='og:type' content='website' />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / ultimate - futuristic - services - showcase - 2025';
        />;
      </Head>;
      {/* Hero Section */}
      <section className='relative py - 20 lg:py - 32 overflow - hidden'>;
        <div className='absolute inset - 0 bg - gradient - to - br from - black via - purple - 900 / 20 to - black'></div>;
        <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>          <motion.div        <title > Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title>;
        <meta name="description" content="Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations. Transform your business with cutting - edge technology." />;
        <meta name="keywords" content="futuristic services, AI consciousness, quantum computing, space technology, breakthrough innovations, Zion Tech Group" />;
        <meta property="og:title" content="Ultimate Futuristic Services Showcase 2025 | Zion Tech Group" />;
        <meta property="og:description" content="Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations." />;
        <meta property="og:url" content="https://ziontechgroup.com / ultimate - futuristic - services - showcase - 2025" />;
        <meta property="og:type" content="website" />;
        <link rel="canonical" href="https://ziontechgroup.com / ultimate - futuristic - services - showcase - 2025" />;
      </Head>;
      {/* Hero Section */}
      <section className="relative py - 20 lg:py - 32 overflow - hidden">;
        <div className="absolute inset - 0 bg - gradient - to - br from - black via - purple - 900 / 20 to - black"></div>;
        <div className="relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className='text - 4xl md:text - 6xl lg:text - 7xl font - bold text - white mb - 6'>;
              <span className='bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                Ultimate Futuristic;
              </span>;
              <br />;
              <span className='bg - gradient - to - r from - blue - 400 via - indigo - 400 to - violet - 400 bg - clip - text text - transparent'>;
                Services 2025;
              </span>;
            </h1>;
            <p className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Experience the future of technology with our revolutionary;
              services that combine AI consciousness, quantum computing, space;
              technology, and breakthrough innovations to transform your;
              business.;
            </p>;
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  key={index}
                  initial={{ opacity: 0, scale: 0 && 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                  className='flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20'>;
                  <stat && stat.icon className={`w-6 h-6 ${stat && stat.color}`} />;
                  <div className='text-left'>;
                    <div className='text-2xl font-bold text-white'>;
                      {stat && stat.number}
                    </div>;
                    <div className='text-sm text-gray-300'>{stat && stat.label}</div>                  </div>                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20";
                >;
                  <stat && stat.icon className={`w-6 h-6 ${stat && stat.color}`} />;
                  <div className="text-left">;
                    <div className="text-2xl font-bold text-white">{stat && stat.number}</div>;
                    <div className="text-sm text-gray-300">{stat && stat.label}</div>;
                </motion && motion.div>;

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className='flex flex - wrap justify - center gap - 4 mb - 12'>              {stats.map ((stat, index) => (                Ultimate Futuristic;
              </span>;
              <br />;
              <span className="bg - gradient - to - r from - blue - 400 via - indigo - 400 to - violet - 400 bg - clip - text text - transparent">;
                Services 2025;
              </span>;
            </h1>;
            <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto">;
              Experience the future of technology with our revolutionary services that combine AI consciousness,
              quantum computing, space technology, and breakthrough innovations to transform your business.;
            </p>;
            <div className="flex flex - wrap justify - center gap - 4 mb - 12">;
              {stats.map ((stat, index) => (
                <motion.div;

<<<<<<< HEAD
  const _filteredServices = ultimateFuturisticServices2025.filter(service => {
    const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()),
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  }),

  const _sortedServices = [...filteredServices].sort(_(a, _b) => {_switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')),
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, '')),
      case 'rating':
        return b.rating - a.rating,
      case 'customers':
      case 'rating':
        return b.rating - a.rating,
      case 'customers':

        return b.customers - a.customers,
      default: return b.popular ? 1 : -1
    }
  }),

  const _containerVariants = {_hidden: { opacity: 0}
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  },

  return (_<Layout>
      <Head>
        <title>Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations. Transform your business with cutting-edge technology.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;futuristic services, AI consciousness, quantum computing, space technology, breakthrough innovations, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Ultimate Futuristic Services Showcase 2025 | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative py-20 lg:py-32 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black&quot;></div>
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className=&quot;text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6&quot;>
              <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                Ultimate Futuristic
              </span>
              <br />
              <span className=&quot;bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent&quot;>
                Services 2025
              </span>
            </h1>
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
              Experience the future of technology with our revolutionary services that combine AI consciousness, 
              quantum computing, space technology, and breakthrough innovations to transform your business.
            </p>
            <div className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;>
              {stats.map((stat, index) => (
                <motion.div

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  <div className=text-left">
                    <div className="text-2xl font-bold text-white>{stat.number}</div>
                    <div className=text-sm text-gray-300">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
=======
    visible: {
      y: 0,
      opacity: 1,
      transition: {}
duration: 0.5,}
      },
    }}
<<<<<<< HEAD

  return (
    <Layout    />
      <Head><title>
          Ultimate Futuristic Services Showcase 2025 | Zion Tech Group;
        </title>
        <meta;
name='description'
          content='Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations. Transform your business with cutting-edge technology.'
           />
        <meta;
name='keywords'
          content='futuristic services, AI consciousness, quantum computing, space technology, breakthrough innovations, Zion Tech Group'
           />
        <meta;
property='og:title'
          content='Ultimate Futuristic Services Showcase 2025 | Zion Tech Group'
           />
        <meta;
property='og:description'
          content='Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations.'
           />
        <meta;
property='og: url'
          content='https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025'
           />
        <meta property='og:type' content='website'    />
        <link;
rel='canonical'
          href='https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025'
           />
      </Head>
      {/* Hero Section *,}
}
      <section className='relative py-20 lg:py-32 overflow-hidden'    />
        <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'    /></div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'    />
          <motion.div;
initial={{ opacity: 0, y: 30 ,}
}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 ,}
}
              />
<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'    />
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'    />
                Ultimate Futuristic;
              </span>
              <br    />
              <span className='bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent'    />
                Services 2025;
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'    />
              Experience the future of technology with our revolutionary;
services that combine AI consciousness, quantum computing, space;
technology, and breakthrough innovations to transform your;
business.
            </p>
            <div className='flex flex-wrap justify-center gap-4 mb-12'    />
              {stats.map((stat, index) => (}
                <motion.div;}
key={index}
                  initial={{ opacity: 0, scale: 0.8 ,}
}
                  animate={{ opacity: 1, scale: 1 ,}
}
                  transition={{ duration: 0.5, delay: index * 0.1 }}

className='flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20'
                    />
                  <stat.icon className={`w-6 h-6 ${stat.color}`}    />
                  <div className='text-left'    />
                    <div className='text-2xl font-bold text-white'    />

                      {stat.numbe,}
}
                    </div>;
                    <div className='text-sm text-gray-300'    />{stat.label}</div>;
                  </div>;
                </motion.div>;
              ))}

>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD
</div>;
          </motion && motion.div>;
        </div>;
      </section>;
      {/* Search and Filter Section */}
                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'              />;
            </div>;
                  className='flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20'
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-white'>
                      {stat.number}
                    </div>
                    <div className='text-sm text-gray-300'>{stat.label}</div>                  </div>                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  return (
    <Layout    />
      <Head><title>
          Ultimate Futuristic Services Showcase 2025 | Zion Tech Group;
        </title>
        <meta;
name='description'
          content='Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations. Transform your business with cutting-edge technology.'
           />
        <meta;
name='keywords'
          content='futuristic services, AI consciousness, quantum computing, space technology, breakthrough innovations, Zion Tech Group'
           />
        <meta;
property='og:title'
          content='Ultimate Futuristic Services Showcase 2025 | Zion Tech Group'
           />
        <meta;
property='og:description'
          content='Discover our revolutionary futuristic services including AI consciousness, quantum computing, space technology, and breakthrough innovations.'
           />
        <meta;
property='og: url'
          content='https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025'
           />
        <meta property='og:type' content='website'    />
        <link;
rel='canonical'
          href='https://ziontechgroup.com/ultimate-futuristic-services-showcase-2025'
           />
      </Head>
      {/* Hero Section *,}
}
      <section className='relative py-20 lg:py-32 overflow-hidden'    />
        <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'    /></div>
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'    />
          <motion.div;
initial={{ opacity: 0, y: 30 ,}
}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 ,}
}
              />
<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'    />
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'    />
                Ultimate Futuristic;
              </span>
              <br    />
              <span className='bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent'    />
                Services 2025;
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'    />
              Experience the future of technology with our revolutionary;
services that combine AI consciousness, quantum computing, space;
technology, and breakthrough innovations to transform your;
business.
            </p>
            <div className='flex flex-wrap justify-center gap-4 mb-12'    />
              {stats.map((stat, index) => (}
                <motion.div;}
key={index}
                  initial={{ opacity: 0, scale: 0.8 ,}
}
                  animate={{ opacity: 1, scale: 1 ,}
}
                  transition={{ duration: 0.5, delay: index * 0.1 }}

className='flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20'
                    />
                  <stat.icon className={`w-6 h-6 ${stat.color}`}    />
                  <div className='text-left'    />
                    <div className='text-2xl font-bold text-white'    />

                      {stat.numbe,}
}
                    </div>;
                    <div className='text-sm text-gray-300'    />{stat.label}</div>;
                  </div>;
                </motion.div>;
              ))}

>>>>>>> origin/chore/fix-lint-and-merge
            </div>
          </motion.div>
        </div>
      </section>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      {/* Search and Filter Section */}
<<<<<<< HEAD


      {/* Search and Filter Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
<section className='py-12 bg-gradient-to-r from-black via-purple-900/10 to-black'    />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />;
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'    />;
              ))}
      {/* Search and Filter Section */}
      <section className='py-12 bg-gradient-to-r from-black via-purple-900/10 to-black'    />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />;
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'    />;
            {/* Search */}
            <div className='relative flex-1 max-w-md'    />;
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5'    />;

              <input;
type='text'
                placeholder='Search futuristic services...'
                value={searchTerm}

                onChange={e =    /> setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              />
            </div>

            {/* Category Filter *,}
}
<div className='flex flex-wrap gap-3'    />;
              <select;
<<<<<<< HEAD
                value={selectedCategory}
                onChange={e =    /> setSelectedCategory(e.target.value)}

=======
=======


<<<<<<< HEAD


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Search and Filter Section */}
      <section className='py-12 bg-gradient-to-r from-black via-purple-900/10 to-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>



<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Search */}
            <div className='relative flex-1 max-w-md'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='text'
                placeholder='Search futuristic services...'
                value={searchTerm}

<<<<<<< HEAD
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'              />
            </div>
            {/* Category Filter */}
            <div className='flex flex-wrap gap-3'>            {/* Search */}
            <div className="relative flex-1 max-w-md">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
=======
                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'              />;
            </div>;


            {/* Category Filter */}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <section className="py-12 bg-gradient-to-r from-black via-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <input
                type="text"
                placeholder="Search futuristic services..."
                value={searchTerm}
<<<<<<< HEAD
                onChange={(e) => setSearchTerm(e && e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent";
              />;
            </div>;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Category Filter */}
            <div className='flex flex-wrap gap-3'>;
              <select
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                value={selectedCategory}
                onChange={e =    /> setSelectedCategory(e.target.value)}

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              >
                <option value='all'    />All Categories</option>
                {serviceCategories.map(category => (}
                  <option key={category.title} value={category.title}    />
            <div className='flex flex-wrap gap-3'    />
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {serviceCategories.map((category) => (
                  <option key={category.title} value={category.title}>
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className='flex flex-wrap gap-3'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              />
            </div>

            {/* Category Filter */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <div className="flex flex-wrap gap-3>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className=px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent";
              >;
                <option value="all>All Categories</option>;
                {serviceCategories.map((category) => (onChange={e => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent;
=======

                  <option key={category.title} value={category.title}>

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    {category.title} ({category.count})
                  </option>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36





              {/* Sort Options */}
              <select
                value={sortBy}





              >
                <option value='popular'>Most Popular</option>
                <option value='price-low'>Price: Low to High</option>
                <option value='price-high'>Price: High to Low</option>
                <option value='rating'>Highest Rated</option>
                <option value='customers'>Most Customers</option>
              </select>
              </select>;

<<<<<<< HEAD
                    {category.title} ({category.count})
                  </option>
                ))}
=======
              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={e => setSortBy(e && e.target.value)}
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent';
              >;
                <option value='popular'>Most Popular</option>;
                <option value='price-low'>Price: Low to High</option>;
                <option value='price-high'>Price: High to Low</option>;
                <option value='rating'>Highest Rated</option>;
                <option value='customers'>Most Customers</option>;
              </select>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </select>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'

              >
                <option value='popular'>Most Popular</option>
                <option value='price-low'>Price: Low to High</option>
                <option value='price-high'>Price: High to Low</option>
                <option value='rating'>Highest Rated</option>
                <option value='customers'>Most Customers</option>
              </select>
              {/* View Mode Toggle */}
              <div className='flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1'>                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
<<<<<<< HEAD
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
=======

                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="customers">Most Customers</option>
              </select>
                >              >;
                <option value="popular">Most Popular</option>;
                <option value="price-low">Price: Low to High</option>;
                <option value="price-high">Price: High to Low</option>;
                <option value="rating">Highest Rated</option>;
                <option value="customers">Most Customers</option>;
              </select>;
              {/* View Mode Toggle */}
<<<<<<< HEAD
              <div className="flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
                >


                >;
                  <div className='grid grid-cols-2 gap-1 w-4 h-4'>
                    <div className='bg-current rounded-sm'></div>
                    <div className='bg-current rounded-sm'></div>
                    <div className='bg-current rounded-sm'></div>
                    <div className='bg-current rounded-sm'></div>                  </div>                  <div className="grid grid-cols-2 gap-1 w-4 h-4">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                  </div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}
                >
                  <div className="space-y-1 w-4 h-4">
                    <div className="bg-current rounded-sm h-0.5"></div>
                    <div className="bg-current rounded-sm h-0.5"></div>
                    <div className="bg-current rounded-sm h-0.5"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
=======


                >;
                  <div className='space-y-1 w-4 h-4'>;
                    <div className='bg-current rounded-sm h-0 && 0.5'></div>;
                    <div className='bg-current rounded-sm h-0 && 0.5'></div>;
                    <div className='bg-current rounded-sm h-0 && 0.5'></div>                  </div>                  <div className="space-y-1 w-4 h-4">;
                    <div className="bg-current rounded-sm h-0 && 0.5"></div>;
                    <div className="bg-current rounded-sm h-0 && 0.5"></div>;
                    <div className="bg-current rounded-sm h-0 && 0.5"></div>;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  className='flex items - center space - x-2 bg - white / 10 backdrop - blur - sm rounded - full px - 6 py - 3 border border - white / 20';
                >;
                  <stat.icon className={`w - 6 h - 6 ${stat.color}`} />;
                  <div className='text - left'>;
                    <div className='text - 2xl font - bold text - white'>;
                      {stat.number}
                    </div>;
                    <div className='text - sm text - gray - 300'>{stat.label}</div>                  </div>                  className="flex items - center space - x-2 bg - white / 10 backdrop - blur - sm rounded - full px - 6 py - 3 border border - white / 20";
                >;
                  <stat.icon className={`w - 6 h - 6 ${stat.color}`} />;
                  <div className="text - left">;
                    <div className="text - 2xl font - bold text - white">{stat.number}</div>;
                    <div className="text - sm text - gray - 300">{stat.label}</div>;
                </motion.div>))}
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Search and Filter Section */}
      <section className='py - 12 bg - gradient - to - r from - black via - purple - 900 / 10 to - black'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='flex flex - col lg:flex - row gap - 6 items - center justify - between'>;
            {/* Search */}
            <div className='relative flex - 1 max - w-md'>;
              <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5' />;
              <input;
                type='text';
                placeholder='Search futuristic services...';
                value={search_term}
                on_change={e => setSearchTerm (e.target.value)}
                className='w - full pl - 10 pr - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent'              />;
            </div>;
            {/* Category Filter */}
            <div className='flex flex - wrap gap - 3'>            {/* Search */}
            <div className="relative flex - 1 max - w-md">;
              <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5" />;
              <input;
                type="text";
                placeholder="Search futuristic services...";
                value={search_term}
                on_change={(e) => setSearchTerm (e.target.value)}
                className="w - full pl - 10 pr - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              />;
            </div>;
            {/* Category Filter */}
<div className=flex flex-wrap gap-3'>;
              <select;
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className=px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all>All Categories</option>
                {serviceCategories.map((category) => (
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent;
              >;
                <option value=all'>All Categories</option>;
                {serviceCategories.map(category => (<option key={category.title} value={category.title}>;
            <div className='flex flex-wrap gap-3>;
              />;
            </div>;
            {/* Category Filter */}<option key={category.title} value={category.title}>;
                    {category.title} ({category.count})</option>;
                  <option key={category.title} value={category.title}>
=======

                  <option key={category.title} value={category.title}    />

>>>>>>> origin/chore/fix-lint-and-merge
                    {category.title} ({category.count})
                  </option>

                ),
}
              </select>;
              {/* Sort Options */}
              <select;
                value={sortBy}
onChange={e =    /> setSortBy(e.target.value)}
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'>

                <option value='popular'    />Most Popular</option>;
                <option value='price-low'    />Price: Low to High</option>;
                <option value='price-high'    />Price: High to Low</option>;
                <option value='rating'    />Highest Rated</option>;
                <option value='customers'    />Most Customers</option>;
              </select>;
              {/* Sort Options */}
              <select;
                value={sortBy}
                onChange={e =    /> setSortBy(e.target.value)}
                className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent';
                ))}

<<<<<<< HEAD
              {/* Sort Options */}
              <select
                value={sortBy}
              {/* View Mode Toggle */}<div className=flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1'>                <button;
              {/* View Mode Toggle */}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
              <div className='flex bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg p - 1'>                <button;
                  on_click={() => setViewMode ('grid')}
                  className={`p - 2 rounded ${view_mode === 'grid' ? 'bg - purple - 500 text - white' : 'text - gray - 400'}`}
                >              >;
                <option value="popular">Most Popular</option>;
                <option value="price - low">Price: Low to High</option>;
                <option value="price - high">Price: High to Low</option>;
                <option value="rating">Highest Rated</option>;
                <option value="customers">Most Customers</option>;
              </select>;
              {/* View Mode Toggle */}
              <div className="flex bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg p - 1">;
                <button;
                  on_click={() => setViewMode ('grid')}
                  className={`p - 2 rounded ${view_mode === 'grid' ? 'bg - purple - 500 text - white' : 'text - gray - 400'}`}
                >;
                  <div className='grid grid - cols - 2 gap - 1 w - 4 h - 4'>;
                    <div className='bg - current rounded - sm'></div>;
                    <div className='bg - current rounded - sm'></div>;
                    <div className='bg - current rounded - sm'></div>;
                    <div className='bg - current rounded - sm'></div>                  </div>                  <div className="grid grid - cols - 2 gap - 1 w - 4 h - 4">;
                    <div className="bg - current rounded - sm"></div>;
                    <div className="bg - current rounded - sm"></div>;
                    <div className="bg - current rounded - sm"></div>;
                    <div className="bg - current rounded - sm"></div>;
                </button>;
                <button;
                  on_click={() => setViewMode ('list')}
                  className={`p - 2 rounded ${view_mode === 'list' ? 'bg - purple - 500 text - white' : 'text - gray - 400'}`}
                >;
                  <div className='space - y-1 w - 4 h - 4'>;
                    <div className='bg - current rounded - sm h - 0.5'></div>;
                    <div className='bg - current rounded - sm h - 0.5'></div>;
                    <div className='bg - current rounded - sm h - 0.5'></div>                  </div>                  <div className="space - y-1 w - 4 h - 4">;
                    <div className="bg - current rounded - sm h - 0.5"></div>;
                    <div className="bg - current rounded - sm h - 0.5"></div>;
                    <div className="bg - current rounded - sm h - 0.5"></div>;
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD
      <section className="py-16">
      {/* Services Grid */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
            }          >      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
<<<<<<< HEAD
=======


            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                variants={itemVariants}
                className={`group relative ${

                  viewMode === 'grid'                    ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105'                  viewMode === 'grid'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {/* View Mode Toggle */}

              <div className='flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1'    />
                <button;
onClick={() =    /> setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}>

<div className='grid grid-cols-2 gap-1 w-4 h-4'    />;
                    <div className='bg-current rounded-sm'    /></div>;
                    <div className='bg-current rounded-sm'    /></div>;
                    <div className='bg-current rounded-sm'    /></div>;
                    <div className='bg-current rounded-sm'    /></div>;
                  </div>;
                </button>;
                <button;
                  onClick={() =    /> setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400'}`}

                >
<div className='space-y-1 w-4 h-4'    />
                    <div className='bg-current rounded-sm h-0.5'    /></div>
                    <div className='bg-current rounded-sm h-0.5'    /></div>
                    <div className='bg-current rounded-sm h-0.5'    /></div>
>>>>>>> origin/chore/fix-lint-and-merge
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
            }
            initial=hidden"
            animate="visible
            className={viewMode === 'grid ? grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6}

      {/* Services Grid */}
      <section className=py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>
          <motion.div
            variants={containerVariants}
            initial=hidden"
            animate="visible
            className={viewMode === grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 : space-y-6'}
          >
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          >


          >

            {sortedServices.map((service, index) => (
              <motion.div
<<<<<<< HEAD
}
key={service.id}
                variants={itemVariants}


                }`}>`
                {/* Popular Badge */}

=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {/* Services Grid */}
<section className='py-16'    />
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'    />
          <motion.div;
variants={containerVariant,}
}
            initial='hidden';
            animate='visible';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            className={viewMode === 'grid';
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';}
                : 'space-y-6';}
            }
<<<<<<< HEAD

              />
            {sortedServices.map((service, index) => (}
              <motion.div;}
key={service.id}
                variants={itemVariants}
                className={`group relative ${

viewMode === 'grid'
                    ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover: border-purple-500/50 transition-all duration-300 hover:scale-105'
                    : 'bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300'}
}
                }`}    />

                {/* Popular Badge */}

                {service.popular && (
<div className='absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full'    />
                    Popular}
                  </div>}
                )}
                {/* Service Header */}
<div;
className={`${viewMode === 'list' ? 'flex items-start space-x-6' : 'text-center'}`}
                    />
                  <div;
className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-4'}`}
                      />
                    <div;
className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl`}
                        />
                      {service.icon}
                    </div>
                  </div>
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''},
}    />
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'    />
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
            className={
              view_mode === 'grid';
                ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8';
                : 'space - y-6';
            }          >      <section className="py - 16">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <motion.div;
            variants={container_variants}
            initial="hidden";
            animate="visible";
            className={view_mode === 'grid' ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8' : 'space - y-6'}
            {sorted_services.map ((service, index) => (
              <motion.div;
<<<<<<< HEAD
                key={service.id}
                variants={item_variants}
                className={`group relative ${
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              />
            {sortedServices.map((service, index) => (}
              <motion.div;}
key={service.id}
                variants={itemVariants}
                className={`group relative ${

<<<<<<< HEAD
viewMode === 'grid'
                    ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover: border-purple-500/50 transition-all duration-300 hover:scale-105'
                    : 'bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300'}
}
                }`}    />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  view_mode === 'grid'                    ? 'bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - sm border border - white / 20 rounded - 2xl p - 6 hover:border - purple - 500 / 50 transition - all duration - 300 hover:scale - 105'                  view_mode === 'grid';
                    ? 'bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - sm border border - white / 20 rounded - 2xl p - 6 hover:border - purple - 500 / 50 transition - all duration - 300 hover:scale - 105';
                    : 'bg - gradient - to - r from - white / 5 to - white / 10 backdrop - blur - sm border border - white / 20 rounded - 2xl p - 8 hover:border - purple - 500 / 50 transition - all duration - 300';
                }`}
              >;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                {/* Popular Badge */}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                {service.popular && (
<div className='absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full'    />
                    Popular}
                  </div>}
                )}
                {/* Service Header */}
<div;
className={`${viewMode === 'list' ? 'flex items-start space-x-6' : 'text-center'}`}
                    />
                  <div;
className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-4'}`}
                      />
                    <div;
className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl`}
                        />
                      {service.icon}
                    </div>
                  </div>
<<<<<<< HEAD
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''},
}    />
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'    />
>>>>>>> origin/chore/fix-lint-and-merge

=======
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>
                  <div className='absolute top - 4 right - 4 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white text - xs font - semibold px - 3 py - 1 rounded - full'>                    Popular                  <div className="absolute top - 4 right - 4 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white text - xs font - semibold px - 3 py - 1 rounded - full">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    Popular;
                  </div>;
                )}
                {/* Service Header */}
<div;
<<<<<<< HEAD
=======
                  className={`${viewMode === 'list' ? 'flex items-start space-x-6' : 'text-center'}`}    />

                  <div;
                    className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-4'}`}    />
>>>>>>> origin/chore/fix-lint-and-merge

                    <div;
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl`}    />

                      {service.icon}
                    </div>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

=======
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}    />

                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                    Popular;
                  </div>;
                {service.popular && ()}
                {/* Service Header */}
=======
                  <div className={`${view_mode === 'list' ? 'flex - 1' : ''}`}>;
                    <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - purple - 400 transition - colors'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      {service.name}
                    </h3>;
<<<<<<< HEAD

                        {service.price}
                    </div>
                  </div>
                  <div className={`${viewMode === list' ? 'flex-1 : '}`}>
                    <h3 className=text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {service.price}</div>;
                  </div>;
                  <div className={`${viewMode === 'list ? flex-1' : '}`}>;
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors>;
                      {service.name}
                    </h3>
                    <p className=text-gray-300 text-sm mb-3">{service.tagline}</p>
                    {/* Price */}
                  viewMode === grid' 
                    ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105
                    : bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300'
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full>
                    Popular
                  </div>
                )}


=======
                    <p className='text - gray - 300 text - sm mb - 3'    />;
                      {service.tagline}
                    {/* Price */}
                    <div className='flex items - center justify - center space - x-2 mb - 4'    />;
                      <span className='text - 3xl font - bold text - white'    />;

                        {service.price}

                      </span>
                      <span className='text-gray-400'    />{service.period}</span>
>>>>>>> origin/chore/fix-lint-and-merge
                    </div>
                  </div>
                </div>
                {/* Description */}
<<<<<<< HEAD
                        {service.price}</div>;
                  </div>;
<<<<<<< HEAD
                  <div className={`${viewMode === list' ? 'flex-1 : '}`}>;
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors>;
=======

                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>;
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>;
                      {service && service.name}
                    </h3>;
                    <p className='text-gray-300 text-sm mb-3'>;
                      {service && service.tagline}
                    </p>;

                    {/* Price */}
                    <div className='flex items-center justify-center space-x-2 mb-4'>;
                      <span className='text-3xl font-bold text-white'>;
                        {service && service.price}
                      </span>;
                      <span className='text-gray-400'>{service && service.period}</span>                    </div>                      {service && service.icon}
                    </div>;
                  </div>;

                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>;
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">;
                      {service && service.name}
                    </h3>;
                    <p className="text-gray-300 text-sm mb-3">{service && service.tagline}</p>;

                    {/* Price */}
                    <div className="flex items-center justify-center space-x-2 mb-4">;
                      <span className="text-3xl font-bold text-white">{service && service.price}</span>;
                      <span className="text-gray-400">{service && service.period}</span>;
                    </div>;
                  </div>;
                </div>;

                {/* Description */}
                <p className='text-gray-300 mb-6 leading-relaxed'>;
                  {service && service.description}
                </p>;


                {/* Features */}
                <div className='mb-6'>;
                  <h4 className='text-white font-semibold mb-3 flex items-center'>;
                    <Sparkles className='w-4 h-4 mr-2 text-purple-400' />;
                    Key Features;
                  </h4>;
                  <div className='grid grid-cols-1 gap-2'>;
                    {service && service.features.slice(0, 4).map((feature, idx) => (;
                      <div
                        key={idx}
                        className='flex items-center text-sm text-gray-300'>;
                        <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />                        {feature}
                      </div>;
                    ))}

<<<<<<< HEAD
                {/* Popular Badge */}
                {service.popular && (
=======
=======
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      </span>;
                      <span className='text - gray - 400'>{service.period}</span>                    </div>                      {service.icon}
                    </div>;
                  </div>;
                  <div className={`${view_mode === 'list' ? 'flex - 1' : ''}`}>;
                    <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - purple - 400 transition - colors">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <div className='absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full'>                    Popular                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

                {/* Service Header */}
                <div
                  className={`${viewMode === 'list' ? 'flex items-start space-x-6' : 'text-center'}`}
                >
                  <div
                    className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-4'}`}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl`}
                    >

                      {service.icon}
                    </div>
                  </div>
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      {service.name}
                    </h3>;
                    <p className=text-gray-300 text-sm mb-3">{service.tagline}</p>;
                    {/* Price */}
                    <div className="flex items-center justify-center space-x-2 mb-4>;
                      <span className=text-3xl font-bold text-white">{service.price}</span>;
                      <span className="text-gray-400>{service.period}</span>;
                      </span>;
                      <span className='text-gray-400>{service.period}</span>;
                    </div>;
                  </div>;
                </div>;
                {/* Description */}<p className=text-gray-300 mb-6 leading-relaxed'>;
                  {service.description}
                </p>;
<<<<<<< HEAD


=======

<p className='text-gray-300 mb-6 leading-relaxed'    />
>>>>>>> origin/chore/fix-lint-and-merge
                  {service.description}
                </p>
=======
                {/* Features */}
                <div className='mb - 6'>;
                  <h4 className='text - white font - semibold mb - 3 flex items - center'>;
                    <Sparkles className='w - 4 h - 4 mr - 2 text - purple - 400' />;
                    Key Features;
                  </h4>;
                  <div className='grid grid - cols - 1 gap - 2'>;
                    {service.features.slice (0, 4).map ((feature, idx) => (
                      <div;
                        key={idx}
                        className='flex items - center text - sm text - gray - 300';
                      >;
                        <CheckCircle className='w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0' />                        {feature}
                      </div>))}
                    {service.features.length > 4 && (
<<<<<<< HEAD
=======
                      <div className='text - sm text - purple - 400 mt - 2'>                        +{service.features.length - 4} more features;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                {/* Features */}
<<<<<<< HEAD

=======
                <div className='mb-6'    />;
                  <h4 className='text-white font-semibold mb-3 flex items-center'    />;
                    <Sparkles className='w-4 h-4 mr-2 text-purple-400'    />;
                    Key Features;
                  </h4>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <div className='grid grid-cols-1 gap-2'    />;

                    {service && service.features.slice(0, 4).map((feature, idx) => (;}
                      <div;}
key={idx}
<<<<<<< HEAD

                        className='flex items-center text-sm text-gray-300'
                          />
                        <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0'    />

                        {feature}
                      </div>;
                    ))}
                    {service.features.length > 4 && (<div className='text-sm text-purple-400 mt-2'    />;}
>>>>>>> origin/chore/fix-lint-and-merge
                        +{service.features.length - 4} more features;
                      </div>;
                    )}
=======
=======
                  <div className="grid grid - cols - 1 gap - 2">;
                    {service.features.slice (0, 4).map ((feature, idx) => (
                      <div key={idx} className="flex items - center text - sm text - gray - 300">;
                        <CheckCircle className="w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0" />;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <div className='text-sm text-purple-400 mt-2'>                        +{service.features.length - 4} more features
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>))}
                    {service.features.length > 4 && (
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
                    {service.features.length > 4 && (
                      <div className='text-sm text-purple-400 mt-2'>                        +{service.features.length - 4} more features
<<<<<<< HEAD
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="text-gray-400">
                    <span className="block">Setup Time</span>
                    <span className="text-white font-medium">{service.setupTime}</span>
                  </div>
                      <div className='text-sm text-purple-400 mt-2'>                      <div className="text-sm text-purple-400 mt-2">
                        +{service.features.length - 4} more features
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                        className='flex items-center text-sm text-gray-300'
                          />
                        <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0'    />

                        {feature}
                      </div>;
                    ))}
<<<<<<< HEAD
                    {service.features.length > 4 && (<div className='text-sm text-purple-400 mt-2'    />;}
>>>>>>> origin/chore/fix-lint-and-merge
                        +{service.features.length - 4} more features;
                      </div>;
=======
                    {service.features.length > 4 && (

                        +{service.features.length - 4} more features

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      </div>
                    )}
                  </div>
                </div>
<<<<<<< HEAD

                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (

                        +{service.features.length - 4} more features

                      </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    )}

<<<<<<< HEAD
<<<<<<< HEAD
                    {service.features.length > 4 && (
                      <div className=text-sm text-purple-400 mt-2'>                        +{service.features.length - 4} more features

                {/* Service Details */}
=======
                {/* Service Details */}
                <div className='grid grid-cols-2 gap-4 mb-6 text-sm'>
                  <div className='text-gray-400'>
                    <span className='block'>Setup Time</span>
                    <span className='text-white font-medium'>
                      {service.setupTime}
                    </span>


                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (

                        +{service.features.length - 4} more features

                      </div>
                    )}
                  </div>
                </div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



                {/* Service Details */}





<<<<<<< HEAD


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </div>
                  <div className='text-gray-400'>
                    <span className='block'>Trial</span>
                    <span className='text-white font-medium'>
                      {service.trialDays} days
                    </span>
                  </div>
                  <div className='text-gray-400'>
                    <span className='block'>Rating</span>
                    <div className='flex items-center'>
                      <span className='text-white font-medium mr-1'>
                        {service.rating}
                      </span>
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />
                    </div>
                  </div>
                  <div className='text-gray-400'>
                    <span className='block'>Customers</span>
                    <span className='text-white font-medium'>
                      {service.customers}+
                    </span>                  </div>
                </div>
                {/* ROI and Market Info */}                  </div>
                  <div className="text-gray-400">
                    <span className="block">Trial</span>
                    <span className="text-white font-medium">{service.trialDays} days</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="block">Rating</span>
                    <div className="flex items-center">
                      <span className="text-white font-medium mr-1">{service.rating}</span>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  <div className="text-gray-400">
                    <span className="block">Customers</span>
                    <span className="text-white font-medium">{service.customers}+</span>
                  </div>
                </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </div>;
                </div>;
                {/* Service Details */}
                <div className='grid grid-cols-2 gap-4 mb-6 text-sm'>;
                  <div className='text-gray-400'>;
                    <span className='block'>Setup Time</span>;
                    <span className='text-white font-medium'>;
                      {service && service.setupTime}
                    </span>;
                  </div>;
                  <div className='text-gray-400'>;
                    <span className='block'>Trial</span>;
                    <span className='text-white font-medium'>;
                      {service && service.trialDays} days;
                    </span>;
                  </div>;
                  <div className='text-gray-400'>;
                    <span className='block'>Rating</span>;
                    <div className='flex items-center'>;
                      <span className='text-white font-medium mr-1'>;
                        {service && service.rating}
                      </span>;
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />;
                    </div>;
                  </div>;
                  <div className='text-gray-400'>;
                    <span className='block'>Customers</span>;
                    <span className='text-white font-medium'>;
                      {service && service.customers}+;
                    </span>                  </div>;
                </div>;
                {/* ROI and Market Info */}                  </div>;
                  <div className="text-gray-400">;
                    <span className="block">Trial</span>;
                    <span className="text-white font-medium">{service && service.trialDays} days</span>;
                  </div>;
                  <div className="text-gray-400">;
                    <span className="block">Rating</span>;
                    <div className="flex items-center">;
                      <span className="text-white font-medium mr-1">{service && service.rating}</span>;
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />;
                    </div>;
                  </div>;
                  <div className="text-gray-400">;
                    <span className="block">Customers</span>;
                    <span className="text-white font-medium">{service && service.customers}+</span>;
                  </div>;
                </div>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* ROI and Market Info */}
                <div className='mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20'>;
                  <div className='text-sm'>;
                    <div className='text-gray-300 mb-2'>;
                      <span className='font-semibold text-white'>ROI:</span>{' '}
                      {service && service.roi}
                    </div>;
                    <div className='text-gray-300'>;
                      <span className='font-semibold text-white'>;
                        Market Size:;
                      </span>{' '}
<<<<<<< HEAD
                {/* ROI and Market Info */}
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
=======


                {/* ROI and Market Info */}
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <div className="text-sm">
                    <div className="text-gray-300 mb-2">
                      <span className="font-semibold text-white">ROI: </span> {service.roi}
                    </div>
                    <div className="text-gray-300">
                      <span className="font-semibold text-white">Market Size: </span> {service.marketSize}
<<<<<<< HEAD
                    </div>
=======

                    </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </div>
                </div>
<<<<<<< HEAD

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm>
                  <div className=text-gray-400">
                    <span className="block>Setup Time</span>
                    <span className=text-white font-medium">{service.setupTime}</span>
                  </div>
                  <div className="text-gray-400>
                    <span className=block">Trial</span>
                    <span className="text-white font-medium>{service.trialDays} days</span>
                  </div>
                  <div className=text-gray-400">
                    <span className="block>Rating</span>
                    <div className=flex items-center">
                      <span className="text-white font-medium mr-1>{service.rating}</span>
                      <Star className=w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  <div className="text-gray-400>
                    <span className=block">Customers</span>
                    <span className="text-white font-medium>{service.customers}+</span>
                  </div>
                </div>
                      </span>{ '}
                  <div className=text-sm">
                    <div className="text-gray-300 mb-2>
                      <span className=font-semibold text-white">ROI: </span> {service.roi}
                    </div>
                  </div>
                </div>
                      </span>{' }<div className="text-sm>;
                    <div className=text-gray-300 mb-2">;
                      <span className="font-semibold text-white>ROI: </span> {service.roi}
=======
                      {service && service.marketSize}                    </div>                <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">;
                  <div className="text-sm">;
                    <div className="text-gray-300 mb-2">;
                      <span className="font-semibold text-white">ROI: </span> {service && service.roi}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    </div>;
                    <div className=text-gray-300">;
                      <span className="font-semibold text-white>Market Size: </span> {service.marketSize}
                      {service && service.marketSize}                    </div>                <div className=mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">;
                  <div className="text-sm>;
                    <div className=text-gray-300 mb-2">;
                      <span className="font-semibold text-white>ROI: </span> {service && service.roi}
                    </div>;
                    <div className=text-gray-300">;
                      <span className="font-semibold text-white>Market Size: </span> {service && service.marketSize}
                  </div>;
                </div>;
<<<<<<< HEAD
=======
                {/* Action Buttons */}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    href={service && service.link}
                    className='flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105'>;
                    Get Started;
                  </Link>;
                  <button className='px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors'>;
                    <Eye className='w-5 h-5' />                  </button>;
                </div>;
<<<<<<< HEAD
                {/* Contact Info */}
                <div className='mt-6 pt-6 border-t border-white/10'>;
                  <div className='text-center text-sm text-gray-400'>                  <Link
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
=======


                {/* Contact Info */}
                <div className='mt-6 pt-6 border-t border-white/10'>;
                  <div className='text-center text-sm text-gray-400'>                  <Link

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    href={service.link}
                    className=flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105";
                  >;
                    Get Started;
                  </Link>;
                  <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors>;
                    <Eye className=w-5 h-5" />;
                  </button>;
                </div>;
<<<<<<< HEAD
                {/* Contact Info */}
                <div className=mt-6 pt-6 border-t border-white/10'>;
                  <div className='text-center text-sm text-gray-400>;
=======
<<<<<<< HEAD
                {/* Contact Info */}
          </motion && motion.div>;
          {/* No Results */}
          {sortedServices && sortedServices.length === 0 && (;
            <div className='text-center py-16'>;
              <div className='text-6xl mb-4'>🔍</div>;
              <h3 className='text-2xl font-bold text-white mb-2'>;
                No services found;
              </h3>;
              <p className='text-gray-400 mb-6'>;
                Try adjusting your search criteria or category filter;
              </p>;
              <button
                onClick={() => {;
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300'              >              <button
                onClick={() => {;
                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-center text-sm text-gray-400">
                <div className='mt-6 pt-6 border-t border-white/10'>
                  <div className='text-center text-sm text-gray-400'>
                    <p>Contact us for custom pricing and implementation</p>
                    <div className="flex items-center justify-center space-x-4 mt-2">
                      <a href={`tel:${contactInfo.mobile}`} className="flex items-center text-purple-400 hover:text-purple-300">
                        <Phone className="w-4 h-4 mr-1" />
                        {contactInfo.mobile}
                      </a>
                      <a href={`mailto:${contactInfo.email}`} className="flex items-center text-purple-400 hover:text-purple-300">
                        <Mail className="w-4 h-4 mr-1" />
                        {contactInfo.email}

                  </button>
                </div>

                {/* Contact Info */}

                        {contactInfo.email}

=======


                {/* Contact Info */}
<<<<<<< HEAD
                <div className='mt-6 pt-6 border-t border-white/10'>;
                  <div className='text-center text-sm text-gray-400'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <p>Contact us for custom pricing and implementation</p>;
                    <div className=flex items-center justify-center space-x-4 mt-2'>;{service.marketSize}
                    </div>;
                  </div>;
                </div>;
                {/* Action Buttons */}

=======
                  </div>
                </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {/* Service Details */}
<div className='grid grid-cols-2 gap-4 mb-6 text-sm'    />;
                  <div className='text-gray-400'    />;
                    <span className='block'    />Setup Time</span>;
                    <span className='text-white font-medium'    />;
                      {service.setupTime}
                    </span>;
                  </div>;
                  <div className='text-gray-400'    />;
                    <span className='block'    />Trial</span>;
                    <span className='text-white font-medium'    />;
                      {service.trialDays} days;
                    </span>;
                  </div>;
                  <div className='text-gray-400'    />;
                    <span className='block'    />Rating</span>;
                    <div className='flex items-center'    />;
                      <span className='text-white font-medium mr-1'    />;
                        {service.rating}

                      </span>
                      <Star className='w-4 h-4 text-yellow-400 fill-current'    />
                    </div>
                  </div>
                  <div className='text-gray-400'    />
                    <span className='block'    />Customers</span>
                    <span className='text-white font-medium'    />
                      {service.customers}+

                    </span>
                  </div>
                </div>
                {/* ROI and Market Info */}
<div className='mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20'    />
                  <div className='text-sm'    />
                    <div className='text-gray-300 mb-2'    />

                      <span className='font-semibold text-white'    />ROI: </span>{' '}
                      {service && service.ro,}
}
                    </div>;
                    <div className='text-gray-300'    />;
                      <span className='font-semibold text-white'    />;
                        Market Size:;

                      </span>{' '}

                      {service.marketSize}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
<div className='flex flex-col sm:flex-row gap-3'    />;
                  <Link;
                    href={service.link}
                    className='flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105'    />

                    Get Started;
                  </Link>;
                  <button className='px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors'    />;
                    <Eye className='w-5 h-5'    />;
                  </button>;
                </div>;
                {/* Contact Info */}

<div className='mt-6 pt-6 border-t border-white/10'    />
                  <div className='text-center text-sm text-gray-400'    />
                    <p    />Contact us for custom pricing and implementation</p>
                    <div className='flex items-center justify-center space-x-4 mt-2'    />
                      <a;
href={`tel: ${contactInfo && contactInfo.mobile},
}
                        className='flex items-center text-purple-400 hover:text-purple-300'    />;
                        <Phone className='w-4 h-4 mr-1'    />;
                        {contactInfo && contactInfo.mobile}
                      </a>;

                      <a;
href={`mailto: ${contactInfo.email}`}
                        className='flex items-center text-purple-400 hover:text-purple-300'
                          />
                        <Mail className='w-4 h-4 mr-1'    />
>>>>>>> origin/chore/fix-lint-and-merge
                        {contactInfo.email}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
{/* No Results */}
          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or category filter</p>
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {/* No Results *,}
}

          {sortedServices.length === 0 && (
<<<<<<< HEAD
<<<<<<< HEAD

=======
<div className='text-center py-16'    />
              <div className='text-6xl mb-4'    />🔍</div>
              <h3 className='text-2xl font-bold text-white mb-2'    />
                No services found;
              </h3>
              <p className='text-gray-400 mb-6'    />
                Try adjusting your search criteria or category filter;
              </p>
              <button;
onClick={() =    /> {}
                  setSearchTerm('');}
                }}

                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover: from-purple-600 hover:to-pink-600 transition-all duration-300'
                  setSelectedCategory('all')
                }}
                className=\"bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300\"
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======



<<<<<<< HEAD


          {/* No Results */}

          {sortedServices.length === 0 && (
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* No Results */}

          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or category filter</p>
              <button
                onClick={() => {

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  setSearchTerm('');

                  setSelectedCategory('all');

                }}


          )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        </div>;
      </section>;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD



            <div className='text-center py-16'>
              <div className='text-6xl mb-4'>🔍</div>
              <h3 className='text-2xl font-bold text-white mb-2'>
                No services found
              </h3>
              <p className='text-gray-400 mb-6'>
                Try adjusting your search criteria or category filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              >
                Clear Filters;
              </button>
            </div>
          )}
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20'>
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>          <motion.div      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
=======
=======
<div className='text-center py-16'    />
              <div className='text-6xl mb-4'    />🔍</div>
              <h3 className='text-2xl font-bold text-white mb-2'    />
                No services found;
              </h3>
              <p className='text-gray-400 mb-6'    />
                Try adjusting your search criteria or category filter;
              </p>
              <button;
onClick={() =    /> {}
                  setSearchTerm('');}
                }}

                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover: from-purple-600 hover:to-pink-600 transition-all duration-300'
                  setSelectedCategory('all')
                }}
                className=\"bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300\"
>>>>>>> origin/chore/fix-lint-and-merge
              >
                Clear Filters;
              </button>
            </div>

          )}
      {/* CTA Section *,}
}
<section className='py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20'    />;
        <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'    />;
          <motion.div;
            initial={{ opacity: 0, y: 30 ,}
}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true ,}
}

<<<<<<< HEAD

              >
                View Pricing
=======
              />

<h2 className='text-3xl md:text-5xl font-bold text-white mb-6'    />
              Ready to Experience the Future?
            </h2>
            <p className='text-xl text-gray-300 mb-8'    />
              Transform your business with our revolutionary futuristic;
services. Get in touch with our experts to discuss your specific;
needs and implementation strategy.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'    />
              <Link;
href='/contact'
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105'
                  />
                Contact Our Experts;
              </Link>
              <Link;
href='/pricing'
                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors'
                  />
                View Pricing;
>>>>>>> origin/chore/fix-lint-and-merge
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
<<<<<<< HEAD
          >;
          >
          >;
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20>;
        <div className=max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>          <motion && motion.div      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20>;
        <div className=max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6>;
              Ready to Experience the Future?;
            </h2>;
            <p className=text-xl text-gray-300 mb-8'>;
              Transform your business with our revolutionary futuristic;
              services. Get in touch with our experts to discuss your specific;
              needs and implementation strategy.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center>;
              <Link;
                href=/contact';
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105>;
                Contact Our Experts;
              </Link>;
<<<<<<< HEAD
              <Link;
                href=/pricing';
=======
              <Link
                href='/pricing'

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
              Ready to Experience the Future?
            </h2>
            <p className='text-xl text-gray-300 mb-8'>
              Transform your business with our revolutionary futuristic
              services. Get in touch with our experts to discuss your specific
              needs and implementation strategy.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105'              >
                Contact Our Experts
              </Link>
              <Link
                href='/pricing'
                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors'              >              Ready to Experience the Future?
=======
            <h2 className="text-3xl md: text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with our revolutionary futuristic services.
              Get in touch with our experts to discuss your specific needs and implementation strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors'>              Ready to Experience the Future?;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </h2>;
            <p className="text-xl text-gray-300 mb-8>;
              Transform your business with our revolutionary futuristic services.;
              Get in touch with our experts to discuss your specific needs and implementation strategy.;
            </p>;
            <div className=flex flex-col sm:flex-row gap-4 justify-center">;
                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors>              Ready to Experience the Future?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8>;
              Transform your business with our revolutionary futuristic services. ;
              Get in touch with our experts to discuss your specific needs and implementation strategy.;
            </p>;
<<<<<<< HEAD
            <div className=flex flex-col sm:flex-row gap-4 justify-center">;
  )}
}
  )}
                      <div className=text - sm text - purple - 400 mt - 2'>                      <div className="text - sm text - purple - 400 mt - 2>;
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
<<<<<<< HEAD


              <Link
                href="/contact"
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Experts
              </Link>
              <Link
                href='/pricing'
                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors'                href="/pricing"
                className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>


}
);
  );
}
}
  );
}
=======


              <Link
                href="/contact"


}
  );
}
                      <div className='text - sm text - purple - 400 mt - 2'>                      <div className="text - sm text - purple - 400 mt - 2">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        +{service.features.length - 4} more features;
                      </div>)}
                  </div>;
                </div>;
                {/* Service Details */}
                <div className='grid grid - cols - 2 gap - 4 mb - 6 text - sm>;
                  <div className=text - gray - 400'>;
                    <span className='block>Setup Time</span>;
                    <span className=text - white font - medium'>;
                      {service.setup_time}
                    </span>;
                  </div>;
                  <div className='text - gray - 400>;
                    <span className=block'>Trial</span>;
                    <span className='text - white font - medium>;
                      {service.trial_days} days;
                    </span>;
                  </div>;
                  <div className=text - gray - 400'>;
                    <span className='block>Rating</span>;
                    <div className=flex items - center'>;
                      <span className='text - white font - medium mr - 1>;
                        {service.rating}
                      </span>;
                      <Star className=w - 4 h - 4 text - yellow - 400 fill - current' />;
                    </div>;
                  </div>;
                  <div className='text - gray - 400>;
                    <span className=block'>Customers</span>;
                    <span className='text - white font - medium>;
                      {service.customers}+;
                    </span>                  </div>;
                </div>;
                {/* ROI and Market Info */}                  </div>;
                  <div className=text - gray - 400">;
                    <span className="block>Trial</span>;
                    <span className=text - white font - medium">{service.trial_days} days</span>;
                  </div>;
                  <div className="text - gray - 400>;
                    <span className=block">Rating</span>;
                    <div className="flex items - center>;
                      <span className=text - white font - medium mr - 1">{service.rating}</span>;
                      <Star className="w - 4 h - 4 text - yellow - 400 fill - current />;
                    </div>;
                  </div>;
                  <div className=text - gray - 400">;
                    <span className="block>Customers</span>;
                    <span className=text - white font - medium">{service.customers}+</span>;
                  </div>;
                </div>;
                {/* ROI and Market Info */}
                <div className=mb - 6 p - 4 bg - gradient - to - r from - purple - 500 / 10 to - pink - 500 / 10 rounded - lg border border - purple - 500 / 20'>;
                  <div className='text - sm>;
                    <div className=text - gray - 300 mb - 2'>;
                      <span className='font - semibold text - white>ROI:</span>{ '}
                      {service.roi}
                    </div>;
                    <div className='text - gray - 300>;
                      <span className=font - semibold text - white'>;
                        Market Size:;
                      </span>{' }
                      {service.market_size}                    </div>                <div className="mb - 6 p - 4 bg - gradient - to - r from - purple - 500 / 10 to - pink - 500 / 10 rounded - lg border border - purple - 500 / 20>;
                  <div className=text - sm">;
                    <div className="text - gray - 300 mb - 2>;
                      <span className=font - semibold text - white">ROI: </span> {service.roi}
                    </div>;
                    <div className="text - gray - 300>;
                      <span className=font - semibold text - white">Market Size: </span> {service.market_size}
                  </div>;
                </div>;
                {/* Action Buttons */}
                <div className=flex flex - col sm:flex - row gap - 3'>;
                  <Link;
                    href={service.link}
                    className='flex - 1 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 3 px - 6 rounded - lg text - center hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 300 transform hover:scale - 105;
                  >;
                    Get Started;
                  </Link>;
                  <button className=px - 4 py - 3 border border - white / 20 text - white rounded - lg hover:border - purple - 500 / 50 transition - colors'>;
                    <Eye className='w - 5 h - 5 />                  </button>;
                </div>;
                {/* Contact Info */}
                <div className=mt - 6 pt - 6 border - t border - white / 10'>;
                  <div className='text - center text - sm text - gray - 400>                  <Link;
                    href={service.link}
                    className="flex - 1 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 3 px - 6 rounded - lg text - center hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 300 transform hover:scale - 105;
                  >;
                    Get Started;
                  </Link>;
                  <button className=px - 4 py - 3 border border - white / 20 text - white rounded - lg hover:border - purple - 500 / 50 transition - colors">;
                    <Eye className="w - 5 h - 5 />;
                  </button>;
                </div>;
                {/* Contact Info */}
                <div className=mt - 6 pt - 6 border - t border - white / 10'>;
                  <div className='text - center text - sm text - gray - 400>;
                    <p > Contact us for custom pricing and implementation</p>;
                    <div className=flex items - center justify - center space - x-4 mt - 2'>;
                      <a;
                        href={`tel:${contact_info.mobile}`}
                        className='flex items - center text - purple - 400 hover:text - purple - 300;
                      >;
                        <Phone className=w - 4 h - 4 mr - 1' />;
                        {contact_info.mobile}
                      </a>;
                      <a;
                        href={`mailto:${contact_info.email}`}
                        className='flex items - center text - purple - 400 hover:text - purple - 300;
                      >;
                        <Mail className=w - 4 h - 4 mr - 1' />                        {contact_info.email}                    <p > Contact us for custom pricing and implementation</p>;
                    <div className=flex items - center justify - center space - x-4 mt - 2">;
                      <a href={`tel:${contact_info.mobile}`} className="flex items - center text - purple - 400 hover:text - purple - 300>;
                        <Phone className=w - 4 h - 4 mr - 1" />;
                        {contact_info.mobile}
                      </a>;
                      <a href={`mailto:${contact_info.email}`} className="flex items - center text - purple - 400 hover:text - purple - 300>;
                        <Mail className=w - 4 h - 4 mr - 1" />;
                        {contact_info.email}
                      </a>;
                    </div>;
                  </div>;
                </div>;
              </motion.div>))}
          </motion.div>;
          {/* No Results */}
          {sorted_services.length === 0 && (<div className='text - center py - 16>;
              <div className=text - 6xl mb - 4'>🔍</div>;
              <h3 className='text - 2xl font - bold text - white mb - 2>;
                No services found;
              </h3>;
              <p className=text - gray - 400 mb - 6'>;
                Try adjusting your search criteria or category filter;
              </p>;
              <button;
                on_click={() => {setSearchTerm (')setSelectedCategory (all')}}
                className='bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 3 px - 6 rounded - lg hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 300              >              <button;
                on_click={() => {setSearchTerm (')setSelectedCategory ('all)}}
                className="bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 3 px - 6 rounded - lg hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 300;
              >;
                Clear Filters;
              </button>;
            </div>)}
        </div>;
      </section>;
      {/* CTA Section */}
      <section className=py - 20 bg - gradient - to - r from - purple - 900 / 20 via - black to - pink - 900 / 20'>;
        <div className='max - w-4xl mx - auto text - center px - 4 sm:px - 6 lg:px - 8>          <motion.div      <section className=py - 20 bg - gradient - to - r from - purple - 900 / 20 via - black to - pink - 900 / 20">;
        <div className="max - w-4xl mx - auto text - center px - 4 sm:px - 6 lg:px - 8>;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className=text - 3xl md:text - 5xl font - bold text - white mb - 6'>;
              Ready to Experience the Future?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8>;
              Transform your business with our revolutionary futuristic;
              services. Get in touch with our experts to discuss your specific;
              needs and implementation strategy.;
            </p>;
            <div className=flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Link;
                href='/contact;
                className=bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 4 px - 8 rounded - lg text - lg hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 300 transform hover:scale - 105'              >;
                Contact Our Experts;
              </Link>;
              <Link;
                href='/pricing;
                className=border border - white / 20 text - white font - semibold py - 4 px - 8 rounded - lg text - lg hover:border - purple - 500 / 50 transition - colors'              >              Ready to Experience the Future?;
            </h2>;
            <p className=text - xl text - gray - 300 mb - 8">;
              Transform your business with our revolutionary futuristic services.;
              Get in touch with our experts to discuss your specific needs and implementation strategy.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center>;
              <Link;
                href=/contact";
                className="bg - gradient - to - r from - purple - 500 to - pink - 500 text - white font - semibold py - 4 px - 8 rounded - lg text - lg hover:from - purple - 600 hover:to - pink - 600 transition - all duration - 300 transform hover:scale - 105;
              >;
                Contact Our Experts;
              </Link>;
              <Link;
                href='/pricing;
                className=border border - white / 20 text - white font - semibold py - 4 px - 8 rounded - lg text - lg hover:border - purple - 500 / 50 transition - colors'                href=/pricing";
                className="border border - white / 20 text - white font - semibold py - 4 px - 8 rounded - lg text - lg hover:border - purple - 500 / 50 transition - colors";
              >;
                View Pricing;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </Layout>)}<h2 className='text-3xl md:text-5xl font-bold text-white mb-6>;
              Ready to Experience the Future?;
            </h2>;
            <p className=text-xl text-gray-300 mb-8'>;
              Transform your business with our revolutionary futuristic;
              services. Get in touch with our experts to discuss your specific;
              needs and implementation strategy.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center>;
              <Link;
                href=/contact';
                className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105;
              >;
                Contact Our Experts;
              </Link>;
              <Link;
href=/pricing';
                className='border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors';
              >;
                View Pricing;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </Layout>;
    </Layout>);
}
<<<<<<< HEAD
  )}
  )
}
=======
  );
}

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
