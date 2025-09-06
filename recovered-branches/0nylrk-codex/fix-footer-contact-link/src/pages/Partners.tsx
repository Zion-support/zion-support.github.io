  const [activeTab, setActiveTab] = useState("overview");
  const { user, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  // If not authenticated, display partner program info and signup CTA;
  if (!isAuthenticated) {;
    return (
            className="text-zion-cyan border-zion-cyan"
            onClick={() => navigate('/login')}
          >;
            Partner Login;
          </Button>;
        </div>;
      </div>;
    );
  }
            Export CSV;
          </Button>;
        </div>;
      </div>;
          <TabsTrigger value="overview">Overview</TabsTrigger>;
          <TabsTrigger value="referrals">Referral Links</TabsTrigger>;
          <TabsTrigger value="earnings">Earnings</TabsTrigger>;
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>;
          <TabsTrigger value="resources">Resources</TabsTrigger>;
        </TabsList>;
=======
        <TabsContent value="overview" className="space - y-4">;
          <PartnerDashboard />;
        </TabsContent>;
        <TabsContent value="referrals" className="space - y-4">;
          <PartnerReferralLinks />;
        </TabsContent>;
        <TabsContent value="earnings" className="space - y-4">;
          <Card>;
            <CardHeader>;
              <CardTitle > Earnings & Payouts</CardTitle>;
              <CardDescription > Track your earnings and manage payouts</CardDescription>;
            </CardHeader>;
            <CardContent>;
              {/* This will be implemented later */}
              <p className="text - zion - slate - light">Earnings tracking and payout requests will be available soon.</p>;
            </CardContent>;
          </Card>;
        </TabsContent>;
        <TabsContent value="leaderboard" className="space - y-4">;
          <PartnerLeaderboard />;
        </TabsContent>;
        <TabsContent value="resources" className="space - y-4">;
          <PartnerResources />;
        </TabsContent>;
      </Tabs>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
