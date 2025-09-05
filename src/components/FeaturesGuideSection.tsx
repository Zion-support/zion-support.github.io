import Link from "next/link";

export function FeaturesGuideSection() {_const _features = [
    {
      id: "ai-matcher", _title: "AI Matcher", _description: "Find the perfect match for your project needs with our intelligent AI-powered matching system.", _icon: <Sparkles className="h-10 w-10 text-zion-cyan" />, _instructions: [
        "Navigate to the AI Matcher page from the homepage or marketplace", _"Fill in your project requirements and specifications", _"Review the AI-recommended matches tailored to your needs", _"Connect with matched talents or services directly"
      ], _link: "/match", _buttonText: "Try AI Matcher"},
    {_id: "talent-directory", _title: "Talent Directory", _description: "Browse our curated collection of AI and tech specialists, _filtered by expertise, _availability, _and ratings.", _icon: <Users className="h-10 w-10 text-zion-purple" />, _instructions: [
        "Access the talent directory from the main navigation", _"Use filters to narrow down by skills, _experience, _and pricing", _"Save favorite profiles for future reference", _"Contact talents directly or request quotes through their profiles"
      ], _link: "/talents", _buttonText: "Explore Talents"},
    {_id: "services", _title: "Services Marketplace", _description: "Discover professional services for your AI and tech needs, _from development to consulting.", _icon: <Zap className="h-10 w-10 text-zion-cyan" />, _instructions: [
        "Browse service categories on the marketplace", _"Compare service offerings and pricing options", _"Request customized quotes for specific requirements", _"Book and manage services through your dashboard"
      ], _link: "/services", _buttonText: "View Services"},
    {_id: "equipment", _title: "Equipment Catalog", _description: "Rent or buy specialized hardware and tech equipment for AI development and research.", _icon: <Settings className="h-10 w-10 text-zion-purple" />, _instructions: [
        "Search the equipment catalog by category or specifications", _"Check availability and rental/purchase options", _"Request quotes for bulk orders or specialized equipment", _"Schedule delivery or pickup through the platform"
      ], _link: "/equipment", _buttonText: "Browse Equipment"},
    {_id: "analytics", _title: "Marketplace Analytics", _description: "Gain insights into industry trends, _pricing benchmarks, _and marketplace activity.", _icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />, _instructions: [
        "Access analytics from your user dashboard", _"View interactive charts on market trends and rates", _"Export reports for your business planning", _"Set up alerts for changes in your areas of interest"
      ], _link: "/analytics", _buttonText: "View Analytics"},
    {_id: "ai-assistant", _title: "Zion AI Assistant", _description: "Get real-time help, _recommendations, _and marketplace guidance from our AI assistant.", _icon: <MessageSquare className="h-10 w-10 text-zion-purple" />, _instructions: [
        "Click on the chat icon in the bottom right corner", _"Ask questions about available services or talents", _"Get recommendations based on your project needs", _"Receive step-by-step guidance for using platform features"
      ], _link: "#", _buttonText: "Chat with Assistant", _action: "openChat"},
    {_id: "publishing", _title: "List Your Services", _description: "Showcase your AI and tech expertise by creating your own listings on the marketplace.", _icon: <Plus className="h-10 w-10 text-zion-cyan" />, _instructions: [
        "Create or log in to your account", _"Navigate to 'Create Listing' in your dashboard", _"Choose between talent profile, _service, _or equipment listing", _"Complete the guided form and publish your listing"
      ], _link: "/create-profile", _buttonText: "Create Listing"},
    {_id: "help-center", _title: "Help & Resources", _description: "Access guides, _tutorials, _and support resources to maximize your marketplace experience.", _icon: <HelpCircle className="h-10 w-10 text-zion-purple" />, _instructions: [
        "Visit our comprehensive knowledge base", _"Watch video tutorials on specific features", _"Join community forums to connect with other users", _"Contact our support team for personalized assistance"
      ], _link: "/help", _buttonText: "View Resources"}
  ];

  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <GradientHeading>Your Complete Guide to Zion</GradientHeading>
          <p className="text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto">
            Discover all the powerful tools and features available to help you navigate 
            the world of AI and tech services
          </p>
        </div>

        <Tabs defaultValue="ai-matcher" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1 mb-8">
            {_features.slice(0, _4).map(feature => (
              <TabsTrigger 
                key={feature.id} 
                value={_feature.id}
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
              >
                {_feature.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1">
            {_features.slice(4).map(feature => (
              <TabsTrigger 
                key={feature.id} 
                value={_feature.id}
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
              >
                {_feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {_features.map(_feature => (
            <TabsContent key={feature.id} value={_feature.id} className="mt-8">
              <div className="bg-zion-blue rounded-lg border border-zion-blue-light p-6 md:p-8 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center md:items-start">
                  <div className="bg-zion-blue-dark p-4 rounded-xl mb-4">
                    {_feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{_feature.title}</h3>
                  <p className="text-zion-slate-light mb-6">{_feature.description}</p>
                  <Button 
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                    asChild
                  >
                    <Link href={_feature.link}>
                      {_feature.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="md:w-2/3 bg-zion-blue-dark p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-4">How to Use</h4>
                  <ol className="list-decimal list-inside space-y-3 pl-4">
                    {_feature.instructions.map((instruction, _idx) => (
                      <li key={idx} className="text-zion-slate-light">
                        <span className="text-zion-cyan mr-2">{_idx + 1}.</span>
                        {_instruction}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
            asChild
          >
            <Link
              href="/marketplace"
              onClick={_() => fireEvent('explore_marketplace_click')}
            >
              Explore Full Marketplace
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}