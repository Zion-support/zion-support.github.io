<<<<<<< HEAD

import React, { useState } from 'react',;
import { motion } from 'framer-motion',;
import { 
  Brain, Shield, Rocket, Globe, Cpu, Database, 
  TrendingUp, Users, Star, Zap, Lock, Target,
  ArrowRight, Phone, Mail, MapPin, ExternalLink
} from 'lucide-react',


  // Combine all innovative services
  const allInnovativeServices = [
    ...innovativeMicroSaasExpansionV32025,
    ...innovativeITServicesExpansion2025V3,
    ...innovativeAIServicesExpansion2025V3
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
  Brain, Shield, Rocket, Globe, Cpu, Database
  TrendingUp, Users, Star, Zap, Lock, Target
  ArrowRight, Phone, Mail, MapPin, ExternalLink
} from 'lucide-react'
// Import our new innovative services
import { innovativeMicroSaasExpansionV32025 } from '../data/2025-innovative-micro-saas-expansion-v3';
import { innovativeITServicesExpansion2025V3 } from '../data/2025-innovative-it-services-expansion-v3';
import { innovativeAIServicesExpansion2025V3 } from '../data/2025-innovative-ai-services-expansion-v3';
const Innovative2025ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  // Combine all innovative services
  const allInnovativeServices = [
    ...innovativeMicroSaasExpansionV32025
    ...innovativeITServicesExpansion2025V3
    ...innovativeAIServicesExpansion2025V3
  ]
  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allInnovativeServices.length }
    { id: 'ai', name: 'AI & Machine Learning', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: allInnovativeServices.filter(s => s.category.includes('AI') |s.category.includes('Machine Learning')).length }
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: allInnovativeServices.filter(s => s.category.includes('IT') |s.category.includes('Infrastructure')).length }
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allInnovativeServices.filter(s => s.category.includes('Security')).length }
    { id: 'cloud', name: 'Cloud & FinOps', icon: Database, color: 'from-blue-500 to-indigo-500', count: allInnovativeServices.filter(s => s.category.includes('Cloud') |s.category.includes('FinOps')).length }
    { id: 'developer', name: 'Developer Tools', icon: Code, color: 'from-green-500 to-teal-500', count: allInnovativeServices.filter(s => s.category.includes('Developer')).length }
  ]
  const filteredServices = allInnovativeServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' |
      service.category.toLowerCase().includes(selectedCategory) |
      (selectedCategory === 'ai' && (service.category.includes('AI') |service.category.includes('Machine Learning'))) |
      (selectedCategory === 'it' && (service.category.includes('IT') |service.category.includes('Infrastructure'))) |
      (selectedCategory === 'cybersecurity' && service.category.includes('Security')) |
      (selectedCategory === 'cloud' && (service.category.includes('Cloud') |service.category.includes('FinOps'))) |
      (selectedCategory === 'developer' && service.category.includes('Developer'))
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
      (service as any).tagline?.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })
  const stats = [
    { number: "15+", label: "Innovative Services", icon: Star }
    { number: "99.9%", label: "Uptime Guarantee", icon: CheckCircle }
    { number: "24/7", label: "AI Support Available", icon: Brain }
    { number: "200+", label: "Countries Served", icon: Globe }
  ]
  const fadeInUp = {
    initial: { opacity: 0, y: 30 }
    animate: { opacity: 1, y: 0 }
    transition: { duration: 0.6, ease: "easeOut" }
  }
import {;
  Brain, Shield, Rocket, Globe, Cpu, Database,;
  TrendingUp, Users, Star, Zap, Lock, Target,;
  ArrowRight, Phone, Mail, MapPin, ExternalLink;
} from 'lucide-react',;
// Import our new innovative services;
import { innovativeMicroSaasExpansionV32025 } from '../data/2025-innovative-micro-saas-expansion-v3';
import { innovativeITServicesExpansion2025V3 } from '../data/2025-innovative-it-services-expansion-v3';
import { innovativeAIServicesExpansion2025V3 } from '../data/2025-innovative-ai-services-expansion-v3';
const Innovative2025ServicesShowcase: React.FC = () => {;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  // Combine all innovative services;
  const allInnovativeServices = [;
    ...innovativeMicroSaasExpansionV32025;
    ...innovativeITServicesExpansion2025V3;
    ...innovativeAIServicesExpansion2025V3;
  ];
  const categories = [;
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allInnovativeServices.length },;
    { id: 'ai', name: 'AI & Machine Learning', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: allInnovativeServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },;
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: allInnovativeServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },;
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allInnovativeServices.filter(s => s.category.includes('Security')).length },;
    { id: 'cloud', name: 'Cloud & FinOps', icon: Database, color: 'from-blue-500 to-indigo-500', count: allInnovativeServices.filter(s => s.category.includes('Cloud') || s.category.includes('FinOps')).length },;
    { id: 'developer', name: 'Developer Tools', icon: Code, color: 'from-green-500 to-teal-500', count: allInnovativeServices.filter(s => s.category.includes('Developer')).length   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  ],
  const categories = [;
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from - purple - 500 to - pink - 500', count: allInnovativeServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: BrainIcon, color: 'from - cyan - 500 to - blue - 500', count: allInnovativeServices.filter (string => s.category.includes ('AI') || s.category.includes ('Machine Learning')).length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from - yellow - 500 to - orange - 500', count: allInnovativeServices.filter (string => s.category.includes ('IT') || s.category.includes ('Infrastructure')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from - red - 500 to - orange - 500', count: allInnovativeServices.filter (string => s.category.includes ('Security')).length },
    { id: 'cloud', name: 'Cloud & FinOps', icon: Database, color: 'from - blue - 500 to - indigo - 500', count: allInnovativeServices.filter (string => s.category.includes ('Cloud') || s.category.includes ('FinOps')).length },
    { id: 'developer', name: 'Developer Tools', icon: Code, color: 'from - green - 500 to - teal - 500', count: allInnovativeServices.filter (string => s.category.includes ('Developer')).length }
  ],
  const filtered_services = allInnovativeServices.filter (service => {
    const matches_category = selected_category === 'all' ||;
      service.category.toLowerCase ().includes (selected_category) ||;
      (selected_category === 'ai' && (service.category.includes ('AI') || service.category.includes ('Machine Learning'))) ||;
      (selected_category === 'it' && (service.category.includes ('IT') || service.category.includes ('Infrastructure'))) ||;
      (selected_category === 'cybersecurity' && service.category.includes ('Security')) ||;
      (selected_category === 'cloud' && (service.category.includes ('Cloud') || service.category.includes ('FinOps'))) ||;
      (selected_category === 'developer' && service.category.includes ('Developer')),
    const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      (service as any).tagline?.toLowerCase ().includes (search_term.toLowerCase ()),
    return matches_category && matches_search;
  }),
  const stats = [;
    { number: "15+", label: "Innovative Services", icon: Star },
    { number: "99.9%", label: "Uptime Guarantee", icon: CheckCircle },
    { number: "24 / 7", label: "AI Support Available", icon: Brain },
    { number: "200+", label: "Countries Served", icon: Globe }
  ],







  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut"   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },








  const staggerContainer = {
    animate: {
      transition: {

        staggerChildren: 0.1

      }
    }
  }
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>innovative-2025-services-showcase | Zion Tech Group</title>
        <meta name="description" content="innovative-2025-services-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">innovative-2025-services-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default innovative-2025-services-showcase;
