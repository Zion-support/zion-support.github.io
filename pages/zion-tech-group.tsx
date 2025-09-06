import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { 
  Brain, Zap, Target, BarChart3, Users, TrendingUp,
  MessageSquare, Mail, Phone, MapPin, ArrowRight,
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,
  FileText, Image, Video, Music, Palette, Type,
  User, Search, Eye, Heart, ShoppingCart, Code,
  Database, Users2, Award, Lock, Server, Network,
  Monitor, Settings, RefreshCw, Play, Pause,
  AlertTriangle, CheckCircle2, Building, Wifi,
  HardDrive, Cloud, Smartphone, Blocks, Wallet,
  CreditCard, PiggyBank, Building2, Activity,
  Waves, BrainCircuit, CpuIcon, MonitorHeart,
  Film, Headphones, Camera, Gamepad2, Tv, Radio,
  Factory, Cog, Gauge, Wrench, Settings2, CpuIcon2,
  Calendar, Clock, FileText2, PieChart, Atom,
  Truck, ChevronRight, Home
} from 'lucide-react',
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

export default function ZionTechGroupPage() {_return (
    <>
      <Head>
        <title>About Zion Tech Group | Revolutionary Quantum AI & Autonomous Systems</title>
        <meta name=&quot;description&quot; content=&quot;Discover Zion Tech Group's mission to revolutionize technology with quantum AI, autonomous systems, and cutting-edge platforms. Learn about our innovative solutions and global impact.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;Zion Tech Group, about us, quantum AI, autonomous systems, technology innovation, company mission&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; />
      </Head>

      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;>
        {/* Navigation */}
        <nav className=&quot;bg-black/20 backdrop-blur-md border-b border-white/10&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;flex justify-between items-center h-16&quot;>
              <div className=&quot;flex items-center&quot;>
                <div className=&quot;flex-shrink-0&quot;>
                  <Link href=&quot;/&quot; className=&quot;text-2xl font-bold text-white&quot;>Zion Tech Group</Link>
                </div>
              </div>
              <div className=&quot;hidden md:block&quot;>
                <div className=&quot;ml-10 flex items-baseline space-x-4&quot;>
                  <Link href=&quot;/&quot; className=&quot;text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium&quot;>
                    Home
                  </Link>
                  <Link href=&quot;/zion-tech-group&quot; className=&quot;text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium&quot;>
                    About
                  </Link>
                  <Link href=&quot;/contact&quot; className=&quot;text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium&quot;>
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className=&quot;bg-black/20 border-b border-white/10&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4&quot;>
            <nav className=&quot;flex&quot; aria-label=&quot;Breadcrumb&quot;>
              <ol className=&quot;flex items-center space-x-4&quot;>
                <li>
                  <div>
                    <Link href=&quot;/&quot; className=&quot;text-gray-300 hover:text-white&quot;>
                      <Home className=&quot;h-4 w-4&quot; />
                      <span className=&quot;sr-only&quot;>Home</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className=&quot;flex items-center&quot;>
                    <ChevronRight className=&quot;h-4 w-4 text-gray-400&quot; />
                    <span className=&quot;ml-4 text-sm font-medium text-white&quot;>About Zion Tech Group</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className=&quot;relative overflow-hidden py-24&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;text-center&quot;>
              <h1 className=&quot;text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl&quot;>
                <span className=&quot;block&quot;>About</span>
                <span className=&quot;block text-purple-400&quot;>Zion Tech Group</span>
              </h1>
              <p className=&quot;mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl&quot;>
                We are the architects of tomorrow, building revolutionary quantum AI solutions and autonomous systems that will define the next decade of innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className=&quot;py-16 bg-black/20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12&quot;>
              <div>
                <div className=&quot;w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6&quot;>
                  <Target className=&quot;h-8 w-8 text-white&quot; />
                </div>
                <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Our Mission</h2>
                <p className=&quot;text-lg text-gray-300 mb-6&quot;>
                  To accelerate human progress through revolutionary quantum AI technology, autonomous systems, and cutting-edge platforms that solve humanity's greatest challenges.
                </p>
                <p className=&quot;text-gray-300&quot;>
                  We believe that technology should serve humanity, not replace it. Our solutions are designed to augment human capabilities, enhance decision-making, and create a more sustainable and prosperous future for all.
                </p>
              </div>

              <div>
                <div className=&quot;w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6&quot;>
                  <Eye className=&quot;h-8 w-8 text-white&quot; />
                </div>
                <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Our Vision</h2>
                <p className=&quot;text-lg text-gray-300 mb-6&quot;>
                  To be the global leader in quantum AI innovation, creating a world where artificial intelligence and human intelligence work in perfect harmony to solve complex problems.
                </p>
                <p className=&quot;text-gray-300&quot;>
                  We envision a future where our technology platforms enable breakthroughs in healthcare, climate change, space exploration, and countless other fields that will shape the destiny of our species.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className=&quot;py-16&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;text-center mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Our Core Values</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                These principles guide everything we do and shape the culture of our organization.
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                  <Brain className=&quot;h-8 w-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Innovation First</h3>
                <p className=&quot;text-gray-300&quot;>
                  We constantly push the boundaries of what's possible, embracing cutting-edge technologies and unconventional thinking.
                </p>
              </div>

              <div className=&quot;text-center&quot;>
                <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                  <Shield className=&quot;h-8 w-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Ethical Responsibility</h3>
                <p className=&quot;text-gray-300&quot;>
                  We develop technology with a deep commitment to ethical principles, ensuring our solutions benefit humanity and protect our future.
                </p>
              </div>

              <div className=&quot;text-center&quot;>
                <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                  <Users className=&quot;h-8 w-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Human-Centric Design</h3>
                <p className=&quot;text-gray-300&quot;>
                  Every solution we create is designed with human needs at the center, ensuring technology serves people, not the other way around.
                </p>
              </div>

              <div className=&quot;text-center&quot;>
                <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                  <Globe className=&quot;h-8 w-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Global Impact</h3>
                <p className=&quot;text-gray-300&quot;>
                  We think globally and act locally, creating solutions that can scale to benefit communities around the world.
                </p>
              </div>

              <div className=&quot;text-center&quot;>
                <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                  <Award className=&quot;h-8 w-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Excellence</h3>
                <p className=&quot;text-gray-300&quot;>
                  We maintain the highest standards of quality in everything we do, from research and development to customer support.
                </p>
              </div>

              <div className=&quot;text-center&quot;>
                <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                  <Rocket className=&quot;h-8 w-8 text-white&quot; />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Future-Focused</h3>
                <p className="text-gray-300">
                  We don't just adapt to change, we anticipate it and create the technologies that will define tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack Section */}
        <div className=&quot;py-16 bg-black/20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;text-center mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Our Technology Stack</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                We leverage the most advanced technologies available to create revolutionary solutions.
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
              <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center&quot;>
                <div className=&quot;w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4&quot;>
                  <Brain className=&quot;h-6 w-6 text-white&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Quantum Computing</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>
                  Next-generation quantum processors and algorithms for unprecedented computational power.
                </p>
              </div>

              <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center&quot;>
                <div className=&quot;w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4&quot;>
                  <Cpu className=&quot;h-6 w-6 text-white&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Artificial Intelligence</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>
                  Advanced machine learning, neural networks, and AI systems that learn and adapt.
                </p>
              </div>

              <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center&quot;>
                <div className=&quot;w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4&quot;>
                  <Server className=&quot;h-6 w-6 text-white&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Cloud Infrastructure</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>
                  Scalable, secure cloud platforms built for the most demanding applications.
                </p>
              </div>

              <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center&quot;>
                <div className=&quot;w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4&quot;>
                  <Shield className=&quot;h-6 w-6 text-white&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>Cybersecurity</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>
                  Quantum-resistant encryption and AI-powered threat detection systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats Section */}
        <div className=&quot;py-16&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;text-center mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Company Statistics</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Our impact in numbers - showcasing the scale and reach of our technology solutions.
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-4xl font-bold text-purple-400 mb-2&quot;>500+</div>
                <div className=&quot;text-gray-300&quot;>Global Clients</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-4xl font-bold text-purple-400 mb-2&quot;>99.9%</div>
                <div className=&quot;text-gray-300&quot;>Uptime Guarantee</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-4xl font-bold text-purple-400 mb-2&quot;>24/7</div>
                <div className=&quot;text-gray-300&quot;>Support Available</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-4xl font-bold text-purple-400 mb-2&quot;>10+</div>
                <div className=&quot;text-gray-300&quot;>Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className=&quot;py-16 bg-black/20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;text-center mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Our Leadership Team</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Meet the visionaries and experts who are driving innovation at Zion Tech Group.
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center&quot;>
                <div className=&quot;w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                  <User className=&quot;h-10 w-10 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Kleber</h3>
                <p className=&quot;text-purple-400 mb-2&quot;>CEO & Founder</p>
                <p className=&quot;text-gray-300 text-sm&quot;>
                  Visionary leader with over a decade of experience in quantum computing and AI innovation.
                </p>
              </div>

              <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center&quot;>
                <div className=&quot;w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                  <Brain className=&quot;h-10 w-10 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Dr. Sarah Chen</h3>
                <p className=&quot;text-purple-400 mb-2&quot;>Chief Technology Officer</p>
                <p className=&quot;text-gray-300 text-sm&quot;>
                  Quantum computing expert with PhD from MIT and 15+ years in advanced AI research.
                </p>
              </div>

              <div className=&quot;bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center&quot;>
                <div className=&quot;w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                  <Shield className=&quot;h-10 w-10 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Marcus Rodriguez</h3>
                <p className=&quot;text-purple-400 mb-2&quot;>Chief Security Officer</p>
                <p className=&quot;text-gray-300 text-sm&quot;>
                  Cybersecurity specialist with expertise in quantum-resistant encryption and threat detection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className=&quot;bg-purple-600&quot;>
          <div className=&quot;max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8&quot;>
            <h2 className=&quot;text-3xl font-extrabold text-white sm:text-4xl&quot;>
              <span className=&quot;block&quot;>Ready to Join the Future?</span>
            </h2>
            <p className=&quot;mt-4 text-lg leading-6 text-purple-100&quot;>
              Discover how Zion Tech Group can transform your business with revolutionary technology solutions.
            </p>
            <div className=&quot;mt-8 flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link href=&quot;/contact&quot; className=&quot;inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50&quot;>
                Get Started Today
                <ArrowRight className=&quot;ml-2 h-4 w-4&quot; />
              </Link>
              <Link href=&quot;/contact&quot; className=&quot;inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-purple-700&quot;>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
                  Leading the future with revolutionary quantum AI solutions and autonomous systems.
                </p>
              </div>
              <div className=&quot;mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2&quot;>
                <div className=&quot;md:grid md:grid-cols-2 md:gap-8&quot;>
                  <div>
                    <h3 className=&quot;text-sm font-semibold text-gray-400 tracking-wider uppercase&quot;>Solutions</h3>
                    <ul className=&quot;mt-4 space-y-4&quot;>
                      <li>
                        <Link href=&quot;/zion-tech-group&quot; className=&quot;text-base text-gray-300 hover:text-white&quot;>
                          Quantum AI
                        </Link>
                      </li>
                      <li>
                        <Link href=&quot;/zion-tech-group&quot; className=&quot;text-base text-gray-300 hover:text-white&quot;>
                          Autonomous Systems
                        </Link>
                      </li>
                      <li>
                        <Link href=&quot;/zion-tech-group&quot; className=&quot;text-base text-gray-300 hover:text-white&quot;>
                          Technology Platforms
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className=&quot;mt-12 md:mt-0&quot;>
                    <h3 className=&quot;text-sm font-semibold text-gray-400 tracking-wider uppercase&quot;>Company</h3>
                    <ul className=&quot;mt-4 space-y-4&quot;>
                      <li>
                        <Link href=&quot;/zion-tech-group&quot; className=&quot;text-base text-gray-300 hover:text-white&quot;>
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href=&quot;/contact&quot; className=&quot;text-base text-gray-300 hover:text-white&quot;>
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8">
              <p className="text-base text-gray-400 xl:text-center">
                &copy, 2025 Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}