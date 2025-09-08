
import { ChevronDown } from 'lucide-react';


export function MainNavigation() {const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);


      name: 'Home',
      href: '/',
      current: location.pathname === '/'
    } ]
    }
  ];

  const handleDropdownToggle = (index) => {setActiveDropdown(activeDropdown === index ? null : index)};


                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2"/>
                    IT Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud Migration</Link></li>
                    <li><Link to="/services/it-infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors">IT Infrastructure</Link></li>
                    <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">DevOps</Link></li>
                    <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
                <Link to="/services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center">
                  View All Services
                  <TrendingUp className="w-4 h-4 ml-2"/>
                </Link>
              </div>
            </div>
          ) : (


              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>











