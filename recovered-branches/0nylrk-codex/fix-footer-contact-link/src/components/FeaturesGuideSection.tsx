
import {Link} from "react-router-dom";""
import {GradientHeading} from "./GradientHeading";""
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";""
import {Button} from "./ui/button";""
import {Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3, Plus, HelpCircle} from "lucide-react";""
import { Link } from "react-router-dom",""
import { GradientHeading } from "./GradientHeading",""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",""
import { Button } from "./ui/button","
import {
  // TODO: Implement
}
  Users,
  Zap, 
  Settings, 
  MessageSquare, 
  Sparkles,
  ArrowRight,
  BarChart3,
  Plus,
  HelpCircle;"
} from "lucide-react","
export function FeaturesGuideSection() {
  const features = [
    {
"
      id: "ai-matcher"","
  title: "AI Matcher"""
      description: "Find the perfect match for your project needs with our intelligent AI-powered matching system."","
  icon: <Sparkles className="h-10 w-10 text-zion-cyan" />"
</Sparkles>"
      icon: <Sparkles className="h-10 w-10 text-zion-cyan" />,"
</Sparkles>"
      icon: <Sparkles className="h-10 w-10 text-zion-cyan" />,;"
</Sparkles>"
      icon: <Users className="h-10 w-10 text-zion-purple" />,;"
</Users>"
      icon: <Sparkles className="h - 10 w - 10 text - zion - cyan" />,"
</Sparkles>"
      icon: <Users className="h - 10 w - 10 text - zion - purple" />,"
</Users>"
      icon: <Users className="h - 10 w - 10 text - zion - purple" />,"
</Users>"
      icon: <Users className="h-10 w-10 text-zion-purple" />,"
</Users>"
      icon: <Zap className="h-10 w-10 text-zion-cyan" />,"
</Zap>"
      icon: <Settings className="h-10 w-10 text-zion-purple" />"
</Settings>"
      icon: <Zap className="h - 10 w - 10 text - zion - cyan" />,"
</Zap>"
      icon: <Settings className="h - 10 w - 10 text - zion - purple" />,"
</Settings>"
      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />,"
</BarChart3>"
      icon: <MessageSquare className="h-10 w-10 text-zion-purple" />,"
</MessageSquare>"
      icon: <Plus className="h-10 w-10 text-zion-cyan" />"
</Plus>"
      icon: <Zap className="h-10 w-10 text-zion-cyan" />,;"
</Zap>"
      icon: <Settings className="h-10 w-10 text-zion-purple" />,;"
</Settings>"
      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />,;"
</BarChart3>"
      icon: <MessageSquare className="h-10 w-10 text-zion-purple" />,;"
</MessageSquare>"
      icon: <Plus className="h-10 w-10 text-zion-cyan" />,;"
</Plus>"
      icon: <HelpCircle className="h-10 w-10 text-zion-purple" />,"
</HelpCircle>"
      icon: <HelpCircle className="h-10 w-10 text-zion-purple" />,;"
</HelpCircle>"
      icon: <BarChart3 className="h - 10 w - 10 text - zion - cyan" />,"
</BarChart3>"
      icon: <MessageSquare className="h - 10 w - 10 text - zion - purple" />,"
</MessageSquare>"
      icon: <Plus className="h - 10 w - 10 text - zion - cyan" />,"
</Plus>"
      icon: <HelpCircle className="h - 10 w - 10 text - zion - purple" />,"
</HelpCircle>"
    <section className="py - 20 bg - zion - blue - dark">;"
</section>"
      <div className="container mx - auto px - 4">;"
</div>"
        <div className="text - center mb - 12">;"
</div>
          <GradientHeading > Your Complete Guide to Zion</GradientHeading>;"
          <p className="text - zion - slate - light text - xl mt - 4 max - w-3xl mx - auto">;"
</p>"
      icon: <Sparkles className="h-10 w-10 text-zion-cyan" />,;"
</Sparkles>"
      icon: <Users className="h-10 w-10 text-zion-purple" />,;"
</Users>"
      icon: <Zap className="h-10 w-10 text-zion-cyan" />,;"
</Zap>"
      icon: <Settings className="h-10 w-10 text-zion-purple" />,;"
</Settings>"
      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />,;"
</BarChart3>"
      icon: <MessageSquare className="h-10 w-10 text-zion-purple" />,;"
</MessageSquare>"
      icon: <Plus className="h-10 w-10 text-zion-cyan" />,;"
</Plus>"
      icon: <HelpCircle className="h-10 w-10 text-zion-purple" />,;"
</HelpCircle>"
    <section className="py-20 bg-zion-blue-dark">;"
</section>"
      <div className="container mx-auto px-4">;"
</div>"
        <div className="text-center mb-12">;"
</div>
          <GradientHeading>Your Complete Guide to Zion</GradientHeading>;"
          <p className="text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto">;"
</p>
          </p>;
        </div>;"
        <Tabs default_value="ai - matcher" className="w - full max - w-5xl mx - auto">;"
</Tabs>"
          <TabsList className="grid grid - cols - 2 md:grid - cols - 4 gap - 2 bg - zion - blue rounded - lg p - 1 mb - 8">;"
</TabsList>
              <TabsTrigger;
                key={feature.id}
                value={feature.id}
]"
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan""
              >
</TabsTrigger>
              </TabsTrigger>))}
          </TabsList>;"
          <TabsList className="grid grid - cols - 2 md:grid - cols - 4 gap - 2 bg - zion - blue rounded - lg p - 1">;"
</TabsList>
              <TabsTrigger;

                key={feature.id}
                value={feature.id}"
                className="data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan";"
              >;
</TabsTrigger>"
    <section className="py-20 bg-zion-blue-dark">;"
</section>"
      <div className="container mx-auto px-4">;"
</div>"
        <div className="text-center mb-12">;"
</div>
          <GradientHeading>Your Complete Guide to Zion</GradientHeading>;"
          <p className="text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto">;"
</p>
          </p>;
        </div>;"
        <Tabs defaultValue="ai-matcher" className="w-full max-w-5xl mx-auto">;"
</Tabs>"
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1 mb-8">;"
</TabsList>
              <TabsTrigger;
                key={feature && feature.id} 
                value={feature && feature.id}"
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan">;"
</TabsTrigger>
              </TabsTrigger>;
          </TabsList>;"
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1">;"
</TabsList>
              <TabsTrigger;
                key={feature && feature.id} 
                value={feature && feature.id}"
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan">;"
</TabsTrigger>
              </TabsTrigger>;
          </TabsList>;"
            <TabsContent key={feature && feature.id} value={feature && feature.id} className="mt-8">;"
</TabsContent>"
              <div className="bg-zion-blue rounded-lg border border-zion-blue-light p-6 md:p-8 flex flex-col md:flex-row gap-8">;"
</div>"
                <div className="md:w-1/3 flex flex-col items-center md:items-start">;"
</div>"
                  <div className="bg-zion-blue-dark p-4 rounded-xl mb-4">;"
</div>
                  </div>;"
                  <h3 className="text-2xl font-bold text-white mb-3">{feature && feature.title}</h3>;""
                  <p className="text-zion-slate-light mb-6">{feature && feature.description}</p>;"
                  <Button;"
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple""
                    asChild>;
</Button>
                    <Link to={feature && feature.link}>;
</Link>"
                      <ArrowRight className="ml-2 h-4 w-4" />;"
</ArrowRight>
                    </Link>;
                  </Button>;
                </div>;"
                <div className="md:w-2/3 bg-zion-blue-dark p-6 rounded-lg">;"
</div>"
                  <h4 className="text-xl font-semibold text-white mb-4">How to Use</h4>;""
                  <ol className="list-decimal list-inside space-y-3 pl-4">;"
</ol>"
                      <li key={idx} className="text-zion-slate-light">;"
</li>"
                        <span className="text-zion-cyan mr-2">{idx + 1}.</span>;"
                      </li>;
                  </ol>;
                </div>;
              </div>;
            </TabsContent>;
              </TabsTrigger>
          </TabsList>"
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1">"
</TabsList>
              <TabsTrigger;
                key={feature.id}
                value={feature.id}
"
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan""
              >
</TabsTrigger>
              </TabsTrigger>))}
          </TabsList>;"
          <TabsList className="grid grid - cols - 2 md:grid - cols - 4 gap - 2 bg - zion - blue rounded - lg p - 1">;"
</TabsList>
              <TabsTrigger;

                key={feature.id}
                value={feature.id}"
                className="data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan";"
              >;
</TabsTrigger>
                      </li>;
                  </ol>;
                </div>;
              </div>;
            </TabsContent>;
        </Tabs>"
        <div className="mt-12 text-center">"
</div>
          <Button;"
            variant="outline"""
            className="border-zion-cyan text-zion-cyan hover: bg-zion-cyan/10""
            asChild;
          >
</Button>"
            <Link to="/marketplace">"
</Link>"
              <ArrowRight className="ml-2 h-4 w-4" />"
</ArrowRight>
            </Link>
          </Button>
        </div>
      </div>
    </section>
        </Tabs>;"
        <div className="mt-12 text-center">;"
</div>
          <Button;"
            variant="outline"""
            className="border-zion-cyan text-zion-cyan hover: bg-zion-cyan/10""
            asChild>;
</Button>"
            <Link to="/marketplace">;"
</Link>"
              <ArrowRight className="ml-2 h-4 w-4" />;"
</ArrowRight>
              </TabsTrigger>))}
          </TabsList>;"
            <TabsContent key={feature.id} value={feature.id} className="mt - 8">;"
</TabsContent>"
              <div className="bg - zion - blue rounded - lg border border - zion - blue - light p - 6 md:p - 8 flex flex - col md:flex - row gap - 8">;"
</div>"
                <div className="md:w - 1/3 flex flex - col items - center md:items - start">;"
</div>"
                  <div className="bg - zion - blue - dark p - 4 rounded - xl mb - 4">;"
</div>
                  </div>;"
                  <h3 className="text - 2xl font - bold text - white mb - 3">{feature.title}</h3>;""
                  <p className="text - zion - slate - light mb - 6">{feature.description}</p>;"
                  <Button;"
                    className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";"
                    as_child;
                  >;
</Button>
                    <Link to={feature.link}>;
</Link>"
                      <ArrowRight className="ml - 2 h - 4 w - 4" />;"
</ArrowRight>
                    </Link>;
                  </Button>;
                </div>;"
                <div className="md:w - 2/3 bg - zion - blue - dark p - 6 rounded - lg">;"
</div>"
                  <h4 className="text - xl font - semibold text - white mb - 4">How to Use</h4>;""
                  <ol className="list - decimal list - inside space - y-3 pl - 4">;"
</ol>"
                      <li key={idx} className="text - zion - slate - light">;"
</li>"
                        <span className="text - zion - cyan mr - 2">{idx + 1}.</span>;"
                      </li>))}
                  </ol>;
                </div>;
              </div>;
            </TabsContent>))}
        </Tabs>;"
        <div className="mt - 12 text - center">;"
</div>
          <Button;"
            variant="outline";""
            className="border - zion - cyan text - zion - cyan hover: bg - zion - cyan / 10";"
            as_child;
          >;
</Button>"
            <Link to="/marketplace">;"
</Link>"
              <ArrowRight className="ml - 2 h - 4 w - 4" />;"
</ArrowRight>
        </Tabs>;"
        <div className="mt-12 text-center">;"
</div>
          <Button ;"
            variant="outline" ;""
            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10";"
};
        </Tabs>;
</Button>"
        <div className="mt-12 text-center">;"
</div>
          <Button;"
            variant="outline";""
            className="border-zion-cyan text-zion-cyan hover: bg-zion-cyan/10";"
            asChild;
          >;
</Button>"
            <Link to="/marketplace">;"
</Link>"
              <ArrowRight className="ml-2 h-4 w-4" />;"
</ArrowRight>
            </Link>;
          </Button>;
        </div>;
      </div>;
    </section>);"