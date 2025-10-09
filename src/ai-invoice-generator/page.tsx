

import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


// >
                  
          
          
          
          
          
          
          
          "
          <Calculator className="w-5 h-5 mr-2" /></Calculator>
// Start Free Trial;

          </a>
                  href="#demo" className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 inline-flex items-center"
<Eye className="w-5 h-5 mr-2" />

                  Watch Demo;
              {/* Key Stats */}"
              <div className="grid grid-cols-1,"
  md:grid-cols-3 gap-8 max-w-3xl mx-auto"></div>"
                <div className="text-center"></div>"
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>"
                  <div className="text-gray-300">Time Saved</div>"
                  <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>"
                  <div className="text-gray-300">Invoices Generated</div>"
                  <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>"
                  <div className="text-gray-300">Faster Payments</div>
          </section>
          {/* Features Section */}"
          <section className="py-16 bg-slate-800/30"></section>"
            <div className="container mx-auto px-4"></div>"
              <div className="text-center mb-16"></div>"
                <h2 className="text-3xl,"
  md:text-4xl font-bold text-white mb-4"></h2>
// Powerful AI Features;
          </h2>"
                <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
Our AI invoice generator combines cutting-edge technology with user-friendly design;
                  to revolutionize your billing process."
              <div className="grid grid-cols-1,
  md:grid-cols-2,"
  lg:grid-cols-3 gap-8"></div>
                {features.map((feature, index) => ()}"
          <div key={index} className="bg-slate-800/50 rounded-lg p-6,"
  hover:bg-slate-800/70 transition-all duration-300"></div>"
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4"></div>"
                      <feature.icon className="w-6 h-6 text-purple-400" /></feature>"
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>"
                    <p className="text-gray-300 mb-4">{feature.description}</p>"
                    <ul className="space-y-2"></ul>
                      {feature.benefits.map((benefit, benefitIndex) => ()}"
          <li key={benefitIndex} className="flex items-center text-sm text-gray-400"></li>"
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
                          {benefit}
                        </li>
                      ))}
                    </ul>
          {/* Use Cases Section */}"
          <section className="py-16"></section>
                  Perfect for Every Business;
Whether you're a freelancer or a large enterprise, our AI invoice generator;
                  adapts to your specific needs and industry requirements."
              <div className="grid grid-cols-1,
  md:grid-cols-2,"
  lg:grid-cols-4 gap-8"></div>
                {useCases.map((useCase, index) => ()}"
          <div key={index} className="text-center group"></div>"
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hove,"
  r:scale-110 transition-transform duration-300"></div>"
                      <useCase.icon className="w-8 h-8 text-white" /></useCase>"
                    <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>"
                    <p className="text-gray-300 mb-4">{useCase.description}</p>"
                    <ul className="space-y-2 text-left"></ul>
                      {useCase.benefits.map((benefit, benefitIndex) => (}
{/* Pricing Section */}"
          <section id="pricing" className="py-16 bg-slate-800/30"></section>
                  Simple, Transparent Pricing;
                  Choose the plan that fits your business needs. All plans include our core AI features;
                  with no hidden fees or setup costs."
              <div className="grid grid-cols-1,"
  md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>)
                {pricingPlans.map((plan, index) => ()}
          <div key={index} className={`relative rounded-lg p-8 ${}
  // TOD,
  O: Add content;
}
//                     plan.popular;
//                       ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400'
                      : 'bg-slate-800/50 border border-slate-700'`
                  }`}></div>
                    {plan.popular && ()}"
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>"
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium"></span>
Most Popular;
                    )}"
                    <div className="text-center mb-6"></div>"
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"
                      <p className="text-gray-400 mb-4">{plan.description}</p>"
                      <div className="flex items-baseline justify-center"></div>"
                        <span className="text-4xl font-bold text-white">{plan.price}</span>"
                        <span className="text-gray-400 ml-1">{plan.period}</span>"
                    <ul className="space-y-4 mb-8"></ul>
                      {plan.features.map((feature, featureIndex) => ()}"
          <li key={featureIndex} className="flex items-center"></li>"
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>"
                          <span className="text-gray-300">{feature}</span>`
<button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${}
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white,
  hover:from-purple-600,
  hover:to-pink-600'
                        : 'bg-slate-700 text-white,
  hover:bg-slate-600'
                      Get Started;
                    </button></button>
          {/* Testimonials Section */}
                  Loved by Businesses Worldwide;
                  See how our AI invoice generator is transforming businesses across industries."
              <div className="grid grid-cols-1,"
  md:grid-cols-3 gap-8"></div>
                {testimonials.map((testimonial, index) => ()}"
          <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>"
                    <div className="flex items-center mb-4"></div>"
                      <div className="text-2xl mr-3">{testimonial.avatar}</div>
                      <div></div>"
                        <div className="font-semibold text-white">{testimonial.name}</div>"
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>"
                    <div className="flex mb-4"></div>
                      {[...Array(testimonial.rating)].map((_, i) => ()}"
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" /></Star>"
                    <p className="text-gray-300 italic">"{testimonial.content}"</p>
{/* CTA Section */}"
          <section className="py-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></section>"
            <div className="container mx-auto px-4 text-center"></div>
                Ready to Transform Your Invoicing?"
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
                Join thousands of businesses already using AI to streamline their invoicing process.
                Start your free trial today and experience the difference."
              <div className="flex flex-col,"
  sm:flex-row gap-4 justify-center"></div>"
                  href="/contact""
<Phone className="w-5 h-5 mr-2" /></Phone>
                  Get Free Consultation;"
                  href="te,"
  l:+13024640950""
                  <Phone className="w-4 h-4 mr-2" /></Phone>
                  (302) 464-0950;
        </main>
        <Footer /></Footer>
    </>
  );
};


export default PagePage;


