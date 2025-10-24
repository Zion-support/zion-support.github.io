<<<<<<< HEAD:app/components/ResponsiveContainer.tsx
'use client';
import Footer from './Footer';
import Navigation from './Navigation';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle } from 'lucide-react';
import React from 'react';
import { cn } from '../lib/utils';
interface ResponsiveContainerProps {
  className?: string
}
constResponsiveContainer= ({children
  class Nam e
  maxWidth= '7 xl'}: ResponsiveContainerProps) =>{constmaxWidthClasses= {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
=======
import Footer from './Footer'
import Navigation from './Navigation'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle } from 'lucide-react'
import React from 'react'
import { cn } from '../lib/utils'
'use client'
  maxWidth= '7 xl'
    "sm": 'max-w-sm',
    "md": 'max-w-md',
    "lg": 'max-w-lg',
    "xl": 'max-w-xl',
>>>>>>> origin/main:app-backup/components/ResponsiveContainer.tsx
    '2 xl': 'max-w-2 xl'
    '3 xl': 'max-w-3 xl'
    '4 xl': 'max-w-4 xl'
    '5 xl': 'max-w-5 xl'
    '6 xl': 'max-w-6 xl'
    '7 xl': 'max-w-7 xl'
    "full": 'max-w-full';,
const "ResponsiveContainer": React.FC<ResponsiveContainerProps> = ({ className = ' }) => {