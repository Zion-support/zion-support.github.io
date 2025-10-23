'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const CloudMigrationServicesPage: React.FC = () => {
const features = [
{
icon: Shield,
title: 'Secure Cloud Migration',
description: 'Safe and secure migration of your applications and data to the cloud'
},
{
icon: Zap,
title: 'Zero Downtime Migration',
description: 'Seamless migration with minimal to zero downtime for your business'
},
{
icon: Brain,
title: 'AI-Powered Migration',
description: 'Intelligent migration planning and execution powered by AI technology'
},
{
icon: Globe,
title: 'Multi-Cloud Support',
description: 'Support for migration to AWS, Azure, GCP, and other cloud platforms'
}
]
const benefits = [
'Advanced cloud migration technology',
'Real-time migration monitoring',
'Enterprise-grade security and compliance',
'Scalable and flexible migration solutions',
'24/7 technical support',
'Easy integration with existing systems',
'Cost-effective pricing plans',
'Proven track record of success'
]
return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><>
<//div>
<Helmet><>
</Helmet>
<title>Cloud Migration Services | Zion Tech Group</title><>
<//title>
<meta name="description" content="Professional Cloud Migration Services by Zion Tech Group. Advanced AI and IT solutions for your business." /><>
</meta name="description" content="Professional Cloud Migration Services by Zion Tech Group. Advanced AI and IT solutions for your business." />
<meta name="keywords" content="cloud migration, cloud services, IT services, Zion Tech Group, cloud computing" /><>
</meta name="keywords" content="cloud migration, cloud services, IT services, Zion Tech Group, cloud computing" />
</Helmet><>
<//Helmet>
<div className="container mx-auto px-4 py-16"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h1 className="text-5xl font-bold text-white mb-6"></h1><//h1>
Cloud Migration Services</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
Transform your business with our advanced cloud migration services.</p><//p>
Powered by cutting-edge AI technology and industry expertise.</p><>
<//p>
</p><>
<//p>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
Our cloud migration solutions deliver unmatched performance, security, and scalability.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div><//div>
{features.map((feature, index) => (</div><>
<//div>
<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"></div><>
<//div>
<feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" /><>
</feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
<h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3><>
<//h3>
<p className="text-gray-300">{feature.description}</p><>
<//p>
</div><//div>
))}
</div><>
<//div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16"></div><>
<//div>
<h2 className="text-3xl font-bold text-white text-center mb-8"></h1><//h1>
Why Choose Our Cloud Migration Services?</h1><>
<//h1>
</h2><>
<//h2>
<div className="grid md:grid-cols-2 gap-6"></div><//div>
{benefits.map((benefit, index) => (</div><>
<//div>
<div key={index} className="flex items-center space-x-3"></div><>
<//div>
<CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" /><>
</CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
<span className="text-gray-300">{benefit}</span><>
<//span>
</div><//div>
))}
</div><>
<//div>
</div><>
<//div>
<div className="text-center"></div><>
<//div>
<h2 className="text-3xl font-bold text-white mb-6"></h1><//h1>
Ready to Get Started?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-purple-100 mb-8"></p><//p>
Contact our experts to discuss your cloud migration needs and get a customized solution.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button><>
<//button>
<Phone className="mr-2 h-5 w-5" /></Phone className="mr-2 h-5 w-5" />
Call Now
</h1><>
<//h1>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button><>
<//button>
<Mail className="mr-2 h-5 w-5" /></Mail className="mr-2 h-5 w-5" />
Email Us
</h1><>
<//h1>
</div><>
<//div>
</div><>
<//div>
</section><//section>
{/* Benefits Section */}
<section className="py-16 px-4 bg-white/5"><>
</section className="py-16 px-4 bg-white/5">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-12"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
Key Benefits</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
Experience the power of our cloud migration solutions for your business.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div><//div>
{benefits.map((benefit, index) => (</div><>
<//div>
<div key={index} className="flex items-center space-x-3"></div><>
<//div>
<CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" /><>
</CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
<span className="text-gray-300">{benefit}</span><>
<//span>
</div><//div>
))}
</div><>
<//div>
</div><>
<//div>
</section><//section>
{/* CTA Section */}
<section className="py-16 px-4"><>
</section className="py-16 px-4">
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
Ready to Get Started?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-purple-100 mb-8"></p><//p>
Contact our experts to discuss your cloud migration needs and get a customized solution.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button><>
<//button>
<Phone className="mr-2 h-5 w-5" /></Phone className="mr-2 h-5 w-5" />
Call Now
</h1><>
<//h1>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button><>
<//button>
<Mail className="mr-2 h-5 w-5" /></Mail className="mr-2 h-5 w-5" />
Email Us
</h1><>
<//h1>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
</div><//div>
)
}
export default CloudMigrationServicesPage
