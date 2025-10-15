import React, { useState } from 'react';



interface NavigationProps {
  onSidebarToggle?: () => void
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
  };

  
                        else if (item.name === 'Micro SaaS') toggleSolutionsMenu();
                        else if (item.name === 'IT Solutions') toggleResourcesMenu();
                        else if (item.name === 'Resources') toggleResourcesMenu();
                        else if (item.name === 'Company') toggleCompanyMenu();
                      }}
                      className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors text-gray-300 hover:text-white hover:bg-slate-700"
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      <span>{item.name}</span>
                      <ChevronDownIcon className="w-4 h-4 ml-auto" />
                    </button>

                    {/* Mobile Submenu */}
                    <div className={`pl-6 ${
                      (item.name === 'AI Services' && isServicesOpen) ||
                      (item.name === 'Micro SaaS' && isSolutionsOpen) ||
                      (item.name === 'IT Solutions' && isResourcesOpen) ||
                      (item.name === 'Resources' && isResourcesOpen) ||
                      (item.name === 'Company' && isCompanyOpen)
                        ? 'block' : 'hidden'
                    }`}>
                      {item.submenu.map((subItem) => (
                        <div key={subItem.name}>
                          <Link
                            to={subItem.href}
                            className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-700"
                            onClick={() => setIsOpen(false)}
                          >
                            <subItem.icon className="w-4 h-4 mr-3" />
                            <span>{subItem.name}</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-white bg-slate-700'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation