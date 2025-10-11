import { Helmet } from 'react-helmet-async'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  
  const toggleMenu = () => {
  return (
    <div>

    <div>
  
    setIsOpen(!isOpen)
  }

const toggleServices = () => {
  return (
    <div>

    <div>
  
    setIsServicesOpen(!isServicesOpen)
  }

const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: 
      description: 'Artificial Intelligence Solutions'
    },
    {
      title: 'IT Services',
      href: '/it-services',
      icon: 
      description: 'Information Technology Solutions'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      icon: 
      description: 'Cloud Computing Solutions'
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: 
      description: 'Micro Software as a Service'
    },
    {
      title: 'Digital Transformation',
      href: '/digital-transformation',
      icon: 
      description: 'Digital Business Transformation'
    },
    {
      title: '5G Implementation',
      href: '/5g-implementation',
      icon: 
      description: '5G Network Implementation'
    }
  ]

  return (
    <div>

    <nav>
  
      <div>
  
        <div>
  
          <div>
  
            <Link>
  
              <div>
  
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          <div>
  
            <div>
  
              <Link>
  
                Home
              </Link>
              <Link>
  
                About
              </Link>
              
              <div>
  
                <button>
  
                  Services
                  <ChevronDown>
  
                </button>
                
                {isServicesOpen && (
                  <div>
  
                    <div>
  
                      {services.map((service) => {
                        const IconComponent = service.icon
                        return (
    <div>

                          <Link
                            key={service.href}
                            to={service.href}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <IconComponent>
  
                            <div>
  
                              <div className="font-medium text-gray-900">{service.title}</div>
                              <div className="text-sm text-gray-500">{service.description}</div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              <Link>
  
                Contact
              </Link>
            </div>
          </div>

          <div>
  
            <button>
  
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div>
  
            <div>
  
              <Link
                to="/"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              <div>
  
                <button>
  
                  Services
                  <ChevronDown>
  
                </button>
                
                {isServicesOpen && (
                  <div>
  
                    {services.map((service) => {
                      const IconComponent = service.icon
                      return (
    <div>

                        <Link
                          key={service.href}
                          to={service.href}
                          className="text-gray-600 hover:text-purple-600 block px-3 py-2 text-sm font-medium flex items-center"
                          onClick={() => {
                            setIsOpen(false)
                            setIsServicesOpen(false)
                          }}
                        >
                          <IconComponent>
  
                          {service.title}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
