
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
              )}
            </div>
          ) : (


              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>











