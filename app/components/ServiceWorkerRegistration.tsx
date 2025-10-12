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

  return (
    <div className="{`service-worker-registration" ${className}`} /></div>
      {updateAvailable && (

                <p className="text-gray-300">{feature.description}</p>
              </div>))}
          </div>
      </section>
      {/* Benefits Section */}

                <p className="text-gray-300text-lg">{benefit}</p>
              </div>))}
          </div>
      </section>
      {/* CTA Section */}
