<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
interface CountryTabsProps {
popularCountries: string[];,
filteredCountries: CountryPricing[];,
handleCountrySelect: (country: CountryPricing) => void;
onQuote?: (country: CountryPricing) => void;,
searchQuery: string;,
setSearchQuery: (query: string) => void,
export function CountryTabs({
}}
/>
</PaginationItem>
</PaginationContent>
</Pagination>
</div>
)}
</TabsContent>
</Tabs>
)
)
=======
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
interface CountryTabsProps {
  popularCountries: string[];
filteredCountries: CountryPricing[];
  handleCountrySelect: (country: CountryPricing) => void;
  onQuote?: (country: CountryPricing) => void;
searchQuery: string;
  setSearchQuery: (query: string) => void,
}
export function CountryTabs({}
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </TabsContent>
    </Tabs>
  )
  )
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}
)
}