'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

<<<<<<< HEAD
const LazyImagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
interface LazyImageProps {
  src: string;,
    alt: string,
interface LazyImageProps {}
  src: string,
  alt: string,
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps>= ({
const LazyImage: React.FC<LazyImageProps> = ({}
  src,
const LazyImage: React.FC<LazyImageProps> = ({,
  src;
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2 ZyB3 aWR0 aD0 iMjAwIiBoZWlnaHQ9 IjIwMCIgeG1 sbnM9 Imh0 dHA6 Ly93 d3 cudzMub3 JnLzIwMDAvc3 ZnIj48 cmVjdCB3 aWR0 aD0 iMTAwJSIgaGVpZ2 h0 PSIxMDAlIiBmaWxsPSIjZjNmNGY2 Ii8 vPjx0 ZXh0 IHg9 IjUwJSIgeT0 iNTAlIiBkb21 pbmFudC1 iYXNlbGluZT0 ibWlkZGxlIiB0 ZXh0 LWFuY2 hvcj0 ibWlkZGxlIiBmaWxsPSIjOWNhM2 FmIiBmb250 LWZhbWlseT0 ic2 Fucy1 zZXJpZiI+TG9 hZGluZy4 uLjwvdGV4 dD48 L3 N2 Zz4=',
  onLoad,
  onError}) => {}
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);</LazyImageProps>
  const [hasError, setHasError] = useState(false);</LazyImageProps>
  const imgRef = useRef<HTMLImageElement>(null);

  const [setNode, entry] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50 px')
    React.useEffect(() => {
    if (entry?.isIntersecting) {
  const [setNode, entry] = useIntersectionObserver({)
    threshold: 0.1),
    rootMargin: '50px'),
  React.useEffect(() => {,
    if (entry?.isIntersecting) {,
  const [setNode, entry] = useIntersectionObserver({)}
    threshold: 0.1,
    rootMargin: '50px',

  React.useEffect(() => {}
    if (entry?.isIntersecting) {}
      setIsInView(true);
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>LazyImage | Zion Tech Group</title>
        <meta name="description" content="Professional LazyImage services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="LazyImage, AI solutions, IT services, Zion Tech Group, lazyimage" />
      </Helmet>
  const handleError = () => {}
    setHasError(true);
    onError?.();
  };
</HTMLImageElement>
  return (<div ref={setNode} className={`relative overflow-hidden ${className}`}>{isInView && (<img

  return(<div ref={setNode} className={`relative overflow-hidden ${className}`}>
      {isInView && (</div>
        <img;
  return (<div ref={setNode} className={`relative overflow-hidden ${className}`}>{isInView && (</div><img
  return (
    <div ref={setNode} className={`relative overflow-hidden ${className}`}>
      {isInView && (}</div>
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
          className={`transition-opacity duration-300 ${}
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading="lazy"
        >)}</img>
</img>
      {!isLoaded && !hasError && (</img>
        </img><div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <img
          className={`transition-opacity duration-300 ${})
            isLoaded ? 'opacity-100' : 'opacity-0'})
          } ${className}`})
          loading="lazy")
        />)
      )}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                LazyImage
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced lazyimage solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our LazyImage?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our lazyimage solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
      {hasError && (}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
          <span>Failed to load image</span>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our lazyimage solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your lazyimage needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LazyImagePage;