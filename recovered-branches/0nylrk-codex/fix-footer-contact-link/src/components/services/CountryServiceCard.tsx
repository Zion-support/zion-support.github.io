

  const getRegionEmoji = (countryName: string): string => {

export /**
 * CountryServiceCard - Function description
 */
function CountryServiceCard() {
  // Get region flag based on country name (for demo purposes);
  const getRegionEmoji = (country_name: string): string => {
    const emoji_map: Record < string, string> = {

    const emojiMap: Record<string, string> = {;












      "Germany": "🇩🇪", 



    if (tier1.includes(countryName)) {



  // Get response time estimate based on country;

  const getResponseTime = (countryName: string): string => {;
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];

    }`}>;
      <CardHeader className="pb-2">;
        <div className="flex items-center justify-between">;
          <div className="flex items-center space-x-2">;

            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country && country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country && country.country}</h3>;

          </div>;
          {isPopular && (;
            <Badge className="bg-zion-purple text-white border-none">Popular</Badge>;
          )}



        </div>;
      </CardHeader>;
      <CardContent className="pb-4">;
        <p className="text-3xl font-bold text-zion-cyan mb-4">;

          ${country && country.pricePerIncident.toFixed(2)}
        </p>;

        <div className="space-y-2 text-zion-slate-light">;
          <div className="flex items-start">;
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>Typical response time: {getResponseTime(country && country.country)}</span>;

          </div>;
          <div className="flex items-start">;
            <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>Service available in major cities</span>;
          </div>;
          <div className="flex items-start">;
            <Server className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>Hardware & network support</span>;
          </div>;
          <div className="flex items-start">;
            <Check className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>First hour included</span>;


    </Card>);
}



