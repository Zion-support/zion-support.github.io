<<<<<<< HEAD
<<<<<<< HEAD:all-pages-backup/components/ContentNewsletterSignup.tsx
import Footer from './Footer';
import Navigation from './Navigation';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap } from 'lucide-react';
import { CheckCircle, ArrowRight } from 'lucide-react';
<<<<<<< HEAD:all-pages-backup/components/ContentNewsletterSignup.tsx
  onSubscribe?: (email: string) => void
<<<<<<< HEAD:all-pages-backup/components/ContentNewsletterSignup.tsx
  features= [
    { icon: Star, text:&quot;Exclusive content&quot}
    {icon: Users, text:&quot;Industry insights&quot}
    {icon: Globe, text:&quot;Global updates&quot}
    {icon: Zap, text:&quot;Early access&quot}
  ]
  onSubscribe
}) => {const [emailsetEmail] = useState('');
  const [isSubmittingsetIsSubmitting] = useState(false);
  const [isSubscribedsetIsSubscribed] = useState(false);
  const [isLoadingsetIsLoading] = useState(false);
  consthandleSubmit= async (e: React.FormEvent) => {
<<<<<<< HEAD:all-pages-backup/components/ContentNewsletterSignup.tsx
<<<<<<< HEAD:all-pages-backup/components/ContentNewsletterSignup.tsx
                <input
                  type=&quot;email&quot
                  value={email}
                  onChange={(e) =>setEmail(e.target.value)}
                  placeholder={placeholder}
                 requiredclassName=&quot;w-full pl-10pr-4 py-4 bg-white/10border border-white/20rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:ring-2focus:ring-blue-500focus:border-transparent&quot
                />
              </div>
              <button
                type=&quot;submit&quot
                disabled={isLoading || !email}
<<<<<<< HEAD:all-pages-backup/components/ContentNewsletterSignup.tsx
  )};

export default ContentNewsletterSignupPage
=======
'use client'
import Footer from './Footer'
import Navigation from './Navigation'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap } from 'lucide-react'
import { CheckCircle, ArrowRight } from 'lucide-react'
}) => {const [emailsetEmail] = useState(';
      setEmail(''
      // // console.error('Subscription "error": ');
    'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology';}
const "ContentNewsletterSignup": React.FC<ContentNewsletterSignupProps> = ({ className = ' }) => {
>>>>>>> origin/main
