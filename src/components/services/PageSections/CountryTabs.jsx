import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';

export const CountryTabs = () => {
  const [activeCountry, setActiveCountry] = useState('us');

  const countries = [
    {
      id: 'us',
      name: 'United States',
      flag: '🇺🇸',
      regions: [
        {
          name: 'Northeast',
          cities: ['New York', 'Boston', 'Philadelphia', 'Washington DC'],
          contact: {
            phone: '+1 (555) 123-4567',
            email: 'northeast@zion.com',
            hours: 'Mon-Fri 8AM-6PM EST'
          }
        },
        {
          name: 'Southeast',
          cities: ['Atlanta', 'Miami', 'Charlotte', 'Orlando'],
          contact: {
            phone: '+1 (555) 234-5678',
            email: 'southeast@zion.com',
            hours: 'Mon-Fri 8AM-6PM EST'
          }
        },
        {
          name: 'Midwest',
          cities: ['Chicago', 'Detroit', 'Minneapolis', 'Indianapolis'],
          contact: {
            phone: '+1 (555) 345-6789',
            email: 'midwest@zion.com',
            hours: 'Mon-Fri 8AM-6PM CST'
          }
        },
        {
          name: 'West Coast',
          cities: ['Los Angeles', 'San Francisco', 'Seattle', 'Portland'],
          contact: {
            phone: '+1 (555) 456-7890',
            email: 'westcoast@zion.com',
            hours: 'Mon-Fri 8AM-6PM PST'
          }
        }
      ]
    },
    {
      id: 'ca',
      name: 'Canada',
      flag: '🇨🇦',
      regions: [
        {
          name: 'Eastern Canada',
          cities: ['Toronto', 'Montreal', 'Ottawa', 'Quebec City'],
          contact: {
            phone: '+1 (555) 567-8901',
            email: 'eastern@zion.ca',
            hours: 'Mon-Fri 8AM-6PM EST'
          }
        },
        {
          name: 'Western Canada',
          cities: ['Vancouver', 'Calgary', 'Edmonton', 'Winnipeg'],
          contact: {
            phone: '+1 (555) 678-9012',
            email: 'western@zion.ca',
            hours: 'Mon-Fri 8AM-6PM PST/MST'
          }
        }
      ]
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      regions: [
        {
          name: 'England',
          cities: ['London', 'Manchester', 'Birmingham', 'Liverpool'],
          contact: {
            phone: '+44 20 1234 5678',
            email: 'england@zion.co.uk',
            hours: 'Mon-Fri 9AM-6PM GMT'
          }
        },
        {
          name: 'Scotland',
          cities: ['Edinburgh', 'Glasgow', 'Aberdeen', 'Dundee'],
          contact: {
            phone: '+44 131 234 5678',
            email: 'scotland@zion.co.uk',
            hours: 'Mon-Fri 9AM-6PM GMT'
          }
        }
      ]
    },
    {
      id: 'au',
      name: 'Australia',
      flag: '🇦🇺',
      regions: [
        {
          name: 'Eastern Australia',
          cities: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra'],
          contact: {
            phone: '+61 2 1234 5678',
            email: 'eastern@zion.com.au',
            hours: 'Mon-Fri 9AM-6PM AEST'
          }
        },
        {
          name: 'Western Australia',
          cities: ['Perth', 'Adelaide', 'Darwin', 'Hobart'],
          contact: {
            phone: '+61 8 1234 5678',
            email: 'western@zion.com.au',
            hours: 'Mon-Fri 9AM-6PM AWST'
          }
        }
      ]
    }
  ];

  const currentCountry = countries.find(c => c.id === activeCountry);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Global Service Coverage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zion provides professional IT services across multiple countries and regions. 
            Find your local team and get the support you need.
          </p>
        </div>

        {/* Country Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {countries.map((country) => (
            <button
              key={country.id}
              onClick={() => setActiveCountry(country.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCountry === country.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="text-2xl">{country.flag}</span>
              <span>{country.name}</span>
            </button>
          ))}
        </div>

        {/* Country Content */}
        {currentCountry && (
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Country Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{currentCountry.flag}</span>
                  <div>
                    <h3 className="text-3xl font-bold">{currentCountry.name}</h3>
                    <p className="text-blue-100 text-lg">
                      Professional IT services across {currentCountry.regions.length} regions
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 text-blue-100">
                    <Globe className="w-5 h-5" />
                    <span>Global Coverage</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regions Grid */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {currentCountry.regions.map((region, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{region.name}</h4>
                    
                    {/* Cities */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                        Major Cities
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {region.cities.map((city, cityIndex) => (
                          <span
                            key={cityIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Phone className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Phone</p>
                          <p className="font-semibold text-gray-900">{region.contact.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <Mail className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="font-semibold text-gray-900">{region.contact.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Business Hours</p>
                          <p className="font-semibold text-gray-900">{region.contact.hours}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                        Contact {region.name} Team
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Benefits */}
            <div className="bg-gray-50 border-t border-gray-200 p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Global Service Benefits
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">24/7 Global Support</h5>
                  <p className="text-gray-600 text-sm">
                    Round-the-clock support across all time zones
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-green-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Local Expertise</h5>
                  <p className="text-gray-600 text-sm">
                    Region-specific knowledge and compliance
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-purple-600" />
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Unified Experience</h5>
                  <p className="text-gray-600 text-sm">
                    Consistent service quality worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Service in Another Region?
            </h3>
            <p className="text-blue-100 mb-6">
              Contact our global team to discuss your IT service needs in any location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Contact Global Team
              </a>
              <a
                href="#locations"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View All Locations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};