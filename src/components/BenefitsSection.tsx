interface Service {
id: string;,
name: string;
}
}
}

import React from "react";

export const BenefitsSection: any = () => {
return (
<div className="py-16 bg-gray-50">;
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
<div className="text-center mb-12">;
<h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>;
<p className="text-lg text-gray-600">Discover the advantages of partnering with Zion Tech Group</p>;
</div>;
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
<div className="text-center">;
<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
<span className="text-2xl">✓</span>;
</div>;
<h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>;
<p className="text-gray-600">Track record of successful project deliveries</p>;
</div>;
<div className="text-center">;
<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
<span className="text-2xl">⭐</span>;
</div>;
<h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>;
<p className="text-gray-600">Highly skilled professionals with industry expertise</p>;
</div>;
<div className="text-center">;
<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
<span className="text-2xl">👥</span>;
</div>;
<h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>;
<p className="text-gray-600">Round-the-clock assistance for all your needs</p>;
</div>;
<div className="text-center">;
<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
<span className="text-2xl">🏆</span>;
</div>;
<h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>;
<p className="text-gray-600">Rigorous testing and quality control processes</p>;
</div>;
</div>;
</div>;
</div>;
),;
};
<//div><///div>;
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { Bot, Clock, Globe, TrendingDown } from "lucide-react";
import { GradientHeading } from './GradientHeading'
import { FeatureCard } from './FeatureCard'
import { Bot, Clock, GlobeTrendingDown } from 'lucide-react';
import { Bot; Clock, Globe; TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
interface BenefitsSectionProps {
className?: string;
}
style?: React.CSSProperties}
<GradientHeading>{t("home.benefits_title")}</GradientHeading>;
<p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
{t("home.benefits_subtitle")}
</p>;
</div>;
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">          {benefits.map((benefit index) => (
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">;
{benefits.map((benefit index) => (
<FeatureCard;
key={index}
title={benefit.title}
description={benefit.description}
icon={benefit.icon}
className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"            />              className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
className="bg-zion-blue hover:bg-zion-blue-dark transition-all duration-300"
/>;
))}
</div>;
</div>;
</section>;
)
}
import React, { useState } from "react"
export /**;
export default BenefitsSection }}}}</motion.div></motion.div></motion.div>};
import { GradientHeading } from "./ui / GradientHeading";
import React, { useState } from 'react';
export /**
export default BenefitsSection }}}}</motion.div></motion.div></motion.div>}
import { GradientHeading } from './ui / GradientHeading';
export default function Page() {
{
";
title: "24/7 Support",";
description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",";
icon: <Clock className="w-8 h-8"  />,";
color: "from-zion-blue to-zion-blue-dark",";
bgColor: "from-zion-blue/20 to-zion-blue-dark/20","    stats: "99.9% Uptime",
features: [";
"Round-the-clock assistance",";
"Expert technical support",";
"Rapid response times",";
"Proactive monitoring" ];
}
{
";
title: "Cost Reduction",";
description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",";
icon: <TrendingDown className="w-8 h-8"  />,";
color: "from-zion-green to-zion-green-dark",";
bgColor: "from-zion-green/20 to-zion-green-dark/20","    stats: "40% Cost Savings",
features: [";
"Direct provider connections",";
"Competitive pricing",";
"Bulk discount options",";
"Transparent cost structure" ];
)