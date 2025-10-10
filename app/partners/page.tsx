'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ExternalLink, 
  ArrowRight, 
  Building2, 
  Handshake, 
  Award, 
  Users, 
  Zap,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
  tier: 'strategic' | 'preferred' | 'certified';
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'Microsoft',
      logo: 'https://via.placeholder.com/150x80/0078D4/FFFFFF?text=Microsoft',
      description: 'Strategic cloud and AI partnership',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: 'https://via.placeholder.com/150x80/FF9900/FFFFFF?text=AWS',
      description: 'Preferred cloud infrastructure partner',
      category: 'Cloud Services',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: 'https://via.placeholder.com/150x80/4285F4/FFFFFF?text=Google+Cloud',
      description: 'AI and machine learning solutions',
      category: 'AI & ML',
      website: 'https://cloud.google.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: 'https://via.placeholder.com/150x80/00A1E0/FFFFFF?text=Salesforce',
      description: 'CRM and business automation',
      category: 'CRM',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      name: 'IBM',
      logo: 'https://via.placeholder.com/150x80/052FAD/FFFFFF?text=IBM',
      description: 'Enterprise AI and consulting',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'certified'
    },
    {
      name: 'Oracle',
      logo: 'https://via.placeholder.com/150x80/FF0000/FFFFFF?text=Oracle',
      description: 'Database and enterprise solutions',
      category: 'Database',
      website: 'https://oracle.com',
      tier: 'certified'
    },
    {
      name: 'Docker',
      logo: 'https://via.placeholder.com/150x80/2496ED/FFFFFF?text=Docker',
      description: 'Containerization and DevOps',
      category: 'DevOps',
      website: 'https://docker.com',
      tier: 'certified'
    },
    {
      name: 'Kubernetes',
      logo: 'https://via.placeholder.com/150x80/326CE5/FFFFFF?text=K8s',
      description: 'Container orchestration platform',
      category: 'DevOps',
      website: 'https://kubernetes.io',
      tier: 'certified'
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners'
    },
    {
      icon: <Handshake className="w-8 h-8 text-green-500" />,
      title: 'Strategic Partnerships',
      description: 'Direct relationships with technology leaders for better support'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Latest Technology',
      description: 'Access to cutting-edge tools and early feature releases'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Expert Support',
      description: 'Dedicated support from partner engineering teams'
    }
  ];

  const partnershipTiers = [
    {
      name: 'Strategic Partners',
      description: 'Our closest technology partners with deep integration',
      color: 'from-blue-500 to-purple-600',
      partners: partners.filter(p => p.tier === 'strategic')
    },
    {
      name: 'Preferred Partners',
      description: 'Trusted partners for specific technology solutions',
      color: 'from-green-500 to-blue-600',
      partners: partners.filter(p => p.tier === 'preferred')
    },
    {
      name: 'Certified Partners',
      description: 'Certified experts in specific technologies',
      color: 'from-purple-500 to-pink-600',
      partners: partners.filter(p => p.tier === 'certified')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Technology Partners & Certifications</title>
        <meta name="description" content="Learn about our technology partners and strategic alliances. We work with leading technology companies to deliver the best solutions." />
        <meta name="keywords" content="partners, technology partners, Microsoft, AWS, Google Cloud, Salesforce, IBM, Oracle, certifications" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="text-cyan-400">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We partner with leading technology companies to deliver the most advanced 
              and reliable solutions for our clients.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Our Partnerships Matter</h2>
              <p className="text-xl text-gray-300">Strategic alliances that benefit our clients</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        {partnershipTiers.map((tier, tierIndex) => (
          <section key={tierIndex} className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">{tier.name}</h2>
                <p className="text-xl text-gray-300">{tier.description}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {tier.partners.map((partner, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                    <div className="mb-6">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-32 h-16 object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-gray-300 mb-4">{partner.description}</p>
                    <div className="text-sm text-cyan-400 mb-4">{partner.category}</div>
                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Become a Partner Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center">
              <Building2 className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
              <p className="text-xl text-gray-300 mb-8">
                Interested in partnering with us? We're always looking for innovative 
                technology companies to collaborate with.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">Middletown, DE</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PartnersPage;