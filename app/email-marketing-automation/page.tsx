'use client;
';
import React from 'react;';
';';
import { Helmet } from 'react-helmet-async;

import {
  Mail,
  Target,
  CheckCircle,
  BarChart,
  Clock,
  Users,
  Zap,
  Phone,
  MapPin,
  ArrowRight,
  Brain,
  Globe,
  Lock,
  Activity,
  TrendingUp,
  Settings,
  Database,
  Send,

} from lucide-react;

;

const EmailMarketingAutomationPage: React.FC = () => {const features = [;;;

    {
      ico,';
    n: Mail,';';
      title: 'Automated Campaigns,
      description: Create and manage sophisticated email marketing campaigns with AI-powered automation.
    },
    {
      icon: Target,';
      title: 'Advanced Segmentation,
      description: Intelligent audience segmentation and personalization for maximum engagement and conversion.
    },
    {
      icon: BarChart,';
      title: 'Analytics & Insights,
      description: Comprehensive analytics and reporting to track performance and optimize your campaigns.
    },
    {
      icon: Zap,';
      title: 'Smart Triggers,
      description: Behavior-based triggers and workflows to send the right message at the right time.
    }
];
  ];

;

const benefits = [;;
';
    'Increase email engagement rates,';
    'Automate repetitive marketing tasks,';
    'Personalize customer experiences,';
    'Track and optimize campaign performance,';
    'Scale your email marketing efforts,';
    'Improve customer retention,';
    'Generate more qualified leads,
    Save time and resources];
  ];

  return (

    <React.Fragment>
      <Helmet>
        <title>Email Marketing Automation - Zion Tech Group | Marketing Platform</title>
        <meta name="description" content="Advanced email marketing automation platform by Zion Tech Group. Create, manage, and optimize email campaigns with AI-powered automation. />";
        <meta name="keywords" content="email marketing automation, marketing platform, email campaigns, marketing automation, Zion Tech Group />
      </Helmet>
        {/* Benefits Section *
        <section className=py-20 px-4 sm: px-6 lg:px-8 bg-white";
          <div className="max-w-7xl mx-auto>";
            <div className="text-center mb-16>";
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4>"
                Key Benefits"
              <";
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Drive better results with our comprehensive email marketing automation platform.
              <"
            <"
";
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6>"
              {benefits.map((benefit, index) => ("
";
                <div key={index} className="flex items-start space-x-3>";
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0 />";
                  <p className="text-gray-300 text-lg>{benefit}</p>
                </div>
              ))
            </div>
          </div>"
        </section>"
        {/* CTA Section *";
        <section className="py-20 px-4 sm: px-6 lg:px-8>";
          <div className="max-w-4xl mx-auto text-center>";
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12>";
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4>"
                Ready to Automate Your Marketing?"
              <";
              <p className="text-xl text-purple-100 mb-8>"
                Start your free trial today and transform your email marketing with automation."
              <";
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <button className=bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hove,"
    r:bg-gray-100 transition-all duration-300 flex items-center justify-center>"
                  ";
                  <Mail className="mr-2 h-5 w-5 
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>)"
export default EmailMarketingAutomationPage;"
';";