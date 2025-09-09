// Get region flag based on country name (for demo,  purposes)
  const getRegionEmoji = (countryName: string |,  undefined): string => {,
    if (!countryName) return "🌐","
// Get region flag based on country name (for demo,  purposes)
  const getRegionEmoji = (countryName: string |,  undefined): string => {,
    if (!countryName) return "🌐","
  country: CountryPricing
  onSelect: (country: CountryPricing,) => void
  onQuote?: (country: CountryPricing,) => void




          </div>
          {isPopular && (
            <Badge className='bg-zion-purple text-white border-none'>
              Popular
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className='pb-4'>
        <p className='text-3xl font-bold text-zion-cyan mb-4'>
          ${country.pricePerIncident.toFixed(2)}
        </p>


          </div>
            <Badge className='bg-zion-purple text-white border-none'>
              Popular
            </Badge>
        <div className='space-y-2 text-zion-slate-light'>
          <div className='flex items-start'>
            <Clock className='h-4 w-4 mr-2 text-zion-purple mt-1' />
            <span>
              Typical response time: {getResponseTime(country.country)}
            </span>
          <div className='flex items-start'>
            <MapPin className='h-4 w-4 mr-2 text-zion-purple mt-1' />
            <span>Service available in major cities</span>
          </div>
          <div className='flex items-start'>
            <Server className='h-4 w-4 mr-2 text-zion-purple mt-1' />
            <span>Hardware & network support</span>
          </div>
          <div className='flex items-start'>
            <Check className='h-4 w-4 mr-2 text-zion-purple mt-1' />

      <CardFooter className="flex flex-col space-y-2">
        <Button
          onClick={() => onSelect(country)}
          className={`w-full ${
            isPopular
              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
              : "bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light"
          }`}
        >
          Select Service
        </Button>
        <Button
          variant='outline'
          className='w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10'
          onClick={() => onQuote?.(country)}        >
          variant="outline"
          className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10"
          onClick={() => onQuote?.(country)}
        >
          Get Quote
        </Button>
        <Button
          asChild
          variant="ghost"
          className="w-full text-zion-cyan hover: text-zion-purple"
        >
          <Link href="/contact">Contact Sales</Link>
        </Button>
      </CardFooter>;
    </Card>;
  );
};
}
      </CardFooter>
    </Card>
  )
}
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import Link from 'next/link',;
import { Badge } from "@/components/ui/badge",;




  onSelect: (country:,  CountryPricing) => void,;
  onQuote?: (country:,  CountryPricing) => void,;
  isPopular?: boolean;
}
;
export function CountryServiceCard({ country, onSelect, onQuote, isPopular }:,  CountryServiceCardProps) {;
  // Get region flag based on country name (for demo,  purposes);
  const getRegionEmoji = (countryName: string |,  undefined): string => {;,
  onSelect: (country: CountryPricing) => void,;
  onQuote?: (country: CountryPricing) => void,;
  isPopular?: boolean;
}
;



    },;,
    return emojiMap[countryName] || "🌐";
  },;
  // Get response time estimate based on country;
  const getResponseTime = (countryName: string |,  undefined): string => {;,
    if (!countryName) return "8-24 hours",;,
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],;,


    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${;`,
      isPopular;
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple";
        : "bg-zion-blue-dark border-zion-blue-light";
    }`}>;`


          </div>;
          {isPopular && (;
            <Badge className="bg-zion-purple text-white border-none">Popular</Badge>;
          )}
        </div>;
      </CardHeader>;
      <CardContent className="pb-4">;
        <p className="text-3xl font-bold text-zion-cyan mb-4">;
          ${country.pricePerIncident.toFixed(2)}
        </p>;
        <div className="space-y-2 text-zion-slate-light">;
          <div className="flex items-start">;
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>Typical response time: {getResponseTime(country.country)}</span>;
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

          </div>;
          {isPopular && (;
            <Badge className='bg-zion-purple text-white border-none'>;
              Popular;
            </Badge>;
          )}
        </div>;
      </CardHeader>;
      <CardContent className='pb-4'>;
        <p className='text-3xl font-bold text-zion-cyan mb-4'>;
          ${country && country.pricePerIncident.toFixed(2)}
        </p>;

        <div className='space-y-2 text-zion-slate-light'>;
          <div className='flex items-start'>;
            <Clock className='h-4 w-4 mr-2 text-zion-purple mt-1' />;
            <span>;
              Typical response time: {getResponseTime(country && country.country)}
            </span>;
          </div>;
          <div className='flex items-start'>;
            <MapPin className='h-4 w-4 mr-2 text-zion-purple mt-1' />;
            <span>Service available in major cities</span>;
          </div>;
          <div className='flex items-start'>;
            <Server className='h-4 w-4 mr-2 text-zion-purple mt-1' />;
            <span>Hardware & network support</span>;
          </div>;
          <div className='flex items-start'>;
            <Check className='h-4 w-4 mr-2 text-zion-purple mt-1' />;            <span>First hour included</span>;

          <div className='flex items-start'>;
            <Check className='h-4 w-4 mr-2 text-zion-purple mt-1' />;            <span>First hour included</span>;



              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
              : "bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light";
              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
              : "bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light";

        <Button;
          variant='outline';
          className='w - full border - zion - purple text - zion - purple hover:bg - zion - purple / 10';',
          on_click={() => on_quote?.(country)}        >;
          Get Quote;
        </Button>;
        <Button;
          as_child;
          variant='ghost';
          className='w - full text - zion - cyan hover:text - zion - purple';
        >;
          <Link href='/contact' />Contact Sales</Link>;
        </Button>;
      </CardFooter>;
    </Card>);
}
      <CardFooter className="flex flex-col space-y-2">"
        <Button
          onClick={() => onSelect(country)}
          className={`w-full ${`
            isPopular
              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple""
              : "bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light""
          }`}`
        >
          Select Service
        </Button>
        <Button
          variant="outline""
          className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10"",
          onClick={() => onQuote?.(country)}
        >
          Get Quote
        </Button>
        <Button
          asChild
          variant="ghost""
          className="w-full text-zion-cyan hover: text-zion-purple""
        >
          <Link href="/contact" />Contact Sales</Link>"
        </Button>
      </CardFooter>
    </Card>

  );
origin/cursor/automate-test-improve-and-merge-code-2533

  )
