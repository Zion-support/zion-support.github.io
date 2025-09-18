<<<<<<< HEAD
import React, {useState, useMemo} from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {Input} from '@/components/ui/input';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Search, Users, Zap, Shield, Code, BarChart3, Bot, Building, CheckCircle, Sparkles, Brain, Database, Cloud, Smartphone, FileText, Settings, DollarSign, Clock, Target, Cpu, Heart, Eye, ExternalLink, Play, BookOpen, Mail, Phone, MapPin} from 'lucide-react';
import {ENHANCED_INNOVATIVE_SERVICES} from '@/data/enhancedInnovativeServices';
import {COMPREHENSIVE_SERVICES} from '@/data/comprehensiveServices';
import {INNOVATIVE_MICRO_SAAS_SERVICES} from '@/data/innovativeMicroSaasServices';
import {motion} from 'framer-motion';
// Combine all services
const ALL_SERVICES = [
    ...ENHANCED_INNOVATIVE_SERVICES,
    ...COMPREHENSIVE_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES
];
const categoryColors = {'AI & Legal Tech': 'from-blue-500 to-indigo-500',
    'AI & FinTech': 'from-green-500 to-emerald-500',
    'AI & Healthcare': 'from-red-500 to-pink-500',
    'Cybersecurity & Quantum': 'from-purple-500 to-violet-500',
    'AI & Supply Chain': 'from-orange-500 to-red-500',
    'AI & Energy': 'from-yellow-500 to-orange-500',
    'AI & Customer Experience': 'from-pink-500 to-rose-500',
    'Quantum & AI': 'from-cyan-500 to-blue-500',
    'AI & Data Governance': 'from-indigo-500 to-purple-500',
    'AI & HR Tech': 'from-teal-500 to-green-500',
    'AI & Machine Learning': 'from-purple-500 to-pink-500',
    'AI & Business Intelligence': 'from-indigo-500 to-purple-500',
    'AI & Marketing Automation': 'from-pink-500 to-rose-500',
    'AI & CRM': 'from-blue-500 to-cyan-500',
    'AI & ERP': 'from-green-500 to-emerald-500',
    'AI & Project Management': 'from-orange-500 to-red-500',
    'AI & Autonomous Systems': 'from-purple-500 to-violet-500',
    'AI & Research': 'from-cyan-500 to-blue-500',
    'AI & Content Generation': 'from-indigo-500 to-purple-500',
    'AI & Voice Technology': 'from-teal-500 to-green-500',
    'AI & Video Generation': 'from-pink-500 to-rose-500',
    'AI & Threat Intelligence': 'from-red-500 to-pink-500',
    'AI & Cloud Management': 'from-blue-500 to-cyan-500',
  'AI & DevOps': 'from-orange-500 to-red-500'};
const supportLevelColors = {'premium': 'bg-gradient-to-r from-blue-500 to-cyan-500',
    'enterprise': 'bg-gradient-to-r from-purple-500 to-pink-500',
  'basic': 'bg-gradient-to-r from-green-500 to-emerald-500'};
export default function ComprehensiveServicesOverview
export {ComprehensiveServicesOverview}() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceRange, setPriceRange] = useState('all');
    const [selectedSupportLevel, setSelectedSupportLevel] = useState('all');
    const filtered = ALL_SERVICES;
        // Search filter
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            filtered = filtered.filter(service => service.title.toLowerCase().includes(lowerQuery) ||
                service.description.toLowerCase().includes(lowerQuery) ||
                (service.tags && service.tags.some(tag => tag.toLowerCase().includes(lowerQuery))))}
        // Category filter
        if (selectedCategory !== 'all') {filtered = filtered.filter(service => service.category === selectedCategory)}
        // Price range filter
        if (priceRange !== 'all') {
            switch (priceRange) {
                case 'low':
                    filtered = filtered.filter(service => {
                        const price = typeof service.price === 'number' ? service.price : service.price?.monthly || 0;
                        return price <= 1000});
                    break;
                case 'medium':
                    filtered = filtered.filter(service => {const price = typeof service.price === 'number' ? service.price : service.price?.monthly || 0;
                        return price > 1000 && price <= 3000});
                    break;
                case 'high':
                    filtered = filtered.filter(service => {const price = typeof service.price === 'number' ? service.price : service.price?.monthly || 0;
                        return price > 3000});
                    break}
        }
    });
    const getServicePrice = (props: any) => {
        if (typeof service.price === 'number') {
            return service.price}
    };
    return (<>
      <SEOHead title="Comprehensive Technology Services - Zion Tech Group" description="Explore our comprehensive portfolio of cutting-edge technology services including AI, Quantum Computing, Cybersecurity, IT Infrastructure, and more. Transform your business with innovative solutions." keywords="technology services, AI services, quantum computing, cybersecurity, IT infrastructure, micro SaaS, autonomous systems, space technology, neurotechnology" image="/images/services-overview-og.jpg" canonical="https://ziontechgroup.com/comprehensive-services-overview" />
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">ComprehensiveServicesOverview.js</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesOverview.js;
