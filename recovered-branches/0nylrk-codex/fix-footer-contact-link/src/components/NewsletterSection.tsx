
<<<<<<< HEAD
<<<<<<< HEAD
import { GradientHeading } from "@/components/GradientHeading",
import { EnhancedNewsletterForm } from "@/components/EnhancedNewsletterForm",
=======
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { EnhancedNewsletterForm } from &quot;@/components/EnhancedNewsletterForm&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function NewsletterSection() {
  return (
    <section className=&quot;py-20 bg-zion-blue-dark&quot; id=&quot;newsletter&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <GradientHeading>Stay Informed</GradientHeading>
          <p className=&quot;mt-4 text-zion-slate-light text-xl mb-8&quot;>
            Subscribe to our newsletter for the latest updates on Zion's services, Google trending tech news, and marketplace opportunities.
          </p>
          <div className=&quot;max-w-md mx-auto&quot;>
            <EnhancedNewsletterForm />
          </div>
        </div>
      </div>
    </section>
  )
=======
import { GradientHeading } from "@/components/GradientHeading",;
import { EnhancedNewsletterForm } from "@/components/EnhancedNewsletterForm";
export function NewsletterSection() {;
  return (;
    <section className="py-20 bg-zion-blue-dark" id="newsletter">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <GradientHeading>Stay Informed</GradientHeading>;
          <p className="mt-4 text-zion-slate-light text-xl mb-8">;
            Subscribe to our newsletter for the latest updates on Zion's services, Google trending tech news, and marketplace opportunities.;
          </p>;
          <div className="max-w-md mx-auto">;
            <EnhancedNewsletterForm />;
          </div>;
        </div>;
      </div>;
    </section>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;