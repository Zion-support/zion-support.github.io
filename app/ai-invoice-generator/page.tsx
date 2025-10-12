<<<<<<< HEAD
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
=======
'use client';
import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';

>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
const Page: React.FC = () => {
=======
import { ArrowRight, Brain } from 'lucide-react';

export default function AIInvoiceGenerator() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Generation',
      description: 'Automatically generate professional invoices with smart data extraction and formatting'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: 'Automated Billing',
      description: 'Set up recurring invoices and automated payment reminders to streamline your billing process'
    },
    {
      icon: <CreditCard className="w-6 h-6 text-yellow-400" />,
      title: 'Payment Integration',
      description: 'Accept payments directly through invoices with integrated payment gateways'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Financial Analytics',
      description: 'Track revenue, outstanding payments, and financial performance with detailed reports'
    }
  ]

  const invoiceFeatures = [
    {
      category: 'Invoice Creation',
      items: ['AI Template Generation', 'Custom Branding', 'Multi-currency Support', 'Tax Calculations', 'Line Item Management', 'Discount Application']
    },
    {
      category: 'Automation',
      items: ['Recurring Invoices', 'Auto-reminders', 'Payment Tracking', 'Status Updates', 'Expense Integration', 'Time Tracking']
    },
    {
      category: 'Payment Processing',
      items: ['Online Payments', 'Credit Card Processing', 'Bank Transfers', 'Payment Links', 'Mobile Payments', 'International Payments']
    },
    {
      category: 'Reporting',
      items: ['Revenue Reports', 'Outstanding Invoices', 'Payment History', 'Tax Reports', 'Client Analytics', 'Export Options']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for freelancers and small businesses',
      features: [
        'Up to 50 invoices/month',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic reporting',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 500 invoices/month',
        'Advanced AI features',
        'Custom branding',
        'Priority support',
        'Advanced reporting',
        'Payment integration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited invoices',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Mark Thompson',
      company: 'Freelance Designer',
      content: 'AI Invoice Generator saves me 5 hours per week. The automated reminders ensure I get paid on time.',
      rating: 5
    },
    {
      name: 'Sarah Wilson',
      company: 'Consulting Firm',
      content: 'Professional invoices with zero effort. Our clients love the automated payment options.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Service Provider',
      content: 'The financial analytics help us track our business performance. Highly recommended!',
      rating: 5
    }
  ]

>>>>>>> cursor/fix-errors-and-merge-to-main-33de
  return (
    <>
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>- Zion Tech Group</title>
        <meta const name = "description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." / / />
        <meta name="keywords" content="AI solutions, IT services, Zion Tech Group" / / />
        <meta property="og:title" content=" - Zion Tech Group" / / />
        <meta property="og:description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." / / />
        <meta property="og:type" content="website" / / />
        <meta property="og:url" content="https://ziontechgroup.com/ai-invoice-generator" / / />
      </Helmet>
    </>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        {/* Hero Section */}
    <>
        <section className="py-20" />
          <div className="container mx-autopx-4text-center">
<<<<<<< HEAD
            <h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent"   / />
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto">
=======
        </div>
            <h1 className="text-5 xl md:text-6 xl font-boldtext-whitemb-6" />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent"   / />
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto" />
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              Professional  services by Zion Tech Group. Expert solutions tailored to your business needs.
    <>
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-centermb-12">
<<<<<<< HEAD
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" >
          Get Started
                
          <ArrowRight className="ml-2group-hover:translate-x-1transition-transform"  />
        </Link>
=======
        </div>
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" />
    </>
                Get Started
    <>
                <ArrowRight className="ml-2group-hover:translate-x-1transition-transform" />
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More
              </Link>
            </div>
        </section>
    </>

        {/* CTA Section */}
    <>
        <section className="py-20" />
          <div className="containermx-autopx-4">
<<<<<<< HEAD
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center">
              <h2 className="text-4xl font-bold text-white mb-6"  />Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xlmx-auto">
              Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
=======
        </div>
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center">
        </div>
              <h2 className="text-4 xl font-boldtext-whitemb-6">Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xlmx-auto" />
    </>
                Contact us to learn more about our solutions and how we can help your business.
    <>
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25">Contact Us
                </Link>
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">View All Services
                </Link>
              </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Page;
;
<<<<<<< HEAD
=======
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-33de
