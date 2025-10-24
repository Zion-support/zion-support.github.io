'use client';

import React from 'react';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const PagePage: React.FC = () => {
  return (
=======
import { Helmet } from 'react-helmet-async';
import {Shield}
  Search,
  AlertTriangle,
  CheckCircle,
  BarChart,
  Clock,
  Users,
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Brain,
  Globe,
  Lock,
  Activity,
  TrendingUp,

  Settings,

  Database,

  Target,

  Eye}} from 'lucide-react'
const PenetrationTestingPage: React.FC = () => {
    const features = [
    {
      icon: Search,
      title: 'Comprehensive Vulnerability Assessment',
      description: 'Thorough testing of your systems to identify security weaknesses and potential attack vectors.'},
    {icon: Target,
      title: 'Simulated Attack Scenarios',
      description: 'Real-world attack simulations to test your defenses and response capabilities.'},
    {icon: BarChart,
      title: 'Detailed Security Reports',
      description: 'Comprehensive reports with prioritized recommendations and remediation guidance.'},
    {icon: Zap,
      title: 'Expert Security Analysis',
      description: 'Professional security experts conduct thorough testing using industry-standard methodologies.'}}
  ]
  ];;
const benefits = [
  ]
  const benefits = [
    'Identify security vulnerabilities before attackers do',
    'Comply with industry regulations and standards',
    'Improve your security posture and defenses',
    'Receive detailed remediation recommendations',

    'Test incident response procedures',

    'Validate security controls effectiveness',

    'Expert analysis and reporting',

    'Ongoing security improvement guidance'
  ]
return(<>)
      <Helmet><title>Penetration Testing Services - Zion Tech Group | Security Assessment</title>
    'Ongoing security improvement guidance'
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
              <h1>Penetration Testing Services;</h1>
              </h1>
              <p>Identify and fix security vulnerabilities before attackers exploit them.;</p>
                Our expert penetration testing services help secure your systems and protect your business.
              </p>
              <div className="flexflex-colsm:flex-row gap-4 justify-center"></div>,
                <button>
                  <Shield>
                  Schedule Assessment;
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
              <h2>Our Penetration Testing Approach;</h2>
              </h2>
              <p>We use industry-standard methodologies and cutting-edge tools to thoroughly assess your security posture.,</p>
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
              <h1 className="text-5xlmd:text-6xlfont-boldtext-white mb-6">Penetration Testing Services
              <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">
                Identify and fix security vulnerabilities before attackers exploit them. 
                Our expert penetration testing services help secure your systems and protect your business.
              <div className="flexflex-colsm:flex-rowgap-4 justify-center">
                <button className="bg-gradient-to-rfrom-cyan-500to-purple-600text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Shield className="mr-2h-5w-5" />
                  Schedule Assessment
                <button className="borderborder-white/20text-whitepx-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                  <Phone className="mr-2h-5w-5" />
                  Call (302) 464-0950
        {/* Features Section */}
        <section$1>
        <div$2>
            <div className="text-center mb-16">
              <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">Our Penetration Testing Approach
              <p className="text-xltext-gray-300max-w-3xlmx-auto">
                We use industry-standard methodologies and cutting-edge tools to thoroughly assess your security posture.
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
              <p>Strengthen your security defenses with our comprehensive penetration testing services.,</p>
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
                Strengthen your security defenses with our comprehensive penetration testing services.
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
              <h2>Ready to Test Your Security?</h2>
              </h2>
              <p>Contact our security experts to schedule a comprehensive penetration test for your systems.</p>
                Ready to Test Your Security?
              </h2>
              <p></p>
                Contact our security experts to schedule a comprehensive penetration test for your systems.
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
