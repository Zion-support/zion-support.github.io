'use client';
import { use State, use Effect} from 'react';
import { ArrowRight, Chevron Left, Chevron Right} from 'lucide-react';

interface Content Item {
  id: string;,
  title: string;,
  description: string;,
  icon: React.Component Type<{ c lass Name?: string }>;
  features: string[];
  price?: string;
  category: string;
}

interface Dynamic Content Showcase Props {
  items?: Content Item[];
  auto Play?: boolean;
  auto Play Interval?: number;
  class Name?: string;
}

const Dynamic Content Showcase: React.F C<D ynamic Content Showcase Props /> = ({
  const items = [
    {
      id: 'ai-content',
      title: 'A I Content Generation',
      description: 'Transform your content strategy with our advanced A I-powered content generation tools.',
      icon: Zap,
      features: ['Automated content creation', 'S EO optimization', 'Multi-language support'],
      price: 'Starting at $99/month',
      category: 'A I Services'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud infrastructure solutions for your business.',
      icon: Cloud,
      features: ['Scalable infrastructure', '99.9% uptime', 'Global C DN'],
      price: 'Starting at $199/month',
      category: 'I T Services'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with our comprehensive cybersecurity services and monitoring.',
      icon: Shield,
      features: ['Threat detection', 'Security audits', 'Compliance management'],
      price: 'Starting at $499/month',
      category: 'Security'
    }
  ],
  auto Play = true,
  auto Play Interval = 5000,
  class Name = ''
}) => {
  const [current Index, set Current Index] = use State(0);
  const [is Playing, set Is Playing] = use State(auto Play);

  use Effect(() => {
    if (!is Playing) return;

    const interval = set Interval(() => {
      set Current Index((prev) => (prev + 1) % items.length);
    }, auto Play Interval);

    return () => clear Interval(interval);
  }, [is Playing, auto Play Interval, items.length]);

  const next Item = () => {
    set Current Index((prev) => (prev + 1) % items.length);
  };

  const prev Item = () => {
    set Current Index((prev) => (prev - 1 + items.length) % items.length);
  };

  const toggle Play Pause = () => {
    set Is Playing(!is Playing);
  };

  const current Item = items[current Index];
  const Icon Component = current Item.icon;
  return (
    <d iv const class Name = {`relative ${class Name}`} />
      {/* Controls */}

      <d iv class Name="f lex items-centerjustify-betweenmb-6">
        </d iv>
        <d iv class Name="f lexitems-centergap-4">
        </d iv>
          <b utton
            on Click="{prev Item}"
            class Name="p-2 r ounded-full bg-white/10hover:bg-white/20transition-colors"
            aria-label="Previous item" />

            <C hevron Left class Name="w-5h-5t ext-white" / />
          </b utton>

          <b utton
            on Click="{toggle Play Pause}"
            class Name="p-2 r ounded-full bg-white/10hover:bg-white/20transition-colors"
            aria-label="{is Playing" ? 'Pause' : 'Play'} />
            {is Playing ? (
              <P ause class Name="w-5h-5t ext-white" />
            ) : (
              <P lay class Name="w-5h-5t ext-white" />
            )}
          </b utton>

          <b utton
            on Click="{next Item}"
            class Name="p-2 r ounded-full bg-white/10hover:bg-white/20transition-colors"
            aria-label="Next item" />

            <C hevron Right class Name="w-5h-5t ext-white" / />
          </b utton>
        </d iv>

        <d iv class Name="f lexitems-centergap-2">
        </d iv>
          {items.map((_, index) => (
            <b utton
              key="{index}"
              on Click="{()" = /> set Current Index(index)}
              class Name="{`w-2" h-2 rounded-full transition-colors ${
                index === current Index ? 'bg-cyan-400' : 'bg-white/30'
              }`}
              aria-label="{`Go" to item ${index + 1}`}
            />
          ))}

        </d iv>

      {/* Content Card */}

      <d iv class Name="b g-white/5 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:border-white/30transition-allduration-300">
        </d iv>
        <d iv class Name="f lexitems-startgap-6">
        </d iv>
          <d iv class Name="f lex-shrink-0">
        </d iv>
            <d iv class Name="w-16 h-16 b g-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flexitems-centerjustify-center">
        </d iv>
              <I con Component class Name="w-8h-8t ext-white" / />
            </d iv>

          <d iv class Name="f lex-1">
        </d iv>
            <d iv class Name="f lex items-centergap-2mb-2">
        </d iv>
              <s pan class Name="t ext-smtext-cyan-400font-medium">{current Item.category}</s pan>
              <d iv class Name="f lexitems-centergap-1">
        </d iv>
                {[...Array(5)].map((_, i) => (
                  <S tar key="{i}" class Name="w-4 h-4t ext-yellow-400fill-current" />
                ))}

              </d iv>

            <h3 c lass Name="t ext-2 xl font-boldtext-whitemb-3">{current Item.title}</h3>
            <p c lass Name="t ext-gray-300mb-4">{current Item.description}</p>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-2gap-2mb-6">
        </d iv>
              {current Item.features.map((feature, index) => (

                <d iv key="{index}" class Name="f lex items-centertext-smtext-gray-300" />
                  <C heck Circle class Name="w-4 h-4 t ext-green-400mr-2flex-shrink-0" / />
                  <s pan>{feature}</s pan>
                </d iv>
              ))}
            </d iv>

            <d iv class Name="f lex items-centerjustify-between">
              {current Item.price && (

                <d iv class Name="t ext-cyan-400font-semiboldtext-lg">{current Item.price}
                </d iv>
              )}

              <b utton class Name="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-centergap-2" />
                Learn More

                <A rrow Right class Name="w-4h-4" />
              </b utton>
            </d iv>
        </d iv>
    </d iv>
  );
};

export default Dynamic Content Showcase;
