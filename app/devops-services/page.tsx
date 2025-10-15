
import FuturisticCard from '../components/FuturisticCard'
import FuturisticButton from '../components/FuturisticButton'
import ResponsiveContainer from '../components/ResponsiveContainer'
import EnhancedSEO from '../components/EnhancedSEO'

const DevOpsServicesPage = () => {}
  const services = [
    {}
      title: "CI/CD Pipeline Setup"
      description: "Automated continuous integration and deployment pipelines for faster, more reliable software delivery"
      icon: <Zap className="w-8 h-8" />;"
      features: ["Automated testing", "Deployment automation", "Rollback capabilities", "Multi-environment support"]"
      price: "From $2,500/month"
    }"
    {}"
      title: "Infrastructure as Code"
      description: "Manage and provision infrastructure using code for consistency and scalability"
      icon: <Code className="w-8 h-8" />;"
      features: ["Terraform/CloudFormation", "Version control", "Environment consistency", "Cost optimization"]"
      price: "From $1,800/month"
    }"
    {}"
      title: "Container Orchestration"
      description: "Kubernetes and Docker container management for scalable applications"
      icon: <Cloud className="w-8 h-8" />;"
      features: ["Kubernetes setup", "Docker optimization", "Auto-scaling", "Service mesh"]"
      price: "From $3,200/month"
    }"
    {}"
      title: "Monitoring & Observability"
      description: "Comprehensive monitoring solutions for application and infrastructure health"
      icon: <BarChart3 className="w-8 h-8" />;"
      features: ["Real-time monitoring", "Alerting systems", "Performance metrics", "Log aggregation"]"
      price: "From $1,500/month"
    }"
    {}"
      title: "Security Automation"
      description: "Automated security scanning and compliance checks in your CI/CD pipeline"
      icon: <Shield className="w-8 h-8" />;"
      features: ["Vulnerability scanning", "Compliance checks", "Security testing", "Policy enforcement"]"
      price: "From $2,000/month"
    }"
    {}"
      title: "Cloud Migration"
      description: "Seamless migration to cloud platforms with zero downtime"
      icon: <Globe className="w-8 h-8" />;"
      features: ["AWS/Azure/GCP migration", "Data migration", "Application modernization", "Cost optimization"]"
      price: "From $5,000/month"
    }
  ]

  const benefits = ["
    {}"
      title: "Faster Deployments"
      description: "Reduce deployment time from hours to minutes"
      icon: <Clock className="w-6 h-6" />
    }"
    {}"
      title: "Improved Reliability"
      description: "99.9% uptime with automated failover and recovery"
      icon: <Shield className="w-6 h-6" />
    }"
    {}"
      title: "Cost Optimization"
      description: "Reduce infrastructure costs by up to 40%"
      icon: <BarChart3 className="w-6 h-6" />
    }"
    {}"
      title: "Team Productivity"
      description: "Focus on development, not infrastructure management"
      icon: <Users className="w-6 h-6" />
    }
  ]

  const process = ["
    {}"
      step: "1"
      title: "Assessment"
      description: "Analyze current infrastructure and identify improvement opportunities"
    }"
    {}"
      step: "2"
      title: "Strategy"
      description: "Develop a comprehensive DevOps strategy tailored to your needs"
    }"
    {}"
      step: "3"
      title: "Implementation"
      description: "Set up tools, processes, and automation workflows"
    }"
    {}"
      step: "4"
      title: "Training"
      description: "Train your team on new processes and best practices"
    }"
    {}"
      step: "5"
      title: "Support"
      description: "Ongoing monitoring, optimization, and support"
    }
  ]
"
  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      <EnhancedSEO"
        title="DevOps Services - Zion Tech Group | CI/CD, Infrastructure as Code, Cloud Migration"
        description="Professional DevOps services including CI/CD pipeline setup, infrastructure as code, container orchestration, and cloud migration. Accelerate your software delivery."
        keywords="DevOps services, CI/CD pipeline, infrastructure as code, Kubernetes, Docker, cloud migration, monitoring, automation"
        canonical="https://ziontechgroup.com/devops-services"
      />
"
      {/* Hero Section */}"
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>"
        <ResponsiveContainer className="text-center"></ResponsiveContainer>"
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>"
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></span>
              DevOps Services
            </span>"
          </h1>"
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"></p>
            Accelerate your software delivery with our comprehensive DevOps solutions. 
            From CI/CD pipelines to cloud migration, we help you build, deploy, and scale faster."
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <FuturisticButton"
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>"
            <FuturisticButton"
              href="/consultation"
              variant="outline"
              size="lg"
              icon={<Users className="w-5 h-5" />}
            >
              Free Consultation
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
"
      {/* Services Section */}"
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>"
        <ResponsiveContainer></ResponsiveContainer>"
          <div className="text-center mb-16"></div>"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Our DevOps Services"
            </h2>"
            <p className="text-xl text-gray-300 max-w-4xl mx-auto"></p>
              Comprehensive DevOps solutions designed to streamline your development workflow 
              and accelerate time-to-market.
            </p>"
          </div>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>"
            {services.map((service) => ("
              <FuturisticCard key={index} className="h-full"></FuturisticCard>"
                <div className="text-center mb-6"></div>"
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    {service.icon}"
                  </div>"
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>"
                  <p className="text-gray-300 mb-4">{service.description}</p>"
                  <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>"
                </div>"
                <ul className="space-y-2 mb-6"></ul>"
                  {service.features.map((feature, featureIndex) => ("
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300"></li>"
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>"
                <FuturisticButton"
                  href="/contact"
                  variant="outline"
                  size="sm"
                  className="w-full"
                ></FuturisticButton
>
                  Learn More
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>
"
      {/* Benefits Section */}"
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50"></section>"
        <ResponsiveContainer></ResponsiveContainer>"
          <div className="text-center mb-16"></div>"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Why Choose Our DevOps Services?"
            </h2>"
            <p className="text-xl text-gray-300 max-w-4xl mx-auto"></p>
              Transform your development process with proven DevOps practices and cutting-edge tools.
            </p>"
          </div>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
            {benefits.map((benefit) => ("
              <div key={index} className="text-center"></div>"
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  {benefit.icon}"
                </div>"
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>"
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>
"
      {/* Process Section */}"
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>"
        <ResponsiveContainer></ResponsiveContainer>"
          <div className="text-center mb-16"></div>"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Our DevOps Process"
            </h2>"
            <p className="text-xl text-gray-300 max-w-4xl mx-auto"></p>
              A proven methodology to transform your development and operations.
            </p>"
          </div>"
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8"></div>"
            {process.map((step) => ("
              <div key={index} className="text-center"></div>"
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg"></div>
                  {step.step}"
                </div>"
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>"
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>
"
      {/* CTA Section */}"
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30"></section>"
        <ResponsiveContainer className="text-center"></ResponsiveContainer>"
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Ready to Transform Your DevOps?"
          </h2>"
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"></p>
            Let our DevOps experts help you build a more efficient, reliable, and scalable development process."
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <FuturisticButton"
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your DevOps Journey
            </FuturisticButton>"
            <FuturisticButton"
              href="/consultation"
              variant="outline"
              size="lg"
              icon={<Users className="w-5 h-5" />}
            >
              Schedule Consultation
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
}
"
export default DevopsServicesPage;"
