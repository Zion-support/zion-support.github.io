name: string;
  role?: string;
  text: string;
  avatar?: string;
}


interface ServiceLandingTemplateProps {;

  title: string;,
  subtitle: string;
  heroImage?: string;
  description: string;,
  benefits: Benefit[];
  testimonials: Testimonial[];,
  ctaText: string;
import React from "react";""
import { GradientHeading } from "@/components/GradientHeading";""
import { Button } from "@/components/ui/button";""
import { Card, CardContent, CardFooter } from "@/components/ui/card";""
import Image from "next/image";"
export interface Benefit {
  // TODO: Implement
}
  title: string,
  description: string,
  icon?: React.ReactNode;"
import React from 'react';'
export interface Benefit {
  // TODO: Implement
}
  title: string;,
  description: string;
  icon?: React.ReactNode;
}
export interface Testimonial {
  // TODO: Implement
}
  name: string;
  role?: string;
  text: string;
  avatar?: string;

}
interface ServiceLandingTemplateProps {
  // TODO: Implement
}
  title: string;,
  subtitle: string;
  description: string;,
  benefits: Benefit[];
  features?: string[];
  stats?: Array<{ label: string; value: string }>
  ctaText: string;,
  ctaLink: string;'
import React from "react",;""
import { GradientHeading } from "@/components/GradientHeading",;""
import { Button } from "@/components/ui/button",;""
import { Card, CardContent, CardFooter } from "@/components/ui/card",;""
import Image from "next/image",;"
export interface Benefit {;
  title: string,;
  description: string,;
  icon?: React.ReactNode;
}
export const ServiceLandingTemplate: React.FC < ServiceLandingTemplateProps> = ({


export interface Benefit {
  // TODO: Implement
}
  title: string;,
  description: string;
  icon?: React.ReactNode;
}

export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({
</ServiceLandingTemplateProps>
export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({;
</ServiceLandingTemplateProps>
          </p>"
    <div className="bg-background text-white">"
</div>"
      <section className="bg-zion-blue py-16 px-4 text-center">"
</section>"
        <div className="container mx-auto">"
</div>"
          <GradientHeading level="h1" className="mb-4">"
</GradientHeading>
          </GradientHeading>"
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">"
</p>
          </p>"
            <div className="mx-auto mt-8 rounded-lg shadow-xl max-w-3xl relative h-80">"
</div>
              <Image;
                src={heroImage}
                alt={title}"
                className="object-cover rounded-lg"""
                loading="lazy""
              />
</Image>
            </div>
        </div>
      </section>
"
      <section className="py-12 px-4">"
</section>"
        <div className="container mx-auto text-center">"
</div>"
          <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">"
</p>"
    <div className="min - h-screen bg - white">;"
</div>"
      <section className="py - 20 px - 4 bg - gradient - to - br from - blue - 50 to - indigo - 100">;"
</section>"
        <div className="max - w-7xl mx - auto text - center">;"
</div>"
          <h1 className="text - 4xl md:text - 6xl font - bold text - gray - 900 mb - 6">;"
</h1>
          </h1>;"
          <p className="text - xl text - gray - 600 max - w-3xl mx - auto mb - 8">;"
</p>
          </p>;"
          <p className="text - lg text - gray - 600 max - w-3xl mx - auto">;"
</p>
          </p>;
        </div>;
      </section>;"
        <section className="py - 16 px - 4">;"
</section>"
          <div className="max - w-7xl mx - auto">;"
</div>"
            <h2 className="text - 3xl font - bold text - center text - gray - 900 mb - 12">;"
</h2>
            </h2>;"
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;"
</div>"
                <div key={index} className="bg - white p - 6 rounded - lg shadow - lg">;"
</div>"
                    <div className="mb-4 text-blue-600">{benefit.icon}</div>""
                  <h3 className="text-xl font-semibold mb-3">"
</h3>
                  </h3>"
                  <p className="text-gray-600">{benefit.description}</p>"
                </div>
            </div>;
          </div>;
        </section>;"
        <section className="py-16 px-4 bg-gray-50">;"
</section>"
          <div className="max-w-7xl mx-auto">;"
</div>"
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">;"
</h2>
            </h2>;"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;"
</div>"
                <div key={index} className="flex items-start">;"
</div>"
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>;""
                  <span className="text-gray-700">{feature}</span>;"
                </div>;
            </div>;
          </div>;
        </section>;
            </div>;
          </div>;
        </section>;)
                    </div>)}"
                  <h3 className="text - xl font - semibold mb - 3">{benefit.title}</h3>;""
                  <p className="text - gray - 600">{benefit.description}</p>;"
                </div>))}
            </div>;
          </div>;
        </section>)}"
        <section className="py - 16 px - 4 bg - gray - 50">;"
</section>"
          <div className="max - w-7xl mx - auto">;"
</div>"
            <h2 className="text - 3xl font - bold text - center text - gray - 900 mb - 12">;"
</h2>
            </h2>;"
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;"
</div>"
                <div key={index} className="flex items - start">;"
</div>"
                  <div className="w - 2 h - 2 bg - blue - 600 rounded - full mt - 2 mr - 3"></div>;""
                  <span className="text - gray - 700">{feature}</span>;"
                </div>))}
            </div>;
          </div>;
        </section>)}"
        <section className="py - 16 px - 4">;"
</section>"
          <div className="max - w-7xl mx - auto">;"
</div>"
            <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8 text - center">;"
</div>
                <div key={index}>;
</div>"
                  <div className="text - 4xl font - bold text - blue - 600 mb - 2">;"
</div>"
        <section className="py-16 px-4">;"
</section>"
          <div className="max-w-7xl mx-auto">;"
</div>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">;"
</div>
                <div key={index}>;
</div>"
                  <div className="text-4xl font-bold text-blue-600 mb-2">;"
</div>
                  </div>;"
                  <div className="text-gray-600">{stat && stat.label}</div>;"
                </div>;
            </div>;
          </div>;
        </section>;
            </div>;
          </div>;
        </section>;"
      <section className="py-16 px-4 bg-blue-600">;"
</section>"
        <div className="max-w-4xl mx-auto text-center">;"
</div>"
          <h2 className="text-3xl font-bold text-white mb-4">;"
</h2>
          </h2>;"
          <p className="text-xl text-blue-100 mb-8">;"
</p>
          </p>;
          <a;
            href={ctaLink}"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">;"
</a>
          </a>;
        </div>;
      </section>;
    </div>;"
      <section className="py-16 bg-zion-blue-light">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <h2 className="text-2xl font-bold text-white text-center mb-8">"
</h2>
          </h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">"
</div>
              <div;
                key={idx}"
                className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/20 text-center""
              >
</div>"
                  <div className="mb-4 flex justify-center text-zion-cyan">"
</div>
                  </div>
                  </div>"
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>""
                <p className="text-zion-slate-light">{benefit.description}</p>"
              </div>
          </div>
        </div>
      </section>
"
      <section className="py-16 bg-zion-blue">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <h2 className="text-2xl font-bold text-white text-center mb-8">"
</h2>
          </h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">"
</div>
              <Card;
                key={idx}"
                className="bg-zion-blue-dark border-zion-purple/30""
              >
</Card>"
                <CardContent className="pt-6">"
</CardContent>"
                  <p className="text-gray-200 mb-6">"{t.text}"</p>"
                </CardContent>"
                <CardFooter className="border-t border-zion-purple/20 pt-4">"
</CardFooter>"
                  <div className="flex items-center">"
</div>
                      <Image;
                        src={t.avatar}
                        alt={t.name}
                        width={40}
                        height={40}"
                        className="rounded-full mr-4"""
                        loading="lazy""
                      />
</Image>
                    <div>
</div>"
                      <p className="font-semibold text-white">{t.name}</p>""
                        <p className="text-sm text-gray-400">{t.role}</p>"
                    </div>
                  </div>
                </CardFooter>
              </Card>
          </div>
        </div>
      </section>
"
      <section className="py-12 bg-zion-blue-dark text-center">"
</section>
        <Button;"
          size="lg"""
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white""
          asChild;
        >
</Button>
          <a href={ctaLink}>{ctaText}</a>
          <a href={ctaLink}>{ctaText}</a>
        </Button>
      </section>
    </div>
                  </div>;"
                  <div className="text - gray - 600">{stat.label}</div>;"
                </div>))}
            </div>;
          </div>;
        </section>)}"
      <section className="py - 16 px - 4 bg - blue - 600">;"
</section>"
        <div className="max - w-4xl mx - auto text - center">;"
</div>"
          <h2 className="text - 3xl font - bold text - white mb - 4">;"
</h2>
          </h2>;"
          <p className="text - xl text - blue - 100 mb - 8">;"
</p>
          </p>;
          <a;
            href={cta_link}"
            className="bg - white text - blue - 600 px - 8 py - 3 rounded - lg font - semibold hover:bg - gray - 100 transition - colors inline - block";"
          >;
</a>
          </a>;
        </div>;
      </section>;
    </div>);"