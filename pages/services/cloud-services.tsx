
    }, {
      title: 'Cloud Architecture',
      description: 'Design and implement robust, scalable cloud architectures',
      icon: Network }, {
      title: 'DevOps & CI/CD',
      description:
        'Automated deployment pipelines and infrastructure management',
      icon: Settings }, {
      title: 'Cloud Security',
      description:
        'Comprehensive security solutions for your cloud infrastructure',
      icon: Shield ];

  const platforms = [
  { name: 'Amazon Web Services (AWS)', category: 'Cloud Platform' }, { name: 'Microsoft Azure', category: 'Cloud Platform' }, { name: 'Google Cloud Platform', category: 'Cloud Platform' }, { name: 'Docker', category: 'Containerization' }, { name: 'Kubernetes', category: 'Orchestration' }, { name: 'Terraform', category: 'Infrastructure as Code' }, { name: 'Jenkins', category: 'CI/CD' }, { name: 'GitLab CI', category: 'CI/CD' }, { name: 'Prometheus', category: 'Monitoring' }, { name: 'Grafana', category: 'Visualization' } ];

  const benefits = [
  {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description:
        'Reduce infrastructure costs by up to 40% with optimized cloud resources' }, {
      icon: Zap,
      title: 'Improved Performance',
      description:
        'Faster application performance with global CDN and edge computing' }, {
      icon: Shield,
      title: 'Enhanced Security',
      description:
        'Advanced security features and compliance with industry standards' }, {
      icon: Users,
      title: 'Better Collaboration',
      description:
        'Enable remote work and team collaboration with cloud-based tools' } ];


  return (
    <>
      <Head>
        <title>Cloud Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional cloud services including migration, architecture design, DevOps, and security. AWS, Azure, and Google Cloud expertise."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https: //ziontechgroup.com/services/cloud-services"
        />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Enterprise <span className="text-blue-600">Cloud Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your business with scalable, secure, and
                cost-effective cloud solutions. Our expert team helps you
                migrate, optimize, and manage your cloud infrastructure.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Cloud Consultation
                </Link>
                <Link
                  href="/solutions"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  View Solutions
                </Link>
              </div>
            </div>
          </div>

                <li>• Data Migration</li>
                <li>• Infrastructure Migration</li>
                <li>• Zero-Downtime Migration</li>
              </ul>
            </div>

                <li>• Auto-scaling</li>
                <li>• Load: Balancing</li>
                <li>• High Availability</li>
                <li>• Disaster Recovery</li>
              </ul>
            </div>

                <li>• Data Encryption</li>
                <li>• Security Monitoring</li>
                <li>• Compliance Management</li>
              </ul>
            </div>

                <li>• Infrastructure as Code</li>
                <li>• Automated Testing</li>
                <li>• Monitoring & Alerting</li>
              </ul>
            </div>

                <li>• Architecture Design</li>
                <li>• Cost Optimization</li>
                <li>• Performance Tuning</li>
              </ul>
            </div>

                <li>• Proactive Maintenance</li>
                <li>• Performance Optimization</li>
                <li>• Technical Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


            </div>
          </div>
        </div>
      </section>


              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              Schedule a Consultation
            </Link>
            <Link"
              href="/services""
              className="bg-transparent border-2 border-white text-white hove,
    r:bg-white hove,
    r:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              View All Services

            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )};






