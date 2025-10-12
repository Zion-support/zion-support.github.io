'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCirc l e, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, DollarSign, TrendingUp, PieChart, BarChart3, Receipt, CreditCard, Smartphone, Clock, Globe, Target, Lightbulb, Bot, Cpu, Database, Lock, Eye, Search, Filter, Download, Upload, Share, MessageCirc l e, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForwa r d, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriang l e, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, FileText, Package } from 'lucide-react';

export default function AIExpenseTrack e r() {
  constfeatures= [
    {
      icon: <BrainclassName="w-6h-6text-cyan-400" />,
      title: 'AI-PoweredExpenseRecogniti o n',
      description: 'Automatical l y categorize and track expenses using advanced machine learning algorithms';
    },
    {
      icon: <ZapclassName="w-6h-6text-purple-400" />,
      title: 'Real-timeTracking',
      description: 'Track expenses in real-timewithinstant categorizati o n and budget alerts';
    },
    {
      icon: <ShieldclassName="w-6h-6text-yellow-400" />,
      title: 'Secure & Private',
      description: 'Bank-levelsecuritywith end-to-endencryptionto protect your financial data';
    },
    {
      icon: <BarChart3className="w-6h-6text-green-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensi v e insights into spending patterns, trends, and budget optimizati o n';
    }
  ];

return (
    <>
      <Helmet></Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI expense tracker, financial management, automation, Zion Tech Group" />
        <metaproperty="og:title" content="AI Expense Tracker - Zion Tech Group" />
        <metaproperty="og:description" content="Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <metaproperty="og:type" content="website" />
        <metaproperty="og:url" content="https://ziontechgro u p.com/ai-expense-tracker" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="containermx-autopx-4text-center">
            <h1 className="text-5xlmd:text-6xlfont-boldtext-whitemb-6">
              <span className="bg-gradient-to-rfrom-cyan-400via-purple-400to-pink-400bg-clip-texttext-transparent">
                AI Expense Tracker;
              </span>
            </h1>
            <p className="text-xltext-gray-300mb-8max-w-3xlmx-auto">
              Revolutioni z e your expense management with AI-poweredtracking.;
              Automate categorizati o n, optimize budgets, and gain valuable insights into your spending.;
            </p>
            <div className="flexflex-colsm:flex-rowgap-4justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-center"
              >
                Get Started;
                <ArrowRight className="w-5h-5ml-2" />
              </Link>
              <Link
                to="/services";
                className="borderborder-cyan-400text-cyan-400px-8py-4rounded-lgfont-semiboldhover:bg-cyan-400hover:text-whitetransition-allduration-300flexitems-centerjustify-center"
              >
                View All Services;
              </Link>
            </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Why Choose Our AI Expense Tracker?;
              </h2>
              <p className="w-5h-5ml-2">Our advanced AI technology helps you manage your finances more efficient l y;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {features.map((feature, index) => ())
                <divkey={index} className="bg-slate-800/50backdrop-blur-smborderborder-slate-700rounded-xlp-8text-centerhover:border-cyan-500/50transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {feature.icon}
                  </div>
                  <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="containermx-autopx-4">
            <h2 className="text-4xl font-boldtext-whitetext-centermb-16">
              Powerful Features;
            </h2>
            <div className="gridmd:grid-cols-2lg:grid-cols-4gap-8">
              {features.map((feature, index) => ())
                <divkey={index} className="bg-white/10backdrop-blur-smrounded-xlp-6hover:bg-white/20transition-allduration-300">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xlfont-semiboldtext-whitemb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="containermx-autopx-4text-center">
            <h2 className="text-4xl font-boldtext-whitemb-6">
              Ready to Transform Your Expense Management?;
            </h2>
            <p className="text-xltext-gray-300mb-8max-w-2xlmx-auto">
              Join thousands of users already using our AI-poweredexpensetracking solutions to better manage their finances.;
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300inline-flexitems-center"
            >
              Contact Us Today;
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
