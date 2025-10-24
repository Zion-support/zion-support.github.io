import React from 'react';
import { Link  } from "react-router-dom";
import { Phone, Mail, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, CheckCircle, TrendingUp, Users, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Bot, Music, Video, CreditCard, Car, Train, Home, Heart, GraduationCap  } from "lucide-react";
const HomePage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'></div>
      {/* Hero Section *,/
}
      <section className='relative overflow-hidden'></section>
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24'></div>
          <div className='text-center'></div>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'></h1>
              Zion Tech Group
            </h1>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'></p>
              Advanced AI and IT Solutions for Modern Enterprises
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
              <Link
                to='/contact' className='bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors'
              ></Link>
                Get Started
              </Link>
              <Link
                to='/about' className='border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors'
              ></Link>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section *,/}
      <section className='py-20 px-4'></section>
        <div className='max-w-7xl mx-auto'></div>
          <h2 className='text-4xl font-bold text-white text-center mb-12'>Our Services</h2>
          <div className='grid md: grid-cols-2 lg:grid-cols-3 gap-8'></div>
            <div className='bg-slate-800/50 p-6 rounded-lg'></div>
              <Brain className='w-12 h-12 text-cyan-400 mb-4' /></Brain>
              <h3 className='text-xl font-semibold text-white mb-2'>AI Solutions</h3>
              <p className='text-gray-300'>Cutting-edge artificial intelligence solutions for your business needs.</p>
            </div>
            <div className='bg-slate-800/50 p-6 rounded-lg'></div>
              <Shield className='w-12 h-12 text-cyan-400 mb-4' /></Shield>
              <h3 className='text-xl font-semibold text-white mb-2'>Cybersecurity</h3>
              <p className='text-gray-300'>Comprehensive security solutions to protect your digital assets.</p>
            </div>
            <div className='bg-slate-800/50 p-6 rounded-lg'></div>
              <Cloud className='w-12 h-12 text-cyan-400 mb-4' /></Cloud>
              <h3 className='text-xl font-semibold text-white mb-2'>Cloud Services</h3>
              <p className='text-gray-300'>Scalable cloud infrastructure and migration services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section *,/}
      <section className='py-20 px-4 bg-slate-800/30'></section>
        <div className='max-w-4xl mx-auto text-center'></div>
          <h2 className='text-4xl font-bold text-white mb-6'>Ready to Get Started?</h2>
          <p className='text-xl text-gray-300 mb-8'></p>
            Contact us today to discuss your AI and IT needs.
          </p>
          <div className='flex flex-col sm: flex-row gap-4 justify-center'></div>
            <a
              href='tel:+1234567890' className='flex items-center justify-center gap-2 bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors'
            ></a>
              <Phone className='w-5 h-5' /></Phone>
              Call Us
            </a>
            <a
              href='mailto:info@ziontech.com' className='flex items-center justify-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors'
            ></a>
              <Mail className='w-5 h-5' /></Mail>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );,
};

export default HomePage;