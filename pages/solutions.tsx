

import React from 'react',
import Layout from '../components/layout/Layout',
import SEO from '../components/SEO',
import { motion } from 'framer-motion',
import {
  Target, Brain, Rocket, Shield, Zap, Atom, Cpu,
  Lock, Cloud, Settings, Eye, Award, Clock, Heart,
  Lightbulb, Search, Grid, List, TrendingUp,
  User, ShoppingCart, Bell, HelpCircle, FileText,
  Video, Headphones, Code, Database, Network, Server,
  Monitor, Smartphone, Camera, Gamepad2, Palette,
  Music, Film, BookOpenCheck, Building, MessageCircle,

  Sparkles, ArrowRight, CheckCircle, Star, Globe, Briefcase, BarChart3
} from 'lucide-react',;
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',;
import { expandedMicroSaasServices } from '../data/expanded-micro-saas-services',;

const Solutions: NextPage = () => {
  const industrySolutions = [
    {

      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  ],
  const solutionCapabilities = [
    {
      title: 'Industry Expertise',
      description: 'Deep domain knowledge across sectors',
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: 'Custom Development',
      description: 'Tailored solutions for unique needs',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Integration Services',
      description: 'Seamless system integration',
      icon: <Network className="w-6 h-6" />
    },
    {
      title: 'AI & Automation',
      description: 'Intelligent automation solutions',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Cloud & Security',
      description: 'Secure cloud infrastructure',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Analytics & Insights',
      description: 'Data-driven decision making',
      icon: <BarChart3 className="w-6 h-6" />

      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  ],
  const caseStudies = [
    {
      title: "Healthcare Provider Digital Transformation",
      industry: "Healthcare",
      description: "Implemented a comprehensive EHR system for a regional hospital network, improving patient care and operational efficiency.",
      results: [
        "30% reduction in administrative overhead",
        "Improved patient satisfaction scores",
        "Enhanced data security and compliance"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      title: "E-commerce Platform Modernization",
      industry: "Retail",
      description: "Redesigned and modernized an existing e-commerce platform, resulting in significant improvements in user experience and sales.",
      results: [
        "45% increase in conversion rates",
        "60% improvement in page load times",
        "Enhanced mobile user experience"
      ],
      technologies: ["Next.js", "TypeScript", "MongoDB", "Vercel"]
    },
    {
      title: "Manufacturing IoT Integration",
      industry: "Manufacturing",
      description: "Implemented IoT sensors and predictive maintenance systems for a manufacturing facility, reducing downtime and improving efficiency.",
      results: [
        "25% reduction in unplanned downtime",
        "15% improvement in production efficiency",
        "Predictive maintenance cost savings"
      ],
      technologies: ["Python", "TensorFlow", "AWS IoT", "React Native"]

      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  ],

  return (
    <UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>Solutions - Zion Tech Group | Revolutionary AI, Quantum Computing & Emerging Technology Solutions</title>
          <meta name="description" content="Discover Zion Tech Group's comprehensive solutions portfolio including Micro SaaS platforms, AI-powered tools, Business Intelligence, Process Automation, and Cloud platforms." />
        </Head>

        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
                Industry Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Tailored technology solutions designed for your industry's unique challenges and opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">

                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started

                </Link>

                <a
                  href="/contact"

                  className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Solution Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive capabilities to deliver industry-specific technology solutions
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutionCapabilities.map((capability, index) => (
                <motion.div

                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-orange-500/20 rounded-lg mr-3">

                    </div>
                    <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300">{capability.description}</p>
                </motion.div>

              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of industry-specific solutions
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((solution, index) => (
                <motion.div

                >
                  {solution.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>

                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.name}</h3>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    <div className="text-3xl font-bold text-orange-400 mb-2">

                      <span className="text-lg text-gray-400">/{solution.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />

                        {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </li>;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                  </ul>
                  <a
                    href="/contact"

                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </motion.div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Tailored technology solutions designed specifically for your industry's unique challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/demo"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            >
              <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Ready for Industry Transformation?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Partner with us to build industry-specific solutions that drive your business forward
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">

                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Transformation

                </Link>

                <a
                  href="/contact"

                  className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  )

export default Solutions,
            >;
              <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">;
                Ready for Industry Transformation?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
                Partner with us to build industry-specific solutions that drive your business forward;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a;
                  href="/contact";
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105";
                >;
                  Start Your Transformation;
                </a>;
                <a;
                  href="/contact";
                  className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-black transition-all duration-300 transform hover:scale-105";
                >;
                  Schedule Consultation;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>;
  );
},;
export default Solutions;

