
      color: 'bg-purple-500 hover:bg-purple-600'}
  ]
  return ()
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}" >"
      <AnimatePresence>
        {isOpen && (
          <motion .div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}, {actionItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}""
                exit={{ opacity: 0, x: 20 }}''''
                transition={{ delay: index * 0.1 }}''''
                className='flex items-center space-x-3 '>`
                <motion .button`
                  onClick={item.action}``
                  className={`${item.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}""
                  aria-label={item.label}'''" >'''''"
                  <item .icon className='w-5 h-5' /" >"
                </motion.button>
                <motion.span""
                  initial={{ opacity: 0, x: -10 }}''''
                  animate={{ opacity: 1, x: 0 }}''''
                  className='bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap '>
                  {item.label}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>""
      <motion .button''''
        onClick={toggleMenu}''''

            <motion .div''''
              key='close'''
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}""
              transition={{ duration: 0.2 }}'''" >'''''"
              <XMarkIcon className='w-6 h-6' /" >"
            </motion.div>""
          ) : (''''
            <motion .div''''
              key='open'''
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}""
              transition={{ duration: 0.2 }}'''" >'''''"
              <PlusIcon className='w-6 h-6' /" >"
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>)}
export default FloatingActionButton

export { FloatingActionButton }

export { FloatingActionButton }

export { FloatingActionButton }

export { FloatingActionButton }

export { FloatingActionButton };"`"

