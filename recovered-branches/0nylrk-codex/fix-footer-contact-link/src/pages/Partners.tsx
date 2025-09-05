
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { CheckCircle, FileDown, FileText, PieChart, Users } from &quot;lucide-react&quot;;
import { useState } from &quot;react&quot;;
import { PartnerRegistrationForm } from &quot;@/components/partners/PartnerRegistrationForm&quot;;
import { PartnerReferralLinks } from &quot;@/components/partners/PartnerReferralLinks&quot;;
import { PartnerDashboard } from &quot;@/components/partners/PartnerDashboard&quot;;
import { PartnerLeaderboard } from &quot;@/components/partners/PartnerLeaderboard&quot;;
import { PartnerResources } from &quot;@/components/partners/PartnerResources&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;

export default function Partners() {
  const [activeTab, setActiveTab] = useState(&quot;overview&quot;);
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // If not authenticated, display partner program info and signup CTA
  if (!isAuthenticated) {
    return (
      <div className=&quot;container max-w-6xl py-10&quot;>
        <div className=&quot;text-center mb-8&quot;>
          <h1 className=&quot;text-4xl font-bold tracking-tight text-white mb-2&quot;>Zion AI Partner Program</h1>
          <p className=&quot;text-xl text-zion-slate-light&quot;>Earn rewards by referring AI talent and clients to our marketplace</p>
=======

export default function Partners() {_const [activeTab, _setActiveTab] = useState("overview");
  const { user, _isAuthenticated} = useAuth();
  const _navigate = useNavigate();

  // If not authenticated, display partner program info and signup CTA
  if (!isAuthenticated) {_return (_<div className="container max-w-6xl py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Zion AI Partner Program</h1>
          <p className="text-xl text-zion-slate-light">Earn rewards by referring AI talent and clients to our marketplace</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
            size=&quot;lg&quot; 
            variant=&quot;outline&quot; 
            className=&quot;text-zion-cyan border-zion-cyan&quot;
            onClick={() => navigate('/login')}
=======
            size="lg" 
            variant="outline" 
            className="text-zion-cyan border-zion-cyan"
            onClick={_() => navigate('/login')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Partner Login
          </Button>
        </div>
      </div>
    )
  }

  // Authenticated user view - Partner Dashboard
<<<<<<< HEAD
  return (
    <div className=&quot;container max-w-7xl py-10&quot;>
      <div className=&quot;flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8&quot;>
=======
  return (_<div className="container max-w-7xl py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <div>
          <h1 className=&quot;text-3xl font-bold tracking-tight text-white&quot;>Partner Dashboard</h1>
          <p className=&quot;text-zion-slate-light&quot;>Manage your referral links and track your performance</p>
        </div>
<<<<<<< HEAD
        <div className=&quot;flex gap-2&quot;>
          <Button variant=&quot;outline&quot; className=&quot;flex items-center gap-2&quot; onClick={() => window.print()}>
            <FileDown className=&quot;h-4 w-4&quot; />
=======
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2" onClick={_() => window.print()}>
            <FileDown className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Export CSV
          </Button>
        </div>
      </div>

<<<<<<< HEAD
      <Tabs value={activeTab} onValueChange={setActiveTab} className=&quot;space-y-4&quot;>
        <TabsList className=&quot;grid grid-cols-2 md:grid-cols-5 mb-4&quot;>
          <TabsTrigger value=&quot;overview&quot;>Overview</TabsTrigger>
          <TabsTrigger value=&quot;referrals&quot;>Referral Links</TabsTrigger>
          <TabsTrigger value=&quot;earnings&quot;>Earnings</TabsTrigger>
          <TabsTrigger value=&quot;leaderboard&quot;>Leaderboard</TabsTrigger>
          <TabsTrigger value=&quot;resources&quot;>Resources</TabsTrigger>
=======
      <Tabs value={_activeTab} onValueChange={_setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="referrals">Referral Links</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </TabsList>
        
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
<<<<<<< HEAD
              {/* This will be implemented later */}
              <p className=&quot;text-zion-slate-light&quot;>Earnings tracking and payout requests will be available soon.</p>
=======
              {_/* This will be implemented later */}
              <p className="text-zion-slate-light">Earnings tracking and payout requests will be available soon.</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </CardContent>
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
}
