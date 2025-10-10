'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Star,
  Users,
  Zap,
  Brain,
  Shield
} from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI strategy for your business',
      duration: '2-4 hours',
      price: '$299/hour',
      features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation plan']
    },
    {
      title: 'IT Infrastructure Review',
      description: 'Complete assessment of your current IT infrastructure',
      duration: '4-8 hours',
      price: '$199/hour',
      features: ['Security audit', 'Performance analysis', 'Cost optimization', 'Upgrade recommendations']
    },
    {
      title: 'Digital Transformation Planning',
      description: 'Strategic planning for digital transformation initiatives',
      duration: '6-12 hours',
      price: '$249/hour',
      features: ['Process analysis', 'Technology selection', 'Change management', 'Timeline planning']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

