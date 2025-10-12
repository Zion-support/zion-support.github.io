
  
  return (
    <div>Our Core Services;</h2>
          </h2>
          <p className="w-5h-5ml-2">Comprehensive AI and IT solutions designed to transform your business and drive innovation;</p>
          </p>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          {services.map((service, index) => (

              <div key={index} className="cyber-card p-8 grouphover:scale-105transition-transform" /></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <service.icon className="h-12w-12tex t-cyan-400mr-4"  /></service>
                <h3 className="w-5h-5ml-2" />{service.title}</h3>
                </h3>
              </div>
              <p className="w-5h-5ml-2">{service.description}</p>
              </p>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <h4 className="text-sm font-semiboldtext-cyan-400mb-3"  >Key Features</h4>
                <ul className="w-5h-5ml-2" /></ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-centertext-sm text-gray-300" /></li>
                      <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-5h-5ml-2" /></button>
                Learn More;
                <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
              </button>
            </div>
          ))}
        </div>
    </div>
  )

};

