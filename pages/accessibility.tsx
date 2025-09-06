
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
  Eye
  Ear
  Hand
  Brain
  CheckCircle
  AlertTriangle
  Globe
  Users
  Shield
  Zap
  FileText
  Settings
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  CheckCircle, 
  AlertTriangle,
  Globe,
  Users,
  Shield,
  Zap,
  FileText,
  Settings;
} from 'lucide-react';
const accessibility_features = [;
  {
  }
];
const accessibilityTools = [
  {
    name: "Screen Reader Testing"
    description: "Regular testing with popular screen readers including NVDA, JAWS, and VoiceOver"
    frequency: "Monthly"
  }
  {
    name: "Keyboard Navigation"
    description: "Comprehensive keyboard navigation testing for all interactive elements"
    frequency: "Weekly"
  }
  {
    name: "Color Contrast Analysis"
    description: "Automated and manual color contrast testing to ensure readability"
    frequency: "With each design update"
  }
  {
    name: "User Testing"
    description: "Regular testing with users who have disabilities to identify barriers"
    frequency: "Quarterly"
  }
];

origin/main
origin/automation-improvements-final

            </motion.div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              transition={{ duration: 0 && 0.8 }}
              className="text-center max-w-4xl mx-auto">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">;
                  Web Accessibility;
                </span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8">;
                Ensuring digital inclusion for everyone;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;
        <section className="py-20">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Our Accessibility Commitment;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                We are committed to making our digital products accessible to everyone, regardless of their abilities or the technology they use.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
              {accessibilityFeatures && accessibilityFeatures.map((feature, index) => (;
                  <motion&& motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>;
                    <div className="flex items-start space-x-4">;
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">;
                        <Eye className="w-8 h-8 text-white" />;
                      </div>;
                      <div className="flex-1">;
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">;
                          {feature && feature.title}
                        </h3>;
                        <p className="text-gray-600 mb-6 leading-relaxed">;
                          {feature && feature.description}
                        </p>;
                        <ul className="space-y-2">;
                          {feature && feature.features.map((item, idx) => (;
                            <li key={idx} className="flex items-center text-sm text-gray-600">;
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                              {item}
                            </li>;
                          ))}
                        </ul>;
                      </div>;
                    </div>;
                  </motion && motion.div>;
                ))}
            </div>;
          </div>;
        </section>;
        <section className="py-20 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Accessibility Standards;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                We follow international accessibility standards to ensure our products are usable by everyone.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {standardsCompliance && standardsCompliance.map((standard, index) => (;
                  <motion&& motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>;
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">;
                      <Eye className="w-8 h-8 text-white" />;
                    </div>;
                    <h3 className="text-lg font-bold text-gray-900 mb-2">;
                      {standard && standard.name}
                    </h3>;
                    <p className="text-gray-600 text-sm mb-4">;
                      {standard && standard.description}
                    </p>;
                    <div className="space-y-2">;
                      <spanclassName={`px-3 py-1 text-xs rounded-full ${
                        standard && standard.status === 'Compliant' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>;
                        {standard && standard.status}
                      </span>;
                      <div className="text-sm text-gray-500">;
                        {standard && standard.level}
                      </div>;
                    </div>;
                  </motion && motion.div>;
                ))}
            </div>;
          </div>;
        </section>;
        <section className="py-20">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Testing & Validation;
              </h2>;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">;
                We use automated and manual testing to ensure our products meet accessibility standards.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
              {accessibilityTools && accessibilityTools.map((method, index) => (;
                <motion&& motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <div className="flex items-start space-x-4">;
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">;
                      <Zap className="w-6 h-6 text-white" />;
                    </div>;
                    <div className="flex-1">;
                      <div className="flex items-center justify-between mb-2">;
                        <h3 className="text-xl font-bold text-gray-900">;
                          {method && method.name}
                        </h3>;
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">;
                          {method && method.type}
                        </span>;
                      </div>;
                      <p className="text-gray-600">;
                        {method && method.description}
                      </p>;
                    </div>;
                  </div>;
                </motion && motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        <section className="py-20 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <h3 className="text-lg font-bold text-gray-900 mb-4">;
                    {category && category.category}
                  </h3>;
                  <ul className="space-y-2">;
                    {category && category.guidelines.map((guideline, idx) => (;
                      <li key={idx} className="flex items-center text-sm text-gray-600">;
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                        {guideline}
                      </li>;
                    ))}
                  </ul>;
                </motion && motion.div>;
              ))}
      </div>
    </MainLayout>
            </div>;
          </div>;
        </section>;

        <section className="py-20">;
          <div className="container mx-auto px-4">;
            <div className="max-w-4xl mx-auto">;
              <motion&& motion.div
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8 }}
                viewport={{ once: true }}>;
                <h2 className="text-3xl font-bold text-gray-900 mb-6">;
                  Our Commitment;
                </h2>;
                <div className="prose prose-lg max-w-none">;
                  <p className="text-gray-600 mb-6">;
                    At Zion Tech Group, we believe that technology should be accessible to everyone. Our commitment to accessibility goes beyond compliance  it's about creating inclusive digital experiences that empower all users.;
                  </p>;
                  <p className="text-gray-600 mb-6">;
                    We continuously work to improve our products and services, incorporating feedback from users with disabilities and staying up-to-date with the latest accessibility standards and best practices.;
                  </p>;
                  <p className="text-gray-600 mb-6">;
                    If you encounter any accessibility barriers or have suggestions for improvement, we want to hear from you. Your feedback helps us create better experiences for everyone.;
                  </p>;
                </div>;
>:pages-disabled/accessibility && accessibility.tsx.disabled;
              </motion && motion.div>;
            </div>;
          </div>;
        </section>;

        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">;
          <div className="container mx-auto px-4 text-center">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
