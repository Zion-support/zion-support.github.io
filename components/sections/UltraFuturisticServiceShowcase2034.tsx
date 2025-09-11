<<<<<<< HEAD
<<<<<<< HEAD
import { 
  Star, CheckCircle, ArrowRight, TrendingUp, Users, 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from 'react';
import { motion } from 'framer-motion';


<<<<<<< HEAD
<<<<<<< HEAD
import {
  Star
  CheckCircle
  ArrowRight
  TrendingUp
  Users
  Award
  Clock
  Zap
  Shield
  Brain
  Atom
  Rocket
  ShoppingCart
  Cpu
  Globe
  Lock
  Video
  Palette
  BarChart
  UserCheck
  FileText
  Heart
  Eye
  Search
  Phone;
} from 'lucide-react';
import { realMarketServices } from '../../data/2024-real-market-services';
import { aiEmergingTechServices } from '../../data/2024-ai-emerging-tech-services';import {
  Star, CheckCircle, ArrowRight, TrendingUp, Users

  Star,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Clock,
  Zap,
  Shield,
  Brain,
  Atom,
  Rocket,
  ShoppingCart,
  Cpu,
  Globe,
  Lock,
  Video,
  Palette,
  BarChart,
  UserCheck,
  FileText,
  Heart,
  Eye,
  Search,;
  Phone,;
} from 'lucide-react';
import { realMarketServices } from '../../data/2024-real-market-services';
import { aiEmergingTechServices } from '../../data/2024-ai-emerging-tech-services';import {
  Star, CheckCircle, ArrowRight, TrendingUp, Users, ;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Award, Clock, Zap, Shield, Brain, Atom, Rocket;
  ShoppingCart, Cpu, Globe, Lock, Video, Palette;
  BarChart, UserCheck, FileText, Heart, Eye, Search, Phone
 } from 'lucide-react';
import { realMarketServices  } from '../../data/2024-real-market-services';
import { aiEmergingTechServices } from '../../data/2024-ai-emerging-tech-services';
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1
}
}
> <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6" > Revolutionary Technology Services </h2> <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" > Discover our comprehensive suite of cutting-edge AI, quantum computing, and emerging technology solutions. Each service is designed to transform your business and propel you into the future. </p> </motion.div>) )
}</div> </motion.div> {
  /* Search and Filter */
}<motion.div /> <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> </div> {
  /* Category Filter */
}<select </option>) )
}</select> </div> </motion.div> {
  /* Service Categories */
}<motion.div key= {
  category.id
}initial= {  {}
const serviceCategories = [
  {
    id: 'ai-services'
    title: '🧠 Revolutionary AI Services'
    description: 'Next-generation AI consciousness and creativity'
    icon: Brain
    color: 'from-violet-500 to-purple-500'
    services: aiEmergingTechServices.filter(s => s.category.includes('AI'))
    gradient: 'from-violet-500/20 to-indigo-500/20'
  },  {    gradient: 'from-violet-500/20 to-indigo-500/20'
  }
  {
    id: 'quantum-tech'
    title: '⚛️ Quantum & Emerging Tech'
    description: 'Quantum computing and beyond'
    icon: Atom
    color: 'from-indigo-500 to-blue-500'
    services: aiEmergingTechServices.filter(
      s => s.category.includes('Quantum') |s.category.includes('Blockchain')
    )
    gradient: 'from-indigo-500/20 to-cyan-500/20'
  },  {    services: aiEmergingTechServices.filter(s => s.category.includes('Quantum') |s.category.includes('Blockchain'))
    gradient: 'from-indigo-500/20 to-cyan-500/20'
  }
  {
    id: 'enterprise-it'
    title: '🏙️ Enterprise IT Solutions'
    description: 'Autonomous operations and zero-trust security'
    icon: Cpu
    color: 'from-blue-500 to-cyan-500'
    services: realMarketServices.filter(
      s =>
        s.category.includes('Security') |
        s.category.includes('HR') |
        s.category.includes('Project')
    )
    gradient: 'from-blue-500/20 to-teal-500/20'
  },  {    services: realMarketServices.filter(s => s.category.includes('Security') |s.category.includes('HR') |s.category.includes('Project'))
    gradient: 'from-blue-500/20 to-teal-500/20'
  }
  {
    id: 'business-automation'
    title: '🛒 Business Automation'
    description: 'Streamline business operations'
    icon: ShoppingCart
    color: 'from-teal-500 to-emerald-500'
    services: realMarketServices.filter(
      s =>
        s.category.includes('E-commerce') |
        s.category.includes('Marketing') |
        s.category.includes('Finance')
    )
    gradient: 'from-teal-500/20 to-green-500/20'
  },  {    services: realMarketServices.filter(s => s.category.includes('E-commerce') |s.category.includes('Marketing') |s.category.includes('Finance'))
    gradient: 'from-teal-500/20 to-green-500/20'
  }
  {
    id: 'robotics-automation'
    title: '🤖 Robotics & Automation'
    description: 'Intelligent automation solutions'
    icon: Rocket
    color: 'from-green-500 to-yellow-500'
    services: aiEmergingTechServices.filter(
      s => s.category.includes('Robotics') |s.category.includes('Edge')
    )
    gradient: 'from-green-500/20 to-orange-500/20'
  },  {    services: aiEmergingTechServices.filter(s => s.category.includes('Robotics') |s.category.includes('Edge'))
    gradient: 'from-green-500/20 to-orange-500/20'
  }
  {
    id: 'research-development'
    title: '🔬 Research & Development'
    description: 'Breakthrough technologies and innovations'
    icon: Globe
    color: 'from-orange-500 to-red-500'
    services: aiEmergingTechServices.filter(
      s => s.category.includes('Drug') |s.category.includes('Climate')
    )
    gradient: 'from-orange-500/20 to-pink-500/20'
  },];    services: aiEmergingTechServices.filter(s => s.category.includes('Drug') |s.category.includes('Climate'))
    gradient: 'from-orange-500/20 to-pink-500/20'
  }
];
<<<<<<< HEAD
<<<<<<< HEAD
export default function UltraFuturisticServiceShowcase2034() {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export default function UltraFuturisticServiceShowcase2034() {;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const allServices = [...realMarketServices, ...aiEmergingTechServices];
    const matchesCategory =
      selectedCategory === 'all' |
      serviceCategories.some(cat => cat.services.includes(service));
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;  });    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    },  }
  const itemVariants = {

<<<<<<< HEAD
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
=======
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  Star,;
  CheckCircle,;
  ArrowRight,;
  TrendingUp,;
  Users,;
  Award,;
  Clock,;
  Zap,;
  Shield,;
  Brain,;
  Atom,;
  Rocket,;
  ShoppingCart,;
  Cpu,;
  Globe,;
  Lock,;
  Video,;
  Palette,;
  BarChart,;
  UserCheck,;
  FileText,;
  Heart,;
  Eye,;
  Search,;
  Phone,;
} from 'lucide-react';
import { realMarketServices } from '../../data/2024-real-market-services';
import { aiEmergingTechServices } from '../../data/2024-ai-emerging-tech-services';import { ;
  Star, CheckCircle, ArrowRight, TrendingUp, Users, ;
  Award, Clock, Zap, Shield, Brain, Atom, Rocket;
  ShoppingCart, Cpu, Globe, Lock, Video, Palette;
  BarChart, UserCheck, FileText, Heart, Eye, Search, Phone;
} from 'lucide-react';
import { realMarketServices } from '../../data/2024-real-market-services';
import { aiEmergingTechServices } from '../../data/2024-ai-emerging-tech-services';



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const serviceCategories = [
  Star,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Clock,
  Zap,
  Shield,
  Brain,
  Atom,
  Rocket,
  ShoppingCart,
  Cpu,
  Globe,
  Lock,
  Video,
  Palette,
  BarChart,
  UserCheck,
  FileText,
  Heart,
  Eye,
  Search,
  Phone,
} from 'lucide-react';
import { realMarketServices } from '../../data / 2024 - real - market - services';
import { aiEmergingTechServices } from '../../data / 2024 - ai - emerging - tech - services';import {
  Star, CheckCircle, ArrowRight, TrendingUp, Users,
  Award, Clock, Zap, Shield, Brain, Atom, Rocket;
  ShoppingCart, Cpu, Globe, Lock, Video, Palette;
  BarChart, UserCheck, FileText, Heart, Eye, Search, Phone;
} from 'lucide-react';
import { realMarketServices } from '../../data / 2024 - real - market - services';
import { aiEmergingTechServices } from '../../data / 2024 - ai - emerging - tech - services';
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
}
visible: {
  opacity: 1, transition: {
  stagger_children: 0.1;
}
;
}
> <h2 className="text - 4xl md:text - 5xl lg:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 400 to - purple - 400 bg - clip - text text - transparent mb - 6" > Revolutionary Technology Services </h2> <p className="text - xl text - gray - 300 max - w-4xl mx - auto leading - relaxed" > Discover our comprehensive suite of cutting - edge AI, quantum computing, and emerging technology solutions. Each service is designed to transform your business and propel you into the future. </p> </motion.div>) );
}</div> </motion.div> {
  /* Search and Filter */;
}<motion.div /> <Search className="absolute right - 3 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - gray - 400" /> </div> {
  /* Category Filter */;
}<select </option>) );
}</select> </div> </motion.div> {
  /* Service Categories */;
}<motion.div key= {
  category.id;
}initial= {  {}
;
const service_categories = [;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
    id: 'ai - services',
    title: '🧠 Revolutionary AI Services',
    description: 'Next - generation AI consciousness and creativity',
    icon: Brain,
<<<<<<< HEAD
<<<<<<< HEAD
    services: aiEmergingTechServices.filter(s => s.category.includes('AI')),
    gradient: 'from-violet-500/20 to-indigo-500/20'
  };
    color: 'from - violet - 500 to - purple - 500',
    services: aiEmergingTechServices.filter (string => s.category.includes ('AI')),
    gradient: 'from - violet - 500 / 20 to - indigo - 500 / 20',
  },  {    gradient: 'from - violet - 500 / 20 to - indigo - 500 / 20';
  }
  {
    id: 'quantum - tech',
    title: '⚛️ Quantum & Emerging Tech',
    description: 'Quantum computing and beyond',
    icon: Atom,
    color: 'from - indigo - 500 to - blue - 500',
    services: aiEmergingTechServices.filter (
      string => s.category.includes ('Quantum') || s.category.includes ('Blockchain')),
    gradient: 'from - indigo - 500 / 20 to - cyan - 500 / 20',
  },  {    services: aiEmergingTechServices.filter (string => s.category.includes ('Quantum') || s.category.includes ('Blockchain')),
    gradient: 'from - indigo - 500 / 20 to - cyan - 500 / 20';
  }
  {
    id: 'enterprise - it',
    title: '🏙️ Enterprise IT Solutions',
    description: 'Autonomous operations and zero - trust security',
    icon: Cpu,
    color: 'from - blue - 500 to - cyan - 500',
    services: realMarketServices.filter (
      string =>;
        s.category.includes ('Security') ||;
        s.category.includes ('HR') ||;
        s.category.includes ('Project')),
    gradient: 'from - blue - 500 / 20 to - teal - 500 / 20',
  },  {    services: realMarketServices.filter (string => s.category.includes ('Security') || s.category.includes ('HR') || s.category.includes ('Project')),
    gradient: 'from - blue - 500 / 20 to - teal - 500 / 20';
  }
  {
    id: 'business - automation',
    title: '🛒 Business Automation',
    description: 'Streamline business operations',
    icon: ShoppingCart,
    color: 'from - teal - 500 to - emerald - 500',
    services: realMarketServices.filter (
      string =>;
        s.category.includes ('E - commerce') ||;
        s.category.includes ('Marketing') ||;
        s.category.includes ('Finance')),
    gradient: 'from - teal - 500 / 20 to - green - 500 / 20',
  },  {    services: realMarketServices.filter (string => s.category.includes ('E - commerce') || s.category.includes ('Marketing') || s.category.includes ('Finance')),
    gradient: 'from - teal - 500 / 20 to - green - 500 / 20';
  }
  {
    id: 'robotics - automation',
    title: '🤖 Robotics & Automation',
    description: 'Intelligent automation solutions',
    icon: Rocket,
    color: 'from - green - 500 to - yellow - 500',
    services: aiEmergingTechServices.filter (
      string => s.category.includes ('Robotics') || s.category.includes ('Edge')),
    gradient: 'from - green - 500 / 20 to - orange - 500 / 20',
  },  {    services: aiEmergingTechServices.filter (string => s.category.includes ('Robotics') || s.category.includes ('Edge')),
    gradient: 'from - green - 500 / 20 to - orange - 500 / 20';
  }
  {
    id: 'research - development',
    title: '🔬 Research & Development',
    description: 'Breakthrough technologies and innovations',
    icon: Globe,
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 

export default function UltraFuturisticServiceShowcase2034() {;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const allServices = [...realMarketServices, ...aiEmergingTechServices];
    const matchesCategory =
      selectedCategory === 'all' |
      serviceCategories.some(cat => cat.services.includes(service));
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch
  });
  const containerVariants = {
    hidden: { opacity: 0 }
    color: 'from - orange - 500 to - red - 500',
    services: aiEmergingTechServices.filter (
      string => s.category.includes ('Drug') || s.category.includes ('Climate')),
    gradient: 'from - orange - 500 / 20 to - pink - 500 / 20',
  }, ];    services: aiEmergingTechServices.filter (string => s.category.includes ('Drug') || s.category.includes ('Climate')),
    gradient: 'from - orange - 500 / 20 to - pink - 500 / 20';
  }
];
;
export default /**
 * UltraFuturisticServiceShowcase2034 - Function description
 */
function UltraFuturisticServiceShowcase2034() {
  const [selected_category, setSelectedCategory] = useState ('all');
  const [search_term, setSearchTerm] = useState ('');
;
  const all_services = [...realMarketServices, ...aiEmergingTechServices];
;
    const matches_category =;
      selected_category === 'all' ||;
      service_categories.some (cat => cat.services.includes (service));
    const matches_search =;
      service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.category.toLowerCase ().includes (search_term.toLowerCase ());
    return matches_category && matches_search;  });    const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.category.toLowerCase ().includes (search_term.toLowerCase ());
    return matches_category && matches_search;
  const container_variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
      transition: {
=======


    visible: {
      opacity: 1
      transition: {



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const matchesCategory =;
      selectedCategory === 'all' ||;
      serviceCategories && serviceCategories.some(cat => cat && cat.services.includes(service));
    const matchesSearch =;
      service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;  });    const matchesSearch = service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };
  const itemVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: { opacity: 1, y: 0 },        staggerChildren: 0 && 0.1;
      }
    }
  };
=======


  };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const itemVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: { opacity: 1, y: 0 },;
  };
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <section className='py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden'>;
      {/* Animated Background */}

<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <section className='py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden'>;
      {/* Animated Background */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='absolute inset-0 overflow-hidden'>;
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse'></div>;
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000'></div>;
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500'></div>;
      </div>;
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
    hidden: { opacity: 0, y: 20 },

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
=======
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };
        {/* Header */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    hidden: { opacity: 0, y: 20 },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">;
      {/* Animated Background */}

<<<<<<< HEAD
<<<<<<< HEAD
  const itemVariants = {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="absolute inset-0 overflow-hidden">;
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>;
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>;
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>;
      </div>;
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Header */}
        <motion&& motion.div
=======
        {/* Header */}
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },

  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },

        {/* Header */}

        <motion.div
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6 }}
          viewport={{ once: true }}
<<<<<<< HEAD

=======
          className='text-center mb-16'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        >
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6'>
            Revolutionary Technology Services
          </h2>
          <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Discover our comprehensive suite of cutting-edge AI, quantum
            computing, and emerging technology solutions. Each service is
            designed to transform your business and propel you into the future.
          </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        stagger_children: 0.1,
      },
    },  }
;
  const item_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: { opacity: 1, coordinate_y: 0 },        stagger_children: 0.1;
<<<<<<< HEAD
    hidden: { opacity: 0, y: 20 }
    visible: { opacity: 1, y: 0 },        staggerChildren: 0.1
      }
    }
  }
;
  const item_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: { opacity: 1, coordinate_y: 0 },
  }
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },        staggerChildren: 0.1
      }
    }
=======
=======
=======
    hidden: { opacity: 0, y: 20 },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    visible: { opacity: 1, y: 0 },

  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

<<<<<<< HEAD
  return (
    <section className='py - 20 bg - gradient - to - br from - black via - gray - 900 to - black relative overflow - hidden'>;
      {/* Animated Background */}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>
<<<<<<< HEAD
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  }
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };
=======
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}  };
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Header */}

  return (
    <section className="py - 20 bg - gradient - to - br from - black via - gray - 900 to - black relative overflow - hidden">;
      {/* Animated Background */}
      <div className="absolute inset - 0 overflow - hidden">;
        <div className="absolute -top - 40 -right - 40 w - 80 h - 80 bg - gradient - to - br from - cyan - 500 / 20 to - blue - 500 / 20 rounded - full blur - 3xl animate - pulse"></div>;
        <div className="absolute -bottom - 40 -left - 40 w - 80 h - 80 bg - gradient - to - tr from - purple - 500 / 20 to - pink - 500 / 20 rounded - full blur - 3xl animate - pulse delay - 1000"></div>;
        <div className="absolute top - 1/2 left - 1/2 transform -translate - x-1 / 2 -translate - y-1 / 2 w - 96 h - 96 bg - gradient - to - r from - green - 500 / 10 to - teal - 500 / 10 rounded - full blur - 3xl animate - pulse delay - 500"></div>;
      </div>;
      <div className="relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
        {/* Header */}
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },

  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'

        >
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6'>
            Revolutionary Technology Services
          </h2>
          <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Discover our comprehensive suite of cutting-edge AI, quantum
            computing, and emerging technology solutions. Each service is
            designed to transform your business and propel you into the future.
          </p>
          {/* Stats */}
          <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 6 mt - 12'>;
            {[;
              {
<<<<<<< HEAD

          className="text-center mb-16"
        >

<<<<<<< HEAD
          className="text-center mb-16"
        >
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                label: 'Total Services'
                value: allServices.length.toString()
                icon: Rocket
              }
              { label: 'Happy Customers', value: '50K+', icon: Users }
              { label: 'Success Rate', value: '99.9%', icon: CheckCircle }
              { label: 'Global Reach', value: '45+ Countries', icon: Globe },            ].map((stat, index) => (        >
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Revolutionary Technology Services
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge AI, quantum computing, and emerging technology solutions.
            Each service is designed to transform your business and propel you into the future.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className='text-center mb-16'>;
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6'>;
            Revolutionary Technology Services;
          </h2>;
          <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>;
            Discover our comprehensive suite of cutting-edge AI, quantum;
            computing, and emerging technology solutions. Each service is;
            designed to transform your business and propel you into the future.;
          </p>;
          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12'>;
            {[;
              {;
                label: 'Total Services',;
                value: allServices && allServices.length.toString(),;
                icon: Rocket,;
              },;
              { label: 'Happy Customers', value: '50K+', icon: Users },;
              { label: 'Success Rate', value: '99 && 99.9%', icon: CheckCircle },;
              { label: 'Global Reach', value: '45+ Countries', icon: Globe },            ].map((stat, index) => (        >;
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">;
            Revolutionary Technology Services;
          </h2>;
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
            Discover our comprehensive suite of cutting-edge AI, quantum computing, and emerging technology solutions. ;
            Each service is designed to transform your business and propel you into the future.;
          </p>;
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">;
            {[;
              { label: 'Total Services', value: allServices && allServices.length.toString(), icon: Rocket },;
              { label: 'Happy Customers', value: '50K+', icon: Users },;
              { label: 'Success Rate', value: '99 && 99.9%', icon: CheckCircle },;
              { label: 'Global Reach', value: '45+ Countries', icon: Globe }
<<<<<<< HEAD
            ].map((stat, index) => (;
              <motion&& motion.div
                key={stat && stat.label}
                initial={{ opacity: 0, scale: 0 && 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className='text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300'>;
                <stat && stat.icon className='w-8 h-8 text-cyan-400 mx-auto mb-2' />;
                <div className='text-2xl font-bold text-white'>;
                  {stat && stat.value}
                </div>;
                <div className='text-sm text-gray-400'>{stat && stat.label}</div>              </motion && motion.div>                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300";
              >;
                <stat && stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />;
                <div className="text-2xl font-bold text-white">{stat && stat.value}</div>;
                <div className="text-sm text-gray-400">{stat && stat.label}</div>;
<<<<<<< HEAD
              { label: 'Total Services', value: allServices.length.toString(), icon: Rocket },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


              { label: 'Total Services', value: allServices.length.toString(), icon: Rocket },
<<<<<<< HEAD
=======
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                label: 'Total Services',
                value: all_services.length.to_string (),
                icon: Rocket,
              },
              { label: 'Happy Customers', value: '50K+', icon: Users },
              { label: 'Success Rate', value: '99.9%', icon: CheckCircle },
<<<<<<< HEAD
<<<<<<< HEAD
              { label: 'Global Reach', value: '45+ Countries', icon: Globe },            ].map ((stat, index) => (        >;
          <h2 className="text - 4xl md:text - 5xl lg:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 400 to - purple - 400 bg - clip - text text - transparent mb - 6">;
            Revolutionary Technology Services;
          </h2>;
          <p className="text - xl text - gray - 300 max - w-4xl mx - auto leading - relaxed">;
            Discover our comprehensive suite of cutting - edge AI, quantum computing, and emerging technology solutions.;
            Each service is designed to transform your business and propel you into the future.;
          </p>;
          {/* Stats */}
          <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 6 mt - 12">;
            {[;
              { label: 'Total Services', value: all_services.length.to_string (), icon: Rocket },
              { label: 'Happy Customers', value: '50K+', icon: Users },
              { label: 'Success Rate', value: '99.9%', icon: CheckCircle },
              { label: 'Global Reach', value: '45+ Countries', icon: Globe }
            ].map ((stat, index) => (
              <motion.div;

              { label: 'Global Reach', value: '45+ Countries', icon: Globe }
                label: 'Total Services',
                value: allServices.length.toString(),
                icon: Rocket,
              },
              { label: 'Happy Customers', value: '50K+', icon: Users },
              { label: 'Success Rate', value: '99.9%', icon: CheckCircle },
              { label: 'Global Reach', value: '45+ Countries', icon: Globe },            ].map((stat, index) => (

              { label: 'Global Reach', value: '45+ Countries', icon: Globe },            ].map((stat, index) => (        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Revolutionary Technology Services
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge AI, quantum computing, and emerging technology solutions. 
            Each service is designed to transform your business and propel you into the future.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { label: 'Total Services', value: allServices.length.toString(), icon: Rocket },
              { label: 'Happy Customers', value: '50K+', icon: Users },
              { label: 'Success Rate', value: '99.9%', icon: CheckCircle },
              { label: 'Global Reach', value: '45+ Countries', icon: Globe }
              { label: 'Global Reach', value: '45+ Countries', icon: Globe },            ].map((stat, index) => (
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              { label: 'Global Reach', value: '45+ Countries', icon: Globe },            ].map((stat, index) => (

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            ].map((stat, index) => (
              <motion.div

                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300'
              >
                <stat.icon className='w-8 h-8 text-cyan-400 mx-auto mb-2' />
                <div className='text-2xl font-bold text-white'>
                  {stat.value}
                </div>
<<<<<<< HEAD

                <div className='text-sm text-gray-400'>{stat.label}</div>              </motion.div>


              </motion.div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            ))}

          </div>;
        </motion && motion.div>;


<<<<<<< HEAD


        {/* Search and Filter */}
        <motion&& motion.div
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className='text-sm text-gray-400'>{stat.label}</div>              </motion.div>                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
            ))}
          </div>
        </motion.div>
                <div className='text-sm text-gray-400'>{stat.label}</div>              </motion.div>

<<<<<<< HEAD
              </motion.div>

            ))}
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
=======
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Search and Filter */}
        <motion&& motion.div
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            ))}

          </div>;
        </motion && motion.div>;


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Search and Filter */}
        <motion&& motion.div
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
          viewport={{ once: true }}
<<<<<<< HEAD

<<<<<<< HEAD

        >
          <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
          className="mb-12"
        >
          className='mb-12'

        >
          <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
=======
          className='mb-12'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

        >
          <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Search */}
            <div className='relative flex-1 max-w-md'>
              <input
                type='text'
                placeholder='Search services...'
                value={searchTerm}
<<<<<<< HEAD

          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
              />
              <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />            </div>        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Search */}
            <div className="relative flex-1 max-w-md">;
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
              />

              <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />            </div>

            </div>


<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Category Filter */}
            <select
              value={selectedCategory}


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
              <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />            </div>

            </div>

<<<<<<< HEAD
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
                <option key={category.id} value={category.id}>
                  {category.title.split(' ')[0]}
                </option>
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Category Filter */}
            <select
              value={selectedCategory}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              ))}
            </select>
          </div>
        </motion.div>
<<<<<<< HEAD
=======
              ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            </select>;
          </div>;
        </motion && motion.div>;


<<<<<<< HEAD



        {/* Service Categories */}
        <motion&& motion.div
<<<<<<< HEAD

        {/* Service Categories */}
        <motion.div
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Service Categories */}
        <motion&& motion.div
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6, delay: 0 && 0.4 }}
          viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='mb-16'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>            {serviceCategories.map((category, index) => (          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
<<<<<<< HEAD
<<<<<<< HEAD
                  selectedCategory === category.id 
                    ? 'border-cyan-500 bg-cyan-500/10' 
                    : 'border-white/20 bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/5'
                }`}
                onClick={() => setSelectedCategory(category.id === selectedCategory ? 'all' : category.id)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-300">
                  {category.services.length} services available
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
=======


            ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


            ))}
          </div>
        </motion.div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </div>;
        </motion && motion.div>;


<<<<<<< HEAD
<<<<<<< HEAD



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Services Grid */}
        <motion&& motion.div
          variants={containerVariants}


<<<<<<< HEAD
<<<<<<< HEAD
        {/* Services Grid */}
        <motion&& motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}


                </div>
              )}
              {/* Service Icon */}

              className='group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 hover:scale-105'
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className='absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold'>                  Popular              className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 hover:scale-105"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                </div>
              )}
                <div className='absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold'>                  Popular

                  Popular

                </div>
              )}

              {/* Service Icon */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              )}
              {/* Service Icon */}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='text - center p - 4 rounded - xl bg - white / 5 backdrop - blur - sm border border - white / 10 hover:bg - white / 10 transition - all duration - 300';
              >;
                <stat.icon className='w - 8 h - 8 text - cyan - 400 mx - auto mb - 2' />;
                <div className='text - 2xl font - bold text - white'>;
                  {stat.value}
                </div>;
                <div className='text - sm text - gray - 400'>{stat.label}</div>              </motion.div>                className="text - center p - 4 rounded - xl bg - white / 5 backdrop - blur - sm border border - white / 10 hover:bg - white / 10 transition - all duration - 300";
              >;
                <stat.icon className="w - 8 h - 8 text - cyan - 400 mx - auto mb - 2" />;
                <div className="text - 2xl font - bold text - white">{stat.value}</div>;
                <div className="text - sm text - gray - 400">{stat.label}</div>))}
          </div>;
        </motion.div>;
        {/* Search and Filter */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='mb - 12';
        >;
          <div className='flex flex - col md:flex - row gap - 4 items - center justify - center'>;
            {/* Search */}
            <div className='relative flex - 1 max - w-md'>;
              <input;
                type='text';
                placeholder='Search services...';
                value={search_term}
                on_change={e => setSearchTerm (e.target.value)}
                className='w - full px - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent';
              />;
              <Search className='absolute right - 3 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - gray - 400' />            </div>        >;
          <div className="flex flex - col md:flex - row gap - 4 items - center justify - center">;
            {/* Search */}
            <div className="relative flex - 1 max - w-md">;
              <input;
                type="text";
                placeholder="Search services...";
                value={search_term}
                on_change={(e) => setSearchTerm (e.target.value)}
                className="w - full px - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent";
              />;
              <Search className="absolute right - 3 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - gray - 400" />;
            </div>;
            {/* Category Filter */}
            <select;
              value={selected_category}
              on_change={e => setSelectedCategory (e.target.value)}
              className='px - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent';
            >;
              <option value='all'>All Categories</option>              {service_categories.map (category => (              on_change={(e) => setSelectedCategory (e.target.value)}
              className="px - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent";
            >;
              <option value="all">All Categories</option>;
                <option key={category.id} value={category.id}>;
                  {category.title.split (' ')[0]}
                </option>))}
            </select>;
          </div>;
        </motion.div>;
        {/* Service Categories */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='mb - 16';
        >;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>            {service_categories.map ((category, index) => (          className="mb - 16";
        >;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
            {service_categories.map ((category, index) => (
              <motion.div;
                key={category.id}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p - 6 rounded - xl border transition - all duration - 300 hover:scale - 105 cursor - pointer ${
                  selected_category === category.id;
                    ? 'border - cyan - 500 bg - cyan - 500 / 10';
                    : 'border - white / 20 bg - white / 5 hover:border - cyan - 500 / 50 hover:bg - cyan - 500 / 5';
                }`}
                on_click={() =>;
                  setSelectedCategory (
                    category.id === selected_category ? 'all' : category.id);
                }
              >;
                <div className='flex items - center space - x-3 mb - 4'>;
                  <div;
                    className={`w - 12 h - 12 rounded - lg bg - gradient - to - r ${category.color} flex items - center justify - center`}
                  >;
                    <category.icon className='w - 6 h - 6 text - white' />;
                  </div>;
                  <div>;
                    <h3 className='text - lg font - semibold text - white'>;
                      {category.title}
                    </h3>;
                    <p className='text - sm text - gray - 400'>;
                      {category.description}
                    </p>;
                  </div>;
                </div>;
                <div className='text - sm text - gray - 300'>                  {category.services.length} services available                    : 'border - white / 20 bg - white / 5 hover:border - cyan - 500 / 50 hover:bg - cyan - 500 / 5';
                }`}
                on_click={() => setSelectedCategory (category.id === selected_category ? 'all' : category.id)}
              >;
                <div className="flex items - center space - x-3 mb - 4">;
                  <div className={`w - 12 h - 12 rounded - lg bg - gradient - to - r ${category.color} flex items - center justify - center`}>;
                    <category.icon className="w - 6 h - 6 text - white" />;
                  </div>;
                  <div>;
                    <h3 className="text - lg font - semibold text - white">{category.title}</h3>;
                    <p className="text - sm text - gray - 400">{category.description}</p>;
                  </div>;
                </div>;
                <div className="text - sm text - gray - 300">;
                  {category.services.length} services available;
                </div>;
              </motion.div>))}
          </div>;
        </motion.div>;
        {/* Services Grid */}
        <motion.div;
          variants={container_variants}
          initial='hidden';
          whileInView='visible';
          viewport={{ once: true }}
          className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'        >          initial="hidden";
          whileInView="visible";
          viewport={{ once: true }}
          className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
          {filtered_services.map ((service, index) => (
            <motion.div;
              key={service.id}
              variants={item_variants}
              className='group relative p - 6 rounded - xl bg - white / 5 backdrop - blur - sm border border - white / 10 hover:border - cyan - 500 / 50 hover:bg - cyan - 500 / 5 transition - all duration - 300 hover:scale - 105';
            >;
              {/* Popular Badge */}
              {service.popular && (
                <div className='absolute -top - 3 -right - 3 bg - gradient - to - r from - yellow - 500 to - orange - 500 text - white text - xs px - 3 py - 1 rounded - full font - semibold'>                  Popular              className="group relative p - 6 rounded - xl bg - white / 5 backdrop - blur - sm border border - white / 10 hover:border - cyan - 500 / 50 hover:bg - cyan - 500 / 5 transition - all duration - 300 hover:scale - 105";
            >;
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top - 3 -right - 3 bg - gradient - to - r from - yellow - 500 to - orange - 500 text - white text - xs px - 3 py - 1 rounded - full font - semibold">;
                </div>)}
              {/* Service Icon */}
              <div className='flex items - center justify - between mb - 4'>;
                <div;
                  className={`w - 16 h - 16 rounded - xl bg - gradient - to - r ${service.color} flex items - center justify - center text - 2xl`}
                >;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {service.icon}
                </div>;
                <div className='text - right'>;
                  <div className='text - 2xl font - bold text - white'>;
                    {service.price}
<<<<<<< HEAD
<<<<<<< HEAD
                  </div>;
                  <div className='text - sm text - gray - 400'>{service.period}</div>                </div>;
              </div>;
              {/* Service Info */}
              <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors'>;
                {service.name}
              <div className="flex items-center justify-between mb-4">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  </div>;
                  <div className='text - sm text - gray - 400'>{service.period}</div>                </div>;
              </div>;

              {/* Service Info */}
              <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors'>;
                {service.name}

              <div className="flex items-center justify-between mb-4">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{service.price}</div>
                  <div className="text-sm text-gray-400">{service.period}</div>
<<<<<<< HEAD
<<<<<<< HEAD
                </div>
              </div>
              {/* Service Info */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </div>

              </div>
              {/* Service Info */}
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </h3>;
              <p className='text - gray - 300 mb - 4 leading - relaxed'>                {service.description}
              </p>;
              {/* Features */}              <div className="flex items - center justify - between mb - 4">;
                <div className={`w - 16 h - 16 rounded - xl bg - gradient - to - r ${service.color} flex items - center justify - center text - 2xl`}>;
                  {service.icon}
                </div>;
                <div className="text - right">;
                  <div className="text - 2xl font - bold text - white">{service.price}</div>;
                  <div className="text - sm text - gray - 400">{service.period}</div>;
              </div>;
              {/* Service Info */}
              <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors'>;
<<<<<<< HEAD
              <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {service.name}
              </h3>;
              <p className='text - gray - 300 mb - 4 leading - relaxed'>              <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors">;
                {service.name}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
<<<<<<< HEAD
                {service.description}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </p>
              {/* Features */}
              <div className='space-y-2 mb-4'>
                {service.features.slice(0, 3).map((feature, idx) => (
                  <div
                    key={idx}
                    className='flex items-center space-x-2 text-sm text-gray-400'
                  >
                    <CheckCircle className='w-4 h-4 text-green-400 flex-shrink-0' />                    <span>{feature}</span>

                {service.description}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </p>
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service && service.color} flex items-center justify-center text-2xl`}>;
                  {service && service.icon}
                </div>;
                <div className='text-right'>;
                  <div className='text-2xl font-bold text-white'>;
                    {service && service.price}
                  </div>;
                  <div className='text-sm text-gray-400'>{service && service.period}</div>                </div>;
              </div>;
              {/* Service Info */}
              <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>;
                {service && service.name}
              </h3>;
              <p className='text-gray-300 mb-4 leading-relaxed'>                {service && service.description}
              </p>;
              {/* Features */}              <div className="flex items-center justify-between mb-4">;
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service && service.color} flex items-center justify-center text-2xl`}>;
                  {service && service.icon}
                </div>;
                <div className="text-right">;
                  <div className="text-2xl font-bold text-white">{service && service.price}</div>;
                  <div className="text-sm text-gray-400">{service && service.period}</div>;
              </div>;
              {/* Service Info */}
              <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>;
                {service && service.name}
              </h3>;
              <p className='text-gray-300 mb-4 leading-relaxed'>              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">;
                {service && service.name}
              </h3>;
              <p className="text-gray-300 mb-4 leading-relaxed">;
              </p>;
              {/* Features */}
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='space-y-2 mb-4'>
                {service.features.slice(0, 3).map((feature, idx) => (
                  <div
                    key={idx}
                    className='flex items-center space-x-2 text-sm text-gray-400'
                  >
                    <CheckCircle className='w-4 h-4 text-green-400 flex-shrink-0' />                    <span>{feature}</span>
=======

                )}
=======

                )}
              </div>
                )}
              </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {/* Service Meta */}
              <div className='grid grid-cols-2 gap-4 mb-6 text-sm'>
                <div className='flex items-center space-x-2 text-gray-400'>
                  <Clock className='w-4 h-4' />
                  <span>{service.setupTime}</span>
                </div>                  <span>{service.setupTime}</span>
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                {service.description}
              </p>

              {/* Features */}

                    <span>{feature}</span>
                  </div>
                ))}
                {service.features.length > 3 && (
                  <div className='text-sm text-cyan-400'>                    +{service.features.length - 3} more features              <div className="space-y-2 mb-4">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
<<<<<<< HEAD
                ))}
                {service.features.length > 3 && (
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className='text-sm text-cyan-400'>                  <div className="text-sm text-cyan-400">
                    +{service.features.length - 3} more features
                  </div>
                )}
              </div>
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                )}
              </div>

              {/* Service Meta */}
              <div className='grid grid-cols-2 gap-4 mb-6 text-sm'>
                <div className='flex items-center space-x-2 text-gray-400'>
                  <Clock className='w-4 h-4' />
                  <span>{service.setupTime}</span>
                </div>                  <span>{service.setupTime}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{service.customers.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{service.rating}/5</span>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <div className="flex items-center space-x-2 text-gray-400">
=======

                <div className="flex items-center space-x-2 text-gray-400">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                <div className="flex items-center space-x-2 text-gray-400">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span>{service.growthRate}</span>
                </div>
              </div>
              {/* Market Position */}
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10">
=======

              <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="text-xs text-gray-400 mb-1">Market Position</div>
                <div className="text-sm text-gray-300 leading-relaxed">
                  {service.marketPosition}
                </div>
              </div>
              {/* ROI */}
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
=======

              <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="text-xs text-green-400 mb-1 font-semibold">Expected ROI</div>
                <div className="text-sm text-green-300 font-medium">
                  {service.roi}
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
              {/* Service Meta */}
              <div className='grid grid-cols-2 gap-4 mb-6 text-sm'>;
                <div className='flex items-center space-x-2 text-gray-400'>;
                  <Clock className='w-4 h-4' />;
                  <span>{service && service.setupTime}</span>;
                </div>                  <span>{service && service.setupTime}</span>;
                </div>;
                <div className="flex items-center space-x-2 text-gray-400">;
                  <Users className="w-4 h-4" />;
                  <span>{service && service.customers.toLocaleString()}</span>;
                </div>;
                <div className="flex items-center space-x-2 text-gray-400">;
                  <Star className="w-4 h-4 text-yellow-400" />;
                  <span>{service && service.rating}/5</span>;
                </div>;
                <div className='flex items-center space-x-2 text-gray-400'>;
                  <Users className='w-4 h-4' />;
                  <span>{service && service.customers.toLocaleString()}</span>;
                </div>;
                <div className='flex items-center space-x-2 text-gray-400'>;
                  <Star className='w-4 h-4 text-yellow-400' />;
                  <span>{service && service.rating}/5</span>;
                </div>;
                <div className='flex items-center space-x-2 text-gray-400'>;
                  <TrendingUp className='w-4 h-4 text-green-400' />                  <span>{service && service.growthRate}</span>                <div className="flex items-center space-x-2 text-gray-400">;
                  <TrendingUp className="w-4 h-4 text-green-400" />;
                  <span>{service && service.growthRate}</span>;
                </div>;
              </div>;
              {/* Market Position */}
              <div className='mb-4 p-3 rounded-lg bg-white/5 border border-white/10'>;
                <div className='text-xs text-gray-400 mb-1'>;
                  Market Position;
                </div>;
                <div className='text-sm text-gray-300 leading-relaxed'>                  {service && service.marketPosition}              <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10">;
                <div className="text-xs text-gray-400 mb-1">Market Position</div>;
                <div className="text-sm text-gray-300 leading-relaxed">;
                  {service && service.marketPosition}
                </div>;
              </div>;
              {/* ROI */}
              <div className='mb-6 p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30'>;
                <div className='text-xs text-green-400 mb-1 font-semibold'>;
                  Expected ROI;
                </div>;
                <div className='text-sm text-green-300 font-medium'>                  {service && service.roi}              <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">;
                <div className="text-xs text-green-400 mb-1 font-semibold">Expected ROI</div>;
                <div className="text-sm text-green-300 font-medium">;
                  {service && service.roi}
                </div>;
              </div>;


<<<<<<< HEAD

                <a
=======
              {/* Action Buttons */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              {/* Action Buttons */}
              <div className='flex space-x-3'>

<<<<<<< HEAD
                <a
<<<<<<< HEAD
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                <a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <div className="flex space-x-3">
=======
              <div className='flex space-x-3'>
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <a

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                <a

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  href={service.link}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-center group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  href={service && service.link}
                  className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-center group'>;
                  Get Started;
                  <ArrowRight className='w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform' />;
                </a>;
                <button className='px-4 py-3 border border-white/20 text-white rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200'>;
                  <Eye className='w-4 h-4' />                </button>;
              </div>;
              {/* Trial Info */}
              <div className="mt-4 text-center">
                <div className="text-sm text-gray-400">
                  <span className="text-cyan-400 font-semibold">{service.trialDays} days</span> free trial
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

<<<<<<< HEAD
<<<<<<< HEAD
{/* Trial Info */}                <a
                  href={service && service.link}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-center group">;
                  Get Started;
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />;
                </a>;
                <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200">;
                  <Eye className="w-4 h-4" />;
                </button>;
              </div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Trial Info */}
              <div className='mt-4 text-center'>;
                <div className='text-sm text-gray-400'>;
                  <span className='text-cyan-400 font-semibold'>;
                    {service && service.trialDays} days;
                  </span>{' '}
                  free trial                </div>              <div className="mt-4 text-center">;
                <div className="text-sm text-gray-400">;
                  <span className="text-cyan-400 font-semibold">{service && service.trialDays} days</span> free trial;
                </div>;
              </div>;
            </motion && motion.div>;
          ))}

<<<<<<< HEAD
<<<<<<< HEAD


        {/* Call to Action */}
        <motion&& motion.div
        </motion && motion.div>;
        {/* Call to Action */}
        <motion&& motion.div

        {/* Call to Action */}
        <motion.div
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </motion && motion.div>;


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Call to Action */}
        <motion&& motion.div
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Call to Action */}
        <motion&& motion.div
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.6, delay: 0 && 0.6 }}
          viewport={{ once: true }}
<<<<<<< HEAD


<<<<<<< HEAD
          className="text-center mt-20"
        >
          className='text-center mt-20'

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          className='text-center mt-20'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >
          <div className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 backdrop-blur-sm'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              Join thousands of businesses already leveraging our cutting-edge
              technology solutions. Get started today and experience the future
              of business automation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <a
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-lg'
              >
                Start Your Free Trial
              </a>
              <a
                href='/pricing-2034'
<<<<<<< HEAD
<<<<<<< HEAD
                className='px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 text-lg'
              >
                View Pricing
              </a>
            </div>
            <div className='mt-6 text-sm text-gray-400'>
              <Phone className='w-4 h-4 inline mr-2' />              Need help? Call us at {contactInfo.mobile}        >
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          className="text-center mt-20"
        >

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already leveraging our cutting-edge technology solutions.
              Get started today and experience the future of business automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                className='px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 text-lg'>;
                View Pricing;
              </a>;
            </div>;
            <div className='mt-6 text-sm text-gray-400'>;
              <Phone className='w-4 h-4 inline mr-2' />              Need help? Call us at {contactInfo && contactInfo.mobile}        >;
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 backdrop-blur-sm">;
            <h3 className="text-3xl font-bold text-white mb-4">;
              Ready to Transform Your Business?;
            </h3>;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Join thousands of businesses already leveraging our cutting-edge technology solutions. ;
              Get started today and experience the future of business automation.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
<<<<<<< HEAD
<<<<<<< HEAD
              <a
                href="/contact"


}
                 className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 text-lg">;
                 View Pricing;
               </a>;
            </div>;
            <div className="mt-6 text-sm text-gray-400">;
              <Phone className="w-4 h-4 inline mr-2" />;
              Need help? Call us at {contactInfo && contactInfo.mobile}
            </div>;
          </div>;
        </motion && motion.div>;
      </div>;
    </section>;
  );
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-lg">;
                Start Your Free Trial;
              </a>;
                             <a
                 href="/pricing-2034"
<<<<<<< HEAD


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                 className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 text-lg"
               >
                 View Pricing
               </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <Phone className="w-4 h-4 inline mr-2" />
              Need help? Call us at {contactInfo.mobile}
            </div>
          </div>
        </motion.div>
      </div>
    </section>


}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
  );
}
              </h3>;
              <p className="text - gray - 300 mb - 4 leading - relaxed">;
              </p>;
              {/* Features */}
              <div className='space - y-2 mb - 4'>;
                {service.features.slice (0, 3).map ((feature, idx) => (
                  <div;
                    key={idx}
                    className='flex items - center space - x-2 text - sm text - gray - 400';
                  >;
                    <CheckCircle className='w - 4 h - 4 text - green - 400 flex - shrink - 0' />                    <span>{feature}</span>;
                  </div>))}
                {service.features.length > 3 && (
                  <div className='text - sm text - cyan - 400'>                    +{service.features.length - 3} more features              <div className="space - y-2 mb - 4">;
                {service.features.slice (0, 3).map ((feature, idx) => (
                  <div key={idx} className="flex items - center space - x-2 text - sm text - gray - 400">;
                    <CheckCircle className="w - 4 h - 4 text - green - 400 flex - shrink - 0" />;
                  </div>))}
                {service.features.length > 3 && (
                  <div className='text - sm text - cyan - 400'>                  <div className="text - sm text - cyan - 400">;
                    +{service.features.length - 3} more features;
                  </div>)}
              </div>;
              {/* Service Meta */}
              <div className='grid grid - cols - 2 gap - 4 mb - 6 text - sm'>;
                <div className='flex items - center space - x-2 text - gray - 400'>;
                  <Clock className='w - 4 h - 4' />;
                  <span>{service.setup_time}</span>;
                </div>                  <span>{service.setup_time}</span>;
                </div>;
                <div className="flex items - center space - x-2 text - gray - 400">;
                  <Users className="w - 4 h - 4" />;
                  <span>{service.customers.toLocaleString ()}</span>;
                </div>;
                <div className="flex items - center space - x-2 text - gray - 400">;
                  <Star className="w - 4 h - 4 text - yellow - 400" />;
                  <span>{service.rating}/5</span>;
                </div>;
                <div className='flex items - center space - x-2 text - gray - 400'>;
                  <Users className='w - 4 h - 4' />;
                  <span>{service.customers.toLocaleString ()}</span>;
                </div>;
                <div className='flex items - center space - x-2 text - gray - 400'>;
                  <Star className='w - 4 h - 4 text - yellow - 400' />;
                  <span>{service.rating}/5</span>;
                </div>;
                <div className='flex items - center space - x-2 text - gray - 400'>;
                  <TrendingUp className='w - 4 h - 4 text - green - 400' />                  <span>{service.growth_rate}</span>                <div className="flex items - center space - x-2 text - gray - 400">;
                  <TrendingUp className="w - 4 h - 4 text - green - 400" />;
                  <span>{service.growth_rate}</span>;
                </div>;
              </div>;
              {/* Market Position */}
              <div className='mb - 4 p - 3 rounded - lg bg - white / 5 border border - white / 10'>;
                <div className='text - xs text - gray - 400 mb - 1'>;
                  Market Position;
                </div>;
                <div className='text - sm text - gray - 300 leading - relaxed'>                  {service.market_position}              <div className="mb - 4 p - 3 rounded - lg bg - white / 5 border border - white / 10">;
                <div className="text - xs text - gray - 400 mb - 1">Market Position</div>;
                <div className="text - sm text - gray - 300 leading - relaxed">;
                  {service.market_position}
                </div>;
              </div>;
              {/* ROI */}
              <div className='mb - 6 p - 3 rounded - lg bg - gradient - to - r from - green - 500 / 20 to - emerald - 500 / 20 border border - green - 500 / 30'>;
                <div className='text - xs text - green - 400 mb - 1 font - semibold'>;
                  Expected ROI;
                </div>;
                <div className='text - sm text - green - 300 font - medium'>                  {service.roi}              <div className="mb - 6 p - 3 rounded - lg bg - gradient - to - r from - green - 500 / 20 to - emerald - 500 / 20 border border - green - 500 / 30">;
                <div className="text - xs text - green - 400 mb - 1 font - semibold">Expected ROI</div>;
                <div className="text - sm text - green - 300 font - medium">;
                  {service.roi}
                </div>;
              </div>;
              {/* Action Buttons */}
              <div className='flex space - x-3'>;
                <a;
                  href={service.link}
                  className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white px - 4 py - 3 rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200 text - center group';
                >;
                  Get Started;
                  <ArrowRight className='w - 4 h - 4 ml - 2 inline group - hover:translate - x-1 transition - transform' />;
                </a>;
                <button className='px - 4 py - 3 border border - white / 20 text - white rounded - lg hover:border - cyan - 500 / 50 hover:bg - cyan - 500 / 10 transition - all duration - 200'>;
                  <Eye className='w - 4 h - 4' />                </button>;
              </div>;
              {/* Trial Info */}                <a;
                  href={service.link}
                  className="flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white px - 4 py - 3 rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200 text - center group";
                >;
                  Get Started;
                  <ArrowRight className="w - 4 h - 4 ml - 2 inline group - hover:translate - x-1 transition - transform" />;
                </a>;
                <button className="px - 4 py - 3 border border - white / 20 text - white rounded - lg hover:border - cyan - 500 / 50 hover:bg - cyan - 500 / 10 transition - all duration - 200">;
                  <Eye className="w - 4 h - 4" />;
                </button>;
              </div>;
              {/* Trial Info */}
              <div className='mt - 4 text - center'>;
                <div className='text - sm text - gray - 400'>;
                  <span className='text - cyan - 400 font - semibold'>;
                    {service.trial_days} days;
                  </span>{' '}
                  free trial                </div>              <div className="mt - 4 text - center">;
                <div className="text - sm text - gray - 400">;
                  <span className="text - cyan - 400 font - semibold">{service.trial_days} days</span> free trial;
                </div>;
              </div>;
            </motion.div>))}
        </motion.div>;
        {/* Call to Action */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className='text - center mt - 20';
        >;
          <div className='bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border border - cyan - 500 / 20 rounded - 2xl p - 12 backdrop - blur - sm'>;
            <h3 className='text - 3xl font - bold text - white mb - 4'>;
              Ready to Transform Your Business?;
            </h3>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto'>;
              Join thousands of businesses already leveraging our cutting - edge;
              technology solutions. Get started today and experience the future;
              of business automation.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center items - center'>;
              <a;
                href='/contact';
                className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200 text - lg';
              >;
                Start Your Free Trial;
              </a>;
              <a;
                href='/pricing - 2034';
                className='px - 8 py - 4 border border - cyan - 500 text - cyan - 400 rounded - lg font - semibold hover:bg - cyan - 500 hover:text - white transition - all duration - 200 text - lg';
              >;
                View Pricing;
              </a>;
            </div>;
            <div className='mt - 6 text - sm text - gray - 400'>;
              <Phone className='w - 4 h - 4 inline mr - 2' />              Need help? Call us at {contact_info.mobile}        >;
          <div className="bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border border - cyan - 500 / 20 rounded - 2xl p - 12 backdrop - blur - sm">;
            <h3 className="text - 3xl font - bold text - white mb - 4">;
              Ready to Transform Your Business?;
            </h3>;
            <p className="text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto">;
              Join thousands of businesses already leveraging our cutting - edge technology solutions.;
              Get started today and experience the future of business automation.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center items - center">;
              <a;
                href="/contact";
                className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200 text - lg";
              >;
                Start Your Free Trial;
              </a>;
                            <a;
                href="/pricing - 2034";
                className="px - 8 py - 4 border border - cyan - 500 text - cyan - 400 rounded - lg font - semibold hover:bg - cyan - 500 hover:text - white transition - all duration - 200 text - lg";
              >;
                View Pricing;
              </a>;
            </div>;
            <div className="mt - 6 text - sm text - gray - 400">;
              <Phone className="w - 4 h - 4 inline mr - 2" />;
              Need help? Call us at {contact_info.mobile}
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>);
}
<<<<<<< HEAD
<<<<<<< HEAD
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-lg"
              >
                Start Your Free Trial
              </a>
                             <a
                 href="/pricing-2034"
                 className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 text-lg"
               >
                 View Pricing
               </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <Phone className="w-4 h-4 inline mr-2" />
              Need help? Call us at {contactInfo.mobile}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
);
  );
}
}
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
