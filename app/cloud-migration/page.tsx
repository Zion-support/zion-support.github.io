'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Cloud Migration',
      description: 'Safe and secure migration of your applications and data to the cloud'
    },
    {