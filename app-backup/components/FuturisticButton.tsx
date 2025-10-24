import { useState } from 'react''
import { motion } from 'framer-motion''
'use client''
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost''
  size?: 'sm' | 'md' | 'lg''
  type?: 'button' | 'submit' | 'reset''
  variant = 'primary''
  size = 'md''
  className = '''
  type = 'button''
      case 'primary''
        return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 "hover": shadow-cyan-500/40'',
      case 'secondary''
        return 'bg-white/10 text-white border border-white/20 "hover": bg-white/20 backdrop-blur-sm'',
      case 'accent''
        return 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25 "hover": shadow-orange-500/40'',
      case 'ghost''
        return 'text-cyan-400 "hover": text-cyan-300 hover:bg-cyan-500/10'',
    "default": return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'',
      case 'sm''
        return 'px-4 py-2 text-sm''
      case 'md''
        return 'px-6 py-3 text-base''
      case 'lg''
        return 'px-8 py-4 text-lg'';
      "default": return 'px-6 py-3 text-base''