import { Sparkles } from 'lucide-react'
  const handleApplySuggestion = () => {
    if (suggestion) {
      // We'll use the middle of the range as the suggested rate
      const suggestedRate = Math.round((suggestion.minRate + suggestion.maxRate) / 2),
      onSuggestionApplied(suggestedRate),
      
interface TalentRateRecommenderProps {;


  },




  rateType 
}/>) 
}</div> </div>) ;
};
'"};
};



    <div className="space - y-4">;
      <div>;
        {!suggestion && !is_loading ? (
          <Button;
            type="button";
            variant="outline";
            on_click = {generate_suggestion, }
            disabled = {skills.length === 0 || years_experience <= 0, }
            className="w - full";
          >;
            <Sparkles className="h - 4 w - 4 mr - 2" /> Optimize Rate with AI;
          </Button>) : (
          <PricingSuggestionBox;
            suggestion = {suggestion, }
            is_loading = {is_loading, }
            onApplySuggestion = {handleApplySuggestion, }
            rate_type = {rate_type, }
          />)}
      </div>;
    </div>);
}
return (<div className="space - y-4" > <div> {";
  !suggestion && !is_loading ? (<Button type="button" variant="outline" on_click={
  generate_suggestion ";
}> <Sparkles className="h - 4 w - 4 mr - 2" /> Optimize Rate with AI </Button>) : (<PricingSuggestionBox suggestion= {
  suggestion;
}is_loading= {
  is_loading;
}onApplySuggestion= {
  handleApplySuggestion;
}rate_type= {
  rate_type;
}/>);
}</div> </div>);
}
'"},
}
