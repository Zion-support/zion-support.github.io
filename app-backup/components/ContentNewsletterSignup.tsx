import Footer from './Footer'
import Navigation from './Navigation'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { Mail, CheckCircle, ArrowRight, Star, Users, Globe, Zap } from 'lucide-react'
import { CheckCircle, ArrowRight } from 'lucide-react'
'use client'
interface ContentNewsletterSignupProps {
  title?: string
  subtitle?: string
  placeholder?: string
  buttonText?: string
  features?: Array<{
    icon: React.ComponentType<{ className?: string }>
    text: string}>
  onSubscribe?: (email: string) => void}constContentNewsletterSignup:React.FC<ContentNewsletterSignupProp s>= ({
  title= "Stay Updated with Our LatestInsights"
  subtitle= "Get exclusive content, industry insights, and early access to new features delivered to yourinbox."
  placeholder= "Enter your emailaddress"
  buttonText= "Subscribe"
  features= [
    { icon: Star, text: "Exclusive content&quot
  }
    {
  icon: Users, text: "Industry insights&quot
  }
    {
  icon: Globe, text: "Global updates&quot
  }
    {
  icon: Zap, text: "Early access&quot,
    }
  ]
  onSubscribe
}) => {const [emailsetEmail] = useState('')
  const [isSubmittingsetIsSubmitting] = useState(false)
  const [isSubscribedsetIsSubscribed] = useState(false)
  const [isLoadingsetIsLoading] = useState(false)
  consthandleSubmit= async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return setIsLoadin g(true)
    try {
      // Simulate API call
      await new Promise(resolve=> setTimeout(resolve100 0))
      if (onSubscrib e) {
        onSubscribe(email)
      }
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      // // // eslint-disable-next-line no-console
    console.error('Subscription error:', error)
    } finally {
      setIsSubmitting(false),
    }
  ]
  const benefits = $2;
