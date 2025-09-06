import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import React from 'react'
xport interface Benefit {
  title: string;
  description: string;
  icon?: React.ReactNode
  ctaLink: string
}
export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({

  title
  subtitle
  description
  benefits
  features = []
  stats = []
  ctaText
  ctaLink
}) => {
import React from "react",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
import Image from "next/image",;
export interface Benefit {;
  title: string,;
  description: string,;

}
interface ServiceLandingTemplateProps {

  title: string;
  subtitle: string;
  description: string;
  benefits: Benefit[];
  features?: string[];
  stats?: Array<{ label: string; value: string }>;
  cta_text: string;
  cta_link: string;
}
export const ServiceLandingTemplate: React.FC < ServiceLandingTemplateProps> = ({


export interface Benefit {
  title: string;
  description: string;
  icon?: React.ReactNode


      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">




      <section className="py-16 bg-zion-blue-light">

                  </div>;
                  <div className="text - gray - 600">{stat.label}</div>;
                </div>))}
            </div>;
          </div>;
        </section>)}
      <section className="py - 16 px - 4 bg - blue - 600">;
        <div className="max - w-4xl mx - auto text - center">;
          <h2 className="text - 3xl font - bold text - white mb - 4">;
            Ready to Get Started?;
          </h2>;
          <p className="text - xl text - blue - 100 mb - 8">;
            Contact us today to learn more about our services.;
          </p>;
          <a;
            href={cta_link}
            className="bg - white text - blue - 600 px - 8 py - 3 rounded - lg font - semibold hover:bg - gray - 100 transition - colors inline - block";
          >;
            {cta_text}
          </a>;
        </div>;
      </section>;
    </div>);
}

},
