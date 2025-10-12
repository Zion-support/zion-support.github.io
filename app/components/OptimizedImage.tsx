import React from 'react';
import { ArrowRight } from 'lucide-react';
ursor/analyze-improve-and-deploy-application-edcb
ursor/analyze-improve-and-deploy-application-edcb
'use client'

import { ArrowRight } from 'lucide-react';
import { ArrowRight, Mail } from 'lucide-react';
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      <Helmet />
        <title>OptimizedImage | Zion Tech Group</title>
        <meta name="description" content="Professional OptimizedImage services by Zion Tech Group. Advanced AI and IT solutions for your business."  />
        <meta name="keywords" content="OptimizedImage, AI solutions, IT services, Zion Tech Group, optimizedimage"  />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20px-4sm:px-6lg:px-8" />
        <div className="max-w-7xl mx-auto">
        <div className="text-center">
            <h1 className="text-4xlmd:text-6xlfont-bold text-whitemb-6" />
              <span className="bg-gradient-to-rfrom-purple-400 to-blue-400 bg-clip-text text-transparent"  />OptimizedImage
              </span>
              <br />
              <span className="text-white"  >Solutions</span>
            </h1>
            <p className="text-xltext-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced optimizedimage solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-center" />
              <button className="bg-gradient-to-rfrom-purple-500 to-blue-600 text-whitepx-8py-3rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center" />
                Get Started
                <ArrowRight className="ml-2 h-5w-5" />
              </button>
              <button className="border border-white text-whitepx-8py-3rounded-lg font-semibold hover:bg-whitehover:text-gray-900 transition-all duration-300" />
                Learn More
  </
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20px-4sm:px-6lg:px-8" />
        <div className="max-w-7xl mx-auto">
        <div className="text-centermb-16">
            <h2 className="text-3xlmd:text-4xlfont-bold text-whitemb-4"  />Why Choose Our OptimizedImage?
            </h2>
            <p className="text-xltext-gray-300 max-w-3xl mx-auto">
              Our optimizedimage solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-8" />
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300" />
                <div className="flex items-center justify-center w-12h-12bg-gradient-to-rfrom-purple-500 to-blue-600 rounded-lg mb-4" />
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xlfont-semibold text-whitemb-3"  >{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20px-4sm:px-6lg:px-8bg-white/5" />
        <div className="max-w-7xl mx-auto">
        <div className="text-centermb-16">
            <h2 className="text-3xlmd:text-4xlfont-bold text-whitemb-4" />
              Key Benefits
  </
            <p className="text-xltext-gray-300 max-w-3xl mx-auto">
              Experience the power of our optimizedimage solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2gap-6" />
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3" />
                <CheckCircle className="h-6w-6text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20px-4sm:px-6lg:px-8" />
        <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-rfrom-purple-600 to-blue-600 rounded-2 xl p-8 md:p-12">
            <h2 className="text-3xlmd:text-4xlfont-bold text-whitemb-4"  />Ready to Get Started?
            </h2>
            <p className="text-xltext-purple-100 mb-8">
              Contact our experts to discuss your optimizedimage needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-center" />
              <button className="bg-whitetext-purple-600 px-8py-3rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center" />
                <Phone className="mr-2 h-5w-5" />
                Call Now
  </
              <button className="border border-white text-whitepx-8py-3rounded-lg font-semibold hover:bg-whitehover:text-purple-600 transition-all duration-300 flex items-center justify-center" />
                <Mail className="mr-2 h-5w-5" />
                Email Us
  </
            </div>
          </div>
        </div>
      </section>
    </div>
  )}
export default OptimizedImagePage
  </button>
  </button>
  </h2>
  </button>
  </span>

interface OptimizedImageProps {
  src: string,
  alt: string
  className?: string
  width?: number
  height?: number
  quality?: number
  priority?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

const OptimizedImage: React.FC<OptimizedImageProps /> = ({
  src,
  alt,
  className='',
  width,
  height,
  priority=false,
  placeholder='empty',
  blurDataURL,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement />(null)

  useEffect(() => {
    if (priority) return

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
  }, [priority])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  };