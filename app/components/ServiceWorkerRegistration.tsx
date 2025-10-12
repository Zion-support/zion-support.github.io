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
  }, [])

    try {
      const registration = await navigator.serviceWorker.register('/sw.js')
      setRegistration(registration)
      setIsRegistered(true)

      // Listen for updates
        const newWorker = registration.installing
        if (newWorker) {
            if (newWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                setUpdateAvailable(true)
                onUpdateAvailable?.()
              } else {
                onUpdateInstalled?.()
          })
      })
    } catch (error) {
      console.error('Service worker registration failed: ', error)

    if (!registration) return

    setIsUpdating(true)
    try {
      await registration.update()
      setUpdateAvailable(false)
    } catch (error) {
      console.error('Service worker update failed: ', error)
    } finally {
      setIsUpdating(false)

    if (!registration) return

    const newWorker = registration.waiting
    if (newWorker) {
      newWorker.postMessage({ type: 'SKIP_WAITING' })
      window.location.reload()

  if (!isSupported) {
    return null

  return (
      {updateAvailable && (

                <h3 className="text-whitefont-semibold">Update Available</h3>
                <p className="text-gray-300text-sm">A new version of the app is available</p>

                {isUpdating ? (

                    <span>Updating...</span>

                ) : (

                    <span>Update</span>

                )}
                <span>Reload</span>

      {/* Features Section */}
    
      <section className="py-20 px-4 sm:px-6lg:px-8" /></section>

        </div></div>
        </div></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-whitemb-4">Why Choose Our ServiceWorkerRegistration?

              Our serviceworkerregistration solutions deliver unmatched performance, security, and scalability.

        </div></div>

 (}
    
              <div key="{index}" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300" /></div>

        </div></div>
                <h3 className="text-xl font-semibold text-whitemb-3">{feature.title}</h3>

                <p className="text-gray-300">{feature.description}</p>
              </div>))}
      {/* Benefits Section */}

      <section className="py-20 px-4 sm:px-6 lg:px-8bg-white/5" /></section>

        </div></div>
        </div></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-whitemb-4">Key Benefits

              Experience the power of our serviceworkerregistration solutions for your business.

        </div></div>

 (}
    
              <div key="{index}" className="flex items-startspace-x-3" /></div>

                <p className="text-gray-300text-lg">{benefit}</p>
              </div>))}
      {/* CTA Section */}

      <section className="py-20 px-4 sm:px-6lg:px-8" /></section>

        </div></div>
        </div></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-whitemb-4">Ready to Get Started?

              Contact our experts to discuss your serviceworkerregistration needs and get a customized solution.

        </div></div>

                Call Now
    
                Email Us
    
      </section>;
    </div>)};export default ServiceWorkerRegistrationPage

