import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import FuturisticBackground from '../components/FuturisticBackground';

const AICodeGeneratorPage: React.FC = memo(() => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Code Generator Pro",
    "description": "AI-powered code generation tool that writes, reviews, and optimizes code in multiple programming languages",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web, VS Code, IntelliJ",
    "offers": {
      "@type": "Offer",
      "price": "99",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "email": "kleber@ziontechgroup.com"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Zion AI Code Generator Pro - AI-Powered Code Generation"
        description="Generate, review, and optimize code with AI. Multi-language code generation, bug detection, and automated testing for faster development."
        keywords="AI code generation, code review, bug detection, programming assistant, code optimization, developer tools"
        canonicalUrl="https://ziontechgroup.com/ai-code-generator"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen futuristic-bg relative">
        <FuturisticBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6">
              Zion AI Code Generator Pro
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              AI-powered code generation tool that writes, reviews, and optimizes code in multiple 
              programming languages with intelligent suggestions and automated testing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-button hover-lift">
                Try Free Demo
              </button>
              <Link to="/contact" className="neon-button hover-lift" style={{borderColor: '#bf00ff', color: '#bf00ff'}}>
                Get Started
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-purple text-center mb-12">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold text-white mb-4">Multi-language Code Generation</h3>
                <p className="text-white/80">
                  Generate code in Python, JavaScript, Java, C++, Go, Rust, and 20+ other programming languages.
                </p>
              </div>
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-4">Code Review & Optimization</h3>
                <p className="text-white/80">
                  Intelligent code analysis with performance optimization suggestions and best practices recommendations.
                </p>
              </div>
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">🐛</div>
                <h3 className="text-xl font-semibold text-white mb-4">Bug Detection & Fixing</h3>
                <p className="text-white/80">
                  Advanced bug detection with automated fixes and security vulnerability scanning.
                </p>
              </div>
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-white mb-4">Documentation Generation</h3>
                <p className="text-white/80">
                  Automatically generate comprehensive documentation, comments, and API references.
                </p>
              </div>
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">🧪</div>
                <h3 className="text-xl font-semibold text-white mb-4">Test Case Creation</h3>
                <p className="text-white/80">
                  Generate unit tests, integration tests, and test cases with high coverage and quality.
                </p>
              </div>
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-white mb-4">Code Refactoring</h3>
                <p className="text-white/80">
                  Intelligent code refactoring suggestions to improve maintainability and performance.
                </p>
              </div>
            </div>
          </div>

          {/* Supported Languages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text text-center mb-12">Supported Languages</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C#', 'Go', 'Rust', 'PHP', 'Ruby', 'Swift', 'Kotlin', 'Scala', 'R', 'MATLAB', 'SQL', 'HTML', 'CSS', 'React', 'Vue', 'Angular', 'Node.js'].map((lang) => (
                <div key={lang} className="card-futuristic text-center py-4">
                  <span className="text-white font-medium">{lang}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-purple text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-futuristic hover-lift">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold neon-text mb-4">$99<span className="text-lg text-white/60">/month</span></div>
                <ul className="text-white/80 space-y-2 mb-8">
                  <li>✓ Up to 1,000 code generations</li>
                  <li>✓ 10 programming languages</li>
                  <li>✓ Basic code review</li>
                  <li>✓ Email support</li>
                  <li>✓ Standard templates</li>
                </ul>
                <button className="neon-button w-full">Get Started</button>
              </div>
              <div className="card-futuristic hover-lift border-2 border-cyan-400">
                <div className="text-cyan-400 text-sm font-semibold mb-2">MOST POPULAR</div>
                <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                <div className="text-4xl font-bold neon-text mb-4">$299<span className="text-lg text-white/60">/month</span></div>
                <ul className="text-white/80 space-y-2 mb-8">
                  <li>✓ Up to 10,000 code generations</li>
                  <li>✓ 25+ programming languages</li>
                  <li>✓ Advanced code review</li>
                  <li>✓ Bug detection & fixing</li>
                  <li>✓ Priority support</li>
                  <li>✓ Custom templates</li>
                  <li>✓ API integration</li>
                </ul>
                <button className="neon-button w-full">Get Started</button>
              </div>
              <div className="card-futuristic hover-lift">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold neon-text mb-4">$999<span className="text-lg text-white/60">/month</span></div>
                <ul className="text-white/80 space-y-2 mb-8">
                  <li>✓ Unlimited code generations</li>
                  <li>✓ All programming languages</li>
                  <li>✓ Full code analysis suite</li>
                  <li>✓ Security scanning</li>
                  <li>✓ 24/7 dedicated support</li>
                  <li>✓ Custom model training</li>
                  <li>✓ On-premise deployment</li>
                  <li>✓ White-label options</li>
                </ul>
                <button className="neon-button w-full">Contact Sales</button>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text text-center mb-12">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-futuristic">
                <h3 className="text-xl font-semibold text-white mb-4">Rapid Prototyping</h3>
                <p className="text-white/80 mb-4">
                  Quickly generate boilerplate code, API endpoints, and basic application structures 
                  to accelerate development cycles and reduce time to market.
                </p>
                <ul className="text-white/70 space-y-1">
                  <li>• API endpoint generation</li>
                  <li>• Database schema creation</li>
                  <li>• Frontend component scaffolding</li>
                  <li>• Configuration file generation</li>
                </ul>
              </div>
              <div className="card-futuristic">
                <h3 className="text-xl font-semibold text-white mb-4">Code Review Automation</h3>
                <p className="text-white/80 mb-4">
                  Automate code review processes with AI-powered analysis that identifies bugs, 
                  security issues, and performance bottlenecks before deployment.
                </p>
                <ul className="text-white/70 space-y-1">
                  <li>• Automated bug detection</li>
                  <li>• Security vulnerability scanning</li>
                  <li>• Performance optimization</li>
                  <li>• Code quality metrics</li>
                </ul>
              </div>
              <div className="card-futuristic">
                <h3 className="text-xl font-semibold text-white mb-4">Legacy Code Modernization</h3>
                <p className="text-white/80 mb-4">
                  Modernize legacy codebases by automatically converting old patterns to modern 
                  practices and updating deprecated APIs and frameworks.
                </p>
                <ul className="text-white/70 space-y-1">
                  <li>• Framework migration</li>
                  <li>• API modernization</li>
                  <li>• Pattern updates</li>
                  <li>• Dependency upgrades</li>
                </ul>
              </div>
              <div className="card-futuristic">
                <h3 className="text-xl font-semibold text-white mb-4">Test Automation</h3>
                <p className="text-white/80 mb-4">
                  Generate comprehensive test suites with unit tests, integration tests, 
                  and end-to-end tests to ensure code quality and reliability.
                </p>
                <ul className="text-white/70 space-y-1">
                  <li>• Unit test generation</li>
                  <li>• Integration test creation</li>
                  <li>• Mock object generation</li>
                  <li>• Test data creation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold neon-text-purple mb-6">Ready to Code Faster?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of developers already using Zion AI Code Generator Pro to write better code, 
              faster, with fewer bugs and more confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-button hover-lift">
                Try Free Demo
              </button>
              <Link to="/contact" className="neon-button hover-lift" style={{borderColor: '#bf00ff', color: '#bf00ff'}}>
                Schedule Demo
              </Link>
            </div>
            <div className="mt-8 text-white/60">
              <p>Contact us: <span className="text-cyan-400">+1 302 464 0950</span> | <span className="text-cyan-400">kleber@ziontechgroup.com</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

AICodeGeneratorPage.displayName = 'AICodeGeneratorPage';

export default AICodeGeneratorPage;