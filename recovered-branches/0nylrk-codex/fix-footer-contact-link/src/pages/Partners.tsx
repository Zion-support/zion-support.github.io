<<<<<<< HEAD

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
=======
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

import { useNavigate } from "react-router-dom";
export default function Partners() { return null; }
  const { user, isAuthenticated } = useAuth();

  const navigate = useNavigate();

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
  const [activeTab, setActiveTab] = useState($2);
  const { user, isAuthenticated } = useAuth($2);
  const navigate = useNavigate($2);
  const [activeTab, setActiveTab] = useState("overview");
  const { user, isAuthenticated } = useAuth();

  const navigate = useNavigate();
import { useAuth } from "@/hooks/useAuth",
import { useNavigate } from "react-router-dom",
export default function Partners() {
  const [activeTab, setActiveTab] = useState("overview"),
  const { user, isAuthenticated } = useAuth(),
  const navigate = useNavigate(),

  // If not authenticated, display partner program info and signup CTA
  if (!isAuthenticated) {
    return (
      <div className="container max-w-6xl py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Zion AI Partner Program</h1>
          <p className="text-xl text-zion-slate-light">Earn rewards by referring AI talent and clients to our marketplace</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-zion-blue-dark border-zion-blue-light">
            <CardHeader>
              <CardTitle className="text-white">For AI Influencers</CardTitle>
              <CardDescription>Share your expertise and earn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />
                <div>
                  <p className="font-medium text-white">Monetize your audience</p>
                  <p className="text-sm text-zion-slate-light">Earn commissions from successful referrals</p>

  const [activeTab, setActiveTab] = useState("overview");
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
>>>>>>> origin/cursor/delete-old-data-records-6bba

      <div className="container max-w-6xl py-10">;
        <div className="text-center mb-8">;
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Zion AI Partner Program</h1>;
          <p className="text-xl text-zion-slate-light">Earn rewards by referring AI talent and clients to our marketplace</p>;
<<<<<<< HEAD


        </div>;




                <div>;
                  <p className="font-medium text-white">Monetize your audience</p>;
                  <p className="text-sm text-zion-slate-light">Earn commissions from successful referrals</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;



                <div>;
                  <p className="font-medium text-white">Exclusive insights</p>;
                  <p className="text-sm text-zion-slate-light">Get early access to AI marketplace trends</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;



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



                <div>;
                  <p className="font-medium text-white">Expand your ecosystem</p>;
                  <p className="text-sm text-zion-slate-light">Connect your community to AI job opportunities</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;



                <div>;
                  <p className="font-medium text-white">Co-branded opportunities</p>;
                  <p className="text-sm text-zion-slate-light">Create joint content and events</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;



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



=======
        </div>;


>>>>>>> origin/cursor/delete-old-data-records-6bba

  // If not authenticated, display partner program info and signup CTA;
  if (!isAuthenticated) {;
    return (

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="container max-w-6xl py-10">;
        <div className="text-center mb-8">;
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Zion AI Partner Program</h1>;
          <p className="text-xl text-zion-slate-light">Earn rewards by referring AI talent and clients to our marketplace</p>;
        </div>;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className="grid md:grid-cols-2 gap-8 mb-12">;
          <Card className="bg-zion-blue-dark border-zion-blue-light">;
            <CardHeader>;
              <CardTitle className="text-white">For AI Influencers</CardTitle>;
              <CardDescription>Share your expertise and earn</CardDescription>;
            </CardHeader>;
            <CardContent className="space-y-4">;
              <div className="flex items-start gap-3">;
<<<<<<< HEAD

                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />;

=======
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div>;
                  <p className="font-medium text-white">Monetize your audience</p>;
                  <p className="text-sm text-zion-slate-light">Earn commissions from successful referrals</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
<<<<<<< HEAD

                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />;

=======
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div>;
                  <p className="font-medium text-white">Exclusive insights</p>;
                  <p className="text-sm text-zion-slate-light">Get early access to AI marketplace trends</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
<<<<<<< HEAD

                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />;

=======
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div>;
                  <p className="font-medium text-white">Marketing resources</p>;
                  <p className="text-sm text-zion-slate-light">Access our partner toolkit with ready-to-use materials</p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <Card className="bg-zion-blue-dark border-zion-blue-light">;
            <CardHeader>;
              <CardTitle className="text-white">For AI Organizations</CardTitle>;
              <CardDescription>Strategic partnerships</CardDescription>;
            </CardHeader>;
            <CardContent className="space-y-4">;
              <div className="flex items-start gap-3">;
<<<<<<< HEAD

                <CheckCircle className="h-5 w-5 text-zion-purple mt-0 && 0.5" />;

=======
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0 && 0.5" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div>;
                  <p className="font-medium text-white">Expand your ecosystem</p>;
                  <p className="text-sm text-zion-slate-light">Connect your community to AI job opportunities</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
<<<<<<< HEAD

                <CheckCircle className="h-5 w-5 text-zion-purple mt-0 && 0.5" />;

=======
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0 && 0.5" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div>;
                  <p className="font-medium text-white">Co-branded opportunities</p>;
                  <p className="text-sm text-zion-slate-light">Create joint content and events</p>;
                </div>;
              </div>;
              <div className="flex items-start gap-3">;
<<<<<<< HEAD

                <CheckCircle className="h-5 w-5 text-zion-purple mt-0 && 0.5" />;

=======
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0 && 0.5" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div>;
                  <p className="font-medium text-white">Custom tracking</p>;
                  <p className="text-sm text-zion-slate-light">Detailed analytics on your referral performance</p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <div className="flex justify-center gap-4">;
          <Button
            size="lg" 
            className="bg-zion-purple hover:bg-zion-purple-dark"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            onClick={() => navigate('/signup')}
          >;
            Apply to Join;
          </Button>;
<<<<<<< HEAD


          <Button
            size="lg" 
            variant="outline" 

            className="text-zion-cyan border-zion-cyan"


          <Button 
            size="lg" 
            variant="outline" 
            className="text-zion-cyan border-zion-cyan"
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <Button
            size="lg" 
            variant="outline" 

            className="text-zion-cyan border-zion-cyan"
<<<<<<< HEAD
          <Button ;
            size="lg" ;
            variant="outline" ;
            className="text-zion-cyan border-zion-cyan";
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

            onClick={() => navigate('/login')}
          >;
            Partner Login;
          </Button>;
        </div>;
      </div>;

<<<<<<< HEAD

=======

    );
  });
  });
  });
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba


  // Authenticated user view - Partner Dashboard
  return (
    <div className="container max-w-7xl py-10">

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <TabsContent value="earnings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Earnings & Payouts</CardTitle>
              <CardDescription>
                Track your earnings and manage payouts;
              </CardDescription>
            </CardHeader>
            <CardContent>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <TabsContent value="resources" className="space-y-4">
          <PartnerResources />
        </TabsContent>
      </Tabs>
    </div>


    <div className="container max-w-7xl py-10">;
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;
        <div>;
          <h1 className="text-3xl font-bold tracking-tight text-white">Partner Dashboard</h1>;
          <p className="text-zion-slate-light">Manage your referral links and track your performance</p>;
        </div>;
        <div className="flex gap-2">;
<<<<<<< HEAD

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

}
;




=======


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

                  <p className="text - sm text - zion - slate - light">Detailed analytics on your referral performance</p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;

              <CardContent className="text - center text - sm text - zion - slate - light">;
                <p > Get paid when referrals complete onboarding and engage with our platform</p>;
              </CardContent>;
            </Card>;
          </div>;

            className="bg - zion - purple hover:bg - zion - purple - dark";
            on_click={() => navigate ('/signup')}
          >;
            Apply to Join;
          </Button>;

            on_click={() => navigate ('/login')}
          >;
            Partner Login;

  // Authenticated user view - Partner Dashboard;
>>>>>>> origin/cursor/delete-old-data-records-6bba
