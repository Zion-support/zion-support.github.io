
import Link from 'next/link';

interface CountryServiceCardProps {_country: CountryPricing;
  onSelect: (_country: CountryPricing) => void;
  onQuote?: (_country: CountryPricing) => void;
  isPopular?: boolean;}

export function CountryServiceCard(_{_country, _onSelect, _onQuote, _isPopular}: CountryServiceCardProps) {_// Get region flag based on country name (for demo purposes)
  const _getRegionEmoji = (countryName: string | undefined): string => {
    if (!countryName) return "🌐";
    
    const emojiMap: Record<string, _string> = {
      "United States": "🇺🇸", _"United Kingdom": "🇬🇧", _"Canada": "🇨🇦", _"Australia": "🇦🇺", _"Germany": "🇩🇪", _"France": "🇫🇷", _"Japan": "🇯🇵", _"China": "🇨🇳", _"Brazil": "🇧🇷", _"India": "🇮🇳", _"Russia": "🇷🇺", _"Singapore": "🇸🇬", _"South Korea": "🇰🇷", _"South Africa": "🇿🇦", _// Default if no flag is found
      "default": "🌐"};
    
    return emojiMap[countryName] || "🌐";
  };
  
  // Get response time estimate based on country
  const _getResponseTime = (countryName: string | undefined): string => {_if (!countryName) return "8-24 hours";
    
    const _tier1 = ["United States", _"United Kingdom", _"Germany", _"Japan", _"Singapore", _"Australia", _"Canada", _"France"];
    const _tier2 = ["China", _"Brazil", _"India", _"South Korea", _"South Africa", _"Russia"];
    
    if (tier1.includes(countryName)) {
      return "4 hours";} else if (tier2.includes(countryName)) {_return "6 hours";} else {_return "8-24 hours";}
  };
  
  return (
    <Card className={_`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular 
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple" 
        : "bg-zion-blue-dark border-zion-blue-light"}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl" aria-hidden="true">{_getRegionEmoji(country.country)}</span>
            <h3 className="text-lg font-semibold text-white truncate">{_country.country || 'Unknown Country'}</h3>
          </div>
          {_isPopular && (
            <Badge className="bg-zion-purple text-white border-none">Popular</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-3xl font-bold text-zion-cyan mb-4">
          ${_country.pricePerIncident.toFixed(2)}
        </p>
        
        <div className="space-y-2 text-zion-slate-light">
          <div className="flex items-start">
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />
            <span>Typical response time: {_getResponseTime(country.country)}</span>
          </div>
          <div className="flex items-start">
            <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" />
            <span>Service available in major cities</span>
          </div>
          <div className="flex items-start">
            <Server className="h-4 w-4 mr-2 text-zion-purple mt-1" />
            <span>Hardware & network support</span>
          </div>
          <div className="flex items-start">
            <Check className="h-4 w-4 mr-2 text-zion-purple mt-1" />
            <span>First hour included</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button
          onClick={_() => onSelect(country)}
          className={_`w-full ${
            isPopular
              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
              : "bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light"}`}
        >
          Select Service
        </Button>
        <Button
          variant="outline"
          className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10"
          onClick={_() => onQuote?.(country)}
        >
          Get Quote
        </Button>
        <Button
          asChild
          variant="ghost"
          className="w-full text-zion-cyan hover:text-zion-purple"
        >
          <Link href="/contact">Contact Sales</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
