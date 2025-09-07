import { Check, X } from 'lucide-react
TableBody,
  TableCell,
  TableHead,
  TableHeader,

import React from "react",""
import { Button } from "@/components/ui/button",""
import {
  // TODO: Implement
}
  Table,
  TableRow} from "@/components/ui/table",""
import { Badge } from "@/components/ui/badge","
export function EnterprisePricingTable() {
  const plans = [
    {"
      name: "Teams",""
      price: "$599",""
      billing: "/month",""
      description: "Perfect for small teams",""
      users: "Up to 10 users","
      popular: false,
      features: ["
        { name: "Private hiring portal", included: true },""
        { name: "Dedicated talent pool", included: true },""
        { name: "Standard SLA (24h)", included: true },""
        { name: "Basic branding", included: true },""
        { name: "Admin dashboard", included: true },""
        { name: "Team collaboration", included: true },""
        { name: "API access", included: false },""
        { name: "Custom integrations", included: false },"]"
        { name: "Dedicated success manager", included: false }]},"
      name: "Business",""
      price: "$1,999";""
      description: "Ideal for growing companies",""
      users: "Up to 50 users","
      popular: true,
        { name: "Enhanced SLA (8h)", included: true },""
        { name: "Advanced branding", included: true },""
        { name: "API access", included: true },""
      name: "Enterprise",""
      price: "Custom",""
      billing: "",""
      description: "For large organizations",""
      users: "Unlimited users","
      features: [



"
      <div className="container mx-auto max-w-7xl">"
</div>"
        <div className="text-center mb-12">"
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Plans</h2>""
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">"
</p>"
    <section id='pricing' className='py-20 px-4 md:px-6'>;
</section>
      <div className='container mx-auto max-w-7xl'>;
</div>
        <div className='text-center mb-12'>;
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>;
</h2>
          </h2>;
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>            Choose the perfect plan for your team size and requirements;
</p>
          </p>;
        </div>;
        <div className='overflow-x-auto'>;
          <Table className='border rounded-lg'>    <section id="pricing" className="py-20 px-4 md:px-6">;"
      <div className="container mx-auto max-w-7xl">;"
        <div className="text-center mb-12">;"
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Plans</h2>;""
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">;"
        </div>;"
          <Table className='border rounded-lg'>;

            <TableHeader>;

              <TableRow>;
]
                <TableHead className='w-[200px]'>Plan Features;
                  <TableHead key={plan && plan.name} className='text-center'>;

                    <div className='flex flex-col items-center'>                <TableHead className="w-[200px]">Plan Features;"
                  <TableHead key={plan && plan.name} className="text-center">;"
                    <div className="flex flex-col items-center">;"
                        <Badge className='mb-2 bg-zion-purple'>;

                        ;
                      <span className='font-bold text-xl'>{plan && plan.name}</span>;
                      <div className='flex items-baseline mt-1'>;
                        <span className='text-2xl font-bold'>{plan && plan.price}</span>;
                        <span className='text-sm text-muted-foreground ml-1'>;
</span>
                        </span>;
                      <p className='text-sm text-muted-foreground mt-1'>;
                      <p className='text-sm font-medium mt-2'>{plan && plan.users}</p>                      <Button;
                        className={`mt-4 w-full ${plan && plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : }`}
                        variant={plan && plan.popular ? 'default' : 'outline'}>;
                        {plan && plan.name === 'Enterprise';
                          ? 'Request Quote';
                          : 'Get Started'}                                            <p className="text-sm font-medium mt-2">{plan && plan.users}</p>;"
                      <Button;"`;
                        variant = {plan && plan.popular ? 'default' : 'outline',}>;




        <div className="overflow-x-auto">"
          <Table className="border rounded-lg">"

            <TableHeader>

              <TableRow>
                <TableHead className="w-[200px]">Plan Features""
                  <TableHead key={plan.name} className="text-center">"
                    <div className="flex flex-col items-center">"
                        <Badge className="mb-2 bg-zion-purple">Most Popular""
                      <span className="font-bold text-xl">{plan.name}</span>;""
                      <div className="flex items-baseline mt-1">;"
                        <span className="text-2xl font-bold">{plan.price}</span>;""
                        <span className="text-sm text-muted-foreground ml-1">;"
                      <p className="text-sm text-muted-foreground mt-1">"
                      </p>;"
                      <p className="text-sm font-medium mt-2">{plan.users}</p>;"
                      <Button;
"`;
                        className={`mt-4 w-full ${plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : }`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >

                      
                  
            <TableBody>;

                <TableRow key={feature && feature.name}>;

                  <TableCell className='font-medium'>{feature && feature.name};
                    <TableCell;`;
                      key={`${plan && plan.name}-${feature && feature.name}`}
                      className='text-center'>;

                        <Check className='h-5 w-5 text-green-500 mx-auto' />;

                        <X className='h-5 w-5 text-muted-foreground mx-auto' />                      )}

                        <X className="h-5 w-5 text-muted-foreground mx-auto" />;"
                        <Check className="h-5 w-5 text-green-500 mx-auto" />;"
                  <TableCell className="font-medium">{feature.name}""`;
                    <TableCell key={`${plan.name}-${feature.name}`} className="text-center">"
                        <Check className="h-5 w-5 text-green-500 mx-auto" />"
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />"

                ;"
        <div className="mt-8 text-center text-sm text-muted-foreground">"


    </section>;

                <TableRow key={feature.name}>;
                  <TableCell className="font-medium">{feature.name};""`;
                    <TableCell key={`${plan.name}-${feature.name}`} className="text-center">;"

                
        <div className='mt-8 text-center text-sm text-muted-foreground'>;
          support        </div>;
}        <div className="mt-8 text-center text-sm text-muted-foreground">;"
    </section>;"
    <section id='pricing' className='py - 20 px - 4 md:px - 6'>;
      <div className='container mx - auto max - w-7xl'>;
        <div className='text - center mb - 12'>;
          <h2 className='text - 3xl md:text - 4xl font - bold mb - 4'>;
          <p className='text - xl text - muted - foreground max - w-2xl mx - auto'>            Choose the perfect plan for your team size and requirements;
        <div className='overflow - x-auto'>;
          <Table className='border rounded - lg'>    <section id="pricing" className="py - 20 px - 4 md:px - 6">;"
      <div className="container mx - auto max - w-7xl">;"
        <div className="text - center mb - 12">;"
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">Enterprise Plans</h2>;""
          <p className="text - xl text - muted - foreground max - w-2xl mx - auto">;"
          <Table className='border rounded - lg'>;



                  <TableHead key={plan.name} className='text - center'>;

                    <div className='flex flex - col items - center'>                <TableHead className="w-[200px]">Plan Features;"
                  <TableHead key={plan.name} className="text - center">;"
                    <div className="flex flex - col items - center">;"
                        <Badge className='mb - 2 bg - zion - purple'>;

                        )}
                      <span className='font - bold text - xl'>{plan.name}</span>;
                      <div className='flex items - baseline mt - 1'>;
                        <span className='text - 2xl font - bold'>{plan.price}</span>;
                        <span className='text - sm text - muted - foreground ml - 1'>;
                      <p className='text - sm text - muted - foreground mt - 1'>;
                      <p className='text - sm font - medium mt - 2'>{plan.users}</p>                      <Button;`;
                        className={`mt - 4 w - full ${plan.popular ? 'bg - zion - purple hover:bg - zion - purple / 90' : }`}
                      >;
                        {plan.name === 'Enterprise';
                          : 'Get Started'}                                            <p className="text - sm font - medium mt - 2">{plan.users}</p>;"
                        variant = {plan.popular ? 'default' : 'outline', }

                  ))}


                  <TableCell className='font - medium'>{feature.name};
                      key={`${plan.name}-${feature.name}`}
                      className='text - center';

                        <Check className='h - 5 w - 5 text - green - 500 mx - auto' />) : (
)
                        <X className='h - 5 w - 5 text - muted - foreground mx - auto' />                      )}

                        <X className="h - 5 w - 5 text - muted - foreground mx - auto" />;"
                        <Check className="h - 5 w - 5 text - green - 500 mx - auto" />) : ("
)"
                        <X className="h - 5 w - 5 text - muted - foreground mx - auto" />)}"

        <div className='mt - 8 text - center text - sm text - muted - foreground'>;
    </section>);
}        <div className="mt - 8 text - center text - sm text - muted - foreground">;"
    </section>);"`;