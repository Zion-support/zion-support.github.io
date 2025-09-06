import React, { useState, useEffect, useRef } from 'react';

import { useRouter  } from 'next/router';
import { Search, X } from 'lucide-react'
import { Input  } from '@/components/ui/input';
import { AutocompleteSuggestions  } from '@/components/search/AutocompleteSuggestions';
import { fireEvent  } from '@/lib/analytics';
import { SearchSuggestion  } from '@/types/search';
import { slugify  } from '@/lib/slugify';
import { useDebounce  } from '@/hooks/useDebounce';

import { useOnClickOutside } from '@/hooks/useOnClickOutside';
/**
 * SearchBar component props
 */
interface SearchBarProps {
  /**
   * The current value of the search input
   */

  value: string;

  /**
   * Function to call when the search input changes
   * @param {string} val - The new value of the search input
   */

  onChange: (val: string) => void;

  /**
   * Function to call when a suggestion is selected
   * @param {SearchSuggestion} suggestion - The selected suggestion
   */
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;


  /**
   * The placeholder text for the search input
   */
  placeholder?: string
}
/**
 * SearchBar component that allows users to search for content.
 */

export function SearchBar({ value, onChange, onSelectSuggestion, placeholder;
              default: break

            }
          }}
        />
        {value && (
          <button
            className='absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white'
            onClick={() => onChange('')}
            aria-label='Clear search'          >
            <X className='h-4 w-4' />          </button>
            <X className="h-4 w-4" />
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <AutocompleteSuggestions
        suggestions = {suggestions,}
        searchTerm = {value,}
        onSelectSuggestion = {handleSelect,}
        visible = {focused,}
        highlightedIndex = {highlightedIndex,}
        listId = {listId,}
      />
    </div>
  );

}/> onClick={';
  () => onChange ('') ";
}aria-label="Clear search" > <X className="h-4 w-4" /> </button>) ;
}</div> <AutocompleteSuggestions suggestions= {;
  suggestions ;
}searchTerm= {;
  value ;
}onSelectSuggestion= {;
  handleSelect ;
}visible= {;
  focused ;
}highlightedIndex= {;
  highlightedIndex ;
}listId= {;
  listId ;
}/> </div>) ;
}'"  )
}
;