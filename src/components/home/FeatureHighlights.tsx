





  return (
    <section className={cn("py-16 bg-zion-blue", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Tailored Solutions for Everyone</h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightsData.map((category, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Check } from 'lucide-react';
import { cn } from "@/lib/utils",;
interface FeatureHighlightsProps {;
  className?: string,;
  style?: React.CSSProperties;
}
;
export function FeatureHighlights({ className, style }: FeatureHighlightsProps) {;
  const highlightsData = [;
    {;
      title: "For Talent Seekers",;
      features: [;
        "AI-powered talent matching based on your specific project requirements",;
        "Verified profiles with skills validation and credential checking",;
        "Transparent pricing and no hidden fees",;
        "Direct communication with potential candidates",;
        "Secure payment protection and dispute resolution",;
        "Post jobs and receive AI-matched applicants";
      ];
    },;
    {;
      title: "For Talent & Service Providers",;
      features: [;
        "Create a professional profile showcasing your skills and experience",;
        "Get matched with relevant projects that fit your expertise",;
        "Secure payment processing with on-time disbursements",;
        "Build your reputation through client reviews and ratings",;
        "Access to enterprise clients and high-value projects",;
        "Professional development resources and community support";
      ];
    },;
    {;
      title: "For Enterprise Clients",;
      features: [;
        "White-labeled talent portal with your company branding",;
        "Dedicated account management and priority support",;
        "Custom talent pools and preferred provider networks",;
        "Advanced analytics and reporting capabilities",;
        "API access for seamless integration with your HR systems";
        "Customizable workflow and approval processes";
      ];
    }
  ];
  return (;
    <section className={cn("py-16 bg-zion-blue", className)} style={style}>;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl font-bold text-white mb-3">Tailored Solutions for Everyone</h2>;
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">;
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed;
          </p>;
        </div>;
                  ))}
                </ul>;
              </CardContent>;
            </Card>;
          ))}
";
              <div className="bg - slate - 800 / 50 border border - white / 10 rounded - xl p - 6 hover:border - white / 20 transition - all duration - 300">;
                <div className={`w - 12 h - 12 bg - gradient - to - r ${feature.color} rounded - lg flex items - center justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300`}>`;
                  <feature.icon className={`w - 6 h - 6 ${feature.icon_color}`} />;
                </div>;
";
                <h3 className="text - xl font - semibold text - white mb - 2 group - hover:text - blue - 400 transition - colors duration - 300">;
                  {feature.title}
                </h3>;
";
                <p className="text - gray - 400 group - hover:text - gray - 300 transition - colors duration - 300">;
                  {feature.description}
                </p>;
              </div>;
              <h3 className="text - xl font - bold text - white mb - 3 group - hover:text - blue - 400 transition - colors duration - 200">;
                {feature.title}
              </h3>;
              <p className="text - gray - 400 text - sm leading - relaxed">;
                {feature.description}
        </div>;
