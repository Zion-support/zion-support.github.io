
import { Button } from &quot;@/components/ui/button&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Link } from &quot;react-router-dom&quot;;

export function HeroSection() {
  return (
    <section className=&quot;relative overflow-hidden py-20 md:py-32&quot;>
      {/* Background gradient effect */}
      <div className=&quot;absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-80&quot;></div>
      
      {/* Animated floating particles */}
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse&quot;></div>
        <div className=&quot;absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse&quot;></div>
        <div className=&quot;absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse&quot;></div>
        <div className=&quot;absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-pulse&quot;></div>
      </div>
      
      <div className=&quot;container relative z-10 px-4 mx-auto text-center&quot;>
        <GradientHeading className=&quot;mb-6 text-5xl md:text-7xl font-bold&quot;>
          The Future of Tech & AI Marketplace
        </GradientHeading>

        <p className=&quot;text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto&quot;>
          The world's first free marketplace dedicated to high-tech and artificial intelligence. 
          Publish, connect, and thrive — all in one place.
        </p>

        <div className=&quot;flex flex-col sm:flex-row justify-center gap-4&quot;>
          <Button
            className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6&quot;
            size=&quot;lg&quot;
            asChild
          >
            <Link to=&quot;/signup&quot;>Join Zion Now</Link>
          </Button>
          <Button
            variant=&quot;outline&quot;
            className=&quot;border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg py-6&quot;
            size=&quot;lg&quot;
            asChild
          >
            <Link to=&quot;/marketplace&quot;>Explore Marketplace</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
