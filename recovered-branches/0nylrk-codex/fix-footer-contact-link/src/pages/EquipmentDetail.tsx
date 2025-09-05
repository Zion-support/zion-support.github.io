

interface EquipmentSpecification {_name: string;
  value: string;}

interface EquipmentDetails {_id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  subcategory?: string;
  images: string[];
  price: number;
  currency: string;
  rating?: number;
  reviewCount?: number;
  inStock: boolean;
  expectedShipping?: string;
  specifications: EquipmentSpecification[];
  features: string[];
  warranty?: string;
  returnPolicy?: string;}

// Sample data - in a real app this would come from an API
const SAMPLE_EQUIPMENT: {_[key: string]: EquipmentDetails} = {_"pro-camera-x1000": {
    id: "pro-camera-x1000", _name: "Pro Camera X1000", _description: "Professional-grade cinema camera with 8K resolution, _advanced color science, _and exceptional low-light performance. Designed for feature films, _high-end commercials, _and documentary production. Includes comprehensive shooting modes, _customizable settings, _and industry-leading dynamic range.", _brand: "CineTech", _category: "Equipment", _subcategory: "Cameras", _images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800", _"https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800", _"https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=1200&h=800"
    ], _price: 6999, _currency: "$", _rating: 4.9, _reviewCount: 87, _inStock: true, _expectedShipping: "3-5 business days", _specifications: [
      { name: "Sensor", _value: "Full-frame CMOS (36 x 24 mm)"},
      {_name: "Resolution", _value: "8K (8192 x 4320)"},
      {_name: "Dynamic Range", _value: "16+ stops"},
      {_name: "ISO Range", _value: "100-51, _200 (expandable to 50-204, _800)"},
      {_name: "Recording Format", _value: "RAW, _ProRes, _H.265"},
      {_name: "Frame Rates", _value: "Up to 120fps at 4K, _60fps at 8K"},
      {_name: "Storage", _value: "Dual CFexpress Type B"},
      {_name: "Battery Life", _value: "~3 hours continuous recording"},
      {_name: "Weight", _value: "4.5 lbs (body only)"},
      {_name: "Connectivity", _value: "HDMI 2.1, _USB-C, _Wi-Fi, _Bluetooth"}
    ],
    features: [
      "Advanced 8K full-frame sensor",
      "16+ stops of dynamic range",
      "Internal RAW recording",
      "Dual native ISO technology",
      "5-axis in-body image stabilization",
      "AI-powered autofocus with subject tracking",
      "Weather-sealed magnesium alloy body",
      "Multiple assist tools: false color, waveform, vectorscope",
      "Anamorphic de-squeeze options",
      "Custom 3D LUT support"
    ],
    warranty: "2 years manufacturer warranty",
    returnPolicy: "30-day return policy for unused items in original packaging"
  },
  "audio-mixer-pro": {_id: "audio-mixer-pro", _name: "AudioMixer Pro Digital Mixing Console", _description: "Professional digital mixing console designed for studio recording, _live sound mixing, _and post-production applications. Features 32 channels, _premium preamps, _extensive routing options, _and intuitive control interface.", _brand: "AudioTech", _category: "Equipment", _subcategory: "Audio", _images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800", _"https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&h=800"
    ], _price: 3499, _currency: "$", _rating: 4.8, _reviewCount: 42, _inStock: true, _expectedShipping: "5-7 business days", _specifications: [
      { name: "Channels", _value: "32 input channels"},
      {_name: "Faders", _value: "16 motorized faders"},
      {_name: "Preamps", _value: "24 premium mic preamps"},
      {_name: "Sampling Rate", _value: "Up to 96kHz"},
      {_name: "EQ", _value: "4-band parametric per channel"},
      {_name: "Dynamics", _value: "Compressor/Gate on all channels"},
      {_name: "Effects", _value: "8 stereo effects processors"},
      {_name: "Recording", _value: "64-channel USB interface"},
      {_name: "Weight", _value: "32 lbs"}
    ],
    features: [
      "32-channel digital mixer with 24 premium mic preamps",
      "16 motorized faders with touch-sensitive control",
      "7-inch high-resolution color touchscreen",
      "Comprehensive routing matrix",
      "Onboard multi-track recording to USB",
      "iOS and Android remote control app",
      "Configurable user layers",
      "8 DCA groups and 6 mute groups",
      "Integrated WiFi for wireless control"
    ],
    warranty: "3 years manufacturer warranty",
    returnPolicy: "21-day return policy for items in original condition"
  }
};

export default function EquipmentDetail() {_const { equipmentId} = useParams() as {_equipmentId?: string};
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  
  // In a real app, this would fetch from an API
  const _equipment = equipmentId ? SAMPLE_EQUIPMENT[equipmentId] : undefined;
  
  if (!equipment) {_return (
      <>
        <Header />
        <div className="min-h-screen bg-zion-blue py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-white mb-4">Equipment Not Found</h1>
              <p className="text-zion-slate-light mb-8">The equipment you're looking for doesn't exist or has been removed.</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );}

  const _handleAddToCart = () => {_setIsAdding(true);
    
    // Simulate API call
    setTimeout__(() => {
      setIsAdding(false);
      toast({
        title: "Added to cart", _description: `${quantity}x ${_equipment.name} added to your cart.`});
    }, 800);
  };

  const _handleBuyNow = () => {_setIsAdding(true);
    
    // Simulate API call
    setTimeout__(() => {
      setIsAdding(false);
      toast({
        title: "Proceeding to checkout", _description: `Preparing your order for ${equipment.name}.`});
    }, 800);
  };

  return (_<>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {_/* Left Column - Images */}
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">
                {_/* Main Image */}
                <div className="aspect-video w-full relative">
                  <img 
                    src={_equipment.images[selectedImageIndex]} 
                    alt={_equipment.name} 
                    className="w-full h-full object-contain bg-zion-blue-light/10 p-4"
                  />
                </div>
                
                {_/* Thumbnail Gallery */}
                {_equipment.images.length > 1 && (
                  <div className="flex p-4 gap-2 overflow-x-auto">
                    {equipment.images.map((image, _index) => (_<div 
                        key={index}
                        onClick={_() => setSelectedImageIndex(index)}
                        className={_`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"}`}
                      >
                        <img 
                          src={_image} 
                          alt={_`${equipment.name} - image ${_index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {_/* Product Details Tabs */}
              <div className="mt-8">
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-3 h-auto">
                    <TabsTrigger value="description" className="py-3 data-[state=active]:bg-zion-purple/10">
                      Description
                    </TabsTrigger>
                    <TabsTrigger value="specifications" className="py-3 data-[state=active]:bg-zion-purple/10">
                      Specifications
                    </TabsTrigger>
                    <TabsTrigger value="features" className="py-3 data-[state=active]:bg-zion-purple/10">
                      Features
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="mt-4">
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                      <p className="text-zion-slate-light whitespace-pre-line">
                        {_equipment.description}
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="specifications" className="mt-4">
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {_equipment.specifications.map(_(spec, _index) => (
                          <div key={index} className="border-b border-zion-blue-light pb-2 mb-2 last:border-0 last:mb-0 last:pb-0">
                            <div className="flex justify-between">
                              <span className="text-zion-slate-light">{_spec.name}</span>
                              <span className="text-white font-medium">{_spec.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-4">
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                      <ul className="space-y-2">
                        {_equipment.features.map(_(feature, _index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="text-zion-cyan mt-1 flex-shrink-0">•</div>
                            <span className="text-zion-slate-light">{_feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {_/* Right Column - Purchase Info */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                {_/* Category and Brand */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">
                    {_equipment.category}
                  </Badge>
                  {_equipment.subcategory && (
                    <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">
                      {equipment.subcategory}
                    </Badge>
                  )}
                </div>
                
                {_/* Product Title */}
                <h1 className="text-2xl font-bold text-white mb-1">{_equipment.name}</h1>
                <p className="text-zion-cyan mb-4">Brand: {_equipment.brand}</p>
                
                {_/* Rating */}
                {_equipment.rating && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map(_(_, _i) => (
                        <Star
                          key={i}
                          className={_`h-5 w-5 ${
                            i < Math.floor(equipment.rating!) 
                              ? "text-zion-cyan fill-zion-cyan" 
                              : "text-zion-slate-light"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-zion-slate-light">
                      {_equipment.rating.toFixed(1)} ({_equipment.reviewCount} reviews)
                    </span>
                  </div>
                )}
                
                {_/* Price */}
                <div className="text-3xl font-bold text-white mb-4">
                  {_equipment.currency}{_equipment.price.toLocaleString()}
                </div>
                
                {_/* Stock Status */}
                <div className="mb-6">
                  {_equipment.inStock ? (
                    <div className="text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>In Stock</span>
                      {equipment.expectedShipping && (
                        <span className="text-zion-slate-light ml-1 text-sm">
                          (Ships in {equipment.expectedShipping})
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="text-rose-400 flex items-center gap-1">
                      <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                      <span>Out of Stock</span>
                    </div>
                  )}
                </div>
                
                {_/* Quantity */}
                <div className="mb-6">
                  <label className="text-sm text-zion-slate-light block mb-2">Quantity</label>
                  <div className="flex items-center border border-zion-blue-light rounded-md w-32">
                    <button 
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50"
                      onClick={_() => setQuantity(prev => Math.max(1, _prev - 1))}
                      disabled={_quantity <= 1 || !equipment.inStock}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      className="w-full text-center bg-transparent border-0 text-white focus:ring-0"
                      value={_quantity}
                      readOnly
                    />
                    <button 
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50"
                      onClick={_() => setQuantity(prev => prev + 1)}
                      disabled={_!equipment.inStock}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {_/* Purchase Buttons */}
                <div className="space-y-3 mb-6">
                  <Button 
                    onClick={_handleBuyNow}
                    disabled={_isAdding || !equipment.inStock}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                  >
                    {_isAdding ? "Processing..." : "Buy Now"}
                  </Button>
                  
                  <Button 
                    onClick={_handleAddToCart}
                    disabled={_isAdding || !equipment.inStock}
                    variant="outline"
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
                
                {_/* Additional Info */}
                <div className="space-y-4 border-t border-zion-blue-light pt-4">
                  {_/* Shipping */}
                  <div className="flex gap-3 text-zion-slate-light">
                    <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Free Shipping</p>
                      <p className="text-xs">For orders over $100 within the US</p>
                    </div>
                  </div>
                  
                  {_/* Warranty */}
                  {_equipment.warranty && (
                    <div className="flex gap-3 text-zion-slate-light">
                      <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium">Warranty</p>
                        <p className="text-xs">{equipment.warranty}</p>
                      </div>
                    </div>
                  )}
                  
                  {_/* Return Policy */}
                  {_equipment.returnPolicy && (
                    <div className="flex gap-3 text-zion-slate-light">
                      <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium">Returns</p>
                        <p className="text-xs">{equipment.returnPolicy}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
