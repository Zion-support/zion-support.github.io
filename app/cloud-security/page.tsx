'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Lock, Eye, ShieldCheck } from 'lucide-react';
const CloudSecurityPage: React.FC = () => {
  const features = [
    {
    }
  ];
  const benefits = [
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Security | Zion Tech Group</title>
        <meta name="description" content="Professional Cloud Security services by Zion Tech Group. Advanced AI and IT solutions for your business." />
<meta name="keywords" content="cloud security, security services, IT services, Zion Tech Group, cybersecurity" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cloud Security
  </          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your cloud security needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
  </
          </div>
        </div>
      </div>
    </div>
  ),
};

export default CloudSecurityPage
  </button>
  </button>
  </button>
  </button>
  </section>
  </h2>
  </section>
  </h1>