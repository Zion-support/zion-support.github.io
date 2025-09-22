export const metadata = {
  title: 'Finance | Zion Tech Group',
  description: 'Professional finance services for your business needs.',
  keywords: 'finance, services, business, technology'
}
export default function FinanceSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Finance Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional finance services for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored finance solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your finance solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function BenefitCard({}
  title,
  description,
  icon,
}: {}
  title: string;
  description: string;
  icon: string;
}) {}
  return ("
    <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">"
      <div className="text-4xl mb-4">{icon}</div>"
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Pricing() {}
  return ("
    <section className="mb-16">"
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Financial Technology Pricing;
      </h2>"
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan"
          name="Compliance Assessment""
          price="$10k–$25k"
          features={["
            "Regulatory review","
            "Security audit","
            "Risk assessment","
            "Compliance roadmap","
            "Recommendations",

          ]}
          popular={false}
        />
        <Plan"
          name="Solution Development""
          price="$50k–$300k"
          features={["
            "Custom development","
            "Security implementation","
            "Compliance integration","
            "Testing","
            "Training",

          ]}
          popular={true}
        />
        <Plan"
          name="Managed Services""
          price="$5k+/mo"
          features={["
            "24/7 monitoring","
            "Compliance management","
            "Security updates","
            "Support","
            "Maintenance",

          ]}
          popular={false}
        />
      </div>
    </section>
  );
}

function Plan({}
  name,
  price,
  features,
  popular,
}: {}
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}) {}
  return (
    <div"
      className={`border rounded-xl p-8 relative ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"}`}
    >
      {popular && ("
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">"
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular;
          </span>
        </div>
      )}"
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>"
      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>"
      <ul className="space-y-3 mb-6">
        {features.map((feature) => ("
          <li key={feature} className="flex items-center">"
            <span className="text-blue-500 mr-3">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a"
        href="tel:+13024640950"`
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${}
          popular"
            ? "bg-blue-600 text-white hover:bg-blue-700""
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"`
        }`}
      >
        Get Started;
      </a>
    </div>
  );
}

function CTASection() {}
  return ("
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">"
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Build Secure Financial Technology?
      </h3>"
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your financial technology needs and create a secure,
        compliant solution that powers your financial services. Our fintech;
        experts are ready to help.
      </p>"
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a"
          href="tel:+13024640950""
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Call +1 302 464 0950;
        </a>
        <a"
          href="mailto:kleber@ziontechgroup.com""
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
          Email Us;
        </a>
      </div>"
      <div className="mt-6 text-sm text-gray-600">
        <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
      </div>
    </div>
  );
}
'"`

