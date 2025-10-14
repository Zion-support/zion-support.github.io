

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
    }
  }
  const updateServiceWorker = async () => {
    if (!registration) return
    }
  }
  const updateServiceWorker = async () => {;
    if (!registration) return;


  if (!isSupported) {
    return null;
  }

  return (
    <div>Content</div>
  );
    <div className = "{`service-worker-registration" ${className}`} /></div>
      {updateAvailable && (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <RefreshCw className="w-5h-5ml-2" /></RefreshCw>
              </div>
              <div /></div>
                <h3 className="text-whitefont-semibold"  >Update Available</h3>
                <p className="text-gray-300text-sm">A new version of the app is available</p>
              </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
              <button;                className = "bg-gradient-to-rfrom-blue-600to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerspace-x-2" /></button>
                onClick="{updateServiceWorker}"
                disabled="{isUpdating}"
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
              </button>;
              <button;                className = "bg-gradient-to-rfrom-green-600to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-centerspace-x-2" /></button>
                onClick="{skipWaiting}"
                <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                <span  >Reload</span>
              </button>
            </div>
        </div>
      </section>
      {/* Features Section */}
        </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                </div></div><RefreshCw className="w-5 h-5 ml-2" />
              </div>
              <div />
                </div></div><h3 className="text-whitefont-semibold"  >Update Available</h3>
                <p className="text-gray-300text-sm">A new version of the app is available</p>
              </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              </div></div><button onClick="{updateServiceWorker}"
                disabled="{isUpdating}"
                className="bg-gradient-to-rfrom-blue-600to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerspace-x-2" />
                {isUpdating ? (
                  <>
                    </><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    </div></div><span  >Updating...</span>
                  </>
                ) : (
                  <>
                    </><RefreshCw className="w-5 h-5 ml-2" />
                    <span  >Update</span>
                  </>
                )}
              </button>
              <button className="bg-gradient-to-rfrom-green-600to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-centerspace-x-2" />
                onClick="{skipWaiting}"
                <CheckCircle className="w-5 h-5 ml-2" />
                <span  >Reload</span>
              </button>
            </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="w-5 h-5 ml-2" /></section>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            <h2 className="w-5 h-5 ml-2" />Why Choose Our ServiceWorkerRegistration?
            </h2>
            <p className="w-5 h-5 ml-2">Our serviceworkerregistration solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            {features.map((feature, index) => (}
              <div key="{index}" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300" /></div></div></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                  <feature .icon className="h-6w-6te xt-white"  />
                </div>
                <h3 className="text-xl font-semibold text-whitemb-3"  >{feature.title}</h3>
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" />Why Choose Our ServiceWorkerRegistration?
            </h2>
            <p className="w-5h-5ml-2">Our serviceworkerregistration solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300" /></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <feature.icon className="h-6w-6tex t-white"  /></feature>
                </div>
                <h3 className="text-xl font-semibold text-whitemb-3"  >{feature.title}</h3>

                <p className="text-gray-300text-lg">{benefit}</p>
              </div>))}
          </div>
      </section>
      {/* CTA Section */}
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ComponentsPage() {
  return (
    <>
      <Helmet>
        <title>Components - Zion Tech Group</title>
        <meta name="description" content="Professional components services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Components</h1>
          <p className="text-lg text-gray-300 mb-8">Professional components services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
      <section className="w-5 h-5 ml-2" /></section>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            <h2 className="w-5 h-5 ml-2" />Ready to Get Started?
            </h2>
            <p className="w-5 h-5 ml-2">Contact our experts to discuss your serviceworkerregistration needs and get a customized solution.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <button className="w-5 h-5 ml-2" />
                <Phone className="w-5 h-5 ml-2" />
                Call Now
              </button>
              <button className="w-5 h-5 ml-2" />
                <Mail className="w-5 h-5 ml-2" />
                Email Us;
      </section>;
    </div>)};export default ServiceWorkerRegistrationPage
}
      <section className = "w-5h-5ml-2" /></section>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" />Ready to Get Started?
            </h2>
            <p className="w-5h-5ml-2">Contact our experts to discuss your serviceworkerregistration needs and get a customized solution.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <button className="w-5h-5ml-2" /></button>
                <Phone className="w-5h-5ml-2" /></Phone>;
                Call Now;
              </button>
              <button className = "w-5h-5ml-2" /></button>
                <Mail className="w-5h-5ml-2" /></Mail>;
                Email Us;
              </button>
            </div>
        </div>
      </section>;
    </div>)};export default ServiceWorkerRegistrationPage;
}
