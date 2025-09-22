:src/pages/PricingPage.tsx
import React from "react";
const PricingPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
    super(props);
    this.state = { hasError: false };

  static getDerivedStateFromError(error) {}
    return { hasError: true };

  componentDidCatch(error, errorInfo) {'
    console.error('Error caught by boundary:', error, errorInfo);

  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
:src/pages/PricingPage.tsx
    }

    return this.props.children;
  }
}'
import React from 'react'; const PricingPage = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Pricing Plans </h1> <p className="text-xl text-gray-600"> Choose the perfect plan for your business needs. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Basic</h3> <p className="text-3xl font-bold text-gray-900 mb-4">$99/month</p> <ul className="space-y-2 text-gray-600"> <li>Basic AI solutions</li> <li>Email support</li> <li>Standard security</li> </ul> <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"> Get Started </button> </div> <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional</h3> <p className="text-3xl font-bold text-gray-900 mb-4">$299/month</p> <ul className="space-y-2 text-gray-600"> <li>Advanced AI solutions</li> <li>Priority support</li> <li>Enhanced security</li> <li>Custom integrations</li> </ul> <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"> Get Started </button> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise</h3> <p className="text-3xl font-bold text-gray-900 mb-4">Custom</p> <ul className="space-y-2 text-gray-600"> <li>Full AI suite</li> <li>24/7 support</li> <li>Enterprise security</li> <li>Custom development</li> </ul> <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"> Contact Sales </button> </div> </div> </div> </div> )}; export default PricingPage;
'"
import React from 'react'; const PricingPage = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Pricing Plans </h1> <p className="text - xl text - gray - 600"> Choose the perfect plan for your business needs. </p> </div> <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8"> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Basic</h3> <p className="text - 3xl font - bold text - gray - 900 mb - 4">$99 / month</p> <ul className="space - y-2 text - gray - 600"> <li > Basic AI solutions</li> <li > Email support</li> <li > Standard security</li> </ul> <button className="w - full mt - 4 bg - blue - 600 text - white py - 2 px - 4 rounded - md hover:bg - blue - 700"> Get Started </button> </div> <div className="bg - white p - 6 rounded - lg shadow - md border - 2 border - blue - 600"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Professional</h3> <p className="text - 3xl font - bold text - gray - 900 mb - 4">$299 / month</p> <ul className="space - y-2 text - gray - 600"> <li > Advanced AI solutions</li> <li > Priority support</li> <li > Enhanced security</li> <li > Custom integrations</li> </ul> <button className="w - full mt - 4 bg - blue - 600 text - white py - 2 px - 4 rounded - md hover:bg - blue - 700"> Get Started </button> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Enterprise</h3> <p className="text - 3xl font - bold text - gray - 900 mb - 4">Custom</p> <ul className="space - y-2 text - gray - 600"> <li > Full AI suite</li> <li > 24 / 7 support</li> <li > Enterprise security</li> <li > Custom development</li> </ul> <button className="w - full mt - 4 bg - blue - 600 text - white py - 2 px - 4 rounded - md hover:bg - blue - 700"> Contact Sales </button> </div> </div> </div> </div> )} export default PricingPage;
  ];

  return ("
    <div className="min-h-screen py-20">"
      <div className="container mx-auto px-4">"
        <div className="max-w-6xl mx-auto">"
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Pricing Plans;
          </h1>
          "
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div;
                key={index} 
                className={`bg-white p-8 rounded-lg shadow-lg ${'
                  plan.popular ? 'ring-2 ring-blue-500 relative' : ''`
                }`}
              >
                {plan.popular && ("
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular;
                    </span>
                  </div>
                )}
                "
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  {plan.name}
                </h2>
                "
                <div className="mb-6">"
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>"
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                "
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                "
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => ("
                    <li key={featureIndex} className="flex items-center text-gray-600">"
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">"
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </li>
                </ul>

:src/pages/PricingPage.tsx
                <button;`
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${}
                    plan.popular '
                      ? 'bg-blue-600 text-white hover:bg-blue-700' '
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'`
                  }`}
                >'
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
