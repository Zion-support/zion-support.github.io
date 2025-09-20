import { useCallback    } from "react";
import React, { useState } from "react"
import { motion, AnimatePresence     } from "framer-motion";
import { Plus, MessageCircle, Phone, Mail, ArrowUp, X     } from "lucide-react";
interface FloatingActionButtonProps {
  className?: string;
}
}
}
}
}

export,
  const: FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ className = '' }) () => {
  const [isOpen, setIsOpen] = useState(false)
  const actions = [
  {
  ic,
  o: n: MessageCircle,lab,
  e: l: 'Live Chat',hr,
  e: f: '/chat',col,
  o: r: 'from-blue-500 to-cyan-500',del,
  a: y: 0.1;
},
  {
  ic,
  o: n: Phone,lab,
  e: l: 'Call Us',hr,
  e: f: 'te,
  l:+1-800-ZION-TECH',col,
  o: r: 'from-green-500 to-emerald-500',del,
  a: y: 0.2;
},
  {
  ic,
  o: n: Mail,lab,
  e: l: 'Email',hr,
  e: f: 'mailt,
  o:info@ziontechgroup.com',col,
  o: r: 'from-purple-500 to-pink-500',del,
  a: y: 0.3;
},
  ]
  const scrollToTop = () () => {
    window.scrollTo({ t,
  o: p: 0, behavi,
  o: r: 'smooth' })
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Scroll to top button */},
  }
      <motion.button;
        initial={ opaci,
  t: y: 0, sca,
  l: e: 0 },
  }
        animate={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
        transition={ del,
  a: y: 0.5, durati,
  o: n: 0.3 },
  }
        onClick={onClick={scrollToTop},
  },
  }
        className="className="mb-4 w-14 h-14 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg,
  hove: r: shadow-xl,
  hove: r:shadow-zion-cyan/25 transition-all duration-300 transform hove,
  r:-translate-y-1 flex items-center justify-center";"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>

      {/* Main floating action button */},
  }
      <motion.button;
        initial={ opaci,
  t: y: 0, sca,
  l: e: 0 },
  }
        animate={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
        transition={ del,
  a: y: 0.6, durati,
  o: n: 0.3 },
  }
        onClick={onClick={() => setIsOpen(!isOpen)},
  },
  }
        className="className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg,
  hove: r: shadow-xl,
  hove: r:shadow-zion-cyan/25 transition-all duration-300,
  transform: hover:scale-110 flex items-center justify-center";"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
  <motion.div;
              key="close"
              initial={ rotat,
  e: -90, opaci,
  t: y: 0 },
  }
              animate={ rota,
  t: e: 0, opaci,
  t: y: 1 },
  }
              exit={ rota,
  t: e: 90, opaci,
  t: y: 0 },
  }
              transition={ durati,
  o: n: 0.2 },
  }
            >
              <X className="w-8 h-8 text-white" />
            </motion.div>
          ) : (
  <motion.div;
              key="plus"
              initial={ rota,
  t: e: 90, opaci,
  t: y: 0 },
  }
              animate={ rota,
  t: e: 0, opaci,
  t: y: 1 },
  }
              exit={ rota,
  t: e: -90, opaci,
  t: y: 0 },
  }
              transition={ durati,
  o: n: 0.2 },
  }
            >
              <Plus className="w-8 h-8 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Action buttons */},
  }
      <AnimatePresence>
        {isOpen && (
  <div className="absolute bottom-20 right-0 space-y-3">
            {actions.map((action, index) => (
  <motion.a;
                key={action.label},
  }
                href={action.href},
  }
                initial={ opaci,
  t: y: 0, x: 20, sca,
  l: e: 0.8 },
  }
                animate={ opaci,
  t: y: 1, x: 0, sca,
  l: e: 1 },
  }
                exit={ opaci,
  t: y: 0, x: 20, sca,
  l: e: 0.8 },
  }
                transition={
  durati,
  o: n: 0.3,del,
  a: y: action.delay,ty,
  p: e: "spring",stiffne,
  s: s: 200;
},
  }
                className="className="flex items-center space-x-3 w-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-3,
  hove: r:bg-white/20 transition-all duration-300 group";"
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-medium whitespace-nowrap group-hov,
  e: r:text-zion-cyan transition-colors duration-300">
                  {action.label},
  }
                </span>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}