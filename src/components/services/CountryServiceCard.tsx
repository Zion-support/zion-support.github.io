import { Globe, Server, Clock, MapPinCheck } from 'lucide-react';
import { CountryPricing } from "@/data/onsiteServicePricing";
interface CountryServiceCardProps {
isPopular?: boolean}
export function CountryServiceCard({
  country,
onSelect
  onQuote,
isPopular}: CountryServiceCardProps) {
  // Get region flag based on country name (for demo purposes)
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
        <div className='space-y-2 text-zion-slate-light'>
          <div className='flex items-start'>
            <Clock className='h-4 w-4 mr-2 text-zion-purple mt-1' />
            <span>
              Typical response time: {getResponseTime(country.country)}
            </span>
          </div>
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
            <span>First hour included</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex flex-col space-y-2'>
        <Button,
onClick = {() => onSelect(country)}
          className={`w-full ${
            isPopular
              ? 'bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple'
              : 'bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light'
          }`}
        >
          Select Service
        </Button>
        <Button,
variant='outline'
          className='w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10'
          onClick={() => onQuote?.(country)}        >
          Get Quote
        </Button>
        <Button,
asChild
          variant='ghost'
          className='w-full text-zion-cyan hover:text-zion-purple'
        >
          <Link href='/contact'>Contact Sales</Link>
        </Button>
      </CardFooter>
    </Card>
  )origin/main
}