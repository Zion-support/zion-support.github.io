'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Shield,;
  Search,;
  AlertTriangle,;
  CheckCircle,;
  BarChart,;
  Clock,;
  Users,;
  Zap,;
  Phone,;
  Mail,;
  MapPin,;
  ArrowRight,;
  Brain,;
  Globe,;
  Lock,;
  Activity,;
  TrendingUp,;
  Settings,;
  Database,;
  Target,;
  Eye}
} from 'lucide-react';
const PenetrationTestingPage: React.FC = () => {
  const features = [
    {
      icon: Search, title: 'Comprehensive Vulnerability Assessment', description: 'Thorough testing of your systems to identify security weaknesses and potential attack vectors.'},
    {
      icon: Target, title: 'Simulated Attack Scenarios', description: 'Real-world attack simulations to test your defenses and response capabilities.'},
    {
      icon: BarChart, title: 'Detailed Security Reports', description: 'Comprehensive reports with prioritized recommendations and remediation guidance.'},
    {
      icon: Zap, title: 'Expert Security Analysis', description: 'Professional security experts conduct thorough testing using industry-standard methodologies.'}
    }
  ];
  const benefits = [
    'Identify security vulnerabilities before attackers do',;
    'Comply with industry regulations and standards',;
    'Improve your security posture and defenses',;
    'Receive detailed remediation recommendations',;
    'Test incident response procedures',;
    'Validate security controls effectiveness',;
    'Expert analysis and reporting',;
    'Ongoing security improvement guidance'];
  return (
    <></>
      <Helmet>
        <title>Penetration Testing Services - Zion Tech Group | Security Assessment</title>
        <meta name="description" content="Professional penetration testing services by Zion Tech Group. Comprehensive security assessments, vulnerability testing, and expert security analysis." />;
        <meta name="keywords" content="penetration testing, security assessment, vulnerability testing, security audit, Zion Tech Group" />;
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
                Penetration Testing Services;
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
                Identify and fix security vulnerabilities before attackers exploit them.;
                Our expert penetration testing services help secure your systems and protect your business.;
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">;
                  <Shield className="mr-2 h-5 w-5" />;
                  Schedule Assessment;
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">;
                  <Phone className="mr-2 h-5 w-5" />;
                  Call (302) 464-0950;
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                Our Penetration Testing Approach;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                We use industry-standard methodologies and cutting-edge tools to thoroughly assess your security posture.;
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (}
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                    <feature.icon className="h-6 w-6 text-white" />;
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                Key Benefits;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Strengthen your security defenses with our comprehensive penetration testing services.;
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              {benefits.map((benefit, index) => (}
                <div key={index} className="flex items-start space-x-3"></div>
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />;
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                Ready to Test Your Security?;
              </h2>
              <p className="text-xl text-purple-100 mb-8">;
                Contact our security experts to schedule a comprehensive penetration test for your systems.;
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">;
                  <Phone className="mr-2 h-5 w-5" />;
                  Call (302) 464-0950;
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">;
                  <Mail className="mr-2 h-5 w-5" />;
                  Email Us;
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )};
export default PenetrationTestingPage
