<<<<<<< HEAD
'use client'
import Footer from './Footer'
import Navigation from './Navigation'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain } from 'lucide-react'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
import { Phone, Mail, ArrowRight } from 'lucide-react'
'use client',
    }
  ]
  const benefits = [
  "Increase efficiency by up to 50%",
      "Reduce costs by 30% with automation",
      "Improve decision-making with AI insights",
      "Scale operations without proportional staff increases",
    'Gain competitive advantage with advanced technology'
  ]
const LazyImage: React.FC<LazyImageProps> = ({ className = '' }) => {
  return (
    <>
      <Helmet>
        <title>LazyImage</title>
        <meta name=&quot;description&quot; content=&quot;Advanced LazyImage solution for modern businesses.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, LazyImage, AI solutions, intelligent automation&quot; />
      </Helmet>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quot;>
              LazyImage
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced LazyImage solution for modern businesses.
            </p>
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Learn More
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;></div>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of businesses already using our AI solutions
            </p>
              <br />
              <span className=&quot;text-white&quot;>Solutions</span>
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>Transform your business with our advanced lazyimage solutions.</p>
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center&quot;>Get Started</button>
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover: from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
        </div>
      </section>
      {/* Benefits Section */}
      <section className=&quot;py-20 px-4 sm: px-6 lg:px-8 bg-white/5&quot;></section>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white mb-4&quot;></h2>
              Key Benefits
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Experience the power of our lazyimage solutions for your business.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>{benefits.map((benefit, index) => (</div>
              <div key={index} className=&quot;flex items-start space-x-3&quot;></div>
                <CheckCircle className=&quot;h-6 w-6 text-purple-400 mt-1 flex-shrink-0&quot; />
                <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=&quot;py-20 px-4 sm: px-6 lg:px-8&quot;></section>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
          <div className=&quot;bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12&quot;></div>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white mb-4&quot;>Ready to Get Started?</h2>
            <p className=&quot;text-xl text-purple-100 mb-8&quot;>Contact our experts to discuss your lazyimage needs and get a customized solution.</p>p>
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover: from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;></button>
                <Phone className=&quot;mr-2 h-5 w-5&quot; />
                Call Now
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover: from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;></button>
                <Mail className=&quot;mr-2 h-5 w-5&quot; />
                Email Us
            </div>
          </div>
        </section>
      </div>
      <Footer />
</>
  )
}
export default LazyImagePage
=======
<<<<<<< HEAD

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  onLoad?: () => void
  onError?: () => void
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm"
        />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      )}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
          Failed to load
        </div>
      )}
    </div>
  )
}

export default LazyImage
=======
"use client";
import React from 'react';

const LazyImage = () => {
  return (
    <div>
      <h1>LazyImage</h1>
      <p>This component is under construction.</p>
    </div>
  );
};

export default LazyImage;
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
>>>>>>> main
