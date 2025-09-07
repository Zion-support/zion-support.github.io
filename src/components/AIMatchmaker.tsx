
          AI Matchmaker
        </CardTitle>
        <p className="text-sm text-zion-slate-light">
          Describe what you're looking for and our AI will find the best matches

        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Textarea
              placeholder="Describe what you need... (e && e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')"
              value={query}
              onChange={(e: React && React.ChangeEvent<HTMLTextAreaElement>) =>;
                setQuery(e && e.target.value);
              }
              className='min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white';
            />;
            <Button
              onClick={handleSearch}
              disabled={isMatchmaking}


              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
            >;

              {isMatchmaking ? (;
                <>Analyzing your needs...</>;
              ) : (;
                <>;

                  <Search className='h-4 w-4 mr-2' />;
                  Find Matches;
                </>;
              )}

            </Button>;
          </div>;

          {hasSearched && (;

              matches={matchItems}
              onSelectMatch={handleItemSelect}
              isLoading={isMatchmaking}
              serviceType={serviceType}



}
}
              projectDescription={query}
            />;
          )}

              projectDescription={query}
            />;
          )}

        </div>;
      </CardContent>;
    </Card>;
  );
}



        <div className='space - y-4'>;
          <div className='space - y-2'>;
            <Textarea;
              placeholder="Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3 - month project')";
              value={query}
              on_change={(e: React.ChangeEvent < HTMLTextAreaElement>) =>;
                set_query (e.target.value);
              }
              className='min - h-24 bg - zion - blue border border - zion - blue - light focus:border - zion - purple text - white';
            />;
            <Button;
              on_click={handle_search}
              disabled={is_matchmaking}
              className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white'            >;
              {is_matchmaking ? (
                <>Analyzing your needs...</>) : (
                <>;
                  <Search className='h - 4 w - 4 mr - 2' />;
                  Find Matches;
                </>)}
            </Button>;
          </div>;
          {has_searched && (
        title: 'Matches Found',
        description: `Found ${results.length} matches based on your description.`,)
    } catch (error) {
      logErrorToProduction ('Error during AI matching:', { data: error });
        title: 'Matching Error',
        description:;
          "We couldn't find matches for your request. Please try again.",""
      // Set empty matches to show no results found UI;
      set_matches ([]);
    } finally {
  // TODO: Implement
      setIsMatchmaking(false)

          <Sparkles className='h-5 w-5 mr-2 text-zion-cyan' />;

        ;
        <p className='text-sm text-zion-slate-light'>;
</p>
      <CardHeader className='pb - 2'>;

        <CardTitle className='flex items - center text - white'>;

          <Sparkles className='h - 5 w - 5 mr - 2 text - zion - cyan' />;

        <p className='text - sm text - zion - slate - light'>;
        </p>;
      <CardContent>;
`;
    <Card className={`border border-zion-blue-light bg-zion-blue-dark ${className || ""}`}>"
"
      <CardHeader className="pb-2">"
        <CardTitle className="flex items-center text-white">"
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />"

        <p className="text-sm text-zion-slate-light">"
      <CardContent>
        <div className="space-y-4">"
</div>"
          <div className="space-y-2">"
</div>
            <Textarea;"
              placeholder="Describe what you need... (e && e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')""
              value={query}
              onChange={(e: React && React.ChangeEvent<HTMLTextAreaElement>) =>;

            <Button;
              onClick={handleSearch}
              disabled={isMatchmaking}

              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";"
            >;

                <>Analyzing your needs...</>;
              ) : (;
                <>;"
                  <Search className='h-4 w-4 mr-2' />;

                </>;)
              )}

          </div>;
        <div className='space - y-4'>;
          <div className='space - y-2'>;
            <Textarea;
              placeholder="Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3 - month project')";"
              on_change={(e: React.ChangeEvent < HTMLTextAreaElement>) =>;

              on_click={handle_search}
              disabled={is_matchmaking}"
              className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white'            >;

                <>Analyzing your needs...</>) : (
                <>;
                  <Search className='h - 4 w - 4 mr - 2' />;
)
                </>)}
pr-12325
            <AIMatchingResults;
              matches={match_items}
              onSelectMatch={handleItemSelect}
              is_loading={is_matchmaking}
              service_type={service_type}
              project_description={query}            />)}
        </div>;
      </CardContent>;
    </Card>);
}
        </div>
      </CardContent>
    </Card>
  );
origin/cursor/automate-test-improve-and-merge-code-2533

    );
import React, { useState } from 'react';

  onMatchSelected?: (match: any) => void;

export function AIMatchmaker({ onMatchSelected }: AIMatchmakerProps) {
  const [projectDescription, setProjectDescription] = useState();
  const [serviceType, setServiceType] = useState();
  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [isMatchmaking, setIsMatchmaking] = useState(false);

  const handleFindMatches = async () => {
    if (!projectDescription.trim()) {
      toast({
        title: "Project description required",
        description: "Please describe your project to find the best matches.",
        variant: "destructive",

    setIsMatchmaking(true);
    setMatches([]);

      logInfo('Starting AI matchmaking process', { projectDescription, serviceType });
      const results = await findMatches({
        description: projectDescription,
        serviceType: serviceType || undefined,

      setMatches(results);
      if (results.length === 0) {
          title: "No matches found",
          description: "Try adjusting your project description or service type.",
      } else {
        toast({`;
          title: `Found ${results.length} matches`,
          description: "Review the results below to find your perfect match.",

      logInfo('AI matchmaking completed', { matchCount: results.length });
      logErrorToProduction('AI matchmaking failed', error);
        title: "Matchmaking failed",
        description: "There was an error finding matches. Please try again.",
      setIsMatchmaking(false);
  };

  const handleSelectMatch = (match: any) => {
    onMatchSelected?.(match);
      title: "Match selected",`;
      description: `You've selected ${match.name} for your project.`,

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-blue-600" />
            <span>AI-Powered Talent Matching</span>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="service-type" className="block text-sm font-medium text-gray-700 mb-2">
              Service Type (Optional)
            </label>
            <select
              id="service-type"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a service type</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-development">Mobile Development</option>
              <option value="data-science">Data Science</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="consulting">Consulting</option>
            </select>

            <label htmlFor="project-description" className="block text-sm font-medium text-gray-700 mb-2">
              Project Description *
            <Textarea
              id="project-description"
              placeholder="Describe your project in detail. Include technologies, timeline, budget range, and any specific requirements..."
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              rows={4}
              className="w-full"
            />

          <Button 
            onClick={handleFindMatches}
            disabled={isMatchmaking || !projectDescription.trim()}
            {isMatchmaking ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Finding Matches...
              </>
            ) : (
                <Search className="h-4 w-4 mr-2" />
                Find My Perfect Match

      {matches.length > 0 && (
        <AIMatchingResults
          matches={matches}
          onSelectMatch={handleSelectMatch}
          isLoading={isMatchmaking}
          projectDescription={projectDescription}
          serviceType={serviceType}
pr-12325
