
interface AIMatchmakerProps {
interface AIMatchmakerProps {;
  serviceType?: string;
  onMatchSelect?: (match: any) => void,;}
  className?: string;}
}

  return (
    <Card className={`border border-zion-blue-light bg-zion-blue-dark ${className |\"\"}`} />
      <CardHeader className=\"pb-2\" />
        <CardTitle className=\"flex items-center text-white\" />
          <Sparkles className=\"h-5 w-5 mr-2 text-zion-cyan\" />
          AI Matchmaker;
        </CardTitle>
        <p className=\"text-sm text-zion-slate-light\" />
          Describe what you're looking for and our AI will find the best matches;
        </p>
      </CardHeader>
      <CardContent />
        <div className=\"space-y-4\" />
          <div className=\"space-y-2\" />
    }
  }
          Describe what you're looking for and our AI will find the best matches;
        </p>;
      </CardHeader>;
      <CardContent />;
            <Button;
onClick={handleSearch}
              disabled={isMatchmaking}
              className=\"w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white\" />;
              {isMatchmaking ? (;
                <>Analyzing your needs...</>;
              ) : (;
                <>;
                  <Search className=\"h-4 w-4 mr-2\" />;
                  Find Matches;}
                </>;}
              )}
            <AIMatchingResults;
matches={matchItems}
              onSelectMatch={handleItemSelect}
              isLoading={isMatchmaking}
              serviceType={serviceType}
              projectDescription={query}
          )}
        </div />;
      </CardContent>;
    </Card>;
  );
        <div className=\"space-y-4\" />;
          <div className=\"space-y-2\" />;
            <Textarea;
              placeholder=\"Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3 - month project')\";
              value={query}
              on_change={(e: React.ChangeEvent < HTMLTextAreaElement />) => set_query (e.target.value)}
              className=\"min - h-24 bg - zion - blue border border - zion - blue - light focus:border - zion - purple text-white\";
            />;
            <Button;
              on_click={handle_search}
              disabled={is_matchmaking}
              className=\"w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text-white\";
             />;
              {is_matchmaking ? (
                <>Analyzing your needs...</>) : (
                <>;
                  <Search className=\"h - 4 w - 4 mr-2\" />;}
                  Find Matches;}
                </>)}
            </Button>;
          </div>;
          {has_searched && (}
            <AIMatchingResults;}
              matches={match_items}
              onSelectMatch={handleItemSelect}
              is_loading={is_matchmaking}
              service_type={service_type}
              project_description={query}
            />)}
        </div>;
      </CardContent>;
    </Card>);
}