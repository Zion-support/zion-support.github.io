
import React from 'react',;''
import Head from 'next/head',;''
import Card from '../components/ui/Card',;''
import Button from '../components/ui/Button',;''
import { Brain, Zap, Shield, BarChart3, Users, Clock, CheckCircle, Star, ArrowRight, Play, Download, Code, Globe, Lock, Sparkles } from 'lucide-react',;'
;
export default function AIContentGeneratorPage() {;
  const features = [;
    {;'
      icon:<Brain className="w-8 h-8 text-white" />,;"
</Brain>"
      icon:<Zap className="w-8 h-8 text-white" />,;"
</Zap>"
      icon:<Shield className="w-8 h-8 text-white" />,;"
</Shield>"
      icon:<BarChart3 className="w-8 h-8 text-white" />,;"
</BarChart3>"
      icon:<Users className="w-8 h-8 text-white" />,;"
</Users>"
      icon:<Clock className="w-8 h-8 text-white" />,;"
</Clock>
    <>;
      <Head>;
</Head>
        <title>AI Content Generator | Zion Tech Group - Advanced AI-Powered Content Creation</title>;"
        <meta name="description" content="Generate high-quality, SEO-optimized content in seconds with our advanced AI content generator. Support for 50+ languages, plagiarism-free writing, and real-time generation." />;"
</meta>"
        <meta property="og:title" content="AI Content Generator | Zion Tech Group" />;"
</meta>"
        <meta property="og:description" content="Advanced AI-powered content creation with real-time generation, SEO optimization, and multi-language support." />;"
</meta>"
        <meta name="twitter:card" content="summary_large_image" />;"
</meta>
      </Head>;"
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">;"
</section>"
        <div className="absolute inset-0">;"
</div>]"
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />;"
</div>"
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />;"
</div>
        </div>;"
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;"
</div>"
          <div className="mb-8">;"
</div>"
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">;"
</div>"
              <Sparkles className="w-4 h-4 mr-2" />;"
</Sparkles>
            </div>;
          </div>;"
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white leading-tight">;"
</h1>
          </h1>;"
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">;"
</p>
          </p>;"
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">;"
</div>
            <Button;"
              href="#pricing";""
              size="lg";""
              className="bg-purple-600 hover:bg-purple-700 shadow-2xl shadow-purple-500/25";"
            >;
</Button>"
              <ArrowRight className="w-5 h-5 ml-2" />;"
</ArrowRight>
            </Button>;
            <Button;"
              href="#demo";""
              variant="outline";""
              size="lg";""
              className="border-white/20 hover:border-white/40 hover:bg-white/5";"
            >;
</Button>"
              <Play className="w-5 h-5 mr-2" />;"
</Play>
            </Button>;
          </div>;"
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">;"
</div>"
            <div className="text-center">;"
</div>"
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400">50+</div>;""
              <div className="text-gray-400">Languages</div>;"
            </div>;"
            <div className="text-center">;"
</div>"
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400">10M+</div>;""
              <div className="text-gray-400">Words Generated</div>;"
            </div>;"
            <div className="text-center">;"
</div>"
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400">99.9%</div>;""
              <div className="text-gray-400">Uptime</div>;"
            </div>;"
            <div className="text-center">;"
</div>"
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400">24/7</div>;""
              <div className="text-gray-400">Support</div>;"
            </div>;
          </div>;
        </div>;
      </section>;"
      <section className="py-24 bg-gray-900 relative overflow-hidden">;"
</section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;"
</div>"
          <div className="text-center mb-20">;"
</div>"
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;"
</h2>
            </h2>;"
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;"
</p>
            </p>;
          </div>;"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;"
</div>
              <Card;
                key={index}"
                className="text-center group bg-gray-800/50 border border-gray-700 hover:border-purple-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1";"
                style={{ animationDelay:`${(index * 0.1) + 0.2}s` }}
              >;
</Card>"
                <div className="relative">;"
</div>
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>;
</div>
                  </div>;
                </div>;"
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">;"
</h3>
                </h3>;"
                <p className="text-gray-400 leading-relaxed">;"
</p>

                </p>;
              </Card>;
          </div>;
        </div>;

      </section>;"
      <section className="py-24 bg-black relative overflow-hidden">;"
</section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;"
</div>"
          <div className="text-center mb-20">;"
</div>"
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;"
</h2>
            </h2>;"
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;"
</p>
            </p>;
          </div>;"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;"
</div>
              <Card;
                key={index}"
                className="group border border-gray-700 hover:border-purple-500/30 hover:bg-gray-900/80 transition-all duration-300";"
              >;
</Card>"
                <div className="flex items-start space-x-4">;"
</div>"
                  <div className="text-4xl">{useCase.icon}</div>;""
                  <div className="flex-1">;"
</div>"
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">;"
</h3>
                    </h3>;"
                    <p className="text-gray-400 mb-4 leading-relaxed">;"
</p>
                    </p>;"
                    <div className="grid grid-cols-2 gap-2">;"
</div>"
                        <div key={exampleIndex} className="flex items-center text-sm text-gray-300">;"
</div>"
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />;"
</CheckCircle>

                        </div>;
                    </div>;
                  </div>;
                </div>;
              </Card>;
          </div>;
        </div>;

      </section>;"
      <section id="pricing" className="py-24 bg-gray-900 relative overflow-hidden">;"
</section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;"
</div>"
          <div className="text-center mb-20">;"
</div>"
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;"
</h2>
            </h2>;"
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;"
</p>
            </p>;
          </div>;"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;"
</div>
              <Card;
                key={index}"
                className={`relative group ${plan.popular ? 'ring-2 ring-purple-500 scale-105' :''} border ${plan.color} hover:border-purple-500/50 transition-all duration-300`}'
              >;
</Card>'
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;"
</div>"
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">;"
</span>
                    </span>;
                  </div>;"
                <div className="text-center mb-8">;"
</div>"
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;""
                  <div className="text-4xl font-bold text-white mb-2">;"
</div>"
                    {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>;"
                  </div>;"
                  <p className="text-gray-400">{plan.description}</p>;"
                </div>;"
                <ul className="space-y-4 mb-8">;"
</ul>"
                    <li key={featureIndex} className="flex items-center text-gray-300">;"
</li>"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;"
</CheckCircle>

                    </li>;
                </ul>;

                <Button;"
                  href="/contact";"
                  className={`w-full ${plan.buttonColor} text-white`}"
                  size="lg";"
                >;
</Button>"
                  <ArrowRight className="w-5 h-5 ml-2" />;"
</ArrowRight>

                </Button>;
              </Card>;
          </div>;
        </div>;

      </section>;"
      <section className="py-24 bg-black relative overflow-hidden">;"
</section>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;"
</div>"
          <div className="text-center mb-20">;"
</div>"
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;"
</h2>
            </h2>;"
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;"
</p>
            </p>;
          </div>;"
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">;"
</div>
              <Card;
                key={index}"
                className="text-center group border border-gray-700 hover:border-purple-500/30 hover:bg-gray-900/80 transition-all duration-300";"
              >;
</Card>"
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">;"
</div>
                </div>;"
                <h3 className="font-semibold text-white mb-2">{integration.name}</h3>;""
                <p className="text-sm text-gray-400">{integration.description}</p>;"

              </Card>;
          </div>;
        </div>;

      </section>;"
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">;"
</section>"
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />;"
</div>"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">;"
</div>"
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">;"
</h2>
          </h2>;"
          <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">;"
</p>
          </p>;"
          <div className="flex flex-col sm:flex-row gap-6 justify-center">;"
</div>
            <Button;"
              href="/contact";""
              variant="secondary";""
              size="lg";""
              className="bg-white text-purple-600 hover:bg-gray-100 shadow-2xl";"
            >;
</Button>"
              <ArrowRight className="w-5 h-5 ml-2" />;"
</ArrowRight>
            </Button>;
            <Button;"
              href="#demo";""
              variant="outline";""
              size="lg";""
              className="border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl";"
            >;
</Button>"
              <Play className="w-5 h-5 mr-2" />;"
</Play>

            </Button>;
          </div>;
        </div>;
      </section>;
    </>;
  );
}
"