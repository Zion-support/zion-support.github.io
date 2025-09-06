
=======
import { useState } from "react",;
import { useParams } from "react-router-dom",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock } from "lucide-react",;
import { toast } from "@/hooks/use-toast",;
;
interface EquipmentSpecification {;
  name:string,;
  value:string;}
;
interface EquipmentDetails {;
  id:string,;
  name:string,;
  description:string,;
  brand:string,;
  category:string,;
  subcategory?:string,;
  images:string[],;
  price:number,;
  currency:string,;
  rating?:number,;
  reviewCount?:number,;
  inStock:boolean,;
  expectedShipping?:string,;
  specifications:EquipmentSpecification[],;
  features:string[],;
  warranty?:string,;
  returnPolicy?:string;
}
;
// Sample data - in a real app this would come from an API;
const SAMPLE_EQUIPMENT:{ [key:string]:EquipmentDetails } = {;
  "pro-camera-x1000":{;
    id:"pro-camera-x1000",;
    name:"Pro Camera X1000",;
    description:"Professional-grade cinema camera with 8K resolution, advanced color science, and exceptional low-light window.window.window.performance. Designed for feature films, high-end commercials, and documentary production. Includes comprehensive shooting modes, customizable settings, and industry-leading dynamic range.",;
    brand:"CineTech",;
    category:"Equipment",;
    subcategory:"Cameras",;
    images:[;
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800",;
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800",;
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=1200&h=800";
    ],;
    price:6999,;
    currency:"$",;
    rating:4.9,;
    reviewCount:87,;
    inStock:true,;
    expectedShipping:"3-5 business days",;
    specifications:[;
      { name:"Sensor", value:"Full-frame CMOS (36 x 24 mm)" },;
      { name:"Resolution", value:"8K (8192 x 4320)" },;
      { name:"Dynamic Range", value:"16+ stops" },;
      { name:"ISO Range", value:"100-51,200 (expandable to 50-204,800)" },;
      { name:"Recording Format", value:"RAW, ProRes, H.265" },;
      { name:"Frame Rates", value:"Up to 120fps at 4K, 60fps at 8K" },;
      { name:"Storage", value:"Dual CFexpress Type B" },;
      { name:"Battery Life", value:"~3 hours continuous recording" },;
      { name:"Weight", value:"4.5 lbs (body only)" },;
      { name:"Connectivity", value:"HDMI 2.1, USB-C, Wi-Fi, Bluetooth" }
    ],;
    features:[;
      "Advanced 8K full-frame sensor",;
      "16+ stops of dynamic range",;
      "Internal RAW recording",;
      "Dual native ISO technology",;
      "5-axis in-body image stabilization",;
      "AI-powered autofocus with subject tracking",;
      "Weather-sealed magnesium alloy body",;
      "Multiple assist tools:false color, waveform, vectorscope",;
      "Anamorphic de-squeeze options",;
      "Custom 3D LUT support";
    ],;
    warranty:"2 years manufacturer warranty",;
    returnPolicy:"30-day return policy for unused items in original packaging";
  },;
  "audio-mixer-pro":{;
    id:"audio-mixer-pro",;
    name:"AudioMixer Pro Digital Mixing Console",;
    description:"Professional digital mixing console designed for studio recording, live sound mixing, and post-production applications. Features 32 channels, premium preamps, extensive routing options, and intuitive control interface.",;
    brand:"AudioTech",;
    category:"Equipment",;
    subcategory:"Audio",;
    images:[;
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800",;
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&h=800";
    ],;
    price:3499,;
    currency:"$",;
    rating:4.8,;
    reviewCount:42,;
    inStock:true,;
    expectedShipping:"5-7 business days",;
    specifications:[;
      { name:"Channels", value:"32 input channels" },;
      { name:"Faders", value:"16 motorized faders" },;
      { name:"Preamps", value:"24 premium mic preamps" },;
      { name:"Sampling Rate", value:"Up to 96kHz" },;
      { name:"EQ", value:"4-band parametric per channel" },;
      { name:"Dynamics", value:"Compressor/Gate on all channels" },;
      { name:"Effects", value:"8 stereo effects processors" },;
      { name:"Recording", value:"64-channel USB interface" },;
      { name:"Weight", value:"32 lbs" }
    ],;
    features:[;
      "32-channel digital mixer with 24 premium mic preamps",;
      "16 motorized faders with touch-sensitive control",;
      "7-inch high-resolution color touchscreen",;
      "Comprehensive routing matrix",;
      "Onboard multi-track recording to USB",;
      "iOS and Android remote control app",;
      "Configurable user layers",;
      "8 DCA groups and 6 mute groups",;
      "Integrated WiFi for wireless control";
    ],;
    warranty:"3 years manufacturer warranty",;
    returnPolicy:"21-day return policy for items in original condition";
  }
},;
;
export default function EquipmentDetail() {;
  const { equipmentId } = useParams() as { equipmentId?:string },;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),;
  const [quantity, setQuantity] = useState(1),;
  const [isAdding, setIsAdding] = useState(false),;
  ;
  // In a real app, this would fetch from an API;
  const equipment = equipmentId ? SAMPLE_EQUIPMENT[equipmentId] :undefined,;
  ;
  if (!equipment) {;
    return (;
      <>;
        <Header />;
        <div className="min-h-screen bg-zion-blue py-12 px-4">;
          <div className="container mx-auto">;
            <div className="text-center py-20">;
              <h1 className="text-3xl font-bold text-white mb-4">Equipment Not Found</h1>;
              <p className="text-zion-slate-light mb-8">The equipment you're looking for doesn't exist or has been removed.</p>;
            </div>;
          </div>;
        </div>;
        <Footer />;
      </>;
    ),;
  }
;
  const handleAddToCart = () => {;
    setIsAdding(true),;
    ;
    // Simulate API call;
    setTimeout(() => {;
      setIsAdding(false),;
      toast({;
        title:"Added to cart",;
        description:`${quantity}x ${equipment.name} added to your cart.`}),;
    }, 800),;
  },;
;
  const handleBuyNow = () => {;
    setIsAdding(true),;
    ;
    // Simulate API call;
    setTimeout(() => {;
      setIsAdding(false),;
      toast({;
        title:"Proceeding to checkout",;
        description:`Preparing your order for ${equipment.name}.`}),;
    }, 800),;
  },;
;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            {/* Left Column - Images */}
            <div className="lg:col-span-2">;
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">;
                {/* Main Image */}
                <div className="aspect-video w-full relative">;
<<<<<<< HEAD

                        {equipment.description}
                      </p>;
                    </div>;
                  </TabsContent>;

                      </ul>;
                    </div>;
                  </TabsContent>;
                </Tabs>;
              </div>;
            </div>;

                        />;
                      ))}
                    </div>;
                    <span className="text-sm text-zion-slate-light">;

                {/* Quantity */}
                <div className="mb-6">;
                  <label className="text-sm text-zion-slate-light block mb-2">Quantity</label>;
                  <div className="flex items-center border border-zion-blue-light rounded-md w-32">;

                    >;
                      +;
                    </button>;
                  </div>;
                </div>;

                    <ShoppingCart className="h-4 w-4 mr-2" />;
                    Add to Cart;
                  </Button>;
                </div>;

                {/* Additional Info */}
                <div className="space-y-4 border-t border-zion-blue-light pt-4">;
                  {/* Shipping */}
                  <div className="flex gap-3 text-zion-slate-light">;
                    <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />;
                    <div>;
                      <p className="text-white text-sm font-medium">Free Shipping</p>;
                      <p className="text-xs">For orders over $100 within the US</p>;
                    </div>;
                  </div>;

                    <div className="flex gap-3 text-zion-slate-light">;
                      <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />;
                      <div>;
                        <p className="text-white text-sm font-medium">Warranty</p>;

                    <div className="flex gap-3 text-zion-slate-light">;
                      <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />;
                      <div>;
                        <p className="text-white text-sm font-medium">Returns</p>;

                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;

}