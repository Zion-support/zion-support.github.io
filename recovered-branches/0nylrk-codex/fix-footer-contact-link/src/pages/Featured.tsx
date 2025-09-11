


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======          
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",;
import { GradientHeading } from "@/components/GradientHeading";

=======


          {/* Reuse the FeaturedListings component */}
          <FeaturedListingsSection showTitle={false} />
        </div>
      </div>
      <Footer />
    </>
  )
}
;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
