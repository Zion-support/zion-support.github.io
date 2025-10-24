'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  return <>{children}</>;
}

export default EnhancedAccessibility
