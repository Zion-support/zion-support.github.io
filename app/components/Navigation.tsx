
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon,
  EnvelopeIcon,
  ShareIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  EyeIcon,
  CircleStackIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  UserPlusIcon,


interface NavigationProps {
  onSidebarToggle?: () => void;
}


  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

    setIsServicesOpen(!isServicesOpen);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
    setIsCompanyOpen(false);
  };


    setIsSolutionsOpen(!isSolutionsOpen);
    setIsServicesOpen(false);
    setIsResourcesOpen(false);
    setIsCompanyOpen(false);
  };


    setIsResourcesOpen(!isResourcesOpen);
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsCompanyOpen(false);
  };


    setIsCompanyOpen(!isCompanyOpen);
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
  };

  return (

            </Link>
          </div>

          {/* Desktop Navigation */}

                          <span>{subItem.name}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}

              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}

                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (

                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
