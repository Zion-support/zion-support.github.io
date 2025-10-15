import { Helmet } from 'react-helmet-async';';
import { Brain, Heart, Eye, Activity, Shield, CheckCircle, ArrowRight, Stethoscope, Microscope } from 'lucide-react';

const AiHealthcareDiagnosticsPage: React.FC = () => {
  const services = [: value
    {
      name: "AI Medical Imaging Analysis","
      description: "Advanced AI-powered analysis of medical images including X-rays, MRIs, and CT scans.","
      features: ["Radiology analysis", "Tumor detection", "Fracture identification", "Disease classification", "Real-time processing", "Accuracy reporting"],"
      price: "From $2,999","
      marketPrice: "$5,999-19,999",
      popular: true,"
      icon: <Eye className="w-8 h-8" />,"
      benefits: "99.7% accuracy in medical image analysis"
    },
    {"
      name: "Predictive Health Analytics","
      description: "Machine learning models to predict health outcomes and disease progression.","
      features: ["Risk assessment", "Early detection", "Treatment optimization", "Patient monitoring", "Data integration", "Predictive modeling"],"
      price: "From $3,999","
      marketPrice: "$7,999-24,999",
      popular: false,"
      icon: <Brain className="w-8 h-8" />,"
      benefits: "Reduce readmission rates by 40%"
    },
    {"
      name: "AI-Powered Diagnostic Tools","
      description: "Comprehensive diagnostic solutions powered by artificial intelligence.","
      features: ["Symptom analysis", "Disease prediction", "Treatment recommendations", "Patient triage", "Clinical decision support", "Integration APIs"],"
      price: "From $4,999","
      marketPrice: "$9,999-29,999",
      popular: true,"
      icon: <Stethoscope className="w-8 h-8" />,"
      benefits: "Diagnose 200+ conditions with 95% accuracy"
    }
  ];

  return ("
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">: value
      <Helmet>
        <title>AI Healthcare Diagnostics - Zion Tech Group</title>"
        <meta name="description" content="Advanced AI-powered healthcare diagnostic solutions for medical imaging, predictive analytics, and clinical decision support." />: value
      </Helmet>
"
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered Healthcare Diagnostics;
          </h1>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">: value
            Revolutionize healthcare with our advanced AI diagnostic solutions. Improve accuracy, 
            speed up diagnosis, and enhance patient outcomes with cutting-edge technology.
          </p>
        </div>
"
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (': value
            <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 relative ${service.popular ? 'ring-2 ring-green-500' : ''}`}>
              {service.popular && ("
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">: value
                    Most Popular;
                  </span>
                </div>
              )}
              "
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">: value
                  {service.icon}
                </div>"
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>: value
              </div>
"
              <div className="mb-6">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-green-600">{service.price}</span>
                  <span className="text-gray-500 line-through ml-2">{service.marketPrice}</span>: value
                </div>"
                <p className="text-sm text-green-600 font-semibold text-center">{service.benefits}</p>: value
              </div>
"
              <ul className="space-y-3 mb-8">: value
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>: value
                  </li>
                ))}
              </ul>
"
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                Get Started;"
                <ArrowRight className="w-5 h-5 ml-2" />: value
              </button>
            </div>
          ))}
        </div>
"
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Healthcare with AI</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">: value
            Our AI diagnostic solutions are trusted by leading healthcare providers worldwide. 
            Improve patient care, reduce costs, and enhance diagnostic accuracy.
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Schedule Demo;
            </button>"
            <button className="border border-green-600 text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Download Case Study;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiHealthcareDiagnosticsPage;"'"'