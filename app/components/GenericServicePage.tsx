import React from 'react;
import { ArrowRight, Phone, Mail, CheckCircle, Star } from "lucide-react";

interface GenericServicePageProps {
      title: 'string','
      description: 'string'
  },'
  icon: 'React.ComponentType<any>','
  features: 'string[]','
  benefits: 'string[]','
  pricing?: string;
  category: "AI" | "IT" | "MicroSAAS" | "Emerging;
}
const GenericServicePage: React.FC<GenericServicePageProps> = ({
  title,
  description,
  icon: Icon,
  features,
  benefits,
  pricing,
  category,
}) => {
  const categoryColors = {
    AI: "from-purple-500 to-pink-600","
    IT: "from-blue-500 to-cyan-600","
    MicroSAAS: "from-green-500 to-emerald-600","
    Emerging: "from-orange-500 to-red-600","
  };
  const categoryColor =
    categoryColors[category] || "from-cyan-500 to-purple-600;
  return (
    
    <div>
      <Helmet />
        <title>{title} | Zion Tech Group</title>
        <meta />
        <meta />
      </Helmet>
      <div>
    <main />
          {/* Hero Section */}
          <section>
        <div>
    <div />
                <Icon />
              </div>
  </div>
  <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
            <p />
              {description}
            </p>
            {pricing && (
              <div />
                Starting at {pricing}
              </div>
            )}
            <div>
    <a />
                Get Started Today
                <ArrowRight />
              </a>
              <a />
                <Phone />
                Call (302) 464-0950
              </a>
            </div>
      </section>
          {/* Features Section */}
          <section>
        <div>
    <h2 />
                Key Features
              </h2>
              <p />
                Comprehensive {title.toLowerCase()} solutions designed to drive
                your business forward
              </p>
            </div>
            <div />
              {features.map((feature, index) => (
<div>
    <div />
                    <CheckCircle />
                    <h3 />
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
      </section>
          {/* Benefits Section */}
          <section>
        <div>
    <h2 />
                Why Choose Our {title}?
              </h2>
              <p />
                Experience the difference with our proven expertise and
                cutting-edge technology
              </p>
            </div>
            <div />
              {benefits.map((benefit, index) => (
                <div>
    <div />
                    <Star />
                  </div>
                  <div />
                    <h3 />
                      {benefit}
                    </h3>
                    <p />
                      Leverage our expertise to maximize your business potential
                      with {title.toLowerCase()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
      </section>
          {/* Stats Section */}
          <section>
        <div>
    <div />
                <div>
    <div />
                    500+
                  </div>
                  <div className="text-gray-300">Happy Clients</div>"
                </div>
                <div>
    <div />
                    99%
                  </div>
                  <div className="text-gray-300">Success Rate</div>"
                </div>
                <div>
    <div />
                    24/7
                  </div>
                  <div className="text-gray-300">Support</div>"
                </div>
                <div>
    <div />
                    10+
                  </div>
                  <div className="text-gray-300">Years Experience</div>"
                </div>
        </div>
      </div>
      </section>
          {/* CTA Section */}
          <section />
            <h2 />
              Ready to Get Started?
            </h2>
            <p />
              Join hundreds of companies that trust Zion Tech Group for their{" "}
              {title.toLowerCase()} needs. Get a free consultation today.
            </p>
            <div>
    <a />
                Get Free Consultation
                <ArrowRight />
              </a>
              <a />
                <Mail />
                Email Us
              </a>
            </div>
      </section>
        </main>
      </div>
    </>
  );
};

export default GenericServicePage;