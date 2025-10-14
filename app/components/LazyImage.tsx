import React from 'react';''
import { Helmet } from 'react-helmet-async';''
'use client';
const LazyImage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white"></div>
      <Helmet></Helmet>
ursor/fix-errors-and-merge-to-main-""94a""7
        <title>Lazy Image - Zion Tech Group</title>
        <meta name="description" content="Professional lazy image services by Zion Tech Group." /></meta>
      </Helmet>
      {/* Hero Section   */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100"></section>
        <div className="max-w-""6xl"" mx-auto text-center"></div>
          <h1 className="text-""5xl"" font-bold text-gray-900 mb-6"></h1>
            Lazy Image;
          </h1>;
          <p className="text-xl text-gray-600 max-w-""3xl"" mx-auto">;
            Professional lazy image services;
            designed to help your business grow and succeed.;
          </p>;
        </div>
      </section>;
      {/* Content Section */}
            Lazy Image</h1>
          <p className="text-xl text-gray-600 max-w-""3xl"" mx-auto"></p>
            Professional lazy image services
            designed to help your business grow and succeed.</p></div></section>{/* Content Section */}
      <section className="py-16 px-4"></section>
        <div className="max-w-""6xl"" mx-auto"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center"></div>
            <div></div>
              <h2 className="text-""3xl"" font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-lg text-gray-600 mb-6"></p>
                We provide comprehensive lazy image;
                solutions tailored to your specific needs and requirements.;
              </p>;
              <ul className="space-y-3">;
                <li className="flex items-center">;
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>;
                  Custom solutions;
                </li>;
                <li className="flex items-center">;
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>;
                  Expert consultation;
                </li>;
                <li className="flex items-center">;
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>;
                  Ongoing support;
                </li>;
              </ul>;
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">;
              <h3 className="text-""2xl"" font-bold mb-4">Get Started</h3>;
              <p className="mb-6">;
                Ready to transform your business with our lazy image services?;
              </p>;
              <a></a>
                href="/contact";
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors";
              >;
                Contact Us;
              </a>;
            </div>
          </div>
        </div>
      </section>;
      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">;
        <div className="max-w-""4xl"" mx-auto text-center">;
          <h2 className="text-""3xl"" font-bold text-white mb-6">;
            Ready to Get Started?;
          </h2>;'
          <p className="text-xl text-blue-100 mb-8">;''
            Let's discuss how our lazy image';
            services can help you achieve your goals.;
          </p>;
          <a></a>
            href="/contact";
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors";
          >;
            Get Started Today;
          </a>;
        </div>
      </section>;
    </div>
  );
};

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void
}
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,'
  className =;,''
  placeholder = 'data: image/svg+xml,base64,PHN""2ZyB""""3aWR""""0aD""""0iMjAwIiBoZWlnaHQ""""9IjIwMCIgeG""""1sbnM""""9Imh""""0dHA""""6Ly""""93d""""3cudzMub""""3JnLzIwMDAvc""""3ZnIj""""48cmVjdCB""""3aWR""""0aD""""0iMTAwJSIgaGVpZ""""2h""""0PSIxMDAlIiBmaWxsPSIjZjNmNGY""""2Ii""""8vPjwvc""""3ZnPg""==',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 });
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
    onError?.()
  }
  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}></div>
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}'`
          className={`transition-opacity duration-300 ${''
            isLoaded ? 'opacity-100' : 'opacity-0;`
          }`}
          loading="lazy"
        /></img>
)}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{'`
            backgroundImage: `url(${placeholder})`,''
            backgroundSize: 'cover',''
            backgroundPosition: 'center;
          }
        /></div>
)}
    </div>
  )
}
                We provide comprehensive lazy image
                solutions tailored to your specific needs and requirements.</p>
              <ul className="space-y-3"></ul>
                <li className="flex items-center"></li>
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Custom solutions</li>
                <li className="flex items-center"></li>
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Expert consultation</li>
                <li className="flex items-center"></li>
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Ongoing support</li></ul></div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white"></div>
              <h3 className="text-""2xl"" font-bold mb-4">Get Started</h3>
              <p className="mb-6"></p>
                Ready to transform your business with our lazy image services?</p>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"></a>
                Contact Us</a></div></div></div></section>{/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600"></section>
        <div className="max-w-""4xl"" mx-auto text-center"></div>',
          <h2 className="text-""3xl"" font-bold text-white mb-6"></h2>'
            Ready to Get Started?</h2>','
          <p className="text-xl text-blue-100 mb-8">''
            Let's discuss how our lazy image'
            services can help you achieve your goals.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"></a>
            Get Started Today</a></div></section></div>'
export default LazyImage''`
