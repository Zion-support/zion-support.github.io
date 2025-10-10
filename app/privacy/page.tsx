'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle } from 'lucide-react';
  const dataTypes = [
    {
      category: 'Personal Information',
      icon: User,
    },
    {
      category: 'Usage Data',
      icon: Database,
    },
    {
      category: 'Technical Data',
      icon: Server,
    }
  ];

  const purposes = [
    {
    }
  ];

  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal data',
      icon: Eye
    },
    {
      title: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
    },
    {
      title: 'Portability',
      description: 'Receive your data in a structured format',
      icon: Database
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
