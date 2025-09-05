<<<<<<< HEAD
import React from \'react\'; import Head from \'next/head\'; import Link from \'next/link\'; import { Check,Star,ArrowRight,Zap,Shield,Users } from \'lucide-react\'; export default function Pricing() { const plans = [{ \"name\": \'Starter\',\"price\": \'$2,999\',\"period\": \'per month\',\"description\": \'Perfect for small businesses and startups\',\"features\": [ \'Basic AI Integration\',\'Cloud Infrastructure Setup\',\'Monthly Support (8 hours)\',\'Basic Security Features\',\'Email Support\',\'Standard SLA (99.5%)\',],\"popular\": \'false\',\"cta\": \'Get Started\',\"href\": \'/contact\'},{ \"name\": \'Professional\',\"price\": \'$7,999\',\"period\": \'per month\',\"description\": \'Ideal for growing businesses\',\"features\": [\'Advanced AI Solutions\',\'Custom Development\',\'Monthly Support (20 hours)\',\'Enhanced Security & Compliance\',\'Priority Support\',\'Premium SLA (99.9%)\',\'Dedicated Account Manager\',\'Custom Integrations\',],\"popular\": \'true\',\"cta\": \'Most Popular\',\"href\": \'/contact\'},{ \"name\": \'Enterprise\',\"price\": \'Custom\',\"period\": \'pricing\',\"description\": \'Tailored solutions for large organizations\',\"features\": [\'Full AI Suite Implementation\',\'Custom Enterprise Solutions\',\'Unlimited Support\',\'Enterprise Security & Compliance\',\'24/7 Phone Support\',\'Enterprise SLA (99.99%)\',\'Dedicated Team\',\'Custom Training & Documentation\',\'Multi-region Deployment\',\'Advanced Analytics & Reporting\',],\"popular\": \'false\',\"cta\": \'Contact Sales\',\"href\": \'/contact\'},]; const addOns = [{ \"name\": \'Additional Support Hours\',\"price\": \'$150\',\"period\": \'per hour\',\"description\": \'Extra support hours for your project needs\'},{ \"name\": \'Priority Support\',\"price\": \'$500\',\"period\": \'per month\',\"description\": \'Faster response times and dedicated support\'},{ \"name\": \'Custom Integrations\',\"price\": \'$2,000\',\"period\": \'per integration\',\"description\": \'Custom third-party integrations and APIs\'},{ \"name\": \'Training & Documentation\',\"price\": \'$1,000\',\"period\": \'per session\',\"description\": \'Team training and comprehensive documentation\'},]; const faqs = [{ \"question\": \'Can I change my plan at any time?\',\"answer\": \'Yes,you can upgrade or downgrade your plan at any time. Changes will be prorated and take effect immediately.\'},{ \"question\": \'What is included in the support hours?\',\"answer\": \'Support hours include bug fixes,minor updates,technical assistance,and general maintenance tasks.\'},{ \"question\": \'Do you offer custom pricing for large projects?\',\"answer\": \'Yes,we offer custom pricing for enterprise clients and large-scale projects. Contact us for a personalized quote.\'},{ \"question\": \'What payment methods do you accept?\',\"answer\": \'We accept all major credit cards,bank transfers,and can accommodate enterprise billing arrangements.\'},]; return ( <> <Head> <title>Pricing - Zion Tech Group</title> <meta name=\"description\" content=\"Transparent pricing for our technology services. Choose the plan that fits your business needs and budget.\" /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" /> </Head> <main className=\"min-h-screen bg-white\"> {} <section className=\"bg-gradient-to-br from-blue-50 to-indigo-100 py-20\"> <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\"> <div className=\"text-center\"> <h1 className=\"text-4xl font-bold text-gray-900 mb-6\"> Simple,Transparent Pricing </h1> <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\"> Choose the plan that fits your business needs. All plans include our core services with the option to add additional features. </p> </div> </div> </section> {} <section className=\"py-20\"> <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\"> <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\"> {plans.map((plan,index) => ( <div key={index} className={`relative bg-white border rounded-lg p-8 shadow-sm \"hover\": shadow-md transition-shadow ${ plan.popular ? \'border-blue-500 ring-2 ring-blue-500\' : \'border-gray-200\' }`} > {plan.popular && ( <div className=\"absolute -top-4 left-1/2 transform -translate-x-1/2\"> <span className=\"bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center\"> <Star className=\"w-4 h-4 mr-1\" /> Most Popular </span> </div> )} <div className=\"text-center mb-8\"> <h3 className=\"text-2xl font-bold text-gray-900 mb-2\"> {plan.name} </h3> <p className=\"text-gray-600 mb-4\">{plan.description}</p> <div className=\"mb-4\"> <span className=\"text-4xl font-bold text-gray-900\"> {plan.price} </span> <span className=\"text-gray-600 ml-2\">{plan.period}</span> </div> </div> <ul className=\"space-y-4 mb-8\"> {plan.features.map((feature,featureIndex) => ( <li key={featureIndex} className=\"flex items-start\"> <Check className=\"w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0\" /> <span className=\"text-gray-700\">{feature}</span> </li> ))} </ul> <Link href={plan.href} className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${ plan.popular ? \'bg-blue-600 text-white \"hover\": bg-blue-700\' : \'bg-gray-100 text-gray-900 hover:bg-gray-200\' }`} > {plan.cta} </Link> </div> ))} </div> </div> </section> {} <section className=\"py-20 bg-gray-50\"> <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\"> <div className=\"text-center mb-16\"> <h2 className=\"text-3xl font-bold text-gray-900 mb-4\"> Add-on Services </h2> <p className=\"text-lg text-gray-600\"> Enhance your plan with additional services tailored to your specific needs. </p> </div> <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\"> {addOns.map((addOn,index) => ( <div key={index} className=\"bg-white border border-gray-200 rounded-lg p-6 shadow-sm\" > <h3 className=\"text-lg font-semibold text-gray-900 mb-2\"> {addOn.name} </h3> <div className=\"mb-3\"> <span className=\"text-2xl font-bold text-blue-600\"> {addOn.price} </span> <span className=\"text-gray-600 ml-1\">{addOn.period}</span> </div> <p className=\"text-gray-600 text-sm\">{addOn.description}</p> </div> ))} </div> </div> </section> {} <section className=\"py-20\"> <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\"> <div className=\"text-center mb-16\"> <h2 className=\"text-3xl font-bold text-gray-900 mb-4\"> Why Choose Our Services? </h2> <p className=\"text-lg text-gray-600\"> We provide comprehensive technology solutions with unmatched support and expertise. </p> </div> <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\"> <div className=\"text-center\"> <div className=\"bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center\"> <Zap className=\"w-8 h-8 text-blue-600\" /> </div> <h3 className=\"text-xl font-semibold text-gray-900 mb-3\"> Fast Delivery </h3> <p className=\"text-gray-600\"> Quick turnaround times without compromising on quality or security. </p> </div> <div className=\"text-center\"> <div className=\"bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center\"> <Shield className=\"w-8 h-8 text-blue-600\" /> </div> <h3 className=\"text-xl font-semibold text-gray-900 mb-3\"> Enterprise Security </h3> <p className=\"text-gray-600\"> Bank-level security and compliance with industry standards. </p> </div> <div className=\"text-center\"> <div className=\"bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center\"> <Users className=\"w-8 h-8 text-blue-600\" /> </div> <h3 className=\"text-xl font-semibold text-gray-900 mb-3\"> Expert Support </h3> <p className=\"text-gray-600\"> Dedicated support from our team of technology experts. </p> </div> </div> </div> </section> {} <section className=\"py-20 bg-gray-50\"> <div className=\"max-w-4xl mx-auto px-4 \"sm\": px-6 lg:px-8\"> <div className=\"text-center mb-16\"> <h2 className=\"text-3xl font-bold text-gray-900 mb-4\"> Frequently Asked Questions </h2> <p className=\"text-lg text-gray-600\"> Have questions about our pricing? We\'ve got answers. </p> </div> <div className=\"space-y-8\"> {faqs.map((faq,index) => ( <div key={index} className=\"bg-white border border-gray-200 rounded-lg p-6\" > <h3 className=\"text-lg font-semibold text-gray-900 mb-3\"> {faq.question} </h3> <p className=\"text-gray-600\">{faq.answer}</p> </div> ))} </div> </div> </section> {} <section className=\"py-20 bg-gradient-to-r from-blue-600 to-purple-600\"> <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8 text-center\"> <h2 className=\"text-3xl font-bold text-white mb-6\"> Ready to Get Started? </h2> <p className=\"text-xl text-blue-100 mb-8 max-w-2xl mx-auto\"> Contact us today for a free consultation and custom quote tailored to your specific needs. </p> <div className=\"flex flex-col sm:flex-row gap-4 justify-center\"> <Link href=\"/contact\" className=\"bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors\" > Get Free Quote </Link> <Link href=\"/services\" className=\"border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors\" > View Our Services </Link> </div> </div> </section> </main> </> )}
import _React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { Check,Star,ArrowRight,Zap,Shield,Users } from 'lucide-react'; export default function Pricing() { const plans = [{ "name": 'Starter',"price": '$2,999',"period": 'per month',"description": 'Perfect for small businesses and startups',"features": [ 'Basic AI Integration','Cloud Infrastructure Setup','Monthly Support (8, hours)','Basic Security Features','Email Support','Standard SLA (99.5%)',],"popular": 'false',"cta": 'Get Started',"href": '/contact'},{ "name": 'Professional',"price": '$7,999',"period": 'per month',"description": 'Ideal for growing businesses',"features": ['Advanced AI Solutions','Custom Development','Monthly Support (20, hours)','Enhanced Security & Compliance','Priority Support','Premium SLA (99.9%)','Dedicated Account Manager','Custom Integrations',],"popular": 'true',"cta": 'Most Popular',"href": '/contact'},{ "name": 'Enterprise',"price": 'Custom',"period": 'pricing',"description": 'Tailored solutions for large organizations',"features": ['Full AI Suite Implementation','Custom Enterprise Solutions','Unlimited Support','Enterprise Security & Compliance','24/7 Phone Support','Enterprise SLA (99.99%)','Dedicated Team','Custom Training & Documentation','Multi-region Deployment','Advanced Analytics & Reporting',],"popular": 'false',"cta": 'Contact Sales',"href": '/contact'},]; const addOns = [{ "name": 'Additional Support Hours',"price": '$150',"period": 'per hour',"description": 'Extra support hours for your project needs'},{ "name": 'Priority Support',"price": '$500',"period": 'per month',"description": 'Faster response times and dedicated support'},{ "name": 'Custom Integrations',"price": '$2,000',"period": 'per integration',"description": 'Custom third-party integrations and APIs'},{ "name": 'Training & Documentation',"price": '$1,000',"period": 'per session',"description": 'Team training and comprehensive documentation'},]; const faqs = [{ "question": 'Can I change my plan at any time?',"answer": 'Yes,you can upgrade or downgrade your plan at any time. Changes will be prorated and take effect immediately.'},{ "question": 'What is included in the support hours?',"answer": 'Support hours include bug fixes,minor updates,technical assistance,and general maintenance tasks.'},{ "question": 'Do you offer custom pricing for large projects?',"answer": 'Yes,we offer custom pricing for enterprise clients and large-scale projects. Contact us for a personalized quote.'},{ "question": 'What payment methods do you accept?',"answer": 'We accept all major credit cards,bank transfers,and can accommodate enterprise billing arrangements.'},]; return ( <> <Head> <title>Pricing - Zion Tech Group</title> <meta name="description" content="Transparent pricing for our technology services. Choose the plan that fits your business needs and budget." /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"> <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8"> <div className="text-center"> <h1 className="text-4xl font-bold text-gray-900 mb-6"> Simple,Transparent Pricing </h1> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Choose the plan that fits your business needs. All plans include our core services with the option to add additional features. </p> </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8"> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {plans.map((plan,index) => ( <div key={index} className={`relative bg-white border rounded-lg p-8 shadow-sm "hover": shadow-md transition-shadow ${ plan.popular ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200' }`} > {plan.popular && ( <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center"> <Star className="w-4 h-4 mr-1" /> Most Popular </span> </div> )} <div className="text-center mb-8"> <h3 className="text-2xl font-bold text-gray-900 mb-2"> {plan.name} </h3> <p className="text-gray-600 mb-4">{plan.description}</p> <div className="mb-4"> <span className="text-4xl font-bold text-gray-900"> {plan.price} </span> <span className="text-gray-600 ml-2">{plan.period}</span> </div> </div> <ul className="space-y-4 mb-8"> {plan.features.map((feature,featureIndex) => ( <li key={featureIndex} className="flex items-start"> <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> <span className="text-gray-700">{feature}</span> </li> ))} </ul> <Link href={plan.href} className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${ plan.popular ? 'bg-blue-600 text-white "hover": bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200' }`} > {plan.cta} </Link> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Add-on Services </h2> <p className="text-lg text-gray-600"> Enhance your plan with additional services tailored to your specific needs. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {addOns.map((addOn,index) => ( <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm" > <h3 className="text-lg font-semibold text-gray-900 mb-2"> {addOn.name} </h3> <div className="mb-3"> <span className="text-2xl font-bold text-blue-600"> {addOn.price} </span> <span className="text-gray-600 ml-1">{addOn.period}</span> </div> <p className="text-gray-600 text-sm">{addOn.description}</p> </div> ))} </div> </div> </section> {} <section className="py-20"> <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Why Choose Our Services? </h2> <p className="text-lg text-gray-600"> We provide comprehensive technology solutions with unmatched support and expertise. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> <div className="text-center"> <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center"> <Zap className="w-8 h-8 text-blue-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> Fast Delivery </h3> <p className="text-gray-600"> Quick turnaround times without compromising on quality or security. </p> </div> <div className="text-center"> <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center"> <Shield className="w-8 h-8 text-blue-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> Enterprise Security </h3> <p className="text-gray-600"> Bank-level security and compliance with industry standards. </p> </div> <div className="text-center"> <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center"> <Users className="w-8 h-8 text-blue-600" /> </div> <h3 className="text-xl font-semibold text-gray-900 mb-3"> Expert Support </h3> <p className="text-gray-600"> Dedicated support from our team of technology experts. </p> </div> </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-4xl mx-auto px-4 "sm": px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Frequently Asked Questions </h2> <p className="text-lg text-gray-600"> Have questions about our pricing? We've got answers. </p> </div> <div className="space-y-8"> {faqs.map((faq,index) => ( <div key={index} className="bg-white border border-gray-200 rounded-lg p-6" > <h3 className="text-lg font-semibold text-gray-900 mb-3"> {faq.question} </h3> <p className="text-gray-600">{faq.answer}</p> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600"> <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8 text-center"> <h2 className="text-3xl font-bold text-white mb-6"> Ready to Get Started? </h2> <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"> Contact us today for a free consultation and custom quote tailored to your specific needs. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" > Get Free Quote </Link> <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors" > View Our Services </Link> </div> </div> </section> </main> </> )}
=======
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { CheckCircle, ArrowRight, Star, Users, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
const PricingPage: NextPage = () => {;
  const pricingPlans = [;
    {;
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with digital transformation',
      features: [;
        'Basic website development',
        'Cloud setup & migration',
        'Email support',
        'Monthly performance reports',
        'Basic security monitoring',
        'Up to 5 users';
      ],
      popular: false,
      cta: 'Get Started',
      color: 'from-gray-500 to-gray-600';
},
    {;
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing businesses that need comprehensive technology solutions',
      features: [;
        'Custom web applications',
        'Advanced cloud infrastructure',
        'Priority support',
        'Weekly performance reports',
        'Advanced security monitoring',
        'AI/ML integration',
        'Up to 25 users',
        'API development';
      ],
      popular: true,
      cta: 'Most Popular',
      color: 'from-zion-cyan to-blue-600';
},
    {;
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex requirements',
      features: [;
        'Enterprise-grade applications',
        'Multi-cloud architecture',
        '24/7 dedicated support',
        'Real-time monitoring',
        'Advanced security & compliance',
        'Custom AI/ML solutions',
        'Unlimited users',
        'Custom integrations',
        'Dedicated account manager';
      ],
      popular: false,
      cta: 'Contact Sales',
      color: 'from-purple-500 to-purple-600';
}
  ];
  const addOnServices = [;
    {;
      name: 'AI Development',
      price: '$5,000',
      description: 'Custom AI solutions and machine learning models';
},
    {;
      name: 'Cybersecurity Audit',
      price: '$3,500',
      description: 'Comprehensive security assessment and recommendations';
},
    {;
      name: 'Data Analytics',
      price: '$4,000',
      description: 'Business intelligence and data visualization solutions';
},
    {;
      name: 'Mobile App Development',
      price: '$8,000',
      description: 'Native iOS and Android applications';
}
  ];
  const faqs = [;
    {;
      question: 'What\'s included in the monthly pricing?',
      answer: 'Our monthly pricing includes ongoing support, maintenance, monitoring, and updates. It also covers cloud infrastructure costs and security services.';
},
    {;
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. We\'ll work with you to ensure a smooth transition.';
},
    {;
      question: 'Do you offer custom solutions?',
      answer: 'Absolutely! Our Enterprise plan is fully customizable, and we can create tailored solutions for any business size or requirement.';
},
    {;
      question: 'What about one-time projects?',
      answer: 'We also offer project-based pricing for specific initiatives. Contact us to discuss your project requirements.';
}
  ];
  return (;
    <MainLayout>;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4 text-center">;
          <h1 className="text-5xl md:text-6xl font-bold mb-6">;
            Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>;
          </h1>;
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">;
            Choose the perfect plan for your business needs. All plans include our core services and support.;
          </p>;
        </div>;
      </section>;

      {/* Pricing Plans */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">;
            {pricingPlans.map((plan, index) => (;
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-zion-cyan scale-105' : ''}`}>;
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-zion-cyan text-white px-6 py-2 rounded-full text-sm font-semibold">;
                      {plan.cta}
                    </span>;
                  </div>;
                )}

                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>;
                  <div className="mb-4">;
                    <span className="text-4xl font-bold">{plan.price}</span>;
                    <span className="text-gray-500">{plan.period}</span>;
                  </div>;
                  <p className="text-gray-600">{plan.description}</p>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center">;
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />;
                      <span className="text-gray-700">{feature}</span>;
                    </li>;
                  ))}
                </ul>;
                <Link ;
                  href="/contact";
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-lg font-semibold text-center block hover:opacity-90 transition-opacity`}
                >;
                  {plan.cta}
                </Link>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Add-on Services */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold mb-4">Add-on Services</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Enhance your plan with additional services tailored to your specific needs;
            </p>;
          </div>;
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {addOnServices.map((service, index) => (;
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">;
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>;
                <div className="text-2xl font-bold text-zion-cyan mb-3">{service.price}</div>;
                <p className="text-gray-600 text-sm">{service.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* FAQ Section */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Get answers to common questions about our pricing and services;
            </p>;
          </div>;
          <div className="max-w-4xl mx-auto space-y-8">;
            {faqs.map((faq, index) => (;
              <div key={index} className="bg-gray-50 p-6 rounded-lg">;
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>;
                <p className="text-gray-600">{faq.answer}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-blue-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>;
          <p className="text-xl mb-8 max-w-3xl mx-auto">;
            Contact us today to discuss your needs and find the perfect solution for your business;
          </p>;
          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <Link href="/contact" className="bg-white text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">;
              Contact Sales;
              <ArrowRight className="w-5 h-5 ml-2" />;
            </Link>;
            <Link href="/services" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">;
              View Services;
            </Link>;
          </div>;
        </div>;
      </section>;
    </MainLayout>;
  );
};
export default PricingPage;
>>>>>>> origin/automation-fixes
