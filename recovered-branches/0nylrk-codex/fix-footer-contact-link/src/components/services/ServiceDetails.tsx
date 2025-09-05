
<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Server, Clock, MapPin } from "lucide-react",
=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Server, Clock, MapPin } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface ServiceDetailsProps {
  country: string
}

// Component to show service details for the selected country
export function ServiceDetails({ country }: ServiceDetailsProps) {
  // Get datacenters for regions (simplified - in production this would come from a real database)
  const getDatacenters = (country: string): string[] => {
<<<<<<< HEAD
    const dataCenters: Record<string string[]> = {
      "United States": ["New York", "Los Angeles", "Chicago", "Dallas", "Seattle"],
      "United Kingdom": ["London", "Manchester", "Birmingham"],
      "Germany": ["Frankfurt", "Berlin", "Munich"],
      "Japan": ["Tokyo", "Osaka"],
      "Australia": ["Sydney", "Melbourne", "Perth"],
      "Singapore": ["Singapore Central"],
      "Canada": ["Toronto", "Montreal", "Vancouver"],
      // Default for other countries
      "default": ["Major metropolitan areas"]
    },
    
    return dataCenters[country] || dataCenters["default"]
  },
=======
    const dataCenters: Record<string, string[]> = {
      &quot;United States&quot;: [&quot;New York&quot;, &quot;Los Angeles&quot;, &quot;Chicago&quot;, &quot;Dallas&quot;, &quot;Seattle&quot;],
      &quot;United Kingdom&quot;: [&quot;London&quot;, &quot;Manchester&quot;, &quot;Birmingham&quot;],
      &quot;Germany&quot;: [&quot;Frankfurt&quot;, &quot;Berlin&quot;, &quot;Munich&quot;],
      &quot;Japan&quot;: [&quot;Tokyo&quot;, &quot;Osaka&quot;],
      &quot;Australia&quot;: [&quot;Sydney&quot;, &quot;Melbourne&quot;, &quot;Perth&quot;],
      &quot;Singapore&quot;: [&quot;Singapore Central&quot;],
      &quot;Canada&quot;: [&quot;Toronto&quot;, &quot;Montreal&quot;, &quot;Vancouver&quot;],
      // Default for other countries
      &quot;default&quot;: [&quot;Major metropolitan areas&quot;]
    };
=======

interface ServiceDetailsProps {_country: string;}

// Component to show service details for the selected country
export function ServiceDetails(_{_country}: ServiceDetailsProps) {_// Get datacenters for regions (simplified - in production this would come from a real database)
  const _getDatacenters = (country: string): string[] => {
    const dataCenters: Record<string, _string[]> = {
      "United States": ["New York", _"Los Angeles", _"Chicago", _"Dallas", _"Seattle"], _"United Kingdom": ["London", _"Manchester", _"Birmingham"], _"Germany": ["Frankfurt", _"Berlin", _"Munich"], _"Japan": ["Tokyo", _"Osaka"], _"Australia": ["Sydney", _"Melbourne", _"Perth"], _"Singapore": ["Singapore Central"], _"Canada": ["Toronto", _"Montreal", _"Vancouver"], _// Default for other countries
      "default": ["Major metropolitan areas"]};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    return dataCenters[country] || dataCenters[&quot;default&quot;];
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  // Get region-specific image
<<<<<<< HEAD
  const getRegionalImage = (country: string): string => {
    // In a real app, you'd have specific images for each region
<<<<<<< HEAD
    const regions: Record<string string> = {
      "United States": "https://source.unsplash.com/featured/900x700/?datacenter,usa",
      "United Kingdom": "https://source.unsplash.com/featured/900x700/?datacenter,uk",
      "Germany": "https://source.unsplash.com/featured/900x700/?datacenter,germany",
      "Japan": "https://source.unsplash.com/featured/900x700/?datacenter,japan",
      "Australia": "https://source.unsplash.com/featured/900x700/?datacenter,australia",
      "Singapore": "https://source.unsplash.com/featured/900x700/?datacenter,singapore",
      // Default placeholder
      "default": "https://source.unsplash.com/featured/900x700/?datacenter"
    },
    
    return regions[country] || regions["default"]
  },
=======
    const regions: Record<string, string> = {
      &quot;United States&quot;: &quot;https://source.unsplash.com/featured/900x700/?datacenter,usa&quot;,
      &quot;United Kingdom&quot;: &quot;https://source.unsplash.com/featured/900x700/?datacenter,uk&quot;,
      &quot;Germany&quot;: &quot;https://source.unsplash.com/featured/900x700/?datacenter,germany&quot;,
      &quot;Japan&quot;: &quot;https://source.unsplash.com/featured/900x700/?datacenter,japan&quot;,
      &quot;Australia&quot;: &quot;https://source.unsplash.com/featured/900x700/?datacenter,australia&quot;,
      &quot;Singapore&quot;: &quot;https://source.unsplash.com/featured/900x700/?datacenter,singapore&quot;,
      // Default placeholder
      &quot;default&quot;: &quot;https://source.unsplash.com/featured/900x700/?datacenter&quot;
    };
=======
  const _getRegionalImage = (country: string): string => {_// In a real app, _you'd have specific images for each region
    const regions: Record<string, _string> = {
      "United States": "https://source.unsplash.com/featured/900x700/?datacenter, _usa", _"United Kingdom": "https://source.unsplash.com/featured/900x700/?datacenter, _uk", _"Germany": "https://source.unsplash.com/featured/900x700/?datacenter, _germany", _"Japan": "https://source.unsplash.com/featured/900x700/?datacenter, _japan", _"Australia": "https://source.unsplash.com/featured/900x700/?datacenter, _australia", _"Singapore": "https://source.unsplash.com/featured/900x700/?datacenter, _singapore", _// Default placeholder
      "default": "https://source.unsplash.com/featured/900x700/?datacenter"};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    return regions[country] || regions[&quot;default&quot;];
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  // Get region-specific instructions
<<<<<<< HEAD
  const getRegionalInstructions = (country: string): string => {
    // In a real implementation, this would be much more detailed and specific
<<<<<<< HEAD
    const timeZones: Record<string string> = {
      "United States": "EST/CST/PST depending on location",
      "United Kingdom": "GMT/BST",
      "Germany": "CET/CEST",
      "Japan": "JST",
      "Australia": "AEST/ACDT/AWST depending on location",
      "Singapore": "SGT",
      "default": "Local timezone"
    },
    
    const timezone = timeZones[country] || timeZones["default"],
=======
    const timeZones: Record<string, string> = {
      &quot;United States&quot;: &quot;EST/CST/PST depending on location&quot;,
      &quot;United Kingdom&quot;: &quot;GMT/BST&quot;,
      &quot;Germany&quot;: &quot;CET/CEST&quot;,
      &quot;Japan&quot;: &quot;JST&quot;,
      &quot;Australia&quot;: &quot;AEST/ACDT/AWST depending on location&quot;,
      &quot;Singapore&quot;: &quot;SGT&quot;,
      &quot;default&quot;: &quot;Local timezone&quot;
    };
    
    const timezone = timeZones[country] || timeZones[&quot;default&quot;];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  const _getRegionalInstructions = (country: string): string => {_// In a real implementation, _this would be much more detailed and specific
    const timeZones: Record<string, _string> = {
      "United States": "EST/CST/PST depending on location", _"United Kingdom": "GMT/BST", _"Germany": "CET/CEST", _"Japan": "JST", _"Australia": "AEST/ACDT/AWST depending on location", _"Singapore": "SGT", _"default": "Local timezone"};
    
    const _timezone = timeZones[country] || timeZones["default"];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    return `Our technicians in ${_country} operate during business hours (8AM-6PM ${_timezone}). ` +
           `Response times are typically within 4 hours for metropolitan areas. ` +
           `Please have site access permissions and contact details ready for our technicians. ` +
           `For remote locations, additional travel fees may apply.`
  },
  
<<<<<<< HEAD
  const datacenters = getDatacenters(country),
=======
  const _datacenters = getDatacenters(country);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
      <CardHeader>
<<<<<<< HEAD
        <CardTitle className=&quot;text-white flex items-center&quot;>
          <Server className=&quot;mr-2 h-5 w-5 text-zion-cyan&quot; /> 
          IT Onsite Service in {country}
        </CardTitle>
        <CardDescription className=&quot;text-zion-slate-light&quot;>
          Details about our service locations and capabilities in {country}
=======
        <CardTitle className="text-white flex items-center">
          <Server className="mr-2 h-5 w-5 text-zion-cyan" /> 
          IT Onsite Service in {_country}
        </CardTitle>
        <CardDescription className="text-zion-slate-light">
          Details about our service locations and capabilities in {_country}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </CardDescription>
      </CardHeader>
      <CardContent className=&quot;space-y-4&quot;>
        <div className=&quot;overflow-hidden rounded-lg mb-4&quot;>
          <img 
<<<<<<< HEAD
            src={getRegionalImage(country)}
            alt={`Datacenter in ${country}`}
            className=&quot;w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110&quot;
=======
            src={_getRegionalImage(country)}
            alt={_`Datacenter in ${country}`}
            className="w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        </div>
        
        <div className=&quot;space-y-4&quot;>
          <div>
            <h4 className=&quot;text-lg font-medium text-white mb-2 flex items-center&quot;>
              <MapPin className=&quot;mr-2 h-4 w-4 text-zion-purple&quot; />
              Service Locations
            </h4>
<<<<<<< HEAD
            <div className=&quot;grid grid-cols-2 md:grid-cols-3 gap-2&quot;>
              {datacenters.map((dc, idx) => (
=======
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {_datacenters.map(_(dc, _idx) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <div 
                  key={idx} 
                  className=&quot;bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light&quot;
                >
                  {_dc}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className=&quot;text-lg font-medium text-white mb-2 flex items-center&quot;>
              <Clock className=&quot;mr-2 h-4 w-4 text-zion-purple&quot; />
              Service Instructions
            </h4>
<<<<<<< HEAD
            <p className=&quot;text-zion-slate-light&quot;>
              {getRegionalInstructions(country)}
=======
            <p className="text-zion-slate-light">
              {_getRegionalInstructions(country)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
          </div>
          
          <div className=&quot;bg-zion-blue rounded-lg p-4 border border-zion-blue-light&quot;>
            <h4 className=&quot;text-lg font-medium text-white mb-2&quot;>What's Included</h4>
            <ul className=&quot;list-disc list-inside text-zion-slate-light space-y-1&quot;>
              <li>Transportation to your site</li>
              <li>First hour of onsite technical support</li>
              <li>Basic hardware diagnosis</li>
              <li>Network connectivity troubleshooting</li>
              <li>Equipment installation assistance</li>
            </ul>
          </div>
        </div>
      </CardContent>
<<<<<<< HEAD
      <CardFooter className=&quot;border-t border-zion-blue-light pt-4&quot;>
        <p className=&quot;text-sm text-zion-slate-light&quot;>
          For custom enterprise needs or multi-site services in {country}, please contact our enterprise team for tailored pricing.
=======
      <CardFooter className="border-t border-zion-blue-light pt-4">
        <p className="text-sm text-zion-slate-light">
          For custom enterprise needs or multi-site services in {_country}, please contact our enterprise team for tailored pricing.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </p>
      </CardFooter>
    </Card>
  )
}
