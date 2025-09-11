// Component to show service details for the selected country
export function ServiceDetails({ country }) {
    // Get datacenters for regions (simplified - in production this would come from a real database)
    const _getDatacenters = (_country) => {
        const _dataCenters = {

  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Server className="mr-2 h-5 w-5 text-zion-cyan" /> 
          IT Onsite Service in {country}
        </CardTitle>
        <CardDescription className="text-zion-slate-light">
          Details about our service locations and capabilities in {country}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="overflow-hidden rounded-lg mb-4 relative h-48">
          <Image
            src={getRegionalImage(country)}
            alt={`Datacenter in ${country}`}
            className="object-cover transform transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">

          <div>
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-zion-purple" />
              Service Locations
            </h4>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
              {datacenters.map((dc, idx) => (
                <div
                  key={idx}
                  className='bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light'                >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">

          />;
        </div>;
        <div className="space-y-4">;
          <div>;
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">;
              <MapPin className="mr-2 h-4 w-4 text-zion-purple" />;
              Service Locations;
            </h4>;
                  {dc}
                </div>;
              ))}

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
      <CardFooter className="border-t border-zion-blue-light pt-4">
        <p className="text-sm text-zion-slate-light">
          For custom enterprise needs or multi-site services in {country}, please contact our enterprise team for tailored pricing.
ursor/expand-services-advertise-and-build-project-4b36
        </p>
      </CardFooter>
    </Card>
  )

            </div>;
          </div>;

          <div>;
            <h4 className='text-lg font-medium text-white mb-2 flex items-center'>;
              <Clock className='mr-2 h-4 w-4 text-zion-purple' />;
              Service Instructions;
            </h4>;
            <p className='text-zion-slate-light'>;
              {getRegionalInstructions(country)}
            </p>;
          </div>;

          <div className='bg-zion-blue rounded-lg p-4 border border-zion-blue-light'>;
            <h4 className='text-lg font-medium text-white mb-2'>;
              What's Included;
            </h4>;
            <ul className='list-disc list-inside text-zion-slate-light space-y-1'>;
              <li>Transportation to your site</li>;
              <li>First hour of onsite technical support</li>;
              <li>Basic hardware diagnosis</li>;
              <li>Network connectivity troubleshooting</li>;
              <li>Equipment installation assistance</li>;
            </ul>;
          </div>;
        </div>;
      </CardContent>;
      <CardFooter className='border-t border-zion-blue-light pt-4'>;
        <p className='text-sm text-zion-slate-light'>;
          For custom enterprise needs or multi-site services in {country},;
          please contact our enterprise team for tailored pricing.;
        </p>;
      </CardFooter>;
    </Card>;
  );

};
}operate during business hours (8AM-6PM $ {;
  timezone ;
}) . `+ `Response times are typically within 4 hours for metropolitan areas. `+ `Please have site access permissions and contact details ready for our technicians. `+ `For remote locations, additional travel fees may apply.` ;
};";
return (<Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardDescription> </CardHeader> <CardContent className="space-y-4" > <div className="overflow-hidden rounded-lg mb-4 relative h-48" > <Image /> </div> <div className="space-y-4" > <div> <h4 className="text-lg font-medium text-white mb-2 flex items-center" > <MapPin className="mr-2 h-4 w-4 text-zion-purple" /> Service Locations </h4> <divkey= {
  idx "
}className="bg-zion-blue p-2 rounded border border-zion-blue-light text-center text-zion-slate-light"> {;
  dc ;
}</div>) ) ";
}</div> </div> <div> <h4 className="text-lg font-medium text-white mb-2 flex items-center" > <Clock className="mr-2 h-4 w-4 text-zion-purple" /> Service Instructions </h4> </p> </div> <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light" > <h4 className="text-lg font-medium text-white mb-2" >What's Included</h4> <ul className="list-disc list-inside text-zion-slate-light space-y-1" > <li>Transportation to your site</li> <li>First hour of onsite technical support</li> <li>Basic hardware diagnosis</li> <li>Network connectivity troubleshooting</li> <li>Equipment installation assistance</li> </ul> </div> </div> </CardContent> </p> </CardFooter> </Card>) ;
}'"}

  const datacenters = get_datacenters (country);
  return (
    <Card className='bg - zion - blue - dark border - zion - blue - light'>;
      <CardHeader>;
        <CardTitle className='text - white flex items - center'>;
          <Server className='mr - 2 h - 5 w - 5 text - zion - cyan' />;
          IT Onsite Service in {country}
        </CardTitle>;
        <CardDescription className='text - zion - slate - light'>;
          Details about our service locations and capabilities in {country}
        </CardDescription>;
      </CardHeader>;
      <CardContent className='space - y-4'>;
        <div className='overflow - hidden rounded - lg mb - 4 relative h - 48'>;
          <Image;
            src = {getRegionalImage (country), }
            alt={`Datacenter in ${country}`}
            className='object - cover transform transition - transform duration - 500 hover:scale - 110';
            loading='lazy';
          />;
        </div>;
        <div className='space - y-4'>;
          <div>;
            <h4 className='text - lg font - medium text - white mb - 2 flex items - center'>;
              <MapPin className='mr - 2 h - 4 w - 4 text - zion - purple' />;
              Service Locations;
            </h4>;
            <div className='grid grid - cols - 2 md:grid - cols - 3 gap - 2'>;
              {datacenters.map ((dc, idx) => (
                <div;
                  key={idx}
                  className='bg - zion - blue p - 2 rounded border border - zion - blue - light text - center text - zion - slate - light'                >;
                  {dc}
                </div>))}
            </div>;
          </div>;
          <div>;
            <h4 className='text - lg font - medium text - white mb - 2 flex items - center'>;
              <Clock className='mr - 2 h - 4 w - 4 text - zion - purple' />;
              Service Instructions;
            </h4>;
            <p className='text - zion - slate - light'>;
              {getRegionalInstructions (country)}
            </p>;
          </div>;
          <div className='bg - zion - blue rounded - lg p - 4 border border - zion - blue - light'>;
            <h4 className='text - lg font - medium text - white mb - 2'>;
              What's Included;
            </h4>;
            <ul className='list - disc list - inside text - zion - slate - light space - y-1'>;
              <li > Transportation to your site</li>;
              <li > First hour of onsite technical support</li>;
              <li > Basic hardware diagnosis</li>;
              <li > Network connectivity troubleshooting</li>;
              <li > Equipment installation assistance</li>;
            </ul>;
          </div>;
        </div>;
      </CardContent>;
      <CardFooter className='border - t border - zion - blue - light pt - 4'>;
        <p className='text - sm text - zion - slate - light'>;
          For custom enterprise needs or multi - site services in {country},
          please contact our enterprise team for tailored pricing.;
        </p>;
      </CardFooter>;
    </Card>);
}
}operate during business hours (8AM - 6PM $ {
  timezone;
}) . `+ `Response times are typically within 4 hours for metropolitan areas. `+ `Please have site access permissions and contact details ready for our technicians. `+ `For remote locations, additional travel fees may apply.`;
}";
return (<Card className="bg - zion - blue - dark border - zion - blue - light" > <CardHeader> </CardDescription> </CardHeader> <CardContent className="space - y-4" > <div className="overflow - hidden rounded - lg mb - 4 relative h - 48" > <Image /> </div> <div className="space - y-4" > <div> <h4 className="text - lg font - medium text - white mb - 2 flex items - center" > <MapPin className="mr - 2 h - 4 w - 4 text - zion - purple" /> Service Locations </h4> <div key= {
  idx ";
}className="bg - zion - blue p - 2 rounded border border - zion - blue - light text - center text - zion - slate - light" > {
  dc;
}</div>) ) ";
}</div> </div> <div> <h4 className="text - lg font - medium text - white mb - 2 flex items - center" > <Clock className="mr - 2 h - 4 w - 4 text - zion - purple" /> Service Instructions </h4> </p> </div> <div className="bg - zion - blue rounded - lg p - 4 border border - zion - blue - light" > <h4 className="text - lg font - medium text - white mb - 2" >What's Included</h4> <ul className="list - disc list - inside text - zion - slate - light space - y-1" > <li > Transportation to your site</li> <li > First hour of onsite technical support</li> <li > Basic hardware diagnosis</li> <li > Network connectivity troubleshooting</li> <li > Equipment installation assistance</li> </ul> </div> </div> </CardContent> </p> </CardFooter> </Card>);

