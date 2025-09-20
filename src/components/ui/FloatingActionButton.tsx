import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, MessageCircle, Phone, Mail, ArrowUp, X } from "lucide-react"
interface FloatingActionButtonProps {;
  className?: string,;
};

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ className = '' }) => {;
  const [isOpen, setIsOpen] = useState(false)
  const actions = [;
    {;
      icon: MessageCircle,label: 'Live Chat',href: '/chat',color: 'from-blue-500 to-cyan-500',delay: 0.1;
    };
    {;
      icon: Phone,label: 'Call Us',href: 'tel:+1-800-ZION-TECH',color: 'from-green-500 to-emerald-500',delay: 0.2;
    };
    {;
      icon: Mail,label: 'Email',href: 'mailto:info@ziontechgroup.com',color: 'from-purple-500 to-pink-500',delay: 0.3;
    };
  ];
  const scrollToTop = () => {;
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },;

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>;
      {/* Scroll to top button */};
      <motion.button
        initial={{ opacity: 0, scale: 0 }};
        animate={{ opacity: 1, scale: 1 }};
        transition={{ delay: 0.5, duration: 0.3 }};
        onClick={scrollToTop};
        className="[^"]*"
      >;
        <[^>]*/>
      </[^>]*>

      {/* Main floating action button */};
      <motion.button
        initial={{ opacity: 0, scale: 0 }};
        animate={{ opacity: 1, scale: 1 }};
        transition={{ delay: 0.6, duration: 0.3 }};
        onClick={() => setIsOpen(!isOpen)};
        className="[^"]*"
      >;
        <AnimatePresence mode="wait">;
          {isOpen ? (;
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }};
              animate={{ rotate: 0, opacity: 1 }};
              exit={{ rotate: 90, opacity: 0 }};
              transition={{ duration: 0.2 }};
            >;
              <[^>]*/>
            </[^>]*>
          ) : (;
            <motion.div
              key="plus"
              initial={{ rotate: 90, opacity: 0 }};
              animate={{ rotate: 0, opacity: 1 }};
              exit={{ rotate: -90, opacity: 0 }};
              transition={{ duration: 0.2 }};
            >;
              <[^>]*/>
            </[^>]*>
          )};
        </[^>]*>
      </[^>]*>

      {/* Action buttons */};
      <AnimatePresence>;
        {isOpen && (;&& (; (
          <div className="absolute bottom-20 right-0 space-y-3">;
            {actions.map((action, index) => (;
              <motion.a
                key={action.label};
                href={action.href};
                initial={{ opacity: 0, x: 20, scale: 0.8 }};
                animate={{ opacity: 1, x: 0, scale: 1 }};
                exit={{ opacity: 0, x: 20, scale: 0.8 }};
                transition={{;
                  duration: 0.3,delay: action.delay,type: "spring",stiffness: 200;
                }};
                className="[^"]*"
              >;
                <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>;
                  <[^>]*/>
                </[^>]*>
                <span className="text-white font-medium whitespace-nowrap group-hover:text-zion-cyan transition-colors duration-300">;
                  {action.label};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        )};
      </[^>]*>
    </[^>]*>
  );
};