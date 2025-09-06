 interface AIMatchmakerProps {
  serviceType?: string;
onMatchSelect?: (match: any) => void;
className?: string 
}if (!query.trim () ) {
  toast ({
  return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}setIsMatchmaking (true);
setHasSearched (true);
//Get AI matches const results = await findMatches (query;
serviceType;
3);
//Set empty matches to show no results found UI setMatches ([]) 
}finally {
  setIsMatchmaking (false) 
}
};
if (onMatchSelect) {
  //Find the original MatchResult that contains this item 
}
};
//Extract just the items from each MatchResult return (<Card className= {
  `border border-zion-blue-light bg-zion-blue-dark $ {
  className || "" 
}` 
}> <CardHeader className="pb-2"> <CardTitle className="flex items-center text-white"> <Sparkles className="h-5 w-5 mr-2 text-zion-cyan"/> AI Matchmaker </CardTitle> <p className="text-sm text-zion-slate-light"> Describe what you're looking for and our AI will find the best matches </p> </CardHeader> <CardContent> <div className="space-y-4"> <div className="space-y-2"> <Textarea className="min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"/> <Button onClick= {
  handleSearch 
}disabled= {
  isMatchmaking 
}className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"> {
  isMatchmaking ? (<>Analyzing your needs...</>) : (<> <Search className="h-4 w-4 mr-2" /> Find Matches </>) 
}</Button> </div> {
  hasSearched && (<AIMatchingResults matches= {
  matchItems 
}onSelectMatch= {
  handleItemSelect 
}isLoading= {
  isMatchmaking 
}serviceType= {
  serviceType 
}projectDescription= {
  query 
}/>) 
}</div> </CardContent> </Card>) 
}