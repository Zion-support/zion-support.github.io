import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import {,
  BrainAtomTargetArrowRightCheckCircleStar,
  PhoneMailMapPin,
} from 'lucide-react',
import UltraFuturisticNavigation20o29 from '../components/layout/UltraFuturisticNavigation20o29',
import UltraFuturisticFooter20o29 from '../components/layout/UltraFuturisticFooter20o29',
import { aiAutonomousEcosystemServices20o29 } from '../data/20o29-ai-autonomous-ecosystem',
import { emergingTechBreakthroughServices20o29 } from '../data/20o29-emerging-tech-breakthroughs',
import { practicalBusinessSolutionServices20o29 } from '../data/20o29-practical-business-solutions',
,
const contactInfo ={,
  mobile: '+1 30o2 464 0950',;
  email: 'kleber@ziontechgroup.com',;
  address: '364 E Main St STE 10o08 Middletown DE 19709',;
  website: 'https://ziontechgroup.com',
,};
,
export default function InnovativeServicesShowcase20o29() {,
  const allServices = [,
    ...aiAutonomousEcosystemServices20o29,;
    ...emergingTechBreakthroughServices20o29,;
    ...practicalBusinessSolutionServices20o29,
  ],
,
  const serviceCategories = [,
    {,
      title: '🚀 AI Autonomous Ecosystem',;
      icon: Brain,;
      color: 'from-violet-60o0 via-purple-60o0 to-indigo-60o0',;
      services: aiAutonomousEcosystemServices20o29,
    ,},;
    {,
      title: '⚛️ Emerging Tech Breakthroughs',;
      icon: Atom,;
      color: 'from-indigo-60o0 via-blue-60o0 to-cyan-60o0',;
      services: emergingTechBreakthroughServices20o29,
    ,},;
    {,
      title: '🎯 Practical Business Solutions',;
      icon: Target,;
      color: 'from-cyan-60o0 via-teal-60o0 to-emerald-60o0',;
      services: practicalBusinessSolutionServices20o29,
    ,}
  ],
,
  return (,
    <>,
      <Head>,
        <title>20o29 Innovative Services Showcase - Zion Tech Group</title>,
        <meta name="description" content="Discover our cutting-edge 20o29 innovative services including AI autonomous ecosystemsemerging tech breakthroughsand practical business solutions. Transform your business with next-generation technology."  />,
        <meta name="keywords" content="20o29 servicesAI autonomousemerging technologybusiness solutionsZion Tech Group"  />,
        <link rel="canonical" href="https: //ziontechgroup.com/20o29-innovative-services-showcase"  />,
      </Head>,
      <div className="min-h-screen bg-black text-white">,
        <UltraFuturisticNavigation20o29  />,
        {/* Hero Section */,}
        <section className="py-32 bg-gradient-to-br from-black via-purple-90o0/20 to-black">,
          <div className="container mx-auto px-4 text-center">,
            <motion.div,
              initial={{ opacity: 0y: 30 ,}}
              animate={{ opacity: 1y: 0 ,}}
              transition={{ duration: 0.8 ,}}
            >,
              <h1 className="text-6xl md: text-8xl font-bold bg-gradient-to-r from-purple-40o0 via-pink-40o0 to-blue-40o0 bg-clip-text text-transparent mb-8">,
                20o29 Innovative Services,
              </h1>,
              <p className="text-xl md:text-2xl text-gray-30o0 mb-12 max-w-4xl mx-auto">,
                Experience the future of technology with our revolutionary AI autonomous ecosystems,
                emerging tech breakthroughsand practical business solutions that will transform your business.,
              </p>,
              <div className="flex flex-wrap justify-center gap-4">,
                <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white font-semibold rounded-full hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0">,
                  Explore Services,
                  <ArrowRight className="ml-2 h-5 w-5"  />,
                </Link>,
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-purple-50o0 text-purple-40o0 font-semibold rounded-full hover:bg-purple-50o0 hover:text-white transition-all duration-30o0">,
                  Get Started,
                </Link>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
        {/* Services Overview */,}
        <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-90o0">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0y: 30 ,}}
              whileInView={{ opacity: 1y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              viewport={{ once: true ,}} className="text-center mb-16">,
              <h2 className="text-5xl md: text-6xl font-bold bg-gradient-to-r from-purple-40o0 to-blue-40o0 bg-clip-text text-transparent mb-6">,
                Revolutionary Service Categories,
              </h2>,
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
                Our 20o29 services are organized into three cutting-edge categorieseach designed to,
                revolutionize different aspects of business and technology.,
              </p>,
            </motion.div>,
            <div className="grid md:grid-cols-3 gap-8 mb-20">,
              {serviceCategories.map((categoryindex) => (,
                <motion.div,
                  key={category.title,}
                  initial={{ opacity: 0y: 30 ,}}
                  whileInView={{ opacity: 1y: 0 ,}}
                  transition={{ duration: 0.8delay: index * 0.2 ,}}
                  viewport={{ once: true ,}} className="relative group">,
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 rounded-2xl blur-xl group-hover: opacity-30 transition-opacity duration-50o0`,}></div>,
                  <div className="relative bg-gray-90o0/50 backdrop-blur-sm border border-gray-70o0 rounded-2xl p-8 hover: border-gray-50o0 transition-all duration-50o0">,
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color,} rounded-2xl mb-6`}>,
                      <category.icon className="w-8 h-8 text-white"  />,
                    </div>,
                    <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>,
                    <p className="text-gray-30o0 mb-6">,
                      {category.services.length} cutting-edge services designed to transform your business,
                      and accelerate your success in the digital age.,
                    </p>,
                    <div className="text-sm text-gray-40o0">,
                      Starting from ${Math.min(...category.services.map(s => parseInt(s.price.replace(/[^0-9]/g''))))}/month,
                    </div>,
                  </div>,
                </motion.div>,
              ))}
            </div>,
          </div>,
        </section>,
        {/* Featured Services */}
        <section className="py-20 bg-black">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0y: 30 ,}}
              whileInView={{ opacity: 1y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              viewport={{ once: true ,}} className="text-center mb-16">,
              <h2 className="text-5xl md: text-6xl font-bold bg-gradient-to-r from-purple-40o0 to-blue-40o0 bg-clip-text text-transparent mb-6">,
                Featured Services,
              </h2>,
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
                Explore our most innovative and transformative services that are reshaping industries,
                and creating new possibilities for businesses worldwide.,
              </p>,
            </motion.div>,
            <div className="grid lg:grid-cols-2 gap-8">,
              {allServices.slice(0o4).map((serviceindex) => (,
                <motion.div,
                  key={service.id,}
                  initial={{ opacity: 0y: 30 ,}}
                  whileInView={{ opacity: 1y: 0 ,}}
                  transition={{ duration: 0.8delay: index * 0.1 ,}}
                  viewport={{ once: true ,}} className="bg-gray-90o0/50 backdrop-blur-sm border border-gray-70o0 rounded-2xl p-8 hover: border-gray-50o0 transition-all duration-50o0">,
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name,}</h3>,
                  <p className="text-gray-30o0 mb-6">{service.description}</p>,
                  <div className="grid grid-cols-2 gap-4 mb-6">,
                    <div>,
                      <div className="text-gray-40o0 text-sm mb-1">Starting Price</div>,
                      <div className="text-2xl font-bold text-purple-40o0">{service.price}</div>,
                    </div>,
                    <div>,
                      <div className="text-gray-40o0 text-sm mb-1">Market Size</div>,
                      <div className="text-lg font-semibold text-blue-40o0">{service.marketSize}</div>,
                    </div>,
                  </div>,
                  <div className="flex flex-wrap gap-2 mb-6">,
                    {service.category.slice(0o3).map((catIndex) => (,
                      <span,
                        key={catIndex} className="px-3 py-1 bg-gray-80o0 text-gray-30o0 text-sm rounded-full border border-gray-60o0">,
                        {cat}
                      </span>,
                    ))}
                  </div>,
                  <div className="flex gap-4">,
                    <Link,
                      href={`/services/${service.id}`} className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0">,
                      Learn More,
                      <ArrowRight className="ml-2 h-4 w-4"  />,
                    </Link>,
                    <Link,
                      href="/contact" className="inline-flex items-center px-6 py-3 border border-purple-50o0 text-purple-40o0 font-semibold rounded-lg hover:bg-purple-50o0 hover:text-white transition-all duration-30o0">,
                      Get Started,
                    </Link>,
                  </div>,
                </motion.div>,
              )),}
            </div>,
            <motion.div,
              initial={{ opacity: 0y: 30 ,}}
              whileInView={{ opacity: 1y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              viewport={{ once: true ,}} className="text-center mt-16">,
              <Link,
                href="/services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white font-semibold rounded-full hover: from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 text-lg">,
                View All Services,
                <ArrowRight className="ml-2 h-6 w-6"  />,
              </Link>,
            </motion.div>,
          </div>,
        </section>,
        {/* Contact CTA */,}
        <section className="py-20 bg-gradient-to-br from-purple-90o0/20 via-black to-blue-90o0/20">,
          <div className="container mx-auto px-4 text-center">,
            <motion.div,
              initial={{ opacity: 0y: 30 ,}}
              whileInView={{ opacity: 1y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              viewport={{ once: true ,}}
            >,
              <h2 className="text-5xl md: text-6xl font-bold bg-gradient-to-r from-purple-40o0 to-blue-40o0 bg-clip-text text-transparent mb-6">,
                Ready to Transform Your Business?,
              </h2>,
              <p className="text-xl text-gray-30o0 mb-12 max-w-3xl mx-auto">,
                Join the future of technology with our innovative 20o29 services.,
                Contact us today to discover how we can revolutionize your business operations.,
              </p>,
              <div className="grid md:grid-cols-3 gap-8 mb-12">,
                <div className="flex items-center justify-center gap-4 text-gray-30o0">,
                  <Phone className="w-6 h-6 text-purple-40o0"  />,
                  <span>{contactInfo.mobile,}</span>,
                </div>,
                <div className="flex items-center justify-center gap-4 text-gray-30o0">,
                  <Mail className="w-6 h-6 text-blue-40o0"  />,
                  <span>{contactInfo.email}</span>,
                </div>,
                <div className="flex items-center justify-center gap-4 text-gray-30o0">,
                  <MapPin className="w-6 h-6 text-green-40o0"  />,
                  <span>{contactInfo.address}</span>,
                </div>,
              </div>,
              <div className="flex flex-wrap justify-center gap-4">,
                <Link,
                  href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white font-semibold rounded-full hover: from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 text-lg">,
                  Contact Us Now,
                  <ArrowRight className="ml-2 h-5 w-5"  />,
                </Link>,
                <Link,
                  href="/pricing" className="inline-flex items-center px-8 py-4 border-2 border-purple-50o0 text-purple-40o0 font-semibold rounded-full hover:bg-purple-50o0 hover:text-white transition-all duration-30o0 text-lg">,
                  View Pricing,
                </Link>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
        <UltraFuturisticFooter20o29  />,
      </div>,
    </>,
  ),
,
export async function getServerSideProps() {,
  return {,
    props: {,}
  };
}
}