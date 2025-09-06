import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe;
  Twitter, Linkedin, Github;
  ArrowUp, Crown, Zap, Brain, Rocket;
  Shield, Users, BookOpen, Briefcase, Atom
 } from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
interface FooterLink {
  label: string;
  href: string;
  description?: string;
  external?: boolean
}

interface FooterSection {
  title: string;
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: 'Services';
    links: [
      {
        label: 'AI & Machine Learning',
        href: '/ai-services',
        description: 'Advanced AI solutions',
      },
      {
        label: 'Quantum Computing',
        href: '/quantum-computing',
        description: 'Next-gen quantum tech',
      },
      {
        label: 'Space Technology',
        href: '/space-tech',
        description: 'Innovative space solutions',
      },
      {
        label: 'Q4 2025 Innovation',
        href: '/innovative-2025-q4-showcase',
        description: 'Latest revolutionary services',
      },
      {
        label: 'Pricing Guide',
        href: '/comprehensive-pricing-2025-q4',
        description: 'Comprehensive pricing',
      },
      {
        label: 'Cybersecurity',
        href: '/cybersecurity',
        description: 'Enterprise security',
      },
      {
        label: 'Cloud Solutions',
        href: '/cloud-platform',
        description: 'Scalable cloud infrastructure',
      },
      {
        label: 'View All Services',
        href: '/services',
        description: 'Complete service portfolio',
      },
    ],
  },
  {
    title: 'Solutions';
    links: [
      {
        label: 'Healthcare & Biotech',
        href: '/healthcare-solutions',
        description: 'Medical technology',
      },
      {
        label: 'Financial Services',
        href: '/solutions?industry=financial',
        description: 'Fintech solutions',
      },
      {
        label: 'Manufacturing',
        href: '/solutions?industry=manufacturing',
        description: 'Industry 4.0',
      },
      {
        label: 'Retail & E-commerce',
        href: '/solutions?industry=retail',
        description: 'Digital commerce',
      },
      {
        label: 'Government',
        href: '/solutions?industry=government',
        description: 'Public sector',
      },
      {
        label: 'Education',
        href: '/solutions?industry=education',
        description: 'EdTech solutions',
      },
  {
    title: 'Solutions',
    links: [
      { label: 'Healthcare & Biotech', href: '/healthcare-solutions', description: 'Medical technology' },
      { label: 'Financial Services', href: '/solutions?industry;
