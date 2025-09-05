

interface ServiceDetailsProps {_country: string;}

// Component to show service details for the selected country
export function ServiceDetails(_{_country}: ServiceDetailsProps) {_// Get datacenters for regions (simplified - in production this would come from a real database)
  const _getDatacenters = (country: string): string[] => {
    const dataCenters: Record<string, _string[]> = {
      "United States": ["New York", _"Los Angeles", _"Chicago", _"Dallas", _"Seattle"], _"United Kingdom": ["London", _"Manchester", _"Birmingham"], _"Germany": ["Frankfurt", _"Berlin", _"Munich"], _"Japan": ["Tokyo", _"Osaka"], _"Australia": ["Sydney", _"Melbourne", _"Perth"], _"Singapore": ["Singapore Central"], _"Canada": ["Toronto", _"Montreal", _"Vancouver"], _// Default for other countries
      "default": ["Major metropolitan areas"]};
    
    return dataCenters[country] || dataCenters["default"];
  };
  
  // Get region-specific image
  const _getRegionalImage = (country: string): string => {_// In a real app, _you'd have specific images for each region
    const regions: Record<string, _string> = {
      "United States": "https://source.unsplash.com/featured/900x700/?datacenter, _usa", _"United Kingdom": "https://source.unsplash.com/featured/900x700/?datacenter, _uk", _"Germany": "https://source.unsplash.com/featured/900x700/?datacenter, _germany", _"Japan": "https://source.unsplash.com/featured/900x700/?datacenter, _japan", _"Australia": "https://source.unsplash.com/featured/900x700/?datacenter, _australia", _"Singapore": "https://source.unsplash.com/featured/900x700/?datacenter, _singapore", _// Default placeholder
      "default": "https://source.unsplash.com/featured/900x700/?datacenter"};
    
    return regions[country] || regions["default"];
  };
  
  // Get region-specific instructions
  const _getRegionalInstructions = (country: string): string => {_// In a real implementation, _this would be much more detailed and specific
    const timeZones: Record<string, _string> = {
      "United States": "EST/CST/PST depending on location", _"United Kingdom": "GMT/BST", _"Germany": "CET/CEST", _"Japan": "JST", _"Australia": "AEST/ACDT/AWST depending on location", _"Singapore": "SGT", _"default": "Local timezone"};
    
    const _timezone = timeZones[country] || timeZones["default"];
    
    return `Our technicians in ${_country} operate during business hours (8AM-6PM ${_timezone}). ` +
           `Response times are typically within 4 hours for metropolitan areas. ` +
           `Please have site access permissions and contact details ready for our technicians. ` +
           `For remote locations, additional travel fees may apply.`;
  };
  
  const _datacenters = getDatacenters(country);
  
  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Server className="mr-2 h-5 w-5 text-zion-cyan" /> 
          IT Onsite Service in {_country}
        </CardTitle>
        <CardDescription className="text-zion-slate-light">
          Details about our service locations and capabilities in {_country}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="overflow-hidden rounded-lg mb-4">
          <img 
            src={_getRegionalImage(country)}
            alt={_`Datacenter in ${country}`}
            className="w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-zion-purple" />
              Service Locations
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {_datacenters.map(_(dc, _idx) => (
                <div 
                  key={idx} 
                  className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light"
                >
                  {_dc}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">
              <Clock className="mr-2 h-4 w-4 text-zion-purple" />
              Service Instructions
            </h4>
            <p className="text-zion-slate-light">
              {_getRegionalInstructions(country)}
            </p>
          </div>
          
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
      <CardFooter className="border-t border-zion-blue-light pt-4">
        <p className="text-sm text-zion-slate-light">
          For custom enterprise needs or multi-site services in {_country}, please contact our enterprise team for tailored pricing.
        </p>
      </CardFooter>
    </Card>
  );
}
