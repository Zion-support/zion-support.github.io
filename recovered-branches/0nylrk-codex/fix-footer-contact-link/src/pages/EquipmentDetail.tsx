
<<<<<<< HEAD
import { useState } from "react",
import { useParams } from "react-router-dom",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock } from "lucide-react",
import { toast } from "@/hooks/use-toast",
=======
import { useState } from &quot;react&quot;;
import { useParams } from &quot;react-router-dom&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { AspectRatio } from &quot;@/components/ui/aspect-ratio&quot;;
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock } from &quot;lucide-react&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface EquipmentSpecification {
  name: string,
  value: string
}

interface EquipmentDetails {
  id: string,
  name: string,
  description: string,
  brand: string,
  category: string,
  subcategory?: string,
  images: string[],
  price: number,
  currency: string,
  rating?: number,
  reviewCount?: number,
  inStock: boolean,
  expectedShipping?: string,
  specifications: EquipmentSpecification[],
  features: string[],
  warranty?: string,
  returnPolicy?: string
}

// Sample data - in a real app this would come from an API
const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } = {
<<<<<<< HEAD
  "pro-camera-x1000": {
    id: "pro-camera-x1000",
    name: "Pro Camera X1000",
    description: "Professional-grade cinema camera with 8K resolution, advanced color science, and exceptional low-light window.window.window.performance. Designed for feature films, high-end commercials, and documentary production. Includes comprehensive shooting modes, customizable settings, and industry-leading dynamic range.",
    brand: "CineTech",
    category: "Equipment",
    subcategory: "Cameras",
=======
  &quot;pro-camera-x1000&quot;: {
    id: &quot;pro-camera-x1000&quot;,
    name: &quot;Pro Camera X1000&quot;,
    description: &quot;Professional-grade cinema camera with 8K resolution, advanced color science, and exceptional low-light performance. Designed for feature films, high-end commercials, and documentary production. Includes comprehensive shooting modes, customizable settings, and industry-leading dynamic range.&quot;,
    brand: &quot;CineTech&quot;,
    category: &quot;Equipment&quot;,
    subcategory: &quot;Cameras&quot;,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    images: [
      &quot;https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800&quot;,
      &quot;https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800&quot;,
      &quot;https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=1200&h=800&quot;
    ],
    price: 6999,
    currency: &quot;$&quot;,
    rating: 4.9,
    reviewCount: 87,
    inStock: true,
    expectedShipping: &quot;3-5 business days&quot;,
    specifications: [
      { name: &quot;Sensor&quot;, value: &quot;Full-frame CMOS (36 x 24 mm)&quot; },
      { name: &quot;Resolution&quot;, value: &quot;8K (8192 x 4320)&quot; },
      { name: &quot;Dynamic Range&quot;, value: &quot;16+ stops&quot; },
      { name: &quot;ISO Range&quot;, value: &quot;100-51,200 (expandable to 50-204,800)&quot; },
      { name: &quot;Recording Format&quot;, value: &quot;RAW, ProRes, H.265&quot; },
      { name: &quot;Frame Rates&quot;, value: &quot;Up to 120fps at 4K, 60fps at 8K&quot; },
      { name: &quot;Storage&quot;, value: &quot;Dual CFexpress Type B&quot; },
      { name: &quot;Battery Life&quot;, value: &quot;~3 hours continuous recording&quot; },
      { name: &quot;Weight&quot;, value: &quot;4.5 lbs (body only)&quot; },
      { name: &quot;Connectivity&quot;, value: &quot;HDMI 2.1, USB-C, Wi-Fi, Bluetooth&quot; }
    ],
    features: [
      &quot;Advanced 8K full-frame sensor&quot;,
      &quot;16+ stops of dynamic range&quot;,
      &quot;Internal RAW recording&quot;,
      &quot;Dual native ISO technology&quot;,
      &quot;5-axis in-body image stabilization&quot;,
      &quot;AI-powered autofocus with subject tracking&quot;,
      &quot;Weather-sealed magnesium alloy body&quot;,
      &quot;Multiple assist tools: false color, waveform, vectorscope&quot;,
      &quot;Anamorphic de-squeeze options&quot;,
      &quot;Custom 3D LUT support&quot;
    ],
    warranty: &quot;2 years manufacturer warranty&quot;,
    returnPolicy: &quot;30-day return policy for unused items in original packaging&quot;
  },
  &quot;audio-mixer-pro&quot;: {
    id: &quot;audio-mixer-pro&quot;,
    name: &quot;AudioMixer Pro Digital Mixing Console&quot;,
    description: &quot;Professional digital mixing console designed for studio recording, live sound mixing, and post-production applications. Features 32 channels, premium preamps, extensive routing options, and intuitive control interface.&quot;,
    brand: &quot;AudioTech&quot;,
    category: &quot;Equipment&quot;,
    subcategory: &quot;Audio&quot;,
    images: [
      &quot;https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800&quot;,
      &quot;https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&h=800&quot;
    ],
    price: 3499,
    currency: &quot;$&quot;,
    rating: 4.8,
    reviewCount: 42,
    inStock: true,
    expectedShipping: &quot;5-7 business days&quot;,
    specifications: [
      { name: &quot;Channels&quot;, value: &quot;32 input channels&quot; },
      { name: &quot;Faders&quot;, value: &quot;16 motorized faders&quot; },
      { name: &quot;Preamps&quot;, value: &quot;24 premium mic preamps&quot; },
      { name: &quot;Sampling Rate&quot;, value: &quot;Up to 96kHz&quot; },
      { name: &quot;EQ&quot;, value: &quot;4-band parametric per channel&quot; },
      { name: &quot;Dynamics&quot;, value: &quot;Compressor/Gate on all channels&quot; },
      { name: &quot;Effects&quot;, value: &quot;8 stereo effects processors&quot; },
      { name: &quot;Recording&quot;, value: &quot;64-channel USB interface&quot; },
      { name: &quot;Weight&quot;, value: &quot;32 lbs&quot; }
    ],
    features: [
      &quot;32-channel digital mixer with 24 premium mic preamps&quot;,
      &quot;16 motorized faders with touch-sensitive control&quot;,
      &quot;7-inch high-resolution color touchscreen&quot;,
      &quot;Comprehensive routing matrix&quot;,
      &quot;Onboard multi-track recording to USB&quot;,
      &quot;iOS and Android remote control app&quot;,
      &quot;Configurable user layers&quot;,
      &quot;8 DCA groups and 6 mute groups&quot;,
      &quot;Integrated WiFi for wireless control&quot;
    ],
    warranty: &quot;3 years manufacturer warranty&quot;,
    returnPolicy: &quot;21-day return policy for items in original condition&quot;
  }
},

export default function EquipmentDetail() {
  const { equipmentId } = useParams() as { equipmentId?: string },
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),
  const [quantity, setQuantity] = useState(1),
  const [isAdding, setIsAdding] = useState(false),
  
  // In a real app, this would fetch from an API
  const equipment = equipmentId ? SAMPLE_EQUIPMENT[equipmentId] : undefined,
  
  if (!equipment) {
    return (
      <>
        <Header />
        <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
          <div className=&quot;container mx-auto&quot;>
            <div className=&quot;text-center py-20&quot;>
              <h1 className=&quot;text-3xl font-bold text-white mb-4&quot;>Equipment Not Found</h1>
              <p className=&quot;text-zion-slate-light mb-8&quot;>The equipment you're looking for doesn't exist or has been removed.</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const handleAddToCart = () => {
    setIsAdding(true),
    
    // Simulate API call
    setTimeout(() => {
      setIsAdding(false),
      toast({
<<<<<<< HEAD
        title: "Added to cart",
        description: `${quantity}x ${equipment.name} added to your cart.`})
    }, 800)
  },
=======
        title: &quot;Added to cart&quot;,
        description: `${quantity}x ${equipment.name} added to your cart.`});
    }, 800);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const handleBuyNow = () => {
    setIsAdding(true),
    
    // Simulate API call
    setTimeout(() => {
      setIsAdding(false),
      toast({
<<<<<<< HEAD
        title: "Proceeding to checkout",
        description: `Preparing your order for ${equipment.name}.`})
    }, 800)
  },
=======
        title: &quot;Proceeding to checkout&quot;,
        description: `Preparing your order for ${equipment.name}.`});
    }, 800);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <>
      <Header />
      <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
        <div className=&quot;container mx-auto&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8&quot;>
            {/* Left Column - Images */}
            <div className=&quot;lg:col-span-2&quot;>
              <div className=&quot;bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light&quot;>
                {/* Main Image */}
                <div className=&quot;aspect-video w-full relative&quot;>
                  <img 
                    src={equipment.images[selectedImageIndex]} 
                    alt={equipment.name} 
                    className=&quot;w-full h-full object-contain bg-zion-blue-light/10 p-4&quot;
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                {equipment.images.length > 1 && (
                  <div className=&quot;flex p-4 gap-2 overflow-x-auto&quot;>
                    {equipment.images.map((image, index) => (
                      <div 
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${
                          index === selectedImageIndex ? &quot;border-zion-purple&quot; : &quot;border-transparent&quot;
                        }`}
                      >
                        <img 
                          src={image} 
                          alt={`${equipment.name} - image ${index + 1}`} 
                          className=&quot;w-full h-full object-cover&quot;
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Details Tabs */}
              <div className=&quot;mt-8&quot;>
                <Tabs defaultValue=&quot;description&quot; className=&quot;w-full&quot;>
                  <TabsList className=&quot;bg-zion-blue-dark border border-zion-blue-light grid grid-cols-3 h-auto&quot;>
                    <TabsTrigger value=&quot;description&quot; className=&quot;py-3 data-[state=active]:bg-zion-purple/10&quot;>
                      Description
                    </TabsTrigger>
                    <TabsTrigger value=&quot;specifications&quot; className=&quot;py-3 data-[state=active]:bg-zion-purple/10&quot;>
                      Specifications
                    </TabsTrigger>
                    <TabsTrigger value=&quot;features&quot; className=&quot;py-3 data-[state=active]:bg-zion-purple/10&quot;>
                      Features
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value=&quot;description&quot; className=&quot;mt-4&quot;>
                    <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6&quot;>
                      <p className=&quot;text-zion-slate-light whitespace-pre-line&quot;>
                        {equipment.description}
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value=&quot;specifications&quot; className=&quot;mt-4&quot;>
                    <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6&quot;>
                      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                        {equipment.specifications.map((spec, index) => (
                          <div key={index} className=&quot;border-b border-zion-blue-light pb-2 mb-2 last:border-0 last:mb-0 last:pb-0&quot;>
                            <div className=&quot;flex justify-between&quot;>
                              <span className=&quot;text-zion-slate-light&quot;>{spec.name}</span>
                              <span className=&quot;text-white font-medium&quot;>{spec.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value=&quot;features&quot; className=&quot;mt-4&quot;>
                    <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6&quot;>
                      <ul className=&quot;space-y-2&quot;>
                        {equipment.features.map((feature, index) => (
                          <li key={index} className=&quot;flex items-start gap-2&quot;>
                            <div className=&quot;text-zion-cyan mt-1 flex-shrink-0&quot;>•</div>
                            <span className=&quot;text-zion-slate-light&quot;>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Right Column - Purchase Info */}
            <div className=&quot;lg:col-span-1&quot;>
              <div className=&quot;bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6&quot;>
                {/* Category and Brand */}
                <div className=&quot;flex flex-wrap gap-2 mb-3&quot;>
                  <Badge variant=&quot;outline&quot; className=&quot;text-zion-slate-light border-zion-blue-light&quot;>
                    {equipment.category}
                  </Badge>
                  {equipment.subcategory && (
                    <Badge variant=&quot;outline&quot; className=&quot;text-zion-slate-light border-zion-blue-light&quot;>
                      {equipment.subcategory}
                    </Badge>
                  )}
                </div>
                
                {/* Product Title */}
                <h1 className=&quot;text-2xl font-bold text-white mb-1&quot;>{equipment.name}</h1>
                <p className=&quot;text-zion-cyan mb-4&quot;>Brand: {equipment.brand}</p>
                
                {/* Rating */}
                {equipment.rating && (
                  <div className=&quot;flex items-center gap-2 mb-4&quot;>
                    <div className=&quot;flex items-center&quot;>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(equipment.rating!) 
                              ? &quot;text-zion-cyan fill-zion-cyan&quot; 
                              : &quot;text-zion-slate-light&quot;
                          }`}
                        />
                      ))}
                    </div>
                    <span className=&quot;text-sm text-zion-slate-light&quot;>
                      {equipment.rating.toFixed(1)} ({equipment.reviewCount} reviews)
                    </span>
                  </div>
                )}
                
                {/* Price */}
                <div className=&quot;text-3xl font-bold text-white mb-4&quot;>
                  {equipment.currency}{equipment.price.toLocaleString()}
                </div>
                
                {/* Stock Status */}
                <div className=&quot;mb-6&quot;>
                  {equipment.inStock ? (
                    <div className=&quot;text-emerald-400 flex items-center gap-1&quot;>
                      <span className=&quot;w-2 h-2 bg-emerald-400 rounded-full&quot;></span>
                      <span>In Stock</span>
                      {equipment.expectedShipping && (
                        <span className=&quot;text-zion-slate-light ml-1 text-sm&quot;>
                          (Ships in {equipment.expectedShipping})
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className=&quot;text-rose-400 flex items-center gap-1&quot;>
                      <span className=&quot;w-2 h-2 bg-rose-400 rounded-full&quot;></span>
                      <span>Out of Stock</span>
                    </div>
                  )}
                </div>
                
                {/* Quantity */}
                <div className=&quot;mb-6&quot;>
                  <label className=&quot;text-sm text-zion-slate-light block mb-2&quot;>Quantity</label>
                  <div className=&quot;flex items-center border border-zion-blue-light rounded-md w-32&quot;>
                    <button 
                      className=&quot;px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50&quot;
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      disabled={quantity <= 1 || !equipment.inStock}
                    >
                      -
                    </button>
                    <input 
                      type=&quot;number&quot; 
                      className=&quot;w-full text-center bg-transparent border-0 text-white focus:ring-0&quot;
                      value={quantity}
                      readOnly
                    />
                    <button 
                      className=&quot;px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50&quot;
                      onClick={() => setQuantity(prev => prev + 1)}
                      disabled={!equipment.inStock}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Purchase Buttons */}
                <div className=&quot;space-y-3 mb-6&quot;>
                  <Button 
                    onClick={handleBuyNow}
                    disabled={isAdding || !equipment.inStock}
                    className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6&quot;
                  >
                    {isAdding ? &quot;Processing...&quot; : &quot;Buy Now&quot;}
                  </Button>
                  
                  <Button 
                    onClick={handleAddToCart}
                    disabled={isAdding || !equipment.inStock}
                    variant=&quot;outline&quot;
                    className=&quot;w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10&quot;
                  >
                    <ShoppingCart className=&quot;h-4 w-4 mr-2&quot; />
                    Add to Cart
                  </Button>
                </div>
                
                {/* Additional Info */}
                <div className=&quot;space-y-4 border-t border-zion-blue-light pt-4&quot;>
                  {/* Shipping */}
                  <div className=&quot;flex gap-3 text-zion-slate-light&quot;>
                    <Truck className=&quot;h-5 w-5 text-zion-cyan flex-shrink-0&quot; />
                    <div>
                      <p className=&quot;text-white text-sm font-medium&quot;>Free Shipping</p>
                      <p className=&quot;text-xs&quot;>For orders over $100 within the US</p>
                    </div>
                  </div>
                  
                  {/* Warranty */}
                  {equipment.warranty && (
                    <div className=&quot;flex gap-3 text-zion-slate-light&quot;>
                      <Shield className=&quot;h-5 w-5 text-zion-cyan flex-shrink-0&quot; />
                      <div>
                        <p className=&quot;text-white text-sm font-medium&quot;>Warranty</p>
                        <p className=&quot;text-xs&quot;>{equipment.warranty}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Return Policy */}
                  {equipment.returnPolicy && (
                    <div className=&quot;flex gap-3 text-zion-slate-light&quot;>
                      <RotateCcw className=&quot;h-5 w-5 text-zion-cyan flex-shrink-0&quot; />
                      <div>
                        <p className=&quot;text-white text-sm font-medium&quot;>Returns</p>
                        <p className=&quot;text-xs&quot;>{equipment.returnPolicy}</p>
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
  )
}
