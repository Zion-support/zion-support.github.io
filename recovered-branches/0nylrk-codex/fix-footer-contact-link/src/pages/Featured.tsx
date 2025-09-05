
<<<<<<< HEAD
<<<<<<< HEAD
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",
import { GradientHeading } from "@/components/GradientHeading",
=======
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { FeaturedListingsSection } from &quot;@/components/FeaturedListingsSection&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function Featured() {
  return (
    <>
      <Header />
      <div className=&quot;min-h-screen bg-zion-blue&quot;>
        <div className=&quot;container mx-auto px-4 py-12&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <GradientHeading level=&quot;h1&quot; className=&quot;text-4xl md:text-5xl font-bold mb-4&quot;>
              Featured Listings
            </GradientHeading>
            <p className=&quot;text-zion-slate-light text-lg max-w-3xl mx-auto&quot;>
              Discover our handpicked selection of premium AI products and services. 
              These featured listings represent the best that the Zion Marketplace has to offer.
            </p>
          </div>
          
=======
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",;
import { GradientHeading } from "@/components/GradientHeading";
export default function Featured() {;
  return (;
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto px-4 py-12">;
          <div className="text-center mb-12">;
            <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">;
              Featured Listings;
            </GradientHeading>;
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">;
              Discover our handpicked selection of premium AI products and services.;
              These featured listings represent the best that the Zion Marketplace has to offer.;
            </p>;
          </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          {/* Reuse the FeaturedListings component */}
          <FeaturedListingsSection showTitle={false} />;
        </div>;
      </div>;
      <Footer />;
    </>;
  );
}
;