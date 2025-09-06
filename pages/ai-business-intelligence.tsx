
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Brain, BarChart3, TrendingUp, Users, Target, Zap;
  Shield, Database, Globe, ArrowRight, CheckCircle, Star
 } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

import Head from 'next/head',
import { motion } from 'framer-motion',
import {
  Brain, BarChart3, TrendingUp, Users, Target, Zap,
  Shield, Database, Globe, ArrowRight, CheckCircle, Star
} from 'lucide-react',
import EnhancedNavigation from '../components/EnhancedNavigation',
import EnhancedFooter from '../components/EnhancedFooter',

export default function AIBusinessIntelligencePage() {

  const features = [
    {

  const benefits = [
    "Increase revenue by 25-40% through data-driven insights",
    "Reduce operational costs by 15-30% with process optimization",
    "Improve customer retention by 20-35% with predictive analytics",
    "Accelerate decision-making by 60% with real-time data",
    "Reduce manual reporting time by 80% with automation",
    "Achieve 99.9% data accuracy with AI-powered validation"
  ],
  const useCases = [
    {
      industry: "Retail & E-commerce",
      description: "Customer segmentation, inventory optimization, and demand forecasting",
      results: "35% increase in conversion rates, 25% reduction in inventory costs"
    },
    {
      industry: "Financial Services",
      description: "Risk assessment, fraud detection, and portfolio optimization",
      results: "40% improvement in risk prediction, 60% faster fraud detection"
    },
    {
      industry: "Healthcare",
      description: "Patient outcome prediction, resource allocation, and treatment optimization",
      results: "30% improvement in patient outcomes, 20% reduction in operational costs"
    },
    {
      industry: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      results: "45% reduction in downtime, 35% improvement in product quality"
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const pricing = [
    {
      plan: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Basic predictive analytics",
        "5 customizable dashboards",
        "Standard reporting",
        "Email support",
        "Up to 10 users"
      ],
      popular: false
    },
    {
      plan: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Advanced features for growing businesses",
      features: [
        "Advanced predictive analytics",
        "Unlimited dashboards",
        "Custom reporting",
        "Priority support",
        "Up to 50 users",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "",
      description: "Full-scale solution for large organizations",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "Dedicated support team",
        "Unlimited users",
        "On-premise deployment",
        "Custom training",
        "SLA guarantees"
      ],
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
        <title>AI Business Intelligence - Zion Tech Group</title>

          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Business Intelligence
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform raw data into actionable insights with our advanced AI platform. 
              Make data-driven decisions, predict future trends, and optimize every aspect of your business 
              with machine learning-powered analytics.
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

                </ul>

                <a

                  href="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </a>
              </motion.div>

          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses already using AI to drive growth and efficiency.
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

