




import React from "react";""
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Button} from "@/components/ui/button";""
import {Badge} from "@/components/ui/badge";""
import {Link} from "react-router-dom";""
import {ArrowRight, Users, Zap, Settings, Search, MessageSquare, Smartphone, Calendar, BookOpen, Code, Building, Clock} from "lucide-react";""
import React from './react';''
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';''
import { Button } from '@/components / ui / button';''
import { Badge } from '@/components / ui / badge';''
import { Link } from './react-router-dom';''
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Smartphone, Calendar, BookOpen, Code, Building, Clock } from './lucide-react';'
;
export /**
 * FeatureCTAs - Function description;
 */
function FeatureCTAs() {
  const features = [;
    {'
      title: "AI Talent Matching",""
      description: "Our AI - powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.";""
      icon: <Search className="h - 10 w - 10 p - 2 rounded - md bg - blue - 100 text - blue - 700" />,"
</Search>"
      icon: <Users className="h - 10 w - 10 p - 2 rounded - md bg - purple - 100 text - purple - 700" />,"
</Users>"
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,"
</Search>"
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,"
</Users>"
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,"
</Zap>"
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />"
</Settings>"
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />"
</MessageSquare>"
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,"
</MessageSquare>"
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />"
</Smartphone>"
      icon: <Zap className="h - 10 w - 10 p - 2 rounded - md bg - cyan - 100 text - cyan - 700" />,"
</Zap>"
      icon: <Settings className="h - 10 w - 10 p - 2 rounded - md bg - amber - 100 text - amber - 700" />,"
</Settings>"
      icon: <MessageSquare className="h - 10 w - 10 p - 2 rounded - md bg - emerald - 100 text - emerald - 700" />,"
</MessageSquare>"
      icon: <Smartphone className="h - 10 w - 10 p - 2 rounded - md bg - indigo - 100 text - indigo - 700" />,"
</Smartphone>"
      icon: <Building className="h - 10 w - 10 p - 2 rounded - md bg - pink - 100 text - pink - 700" />,"
</Building>"
      icon: <Code className="h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray - 700" />,"
</Code>"
      icon: <BookOpen className="h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal - 700" />,"
</BookOpen>"
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,"
</Building>"
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,"
</Code>"
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,"
</BookOpen>"
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,"
</Calendar>"
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />"
</Clock>"
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,;"
</Search>"
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,;"
</Users>"
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,;"
</Zap>"
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,;"
</Settings>"
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,;"
</MessageSquare>"
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,;"
</Smartphone>"
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,;"
</Building>"
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,;"
</Code>"
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,;"
</BookOpen>"
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,;"
</Calendar>"
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,;"
</Clock>"
      icon: <Calendar className="h - 10 w - 10 p - 2 rounded - md bg - red - 100 text - red - 700" />,"
</Calendar>"
      icon: <Clock className="h - 10 w - 10 p - 2 rounded - md bg - violet - 100 text - violet - 700" />,"
</Clock>"
    <section className="py - 16 bg - gradient - to - b from - background to - background / 90">;"
</section>"
      <div className="container mx - auto px - 4">;"
</div>"
        <div className="mb - 12 text - center">;"
</div>"
          <h2 className="text - 3xl font - bold tracking - tight mb - 3">Discover Zion's Powerful Features</h2>;''
          <p className="text - lg text - muted - foreground max - w-3xl mx - auto">;"
</p>
          </p>;
        </div>;"
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;"
</div>"
            <Card key={index} className="overflow - hidden transition - all duration - 300 hover:shadow - lg hover:border - primary / 50">;"
</Card>"
              <CardHeader className="pb - 2">;"
</CardHeader>"
                <div className="flex justify - between items - start">;"
</div>"
                    <Badge variant="secondary" className="bg-primary/20 text-primary">"
</Badge>"
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,;"
</Search>"
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,;"
</Users>"
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,;"
</Zap>"
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,;"
</Settings>"
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,;"
</MessageSquare>"
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,;"
</Smartphone>"
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,;"
</Building>"
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,;"
</Code>"
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,;"
</BookOpen>"
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,;"
</Calendar>"
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,;"
</Clock>"
    <section className="py-16 bg-gradient-to-b from-background to-background/90">;"
</section>"
      <div className="container mx-auto px-4">;"
</div>"
        <div className="mb-12 text-center">;"
</div>"
          <h2 className="text-3xl font-bold tracking-tight mb-3">Discover Zion's Powerful Features</h2>;''
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">;"
</p>
          </p>;
        </div>;"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;"
</div>"
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">;"
</Card>"
              <CardHeader className="pb-2">;"
</CardHeader>"
                <div className="flex justify-between items-start">;"
</div>"
                    <Badge variant="secondary" className="bg-primary/20 text-primary">"
</Badge>"
                    <Badge variant="secondary" className="bg - primary / 20 text - primary">;"
</Badge>
                    </Badge>"
                    <Badge variant="secondary" className="bg-primary/20 text-primary">;"
</Badge>
                    </Badge>;
                </div>;"
                <CardTitle className="mt-4">{feature && feature.title}</CardTitle>;""
                <CardDescription className="line-clamp-2">{feature && feature.description}</CardDescription>;"
              </CardHeader>;
              <CardContent>;
</CardContent>"
                <p className="text-sm text-muted-foreground">{feature && feature.details}</p>;"
              </CardContent>;
              <CardFooter>;
</CardFooter>"
                <Button asChild className="w-full gap-1">;"
</Button>
                  <Link to={feature && feature.link}>;
</Link>
                    <span>Explore {feature && feature.title}</span>;"
                    <ArrowRight className="h-4 w-4" />;"
</ArrowRight>
                  </Link>;
                </Button>;
              </CardFooter>;
            </Card>;
        </div>;
      </div>;
    </section>;
                    </Badge>)}
                </div>;"
                <CardTitle className="mt - 4">{feature.title}</CardTitle>;""
                <CardDescription className="line - clamp - 2">{feature.description}</CardDescription>;"
              </CardHeader>;
              <CardContent>;
</CardContent>"
                <p className="text - sm text - muted - foreground">{feature.details}</p>;"
              </CardContent>;
              <CardFooter>;
</CardFooter>"
                <Button as_child className="w - full gap - 1">;"
</Button>
                  <Link to={feature.link}>;
</Link>
                    <span > Explore {feature.title}</span>;"
                    <ArrowRight className="h - 4 w - 4" />;"
</ArrowRight>

                  </Link>;
                </Button>;
              </CardFooter>;
            </Card>))}
        </div>;
      </div>;
    </section>);

}</Badge>) 
}</div> </Link> </Button> </CardFooter> </Card>) ) 
}</div> </div> </section>) "
                    <Badge variant="secondary" className="bg-primary/20 text-primary">"
</Badge>
                    </Badge>
                </div>"
                <CardTitle className="mt-4">{feature.title}</CardTitle>""
                <CardDescription className="line-clamp-2">{feature.description}</CardDescription>"
              </CardHeader>
              <CardContent>
</CardContent>"
                <p className="text-sm text-muted-foreground">{feature.details}</p>"
              </CardContent>
              <CardFooter>
</CardFooter>"
                <Button asChild className="w-full gap-1">"
</Button>
                  <Link to={feature.link}>
</Link>
                    <span>Explore {feature.title}</span>"
                    <ArrowRight className="h-4 w-4" />"
</ArrowRight>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
        </div>
      </div>
    </section>]"

