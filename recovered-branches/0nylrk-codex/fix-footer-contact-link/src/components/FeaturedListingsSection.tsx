
=======
import {ProductListingCard} from "@/components/ProductListingCard";
import {GradientHeading} from "@/components/GradientHeading";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import { ProductListingCard } from "@/components/ProductListingCard",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",

import { ProductListingCard } from "@/components/ProductListingCard",
import { GradientHeading } from "@/components/GradientHeading",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface FeaturedListingsSectionProps {
  show_title?: boolean;
}
export /**
 * FeaturedListingsSection - Function description
 */
function FeaturedListingsSection() {
  const featured_listings = [;
    {

      images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2023-11-15T14:48:00.000Z",
      rating: 4.8,
      reviewCount: 124,

    },
    {
      id: "image-generation-service",
      title: "AI Image Generation Service",
      description: "Create stunning visuals with our advanced AI image generator",
      price: 2499,
      currency: "$",
      category: "Content Creation",
      tags: ["AI", "Images", "Generation"],
      images: ["https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=800&h=500"],
      createdAt: "2023-10-20T11:15:00.000Z",
      rating: 4.7,
      reviewCount: 89,


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    {
      id: "fullstack-ai-dev"
      title: "Full-Stack AI Development"
      description: "End-to-end development for AI-powered applications"
      price: null, // Custom pricing

      author: {
        name: "DataMinds Consulting"
        id: "dataminds-consulting"
      }

      author: {
        name: "SocialAI"
        id: "social-ai"
      }
    }],

  return (
    <section id="featured" className="py-12 px-4 bg-zion-blue-dark">
      <div className="container mx-auto">
        {showTitle && (
          <div className="text-center mb-12">
            <GradientHeading className="text-3xl md:text-4xl font-bold mb-4">
              Featured Listings
            </GradientHeading>
            <p className="text-zion-slate-light max-w-3xl mx-auto">
              Discover our handpicked selection of top AI products and services
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredListings.map((listing) => (
            <ProductListingCard
              key={listing.id}
              listing={listing}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      }
    }];
;
  return (


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {featuredListings && featuredListings.map((listing) => (;

            <ProductListingCard
              key={listing && listing.id}
=======
    <section id="featured" className="py - 12 px - 4 bg - zion - blue - dark">;
      <div className="container mx - auto">;
        {show_title && (
          <div className="text - center mb - 12">;
            <GradientHeading className="text - 3xl md:text - 4xl font - bold mb - 4">;
              Featured Listings;
            </GradientHeading>;
            <p className="text - zion - slate - light max - w-3xl mx - auto">;
              Discover our handpicked selection of top AI products and services;
            </p>;
          </div>)}
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6">;
          {featured_listings.map ((listing) => (
            <ProductListingCard;
              key={listing.id}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              listing={listing}
              view="grid";
=======
            <ProductListingCard
              key={listing.id}
              listing={listing}
              view="grid"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              onRequestQuote={() => {}}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-8 py-6"
            asChild
          >
            <Link to="/marketplace">View All Listings</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              view="grid"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              onRequestQuote={() => {}}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
        </div>;

        <div className="mt-10 text-center">;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-8 py-6"
            asChild
          >
            <Link to="/marketplace">View All Listings</Link>
          </Button>
        </div>
      </div>
    </section>
  )

}
;
            <Link to="/marketplace">View All Listings</Link>;
          </Button>;
        </div>;
      </div>;
    </section>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
