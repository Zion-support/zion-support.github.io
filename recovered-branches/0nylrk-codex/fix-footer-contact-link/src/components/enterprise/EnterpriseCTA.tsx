
import React from "react",
import { Button } from "@/components/ui/button",
import { Calendar, ArrowRight } from "lucide-react",

export function EnterpriseCTA() {
  return (
    <section className="py-20 px-4 md: px-6">      <div className="container mx-auto max-w-6xl">
        <div className="rounded-xl bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-purple-light/20 p-1">
          <div className="bg-card rounded-lg shadow-sm p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Calendar, ArrowRight } from &quot;lucide-react&quot;;

export function EnterpriseCTA() {
  return (
    <section className=&quot;py-20 px-4 md:px-6&quot;>
      <div className=&quot;container mx-auto max-w-6xl&quot;>
        <div className=&quot;rounded-xl bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-purple-light/20 p-1&quot;>
          <div className=&quot;bg-card rounded-lg shadow-sm p-8 md:p-12&quot;>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8 items-center&quot;>
              <div>
                <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
                  Ready to transform your talent acquisition?
                </h2>
                <p className=&quot;text-xl text-muted-foreground mb-8&quot;>
                  Schedule a personalized demo with our enterprise team to see how Zion AI can help you build your dream team.
                </p>
                <div className=&quot;flex flex-col sm:flex-row gap-4&quot;>
                  <Button size=&quot;lg&quot; className=&quot;gap-2&quot;>
                    <Calendar className=&quot;h-5 w-5&quot; />
                    Schedule a Demo
                  </Button>
                  <Button size=&quot;lg&quot; variant=&quot;outline&quot; className=&quot;gap-2&quot;>
                    Contact Sales
                    <ArrowRight className=&quot;h-5 w-5&quot; />
                  </Button>
                </div>
              </div>
              <div className=&quot;rounded-lg bg-muted p-6&quot;>
                <h3 className=&quot;font-bold text-xl mb-4&quot;>What to expect in the demo</h3>
                <ul className=&quot;space-y-3&quot;>
                  <li className=&quot;flex gap-3&quot;>
                    <div className=&quot;h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0&quot;>
                      <span className=&quot;text-primary text-sm font-medium&quot;>1</span>
                    </div>
                    <p>Personalized walkthrough of the platform</p>
                  </li>
                  <li className=&quot;flex gap-3&quot;>
                    <div className=&quot;h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0&quot;>
                      <span className=&quot;text-primary text-sm font-medium&quot;>2</span>
                    </div>
                    <p>Custom pricing based on your team size</p>
                  </li>
                  <li className=&quot;flex gap-3&quot;>
                    <div className=&quot;h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0&quot;>
                      <span className=&quot;text-primary text-sm font-medium&quot;>3</span>
                    </div>
                    <p>Q&A with our enterprise solution experts</p>
                  </li>
                  <li className=&quot;flex gap-3&quot;>
                    <div className=&quot;h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0&quot;>
                      <span className=&quot;text-primary text-sm font-medium&quot;>4</span>
                    </div>
                    <p>Free consultation on implementation</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}