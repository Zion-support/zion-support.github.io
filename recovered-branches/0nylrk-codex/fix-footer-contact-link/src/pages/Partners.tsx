
<<<<<<< HEAD
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
;
export default function Partners() {;
  const [activeTab, setActiveTab] = useState("overview"),;
  const { user, isAuthenticated } = useAuth(),;
  const navigate = useNavigate(),;
;
  // If not authenticated, display partner program info and signup CTA;
  if (!isAuthenticated) {;
    return (;
      <div className="container max-w-6xl py-10">;
        <div className="text-center mb-8">;
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Zion AI Partner Program</h1>;
          <p className="text-xl text-zion-slate-light">Earn rewards by referring AI talent and clients to our marketplace</p>;
        </div>;
;
        <div className="grid md:grid-cols-2 gap-8 mb-12">;
          <Card className="bg-zion-blue-dark border-zion-blue-light">;
            <CardHeader>;
              <CardTitle className="text-white">For AI Influencers</CardTitle>;
              <CardDescription>Share your expertise and earn</CardDescription>;
            </CardHeader>;
            <CardContent className="space-y-4">;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />;
                <div>;
                  <p className="font-medium text-white">Monetize your audience</p>;
                  <p className="text-sm text-zion-slate-light">Earn commissions from successful referrals</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />;
                <div>;
                  <p className="font-medium text-white">Exclusive insights</p>;
                  <p className="text-sm text-zion-slate-light">Get early access to AI marketplace trends</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />;
                <div>;
                  <p className="font-medium text-white">Marketing resources</p>;
                  <p className="text-sm text-zion-slate-light">Access our partner toolkit with ready-to-use materials</p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
;
          <Card className="bg-zion-blue-dark border-zion-blue-light">;
            <CardHeader>;
              <CardTitle className="text-white">For AI Organizations</CardTitle>;
              <CardDescription>Strategic partnerships</CardDescription>;
            </CardHeader>;
            <CardContent className="space-y-4">;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />;
                <div>;
                  <p className="font-medium text-white">Expand your ecosystem</p>;
                  <p className="text-sm text-zion-slate-light">Connect your community to AI job opportunities</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />;
                <div>;
                  <p className="font-medium text-white">Co-branded opportunities</p>;
                  <p className="text-sm text-zion-slate-light">Create joint content and events</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />;
                <div>;
                  <p className="font-medium text-white">Custom tracking</p>;
                  <p className="text-sm text-zion-slate-light">Detailed analytics on your referral performance</p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
;
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
            ;
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
            ;
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
;
        <div className="flex justify-center gap-4">;
          <Button ;
            size="lg" ;
            className="bg-zion-purple hover:bg-zion-purple-dark";
            onClick={() => navigate('/signup')}
          >;
            Apply to Join;
          </Button>;
          <Button ;
            size="lg" ;
            variant="outline" ;
            className="text-zion-cyan border-zion-cyan";
            onClick={() => navigate('/login')}
          >;
            Partner Login;
          </Button>;
        </div>;
      </div>;
    ),;
  }
;
  // Authenticated user view - Partner Dashboard;
  return (;
    <div className="container max-w-7xl py-10">;
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;
        <div>;
          <h1 className="text-3xl font-bold tracking-tight text-white">Partner Dashboard</h1>;
          <p className="text-zion-slate-light">Manage your referral links and track your performance</p>;
        </div>;
        <div className="flex gap-2">;
          <Button variant="outline" className="flex items-center gap-2" onClick={() => window.print()}>;
            <FileDown className="h-4 w-4" />;
            Export CSV;
          </Button>;
        </div>;
      </div>;
;
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">;
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">;
          <TabsTrigger value="overview">Overview</TabsTrigger>;
          <TabsTrigger value="referrals">Referral Links</TabsTrigger>;
          <TabsTrigger value="earnings">Earnings</TabsTrigger>;
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>;
          <TabsTrigger value="resources">Resources</TabsTrigger>;
        </TabsList>;
        ;
        <TabsContent value="overview" className="space-y-4">;
          <PartnerDashboard />;
        </TabsContent>;
        ;
        <TabsContent value="referrals" className="space-y-4">;
          <PartnerReferralLinks />;
        </TabsContent>;
        ;
        <TabsContent value="earnings" className="space-y-4">;
          <Card>;
            <CardHeader>;
              <CardTitle>Earnings & Payouts</CardTitle>;
              <CardDescription>Track your earnings and manage payouts</CardDescription>;
            </CardHeader>;
            <CardContent>;
              {/* This will be implemented later */}
              <p className="text-zion-slate-light">Earnings tracking and payout requests will be available soon.</p>;
            </CardContent>;
          </Card>;
        </TabsContent>;
        ;
        <TabsContent value="leaderboard" className="space-y-4">;
          <PartnerLeaderboard />;
        </TabsContent>;
        ;
        <TabsContent value="resources" className="space-y-4">;
          <PartnerResources />;
        </TabsContent>;
      </Tabs>;
    </div>;
  ),;
=======
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
import { useAuth } from "@/hooks/useAuth",
import { useNavigate } from "react-router-dom",
export default function Partners() {
  const [activeTab, setActiveTab] = useState("overview"),
  const { user, isAuthenticated } = useAuth(),
  const navigate = useNavigate(),
  // If not authenticated, display partner program info and signup CTA
  if (!isAuthenticated) {
    return (
      <div className=&quot;container max-w-6xl py-10&quot;>
        <div className=&quot;text-center mb-8&quot;>
          <h1 className=&quot;text-4xl font-bold tracking-tight text-white mb-2&quot;>Zion AI Partner Program</h1>
          <p className=&quot;text-xl text-zion-slate-light&quot;>Earn rewards by referring AI talent and clients to our marketplace</p>

export default function Partners() {_const [activeTab, _setActiveTab] = useState("overview");
  const { user, _isAuthenticated} = useAuth();
  const _navigate = useNavigate();

  // If not authenticated, display partner program info and signup CTA
  if (!isAuthenticated) {_return (_<div className="container max-w-6xl py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Zion AI Partner Program</h1>
          <p className="text-xl text-zion-slate-light">Earn rewards by referring AI talent and clients to our marketplace</p>
        </div>

        <div className=&quot;grid md:grid-cols-2 gap-8 mb-12&quot;>
          <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
            <CardHeader>
              <CardTitle className=&quot;text-white&quot;>For AI Influencers</CardTitle>
              <CardDescription>Share your expertise and earn</CardDescription>
            </CardHeader>
            <CardContent className=&quot;space-y-4&quot;>
              <div className=&quot;flex items-start gap-3&quot;>
                <CheckCircle className=&quot;h-5 w-5 text-zion-cyan mt-0.5&quot; />
                <div>
                  <p className=&quot;font-medium text-white&quot;>Monetize your audience</p>
                  <p className=&quot;text-sm text-zion-slate-light&quot;>Earn commissions from successful referrals</p>
                </div>
              </div>
              <div className=&quot;flex items-start gap-3&quot;>
                <CheckCircle className=&quot;h-5 w-5 text-zion-cyan mt-0.5&quot; />
                <div>
                  <p className=&quot;font-medium text-white&quot;>Exclusive insights</p>
                  <p className=&quot;text-sm text-zion-slate-light&quot;>Get early access to AI marketplace trends</p>
                </div>
              </div>
              <div className=&quot;flex items-start gap-3&quot;>
                <CheckCircle className=&quot;h-5 w-5 text-zion-cyan mt-0.5&quot; />
                <div>
                  <p className=&quot;font-medium text-white&quot;>Marketing resources</p>
                  <p className=&quot;text-sm text-zion-slate-light&quot;>Access our partner toolkit with ready-to-use materials</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
            <CardHeader>
              <CardTitle className=&quot;text-white&quot;>For AI Organizations</CardTitle>
              <CardDescription>Strategic partnerships</CardDescription>
            </CardHeader>
            <CardContent className=&quot;space-y-4&quot;>
              <div className=&quot;flex items-start gap-3&quot;>
                <CheckCircle className=&quot;h-5 w-5 text-zion-purple mt-0.5&quot; />
                <div>
                  <p className=&quot;font-medium text-white&quot;>Expand your ecosystem</p>
                  <p className=&quot;text-sm text-zion-slate-light&quot;>Connect your community to AI job opportunities</p>
                </div>
              </div>
              <div className=&quot;flex items-start gap-3&quot;>
                <CheckCircle className=&quot;h-5 w-5 text-zion-purple mt-0.5&quot; />
                <div>
                  <p className=&quot;font-medium text-white&quot;>Co-branded opportunities</p>
                  <p className=&quot;text-sm text-zion-slate-light&quot;>Create joint content and events</p>
                </div>
              </div>
              <div className=&quot;flex items-start gap-3&quot;>
                <CheckCircle className=&quot;h-5 w-5 text-zion-purple mt-0.5&quot; />
                <div>
                  <p className=&quot;font-medium text-white&quot;>Custom tracking</p>
                  <p className=&quot;text-sm text-zion-slate-light&quot;>Detailed analytics on your referral performance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className=&quot;text-center mb-12&quot;>
          <h2 className=&quot;text-2xl font-bold text-white mb-4&quot;>How It Works</h2>
          <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
            <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
              <CardHeader className=&quot;text-center pb-2&quot;>
                <div className=&quot;mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4&quot;>
                  <Users className=&quot;h-6 w-6 text-zion-cyan&quot; />
                </div>
                <CardTitle className=&quot;text-lg text-white&quot;>1. Join the Program</CardTitle>
              </CardHeader>
              <CardContent className=&quot;text-center text-sm text-zion-slate-light&quot;>
                <p>Sign up and get approved as a Zion AI partner with your own dashboard</p>
              </CardContent>
            </Card>
            
            <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
              <CardHeader className=&quot;text-center pb-2&quot;>
                <div className=&quot;mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4&quot;>
                  <FileText className=&quot;h-6 w-6 text-zion-cyan&quot; />
                </div>
                <CardTitle className=&quot;text-lg text-white&quot;>2. Share Your Link</CardTitle>
              </CardHeader>
              <CardContent className=&quot;text-center text-sm text-zion-slate-light&quot;>
                <p>Generate custom referral links and promote to your audience</p>
              </CardContent>
            </Card>
            
            <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
              <CardHeader className=&quot;text-center pb-2&quot;>
                <div className=&quot;mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4&quot;>
                  <PieChart className=&quot;h-6 w-6 text-zion-cyan&quot; />
                </div>
                <CardTitle className=&quot;text-lg text-white&quot;>3. Earn Rewards</CardTitle>
              </CardHeader>
              <CardContent className=&quot;text-center text-sm text-zion-slate-light&quot;>
                <p>Get paid when referrals complete onboarding and engage with our platform</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className=&quot;flex justify-center gap-4&quot;>
          <Button 
            size=&quot;lg&quot; 
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark&quot;
            onClick={() => navigate('/signup')}
          >
            Apply to Join
          </Button>
          <Button 
            size=&quot;lg&quot; 
            variant=&quot;outline&quot; 
            className=&quot;text-zion-cyan border-zion-cyan&quot;
            onClick={() => navigate('/login')}          >
            Partner Login
          </Button>
        </div>
      </div>
    )
  }

  // Authenticated user view - Partner Dashboard
  return (
    <div className=&quot;container max-w-7xl py-10&quot;>
      <div className=&quot;flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8&quot;>        <div>
          <h1 className=&quot;text-3xl font-bold tracking-tight text-white&quot;>Partner Dashboard</h1>
          <p className=&quot;text-zion-slate-light&quot;>Manage your referral links and track your performance</p>
        </div>
        <div className=&quot;flex gap-2&quot;>
          <Button variant=&quot;outline&quot; className=&quot;flex items-center gap-2&quot; onClick={() => window.print()}>
            <FileDown className=&quot;h-4 w-4&quot; />            Export CSV
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className=&quot;space-y-4&quot;>
        <TabsList className=&quot;grid grid-cols-2 md:grid-cols-5 mb-4&quot;>
          <TabsTrigger value=&quot;overview&quot;>Overview</TabsTrigger>
          <TabsTrigger value=&quot;referrals&quot;>Referral Links</TabsTrigger>
          <TabsTrigger value=&quot;earnings&quot;>Earnings</TabsTrigger>
          <TabsTrigger value=&quot;leaderboard&quot;>Leaderboard</TabsTrigger>
          <TabsTrigger value=&quot;resources&quot;>Resources</TabsTrigger>        </TabsList>
        
        <TabsContent value=&quot;overview&quot; className=&quot;space-y-4&quot;>
          <PartnerDashboard />
        </TabsContent>
        
        <TabsContent value=&quot;referrals&quot; className=&quot;space-y-4&quot;>
          <PartnerReferralLinks />
        </TabsContent>
        
        <TabsContent value=&quot;earnings&quot; className=&quot;space-y-4&quot;>
          <Card>
            <CardHeader>
              <CardTitle>Earnings & Payouts</CardTitle>
              <CardDescription>Track your earnings and manage payouts</CardDescription>
            </CardHeader>
            <CardContent>
              {/* This will be implemented later */}
              <p className=&quot;text-zion-slate-light&quot;>Earnings tracking and payout requests will be available soon.</p>            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value=&quot;leaderboard&quot; className=&quot;space-y-4&quot;>
          <PartnerLeaderboard />
        </TabsContent>
        
        <TabsContent value=&quot;resources&quot; className=&quot;space-y-4&quot;>
          <PartnerResources />
        </TabsContent>
      </Tabs>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
