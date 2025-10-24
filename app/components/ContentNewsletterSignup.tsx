'use client'
import Footer from './Footer'
import Navigation from './Navigation'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap } from 'lucide-react'
import { CheckCircle, ArrowRight } from 'lucide-react'

interface ContentNewsletterSignupProps {title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  features?: Array<{
    icon: React.ComponentType<{ className?: string } />text: string;
  , }>
  onSubscribe?: (email: string) =</ void;
, }constContentNewsletterSignup:React.FC<ContentNewsletterSignupProp s>= ({title= "Stay Updated with Our LatestInsights",
  subtitle= "Get exclusive content, industry insights, and early access to new features delivered to yourinbox.",
  placeholder= "Enter your emailaddress",
  buttonText= "Subscribe",
  features= [

export default ContentNewsletterSignupPage;
