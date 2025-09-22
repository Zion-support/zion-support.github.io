export const metadata = {
  title: 'Mobile Development | Zion Tech Group',
  description: 'Professional mobile app development services.',
  keywords: 'mobile-development, services, business, technology'
}
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Mobile Development
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional mobile app development services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored mobile-development solutions designed for your specific business requirements.
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
              Round-the-clock support to ensure your mobile-development solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
  name,
  price,
  duration,
  features,
}: {}
  name: string;
  price: string;
  duration: string;
  features: string[];
}) {}
  return ("
    <div className="border border-gray-200 rounded-xl p-8 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-200">"
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>"
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>"
      <div className="text-gray-600 mb-6">{duration}</div>"
      <ul className="text-gray-600 space-y-3">
        {features.map((feature) => ("
          <li key={feature} className="flex items-center">"
            <span className="text-blue-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a"
        href="tel:+13024640950""
        className="mt-6 block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started;
      </a>
    </div>
  );
}

function ContactSection() {}
  return ("
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8 text-center">"
      <h3 className="text-3xl font-bold text-gray-900 mb-4">
        Ready to Build Your Mobile App?
      </h3>"
      <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
        Let's discuss your mobile app idea and create a solution that engages;
        users and drives business growth. Our team has developed 100+ successful;
        mobile applications.
      </p>"
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a"
          href="tel:+13024640950""
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
        >
          Call +1 302 464 0950;
        </a>
        <a"
          href="mailto:kleber@ziontechgroup.com""
          className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
        >
          Email Us;
        </a>
      </div>"
      <div className="mt-6 text-sm text-gray-500">
        <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}
'"

