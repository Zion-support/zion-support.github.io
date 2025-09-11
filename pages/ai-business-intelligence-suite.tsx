
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import React from 'react',;
import Head from 'next/head',;
import Link from 'next/link',;
import { motion } from 'framer-motion',;
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, 


  DollarSign, Shield, Mail, MapPin, Rocket, BarChart3,
  Brain, Database, TrendingUp as TrendingUpIcon, Users,

                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-2xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  <BarChart3 className="w-12 h-12 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>





                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}



                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}







                className="mb - 8";
              >;
                <div className="inline - flex items - center justify - center w - 24 h - 24 bg - gradient - to - br from - blue - 500 to - indigo - 600 rounded - 3xl shadow - 2xl mb - 6 relative overflow - hidden">;
                  <div className="absolute inset - 0 bg - gradient - to - r from - transparent via - white / 20 to - transparent animate - pulse"></div>;
                  <BarChart3 className="w - 12 h - 12 text - white relative z - 10" />;
                  <div className="absolute inset - 0 bg - gradient - to - r from - blue - 400 to - indigo - 500 rounded - 3xl opacity - 0 hover:opacity - 100 transition - opacity duration - 300"></div>;
                </div>;
              </motion.div>;
              <motion.h1;
                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text - 5xl md:text - 7xl font - black bg - gradient - to - r from - blue - 400 to - indigo - 500 bg - clip - text text - transparent mb - 6";
              >;
                AI Business Intelligence Suite;
              </motion.h1>;
              <motion.p;
                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text - 2xl md:text - 3xl text - gray - 200 mb - 8 max - w-4xl mx - auto font - medium";
              >;
                Transform data into actionable insights with <span className="text - blue - 400 font - bold">AI - powered analytics</span>;
              </motion.p>;
              <motion.p;
                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text - lg md:text - xl text - gray - 400 mb - 12 max - w-3xl mx - auto leading - relaxed";
              >;
                Advanced AI - powered business intelligence platform that automatically analyzes your business data, identifies trends, and provides actionable recommendations for growth and optimization.;
              </motion.p>;
              {/* Pricing and CTA */}
              <motion.div;
                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                className="flex flex - col sm:flex - row gap - 6 justify - center mb - 16";
              >;
                <motion.div;
                  while_hover={{ scale: 1.05, coordinate_y: -2 }}
                  while_tap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}


                  className="bg - gradient - to - r from - blue - 500 to - indigo - 600 p - 1 rounded - 2xl shadow - 2xl";
                >;
                  <div className="bg - gray - 900 rounded - 2xl px - 8 py - 6">;
                    <div className="text - center">;
                      <div className="text - 4xl font - bold text - white mb - 2">$299</div>;
                      <div className="text - blue - 200 text - lg mb - 4">per month</div>;
                      <div className="text - gray - 300 mb - 6">21 - day free trial</div>;
                      <Button;
                        href="/contact";
                        variant="primary";
                        className="w - full bg - gradient - to - r from - blue - 500 to - indigo - 600 hover:from - blue - 600 hover:to - indigo - 700 text - white font - bold py - 3 px - 6 rounded - xl";
                      >;
                        Start Free Trial;
                      </Button>;
                    </div>;
                  </div>;
                </motion.div>;
                <motion.div;
                  while_hover={{ scale: 1.05, coordinate_y: -2 }}
                  while_tap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >;
                  <Button;
                    href="/contact";
                    variant="secondary";
                    className="text - lg px - 8 py - 4 bg - gradient - to - r from - green - 500 to - emerald - 600 hover:from - green - 600 hover:to - emerald - 700 shadow - 2xl hover:shadow - green - 500 / 25";
                  >;
                    <span className="flex items - center">;
                      <Phone className="mr - 3 w - 5 h - 5" />;
                      Talk to Expert;
                    </span>;
                  </Button>;
                </motion.div>;
              </motion.div>;
              {/* Key Benefits */}
              <motion.div;
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-blue-400 mb-2">400% ROI</div>
                  <div className="text-gray-300">Average customer sees 400% ROI within 6 months</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-green-400 mb-2">2 Hours</div>
                  <div className="text-gray-300">Setup time from installation to first insights</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-purple-400 mb-2">1800+</div>
                  <div className="text-gray-300">Active customers worldwide</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* Features Section */}
        {/* Features Section */}

        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 bg - gradient - to - b from - transparent to - gray - 900 / 20">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Everything you need to transform your business data into actionable intelligence
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index  } catch (error) {
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
                  whileHover={{ scale: 1.02, y: -5 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                  className="group bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">

                  while_hover={{ scale: 1.02, coordinate_y: -5 }}
                  className="group bg - gradient - to - br from - blue - 900 / 20 to - indigo - 900 / 20 border border - blue - 500 / 30 rounded - 2xl p - 6 hover:border - blue - 400 / 60 hover:shadow - 2xl hover:shadow - blue - 500 / 20 transition - all duration - 300";
                >;
                  <div className="flex items - center space - x-3 mb - 4">;
                    <div className="w - 10 h - 10 bg - gradient - to - r from - blue - 500 to - indigo - 600 rounded - xl flex items - center justify - center">;
                      <CheckCircle className="w - 5 h - 5 text - white" />;
                    </div>;
                    <h3 className="text - lg font - semibold text - white group - hover:text - blue - 300 transition - colors">;

                      {feature}
                    </h3>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Use Cases Section */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Use Cases
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Discover how our AI BI platform transforms different aspects of your business
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
              className="text - center mb - 16";
            >;
              <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
                <span className="bg - gradient - to - r from - green - 400 to - emerald - 500 bg - clip - text text - transparent">;
                  Use Cases;
                </span>;
              </h2>;
              <p className="text - gray - 300 text - xl max - w-3xl mx - auto leading - relaxed">;
                Discover how our AI BI platform transforms different aspects of your business;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {use_cases.map ((use_case, index) => (
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}

                  className="group bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-6 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300"


                  className="group bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
        {/* Use Cases Section */}

        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Use Cases
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Discover how our AI BI platform transforms different aspects of your business
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  while_hover={{ scale: 1.02, coordinate_y: -5 }}
                  className="group bg - gradient - to - br from - green - 900 / 20 to - emerald - 900 / 20 border border - green - 500 / 30 rounded - 2xl p - 6 hover:border - green - 400 / 60 hover:shadow - 2xl hover:shadow - green - 500 / 20 transition - all duration - 300";
                >;
                  <div className="flex items - center space - x-3 mb - 4">;
                    <div className="w - 10 h - 10 bg - gradient - to - r from - green - 500 to - emerald - 600 rounded - xl flex items - center justify - center">;
                      <Target className="w - 5 h - 5 text - white" />;
                    </div>;
                    <h3 className="text - lg font - semibold text - white group - hover:text - green - 300 transition - colors">;
                      {use_case}
                      {useCase  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                    </h3>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Technology & Integrations */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 bg - gradient - to - b from - transparent to - gray - 900 / 20">;
          <div className="max - w-7xl mx - auto">;
            <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 16">;
              {/* Technology Stack */}
              <motion.div;
                initial={{ opacity: 0, coordinate_x: -20 }}
                whileInView={{ opacity: 1, coordinate_x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              {/* Technology Stack */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <motion.div;
                initial={{ opacity: 0, x: -20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6 }  } catch (error) {
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
                <h3 className="text-3xl font-bold text-white mb-8">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Technology Stack
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {technology.map((tech, index) => (
                    <motion.div

              >;
                <h3 className="text - 3xl font - bold text - white mb - 8">;
                  <span className="bg - gradient - to - r from - purple - 400 to - pink - 500 bg - clip - text text - transparent">;
                    Technology Stack;
                  </span>;
                </h3>;
                <div className="grid grid - cols - 2 gap - 4">;
                  {technology.map ((tech, index) => (
                    <motion.div;
                  className="group bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-6 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors">
                      {useCase}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Technology & Integrations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Technology Stack */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                      {useCase  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </h3>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;        {/* Technology & Integrations */}

        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 bg - gradient - to - b from - transparent to - gray - 900 / 20">;
          <div className="max - w-7xl mx - auto">;
            <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 16">;

              {/* Technology Stack */}
              <motion.div;
                initial={{ opacity: 0, coordinate_x: -20 }}
                whileInView={{ opacity: 1, coordinate_x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}

              {/* Technology Stack */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <motion.div;
                initial={{ opacity: 0, x: -20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6 }  } catch (error) {
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
                <h3 className="text-3xl font-bold text-white mb-8">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Technology Stack
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {technology.map((tech, index) => (
                    <motion.div
                      initial={{ opacity: 0, coordinate_y: 10 }}
                      whileInView={{ opacity: 1, coordinate_y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 bg-gray-800/40 rounded-lg border border-gray-700/50"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-200">{tech}</span>
                    </motion.div>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                </div>;
              </motion.div>;

              >
                <h3 className="text-3xl font-bold text-white mb-8">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Integrations
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {integrations.map((integration, index) => (
                    <motion.div
              >;
                <h3 className="text - 3xl font - bold text - white mb - 8">;
                  <span className="bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">;
                    Integrations;
                  </span>;
                </h3>;
                <div className="grid grid - cols - 2 gap - 4">;
                  {integrations.map ((integration, index) => (
                    <motion.div;
                      key={index}
                      initial={{ opacity: 0, coordinate_y: 10 }}
                      whileInView={{ opacity: 1, coordinate_y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-3 bg-gray-800/40 rounded-lg border border-gray-700/50"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-200">{integration}</span>
                    </motion.div>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                </div>;
              </motion.div>;
            </div>;
          </div>;
        </section>;
        {/* Market Position & ROI */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
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
              transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}=======


              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Market Position & ROI
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div

    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Competitive Advantage</h3>
                <p className="text-gray-300 mb-6">



                  Our advantage: AI-powered insights, automated reporting, and predictive analytics.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-200">AI-powered trend prediction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-200">Automated report generation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-200">Natural language queries</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Return on Investment</h3>
                <div className="text-4xl font-bold text-green-400 mb-4">400% ROI</div>
                <p className="text-gray-300 mb-6">
                  Average customer sees 400% ROI within 6 months through improved decision-making and operational efficiency.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <TrendingUpIcon className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">Improved decision-making</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUpIcon className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">Operational efficiency gains</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUpIcon className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">Reduced manual reporting time</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



                  <Button 
                    href="/contact" 
        {/* CTA Section */}
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
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
              transition={{ duration: 0.6 }  } catch (error) {
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business Intelligence?
              </h2>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Join 1800+ businesses that have already transformed their data into actionable insights with our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileTap={{ scale: 0.95 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >
                  <Button
                    href="/contact"
                  <Button 
                    href="/contact" 
                  <Button
                    href="/contact"
              className="text - center mb - 16";            >;
              <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
                <span className="bg - gradient - to - r from - yellow - 400 to - orange - 500 bg - clip - text text - transparent">;
                  Market Position & ROI;
                </span>;
              </h2>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
              <motion.div;
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg - gradient - to - br from - yellow - 900 / 20 to - orange - 900 / 20 border border - yellow - 500 / 30 rounded - 2xl p - 8";
              >;
                <h3 className="text - 2xl font - bold text - white mb - 6">Competitive Advantage</h3>;
                <p className="text - gray - 300 mb - 6">;
                  Competitive with Tableau ($70 - 75 / user / month), Power BI ($9.99 / user / month), and Looker ($30 / user / month).;
                  Our advantage: AI - powered insights, automated reporting, and predictive analytics.;
                </p>;
                <div className="space - y-4">;
                  <div className="flex items - center space - x-3">;
                    <CheckCircle className="w - 5 h - 5 text - yellow - 400" />;
                    <span className="text - gray - 200">AI - powered trend prediction</span>;
                  </div>;
                  <div className="flex items - center space - x-3">;
                    <CheckCircle className="w - 5 h - 5 text - yellow - 400" />;
                    <span className="text - gray - 200">Automated report generation</span>;
                  </div>;
                  <div className="flex items - center space - x-3">;
                    <CheckCircle className="w - 5 h - 5 text - yellow - 400" />;
                    <span className="text - gray - 200">Natural language queries</span>;
                  </div>;
                </div>;
              </motion.div>;
              <motion.div;
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg - gradient - to - br from - green - 900 / 20 to - emerald - 900 / 20 border border - green - 500 / 30 rounded - 2xl p - 8";
              >;
                <h3 className="text - 2xl font - bold text - white mb - 6">Return on Investment</h3>;
                <div className="text - 4xl font - bold text - green - 400 mb - 4">400% ROI</div>;
                <p className="text - gray - 300 mb - 6">;
                  Average customer sees 400% ROI within 6 months through improved decision - making and operational efficiency.;
                </p>;
                <div className="space - y-4">;
                  <div className="flex items - center space - x-3">;
                    <TrendingUpIcon className="w - 5 h - 5 text - green - 400" />;
                    <span className="text - gray - 200">Improved decision - making</span>;
                  </div>;
                  <div className="flex items - center space - x-3">;
                    <TrendingUpIcon className="w - 5 h - 5 text - green - 400" />;
                    <span className="text - gray - 200">Operational efficiency gains</span>;
                  </div>;
                  <div className="flex items - center space - x-3">;
                    <TrendingUpIcon className="w - 5 h - 5 text - green - 400" />;
                    <span className="text - gray - 200">Reduced manual reporting time</span>;
                  </div>;
                </div>;
              </motion.div>;
            </div>;
          </div>;
        </section>;



                  <Button
                    href="/contact"
                  <Button 
                    href="/contact" 
                  <Button
                    href="/contact"
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >





              <div className="mt-8 text-gray-400">
                <p>Contact us: <a href={`tel:${contactInfo.mobile}`} className="text-blue-400 hover:text-blue-300">{contactInfo.mobile}</Link> | <a href={`mailto:${contactInfo.email}`} className="text-blue-400 hover:text-blue-300">{contactInfo.email}</Link></p>
                <p>Contact us: <a href={`tel:${contactInfo.mobile}`} className="text-blue-400 hover:text-blue-300">{contactInfo.mobile}</a> | <a href={`mailto:${contactInfo.email}`} className="text-blue-400 hover:text-blue-300">{contactInfo.email}</a></p>
                <p>Contact us: <a href={`tel:${contactInfo.mobile}`} className="text-blue-400 hover:text-blue-300">{contactInfo.mobile}</Link> | <a href={`mailto:${contactInfo.email}`} className="text-blue-400 hover:text-blue-300">{contactInfo.email}</Link></p>


                <p className="mt-2">{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
};
  )

}
            >;
              <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
                Ready to Transform Your Business Intelligence?;
              </h2>;
              <p className="text - gray - 300 text - xl mb - 8 leading - relaxed">;
                Join 1800+ businesses that have already transformed their data into actionable insights with our AI - powered platform.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 6 justify - center">;
                <motion.div;
                  while_hover={{ scale: 1.05, coordinate_y: -2 }}
                  while_tap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >;
                  <Button;
                    href="/contact";
                    variant="primary";
                    className="text - lg px - 8 py - 4 bg - gradient - to - r from - blue - 500 to - indigo - 600 hover:from - blue - 600 hover:to - indigo - 700 shadow - 2xl hover:shadow - blue - 500 / 25";
                  >;
                    <span className="flex items - center">;
                      <Rocket className="mr - 3 w - 5 h - 5" />;
                      Start Free Trial;
                      <ArrowRight className="ml - 3 w - 5 h - 5" />;
                    </span>;
                  </Button>;
                </motion.div>;
                <motion.div;
                  while_hover={{ scale: 1.05, coordinate_y: -2 }}
                  while_tap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >;
                  <Button;
                    href="/contact";
                    variant="secondary";
                    className="text - lg px - 8 py - 4 bg - gradient - to - r from - green - 500 to - emerald - 600 hover:from - green - 600 hover:to - emerald - 700 shadow - 2xl hover:shadow - green - 500 / 25";
                  >;
                    <span className="flex items - center">;
                      <Phone className="mr - 3 w - 5 h - 5" />;
                      Talk to Expert;
                    </span>;
                  </Button>;
                </motion.div>;
              </div>;
              <div className="mt - 8 text - gray - 400">;
                <p > Contact us: <a href={`tel:${contact_info.mobile}`} className="text - blue - 400 hover:text - blue - 300">{contact_info.mobile}</a> | <a href={`mailto:${contact_info.email}`} className="text - blue - 400 hover:text - blue - 300">{contact_info.email}</a></p>;
                <p className="mt - 2">{contact_info.address}</p>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>);
}
