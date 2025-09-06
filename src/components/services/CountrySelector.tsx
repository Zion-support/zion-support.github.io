// Set top/popular countries

  return (
    <div className='mb-6'>
      <h3 className='text-xl font-semibold text-white mb-4 flex items-center'>
        <Globe className='mr-2 h-5 w-5 text-zion-cyan' />
        {selectedCountry
          ? `IT Onsite Service in ${selectedCountry.country}`
          : 'Select Country for IT Onsite Service'}
      </h3>

      >
        <SelectTrigger className='bg-zion-blue border-zion-blue-light text-white'>
          <SelectValue placeholder='Select a country' />
        </SelectTrigger>
        <SelectContent className='bg-zion-blue-dark border-zion-blue-light max-h-80'>
          <div className='p-2 border-b border-zion-blue-light'>
            <p className='text-sm text-zion-slate-light pb-1'>
              Popular Countries
            </p>
            {topCountries.map(item => (
              <SelectItem
                key={item.country}
                value={item.country}
                className='text-white'
              >                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
          </div>        <SelectContent className="bg-zion-blue-dark border-zion-blue-light max-h-80">
          <div className="p-2 border-b border-zion-blue-light">
            <p className="text-sm text-zion-slate-light pb-1">Popular Countries</p>
            {topCountries.map((item,) => (
              <SelectItem key={item.country} value={item.country} className="text-white">

                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}
          </div>

              <SelectItem key={item.country} value={item.country} className="text-white">
                {item.country} - ${item.pricePerIncident.toFixed(2)}
              </SelectItem>
            ))}

          </div>

        </SelectContent>
      </Select>
    </div>
  );
}