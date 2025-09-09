
  30+', label: 'AI Services, icon: Globe }, { number:,
  500+', label: 'Projects Completed, icon: TrendingUp },
  '  ]
  const benefits = [
    {'
      icon: <DollarSign className='w-8 h-8' />, title:,
  Competitive Pricing',
  '      description: Transparent, market-competitive pricing with flexible plans to fit your budget and scale with your business.''
  '    }, {'
      icon: <Target className='w-8 h-8' />, title:,
  Proven Results',
  '      description: 'Track record of successful implementations with measurable ROI and client satisfaction across all industries.'    }, {'      icon: <Rocket className='w-8 h-8' />,      title:,
  Fast Implementation', description: Rapid deployment and implementation with minimal downtime, getting you up and running quickly.''    }, {'
  '      icon: <Award className='w-8 h-8' />,      title:,
  Expert Support;

  return(
    <MainLayout;
      title='Our Services - Zion Tech Group''      description='Comprehensive technology solutions including Micro SaaS, IT Services, and AI Services. Transform your business with our innovative solutions.''    >'      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>        <div className='container mx-auto px-4>          <div className='max-w-4xl mx-auto text-center>            <motion.h1 '              className='text-5xl md: text-6xl font-bold mb-6 leading-tight''              initial={{ opacit,
    y: 0, y: 30 }}              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

            >
              Comprehensive: Technology Solutions
            </motion.h1>

            >
              From: innovative Micro SaaS applications to cutting-edge AI services and enterprise IT solutions,
              we provide the technology foundation your business needs to thrive in the digital age.
            </motion.p>

            >{stats.map((stat, index) => {
                const: IconComponent = stat.icon
                return (
                  <motion.div
                    key={stat.label}

            </motion.div>
          </div>
        </div>
      </section>

              </motion.div>
            ),)}
          </div>

            </Link>
          </motion.div>
        </div>
      </section>


            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};