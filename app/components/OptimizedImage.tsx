

import React from 'react';
<<<<<<< HEAD

=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
import { ArrowRight, Mail } from 'lucide-react';

  return (

        <title>5G Data Analytics - Zion Tech Group</title>
        <title>OptimizedImage | Zion Tech Group</title>

      {/* Hero Section */}
    
              <span className="bg-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent">OptimizedImage

              <span className="text-white">Solutions</span>
              Transform your business with our advanced optimizedimage solutions.
              Powered by cutting-edge AI technology and industry expertise.

                Get Started
    
                Learn More

      {/* Features Section */}
    
            <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Why Choose Our OptimizedImage?

              Our optimizedimage solutions deliver unmatched performance, security, and scalability.

 (
    
                <h3 className="text-xl font-semiboldtext-whitemb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>

            ))}
    
      {/* Benefits Section */}
    
              Key Benefits
  
              Experience the power of our optimizedimage solutions for your business.
    
 (
    
                <p className="text-gray-300text-lg">{benefit}</p>

            ))}
    
      {/* CTA Section */}
    
            <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4">Ready to Get Started?

              Contact our experts to discuss your optimizedimage needs and get a customized solution.
    
                Call Now

                Email Us

  )}
export default OptimizedImagePage

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
 void
 void

const OptimizedImage: React.FC<OptimizedImageProps /> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement />(null)

    if (priority) return

    const observer = new IntersectionObserver(
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)

 observer.disconnect()
  }, [priority])

    setIsLoaded(true)
    onLoad?.()

  };

=======
export default function OptimizedImage() {
  return (
    <>
      <Helmet>
        <title>Optimized Image - Zion Tech Group</title>
        <meta name="description" content="Professional optimized image by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Optimized Image</h1>
          <p className="text-lg text-gray-300 mb-8">Professional optimized image coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
