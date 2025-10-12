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

    try {
      const registration = await navigator.serviceWorker.register('/sw.js')
      setRegistration(registration)
      setIsRegistered(true)
      // Listen for updates
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

    setIsUpdating(true)
    try {
      await registration.update()
      setUpdateAvailable(false)
    } catch (error) {
      console.error('Service worker update failed: ', error)
    } finally {
      setIsUpdating(false)


  if (!isSupported) {
    return null;
  }

    }
  }
  if (!isSupported) {
    return null
  }
  return (
    <div className="{`service-worker-registration" ${className}`} /></div>
      {updateAvailable && (

                <h3 className="text-whitefont-semibold">Update Available</h3>
                <p className="text-gray-300text-sm">A new version of the app is available</p>
              </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <button;
                onClick="{updateServiceWorker}"
                disabled="{isUpdating}"
                className="bg-gradient-to-rfrom-blue-600to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerspace-x-2" /></button>
                {isUpdating ? (
                  <></>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <span  >Updating...</span>
                  </>
                ) : (
                  <></>
                    <RefreshCw className="w-5h-5ml-2" /></RefreshCw>
                    <span  >Update</span>
                  </>
                )}
              </button>
              <button;
                onClick="{skipWaiting}"
                className="bg-gradient-to-rfrom-green-600to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-centerspace-x-2" /></button>
                <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                <span  >Reload</span>
              </button>
            </div>
        </div>
      </section>
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
          </div>
      </section>
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
          </div>
      </section>
      {/* CTA Section */}

      <section className="py-20 px-4 sm:px-6lg:px-8" /></section>

        </div></div>
        </div></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-whitemb-4">Ready to Get Started?

              Contact our experts to discuss your serviceworkerregistration needs and get a customized solution.

        </div></div>

                Call Now
    
