import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
'use client'
const SEOHeadPage: React.FC = () => {
  const features = $2;
export default SEOHeadPage
description?: string
keywords?: string
canonical?: string
ogImage?: string
ogType?: string
twitterCard?: string
structuredData?:object;}
}
constSEOHead: React.FC<SEOHeadProp s>= ({title= 'Zion Tech Group - Advanced AI & IT Solutions'
description= 'Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions. Expert AI and IT consulting services.'
keywords= 'AI solutions, IT consulting, cloud infrastructure, cybersecurity, automation, machine learning, artificial intelligence, business transformation'
canonical
ogImage= '/og-image.jpg'
ogType= 'website'
twitterCard= 'summary_large_image'
structuredData}) => {constfullTitle= title.includes('Zion Tech Group') ? title:`${title} | Zion TechGroup`
constcanonicalUrl= canonical || (type of windo w !== 'undefined' ? windo w.location.href: '')
const defaultStructuredData = $2;
export default SEOHead