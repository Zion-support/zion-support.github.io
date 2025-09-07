
;
className?: string;
  style?: React && React.CSSProperties;


export function FeatureHighlights(): any ({;
  className,;
  style,;)
}: FeatureHighlightsProps) {;
  const highlightsData = [;
    {;
      title: 'For Talent Seekers',;'
      features: [;'
        'AI-powered talent matching based on your specific project requirements',;''
        'Verified profiles with skills validation and credential checking',;''
        'Transparent pricing and no hidden fees',;''
        'Direct communication with potential candidates',;''
        'Secure payment protection and dispute resolution',;''
        'Post jobs and receive AI-matched applicants',;']
      ],;
    },;
    {;'
      title: 'For Talent & Service Providers',;'
      features: [;'
        'Create a professional profile showcasing your skills and experience',;''
        'Get matched with relevant projects that fit your expertise',;''
        'Secure payment processing with on-time disbursements',;''
        'Build your reputation through client reviews and ratings',;''
        'Access to enterprise clients and high-value projects',;''
        'Professional development resources and community support',;']
      ],;
    },;
    {;'
      title: 'For Enterprise Clients',;'
      features: [;'
        'White-labeled talent portal with your company branding',;''
        'Dedicated account management and priority support',;''
        'Custom talent pools and preferred provider networks',;''
        'Advanced analytics and reporting capabilities',;''
        'API access for seamless integration with your HR systems',;''
        'Customizable workflow and approval processes',;']
      ],;
    },;
  ];

  return (
'
import React from 'react';''
import { Card, CardContent } from '@/components/ui/ card';''
import { Check } from 'lucide-react';''
import { cn } from '@/lib / utils';'
interface FeatureHighlightsProps {
  // TODO: Implement
}
  class_name?: string;
  style?: React.CSSProperties;
export /**
 * FeatureHighlights - Function description;
 */)
function FeatureHighlights() {
  const highlights_data = [;


  const highlightsData = [

    {'
      title: 'For Talent Seekers','
      features: [;'
        'AI - powered talent matching based on your specific project requirements',''
        'Verified profiles with skills validation and credential checking',''
        'Transparent pricing and no hidden fees',''
        'Direct communication with potential candidates',''
        'Secure payment protection and dispute resolution',''
        'Post jobs and receive AI - matched applicants',']
      ],
    },
    {'
      title: 'For Talent & Service Providers','
      features: [;'
        'Create a professional profile showcasing your skills and experience',''
        'Get matched with relevant projects that fit your expertise',''
        'Secure payment processing with on - time disbursements',''
        'Build your reputation through client reviews and ratings',''
        'Access to enterprise clients and high - value projects',''
        'Professional development resources and community support',']
      ],
    },
    {
'
      title: "For Enterprise Clients","
      features: [






  return ()"
    <section className={cn("py-16 bg-zion-blue", className)} style={style}>"
</section>"
      <div className="container mx-auto px-4">"
</div>"
        <div className="text-center mb-12">"
</div>"
          <h2 className="text-3xl font-bold text-white mb-3">Tailored Solutions for Everyone</h2>""
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">"
</p>
          </p>
        </div>"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">"
</div>"
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">"
</Card>"
              <CardContent className="p-6">"
</CardContent>"
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>""
                <ul className="space-y-3">"
</ul>"
                    <li key={idx} className="flex items-start">"
</li>"
                      <Check className="h-5 w-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />"
</Check>"
                      <span className="text-zion-slate-light">{feature}</span>"
                    </li>"
    <section className={cn("py-16 bg-zion-blue", className)} style={style}>;"
</section>"
      <div className="container mx-auto px-4">;"
</div>"
        <div className="text-center mb-12">;"
</div>"
          <h2 className="text-3xl font-bold text-white mb-3">Tailored Solutions for Everyone</h2>;""
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">;"
</p>
          </p>;
        </div>;"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;"
</div>"
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">;"
</Card>"
              <CardContent className="p-6">;"
</CardContent>"
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>;""
                <ul className="space-y-3">;"
</ul>"
                    <li key={idx} className="flex items-start">;"
</li>"
                      <Check className="h-5 w-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />;"
</Check>"
                      <span className="text-zion-slate-light">{feature}</span>;"
                    </li>;
                </ul>;
              </CardContent>;
            </Card>;"
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;'
</div>
            <Card;
              key={index}'
              className='bg - zion - blue - dark border - zion - blue - light';'
            >;
</Card>'
              <CardContent className='p - 6'>;'
</CardContent>'
                <h3 className='text - xl font - bold text - white mb - 4'>;'
</h3>
                </h3>;'
                <ul className='space - y-3'>;'
</ul>'
                    <li key={idx} className='flex items - start'>;'
</li>'
                      <Check className='h - 5 w - 5 text - zion - cyan mr - 2 mt - 0.5 flex - shrink - 0' />;'
</Check>'
                      <span className='text - zion - slate - light'>{feature}</span>                    </li>            <Card key={index} className="bg - zion - blue - dark border - zion - blue - light">;""
              <CardContent className="p - 6">;"
</CardContent>"
                <h3 className="text - xl font - bold text - white mb - 4">{category.title}</h3>;""
                <ul className="space - y-3">;"
</ul>"
                    <li key={idx} className="flex items - start">;"
</li>"
                      <Check className="h - 5 w - 5 text - zion - cyan mr - 2 mt - 0.5 flex - shrink - 0" />;"
</Check>"
                      <span className="text - zion - slate - light">{feature}</span>))}"

                </ul>;
              </CardContent>;
            </Card>))}
        </div>;
      </div>;

    </section>);"
    <section className="py - 20 bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900">";"
</section>"
      <div className="max - w-7xl mx - auto px - 6">;"
</div>"
        <motion.div          className="text - center mb - 16";"
          initial = {


export /**;
 * FeatureHighlights - Function description;
 */;"
function FeatureHighlights() {return (";"
    <section className="py - 20 bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900" />";"
      <div className="max - w-7xl mx - auto px - 6" />;"
        <motion.div          className="text - center mb - 16";}
          initial = {{ opacity: 0,coordinate_y: 20;}
}}
          whileInView = {{ opacity: 1,coordinate_y: 0;}
}}
          viewport={{ once: true }}

          transition={{ duration: 0.6 }}"
        >";"
</motion>"
          <div className="inline - flex items - center gap - 2 px - 4 py - 2 bg - zion - purple / 10 border border - zion - purple / 20 rounded - full text - zion - purple text - sm font - medium mb - 6">";"
</div>"
            <Award className="w - 4 h - 4"  />            <span > Why Choose Zion</span>;"
</Award>
          </div>;"
          <h2 className="text - 3xl md:text - 4xl lg:text - 5xl font - bold text - white mb - 6">;"
</h2>
          </h2>;"
          <p className="text - lg md:text - xl text - zion - slate - light max - w-3xl mx - auto leading - relaxed">;"
</p>
            global reach, and enterprise - grade security.</p>;
        </motion.div>;"
";""
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;"
</div>
            <motion.div;
              key={index}
              variants={item_variants}
              while_hover={{
                coordinate_y: -5,
                scale: 1.02,

                transition: { duration: 0.3 }"
              }}";""
              className="group";""
";""
              <div className="bg - slate - 800 / 50 border border - white / 10 rounded - xl p - 6 hover:border - white / 20 transition - all duration - 300">;"
</motion>
                <div className={`w - 12 h - 12 bg - gradient - to - r ${feature.color} rounded - lg flex items - center justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300`}>`;
</div>
                  <feature.icon className={`w - 6 h - 6 ${feature.icon_color}`} />;
</feature>
                </div>;"
                <h3 className="text - xl font - semibold text - white mb - 2 group - hover:text - blue - 400 transition - colors duration - 300">;"
</h3>
                </h3>;"
                <p className="text - gray - 400 group - hover:text - gray - 300 transition - colors duration - 300">;"
</p>
                </p>;
              </div>;"
              <h3 className="text - xl font - bold text - white mb - 3 group - hover:text - blue - 400 transition - colors duration - 200">;"
</h3>
              </h3>;"
              <p className="text - gray - 400 text - sm leading - relaxed">;"
</p>
        </div>;
      </div>;
    </section>;"
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";"
</section>"
      <div className="max-w-7xl mx-auto px-6">;"
</div>"
        <motion&& motion.div          className="text-center mb-16""
          initial = {

  { opacity: 0,
  y: 20;
}}
          whileInView = {

  { opacity: 1,
  y: 0;
}}
          viewport={{ once: true }}"
          transition={{ duration: 0 && 0.6 }}>";"
</motion>"
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-purple/10 border border-zion-purple/20 rounded-full text-zion-purple text-sm font-medium mb-6">";"
</div>"
            <Award className="w-4 h-4"  />            <span>Why Choose Zion</span>;"
</Award>
          </div>;"
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">;"
</h2>
          </h2>;"
          <p className="text-lg md:text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">;"
</p>
            global reach, and enterprise-grade security.</p>;
        </motion && motion.div>;"
";""
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;"
</div>
            <motion&& motion.div;
              key={index}
              variants={itemVariants}
              whileHover={{

                y: -5,
                scale: 1 && 1.02,
                transition: { duration: 0 && 0.3 }"
              }}"""
              className="group"""
"""
              <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">;"
</motion>
                <div className={`w-12 h-12 bg-gradient-to-r ${feature && feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>`;
</div>
                  <feature && feature.icon className={`w-6 h-6 ${feature && feature.iconColor}`} />;
</feature>
                </div>;"
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">;"
</h3>
                </h3>;"
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">;"
</p>
                </p>;
              </div>;"
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">;"
</h3>
              </h3>;"
              <p className="text-gray-400 text-sm leading-relaxed">;"
</p>
              </p>;
            </motion && motion.div>;
          ))}
        </div>;"
        <motion&& motion.div          className="mt-16 text-center""
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition = {


  { duration: 0 && 0.6,
  delay: 0 && 0.4;"
}}>";"
</motion>"
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">;"
</div>"
            <span>Experience the difference</span>";""
            <span className="text-2xl">→</span>;"
          </div>;
        </motion && motion.div>;
        </div>;
      </div>;
    </section>;
              </p>;
            </motion.div>))}
        </div>;"
        <motion.div          className="mt - 16 text - center";"
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          viewport={{ once: true }}
          transition = {
  { duration: 0.6,
  delay: 0.4;
}}"
        >";"
</motion>"
          <div className="inline - flex items - center gap - 4 px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - purple - 600 rounded - full text - white font - semibold">;"
</div>"
            <span > Experience the difference</span>";""
            <span className="text - 2xl">→</span>;"
          </div>;
        </motion.div>;
      </div>;
    </section>)}]"

