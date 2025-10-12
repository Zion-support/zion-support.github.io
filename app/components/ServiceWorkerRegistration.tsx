'use client'

    {icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'}
    },
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'}
    },
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'}
    },
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'}
    }
  }, [])

  const registerServiceWorker = async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js')
      setRegistration(registration)
      setIsRegistered(true)

      // Listen for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state=== 'installed') {
              if (navigator.serviceWorker.controller) {
                setUpdateAvailable(true)
                onUpdateAvailable?.()
              } else {
                onUpdateInstalled?.()
              }
            }
          })
        }
      })
    } catch (error) {
      console.error('Service worker registration failed: ', error)
    }
  }

  const updateServiceWorker = async () => {
    if (!registration) return

    setIsUpdating(true)
    try {
      await registration.update()
      setUpdateAvailable(false)
    } catch (error) {
      console.error('Service worker update failed: ', error)
    } finally {
      setIsUpdating(false)
    }
  }

  const skipWaiting = async () => {
    if (!registration) return

    const newWorker = registration.waiting
    if (newWorker) {
      newWorker.postMessage({ type: 'SKIP_WAITING' })
      window.location.reload()
    }
  }

  if (!isSupported) {
    return null
  }

  return (
    <div className="{`service-worker-registration" ${className}`} />
      {updateAvailable && (
        <div className="fixed bottom-4 left-4 right-4 z-50 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 shadow-lg">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-5 h-5text-white" />
              </div>
              <div />
                <h3 className="text-whitefont-semibold"  >Update Available</h3>
                <p className="text-gray-300 text-sm">A new version of the app is available</p>
              </div>
            </div>
            <div className="flex items-center space-x-2" />
              <button
                onClick="{updateServiceWorker}"
                disabled="{isUpdating}"
                className="bg-gradient-to-rfrom-blue-600 to-purple-600 text-whitepx-4py-2rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
               />
                {isUpdating ? (
                  <>
      <div className="w-4h-4border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span  >Updating...</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4h-4" />
                    <span  >Update</span>
                  </>
                )}
              </button>
              <button
                onClick="{skipWaiting}"
                className="bg-gradient-to-rfrom-green-600 to-blue-600 text-whitepx-4py-2rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
               />
                <CheckCircle className="w-4h-4" />
                <span  >Reload</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20px-4sm:px-6lg:px-8" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="text-centermb-16" /></div>
            <h2 className="text-3xlmd:text-4xlfont-bold text-whitemb-4"  />Why Choose Our ServiceWorkerRegistration?
            </h2>
            <p className="text-xltext-gray-300 max-w-3xl mx-auto">
              Our serviceworkerregistration solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-8" /></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300" /></div>
                <div className="flex items-center justify-center w-12h-12bg-gradient-to-rfrom-purple-500 to-blue-600 rounded-lg mb-4" /></div>
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xlfont-semibold text-whitemb-3"  >{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20px-4sm:px-6lg:px-8bg-white/5" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="text-centermb-16" /></div>
            <h2 className="text-3xlmd:text-4xlfont-bold text-whitemb-4"  />Key Benefits
            </h2>
            <p className="text-xltext-gray-300 max-w-3xl mx-auto">
              Experience the power of our serviceworkerregistration solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2gap-6" /></div>
            {benefits.map((benefit, index) => (}
              <div key={index} className="flex items-start space-x-3" /></div>
                <CheckCircle className="h-6w-6text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20px-4sm:px-6lg:px-8" /></section>
        <div className="max-w-4xl mx-auto text-center" /></div>
          <div className="bg-gradient-to-rfrom-purple-600 to-blue-600 rounded-2 xl p-8 md:p-12" /></div>
            <h2 className="text-3xlmd:text-4xlfont-bold text-whitemb-4"  />Ready to Get Started?
            </h2>
            <p className="text-xltext-purple-100 mb-8">
              Contact our experts to discuss your serviceworkerregistration needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-center" /></div>
              <button className="bg-whitetext-purple-600 px-8py-3rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center" />
                <Phone className="mr-2 h-5w-5" />
                Call Now
              </button>
              <button className="border border-white text-whitepx-8py-3rounded-lg font-semibold hover:bg-whitehover:text-purple-600 transition-all duration-300 flex items-center justify-center" />
                <Mail className="mr-2 h-5w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>;
    </div>)};export default ServiceWorkerRegistrationPage
}
