import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Star, 
  Clock, 
  TrendingUp, 
  Shield, 
  Zap,
  Brain,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Network,
  Smartphone,
  CreditCard,
  Users,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices'
import { comprehensiveServices, serviceCategories } from '@/data/comprehensiveServices'
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, SERVICE_FEATURES, MARKET_PRICING } from '@/data/enhancedServices'
export default function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const filteredServices = selectedCategory === 'all' 
    ? comprehensiveServices 
    : comprehensiveServices.filter(service => service.category.toLowerCase().includes(selectedCategory.toLowerCase()))
    ? ENHANCED_SERVICES 
    : ENHANCED_SERVICES.filter(service => 
        SERVICE_CATEGORIES.find(cat => cat.id === selectedCategory)?.services.includes(service)
      )
  return (
      {/* Hero Section */}
        <div className="absolute inset-0 bg-black/20"></div>
            Zion Tech Group
            Premier IT Services & AI Solutions Provider - Transforming Businesses Through Innovation
              +1 302 464 0950
              kleber@ziontechgroup.com
          
          {/* Contact Info Cards */}
                <h3 className="font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-cyan-light">+1 302 464 0950</p>
                <h3 className="font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>
                <h3 className="font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-cyan-light">364 E Main St STE 1008<br />Middletown DE 19709</p>

      {/* Services Overview */}
            Our Comprehensive Service Portfolio
            From AI-powered automation to enterprise cybersecurity, we deliver cutting-edge solutions that drive business growth and digital transformation.

        {/* Category Navigation */}
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            All Services
          {serviceCategories.map((category) => (
          {SERVICE_CATEGORIES.map((category) => (
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
          ))}

        {/* Services Grid */}
          {filteredServices.map((service) => (
          ))}

      {/* Market Analysis Section */}
              Market Analysis & ROI
              Understand the market trends, competitive landscape, and expected returns on your technology investments.

            {Object.entries(MARKET_PRICING).map(([key, data]) => (
                  <CardTitle className="text-zion-cyan capitalize">{key.replace('-', ' ')}</CardTitle>
                    <span className="text-white">{data.averagePrice}</span>
                    <span className="text-zion-cyan-light">{data.marketTrend}</span>
                    <span className="text-zion-cyan-light">{data.roi}</span>
            ))}

      {/* Why Choose Us Section */}
            Why Choose Zion Tech Group?
            We combine cutting-edge technology with proven expertise to deliver exceptional results for our clients.

              <h3 className="text-2xl font-bold text-white mb-4">AI-First Approach</h3>
                We leverage the latest AI technologies to create intelligent, scalable solutions that adapt to your business needs.

              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
                Our security-first approach ensures your data and systems are protected with industry-leading security measures.

              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
                Our certified professionals bring years of experience in delivering successful technology solutions across industries.

      {/* CTA Section */}
            Ready to Transform Your Business?
            Let's discuss how our innovative solutions can drive your digital transformation and business growth.
              Schedule a Consultation
              Request a Quote

      {/* Footer */}
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                Premier IT services and AI solutions provider helping businesses thrive in the digital age.
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <p>AI & Automation</p>
                <p>Cybersecurity</p>
                <p>Cloud Services</p>
                <p>Data Analytics</p>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                  View All Services
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
  )
}

// Service Card Component
function ServiceCard({ service }: { service: any }) {
  const [showDetails, setShowDetails] = useState(false)
  return (
            {service.category}
          {service.featured && (
          )}
        <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
          {service.description}
          {/* Price and Rating */}
              {service.currency}{service.price?.toLocaleString()}
              <span className="text-white">{service.rating}</span>
              <span className="text-zion-cyan-light">({service.reviewCount})</span>

          {/* AI Score */}
            <span className="text-zion-cyan-light">AI Score:</span>
                <$2 />
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" 
                  style={{ width: `${service.aiScore}%` }}
                ></div>
              <span className="text-zion-cyan font-semibold">{service.aiScore}%</span>

          {/* Tags */}
            {service.tags.slice(0, 3).map((tag: string) => (
                {tag}
            ))}

          {/* Availability */}
            <span className="text-sm">Available: {service.availability}</span>

          {/* Action Buttons */}
              className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? 'Hide Details' : 'View Details'}

          {/* Detailed Information */}
          {showDetails && (
                    Features & Benefits
                        <span>Advanced AI algorithms</span>
                        <span>24/7 support</span>
                        <span>Custom integration</span>
                    Get Started
                      <p>Ready to implement this solution?</p>
                          <span>+1 302 464 0950</span>
                          <span>kleber@ziontechgroup.com</span>
                        Schedule Consultation
          )}
  )
}