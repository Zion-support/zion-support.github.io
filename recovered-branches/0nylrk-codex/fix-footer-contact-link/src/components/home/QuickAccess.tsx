



import React from "react",""
import { Link } from "react-router-dom","
import {
  // TODO: Implement
}
  ArrowRight,
  Search, 
  Users, 
  Briefcase, 
  Settings, 
  MessageSquare, 
  Smartphone;"
} from "lucide-react","
export function QuickAccess() {
  const quickLinks = [
    {
"
      title: "AI Matcher",""
      description: "Find the perfect match for your project needs",""
      icon: <Search className="h-6 w-6 text-zion-cyan" />,"
</Search>"
      icon: <Search className="h-6 w-6 text-zion-cyan" />"
</Search>"
      icon: <Search className="h-6 w-6 text-zion-cyan" />,"
</Search>"
      icon: <Search className="h-6 w-6 text-zion-cyan" />,"
</Search>"
      icon: <Search className="h-6 w-6 text-zion-cyan" />,"
</Search>"
      icon: <Users className="h-6 w-6 text-zion-purple" />"
</Users>"
      icon: <Briefcase className="h-6 w-6 text-zion-cyan" />"
</Briefcase>"
      icon: <Settings className="h-6 w-6 text-zion-purple" />"
</Settings>"
      icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />"
</MessageSquare>"
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />"
</Smartphone>"
      icon: <Search className="h-6 w-6 text-zion-cyan" />,;"
</Search>"
      icon: <Users className="h-6 w-6 text-zion-purple" />,;"
</Users>"
      icon: <Briefcase className="h-6 w-6 text-zion-cyan" />,;"
</Briefcase>"
      icon: <Settings className="h-6 w-6 text-zion-purple" />,;"
</Settings>"
      icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />,;"
</MessageSquare>"
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />;"
</Smartphone>"
    <section className="py-12 bg-zion-blue-dark">;"
</section>"
      <div className="container mx-auto px-4">;"
</div>"
        <div className="text-center mb-8">;"
</div>"
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">;"
</h2>
          </h2>;"
          <p className="text-zion-slate-light text-lg">;"
</p>
          </p>;
        </div>;"
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">;"
</div>
            <Link;
              key={index} 
              to={link && link.link} "
              className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-4 transition-all duration-300 flex flex-col items-center text-center">;"
</Link>"
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3">;"
</div>
              </div>"
              <h3 className="text-white font-medium mb-1">{link.title}</h3>""
              <p className="text-zion-slate-light text-xs mb-2">{link.description}</p>""
              <div className="flex items-center text-zion-cyan text-xs mt-auto">"
</div>
                <span>Access</span>"
                <ArrowRight className="ml-1 h-3 w-3" />"
</ArrowRight>
              </div>
            </Link>
        </div>;
      </div>;
    </section>;"
      icon: <Search className="h - 6 w - 6 text - zion - cyan" />,"
</Search>"
      icon: <Users className="h - 6 w - 6 text - zion - purple" />,"
</Users>"
      icon: <Briefcase className="h - 6 w - 6 text - zion - cyan" />,"
</Briefcase>"
      icon: <Settings className="h - 6 w - 6 text - zion - purple" />,"
</Settings>"
      icon: <MessageSquare className="h - 6 w - 6 text - zion - cyan" />,"
</MessageSquare>"
      icon: <Smartphone className="h - 6 w - 6 text - zion - purple" />,"
</Smartphone>"
    <section className="py-12 bg-zion-blue-dark">;"
</section>"
      <div className="container mx-auto px-4">;"
</div>"
        <div className="text-center mb-8">;"
</div>"
          <h2 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-2">;"
</h2>
          </h2>;"
          <p className="text-zion-slate-light text-lg">;"
</p>
          </p>;
        </div>;"
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">;"
</div>
            <Link;
              key={index} 
              to={link && link.link} "
              className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-4 transition-all duration-300 flex flex-col items-center text-center">;"
</Link>"
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3">;"
</div>
              </div>"
              <h3 className="text-white font-medium mb-1">{link.title}</h3>""
              <p className="text-zion-slate-light text-xs mb-2">{link.description}</p>""
              <div className="flex items-center text-zion-cyan text-xs mt-auto">"
</div>
                <span>Access</span>"
                <ArrowRight className="ml-1 h-3 w-3" />"
</ArrowRight>
              </div>
            </Link>
        </div>;
      </div>;
    </section>;"
    <section className="py - 12 bg - zion - blue - dark">;"
</section>"
      <div className="container mx - auto px - 4">;"
</div>"
        <div className="text - center mb - 8">;"
</div>"
          <h2 className="text - 2xl font - bold bg - gradient - to - r from - zion - cyan via - zion - purple - light to - zion - purple bg - clip - text text - transparent mb - 2">;"
</h2>
          </h2>;"
          <p className="text - zion - slate - light text - lg">;"
</p>
          </p>;
        </div>;"
        <div className="grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 4 max - w-6xl mx - auto">;"
</div>
            <Link;
              key={index}
              to={link.link}"
              className="bg - zion - blue border border - zion - blue - light hover:border - zion - purple / 50 rounded - lg p - 4 transition - all duration - 300 flex flex - col items - center text - center";"
            >;
</Link>"
              <div className="bg - zion - blue - dark rounded - full w - 12 h - 12 flex items - center justify - center mb - 3">;"
</div>
              </div>;"
              <h3 className="text - white font - medium mb - 1">{link.title}</h3>;""
              <p className="text - zion - slate - light text - xs mb - 2">{link.description}</p>;""
              <div className="flex items - center text - zion - cyan text - xs mt - auto">;"
</div>
                <span > Access</span>;"
                <ArrowRight className="ml - 1 h - 3 w - 3" />;"
</ArrowRight>

              </div>;
            </Link>))}
        </div>;
      </div>;

    </section>);"
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">;"
</div>
            <Link ;
              key={index} ;
              to={link.link} ;"
              className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-4 transition-all duration-300 flex flex-col items-center text-center";"
            >;
</Link>"
              <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3">;"
</div>
              </div>;"
              <h3 className="text-white font-medium mb-1">{link.title}</h3>;""
              <p className="text-zion-slate-light text-xs mb-2">{link.description}</p>;""
              <div className="flex items-center text-zion-cyan text-xs mt-auto">;"
</div>
                <span>Access</span>;"
                <ArrowRight className="ml-1 h-3 w-3" />;"
</ArrowRight>
              </div>;
            </Link>;
        </div>;
      </div>;
    </section>;"
  Quick Access </h2> <p className="text-zion-slate-light text-lg" > Jump directly to our most popular features </p> </div> <span>Access</span> <ArrowRight className="ml-1 h-3 w-3" /> </div> </Link>) )"
}</div> </div> </section>) 
        </div>
      </div>
    </section>]"

