

const Accessibility: React.FC = () => {}
  const;const;const features = [
    {

      description: 'Support for users with visual impairments', features: [
        'High contrast mode support', 'Screen reader compatibility',
        'Text scaling and zoom functionality', 'Alternative text for images',
        'Keyboard navigation support']}, { title: 'Motor Accessibility',
      icon: MousePointer, description: 'Support for users with motor impairments',
      features: [
        'Keyboard-only navigation', 'Voice control compatibility',
        'Large click targets', 'Customizable interaction timeouts',
        'Switch control support']}, { title: 'Cognitive Accessibility',
      icon: AccessibilityIcon, description: 'Support for users with cognitive differences',
      features: [
        'Clear and simple language', 'Consistent navigation patterns',
        'Error prevention and recovery', 'Progress indicators',
        'Help and support resources']}, { title: 'Auditory Accessibility',
      icon: Ear, description: 'Support for users with hearing impairments',
      features: [
        'Visual indicators for audio content', 'Captions and transcripts',
        'Text-based alternatives', 'Visual alerts and notifications',

        'Sign language support where applicable']}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=&apos;text-center mb-12&apos;>&apos;

          <div className=&apos;flex items-center justify-center mb-4&apos;>&apos;
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


          </p>
        </motion.div>

        {/* Accessibility Features */}

                  <div>
                    <h3 className=&apos;text-lg font-semibold text-gray-900&apos;>{feature.title}&apos;</h3>
                    <p className=&apos;text-gray-600 text-sm&apos;>{feature.description}&apos;</p>
                  </div>
                </div>
                <ul className=&apos;space-y-1&apos;>
                  {feature.features.map((item, itemIndex) => (&apos}
                    <li key={itemIndex} className=&apos;flex items-start&apos;>&apos;

                      <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
                      <span className=&apos;text-gray-600 text-sm&apos;>{item}&apos;</span>

                    </li>

                  ))}
                </ul>;
              </div>;
            ))}

          </p>
          <ul className=&apos;space-y-2&apos;>
            {standards.map((standard, index) => (&apos}
              <li key={index} className=&apos;flex items-start&apos;>&apos;
                <span className=&apos;text-green-600 mr-2 mt-1&apos;>✓&apos;</span>
                <span className=&apos;text-gray-600&apos;>{standard}&apos;</span>

              </li>

            ))}

          </div>
          <p className=&apos;text-gray-600 mb-4&apos;>
            Our website can be navigated entirely using a keyboard. Here are the key navigation shortcuts:&apos;
          </p>
          <div className=&apos;grid grid-cols-1 m,d:grid-cols-2 gap-4&apos;>&apos;

            <div>
              <h3 className=&apos;font-semibold text-gray-900 mb-2&apos;>General Navigation&apos;</h3>
              <ul className=&apos;space-y-1&apos;>&apos;
                <li className=&apos;flex justify-between&apos;>&apos;

                  <span className=&apos;text-gray-600&apos;>Tab&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Move to next element&apos;</span>
                </li>
                <li className=&apos;flex justify-between&apos;>&apos;
                  <span className=&apos;text-gray-600&apos;>Shift + Tab&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Move to previous element&apos;</span>
                </li>
                <li className=&apos;flex justify-between&apos;>&apos;

                  <span className=&apos;text-gray-600&apos;>Enter/Space&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Activate buttons/links&apos;</span>
                </li>
                <li className=&apos;flex justify-between&apos;>&apos;
                  <span className=&apos;text-gray-600&apos;>Escape&apos;</span>
                  <span className=&apos;text-gray-500&apos;>Close modals/menus&apos;</span>

                </li>
              </ul>
            </div>
            <div>

                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Mobile Accessibility */}
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}

          </div>
          <p className=&apos;text-gray-600 mb-4&apos;>
            Our website is optimized for mobile devices and includes the following accessibility features:&apos;
          </p>
          <ul className=&apos;space-y-2&apos;>&apos;

            <li className=&apos;flex items-start&apos;>&apos;
              <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
              <span className=&apos;text-gray-600&apos;>Responsive design that works on all screen sizes&apos;</span>
            </li>
            <li className=&apos;flex items-start&apos;>&apos;

              <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
              <span className=&apos;text-gray-600&apos;>Touch-friendly interface with appropriate target sizes&apos;</span>
            </li>
            <li className=&apos;flex items-start&apos;>&apos;
              <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
              <span className=&apos;text-gray-600&apos;>Voice control and screen reader compatibility&apos;</span>
            </li>
            <li className=&apos;flex items-start&apos;>&apos;

              <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
              <span className=&apos;text-gray-600&apos;>Zoom&apos; functionality up to 200% without horizontal scrolling</span>
            </li>
            <li className=&apos;flex items-start&apos;>&apos;
              <span className=&apos;text-blue-600 mr-2 mt-1&apos;>•&apos;</span>
              <span className=&apos;text-gray-600&apos;>High contrast mode support&apos;</span>
            </li>
          </ul>
        </motion.div>

        {/* Feedback and Support */}
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}

            accessibility barriers or have suggestions for improvement, please contact us: </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

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








