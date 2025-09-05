
import React from "react";
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from "@/components/ui/table";

export function EnterprisePricingTable() {_const _plans = [
    {
      name: "Teams", _price: "$599", _billing: "/month", _description: "Perfect for small teams", _users: "Up to 10 users", _popular: false, _features: [
        { name: "Private hiring portal", _included: true},
        {_name: "Dedicated talent pool", _included: true},
        {_name: "Standard SLA (24h)", _included: true},
        {_name: "Basic branding", _included: true},
        {_name: "Admin dashboard", _included: true},
        {_name: "Team collaboration", _included: true},
        {_name: "API access", _included: false},
        {_name: "Custom integrations", _included: false},
        {_name: "Dedicated success manager", _included: false}]},
    {_name: "Business", _price: "$1, _999", _billing: "/month", _description: "Ideal for growing companies", _users: "Up to 50 users", _popular: true, _features: [
        { name: "Private hiring portal", _included: true},
        {_name: "Dedicated talent pool", _included: true},
        {_name: "Enhanced SLA (8h)", _included: true},
        {_name: "Advanced branding", _included: true},
        {_name: "Admin dashboard", _included: true},
        {_name: "Team collaboration", _included: true},
        {_name: "API access", _included: true},
        {_name: "Custom integrations", _included: false},
        {_name: "Dedicated success manager", _included: false}]},
    {_name: "Enterprise", _price: "Custom", _billing: "", _description: "For large organizations", _users: "Unlimited users", _popular: false, _features: [
        { name: "Private hiring portal", _included: true},
        {_name: "Dedicated talent pool", _included: true},
        {_name: "Premium SLA (1h)", _included: true},
        {_name: "Full white labeling", _included: true},
        {_name: "Admin dashboard", _included: true},
        {_name: "Team collaboration", _included: true},
        {_name: "API access", _included: true},
        {_name: "Custom integrations", _included: true},
        {_name: "Dedicated success manager", _included: true}]}];

  return (_<section id="pricing" className="py-20 px-4 md:px-6">
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
                {_plans.map((plan) => (
                  <TableHead key={plan.name} className="text-center">
                    <div className="flex flex-col items-center">
                      {_plan.popular && (
                        <Badge className="mb-2 bg-zion-purple">Most Popular</Badge>
                      )}
                      <span className="font-bold text-xl">{_plan.name}</span>
                      <div className="flex items-baseline mt-1">
                        <span className="text-2xl font-bold">{_plan.price}</span>
                        <span className="text-sm text-muted-foreground ml-1">
                          {_plan.billing}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {_plan.description}
                      </p>
                      <p className="text-sm font-medium mt-2">{_plan.users}</p>
                      <Button
                        className={_`mt-4 w-full ${plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}
                        variant={_plan.popular ? 'default' : 'outline'}
                      >
                        {_plan.name === "Enterprise" ? "Request Quote" : "Get Started"}
                      </Button>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {_plans[0].features.map(_(feature, _index) => (_<TableRow key={feature.name}>
                  <TableCell className="font-medium">{_feature.name}</TableCell>
                  {_plans.map((plan) => (
                    <TableCell key={`${plan.name}-${_feature.name}`} className="text-center">
                      {_plan.features[index].included ? (
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
  );
}
