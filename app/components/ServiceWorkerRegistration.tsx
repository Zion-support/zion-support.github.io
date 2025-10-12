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
    if (!registration) return
    }
  }
  const updateServiceWorker = async () => {
    if (!registration) return;
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
    return null;
  }
    }
  }
  if (!isSupported) {
    return null
  }
  return (
    <div className="{`service-worker-registration" ${className}`}></div>
      {updateAvailable && (
                <h3 className="text-whitefont-semibold">Update Available</h3>
                <p className="text-gray-300text-sm">A new version of the app is available<div><div></p>
              </div></div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
              <button;
                onClick="{updateServiceWorker}"
                disabled="{isUpdating}"
                className="bg-gradient-to-rfrom-blue-600to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerspace-x-2"><div></button></div></div></div>
                {isUpdating ? (
                  <><div></>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                    <span  >Updating...</span>
                  </>
                ) : (
                  <><div></>
                    <RefreshCw className="w-5h-5ml-2"><div></RefreshCw></div></div></div>
                    <span  >Update</span>
                  </>
                )}
              <div></button>
              <button;
                onClick="{skipWaiting}"
                className="bg-gradient-to-rfrom-green-600to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-centerspace-x-2"><div></button></div></div></div>
                <div><div><CheckCircle className="w-5h-5ml-2"></CheckCircle></div></div>
                <span  ></div>Reload<div><div></span>
              </button></div></div>
            </div><div></div>
        </div></div></div>
      </section>
      {/* Features Section */}
      <div><div><section className="py-20 px-4 sm:px-6lg:px-8"></section></div></div>
        </div></div><div><div></div></div></div>
        </div><div></div></div></div></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-whitemb-4">Why Choose Our ServiceWorkerRegistration?
              Our serviceworkerregistration solutions deliver unmatched performance, security, and scalability.
        </div></div>
 (}
              <div><div><div key="{index}" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300"></div></div></div>
        </div><div></div></div></div></div>
                <h3 className="text-xl font-semibold text-whitemb-3">{feature.title}<div></h3>
      <section className="w-5h-5ml-2"><div></section></div></div></div>
        <div><div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            <h2 className="w-5h-5ml-2" />Why Choose Our ServiceWorkerRegistration?
            </h2>
            <p className="w-5h-5ml-2">Our serviceworkerregistration solutions deliver unmatched performance, security, and scalability.
            <div><div></p>
          </div></div></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            {features.map((feature, index) => (}
              <div><div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div></div></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
                  <feature.icon className="h-6w-6tex t-white"><div></feature></div></div></div>
                </div>
                <h3 className="text-xl font-semibold text-whitemb-3"  >{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>))}
          </div>
      </section>
      {/* Benefits Section */}
      <div><div><section className="py-20 px-4 sm:px-6 lg:px-8bg-white/5"></section></div></div>
        </div></div><div><div></div></div></div>
        </div><div></div></div></div></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-whitemb-4">Key Benefits
              Experience the power of our serviceworkerregistration solutions for your business.
        </div></div>
 (}
              <div><div><div key="{index}" className="flex items-startspace-x-3"></div></div></div>
      <section className="w-5h-5ml-2"></div><div><div></section></div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
          <div><div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            <h2 className="w-5h-5ml-2" /></div>Key Benefits;
            </h2>
            <p className="w-5h-5ml-2">Experience the power of our serviceworkerregistration solutions for your business.
            <div><div></p>
          </div></div></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            {benefits.map((benefit, index) => (}
              <div><div><div key={index} className="flex items-startspace-x-3"></div></div></div>
                <CheckCircle className="w-5h-5ml-2"><div></div></CheckCircle></div></div>
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>))}
          </div>
      </section>
      {/* CTA Section */}
      <div><div><section className="py-20 px-4 sm:px-6lg:px-8"></section></div></div>
        </div></div><div><div></div></div></div>
        </div><div></div></div></div></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-whitemb-4">Ready to Get Started?
              Contact our experts to discuss your serviceworkerregistration needs and get a customized solution.
        </div></div>
                Call Now
                Email Us
      </section>;
    </div>)};export default ServiceWorkerRegistrationPage
      <div><div><section className="w-5h-5ml-2"></section></div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            <h2 className="w-5h-5ml-2" />Ready to Get Started?
            </h2>
            <p className="w-5h-5ml-2">Contact our experts to discuss your serviceworkerregistration needs and get a customized solution.
            <div></p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              <div><div><button className="w-5h-5ml-2"></button></div></div>
                <Phone className="w-5h-5ml-2"><div></div></Phone></div></div>
                Call Now;
              <div></button>
              <button className="w-5h-5ml-2"><div></button></div></div></div>
                <Mail className="w-5h-5ml-2"></Mail>
                Email Us;
              <div><div></button>
            </div></div></div>
        </div></div>
      </section>;
    </div>)};export default ServiceWorkerRegistrationPage;
}