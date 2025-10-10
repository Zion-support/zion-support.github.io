'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Smartphone, Monitor, Cloud } from 'lucide-react';

const BusinessAppsPage: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Custom mobile applications for iOS and Android platforms'
    },
    {
      icon: Monitor,
      title: 'Web Applications',
      description: 'Responsive web applications with modern UI/UX design'
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless cloud integration and deployment solutions'
    },
    {
      icon: Brain,