import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import EmailValidatorDemo from '../components/demos/EmailValidatorDemo',
import PasswordStrengthDemo from '../components/demos/PasswordStrengthDemo',
import UrlShortenerDemo from '../components/demos/UrlShortenerDemo',
import TextAnalyzerDemo from '../components/demos/TextAnalyzerDemo',
import { Mail, Lock, Link, FileText, CheckCircle, Zap, BarChart3, Code, Play } from 'lucide-react',

export default function DemosPage() {
  const [activeDemo, setActiveDemo] = useState<string>('email-validator'),
  const demos = [
    {
      id: 'email-validator',
      title: 'Email Validator Pro',
      description: 'Advanced email validation with domain checking and deliverability scoring',
      icon: <Mail className=&quot;w-6 h-6&quot; />,
      color: 'from-blue-500 to-cyan-600',
      component: <EmailValidatorDemo />
    },
    {
      id: 'password-strength',
      title: 'Password Strength Analyzer',
      description: 'Comprehensive password security analysis with entropy calculation',
      icon: <Lock className=&quot;w-6 h-6&quot; />,
      color: 'from-green-500 to-emerald-600',
      component: <PasswordStrengthDemo />
    },
    {
      id: 'url-shortener',
      title: 'Smart URL Shortener',
      description: 'Professional URL shortening with analytics and custom codes',
      icon: <Link className=&quot;w-6 h-6&quot; />,
      color: 'from-purple-500 to-pink-600',
      component: <UrlShortenerDemo />
    },
    {
      id: 'text-analyzer',
      title: 'Text Analysis Suite',
      description: 'Advanced text analysis with readability and sentiment analysis',
      icon: <FileText className=&quot;w-6 h-6&quot; />,
      color: 'from-orange-500 to-red-600',
      component: <TextAnalyzerDemo />
    }
  ],

  const activeDemoData = demos.find(demo => demo.id === activeDemo),
  return (
    <>
      <Head>
        <title>Interactive Demos | Zion Tech Group - Test Our Micro SaaS Services</title>
        <meta name=&quot;description&quot; content=&quot;Try our professional micro SaaS services with interactive demos. Test email validation, password strength, URL shortening, and text analysis in real-time.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Interactive Demos | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Test our micro SaaS services with interactive demos.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summarylarge_image&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-black&quot;>
        <div className=&quot;absolute inset-0&quot;>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circleat_50%50%,rgba(59,130,246,0.1),transparent50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circleat_80%20%,rgba(34,197,94,0.08),transparent50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circleat_20%80%,rgba(168,85,247,0.06),transparent50%)]&quot; />        </div>

        <div className=&quot;absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)1px,transparent1px),linear-gradient(90deg,rgba(59,130,246,0.1)1px,transparent1px)] bg-[size:50px50px] opacity-20&quot; />

        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <div className=&quot;mb-20 animate-fade-in&quot;>
            <div className=&quot;mb-8&quot;>
              <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-scale-in&quot;>
                <Play className=&quot;w-4 h-4 mr-2&quot; />
                Interactive Demos
              </div>
            </div>
            
            <h1 className=&quot;text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight&quot;>
              Try Our
              <span className=&quot;block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;>
                Micro SaaS Services
              </span>
            </h1>
            <p className=&quot;text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light&quot;>
              Experience our professional-grade micro SaaS services firsthand with interactive demos. 
              Test, explore, and see the power of our APIs in action.
            </p>

            <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center items-center mb-20&quot;>
              <Button,
href=&quot;#demos&quot;
                size=&quot;lg&quot;
                className=&quot;animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40&quot;
                style={{ animationDelay: '0.2s' }}              >
                Start Testing
                <Play className=&quot;w-5 h-5 ml-2&quot; />
              </Button>
              <Button,
href=&quot;/micro-saas&quot;
                variant=&quot;outline&quot;
                size=&quot;lg&quot;
                className=&quot;animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5&quot;
                style={{ animationDelay: '0.4s' }}              >
                <Code className=&quot;w-5 h-5 mr-2&quot; />
                View All Services
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in&quot; style={{ animationDelay: '0.6s' }}>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300&quot;>                4
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>Live Demos</div>
            </div>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300&quot;>
                Real
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>API Endpoints</div>
            </div>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300&quot;>
                Free
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>To Test</div>
            </div>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300&quot;>
                Instant
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Navigation */}
      <section id=&quot;demos&quot; className=&quot;py-16 bg-gray-900 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)1px,transparent1px),linear-gradient(90deg,rgba(59,130,246,0.05)1px,transparent1px)] bg-[size:50px50px] opacity-20&quot; />
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-4&quot;>              Choose a Service to Test
            </h2>
            <p className=&quot;text-lg text-gray-400 max-w-2xl mx-auto&quot;>
              Each demo showcases a different micro SaaS service with full functionality
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4&quot;>
            {demos.map((demo) => (
              <button                key={demo.id}
                onClick={_() => setActiveDemo(demo.id)}
                className={_`p-4 rounded-lg border transition-all duration-300 text-left group ${
                  activeDemo === demo.id
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-gray-700 bg-gray-800/50 hover:border-gray-600 hover:bg-gray-800/80'}`}
              >
                <div className={_`w-12 h-12 rounded-lg bg-gradient-to-br ${demo.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {demo.icon}
                </div>
                <h3 className=&quot;font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300&quot;>
                  {demo.title}
                </h3>
                <p className=&quot;text-sm text-gray-400 leading-relaxed&quot;>
                  {demo.description}
                </p>
                {activeDemo === demo.id && (
                  <div className=&quot;mt-3 flex items-center text-blue-400 text-sm&quot;>
                    <CheckCircle className=&quot;w-4 h-4 mr-2&quot; />                    Active Demo
                  </div>
                )}
              </button>;
            ))}
          </div>;
        </div>;
      </section>;
;
      {/* Active Demo */}
      <section className=&quot;py-16 bg-black relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4&quot;>
              <Play className=&quot;w-4 h-4 mr-2&quot; />
              Live Demo
            </div>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-4&quot;>
              {activeDemoData?.title}
            </h2>
            <p className=&quot;text-lg text-gray-400 max-w-2xl mx-auto&quot;>
              {activeDemoData?.description}
            </p>
          </div>

          <div className=&quot;animate-fade-in&quot;>
            {activeDemoData?.component}          </div>
        </div>
      </section>

      {/* Features */}
      <section className=&quot;py-24 bg-gray-900 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)1px,transparent1px),linear-gradient(90deg,rgba(59,130,246,0.05)1px,transparent1px)] bg-[size:50px50px] opacity-20&quot; />
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-8&quot;>              Why Test Our Demos?
            </h2>
            <p className=&quot;text-lg text-gray-400 max-w-3xl mx-auto&quot;>
              Experience the quality and reliability of our services before integrating them into your applications
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <Card className=&quot;text-center group bg-gray-800/50 border border-gray-700 hover:border-blue-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1&quot;>
              <div className=&quot;w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                <Zap className=&quot;w-8 h-8 text-blue-400&quot; />
              </div>
              <h3 className=&quot;text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300&quot;>
                Real Performance
              </h3>
              <p className=&quot;text-gray-400 leading-relaxed&quot;>
                Test actual API endpoints with real data processing and response times
              </p>
            </Card>

            <Card className=&quot;text-center group bg-gray-800/50 border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1&quot;>
              <div className=&quot;w-16 h-16 mx-auto mb-6 rounded-2xl bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                <CheckCircle className=&quot;w-8 h-8 text-green-400&quot; />
              </div>
              <h3 className=&quot;text-xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300&quot;>
                Full Functionality
              </h3>
              <p className=&quot;text-gray-400 leading-relaxed&quot;>
                Experience complete service capabilities, not just mock responses
              </p>
            </Card>

            <Card className=&quot;text-center group bg-gray-800/50 border border-gray-700 hover:border-purple-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1&quot;>
              <div className=&quot;w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                <Code className=&quot;w-8 h-8 text-purple-400&quot; />
              </div>
              <h3 className=&quot;text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300&quot;>
                API Examples
              </h3>
              <p className=&quot;text-gray-400 leading-relaxed&quot;>
                See exact request/response formats for easy integration
              </p>
            </Card>

            <Card className=&quot;text-center group bg-gray-800/50 border border-gray-700 hover:border-orange-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1&quot;>
              <div className=&quot;w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                <BarChart3 className=&quot;w-8 h-8 text-orange-400&quot; />
              </div>
              <h3 className=&quot;text-xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors duration-300&quot;>
                Detailed Results
              </h3>
              <p className=&quot;text-gray-400 leading-relaxed&quot;>
                Get comprehensive analysis and insights from each service
              </p>
            </Card>

            <Card className=&quot;text-center group bg-gray-800/50 border border-gray-700 hover:border-cyan-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1&quot;>
              <div className=&quot;w-16 h-16 mx-auto mb-6 rounded-2xl bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                <Play className=&quot;w-8 h-8 text-cyan-400&quot; />
              </div>
              <h3 className=&quot;text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300&quot;>
                Instant Testing
              </h3>
              <p className=&quot;text-gray-400 leading-relaxed&quot;>
                No signup required - start testing immediately
              </p>
            </Card>

            <Card className=&quot;text-center group bg-gray-800/50 border border-gray-700 hover:border-pink-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1&quot;>
              <div className=&quot;w-16 h-16 mx-auto mb-6 rounded-2xl bg-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                <CheckCircle className=&quot;w-8 h-8 text-pink-400&quot; />
              </div>
              <h3 className=&quot;text-xl font-bold mb-4 text-white group-hover:text-pink-400 transition-colors duration-300&quot;>
                Production Ready
              </h3>
              <p className=&quot;text-gray-400 leading-relaxed&quot;>
                Same infrastructure that powers our production services
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)1px,transparent1px)] bg-[size:20px20px] opacity-10&quot; />
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10&quot;>
          <h2 className=&quot;text-4xl sm:text-5xl font-bold text-white mb-8&quot;>            Ready to Integrate?
          </h2>
          <p className=&quot;text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            After testing our demos, integrate these professional services into your applications,
with our comprehensive APIs and documentation.
          </p>
          <div className="flex flex-col sm: flex-row gap-6 justify-center">            <Button,
href=&quot;/micro-saas&quot;
              variant=&quot;secondary&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-blue-600 hover:bg-gray-100 shadow-2xl&quot;
            >
              View All Services
              <Code className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button,
href=&quot;/contact&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl&quot;
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}