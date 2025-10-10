'use client;
'
import React from 'react;
'
import { Helmet } from 'react-helmet-async;

import {
  Zap,
  Settings,
  CheckCircle,
  BarChart,
  Clock,
  Users,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Brain,
  Globe,
  Lock,
  Activity,
  TrendingUp,
  Target,
  Eye,
  Database,
  Workflow,

} from lucide-react;

;

const ProcessAutomationPage: React.FC = () => {const features = [;;;

    {
      ico,
    n: Zap,'
      title: 'Workflow Automation,
      description: 'Streamline your business processes with intelligent automation that reduces manual work and errors.',
    },
    {';
      icon: Bot,'
      title: 'AI-Powered Automation,
      description: Leverage artificial intelligence to create smart, adaptive automation solutions for complex processes.
    },
    {';
      icon: Settings,'
      title: 'Custom Integration,
      description: 'Seamlessly integrate with your existing systems and tools for a unified automation experience.',
    },
    {';
      icon: BarChart,'
      title: 'Performance Monitoring,
      description: 'Track and optimize your automated processes with real-time analytics and reporting.',
    }

  ];

;

const benefits = [;;
'
    'Reduce manual work and human errors,'
    'Increase operational efficiency,'
    'Lower operational costs,'
    'Improve process consistency,'
    'Scale your business operations,'
    'Enhance employee productivity,
    24
    Custom automation solutions
  ];

  return (

    <React.Fragment>
      <Helmet>
        <title>Process Automation Services - Zion Tech Group | Workflow Automation</title>
        <meta name="description" content="Professional process automation services by Zion Tech Group. Streamline workflows, reduce costs, and improve efficiency with AI-powered automation. />
        <meta name="keywords" content="process automation, workflow automation, business automation, AI automation, Zion Tech Group />
      </Helmet>
        {/* Benefits Section *
        <section className=py-20 px-4 sm: px-6 lg:px-8 bg-white
          <div className="max-w-7xl mx-auto>">
            <div className="text-center mb-16>">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4>
                Key Benefits
              <">
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Transform your business with our comprehensive process automation services.
              <
            <
">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
              {benefits.map((benefit, index) => (
">
                <div key={index} className="flex items-start space-x-3>">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0 />">
                  <p className="text-gray-300 text-lg>{benefit}</p>
                </div>
              ))
            </div>
          </div>
        </section>
        {/* CTA Section *">
        <section className="py-20 px-4 sm: px-6 lg:px-8>">
          <div className="max-w-4xl mx-auto text-center>">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12>">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4>
                Ready to Automate Your Processes?
              <">
              <p className="text-xl text-purple-100 mb-8>
                Contact our automation experts to discuss your process optimization needs.
              <">
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <button className=bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-gray-100 transition-all duration-300 flex items-center justify-center>
                  ">
                  <Mail className="mr-2 h-5 w-5 
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>)
export default ProcessAutomationPage;
">