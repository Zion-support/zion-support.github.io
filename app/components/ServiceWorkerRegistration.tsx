'use client'

    {icon: Brain,
      title: 'AI- Powered Solutions',
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

  const register ServiceWorker = async () => {
    try {
      constregistration = await navigator.service Worker.register('/sw.js')
      set Registration(registration)
      set Is Registered(true)

      // Listen for updates
      registration.add Event Listener('updatefound', () => {
        const newWorker = registration.installing
        if (newWorker) {
          new Worker.add Event Listener('statechange', () => {
            if (newWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                set Update Available(true)
                on Update Available?.()
              } else {
                on Update Installed?.()
              }
            }
          })
        }
      })
    } catch (error) {
      console.error('Serviceworker registrationfailed: ', error)
    }
  }

  const update ServiceWorker = async () => {
    if (!registration) return

    set Is Updating(true)
    try {
      await registration.update()
      set Update Available(false)
    } catch (error) {
      console.error('Serviceworker updatefailed: ', error)
    } finally {
      set Is Updating(false)
    }
  }

  const skipWaiting = async () => {
    if (!registration) return

    const newWorker = registration.waiting
    if (newWorker) {
      new Worker.post Message({ type: 'SKIP_WAITING' })
      window.location.reload()
    }
  }

  if (!isSupported) {
    return null
  }

  return (
    <div className ="{`service-worker-registration" ${className}`} />
      {updateAvailable && (
        <div className ="fixedbottom-4 left-4 right-4 z-50 bg-white/10 backdrop-blur-smrounded-xlborder border-white/20 p-4shadow-lg" />
          <div className ="flexitems-centerjustify-between" />
            <div className ="flexitems-centerspace-x-3" />
              <div className ="w-10 h-10 bg-gradient-to-rfrom-blue-600 to-purple-600 rounded-lgflex items-centerjustify-center" />
                <Refresh Cwclass Name="w-5 h-5text-white" / />
              </div>
              <div />
                <h3className ="text-whitefont-semibold"  >UpdateAvailable</h3>
                <pclassName ="text-gray-300text-sm">Anew versionof theapp isavailable</p>
              </div>
            </div>
            <div className ="flexitems-centerspace-x-2" />
              <buttononClick ="{updateService Worker}"
                disabled="{isUpdating}"
                className="bg-gradient-to-rfrom-blue-600 to-purple-600 text-whitepx-4 py-2 rounded-lgfont-semiboldhover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowedflex items-centerspace-x-2" />
                {isUpdating ? (
                  <>
                    <div className ="w-4 h-4 border-2 border-whiteborder-t-transparentrounded-fullanimate-spin" / />
                    <span  >Updating...</span>
                  </>
                ) : (
                  <>
                    <Refresh Cwclass Name="w-4h-4" / />
                    <span  >Update</span>
                  </>
                )}
              </button>
              <button
                onClick ="{skip Waiting}"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-centerspace-x-2" />
                <Check Circleclass Name="w-4h-4" / />
                <span  >Reload</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <sectionclassName ="py-20 px-4 sm:px-6lg:px-8" /></section>
        <div className ="max-w-7 xlmx-auto" /></div>
          <div className ="text-centermb-16" /></div>
            <h2className ="text-3 xl md:text-4 xl font-bold text-whitemb-4"  />Why Choose Our Service Worker Registration?
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-3 xlmx-auto" />
              Our serviceworkerregistration solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4gap-8" /></div>
            {features.map((feature, index) => (}
              <divkey ="{index}" className="bg-white/10 backdrop-blur-smrounded-xlp-6 borderborder-white/20 hover:bg-white/20 transition-allduration-300" /></div>
                <div className ="flexitems-centerjustify-centerw-12 h-12 bg-gradient-to-rfrom-purple-500 to-blue-600 rounded-lgmb-4" /></div>
                  <feature.iconclassName ="h-6 w-6text-white" / />
                </div>
                <h3className ="text-xlfont-semiboldtext-whitemb-3"  >{feature.title}</h3>
                <pclassName ="text-gray-300">{feature.description}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <sectionclassName ="py-20 px-4 sm:px-6 lg:px-8bg-white/5" /></section>
        <div className ="max-w-7 xlmx-auto" /></div>
          <div className ="text-centermb-16" /></div>
            <h2className ="text-3 xl md:text-4 xl font-bold text-whitemb-4"  />Key Benefits
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-3 xlmx-auto" />
              Experience the power of our serviceworkerregistration solutions for your business.
            </p>
          </div>
          <div className ="grid grid-cols-1 md:grid-cols-2gap-6" /></div>
            {benefits.map((benefit, index) => (}
              <divkey ="{index}" className="flexitems-startspace-x-3" /></div>
                <Check Circleclass Name="h-6 w-6 text-purple-400 mt-1flex-shrink-0" / />
                <pclassName ="text-gray-300text-lg">{benefit}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <sectionclassName ="py-20 px-4 sm:px-6lg:px-8" /></section>
        <div className ="max-w-4 xl mx-autotext-center" /></div>
          <div className ="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2 xl p-8md:p-12" /></div>
            <h2className ="text-3 xl md:text-4 xl font-bold text-whitemb-4"  />Ready to Get Started?
            </h2>
            <pclassName ="text-xl text-purple-100mb-8" />
              Contact our experts to discuss your serviceworkerregistration needs and get a customized solution.
            </p>
            <div className ="flex flex-col sm:flex-row gap-4justify-center" /></div>
              <buttonclassName ="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-centerjustify-center" />
                <Phoneclass Name ="mr-2 h-5w-5" / />
                Call Now
              </button>
              <buttonclassName ="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-centerjustify-center" />
                <Mailclass Name ="mr-2 h-5w-5" / />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>;
    </div>)};export default Service Worker Registration Page
}
