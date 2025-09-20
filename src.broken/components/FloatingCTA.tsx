  const [isExpanded, setIsExpanded] = useState(false);

  return ()
    <>
      {/* Floating Action Button */}
      <motion.div"
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition = {

  { duration: 0.3,
  delay: 2

}}
      >"
        <div className="relative">
          {/* Main Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}"
            className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white text-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="/signup">Register Now</Link>
          </Button>
          <button 
            onClick={handleClose}
            className="text-zion-slate hover:text-white p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Backdrop */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div"
            className="fixed inset-0 bg-black/20 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={ () => setIsExpanded(false) }
          />) }
      </AnimatePresence>;
    </>
  )};

            onClick={ () => setIsExpanded(false) };
          />;) };
      </AnimatePresence>;
    </>
  )}
'"