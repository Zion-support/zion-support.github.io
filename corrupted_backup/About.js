import { Header } from "@/components/Header";""
import { Footer } from "@/components/Footer";""
import { SEO } from "@/components/SEO";""
import { GradientHeading } from "@/components/GradientHeading";"
export default function About() {
    return ("
        <div className="min-h-screen bg-background p-8">"
</div>"
            <div className="max-w-4xl mx-auto">"
</div>"
                <h1 className="text-4xl font-bold text-foreground mb-6">About Zion Tech Group</h1>""
                <p className="text-lg text-muted-foreground mb-4">"
</p>
                </p>"
                <p className="text-muted-foreground">"
</p>
                </p>
            </div>
        </div>
      </main>
      <Footer />
</Footer>)
    </>);
}"
import { Users, Target, Globe, Award, Shield, Lightbulb } from 'lucide-react';'
const About = () => {
    const values = [
        {
            icon: Innovation,'
            title: "Innovation",""
            description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches to solve complex challenges.""
        },
        {
            icon: Excellence,"
            title: "Excellence",""
            description: "We maintain the highest standards in everything we do, from code quality to customer service and project delivery.""
        },
        {
            icon: Collaboration,"
            title: "Collaboration",""
            description: "We believe in the power of teamwork and partnerships to achieve extraordinary results that benefit everyone involved.""
        },
        {
            icon: Integrity,"
            title: "Integrity",""
            description: "We operate with honesty, transparency, and ethical practices in all our business relationships and operations.""
        }]
    ];
    const milestones = [
        {"
            year: "2025",""
            title: "Global Expansion",""
            description: "Expanded operations to serve clients across North America, Europe, and Asia-Pacific regions.""
        },
        {"
            year: "2024",""
            title: "AI Breakthrough",""
            description: "Launched revolutionary AI autonomous business platform, transforming how companies operate.""
        },
        {"
            year: "2023",""
            title: "Quantum Innovation",""
            description: "Developed cutting-edge quantum computing solutions for enterprise applications.""
        },
        {"
            year: "2022",""
            title: "Company Founded",""
            description: "Zion Tech Group was established with a vision to revolutionize technology solutions.""
        }]
    ];
    const stats = ["
        { number: "500+", label: "Projects Completed", icon: Target },""
        { number: "50+", label: "Team Members", icon: Users },""
        { number: "25+", label: "Countries Served", icon: Globe },""
        { number: "99%", label: "Client Satisfaction", icon: Award }"]
    ];"
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
</div>"
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">"
</section>"
        <div className="max-w-7xl mx-auto text-center">"
</div>"
          <div className="mb-8">"
</div>"
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">"
</div>"
              <Users className="w-4 h-4 mr-2"/>"
</Users>
            </div>"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
</h1>"
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Technology</span>"
            </h1>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">"
</p>
            </p>
          </div>
        </div>
      </section>"
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
</section>"
        <div className="max-w-7xl mx-auto">"
</div>"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">"
</div>"
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">"
</div>"
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">"
</div>"
                <Target className="w-8 h-8 text-white"/>"
</Target>
              </div>"
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>""
              <p className="text-lg text-gray-300">"
</p>
              </p>
            </div>
            "
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">"
</div>"
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">"
</div>"
                <Lightbulb className="w-8 h-8 text-white"/>"
</Lightbulb>
              </div>"
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>""
              <p className="text-lg text-gray-300">"
</p>"
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">"
</div>"
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">"
</section>"
        <div className="max-w-7xl mx-auto">"
</div>"
          <div className="text-center">"
</div>"
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">"
</h1>
            </h1>"
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
</p>
            </p>
          </div>
        </div>
      </section>"
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">"
</section>"
        <div className="max-w-7xl mx-auto">"
</div>"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">"
</div>
            <div>
</div>"
              <div className="flex items-center mb-6">"
</div>"
                <div className="p-3 bg-blue-600/20 rounded-lg mr-4">"
</div>"
                  <LightBulbIcon className="h-8 w-8 text-blue-400"/>"
</LightBulbIcon>
                </div>"
                <h2 className="text-3xl font-bold">Our Mission</h2>"
              </div>"
              <p className="text-lg text-gray-300 mb-6">"
</p>
              </p>"
              <p className="text-lg text-gray-300">"
</p>
              </p>
            </div>
            <div>
</div>"
              <div className="flex items-center mb-6">"
</div>"
                <div className="p-3 bg-purple-600/20 rounded-lg mr-4">"
</div>"
                  <RocketLaunchIcon className="h-8 w-8 text-purple-400"/>"
</RocketLaunchIcon>
                </div>"
                <h2 className="text-3xl font-bold">Our Vision</h2>"
              </div>"
              <p className="text-lg text-gray-300 mb-6">"
</p>
              </p>"
              <p className="text-lg text-gray-300">"
</p>
              </p>
            </div>
          </div>
        </div>
      </section>"
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
</section>"
        <div className="max-w-7xl mx-auto">"
</div>"
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">"
</h2>
          </h2>"
          <div className="max-w-4xl mx-auto">"
</div>"
            <div className="space-y-8">"
</div>"
              <div className="flex items-start space-x-6">"
</div>"
                <div className="bg-blue-600/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">"
</div>"
                  <span className="text-xl font-bold text-blue-400">2019</span>"
                </div>
                <div>
</div>"
                  <h3 className="text-xl font-semibold mb-2">Foundation</h3>""
                  <p className="text-gray-300">"
</p>
                  </p>
                </div>
              </div>"
              <div className="flex items-start space-x-6">"
</div>"
                <div className="bg-green-600/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">"
</div>"
                  <span className="text-xl font-bold text-green-400">2021</span>"
                </div>
                <div>
</div>"
                  <h3 className="text-xl font-semibold mb-2">AI Breakthrough</h3>""
                  <p className="text-gray-300">"
</p>
                  </p>
                </div>
              </div>"
              <div className="flex items-start space-x-6">"
</div>"
                <div className="bg-purple-600/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">"
</div>"
                  <span className="text-xl font-bold text-purple-400">2023</span>"
                </div>
                <div>
</div>"
                  <h3 className="text-xl font-semibold mb-2">Quantum Expansion</h3>""
                  <p className="text-gray-300">"
</p>
                  </p>
                </div>
              </div>"
              <div className="flex items-start space-x-6">"
</div>"
                <div className="bg-orange-600/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">"
</div>"
                  <span className="text-xl font-bold text-orange-400">2024</span>"
                </div>
                <div>
</div>"
                  <h3 className="text-xl font-semibold mb-2">Global Reach</h3>""
                  <p className="text-gray-300">"
</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>"
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">"
</section>"
        <div className="max-w-7xl mx-auto">"
</div>"
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">"
</h2>
          </h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
</div>"
            <div className="text-center">"
</div>"
              <div className="bg-blue-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">"
</div>"
                <LightBulbIcon className="h-10 w-10 text-blue-400"/>"
</LightBulbIcon>
              </div>"
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>""
              <p className="text-gray-300">"
</p>
              </p>
            </div>"
            <div className="text-center">"
</div>"
              <div className="bg-green-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">"
</div>"
                <ShieldCheckIcon className="h-10 w-10 text-green-400"/>"
</ShieldCheckIcon>
              </div>"
              <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>""
              <p className="text-gray-300">"
</p>
              </p>
            </div>"
            <div className="text-center">"
</div>"
              <div className="bg-purple-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">"
</div>"
                <UserGroupIcon className="h-10 w-10 text-purple-400"/>"
</UserGroupIcon>
              </div>"
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>""
              <p className="text-gray-300">"
</p>
              </p>
            </div>"
            <div className="text-center">"
</div>"
              <div className="bg-orange-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">"
</div>"
                <GlobeAltIcon className="h-10 w-10 text-orange-400"/>"
</GlobeAltIcon>
              </div>"
              <h3 className="text-xl font-semibold mb-3">Global Impact</h3>""
              <p className="text-gray-300">"
</p>
              </p>
            </div>"
            <div className="text-center">"
</div>"
              <div className="bg-cyan-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">"
</div>"
                <ChartBarIcon className="h-10 w-10 text-cyan-400"/>"
</ChartBarIcon>
              </div>"
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>""
              <p className="text-gray-300">"
</p>
              </p>
            </div>"
            <div className="text-center">"
</div>"
              <div className="bg-pink-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">"
</div>"
                <RocketLaunchIcon className="h-10 w-10 text-pink-400"/>"
</RocketLaunchIcon>
              </div>"
              <h3 className="text-xl font-semibold mb-3">Future-Focused</h3>""
              <p className="text-gray-300">"
</p>
              </p>
            </div>
          </div>
        </div>
      </section>"
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
</section>"
        <div className="max-w-7xl mx-auto">"
</div>"
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">"
</h2>
          </h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
</div>"
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">"
</div>"
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">"
</div>"
                <span className="text-2xl font-bold text-white">K</span>"
              </div>"
              <h3 className="text-xl font-semibold mb-2">Kleber</h3>""
              <p className="text-blue-400 mb-3">Founder & CEO</p>""
              <p className="text-gray-300 text-sm">"
</p>
              </p>
            </div>"
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">"
</div>"
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">"
</div>"
                <span className="text-2xl font-bold text-white">A</span>"
              </div>"
              <h3 className="text-xl font-semibold mb-2">AI Research Team</h3>""
              <p className="text-purple-400 mb-3">AI & Machine Learning</p>""
              <p className="text-gray-300 text-sm">"
</p>
              </p>
            </div>"
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">"
</div>"
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center">"
</div>"
                <span className="text-2xl font-bold text-white">Q</span>"
              </div>"
              <h3 className="text-xl font-semibold mb-2">Quantum Team</h3>""
              <p className="text-green-400 mb-3">Quantum Computing</p>""
              <p className="text-gray-300 text-sm">"
</p>
              </p>
            </div>
          </div>
        </div>
      </section>"
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">"
</section>"
        <div className="max-w-7xl mx-auto">"
</div>"
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">"
</h2>
          </h2>"
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">"
</div>
            <div>
</div>"
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">50+</div>""
              <p className="text-gray-300">Global Clients</p>"
            </div>
            <div>
</div>"
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">100+</div>""
              <p className="text-gray-300">AI Solutions</p>"
            </div>
            <div>
</div>"
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">25+</div>""
              <p className="text-gray-300">Quantum Services</p>"
            </div>
            <div>
</div>"
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">99.9%</div>""
              <p className="text-gray-300">Uptime</p>"
            </div>
          </div>
        </div>
      </section>"
      <section className="py-16 px-4 sm:px-6 lg:px-8">"
</section>"
        <div className="max-w-4xl mx-auto text-center">"
</div>"
          <h2 className="text-3xl md:text-4xl font-bold mb-6">"
</h2>
          </h2>"
          <p className="text-xl text-gray-300 mb-8">"
</p>
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>"
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg">"
</Link>
            </Link>"
            <Link to="/careers" className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">"
</Link>
            </Link>
          </div>
        </div>
      </section>
    </div>
  <Lightbulb className={className}/>
</Lightbulb>
  <Award className={className}/>
</Award>
  <Users className={className}/>
</Users>
  <Shield className={className}/>
</Shield>)
    </></></></></></>);
};
"