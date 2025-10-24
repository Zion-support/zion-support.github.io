'use client'
import React, { useEffect } from 'react'

<<<<<<< HEAD
<<<<<<< HEAD
const ServiceWorkerRegistration: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          // Service Worker registered successfully
        })
        .catch((error) => {
          // Service Worker registration failed - handle silently
        })
=======
const ServiceWorkerRegistrationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
const ServiceWorkerRegistration: React.FC = () => {}
  useEffect(() => {}
    if ('serviceWorker' in navigator) {}
      window.addEventListener('load', () => {}
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
}
            // Check for updates
            registration.addEventListener('updatefound', () => {}
              const newWorker = registration.installing;
              if (newWorker) {}
                newWorker.addEventListener('statechange', () => {}
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {}
                    // New content is available, notify user
                    if (confirm('New content is available. Reload to update?')) {}
                      window.location.reload();
                    }
                  }

              }

          })
          .catch((registrationError) => {

}
      // Listen for service worker messages
      navigator.serviceWorker.addEventListener('message', (event) => {}
        if (event.data && event.data.type === 'CACHE_UPDATED') {
}
        }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    }
  }, [])
<<<<<<< HEAD

  return null
}

<<<<<<< HEAD
export default ServiceWorkerRegistration
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>ServiceWorkerRegistration | Zion Tech Group</title>
        <meta name="description" content="Professional ServiceWorkerRegistration services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ServiceWorkerRegistration, AI solutions, IT services, Zion Tech Group, serviceworkerregistration" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ServiceWorkerRegistration
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced serviceworkerregistration solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
=======

    try {const registration = await navigator.serviceWorker.register('/sw.js')
      setRegistration(registration)
      setIsRegistered(true)
      // Listen for updates
        const newWorker = registration.installing
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                setUpdateAvailable(true)
                onUpdateAvailable?.()} else {onUpdateInstalled?.()}
            }
          })
        }
      })
    } catch (error) {console.error('Service worker registration failed: ', error)

    if (!registration) return

    setIsUpdating(true)
    try {
      await registration.update()
      setUpdateAvailable(false)} catch (error) {console.error('Service worker update failed: ', error)} finally {setIsUpdating(false)

    if (!registration) return
    const newWorker = registration.waiting
    if (newWorker) {
      newWorker.postMessage({ type: 'SKIP_WAITING'})
      window.location.reload()

  if (!isSupported) {return null;}

  return (
    <div className="{`service-worker-registration" ${className}`}   /></div>
      {updateAvailable && (

                <h3 className="text-whitefont-semibold">Update Available</h3>
                <p className="text-gray-300text-sm">A new version of the app is available</p>
              </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <button;
                onClick="{updateServiceWorker}"
                disabled="{isUpdating}"
                className="bg-gradient-to-rfrom-blue-600to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerspace-x-2"   /></button>
                {isUpdating ? (
                  <><  />
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <span  >Updating...</span>
                  <  />
                ) : (
                  <><  />
                    <RefreshCw className="w-5h-5ml-2"   /></RefreshCw>
                    <span  >Update</span>
                  <  />
                )}
              </button>
              <button;
                onClick="{skipWaiting}"
                className="bg-gradient-to-rfrom-green-600to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-centerspace-x-2"   /></button>
                <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
                <span  >Reload</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
              </button>
            </div></div></div></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our ServiceWorkerRegistration?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our serviceworkerregistration solutions deliver unmatched performance, security, and scalability.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div></div></div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
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
              Experience the power of our serviceworkerregistration solutions for your business.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div></div>
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
              Contact our experts to discuss your serviceworkerregistration needs and get a customized solution.
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
            </div></div></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceWorkerRegistrationPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======

      <section className="py-20 px-4 sm: px-6lg:px-8"   /></section>

        </div></div>
        </div></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-whitemb-4">Why Choose Our ServiceWorkerRegistration?

              Our serviceworkerregistration solutions deliver unmatched performance, security, and scalability.

        </div></div>

 (}

              <div key="{index}" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300"   /></div>

        </div></div>
                <h3 className="text-xl font-semibold text-whitemb-3">{feature.title}</h3>

                <p className="text-gray-300">{feature.description}</p>
              </div>
  ))}
          </div>
      </section>
      {/* Benefits Section */}

      <section className="py-20 px-4 sm:px-6 lg:px-8bg-white/5"   /></section>

        </div></div>
        </div></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-whitemb-4">Key Benefits

              Experience the power of our serviceworkerregistration solutions for your business.

        </div></div>

 (}

              <div key="{index}" className="flex items-startspace-x-3"   /></div>

                <p className="text-gray-300text-lg">{benefit}</p>
              </div>
  ))}
          </div>
      </section>
      {/* CTA Section */}

      <section className="py-20 px-4 sm:px-6lg:px-8"   /></section>

        </div></div>
        </div></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-whitemb-4">Ready to Get Started?

              Contact our experts to discuss your serviceworkerregistration needs and get a customized solution.

        </div></div>

                Call Now

                Email Us

      </section>;
    </div>
  )};export default ServiceWorkerRegistrationPage

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
