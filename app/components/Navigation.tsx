import React, { useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Database, Code, Brain, BarChart3, Star, ArrowRight, Globe } from 'lucide-react'

const Navigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])

  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen)
  }, [isMicroSaasOpen])


  const microSaasServices = useMemo(() => [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" />, featured: true },
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" />, featured: true },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" />, featured: true },
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Brain className="w-4 h-4" /> },
    { name: 'Zion Data Sync', path: '/zion-data-sync', icon: <Database className="w-4 h-4" /> },
    { name: 'Zion Lead Magnet', path: '/zion-lead-magnet', icon: <Zap className="w-4 h-4" /> },
    { name: 'Zion Project Master', path: '/zion-project-master', icon: <Code className="w-4 h-4" /> },
    { name: 'Zion Email Automation', path: '/zion-email-automation', icon: <Zap className="w-4 h-4" /> }
  ], [])

  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ], [])

  const serviceCategories = useMemo(() => [
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      services: [
        { name: 'AI Analytics', path: '/ai-analytics' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Marketing Automation', path: '/ai-marketing-automation' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' }
      ]
    },
    {
      name: 'IT Services',
      path: '/it-services',
      icon: <Shield className="w-4 h-4" />,
      services: [
        { name: 'Cloud Services', path: '/cloud-services' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'Custom Development', path: '/custom-development' },
        { name: 'Web Development', path: '/web-development' },
        { name: 'Mobile Development', path: '/mobile-development' },
        { name: 'Database Management', path: '/database-management' }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
      services: [
        { name: '5G Implementation', path: '/5g-implementation' },
        { name: '5G Edge Computing', path: '/5g-edge-computing' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
        { name: '5G Smart Cities', path: '/5g-smart-city-solutions' },
        { name: '5G Private Networks', path: '/5g-private-networks' },
        { name: '5G Data Analytics', path: '/5g-data-analytics' }
      ]
    }
  ], [])

const NavigationPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Navigation - Zion Tech Group</title>
        <meta name="description" content="Professional Navigation services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">Navigation</h1>
          <p className="text-lg text-gray-300">
            This page is currently under development. Please check back soon for more information.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavigationPage;
