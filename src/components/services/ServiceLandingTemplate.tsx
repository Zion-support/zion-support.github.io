import React from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
export interface Benefit {
title: string;,
description: string;
icon?: React.ReactNode;
}
export interface Testimonial {
name: string;
role?: string;,
text: string;
avatar?: string;
}
interface ServiceLandingTemplateProps {
title: string;
subtitle: string;
heroImage?: string;
description: string;
benefits: Benefit[];
testimonials: Testimonial[];,
ctaText: string;,
ctaLink: string;
}
export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({
title,
subtitle,
heroImage,
description,
benefits,
testimonials,
ctaText,
ctaLink;
}) => {
return (
<div className="min-h-screen bg-zion-blue">;
{/* Hero Section */}
<section className="relative py-20">;
<div className="container mx-auto px-4">;
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
<div>;
<GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-6">;
{title}
</GradientHeading>;
<p className="text-xl text-zion-slate-light mb-8">;
{subtitle}
</p>;
<p className="text-zion-slate-light mb-8">;
{description}
</p>;
<Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">;
{ctaText}
</Button>;
</div>;
{heroImage && (
<div className="relative">;
<Image;
src={heroImage}
alt={title}
width={600}
height={400}
className="rounded-lg shadow-2xl"
/>;
</div>;
)}
</div>;
</div>;
</section>;

{/* Benefits Section */}
<section className="py-20 bg-zion-blue-dark">;
<div className="container mx-auto px-4">;
<div className="text-center mb-16">;
<GradientHeading level="h2" className="text-3xl md:text-4xl font-bold mb-4">;
Why Choose Our Service;
</GradientHeading>;
</div>;
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
{benefits.map((benefit, index) => (
<Card key={index} className="bg-zion-blue border-zion-slate">;
<CardContent className="p-6">;
{benefit.icon && (
<div className="mb-4 text-zion-cyan">;
{benefit.icon}
</div>;
)}
<h3 className="text-xl font-semibold mb-3 text-white">;
{benefit.title}
</h3>;
<p className="text-zion-slate-light">;
{benefit.description}
</p>;
</CardContent>;
</Card>;
))}
</div>;
</div>;
</section>;

{/* Testimonials Section */}
{testimonials.length > 0 && (
<section className="py-20">;
<div className="container mx-auto px-4">;
<div className="text-center mb-16">;
<GradientHeading level="h2" className="text-3xl md:text-4xl font-bold mb-4">;
What Our Clients Say;
</GradientHeading>;
</div>;
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
{testimonials.map((testimonial, index) => (
<Card key={index} className="bg-zion-blue-dark border-zion-slate">;
<CardContent className="p-6">;
<p className="text-zion-slate-light mb-4 italic">;
"{testimonial.text}";
</p>;
<div className="flex items-center">;
{testimonial.avatar && (
<Image;
src={testimonial.avatar}
alt={testimonial.name}
width={48}
height={48}
className="rounded-full mr-4"
/>;
)}
<div>;
<h4 className="font-semibold text-white">{testimonial.name}</h4>;
{testimonial.role && (
<p className="text-zion-slate-light text-sm">{testimonial.role}</p>;
)}
</div>;
</div>;
</CardContent>;
</Card>;
))}
</div>;
</div>;
</section>;
)}

{/* CTA Section */}
<section className="py-20 bg-zion-blue-dark">;
<div className="container mx-auto px-4 text-center">;
<GradientHeading level="h2" className="text-3xl md:text-4xl font-bold mb-4">;
Ready to Get Started?;
</GradientHeading>;
<p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">;
Join thousands of satisfied customers who trust our service.;
</p>;
<Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">;
{ctaText}
</Button>;
</div>;
</section>;
</div>;
);
};
