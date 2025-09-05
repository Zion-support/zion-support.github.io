
import { Link } from &quot;react-router-dom&quot;;
import { Button } from &quot;@/components/ui/button&quot;;

export function EnterpriseCallToAction() {
  return (
    <div className=&quot;mt-12 text-center&quot;>
      <Link to=&quot;/request-quote&quot;>
        <Button className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 px-8&quot;>
          Get Custom Enterprise Quote
        </Button>
      </Link>
      <p className=&quot;mt-4 text-zion-slate-light&quot;>
        Need volume pricing or custom SLAs? Contact our enterprise sales team.
      </p>
    </div>
  );
}
