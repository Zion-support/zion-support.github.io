'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, DollarSign, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';
const FinancialITPage: React.FC = () => {
    const features = const features = const features = [
    {
      icon: DollarSign,
      title: 'SOX Compliance',;
      description: 'Full SOX compliance solutions with automated controls, monitoring, and reporting capabilities.',;
      benefits: ['Automated controls', 'Compliance reporting', 'Audit trails'];        <title>Financial IT Solutions | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation>
      {/* Hero Section */}
      <section className="py-20 px-4">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2></h2></h2>
              <p className="text-xl text-gray-300">Section description</p></p></p>
            </div>
          </div>)
        </section>)
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" /></div></div></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={ animationDelay: '1s' } /></div></div></div>
        <div className="relative max-w-7xl mx-auto text-center"></div></div></div>
          <h1>
            Financial Services;
            </h1></h1><span>
              IT Solutions;
            </span></span></span>
          </h1>
          <p></p>
            Specialized IT solutions for financial services with SOX compliance, security, and regulatory requirements.;
            Built for banks, credit unions, investment firms, and fintech companies.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center" / /></div>
            <button></button>
              Get Started Today
              <ArrowRight></ArrowRight>            </button>
            <button></button>
              Schedule Demo,
            </button></button></button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="text-center mb-16" / /></div>
            <h2 className="text-4xl font-bold text-white mb-4">Financial IT Solutions</h2>
            <p></p>
              Comprehensive IT solutions designed specifically for financial services industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" / /></div>
            {features.map((feature, index) => ()
    feature.benefits.map((benefit, benefitIndex) => ()                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="text-center mb-16" / /></div>
            <h2></h2>
              Financial Services
            </h2>
            <p></p>              Comprehensive IT solutions for all aspects of financial services and banking operations.
            </p></p></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" / /></div>
            {
    services.map((service, index) => ()            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="text-center mb-16" / /></div>
            <h2></h2>
              Why Choose Our Financial IT Solutions?
            </h2>
            <p></p>              Experience the benefits of modern financial technology with our proven solutions.
            </p></p></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" / /></div>
            {benefits.map((benefit, index) => ()            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-4xl mx-auto text-center" / /></div>
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Financial IT Excellence?</h2>
          <p></p>
            Join leading financial institutions using our specialized IT solutions for compliance and security
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center" / /></div>
            <button></button>
              Start Free Trial
            </button>
            <button></button>
              Contact Sales
            </button>          </div>
        </div>
      </section>
      <Footer / /></Footer>
  ),
};

export default FinancialITPage;
