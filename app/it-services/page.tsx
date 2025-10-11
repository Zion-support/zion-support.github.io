import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {

  const services = [
    {, } id: 1,
    };,
title: 'Cloud Infrastructure',;,
description: 'Scalable and secure cloud solutions for your business needs.',;,
icon: Cloud,,
    },
    {;,
id: 2,;,
title: 'Cybersecurity',;,
description: 'Comprehensive security solutions to protect your digital assets.',;,
icon: Shield,;,
features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Incident Response'],, 
price: 'From $1,000/month'},
    {icon: BarChart,
      title: 'Feature 2', 
      description: 'Description for feature 2.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']},
    {icon: CheckCircle,
      title: 'Feature 3',
      description: 'Description for feature 3.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']}
  ]

  const categories = [
    {id: 'all', name: 'All Services'},
    {id: 'cloud', name: 'Cloud Services'},
    {id: 'development', name: 'Web Development'},
    {id: 'security', name: 'Cybersecurity'},
    {id: 'database', name: 'Database'},
    {id: 'devops', name: 'DevOps'}
  ]

  const filteredServices = services.filter(service =>;
selectedCategory === 'all' || service.category === selectedCategory
  )
return (
    <>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
            {/* Hero Section */}
          </div>
        <section className="pt-20 pb-16 px-4 sm: px-6 l, g:px-8">
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

              )
    </>
  )
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>
            {/* Services Grid */}
          </div>
        <section className="py-16 px-4 sm: px-6 lg:px-8"
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 2>
                  Our IT Services>
                </h2>
              </h2>
              <p Transform your data into actionable insights with our advanced AI analytics platform>
                  $2
                </p>
              </p>
            </div>
      
      <Footer />
    </>
            <div $1>
            {feature}
          </div>
          </div>
                      </li>
                    ))}
                  </ul>
                  </button>
                </div>
      
      <Footer />
    </>
              ))}
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>
            {/* CTA Section */}
          </div>
          <div className="max-w-4xl mx-auto text-center"
            <h2 2>
                  Ready to Optimize Your IT Infrastructure?>
                </h2>
            </h2>
            <p Transform your data into actionable insights with our advanced AI analytics platform>
                  $2
                </p>
              </p>
              </button>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>
      </div>
      
      <Footer />
    </>
      <Footer />
    </>
  );
};

