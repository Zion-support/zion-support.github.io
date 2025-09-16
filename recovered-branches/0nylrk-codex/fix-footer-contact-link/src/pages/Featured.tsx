

export default function Featured() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
              Featured Listings
            </GradientHeading>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
<<<<<<< HEAD
=======
              Discover our handpicked selection of premium AI products and
              services. These featured listings represent the best that the Zion
              Marketplace has to offer.
            </p>
          </div>
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { FeaturedListingsSection } from '@/components / FeaturedListingsSection';
import { GradientHeading } from '@/components / GradientHeading';
export default /**
 * Featured - Function description
 */
function Featured() {
  return (
    <>;
      <Header />;
      <div className="min - h-screen bg - zion-blue">;
        <div className="container mx - auto px - 4 py-12">;
          <div className="text - center mb-12">;
            <GradientHeading level="h1" className="text - 4xl md:text - 5xl font - bold mb-4">;
              Featured Listings;
            </GradientHeading>;
            <p className="text - zion - slate - light text - lg max - w-3xl mx-auto">;
              Discover our handpicked selection of premium AI products and services.;
              These featured listings represent the best that the Zion Marketplace has to offer.;
            </p>;
          </div>;

>>>>>>> origin/merge-pr-12271
          {/* Reuse the FeaturedListings component */}
          <FeaturedListingsSection showTitle={false} />
        </div>
      </div>
      <Footer />
    </>
<<<<<<< HEAD
=======
  );
}
;

          {/* Reuse the FeaturedListings component */}
          <FeaturedListingsSection show_title={false} />;
        </div>;
      </div>;
      <Footer />;
    </>);
}
>>>>>>> origin/merge-pr-12271
