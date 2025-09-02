import { motion } from &apos;framer-motion';
import { Accessibility as AccessibilityIcon, Eye, Ear, MousePointer, Keyboard, Smartphone } from &apos;lucide-react';&apos;&apos;

const Accessibility: React.FC = () => {}
  const;const;const features = [
    {
      title: &apos;Visual Accessibility&apos;,
      icon: Eye,
      description: &apos;Support for users with visual impairments&apos;,
      features: [;
        &apos;High contrast mode support&apos;,
        &apos;Screen reader compatibility&apos;,
        &apos;Text scaling and zoom&apos;} functionality&apos;,
        &apos;Alternative text for images&apos;,
        &apos;Keyboard navigation support';
      ]},
    {
      title: &apos;Motor Accessibility&apos;,
      icon: MousePointer,
      description: &apos;Support for users with motor impairments&apos;,
      features: [
        &apos;Keyboard-only navigation&apos;,
        &apos;Voice control compatibility&apos;,
        &apos;Large click targets&apos;,
        &apos;Customizable interaction timeouts&apos;,
        &apos;Switch control support';
      ]},
    {
      title: &apos;Cognitive Accessibility&apos;,
      icon: AccessibilityIcon,
      description: &apos;Support for users with cognitive differences&apos;,
      features: [
        &apos;Clear and simple language&apos;,
        &apos;Consistent navigation patterns&apos;,
        &apos;Error prevention and recovery&apos;,
        &apos;Progress indicators&apos;,
        &apos;Help and support resources';
      ]},
    {
      title: &apos;Auditory Accessibility&apos;,
      icon: Ear,
      description: &apos;Support for users with hearing impairments&apos;,
      features: [
        &apos;Visual indicators for audio content&apos;,
        &apos;Captions and transcripts&apos;,
        &apos;Text-based alternatives&apos;,
        &apos;Visual alerts and notifications&apos;,
        &apos;Sign language support where applicable';
      ]}
  ];&apos;&apos;
  const standards = [
    &apos;WCAG 2.1 AA compliance&apos;,
    &apos;Section 508 compliance&apos;,
    &apos;ADA compliance&apos;,
    &apos;EN 301 549 compliance&apos;,
    &apos;ISO/IEC 40500 compliance';
  ]
  return(&apos;&apos;
    <div className=&apos;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&apos;>&apos;'
      <div className=&apos;max-w-4xl mx-auto px-4 sm:px-6 l,g:px-8 py-16&apos;>
        {/* Header */}&apos;
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=&apos;text-center mb-12&apos;>&apos;'
          <div className=&apos;flex items-center justify-center mb-4&apos;>&apos;'
            <AccessibilityIcon className=&apos;h-8 w-8 text-blue-600 mr-3&apos; />&apos;
            <h1 className=&apos;text-4xl font-bold text-gray-900&apos;>Accessibility Statement&apos;</h1>
          </div>
          <p className=&apos;text-xl text-gray-600 max-w-2xl mx-auto&apos;>
            We are committed to making our website accessible to all users, including those with disabilities.&apos;
          </p>
          <p className=&apos;text-sm text-gray-500 mt-4&apos;>
            Last updated: {new Date().toLocaleDateString()}&apos;
          </p>
        </motion.div>
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-4&apos;>Our Accessibility Commitment&apos;</h2>
          <p className=&apos;text-gray-600 leading-relaxed mb-4&apos;>
            Zion Tech Group is committed to ensuring digital accessibility for people with disabilities.;
            We are continually improving the user experience for everyone and applying the relevant;
            accessibility standards to ensure we provide equal access to all users.&apos;
          </p>
          <p className=&apos;text-gray-600 leading-relaxed&apos;>
            Our goal is to make our website and services accessible to all users, regardless of their;
            abilities or the technology they use to access the internet.&apos;
          </p>
        </motion.div>
        {/* Accessibility Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-6&apos;>Accessibility Features&apos;</h2>
          <div className=&apos;grid grid-cols-1 md:grid-cols-2 gap-6&apos;>
            {features.map((feature, index) => (&apos;}
              <div key={index} className=&apos;border border-gray-200 rounded-lg p-6&apos;>&apos;'
                <div className=&apos;flex items-center mb-4&apos;>&apos;'
                  <feature.icon className=&apos;h-6 w-6 text-blue-600 mr-3&apos; />&apos;
                  <div>
                    <h3 className=&apos;text-lg font-semibold text-gray-900&apos;>{feature.title}&apos;</h3>
                    <p className=&apos;text-gray-600 text-sm&apos;>{feature.description}&apos;</p>
                  </div>
                </div>
                <ul className=&apos;space-y-1&apos;>
                  {feature.features.map((item, itemIndex) => (&apos;}
                    <li key={itemIndex} className=&apos;flex items-start&apos;>&apos;'
                      <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
                      <span className=&apos;text-gray-600 text-sm&apos;>{item}&apos;</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Standards Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-4&apos;>Standards Compliance&apos;</h2>
          <p className=&apos;text-gray-600 mb-4&apos;>
            We strive to meet or exceed the following accessibility standards:&apos;
          </p>
          <ul className=&apos;space-y-2&apos;>
            {standards.map((standard, index) => (&apos;}
              <li key={index} className=&apos;flex items-start&apos;>&apos;'
                <span className=&apos;text-green-600 mr-2 mt-1&apos;>✓&apos;</span>
                <span className=&apos;text-gray-600&apos;>{standard}&apos;</span>
              </li>
            ))}
          </ul>
        </motion.div>
        {/* Keyboard Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8&apos;>&apos;'
          <div className=&apos;flex items-center mb-4&apos;>&apos;'
            <Keyboard className=&apos;h-6 w-6 text-blue-600 mr-3&apos; />&apos;
            <h2 className=&apos;text-2xl font-bold text-gray-900&apos;>Keyboard Navigation&apos;</h2>
          </div>
          <p className=&apos;text-gray-600 mb-4&apos;>
            Our website can be navigated entirely using a keyboard. Here are the key navigation shortcuts:&apos;
          </p>
          <div className=&apos;grid grid-cols-1 m,d:grid-cols-2 gap-4&apos;>&apos;'
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>General Navigation&apos;</h3>
              <ul className=&apos;space-y-1&apos;>&apos;'
                <li className=&apos;flex justify-between&apos;>&apos;'
                  <span className=&apos;text-gray-600&apos;>Tab&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Move to next element&apos;</span>
                </li>
                <li className=&apos;flex justify-between&apos;>&apos;'
                  <span className=&apos;text-gray-600&apos;>Shift + Tab&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Move to previous element&apos;</span>
                </li>
                <li className=&apos;flex justify-between&apos;>&apos;'
                  <span className=&apos;text-gray-600&apos;>Enter/Space&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Activate buttons/links&apos;</span>
                </li>
                <li className=&apos;flex justify-between&apos;>&apos;'
                  <span className=&apos;text-gray-600&apos;>Escape&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Close modals/menus&apos;</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Page Navigation&apos;</h3>
              <ul className=&apos;space-y-1&apos;>&apos;'
                <li className=&apos;flex justify-between&apos;>&apos;'
                  <span className=&apos;text-gray-600&apos;>Home&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Go to top of page&apos;</span>
                </li>
                <li className=&apos;flex justify-between&apos;>&apos;'
                  <span className=&apos;text-gray-600&apos;>End&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Go to bottom of page&apos;</span>
                </li>
                <li className=&apos;flex justify-between&apos;>&apos;'
                  <span className=&apos;text-gray-600&apos;>Page Up/Down&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Scroll page&apos;</span>
                </li>
                <li className=&apos;flex justify-between&apos;>&apos;'
                  <span className=&apos;text-gray-600&apos;>Alt + M&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Skip to main content&apos;</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        {/* Mobile Accessibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8&apos;>&apos;'
          <div className=&apos;flex items-center mb-4&apos;>&apos;'
            <Smartphone className=&apos;h-6 w-6 text-blue-600 mr-3&apos; />&apos;
            <h2 className=&apos;text-2xl font-bold text-gray-900&apos;>Mobile Accessibility&apos;</h2>
          </div>
          <p className=&apos;text-gray-600 mb-4&apos;>
            Our website is optimized for mobile devices and includes the following accessibility features:&apos;
          </p>
          <ul className=&apos;space-y-2&apos;>&apos;'
            <li className=&apos;flex items-start&apos;>&apos;'
              <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
              <span className=&apos;text-gray-600&apos;>Responsive design that works on all screen sizes&apos;</span>
            </li>
            <li className=&apos;flex items-start&apos;>&apos;'
              <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
              <span className=&apos;text-gray-600&apos;>Touch-friendly interface with appropriate target sizes&apos;</span>
            </li>
            <li className=&apos;flex items-start&apos;>&apos;'
              <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
              <span className=&apos;text-gray-600&apos;>Voice control and screen reader compatibility&apos;</span>
            </li>
            <li className=&apos;flex items-start&apos;>&apos;'
              <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
              <span className=&apos;text-gray-600&apos;>Zoom&apos; functionality up to 200% without horizontal scrolling</span>
            </li>
            <li className=&apos;flex items-start&apos;>&apos;'
              <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
              <span className=&apos;text-gray-600&apos;>High contrast mode support&apos;</span>
            </li>
          </ul>
        </motion.div>
        {/* Feedback and Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-8&apos;>&apos;'
          <h2 className=&apos;text-2xl font-bold text-gray-900 mb-4&apos;>Feedback and Support&apos;</h2>
          <p className=&apos;text-gray-600 mb-4&apos;>
            We welcome your feedback on the accessibility of our website. If you encounter any;
            accessibility barriers or have suggestions for improvement, please contact us:&apos;
          </p>
          <div className=&apos;grid grid-cols-1 m,d:grid-cols-2 gap-4&apos;>&apos;'
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Accessibility Contact&apos;</h3>
              <p className=&apos;text-gray-600&apos;>accessibility@ziontechgroup.com&apos;</p>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>General Contact&apos;</h3>
              <p className=&apos;text-gray-600&apos;>kleber@ziontechgroup.com&apos;</p>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Phone&apos;</h3>
              <p className=&apos;text-gray-600&apos;>+1 302 464 0950&apos;</p>
            </div>
            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>Response Time&apos;</h3>
              <p className=&apos;text-gray-600&apos;>We aim to respond within 2 business days&apos;</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )}
;
export default Accessibility