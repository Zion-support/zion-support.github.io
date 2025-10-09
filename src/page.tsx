import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, CheckCircle, TrendingUp, Users, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Bot, Music, Video, CreditCard, Car, Train, Home, Heart, GraduationCap } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */ }
      <section className="relative overflow-hidden"></section>
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI and IT Solutions for Modern Enterprises
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link
                to="/services"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */ }
      <section className="py-24 bg-white"></section>
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
              Our Services
            </h2>
            </h2>
              Comprehensive AI and IT solutions to transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            <div className="bg-gray-50 p-8 rounded-lg"></div>
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-6"></div>
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Solutions</h3>
              <p className="text-gray-600">
                Advanced artificial intelligence solutions to automate and optimize your business processes.
              </p>
            </div>

            </div></div>
              </div></div>
                </div>
              </div>
              </div>Cloud Services</h3>
              <p className="text-gray-600">
                Scalable cloud infrastructure and migration services for modern businesses.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg"></div>
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-6"></div>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity</h3>
              <p className="text-gray-600">
                Comprehensive security solutions to protect your digital assets and data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */ }
      <section className="py-24 bg-gray-900"></section>
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
            Ready to Transform Your Business?
          </h2>
          </h2>
            Contact us today to discuss how our AI and IT solutions can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            </div>
              Contact Us
            </Link>
            <a
              href="tel:+1234567890"
              className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </section>
  );
 };

export default HomePage;