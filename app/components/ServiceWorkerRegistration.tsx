'use client';

    {icon: Brain,
      title: 'AI-PoweredSolutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',}
    },
    {icon: Zap,
      title: 'High Performan c e',
      description: 'Lightning-fastprocessingand real-timeanalyticsfor optimal results',}
    },
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-levelsecuritywith encryption and compliance standards',}
    },
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for internation a l businesses',}
    }
  }, [])

  const registerServiceWorker= async () => {
    try {
      const registration= await navigator.serviceWork e r.register('/sw.js')
      setRegistrati o n(registrati o n)
      setIsRegister e d(true)

      // Listen for updates;
      registrati o n.addEventListen e r('updatefou n d', () => {)
        constnewWorker= registrati o n.installing
        if (newWorker) {
          newWorker.addEventListen e r('statechan g e', () => {)
            if (newWorker.state === 'installed') {
              if (navigator.serviceWork e r.controller) {
                setUpdateAvailab l e(true)
                onUpdateAvailab l e?.()
              } else {
                onUpdateInstall e d?.()
              }
            }
          })
        }
      })
    } catch (error) {
      console.error('Service worker registrati o n failed: ', error)
    }
  }

  const updateServiceWorker= async () => {
    if (!registrati o n) return;

    setIsUpdati n g(true)
    try {
      await registrati o n.update()
      setUpdateAvailab l e(false)
    } catch (error) {
      console.error('Service worker update failed: ', error)
    } finally {
      setIsUpdati n g(false)
    }
  }

  const skipWaiting= async () => {
    if (!registrati o n) return;

    constnewWorker= registrati o n.waiting
    if (newWorker) {
      newWorker.postMessa g e({ type: 'SKIP_WAITI N G' ,})
      window.location.reload()
    }
  }

  if (!isSupport e d) {
    return null;
  }

return (
    <div className="{`service-worker-registration" ${className}`} />
      {updateAvailab l e && ()
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <RefreshCwclassName="w-5h-5ml-2" />
              </div>
              <div />
                <h3 className="text-whitefont-semibold"  >Update Available</h3>
                <p className="text-gray-300text-sm">A new version of the app is available</p>
              </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <button;
                onClick="{updateServiceWork e r}";
                disabled="{isUpdating}";
                className="bg-gradient-to-rfrom-blue-600to-purple-600text-whitepx-4py-2rounded-lgfont-semiboldhover:from-blue-700hover:to-purple-700transition-allduration-300disabled:opacity-50disabled:cursor-not-allowedflexitems-centerspace-x-2" />
                {isUpdating ? ()
                  <>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span  >Updating...</span>
                  </>
                ) : (
                  <>
                    <RefreshCwclassName="w-5h-5ml-2" />
                    <span  >Update</span>
                  </>
                )}
              </button>
              <button;
                onClick="{skipWaiti n g}";
                className="bg-gradient-to-rfrom-green-600to-blue-600text-whitepx-4py-2rounded-lgfont-semiboldhover:from-green-700hover:to-blue-700transition-allduration-300flexitems-centerspace-x-2" />
                <CheckCirc leclassName="w-5h-5ml-2" />
                <span  >Reload</span>
              </button>
            </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
            <h2 className="w-5h-5ml-2" />Why Choose Our ServiceWorkerRegistrati o n?;
            </h2>
            <p className="w-5h-5ml-2">Our serviceworkerregistrati o n solutions deliver unmatched performan c e, security, and scalabili t y.;
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
            {features.map((feature, index) => (}))
              <divkey="{index}" className="bg-white/10backdrop-blur-smrounded-xlp-6borderborder-white/20hover:bg-white/20transition-allduration-300" /></div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                  <feature.iconclassName="h-6w-6text-white"  />
                </div>
                <h3 className="text-xlfont-semiboldtext-whitemb-3"  >{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>))}
          </div>
      </section>
      {/* Benefits Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
            <h2 className="w-5h-5ml-2" />Key Benefits;
            </h2>
            <p className="w-5h-5ml-2">Experience the power of our serviceworkerregistrati o n solutions for your business.;
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
            {benefits.map((benefit, index) => (}))
              <divkey="{index}" className="flexitems-startspace-x-3" /></div>
                <CheckCirc leclassName="w-5h-5ml-2" />
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>))}
          </div>
      </section>
      {/* CTA Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
            <h2 className="w-5h-5ml-2" />Ready to Get Started?;
            </h2>
            <p className="w-5h-5ml-2">Contact our experts to discuss your serviceworkerregistrati o n needs and get a customized solution.;
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
              <button className="w-5h-5ml-2" />
                <PhoneclassName="w-5h-5ml-2" />
                Call Now;
              </button>
              <button className="w-5h-5ml-2" />
                <MailclassName="w-5h-5ml-2" />
                Email Us;
              </button>
            </div>
        </div>
      </section>;
    </div>)};export default ServiceWorkerRegistrationPa g e;
}
