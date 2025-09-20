import React from "react"
import { motion     } from "framer-motion";
import { Link     } from "react-router-dom";
import {
  Brain;
  Shield;
  Cloud;
  Zap;
  Globe;
  Cpu;
  Database;
  Network;
  Lock;
  Code;
  Rocket;
  Users;
  BarChart3;
  FileImage;
  TrendingUp;
  MessageCircle;
  Video;
  FileText;
  Heart;
  ShoppingCart;
  Settings;
  HelpCircle;
  BookOpen;
  Briefcase;
  Award;
  Target;
  Lightbulb;
  ShieldCheck;
  Server;
  Smartphone;
  Monitor;
  Wifi;
  Bluetooth;
  Satellite;
  Atom;
  Dna;
  Microscope;
  Flask;
  TestTube;
  Syringe;
  Stethoscope;
  HeartPulse;
  BrainCircuit;
  Eye;
  Ear;
  Hand;
  Foot;
  Bone;
  Tooth;
  Pill;
  Bandage;
  Thermometer;
  Scale;
  Calculator;
  ChartBar;
  PieChart;
  LineChart;
  Activity;
  TrendingDown;
  Minus;
  Plus;
  Equal;
  Divide;
  Percent;
  DollarSign;
  Euro;
  Pound;
  Yen;
  Bitcoin;
  Ethereum;
  CreditCard;
  Wallet;
  Banknote;
  Coins;
  PiggyBank;
  Safe;
  Vault;
  LockKeyhole;
  Key;
  Fingerprint;
  QrCode;
  Barcode;
  Scan;
  Camera;
  VideoOff;
  Mic;
  MicOff;
  Volume2;
  VolumeX;
}
}
}
}
 } from "lucide-react";
const quickLinks = [
  {
  tit,
  l: e: "AI Services",descripti,
  o: n: "Artificial Intelligence & Machine Learning",ic,
  o: n: "🤖",li,
  n: k: "/ai-services",col,
  o: r: "from-purple-500 to-indigo-600"
},
  {
  tit,
  l: e: "Micro SAAS",descripti,
  o: n: "Cloud-based Software Solutions",ic,
  o: n: "☁️",li,
  n: k: "/micro-saas",col,
  o: r: "from-cyan-500 to-blue-600"
},
  {
  tit,
  l: e: "IT Services",descripti,
  o: n: "Infrastructure & Technical Consulting",ic,
  o: n: "⚡",li,
  n: k: "/it-services",col,
  o: r: "from-amber-500 to-orange-600"
},
  {
  tit,
  l: e: "Contact Us",descripti,
  o: n: "Get in touch with our team",ic,
  o: n: "📞",li,
  n: k: "/contact",col,
  o: r: "from-green-500 to-emerald-600"
},
  ]
const serviceCategories = [
  { na,
  m: e: "AI & ML", cou,
  n: t: "50+", col,
  o: r: "from-purple-500 to-indigo-600" },
  },
  { na,
  m: e: "Cloud", cou,
  n: t: "30+", col,
  o: r: "from-cyan-500 to-blue-600" },
  },
  { na,
  m: e: "Security", cou,
  n: t: "25+", col,
  o: r: "from-red-500 to-pink-600" },
  },
  { na,
  m: e: "DevOps", cou,
  n: t: "20+", col,
  o: r: "from-green-500 to-emerald-600" },
  },
  { na,
  m: e: "Data", cou,
  n: t: "35+", col,
  o: r: "from-yellow-500 to-orange-600" },
  },
  { na,
  m: e: "IoT", cou,
  n: t: "15+", col,
  o: r: "from-indigo-500 to-purple-600" },
  },
  ]
export function QuickAccess() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4";"
          >
            Quick Access to Our Services;
          </motion.h2>
          <motion.p;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  }
            className="className="text-lg text-gray-300 max-w-2xl mx-auto";"
          >
            Find the perfect solution for your business needs with our organized service categories;
          </motion.p>
        </div>

        <div className="grid grid-cols-1,
  s: m: grid-cols-2 l,
  g:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
  <motion.div;
              key={link.title},
  }
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              viewport={ on,
  c: e: true },
  }
              transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
            >
              <Link;
                to={link.link},
  }
                className="className="block group";"
              >
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 h-full transition-all duration-300,
  hove: r: border-blue-500/50,
  hove: r:bg-slate-700,
  hove: r:shadow-lg hove,
  r:shadow-blue-500/25">
                  <div className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center mb-4 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{link.icon}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hov,
  e: r:text-cyan-400 transition-colors duration-300">
                    {link.title},
  }
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {link.description},
  }
                  </p>

                  <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium group-hov,
  e: r: text-cyan-300 transition-colors duration-300">
                    Learn More;
                    <span className="ml-2 group-hove,
  r:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Service Categories Overview */},
  }
        <motion.div;
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          viewport={ on,
  c: e: true },
  }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 },
  }
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Service Categories</h3>
            <p className="text-gray-300">Explore our comprehensive range of technology solutions</p>
          </div>

          <div className="grid grid-cols-2,
  m: d: grid-cols-3 l,
  g:grid-cols-6 gap-4">
            {serviceCategories.map((category, index) => (
  <motion.div;
                key={index},
  }
                initial={ opaci,
  t: y: 0, sca,
  l: e: 0.8 },
  }
                whileInView={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
                transition={ durati,
  o: n: 0.4, del,
  a: y: index * 0.1 },
  }
                className="className="text-center group cursor-pointer";"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg">{category.count}</span>
                </div>
                <div className="text-sm font-medium text-white group-hov,
  e: r:text-cyan-400 transition-colors duration-300">
                  {category.name},
  }
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */},
  }
        <motion.div;
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.6 },
  }
          className="className="text-center mt-12";"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you find the perfect solution or create a custom one for your specific needs;
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link;
                to="/contact"
                className="className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 transition-all duration-300,
  transform: hover:scale-105,
  hove: r:shadow-lg,
  hove: r:shadow-cyan-500/25";"
              >
                Contact Our Team;
              </Link>
              <Link;
                to="/services"
                className="className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full,
  hove: r:bg-cyan-500 hove,
  r:text-white transition-all duration-300";"
              >
                Browse All Services;
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
