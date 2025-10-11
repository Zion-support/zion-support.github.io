import React from 'react';
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const services = [
    {; } id: 1},;,
title: 'Cloud Infrastructure',;,
description: 'Scalable and secure cloud solutions for your business needs.',;,
icon: Cloud },
    {;,
id: 2,;,
title: 'Cybersecurity',;,
description: 'Comprehensive security solutions to protect your digital assets.',;,
icon: Shield,;,
features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Incident Response'],;,
price: 'From $1,000/month'} ,
    { icon: BarChart,
      title: 'Feature 2', 
      description: 'Description for feature 2.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ,
    { icon: CheckCircle,
      title: 'Feature 3',
      description: 'Description for feature 3.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ]

const categories = [
    { id: 'all', name: 'All Services'} ,
    { id: 'cloud', name: 'Cloud Services'} ,
    { id: 'development', name: 'Web Development'} ,
    { id: 'security', name: 'Cybersecurity'} ,
    { id: 'database', name: 'Database'} ,
    { id: 'devops', name: 'DevOps'} ]

const filteredServices = services.filter(service =>;
selectedCategory === 'all' || service.category === selectedCategory
  )
return (
    <>
      <Helmet />
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />
      <div>
          <div>
        <Navigation />
        {/* Hero Section */}

        <section className="pt-20 pb-16 px-4 sm: px-6 l, g: px-8"
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

        <section className="py-16 px-4 sm: px-6 lg: px-8"
          <div>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced AI analytics platform
              </p>
            </div>
      
      <Footer />
    </>
            <div>
                        {feature}

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

          <div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced AI analytics platform
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

