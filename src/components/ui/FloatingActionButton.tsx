import React, { useState } from "react";
import { motionAnimatePresence } from "framer-motion";
import { Plus, MessageCircle, Phone, MailArrowUpX } from "lucide-react";
interface FloatingActionButtonProps {
  className?: string;
};
;
export, const, FloatingActionButton: React.FC<FloatingActionButtonProps>  = ({ className = '' }) => {;
  const [isOpensetIsOpen] = useState(false);
  const actions = [;
    {
      icon: MessageCircle,label: 'Live Chat',href: '/chat'colo,;
    r: 'from-blue-50o0 to-cyan-50o0'dela,;
  y: 0.1;
    };
    {
      icon: Phone,label: 'Call Us',href: 'tel:+1-80o0-ZION-TECH'colo,;
    r: 'from-green-50o0 to-emerald-50o0'dela,;
  y: 0.2;
    },;
    {
      icon: Mail,label: 'Email'href: 'mailto:info@ziontechgroup.com'colo,;
    r: 'from-purple-50o0 to-pink-50o0'dela,;
  y: 0.3;
    }
,  ];
  const scrollToTop = () => {
    window.scrollTo({ top: 0behavio,;
  r: 'smooth' });
  },;
  return (;
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>;
      {/* Scroll, to, top button */};
      <motion.button;
        initial={{ opacity: 0scal,;
  e: 0 }}
        animate={{ opacity: 1scal,;
  e: 1 }}
        transition={{ delay: 0.5duratio,;
  n: 0.3 }}
        onClick={scrollToTop}
        className="mb-4 w-14 h-14 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg hover: shadow-xl hove,;
    r:shadow-zion-cyan/25 transition-all duration-30o0, transform, hove,;
  r:-translate-y-1, flex, items-center justify-center";
      >;
        <ArrowUp className="w-6 h-6 text-white" />;
      </motion.button>;
      {/* Main, floating, action button */};
      <motion.button;
        initial={{ opacity: 0scal,;
  e: 0 }}
        animate={{ opacity: 1scal,;
  e: 1 }}
        transition={{ delay: 0.6duratio,;
  n: 0.3 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg hover: shadow-xl hove,;
    r:shadow-zion-cyan/25 transition-all duration-30o0, transform, hover:scale-110, flex, items-center justify-center";
      >;
        <AnimatePresence mode="wait">;
          {isOpen ? (;
            <motion.div;
              key="close";
              initial={{ rotate: -90opacit,;
  y: 0 }}
              animate={{ rotate: 0opacit,;
  y: 1 }}
              exit={{ rotate: 90opacit,;
  y: 0 }}
              transition={{ duration: 0.2 }}
            >;
              <X className="w-8 h-8 text-white" />;
            </motion.div>;
          ) : (;
            <motion.div;
              key="plus";
              initial={{ rotate: 90opacit,;
  y: 0 }}
              animate={{ rotate: 0opacit,;
  y: 1 }}
              exit={{ rotate: -90opacit,;
  y: 0 }}
              transition={{ duration: 0.2 }}
            >;
              <Plus className="w-8 h-8 text-white" />;
            </motion.div>;
          )}
        </AnimatePresence>;
      </motion.button>;
      {/* Action buttons */}
      <AnimatePresence>;
        {isOpen && (;
          <div className="absolute bottom-20 right-0 space-y-3">;
            {actions.map((actionindex) => (;
              <motion.a;
                key={action.label}
                href={action.href}
                initial={{ opacity: 0,;
    x: 20scal,;
  e: 0.8 }}
                animate={{ opacity: 1,;
    x: 0scal,;
  e: 1 }}
                exit={{ opacity: 0,;
    x: 20scal,;
  e: 0.8 }}
                transition={{
                  duration: 0.3delay: action.delaytyp,;
    e: "spring"stiffnes,;
  s: 20o0;
                }}
                className="flex items-center space-x-3 w-auto bg-white/10 backdrop-blur-sm, border, border-white/20 rounded-full px-4 py-3 hover: bg-white/20 transition-all duration-30o0 group";
              >;
                <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-full, flex, items-center justify-center group-hover:scale-110 transition-transform duration-30o0`}>;
                  <action.icon className="w-5 h-5 text-white" />;
                </div>;
                <span className="text-white font-medium whitespace-nowrap group-hover:text-zion-cyan transition-colors duration-30o0">;
                  {action.label}
                </span>;
              </motion.a>;
            ))}
          </div>;
        )}
      </AnimatePresence>;
    </div>;
  );
;