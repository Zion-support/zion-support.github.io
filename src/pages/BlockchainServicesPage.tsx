import React, { useState } from 'react';
export default BlockchainServicesPage;
import {;
import { motion } from 'framer - motion';
;
;
  Link,;
  Coins,;
  Shield,;
  Zap,;
  Database,;
  Globe,;
  TrendingUp,;
  CheckCircle,;
  ArrowRight,;
  Lock,;
  Network,;
  Wallet,;
  BarChart3,;
  Star,;
  Award,;
  Target,;
  Rocket,;
  Crown,;
  Sparkles,;
  ChevronRight,;
  Users,;
  Clock,;
  Check;
 } from 'lucide - react';
;
        "Network monitoring";
      ],;
      icon: Globe,;
      category: "Interoperability",;
      badge: "Advanced",;
      image: "https://images.unsplash.com / photo - 1639762681485 - 074b7f938ba0?auto = format & fit = crop & w=800 & h=500";
    };
  ];

  const blockchainPlatforms = [;
    'Ethereum', 'Polygon', 'Solana', 'Cardano', 'Polkadot', 'Hyperledger', 'Corda', 'Quorum';
  ];
;
}};
                animate = {;
  { opacity: 1,;
  y: 0 ;
;
  const itemVariants = {};
    hidden: { opacity: 0, y: 20 },;
    visible: {};
}
    }
  }
  return (;
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">;
      <div className="container mx-auto px-4 py-12">;
        {/* Hero Section */}
        <div>Broken JSX</div>
          className="text-center mb-16">;
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">;
            <Database className="w-10 h-10 text-white" />;
          </div>;
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">;
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
              Blockchain;
            </span> Services;
          </h1>;
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">;
            Transform your business with blockchain technology. From smart contracts to DeFi solutions, ;
            we help you build secure, transparent, and decentralized applications.;
          </p>;

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">;
            <div className="text-center">;
              <div className="text-3xl font-bold text-zion-cyan mb-2">100%</div>;
              <div className="text-zion-slate-light">Transparency</div>;
            </div>;
            <div className="text-center">;
              <div className="text-3xl font-bold text-zion-purple mb-2">Immutable</div>;
              <div className="text-zion-slate-light">Data Security</div>;
            </div>;
            <div className="text-center">;
              <div className="text-3xl font-bold text-zion-blue mb-2">Decentralized</div>;
              <div className="text-zion-slate-light">Architecture</div>;
            </div>;
          </div>;
        </motion.div>;

        {/* Blockchain Services Grid */}
        <div>Broken JSX</div>
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">;
          {};
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">;
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center text-white mb-4">;
                  {service.icon}
                </div>;
;
                <h3 className="text - xl font - bold text - white mb - 4">{feature.title}</h3>;
                <p className="text - zion - slate - light leading - relaxed">{feature.description}</p>;
              </motion.div>;) ) };
          </div>;
        </div>;
      </section>;
;
      {/* CTA Section */};
      <section className="py - 20 bg - gradient - to - r from - zion - slate - dark to - zion - blue - dark">;
        <div className="container mx - auto px - 4 text - center">;
          <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
            Ready to Build the Future?;
          </h2>;
          <p className="text - xl text - zion - slate - light mb - 8 max - w-3xl mx - auto">;
            Let's discuss how blockchain technology can transform your business.;
            Our experts are ready to help you navigate the blockchain landscape.;
          </p>;
;
          <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
            <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" className="px - 8 py - 4 bg - gradient - to - r from - zion - cyan to - zion - purple text - white rounded - xl font - semibold text - lg hover:scale - 105 transition - all duration - 300 shadow - 2xl hover:shadow - zion - cyan / 25">;
              Start Your Project;
            </button>;
            <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" className="px - 8 py - 4 border border - zion - cyan text - zion - cyan rounded - xl font - semibold text - lg hover:bg - zion - cyan hover:text - white transition - all duration - 300">;
              Schedule Consultation;
            </button>;
          </div>;
        </div>;
      </section>;
    </div>;) ;
};
;
}}}