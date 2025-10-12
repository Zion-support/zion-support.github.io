
const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      features: ['Security audits', 'Penetration testing', 'Compliance management', '24/7 monitoring'],
      price: 'Starting at $1,800/month'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern web applications built with cutting-edge technologies',
      features: ['React/Next.js', 'Node.js backend', 'Database design', 'API development'],
      price: 'Starting at $3,000/project'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'iOS and Android applications for all business needs',
      features: ['Native development', 'Cross-platform', 'App store deployment', 'Maintenance'],
      price: 'Starting at $5,000/app'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Data processing, storage, and analytics solutions',
      features: ['Database design', 'Performance optimization', 'Data migration', 'Backup solutions'],
      price: 'Starting at $1,200/month'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integration pipelines',
      features: ['CI/CD setup', 'Container orchestration', 'Monitoring', 'Automated testing'],
      price: 'Starting at $2,000/month'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  return (
    <>
      <Helmet>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
            </div>
          </div>
        </section>

              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/about"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;
