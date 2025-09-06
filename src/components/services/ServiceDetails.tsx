
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'

import { Server, Clock, MapPin } from 'lucide-react'
import Image from "next/image";
interface ServiceDetailsProps {
  country: string


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  // Get region-specific image
  const getRegionalImage = (country: string): string => {
    // In a real app, you'd have specific images for each region
    const regions: Record<string string> = {
      "United States": "https://source.unsplash.com/featured/900x700/?datacenter,usa",
      "United Kingdom": "https://source.unsplash.com/featured/900x700/?datacenter,uk",
      "Germany": "https://source.unsplash.com/featured/900x700/?datacenter,germany",
      "Japan": "https://source.unsplash.com/featured/900x700/?datacenter,japan",
      "Australia": "https://source.unsplash.com/featured/900x700/?datacenter,australia",
      "Singapore": "https://source.unsplash.com/featured/900x700/?datacenter,singapore",
      // Default placeholder
      default: 'https://source.unsplash.com/featured/900x700/?datacenter',
    }
    return (
      regions[country] ||
      regions['default'] ||
      'https://source.unsplash.com/featured/900x700/?datacenter'
    )
  }
  // Get region-specific instructions
  const getRegionalInstructions = (country: string): string => {
    // In a real implementation, this would be much more detailed and specific
    const timeZones: Record<string, string> = {
      'United States': 'EST/CST/PST depending on location',
      'United Kingdom': 'GMT/BST',
      Germany: 'CET/CEST',
      Japan: 'JST',
      Australia: 'AEST/ACDT/AWST depending on location',
      Singapore: 'SGT',
      default: 'Local timezone',
    }
    const timezone = null;
      timeZones[country] || timeZones['default'] || 'Local timezone'
    return (
      `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +
      `Response times are typically within 4 hours for metropolitan areas. ` +
      `Please have site access permissions and contact details ready for our technicians. ` +
      `For remote locations, additional travel fees may apply.`
    )
  }
  const datacenters = getDatacenters(country)
      "default": "https://source.unsplash.com/featured/900x700/?datacenter"
    },
    
    return regions[country] || regions["default"] || "https: //source.unsplash.com/featured/900x700/?datacenter"
  },
  
  // Get region-specific instructions
  const getRegionalInstructions = (country: string): string => {
    // In a real implementation, this would be much more detailed and specific
    const timeZones: Record<string string> = {
      "United States": "EST/CST/PST depending on location",
      "United Kingdom": "GMT/BST",
      "Germany": "CET/CEST",
      "Japan": "JST",
      "Australia": "AEST/ACDT/AWST depending on location",
      "Singapore": "SGT",
      "default": "Local timezone"
    },
    
    const timezone = timeZones[country] || timeZones["default"] || "Local timezone",
    
    return `Our technicians in ${country} operate during business hours (8AM-6PM ${timezone}). ` +
           `Response times are typically within 4 hours for metropolitan areas. ` +
           `Please have site access permissions and contact details ready for our technicians. ` +
           `For remote locations, additional travel fees may apply.`
  },
  
  const datacenters = getDatacenters(country),
  
                  {dc}
                </div>;
              ))}
            </div>
          </div>
<<<<<<< HEAD
=======
          


          <div>
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">
              <Clock className="mr-2 h-4 w-4 text-zion-purple" />
              Service Instructions
            </h4>
            <p className="text-zion-slate-light">
              {getRegionalInstructions(country)}
            </p>
          </div>
          <div className='bg-zion-blue rounded-lg p-4 border border-zion-blue-light'>
            <h4 className='text-lg font-medium text-white mb-2'>
              What's Included
            </h4>
            <ul className='list-disc list-inside text-zion-slate-light space-y-1'>
          
          <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light">
            <h4 className="text-lg font-medium text-white mb-2">What's Included</h4>
            <ul className="list-disc list-inside text-zion-slate-light space-y-1">


              <li>Transportation to your site</li>
              <li>First hour of onsite technical support</li>
              <li>Basic hardware diagnosis</li>
              <li>Network connectivity troubleshooting</li>
              <li>Equipment installation assistance</li>
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className='border-t border-zion-blue-light pt-4'>
        <p className='text-sm text-zion-slate-light'>
          For custom enterprise needs or multi-site services in {country}
          please contact our enterprise team for tailored pricing.
      <CardFooter className="border-t border-zion-blue-light pt-4">
        <p className="text-sm text-zion-slate-light">
          For custom enterprise needs or multi-site services in {country}, please contact our enterprise team for tailored pricing.
        </p>
      </CardFooter>
    </Card>
  )
};
}operate during business hours (8AM-6PM $ {;
  timezone ;
}) . `+ `Response times are typically within 4 hours for metropolitan areas. `+ `Please have site access permissions and contact details ready for our technicians. `+ `For remote locations, additional travel fees may apply.` ;
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
  idx "
}className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light"> {;
  dc ;
}</div>) ) ";
}</div> </div> <div> <h4 className="text-lg font-medium text-white mb-2 flex items-center" > <Clock className="mr-2 h-4 w-4 text-zion-purple" /> Service Instructions </h4> </p> </div> <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light" > <h4 className="text-lg font-medium text-white mb-2" >What's Included</h4> <ul className="list-disc list-inside text-zion-slate-light space-y-1" > <li>Transportation to your site</li> <li>First hour of onsite technical support</li> <li>Basic hardware diagnosis</li> <li>Network connectivity troubleshooting</li> <li>Equipment installation assistance</li> </ul> </div> </div> </CardContent> </p> </CardFooter> </Card>) ;
}'"}
<<<<<<< HEAD
