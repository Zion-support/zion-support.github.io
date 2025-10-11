
const CybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'Multi-layered security solutions to protect against sophisticated cyber threats and attacks.'
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for all your sensitive data and communications.'
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring and real-time threat detection across all your systems.'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid response and recovery services to minimize damage from security breaches.'
    }
  ]

  const benefits = [
    'Protect sensitive business data',
    'Comply with industry regulations',
    'Prevent costly security breaches',
    'Maintain business continuity',
    'Build customer trust and confidence',
    'Reduce security-related downtime',
    'Access to security experts',
    'Customized security solutions'
  ]

        <title>Page | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with comprehensive cybersecurity solutions designed to defend against evolving threats and ensure data security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Shield className="mr-2 h-5 w-5" />
                Get Protected Now
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call (302) 464-0950
              </button>
            </div>
          </div>
        </div>
      </section>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
            ))}
          </div>
        </div>
      </section>
              </div>
            ))}
          </div>
        </div>
      </section>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CybersecurityPage