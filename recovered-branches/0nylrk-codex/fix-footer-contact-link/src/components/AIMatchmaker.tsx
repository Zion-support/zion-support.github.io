



      toast({"
        title: "Matches Found"
        description: `Found ${results.length} matches based on your description.`})
    } catch (error) {"
      console.error("Error during AI matching:", error),
      toast({"
        title: "Matching Error"'"
        description: "We couldn't find matches for your request. Please try again.""
        variant: "destructive"})
      // Set empty matches to show no results found UI;
      setMatches([])
    } finally {
  }
  // Extract just the items from each MatchResult
  const matchItems = matches.map(match => match.item)
};


      setIsMatchmaking(false)

  };



