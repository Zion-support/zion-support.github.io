'use client';

import React from 'react';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const PagePage: React.FC = () => {
  return (
=======
import { Helmet } from 'react-helmet-async';
import {Zap}
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

  Bot}} from 'lucide-react'
const ProcessAutomationPage: React.FC = () => {
    const features = [
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Streamline your business processes with intelligent automation that reduces manual work and errors.'},
    {icon: Bot,
      title: 'AI-Powered Automation',
      description: 'Leverage artificial intelligence to create smart, adaptive automation solutions for complex processes.'},
    {icon: Settings,
      title: 'Custom Integration',
      description: 'Seamlessly integrate with your existing systems and tools for a unified automation experience.'},
    {icon: BarChart,
      title: 'Performance Monitoring',
      description: 'Track and optimize your automated processes with real-time analytics and reporting.'}}
  ]
  ];;
const benefits = [
  ]
  const benefits = [
    'Reduce manual work and human errors',
    'Increase operational efficiency',
    'Lower operational costs',
    'Improve process consistency',

    'Scale your business operations',

    'Enhance employee productivity',

    '24/7 automated operations',

    'Custom automation solutions'
  ]
return(<>)
      <Helmet><title>Process Automation Services - Zion Tech Group | Workflow Automation</title>
    'Custom automation solutions'
  ]
return (
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5
    <>

<<<<<<< HEAD
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive Page solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 1</h3>
                  <p className="text-gray-300">Description of service 1</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 2</h3>
                  <p className="text-gray-300">Description of service 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};
=======
      <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20pb-16px-4">
        </section>
        {/* Hero Section */} <section className="py-20px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-boldtext-whitemb-4">Section Title</h2>
        {/* Hero Section */}
        <section className="py-20px-4">
          </section>< className="$2/><divclassName="text-center mb-16">
              </div><h2 className="text-4xl font-boldtext-whitemb-4">Section Title</h2>
              <p className="text-xltext-gray-300">Section description</p>
            </div>
        </div>
      </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1>Process Automation Services;</h1>
              </h1>
              <p>Streamline your business operations with intelligent automation solutions.;</p>
                Reduce costs, improve efficiency, and scale your business with AI-powered process automation.
              </p>
              <div className="flexflex-colsm:flex-row gap-4 justify-center"></div>,
                <button>
                  <Zap>
                  Automate Now;
                </button>
                <button>
                  </button><Phone>
                  Call (302) 464-0950,
                </button>
              </div>
            </div>
        </div>
      </section>
        {/* Features Section */} <section className="py-20px-4">
          <section>
        <div>
          <div>
            <h2>Section Title</h2>
            <p>Section description</p>
          </div>
        </div>
      </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Our Automation Solutions;</h2>
              </h2>
              <p>We provide comprehensive process automation services to transform your business operations.,</p>
              </p>
            </div>
            <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (
                <div key={index}className="bg-white/10backdrop-blur-smrounded-xlp-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div>,
                  <div className="flexitems-centerjustify-centerw-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                    <feature />
                  <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description</p>}</p>
                </div>
              ))}
            </div>
        </div>
      </section>
        {/* Benefits Section */} <section className="py-20px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xlmd:text-6xlfont-boldtext-white mb-6">Process Automation Services
              <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">
                Streamline your business operations with intelligent automation solutions. 
                Reduce costs, improve efficiency, and scale your business with AI-powered process automation.
              <div className="flexflex-colsm:flex-rowgap-4 justify-center">
                <button className="bg-gradient-to-rfrom-cyan-500to-purple-600text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Zap className="mr-2h-5w-5" />
                  Automate Now
                <button className="borderborder-white/20text-whitepx-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                  <Phone className="mr-2h-5w-5" />
                  Call (302) 464-0950
        {/* Features Section */}
        <section$1>
        <div$2>
            <div className="text-center mb-16">
              <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">Our Automation Solutions
              <p className="text-xltext-gray-300max-w-3xlmx-auto">
                We provide comprehensive process automation services to transform your business operations.
            <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10backdrop-blur-smrounded-xlp-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flexitems-centerjustify-centerw-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                    <feature.icon className="h-6w-6text-white" />
                  <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}
                  <p className="text-gray-300">{feature.description}
              ))}
        {/* Benefits Section */}
        <section className="py-20px-4">
          </section>< className="$2/><divclassName="text-center mb-16">
              </div><h2 className="text-4xl font-boldtext-whitemb-4">Section Title</h2>
              <p className="text-xltext-gray-300">Section description</p>
            </div>
        </div>
      </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Key Benefits;</h2>
              </h2>
              <p>Transform your business with our comprehensive process automation services.,</p>
              </p>
            </div>
            <div className="gridgrid-cols-1md:grid-cols-2gap-6"></div>,
              {benefits.map((benefit, index) => (
                <div key={index}className="flexitems-startspace-x-3"></div>
                  <CheckCircle />
                  <p className="text-gray-300text-lg">{benefit</p>}</p>
                </div>
              ))}
            </div>
        </div>
      </section>
        {/* CTA Section */} <section$1>
        <div$2>
            <div className="text-center mb-16">
              <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">Key Benefits
              <p className="text-xltext-gray-300max-w-3xlmx-auto">
                Transform your business with our comprehensive process automation services.
            <div className="gridgrid-cols-1md:grid-cols-2gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flexitems-startspace-x-3">
                  <CheckCircle className="h-6w-6text-purple-400mt-1 flex-shrink-0" />
                  <p className="text-gray-300text-lg">{benefit}
              ))}
        {/* CTA Section */}
        <section className="py-20px-4">
          </section>< className="$2/><divclassName="text-center mb-16">
              </div><h2 className="text-4xl font-boldtext-whitemb-4">Section Title</h2>
              <p className="text-xltext-gray-300">Section description</p>
            </div>
          ))
        </section>

        {/* CTA Section */}
        <section$1>
        <div$2>
            <div className="bg-gradient-to-rfrom-purple-600to-blue-600rounded-2xl p-8 md:p-12">
              <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
          <div className="max-w-4xlmx-autotext-center"></div>
            <div className="bg-gradient-to-rfrom-purple-600to-blue-600rounded-2xl p-8 md: p-12"></div>,
              <h2>Ready to Automate Your Processes?</h2>
              </h2>
              <p>Contact our automation experts to discuss your process optimization needs.</p>
                Ready to Automate Your Processes?
              </h2>
              <p></p>
                Contact our automation experts to discuss your process optimization needs.
              </p>
              <div className="flexflex-colsm:flex-row gap-4 justify-center"></div>,
                <button>
                  <Phone>
                  Call (302) 464-0950;
                </button>
                <button>
                  <Mail>
                  Email Us;
                </button>
              </div>
            </div>
          ))
        </section>
      </div>

  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5

export default PagePage;
