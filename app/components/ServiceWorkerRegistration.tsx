'useclient'

    {icon: Brain,
      title: 'AI-PoweredSolutions',
      description: 'AdvancedAItechnologytotransformyourbusinessoperationsandimproveefficiency'}
    },
    {icon: Zap,
      title: 'HighPerformance',
      description: 'Lightning-fastprocessingandreal-timeanalyticsforoptimalresults'}
    },
    {icon: Shield,
      title: 'EnterpriseSecurity',
      description: 'Bank-levelsecuritywithencryptionandcompliancestandards'}
    },
    {icon: Globe,
      title: 'GlobalReach',
      description: 'Worldwidedeploymentandsupportforinternationalbusinesses'}
    }
  }, [])

  constregisterServiceWorker = async () => {
    try {
      constregistration = awaitnavigator.serviceWorker.register('/sw.js')
      setRegistration(registration)
      setIsRegistered(true)

      // Listenforupdatesregistration.addEventListener('updatefound', () => {
        constnewWorker = registration.installingif (newWorker) {
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
      console.error('Serviceworkerregistrationfailed: ', error)
    }
  }

  constupdateServiceWorker = async () => {
    if (!registration) returnsetIsUpdating(true)
    try {
      awaitregistration.update()
      setUpdateAvailable(false)
    } catch (error) {
      console.error('Serviceworkerupdatefailed: ', error)
    } finally {
      setIsUpdating(false)
    }
  }

  constskipWaiting = async () => {
    if (!registration) returnconstnewWorker = registration.waitingif (newWorker) {
      newWorker.postMessage({ type: 'SKIP_WAITING' })
      window.location.reload()
    }
  }

  if (!isSupported) {
    returnnull
  }

  return (
    <divclassName="{`s e rvice-worker-registration" ${className}`} />
      {updateAvailable && (
        <divclassName="f i xedbottom-4 left-4 right-4 z-50 bg-white/10 backdrop-blur-smrounded-xlborderborder-white/20 p-4shadow-lg">
          <divclassName="f l exitems-centerjustify-between">
            <divclassName="f l exitems-centerspace-x-3">
              <divclassName="w-10 h-10 b g-gradient-to-rfrom-blue-600 to-purple-600 rounded-lgflexitems-centerjustify-center">
                <RefreshCwclassName="w-5 h-5t e xt-white" />
              </div>
              <div>
            <h3 className="t e xt-whitefont-semibold"  >UpdateAvailable</h3>
                <pclassName="t e xt-gray-300text-sm">Anewversionoftheappisavailable</p>
              </div>
            <divclassName="f l exitems-centerspace-x-2">
              <buttononClick="{updateServiceWorker}"
                disabled="{isUpdating}"
                className="b g-gradient-to-rfrom-blue-600 to-purple-600 text-whitepx-4 py-2 rounded-lgfont-semiboldhover:from-blue-700 hover:to-purple-700 transition-allduration-300 disabled:opacity-50 disabled:cursor-not-allowedflexitems-centerspace-x-2" />
                {isUpdating ? (
    <>
                  <>
                    <divclassName="w-4 h-4 b o rder-2 border-whiteborder-t-transparentrounded-fullanimate-spin" />
                    <span  >Updating...</span>
                  </>
                ) : (
    <>
                  <>
                    <RefreshCwclassName="w-4h-4" />
                    <span  >Update</span>
                  </>
                )}
              </button>
              <buttononClick="{skipWaiting}"
                className="b g-gradient-to-rfrom-green-600 to-blue-600 text-whitepx-4 py-2 rounded-lgfont-semiboldhover:from-green-700 hover:to-blue-700 transition-allduration-300 flexitems-centerspace-x-2" />
                <CheckCircleclassName="w-4h-4" />
                <span  >Reload</span>
              </button>
            </div>
        </div>
      </section>
      {/* FeaturesSection */}
    <>
      <sectionclassName="p y-20 px-4 sm:px-6lg:px-8" /></section>
        <divclassName="m a x-w-7xlmx-auto"></div>
          <divclassName="t e xt-centermb-16"></div>
            <h2 className="t e xt-3 xlmd:text-4xlfont-boldtext-whitemb-4"  />WhyChooseOurServiceWorkerRegistration?
            </h2>
            <pclassName="t e xt-xltext-gray-300 max-w-3 xlmx-auto">
              Ourserviceworkerregistrationsolutionsdeliverunmatchedperformance, security, andscalability.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-1 md:grid-cols-2 lg:grid-cols-4gap-8"></div>
            {features.map((feature, index) => (}
    <>
              <divkey="{index}" className="b g-white/10 backdrop-blur-smrounded-xlp-6 borderborder-white/20 hover:bg-white/20 transition-allduration-300" /></div>
                <divclassName="f l exitems-centerjustify-centerw-12 h-12 bg-gradient-to-rfrom-purple-500 to-blue-600 rounded-lgmb-4"></div>
                  <feature.iconclassName="h-6 w-6t e xt-white" />
                </div>
                <h3 className="t e xt-xlfont-semiboldtext-whitemb-3"  >{feature.title}</h3>
                <pclassName="t e xt-gray-300">{feature.description}</p>
              </div>))}
          </div>
      </section>
      {/* BenefitsSection */}
    <>
      <sectionclassName="p y-20 px-4 sm:px-6 lg:px-8bg-white/5" /></section>
        <divclassName="m a x-w-7xlmx-auto"></div>
          <divclassName="t e xt-centermb-16"></div>
            <h2 className="t e xt-3 xlmd:text-4xlfont-boldtext-whitemb-4"  />KeyBenefits
            </h2>
            <pclassName="t e xt-xltext-gray-300 max-w-3 xlmx-auto">
              Experiencethepowerofourserviceworkerregistrationsolutionsforyourbusiness.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-1 md:grid-cols-2gap-6"></div>
            {benefits.map((benefit, index) => (}
    <>
              <divkey="{index}" className="f l exitems-startspace-x-3" /></div>
                <CheckCircleclassName="h-6 w-6 t e xt-purple-400 mt-1flex-shrink-0" />
                <pclassName="t e xt-gray-300text-lg">{benefit}</p>
              </div>))}
          </div>
      </section>
      {/* CTASection */}
    <>
      <sectionclassName="p y-20 px-4 sm:px-6lg:px-8" /></section>
        <divclassName="m a x-w-4 xlmx-autotext-center"></div>
          <divclassName="b g-gradient-to-rfrom-purple-600 to-blue-600 rounded-2 xlp-8md:p-12"></div>
            <h2 className="t e xt-3 xlmd:text-4xlfont-boldtext-whitemb-4"  />ReadytoGetStarted?
            </h2>
            <pclassName="t e xt-xltext-purple-100mb-8">
              Contactourexpertstodiscussyourserviceworkerregistrationneedsandgetacustomizedsolution.
    <>
            </p>
            <divclassName="f l exflex-colsm:flex-rowgap-4justify-center"></div>
              <buttonclassName="b g-whitetext-purple-600 px-8 py-3 rounded-lgfont-semiboldhover:bg-gray-100 transition-allduration-300 flexitems-centerjustify-center" />
                <PhoneclassName="m r-2 h-5w-5" />
                CallNow
    <>
              </button>
              <buttonclassName="b o rderborder-whitetext-whitepx-8 py-3 rounded-lgfont-semiboldhover:bg-whitehover:text-purple-600 transition-allduration-300 flexitems-centerjustify-center" />
                <MailclassName="m r-2 h-5w-5" />
                EmailUs
    <>
              </button>
            </div>
        </div>
      </section>;
    </div>)};exportdefaultServiceWorkerRegistrationPage
}
    </>
