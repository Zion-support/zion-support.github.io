

import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default function Categories() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
              Browse Categories
            </GradientHeading>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Explore our extensive range of AI services and products organized by category.
              Find exactly what you're looking for to enhance your business or personal projects.
            </p>
          </div>

=======
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {CategoriesSection} from "@/components/CategoriesSection";
import {GradientHeading} from "@/components/GradientHeading";
=======
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { CategoriesSection } from '@/components / CategoriesSection';
import { GradientHeading } from '@/components / GradientHeading';
export default /**
 * Categories - Function description
 */
function Categories() {
  return (
    <>;
      <Header />;
      <div className="min - h-screen bg - zion - blue">;
        <div className="container mx - auto px - 4 py - 12">;
          <div className="text - center mb - 12">;
            <GradientHeading level="h1" className="text - 4xl md:text - 5xl font - bold mb - 4">;
              Browse Categories;
            </GradientHeading>;
            <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">;
              Explore our extensive range of AI services and products organized by category.;
              Find exactly what you're looking for to enhance your business or personal projects.;
            </p>;
          </div>;



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          {/* Reuse the Categories Section component */}
          <CategoriesSection showTitle={false} />
        </div>
      </div>
      <Footer />
    </>
  )
<<<<<<< HEAD
=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
