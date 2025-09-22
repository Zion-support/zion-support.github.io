import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {CheckCircle, FileDown, FileText, PieChart, Users} from "lucide-react";
import {useState} from "react";
import {PartnerRegistrationForm} from "@/components/partners/PartnerRegistrationForm";
import {PartnerReferralLinks} from "@/components/partners/PartnerReferralLinks";
import {PartnerDashboard} from "@/components/partners/PartnerDashboard";
import {PartnerLeaderboard} from "@/components/partners/PartnerLeaderboard";
import {PartnerResources} from "@/components/partners/PartnerResources";
import {useAuth} from "@/hooks/useAuth";
import {useNavigate} from "react-router-dom";
export default function Partners() {;
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { CheckCircle, FileDown, FileText, PieChart, Users } from "lucide-react",
import { useState } from "react",
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm",
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks",
import { PartnerDashboard } from "@/components/partners/PartnerDashboard",
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard",
import { PartnerResources } from "@/components/partners/PartnerResources",
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, FileDown, FileText, PieChart, Users } from "lucide-react";
import { useState } from "react";
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm";
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks";
import { PartnerDashboard } from "@/components/partners/PartnerDashboard";
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard";
import { PartnerResources } from "@/components/partners/PartnerResources";
import { useAuth } from "@/hooks/useAuth";
  CardTitle,";
} from "@/components/ui/card";"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";"
import { CheckCircle, FileDown, FileText, PieChart, Users } from "lucide-react";"
import { useState } from "react";"
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm";"
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks";"
import { PartnerDashboard } from "@/components/partners/PartnerDashboard";"
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard";"
import { PartnerResources } from "@/components/partners/PartnerResources";"
import { useAuth } from "@/hooks/useAuth";"
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
export default function Partners() { return null; }
  const { user, isAuthenticated } = useAuth();

  const navigate = useNavigate();



  // If not authenticated, display partner program info and signup CTA
  if (!isAuthenticated) {
  // If not authenticated, display partner program info and signup CTA
  if (!isAuthenticated) {

  // If not authenticated, display partner program info and signup CTA;
  if (!isAuthenticated) {;
    return ("
      <div className="container max-w-6xl py-10">"
        <div className="text-center mb-8">"
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
            Zion AI Partner Program;
          </h1>"
          <p className="text-xl text-zion-slate-light">
            Earn rewards by referring AI talent and clients to our marketplace;
          </p>
        </div>
"
        <div className="grid md:grid-cols-2 gap-8 mb-12">"
          <Card className="bg-zion-blue-dark border-zion-blue-light">
            <CardHeader>"
              <CardTitle className="text-white">For AI Influencers</CardTitle>
              <CardDescription>Share your expertise and earn</CardDescription>
            </CardHeader>"
            <CardContent className="space-y-4">"
              <div className="flex items-start gap-3">"
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />
                <div>"
                  <p className="font-medium text-white">
                    Monetize your audience;
                  </p>"
                  <p className="text-sm text-zion-slate-light">
                    Earn commissions from successful referrals;
                  </p>
                </div>
              </div>"
              <div className="flex items-start gap-3">"
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />
                <div>"
                  <p className="font-medium text-white">Exclusive insights</p>"
                  <p className="text-sm text-zion-slate-light">
                    Get early access to AI marketplace trends;
                  </p>
                </div>
              </div>"
              <div className="flex items-start gap-3">"
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />
                <div>"
                  <p className="font-medium text-white">Marketing resources</p>"
                  <p className="text-sm text-zion-slate-light">
                    Access our partner toolkit with ready-to-use materials;
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
"
          <Card className="bg-zion-blue-dark border-zion-blue-light">
            <CardHeader>"
              <CardTitle className="text-white">For AI Organizations</CardTitle>
              <CardDescription>Strategic partnerships</CardDescription>
            </CardHeader>"
            <CardContent className="space-y-4">"
              <div className="flex items-start gap-3">"
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />
                <div>"
                  <p className="font-medium text-white">
                    Expand your ecosystem;
                  </p>"
                  <p className="text-sm text-zion-slate-light">
                    Connect your community to AI job opportunities;
                  </p>
                </div>
              </div>"
              <div className="flex items-start gap-3">"
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />
                <div>"
                  <p className="font-medium text-white">
                    Co-branded opportunities;
                  </p>"
                  <p className="text-sm text-zion-slate-light">
                    Create joint content and events;
                  </p>
                </div>
              </div>"
              <div className="flex items-start gap-3">"
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />
                <div>"
                  <p className="font-medium text-white">Custom tracking</p>"
                  <p className="text-sm text-zion-slate-light">
                    Detailed analytics on your referral performance;
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
"
        <div className="text-center mb-12">"
          <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>"
          <div className="grid md:grid-cols-3 gap-6">"
            <Card className="bg-zion-blue-dark border-zion-blue-light">"
              <CardHeader className="text-center pb-2">"
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">"
                  <Users className="h-6 w-6 text-zion-cyan" />
                </div>"
                <CardTitle className="text-lg text-white">
                  1. Join the Program;
                </CardTitle>
              </CardHeader>"
              <CardContent className="text-center text-sm text-zion-slate-light">
                <p>
                  Sign up and get approved as a Zion AI partner with your own;
                  dashboard;
                </p>
              </CardContent>
            </Card>
"
            <Card className="bg-zion-blue-dark border-zion-blue-light">"
              <CardHeader className="text-center pb-2">"
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">"
                  <FileText className="h-6 w-6 text-zion-cyan" />
                </div>"
                <CardTitle className="text-lg text-white">
                  2. Share Your Link;
                </CardTitle>
              </CardHeader>"
              <CardContent className="text-center text-sm text-zion-slate-light">
                <p>
                  Generate custom referral links and promote to your audience;
                </p>
              </CardContent>
            </Card>
"
            <Card className="bg-zion-blue-dark border-zion-blue-light">"
              <CardHeader className="text-center pb-2">"
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">"
                  <PieChart className="h-6 w-6 text-zion-cyan" />
                </div>"
                <CardTitle className="text-lg text-white">
                  3. Earn Rewards;
                </CardTitle>
              </CardHeader>"
              <CardContent className="text-center text-sm text-zion-slate-light">
                <p>
                  Get paid when referrals complete onboarding and engage with;
                  our platform;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
"
        <div className="flex justify-center gap-4">
          <Button"
            size="lg""
            className="bg-zion-purple hover:bg-zion-purple-dark""
            onClick={() => navigate("/signup")}
          >
            Apply to Join;
          </Button>
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { CheckCircle, FileDown, FileText, PieChart, Users } from "lucide-react",;
import { useState } from "react",;
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm",;
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks",;
import { PartnerDashboard } from "@/components/partners/PartnerDashboard",;
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard",;
import { PartnerResources } from "@/components/partners/PartnerResources",;
import { useAuth } from "@/hooks/useAuth",;
import { useNavigate } from "react-router-dom",;
export default function Partners() {;
  const [activeTab, setActiveTab] = useState("overview"),;
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {CheckCircle, FileDown, FileText, PieChart, Users} from "lucide-react";
import {useState} from "react";
import {PartnerRegistrationForm} from "@/components/partners/PartnerRegistrationForm";
import {PartnerReferralLinks} from "@/components/partners/PartnerReferralLinks";
import {PartnerDashboard} from "@/components/partners/PartnerDashboard";
import {PartnerLeaderboard} from "@/components/partners/PartnerLeaderboard";
import {PartnerResources} from "@/components/partners/PartnerResources";
import {useAuth} from "@/hooks/useAuth";
import {useNavigate} from "react-router-dom";
export default function Partners() {;
  const [activeTab, setActiveTab] = useState("overview");
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { CheckCircle, FileDown, FileText, PieChart, Users } from "lucide-react",
import { useState } from "react",
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm",
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks",
import { PartnerDashboard } from "@/components/partners/PartnerDashboard",
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard",
import { PartnerResources } from "@/components/partners/PartnerResources",
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
export default function Partners() {
  const [activeTab, setActiveTab] = useState("overview");
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();




  // If not authenticated, display partner program info and signup CTA;
  if (!isAuthenticated) {;
    return (
      <div className="container max-w-6xl py-10">;
        <div className="text-center mb-8">;
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Zion AI Partner Program</h1>;
          <p className="text-xl text-zion-slate-light">Earn rewards by referring AI talent and clients to our marketplace</p>;
        </div>;


        <div className="grid md:grid-cols-2 gap-8 mb-12">;
          <Card className="bg-zion-blue-dark border-zion-blue-light">;
            <CardHeader>;
              <CardTitle className="text-white">For AI Influencers</CardTitle>;
              <CardDescription>Share your expertise and earn</CardDescription>;
            </CardHeader>;
            <CardContent className="space-y-4">;
              <div className="flex items-start gap-3">;
<CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />;
                <div>;
                  <p className="font-medium text-white">Monetize your audience</p>;
                  <p className="text-sm text-zion-slate-light">Earn commissions from successful referrals</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
<CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />;
                <div>;
                  <p className="font-medium text-white">Exclusive insights</p>;
                  <p className="text-sm text-zion-slate-light">Get early access to AI marketplace trends</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
<CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />;
                <div>;
                  <p className="font-medium text-white">Marketing resources</p>;
                  <p className="text-sm text-zion-slate-light">Access our partner toolkit with ready-to-use materials</p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;

          <Card className="bg-zion-blue-dark border-zion-blue-light">;
            <CardHeader>;
              <CardTitle className="text-white">For AI Organizations</CardTitle>;
              <CardDescription>Strategic partnerships</CardDescription>;
            </CardHeader>;
            <CardContent className="space-y-4">;
              <div className="flex items-start gap-3">;
<CheckCircle className="h-5 w-5 text-zion-purple mt-0 && 0.5" />;
                <div>;
                  <p className="font-medium text-white">Expand your ecosystem</p>;
                  <p className="text-sm text-zion-slate-light">Connect your community to AI job opportunities</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
<CheckCircle className="h-5 w-5 text-zion-purple mt-0 && 0.5" />;
                <div>;
                  <p className="font-medium text-white">Co-branded opportunities</p>;
                  <p className="text-sm text-zion-slate-light">Create joint content and events</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
<CheckCircle className="h-5 w-5 text-zion-purple mt-0 && 0.5" />;
                <div>;
                  <p className="font-medium text-white">Custom tracking</p>;
                  <p className="text-sm text-zion-slate-light">Detailed analytics on your referral performance</p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;

        <div className="text-center mb-12">;
          <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>;
          <div className="grid md:grid-cols-3 gap-6">;
            <Card className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader className="text-center pb-2">;
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">;
                  <Users className="h-6 w-6 text-zion-cyan" />;
                </div>;
                <CardTitle className="text-lg text-white">1. Join the Program</CardTitle>;
              </CardHeader>;
              <CardContent className="text-center text-sm text-zion-slate-light">;
                <p>Sign up and get approved as a Zion AI partner with your own dashboard</p>;
              </CardContent>;
            </Card>;

            <Card className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader className="text-center pb-2">;
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">;
                  <FileText className="h-6 w-6 text-zion-cyan" />;
                </div>;
                <CardTitle className="text-lg text-white">2. Share Your Link</CardTitle>;
              </CardHeader>;
              <CardContent className="text-center text-sm text-zion-slate-light">;
                <p>Generate custom referral links and promote to your audience</p>;
              </CardContent>;
            </Card>;

            <Card className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader className="text-center pb-2">;
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">;
                  <PieChart className="h-6 w-6 text-zion-cyan" />;
                </div>;
                <CardTitle className="text-lg text-white">3. Earn Rewards</CardTitle>;
              </CardHeader>;
              <CardContent className="text-center text-sm text-zion-slate-light">;
                <p>Get paid when referrals complete onboarding and engage with our platform</p>;
              </CardContent>;
            </Card>;
          </div>;
        </div>;
<div className="flex justify-center gap-4">;
          <Button
            size="lg" 
            className="bg-zion-purple hover:bg-zion-purple-dark"
            onClick={() => navigate('/signup')}
          >;
            Apply to Join;
          </Button>;

<Button;
            size="lg";
            variant="outline";
            className="text-zion-cyan border-zion-cyan";
            onClick={() => navigate('/login')}
          >

          <Button 
            size="lg" 
            variant="outline" 
            className="text-zion-cyan border-zion-cyan"
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { CheckCircle, FileDown, FileText, PieChart, Users } from "lucide-react",;
import { useState } from "react",;
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm",;
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks",;
import { PartnerDashboard } from "@/components/partners/PartnerDashboard",;
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard",;
import { PartnerResources } from "@/components/partners/PartnerResources",;
import { useAuth } from "@/hooks/useAuth",;
import { useNavigate } from "react-router-dom",;
export default function Partners() {;
  const [activeTab, setActiveTab] = useState("overview"),;
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // If not authenticated, display partner program info and signup CTA;
  if (!isAuthenticated) {;
    return (
      <div className="container max-w-6xl py-10">;
        <div className="text-center mb-8">;
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Zion AI Partner Program</h1>;
          <p className="text-xl text-zion-slate-light">Earn rewards by referring AI talent and clients to our marketplace</p>;
        </div>;

        <div className="grid md:grid-cols-2 gap-8 mb-12">;
          <Card className="bg-zion-blue-dark border-zion-blue-light">;
            <CardHeader>;
              <CardTitle className="text-white">For AI Influencers</CardTitle>;
              <CardDescription>Share your expertise and earn</CardDescription>;
            </CardHeader>;
            <CardContent className="space-y-4">;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />;
                <div>;
                  <p className="font-medium text-white">Monetize your audience</p>;
                  <p className="text-sm text-zion-slate-light">Earn commissions from successful referrals</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />;
                <div>;
                  <p className="font-medium text-white">Exclusive insights</p>;
                  <p className="text-sm text-zion-slate-light">Get early access to AI marketplace trends</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />;
                <div>;
                  <p className="font-medium text-white">Marketing resources</p>;
                  <p className="text-sm text-zion-slate-light">Access our partner toolkit with ready-to-use materials</p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;

          <Card className="bg-zion-blue-dark border-zion-blue-light">;
            <CardHeader>;
              <CardTitle className="text-white">For AI Organizations</CardTitle>;
              <CardDescription>Strategic partnerships</CardDescription>;
            </CardHeader>;
            <CardContent className="space-y-4">;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0 && 0.5" />;
                <div>;
                  <p className="font-medium text-white">Expand your ecosystem</p>;
                  <p className="text-sm text-zion-slate-light">Connect your community to AI job opportunities</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0 && 0.5" />;
                <div>;
                  <p className="font-medium text-white">Co-branded opportunities</p>;
                  <p className="text-sm text-zion-slate-light">Create joint content and events</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0 && 0.5" />;
                <div>;
                  <p className="font-medium text-white">Custom tracking</p>;
                  <p className="text-sm text-zion-slate-light">Detailed analytics on your referral performance</p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;

        <div className="text-center mb-12">;
          <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>;
          <div className="grid md:grid-cols-3 gap-6">;
            <Card className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader className="text-center pb-2">;
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">;
                  <Users className="h-6 w-6 text-zion-cyan" />;
                </div>;
                <CardTitle className="text-lg text-white">1. Join the Program</CardTitle>;
              </CardHeader>;
              <CardContent className="text-center text-sm text-zion-slate-light">;
                <p>Sign up and get approved as a Zion AI partner with your own dashboard</p>;
              </CardContent>;
            </Card>;

            <Card className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader className="text-center pb-2">;
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">;
                  <FileText className="h-6 w-6 text-zion-cyan" />;
                </div>;
                <CardTitle className="text-lg text-white">2. Share Your Link</CardTitle>;
              </CardHeader>;
              <CardContent className="text-center text-sm text-zion-slate-light">;
                <p>Generate custom referral links and promote to your audience</p>;
              </CardContent>;
            </Card>;

            <Card className="bg-zion-blue-dark border-zion-blue-light">;
              <CardHeader className="text-center pb-2">;
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">;
                  <PieChart className="h-6 w-6 text-zion-cyan" />;
                </div>;
                <CardTitle className="text-lg text-white">3. Earn Rewards</CardTitle>;
              </CardHeader>;
              <CardContent className="text-center text-sm text-zion-slate-light">;
                <p>Get paid when referrals complete onboarding and engage with our platform</p>;
              </CardContent>;
            </Card>;
          </div>;
        </div>;

        <div className="flex justify-center gap-4">;
          <Button
            size="lg" 
            className="bg-zion-purple hover:bg-zion-purple-dark"
            onClick={() => navigate('/signup')}
          >;
            Apply to Join;
          </Button>;
            onClick={() => navigate('/login')}          >
            Partner Login
            Partner Login;
          </Button>
        </div>
      </div>
    )
  }
    )
  }
    )
  }
          <Button
            size="lg" 
            variant="outline" 

            className="text-zion-cyan border-zion-cyan"

          <Button 
            size="lg" 
            variant="outline" 
            className="text-zion-cyan border-zion-cyan"

            onClick={() => navigate('/login')}
          >;
            Partner Login;
          </Button>;
        </div>;
      </div>;
    );
  }


    );
  }

    );
  }

    );
  }

    );
  }
    );
  }

  // Authenticated user view - Partner Dashboard
  return (
    <div className="container max-w-7xl py-10">

  // Authenticated user view - Partner Dashboard;
  return ("
    <div className="container max-w-7xl py-10">"
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>"
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Partner Dashboard;
          </h1>"
          <p className="text-zion-slate-light">
            Manage your referral links and track your performance;
          </p>
        </div>"
        <div className="flex gap-2">
          <Button"
            variant="outline""
            className="flex items-center gap-2"
            onClick={() => window.print()}
          >"
            <FileDown className="h-4 w-4" />
Export CSV;
          </Button>
        </div>
      </div>

      <Tabs;
        value={activeTab}
        onValueChange={setActiveTab}"
        className="space-y-4"
      >"
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">"
          <TabsTrigger value="overview">Overview</TabsTrigger>"
          <TabsTrigger value="referrals">Referral Links</TabsTrigger>"
          <TabsTrigger value="earnings">Earnings</TabsTrigger>"
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>"
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
"
        <TabsContent value="overview" className="space-y-4">
          <PartnerDashboard />
        </TabsContent>
"
        <TabsContent value="referrals" className="space-y-4">
          <PartnerReferralLinks />
        </TabsContent>
"
        <TabsContent value="earnings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Earnings & Payouts</CardTitle>
              <CardDescription>
                Track your earnings and manage payouts;
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* This will be implemented later */}"
              <p className="text-zion-slate-light">
                Earnings tracking and payout requests will be available soon.
      <Tabs;
        value={activeTab}
        onValueChange={setActiveTab}"
        className="space-y-4""
      >
</Tabs>"
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">"
</TabsList>"
          <TabsTrigger value="overview">Overview</TabsTrigger>""
          <TabsTrigger value="referrals">Referral Links</TabsTrigger>""
          <TabsTrigger value="earnings">Earnings</TabsTrigger>""
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>""
          <TabsTrigger value="resources">Resources</TabsTrigger>"
        </TabsList>
"
        <TabsContent value="overview" className="space-y-4">"
</TabsContent>

          <PartnerDashboard />
</PartnerDashboard>
        </TabsContent>

"
        <TabsContent value="referrals" className="space-y-4">"
</TabsContent>

          <PartnerReferralLinks />
</PartnerReferralLinks>
        </TabsContent>

"
        <TabsContent value="earnings" className="space-y-4">"
</TabsContent>
          <Card>
</Card>
            <CardHeader>
</CardHeader>
              <CardTitle>Earnings & Payouts</CardTitle>
              <CardDescription>
</CardDescription>
              </CardDescription>
            </CardHeader>
            <CardContent>
</CardContent>"
              <p className="text-zion-slate-light">"
</p>

              </p>
            </CardContent>
          </Card>
        </TabsContent>
"
        <TabsContent value="leaderboard" className="space-y-4">
          <PartnerLeaderboard />
        </TabsContent>
"
        <TabsContent value="resources" className="space-y-4">
          <PartnerResources />
        </TabsContent>
      </Tabs>
    </div>
  )
    <div className="container max-w-7xl py-10">;
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;
        <div>;
          <h1 className="text-3xl font-bold tracking-tight text-white">Partner Dashboard</h1>;
          <p className="text-zion-slate-light">Manage your referral links and track your performance</p>;
        </div>;
        <div className="flex gap-2">;
<Button variant="outline" className="flex items-center gap-2" onClick={() => window && window.print()}>;
            <FileDown className="h-4 w-4" />;
}
    return ("
      <div className="container max - w-6xl py - 10">;"
        <div className="text - center mb - 8">;"
          <h1 className="text - 4xl font - bold tracking - tight text - white mb - 2">Zion AI Partner Program</h1>;"
          <p className="text - xl text - zion - slate - light">Earn rewards by referring AI talent and clients to our marketplace</p>;
        </div>;"
        <div className="grid md:grid - cols - 2 gap - 8 mb - 12">;"
          <Card className="bg - zion - blue - dark border - zion - blue - light">;
            <CardHeader>;"
              <CardTitle className="text - white">For AI Influencers</CardTitle>;
              <CardDescription > Share your expertise and earn</CardDescription>;
            </CardHeader>;"
            <CardContent className="space - y-4">;"
              <div className="flex items - start gap - 3">;"
                <CheckCircle className="h - 5 w - 5 text - zion - cyan mt - 0.5" />;
                <div>;"
                  <p className="font - medium text - white">Monetize your audience</p>;"
                  <p className="text - sm text - zion - slate - light">Earn commissions from successful referrals</p>;
                </div>;
              </div>;"
              <div className="flex items - start gap - 3">;"
                <CheckCircle className="h - 5 w - 5 text - zion - cyan mt - 0.5" />;
                <div>;"
                  <p className="font - medium text - white">Exclusive insights</p>;"
                  <p className="text - sm text - zion - slate - light">Get early access to AI marketplace trends</p>;
                </div>;
              </div>;"
              <div className="flex items - start gap - 3">;"
                <CheckCircle className="h - 5 w - 5 text - zion - cyan mt - 0.5" />;
                <div>;"
                  <p className="font - medium text - white">Marketing resources</p>;"
                  <p className="text - sm text - zion - slate - light">Access our partner toolkit with ready - to - use materials</p>;
                </div>;
              </div>;
            </CardContent>;
</Card>;"
          <Card className="bg - zion - blue - dark border - zion - blue - light">;
            <CardHeader>;"
              <CardTitle className="text - white">For AI Organizations</CardTitle>;
              <CardDescription > Strategic partnerships</CardDescription>;
            </CardHeader>;"
            <CardContent className="space - y-4">;"
              <div className="flex items - start gap - 3">;"
                <CheckCircle className="h - 5 w - 5 text - zion - purple mt - 0.5" />;
                <div>;"
                  <p className="font - medium text - white">Expand your ecosystem</p>;"
                  <p className="text - sm text - zion - slate - light">Connect your community to AI job opportunities</p>;
                </div>;
              </div>;"
              <div className="flex items - start gap - 3">;"
                <CheckCircle className="h - 5 w - 5 text - zion - purple mt - 0.5" />;
                <div>;"
                  <p className="font - medium text - white">Co - branded opportunities</p>;"
                  <p className="text - sm text - zion - slate - light">Create joint content and events</p>;
                </div>;
              </div>;"
              <div className="flex items - start gap - 3">;"
                <CheckCircle className="h - 5 w - 5 text - zion - purple mt - 0.5" />;
                <div>;"
                  <p className="font - medium text - white">Custom tracking</p>;"
                  <p className="text - sm text - zion - slate - light">Detailed analytics on your referral performance</p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
</div>;"
        <div className="text - center mb - 12">;"
          <h2 className="text - 2xl font - bold text - white mb - 4">How It Works</h2>;"
          <div className="grid md:grid - cols - 3 gap - 6">;"
            <Card className="bg - zion - blue - dark border - zion - blue - light">;"
              <CardHeader className="text - center pb - 2">;"
                <div className="mx - auto bg - zion - blue - light rounded - full w - 12 h - 12 flex items - center justify - center mb - 4">;"
                  <Users className="h - 6 w - 6 text - zion - cyan" />;
                </div>;"
                <CardTitle className="text - lg text - white">1. Join the Program</CardTitle>;
              </CardHeader>;"
              <CardContent className="text - center text - sm text - zion - slate - light">;
                <p > Sign up and get approved as a Zion AI partner with your own dashboard</p>;
              </CardContent>;
            </Card>;"
            <Card className="bg - zion - blue - dark border - zion - blue - light">;"
              <CardHeader className="text - center pb - 2">;"
                <div className="mx - auto bg - zion - blue - light rounded - full w - 12 h - 12 flex items - center justify - center mb - 4">;"
                  <FileText className="h - 6 w - 6 text - zion - cyan" />;
                </div>;"
                <CardTitle className="text - lg text - white">2. Share Your Link</CardTitle>;
              </CardHeader>;"
              <CardContent className="text - center text - sm text - zion - slate - light">;
                <p > Generate custom referral links and promote to your audience</p>;
              </CardContent>;
            </Card>;"
            <Card className="bg - zion - blue - dark border - zion - blue - light">;"
              <CardHeader className="text - center pb - 2">;"
                <div className="mx - auto bg - zion - blue - light rounded - full w - 12 h - 12 flex items - center justify - center mb - 4">;"
                  <PieChart className="h - 6 w - 6 text - zion - cyan" />;
                </div>;"
                <CardTitle className="text - lg text - white">3. Earn Rewards</CardTitle>;
              </CardHeader>;"
              <CardContent className="text - center text - sm text - zion - slate - light">;
                <p > Get paid when referrals complete onboarding and engage with our platform</p>;
              </CardContent>;
            </Card>;
          </div>;
</div>;"
        <div className="flex justify - center gap - 4">;
          <Button;"
            size="lg";"
            className="bg - zion - purple hover:bg - zion - purple - dark";
            on_click={() => navigate ('/signup')}
          >;
            Apply to Join;
          </Button>;
<Button;"
            size="lg";"
            variant="outline";"
            className="text - zion - cyan border - zion - cyan";'
            on_click={() => navigate ('/login')}
          >;
            Partner Login;
          </Button>;
        </div>;
      </div>);
  }
  // Authenticated user view - Partner Dashboard;
return ("
    <div className="container max - w-7xl py - 10">;"
      <div className="flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb - 8">;
        <div>;"
          <h1 className="text - 3xl font - bold tracking - tight text - white">Partner Dashboard</h1>;"
          <p className="text - zion - slate - light">Manage your referral links and track your performance</p>;
        </div>;"
        <div className="flex gap - 2">;"
          <Button variant="outline" className="flex items - center gap - 2" on_click={() => window.print ()}>;"
            <FileDown className="h - 4 w - 4" />;

"
          <Button variant="outline" className="flex items-center gap-2" onClick={() => window.print()}>;"
            <FileDown className="h-4 w-4" />;

            Export CSV;
  )            Export CSV;
  return (
    <div className="container max - w-7xl py - 10">;
      <div className="flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb - 8">;
        <div>;
          <h1 className="text - 3xl font - bold tracking - tight text - white">Partner Dashboard</h1>;
          <p className="text - zion - slate - light">Manage your referral links and track your performance</p>;
        </div>;
        <div className="flex gap - 2">;
          <Button variant="outline" className="flex items - center gap - 2" on_click={() => window.print ()}>;
            <FileDown className="h - 4 w - 4" />;

          <Button variant="outline" className="flex items-center gap-2" onClick={() => window.print()}>;
            <FileDown className="h-4 w-4" />;
            Export CSV;
          </Button>;
        </div>;
      </div>;
<Tabs value={active_tab} onValueChange={setActiveTab} className="space - y-4">;
        <TabsList className="grid grid - cols - 2 md:grid - cols - 5 mb - 4">;

;
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">;
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">;
      <Tabs value={active_tab} onValueChange={setActiveTab} className="space-y-4">;
        <TabsList className="grid grid - cols - 2 md:grid - cols - 5 mb-4">;
          <TabsTrigger value="overview">Overview</TabsTrigger>;
          <TabsTrigger value="referrals">Referral Links</TabsTrigger>;
          <TabsTrigger value="earnings">Earnings</TabsTrigger>;
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>;
          <TabsTrigger value="resources">Resources</TabsTrigger>;
        </TabsList>;

        <TabsContent value="overview" className="space - y-4">;
        <TabsContent value="overview" className="space-y-4">;
          <PartnerDashboard />;
        </TabsContent>;
        <TabsContent value="referrals" className="space-y-4">;
          <PartnerReferralLinks />;
        </TabsContent>;
        <TabsContent value="earnings" className="space-y-4">;
          <Card>;
            <CardHeader>;
"
        <TabsContent value="leaderboard" className="space-y-4">"
</TabsContent>

          <PartnerLeaderboard />
</PartnerLeaderboard>
        </TabsContent>

"
        <TabsContent value="resources" className="space-y-4">"
</TabsContent>

          <PartnerResources />
</PartnerResources>
        </TabsContent>
      </Tabs>

    </div>"
      <div className="container max - w-6xl py - 10">;"
</div>"
        <div className="text - center mb - 8">;"
</div>"
          <h1 className="text - 4xl font - bold tracking - tight text - white mb - 2">Zion AI Partner Program</h1>;""
          <p className="text - xl text - zion - slate - light">Earn rewards by referring AI talent and clients to our marketplace</p>;"
        </div>;"
        <div className="grid md:grid - cols - 2 gap - 8 mb - 12">;"
</div>"
          <Card className="bg - zion - blue - dark border - zion - blue - light">;"
</Card>
            <CardHeader>;
</CardHeader>"
              <CardTitle className="text - white">For AI Influencers</CardTitle>;"
              <CardDescription > Share your expertise and earn</CardDescription>;
            </CardHeader>;"
            <CardContent className="space - y-4">;"
</CardContent>"
              <div className="flex items - start gap - 3">;"
</div>"
                <CheckCircle className="h - 5 w - 5 text - zion - cyan mt - 0.5" />;"
</CheckCircle>
                <div>;
</div>"
                  <p className="font - medium text - white">Monetize your audience</p>;""
                  <p className="text - sm text - zion - slate - light">Earn commissions from successful referrals</p>;"
                </div>;
              </div>;"
              <div className="flex items - start gap - 3">;"
</div>"
                <CheckCircle className="h - 5 w - 5 text - zion - cyan mt - 0.5" />;"
</CheckCircle>
                <div>;
</div>"
                  <p className="font - medium text - white">Exclusive insights</p>;""
                  <p className="text - sm text - zion - slate - light">Get early access to AI marketplace trends</p>;"
                </div>;
              </div>;"
              <div className="flex items - start gap - 3">;"
</div>"
                <CheckCircle className="h - 5 w - 5 text - zion - cyan mt - 0.5" />;"
</CheckCircle>
                <div>;
</div>"
                  <p className="font - medium text - white">Marketing resources</p>;""
                  <p className="text - sm text - zion - slate - light">Access our partner toolkit with ready - to - use materials</p>;"
                </div>;
              </div>;
            </CardContent>;
          </Card>;"
          <Card className="bg - zion - blue - dark border - zion - blue - light">;"
</Card>
            <CardHeader>;
</CardHeader>"
              <CardTitle className="text - white">For AI Organizations</CardTitle>;"
              <CardDescription > Strategic partnerships</CardDescription>;
            </CardHeader>;"
            <CardContent className="space - y-4">;"
</CardContent>"
              <div className="flex items - start gap - 3">;"
</div>"
                <CheckCircle className="h - 5 w - 5 text - zion - purple mt - 0.5" />;"
</CheckCircle>
                <div>;
</div>"
                  <p className="font - medium text - white">Expand your ecosystem</p>;""
                  <p className="text - sm text - zion - slate - light">Connect your community to AI job opportunities</p>;"
                </div>;
              </div>;"
              <div className="flex items - start gap - 3">;"
</div>"
                <CheckCircle className="h - 5 w - 5 text - zion - purple mt - 0.5" />;"
</CheckCircle>
                <div>;
</div>"
                  <p className="font - medium text - white">Co - branded opportunities</p>;""
                  <p className="text - sm text - zion - slate - light">Create joint content and events</p>;"
                </div>;
              </div>;"
              <div className="flex items - start gap - 3">;"
</div>"
                <CheckCircle className="h - 5 w - 5 text - zion - purple mt - 0.5" />;"
</CheckCircle>
                <div>;
</div>"
                  <p className="font - medium text - white">Custom tracking</p>;""
                  <p className="text - sm text - zion - slate - light">Detailed analytics on your referral performance</p>;"
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;"
        <div className="text - center mb - 12">;"
</div>"
          <h2 className="text - 2xl font - bold text - white mb - 4">How It Works</h2>;""
          <div className="grid md:grid - cols - 3 gap - 6">;"
</div>"
            <Card className="bg - zion - blue - dark border - zion - blue - light">;"
</Card>"
              <CardHeader className="text - center pb - 2">;"
</CardHeader>"
                <div className="mx - auto bg - zion - blue - light rounded - full w - 12 h - 12 flex items - center justify - center mb - 4">;"
</div>"
                  <Users className="h - 6 w - 6 text - zion - cyan" />;"
</Users>
                </div>;"
                <CardTitle className="text - lg text - white">1. Join the Program</CardTitle>;"
              </CardHeader>;"
              <CardContent className="text - center text - sm text - zion - slate - light">;"
</CardContent>
                <p > Sign up and get approved as a Zion AI partner with your own dashboard</p>;
              </CardContent>;
            </Card>;"
            <Card className="bg - zion - blue - dark border - zion - blue - light">;"
</Card>"
              <CardHeader className="text - center pb - 2">;"
</CardHeader>"
                <div className="mx - auto bg - zion - blue - light rounded - full w - 12 h - 12 flex items - center justify - center mb - 4">;"
</div>"
                  <FileText className="h - 6 w - 6 text - zion - cyan" />;"
</FileText>
                </div>;"
                <CardTitle className="text - lg text - white">2. Share Your Link</CardTitle>;"
              </CardHeader>;"
              <CardContent className="text - center text - sm text - zion - slate - light">;"
</CardContent>
                <p > Generate custom referral links and promote to your audience</p>;
              </CardContent>;
            </Card>;"
            <Card className="bg - zion - blue - dark border - zion - blue - light">;"
</Card>"
              <CardHeader className="text - center pb - 2">;"
</CardHeader>"
                <div className="mx - auto bg - zion - blue - light rounded - full w - 12 h - 12 flex items - center justify - center mb - 4">;"
</div>"
                  <PieChart className="h - 6 w - 6 text - zion - cyan" />;"
</PieChart>
                </div>;"
                <CardTitle className="text - lg text - white">3. Earn Rewards</CardTitle>;"
              </CardHeader>;"
              <CardContent className="text - center text - sm text - zion - slate - light">;"
</CardContent>
                <p > Get paid when referrals complete onboarding and engage with our platform</p>;
              </CardContent>;
            </Card>;
          </div>;
        </div>;"
        <div className="flex justify - center gap - 4">;"
</div>
          <Button;"
            size="lg";""
            className="bg - zion - purple hover:bg - zion - purple - dark";""
            on_click={() => navigate ('/signup')}'
</Button>
          </Button>;
          <Button;'
            size="lg";""
            variant="outline";""
            className="text - zion - cyan border - zion - cyan";""
            on_click={() => navigate ('/login')}'
</Button>
          </Button>;
        </div>;
      </div>);'
    <div className="container max - w-7xl py - 10">;"
</div>"
      <div className="flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb - 8">;"
</div>
        <div>;
</div>"
          <h1 className="text - 3xl font - bold tracking - tight text - white">Partner Dashboard</h1>;""
          <p className="text - zion - slate - light">Manage your referral links and track your performance</p>;"
        </div>;"
        <div className="flex gap - 2">;"
</div>"
          <Button variant="outline" className="flex items - center gap - 2" on_click={() => window.print ()}>;"
</Button>"
            <FileDown className="h - 4 w - 4" />;"
</FileDown>"
          <Button variant="outline" className="flex items-center gap-2" onClick={() => window.print()}>;"
</Button>"
            <FileDown className="h-4 w-4" />;"
</FileDown>
          </Button>;
        </div>;
      </div>;"
      <Tabs value={active_tab} onValueChange={setActiveTab} className="space - y-4">;"
</Tabs>"
        <TabsList className="grid grid - cols - 2 md:grid - cols - 5 mb - 4">;"
</TabsList>"
          <TabsTrigger value="overview">Overview</TabsTrigger>;""
          <TabsTrigger value="referrals">Referral Links</TabsTrigger>;""
          <TabsTrigger value="earnings">Earnings</TabsTrigger>;""
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>;""
          <TabsTrigger value="resources">Resources</TabsTrigger>;"
        </TabsList>;"
        <TabsContent value="overview" className="space - y-4">;"
</TabsContent>
          <PartnerDashboard />;
</PartnerDashboard>
        </TabsContent>;"
        <TabsContent value="referrals" className="space - y-4">;"
</TabsContent>
          <PartnerReferralLinks />;
</PartnerReferralLinks>
        </TabsContent>;"
        <TabsContent value="earnings" className="space - y-4">;"
</TabsContent>
          <Card>;
</Card>
            <CardHeader>;
</CardHeader>
              <CardTitle > Earnings & Payouts</CardTitle>;
              <CardDescription > Track your earnings and manage payouts</CardDescription>;
            </CardHeader>;
            <CardContent>;
              {/* This will be implemented later */}
              <p className="text - zion - slate-light">Earnings tracking and payout requests will be available soon.</p>;
            </CardContent>;
          </Card>;
        </TabsContent>;
        <TabsContent value="leaderboard" className="space-y-4">;
          <PartnerLeaderboard />;
        </TabsContent>;
        <TabsContent value="resources" className="space-y-4">;
          <PartnerResources />;
        </TabsContent>;
      </Tabs>;
    </div>);
}

}
;
}
;

        ;
        <TabsContent value="overview" className="space-y-4">;
          <PartnerDashboard />;
        </TabsContent>;
        ;"
        <TabsContent value="referrals" className="space-y-4">;
          <PartnerReferralLinks />;
        </TabsContent>;
        ;"
        <TabsContent value="earnings" className="space-y-4">;
          <Card>;
            <CardHeader>;
</CardContent>"
              <p className="text - zion - slate - light">Earnings tracking and payout requests will be available soon.</p>;"
            </CardContent>;
          </Card>;
        </TabsContent>;"
        <TabsContent value="leaderboard" className="space - y-4">;"
</TabsContent>
          <PartnerLeaderboard />;
</PartnerLeaderboard>
        </TabsContent>;"
        <TabsContent value="resources" className="space - y-4">;"
</TabsContent>

          <PartnerResources />;
</PartnerResources>
        </TabsContent>;
      </Tabs>;

    </div>);"
        <TabsContent value="overview" className="space-y-4">;"
</TabsContent>
          <PartnerDashboard />;
</PartnerDashboard>
        </TabsContent>;"
        <TabsContent value="referrals" className="space-y-4">;"
</TabsContent>
          <PartnerReferralLinks />;
</PartnerReferralLinks>
        </TabsContent>;"
        <TabsContent value="earnings" className="space-y-4">;"
</TabsContent>
          <Card>;
</Card>
            <CardHeader>;
</CardHeader>
              <CardTitle>Earnings & Payouts</CardTitle>;
              <CardDescription>Track your earnings and manage payouts</CardDescription>;
            </CardHeader>;
            <CardContent>;
              {/* This will be implemented later */}"
              <p className="text-zion-slate-light">Earnings tracking and payout requests will be available soon.</p>;
            </CardContent>;
          </Card>;
        </TabsContent>;
        ;"
        <TabsContent value="leaderboard" className="space-y-4">;
          <PartnerLeaderboard />;
        </TabsContent>;
        ;"
        <TabsContent value="resources" className="space-y-4">;
          <PartnerResources />;
        </TabsContent>;
      </Tabs>;
    </div>;
  ),;}
 //If not authenticated, display partner program info and signup CTA if (!isAuthenticated) {"
  return (<div className="container max-w-6xl py-10" > <div className="text-center mb-8" > <h1 className="text-4xl font-bold tracking-tight text-white mb-2" >Zion AI Partner Program</h1> <p className="text-xl text-zion-slate-light" >Earn rewards by referring AI talent and clients to our marketplace</p> grid md:grid-cols-2 gap-8 mb-12"> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle className=" text-white">For AI Influencers</CardTitle> <CardDescription>Share your expertise and earn</CardDescription> </CardHeader> <CardContent className=" space-y-4"> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-cyan mt-0.5"/> <div> <p className=" font-medium text-white">Monetize your audience</p> <p className=" text-sm text-zion-slate-light">Earn commissions from successful referrals</p> </div> </div> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-cyan mt-0.5"/> <div> <p className=" font-medium text-white">Exclusive insights</p> <p className=" text-sm text-zion-slate-light">Get early access to AI marketplace trends</p> </div> </div> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-cyan mt-0.5"/> <div> <p className=" font-medium text-white">Marketing resources</p> <p className=" text-sm text-zion-slate-light">Access our partner toolkit with ready-to-use materials</p> </div> </div> </CardContent> </Card> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle className=" text-white">For AI Organizations</CardTitle> <CardDescription>Strategic partnerships</CardDescription> </CardHeader> <CardContent className=" space-y-4"> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-purple mt-0.5"/> <div> <p className=" font-medium text-white">Expand your ecosystem</p> <p className=" text-sm text-zion-slate-light">Connect your community to AI job opportunities</p> </div> </div> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-purple mt-0.5"/> <div> <p className=" font-medium text-white">Co-branded opportunities</p> <p className=" text-sm text-zion-slate-light">Create joint content and events</p> </div> </div> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-purple mt-0.5"/> <div> <p className=" font-medium text-white">Custom tracking</p> <p className=" text-sm text-zion-slate-light">Detailed analytics on your referral performance</p> </div> </div> </CardContent> </Card> </div> <div className=" text-center mb-12"> <h2 className=" text-2xl font-bold text-white mb-4">How It Works</h2> <div className=" grid md:grid-cols-3 gap-6"> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" text-center pb-2"> <div className=" mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4"> <Users className=" h-6 w-6 text-zion-cyan"/> </div> <CardTitle className=" text-lg text-white">1. Join the Program</CardTitle> </CardHeader> <CardContent className=" text-center text-sm text-zion-slate-light"> <p>Sign up and get approved as a Zion AI partner with your own dashboard</p> </CardContent> </Card> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" text-center pb-2"> <div className=" mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4"> <FileText className=" h-6 w-6 text-zion-cyan"/> </div> <CardTitle className=" text-lg text-white">2. Share Your Link</CardTitle> </CardHeader> <CardContent className=" text-center text-sm text-zion-slate-light"> <p>Generate custom referral links and promote to your audience</p> </CardContent> </Card> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" text-center pb-2"> <div className=" mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4"> <PieChart className=" h-6 w-6 text-zion-cyan"/> </div> <CardTitle className=" text-lg text-white">3. Earn Rewards</CardTitle> </CardHeader> <CardContent className=" text-center text-sm text-zion-slate-light"> <p>Get paid when referrals complete onboarding and engage with our platform</p> </CardContent> </Card> </div> </div> <div className=" flex justify-center gap-4"> <Button size=" lg"className=" bg-zion-purple hover:bg-zion-purple-dark"onClick= {'
  () => navigate ('/signup') 
}> Apply to Join </Button> <Button > Partner Login </Button> </div> </div>) "
}//Authenticated user view - Partner Dashboard <div> <h1 className=" text-3xl font-bold tracking-tight text-white">Partner Dashboard</h1> <p className=" text-zion-slate-light">Manage your referral links and track your performance</p> </div> Export CSV </Button> </div> </div> </TabsList> <TabsContent value=" overview"className=" space-y-4"> <PartnerDashboard /> </TabsContent> <TabsContent value=" referrals"className=" space-y-4"> <PartnerReferralLinks /> </TabsContent> <TabsContent value=" earnings"className=" space-y-4"> <Card> <CardHeader> <CardTitle>Earnings & Payouts</CardTitle> <CardDescription>Track your earnings and manage payouts</CardDescription> </CardHeader> <CardContent> </CardContent> </Card> </TabsContent> <TabsContent value=" leaderboard"className=" space-y-4"> <PartnerLeaderboard /> </TabsContent> <TabsContent value=" resources"className=" space-y-4" > <PartnerResources /> </TabsContent> </Tabs> </div>) 
}
}
}
;

'"

  // If not authenticated, display partner program info and signup CTA;
  if (!isAuthenticated) {;
    return ("
      <div className="container max-w-6xl py-10">"
</div>"
        <div className="text-center mb-8">"
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">"
</h1>
          </h1>"
          <p className="text-xl text-zion-slate-light">"
</p>
        </div>
"
        <div className="grid md:grid-cols-2 gap-8 mb-12">"
          <Card className="bg-zion-blue-dark border-zion-blue-light">"

            <CardHeader>
              <CardTitle className="text-white">For AI Influencers"
              <CardDescription>Share your expertise and earn
            <CardContent className="space-y-4">"
              <div className="flex items-start gap-3">"
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />"

                <div>
                  <p className="font-medium text-white">"
                  </p>"
                  <p className="text-sm text-zion-slate-light">"

                  <p className="font-medium text-white">Exclusive insights</p>""

                  <p className="font-medium text-white">Marketing resources</p>""

              <CardTitle className="text-white">For AI Organizations"
              <CardDescription>Strategic partnerships
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />"

                  <p className="font-medium text-white">Custom tracking</p>""
        <div className="text-center mb-12">"
          <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>""
          <div className="grid md:grid-cols-3 gap-6">"
              <CardHeader className="text-center pb-2">"
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">"
                  <Users className="h-6 w-6 text-zion-cyan" />"

                <CardTitle className="text-lg text-white">"

              <CardContent className="text-center text-sm text-zion-slate-light">"

                <p>
                  <FileText className="h-6 w-6 text-zion-cyan" />"

                  <PieChart className="h-6 w-6 text-zion-cyan" />"

        <div className="flex justify-center gap-4">"
          <Button;"
            size="lg"""
            className="bg-zion-purple hover:bg-zion-purple-dark"")"
            onClick={() => navigate("/signup")}"

            variant="outline"""
            className="text-zion-cyan border-zion-cyan"""
            onClick={() => navigate("/login")}"

    <div className="container max-w-7xl py-10">"
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">"
          <h1 className="text-3xl font-bold tracking-tight text-white">"
          <p className="text-zion-slate-light">"
        <div className="flex gap-2">"
            className="flex items-center gap-2""
            onClick={() => window.print()}
            <FileDown className="h-4 w-4" />"

      <Tabs;
        value={activeTab}
        onValueChange={setActiveTab}"
        className="space-y-4""
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">"
          <TabsTrigger value="overview">Overview""
          <TabsTrigger value="referrals">Referral Links""
          <TabsTrigger value="earnings">Earnings""
          <TabsTrigger value="leaderboard">Leaderboard""
          <TabsTrigger value="resources">Resources"
        <TabsContent value="overview" className="space-y-4">"

          <PartnerDashboard />

        <TabsContent value="referrals" className="space-y-4">"

          <PartnerReferralLinks />

        <TabsContent value="earnings" className="space-y-4">"

          <Card>

              <CardTitle>Earnings & Payouts
              <CardDescription>

            <CardContent>
        <TabsContent value="leaderboard" className="space-y-4">"

          <PartnerLeaderboard />

        <TabsContent value="resources" className="space-y-4">"

          <PartnerResources />

      <div className="container max - w-6xl py - 10">;"
        <div className="text - center mb - 8">;"
          <h1 className="text - 4xl font - bold tracking - tight text - white mb - 2">Zion AI Partner Program</h1>;""
          <p className="text - xl text - zion - slate - light">Earn rewards by referring AI talent and clients to our marketplace</p>;"
        </div>;"
        <div className="grid md:grid - cols - 2 gap - 8 mb - 12">;"
          <Card className="bg - zion - blue - dark border - zion - blue - light">;"

            <CardHeader>;
              <CardTitle className="text - white">For AI Influencers;"
              <CardDescription > Share your expertise and earn;
            ;"
            <CardContent className="space - y-4">;"
              <div className="flex items - start gap - 3">;"
                <CheckCircle className="h - 5 w - 5 text - zion - cyan mt - 0.5" />;"

                <div>;
                  <p className="font - medium text - white">Monetize your audience</p>;""
                  <p className="text - sm text - zion - slate - light">Earn commissions from successful referrals</p>;"
                </div>;

                  <p className="font - medium text - white">Exclusive insights</p>;""
                  <p className="text - sm text - zion - slate - light">Get early access to AI marketplace trends</p>;"

                  <p className="font - medium text - white">Marketing resources</p>;""
                  <p className="text - sm text - zion - slate - light">Access our partner toolkit with ready - to - use materials</p>;"
            ;

              <CardTitle className="text - white">For AI Organizations;"
              <CardDescription > Strategic partnerships;
                <CheckCircle className="h - 5 w - 5 text - zion - purple mt - 0.5" />;"

                  <p className="font - medium text - white">Expand your ecosystem</p>;""
                  <p className="text - sm text - zion - slate - light">Connect your community to AI job opportunities</p>;"

                  <p className="font - medium text - white">Co - branded opportunities</p>;""
                  <p className="text - sm text - zion - slate - light">Create joint content and events</p>;"

                  <p className="font - medium text - white">Custom tracking</p>;""
                  <p className="text - sm text - zion - slate - light">Detailed analytics on your referral performance</p>;"
        <div className="text - center mb - 12">;"
          <h2 className="text - 2xl font - bold text - white mb - 4">How It Works</h2>;""
          <div className="grid md:grid - cols - 3 gap - 6">;"
              <CardHeader className="text - center pb - 2">;"
                <div className="mx - auto bg - zion - blue - light rounded - full w - 12 h - 12 flex items - center justify - center mb - 4">;"
                  <Users className="h - 6 w - 6 text - zion - cyan" />;"

                <CardTitle className="text - lg text - white">1. Join the Program;"
              <CardContent className="text - center text - sm text - zion - slate - light">;"

                <p > Sign up and get approved as a Zion AI partner with your own dashboard</p>;
                  <FileText className="h - 6 w - 6 text - zion - cyan" />;"

                <CardTitle className="text - lg text - white">2. Share Your Link;"

                <p > Generate custom referral links and promote to your audience</p>;
                  <PieChart className="h - 6 w - 6 text - zion - cyan" />;"

                <CardTitle className="text - lg text - white">3. Earn Rewards;"

                <p > Get paid when referrals complete onboarding and engage with our platform</p>;
        <div className="flex justify - center gap - 4">;"
            size="lg";""
            className="bg - zion - purple hover:bg - zion - purple - dark";""
            on_click={() => navigate ('/signup')}

          <Button;
            variant="outline";""
            className="text - zion - cyan border - zion - cyan";""
            on_click={() => navigate ('/login')}

      </div>);
    <div className="container max - w-7xl py - 10">;"
      <div className="flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb - 8">;"
          <h1 className="text - 3xl font - bold tracking - tight text - white">Partner Dashboard</h1>;""
          <p className="text - zion - slate - light">Manage your referral links and track your performance</p>;"
        <div className="flex gap - 2">;"
          <Button variant="outline" className="flex items - center gap - 2" on_click={() => window.print ()}>;"
            <FileDown className="h - 4 w - 4" />;"
          <Button variant="outline" className="flex items-center gap-2" onClick={() => window.print()}>;"
            <FileDown className="h-4 w-4" />;"

      <Tabs value={active_tab} onValueChange={setActiveTab} className="space - y-4">;"
        <TabsList className="grid grid - cols - 2 md:grid - cols - 5 mb - 4">;"
          <TabsTrigger value="overview">Overview;""
          <TabsTrigger value="referrals">Referral Links;""
          <TabsTrigger value="earnings">Earnings;""
          <TabsTrigger value="leaderboard">Leaderboard;""
          <TabsTrigger value="resources">Resources;"
        <TabsContent value="overview" className="space - y-4">;"

          <PartnerDashboard />;

        <TabsContent value="referrals" className="space - y-4">;"

          <PartnerReferralLinks />;

        <TabsContent value="earnings" className="space - y-4">;"

          <Card>;

              <CardTitle > Earnings & Payouts;
              <CardDescription > Track your earnings and manage payouts;
            <CardContent>;
              <p className="text - zion - slate - light">Earnings tracking and payout requests will be available soon.</p>;"
        <TabsContent value="leaderboard" className="space - y-4">;"

          <PartnerLeaderboard />;

        <TabsContent value="resources" className="space - y-4">;"

          <PartnerResources />;

    </div>);"
        <TabsContent value="overview" className="space-y-4">;"

        <TabsContent value="referrals" className="space-y-4">;"

        <TabsContent value="earnings" className="space-y-4">;"

              <CardTitle>Earnings & Payouts;
              <CardDescription>Track your earnings and manage payouts;
              <p className="text-zion-slate-light">Earnings tracking and payout requests will be available soon.</p>;"
        <TabsContent value="leaderboard" className="space-y-4">;"

        <TabsContent value="resources" className="space-y-4">;"

  return (<div className="container max-w-6xl py-10" > <div className="text-center mb-8" > <h1 className="text-4xl font-bold tracking-tight text-white mb-2" >Zion AI Partner Program</h1> <p className="text-xl text-zion-slate-light" >Earn rewards by referring AI talent and clients to our marketplace</p> grid md:grid-cols-2 gap-8 mb-12"> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle className=" text-white">For AI Influencers <CardDescription>Share your expertise and earn  <CardContent className=" space-y-4"> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-cyan mt-0.5"/> <div> <p className=" font-medium text-white">Monetize your audience</p> <p className=" text-sm text-zion-slate-light">Earn commissions from successful referrals</p> </div> </div> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-cyan mt-0.5"/> <div> <p className=" font-medium text-white">Exclusive insights</p> <p className=" text-sm text-zion-slate-light">Get early access to AI marketplace trends</p> </div> </div> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-cyan mt-0.5"/> <div> <p className=" font-medium text-white">Marketing resources</p> <p className=" text-sm text-zion-slate-light">Access our partner toolkit with ready-to-use materials</p> </div> </div>   <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle className=" text-white">For AI Organizations <CardDescription>Strategic partnerships  <CardContent className=" space-y-4"> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-purple mt-0.5"/> <div> <p className=" font-medium text-white">Expand your ecosystem</p> <p className=" text-sm text-zion-slate-light">Connect your community to AI job opportunities</p> </div> </div> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-purple mt-0.5"/> <div> <p className=" font-medium text-white">Co-branded opportunities</p> <p className=" text-sm text-zion-slate-light">Create joint content and events</p> </div> </div> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-purple mt-0.5"/> <div> <p className=" font-medium text-white">Custom tracking</p> <p className=" text-sm text-zion-slate-light">Detailed analytics on your referral performance</p> </div> </div>   </div> <div className=" text-center mb-12"> <h2 className=" text-2xl font-bold text-white mb-4">How It Works</h2> <div className=" grid md:grid-cols-3 gap-6"> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" text-center pb-2"> <div className=" mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4"> <Users className=" h-6 w-6 text-zion-cyan"/> </div> <CardTitle className=" text-lg text-white">1. Join the Program  <CardContent className=" text-center text-sm text-zion-slate-light"> <p>Sign up and get approved as a Zion AI partner with your own dashboard</p>   <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" text-center pb-2"> <div className=" mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4"> <FileText className=" h-6 w-6 text-zion-cyan"/> </div> <CardTitle className=" text-lg text-white">2. Share Your Link  <CardContent className=" text-center text-sm text-zion-slate-light"> <p>Generate custom referral links and promote to your audience</p>   <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" text-center pb-2"> <div className=" mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4"> <PieChart className=" h-6 w-6 text-zion-cyan"/> </div> <CardTitle className=" text-lg text-white">3. Earn Rewards  <CardContent className=" text-center text-sm text-zion-slate-light"> <p>Get paid when referrals complete onboarding and engage with our platform</p>   </div> </div> <div className=" flex justify-center gap-4"> <Button size=" lg"className=" bg-zion-purple hover:bg-zion-purple-dark"onClick= {")"
  () => navigate ('/signup')
}> Apply to Join  <Button > Partner Login  </div> </div>) 
}//Authenticated user view - Partner Dashboard <div> <h1 className=" text-3xl font-bold tracking-tight text-white">Partner Dashboard</h1> <p className=" text-zion-slate-light">Manage your referral links and track your performance</p> </div> Export CSV  </div> </div>  <TabsContent value=" overview"className=" space-y-4"> <PartnerDashboard />  <TabsContent value=" referrals"className=" space-y-4"> <PartnerReferralLinks />  <TabsContent value=" earnings"className=" space-y-4"> <Card> <CardHeader> <CardTitle>Earnings & Payouts <CardDescription>Track your earnings and manage payouts  <CardContent>    <TabsContent value=" leaderboard"className=" space-y-4"> <PartnerLeaderboard />  <TabsContent value=" resources"className=" space-y-4" > <PartnerResources />   </div>)""
pr-12325
</CardContent>"
              <p className="text-zion-slate-light">Earnings tracking and payout requests will be available soon.</p>;"
            </CardContent>;
          </Card>;
        </TabsContent>;"
        <TabsContent value="leaderboard" className="space-y-4">;"
</TabsContent>
          <PartnerLeaderboard />;
</PartnerLeaderboard>
        </TabsContent>;"
        <TabsContent value="resources" className="space-y-4">;"
</TabsContent>

          <PartnerResources />;
</PartnerResources>
        </TabsContent>;
      </Tabs>;

    </div>;"
  return (<div className="container max-w-6xl py-10" > <div className="text-center mb-8" > <h1 className="text-4xl font-bold tracking-tight text-white mb-2" >Zion AI Partner Program</h1> <p className="text-xl text-zion-slate-light" >Earn rewards by referring AI talent and clients to our marketplace</p> grid md:grid-cols-2 gap-8 mb-12"> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle className=" text-white">For AI Influencers</CardTitle> <CardDescription>Share your expertise and earn</CardDescription> </CardHeader> <CardContent className=" space-y-4"> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-cyan mt-0.5"/> <div> <p className=" font-medium text-white">Monetize your audience</p> <p className=" text-sm text-zion-slate-light">Earn commissions from successful referrals</p> </div> </div> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-cyan mt-0.5"/> <div> <p className=" font-medium text-white">Exclusive insights</p> <p className=" text-sm text-zion-slate-light">Get early access to AI marketplace trends</p> </div> </div> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-cyan mt-0.5"/> <div> <p className=" font-medium text-white">Marketing resources</p> <p className=" text-sm text-zion-slate-light">Access our partner toolkit with ready-to-use materials</p> </div> </div> </CardContent> </Card> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader> <CardTitle className=" text-white">For AI Organizations</CardTitle> <CardDescription>Strategic partnerships</CardDescription> </CardHeader> <CardContent className=" space-y-4"> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-purple mt-0.5"/> <div> <p className=" font-medium text-white">Expand your ecosystem</p> <p className=" text-sm text-zion-slate-light">Connect your community to AI job opportunities</p> </div> </div> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-purple mt-0.5"/> <div> <p className=" font-medium text-white">Co-branded opportunities</p> <p className=" text-sm text-zion-slate-light">Create joint content and events</p> </div> </div> <div className=" flex items-start gap-3"> <CheckCircle className=" h-5 w-5 text-zion-purple mt-0.5"/> <div> <p className=" font-medium text-white">Custom tracking</p> <p className=" text-sm text-zion-slate-light">Detailed analytics on your referral performance</p> </div> </div> </CardContent> </Card> </div> <div className=" text-center mb-12"> <h2 className=" text-2xl font-bold text-white mb-4">How It Works</h2> <div className=" grid md:grid-cols-3 gap-6"> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" text-center pb-2"> <div className=" mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4"> <Users className=" h-6 w-6 text-zion-cyan"/> </div> <CardTitle className=" text-lg text-white">1. Join the Program</CardTitle> </CardHeader> <CardContent className=" text-center text-sm text-zion-slate-light"> <p>Sign up and get approved as a Zion AI partner with your own dashboard</p> </CardContent> </Card> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" text-center pb-2"> <div className=" mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4"> <FileText className=" h-6 w-6 text-zion-cyan"/> </div> <CardTitle className=" text-lg text-white">2. Share Your Link</CardTitle> </CardHeader> <CardContent className=" text-center text-sm text-zion-slate-light"> <p>Generate custom referral links and promote to your audience</p> </CardContent> </Card> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" text-center pb-2"> <div className=" mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4"> <PieChart className=" h-6 w-6 text-zion-cyan"/> </div> <CardTitle className=" text-lg text-white">3. Earn Rewards</CardTitle> </CardHeader> <CardContent className=" text-center text-sm text-zion-slate-light"> <p>Get paid when referrals complete onboarding and engage with our platform</p> </CardContent> </Card> </div> </div> <div className=" flex justify-center gap-4"> <Button size=" lg"className=" bg-zion-purple hover:bg-zion-purple-dark"onClick= {")"
  () => navigate ('/signup')'
}> Apply to Join </Button> <Button > Partner Login </Button> </div> </div>) '
}//Authenticated user view - Partner Dashboard <div> <h1 className=" text-3xl font-bold tracking-tight text-white">Partner Dashboard</h1> <p className=" text-zion-slate-light">Manage your referral links and track your performance</p> </div> Export CSV </Button> </div> </div> </TabsList> <TabsContent value=" overview"className=" space-y-4"> <PartnerDashboard /> </TabsContent> <TabsContent value=" referrals"className=" space-y-4"> <PartnerReferralLinks /> </TabsContent> <TabsContent value=" earnings"className=" space-y-4"> <Card> <CardHeader> <CardTitle>Earnings & Payouts</CardTitle> <CardDescription>Track your earnings and manage payouts</CardDescription> </CardHeader> <CardContent> </CardContent> </Card> </TabsContent> <TabsContent value=" leaderboard"className=" space-y-4"> <PartnerLeaderboard /> </TabsContent> <TabsContent value=" resources"className=" space-y-4" > <PartnerResources /> </TabsContent> </Tabs> </div>)""

