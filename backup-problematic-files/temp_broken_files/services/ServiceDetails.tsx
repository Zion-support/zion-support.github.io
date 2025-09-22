
    <Card className="bg-zion-blue-dark border-zion-blue-light">;
      <CardHeader>;
        <CardTitle className="text-white flex items-center">;
          <Server className="mr-2 h-5 w-5 text-zion-cyan" /> ;
          IT Onsite Service in {country}
        </CardTitle>;
        <CardDescription className="text-zion-slate-light">;
          Details about our service locations and capabilities in {country}
        </CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        <div className="overflow-hidden rounded-lg mb-4">;
<div className="space-y-4">;
          <div>;
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">;
              <MapPin className="mr-2 h-4 w-4 text-zion-purple" />;
              Service Locations;
            </h4>;
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">;

                  {dc}
                </div>;
              ))}
            </div>;
          </div>;

          <div>;
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">;
              <Clock className="mr-2 h-4 w-4 text-zion-purple" />;
              Service Instructions;
            </h4>;
            <p className="text-zion-slate-light">;
              {getRegionalInstructions(country)}
            </p>;
          </div>;

          <div className="bg-zion-blue rounded-lg p-4 border border-zion-blue-light">;
            <h4 className="text-lg font-medium text-white mb-2">What's Included</h4>;
            <ul className="list-disc list-inside text-zion-slate-light space-y-1">;
              <li>Transportation to your site</li>;
              <li>First hour of onsite technical support</li>;
              <li>Basic hardware diagnosis</li>;
              <li>Network connectivity troubleshooting</li>;
              <li>Equipment installation assistance</li>;
