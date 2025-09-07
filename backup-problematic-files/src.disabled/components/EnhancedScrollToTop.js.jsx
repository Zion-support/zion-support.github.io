<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import _React from';react' const EnhancedScrollToTop = () => { const [isVisible,setIsVisible] = useState(false) useEffect(() => { const toggleVisibility = () => { if (window.pageYOffset > 300) { setIsVisible(true) } else { setIsVisible(false) } } window.addEventListener('scroll',toggleVisibility) return () => window.removeEventListener('scroll',toggleVisibility) },[]) const scrollToTop = () => { window.scrollTo({ "top": '0',"behavior": 'smooth,'})} return() <AnimatePresence> {"isVisible": && ( <motion.button initial={{ opacity: 0,"scale": '0.',8,"y": '20'}} animate={{ "opacity": '1',"scale": '1',"y": '0'}} exit={{ "opacity": '0',"scale": '0.',8,"y": '20'}} onClick={scrollToTop} className='"fixed": bottom-24 right-6 z-40 p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover: shadow-xl: transition-all duration-300 transform hover:scale-110: focus:outline-none: focus:ring-2: focus:ring-blue-500: focus:ring-offset-2: focus:ring-offset-slate-900' whileHover={{ scale: 1.1}} whileTap={{ "scale": '0.95'}}' aria-label='"Scroll": to top' >' <ChevronUpIcon className='w-6 h-6' /> </motion.button> )} </AnimatePresence> ) } export default EnhancedScrollToTop'';'';
=======
import React from\';react\' const EnhancedScrollToTop = () => { const [isVisible,setIsVisible] = useState(false) useEffect(() => { const toggleVisibility = () => { if (window.pageYOffset > 300) { setIsVisible(true) } else { setIsVisible(false) } } window.addEventListener(\'scroll\',toggleVisibility) return () => window.removeEventListener(\'scroll\',toggleVisibility) },[]) const scrollToTop = () => { window.scrollTo({ \"top\": \'0\',\"behavior\": \'smooth,\'})} return() <AnimatePresence> {\"isVisible\": && ( <motion.button initial={{ opacity: 0,\"scale\": \'0.\',8,\"y\": \'20\'}} animate={{ \"opacity\": \'1\',\"scale\": \'1\',\"y\": \'0\'}} exit={{ \"opacity\": \'0\',\"scale\": \'0.\',8,\"y\": \'20\'}} onClick={scrollToTop} className=\'"fixed\": bottom-24 right-6 z-40 p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover: shadow-xl: transition-all duration-300 transform hover:scale-110: focus:outline-none: focus:ring-2: focus:ring-blue-500: focus:ring-offset-2: focus:ring-offset-slate-900\' whileHover={{ scale: 1.1}} whileTap={{ \"scale\": \'0.95\'}}\' aria-label=\'"Scroll\": to top\' >\' <ChevronUpIcon className=\'w-6 h-6\' /> </motion.button> )} </AnimatePresence> ) } export default EnhancedScrollToTop\'';\'';
const React from";react" const EnhancedScrollToTop = () => { const [isVisible,setIsVisible] = useState(false) useEffect(() => { const toggleVisibility = () => { if (window.pageYOffset > 300) { setIsVisible(true) } else { setIsVisible(false) } } window.addEventListener("scroll",toggleVisibility) return () => window.removeEventListener("scroll",toggleVisibility) },[]) const scrollToTop = () => { window.scrollTo({ top: "0",behavior: "smooth,"})} return() <AnimatePresence> {isVisible: && ( <motion.button initial={{ opacity: 0,scale: "0.",8,y: "20"}} animate={{ opacity: "1",scale: "1",y: "0"}} exit={{ opacity: "0",scale: "0.",8,y: "20"}} onClick={scrollToTop} className="fixed: bottom-24 right-6 z-40 p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover: shadow-xl: transition-all duration-300 transform hover:scale-110: focus:outline-none: focus:ring-2: focus:ring-blue-500: focus:ring-offset-2: focus:ring-offset-slate-900" whileHover={{ scale: 1.1}} whileTap={{ scale: "0.95"}}" aria-label="Scroll: to top" >" <ChevronUpIcon className="w-6 h-6" /> </motion.button> )} </AnimatePresence> ) } export default EnhancedScrollToTop"";"";'"'"
import _React from';react' const EnhancedScrollToTop = () => { const [isVisible,setIsVisible] = useState(false) useEffect(() => { const toggleVisibility = () => { if (window.pageYOffset > 300) { setIsVisible(true) } else { setIsVisible(false) } } window.addEventListener('scroll',toggleVisibility) return () => window.removeEventListener('scroll',toggleVisibility) },[]) const scrollToTop = () => { window.scrollTo({ "top": '0',"behavior": 'smooth,'})} return() <AnimatePresence> {"isVisible": && ( <motion.button initial={{ opacity: 0,"scale": '0.',8,"y": '20'}} animate={{ "opacity": '1',"scale": '1',"y": '0'}} exit={{ "opacity": '0',"scale": '0.',8,"y": '20'}} onClick={scrollToTop} className='"fixed": bottom-24 right-6 z-40 p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover: shadow-xl: transition-all duration-300 transform hover:scale-110: focus:outline-none: focus:ring-2: focus:ring-blue-500: focus:ring-offset-2: focus:ring-offset-slate-900' whileHover={{ scale: 1.1}} whileTap={{ "scale": '0.95'}}' aria-label='"Scroll": to top' >' <ChevronUpIcon className='w-6 h-6' /> </motion.button> )} </AnimatePresence> ) } export default EnhancedScrollToTop'';'';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

=======
import React from 'react';'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const EnhancedScrollToTop.js = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>EnhancedScrollToTop.js</h1>
      <p>This component is under development.</p>
    </div>
  )
};

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </div>)'
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
