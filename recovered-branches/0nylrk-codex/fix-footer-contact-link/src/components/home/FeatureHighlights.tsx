
<<<<<<< HEAD
import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Check } from "lucide-react",
=======
import React from &quot;react&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Check } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function FeatureHighlights() {
  const highlightsData = [
    {
      title: &quot;For Talent Seekers&quot;,
      features: [
        &quot;AI-powered talent matching based on your specific project requirements&quot;,
        &quot;Verified profiles with skills validation and credential checking&quot;,
        &quot;Transparent pricing and no hidden fees&quot;,
        &quot;Direct communication with potential candidates&quot;,
        &quot;Secure payment protection and dispute resolution&quot;,
        &quot;Post jobs and receive AI-matched applicants&quot;
      ]
    },
    {
      title: &quot;For Talent & Service Providers&quot;,
      features: [
        &quot;Create a professional profile showcasing your skills and experience&quot;,
        &quot;Get matched with relevant projects that fit your expertise&quot;,
        &quot;Secure payment processing with on-time disbursements&quot;,
        &quot;Build your reputation through client reviews and ratings&quot;,
        &quot;Access to enterprise clients and high-value projects&quot;,
        &quot;Professional development resources and community support&quot;
      ]
    },
    {
      title: &quot;For Enterprise Clients&quot;,
      features: [
        &quot;White-labeled talent portal with your company branding&quot;,
        &quot;Dedicated account management and priority support&quot;,
        &quot;Custom talent pools and preferred provider networks&quot;,
        &quot;Advanced analytics and reporting capabilities&quot;,
        &quot;API access for seamless integration with your HR systems&quot;,
        &quot;Customizable workflow and approval processes&quot;
      ]
    }
  ],

  return (
    <section className=&quot;py-16 bg-zion-blue&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <h2 className=&quot;text-3xl font-bold text-white mb-3&quot;>Tailored Solutions for Everyone</h2>
          <p className=&quot;text-zion-slate-light text-lg max-w-3xl mx-auto&quot;>
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed
          </p>
        </div>
        
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
          {highlightsData.map((category, index) => (
            <Card key={index} className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
              <CardContent className=&quot;p-6&quot;>
                <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>{category.title}</h3>
                <ul className=&quot;space-y-3&quot;>
                  {category.features.map((feature, idx) => (
                    <li key={idx} className=&quot;flex items-start&quot;>
                      <Check className=&quot;h-5 w-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0&quot; />
                      <span className=&quot;text-zion-slate-light&quot;>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
