
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Eye, Camera, Video, Target, Shield, CheckCircle, ArrowRight, Settings } from 'lucide-react';

const AIComputerVisionPage: React.FC = () => {
        return (
    <div>
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">AI Computer Vision</h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse">Advanced Visual Intelligence Solutions</p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with cutting-edge computer vision technology. From object detection to facial recognition, 
            our AI-powered visual intelligence solutions help you see and understand the world like never before.
          </p>
          
          <div>
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >Get Started</a>
            <a
              href="tel:+13024640950"
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Eye className="w-5 h-5" />+1 302 464 0950</a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Core Capabilities</h2>
          
          <div>
            {features.map((feature, index) => (
              <div>
                <div>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center neon-text">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 text-center text-sm leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Applications Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Industry Applications</h2>
          
          <div>
            {applications.map((application, index) => (
              <div>
                <div>
                  <div>
                    <application.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white neon-text">
                    {application.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {application.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases:</h4>
                  {application.useCases.map((useCase, useCaseIndex) => (
                    <div>
                      <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Choose Your Plan</h2>
          
          <div>
            {pricing.map((plan, index) => (
              <div>
                {plan.popular && (
                  <div>
                    <div>Most Popular</div>
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 neon-text">{plan.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >Get Started</a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to See the Future?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business with AI-powered computer vision solutions that see, understand, and act.
            </p>
            <div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >Start Your Vision Journey</a>
              <a
                href="/demo"
                className="flex items-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                <Camera className="w-5 h-5" />Request Demo</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>);
}
export default AIComputerVisionPage