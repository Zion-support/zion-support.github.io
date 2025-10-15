

const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: '5G Solutions',
      description: 'Comprehensive 5G technology solutions for modern businesses'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime'
    },
    {

    }
  ]
  return (
    <>

                  Learn More
                </button>
              </div>
            </div>

          </div>

                        Most Popular
                      </span>
                    </div>
                  )}

                        {feature}
                      </li>
                    ))}
                  </ul>

                    Get Started
                  </button>
                </div>

              Contact Us Today
            </button>
          </div>
        </div>
      </div>

            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};