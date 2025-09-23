
<<<<<<< HEAD








>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



export function FeatureHighlights() {

  const highlightsData = [
    {

      title: "For Talent Seekers"
      title: "For Talent Seekers",
      features: [;

        "AI-powered talent matching based on your specific project requirements";
        "Verified profiles with skills validation and credential checking";
        "Transparent pricing and no hidden fees";
        "Direct communication with potential candidates";

      features: [

=======
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export function FeatureHighlights() {
  const highlightsData = [
    {
      title: "For Talent Seekers",
      features: [
        "AI-powered talent matching based on your specific project requirements",
        "Verified profiles with skills validation and credential checking",
        "Transparent pricing and no hidden fees",
        "Direct communication with potential candidates",
>>>>>>> origin/auto/autonomy-17186719616
        "Secure payment protection and dispute resolution",
        "Post jobs and receive AI-matched applicants"
      ]
    },
<<<<<<< HEAD

    {
      title: "For Talent & Service Providers"
      features: [

    {
      title: "For Enterprise Clients"
      features: [

        "Customizable workflow and approval processes"
      ]
    }
  ],
=======
    {
      title: "For Talent & Service Providers",
      features: [
        "Create a professional profile showcasing your skills and experience",
        "Get matched with relevant projects that fit your expertise",
        "Secure payment processing with on-time disbursements",
        "Build your reputation through client reviews and ratings",
        "Access to enterprise clients and high-value projects",
        "Professional development resources and community support"
      ]
    },
    {
      title: "For Enterprise Clients",
      features: [
        "White-labeled talent portal with your company branding",
        "Dedicated account management and priority support",
        "Custom talent pools and preferred provider networks",
        "Advanced analytics and reporting capabilities",
        "API access for seamless integration with your HR systems",
        "Customizable workflow and approval processes"
      ]
    }
  ];
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Tailored Solutions for Everyone</h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed
          </p>
        </div>
<<<<<<< HEAD
=======
        
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD



        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
          {highlightsData && highlightsData.map((category, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">;
              <CardContent className="p-6">;
                <h3 className="text-xl font-bold text-white mb-4">{category && category.title}</h3>;
                <ul className="space-y-3">;
                  {category && category.features.map((feature, idx) => (;
                    <li key={idx} className="flex items-start">;
                      <Check className="h-5 w-5 text-zion-cyan mr-2 mt-0 && 0.5 flex-shrink-0" />;
                      <span className="text-zion-slate-light">{feature}</span>;
                    </li>;

                  ))}
                </ul>;
              </CardContent>;
            </Card>;
          ))}

        </div>;
      </div>;
    </section>;
  );
}


    <section className="py - 16 bg - zion - blue">;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 12">;
          <h2 className="text - 3xl font - bold text - white mb - 3">Tailored Solutions for Everyone</h2>;
          <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">;
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed;
          </p>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
          {highlights_data.map ((category, index) => (
            <Card key={index} className="bg - zion - blue - dark border - zion - blue - light">;
              <CardContent className="p - 6">;
                <h3 className="text - xl font - bold text - white mb - 4">{category.title}</h3>;
                <ul className="space - y-3">;
                  {category.features.map ((feature, idx) => (
                    <li key={idx} className="flex items - start">;
                      <Check className="h - 5 w - 5 text - zion - cyan mr - 2 mt - 0.5 flex - shrink - 0" />;
                      <span className="text - zion - slate - light">{feature}</span>;
                    </li>))}
                </ul>;
              </CardContent>;
            </Card>))}
        </div>;
      </div>;
    </section>);
}

=======
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
>>>>>>> origin/auto/autonomy-17186719616
