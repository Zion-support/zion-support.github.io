<<<<<<< HEAD
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {Shield,}
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

  Eye;} from 'lucide-react'
const PenetrationTestingPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Comprehensive Vulnerability Assessment',
      description: 'Thorough testing of your systems to identify security weaknesses and potential attack vectors.',},
    {icon: Target,
      title: 'Simulated Attack Scenarios',
      description: 'Real-world attack simulations to test your defenses and response capabilities.',},
    {icon: BarChart,
      title: 'Detailed Security Reports',
      description: 'Comprehensive reports with prioritized recommendations and remediation guidance.',},
    {icon: Zap,
      title: 'Expert Security Analysis',
      description: 'Professional security experts conduct thorough testing using industry-standard methodologies.',}}
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
return (
    <>
  <Helmet />
        <title>Penetration Testing Services - Zion Tech Group | Security Assessment</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
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
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
                <button>
                  <Shield>
                  Schedule Assessment;
                </button>
                <button>
                  <Phone>
                  Call (302) 464-0950,
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
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
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (
                <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div>,
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                    <feature />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
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
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
              {benefits.map((benefit, index) => (
                <div key={index}className="flex items-start space-x-3"></div>
                  <CheckCircle />
                  <p className="text-gray-300 text-lg">{benefit</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12"></div>,
              <h2>Ready to Test Your Security?</h2>
              </h2>
              <p>Contact our security experts to schedule a comprehensive penetration test for your systems.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
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
          </div>
        </section>
      </div>
    </>
  ),
};

export default PenetrationTestingPage;

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
