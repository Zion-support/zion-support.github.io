'use client';
import React from 'react';
import { CheckCircle, Star, Cloud, Shield, Database, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Infrastructure & Cloud Services
    {
      icon: Cloud,
      title: 'IT Infrastructure',
      price: '$999/month',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee',
      features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      price: '$1,599/month',
      description: 'Advanced security solutions with threat detection and prevention',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response']
    },
    {
      icon: Database,
      title: 'Database Services',
      price: '$899/month',
      description: 'Database design, optimization, and management with AI-powered tuning',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening']
    },
    {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="cyber-button w-full text-center block"
                  >
                    Get Started
                  </a>
                </div>
      </main>
      <Footer />
    </div>
  );
};

export default ITServicesPage;
