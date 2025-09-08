
import { Link } from 'react-router-dom';
const HeroStats = memo(({ stats }) => (""
  <div className='grid grid-cols-1 md: grid-cols-4 gap-8 max-w-6xl mx-auto'>
    {stats.map((stat, index) => (""
      <div ''''
        key={index}''''

            role='img'''
            aria-label={stat.label}" >"
            {stat.icon}`
          </div>`
          <div ``
            className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}" ></div>`"
        </div>`
        <div ``
          className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}" >"
          {stat.number}''''
        </div>''''

        <div className='text-gray-400 font-medium'>{stat.label}</div>
      </div>
    ))}
  </div>
));
const PerformanceOptimizedHero = memo(() => {}
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {}
    const timer = setTimeout(() => setIsVisible(true), 100);
    const loadTimer = setTimeout(() => setIsLoaded(true), 500);
    return () => {}
      clearTimeout(timer)
      clearTimeout(loadTimer) }
  }, [])
  const stats = []
    {}""
''

      color: 'from-green-400 to-teal-400'}
  ];
  if (!isVisible) {}
"""
    return (""""
      <section className="relative py-20 px-4 overflow-hidden min-h-[600px] flex items-center justify-center">""""
        <div className="text-center">""""
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>""""
          <p className="text-cyan-400 text-lg font-medium">
            Loading Zion Tech Group...
          </p>
        </div>
      </section>
    ) }""
  return()''''
    <section ''''

      {/* Optimized Background Elements */}''''
      <div className='absolute inset-0 futuristic-bg'>''''
        <div ''''

              key={i}''''
              className='absolute text-cyan-400 text-xs animate-matrix-rain opacity-20'
              style={{}`
`
``
```
````
                left: `${Math.random() * 100}%`,````
                animationDelay: `${Math.random() * 20}s`,```'`
                animationDuration: `${20 + Math.random() * 10}s`}}''
            >'''
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>""
      )}''''
''''
      <div className='relative z-10 max-w-7xl mx-auto text-center'>''''
        <div className='animate-fade-in-up'>''''
          <h1 className='text-5xl md: text-7xl font-bold mb-6'>''''
            <span className='neon-text'>Transform Your Business</span>''''
            <br /" >''''"
            <span className='text-white'>With AI & Tech</span>""
          </h1>''''
''''
          <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>
            Discover cutting-edge AI services, Micro SAAS solutions, and
            comprehensive IT services designed to propel your business into the
            future.""
          </p>''''
''''
          <div className='flex flex-col sm: flex-row gap-4 justify-center items-center mb-12'>''''
            <Link ''''

              Get Free Consultation
            </Link>
          </div>

          {/* Optimized Stats Component */}
          <HeroStats stats={stats} />
        </div>
      </div>
      {/* Optimized Floating Elements */}, {isLoaded && (""
        <>''''
          <div ''''

      )}
    </section>




