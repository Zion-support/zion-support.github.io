import React, { useState, useEffect } from 'react',
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Menu, X, ChevronDown, Globe, Brain, Shield, Rocket, 
  Cpu, Database, Users, Award, BookOpen, Phone
} from 'lucide-react',
import Link from 'next/link';
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

const EnhancedNavigation: React.FC = () => {

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    },

    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  return (
    <nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      </div>
    </nav>
  )
},

export default EnhancedNavigation
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
