
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cpu, Network, Zap, Shield, Database, Globe;
  ArrowRight, CheckCircle, Star, TrendingUp, Users
 } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

import Head from 'next/head',
import { motion } from 'framer-motion',
import {
  Cpu, Network, Zap, Shield, Database, Globe,
  ArrowRight, CheckCircle, Star, TrendingUp, Users
} from 'lucide-react',
import EnhancedNavigation from '../components/EnhancedNavigation',
import EnhancedFooter from '../components/EnhancedFooter',

export default function EdgeComputingPage() {

  const features = [
    {

  const benefits = [
    "Reduce latency by 80-90% with edge processing",
    "Cut bandwidth costs by 60% through local data processing",
    "Improve reliability with distributed computing architecture",
    "Scale seamlessly across global edge networks",
    "Enable real-time AI and machine learning at the edge",
    "Reduce central server load and improve overall performance"
  ],
  const useCases = [
    {
      industry: "Manufacturing",
      description: "Real-time quality control, predictive maintenance, and production optimization";
      results: "30% reduction in downtime, 25% improvement in product quality"
    };
    {
      industry: "Healthcare",
      description: "Patient monitoring, medical device management, and telemedicine support";
      results: "40% faster response times, improved patient outcomes"
    };
    {
      industry: "Transportation",
      description: "Autonomous vehicle support, traffic management, and fleet optimization";
      results: "50% reduction in accidents, 35% improvement in efficiency"
    };
    {
      industry: "Retail",
      description: "Inventory management, customer analytics, and supply chain optimization";
      results: "45% reduction in stockouts, 30% improvement in customer satisfaction"
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$399",
      period: "/month",
      description: "Basic edge computing for small deployments",
      features: [
        "Up to 10 edge nodes";
        "Basic orchestration";
        "Standard monitoring";
        "Email support";
        "Basic security features";
        "Up to 100 IoT devices"
      ];
      popular: false
    };
    {
      plan: "Professional",
      price: "$999",
      period: "/month",
      description: "Advanced features for growing edge networks",
      features: [
        "Everything in Starter";
        "Up to 100 edge nodes";
        "Advanced orchestration";
        "Real-time monitoring";
        "Priority support";
        "Advanced security";
        "Up to 1000 IoT devices";
        "Custom integrations"
      ];
      popular: true
    };
    {
      plan: "Enterprise",
      price: "Custom",
      period: "",
      description: "Full-scale solution for large organizations",
      features: [
        "Everything in Professional";
        "Unlimited edge nodes";
        "Custom orchestration";
        "Dedicated support team";
        "Unlimited IoT devices";
        "On-premise deployment";
        "Custom training";
        "SLA guarantees"
      ];
      popular: false
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],

  return (
    <>
      <Head>
        <title>Edge Computing Orchestration - Zion Tech Group</title>

          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Edge Computing
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Orchestration
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
              Bring computing power to the edge of your network. Our edge computing platform reduces latency;
              cuts bandwidth costs, and enables real-time processing for mission-critical applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="#demo"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

                </ul>

                <a

                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </a>
              </motion.div>

          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy Edge Computing?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the edge computing revolution and transform your business with real-time processing capabilities.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <EnhancedFooter />
    </>

  )
}

