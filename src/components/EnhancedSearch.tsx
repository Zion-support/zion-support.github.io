<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const EnhancedSearch: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedSearch</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
=======
    <div className="relative max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            placeholder="Search revolutionary technologies..."
            className="w-full px-6 py-4 pr-12 text-lg border-2 border-gray-300 rounded-full focus:border-purple-500 focus:outline-none transition-all duration-300 shadow-lg"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <span className="text-2xl">🔍</span>
          </div>
        </div>

                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                    >
                      <span className="text-2xl mr-3">{suggestion.icon}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{suggestion.title}</div>
                        <div className="text-sm text-gray-500">{suggestion.category}</div>
                      </div>
                      <span className="text-gray-400">→</span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500">
                  No results found for "{searchTerm}"
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
    </div>
  );
};

export default EnhancedSearch;