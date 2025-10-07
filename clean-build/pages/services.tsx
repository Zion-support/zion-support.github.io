import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
export default function Services() {
  return (<div>/* content */}
  const services = [
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      icon: '🌐',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Development & Integration',
        'Performance Optimization',
        'SEO & Analytics'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL']
    },
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
      features: [
        'iOS & Android Apps',
        'React Native Development',
        'Flutter Applications',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo']
    },
      title: 'AI Integration',
      description: 'Leverage artificial intelligence to automate processes and gain insights.',
      icon: '🤖',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Chatbots & Virtual Assistants',
        'Data Mining & Analysis'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'AWS AI']
    },
      title: 'Cloud Services',
      description: 'Scalable and secure cloud infrastructure solutions.',
      icon: '☁️',
      features: [
        'AWS/Azure/GCP Migration',
        'DevOps & CI/CD',
        'Containerization',
        'Microservices Architecture',
        'Auto-scaling Solutions',
        'Disaster Recovery'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform']
    },
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.',
      icon: '📊',
      features: [
        'Business Intelligence',
        'Data Visualization',
        'ETL Pipelines',
        'Real-time Analytics',
        'Dashboard Development',
        'Data Warehousing'
      ],
      technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark', 'Elasticsearch']
    },
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions.',
      icon: '🔒',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response',
        'Security Monitoring',
        'Vulnerability Assessment'
      ],
      technologies: ['SIEM', 'WAF', 'IDS/IPS', 'OWASP'; 'NIST'; 'ISO 27001']
    }
  ])
  return (
    <div>
      <div></div>
    <div></div>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions including web development, mobile apps, AI integration, cloud services, data analytics, and cybersecurity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-left"></div>
        {/* Hero Section */}
        <section className="text-left"></section>
          <div className="text-left">
        <div className="text-left"></div>
            <div className="text-left"></div>
              <h1 className="text-left">
                Our <span className="text-left">Services<
              </h1>
              <p className="text-left"></p>
                Comprehensive technology solutions designed to accelerate your business growth
                and digital transformation. From web development to AI integration) we've got you covered.
              </p>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="text-left"></section>
          <div className="text-left">
        <div className="text-left"></div>
              {services.map((service} index) => (
                <div key={index} className="text-left"></div>
                  <div className="text-left">
        <div className="text-left"></div>
                      {service.icon}
                    </div>
                    <div className="text-left"></div>
                      <h3 className="text-left">{service.title}</h3>
                      <p className="text-left">{service.description}</p>
                      <div className="text-left"></div>
                        <h4 className="text-left">Key Features: </h4>
                        <ul className="text-left">
                          {service.features.map((feature} featureIndex) => (
                            <li key={featureIndex} className="text-left">
                              <span className="text-left"><
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div></div>
                        <h4 className="text-left">Technologies: </h4>
                        <div className="text-left"></div>
                          {service.technologies.map((tech} techIndex) => (
                            <span key={techIndex} className="text-left"></span>
                              {tech}
                            <
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Process Section */}
        <section className="text-left"></section>
          <div className="text-left">
        <div className="text-left"></div>
              <h2 className="text-left">
                Our <span className="text-left">Process<
              </h2>
              <p className="text-left"></p>
                A proven methodology that ensures successful project delivery and client satisfaction.
              </p>
            </div>
            <div className="text-left">
        <div className="text-left"></div>
                <div className="text-left"></div>
                  1
                </div>
                <h3 className="text-left">Discovery</h3>
                <p className="text-left"></p>
                  We start by understanding your business goals, requirements, and challenges to create a tailored solution.
                </p>
              </div>
              <div className="text-left">
        <div className="text-left"></div>
                  2
                </div>
                <h3 className="text-left">Planning</h3>
                <p className="text-left"></p>
                  We create a detailed project plan with timelines, milestones, and deliverables to ensure smooth execution.
                </p>
              </div>
              <div className="text-left">
        <div className="text-left"></div>
                  3
                </div>
                <h3 className="text-left">Development</h3>
                <p className="text-left"></p>
                  Our expert team builds your solution using agile methodologies with regular updates and feedback.
                </p>
              </div>
              <div className="text-left">
        <div className="text-left"></div>
                  4
                </div>
                <h3 className="text-left">Launch</h3>
                <p className="text-left"></p>
                  We deploy your solution and provide ongoing support to ensure optimal performance and user satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Industries Section */}
        <section className="text-left"></section>
          <div className="text-left">
        <div className="text-left"></div>
              <h2 className="text-left">
                Industries We <span className="text-left">Serve<
              </h2>
              <p className="text-left"></p>
                We have experience working across various industries, delivering tailored solutions for each sector.
              </p>
            </div>
            <div className="text-left"></div>
              {[
                { name: 'Healthcare'} icon: '🏥' },
                {name: 'Finance'} icon: '💰' },
                {name: 'E-commerce'} icon: '🛒' },
                {name: 'Education'} icon: '🎓' },
                {name: 'Manufacturing'} icon: '🏭' },
                {name: 'Real Estate'} icon: '🏠' }
              ].map((industry) index) => (
                <div key={index} className="text-left"></div>
                  <div className="text-left">{industry.icon}</div>
                  <h3 className="text-left">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-left"></section>
          <div className="text-left"></div>
            <h2 className="text-left">
              Ready to Get Started?
            </h2>
            <p className="text-left"></p>
              Let's discuss how our services can help transform your business.
              Contact us today for a free consultation and project estimate.
            </p>
            <div className="text-left"></div>
              <Link href="/<contact" className="text-left">
                Get Free Consultation
              </Link>
              <Link href="/<pricing" className="text-left">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
})
import React from 'react'' import Head from 'next/head'' import Link from 'next/link' export default function Services() { return (<div>/* content */} const services = [ ' title: 'Web Development',' description: 'Modern, responsive web applications built with cutting-edge technologies.',' icon: '🌐', features: [' 'Custom Web Applications',' 'E-commerce Solutions',' 'Progressive Web Apps',' 'API Development & Integration',' 'Performance Optimization',' 'SEO & Analytics' ],' technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL'] }, ' title: 'Mobile Development',' description: 'Native and cross-platform mobile applications for iOS and Android.',' icon: '📱', features: [' 'iOS & Android Apps',' 'React Native Development',' 'Flutter Applications',' 'App Store Optimization',' 'Push Notifications',' 'Offline Functionality' ],' technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo'] }, ' title: 'AI Integration',' description: 'Leverage artificial intelligence to automate processes and gain insights.',' icon: '🤖', features: [' 'Machine Learning Models',' 'Natural Language Processing',' 'Computer Vision',' 'Predictive Analytics',' 'Chatbots & Virtual Assistants',' 'Data Mining & Analysis' ],' technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'AWS AI'] }, ' title: 'Cloud Services',' description: 'Scalable and secure cloud infrastructure solutions.',' icon: '☁️', features: [' 'AWS/Azure/GCP Migration',' 'DevOps & CI/CD',' 'Containerization',' 'Microservices Architecture',' 'Auto-scaling Solutions',' 'Disaster Recovery' ],' technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'] }, ' title: 'Data Analytics',' description: 'Transform your data into actionable insights with advanced analytics.',' icon: '📊', features: [' 'Business Intelligence',' 'Data Visualization',' 'ETL Pipelines',' 'Real-time Analytics',' 'Dashboard Development',' 'Data Warehousing' ],' technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark', 'Elasticsearch'] }, ' title: 'Cybersecurity',' description: 'Protect your business with comprehensive security solutions.',' icon: '🔒', features: [' 'Security Audits',' 'Penetration Testing',' 'Compliance Management',' 'Incident Response',' 'Security Monitoring',' 'Vulnerability Assessment' ],' technologies: ['SIEM', 'WAF', 'IDS/IPS', 'OWASP'; 'NIST'; 'ISO 27001'] } ]) return ( <div> <div></div> <div></div> <Head> <title>Our Services - Zion Tech Group</title> <meta name="description" content="Comprehensive technology solutions including web development, mobile apps, AI integration, cloud services, data analytics, and cybersecurity." /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <link rel="icon" href="/favicon.ico" /> </Head> <div></div> {/* Hero Section */} <section></section> <div></div> <div></div> <div></div> <h1 className="text-left" > Our <span className="text-left" >Services< </h1> <p></p> Comprehensive technology solutions designed to accelerate your business growth ' and digital transformation. From web development to AI integration) we've got you covered. </p> </div> </div> </section> {/* Services Grid */} <section></section> <div></div> <div></div> {services.map((service} index) => ( <div></div> <div></div> <div></div> {service.icon} </div> <div></div> <h3 className="text-left" >{service.title}</h3> <p className="text-left" >{service.description}</p> <div></div> <h4 className="text-left" >Key Features: </h4> <ul className="text-left" > {service.features.map((feature} featureIndex) => ( <li key={featureIndex} className="text-left" > <span className="text-left" >< {feature} </li> ))} </ul> </div> <div></div> <h4 className="text-left" >Technologies: </h4> <div></div> {service.technologies.map((tech} techIndex) => ( <span></span> {tech} < ))} </div> </div> </div> </div> </div> ))} </div> </div> </section> {/* Process Section */} <section></section> <div></div> <div></div> <h2 className="text-left" > Our <span className="text-left" >Process< </h2> <p></p> A proven methodology that ensures successful project delivery and client satisfaction. </p> </div> <div></div> <div></div> <div></div> 1 </div> <h3 className="text-left" >Discovery</h3> <p></p> We start by understanding your business goals, requirements, and challenges to create a tailored solution. </p> </div> <div></div> <div></div> 2 </div> <h3 className="text-left" >Planning</h3> <p></p> We create a detailed project plan with timelines, milestones, and deliverables to ensure smooth execution. </p> </div> <div></div> <div></div> 3 </div> <h3 className="text-left" >Development</h3> <p></p> Our expert team builds your solution using agile methodologies with regular updates and feedback. </p> </div> <div></div> <div></div> 4 </div> <h3 className="text-left" >Launch</h3> <p></p> We deploy your solution and provide ongoing support to ensure optimal performance and user satisfaction. </p> </div> </div> </div> </section> {/* Industries Section */} <section></section> <div></div> <div></div> <h2 className="text-left" > Industries We <span className="text-left" >Serve< </h2> <p></p> We have experience working across various industries, delivering tailored solutions for each sector. </p> </div> <div></div> {[' { name: 'Healthcare'} icon: '🏥' },' {name: 'Finance'} icon: '💰' },' {name: 'E-commerce'} icon: '🛒' },' {name: 'Education'} icon: '🎓' },' {name: 'Manufacturing'} icon: '🏭' },' {name: 'Real Estate'} icon: '🏠' } ].map((industry) index) => ( <div></div> <div className="text-left" >{industry.icon}</div> <h3 className="text-left" >{industry.name}</h3> </div> ))} </div> </div> </section> {/* CTA Section */} <section></section> <div></div> <h2 className="text-left" > Ready to Get Started? </h2> <p></p>' Let's discuss how our services can help transform your business. Contact us today for a free consultation and project estimate. </p> <div></div> <Link href="/<contact" className="text-left" > Get Free Consultation </Link> <Link href="/<pricing" className="text-left" > View Pricing </Link> </div> </div> </section> </div> </> ); })'