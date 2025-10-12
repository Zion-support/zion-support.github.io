'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Content Promotion Banner Props {
  title?: string;
  subtitle?: string;
  features?: string[];
  button Text?: string;
  on Button Click?: () => void;
  variant?: 'default' | 'premium' | 'limited';
}

const Content Promotion Banner: React.F C<C ontent Promotion Banner Props /> = ({
  const title = "Unlock Premium Features",
  subtitle = "Get access to advanced tools and exclusive content",
  features = [
    "Advanced Analytics",
    "Priority Support",
    "Custom Integrations",
    "24/7 Monitoring"
  ],
  button Text = "Upgrade Now",
  on Button Click,
  variant = 'default'
}) => {
  const get Variant Styles = () => {
    switch (variant) {
      case 'premium':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'limited':
        return 'bg-gradient-to-r from-red-600 to-orange-600';
      default: return 'bg-gradient-to-r from-blue-600 to-purple-600';
    }
  };

  return (
    <d iv const class Name = {`relative overflow-hidden rounded-2 xl ${get Variant Styles()} p-8 text-white`} />
      {/* Background Pattern */}

      <d iv class Name="a bsoluteinset-0opacity-10">
        </d iv>
        <d iv class Name="a bsolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparenttransform-skew-x-12">
        </d iv></d iv>

      <d iv class Name="r elativez-10">
        </d iv>
        <d iv class Name="f lex flex-col lg:flex-row items-centerjustify-betweengap-6">
        </d iv>
          <d iv class Name="f lex-1">
        </d iv>
            <h3 c lass Name="t ext-2 xl lg: text-3 xlfont-boldmb-2">{title}</h3>
            <p c lass Name="t ext-lgtext-white/90mb-4">{subtitle}</p>

            <d iv class Name="g rid grid-cols-2gap-2mb-6">
        </d iv>
              {features.map((feature, index) => (

                <d iv key="{index}" class Name="f lexitems-centertext-sm" />
                  <C heck Circle class Name="w-4 h-4m r-2text-green-300" / />
                  <s pan>{feature}</s pan>
                </d iv>
              ))}

            </d iv>

          <d iv class Name="f lex-shrink-0">
        </d iv>
            <b utton
              on Click="{on Button Click}"
              class Name="b g-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-centergap-2" />
              {button Text}

              <A rrow Right class Name="w-4h-4" />
            </b utton>
          </d iv>
      </d iv>
  );
};

export default Content Promotion Banner;
