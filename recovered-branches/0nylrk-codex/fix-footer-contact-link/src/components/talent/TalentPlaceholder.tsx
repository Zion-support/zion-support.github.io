
import { Card } from &quot;@/components/ui/card&quot;;
import { Skeleton } from &quot;@/components/ui/skeleton&quot;;
import { Button } from &quot;@/components/ui/button&quot;;

export function TalentPlaceholder() {
  return (
    <div className=&quot;p-8 text-center&quot;>
      <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Talent Directory Coming Soon</h3>
      <p className=&quot;text-zion-slate-light mb-6 max-w-md mx-auto&quot;>
        Our talent directory is being populated with AI and tech experts. Check back soon to connect with top professionals.
      </p>
      <Button className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;>
        Join as Talent
      </Button>
    </div>
  );
}
