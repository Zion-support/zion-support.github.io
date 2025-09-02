import { motion } from 'framer-motion';
import { Accessibility as AccessibilityIcon, Eye, Ear, MousePointer, Keyboard, Smartphone } from 'lucide-react';

const Accessibility: React.FC = () => {
  const features = [
    {
      title: 'Visual Accessibility',
      icon: Eye,
      description: 'Support for users with visual impairments',
      features: [;
        'High contrast mode support',
        'Screen reader compatibility',
        'Text scaling and zoom functionality',
        'Alternative text for images',
        'Keyboard navigation support';
      ]},
    {
      title: 'Motor Accessibility',
      icon: MousePointer,
      description: 'Support for users with motor impairments',
      features: [
        'Keyboard-only navigation',
        'Voice control compatibility',
        'Large click targets',
        'Customizable interaction timeouts',
        'Switch control support';
      ]},
    {
      title: 'Cognitive Accessibility',
      icon: AccessibilityIcon,
      description: 'Support for users with cognitive differences',
      features: [
        'Clear and simple language',
        'Consistent navigation patterns',
        'Error prevention and recovery',
        'Progress indicators',
        'Help and support resources';
      ]},
    {
      title: 'Auditory Accessibility',
      icon: Ear,
      description: 'Support for users with hearing impairments',
      features: [
        'Visual indicators for audio content',
        'Captions and transcripts',
        'Text-based alternatives',
        'Visual alerts and notifications',
        'Sign language support where applicable';
      ]}
  ];
  const standards = [
    'WCAG 2.1 AA compliance',
    'Section 508 compliance',
    'ADA compliance',
    'EN 301 549 compliance',
    'ISO/IEC 40500 compliance';
  ]
  return(
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'>
          <div className='flex items-center justify-center mb-4'>
            <AccessibilityIcon className='h-8 w-8 text-blue-600 mr-3' />
            <h1 className='text-4xl font-bold text-gray-900'>Accessibility Statement</h1>
          </div>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            We are committed to making our website accessible to all users, including those with disabilities.
          </p>
          <p className='text-sm text-gray-500 mt-4'>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Our Accessibility Commitment</h2>
          <p className='text-gray-600 leading-relaxed mb-4'>
            Zion Tech Group is committed to ensuring digital accessibility for people with disabilities.;
            We are continually improving the user experience for everyone and applying the relevant;
            accessibility standards to ensure we provide equal access to all users.
          </p>
          <p className='text-gray-600 leading-relaxed'>
            Our goal is to make our website and services accessible to all users, regardless of their;
            abilities or the technology they use to access the internet.
          </p>
        </motion.div>
        {/* Accessibility Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Accessibility Features</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {features.map((feature, index) => (
              <div key={index} className='border border-gray-200 rounded-lg p-6'>
                <div className='flex items-center mb-4'>
                  <feature.icon className='h-6 w-6 text-blue-600 mr-3' />
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900'>{feature.title}</h3>
                    <p className='text-gray-600 text-sm'>{feature.description}</p>
                  </div>
                </div>
                <ul className='space-y-1'>
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className='flex items-start'>
                      <span className='text-blue-600 mr-2 mt-1'>•</span>
                      <span className='text-gray-600 text-sm'>{item}</span>
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
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Standards Compliance</h2>
          <p className='text-gray-600 mb-4'>
            We strive to meet or exceed the following accessibility standards:
          </p>
          <ul className='space-y-2'>
            {standards.map((standard, index) => (
              <li key={index} className='flex items-start'>
                <span className='text-green-600 mr-2 mt-1'>✓</span>
                <span className='text-gray-600'>{standard}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        {/* Keyboard Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>
          <div className='flex items-center mb-4'>
            <Keyboard className='h-6 w-6 text-blue-600 mr-3' />
            <h2 className='text-2xl font-bold text-gray-900'>Keyboard Navigation</h2>
          </div>
          <p className='text-gray-600 mb-4'>
            Our website can be navigated entirely using a keyboard. Here are the key navigation shortcuts:
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>General Navigation</h3>
              <ul className='space-y-1'>
                <li className='flex justify-between'>
                  <span className='text-gray-600'>Tab</span>
                  <span className='text-gray-500'>Move to next element</span>
                </li>
                <li className='flex justify-between'>
                  <span className='text-gray-600'>Shift + Tab</span>
                  <span className='text-gray-500'>Move to previous element</span>
                </li>
                <li className='flex justify-between'>
                  <span className='text-gray-600'>Enter/Space</span>
                  <span className='text-gray-500'>Activate buttons/links</span>
                </li>
                <li className='flex justify-between'>
                  <span className='text-gray-600'>Escape</span>
                  <span className='text-gray-500'>Close modals/menus</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>Page Navigation</h3>
              <ul className='space-y-1'>
                <li className='flex justify-between'>
                  <span className='text-gray-600'>Home</span>
                  <span className='text-gray-500'>Go to top of page</span>
                </li>
                <li className='flex justify-between'>
                  <span className='text-gray-600'>End</span>
                  <span className='text-gray-500'>Go to bottom of page</span>
                </li>
                <li className='flex justify-between'>
                  <span className='text-gray-600'>Page Up/Down</span>
                  <span className='text-gray-500'>Scroll page</span>
                </li>
                <li className='flex justify-between'>
                  <span className='text-gray-600'>Alt + M</span>
                  <span className='text-gray-500'>Skip to main content</span>
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
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8'>
          <div className='flex items-center mb-4'>
            <Smartphone className='h-6 w-6 text-blue-600 mr-3' />
            <h2 className='text-2xl font-bold text-gray-900'>Mobile Accessibility</h2>
          </div>
          <p className='text-gray-600 mb-4'>
            Our website is optimized for mobile devices and includes the following accessibility features:
          </p>
          <ul className='space-y-2'>
            <li className='flex items-start'>
              <span className='text-blue-600 mr-2 mt-1'>•</span>
              <span className='text-gray-600'>Responsive design that works on all screen sizes</span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-600 mr-2 mt-1'>•</span>
              <span className='text-gray-600'>Touch-friendly interface with appropriate target sizes</span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-600 mr-2 mt-1'>•</span>
              <span className='text-gray-600'>Voice control and screen reader compatibility</span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-600 mr-2 mt-1'>•</span>
              <span className='text-gray-600'>Zoom functionality up to 200% without horizontal scrolling</span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-600 mr-2 mt-1'>•</span>
              <span className='text-gray-600'>High contrast mode support</span>
            </li>
          </ul>
        </motion.div>
        {/* Feedback and Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>Feedback and Support</h2>
          <p className='text-gray-600 mb-4'>
            We welcome your feedback on the accessibility of our website. If you encounter any;
            accessibility barriers or have suggestions for improvement, please contact us:
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>Accessibility Contact</h3>
              <p className='text-gray-600'>accessibility@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>General Contact</h3>
              <p className='text-gray-600'>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>Phone</h3>
              <p className='text-gray-600'>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 mb-2'>Response Time</h3>
              <p className='text-gray-600'>We aim to respond within 2 business days</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )}
;
export default Accessibility