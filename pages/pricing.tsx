import type { NextPage } from &apos;next&apos;;
import Layout from &apos;../components/Layout&apos;;
import Link from &apos;next/link&apos;;
import { Check, Star, ArrowRight, Zap, Users, Building, Crown } from &apos;lucide-react&apos;;

const Pricing: NextPage = () => {
  const pricingPlans = [
    {
      name: &quot;Starter&quot;,
      description: &quot;Perfect for small businesses and startups&quot;,
      price: &quot;$2,500&quot;,
      period: &quot;per month&quot;,
      icon: Zap,
      color: &quot;blue&quot;,
      features: [
        &quot;Basic website development&quot;,
        &quot;Up to 5 pages&quot;,
        &quot;Mobile responsive design&quot;,
        &quot;Basic SEO optimization&quot;,
        &quot;Email support&quot;,
        &quot;3 months maintenance included&quot;
      ],
      popular: false
    },
    {
      name: &quot;Professional&quot;,
      description: &quot;Ideal for growing businesses&quot;,
      price: &quot;$5,000&quot;,
      period: &quot;per month&quot;,
      icon: Users,
      color: &quot;purple&quot;,
      features: [
        &quot;Custom web application development&quot;,
        &quot;Up to 15 pages&quot;,
        &quot;Advanced features and integrations&quot;,
        &quot;Advanced SEO optimization&quot;,
        &quot;Priority email support&quot;,
        &quot;6 months maintenance included&quot;,
        &quot;Performance optimization&quot;,
        &quot;Analytics setup&quot;
      ],
      popular: true
    },
    {
      name: &quot;Enterprise&quot;,
      description: &quot;For large organizations and complex projects&quot;,
      price: &quot;Custom&quot;,
      period: &quot;quote&quot;,
      icon: Building,
      color: &quot;green&quot;,
      features: [
        &quot;Full-stack enterprise solutions&quot;,
        &quot;Unlimited pages and features&quot;,
        &quot;Custom integrations and APIs&quot;,
        &quot;Advanced security features&quot;,
        &quot;Dedicated project manager&quot;,
        &quot;24/7 phone and email support&quot;,
        &quot;12 months maintenance included&quot;,
        &quot;Custom training and documentation&quot;,
        &quot;SLA guarantees&quot;
      ],
      popular: false
    }
  ];

  const servicePricing = [
    {
      service: &quot;AI Development&quot;,
      description: &quot;Custom AI solutions and machine learning models&quot;,
      startingPrice: &quot;$10,000&quot;,
      features: [&quot;Custom AI models&quot;, &quot;Data analysis&quot;, &quot;Integration support&quot;, &quot;Training and documentation&quot;]
    },
    {
      service: &quot;Cloud Services&quot;,
      description: &quot;Cloud migration and infrastructure management&quot;,
      startingPrice: &quot;$5,000&quot;,
      features: [&quot;Cloud migration&quot;, &quot;Infrastructure setup&quot;, &quot;Monitoring and maintenance&quot;, &quot;Security implementation&quot;]
    },
    {
      service: &quot;Mobile Development&quot;,
      description: &quot;Native and cross-platform mobile applications&quot;,
      startingPrice: &quot;$8,000&quot;,
      features: [&quot;iOS and Android apps&quot;, &quot;Cross-platform solutions&quot;, &quot;App store deployment&quot;, &quot;Ongoing updates&quot;]
    },
    {
      service: &quot;Blockchain Solutions&quot;,
      description: &quot;Blockchain development and smart contracts&quot;,
      startingPrice: &quot;$15,000&quot;,
      features: [&quot;Smart contract development&quot;, &quot;Blockchain integration&quot;, &quot;Security auditing&quot;, &quot;Deployment support&quot;]
    }
  ];

  return (
    <Layout
      title=&quot;Pricing - Zion Tech Group&quot;
      description=&quot;Transparent pricing for Zion Tech Group&apos;s technology services. Choose the plan that fits your business needs and budget.&quot;
    >
      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            Simple
            <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;> Pricing</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200&quot;>
            Choose the perfect plan for your business needs. All plans include our commitment to quality and support.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className=&quot;py-20 bg-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-3xl font-bold text-center text-gray-900 mb-12&quot;>Choose Your Plan</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto&quot;>
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  plan.popular ? &apos;border-purple-500 transform scale-105&apos; : &apos;border-gray-200&apos;
                }`}
              >
                {plan.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                    <div className=&quot;bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center&quot;>
                      <Star className=&quot;w-4 h-4 mr-1&quot; />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className=&quot;text-center mb-8&quot;>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${plan.color}-100 flex items-center justify-center`}>
                    <plan.icon className={`w-8 h-8 text-${plan.color}-600`} />
                  </div>
                  <h3 className=&quot;text-2xl font-bold text-gray-900 mb-2&quot;>{plan.name}</h3>
                  <p className=&quot;text-gray-600 mb-4&quot;>{plan.description}</p>
                  <div className=&quot;mb-4&quot;>
                    <span className=&quot;text-4xl font-bold text-gray-900&quot;>{plan.price}</span>
                    <span className=&quot;text-gray-600 ml-2&quot;>{plan.period}</span>
                  </div>
                </div>

                <ul className=&quot;space-y-4 mb-8&quot;>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-start&quot;>
                      <Check className=&quot;w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0&quot; />
                      <span className=&quot;text-gray-600&quot;>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href=&quot;/contact&quot;
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? &apos;bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700&apos;
                      : &apos;bg-gray-100 text-gray-900 hover:bg-gray-200&apos;
                  }`}
                >
                  Get Started
                  <ArrowRight className=&quot;w-4 h-4 ml-2 inline&quot; />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className=&quot;py-20 bg-gray-50&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-3xl font-bold text-center text-gray-900 mb-12&quot;>Service-Specific Pricing</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto&quot;>
            {servicePricing.map((service, index) => (
              <div key={index} className=&quot;bg-white rounded-lg shadow-md p-8&quot;>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>{service.service}</h3>
                <p className=&quot;text-gray-600 mb-4&quot;>{service.description}</p>
                <div className=&quot;mb-4&quot;>
                  <span className=&quot;text-2xl font-bold text-blue-600&quot;>Starting at {service.startingPrice}</span>
                </div>
                <ul className=&quot;space-y-2 mb-6&quot;>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center&quot;>
                      <Check className=&quot;w-4 h-4 text-green-500 mr-2&quot; />
                      <span className=&quot;text-gray-600 text-sm&quot;>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href=&quot;/contact&quot;
                  className=&quot;text-blue-600 hover:text-blue-700 font-semibold flex items-center&quot;
                >
                  Get Custom Quote
                  <ArrowRight className=&quot;w-4 h-4 ml-1&quot; />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className=&quot;py-20 bg-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-3xl font-bold text-center text-gray-900 mb-12&quot;>Why Choose Zion Tech Group?</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center&quot;>
                <Crown className=&quot;w-8 h-8 text-blue-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>Premium Quality</h3>
              <p className=&quot;text-gray-600&quot;>
                We deliver high-quality solutions using the latest technologies and best practices in the industry.
              </p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center&quot;>
                <Users className=&quot;w-8 h-8 text-green-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>Expert Team</h3>
              <p className=&quot;text-gray-600&quot;>
                Our experienced developers and designers work closely with you to bring your vision to life.
              </p>
            </div>

            <div className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center&quot;>
                <Zap className=&quot;w-8 h-8 text-purple-600&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>Fast Delivery</h3>
              <p className=&quot;text-gray-600&quot;>
                We understand the importance of time and deliver projects on schedule without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className=&quot;py-20 bg-gray-50&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <h2 className=&quot;text-3xl font-bold text-center text-gray-900 mb-12&quot;>Pricing FAQ</h2>
          <div className=&quot;max-w-4xl mx-auto space-y-8&quot;>
            <div className=&quot;bg-white rounded-lg p-6&quot;>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-3&quot;>Do you offer custom pricing?</h3>
              <p className=&quot;text-gray-600&quot;>
                Yes, we offer custom pricing for enterprise projects and specialized requirements. Contact us for a personalized quote.
              </p>
            </div>

            <div className=&quot;bg-white rounded-lg p-6&quot;>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-3&quot;>What&apos;s included in maintenance?</h3>
              <p className=&quot;text-gray-600&quot;>
                Maintenance includes bug fixes, security updates, performance optimization, and minor feature enhancements as specified in your plan.
              </p>
            </div>

            <div className=&quot;bg-white rounded-lg p-6&quot;>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-3&quot;>Can I change my plan later?</h3>
              <p className=&quot;text-gray-600&quot;>
                Absolutely! You can upgrade or downgrade your plan at any time. We&apos;ll work with you to ensure a smooth transition.
              </p>
            </div>

            <div className=&quot;bg-white rounded-lg p-6&quot;>
              <h3 className=&quot;text-lg font-semibold text-gray-900 mb-3&quot;>Do you offer payment plans?</h3>
              <p className=&quot;text-gray-600&quot;>
                Yes, we offer flexible payment options including monthly installments for larger projects. Contact us to discuss payment arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h2 className=&quot;text-4xl font-bold mb-6&quot;>Ready to Get Started?</h2>
          <p className=&quot;text-xl mb-8 max-w-3xl mx-auto&quot;>
            Contact us today to discuss your project requirements and get a customized quote that fits your budget.
          </p>
          <div className=&quot;flex flex-col sm:flex-row justify-center gap-4&quot;>
            <Link href=&quot;/contact&quot; className=&quot;bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              Get Free Quote
            </Link>
            <Link href=&quot;/services&quot; className=&quot;bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg&quot;>
              View Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;