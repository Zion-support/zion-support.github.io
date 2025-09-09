import: React { useState } from;
  'react' import: { Link } from;';
  'react-router-dom' import: { motion } from;';
  'framer-motion' import: {  Search, ChevronDown, ChevronRight, ExternalLink, Map, Globe, Code, Brain, Cloud, Shield, Users, BookOpen, FileText, MessageCircle, Phone, Mail, MapPin, Clock, Star } from;';
  'lucide-react'  interface: SitemapSection {';
   title: string;
   icon: React.ComponentType<any>
   links: Array<{
   nam,
    e: string;
   hre,
    f: string;
   description?: string;
   external?: boolean;

  Home;
  ', href: ',/, description: 'Welcome: to Zion Tech Group;';
  ',, featured: true }, { name:,';
  About: Us;
  ', href: '/abou,t, description:',;
  Learn: about our company and mission;
  ' }, { name: 'Contac,t, href:'',;
  /contact;
  ', description: 'Get: in touch with our team }, { name:',;
  Careers;
  ', href: '/career,s, description:',;
  Join: our innovative team;
  ' }, { name: 'Partner,s, href:'',;
  /partners;

  /services/ai-supply-chain-optimization;
  ', description: 'Optimize: supply chain with AI }, { name:',;
  AI: Healthcare Analytics;
  ', href: '/services/ai-healthcare-analytic,s, description:',;
  Healthcare: data analysis and insights;
  ' }, { name: 'AI: Financial Tradin,g, href:'',;
  /services/ai-financial-trading;

  /services/data-analytics;
  ', description: 'Advanced: data analysis and visualization }, { name:',;
  IT: Infrastructure;
  ', href: '/services/it-infrastructur,e, description:',;
  Robust: IT infrastructure solutions;
  ' }, { name: 'Micro: SaaS Product,s, href:'',;
  /services/micro-saas;

  /comprehensive-services-landing-2027;
  ', description: 'Advanced: 2027 service portfolio }, { name:',;
  Enhanced: Services Landing;
  ', href: '/services/enhance,d, description:',;
  Premium: service offerings;
  ' }, { name: 'Marketplac,e, href:'',;
  /marketplace;

  Blog;
  ', href: '/blo,g, description:',;
  Latest: insights and updates;
  ' }, { name: 'Case: Studie,s, href:'',;
  /case-studies;
  ', description: 'Success: stories and implementations }, { name:',;
  White: Papers;
  ', href: '/white-paper,s, description:',;
  In-depth: technical documentation;
  ' }, { name: 'Webinar,s, href:'',;
  /webinars;
  ', description: 'Educational: webinars and sessions }, { name:',;
  Documentation;
  ', href: '/doc,s, description:',;
  Technical: documentation and guides;
  ' }, { name: 'FA,Q, href:'',;
  /faq;

  /schedule-demo;
  ', description: 'Book: a personalized demonstration }, { name:',;
  Pricing: Guide;
  ', href: '/pricin,g, description:',;
  Transparent: pricing information;
  ' }, { name: 'Solutions: Overvie,w, href:'',;
  /solutions;
  ', description: 'Comprehensive: solution portfolio }, { name:',;
  Community;

  /terms;
  ', description: 'Service: terms and conditions }, { name:',;
  Cookie: Policy;
  ', href: '/cookie,s, description:',;
  Cookie: usage and preferences;
  ' }, { name: 'Legal: Informatio,n, href:'',;
  /legal;

  text-blue-500;
  ' }, { name: 'Support: Cente,r', href: '/support;';
  ',, icon: MessageCircl,e, color:,';
  text-green-500;
  ' }, { name: 'Developer: Porta,l', href: '/developers;';
  ',, icon: Cod,e, color:,';
  text-purple-500;


