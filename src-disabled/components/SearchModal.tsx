import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
interface SearchModalProps {
  isOpen: boolean;,
  onClose: () => void;
}

  ];
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);,
  useEffect(() => {

  useEffect(() => {
    const handleEscape = (e:,  KeyboardEvent) => {,
      if (e.key === 'Escape') {'
        onClose();
      }
    };

    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (

              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">"
                <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />"
                <p>No results found for "{query}"</p>"
                <p className="text-sm mt-2">Try searching for AI, IT, Cloud, or Security</p>"
              </div>
            )
          ) : (
            <div className="p-8 text-center text-gray-500">"
              <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />"
              <p>Start typing to search our services and pages</p>
            </div>
          )}
        </div>
        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">"
          <div className="flex items-center justify-between text-sm text-gray-500">"
            <span>Press Enter to search</span>
            <span>ESC to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;