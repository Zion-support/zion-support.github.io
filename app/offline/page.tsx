'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, WifiOff, RefreshCw, Home, Phone, Mail, MapPin, Clock, AlertTriangle, CheckCircle, ArrowRight, BookOpen, Download, Star } from 'lucide-react';

const OfflinePage: React.FC = () => {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);
  const [retryCount, setRetryCount] = React.useState(0);

  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    window.location.reload();
  };

  const offlineResources = [
    {
      title: 'AI Services Overview',
      description: 'Learn about our comprehensive AI solutions',
      icon: BookOpen,
      available: true
    },
    {
      title: 'IT Solutions Guide',
      description: 'Explore our IT infrastructure services',
      icon: Download,
      available: true
    },
    {
      title: 'Contact Information',
      description: 'Get in touch with our team',
      icon: Phone,
      available: true
    },
    {
      title: 'Case Studies',
      description: 'View our success stories',
      icon: Star,
      available: false
    }
  ];

  const troubleshootingSteps = [
    {
      step: 1,
      title: 'Check Your Internet Connection',
      description: 'Make sure you\'re connected to a stable internet connection',
      icon: Wifi
    },
    {
      step: 2,
      title: 'Refresh the Page',
      description: 'Try refreshing the page to reload the content',
      icon: RefreshCw
    },
    {
      step: 3,
      title: 'Clear Browser Cache',
      description: 'Clear your browser cache and cookies',
      icon: AlertTriangle
    },
    {
      step: 4,
      title: 'Try a Different Network',
      description: 'Switch to a different Wi-Fi network or mobile data',
      icon: WifiOff
    }
  ];

  return (
    <>
      <Helmet>
        <title>Offline - Zion Tech Group | You're Currently Offline</title>
        <meta name="description" content="You're currently offline. Check your internet connection and try again." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            {/* Offline Icon */}
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
                <WifiOff className="w-16 h-16 text-red-400" />
              </div>
              <div className="absolute inset-0 w-32 h-32 mx-auto bg-red-400/20 rounded-full blur-lg"></div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              You're Offline
            </h1>
            
            <p className="text-xl md:text-2xl text-red-400 mb-8 font-medium cyber-glow">
              No Internet Connection
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              It looks like you're not connected to the internet. Don't worry, you can still access 
              some of our content and contact information while offline.
            </p>

            {/* Connection Status */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                isOnline ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {isOnline ? <Wifi className="w-5 h-5" /> : <WifiOff className="w-5 h-5" />}
                <span className="font-medium">
                  {isOnline ? 'Connection Restored' : 'No Connection'}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={handleRetry}
                className="cyber-button inline-flex items-center justify-center"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>
              <a
                href="/"
                className="cyber-button inline-flex items-center justify-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </a>
            </div>
          </div>

          {/* Offline Resources */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 neon-text">
              Available Offline
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offlineResources.map((resource, index) => (
                <div key={index} className={`cyber-card hologram-card p-6 text-center ${
                  resource.available ? 'hover:scale-105' : 'opacity-50'
                } transition-all duration-300`}>
                  <resource.icon className={`w-12 h-12 mx-auto mb-4 ${
                    resource.available ? 'text-cyan-400' : 'text-gray-500'
                  }`} />
                  <h3 className="text-lg font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  {resource.available ? (
                    <div className="flex items-center justify-center text-cyan-400 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Available</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center text-gray-500 text-sm">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      <span>Requires Internet</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Troubleshooting Steps */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 neon-text">
              Troubleshooting Steps
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {troubleshootingSteps.map((step, index) => (
                <div key={index} className="cyber-card hologram-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-cyan-400">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                    <step.icon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 cyber-card">
              <h2 className="text-2xl font-bold text-white text-center mb-8 neon-text">
                Need Help? Contact Us
              </h2>
              <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
                Even when you're offline, you can still reach us through these methods. 
                We're here to help with your AI and IT needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-cyan-400 font-medium">+1 (302) 464-0950</p>
                  <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM EST</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
                  <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-cyan-400 font-medium">Middletown, DE</p>
                  <p className="text-gray-400 text-sm">364 E Main St STE 1008</p>
                </div>
              </div>
            </div>
          </section>

          {/* Retry Information */}
          <section className="mb-16">
            <div className="cyber-card hologram-card p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4 neon-text">
                Connection Status
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                {isOnline 
                  ? 'Great! Your connection has been restored. You can now access all our services.'
                  : 'We\'re working to restore your connection. In the meantime, you can still access some content offline.'
                }
              </p>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Last checked: {new Date().toLocaleTimeString()}</span>
                <span>•</span>
                <span>Retry attempts: {retryCount}</span>
              </div>
            </div>
          </section>

          {/* Offline Features */}
          <section className="mb-16">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-2xl font-bold text-white text-center mb-8 neon-text">
                Offline Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">What's Available Offline</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Basic company information</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Contact details and phone numbers</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Service descriptions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Offline contact forms</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">What Requires Internet</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3" />
                      <span>Dynamic content and updates</span>
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3" />
                      <span>Interactive features and forms</span>
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3" />
                      <span>Real-time chat and support</span>
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3" />
                      <span>File downloads and resources</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default OfflinePage;