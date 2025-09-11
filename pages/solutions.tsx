


=======
=======import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import {
  Target, Brain, Rocket, Shield, Zap, Atom, Cpu
  Lock, Cloud, Settings, Eye, Award, Clock, Heart
  Lightbulb, Search, Grid, List, TrendingUp
  User, ShoppingCart, Bell, HelpCircle, FileText
  Video, Headphones, Code, Database, Network, Server
  Monitor, Smartphone, Camera, Gamepad2, Palette
  Music, Film, BookOpenCheck, Building, MessageCircle
  Sparkles, ArrowRight, CheckCircle, Star, Globe, Briefcase, BarChart3
} from 'lucide-react'
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { expandedMicroSaasServices } from '../data/expanded-micro-saas-services';
=======
import React from 'react',;
import Layout from '../components/layout/Layout',;
import SEO from '../components/SEO',;
import { motion } from 'framer-motion',;
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


=======                  key={capability.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}

=======                  key={capability.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
                  transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-orange-500/20 rounded-lg mr-3">
=======              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* Industry Solutions */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======                  key={solution.id}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  className={`relative bg - gradient - to - br from - gray - 800 to - gray - 900 p - 6 rounded - xl border transition - all duration - 300 hover:scale - 105 ${
                    solution.popular;
                      ? 'border - orange - 500 shadow - lg shadow - orange - 500 / 25';
                      : 'border - gray - 700 hover:border - orange - 500';
                  }`}
                >;
=======
=======

                  }`}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={solution.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
                  transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${;
                    solution.popular;
                      ? 'border-orange-500 shadow-lg shadow-orange-500/25';
                      : 'border-gray-700 hover:border-orange-500';
                  }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className="absolute -top - 3 left - 1/2 transform -translate - x-1 / 2">;
                      <span className="bg - gradient - to - r from - orange - 500 to - red - 600 text - white px - 4 py - 1 rounded - full text - sm font - semibold">;
                        Most Popular;
                      </span>;
                    </div>)}
                  <div className="text - center mb - 6">;
                    <div className="inline - flex p - 3 bg - orange - 500 / 20 rounded - full mb - 4">;
=======
                >                  {solution.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-orange-500/20 rounded-full mb-4">
                      {solution.icon}                  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-orange-500/20 rounded-full mb-4">
                      {solution.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.name}</h3>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    <div className="text-3xl font-bold text-orange-400 mb-2">

                  </ul>
                  <a 
                    href="/contact" 

=======                  </ul>
                  <a
                    href="/contact"


                      <span className="text - lg text - gray - 400">/{solution.period}</span>;
                    </div>;
                  </div>;
                  <ul className="space - y-3 mb - 6">;
                    {solution.features.map ((feature, feature_index) => (
                      <li key={feature_index} className="flex items - center text - gray - 300">;
                        <CheckCircle className="w - 5 h - 5 text - orange - 400 mr - 3 flex - shrink - 0" />;
                        {feature}
                      </li>))}
                  </ul>;
                  <a;
                    href="/contact";
                    className="w - full block text - center px - 6 py - 3 bg - gradient - to - r from - orange - 500 to - red - 600 text - white font - semibold rounded - lg hover:from - orange - 600 hover:to - red - 700 transition - all duration - 300";
                  >;
                    Get Started;
                  </a>;
                </motion.div>))}
            </div>;
            <h1 className="text - 5xl md:text - 6xl font - bold text - white mb - 6">;
              Industry Solutions;
            </h1>;
            <p className="text - xl md:text - 2xl text - gray - 300 max - w-3xl mx - auto mb - 8">;
              Tailored technology solutions designed specifically for your industry's unique challenges and opportunities.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <Link;
                href="/contact";
                className="bg - gradient - to - r from - green - 500 to - emerald - 600 text - white px - 8 py - 4 rounded - full text - lg font - semibold hover:shadow - 2xl hover:shadow - green - 500 / 25 transition - all duration - 300";
              >;
                Get Started;
                <ArrowRight className="inline - block ml - 2 w - 5 h - 5" />;
              </Link>;
              <Link;
                href="/demo";
                className="border border - white / 30 hover:border - white / 50 text - white px - 8 py - 4 rounded - full text - lg font - semibold transition - all duration - 300 backdrop - blur - md hover:bg - white / 10";
              >;
                Request Demo;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
