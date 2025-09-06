
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {FeaturedListingsSection} from "@/components/FeaturedListingsSection";
import {GradientHeading} from "@/components/GradientHeading";
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { GradientHeading } from "@/components/GradientHeading";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",
import { GradientHeading } from "@/components/GradientHeading",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
              Discover our handpicked selection of premium AI products and services.
              These featured listings represent the best that the Zion Marketplace has to offer.
            </p>
          </div>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
      <div className="min - h-screen bg - zion - blue">;
        <div className="container mx - auto px - 4 py - 12">;
          <div className="text - center mb - 12">;
            <GradientHeading level="h1" className="text - 4xl md:text - 5xl font - bold mb - 4">;
              Featured Listings;
            </GradientHeading>;
            <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">;
              Discover our handpicked selection of premium AI products and services.;
              These featured listings represent the best that the Zion Marketplace has to offer.;
            </p>;
          </div>;
=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          {/* Reuse the FeaturedListings component */}
          <FeaturedListingsSection showTitle={false} />
        </div>
      </div>
      <Footer />
    </>
  )
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
