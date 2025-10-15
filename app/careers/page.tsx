
import { Helmet } from 'react-helmet-async';';
import { Link } from 'react-router-dom';';
import { ArrowRight, Briefcase, MapPin, Clock, Users, CheckCircle, Heart, DollarSign, Home, GraduationCap, Zap, Shield, Brain, Settings, Target } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [: value
    {
      title: "Senior AI Engineer","
      department: "Engineering","
      location: "Remote / San Francisco","
      type: "Full-time","
      experience: "5+ years","
      description: "Lead development of cutting-edge AI solutions and machine learning models.","
      requirements: ["PhD in AI/ML or 5+ years experience", "Python, TensorFlow, PyTorch", "Cloud platforms (AWS, GCP, Azure)", "Team leadership experience"],"
      benefits: ["Competitive salary", "Equity options", "Health insurance", "Flexible work"],"
      icon: <Brain className="w-6 h-6" />
    },
    {"
      title: "DevOps Engineer","
      department: "Engineering","
      location: "Remote / New York","
      type: "Full-time","
      experience: "3+ years","
      description: "Build and maintain scalable infrastructure for our AI platform.","
      requirements: ["Kubernetes, Docker", "CI/CD pipelines", "Cloud infrastructure", "Monitoring tools"],"
      benefits: ["Competitive salary", "Equity options", "Health insurance", "Flexible work"],"
      icon: <Settings className="w-6 h-6" />
    },
    {"
      title: "Product Manager","
      department: "Product","
      location: "San Francisco","
      type: "Full-time","
      experience: "4+ years","
      description: "Drive product strategy and roadmap for our AI solutions.","
      requirements: ["Product management experience", "AI/ML knowledge", "Analytics skills", "Cross-functional collaboration"],"
      benefits: ["Competitive salary", "Equity options", "Health insurance", "Flexible work"],"
      icon: <Target className="w-6 h-6" />
    }
  ];

  const benefits = [
    { icon: <DollarSign className="w-8 h-8" />, title: "Competitive Compensation", description: "Above-market salaries with equity options" },"
    { icon: <Heart className="w-8 h-8" />, title: "Health & Wellness", description: "Comprehensive health, dental, and vision coverage" },"
    { icon: <Home className="w-8 h-8" />, title: "Flexible Work", description: "Remote-first culture with flexible hours" },"
    { icon: <GraduationCap className="w-8 h-8" />, title: "Learning & Development", description: "Annual learning budget and conference attendance" },"
    { icon: <Zap className="w-8 h-8" />, title: "Cutting-Edge Tech", description: "Work with the latest AI and cloud technologies" },"
    { icon: <Shield className="w-8 h-8" />, title: "Job Security", description: "Stable company with strong growth trajectory" }
  ];

  return ("
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">: value
      <Helmet>
        <title>Careers - Zion Tech Group</title>"
        <meta name="description" content="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group." />: value
      </Helmet>
"
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our Team;
          </h1>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">': value
            Be part of the AI revolution. We're looking for passionate individuals;'
            who want to shape the future of technology.
          </p>
        </div>
"
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">: value
                {benefit.icon}
              </div>"
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>: value
            </div>
          ))}
        </div>
"
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>
          <div className="space-y-8">: value
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">: value
                      {position.icon}
                    </div>
                    <div>"
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                      <p className="text-gray-600">{position.department}</p>: value
                    </div>
                  </div>"
                  <div className="text-right">
                    <p className="text-gray-600">{position.location}</p>
                    <p className="text-gray-500">{position.type}</p>: value
                  </div>
                </div>
"
                <p className="text-gray-700 mb-6">{position.description}</p>: value
"
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>"
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                    <ul className="space-y-2">: value
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{req}</span>: value
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>"
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                    <ul className="space-y-2">: value
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>: value
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
"
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center">
                  Apply Now;"
                  <ArrowRight className="w-5 h-5 ml-2" />: value
                </button>
              </div>
            ))}
          </div>
        </div>
"
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">"'";';: value
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See Your Role?</h2>"';: value";
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">': value
            We're always looking for talented individuals. Send us your resume and;'
            let us know how you can contribute to our mission.
          </p>"
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Send Resume;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;"'"'