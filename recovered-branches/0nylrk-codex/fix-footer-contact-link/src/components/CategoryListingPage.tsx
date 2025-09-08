

import React from 'react';import {useState} from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {GradientHeading} from "@/components/GradientHeading";
import {ListingScoreCard} from "@/components/ListingScoreCard";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectTrigger, SelectContent, SelectItem} from "@/components/ui/select";
import {Search, Filter, ArrowDownAZ, ArrowUpZA} from "lucide-react";import { useState } from "react",



  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12 px-4">"
        <div className="container mx-auto">"
          <div className="text-center mb-12">"
            <GradientHeading>{title}</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">"
;
export function CategoryListingPage() {;
  }
  const [searchQuery, setSearchQuery] = useState(""),;"
  const [selectedSort, setSelectedSort] = useState(sortOptions[0].value),;
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0].value),;
  // Process listings based on filters and search;
  const processedListings = initialListings;
    .filter((listing) => {;
      // Apply search filter;
      }
      const matchesSearch =;
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        (listing.tags && listing.tags.some(tag =>;
          tag.toLowerCase().includes(searchQuery.toLowerCase());
        )),;
      // Apply category filters;
            </div>          )}
        </div>;
      </div>;
      <Footer />;
    </>;
  );
                  review_count={listing.review_count}
                />))}
            </div>) : (
            <div className="text - center py-20">;
              <h3 className="text - xl font - bold text - white mb-2">No listings found</h3>;
              <p className="text - zion - slate - light mb-6">Try adjusting your filters or search query</p>;
              <Button;
                variant="outline";
                on_click={() => {
                  setSearchQuery ("");
                  setSelectedFilter (filter_options[0].value);
                }}
                className="border - zion - purple text - zion - purple hover:bg - zion-purple / 10";
              >;
                Clear all filters;

            </div>) : ("
            <div className="text - center py - 20">;"
</div>"
              <h3 className="text - xl font - bold text - white mb - 2">No listings found</h3>;""
              <p className="text - zion - slate - light mb - 6">Try adjusting your filters or search query</p>;"
              <Button;"
                variant="outline";")
                on_click={() => {
</Button>

              </Button>;
            </div>)}
        </div>;
      </div>;
      <Footer />;
    </>);
}
