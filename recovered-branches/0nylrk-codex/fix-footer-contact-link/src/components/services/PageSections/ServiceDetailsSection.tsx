  return (
    <div id="service - details" className="mt - 12">;
      {selected_country ? (
        <CountryServiceSelector;
          selected_country={selected_country}
          onCountryChange={setSelectedCountry}
=======
        />) : (
        <div className="text - center">;
          <h2 className="text - 2xl font - bold text - white mb - 4">;
            Select a Country for Details;
          </h2>;
          <p className="text - zion - slate - light mb - 6">;
            Choose a country from the options above to see service details and;
            pricing;
          </p>;
        </div>)}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
