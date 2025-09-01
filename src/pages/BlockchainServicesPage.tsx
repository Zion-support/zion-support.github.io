import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Link,
  Coins,
  Shield,
  Zap,
  Database,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Lock,
  Network,
  Wallet,
  BarChart3,
  Star,
  Award,
  Target,
  Rocket,
  Crown,
  Sparkles,
  ChevronRight,
  Users,
  Clock,
  Check
 } from 'lucide-react';

        "Network monitoring";
      ],;
      icon: Globe,;
      category: "Interoperability",;
      badge: "Advanced",;
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500";
    };
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: blockchainServices.length },
              }
            ].map((feature, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                animate = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"

                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">;
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Let's discuss how blockchain technology can transform your business.
            Our experts are ready to help you navigate the blockchain landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">
              Start Your Project
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
              Schedule Consultation
            </button>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};

export default BlockchainServicesPage;
}}}