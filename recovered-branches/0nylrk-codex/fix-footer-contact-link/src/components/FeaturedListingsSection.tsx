
import { ProductListingCard } from '@/components / ProductListingCard';
import { GradientHeading } from '@/components / GradientHeading';
import { Button } from '@/components / ui / button';
import { Link } from './react-router-dom';
interface FeaturedListingsSectionProps {

>>>>>>> origin/cursor/delete-old-data-records-6bba
interface FeaturedListingsSectionProps {

  show_title?: boolean;
}
export /**
 * FeaturedListingsSection - Function description
 */
function FeaturedListingsSection() {
  const featured_listings = [;
    {

      title: "Advanced NLP Model for Text Analysis",
      description: "State-of-the-art natural language processing with 98% accuracy",
      price: 4999,
      currency: "$",
      author: {
        name: "VisualAI"
        id: "visual-ai"
      }

    },
      author: {
        name: "DataMinds Consulting"
        id: "dataminds-consulting"
      }      tags: ["API", "Sentiment", "Analytics"];
      images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"]
      createdAt: "2024-01-05T11:15:00.000Z"
      rating: 4.6
      reviewCount: 72    <section id="featured" className="py - 12 px - 4 bg - zion - blue-dark">;
      <div className="container mx-auto">;
        {show_title && (
          <div className="text - center mb-12">;
            <GradientHeading className="text - 3xl md:text - 4xl font - bold mb-4">;
              Featured Listings;
            </GradientHeading>;
            <p className="text - zion - slate - light max - w-3xl mx-auto">;
              Discover our handpicked selection of top AI products and services;
            </p>;
          </div>)}
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap-6">;
          {featured_listings.map ((listing) => (
            <ProductListingCard;
              key={listing.id}
              listing={listing}
              key={listing.id}
              listing={listing}

              view="grid"
              onRequestQuote={() => {}}              listing={listing}
              view="grid"
              onRequestQuote={() => {}}
            />
          ))}
        </div>"
        <div className="mt-10 text-center">
          <Button"
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white px-8 py-6"
            asChild;
          >"
            <Link to="/marketplace">View All Listings</Link>
          </Button>
        </div>
      </div>
    </section>
  )

