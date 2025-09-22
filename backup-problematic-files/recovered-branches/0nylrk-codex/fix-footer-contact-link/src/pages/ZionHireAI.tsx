
import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { useWhitelabel } from "@/context/WhitelabelContext",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { ArrowRight, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from "lucide-react",;
import { useAuth } from "@/hooks/useAuth",;
import { Link } from "react-router-dom",;
;
export default function ZionHireAI() {;
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel(),;
  const { isAuthenticated } = useAuth(),;
  ;
  return (;
    <>;
      <SEO ;
        title="Zion Hire AI - White-labeled AI Recruiting Assistant" ;
        description="Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience.";
      />;
      <Header />;
      <main className="flex-1">;
        {/* Hero Section */}

          <div className="container mx-auto px-4 md:px-6">;
            <div className="grid gap-6 md:grid-cols-2 items-center">;
              <div className="space-y-4">;
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">;

                </h1>;
                <p className="text-lg text-zion-slate-light max-w-[600px]">;
                  Empower your team with AI-driven talent acquisition. Streamline your hiring process, ;
                  improve candidate matches, and enhance the applicant experience.;
                </p>;
                <div className="flex flex-col sm:flex-row gap-3 pt-4">;

                      Request Demo;
                    </Link>;
                  </Button>;
                </div>;
              </div>;
              <div className="relative hidden md:block">;

                />;
              </div>;
            </div>;
          </div>;
        </section>;

            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold tracking-tight">Powerful AI Hiring Tools</h2>;
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">;
                Our comprehensive suite of AI-powered hiring tools help you streamline your recruiting process,;
                find better candidates, and make data-driven decisions.;
              </p>;
            </div>;

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">;
              <Card className="bg-card border border-border">;
                <CardHeader>;
                  <Briefcase className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>Job Description Generator</CardTitle>;
                  <CardDescription>;
                    Create compelling job descriptions with AI assistance to attract top talent.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space-y-2 text-sm">;
                    <li className="flex items-center">;

                      <span>Industry-specific templates</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;

              <Card className="bg-card border border-border">;
                <CardHeader>;
                  <PenTool className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>Resume Screener</CardTitle>;
                  <CardDescription>;
                    Automatically evaluate and score candidate resumes against job requirements.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space-y-2 text-sm">;
                    <li className="flex items-center">;

                      <span>Customizable scoring criteria</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;

              <Card className="bg-card border border-border">;
                <CardHeader>;
                  <Users className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>Candidate Matchmaker</CardTitle>;
                  <CardDescription>;
                    Find the best candidates for each position with AI-powered matching.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space-y-2 text-sm">;
                    <li className="flex items-center">;

                      <span>Performance tracking</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;

              <Card className="bg-card border border-border">;
                <CardHeader>;
                  <Globe className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>Embeddable Widget</CardTitle>;
                  <CardDescription>;
                    Add an AI assistant to your careers page to answer applicant questions.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space-y-2 text-sm">;
                    <li className="flex items-center">;

                      <span>Simple JavaScript snippet</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;

              <Card className="bg-card border border-border">;
                <CardHeader>;
                  <BarChart3 className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>Advanced Analytics</CardTitle>;
                  <CardDescription>;
                    Track recruiting metrics and optimize your hiring process with data.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space-y-2 text-sm">;
                    <li className="flex items-center">;

                      <span>Cost per hire analysis</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;

              <Card className="bg-card border border-border">;
                <CardHeader>;
                  <Shield className="h-10 w-10 text-zion-purple mb-2" />;
                  <CardTitle>White-Labeled Platform</CardTitle>;
                  <CardDescription>;
                    Customize the platform with your company's branding and identity.;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space-y-2 text-sm">;
                    <li className="flex items-center">;

                      <span>Team roles & permissions</span>;
                    </li>;
                  </ul>;
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </section>;

        {/* CTA Section */}
        <section className="bg-zion-blue-dark py-16">;
          <div className="container mx-auto px-4 md:px-6 text-center">;
            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your hiring process?</h2>;
            <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">;
              Join leading companies using Zion Hire AI to find better talent faster, ;
              reduce time-to-hire, and improve candidate experience.;
            </p>;

                Schedule a Demo;
              </Link>;
            </Button>;
          </div>;
        </section>;
      </main>;
      <Footer />;
