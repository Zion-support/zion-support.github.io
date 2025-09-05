
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { Check, X } from "lucide-react",
=======
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Check, X } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
=======
  TableRow} from &quot;@/components/ui/table&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function EnterprisePricingTable() {
  const plans = [
    {
      name: &quot;Teams&quot;,
      price: &quot;$599&quot;,
      billing: &quot;/month&quot;,
      description: &quot;Perfect for small teams&quot;,
      users: &quot;Up to 10 users&quot;,
      popular: false,
      features: [
        { name: &quot;Private hiring portal&quot;, included: true },
        { name: &quot;Dedicated talent pool&quot;, included: true },
        { name: &quot;Standard SLA (24h)&quot;, included: true },
        { name: &quot;Basic branding&quot;, included: true },
        { name: &quot;Admin dashboard&quot;, included: true },
        { name: &quot;Team collaboration&quot;, included: true },
        { name: &quot;API access&quot;, included: false },
        { name: &quot;Custom integrations&quot;, included: false },
        { name: &quot;Dedicated success manager&quot;, included: false }]},
    {
      name: &quot;Business&quot;,
      price: &quot;$1,999&quot;,
      billing: &quot;/month&quot;,
      description: &quot;Ideal for growing companies&quot;,
      users: &quot;Up to 50 users&quot;,
      popular: true,
      features: [
        { name: &quot;Private hiring portal&quot;, included: true },
        { name: &quot;Dedicated talent pool&quot;, included: true },
        { name: &quot;Enhanced SLA (8h)&quot;, included: true },
        { name: &quot;Advanced branding&quot;, included: true },
        { name: &quot;Admin dashboard&quot;, included: true },
        { name: &quot;Team collaboration&quot;, included: true },
        { name: &quot;API access&quot;, included: true },
        { name: &quot;Custom integrations&quot;, included: false },
        { name: &quot;Dedicated success manager&quot;, included: false }]},
    {
      name: &quot;Enterprise&quot;,
      price: &quot;Custom&quot;,
      billing: "&quot;,
      description: &quot;For large organizations&quot;,
      users: &quot;Unlimited users&quot;,
      popular: false,
      features: [
<<<<<<< HEAD
        { name: "Private hiring portal", included: true },
        { name: "Dedicated talent pool", included: true },
        { name: "Premium SLA (1h)", included: true },
        { name: "Full white labeling", included: true },
        { name: "Admin dashboard", included: true },
        { name: "Team collaboration", included: true },
        { name: "API access", included: true },
        { name: "Custom integrations", included: true },
        { name: "Dedicated success manager", included: true }]}],
=======
        { name: &quot;Private hiring portal&quot;, included: true },
        { name: &quot;Dedicated talent pool&quot;, included: true },
        { name: &quot;Premium SLA (1h)&quot;, included: true },
        { name: &quot;Full white labeling&quot;, included: true },
        { name: &quot;Admin dashboard&quot;, included: true },
        { name: &quot;Team collaboration&quot;, included: true },
        { name: &quot;API access&quot;, included: true },
        { name: &quot;Custom integrations&quot;, included: true },
        { name: &quot;Dedicated success manager&quot;, included: true }]}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <section id=&quot;pricing" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Plans</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your team size and requirements
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table className="border rounded-lg">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Plan Features</TableHead>
                {plans.map((plan) => (
                  <TableHead key={plan.name} className="text-center">
                    <div className="flex flex-col items-center">
                      {plan.popular && (
                        <Badge className="mb-2 bg-zion-purple">Most Popular</Badge>
                      )}
                      <span className="font-bold text-xl">{plan.name}</span>
                      <div className="flex items-baseline mt-1">
                        <span className="text-2xl font-bold">{plan.price}</span>
                        <span className="text-sm text-muted-foreground ml-1">
                          {plan.billing}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {plan.description}
                      </p>
                      <p className="text-sm font-medium mt-2">{plan.users}</p>
                      <Button
                        className={`mt-4 w-full ${plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        {plan.name === "Enterprise&quot; ? &quot;Request Quote&quot; : &quot;Get Started"}
                      </Button>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans[0].features.map((feature, index) => (
                <TableRow key={feature.name}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  {plans.map((plan) => (
                    <TableCell key={`${plan.name}-${feature.name}`} className="text-center">
                      {plan.features[index].included ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          All plans include SSL security, 99.9% uptime SLA, and dedicated support
        </div>
      </div>
    </section>
  )
}
