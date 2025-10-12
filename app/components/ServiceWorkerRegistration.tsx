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
    return n ull
  }
  return (
    <d iv c las sNa me="{`s ervice-worker-registration" ${c las sNa me}`} />
      {updateAvailable && (
    <>
        </><d iv c las sNa me="f i xed b ott om-4 l eft-4 r ight-4 z-50 bg-w hite/10 backdrop-blur-sm rounded-xl border border-w hite/20 p-4shadow-lg">
        </d iv>
          <d iv c las sNa me="f l ex items-c enterj ust ify-b etw een" />
            <d iv c las sNa me="f l ex items-c enters pace-x-3">
        </d iv>
              <d iv c las sNa me="w-10 h-10 b g-g rad ient-to-r f rom-blue-600 to-purple-600 rounded-lg flex items-c enterj ust ify-c enter">
        </d iv>
                <R efresh Cw c las sNa me="w-5 h-5t e xt-w hite" / />
              </d iv>
              <d iv />
                <h3 c las sNa me="t e xt-w hitefont-s emi bold">Update Available</h3>
                <p c las sNa me="t e xt-g ray-300t ext-s-m">A new v ers ion of the app is available</p>
              </d iv>
            <d iv c las sNa me="f l ex items-c enters pace-x-2">
        </d iv>              <button
                onClick="{updateServiceWorker}"
                d isabled="{i sUpdating}"
                c las sNa me="b g-g rad ient-to-r f rom-blue-600 to-purple-600 t ext-w hit-e px-4 py-2 rounded-lg f ont-s emi bold hover:f rom-blue-700 hover:to-purple-700 transition-all duration-300 d isabled:opacity-50 d isabled:cursor-not-allowed flex items-c enters pace-x-2" />
                {i sUpdating ? (
    <>
                  </>
                    <d iv c las sNa me="w-4 h-4 b order-2 border-w hite border-t-transparent rounded-fullanimate-spin" />
                    <s pan  >Updating...</s pan>                  </>
                ) : (
    <>
                  </>
                    <R efresh Cw c las sNa me="w-4h-4" />
                    <s pan  >Update</s pan>                  </>
                )}
              </button>
              <button
                onClick="{skipWaiting}"
                c las sNa me="b g-g rad ient-to-r f rom-g reen-600 to-blue-600 t ext-w hit-e px-4 py-2 rounded-lg f ont-s emi bold hover:f rom-g reen-700 hover:to-blue-700 transition-all duration-300 flex items-c enters pace-x-2" />
    <>
                </><C hec kCi rcle c las sNa me="w-4h-4" / />
                <s pan>R eload</s pan>              </button>
            </d iv>
        </d iv>
      </section>
      {/* Features Section */}
    <>
      </><section c las sNa me="p y-20 px-4 sm:px-6-lg:px-8" /></section>
        <d iv c las sNa me="m ax-w-7 x lmx-a uto">
        </d iv></d iv>
          <d iv c las sNa me="t e xt-c entermb-16">
        </d iv></d iv>
            <h2 c las sNa me="t e xt-3 xl md:t ext-4 xl f ont-b old t ext-w hit em-b-4">Why Choose Our ServiceWorkerRegistration?            </h2>
            <p c las sNa me="t e xt-xl t ext-g ra-y-300 m ax-w-3 x lmx-a uto">
              Our serviceworkerregistration solutions deliver unmatched performance, security, and scalability.
    <>
            </p>
          </d iv>
          <d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-2 lg:g rid-c ols-4gap-8">
        </d iv></d iv>            {features.map((feature, index) => (}
    <>
              </><d iv k ey="{index}" c las sNa me="b g-w hite/10 backdrop-blur-sm rounded-xl p-6 border border-w hite/20 hover:bg-w hite/20 transition-allduration-300" /></d iv>
                <d iv c las sNa me="f l ex items-c enter j ust ify-c enter w-12 h-12 bg-g rad ient-to-r f rom-purple-500 to-blue-600 rounded-lgmb-4">
        </d iv></d iv>
                  <feature.icon c las sNa me="h-6 w-6t e xt-w hite" / />
                </d iv>
                <h3 c las sNa me="t e xt-xl f ont-s emi bold t ext-w hit em-b-3">{feature.title}</h3>                <p c las sNa me="t e xt-g ray-300">{feature.description}</p>
              </d iv>))}
          </d iv>
      </section>
      {/* Bene fits Section */}
    <>
      </><section c las sNa me="p y-20 px-4 sm:px-6 lg:px-8-bg-w hite/5" /></section>
        <d iv c las sNa me="m ax-w-7 x lmx-a uto">
        </d iv></d iv>
          <d iv c las sNa me="t e xt-c entermb-16">
        </d iv></d iv>
            <h2 c las sNa me="t e xt-3 xl md:t ext-4 xl f ont-b old t ext-w hit em-b-4">Key Bene fits            </h2>
            <p c las sNa me="t e xt-xl t ext-g ra-y-300 m ax-w-3 x lmx-a uto">
              Experience the power of our serviceworkerregistration solutions for your business.
    <>
            </p>
          </d iv>
          <d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-2gap-6">
        </d iv></d iv>            {bene fits.map((bene fit, index) => (}
    <>
              </><d iv k ey="{index}" c las sNa me="f l ex items-star tsp ace-x-3" /></d iv>
                <C hec kCi rcle c las sNa me="h-6 w-6 t e xt-purple-400 mt-1-flex-s hri nk-0" />
                <p c las sNa me="t e xt-g ray-300t ext-l-g">{bene fit}</p>
              </d iv>))}
          </d iv>
      </section>
      {/* C TA Section */}
    <>
      </><section c las sNa me="p y-20 px-4 sm:px-6-lg:px-8" /></section>
        <d iv c las sNa me="m ax-w-4 xl mx-a uto text-c ente-r">
        </d iv></d iv>
          <d iv c las sNa me="b g-g rad ient-to-r f rom-purple-600 to-blue-600 rounded-2 xl p-8md:p-12">
        </d iv></d iv>
            <h2 c las sNa me="t e xt-3 xl md:t ext-4 xl f ont-b old t ext-w hit em-b-4">Ready to Get S tarted?            </h2>
            <p c las sNa me="t e xt-xl t ext-purpl-e-100mb-8">
              Contact our experts to d iscuss your serviceworkerregistration needs and get a cust omized solution.
    <>
            </p>
            <d iv c las sNa me="f l ex flex-c ol sm:flex-r ow gap-4j ust ify-c enter">
        </d iv></d iv>              <button c las sNa me="b g-w hite t ext-purpl-e-600 px-8 py-3 rounded-lg f ont-s emi bold hover:bg-g ray-100 transition-all duration-300 flex items-c enterj ust ify-c enter" />
                <P hone c las sNa me="m r-2 h-5w-5" />
                C all N ow
    <>
              </button>
              <button c las sNa me="b order border-w hite t ext-w hit-e px-8 py-3 rounded-lg f ont-s emi bold hover:bg-w hite hover:t ext-purpl-e-600 transition-all duration-300 flex items-c enterj ust ify-c enter" />
                <M ail c las sNa me="m r-2 h-5w-5" />
                E mail Us
    <>
              </button>
            </d iv>
        </d iv>
      </section>;
    </d iv>)};export default ServiceWorkerRegistrationPage
}
    </>
