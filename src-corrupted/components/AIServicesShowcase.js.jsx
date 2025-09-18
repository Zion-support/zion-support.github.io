<<<<<<< HEAD
import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Brain, Cpu, Database, Globe, Zap, ArrowRight, Code, Bot, Scan} from 'lucide-react';
import {Link} from 'react-router-dom';
const aiServices = [
    {id: 'ai-chat',
        name: 'ZionGPT Pro',
        description: 'Advanced conversational AI with enterprise-grade security and customization',
        category: 'Conversational AI',
        rating: 4.9,
        users: 15420,
        price: 'From $99/month',
        features: ['Multi-language support', 'Custom training', 'API access', 'Analytics'],
        icon: Brain,
        color: 'from-purple-500 to-purple-700',
        status: 'active'},
    {id: 'ai-vision',
        name: 'VisionAI Suite',
        description: 'Computer vision solutions for image recognition, analysis, and processing',
        category: 'Computer Vision',
        rating: 4.8,
        users: 8920,
        price: 'From $149/month',
        features: ['Real-time processing', 'Custom models', 'Batch processing', 'SDK'],
        icon: Cpu,
        color: 'from-blue-500 to-blue-700',
        status: 'beta'},
    {id: 'ai-data',
        name: 'DataMind Analytics',
        description: 'Intelligent data analysis and predictive modeling platform',
        category: 'Data Analytics',
        rating: 4.7,
        users: 12340,
        price: 'From $199/month',
        features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'API'],
        icon: Database,
        color: 'from-green-500 to-green-700',
        status: 'active'},
    {id: 'ai-global',
        name: 'GlobalAI Network',
        description: 'Distributed AI computing network for global scale operations',
        category: 'Infrastructure',
        rating: 4.6,
        users: 5670,
        price: 'From $299/month',
        features: ['Global deployment', 'Auto-scaling', 'Load balancing', 'Monitoring'],
        icon: Globe,
        color: 'from-orange-500 to-orange-700',
        status: 'new'},
    {id: 'ai-code-review',
        name: 'AI Code Reviewer',
        description: 'Automated pull request reviews with security and quality checks',
        category: 'Developer AI',
        rating: 4.8,
        users: 7420,
        price: 'From $199/month',
        features: ['PR annotations', 'OWASP checks', 'Refactor suggestions'],
        icon: Code,
        color: 'from-cyan-500 to-blue-600',
        status: 'active'},
    {id: 'ai-rag-assistant',
        name: 'Knowledge RAG Assistant',
        description: 'Private, secure chat over your documents with access controls',
        category: 'Conversational AI',
        rating: 4.7,
        users: 6120,
        price: 'From $299/month',
        features: ['Policy-aware retrieval', 'Redaction', 'Human-in-the-loop'],
        icon: Bot,
        color: 'from-purple-600 to-fuchsia-600',
        status: 'active'},
    {id: 'ai-vision-edge',
        name: 'Edge Vision Inspector',
        description: 'On-device defect detection with active learning',
        category: 'Computer Vision',
        rating: 4.6,
        users: 3180,
        price: 'From $499/month',
        features: ['Offline inference', 'Model drift alerts', 'Web dashboard'],
        icon: Scan,
        color: 'from-emerald-500 to-teal-600',
        status: 'beta'}
];
const categories = ['All', 'Conversational AI', 'Computer Vision', 'Data Analytics', 'Infrastructure', 'Developer AI'];
export function AIServicesShowcase(props: any) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedService, setSelectedService] = useState(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const filteredServices = selectedCategory === 'All'
        ? aiServices
        : aiServices.filter(service => service.category === selectedCategory);
    const getStatusBadge = (props: any) => {
        const statusConfig = {
  active: { color: 'bg-green-500',
  text: 'Active' 
=======

const AIServicesShowcase.js: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AIServicesShowcase.js</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

export default AIServicesShowcase.js;
