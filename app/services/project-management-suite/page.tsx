export const metadata = {
  title: 'Project Management Suite | Zion Tech Group',
  description: 'Advanced project management suite for teams.',
  keywords: 'project-management-suite, services, business, technology'
}
export default function ServicePage() {

export default function ProjectManagementSuitePage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Project Management Suite
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced project management suite for teams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored project-management-suite solutions designed for your specific business requirements.
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
              Round-the-clock support to ensure your project-management-suite solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
          </div>
        </div>
      </div>

      <PricingSection />

      <ContactSection />
    </div>
  );

}
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection() {}
  return ("
    <div className="mb-16">"
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Pricing Plans;
      </h2>"
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard"
          name="Starter""
          price="$29/mo""
          duration="Up to 10 users"
          features={["
            "Basic project management","
            "Task tracking & assignments","
            "Team collaboration tools","
            "Mobile app access","
            "Basic reporting","
            "Email support",

          ]}
          popular={false}
        />
        <PricingCard"
          name="Professional""
          price="$79/mo""
          duration="Up to 50 users"
          features={["
            "Everything in Starter","
            "Advanced Gantt charts","
            "Resource management","
            "Time tracking & billing","
            "Advanced analytics","
            "API access & integrations","
            "Priority support",

          ]}
          popular={true}
        />
        <PricingCard"
          name="Enterprise""
          price="$199/mo""
          duration="Unlimited users"
          features={["
            "Everything in Professional","
            "AI-powered insights","
            "Custom workflows","
            "Advanced security & compliance","
            "Dedicated account manager","
            "Custom integrations","
            "24/7 phone support",

          ]}
          popular={false}
        />
      </div>
    </div>
  );
}

function PricingCard({}
  name,
  price,
  duration,
  features,
  popular,
}: {}
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {}
  return (
    <div"
      className={`relative bg-white border-2 rounded-xl p-8 ${popular ? "border-orange-500 shadow-lg" : "border-gray-200"}`}
    >
      {popular && ("
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular;
          </span>
        </div>
      )}"
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>"
      <div className="text-3xl font-bold text-orange-600 mb-1">{price}</div>"
      <div className="text-gray-500 mb-6">{duration}</div>"
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => ("
          <li key={index} className="flex items-start">"
            <span className="text-green-500 mr-2 mt-1">✓</span>"
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a"
        href="tel:+13024640950"`
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${}
          popular"
            ? "bg-orange-600 text-white hover:bg-orange-700""
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"`
        }`}
      >
        Get Started;
      </a>
    </div>
  );
}

function ContactSection() {}
  return ("
    <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-8 text-center">"
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Streamline Your Project Management?
      </h3>"
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your project management needs and create a solution that;
        boosts team productivity and project success.
      </p>"
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a"
          href="tel:+13024640950""
          className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
        >
          Call +1 302 464 0950;
        </a>
        <a"
          href="mailto:kleber@ziontechgroup.com""
          className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
        >
          Email Us;
        </a>
      </div>"
      <div className="mt-6 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}
'"`

