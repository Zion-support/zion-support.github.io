
<<<<<<< HEAD
<<<<<<< HEAD
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { CategoriesSection } from "@/components/CategoriesSection",
import { GradientHeading } from "@/components/GradientHeading",
=======
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { CategoriesSection } from &quot;@/components/CategoriesSection&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function Categories() {
  return (
=======

export default function Categories() {_return (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <>
      <Header />
      <div className=&quot;min-h-screen bg-zion-blue&quot;>
        <div className=&quot;container mx-auto px-4 py-12&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <GradientHeading level=&quot;h1&quot; className=&quot;text-4xl md:text-5xl font-bold mb-4&quot;>
              Browse Categories
            </GradientHeading>
            <p className=&quot;text-zion-slate-light text-lg max-w-3xl mx-auto&quot;>
              Explore our extensive range of AI services and products organized by category. 
              Find exactly what you're looking for to enhance your business or personal projects.
            </p>
          </div>
          
          {/* Reuse the Categories Section component */}
          <CategoriesSection showTitle={_false} />
        </div>
      </div>
      <Footer />
    </>
  )
}
