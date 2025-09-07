import React from 'react',''
import Head from 'next/head',''
import Card from '../components/ui/Card',''
import Button from '../components/ui/Button',''
import { GitBranch, Zap, Shield, BarChart3, Check, Star, GitPullRequest, Cpu } from 'lucide-react','
export default function DevOpsAutomationPage() {
  const features = [
    {'
      icon: <GitBranch className="w-6 h-6" />,"
</GitBranch>"
      icon: <Zap className="w-6 h-6" />,"
</Zap>"
      icon: <Shield className="w-6 h-6" />,"
</Shield>"
      icon: <BarChart3 className="w-6 h-6" />,"
</BarChart3>
    <>
      <Head>
</Head>
        <title>DevOps Automation - Zion Tech Group | Professional CI/CD & Infrastructure Automation</title>"
        <meta name="description" content="Professional DevOps automation platform with CI/CD, infrastructure as code, and security automation. Plans starting at $39/month." />"
</meta>"
        <meta property="og:title" content="DevOps Automation - Zion Tech Group" />"
</meta>"
        <meta property="og:description" content="Professional DevOps automation starting at $39/month. CI/CD pipelines, infrastructure as code, and security automation." />"
</meta>"
        <meta name="twitter:card" content="summary_large_image" />"
</meta>
      </Head>
"
      <div className="min-h-screen bg-black">"
</div>"
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">"
</section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">"
</div>"
            <div className="mb-8">"
</div>"
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">"
</div>"
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />"
</span>
              </div>
            </div>"
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">"
</h1>
            </h1>"
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">"
</p>
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>
              <Button;"
                href="#pricing"""
                variant="primary"""
                size="lg"""
                className="bg-blue-600 hover:bg-blue-700 text-white""
              >
</Button>
              </Button>
              <Button;"
                href="#demo"""
                variant="outline"""
                size="lg"""
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white""
              >
</Button>
              </Button>
            </div>
          </div>
        </section>"
        <section className="py-24 bg-gray-900">"
</section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
            <div className="text-center mb-20">"
</div>"
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">"
</h2>
              </h2>"
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">"
</p>
              </p>
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
</div>
                <Card;
                  key={index}"
                  className="text-center group hover:scale-105 transition-transform duration-300""
                >
</Card>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 ${feature.color}`}>
</div>
                  </div>"
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>""
                  <p className="text-gray-400">{feature.description}</p>"
                </Card>
            </div>;
          </div>;
        </section>;"
        <section className="py-24 bg-gray-800">"
</section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
            <div className="text-center mb-20">"
</div>"
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">"
</h2>
              </h2>"
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">"
</p>
              </p>
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
</div>
                <Card;
                  key={index}"
                  className="text-center group hover:scale-105 transition-transform duration-300""
                >
</Card>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 bg-gradient-to-br ${example.color}`}>
</div>
                  </div>"
                  <h3 className="text-xl font-semibold text-white mb-4">{example.title}</h3>""
                  <p className="text-gray-400">{example.description}</p>"
                </Card>
            </div>;
          </div>;
        </section>;"
        <section id="pricing" className="py-24 bg-gray-900">"
</section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
            <div className="text-center mb-20">"
</div>"
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">"
</h2>
              </h2>"
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">"
</p>
              </p>
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
</div>
                <Card;
                  key={index}
                  className={`relative p-8 ${plan.color} transition-all duration-300 hover:scale-105 ${;"
                    plan.popular ? 'ring-2 ring-blue-500' : '';'
                  }`}
                >
</Card>'
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
</div>"
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">"
</span>
                      </span>
                    </div>"
                  <div className="text-center">"
</div>"
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>""
                    <div className="mb-6">"
</div>"
                      <span className="text-4xl font-bold text-white">{plan.price}</span>""
                      <span className="text-gray-400">{plan.period}</span>"
                    </div>"
                    <p className="text-gray-300 mb-8">{plan.description}</p>""
                    <ul className="text-left space-y-3 mb-8">"
</ul>"
                        <li key={featureIndex} className="flex items-center text-gray-300">"
</li>"
                          <Check className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />"
</Check>
                        </li>;
                    </ul>;
                    <Button;"
                      href={plan.name === 'Enterprise' ? '/contact' : '#signup'}''
                      variant={plan.popular ? 'primary' : 'outline'}''
                      size="lg""
                      className={`w-full ${
                        plan.popular;"
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'''
                          : 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white''
                      }`}
                    >;
</Button>
                    </Button>;
                  </div>;
                </Card>;
            </div>;
          </div>;
        </section>;'
        <section className="py-24 bg-gray-800">"
</section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
            <div className="text-center mb-20">"
</div>"
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">"
</h2>
              </h2>"
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">"
</p>
              </p>
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
</div>"
                <Card key={index} className="p-6">"
</Card>"
                  <div className="text-center mb-6">"
</div>"
                    <h3 className="text-xl font-bold text-white mb-2">{competitor.competitor}</h3>""
                    <div className="flex items-center justify-center mb-2">"
</div>
                        <Star;
                          key={i}
                          className={`w-5 h-5 ${;
                            i < Math.floor(parseFloat(competitor.rating));"
                              ? 'text-yellow-400 fill-current';''
                              : 'text-gray-400';'
                          }`}
                        />;
</Star>
                    </div>'
                    <p className="text-sm text-gray-400">{competitor.rating}</p>"
                  </div>"
                  <div className="mb-4">"
</div>"
                    <p className="text-lg font-semibold text-white mb-1">Pricing: {competitor.pricing}</p>""
                    <p className="text-sm text-gray-400">Repositories: {competitor.repositories}</p>"
                  </div>"
                  <div className="space-y-2">"
</div>
                    <div>
</div>"
                      <p className="text-sm font-medium text-green-400 mb-1">Pros:</p>""
                      <ul className="text-sm text-gray-300 space-y-1">"
</ul>"
                          <li key={proIndex} className="flex items-center">"
</li>"
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />"
</Check>
                          </li>;
                      </ul>
                    </div>
                    <div>
</div>"
                      <p className="text-sm font-medium text-red-400 mb-1">Cons:</p>""
                      <ul className="text-sm text-gray-300 space-y-1">"
</ul>"
                          <li key={conIndex} className="flex items-center">"
</li>"
                            <span className="w-4 h-4 text-red-400 mr-2 flex-shrink-0"></span>"
                          </li>;
                      </ul>;
                    </div>;
                  </div>;
                </Card>;
            </div>;
          </div>;
        </section>;"
        <section className="py-24 bg-gray-900">"
</section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
            <div className="text-center mb-20">"
</div>"
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">"
</h2>
              </h2>
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
</div>"
                <Card key={index} className="p-6">"
</Card>"
                  <div className="flex items-center mb-4">"
</div>"
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />"
</Star>
                  </div>"
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>"
                  <div>
</div>"
                    <p className="font-semibold text-white">{testimonial.name}</p>""
                    <p className="text-sm text-gray-400">{testimonial.role}</p>""
                    <p className="text-sm text-blue-400">{testimonial.company}</p>"
                  </div>
                </Card>
            </div>;
          </div>;
        </section>;"
        <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">"
</section>"
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">"
</div>"
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">"
</h2>
            </h2>"
            <p className="text-xl text-blue-100 mb-12">"
</p>
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>
              <Button;"
                href="#signup"""
                variant="secondary"""
                size="lg"""
                className="bg-white text-blue-600 hover:bg-gray-100""
              >
</Button>
              </Button>
              <Button;"
                href="/contact"""
                variant="outline"""
                size="lg"""
                className="border-white text-white hover:bg-white hover:text-blue-600""
              >
</Button>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )"
        <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">;"
</section>"
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;"
</div>"
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">;"
</h2>
            </h2>;"
            <p className="text-xl text-blue-100 mb-12">;"
</p>
            </p>;"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;"
</div>
              <Button;"
                href="#signup";""
                variant="secondary";""
                size="lg";""
                className="bg-white text-blue-600 hover:bg-gray-100";"
              >;
</Button>
              </Button>;
              <Button;"
                href="/contact";""
                variant="outline";""
                size="lg";""
                className="border-white text-white hover:bg-white hover:text-blue-600";"
              >;
</Button>
              </Button>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
}
;]"