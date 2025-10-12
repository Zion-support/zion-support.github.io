'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, Cpu, ArrowRight } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generation' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard-pro' },
    { name: 'AI Smart Scheduler', path: '/ai-smart-scheduler' },
    { name: 'AI Content Moderation Pro', path: '/ai-content-moderation-pro' },
    { name: 'AI Computer Vision', path: '/ai-computer-vision' },
    { name: 'AI Data Analytics', path: '/ai-data-analytics' },
    { name: 'AI Automation', path: '/ai-automation' }
  ]

  const itServices = [
    { name: 'Web Development', path: '/web-development' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Cloud Migration Pro', path: '/cloud-migration-pro' },
    { name: 'DevOps', path: '/devops' },
    { name: 'Data Analytics', path: '/data-analytics' },
    { name: 'Cloud Services', path: '/cloud-services' },
    { name: 'Cybersecurity', path: '/cybersecurity' }
  ]

  const microSaasServices = [
    { name: 'AI E-commerce Optimizer Pro', path: '/ai-ecommerce-optimizer-pro' },
    { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
    { name: 'AI Email Marketing Automation', path: '/ai-email-marketing-automation' },
    { name: 'AI Project Management Pro', path: '/ai-project-management-pro' },
    { name: 'AI Customer Support Chatbot', path: '/ai-customer-support-chatbot' },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator' },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker' },
    { name: 'AI Video Editor', path: '/ai-video-editor' },
    { name: 'Advanced Security Suite', path: '/advanced-security-suite' },
    { name: 'AI Smart Scheduler', path: '/ai-smart-scheduler' },
    { name: 'AI Content Moderation Pro', path: '/ai-content-moderation-pro' },
    { name: 'AI Analytics Dashboard Pro', path: '/ai-analytics-dashboard-pro' },
    { name: 'Cloud Migration Pro', path: '/cloud-migration-pro' }
  ]

  const fiveGServices = [
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions' },
    { name: '5G Implementation', path: '/5g-implementation' },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
    { name: '5G Edge Computing', path: '/5g-edge-computing' },
    { name: '5G Private Networks', path: '/5g-private-networks' }
  ]

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Partners', path: '/partners' }
  ]

  const supportLinks = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
    { name: 'Support', path: '/support' },
    { name: 'Status', path: '/status' },
    { name: 'SLA', path: '/sla' }
  ]
    { name: 'Support', path: '/support' },
    { name: 'Status', path: '/status' },
    { name: 'SLA', path: '/sla' }
  ]