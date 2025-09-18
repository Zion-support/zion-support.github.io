<<<<<<< HEAD
import React, {useState} from 'react';
export default FloatingActionButton;
import {motion, AnimatePresence} from 'framer-motion';
icon: ChatBubbleLeftRightIcon,"
      label: &apos,Live Chat&apos,"
      action: () => window.open(&aposhttp,s: // comment
      color: &apos,bg - green-500 hove,r:bg-green-600&apos} {}"
      icon: PhoneIcon,",
      label: &apos,Call Us&apos,"
      action: () => window.open(&aposte,l: +1-555-0123&apos,_self&apos),
      color: &apos,bg - blue-500 hove,r:bg-blue-600&apos} {}"
      icon: EnvelopeIcon,",
      label: &apos,Email&apos,"
      action: () => window.open(&aposmailt,o: info@ziontechgroup.com&apos,_self&apos),
      color: &apos,bg - purple-500 hove,r:bg-purple-600&apos}"""
  EnvelopeIcon} from "@heroicons / react/24/outline",
const FloatingActionButton = (props: any) => {}

  const [isOpen, setIsOpen] = useState()
}
      label: "Live Chat","
      action: () => window.open("https:// comment
      color: "bg - green-500 hover:bg-green-600"}, {}"
      label: "Call Us",",
      action: () => window.open("tel:+1 - 555-0123",_self"),",
      color: "bg - blue-500 hover:bg-blue-600"}, {}"
      label: "Email",",
      action: () => window.open("mailto:info@ziontechgroup.com",_self"),"
      icon: ChatBubbleLeftRightIcon, ";""
      label: "Live Chat", ";""
      action: () => window.open("https: // comment
      color: "bg - green-500 hover:bg-green-600"} {}"
      icon: PhoneIcon,","
      label: "Call Us", ";""
      action: () => window.open("tel: +1 - 555-0123", _self"), ",
      color: "bg - blue-500 hover:bg-blue-600"} {}"
      icon: EnvelopeIcon,","
      label: "Email", ";""
      action: () => window.open("mailto: info@ziontechgroup.com", _self"), "
      color: "bg-purple-500 hover:bg-purple-600"}

  ]
  return()
}
  ]
  return ();"
    <div className="{"fixed" bottom-6 right-6 z-50 ${className}"}>
      <AnimatePresence> {isOpen && (
          <motion.div;"
            initial = "{{" opacity: 0, scale: 0.8 }}"
            animate="{{" opacity: 1, scale: 1 }}"
            exit="{{" opacity: 0, scale: 0.8 }}">
            className="absolute bottom-16 right-0 mb-2 space-y-3">{actionItems.map((item, index) => (;"
                key = "{item.label}""
                initial="{{" opacity: 0, x: 20 }}"
                animate="{{" opacity: 1, x: 0 }}"
                exit="{{" opacity: 0, x: 20 }}"";"
                transition="{{" delay: index * 0.1 }}"";"
                className="flex items-center space-x-3 ">
  return ()&apos;&apos;"
    <div className = "{"fixed" bottom-6 right-6 z-50 ${className}"}>
      <AnimatePresence>
        {isOpen && (}

          <motion.div,">
className="&apos;absolute" bottom-16 right-0 mb-2 space-y-3&apos;&apos,&apos;>{actionItems.map((item, index) => (&apos}&apos;"
            className = "absolute bottom-16 right-0 mb-2 space-y-3""">{actionItems.map((item, index) => ("
                exit="{{" opacity: 0, x: 20 }}&apos;&apos;"
                transition="{{" delay: index * 0.1 }}&apos;&apos,";"
                className="&apos;flex" items-center space-x-3 &apos;>&apos,
                <motion.button";"
                  onClick="{item.action}"";""
                  className = "{"${item.color}" text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hove,r:scale-110"}"
                  whileHover="{{" scale: 1.1 }}"
                  whileTap="{{" scale: 0.95 }}>
                  aria-label="{item.label}&apos;&apos,">&apos;&apos,&apos;&apos,"
                  <item .icon className="&apos;w-5" h-5&apos;  />&apos
                </motion.button>
                <motion.span,"
initial="{{" opacity: 0, x: -10 }}&apos;&apos;"
                  animate="{{" opacity: 1, x: 0 }}&apos;&apos,";"
                  className="&apos;bg-white" text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap &apos;>{item.label}&apos;&apos;"
                exit = "{{" opacity: 0, x: 20 }}""",
                transition="{{" delay: index * 0.1 }}"""";"
                className = "flex items-center space-x-3 ">"
                  className="{"${item.color}" text-white p-3 rounded-full shadow-lg hover: shadow-xl transition-all duration-300 transform hover:scale-110"}

                  aria-label={item.label}"">"";"
                  <item .icon className="w-5 h-5"  />
                </motion.button>
                <motion.span;"
                  initial="{{" opacity: 0, x: -10 }}"";"
                  animate="{{" opacity: 1, x: 0 }}"";"
                  className = "bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap ">{item.label}

                </motion.span>
              </motion.div>
                  aria-label = {item.label}""">"""""
                  <item .icon className="w-5 h-5"  />"
                  initial = "{{" opacity: 0, x: -10 }}""",
                  animate="{{" opacity: 1, x: 0 }}"""
                </motion.span>
              </motion.div>
            ))}

      </AnimatePresence>
      <motion.button""
        onClick={toggleMenu}"";"
        className = "bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-lg hover: shadow-xl transition-all duration-300 transform hover:scale-110",">
        whileTap="{{" scale: 0.95 }}";"
        aria - label = "{isOpen" ? "Close quick actions" : "Open quick actions"}"">"",
        <AnimatePresence mode="wait"> {isOpen ? ("",
            <motion.div""
              key="close"";"
              initial = "{{" rotate: -90, opacity: 0 }}"
              animate="{{" rotate: 0, opacity: 1 }}"
              exit="{{" rotate: 90, opacity: 0 }}">
              transition="{{" duration: 0.2 }}"">"";"
              <XMarkIcon className = "w - 6 h-6"   />,
          ) : ("",
              key="open"";"
              initial = "{{" rotate: 90, opacity: 0 }}"
              exit="{{" rotate: -90, opacity: 0 }}"
              <PlusIcon className="w-6 h-6"   />
      </AnimatePresence>
      <motion.button&apos;&apos>
        onClick={toggleMenu}&apos;&apos,";"
        className="&apos;bg-gradient-to-r" from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-lg hover: shadow-xl transition-all duration-300 transform hover:scale-110&apos,&apos,"
        whileHover = "{{" scal,e: 1.1 }}">
        aria-label="{isOpen" ? &apos;Close quick actions&apos; : &apos;Open quick actions&apos}"&apos;&apos;>&apos;&apos,&apos;&apos,"
        <AnimatePresence mode="&apos;wait&apos;">"
          {isOpen ? (&apos;&apos,&apos}&apos,
            <motion.div&apos;&apos,";"
              key="&apos;close&apos;&apos;""
              transition="{{" duration: 0.2 }}&apos;&apos,>&apos;&apos,&apos;&apos,"
              <XMarkIcon className="&apos;w-6" h-6&apos;        />&apos) : (&apos;&apos,&apos;&apos;"
              key="&apos;open&apos;&apos;""
              <PlusIcon className="&apos;w-6" h-6&apos;        />&apos,
      <motion.button""";""
        onClick={toggleMenu}"""";"
        className = "bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-lg hover: shadow-xl transition-all duration-300 transform hover:scale-110"",">
        whileTap = "{{" scale: 0.95 }}",
        aria-label = "{isOpen" ? "Close quick actions" : "Open quick actions"}""">""""""
        <AnimatePresence mode="wait">"
          {isOpen ? (""""
            <motion.div""""
              key="close""";"
              transition = "{{" duration: 0.2 }}""">"""""
              <XMarkIcon className="w-6 h-6"   />"
          ) : (""""
              key="open""";"
              <PlusIcon className = "w-6 h-6"   />
    </div>)}
=======

const FloatingActionButton: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">FloatingActionButton</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

export default FloatingActionButton;
