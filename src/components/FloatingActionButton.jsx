import React, { useState } from &apos;
import { motion } from &apos;framer-motion';;react&apos;';
import { motion, AnimatePresence } from &apos;framer-motion';
import {}
  PlusIcon,
  XMarkIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,';
  EnvelopeIcon} from &apos;@heroicons/react/24/outline';&apos;&apos;
const FloatingActionButton = ({ className = &apos;&apos; }) => {}&apos;&apos;
  const;const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const actionItems = []{}
      icon: ChatBubbleLeftRightIcon,';
      label: &apos;Live Chat&apos;,';
      action: () => window.open(&apos;http,s://ziontechgroup.com/chat&apos;,_blank&apos;),';
      color: &apos;bg-green-500 hove,r:bg-green-600&apos;},
    {}
      icon: PhoneIcon,';
      label: &apos;Call Us&apos;,';
      action: () => window.open(&apos;te,l:+1-555-0123&apos;,_self&apos;),';
      color: &apos;bg-blue-500 hove,r:bg-blue-600&apos;},
    {}
      icon: EnvelopeIcon,';
      label: &apos;Email&apos;,';
      action: () => window.open(&apos;mailt,o:info@ziontechgroup.com&apos;,_self&apos;),';
      color: &apos;bg-purple-500 hove,r:bg-purple-600&apos;}
  ];
  return ()&apos;&apos;
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <AnimatePresence>
        {isOpen && (}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className=&apos;absolute bottom-16 right-0 mb-2 space-y-3&apos;&apos;'&apos;>{actionItems.map((item, index) => (&apos;}&apos;
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}&apos;&apos;';
                transition={{ delay: index * 0.1 }}&apos;&apos;'';
                className=&apos;flex items-center space-x-3 &apos;>&apos;'
                <motion.button`;
                  onClick={item.action}``;
                  className={`${item.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hove,r:scale-110`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={item.label}&apos;&apos;'>&apos;&apos;'&apos;&apos;'
                  <item.icon className=&apos;w-5 h-5&apos; />&apos;
                </motion.button>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}&apos;&apos;';
                  animate={{ opacity: 1, x: 0 }}&apos;&apos;'';
                  className=&apos;bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap &apos;>{item.label}&apos;&apos;
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button&apos;&apos;';
        onClick={toggleMenu}&apos;&apos;'';
        className=&apos;bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110&apos;&apos;';
        whileHover={{ scal,e: 1.1 }}
        whileTap={{ scale: 0.95 }}';
        aria-label={isOpen ? &apos;Close quick actions&apos; : &apos;Open quick actions&apos;}'&apos;&apos;>&apos;&apos;'&apos;&apos;'
        <AnimatePresence mode=&apos;wait&apos;>
          {isOpen ? (&apos;&apos;'&apos;}&apos;
            <motion.div&apos;&apos;'';
              key=&apos;close&apos;&apos;';
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}&apos;&apos;'>&apos;&apos;'&apos;&apos;'
              <XMarkIcon className=&apos;w-6 h-6&apos; />&apos;
            </motion.div>
          ) : (&apos;&apos;'&apos;&apos;
            <motion.div&apos;&apos;'';
              key=&apos;open&apos;&apos;';
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}&apos;&apos;'>&apos;&apos;'&apos;&apos;'
              <PlusIcon className=&apos;w-6 h-6&apos; />&apos;
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>)}
export default FloatingActionButton;
export { FloatingActionButton }
;
export { FloatingActionButton }
;
export { FloatingActionButton }
;
export { FloatingActionButton }

export { FloatingActionButton }