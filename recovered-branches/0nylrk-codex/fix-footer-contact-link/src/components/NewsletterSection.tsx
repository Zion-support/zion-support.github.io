
import { GradientHeading } from "@/components/GradientHeading";
import { EnhancedNewsletterForm } from "@/components/EnhancedNewsletterForm";

export function NewsletterSection() {
  return (
    <section className="py-20 bg-zion-blue-dark" id="newsletter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GradientHeading>Stay Informed</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl mb-8">
          </p>
          <div className="max-w-md mx-auto">
            <EnhancedNewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
