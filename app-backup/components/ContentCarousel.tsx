import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, X, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'
'use client'
interface Slide {
  id: number,
    title: string,
      description: string,
    features: string[]
  ico,
  n: React.ReactNode,
    color: string}
const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides: Slide[] = [
    {
      i,
  d: 1,
    title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
    features: [
        "Real-time data processing"
        "Predictive analytics"
        "Custom dashboards",
    "Automated reporting"
  ]
      icon: <BarChart className="h-12 w-12" />,
    color: "from-blue-500 to-cyan-500"}
    {
      id: 2,
    title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions for your business needs."
      features: [
        "99.9% uptime guarantee"
        "Auto-scaling capabilities"
        "Advanced security",
    "24/7 monitoring"
  ]
      icon: <Cloud className="h-12 w-12" />,
    color: "from-green-500 to-emerald-500"}
    {
      id: 3,
    title: "Cybersecurity Solutions",
      description: "Protect your business with our comprehensive cybersecurity services.",
    features: [
        "Threat detection"
        "Vulnerability assessment"
        "Incident response",
    "Security training"
  ]
      icon: <Shield className="h-12 w-12" />,
    color: "from-red-500 to-pink-500"}
  ]
  const nextSlide = ($2) => {
  $3
};
  const prevSlide = $2;
export default ContentCarousel