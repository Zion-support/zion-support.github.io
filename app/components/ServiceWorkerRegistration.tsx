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

      // Listen for updates;
registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed') {
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
      console.error('Service worker registration failed:', error)
    }
  }

  const updateServiceWorker = async () => {
    if (!registration) return;
setIsUpdating(true)
    try {
      await registration.update()
      setUpdateAvailable(false)
    } catch (error) {
      console.error('Service worker update failed:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  const skipWaiting = async () => {
    if (!registration) return;
const newWorker = registration.waiting;
if (newWorker) {
      newWorker.postMessage({ type: 'SKIP_WAITING' })
      window.location.reload()
    }
  }

  if (!isSupported) {
    return null
  }

  return (
    <div>
      {updateAvailable && (
        <div>
          <div>
            <div>
              <div>
                <RefreshCw className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Update Available</h3>
                <p className="text-gray-300 text-sm">A new version of the app is available</p>
              </div>
            </div>
            <div>
              <button;
onClick={updateServiceWorker}
                disabled={isUpdating}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isUpdating ? (
                  <>
                    <div>
                    <span>Updating...</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    <span>Update</span>
                  </>
                )}
              </button>
              <button;
onClick={skipWaiting}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Reload</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section></section>
        <div></div>
          <div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our ServiceWorkerRegistration?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our serviceworkerregistration solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div></div>
            {features.map((feature, index) => (}
              <div></div>
                <div></div>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section></section>
        <div></div>
          <div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our serviceworkerregistration solutions for your business.
            </p>
          </div>
          <div></div>
            {benefits.map((benefit, index) => (}
              <div></div>
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section></section>
        <div></div>
          <div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your serviceworkerregistration needs and get a customized solution.
            </p>
            <div></div>
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
    </div>)};export default ServiceWorkerRegistrationPage
}
