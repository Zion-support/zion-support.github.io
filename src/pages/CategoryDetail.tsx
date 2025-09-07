
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from 'lucide-react'
import { MARKETPLACE_LISTINGS } from "@/data/listingData",;
import { ProductListing } from "@/types/listings";
import { useRouter  } from 'next/router';
import Link from 'next/link',;
import { toast } from "@/hooks/use-toast";
import { NextSeo  } from '@/components/NextSeo';
import { Header } from "@/components/Header",;
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton';
import {logErrorToProduction} from '@/utils/productionLogger';
const AUTO_SERVICE_TITLES = null;

  return (
    <>
      <NextSeo title={seoTitle} description={seoDescription} />
      <Header />
        <div className="min-h-screen bg-zion-blue">
          <div className="container mx-auto px-4 py-12">
          <div className="mb-4">
            <Link href="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center">
               Back to Categories
            </Link>
          </div>


          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="text-zion-cyan p-4 bg-zion-blue-dark rounded-full">
                {category.icon}
              </div>;
            </div>;
            <GradientHeading className="text - 4xl md:text - 5xl font - bold mb - 4">;
              {category.title}
            </GradientHeading>;
            <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">;
              {category.description}
                {category.icon}
              </div>;
            </div>;
            <GradientHeading className="text - 4xl md:text - 5xl font - bold mb - 4">;
              {category.title}
            </GradientHeading>;
            <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">;
              {category.description}
                <ProductListingCard
                  key = {listing && listing.id,}
                  listing = {listing,}
                  onRequestQuote = {handleRequestQuote,}
                  detailBasePath="/marketplace/listing"
                />;



              ))}
            </div>;
          )}



          </div>;
        </div>;
      </Suspense>;
    </>;
  );
}
              ))}
            </div>
          )}
          </div>
        </div>
      </Suspense>
    </>
  );

};
return (<> <NextSeo title= {;
  seoTitle ;
}description= {;
  seoDescription ;
}/> <Header /> ← Back to Categories </Link> </div> </p> </div> {;
  isLoading ? (<ListingGridSkeleton /> />) ) ;
}</div>) ;
}</div> </div> </Suspense> </>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
