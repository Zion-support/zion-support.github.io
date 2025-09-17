
      "United States": "🇺🇸",
      "United Kingdom": "🇬🇧",
      "Canada": "🇨🇦",
      "Australia": "🇦🇺",
      "Germany": "🇩🇪", 
      "France": "🇫🇷",
      "Japan": "🇯🇵",
      "China": "🇨🇳",
      "Brazil": "🇧🇷",
      "India": "🇮🇳",
      "Russia": "🇷🇺",
      "Singapore": "🇸🇬",
      "South Korea": "🇰🇷",
      "South Africa": "🇿🇦",
      // Default if no flag is found
        : "bg-zion-blue-dark border-zion-blue-light"
    }`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country.country)}</span>
            <h3 className="text-lg font-semibold text-white truncate">{country.country}</h3>
          </div>
          {isPopular && (
            <Badge className="bg-zion-purple text-white border-none">Popular</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-3xl font-bold text-zion-cyan mb-4">
          ${country.pricePerIncident.toFixed(2)}
        </p>
        <div className="space-y-2 text-zion-slate-light">
          <div className="flex items-start">
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />
            <span>Typical response time: {getResponseTime(country.country)}</span>
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
      <CardFooter>
          }`}
        >
          Select Service
        </Button>
      </CardFooter>
    </Card>

  );
}
