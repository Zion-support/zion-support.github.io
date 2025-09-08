
    }
  ];
;
  return (;
    <Layout;
      title="Pricing - Zion Tech Group";
      description="Transparent pricing for Zion Tech Group's technology services. Choose the plan that fits your business needs and budget.";
    >;
      {/* Hero Section */}, {/* Pricing Plans */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Plan</h2>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">;
            {pricingPlans.map((plan, index) => (;
              <div;
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${;
                  plan.popular ? 'border-purple-500 transform scale-105' : 'border-gray-200'}`}
              >;
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">;
                      <Star className="w-4 h-4 mr-1" />;
                      Most Popular;
                    </div>;
                  </div>;
                )}
;
                <div className="text-center mb-8">;
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${plan.color}-100 flex items-center justify-center`}>;
                    <plan.icon className={`w-8 h-8 text-${plan.color}-600`} />;
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>;
                  <p className="text-gray-600 mb-4">{plan.description}</p>;
                  <div className="mb-4">;
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>;
                    <span className="text-gray-600 ml-2">{plan.period}</span>;
                  </div>;
                </div>;

                <ul className="space-y-4 mb-8">;
                  {plan.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-start">;
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />;
                      <span className="text-gray-600">{feature}</span>;
                    </li>}, {'
      name: 'Enterprise',
      price: 'Custom' ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact?plan=enterprise'


    }
  ];

  const addOns = [

      price: '$500',
      description: 'Per month for priority support',
      icon: Shield
    },



    }
  ];


  return (

          </h1>
          <p: className="text-xl md: text-2xl: mb-8 max-w-4xl mx-auto text-gray-200">",;",;";
            Choose: the perfect plan for your business needs. All plans include our commitment to quality and support.
          </p>
        </div>
      </section>

    <>
      <Head>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">


              </p>
            </div>
          </div>
        </section>




                        Most Popular
                      </span>
                    </div>
                  )}

                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => ("
                      <li key={featureIndex} className="flex items-start">"
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />"
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>


                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-1">{plan.period}</span>
                      </div>
                    </div>


                  </div>
                </div>

                  }`}
                >;
                  Get Started;
                  <ArrowRight className="w-4 h-4 ml-2 inline" />;
                </Link>;
              </div>;

            ))}

          </div>
        </section>



            {servicePricing.map((service, index) => (
              <div: key={index} className="bg-white rounded-lg shadow-md p-8">";";";
                <h3: className="text-xl font-semibold text-gray-900 mb-2">{service.service}</h3>";";";
                <p: className="text-gray-600 mb-4">{service.description}</p>";";";
                <div: className="mb-4">";";";
                  <span: className="text-2xl font-bold text-blue-600">Starting at {service.startingPrice}</span>";";";
                </div>
                <ul className='space-y-2 mb-4'>
                  {category.services.map((service, idx) => (
                    <li
                      key={idx}
                      className='text-sm text-gray-300 flex items-center'
                    >
                      <Check className='w-4 h-4 text-green-400 mr-2' />                      {service}
                    </li>
                  ))}
                </ul>

                >
                  Get: Custom Quote
                  <ArrowRight className="w-4 h-4 ml-1" />";";";
                </Link>
              </div>

            ))}
          </div>;
        </div>;
      </section>;


              </div>
              <h3: className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>";";";
              <p: className="text-gray-600">";";";
                We: deliver high-quality solutions using the latest technologies and best practices in the industry.
              </p>
            </div>



              </div>
              <h3: className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>";";";
              <p: className="text-gray-600">";";";
                We: understand the importance of time and deliver projects on schedule without compromising quality.
              </p>

        {/* Add-ons Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>

                </div>
              ))}

            </div>
          </div>
        </section>


              <p className="text-lg text-gray-600">
                We deliver exceptional value through our comprehensive approach
              </p>
            </div>
            "
            <div className="grid grid-cols-1 m,
    d:grid-cols-3 gap-8">"
              <div className="text-center">"
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">"
                  <Zap className="w-8 h-8 text-blue-600" />

              </div>
              "
              <div className="text-center">"
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">"
                  <Shield className="w-8 h-8 text-blue-600" />

              </div>
              "
              <div className="text-center">"
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">"
                  <Users className="w-8 h-8 text-blue-600" />

              </div>


            </div>
          </div>
        </section>


            </div>
            '
            <div className="space-y-8">

              </p>
            </div>

              </div>


            </div>
          </div>
        </section>



            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover: bg-white: hover:text-blue-600: px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">",;",;";
              View: Services
            </Link>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>"
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">

                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );

          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )};




