  subcategory?: string;
  images: string[],;
  price: number,;
  currency: string,;
  rating?: number;
  warranty?: string;
  returnPolicy?: string;
}
    ];
    features: [;
      "Advanced 8K full-frame sensor";
      "16+ stops of dynamic range";
      "Internal RAW recording";
      "Dual native ISO technology";
      "5-axis in-body image stabilization";
      "AI-powered autofocus with subject tracking";
      "Multiple assist tools: false color, waveform, vectorscope";
      "Anamorphic de-squeeze options";
      "Custom 3D LUT support";
    ];
      { name: "Weight", value: "32 lbs" }
    ];
    features: [;
      "32-channel digital mixer with 24 premium mic preamps";
      "16 motorized faders with touch-sensitive control";
      "7-inch high-resolution color touchscreen";
=======
  review_count?: number;
  in_stock: boolean,
  expected_shipping?: string;
  specifications: EquipmentSpecification[],
  features: string[],
  warranty?: string;
  return_policy?: string;
}
// Sample data - in a real app this would come from an API;
const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } = {
  "pro - camera - x1000": {
    id: "pro - camera - x1000",
    name: "Pro Camera X1000",
    description: "Professional - grade cinema camera with 8K resolution, advanced color science, and exceptional low - light performance. Designed for feature films, high - end commercials, and documentary production. Includes comprehensive shooting modes, customizable settings, and industry - leading dynamic range.";
    brand: "CineTech",
    category: "Equipment",
    subcategory: "Cameras",
    images: [;
      "https://images.unsplash.com / photo - 1516035069371 - 29a1b244cc32?auto = format & fit = crop & w=1200 & h=800";
      "https://images.unsplash.com / photo - 1502920917128 - 1aa500764cbd?auto = format & fit = crop & w=1200 & h=800";
      "https://images.unsplash.com / photo - 1581591524425 - c7e0978865fc?auto = format & fit = crop & w=1200 & h=800";
    ],
    price: 6999,
    currency: "$",
    rating: 4.9,
    review_count: 87,
    in_stock: true,
    expected_shipping: "3 - 5 business days",
    specifications: [;
      { name: "Sensor", value: "Full - frame CMOS (36 x 24 mm)" },
      { name: "Resolution", value: "8K (8192 x 4320)" },
      { name: "Dynamic Range", value: "16+ stops" },
      { name: "ISO Range", value: "100 - 51, 200 (expandable to 50 - 204, 800)" }
      { name: "Recording Format", value: "RAW, ProRes, H.265" }
      { name: "Frame Rates", value: "Up to 120fps at 4K, 60fps at 8K" }
      { name: "Storage", value: "Dual CFexpress Type B" },
      { name: "Battery Life", value: "~3 hours continuous recording" },
      { name: "Weight", value: "4.5 lbs (body only)" },
      { name: "Connectivity", value: "HDMI 2.1, USB - C, Wi - Fi, Bluetooth" }
    ];
    features: [;
      "Advanced 8K full - frame sensor";
      "16+ stops of dynamic range";
      "Internal RAW recording";
      "Dual native ISO technology";
      "5 - axis in - body image stabilization";
      "AI - powered autofocus with subject tracking";
      "Weather - sealed magnesium alloy body",
      "Multiple assist tools: false color, waveform, vectorscope";
      "Anamorphic de - squeeze options";
      "Custom 3D LUT support";
    ];
    warranty: "2 years manufacturer warranty",
    return_policy: "30 - day return policy for unused items in original packaging";
  }
  "audio - mixer - pro": {
    id: "audio - mixer - pro",
    name: "AudioMixer Pro Digital Mixing Console",
    description: "Professional digital mixing console designed for studio recording, live sound mixing, and post - production applications. Features 32 channels, premium preamps, extensive routing options, and intuitive control interface.";
    brand: "AudioTech",
    category: "Equipment",
    subcategory: "Audio",
    images: [;
      "https://images.unsplash.com / photo - 1598488035139 - bdbb2231ce04?auto = format & fit = crop & w=1200 & h=800";
      "https://images.unsplash.com / photo - 1583121274602 - 3e2820c69888?auto = format & fit = crop & w=1200 & h=800";
    ],
    price: 3499,
    currency: "$",
    rating: 4.8,
    review_count: 42,
    in_stock: true,
    expected_shipping: "5 - 7 business days",
    specifications: [;
      { name: "Channels", value: "32 input channels" },
      { name: "Faders", value: "16 motorized faders" },
      { name: "Preamps", value: "24 premium mic preamps" },
      { name: "Sampling Rate", value: "Up to 96kHz" },
      { name: "EQ", value: "4 - band parametric per channel" },
      { name: "Dynamics", value: "Compressor / Gate on all channels" },
      { name: "Effects", value: "8 stereo effects processors" },
      { name: "Recording", value: "64 - channel USB interface" },
      { name: "Weight", value: "32 lbs" }
    ];
    features: [;
      "32 - channel digital mixer with 24 premium mic preamps";
      "16 motorized faders with touch - sensitive control";
      "7 - inch high - resolution color touchscreen";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      "Comprehensive routing matrix";
      "Onboard multi - track recording to USB";
      "iOS and Android remote control app";
      "Configurable user layers";
      "8 DCA groups and 6 mute groups";
    return (
      <>;
        <Header />;
        <div className="min-h-screen bg-zion-blue py-12 px-4">;
          <div className="container mx-auto">;
            <div className="text-center py-20">;
              <h1 className="text-3xl font-bold text-white mb-4">Equipment Not Found</h1>;
              <p className="text-zion-slate-light mb-8">The equipment you're looking for doesn't exist or has been removed.</p>;
=======
      "Integrated WiFi for wireless control";
    ],
    warranty: "3 years manufacturer warranty",
    return_policy: "21 - day return policy for items in original condition";
  }
}
;
export default /**
 * EquipmentDetail - Function description
 */
function EquipmentDetail() {
  const { equipment_id } = use_params () as { equipment_id?: string }
  const [selectedImageIndex, setSelectedImageIndex] = useState (0);
  const [quantity, set_quantity] = useState (1);
  const [is_adding, setIsAdding] = useState (false);
;
  // In a real app, this would fetch from an API;
  const equipment = equipment_id ? SAMPLE_EQUIPMENT[equipment_id] : undefined;
;
  // Check condition
if ( {) {
  $2
}
    return (
      <>;
        <Header />;
        <div className="min - h-screen bg - zion - blue py - 12 px - 4">;
          <div className="container mx - auto">;
            <div className="text - center py - 20">;
              <h1 className="text - 3xl font - bold text - white mb - 4">Equipment Not Found</h1>;
              <p className="text - zion - slate - light mb - 8">The equipment you're looking for doesn't exist or has been removed.</p>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            </div>;
          </div>;
        </div>;
        <Footer />;

  return (
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            {/* Left Column - Images */}
            <div className="lg:col-span-2">;
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">;
                {/* Main Image */}
                      <div
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${;
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent";
                        }`}
                          className="w-full h-full object-cover"
                        />;
                      </div>;
                    ))}
                  </div>;
                )}
                      </ul>;
                    </div>;
                  </TabsContent>;
                </Tabs>;
              </div>;
            </div>;
            {/* Right Column - Purchase Info */}
            <div className="lg:col-span-1">;
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">;
                {/* Category and Brand */}
                <div className="flex flex-wrap gap-2 mb-3">;
                  <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">;
                    {equipment && equipment.category}
                  </Badge>;
                  {equipment && equipment.subcategory && (;
                    <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">;
                      {equipment && equipment.subcategory}
                    </Badge>;
                  )}
                {/* Rating */}
                {equipment && equipment.rating && (;
                  <div className="flex items-center gap-2 mb-4">;
                    <div className="flex items-center">;
                      {[...Array(5)].map((_, i) => (;
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                              : "text-zion-slate-light"
                          }`}
                        />;
                      ))}
                    </div>;
                    <span className="text-sm text-zion-slate-light">;
                      {equipment && equipment.rating.toFixed(1)} ({equipment && equipment.reviewCount} reviews);
                    </span>;
                  </div>;
                )}
                {/* Stock Status */}
                <div className="mb-6">;
                  {equipment && equipment.inStock ? (;
                    <div className="text-emerald-400 flex items-center gap-1">;
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>;
                      <span>In Stock</span>;
                      {equipment && equipment.expectedShipping && (;
                        <span className="text-zion-slate-light ml-1 text-sm">;
                          (Ships in {equipment && equipment.expectedShipping});
                        </span>;
                      )}
                    </div>;
                  ) : (;
                    <div className="text-rose-400 flex items-center gap-1">;
                      <span className="w-2 h-2 bg-rose-400 rounded-full"></span>;
                      <span>Out of Stock</span>;
                    </div>;
                  )}
                {/* Additional Info */}
                <div className="space-y-4 border-t border-zion-blue-light pt-4">;
                  {/* Shipping */}
                  {/* Warranty */}
                  {equipment && equipment.warranty && (;
                    <div className="flex gap-3 text-zion-slate-light">;
                      <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />;
                      <div>;
                        <p className="text-white text-sm font-medium">Warranty</p>;
                        <p className="text-xs">{equipment && equipment.warranty}</p>;
                      </div>;
                    </div>;
                  )}
                  {/* Return Policy */}
                  {equipment && equipment.returnPolicy && (;
                    <div className="flex gap-3 text-zion-slate-light">;
                      <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />;
                      <div>;
                        <p className="text-white text-sm font-medium">Returns</p>;
                        <p className="text-xs">{equipment && equipment.returnPolicy}</p>;
                      </div>;
                    </div>;
                  )}
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
