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
        <div className="fixed bottom-4 left-4 right-4 z-50 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4shadow-lg" />
          <div className="flex items-centerjustify-between" />
            <div className="flex items-centerspace-x-3" />
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-centerjustify-center" />
                <RefreshCw className="w-5 h-5text-white" / />
              </div>
              <div />
                <h3 className="text-whitefont-semibold"  >Update Available</h3>
                <p className="text-gray-300text-sm">A new version of the app is available</p>
              </div>
            </div>
            <div className="flex items-centerspace-x-2" />
              <button
                onClick="{updateServiceWorker}"
                disabled="{isUpdating}"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerspace-x-2" />
                {isUpdating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-fullanimate-spin" / />
                    <span  >Updating...</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4h-4" / />
                    <span  >Update</span>
                  </>
                )}
              </button>
              <button
                onClick="{skipWaiting}"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-centerspace-x-2" />
                <CheckCircle className="w-4h-4" / />
                <span  >Reload</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6lg:px-8" /></section>
        <div className="max-w-7 xlmx-auto" /></div>
          <div className="text-centermb-16" /></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-whitemb-4"  />Why Choose Our ServiceWorkerRegistration?
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xlmx-auto" />
              Our serviceworkerregistration solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4gap-8" /></div>
            {features.map((feature, index) => (}
              <div key="{index}" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300" /></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lgmb-4" /></div>
                  <feature.icon className="h-6 w-6text-white" / />
                </div>
                <h3 className="text-xl font-semibold text-whitemb-3"  >{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8bg-white/5" /></section>
        <div className="max-w-7 xlmx-auto" /></div>
          <div className="text-centermb-16" /></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-whitemb-4"  />Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xlmx-auto" />
              Experience the power of our serviceworkerregistration solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2gap-6" /></div>
            {benefits.map((benefit, index) => (}
              <div key="{index}" className="flex items-startspace-x-3" /></div>
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1flex-shrink-0" / />
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6lg:px-8" /></section>
        <div className="max-w-4 xl mx-autotext-center" /></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2 xl p-8md:p-12" /></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-whitemb-4"  />Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100mb-8" />
              Contact our experts to discuss your serviceworkerregistration needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-center" /></div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-centerjustify-center" />
                <Phone className="mr-2 h-5w-5" / />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-centerjustify-center" />
                <Mail className="mr-2 h-5w-5" / />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>;
    </div>)};export default ServiceWorkerRegistrationPage
}
