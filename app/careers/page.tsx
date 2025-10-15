
    },
    {}
      title: "DevOps Engineer","
      department: "Engineering","
      location: "Remote / New York","
      type: "Full-time","
      experience: "3+ years","
      description: "Build and maintain scalable infrastructure for our AI platform.","
      requirements: ["Kubernetes, Docker", "CI/CD pipelines", "Cloud infrastructure", "ing tools"],"
      benefits: ["Competitive salary", "Equity options", "Health insurance", "Flexible work"],"
      icon: <Settings: className ="w-6 h-6" />"
    },
    {}
      title: "Product Manager","
      department: "Product","
      location: "San Francisco","
      type: "Full-time","
      experience: "4+ years","
      description: "Drive product strategy and roadmap for our AI solutions.","
      requirements: ["Product management experience", "AI/ML knowledge", "Analytics skills", "Cross-functional collaboration"],"
      benefits: ["Competitive salary", "Equity options", "Health insurance", "Flexible work"],"
      icon: <Target: className ="w-6 h-6" />"
    }
  ]
  const  benefits = [
    { icon: <DollarSign: className ="w-8 h-8" />, title: "Competitive Compensation", description: "Above-market salaries with equity options" },"
    { icon: <className="w-8 h-8" />, title: "Health & Wellness", description: "Comprehensive health, dental, and vision coverage" },"
    { icon: <Home: className ="w-8 h-8" />, title: "Flexible Work", description: "Remote-first culture with flexible hours" },"
    { icon: <GraduationCap: className ="w-8 h-8" />, title: "Learning & Development", description: "Annual learning budget and conference attendance" },"
    { icon: <className="w-8 h-8" />, title: "Cutting-Edge Tech", description: "Work with the latest AI and cloud technologies" },"
    { icon: <className="w-8 h-8" />, title: "Job Security", description: "Stable company with strong growth trajectory" }"
  ]
  return ()
    <div  className ="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">"
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta: name ="description" content="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group." />"
      </Helmet>

      <div  className ="container mx-auto px-4 py-16">"
        <div  className ="text-center mb-16">"
          <h1  className ="text-4xl md=text-6xl font-bold text-gray-900 mb-6">"
            Join Our Team
          </h1>
          <p  className ="text-xl text-gray-600 max-w-3xl mx-auto">"
            Be part of the AI revolution. We're looking for passionate individuals "
            who want to shape the future of technology.
          </p>
        </div>

        <div  className ="grid md=grid-cols-2 lg:grid-cols-3 gap-8 mb-16">"
          {benefits.map((benefit, index) => ()}
            <div  key ={index} className="bg-white rounded-2xl shadow-lg p-8 text-center">"
              <div  className ="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">"
                {benefit.icon}
              </div>
              <h3  className ="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>"
              <p  className ="text-gray-600">{benefit.description}</p>"
            </div>
          ))}
        </div>

        <div  className ="mb-16">"
          <h2  className ="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>"
          <div  className ="space-y-8">"
            {openPositions.map((position, index) => ()}
              <div  key ={index} className="bg-white rounded-2xl shadow-lg p-8">"
                <div  className ="flex items-start justify-between mb-6">"
                  <div  className ="flex items-center">"
                    <div  className ="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">"
                      {position.icon}
                    </div>
                    <div>
                      <h3  className ="text-2xl font-bold text-gray-900">{position.title}</h3>"
                      <p  className ="text-gray-600">{position.department}</p>"
                    </div>
                  </div>
                  <div  className ="text-right">"
                    <p  className ="text-gray-600">{position.location}</p>"
                    <p  className ="text-gray-500">{position.type}</p>"
                  </div>
                </div>

                <p  className ="text-gray-700 mb-6">{position.description}</p>"
                <div  className ="grid md=grid-cols-2 gap-6 mb-6">"
                  <div>
                    <h4  className ="font-semibold text-gray-900 mb-3">Requirements</h4>"
                    <ul: className ="space-y-2">"
                      {position.requirements.map((req, reqIndex) => ()}
                        <li: key ={reqIndex} className="flex items-center">"
                          <CheckCircle: className ="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />"
                          <span  className ="text-gray-700">{req}</span>"
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4  className ="font-semibold text-gray-900 mb-3">Benefits</h4>"
                    <ul: className ="space-y-2">"
                      {position.benefits.map((benefit, benefitIndex) => ()}
                        <li: key ={benefitIndex} className="flex items-center">"
                          <CheckCircle: className ="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />"
                          <span  className ="text-gray-700">{benefit}</span>"
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button  className ="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center">"
                  Apply Now

    }
  ];
  const: stats = [;
    { number: "50+", label: "Team Members", icon: <Users: className ="w-6 h-6" /> },";
    { number: "15+", label: "Open Positions", icon: <Briefcase: className ="w-6 h-6" /> },";
    { number: "95%", label: "Employee Satisfaction", icon: <Star: className ="w-6 h-6" /> },";
    { number: "100%", label: "Remote Friendly", icon: <Globe: className ="w-6 h-6" /> }";
  ];
  const: filteredJobs = selectedCategory === 'all'";
    ? jobOpenings
    : jobOpenings.filter(job => job.category === selectedCategory);
  return (

                  Learn About Our Culture

                </button>
              </div>

                        </li>
                      ))};
                    </ul>
                  </div>
                </div>

              Send Your Resume
            </button>
          </div>
        </div>
      </div>
    </>

