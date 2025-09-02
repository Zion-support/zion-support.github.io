import React from 'react';'
 const ServiceCategory = ({ category, services }) => { const categoryServices = services.filter (service => service.category.toLowerCase () .includes (category.toLowerCase () ) )  if (categoryServices.length === 0) return null const getCategoryIcon = categoryName => { const iconMap = { 'AI & Machine Learning': <Brain className='w - 6 h - 6' /" ></Brain>, 'Cybersecurity & Compliance': <Shield className='w - 6 h - 6' /" ></Shield>,'Data & Analytics': <Database className='w - 6 h - 6' /" ></Database>, 'Business Process': <Briefcase className='w - 6 h - 6' /" ></Briefcase>,'Marketing & Sales': <TrendingUp className='w - 6 h - 6' /" ></TrendingUp>, 'Financial Services': <DollarSign className='w - 6 h - 6' /" ></DollarSign>,'Healthcare & Life Sciences': <Heart className='w - 6 h - 6' /" ></Heart>, 'Education & Training': <GraduationCap className='w - 6 h - 6' /" ></GraduationCap>,'Supply Chain & Logistics': <Truck className='w - 6 h - 6' /" ></Truck>, 'Real Estate & Property': <Home className='w - 6 h - 6' /" ></Home>,'Legal & Compliance': <Lock className='w - 6 h - 6' /" ></Lock>}' return iconMap[categoryName] || <Briefcase className='w - 6 h - 6' /" ></Briefcase> } const getCategoryColor = categoryName => { const colorMap = { 'AI & Machine Learning': 'from - purple - 500 to - indigo - 600', Cybersecurity & Compliance': 'from - red - 500 to - pink - 600',Data & Analytics': 'from - blue - 500 to - cyan - 600', Business Process': 'from - green - 500 to - emerald - 600',Marketing & Sales': 'from - orange - 500 to - red - 600', Financial Services': 'from - yellow - 500 to - orange - 600',Healthcare & Life Sciences': 'from - pink - 500 to - rose - 600', Education & Training': 'from - indigo - 500 to - purple - 600',Supply Chain & Logistics': 'from - teal - 500 to - green - 600', Real Estate & Property': 'from - amber - 500 to - yellow - 600',Legal & Compliance': 'from - slate - 500 to - gray - 600'} return colorMap[categoryName] || 'from - zion - purple to - zion - purple - dark' } return (' <div className='space - y-6'></di>' <div className='flex items - center space - x-3 mb - 6'></di> <div className={`p - 3 rounded - lg bg - gradient - to - br ${getCategoryColor (category) }`}" ></di> {getCategoryIcon (category) } </div> <div></di>' <h3 className='text - 2xl font - bold text - white'></h>{category}</h3>' <p className='text - zion - slate - light'> {categoryServices.length} services available </p> </div> </div> ' <div className='grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 3 gap - 6'></di> {categoryServices.map (service => (<Card key={service.id}' className='h - full border - zion - blue - light bg - zion - blue - dark hover:border - zion - purple / 50 transition - all duration - 300'" ></Card>' <CardHeader className='pb - 3'></CardHeade>' <div className='flex items - start justify - between mb - 2'></di> <Badge ' variant='secondary' className='bg - zion - purple / 20 text - zion - cyan border - zion - purple / 30'" ></Badg> {service.category} </Badge> {service.featured && (' <Badge className='bg - gradient - to - r from - zion - purple to - zion - purple - dark text - white'></Badg> Featured </Badge>) } </div>' <CardTitle className='text - white text - lg leading - tight'></CardTitl> {service.title} </CardTitle>' <CardDescription className='text - zion - slate - light text - sm leading - relaxed'></CardDescriptio> {service.description} </CardDescription> </CardHeader> ' <CardContent className='pt - 0'></CardContent>' <div className='space - y-4'></di> {}' <div className='flex flex - wrap gap - 2'></di> {service.tags.slice (0, 3) .map (tag => (<Badge key={tag}' variant='outline' className='text - xs border - zion - blue - light text - zion - slate - light'" ></Badg> {tag} </Badge>) ) } </div> {}' <div className='flex items - center justify - between text - sm text - zion - slate - light'></di>' <div className='flex items - center space - x-4'></di>' <div className='flex items - center space - x-1'></di>' <Star className='w - 4 h - 4 text - yellow - 400 fill - current' /" ></Star> <span></spa>{service.rating}</span>' <span className='text - zion - slate'></spa> ({service.reviewCount}) </span> </div>' <div className='flex items - center space - x-1'></di>' <Brain className='w - 4 h - 4 text - zion - cyan' /" ></Brain> <span></spa>{service.aiScore}%</span> </div> </div>' <div className='flex items - center space - x-1'></di>' <Clock className='w - 4 h - 4' /" ></Clock> <span></spa>{service.availability}</span> </div> </div> {}' <div className='flex items - center justify - between'></di>' <div className='space - y-1'></di>' <div className='text - 2xl font - bold text - white'></di> ${service.price?.toLocaleString () }' <span className='text - sm text - zion - slate - light font - normal'></spa> /month </span> </div>' <div className='text - sm text - zion - slate - light'></di> Starting from </div> </div> <Button ' size='sm' className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text - white' onClick={ () =" ></Button> window.open ('https:'`';import { Link } from 'react - router - dom"'"
import {}"'
  ENHANCED_SERVICES,;'
  ENHANCED_SERVICE_CATEGORIES} from '@/data/enhancedServices';''"
import { Button } from '@/components/ui/button';"'"
import {}"'
  Card, CardContent,'
  CardDescription,'
  CardHeader,;'
  CardTitle} from '@/components/ui/card;''"
import { Badge } from '@/components/ui/badge';"'"
import {}"'
  Brain, Shield, Database, Briefcase, DollarSign, Heart, GraduationCap, Truck, Home, Zap, Users, BarChart3, Lock, TrendingUp, CheckCircle, Star, Globe, Clock,'
  Mail,'
  Phone,;'
  MapPin} from 'lucide-react;''
import { Link } from 'react-router-dom';
const ServiceCategory = ({ category, services }) => {}
  const categoryServices = services.filter(service =>
    service.category.toLowerCase().includes(category.toLowerCase())
  )
  if(categoryServices.length === 0) return null"
  const getCategoryIcon = categoryName => {}"'"
    const iconMap = {}"'"
"'"
      'AI & Machine Learning': <Brain className='w-6 h-6' /" ></Brain>,"'"
      'Cybersecurity & Compliance': <Shield className='w-6 h-6' /" ></Shield>,"'"
      'Data & Analytics': <Database className='w-6 h-6' /" ></Database>,"'"
      'Business Process': <Briefcase className='w-6 h-6' /" ></Briefcase>,"'"
      'Marketing & Sales': <TrendingUp className='w-6 h-6' /" ></TrendingUp>,"'"
      'Financial Services': <DollarSign className='w-6 h-6' /" ></DollarSign>,"'"
      'Healthcare & Life Sciences': <Heart className='w-6 h-6' /" ></Heart>,"'"
      'Education & Training': <GraduationCap className='w-6 h-6' /" ></GraduationCap>,"'"
      'Supply Chain & Logistics': <Truck className='w-6 h-6' /" ></Truck>,';'"'"
      'Real Estate & Property': <Home className='w-6 h-6' /" ></Home>,';"'"'"
      'Legal & Compliance': <Lock className='w-6 h-6' /" ></Lock>}';'"'"
    return iconMap[categoryName] || <Briefcase className='w-6 h-6' /" ></Briefcase>,
}"
  const getCategoryColor = categoryName => {}"'"
    const colorMap = {}"'
'
      'AI & Machine Learning': 'from-purple-500 to-indigo-600',Cybersecurity & Compliance': 'from-red-500 to-pink-600',Data & Analytics': 'from-blue-500 to-cyan-600',Business Process': 'from-green-500 to-emerald-600',Marketing & Sales': 'from-orange-500 to-red-600',Financial Services': 'from-yellow-500 to-orange-600',Healthcare & Life Sciences': 'from-pink-500 to-rose-600',Education & Training': 'from-indigo-500 to-purple-600',Supply Chain & Logistics': 'from-teal-500 to-green-600',Real Estate & Property': 'from-amber-500 to-yellow-600',Legal & Compliance': 'from-slate-500 to-gray-600'}'
    return colorMap[categoryName] || 'from-zion-purple to-zion-purple-dark',;''
}';'
  return (''
    <div className='space-y-6'></div>''"
      <div className='flex items-center space-x-3 mb-6'></div>`""
        <div className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryColor(category)}`}" ></div>"'"
          {getCategoryIcon(category)}"'
        </div>'
        <div></div>''
          <h3 className='text-2xl font-bold text-white'></h>{category}</h3>''
          <p className='text-zion-slate-light'></p>
            {categoryServices.length} services available"
          </p>"'"
        </div>"'
      </div>'
''"
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'></div>"'"
        {categoryServices.map(service => ("'
          <Card '"
            key={service.id}'"'"
            className='h-full border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300" ></Card>''
            <CardHeader className='pb-3'></CardHeader>''
              <div className='flex items-start justify-between mb-2'></div>'
                <Badge''
                  variant='secondary''"
                  className='bg-zion-purple/20 text-zion-cyan border-zion-purple/30 '></Badge>"'"
                  {service.category}"'
                </Badge>'
                {service.featured && (''
                  <Badge className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white'></Badge>"
                    Featured"'"
                  </Badge>"'
                )}'"
              </div>'"'"
              <CardTitle className='text-white text-lg leading-tight'></CardTitle>"'
                {service.title}'
              </CardTitle>''
              <CardDescription className='text-zion-slate-light text-sm leading-relaxed'></CardDescription>"
                {service.description}"'"
              </CardDescription>"'
            </CardHeader>'
''
            <CardContent className='pt-0'></CardContent>''
              <div className='space-y-4'></div>'
                {/* Tags */}''"
                <div className='flex flex-wrap gap-2'></div>"'"
                  {service.tags.slice(0, 3).map(tag => ("'
                    <Badge'
                      key={tag}''
                      variant='outline''
                      className='text-xs border-zion-blue-light text-zion-slate-light '></Badge>
                      {tag}
                    </Badge>"
                  ))}"'"
                </div>"'
'
                {/* Metrics */}''
                <div className='flex items-center justify-between text-sm text-zion-slate-light'></div>''
                  <div className='flex items-center space-x-4'></div>''"
                    <div className='flex items-center space-x-1'></div>'"'"
                      <Star className='w-4 h-4 text-yellow-400 fill-current' /" ></Star>'
                      <span></spa>{service.rating}</span>''"
                      <span className='text-zion-slate'></span>"'"
                        ({service.reviewCount})"'
                      </span>'
                    </div>''"
                    <div className='flex items-center space-x-1'></div>'"'"
                      <Brain className='w-4 h-4 text-zion-cyan' /" ></Brain>"'"
                      <span></spa>{service.aiScore}%</span>"'
                    </div>'
                  </div>''"
                  <div className='flex items-center space-x-1'></div>'"'"
                    <Clock className='w-4 h-4' /" ></Clock>
                    <span></spa>{service.availability}</span>"
                  </div>"'"
                </div>"'
'
                {/* Pricing */}''
                <div className='flex items-center justify-between'></div>''
                  <div className='space-y-1'></div>''
                    <div className='text-2xl font-bold text-white'></div>'
                      ${service.price?.toLocaleString()}''"
                      <span className='text-sm text-zion-slate-light font-normal'></span>"'"
                        /month"'
                      </span>'
                    </div>''
                    <div className='text-sm text-zion-slate-light'></div>"
                      Starting from"'"
                    </div>"'
                  </div>'
                  <Button ''
                    size='sm''"
                    className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white""
                    onClick={() =" ></Button>'
                      window.open('https://ziontechgroup.com',_blank'),
}
                  >
                    Get Started"
                  </Button>"'"
                </div>"'
'
                {/* Location */}''"
                <div className='flex items-center space-x-2 text-sm text-zion-slate-light'></div>'"'"
                  <Globe className='w-4 h-4' /" ></Globe>
                  <span></spa>{service.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>"
    </div>"'"
  )",''
}';'
const BenefitsSection = () => (''
  <section className='py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg'></section>''
    <div className='container mx-auto px-4'></div>''"
      <div className='text-center mb-12'></div>'"'"
        <h2 className='text-3xl font-bold text-white mb-4'></h2>"'
          Why Choose Zion Tech Group Services?'
        </h2>''
        <p className='text-zion-slate-light text-lg max-w-3xl mx-auto'></p>
          Our comprehensive suite of micro SAAS services is designed to
          transform your business operations with cutting-edge technology and"
          proven solutions."'"
        </p>"'
      </div>'
''
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'></div>''
        <div className='text-center'></div>''"
          <div className='w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4'></div>'"'"
            <Brain className='w-8 h-8 text-white' /" ></Brain>'"
          </div>'"'"
          <h3 className='text-xl font-bold text-white mb-3'></h3>"'
            AI-Powered Solutions'
          </h3>''
          <p className='text-zion-slate-light'></p>
            Leverage the latest artificial intelligence and machine learning"
            technologies to automate processes and gain valuable insights."'"
          </p>"'
        </div>'
''
        <div className='text-center'></div>''"
          <div className='w-16 h-16 bg-gradient-to-br from-zion-cyan to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'></div>'"'"
            <Shield className='w-8 h-8 text-white' /" ></Shield>'"
          </div>'"'"
          <h3 className='text-xl font-bold text-white mb-3'></h3>"'
            Enterprise Security'
          </h3>''
          <p className='text-zion-slate-light'></p>
            Built with enterprise-grade security and compliance standards to"
            protect your data and meet regulatory requirements."'"
          </p>"'
        </div>'
''
        <div className='text-center'></div>''"
          <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4'></div>'"'"
            <Zap className='w-8 h-8 text-white' /" ></Zap>'"
          </div>'"'"
          <h3 className='text-xl font-bold text-white mb-3'></h3>"'
            Rapid Implementation'
          </h3>''
          <p className='text-zion-slate-light'></p>
            Quick deployment and setup with minimal disruption to your existing"
            operations, delivering value in weeks, not months."'"
          </p>"'
        </div>'
''
        <div className='text-center'></div>''"
          <div className='w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4'></div>'"'"
            <Users className='w-8 h-8 text-white' /" ></Users>'
          </div>''
          <h3 className='text-xl font-bold text-white mb-3'></h>Expert Support</h3>''
          <p className='text-zion-slate-light'></p>
            24/7 technical support and dedicated account management to ensure"
            your success and maximize ROI."'"
          </p>"'
        </div>'
''
        <div className='text-center'></div>''"
          <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4'></div>'"'"
            <BarChart3 className='w-8 h-8 text-white' /" ></BarChart3>'"
          </div>'"'"
          <h3 className='text-xl font-bold text-white mb-3'></h3>"'
            Scalable Architecture'
          </h3>''
          <p className='text-zion-slate-light'></p>
            Cloud-native solutions that grow with your business, from startup to"
            enterprise, with flexible pricing options."'"
          </p>"'
        </div>'
''
        <div className='text-center'></div>''"
          <div className='w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4'></div>'"'"
            <CheckCircle className='w-8 h-8 text-white' /" ></CheckCircle>'
          </div>''
          <h3 className='text-xl font-bold text-white mb-3'></h>Proven Results</h3>''
          <p className='text-zion-slate-light'></p>
            Trusted by thousands of businesses worldwide with proven track
            records of improving efficiency and reducing costs.</p>
        </div>
      </div>"
    </div>"'"
  </section>";''
)';'
const ContactSection = () => (''
  <section className='py-16 bg-gradient-to-br from-zion-blue to-zion-blue-dark border border-zion-blue-light rounded-lg'></section>''"
    <div className='container mx-auto px-4 text-center'></div>'"'"
      <h2 className='text-3xl font-bold text-white mb-6'></h2>"'
        Ready to Transform Your Business?'
      </h2>''
      <p className='text-zion-slate-light text-lg max-w-2xl mx-auto mb-8'></p>"
        Contact our team to discuss your specific needs and find the perfect"'"
        solution for your business transformation journey."'
      </p>'
''
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto'></div>''"
        <div className='flex items-center justify-center space-x-3 p-4 bg-zion-blue-dark rounded-lg border border-zion-blue-light'></div>'"'"
          <Mail className='w-6 h-6 text-zion-cyan' /" ></Mail>''
          <div className='text-left'></div>''
            <p className='font-medium text-white'>Email</p>'
            <a''
              href='mailto:kleber@ziontechgroup.com''
              className='text-zion-cyan hover:underline text-sm '></a>
              kleber@ziontechgroup.com"
            </a>"'"
          </div>"'
        </div>'
''"
        <div className='flex items-center justify-center space-x-3 p-4 bg-zion-blue-dark rounded-lg border border-zion-blue-light'></div>'"'"
          <Phone className='w-6 h-6 text-zion-cyan' /" ></Phone>''
          <div className='text-left'></div>''
            <p className='font-medium text-white'>Phone</p>'
            <a''
              href='tel:+13024640950''
              className='text-zion-cyan hover:underline text-sm '></a>
              +1 302 464 0950"
            </a>"'"
          </div>"'
        </div>'
''"
        <div className='flex items-center justify-center space-x-3 p-4 bg-zion-blue-dark rounded-lg border border-zion-blue-light'></div>'"'"
          <MapPin className='w-6 h-6 text-zion-cyan' /" ></MapPin>''
          <div className='text-left'></div>''
            <p className='font-medium text-white'>Address</p>''
            <p className='text-zion-slate-light text-sm'></p>"
              364 E Main St STE 1008""
              <br /" ></br>
              Middletown DE 19709
            </p>"
          </div>"'"
        </div>"'
      </div>'
''
      <div className='flex flex-wrap justify-center gap-4'></div>'
        <Button ''
          size='lg''"
          className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white""
          onClick={() =" ></Button>'
            window.open('mailto:kleber@ziontechgroup.com',_blank'),
}"
        >"'"
          Contact Sales Team"'
        </Button>'
        <Button ''
          size='lg''
          variant='outline'"
          className='border-zion-purple text-zion-cyan hover:bg-zion-purple/10"'"
          onClick={() =" ></Button> window.open('https://ziontechgroup.com',_blank')}"'"
        >"'
          Visit Our Website'
        </Button>''
        <Link to='/services-comparison'></Link>'
          <Button''
            size='lg''
            variant='outline''
            className='border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 '></Button>
            Compare Services
          </Button>
        </Link>
      </div>
    </div>
  </section>"
)"'"
export default function EnhancedServicesOverview() {}"'
'
  return (''
    <div className='space-y-16'></div>'
      {/* Hero Section */}''"
      <div className='text-center'></div>'"'"
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'></h1>"'
          Comprehensive Micro SAAS Services'
        </h1>''
        <p className='text-xl text-zion-slate-light max-w-4xl mx-auto mb-8'></p>"
          Transform your business with our innovative suite of micro SAAS"'"
          solutions, AI-powered services, and cutting-edge IT solutions. From"'
          startups to enterprises, we have the tools you need to succeed.'
        </p>''
        <div className='flex flex-wrap justify-center gap-4'></div>'
          <Button ''
            size='lg'"
            className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"'"
            onClick={() =" ></Button> window.open('https://ziontechgroup.com',_blank')}"'"
          >"'
            Get Started Today'
          </Button>''
          <Link to='/services-comparison'></Link>'
            <Button''
              size='lg''
              variant='outline''
              className='border-zion-purple text-zion-cyan hover:bg-zion-purple/10 '></Button>
              Compare Services
            </Button>
          </Link>"
        </div>"'"
      </div>"'
'"
      {/* Service Categories */}'"'"
      <div className='space-y-16"></div>
        {ENHANCED_SERVICE_CATEGORIES.map(category => (
          <ServiceCategory key={category.value}
            category={category.label}"
            services={ENHANCED_SERVICES}""
          /" ></ServiceCategory>
        ))}
      </div>"
      {/* Benefits Section */}""
      <BenefitsSection /" ></BenefitsSection>"
      {/* Contact Section */}""
      <ContactSection /" ></ContactSection>
    </div>)}

export { ServiceCategory, BenefitsSection, ContactSection, EnhancedServicesOverview }

export { ServiceCategory, BenefitsSection, ContactSection, EnhancedServicesOverview }

export { ServiceCategory, BenefitsSection, ContactSection, EnhancedServicesOverview }

export { ServiceCategory, BenefitsSection, ContactSection, EnhancedServicesOverview }
"
export { ServiceCategory, BenefitsSection, ContactSection, EnhancedServicesOverview }"'"
"`;'"'"