
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;""
import { Button } from "@/components/ui/button",;""
import { Badge } from "@/components/ui/badge",;""
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",;""
import { CountryPricing } from "@/data/onsiteServicePricing",;"
;
interface CountryServiceCardProps {;
  country:CountryPricing,;
  onSelect:(country:CountryPricing) => void,;
  isPopular?:boolean;
}
;
export function CountryServiceCard({ country, onSelect, isPopular } CountryServiceCardProps) {;
  // Get region flag based on country name (for demo purposes);
  const getRegionEmoji = (countryName:string):string => {;
    const emojiMap:Record<string string> = {;
</string>
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${;
      isPopular ;"
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple" ;""
        :"bg-zion-blue-dark border-zion-blue-light";"
    }`}>;
</Card>"
      <CardHeader className="pb-2">;"
</CardHeader>"
        <div className="flex items-center justify-between">;"
</div>"
          <div className="flex items-center space-x-2">;"
</div>"
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country.country)}</span>;""
            <h3 className="text-lg font-semibold text-white truncate">{country.country}</h3>;"
          </div>;"
            <Badge className="bg-zion-purple text-white border-none">Popular</Badge>;"
        </div>;
      </CardHeader>;"
      <CardContent className="pb-4">;"
</CardContent>"
        <p className="text-3xl font-bold text-zion-cyan mb-4">;"
</p>
        </p>;"
        <div className="space-y-2 text-zion-slate-light">;"
</div>"
          <div className="flex items-start">;"
</div>"
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />;"
</Clock>
            <span>Typical response time:{getResponseTime(country.country)}</span>;
          </div>;"
          <div className="flex items-start">;"
</div>"
            <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" />;"
</MapPin>
            <span>Service available in major cities</span>;
          </div>;"
          <div className="flex items-start">;"
</div>"
            <Server className="h-4 w-4 mr-2 text-zion-purple mt-1" />;"
</Server>
            <span>Hardware & network support</span>;
          </div>;"
          <div className="flex items-start">;"
</div>"
            <Check className="h-4 w-4 mr-2 text-zion-purple mt-1" />;"
</Check>
            <span>First hour included</span>;
          </div>;
        </div>;
      </CardContent>;
      <CardFooter>;
</CardFooter>
        <Button ;
          onClick={() => onSelect(country)} ;
</Button>
        </Button>;
      </CardFooter>;
    </Card>;
//Get response time estimate based on country return (<Card className= {
  `h-full transition-all duration-300 hover:shadow-lg $ {"
  isPopular </div> <div className="flex items-start" > <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>Service available in major cities</span> </div> <div className="flex items-start" > <Server className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>Hardware & network support</span> </div> <div className="flex items-start" > <Check className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>First hour included</span> </div> </div> </CardContent> <CardFooter> <Button onClick= {"
</Card>)
  isPopular > Select Service </Button> </CardFooter> </Card>) "