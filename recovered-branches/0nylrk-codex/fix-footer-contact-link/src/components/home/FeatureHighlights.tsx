
import React from "react";

export function FeatureHighlights() {_const _highlightsData = [
    {
      title: "For Talent Seekers", _features: [
        "AI-powered talent matching based on your specific project requirements", _"Verified profiles with skills validation and credential checking", _"Transparent pricing and no hidden fees", _"Direct communication with potential candidates", _"Secure payment protection and dispute resolution", _"Post jobs and receive AI-matched applicants"
      ]},
    {_title: "For Talent & Service Providers", _features: [
        "Create a professional profile showcasing your skills and experience", _"Get matched with relevant projects that fit your expertise", _"Secure payment processing with on-time disbursements", _"Build your reputation through client reviews and ratings", _"Access to enterprise clients and high-value projects", _"Professional development resources and community support"
      ]},
    {_title: "For Enterprise Clients", _features: [
        "White-labeled talent portal with your company branding", _"Dedicated account management and priority support", _"Custom talent pools and preferred provider networks", _"Advanced analytics and reporting capabilities", _"API access for seamless integration with your HR systems", _"Customizable workflow and approval processes"
      ]}
  ];

  return (_<section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Tailored Solutions for Everyone</h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Whatever your role in the tech ecosystem, _Zion offers specialized features to help you succeed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {_highlightsData.map((category, _index) => (_<Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{_category.title}</h3>
                <ul className="space-y-3">
                  {_category.features.map((feature, _idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light">{_feature}</span>
                    </li>
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
