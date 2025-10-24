import React from 'react'
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const LazyImage: React.FC = ($2) => {
$3;
}

        <section className="relative py-20 px-4 overflow-hidden">
    </sectio> </section><div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20">
    </di>
        <div className="relative max-w-7xl mx-auto text-center">
    </di> </div><h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
    </h>,,
              LazyImage;
            </h1>
            <p>Advanced LazyImage solution for modern businesses.</p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
    </di>
              <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
    </butto>,,
                Get Started;
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
    </butto>,,
                Learn More;
              </button>
            
          
        </section>

        {/* Features Section */}

        <section className="py-20 px-4">
    </sectio> </section><div className="max-w-7xl mx-auto">
    </di>
        <div className="text-center mb-16">
    </di> </div><h2 className="text-4xl font-bold text-white mb-4">
    </h>Key Features</h2>
              <p>Discover the powerful features that make LazyImage the perfect solution for your business.</p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
    </di>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
    </di> </div><h3 className="text-xl font-semibold text-white mb-3">
    </h>AI-Powered</h3>
                <p className="text-gray-300">Advanced AI algorithms for intelligent automation.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
    </di> </div><h3 className="text-xl font-semibold text-white mb-3">
    </h>Scalable</h3>
                <p className="text-gray-300">Grows with your business needs and requirements.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
    </di> </div><h3 className="text-xl font-semibold text-white mb-3">
    </h>Secure</h3>
                <p className="text-gray-300">Enterprise-grade security and data protection.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
    </di> </div><h3 className="text-xl font-semibold text-white mb-3">
    </h>Efficient</h3>
                <p className="text-gray-300">Optimized performance for maximum productivity.</p>
                </div>
              </div>
            </div>
        </section>

        {/* CTA Section */}

        <section className="py-20 px-4">
    </sectio> </section><div className="max-w-4xl mx-auto text-center">
    </di> </div><h2 className="text-4xl font-bold text-white mb-6">
    </h>Ready to Get Started?</h2>
            <p>Join thousands of businesses already using LazyImage to transform their operations.</p>
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
    </butto>,,
              Start Your Free Trial;
            </button>
            </div>
        </section>
        </div>
      </Footer>
      </div>

      <Footer />
    </Foote> </Footer></>
  )
}

const LazyImage: React.FC<LazyImageProps>
    </LazyImageProps> = (,{
  src,
  alt,
  className = '',
  placeholder = 'data: image/svg+xm,l;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+',
  onLoad,
  onError;
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>
    </HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }

          }

      { threshold: 0.1 }

    ,)

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = ($2: any) => ,{
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = ($2: any) => ,{
    setHasError(true)
    onError?.()
  }

  return (
  <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
    </di>
      {!isLoaded && !hasError && (
        <img;
)
          src={placeholder}

          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm"
        />
    </img>
      )}

      {isInView && (
        <img;
          src={src}

          alt={alt}

          onLoad={handleLoad}

          onError={handleError}

          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}

          loading="lazy"
        />
    </img>
      )}

      {hasError && (
        <div className="...">
    </di>
          Failed to load;
        </div>
      )}

    </div>
  )
}

export default LazyImage;