'use client'

    {icon: Brain,
      title: 'A I-Powered Solutions',
      description: 'Advanced A I technology to transform your business operations and improve efficiency'}
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

  const register Service Worker = async () => {
    try {
      const registration = await navigator.service Worker.register('/sw.js')
      set Registration(registration)
      set Is Registered(true)

      // Listen for updates
      registration.add Event Listener('updatefound', () => {
        const new Worker = registration.installing
        if (new Worker) {
          new Worker.add Event Listener('statechange', () => {
            if (new Worker.state === 'installed') {
              if (navigator.service Worker.controller) {
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
      console.error('Service worker registration failed: ', error)
    }
  }

  const update Service Worker = async () => {
    if (!registration) return

    set Is Updating(true)
    try {
      await registration.update()
      set Update Available(false)
    } catch (error) {
      console.error('Service worker update failed: ', error)
    } finally {
      set Is Updating(false)
    }
  }

  const skip Waiting = async () => {
    if (!registration) return

    const new Worker = registration.waiting
    if (new Worker) {
      new Worker.post Message({ type: 'S KI P_ WA IT IN G' })
      window.location.reload()
    }
  }

  if (!is Supported) {
    return null
  }

  return (
    <d iv class Name="{`s ervice-worker-registration" ${class Name}`} />
      {update Available && (

        <d iv class Name="f ixed bottom-4 left-4 right-4 z-50 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4shadow-lg">
        </d iv>
          <d iv class Name="f lex items-centerjustify-between" />
            <d iv class Name="f lex items-centerspace-x-3">
        </d iv>
              <d iv class Name="w-10 h-10 b g-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-centerjustify-center">
        </d iv>
                <R efresh Cw class Name="w-5 h-5t ext-white" / />
              </d iv>
              <d iv />
                <h3 c lass Name="t ext-whitefont-semibold">Update Available</h3>
                <p c lass Name="t ext-gray-300text-sm">A new version of the app is available</p>
              </d iv>
            <d iv class Name="f lex items-centerspace-x-2">
        </d iv>
              <b utton
                on Click="{update Service Worker}"
                disabled="{is Updating}"
                class Name="b g-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerspace-x-2" />
                {is Updating ? (

                    <d iv class Name="w-4 h-4 b order-2 border-white border-t-transparent rounded-fullanimate-spin" / />
                    <s pan>Updating...</s pan>

                ) : (

                    <R efresh Cw class Name="w-4h-4" / />
                    <s pan>Update</s pan>

                )}
              </b utton>
              <b utton
                on Click="{skip Waiting}"
                class Name="b g-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-centerspace-x-2" />

                <C heck Circle class Name="w-4h-4" / />
                <s pan>Reload</s pan>
              </b utton>
            </d iv>
        </d iv>
      </s ection>
      {/* Features Section */}

      <s ection class Name="p y-20 px-4 sm:px-6lg:px-8" /></s ection>
        <d iv class Name="m ax-w-7 xlmx-auto">
        </d iv></d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv></d iv>
            <h2 c lass Name="t ext-3 xl md:text-4 xl font-bold text-whitemb-4">Why Choose Our Service Worker Registration?
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-3 xlmx-auto">
              Our serviceworkerregistration solutions deliver unmatched performance, security, and scalability.

            </p>
          </d iv>
          <d iv class Name="g rid grid-cols-1 md:grid-cols-2 lg:grid-cols-4gap-8">
        </d iv></d iv>
            {features.map((feature, index) => (}

              <d iv key="{index}" class Name="b g-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300" /></d iv>
                <d iv class Name="f lex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lgmb-4">
        </d iv></d iv>
                  <f eature.icon class Name="h-6 w-6t ext-white" / />
                </d iv>
                <h3 c lass Name="t ext-xl font-semibold text-whitemb-3">{feature.title}</h3>
                <p c lass Name="t ext-gray-300">{feature.description}</p>
              </d iv>))}
          </d iv>
      </s ection>
      {/* Benefits Section */}

      <s ection class Name="p y-20 px-4 sm:px-6 lg:px-8bg-white/5" /></s ection>
        <d iv class Name="m ax-w-7 xlmx-auto">
        </d iv></d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv></d iv>
            <h2 c lass Name="t ext-3 xl md:text-4 xl font-bold text-whitemb-4">Key Benefits
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-3 xlmx-auto">
              Experience the power of our serviceworkerregistration solutions for your business.

            </p>
          </d iv>
          <d iv class Name="g rid grid-cols-1 md:grid-cols-2gap-6">
        </d iv></d iv>
            {benefits.map((benefit, index) => (}

              <d iv key="{index}" class Name="f lex items-startspace-x-3" /></d iv>
                <C heck Circle class Name="h-6 w-6 t ext-purple-400 mt-1flex-shrink-0" />
                <p c lass Name="t ext-gray-300text-lg">{benefit}</p>
              </d iv>))}
          </d iv>
      </s ection>
      {/* C TA Section */}

      <s ection class Name="p y-20 px-4 sm:px-6lg:px-8" /></s ection>
        <d iv class Name="m ax-w-4 xl mx-autotext-center">
        </d iv></d iv>
          <d iv class Name="b g-gradient-to-r from-purple-600 to-blue-600 rounded-2 xl p-8md:p-12">
        </d iv></d iv>
            <h2 c lass Name="t ext-3 xl md:text-4 xl font-bold text-whitemb-4">Ready to Get Started?
            </h2>
            <p c lass Name="t ext-xl text-purple-100mb-8">
              Contact our experts to discuss your serviceworkerregistration needs and get a customized solution.

            </p>
            <d iv class Name="f lex flex-col sm:flex-row gap-4justify-center">
        </d iv></d iv>
              <b utton class Name="b g-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-centerjustify-center" />
                <P hone class Name="m r-2 h-5w-5" />
                Call Now

              </b utton>
              <b utton class Name="b order border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-centerjustify-center" />
                <M ail class Name="m r-2 h-5w-5" />
                Email Us

              </b utton>
            </d iv>
        </d iv>
      </s ection>;
    </d iv>)};export default Service Worker Registration Page
}
