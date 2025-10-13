'use client'';
import React from 'react';';
import { Helmet } from 'react-helmet-async';';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Target, Users, BarChart, Shield, Zap, Clock, Award, ArrowRight, Brain, Cloud, Code, Database, Globe, Smartphone, Lock, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';';
import Navigation from '../components/Navigation';';
import Footer from '../components/Footer';';';
const ITConsultingPage: React.FC = () => {;
const consultingServices = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Digital Transformation','
      description: 'Comprehensive digital transformation strategies to modernize your business operations.','
      icon: Brain,
      features: ['Technology Assessment', 'Digital Strategy Planning', 'Process Optimization', 'Change Management'],'
      benefits: ['Increased Efficiency', 'Cost Reduction', 'Better Customer Experience', 'Competitive Advantage'],'
      price: 'Starting at $5,000/month''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Cloud Migration','
      description: 'Seamless migration to cloud platforms with minimal downtime and maximum security.','
      icon: Cloud,
      features: ['Cloud Architecture Design', 'Data Migration', 'Security Implementation', 'Performance Optimization'],'
      benefits: ['Scalability', 'Cost Savings', 'Enhanced Security', 'Improved Performance'],'
      price: 'Starting at $3,500/month''
    }
  ]
  return (<React.Fragment>
<Helmet>
<title>IT Consulting Services - Zion Tech Group
        <meta name="description"Expert IT consulting services to transform your business. Strategic planning, digital transformation, cloud migration, and cybersecurity solutions." /></meta>"
        <meta name="keywords"IT consulting, digital transformation, cloud migration, cybersecurity, technology strategy" />""
      <div className="
<Navigation/ />""pt-24 pb-16 px-4""max-w-7 xl mx-auto""text-center mb-16""text-4 xl,"
  md: text-6 xl font-bold text-gray-900 mb-6"
</h1>
                IT Consulting Services,
              </h1>""text-xl text-gray-600 max-w-3 xl mx-auto"
                Transform your business with expert IT consulting. We provide strategic guidance,
                digital transformation, and technology solutions that drive growth and efficiency.
            <div className="
              {consultingServices.map((service, index) => (
  // TODO: Add parameters
)
                <div key={index} className="bg-white rounded-2 xl p-8 shadow-lg hover:shadow-xl transition-shadow"flex items-center mb-6"
<div className="
<service.icon className="w-8 h-8 text-blue-600"text-2 xl font-bold text-gray-900"
                      <p className="
                  <div className="mb-6"font-semibold text-gray-900 mb-3"
                    <ul className="
                      {service.features.map((feature, idx) => (
  // TODO: Add parameters
)
                        <li key={idx} className="flex items-center text-gray-600"w-5 h-5 text-green-500 mr-2"
                          {feature}
                        </li>)
                      ))}
                    <h4 className="
                    <ul className="space-y-2"flex items-center text-gray-600"
<ArrowRight className="
                          {benefit}
                      ))}
                    <h4 className="font-semibold text-gray-900 mb-3"space-y-2"
                      {service.benefits.map((benefit, idx) => (
  // TODO: Add parameters
)
                        <li key={idx} className="
<ArrowRight className="w-5 h-5 text-blue-500 mr-2"text-center"
<div className="
<button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover: bg-blue-700 transition-colors"py-16 px-4 sm: px-6 lg:px-8 bg-gray-50"
<div className="
<h2 className="text-3 xl font-bold text-gray-900 mb-6"text-xl text-gray-600 mb-8"
                Contact our experts for a free consultation and discover how we can help your business.
              <div className="
<button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"w-5 h-5 inline mr-2"
                  Call Us

                <button className="
<Mail className="w-5 h-5 inline mr-2"
                  Email Us

              </div></div>
</section></main>
<Footer /></div>
</React.Fragment>
  ),
}
export default ITConsultingPage</button></button>;
</button></div>
</div></div>
</div></p>
</p></h2>
</h3></h4>
</h4></h4>
</ul></ul>
</ul></li>
</li>