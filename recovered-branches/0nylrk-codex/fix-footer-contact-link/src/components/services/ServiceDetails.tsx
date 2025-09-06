interface ServiceDetailsProps {
  country: string;
}
=======
// Component to show service details for the selected country;
export /**
 * ServiceDetails - Function description
 */
function ServiceDetails() {
  // Get datacenters for regions (simplified - in production this would come from a real database);
  const get_datacenters = (country: string): string[] => {
    const data_centers: Record < string, string[]> = {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      "United States": ["New York", "Los Angeles", "Chicago", "Dallas", "Seattle"];
      "United Kingdom": ["London", "Manchester", "Birmingham"];
      "Germany": ["Frankfurt", "Berlin", "Munich"];
      "Japan": ["Tokyo", "Osaka"];
      "Australia": ["Sydney", "Melbourne", "Perth"];
      "Singapore": ["Singapore Central"];
      "Canada": ["Toronto", "Montreal", "Vancouver"];
      "United States": "EST/CST/PST depending on location";
      "United Kingdom": "GMT/BST";
      "Germany": "CET/CEST";
=======
      // Default for other countries;
      "default": ["Major metropolitan areas"];
    }
;
    return data_centers[country] || data_centers["default"];
  }
;
  // Get region - specific image;
  const getRegionalImage = (country: string): string => {
    // In a real app, you'd have specific images for each region;
    const regions: Record < string, string> = {
      "United States": "https://source.unsplash.com / featured / 900x700/?datacenter, usa";
      "United Kingdom": "https://source.unsplash.com / featured / 900x700/?datacenter, uk";
      "Germany": "https://source.unsplash.com / featured / 900x700/?datacenter, germany";
      "Japan": "https://source.unsplash.com / featured / 900x700/?datacenter, japan";
      "Australia": "https://source.unsplash.com / featured / 900x700/?datacenter, australia";
      "Singapore": "https://source.unsplash.com / featured / 900x700/?datacenter, singapore";
      // Default placeholder;
      "default": "https://source.unsplash.com / featured / 900x700/?datacenter";
    }
;
    return regions[country] || regions["default"];
  }
;
  // Get region - specific instructions;
  const getRegionalInstructions = (country: string): string => {
    // In a real implementation, this would be much more detailed and specific;
    const time_zones: Record < string, string> = {
      "United States": "EST / CST / PST depending on location";
      "United Kingdom": "GMT / BST";
      "Germany": "CET / CEST";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      "Japan": "JST";
      "Australia": "AEST / ACDT / AWST depending on location";
      "Singapore": "SGT";
          IT Onsite Service in {country}
        </CardTitle>;
        <CardDescription className="text-zion-slate-light">;
          Details about our service locations and capabilities in {country}
          <img
            src={getRegionalImage(country)}
            alt={`Datacenter in ${country}`}
            className="w-full object-cover h-48 transform transition-transform duration-500 hover:scale-110"
                  {dc}
                </div>;
              ))}
            </ul>;
          </div>;
        </div>;
      </CardContent>;
=======
      <CardFooter className="border - t border - zion - blue - light pt - 4">;
        <p className="text - sm text - zion - slate - light">;
          For custom enterprise needs or multi - site services in {country}, please contact our enterprise team for tailored pricing.;
        </p>;
      </CardFooter>;
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
