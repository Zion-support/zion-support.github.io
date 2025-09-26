import React, { useState } from "react"
import { FlaskConical, BookOpen, Users, Clock, Star, Search, Filter, Download, ExternalLink, ArrowRight, Brain, Cloud, Shield, Database, Zap, Globe, Target, TrendingUp, Award, CheckCircle, Calendar, MapPin, DollarSign, FileText, Lightbulb, Microscope, Rocket, Code, Network, Cpu, Lock, BarChart3, Palette, Smartphone, Eye, Star as StarIcon } from "lucide-react"
export default function Research() {;
  const [searchQuery, setSearchQuery] = useState(''),;
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeStatus, setActiveStatus] = useState('all')
  const [activeType, setActiveType] = useState('all')
  const categories = [;
    { id: 'all', name: 'All Categories', icon: <FlaskConical className="w-5 h-5" />, count: 0 };
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: 12 };
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-5 h-5" />, count: 8 };
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: 6 };
    { id: 'data', name: 'Data & Analytics', icon: <Database className="w-5 h-5" />, count: 10 };
    { id: 'emerging', name: 'Emerging Technologies', icon: <Zap className="w-5 h-5" />, count: 7 };
    { id: 'quantum', name: 'Quantum Computing', icon: <Cpu className="w-5 h-5" />, count: 4 };
    { id: 'iot', name: 'IoT & Edge Computing', icon: <Network className="w-5 h-5" />, count: 5 };
  ];
  const statuses = [;
    { id: 'all', name: 'All Statuses', count: 0 };
    { id: 'active', name: 'Active', count: 0 };
    { id: 'completed', name: 'Completed', count: 0 };
    { id: 'planning', name: 'Planning', count: 0 };
    { id: 'published', name: 'Published', count: 0 };
  ];
  const types = [;
    { id: 'all', name: 'All Types', count: 0 };
    { id: 'research', name: 'Research Papers', count: 0 };
    { id: 'patents', name: 'Patents', count: 0 };
    { id: 'prototypes', name: 'Prototypes', count: 0 };
    { id: 'collaborations', name: 'Collaborations', count: 0 };
  ];
  const researchProjects = [;
    {;
      id: 1,title: 'Quantum Machine Learning for Financial Modeling',description: 'Exploring the application of quantum computing algorithms to enhance financial risk assessment and portfolio optimization.',category: 'quantum',status: 'active',type: 'research',startDate: '2024-01-01',endDate: '2025-12-31',leadResearcher: 'Dr. Elena Vasquez',team: ['Dr. Elena VasquezDr. Michael Chen', 'Sarah JohnsonAlex Rodriguez'],;
      funding: 2500000,institution: 'MIT',abstract: 'This research investigates the potential of quantum machine learning algorithms to solve complex financial optimization problems that are computationally intractable for classical computers.',methodology: 'Hybrid quantum-classical approach using variational quantum algorithms',expectedOutcomes: ['Quantum advantage demonstrationFinancial model improvements', 'Patent applications'],;
      publications: [;
        {;
          title: 'Quantum Algorithms for Portfolio Optimization',journal: 'Nature Quantum Information',year: 2024,doi: '10.1038/s41534-024-00800-5',citations: 23;
        };
      ];
      tags: ['Quantum ComputingMachine Learning', 'FinanceOptimization', 'Risk Assessment'],;
      featured: true,progress: 65,impact: 'high'
    };
    {;
      id: 2,title: 'Federated Learning for Privacy-Preserving Healthcare Analytics',description: 'Developing secure federated learning frameworks that enable healthcare institutions to collaborate on AI models without sharing sensitive patient data.',category: 'ai-ml',status: 'completed',type: 'research',startDate: '2023-06-01',endDate: '2024-11-30',leadResearcher: 'Dr. Sarah Chen',team: ['Dr. Sarah ChenDr. James Wilson', 'Lisa AndersonDavid Kim'],;
      funding: 1800000,institution: 'Stanford University',abstract: 'This project addresses the critical need for privacy-preserving machine learning in healthcare by developing novel federated learning approaches.',methodology: 'Differential privacy, secure multi-party computation, federated averaging',;
      expectedOutcomes: ['Privacy-preserving frameworkHealthcare AI models', 'Open-source toolkit'],;
      publications: [;
        {;
          title: 'Privacy-Preserving Federated Learning in Healthcare',journal: 'Nature Machine Intelligence',year: 2024,doi: '10.1038/s42256-024-00789-8',citations: 45;
        };
        {;
          title: 'Secure Multi-Party Computation for Medical Data',journal: 'IEEE Transactions on Medical Imaging',year: 2024,doi: '10.1109/TMI.2024.001234',citations: 18;
        };
      ];
      tags: ['Federated LearningHealthcare', 'PrivacyAI Ethics', 'Medical Imaging'],;
      featured: true,progress: 100,impact: 'very-high'
    };
    {;
      id: 3,title: 'Zero-Trust Architecture for Industrial IoT',description: 'Researching and implementing zero-trust security frameworks specifically designed for industrial IoT environments.',category: 'security',status: 'active',type: 'prototypes',startDate: '2024-03-01',endDate: '2025-08-31',leadResearcher: 'Michael Rodriguez',team: ['Michael RodriguezDr. Jennifer Park', 'Robert KimEmily Watson'],;
      funding: 1200000,institution: 'Carnegie Mellon University',abstract: 'This project develops and validates zero-trust security architectures for critical infrastructure and industrial IoT systems.',methodology: 'Threat modeling, security architecture design, prototype development, penetration testing',;
      expectedOutcomes: ['Zero-trust frameworkSecurity prototypes', 'Best practices guide'],;
      publications: [;
        {;
          title: 'Zero-Trust Security for Industrial IoT',journal: 'IEEE Security & Privacy',year: 2024,doi: '10.1109/MSEC.2024.001234',citations: 12;
        };
      ];
      tags: ['Zero-TrustIndustrial IoT', 'CybersecurityCritical Infrastructure', 'Security Architecture'],;
      featured: false,progress: 40,impact: 'high'
    };
    {;
      id: 4,title: 'Edge AI for Autonomous Vehicles',description: 'Developing lightweight AI models optimized for edge computing in autonomous vehicle systems.',category: 'emerging',status: 'planning',type: 'research',startDate: '2025-01-01',endDate: '2026-12-31',leadResearcher: 'Dr. David Thompson',team: ['Dr. David ThompsonDr. Lisa Chen', 'Marcus RodriguezJennifer Kim'],;
      funding: 3000000,institution: 'UC Berkeley',abstract: 'This research focuses on creating efficient AI models that can run on edge devices in autonomous vehicles while maintaining high accuracy and reliability.',methodology: 'Model compression, knowledge distillation, edge computing optimization, real-time inference',;
      expectedOutcomes: ['Edge AI frameworkAutonomous vehicle models', 'Performance benchmarks'],;
      publications: [],tags: ['Edge ComputingAutonomous Vehicles', 'AI OptimizationReal-time Systems', 'Computer Vision'],;
      featured: false,progress: 15,impact: 'medium'
    };
    {;
      id: 5,title: 'Blockchain for Supply Chain Transparency',description: 'Investigating blockchain technology applications for enhancing supply chain transparency and traceability.',category: 'emerging',status: 'completed',type: 'collaborations',startDate: '2023-01-01',endDate: '2024-06-30',leadResearcher: 'Dr. Robert Kim',team: ['Dr. Robert KimSarah Johnson', 'Alex ThompsonEmily Chen'],;
      funding: 900000,institution: 'Columbia University',abstract: 'This project explores how blockchain technology can improve supply chain transparency and enable better tracking of products from source to consumer.',methodology: 'Blockchain design, smart contracts, supply chain modeling, pilot implementation',;
      expectedOutcomes: ['Blockchain frameworkSupply chain pilots', 'Industry partnerships'],;
      publications: [;
        {;
          title: 'Blockchain-Enabled Supply Chain Transparency',journal: 'Journal of Supply Chain Management',year: 2024,doi: '10.1111/jscm.12345',citations: 28;
        };
      ];
      tags: ['BlockchainSupply Chain', 'TransparencySmart Contracts', 'Traceability'],;
      featured: false,progress: 100,impact: 'medium'
    };
    {;
      id: 6,title: 'Neuromorphic Computing for Edge AI',description: 'Researching brain-inspired computing architectures for energy-efficient AI processing at the edge.',category: 'ai-ml',status: 'active',type: 'research',startDate: '2024-09-01',endDate: '2026-08-31',leadResearcher: 'Dr. Jennifer Park',team: ['Dr. Jennifer ParkDr. Michael Chen', 'Robert WilsonLisa Rodriguez'],;
      funding: 2200000,institution: 'Georgia Tech',abstract: 'This project investigates neuromorphic computing approaches to create energy-efficient AI systems for edge computing applications.',methodology: 'Neuromorphic architecture design, spiking neural networks, hardware-software co-design',;
      expectedOutcomes: ['Neuromorphic frameworkEnergy-efficient models', 'Hardware prototypes'],;
      publications: [;
        {;
          title: 'Neuromorphic Computing for Edge AI Applications',journal: 'Nature Electronics',year: 2024,doi: '10.1038/s41928-024-01123-4',citations: 19;
        };
      ];
      tags: ['Neuromorphic ComputingEdge AI', 'Energy EfficiencySpiking Neural Networks', 'Hardware Design'],;
      featured: true,progress: 55,impact: 'high'
    };
  ];
  //[^;]*
  categories.forEach(cat => {;
    cat.count = researchProjects.filter(p => p.category === cat.id).length,;
  }),;

  statuses.forEach(status => {;
    status.count = researchProjects.filter(p => p.status === status.id).length,;
  }),;

  types.forEach(type => {;
    type.count = researchProjects.filter(p => p.type === type.id).length,;
  }),;

  const filteredProjects = researchProjects.filter(project => {;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())),;

    const matchesCategory = activeCategory === 'all' || project.category === activeCategory
    const matchesStatus = activeStatus === 'all' || project.status === activeStatus
    const matchesType = activeType === 'all' || project.type === activeType

    return matchesSearch && matchesCategory && matchesStatus && matchesType,;&& matchesCategory && matchesStatus && matchesType,; matchesCategory && matchesStatus && matchesType,
  }),;

  const getCategoryIcon = (categoryId: string) => {;
    return categories.find(c => c.id === categoryId)?.icon || <[^>]*/>
  };
  const getStatusColor = (status: string) => {;
    switch (status) {;
      case 'active': return 'text-green-400'
      case 'completed': return 'text-blue-400',;
      case 'planning': return 'text-yellow-400',;
      case 'published': return 'text-purple-400',;
      default: return 'text-zion-slate-light'
    };
  };
  const getImpactColor = (impact: string) => {;
    switch (impact) {;
      case 'very-high': return 'text-red-400'
      case 'high': return 'text-orange-400',;
      case 'medium': return 'text-yellow-400',;
      case 'low': return 'text-green-400',;
      default: return 'text-zion-slate-light'
    };
  };
  const formatDate = (dateString: string) => {;
    return new Date(dateString).toLocaleDateString('en-US', {;
      year: 'numeric',month: 'short'
    });
  },;

  const formatFunding = (amount: number) => {;
    if (amount >= 1000000) {;
      return `$${(amount / 1000000).toFixed(1)}M`
    } else if (amount >= 1000) {;
      return `$${(amount / 1000).toFixed(0)}K`,;
    };
    return `$${amount.toLocaleString()}`,;
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Hero Section */};
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">;
        <div className="container mx-auto px-4 text-center">;
          <div className="flex justify-center mb-6">;
            <div className="p-4 bg-zion-cyan/20 rounded-full">;
              <[^>]*/>
            </[^>]*>
          </[^>]*>
          <h1 className="text-5xl font-bold text-white mb-6">;
            Research & Innovation;
          </[^>]*>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
            Pushing the boundaries of technology through cutting-edge research, innovative solutions, and collaborative partnerships.;
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Search and Filters */};
      <div className="py-12">;
        <div className="container mx-auto px-4">;
          <div className="max-w-6xl mx-auto">;
            {/* Search Bar */};
            <div className="relative mb-8">;
              <[^>]*/>
              <input;
                type="text"
                value={searchQuery};
                onChange={(e) => setSearchQuery(e.target.value)};
                placeholder="Search research projects..."
                className="[^"]*"
              />;
            </[^>]*>

            {/* Filters */};
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
              {/* Categories */};
              <div className="space-y-3">;
                <label className="text-white font-medium">Category</[^>]*>
                <div className="flex flex-wrap gap-2">;
                  {categories.slice(0, 4).map((category) => (;
                    <button;
                      key={category.id};
                      onClick={() => setActiveCategory(category.id)};
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${;
                        activeCategory === category.id
                          ? 'bg-zion-cyan text-zion-slate-dark'
                          : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                      }`};
                    >;
                      {category.icon};
                      {category.name};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* Status */};
              <div className="space-y-3">;
                <label className="text-white font-medium">Status</[^>]*>
                <div className="flex flex-wrap gap-2">;
                  {statuses.map((status) => (;
                    <button;
                      key={status.id};
                      onClick={() => setActiveStatus(status.id)};
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${;
                        activeStatus === status.id
                          ? 'bg-zion-purple text-white'
                          : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                      }`};
                    >;
                      {status.name} ({status.count});
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* Types */};
              <div className="space-y-3">;
                <label className="text-white font-medium">Type</[^>]*>
                <div className="flex flex-wrap gap-2">;
                  {types.map((type) => (;
                    <button;
                      key={type.id};
                      onClick={() => setActiveType(type.id)};
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${;
                        activeType === type.id
                          ? 'bg-zion-cyan text-zion-slate-dark'
                          : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                      }`};
                    >;
                      {type.name} ({type.count});
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Featured Research */};
      {researchProjects.filter(p => p.featured).length > 0 && (;&& (; (
        <div className="py-12 bg-zion-slate-dark">;
          <div className="container mx-auto px-4">;
            <h2 className="text-3xl font-bold text-center text-white mb-12">;
              Featured Research Projects;
            </[^>]*>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">;
              {researchProjects.filter(p => p.featured).map((project) => (;
                <div;
                  key={project.id};
                  className="[^"]*"
                >;
                  <div className="relative h-48 bg-gradient-to-br from-zion-blue to-zion-purple">;
                    <div className="absolute inset-0 bg-black/20"></[^>]*>
                    <div className="absolute top-4 left-4">;
                      <span className="px-3 py-1 bg-zion-cyan text-zion-slate-dark rounded-full text-xs font-medium">;
                        Featured;
                      </[^>]*>
                    </[^>]*>
                    <div className="absolute top-4 right-4">;
                      <div className="flex items-center gap-1 text-white">;
                        <span className={`text-sm font-medium ${getImpactColor(project.impact)}`}>;
                          {project.impact.replace('- ').toUpperCase()};
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>
                    <div className="absolute bottom-4 left-4 right-4">;
                      <div className="flex items-center justify-between text-white">;
                        <div className="flex items-center gap-2">;
                          <[^>]*/>
                          <span className="text-sm">{formatDate(project.startDate)} - {formatDate(project.endDate)}</[^>]*>
                        </[^>]*>
                        <div className="flex items-center gap-2">;
                          <[^>]*/>
                          <span className="text-sm">{formatFunding(project.funding)}</[^>]*>
                        </[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>

                  <div className="p-6">;
                    <div className="flex items-center gap-2 mb-3">;
                      {getCategoryIcon(project.category)};
                      <span className="text-sm text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded-full">;
                        {categories.find(c => c.id === project.category)?.name};
                      </[^>]*>
                      <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>;
                        {statuses.find(s => s.id === project.status)?.name};
                      </[^>]*>
                    </[^>]*>

                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</[^>]*>
                    <p className="text-zion-slate-light text-sm mb-4">{project.description}</[^>]*>

                    <div className="flex items-center justify-between mb-4 text-sm text-zion-slate-light">;
                      <div className="flex items-center gap-1">;
                        <[^>]*/>
                        {project.team.length} researchers;
                      </[^>]*>
                      <div className="flex items-center gap-1">;
                        <[^>]*/>
                        {project.publications.length} publications;
                      </[^>]*>
                    </[^>]*>

                    <button className="w-full bg-zion-cyan text-zion-slate-dark py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">;
                      Learn More;
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>
      )};

      {/* All Research Projects */};
      <div className="py-16">;
        <div className="container mx-auto px-4">;
          <h2 className="text-3xl font-bold text-center text-white mb-12">;
            All Research Projects;
          </[^>]*>

          {filteredProjects.length > 0 ? (;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">;
              {filteredProjects.map((project) => (;
                <div;
                  key={project.id};
                  className="[^"]*"
                >;
                  <div className="flex items-start justify-between mb-4">;
                    <div className="flex items-center gap-2">;
                      {getCategoryIcon(project.category)};
                      <span className="text-sm text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded-full">;
                        {categories.find(c => c.id === project.category)?.name};
                      </[^>]*>
                      {project.featured && (;&& (; (
                        <span className="px-2 py-1 bg-zion-cyan text-zion-slate-dark rounded-full text-xs font-medium">;
                          Featured;
                        </[^>]*>
                      )};
                    </[^>]*>
                    <div className="text-right">;
                      <div className={`text-sm font-medium ${getStatusColor(project.status)}`}>;
                        {statuses.find(s => s.id === project.status)?.name};
                      </[^>]*>
                      <div className={`text-xs font-medium ${getImpactColor(project.impact)}`}>;
                        {project.impact.replace('- ').toUpperCase()} Impact;
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>

                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</[^>]*>
                  <p className="text-zion-slate-light mb-4">{project.description}</[^>]*>

                  <div className="flex flex-wrap gap-2 mb-4">;
                    {project.tags.slice(0, 4).map((tag, index) => (;
                      <span;
                        key={index};
                        className="[^"]*"
                      >;
                        {tag};
                      </[^>]*>
                    ))};
                  </[^>]*>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-zion-slate-light">;
                    <div className="flex items-center gap-2">;
                      <[^>]*/>
                      <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</[^>]*>
                    </[^>]*>
                    <div className="flex items-center gap-2">;
                      <[^>]*/>
                      <span>{formatFunding(project.funding)}</[^>]*>
                    </[^>]*>
                    <div className="flex items-center gap-2">;
                      <[^>]*/>
                      <span>{project.team.length} researchers</[^>]*>
                    </[^>]*>
                    <div className="flex items-center gap-2">;
                      <[^>]*/>
                      <span>{project.publications.length} publications</[^>]*>
                    </[^>]*>
                  </[^>]*>

                  <div className="mb-4">;
                    <div className="flex items-center justify-between text-sm text-zion-slate-light mb-2">;
                      <span>Progress</[^>]*>
                      <span>{project.progress}%</[^>]*>
                    </[^>]*>
                    <div className="w-full bg-zion-slate-light/20 rounded-full h-2">;
                      <div;
                        className="[^"]*"
                        style={{ width: `${project.progress}%` }};
                      ></[^>]*>
                    </[^>]*>
                  </[^>]*>

                  <div className="flex items-center justify-between">;
                    <div className="text-sm text-zion-slate-light">;
                      <div className="flex items-center gap-1 mb-1">;
                        <[^>]*/>
                        Lead: {project.leadResearcher};
                      </[^>]*>
                      <div className="flex items-center gap-1">;
                        <[^>]*/>
                        {project.institution};
                      </[^>]*>
                    </[^>]*>

                    <div className="flex gap-2">;
                      <button className="bg-zion-purple text-white px-4 py-2 rounded-lg font-semibold hover:bg-zion-purple-light transition-colors inline-flex items-center gap-2">;
                        <[^>]*/>
                        Details;
                      </[^>]*>
                      {project.publications.length > 0 && (;&& (; (
                        <button className="bg-zion-cyan text-zion-slate-dark px-4 py-2 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">;
                          Papers;
                        </[^>]*>
                      )};
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          ) : (;
            <div className="text-center py-12">;
              <[^>]*/>
              <h3 className="text-xl font-semibold text-white mb-2">No research projects found</[^>]*>
              <p className="text-zion-slate-light">;
                Try adjusting your search terms or browse all categories;
              </[^>]*>
            </[^>]*>
          )};
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-3xl font-bold text-white mb-6">;
            Join Our Research Community;
          </[^>]*>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">;
            Collaborate with leading researchers, access cutting-edge technology, and contribute to breakthrough innovations.;
          </[^>]*>
          <div className="flex flex-col sm: flex-row gap-4 justify-center max-w-md mx-auto">;
            <button className="bg-zion-cyan text-zion-slate-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">;
              Explore Collaborations;
            </[^>]*>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-slate-dark transition-colors">;
              Contact Research Team;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};