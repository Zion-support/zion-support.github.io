import React from "react" ;
import Link from 'next/link' ;
import { motion } from 'framer-motion' ;
import {Brain, Network, Cloud, ArrowRight, CheckCircle, Star, Users, Award, Phone} Mail; MapPin } from 'lucide-react' ;
import Layout from '../components/Layout' ;
;
const stats = [
  {number: '99.9%'} label: 'Uptime Guarantee' },
  {number: '24/7'} label: 'Support Available' },
  {number: '500+'} label: 'Projects Completed' },
  {number: '50+'} label: 'Expert Team Members' }
]
const services = [
  {title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions for modern businesses",
    icon: Brain,
    href: "/ai-services",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    pricing: "Starting at $2,000/month",
    count: "25+ AI Solutions"}
    popular: true
  },
  {title: "IT Services",
    description: "Comprehensive IT solutions to power your digital transformation",
    icon: Network,
    href: "/it-services",
    features: ["Cloud Migration", "Cybersecurity", "Infrastructure Management", "Digital Transformation"],
    pricing: "Starting at $1,500/month",
    count: "18+ IT Solutions"}
    popular: true
  },
  {title: "Micro SaaS",
    description: "Innovative software as a service solutions for specialized business needs",
    icon: Cloud,
    href: "/micro-saas",
    features: ["AI Content Marketing", "Smart Lead Management", "Analytics Dashboard", "Workflow Automation", "Customer Support Bot", "Inventory Management", "Email Marketing", "Project Management"],
    pricing: "Starting at $19/month",
    count: "20+ Products"}
    popular: true
  }
]
const benefits = [
  {icon: CheckCircle,
    title: "Expert Team"}
    description: "Certified professionals with years of experience"
  },
  {icon: Star,
    title: "Quality Assurance"}
    description: "Rigorous testing and quality control processes"
  },
  {icon: Users,
    title: "24/7 Support"}
    description: "Round-the-clock technical support"
  },
  {icon: Award,
    title: "Fast Delivery"}
    description: "Agile development with rapid deployment"
  }
]
const processSteps = [
  {step: "01",
    title: "Consultation"}
    description: "We analyze your requirements and propose the best solution"
  },
  {step: "02",
    title: "Planning"}
    description: "Detailed project planning with clear milestones and timelines"
  },
  {step: "03",
    title: "Development"}
    description: "Build and implement your solution with regular updates"
  },
  {step: "04",
    title: "Deployment"}
    description: "Launch your solution with full support and training"
  }
]
}
export default function HomePage() {
    >
      <div className="text-left">
        {/* Hero Section */}
        <section className="text-left">
          <div className="text-left">
            <div className="text-left">
        <div className="text-left"></div>
          </div>
          <div className="text-left">
            <motion.div
              className="text-left"
              initial={opacity: 0} y: 30 }
              animate={opacity: 1} y: 0 }
              transition={ duration: 0.8 }
            >
              <h1 className="text-left">
                Transform Your Business with{' '}
                <span className="text-left">
                  AI & Technology
                <
              </h1>
              <p className="text-left">
                We deliver cutting-edge AI solutions, cloud services, and technology consulting to help your business thrive in the digital age.
              </p>
              <div className="text-left">
                <Link
                  href="/<contact" className="text-left"
                >
                  Get Started
                </Link>
                <Link
                  href="/<services" className="text-left"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
<MainLayout>
      <div className="text-left">
        {/* Hero Section */}
      <section className="text-left">
        {/* Background Animation */}
        <div className="text-left">
<div className="text-left">
                  </div>
                  <div className="text-left">
                  </div>
                  <div className="text-left">
                  </div>
                  </div>
                  <div className="text-left">
                  <motion.div
            initial={opacity: 0} y: 30 }
            animate={opacity: 1} y: 0 }
            transition={ duration: 0.8 }
            className="text-left"
          >
            <h1 className="text-left">
              Transform Your Business with{' '}
              <span className="text-left">
                AI & Technology
              <
</h1>
                  <p className="text-left">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.
              <br className="text-left" />
                  <span className="text-left">Contact us: +1 302 464 0950 | kleber@ziontechgroup.com<
                  </p>
                  <div className="text-left">
                  <Link href="/<contact" className="text-left">ursor/add-new-services-and-deploy-updates-1b90
                Get Started Today
              </Link>
                  <Link href="/<services" className="text-left">
                Explore Services
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>
        {/* Services Section */}
        <section className="text-left">
          <div className="text-left">
            <motion.div
              className="text-left"
              initial={opacity: 0} y: 30 }
              whileInView={opacity: 1} y: 0 }
              transition={ duration: 0.8 }
              viewport={ once: true }
            >
              <h2 className="text-left">
                Our Services
              </h2>
              <p className="text-left">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </motion.div>
            <div className="text-left">
              {services.map((service} index) => {
                const IconComponent = service.icon
                  >
                    <div className="text-left">
                      <IconComponent className="text-left" />
                      <div>
                        <h3 className="text-left">{service.title}</h3>
                        <p className="text-left">{service.count}</p>
                      </div>
                    </div>
                    <p className="text-left">{service.description}</p>
                    <div className="text-left">
                      <span className="text-left">{service.pricing}<
                    </div>
                    <Link
                      href={service.href}
                      className="text-left"
                    >
                      Learn More
                      <ArrowRight className="text-left" />
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="text-left">
          <div className="text-left">
            <motion.div
              className="text-left"
              initial={opacity: 0} y: 30 }
              whileInView={opacity: 1} y: 0 }
              transition={ duration: 0.8 }
              viewport={ once: true }
            >
              <h2 className="text-left">
                Trusted by Industry Leaders
              </h2>
              <p className="text-left">
                Our proven track record speaks for itself
              </p>
            </motion.div>
            <div className="text-left">
              {stats.map((stat} index) => (
                <motion.div
                  key={index}
                  className="text-left"
                  initial={opacity: 0} y: 30 }
                  whileInView={opacity: 1} y: 0 }
                  transition={duration: 0.8} delay: index * 0.1 }
                  viewport={ once: true }
                >
                  <div className="text-left">
                    {stat.number}
                  </div>
                  <div className="text-left">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-left">
          <div className="text-left">
            <motion.div
              initial={opacity: 0} y: 30 }
              whileInView={opacity: 1} y: 0 }
              transition={ duration: 0.8 }
              viewport={ once: true }
            >
              <h2 className="text-left">
                Ready to Transform Your Business?
              </h2>
              <p className="text-left">
                Let's discuss how our innovative solutions can help you achieve your goals.
              </p>
              <div className="text-left">
                <Link
                  href="/<contact" className="text-left"
                >
                  Get Started
                </Link>
                <Link
                  href="/<services" className="text-left"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Contact Information Section */}
        <section className="text-left">
          <div className="text-left">
            <motion.div
              className="text-left"
              initial={opacity: 0} y: 30 }
              whileInView={opacity: 1} y: 0 }
              transition={ duration: 0.8 }
              viewport={ once: true }
            >
              <h2 className="text-left">
                Get in Touch
              </h2>
              <p className="text-left">
                Ready to start your next project? Contact our expert team for a free consultation.
              </p>
            </motion.div>
            <div className="text-left">
              <motion.div
                className="text-left"
                initial={opacity: 0} y: 30 }
                whileInView={opacity: 1} y: 0 }
                transition={duration: 0.8} delay: 0.1 }
                viewport={ once: true }
              >
                <div className="text-left">
                  <Phone className="text-left" />
                </div>
                <h3 className="text-left">Call Us</h3>
                <p className="text-left">Speak directly with our technical experts</p>
                <a href="tel: +<13024640950" className="text-left">
                  +1 302 464 0950
                </a>
              </motion.div>
              <motion.div
                className="text-left"
                initial={opacity: 0} y: 30 }
                whileInView={opacity: 1} y: 0 }
                transition={duration: 0.8} delay: 0.2 }
                viewport={ once: true }
              >
                <div className="text-left">
                  <Mail className="text-left" />
                </div>
                <h3 className="text-left">Email Us</h3>
                <p className="text-left">Send us your project details</p>
                <a href="mailto: kleber@ziontechgroup.<com" className="text-left">
                  kleber@ziontechgroup.com
                </a>
              </motion.div>
              <motion.div
                className="text-left"
                initial={opacity: 0} y: 30 }
                whileInView={opacity: 1} y: 0 }
                transition={duration: 0.8} delay: 0.3 }
                viewport={ once: true }
              >
                <div className="text-left">
                  <MapPin className="text-left" />
                </div>
                <h3 className="text-left">Visit Us</h3>
                <p className="text-left">Our headquarters in Delaware</p>
                <address className="text-left">
                  364 E Main St STE 1008<br />
                  Middletown; DE 19709
                </address>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
import React from "react" ; import Link from 'next/link' ;' import { motion } from 'framer-motion' ;' import {Brain, Network, Cloud, ArrowRight, CheckCircle, Star, Users, Award, Phone} Mail; MapPin } from 'lucide-react' ;' import Layout from '../components/Layout' ; const stats = [' {number: '99.9%'} label: 'Uptime Guarantee' },' {number: '24/7'} label: 'Support Available' },' {number: '500+'} label: 'Projects Completed' },' {number: '50+'} label: 'Expert Team Members' } ] const services = [ {title: "AI Services", description: "Cutting-edge artificial intelligence solutions for modern businesses", icon: Brain, href: "/ai-services", features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"], pricing: "Starting at $2,000/month", count: "25+ AI Solutions"} popular: true }, {title: "IT Services", description: "Comprehensive IT solutions to power your digital transformation", icon: Network, href: "/it-services", features: ["Cloud Migration", "Cybersecurity", "Infrastructure Management", "Digital Transformation"], pricing: "Starting at $1,500/month", count: "18+ IT Solutions"} popular: true }, {title: "Micro SaaS", description: "Innovative software as a service solutions for specialized business needs", icon: Cloud, href: "/micro-saas", features: ["AI Content Marketing", "Smart Lead Management", "Analytics Dashboard", "Workflow Automation", "Customer Support Bot", "Inventory Management", "Email Marketing", "Project Management"], pricing: "Starting at $19/month", count: "20+ Products"} popular: true } ] const benefits = [ {icon: CheckCircle, title: "Expert Team"} description: "Certified professionals with years of experience" }, {icon: Star, title: "Quality Assurance"} description: "Rigorous testing and quality control processes" }, {icon: Users, title: "24/7 Support"} description: "Round-the-clock technical support" }, {icon: Award, title: "Fast Delivery"} description: "Agile development with rapid deployment" } ] const processSteps = [ {step: "01", title: "Consultation"} description: "We analyze your requirements and propose the best solution" }, {step: "02", title: "Planning"} description: "Detailed project planning with clear milestones and timelines" }, {step: "03", title: "Development"} description: "Build and implement your solution with regular updates" }, {step: "04", title: "Deployment"} description: "Launch your solution with full support and training" } ] } export default function HomePage() { > <div className="text-left" > {/* Hero Section */} <section className="text-left" > <div className="text-left" > <div></div> <div></div> </div> <div className="text-left" > <motion.div className="text-left" initial={opacity: 0} y: 30 } animate={opacity: 1} y: 0 } transition={ duration: 0.8 } > <h1 className="text-left" >' Transform Your Business with{' '} <span className="text-left" > AI & Technology < </h1> <p className="text-left" > We deliver cutting-edge AI solutions, cloud services, and technology consulting to help your business thrive in the digital age. </p> <div className="text-left" > <Link href="/<contact" className="text-left" > Get Started </Link> <Link href="/<services" className="text-left" > View Services </Link> </div> </motion.div> </div> </section> <MainLayout> <div className="text-left" > {/* Hero Section */} <section className="text-left" > {/* Background Animation */} <div className="text-left" > <div></div> <div></div> <div></div> </div> <div className="text-left" > <motion.div initial={opacity: 0} y: 30 } animate={opacity: 1} y: 0 } transition={ duration: 0.8 } className="text-left" > <h1 className="text-left" >' Transform Your Business with{' '} <span className="text-left" > AI & Technology < </h1> <p className="text-left" > Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services. <br className="text-left" /> <span className="text-left" >Contact us: +1 302 464 0950 | kleber@ziontechgroup.com< </p> <div className="text-left" > <Link href="/<contact" className="text-left" >ursor/add-new-services-and-deploy-updates-1b90 Get Started Today </Link> <Link href="/<services" className="text-left" > Explore Services </Link> </div> </motion.div> </div> </section> {/* Services Section */} <section className="text-left" > <div className="text-left" > <motion.div className="text-left" initial={opacity: 0} y: 30 } whileInView={opacity: 1} y: 0 } transition={ duration: 0.8 } viewport={ once: true } > <h2 className="text-left" > Our Services </h2> <p className="text-left" > Comprehensive technology solutions designed to accelerate your business growth </p> </motion.div> <div className="text-left" > {services.map((service} index) => { const IconComponent = service.icon > <div className="text-left" > <IconComponent className="text-left" /> <div> <h3 className="text-left" >{service.title}</h3> <p className="text-left" >{service.count}</p> </div> </div> <p className="text-left" >{service.description}</p> <div className="text-left" > <span className="text-left" >{service.pricing}< </div> <Link href={service.href} className="text-left" > Learn More <ArrowRight className="text-left" /> </Link> </motion.div> ) })} </div> </div> </section> {/* Stats Section */} <section className="text-left" > <div className="text-left" > <motion.div className="text-left" initial={opacity: 0} y: 30 } whileInView={opacity: 1} y: 0 } transition={ duration: 0.8 } viewport={ once: true } > <h2 className="text-left" > Trusted by Industry Leaders </h2> <p className="text-left" > Our proven track record speaks for itself </p> </motion.div> <div className="text-left" > {stats.map((stat} index) => ( <motion.div key={index} className="text-left" initial={opacity: 0} y: 30 } whileInView={opacity: 1} y: 0 } transition={duration: 0.8} delay: index * 0.1 } viewport={ once: true } > <div className="text-left" > {stat.number} </div> <div className="text-left" >{stat.label}</div> </motion.div> ))} </div> </div> </section> {/* CTA Section */} <section className="text-left" > <div className="text-left" > <motion.div initial={opacity: 0} y: 30 } whileInView={opacity: 1} y: 0 } transition={ duration: 0.8 } viewport={ once: true } > <h2 className="text-left" > Ready to Transform Your Business? </h2> <p className="text-left" >' Let's discuss how our innovative solutions can help you achieve your goals. </p> <div className="text-left" > <Link href="/<contact" className="text-left" > Get Started </Link> <Link href="/<services" className="text-left" > View Services </Link> </div> </motion.div> </div> </section> {/* Contact Information Section */} <section className="text-left" > <div className="text-left" > <motion.div className="text-left" initial={opacity: 0} y: 30 } whileInView={opacity: 1} y: 0 } transition={ duration: 0.8 } viewport={ once: true } > <h2 className="text-left" > Get in Touch </h2> <p className="text-left" > Ready to start your next project? Contact our expert team for a free consultation. </p> </motion.div> <div className="text-left" > <motion.div className="text-left" initial={opacity: 0} y: 30 } whileInView={opacity: 1} y: 0 } transition={duration: 0.8} delay: 0.1 } viewport={ once: true } > <div className="text-left" > <Phone className="text-left" /> </div> <h3 className="text-left" >Call Us</h3> <p className="text-left" >Speak directly with our technical experts</p> <a href="tel: +<13024640950" className="text-left" > +1 302 464 0950 </a> </motion.div> <motion.div className="text-left" initial={opacity: 0} y: 30 } whileInView={opacity: 1} y: 0 } transition={duration: 0.8} delay: 0.2 } viewport={ once: true } > <div className="text-left" > <Mail className="text-left" /> </div> <h3 className="text-left" >Email Us</h3> <p className="text-left" >Send us your project details</p> <a href="mailto: kleber@ziontechgroup.<com" className="text-left" > kleber@ziontechgroup.com </a> </motion.div> <motion.div className="text-left" initial={opacity: 0} y: 30 } whileInView={opacity: 1} y: 0 } transition={duration: 0.8} delay: 0.3 } viewport={ once: true } > <div className="text-left" > <MapPin className="text-left" /> </div> <h3 className="text-left" >Visit Us</h3> <p className="text-left" >Our headquarters in Delaware</p> <address className="text-left" > 364 E Main St STE 1008<br /> Middletown; DE 19709 </address> </motion.div> </div> </div> </section> </div> </Layout> ); '