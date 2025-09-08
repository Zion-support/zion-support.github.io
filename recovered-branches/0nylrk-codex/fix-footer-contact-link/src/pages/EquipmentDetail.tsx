<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
id: string,
  name: string,
  description: string,
  brand: string,
  category: string,"
import { useState } from "react","
import { useParams } from "react-router-dom","
import { Header } from "@/components/Header","
import { Footer } from "@/components/Footer","
import { Badge } from "@/components/ui/badge","
import { Button } from "@/components/ui/button","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
import { AspectRatio } from "@/components/ui/aspect-ratio",
interface EquipmentSpecification {}
}


interface EquipmentSpecification {;
  name: string,;
  value: string;
}
<<<<<<< HEAD



=======
;
interface EquipmentDetails {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string,;
  name: string,;
  description: string,;
  brand: string,;
  category: string,;

<<<<<<< HEAD

=======

import { use_params } from './react-router-dom';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { AspectRatio } from '@/components / ui / aspect - ratio';
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock } from './lucide-react';

import { toast } from '@/hooks / use - toast';
interface EquipmentSpecification {}
  name: string,
  value: string;
}
interface EquipmentDetails {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string,
  name: string,
  description: string,
  brand: string,
  category: string,
<<<<<<< HEAD


  subcategory?: string;
  images: string[],;
  price: number,;
  currency: string,;
  rating?: number;

=======
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
  "pro-camera-x1000": {
    id: "pro-camera-x1000",
    name: "Pro Camera X1000",
    description: "Professional-grade cinema camera with 8K resolution, advanced color science, and exceptional low-light window.window.window.performance. Designed for feature films, high-end commercials, and documentary production. Includes comprehensive shooting modes, customizable settings, and industry-leading dynamic range.",
    brand: "CineTech",
    category: "Equipment",
    subcategory: "Cameras",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto = $2;
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto = $2;
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto = $2;
    price: 6999,
    currency: "$",
    rating: 4.9,
    reviewCount: 87,
    inStock: true,
    expectedShipping: "3-5 business days",
    specifications: [
      { name: "Sensor", value: "Full-frame CMOS (36 x 24 mm)" }
      { name: "Resolution", value: "8K (8192 x 4320)" }
      { name: "Dynamic Range", value: "16+ stops" }
      { name: "ISO Range", value: "100-51,200 (expandable to 50-204,800)" }
      { name: "Recording Format", value: "RAW, ProRes, H.265" }
      { name: "Frame Rates", value: "Up to 120fps at 4K, 60fps at 8K" }
      { name: "Storage", value: "Dual CFexpress Type B" }
      { name: "Battery Life", value: "~3 hours continuous recording" }
      { name: "Weight", value: "4.5 lbs (body only)" }
      { name: "Connectivity", value: "HDMI 2.1, USB-C, Wi-Fi, Bluetooth" }
    ],
    features: [
      "Advanced 8K full-frame sensor";
      "16+ stops of dynamic range";
      "Internal RAW recording";
      "Dual native ISO technology";
      "5-axis in-body image stabilization";
      "AI-powered autofocus with subject tracking";
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

// Sample data - in a real app this would come from an API;
const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } = {"
  "pro-camera-x1000": {"
    id: "pro-camera-x1000","
    name: "Pro Camera X1000","
    description: "Professional-grade cinema camera with 8K resolution, advanced color science, and exceptional low-light window.window.window.performance. Designed for feature films, high-end commercials, and documentary production. Includes comprehensive shooting modes, customizable settings, and industry-leading dynamic range.","
    brand: "CineTech","
    category: "Equipment","
    subcategory: "Cameras",
<<<<<<< HEAD


    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800";
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800";

=======
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800";
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800";
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800";
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800";
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800",

      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=1200&h=800"
>>>>>>> origin/cursor/delete-old-data-records-6bba
    ]
    price: 6999"
    currency: "$"
    rating: 4.9;
    reviewCount: 87;
    inStock: true"
    expectedShipping: "3-5 business days"

<<<<<<< HEAD
    specifications: [
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      "16+ stops of dynamic range";
      "Internal RAW recording";
      "Dual native ISO technology";
      "5-axis in-body image stabilization";
      "AI-powered autofocus with subject tracking";
      "Weather-sealed magnesium alloy body",;
      "Multiple assist tools: false color, waveform, vectorscope";
      "Anamorphic de-squeeze options";
      "Custom 3D LUT support";
    ];
<<<<<<< HEAD



=======
      { name: "Sensor", value: "Full-frame CMOS (36 x 24 mm)" }
      { name: "Resolution", value: "8K (8192 x 4320)" }
      { name: "Dynamic Range", value: "16+ stops" }
      { name: "ISO Range", value: "100-51,200 (expandable to 50-204,800)" }
      { name: "Recording Format", value: "RAW, ProRes, H.265" }
      { name: "Frame Rates", value: "Up to 120fps at 4K, 60fps at 8K" }
      { name: "Storage", value: "Dual CFexpress Type B" }
      { name: "Battery Life", value: "~3 hours continuous recording" }
      { name: "Weight", value: "4.5 lbs (body only)" }
>>>>>>> origin/cursor/delete-old-data-records-6bba
      { name: "Sensor", value: "Full-frame CMOS (36 x 24 mm)" },
      { name: "Resolution", value: "8K (8192 x 4320)" },
      { name: "Dynamic Range", value: "16+ stops" },
      { name: "ISO Range", value: "100-51,200 (expandable to 50-204,800)" },
      { name: "Recording Format", value: "RAW, ProRes, H.265" },
      { name: "Frame Rates", value: "Up to 120fps at 4K, 60fps at 8K" },
      { name: "Storage", value: "Dual CFexpress Type B" },
      { name: "Battery Life", value: "~3 hours continuous recording" },
      { name: "Weight", value: "4.5 lbs (body only)" },
<<<<<<< HEAD


      { name: "Connectivity", value: "HDMI 2.1, USB-C, Wi-Fi, Bluetooth" }
    ],
    features: [


=======
      { name: "Connectivity", value: "HDMI 2.1, USB-C, Wi-Fi, Bluetooth" }
    ],
    features: [
      "Advanced 8K full-frame sensor";
      "16+ stops of dynamic range";
      "Internal RAW recording";
      "Dual native ISO technology";
      "5-axis in-body image stabilization";
      "AI-powered autofocus with subject tracking";
      "Weather-sealed magnesium alloy body"
      "Multiple assist tools: false color, waveform, vectorscope";
      "Anamorphic de-squeeze options";
      "Custom 3D LUT support"
    ];
    warranty: "2 years manufacturer warranty"
    returnPolicy: "30-day return policy for unused items in original packaging"
  }
  "audio-mixer-pro": {
    id: "audio-mixer-pro"
    name: "AudioMixer Pro Digital Mixing Console"
    description: "Professional digital mixing console designed for studio recording, live sound mixing, and post-production applications. Features 32 channels, premium preamps, extensive routing options, and intuitive control interface.";
    brand: "AudioTech"
    category: "Equipment"
    subcategory: "Audio"
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  "audio-mixer-pro": {
    id: "audio-mixer-pro",
    name: "AudioMixer Pro Digital Mixing Console",
    description: "Professional digital mixing console designed for studio recording, live sound mixing, and post-production applications. Features 32 channels, premium preamps, extensive routing options, and intuitive control interface.",
    brand: "AudioTech",
    category: "Equipment",
    subcategory: "Audio",
<<<<<<< HEAD


    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800";
=======
    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800",
    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800",
>>>>>>> origin/cursor/delete-old-data-records-6bba

      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&h=800"
    ]
    price: 3499"
    currency: "$"
    rating: 4.8;
    reviewCount: 42;
    inStock: true"
    expectedShipping: "5-7 business days"
    specifications: ["
      { name: "Channels", value: "32 input channels" }"
      { name: "Faders", value: "16 motorized faders" }"
      { name: "Preamps", value: "24 premium mic preamps" }"
      { name: "Sampling Rate", value: "Up to 96kHz" }"
      { name: "EQ", value: "4-band parametric per channel" }"
      { name: "Dynamics", value: "Compressor/Gate on all channels" }"
      { name: "Effects", value: "8 stereo effects processors" }"
      { name: "Recording", value: "64-channel USB interface" }
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      { name: "Weight", value: "32 lbs" }
    ],
    features: ["
      "32-channel digital mixer with 24 premium mic preamps","
      "16 motorized faders with touch-sensitive control","
      "7-inch high-resolution color touchscreen","
      "Comprehensive routing matrix","
      "Onboard multi-track recording to USB","
      "iOS and Android remote control app","
      "Configurable user layers","
      "8 DCA groups and 6 mute groups","
      "Integrated WiFi for wireless control"
    ]"
    warranty: "3 years manufacturer warranty""
    returnPolicy: "21-day return policy for items in original condition"
  }

},


<<<<<<< HEAD


  if (!equipment) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-zion-blue py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-white mb-4">Equipment Not Found</h1>



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <p className="text-zion-slate-light mb-8">The equipment you're looking for doesn't exist or has been removed.</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }


<<<<<<< HEAD
=======
    setIsAdding(true),

>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Simulate API call
    setTimeout(() => {

      setIsAdding(false),
      toast({"
        title: "Added to cart"
        description: `${quantity}x ${equipment.name} added to your cart.`})
    }, 800)

<<<<<<< HEAD


=======
  }
  const handleBuyNow = () => {
    setIsAdding(true);
  }
  const handleBuyNow = () => {
    setIsAdding(true);
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },

  const handleBuyNow = () => {}
    setIsAdding(true),

<<<<<<< HEAD
    
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    // Simulate API call
    setTimeout(() => {

      setIsAdding(false),
      toast({"
        title: "Proceeding to checkout"`
        description: `Preparing your order for ${equipment.name}.`})
    }, 800)

<<<<<<< HEAD

  },


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <>
      <Header />"
      <div className="min-h-screen bg-zion-blue py-12 px-4">"
        <div className="container mx-auto">"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}"
            <div className="lg:col-span-2">"
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">
                {/* Main Image */}"
                <div className="aspect-video w-full relative">
                  <img;
                    src={equipment.images[selectedImageIndex]}
                    alt={equipment.name}"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    className="w-full h-full object-contain bg-zion-blue-light/10 p-4"
                  />
                </div>
                {/* Thumbnail Gallery */}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {equipment.images.length > 1 && ("
                  <div className="flex p-4 gap-2 overflow-x-auto">
                    {equipment.images.map((image, index) => (
                      <div;
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}`
                        className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${"
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"`
                        }`}
                      >
                        <img;
                          src={image}`
                          alt={`${equipment.name} - image ${index + 1}`}"
                          className="w-full h-full object-cover"
                        />
                      </div>

<<<<<<< HEAD
=======
;
// Sample data - in a real app this would come from an API;
  "pro - camera - x1000": {"
    }
    "id": "pro - camera - x1000","
    "name": "Pro Camera X1000","
    "description": "Professional - grade cinema camera with 8K resolution, advanced color science, and exceptional low - light performance. Designed for feature films, high - end commercials, and documentary production. Includes comprehensive shooting modes, customizable settings, and industry - leading dynamic range.";"
    "brand": "CineTech","
    "category": "Equipment","
    "subcategory": "Cameras","
    "images": [;
      ""https"://images.unsplash.com / photo - 1516035069371 - 29a1b244cc32?auto = format & fit = crop & w=1200 & h=800";"
      ""https"://images.unsplash.com / photo - 1502920917128 - 1aa500764cbd?auto = format & fit = crop & w=1200 & h=800";"
      ""https"://images.unsplash.com / photo - 1581591524425 - c7e0978865fc?auto = format & fit = crop & w=1200 & h=800";"
    ],
    "price": 6999,
    "currency": "$","
    "rating": 4.9,
    "review_count": 87,
    "in_stock": true,
    "expected_shipping": "3 - 5 business days","
    "specifications": [;
      { "name": "Sensor", "value": "Full - frame CMOS (36 x 24 mm)" },"
      { "name": "Resolution", "value": "8K (8192 x 4320)" },"
      { "name": "Dynamic Range", "value": "16+ stops" },"
      { "name": "ISO Range", "value": "100 - 51, 200 (expandable to 50 - 204, 800)" }"
      { "name": "Recording Format", "value": "RAW, ProRes, H.265" }"
      { "name": "Frame Rates", "value": "Up to 120fps at 4K, 60fps at 8K" }"
      { "name": "Storage", "value": "Dual CFexpress Type B" },"
      { "name": "Battery Life", "value": "~3 hours continuous recording" },"
      { "name": "Weight", "value": "4.5 lbs (body only)" },"
      { "name": "Connectivity", "value": "HDMI 2.1, USB - C, Wi - Fi, Bluetooth" }"
    ];
    "features": [;
      "Advanced 8K full - frame sensor";"
      "16+ stops of dynamic range";"
      "Internal RAW recording";"
      "Dual native ISO technology";"
      "5 - axis in - body image stabilization";"
      "AI - powered autofocus with subject tracking";"
      "Weather - sealed magnesium alloy body","
      "Multiple assist "tools": false color, waveform, vectorscope";"
      "Anamorphic de - squeeze options";"
      "Custom 3D LUT support";"
    ];
    "warranty": "2 years manufacturer warranty","
    "return_policy": "30 - day return policy for unused items in original packaging";"
  }
  "audio - mixer - pro": {"
    }
    "id": "audio - mixer - pro","
    "name": "AudioMixer Pro Digital Mixing Console","
    "description": "Professional digital mixing console designed for studio recording, live sound mixing, and post - production applications. Features 32 channels, premium preamps, extensive routing options, and intuitive control interface.";"
    "brand": "AudioTech","
    "category": "Equipment","
    "subcategory": "Audio","
    "images": [;
      ""https"://images.unsplash.com / photo - 1598488035139 - bdbb2231ce04?auto = format & fit = crop & w=1200 & h=800";"
      ""https"://images.unsplash.com / photo - 1583121274602 - 3e2820c69888?auto = format & fit = crop & w=1200 & h=800";"
    ],
    "price": 3499,
    "currency": "$","
    "rating": 4.8,
    "review_count": 42,
    "in_stock": true,
    "expected_shipping": "5 - 7 business days","
    "specifications": [;
      { "name": "Channels", "value": "32 input channels" },"
      { "name": "Faders", "value": "16 motorized faders" },"
      { "name": "Preamps", "value": "24 premium mic preamps" },"
      { "name": "Sampling Rate", "value": "Up to 96kHz" },"
      { "name": "EQ", "value": "4 - band parametric per channel" },"
      { "name": "Dynamics", "value": "Compressor / Gate on all channels" },"
      { "name": "Effects", "value": "8 stereo effects processors" },"
      { "name": "Recording", "value": "64 - channel USB interface" },"
      { "name": "Weight", "value": "32 lbs" }"
    ];
    "features": [;
      "32 - channel digital mixer with 24 premium mic preamps";"
      "16 motorized faders with touch - sensitive control";"
      "7 - inch high - resolution color touchscreen";"
      "Comprehensive routing matrix";"
      "Onboard multi - track recording to USB";"
      "iOS and Android remote control app";"
      "Configurable user layers";"
      "8 DCA groups and 6 mute groups";"
    ],;
    price: 6999,;"
    currency: "$",;
    rating: 4.9,;
    reviewCount: 87,;
    inStock: true,;"
    expectedShipping: "3-5 business days",;
    specifications: [;"
      { name: "Sensor", value: "Full-frame CMOS (36 x 24 mm)" },;"
      { name: "Resolution", value: "8K (8192 x 4320)" },;"
      { name: "Dynamic Range", value: "16+ stops" },;"
      { name: "ISO Range", value: "100-51,200 (expandable to 50-204,800)" },;"
      { name: "Recording Format", value: "RAW, ProRes, H.265" },;"
      { name: "Frame Rates", value: "Up to 120fps at 4K, 60fps at 8K" },;"
      { name: "Storage", value: "Dual CFexpress Type B" },;"
      { name: "Battery Life", value: "~3 hours continuous recording" },;"
      { name: "Weight", value: "4.5 lbs (body only)" },;"
      { name: "Connectivity", value: "HDMI 2.1, USB-C, Wi-Fi, Bluetooth" }
    ],;
    features: [;"
      "Advanced 8K full-frame sensor",;"
      "16+ stops of dynamic range",;"
      "Internal RAW recording",;"
      "Dual native ISO technology",;"
      "5-axis in-body image stabilization",;"
      "AI-powered autofocus with subject tracking",;"
      "Weather-sealed magnesium alloy body",;"
      "Multiple assist tools: false color, waveform, vectorscope",;"
      "Anamorphic de-squeeze options",;"
      "Custom 3D LUT support";
    ],;

    warranty: "2 years manufacturer warranty",;
    returnPolicy: "30-day return policy for unused items in original packaging"
};
  "audio-mixer-pro": {;
    id: "audio-mixer-pro",;

    description: "Professional digital mixing console designed for studio recording, live sound mixing, and post-production applications. Features 32 channels, premium preamps, extensive routing options, and intuitive control interface.";

"
    brand: "AudioTech",;"
    category: "Equipment",;"
    subcategory: "Audio",;
    images: [;


>>>>>>> origin/cursor/delete-old-data-records-6bba
    reviewCount: 42,;
    inStock: true,;"
    expectedShipping: "5-7 business days",;
    specifications: [;"
      { name: "Channels", value: "32 input channels" },;"
      { name: "Faders", value: "16 motorized faders" },;"
      { name: "Preamps", value: "24 premium mic preamps" },;"
      { name: "Sampling Rate", value: "Up to 96kHz" },;"
      { name: "EQ", value: "4-band parametric per channel" },;"
      { name: "Dynamics", value: "Compressor/Gate on all channels" },;"
      { name: "Effects", value: "8 stereo effects processors" },;"
      { name: "Recording", value: "64-channel USB interface" },;


      { name: "Weight", value: "32 lbs" }

    ];

      "7-inch high-resolution color touchscreen";

      "Comprehensive routing matrix";
      "Onboard multi - track recording to USB";
      "iOS and Android remote control app";
      "Configurable user layers";
      "8 DCA groups and 6 mute groups";

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      "Integrated WiFi for wireless control";
    ],;
    warranty: "3 years manufacturer warranty",;

    returnPolicy: "21-day return policy for items in original condition";
  }
};
<<<<<<< HEAD

export default function EquipmentDetail() {;

=======


export default function EquipmentDetail() { return null; }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { equipmentId } = useParams() as { equipmentId?: string };
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  // In a real app, this would fetch from an API;
  const equipment = equipmentId ? SAMPLE_EQUIPMENT[equipmentId] : undefined;

<<<<<<< HEAD
  if (!equipment) {;
    return (
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      <>;
        <Header />;
        <div className="min-h-screen bg-zion-blue py-12 px-4">;
          <div className="container mx-auto">;
            <div className="text-center py-20">;
              <h1 className="text-3xl font-bold text-white mb-4">Equipment Not Found</h1>;
              <p className="text-zion-slate-light mb-8">The equipment you're looking for doesn't exist or has been removed.</p>;


      "Integrated WiFi for wireless control";
    ],"
    warranty: "3 years manufacturer warranty","
    return_policy: "21 - day return policy for items in original condition";
  }
}
;
export default /**;
 * EquipmentDetail - Function description;
 */
function EquipmentDetail() {}
  const { equipment_id } = use_params () as { equipment_id?: string }
  const [selectedImageIndex, setSelectedImageIndex] = useState (0);
  const [quantity, set_quantity] = useState (1);
  const [is_adding, setIsAdding] = useState (false);
;
  // In a real app, this would fetch from an API;
  const equipment = equipment_id ? SAMPLE_EQUIPMENT[equipment_id] : undefined;
;
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <>;

        <div className="min - h-screen bg - zion - blue py - 12 px - 4">;
          <div className="container mx - auto">;
            <div className="text - center py - 20">;
              <h1 className="text - 3xl font - bold text - white mb - 4">Equipment Not Found</h1>;

              <p className="text - zion - slate - light mb - 8">The equipment you're looking for doesn't exist or has been removed.</p>;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>;
          </div>;
        </div>;
        <Footer />;
<<<<<<< HEAD


  const handleAddToCart = () => {;
    setIsAdding(true);


=======
  const handleAddToCart = () => {;
    setIsAdding(true);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Simulate API call;
    setTimeout(() => {;
      setIsAdding(false);
      toast({;"
        title: "Added to cart",`
        description: `${quantity}x ${equipment && equipment.name} added to your cart.`});
    }, 800);
  };
<<<<<<< HEAD


  const handleBuyNow = () => {;
    setIsAdding(true);


=======
  const handleBuyNow = () => {;
    setIsAdding(true);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Simulate API call;
    setTimeout(() => {;
      setIsAdding(false);
      toast({;"
        title: "Proceeding to checkout",`
        description: `Preparing your order for ${equipment && equipment.name}.`});
    }, 800);
  };
<<<<<<< HEAD

=======
  return (

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
    ],;
    features: [;
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
    warranty: "3 years manufacturer warranty",;
    returnPolicy: "21-day return policy for items in original condition";
  }
},;
export default function EquipmentDetail() {;
  const { equipmentId } = useParams() as { equipmentId?: string },;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),;
  const [quantity, setQuantity] = useState(1),;
  const [isAdding, setIsAdding] = useState(false),;
  // In a real app, this would fetch from an API;
  const equipment = equipmentId ? SAMPLE_EQUIPMENT[equipmentId] : undefined,;
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
    );
  }
;
  const handleAddToCart = () => {;
    setIsAdding(true),;
    // Simulate API call;
    setTimeout(() => {;
      setIsAdding(false),;
      toast({;
        title: "Added to cart",;
        description: `${quantity}x ${equipment.name} added to your cart.`});
    }, 800);
  },;
  const handleBuyNow = () => {;
    setIsAdding(true),;
    // Simulate API call;
    setTimeout(() => {;
      setIsAdding(false),;
      toast({;
        title: "Proceeding to checkout";
        description: `Preparing your order for ${equipment.name}.`});
    }, 800);
  };
  return (;

            </div>;
          </div>;
        </div>;
        <Footer />;

  const handleAddToCart = () => {;
    setIsAdding(true);

    // Simulate API call;
    setTimeout(() => {;
      setIsAdding(false);
      toast({;"
        title: "Added to cart",`
        description: `${quantity}x ${equipment && equipment.name} added to your cart.`});
    }, 800);
  };

  const handleBuyNow = () => {;
    setIsAdding(true);

    // Simulate API call;
    setTimeout(() => {;
      setIsAdding(false);
      toast({;"
        title: "Proceeding to checkout",`
        description: `Preparing your order for ${equipment && equipment.name}.`});
    }, 800);
  };
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (

          <div className="container mx-auto">;
            <div className="text - center py-20">;
              <h1 className="text - 3xl font - bold text - white mb-4">Equipment Not Found</h1>;
              <p className="text - zion - slate - light mb-8">The equipment you're looking for doesn't exist or has been removed.</p>;

            </div>;
          </div>;
        </div>;
        <Footer />;

  const handleAddToCart = () => {;
    setIsAdding(true);

        <div className="min - h-screen bg - zion - blue py - 12 px-4">;
          <div className="container mx-auto">;
            <div className="text - center py-20">;
              <h1 className="text - 3xl font - bold text - white mb-4">Equipment Not Found</h1>;
              <p className="text - zion - slate - light mb-8">The equipment you're looking for doesn't exist or has been removed.</p>;
    // Simulate API call;
    setTimeout(() => {
      setIsAdding(false),
      toast({"
        title: "Proceeding to checkout"",)
  description: `Preparing your order for ${equipment.name}.`})
    }, 800)

  const handleBuyNow = () => {;
    setIsAdding(true);

    // Simulate API call;
    setTimeout(() => {;
      setIsAdding(false);
      toast({;
        title: "Proceeding to checkout",
        description: `Preparing your order for ${equipment && equipment.name}.`});
    }, 800);
  };

  return (
return (
  },

  return (
    <>
      <Header />
</Header>"
      <div className="min-h-screen bg-zion-blue py-12 px-4">"
</div>"
        <div className="container mx-auto">"
</div>"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">"
</div>"
            <div className="lg:col-span-2">"
</div>"
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">"
</div>"
                <div className="aspect-video w-full relative">"
</div>
                  <img;
                    src={equipment.images[selectedImageIndex]}
                    alt={equipment.name}"
                    className="w-full h-full object-contain bg-zion-blue-light/10 p-4""
                  />
</img>
                </div>"
                  <div className="flex p-4 gap-2 overflow-x-auto">"
</div>
                      <div;
                        key={index})
                        onClick={() => setSelectedImageIndex(index)}
</div>
                        <img;
                          src={image}
                          alt={`${equipment.name} - image ${index + 1}`}"
                          className="w-full h-full object-cover""

                        />
</img>
                      </div>

      <>;
        <Header />;
</Header>"
        <div className="min-h-screen bg-zion-blue py-12 px-4">;"
</div>"
          <div className="container mx-auto">;"
</div>"
            <div className="text-center py-20">;"
</div>"
              <h1 className="text-3xl font-bold text-white mb-4">Equipment Not Found</h1>;""
              <p className="text-zion-slate-light mb-8">The equipment you're looking for doesn't exist or has been removed.</p>;'
      <>;
        <Header />;
</Header>'
        <div className="min - h-screen bg - zion - blue py - 12 px - 4">;"
</div>"
          <div className="container mx - auto">;"
</div>"
            <div className="text - center py - 20">;"
</div>"
              <h1 className="text - 3xl font - bold text - white mb - 4">Equipment Not Found</h1>;""
              <p className="text - zion - slate - light mb - 8">The equipment you're looking for doesn't exist or has been removed.</p>;'

            </div>;
          </div>;
        </div>;
        <Footer />;
      </>;
    );
  }
;
  const handleAddToCart = () => {;
    setIsAdding(true),;
    // Simulate API call;
    setTimeout(() => {;
      setIsAdding(false),;
      toast({;
        title: "Added to cart",
        description: `${quantity}x ${equipment.name} added to your cart.`});
    }, 800);
  },;
  const handleBuyNow = () => {;
    setIsAdding(true),;
    // Simulate API call;
    setTimeout(() => {;
      setIsAdding(false),;
      toast({;
        title: "Proceeding to checkout";
        description: `Preparing your order for ${equipment.name}.`});
    }, 800);
  };
  return (;

  return (
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <>;

  return (    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;

<<<<<<< HEAD
            {/* Left Column - Images */}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                          className="w-full h-full object-cover"
                        />;
                      </div>;


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    ))}
                  </div>;
                )}
              </div>;
              {/* Product Details Tabs */}
              <div className="mt-8">;
                <Tabs defaultValue="description" className="w-full">;
                  <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-3 h-auto">;
                    <TabsTrigger value="description" className="py-3 data-[state=active]:bg-zion-purple/10">;
                      Description;
                    </TabsTrigger>;
                    <TabsTrigger value="specifications" className="py-3 data-[state=active]:bg-zion-purple/10">;
                      Specifications;
                    </TabsTrigger>;

                    <TabsTrigger value="features" className="py-3 data-[state=active]:bg-zion-purple/10">;
                      Features;
                    </TabsTrigger>;
                  </TabsList>;

<<<<<<< HEAD
                  <TabsContent value="description" className="mt-4">;
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                      <p className="text-zion-slate-light whitespace-pre-line">;
                        {equipment && equipment.description}
                      </p>;
                    </div>;
                  </TabsContent>;

<<<<<<< HEAD
                  <TabsContent value="specifications" className="mt-4">;
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
                        {equipment && equipment.specifications.map((spec, index) => (;
                          <div key={index} className="border-b border-zion-blue-light pb-2 mb-2 last:border-0 last:mb-0 last:pb-0">;
                            <div className="flex justify-between">;
                              <span className="text-zion-slate-light">{spec && spec.name}</span>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                              <span className="text-white font-medium">{spec && spec.value}</span>;
                            </div>;
                          </div>;
                        ))}
                      </div>;
                    </div>;
                  </TabsContent>;
<<<<<<< HEAD

                  <TabsContent value="features" className="mt-4">;
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
                      <ul className="space-y-2">;
                        {equipment && equipment.features.map((feature, index) => (;
                          <li key={index} className="flex items-start gap-2">;
                            <div className="text-zion-cyan mt-1 flex-shrink-0">•</div>;
                            <span className="text-zion-slate-light">{feature}</span>;
                          </li>;
                        ))}
      </>);
  }
  const handleAddToCart = () =>: any {
    setIsAdding (true);
;
    // Simulate API call;
    set_timeout (() => {
      setIsAdding (false);
      toast ({
        title: "Added to cart",
        description: `${quantity}x ${equipment.name} added to your cart.`});
    }, 800);
  }
;
  const handleBuyNow = () =>: any {
    setIsAdding (true);
;
    // Simulate API call;
    set_timeout (() => {
      setIsAdding (false);
      toast ({
        title: "Proceeding to checkout",
        description: `Preparing your order for ${equipment.name}.`});
    }, 800);
  }
;
  return (
    <>;
      <Header />;
      <div className="min - h-screen bg - zion - blue py - 12 px - 4">;
        <div className="container mx - auto">;
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;
            {/* Left Column - Images */}
            <div className="lg:col - span - 2">;
              <div className="bg - zion - blue - dark rounded - lg overflow - hidden border border - zion - blue - light">;
                {/* Main Image */}
                <div className="aspect - video w - full relative">;
                  <img;
                    src={equipment.images[selectedImageIndex]}
                    alt={equipment.name}
                    className="w - full h - full object - contain bg - zion - blue - light / 10 p - 4";
                  />;
                </div>;
                {/* Thumbnail Gallery */}
                {equipment.images.length > 1 && (
                  <div className="flex p - 4 gap - 2 overflow - x-auto">;
                    {equipment.images.map ((image, index) => (
                      <div;
                        key={index}
                        on_click={() => setSelectedImageIndex (index)}
                        className={`w - 20 h - 20 flex - shrink - 0 cursor - pointer rounded overflow - hidden border - 2 ${
                          index === selectedImageIndex ? "border - zion - purple" : "border - transparent";
                        }`}
                      >;
                        <img;
                          src={image}
                          alt={`${equipment.name} - image ${index + 1}`}
                          className="w - full h - full object - cover";
                        />;
                      </div>))}
                  </div>)}
              </div>;
              {/* Product Details Tabs */}
              <div className="mt - 8">;
                <Tabs default_value="description" className="w - full">;
                  <TabsList className="bg - zion - blue - dark border border - zion - blue - light grid grid - cols - 3 h - auto">;
                    <TabsTrigger value="description" className="py - 3 data-[state = active]:bg - zion - purple / 10">;
                      Description;
                    </TabsTrigger>;
                    <TabsTrigger value="specifications" className="py - 3 data-[state = active]:bg - zion - purple / 10">;
                      Specifications;
                    </TabsTrigger>;
                    <TabsTrigger value="features" className="py - 3 data-[state = active]:bg - zion - purple / 10">;
                      Features;
                    </TabsTrigger>;
                  </TabsList>;
                  <TabsContent value="description" className="mt - 4">;
                    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6">;
                      <p className="text - zion - slate - light whitespace - pre - line">;
                  <img ;
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">
                {/* Main Image */}
                <div className="aspect-video w-full relative">;
                  <img;
                    src={equipment.images[selectedImageIndex]} ;
                    alt={equipment.name} ;
                    className="w-full h-full object-contain bg-zion-blue-light/10 p-4";
                  />;
                </div>;
                {/* Thumbnail Gallery */}
                {equipment.images.length > 1 && (;
                  <div className="flex p-4 gap-2 overflow-x-auto">;
                    {equipment.images.map((image, index) => (;
                      <div;
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${;
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent";
                        }`}
                      >;
                        <img;
                          src={image} ;
                          alt={`${equipment.name} - image ${index + 1}`} ;
                          className="w-full h-full object-cover";
                        />;

                  ;
                  <TabsContent value="specifications" className="mt-4">;
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
                        {equipment.specifications.map((spec, index) => (;
                          <div key={index} className="border-b border-zion-blue-light pb-2 mb-2 last:border-0 last:mb-0 last:pb-0">;
                            <div className="flex justify-between">;
                              <span className="text-zion-slate-light">{spec.name}</span>;
                              <span className="text-white font-medium">{spec.value}</span>;

                            </div>;
                          </div>;
                        ))}
                      </div>;
                    </div>;
                  </TabsContent>;


=======


                        {equipment.description}
                      </p>;
                    </div>;
                  </TabsContent>;
                  <TabsContent value="specifications" className="mt - 4">;
                    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6">;
                      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
                        {equipment.specifications.map ((spec, index) => (
                          <div key={index} className="border - b border - zion - blue - light pb - 2 mb - 2 last:border - 0 last:mb - 0 last:pb - 0">;
                            <div className="flex justify - between">;
                              <span className="text - zion - slate - light">{spec.name}</span>;
                              <span className="text - white font - medium">{spec.value}</span>;

                            </div>;
                          </div>;
                        ))}
                      </div>;
                    </div>;
                  </TabsContent>;
                  ;
                  <TabsContent value="features" className="mt-4">;
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
                      <ul className="space-y-2">;
                        {equipment.features.map((feature, index) => (;
                          <li key={index} className="flex items-start gap-2">;
                            <div className="text-zion-cyan mt-1 flex-shrink-0">•</div>;
                            <span className="text-zion-slate-light">{feature}</span>;
                          </li>;                        ))}
                      </div>;
                    ))}
                  </div>
                )}
              </div>
              {/* Product Details Tabs */}
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
                        {equipment.description}
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="specifications" className="mt-4">
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {equipment.specifications.map((spec, index) => (
                          <div key={index} className="border-b border-zion-blue-light pb-2 mb-2 last:border-0 last:mb-0 last:pb-0">
                            <div className="flex justify-between">
                              <span className="text-zion-slate-light">{spec.name}</span>
                              <span className="text-white font-medium">{spec.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="features" className="mt-4">
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                      <ul className="space-y-2">
                        {equipment.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="text-zion-cyan mt-1 flex-shrink-0">•</div>
                            <span className="text-zion-slate-light">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

>>>>>>> origin/cursor/delete-old-data-records-6bba
                      </ul>;
                    </div>;
                  </TabsContent>;
                </Tabs>;
              </div>;
            </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            {/* Right Column - Purchase Info */}
            <div className="lg:col-span-1">;

                <p className="text-zion-cyan mb-4">Brand: {equipment && equipment.brand}</p>;


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {/* Rating */}
                {equipment && equipment.rating && (;
                  <div className="flex items-center gap-2 mb-4">;
                    <div className="flex items-center">;
                      {[...Array(5)].map((_, i) => (;
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
<<<<<<< HEAD

=======

                            i < Math && Math.floor(equipment && equipment.rating!) 
                              ? "text-zion-cyan fill-zion-cyan" 


                            i < Math.floor(equipment.rating!) 
                              ? "text-zion-cyan fill-zion-cyan" 
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
                              : "text-zion-slate-light"
                          }`}
            ;
            {/* Right Column - Purchase Info */}
            <div className="lg:col-span-1">;
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">;
                {/* Category and Brand */}
                <div className="flex flex-wrap gap-2 mb-3">;
                  <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">;
                    {equipment.category}
                  </Badge>;
                  {equipment.subcategory && (;
                    <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">;
                      {equipment.subcategory}
                    </Badge>;                  )}
                </div>;
                ;
                {/* Product Title */}
                <h1 className="text-2xl font-bold text-white mb-1">{equipment.name}</h1>;
                <p className="text-zion-cyan mb-4">Brand:{equipment.brand}</p>;
                ;
                {/* Rating */}
                {equipment.rating && (;
                  <div className="flex items-center gap-2 mb-4">;

                    <div className="flex items-center">;
                      {[...Array(5)].map((_, i) => (;
                        <Star;
                          key={i}`
                          className={`h-5 w-5 ${}
                            i < Math.floor(equipment.rating!) "
                              ? "text-zion-cyan fill-zion-cyan" 

"
                              : "text-zion-slate-light"`
                          }`}


>>>>>>> origin/cursor/delete-old-data-records-6bba
                        />;
                      ))}
                    </div>;"
                    <span className="text-sm text-zion-slate-light">;

<<<<<<< HEAD

=======

                      {equipment && equipment.rating.toFixed(1)} ({equipment && equipment.reviewCount} reviews);
                    </span>;
                  </div>;
                )}


>>>>>>> origin/cursor/delete-old-data-records-6bba
                {/* Price */}

                <div className="text-3xl font-bold text-white mb-4">;
                  {equipment && equipment.currency}{equipment && equipment.price.toLocaleString()}
                </div>;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {/* Stock Status */}

                <div className="mb-6">;
                  {equipment && equipment.inStock ? (;"
                    <div className="text-emerald-400 flex items-center gap-1">;"
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>;
                      <span>In Stock</span>;
                      {equipment && equipment.expectedShipping && (;"
                        <span className="text-zion-slate-light ml-1 text-sm">;
                          (Ships in {equipment && equipment.expectedShipping});
                        </span>;
                      )}
                    </div>;
                  ) : (;"
                    <div className="text-rose-400 flex items-center gap-1">;"
                      <span className="w-2 h-2 bg-rose-400 rounded-full"></span>;
                      <span>Out of Stock</span>;
                    </div>;
                  )}
<<<<<<< HEAD
=======
                </div>
                {/* Quantity */}
                <div className="mb-6">
                  <label className="text-sm text-zion-slate-light block mb-2">Quantity</label>
                  <div className="flex items-center border border-zion-blue-light rounded-md w-32">
                    <button
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
                {/* Rating */}
                {equipment.rating && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(equipment.rating!)
                              ? "text-zion-cyan fill-zion-cyan"
                            i < Math.floor(equipment.rating!) 
                              ? "text-zion-cyan fill-zion-cyan" 
                              : "text-zion-slate-light"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-zion-slate-light">
                      {equipment.rating.toFixed(1)} ({equipment.reviewCount} reviews)
                    </span>
                  </div>
                )}
                {/* Price */}
                <div className="text-3xl font-bold text-white mb-4">
                  {equipment.currency}{equipment.price.toLocaleString()}
                </div>
                {/* Stock Status */}
                <div className="mb-6">
                  {equipment.inStock ? (
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
                {/* Quantity */}
                <div className="mb-6">
                  <label className="text-sm text-zion-slate-light block mb-2">Quantity</label>
                  <div className="flex items-center border border-zion-blue-light rounded-md w-32">

                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50"
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      disabled={quantity <= 1 |!equipment.inStock}
                    >
                      -
                    </button>
                    <input"
                      type="number""
                      className="w-full text-center bg-transparent border-0 text-white focus:ring-0"
                      value={quantity}
                      readOnly;
                    />

>>>>>>> origin/cursor/delete-old-data-records-6bba
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50"
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      disabled={quantity <= 1 |!equipment.inStock}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="w-full text-center bg-transparent border-0 text-white focus:ring-0"
                      value={quantity}
                      readOnly
                    />


<<<<<<< HEAD


=======
                    <button 

<button 

                    <button
                    <button

                    <button 

>>>>>>> origin/cursor/delete-old-data-records-6bba
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50"
                      onClick={() => setQuantity(prev => prev + 1)}
                      disabled={!equipment.inStock}
                    >
                      +
                    </button>
                  </div>
                </div>
<<<<<<< HEAD

                {/* Purchase Buttons */}
                <div className="space-y-3 mb-6">

                    onClick={handleBuyNow}
                    disabled={isAdding |!equipment.inStock}"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                  >"
                    {isAdding ? "Processing..." : "Buy Now"}
                  </Button>



                    onClick={handleAddToCart}
                    disabled={isAdding |!equipment.inStock}"
                    variant="outline""
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  >"
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart;
                  </Button>
                </div>


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <ShoppingCart className="h-4 w-4 mr-2" />;
                    Add to Cart;
                  </Button>;
                </div>;
<<<<<<< HEAD
=======


                <div className="space-y-4 border-t border-zion-blue-light pt-4">;
                  {/* Shipping */}

;
                <div className="space-y-4 border-t border-zion-blue-light pt-4">;
                  {/* Shipping */}
>>>>>>> origin/cursor/delete-old-data-records-6bba

                ;
                {/* Additional Info */}
                <div className="space-y-4 border-t border-zion-blue-light pt-4">;
                  {/* Shipping */}

                  <div className="flex gap-3 text-zion-slate-light">;

                    <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />;
                    <div>;"
                      <p className="text-white text-sm font-medium">Free Shipping</p>;"
                      <p className="text-xs">For orders over $100 within the US</p>;
                    </div>;
                  </div>;

<<<<<<< HEAD
                  ;
                  {/* Warranty */}
                  {equipment.warranty && (;
                    <div className="flex gap-3 text-zion-slate-light">;
                      <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />;
                      <div>;
                        <p className="text-white text-sm font-medium">Warranty</p>;
                  {/* Return Policy */}
                  {equipment && equipment.returnPolicy && (;
                        <p className="text-xs">{equipment.warranty}</p>;
                      </div>;
                    </div>;                  )}
                  ;
                  {/* Return Policy */}
                  {equipment.returnPolicy && (;
                    <div className="flex gap-3 text-zion-slate-light">;
                      <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />;
                      <div>;
                        <p className="text-white text-sm font-medium">Returns</p>;
            {/* Right Column - Purchase Info */}
            <div className="lg:col - span - 1">;
              <div className="bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light sticky top - 6">;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                {/* Category and Brand */}
                <div className="flex flex - wrap gap - 2 mb-3">;
                  <Badge variant="outline" className="text - zion - slate - light border - zion - blue-light">;
                    {equipment.category}
                  </Badge>;
                  {equipment.subcategory && (
                    <Badge variant="outline" className="text - zion - slate - light border - zion - blue-light">;
                      {equipment.subcategory}
                    </Badge>)}
                </div>;
                {/* Product Title */}
                <h1 className="text - 2xl font - bold text - white mb-1">{equipment.name}</h1>;
                <p className="text - zion - cyan mb-4">Brand: {equipment.brand}</p>;
                {/* Rating */}
                {equipment.rating && (

                      {[...Array (5)].map ((_, i) => (
                        <Star;
                          key={i}`
                          className={`h - 5 w - 5 ${}
                            i < Math.floor (equipment.rating!);"
                              ? "text - zion - cyan fill - zion - cyan";"
                              : "text - zion - slate - light";`
                          }`}
                        />))}

                      on_click={() => set_quantity (prev => Math.max (1, prev - 1))}
</Footer>
    <>;
      <Header />;
</Header>'
      <div className="min-h-screen bg-zion-blue py-12 px-4">;"
</div>"
        <div className="container mx-auto">;"
</div>"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;"
</div>"
            <div className="lg:col-span-2">;"
</div>"
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">;"
</div>"
                <div className="aspect-video w-full relative">;"
</div>
                  <img;
                    src={equipment && equipment.images[selectedImageIndex]} 
                    alt={equipment && equipment.name} "
                    className="w-full h-full object-contain bg-zion-blue-light/10 p-4""
                  />;
</img>
                </div>;"
                  <div className="flex p-4 gap-2 overflow-x-auto">;"
</div>
                      <div;
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
</div>
                        <img;
                          src={image} 
                          alt={`${equipment && equipment.name} - image ${index + 1}`} 
"
                          className="w-full h-full object-cover""
                        />;
</img>
                      </div>;
                  </div>;
              </div>;"
              <div className="mt-8">;"
</div>"
                <Tabs defaultValue="description" className="w-full">;"
</Tabs>"
                  <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-3 h-auto">;"
</TabsList>"
                    <TabsTrigger value="description" className="py-3 data-[state=active]:bg-zion-purple/10">;"
</TabsTrigger>
                    </TabsTrigger>;"
                    <TabsTrigger value="specifications" className="py-3 data-[state=active]:bg-zion-purple/10">;"
</TabsTrigger>
                    </TabsTrigger>;"
                    <TabsTrigger value="features" className="py-3 data-[state=active]:bg-zion-purple/10">;"
</TabsTrigger>
                    </TabsTrigger>;
                  </TabsList>;"
                  <TabsContent value="description" className="mt-4">;"
</TabsContent>"
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;"
</div>"
                      <p className="text-zion-slate-light whitespace-pre-line">;"
</p>
                      </p>;
                    </div>;
                  </TabsContent>;"
                  <TabsContent value="specifications" className="mt-4">;"
</TabsContent>"
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;"
</div>"
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
</div>"
                          <div key={index} className="border-b border-zion-blue-light pb-2 mb-2 last:border-0 last:mb-0 last:pb-0">;"
</div>"
                            <div className="flex justify-between">;"
</div>"
                              <span className="text-zion-slate-light">{spec && spec.name}</span>;""
                              <span className="text-white font-medium">{spec && spec.value}</span>;"
                            </div>;
                          </div>;
                      </div>;
                    </div>;
                  </TabsContent>;"
                  <TabsContent value="features" className="mt-4">;"
</TabsContent>"
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;"
</div>"
                      <ul className="space-y-2">;"
</ul>"
                          <li key={index} className="flex items-start gap-2">;"
</li>"
                            <div className="text-zion-cyan mt-1 flex-shrink-0">•</div>;""
                            <span className="text-zion-slate-light">{feature}</span>;"
                          </li>;
                      </p>;
                    </div>;
                  </TabsContent>;"
                  <TabsContent value="specifications" className="mt - 4">;"
</TabsContent>"
                    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6">;"
</div>"
                      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
</div>"
                          <div key={index} className="border - b border - zion - blue - light pb - 2 mb - 2 last:border - 0 last:mb - 0 last:pb - 0">;"
</div>"
                            <div className="flex justify - between">;"
</div>"
                              <span className="text - zion - slate - light">{spec.name}</span>;""
                              <span className="text - white font - medium">{spec.value}</span>;"
                            </div>;
                          </div>))}
                      </div>;
                    </div>;
                  </TabsContent>;"
                  <TabsContent value="features" className="mt - 4">;"
</TabsContent>"
                    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6">;"
</div>"
                      <ul className="space - y-2">;"
</ul>"
                          <li key={index} className="flex items - start gap - 2">;"
</li>"
                            <div className="text - zion - cyan mt - 1 flex - shrink - 0">•</div>;""
                            <span className="text - zion - slate - light">{feature}</span>;"
                          </li>))}
                  <img ;"
            <div className="lg:col-span-2">"
</img>"
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">"
</div>"
                <div className="aspect-video w-full relative">;"
</div>
                  <img;
                    src={equipment.images[selectedImageIndex]} ;
                    alt={equipment.name} ;"
                    className="w-full h-full object-contain bg-zion-blue-light/10 p-4";"
                  />;
</img>
                </div>;"
                  <div className="flex p-4 gap-2 overflow-x-auto">;"
</div>
                      <div;
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
</div>
                        <img;
                          src={image} ;
                          alt={`${equipment.name} - image ${index + 1}`} ;"
                          className="w-full h-full object-cover";"
                        />;
</img>"
                  <TabsContent value="specifications" className="mt-4">;"
</TabsContent>"
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;"
</div>"
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
</div>"
                          <div key={index} className="border-b border-zion-blue-light pb-2 mb-2 last:border-0 last:mb-0 last:pb-0">;"
</div>"
                            <div className="flex justify-between">;"
</div>"
                              <span className="text-zion-slate-light">{spec.name}</span>;""
                              <span className="text-white font-medium">{spec.value}</span>;"
                            </div>;
                          </div>;
                      </div>;
                    </div>;
                  </TabsContent>;"
                  <TabsContent value="features" className="mt-4">;"
</TabsContent>"
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;"
</div>"
                      <ul className="space-y-2">;"
</ul>"
                          <li key={index} className="flex items-start gap-2">;"
</li>"
                            <div className="text-zion-cyan mt-1 flex-shrink-0">•</div>;""
                            <span className="text-zion-slate-light">{feature}</span>;"
                          </li>;                        ))}
                      </div>;
                  </div>
              </div>"
              <div className="mt-8">"
</div>"
                <Tabs defaultValue="description" className="w-full">"
</Tabs>"
                  <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-3 h-auto">"
</TabsList>"
                    <TabsTrigger value="description" className="py-3 data-[state=active]:bg-zion-purple/10">"
</TabsTrigger>
                    </TabsTrigger>"
                    <TabsTrigger value="specifications" className="py-3 data-[state=active]:bg-zion-purple/10">"
</TabsTrigger>
                    </TabsTrigger>"
                    <TabsTrigger value="features" className="py-3 data-[state=active]:bg-zion-purple/10">"
</TabsTrigger>
                    </TabsTrigger>
                  </TabsList>"
                  <TabsContent value="description" className="mt-4">"
</TabsContent>"
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">"
</div>"
                      <p className="text-zion-slate-light whitespace-pre-line">"
</p>
                      </p>
                    </div>
                  </TabsContent>"
                  <TabsContent value="specifications" className="mt-4">"
</TabsContent>"
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">"
</div>"
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
</div>"
                          <div key={index} className="border-b border-zion-blue-light pb-2 mb-2 last:border-0 last:mb-0 last:pb-0">"
</div>"
                            <div className="flex justify-between">"
</div>"
                              <span className="text-zion-slate-light">{spec.name}</span>""
                              <span className="text-white font-medium">{spec.value}</span>"
                            </div>
                          </div>
                      </div>
                    </div>
                  </TabsContent>"
                  <TabsContent value="features" className="mt-4">"
</TabsContent>"
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">"
</div>"
                      <ul className="space-y-2">"
</ul>"
                          <li key={index} className="flex items-start gap-2">"
</li>"
                            <div className="text-zion-cyan mt-1 flex-shrink-0">•</div>""
                            <span className="text-zion-slate-light">{feature}</span>"
                          </li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
                      </ul>;
                    </div>;
                  </TabsContent>;
                </Tabs>;
              </div>;
            </div>;"
            <div className="lg:col-span-1">;"
</div>"
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">;"
</div>"
                <div className="flex flex-wrap gap-2 mb-3">;"
</div>"
                  <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">;"
</Badge>
                  </Badge>;"
                    <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">;"
</Badge>
                    </Badge>;
                </div>;"
                <h1 className="text-2xl font-bold text-white mb-1">{equipment && equipment.name}</h1>;""
                <p className="text-zion-cyan mb-4">Brand: {equipment && equipment.brand}</p>;""
                <h1 className="text-2xl font-bold text-white mb-1">{equipment && equipment.name}</h1>;""
                <p className="text-zion-cyan mb-4">Brand: {equipment && equipment.brand}</p>;""
                  <div className="flex items-center gap-2 mb-4">;"
</div>"
                    <div className="flex items-center">;"
</div>
                        <Star;
                          key={i}
                          className={`h-5 w-5 ${

                            i < Math && Math.floor(equipment && equipment.rating!) "
                              ? "text-zion-cyan fill-zion-cyan""
                            i < Math.floor(equipment.rating!) "
                              ? "text-zion-cyan fill-zion-cyan"""
                              : "text-zion-slate-light""
                          }`}
                            i < Math && Math.floor(equipment && equipment.rating!) "
                              ? "text-zion-cyan fill-zion-cyan"""
                              : "text-zion-slate-light""
                          }`}
            ;
            {/* Right Column - Purchase Info */}"
            <div className="lg:col-span-1">;"
</Star>"
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">;"
</div>"
                <div className="flex flex-wrap gap-2 mb-3">;"
</div>"
                  <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">;"
</Badge>
                  </Badge>;"
                    <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">;"
</Badge>
                    </Badge>;                  )}
                </div>;"
                <h1 className="text-2xl font-bold text-white mb-1">{equipment.name}</h1>;""
                <p className="text-zion-cyan mb-4">Brand:{equipment.brand}</p>;""
                  <div className="flex items-center gap-2 mb-4">;"
</div>"
                    <div className="flex items-center">;"
</div>
                        <Star;
                          key={i}
                          className={`h-5 w-5 ${;
                            i < Math.floor(equipment.rating!) ;"
                              ? "text-zion-cyan fill-zion-cyan" ;""
                              :"text-zion-slate-light";                          }`}""
                              : "text-zion-slate-light""
                          }`}
                        />;
</Star>
                    </div>;"
                    <span className="text-sm text-zion-slate-light">;"
</span>
                    </span>;
                  </div>;"
                <div className="text-3xl font-bold text-white mb-4">;"
</div>
                </div>;"
                <div className="mb-6">;"
</div>"
                    <div className="text-emerald-400 flex items-center gap-1">;"
</div>"
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>;"
                      <span>In Stock</span>;"
                        <span className="text-zion-slate-light ml-1 text-sm">;"
</span>
                        </span>;
                    </div>;"
                    <div className="text-rose-400 flex items-center gap-1">;"
</div>"
                      <span className="w-2 h-2 bg-rose-400 rounded-full"></span>;"
                      <span>Out of Stock</span>;
                    </div>;
                    <button;"
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50""
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
</button>
                      disabled={quantity <= 1 |!equipment.inStock}
                    >
                      -
                    </button>
                    <input;"
                      type="number"""
                      className="w-full text-center bg-transparent border-0 text-white focus:ring-0""
                      value={quantity}
                      readOnly;
                    />
</input>

                    <button;"
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50""
                      onClick={() => setQuantity(prev => prev + 1)}
</button>
                    </button>
                  </div>
                </div>"
                <div className="space-y-3 mb-6">"
</div>
                  <Button;
                    onClick={handleBuyNow}
                    disabled={isAdding |!equipment.inStock}"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6""
                  >
</Button>
                  </Button>

                  <Button;
                    onClick={handleAddToCart}
                    disabled={isAdding |!equipment.inStock}"
                    variant="outline"""
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10""
                  >
</Button>"
                    <ShoppingCart className="h-4 w-4 mr-2" />"
</ShoppingCart>
                  </Button>
                </div>
                </div>;
                    </span>;
                  </div>;                )}"
                <div className="text-3xl font-bold text-white mb-4">;                  {equipment.currency}{equipment.price.toLocaleString()}"
</div>
                </div>;"
                <div className="mb-6">;"
</div>"
                    <div className="text-emerald-400 flex items-center gap-1">;"
</div>"
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>;"
                      <span>In Stock</span>;"
                        <span className="text-zion-slate-light ml-1 text-sm">;"
</span>
                        </span>;
                    </div>;"
                    <div className="text-rose-400 flex items-center gap-1">;"
</div>"
                      <span className="w-2 h-2 bg-rose-400 rounded-full"></span>;"
                      <span>Out of Stock</span>;
                    </div>;                  )}
                </div>;"
                <div className="mb-6">;"
</div>"
                  <label className="text-sm text-zion-slate-light block mb-2">Quantity</label>;""
                  <div className="flex items-center border border-zion-blue-light rounded-md w-32">;"
</div>
                    <button;"
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50""
                      onClick={() => setQuantity(prev => Math && Math.max(1, prev - 1))}
</button>
                      disabled={quantity <= 1 || !equipment && equipment.inStock}
                    >;
                      -;
                    </button>;
                    <input;"
                      type="number"""
                      className="w-full text-center bg-transparent border-0 text-white focus:ring-0""
                      value={quantity}
                      readOnly;
                    />;
</input>
                    <button;"
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50""
                      onClick={() => setQuantity(prev => prev + 1)}
</button>
                    <button ;"
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50";"
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
</button>
                      disabled={quantity <= 1 || !equipment.inStock}
                    >;
                      -;
                    </button>;
                    <input ;"
                      type="number" ;""
                      className="w-full text-center bg-transparent border-0 text-white focus:ring-0";"
                      value={quantity}
                      readOnly;
                    />;
</input>
                    <button ;"
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50";"
                      onClick={() => setQuantity(prev => prev + 1)}
</button>
                    </button>;
                  </div>;
                </div>;"
                <div className="space-y-3 mb-6">;"
</div>
                  <Button;
                    onClick={handleBuyNow}
                    disabled={isAdding || !equipment && equipment.inStock}"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6">;"
</Button>
                  </Button>;
                  <Button;
                    onClick={handleAddToCart}
                    disabled={isAdding || !equipment && equipment.inStock}"
                    variant="outline"""
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;"
</Button>"
                <div className="space-y-3 mb-6">;"
</div>
                  <Button ;
                    onClick={handleBuyNow}
                    disabled={isAdding || !equipment.inStock}"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";"
                  >;
</Button>

                  </Button>;
                  <Button ;
                    onClick={handleAddToCart}

                    disabled={isAdding || !equipment.inStock}"
                    variant="outline";""
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10";"
                  >;
</Button>"
                    <ShoppingCart className="h-4 w-4 mr-2" />;"
</ShoppingCart>
                  </Button>;
                </div>;"
                <div className="space-y-4 border-t border-zion-blue-light pt-4">;"
</div>"
                <div className="space-y-4 border-t border-zion-blue-light pt-4">;"
</div>"
                  <div className="flex gap-3 text-zion-slate-light">;"
</div>"
                    <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />;"
</Truck>
                    <div>;
</div>"
                      <p className="text-white text-sm font-medium">Free Shipping</p>;""
                      <p className="text-xs">For orders over $100 within the US</p>;"
                    </div>;
                  </div>;"
                <div className="space-y-4 border-t border-zion-blue-light pt-4">;"
</div>"
                    <div className="flex gap-3 text-zion-slate-light">;"
</div>"
                      <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />;"
</Shield>
                      <div>;
</div>"
                        <p className="text-white text-sm font-medium">Warranty</p>;""
                        <p className="text-xs">{equipment && equipment.warranty}</p>;"
                      </div>;
                    </div>;"
                        <p className="text-xs">{equipment.warranty}</p>;"
                      </div>;
                    </div>;                  )}"
                    <div className="flex gap-3 text-zion-slate-light">;"
</div>"
                      <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />;"
</RotateCcw>
                      <div>;
</div>"
                        <p className="text-white text-sm font-medium">Returns</p>;""
                        <p className="text-xs">{equipment && equipment.returnPolicy}</p>;"
                      </div>;
                    </div>;"
            <div className="lg:col - span - 1">;"
</div>"
              <div className="bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light sticky top - 6">;"
</div>"
                <div className="flex flex - wrap gap - 2 mb - 3">;"
</div>"
                  <Badge variant="outline" className="text - zion - slate - light border - zion - blue - light">;"
</Badge>
                  </Badge>;"
                    <Badge variant="outline" className="text - zion - slate - light border - zion - blue - light">;"
</Badge>
                    </Badge>)}
                </div>;"
                <h1 className="text - 2xl font - bold text - white mb - 1">{equipment.name}</h1>;""
                <p className="text - zion - cyan mb - 4">Brand: {equipment.brand}</p>;""
                  <div className="flex items - center gap - 2 mb - 4">;"
</div>"
                    <div className="flex items - center">;"
</div>
                        <Star;
                          key={i}
                          className={`h - 5 w - 5 ${
                            i < Math.floor (equipment.rating!);"
                              ? "text - zion - cyan fill - zion - cyan";""
                              : "text - zion - slate - light";"
                          }`}
                        />))}
</Star>
                    </div>;"
                    <span className="text - sm text - zion - slate - light">;"
</span>
                    </span>;
                  </div>)}"
                <div className="text - 3xl font - bold text - white mb - 4">;"
</div>
                </div>;"
                <div className="mb - 6">;"
</div>"
                    <div className="text - emerald - 400 flex items - center gap - 1">;"
</div>"
                      <span className="w - 2 h - 2 bg - emerald - 400 rounded - full"></span>;"
                      <span > In Stock</span>;"
                        <span className="text - zion - slate - light ml - 1 text - sm">;"
</span>
                        </span>)}
                    </div>) : ("
                    <div className="text - rose - 400 flex items - center gap - 1">;"
</div>"
                      <span className="w - 2 h - 2 bg - rose - 400 rounded - full"></span>;"
                      <span > Out of Stock</span>;)
                    </div>)}
                </div>;"
                <div className="mb - 6">;"
</div>"
                  <label className="text - sm text - zion - slate - light block mb - 2">Quantity</label>;""
                  <div className="flex items - center border border - zion - blue - light rounded - md w - 32">;"
</div>
                    <button;"
                      className="px - 3 py - 1 text - zion - slate - light hover:text - white disabled:opacity - 50";"
                      on_click={() => set_quantity (prev => Math.max (1, prev - 1))}
</button>

                      disabled={quantity <= 1 || !equipment.in_stock}
                    >;
                      -;
                    </button>;

                      on_click={() => set_quantity (prev => prev + 1)}
                      disabled={!equipment.in_stock}
                    >;
                      +;
                    </button>;
                  </div>;
                </div>;

                    {is_adding ? "Processing..." : "Buy Now"}
                  </Button>;
                  <Button;
                    on_click={handleAddToCart}

                      </div>;
                    </div>)}
                  {/* Return Policy */}

<<<<<<< HEAD
                {/* Additional Info */}
                <div className="space-y-4 border-t border-zion-blue-light pt-4">
                  {/* Shipping */}

                  <div className="flex gap-3 text-zion-slate-light">
                    <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Free Shipping</p>


=======
                {/* Additional Info */}"
                <div className="space-y-4 border-t border-zion-blue-light pt-4">
                  {/* Shipping */}"
                  <div className="flex gap-3 text-zion-slate-light">"
                    <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                    <div>"
                      <p className="text-white text-sm font-medium">Free Shipping</p>"
>>>>>>> origin/cursor/delete-old-data-records-6bba

                      <p className="text-xs">For orders over $100 within the US</p>
                    </div>
                  </div>
                  {/* Warranty */}

<<<<<<< HEAD
=======
                  {equipment.warranty && ("
                    <div className="flex gap-3 text-zion-slate-light">"
                      <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                      <div>"
                        <p className="text-white text-sm font-medium">Warranty</p>"
>>>>>>> origin/cursor/delete-old-data-records-6bba

                        <p className="text-xs">{equipment.warranty}</p>
                      </div>
                    </div>
                  )}
                  {/* Return Policy */}

<<<<<<< HEAD
=======
                  {equipment.returnPolicy && ("
                    <div className="flex gap-3 text-zion-slate-light">"
                      <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                      <div>"
                        <p className="text-white text-sm font-medium">Returns</p>"
>>>>>>> origin/cursor/delete-old-data-records-6bba

                        <p className="text-xs">{equipment.returnPolicy}</p>
                      </div>
                    </div>
                  )}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
                      </div>;
                    </div>)}


                        <p className="text-xs">{equipment.returnPolicy}</p>;
                      </div>;
                    </div>;
                  )}


>>>>>>> origin/cursor/delete-old-data-records-6bba
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


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    </>;
  ),; interface EquipmentSpecification {}
  name: string;
value: string;
}interface EquipmentDetails {}

// Sample data - in a real app this would come from an API;
const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } = {
    id: "pro-camera-x1000",""
    name: "Pro Camera X1000",""
    description: "Professional-grade cinema camera with 8K resolution, advanced color science, and exceptional low-light window.window.window.performance. Designed for feature films, high-end commercials, and documentary production. Includes comprehensive shooting modes, customizable settings, and industry-leading dynamic range.",""
    brand: "CineTech",""
    category: "Equipment",""
    subcategory: "Cameras","
    images: ["
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800";""
      "https: //images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800";",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800",""
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800",""
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=1200&h=800""]
    ]
    price: 6999;,"
  currency: "$""
    rating: 4.9;,
  reviewCount: 87;
    inStock: true;,"
  expectedShipping: "3-5 business days""
    specifications: [

// Sample data - in a real app this would come from an API;]
const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } = {;"
  "pro-camera-x1000": {;""
    id: "pro-camera-x1000",;""
    name: "Pro Camera X1000",;""
    brand: "CineTech",;""
    category: "Equipment",;""
    subcategory: "Cameras",;"
    images: [;"
      "https://images && images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800";""
      "https://images && images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800";""
      "https://images && images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=1200&h=800";"]
    ],;
    price: 6999,;"
    currency: "$",;"
    rating: 4 && 4.9,;
    reviewCount: 87,;
    inStock: true,;"
    expectedShipping: "3-5 business days",;"
    specifications: [;"
      { name: "Sensor", value: "Full-frame CMOS (36 x 24 mm)" },;""
      { name: "Resolution", value: "8K (8192 x 4320)" },;""
      { name: "Dynamic Range", value: "16+ stops" },;""
      { name: "ISO Range", value: "100-51,200 (expandable to 50-204,800)" };""
      { name: "Recording Format", value: "RAW, ProRes, H && H.265" };""
      { name: "Frame Rates", value: "Up to 120fps at 4K, 60fps at 8K" };""
      { name: "Storage", value: "Dual CFexpress Type B" },;""
      { name: "Battery Life", value: "~3 hours continuous recording" },;""
      { name: "Weight", value: "4 && 4.5 lbs (body only)" },;""
      { name: "Connectivity", value: "HDMI 2 && 2.1, USB-C, Wi-Fi, Bluetooth" }"]
    ];
    features: [;"
      "Advanced 8K full-frame sensor";""
      "16+ stops of dynamic range";""
      "Internal RAW recording";""
      "Dual native ISO technology";""
      "5-axis in-body image stabilization";""
      "AI-powered autofocus with subject tracking";""
      "Weather-sealed magnesium alloy body",;""
      "Multiple assist tools: false color, waveform, vectorscope";""
      "Anamorphic de-squeeze options";""
      "Custom 3D LUT support";"]

"
      { name: "Sensor", value: "Full-frame CMOS (36 x 24 mm)" },""
      { name: "Resolution", value: "8K (8192 x 4320)" },""
      { name: "Dynamic Range", value: "16+ stops" },""
      { name: "ISO Range", value: "100-51,200 (expandable to 50-204,800)" },""
      { name: "Recording Format", value: "RAW, ProRes, H.265" },""
      { name: "Frame Rates", value: "Up to 120fps at 4K, 60fps at 8K" },""
      { name: "Storage", value: "Dual CFexpress Type B" },""
      { name: "Battery Life", value: "~3 hours continuous recording" },""
      { name: "Weight", value: "4.5 lbs (body only)" },""
      { name: "Connectivity", value: "HDMI 2.1, USB-C, Wi-Fi, Bluetooth" }"
    ],
    features: [
      "Advanced 8K full-frame sensor",""
      "16+ stops of dynamic range",""
      "Internal RAW recording",""
      "Dual native ISO technology",""
      "5-axis in-body image stabilization",""
      "AI-powered autofocus with subject tracking",""
      "Weather-sealed magnesium alloy body",""
      "Multiple assist tools: false color, waveform, vectorscope",""
      "Anamorphic de-squeeze options",""
      "Custom 3D LUT support""]
    ],"
    warranty: "2 years manufacturer warranty",""
    returnPolicy: "30-day return policy for unused items in original packaging""
  },"
  "audio-mixer-pro": {""
    id: "audio-mixer-pro",""
    name: "AudioMixer Pro Digital Mixing Console",""
    description: "Professional digital mixing console designed for studio recording, live sound mixing, and post-production applications. Features 32 channels, premium preamps, extensive routing options, and intuitive control interface.",""
    brand: "AudioTech",""
    subcategory: "Audio","
      "https: //images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800";",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800",""
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&h=800""]
    price: 3499;,"
    rating: 4.8;,
  reviewCount: 42;
  expectedShipping: "5-7 business days""
    specifications: ["
      { name: "Channels", value: "32 input channels" }""
      { name: "Faders", value: "16 motorized faders" }""
      { name: "Preamps", value: "24 premium mic preamps" }""
      { name: "Sampling Rate", value: "Up to 96kHz" }""
      { name: "EQ", value: "4-band parametric per channel" }""
      { name: "Dynamics", value: "Compressor/Gate on all channels" }""
      { name: "Effects", value: "8 stereo effects processors" }""
      { name: "Recording", value: "64-channel USB interface" }""
      { name: "Weight", value: "32 lbs" }"]
    features: ["
      "32-channel digital mixer with 24 premium mic preamps",""
      "16 motorized faders with touch-sensitive control",""
      "7-inch high-resolution color touchscreen",""
      "Comprehensive routing matrix",""
      "Onboard multi-track recording to USB",""
      "iOS and Android remote control app",""
      "Configurable user layers",""
      "8 DCA groups and 6 mute groups",""
      "Integrated WiFi for wireless control""]
    ]"
    warranty: "3 years manufacturer warranty"","
  returnPolicy: "21-day return policy for items in original condition""

},

  if (!equipment) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-zion-blue py-12 px-4">"
</div>"
          <div className="container mx-auto">"
            <div className="text-center py-20">"
              <h1 className="text-3xl font-bold text-white mb-4">Equipment Not Found</h1>""
              <p className="text-zion-slate-light mb-8">The equipment you're looking for doesn't exist or has been removed.</p>
            </div>
        <Footer />

      </>)
    )
  const handleAddToCart = () => {

    setIsAdding(true),

    // Simulate API call;
    setTimeout(() => {
      setIsAdding(false),
      toast({
        title: "Added to cart"",)
  description: `${quantity}x ${equipment.name} added to your cart.`})
    }, 800)

  const handleBuyNow = () => {

    // Simulate API call;
      toast({"
        title: "Proceeding to checkout"",)`;
  description: `Preparing your order for ${equipment.name}.`})

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">"
            <div className="lg:col-span-2">"
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">"
                <div className="aspect-video w-full relative">"
                  <img;
                    src={equipment.images[selectedImageIndex]}
                    alt={equipment.name}"
                    className="w-full h-full object-contain bg-zion-blue-light/10 p-4""
                  />
</img>
                  <div className="flex p-4 gap-2 overflow-x-auto">"
                      <div;
                        key={index})
                        onClick={() => setSelectedImageIndex(index)}
                          src={image}`;
                          alt={`${equipment.name} - image ${index + 1}`}"
                          className="w-full h-full object-cover""
      <>;
        <Header />;
        <div className="min-h-screen bg-zion-blue py-12 px-4">;"
          <div className="container mx-auto">;"
            <div className="text-center py-20">;"
              <h1 className="text-3xl font-bold text-white mb-4">Equipment Not Found</h1>;""
              <p className="text-zion-slate-light mb-8">The equipment you're looking for doesn't exist or has been removed.</p>;

        <div className="min - h-screen bg - zion - blue py - 12 px - 4">;"
          <div className="container mx - auto">;"
            <div className="text - center py - 20">;"
              <h1 className="text - 3xl font - bold text - white mb - 4">Equipment Not Found</h1>;""
              <p className="text - zion - slate - light mb - 8">The equipment you're looking for doesn't exist or has been removed.</p>;
            </div>;
        <Footer />;

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;"
            <div className="lg:col-span-2">;"
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">;"
                <div className="aspect-video w-full relative">;"
                    src={equipment && equipment.images[selectedImageIndex]} 
                    alt={equipment && equipment.name} "
                  />;
                </div>;"
                  <div className="flex p-4 gap-2 overflow-x-auto">;"
                        key={index}
                          src={image} `;
                          alt={`${equipment && equipment.name} - image ${index + 1}`} 
              <div className="mt-8">;"
                <Tabs defaultValue="description" className="w-full">;"
                  <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-3 h-auto">;"
                    <TabsTrigger value="description" className="py-3 data-[state=active]:bg-zion-purple/10">;"

                    ;"
                    <TabsTrigger value="specifications" className="py-3 data-[state=active]:bg-zion-purple/10">;"

                    <TabsTrigger value="features" className="py-3 data-[state=active]:bg-zion-purple/10">;"

                    ;
                  <TabsContent value="description" className="mt-4">;"
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;"
                      <p className="text-zion-slate-light whitespace-pre-line">;"
</p>
                      </p>;
                  <TabsContent value="specifications" className="mt-4">;"
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
                          <div key={index} className="border-b border-zion-blue-light pb-2 mb-2 last:border-0 last:mb-0 last:pb-0">;"
                            <div className="flex justify-between">;"
                              <span className="text-zion-slate-light">{spec && spec.name}</span>;""
                              <span className="text-white font-medium">{spec && spec.value}</span>;"
                  <TabsContent value="features" className="mt-4">;"
                      <ul className="space-y-2">;"
</ul>"
                          <li key={index} className="flex items-start gap-2">;"
</li>"
                            <div className="text-zion-cyan mt-1 flex-shrink-0">•</div>;""
                            <span className="text-zion-slate-light">{feature}</span>;"
                          </li>;
                  <TabsContent value="specifications" className="mt - 4">;"
                    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6">;"
                      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
                          <div key={index} className="border - b border - zion - blue - light pb - 2 mb - 2 last:border - 0 last:mb - 0 last:pb - 0">;"
                            <div className="flex justify - between">;"
                              <span className="text - zion - slate - light">{spec.name}</span>;""
                              <span className="text - white font - medium">{spec.value}</span>;"
                          </div>))}
                  <TabsContent value="features" className="mt - 4">;"
                      <ul className="space - y-2">;"
                          <li key={index} className="flex items - start gap - 2">;"
                            <div className="text - zion - cyan mt - 1 flex - shrink - 0">•</div>;""
                            <span className="text - zion - slate - light">{feature}</span>;"
                          </li>))}
                  <img ;"
</img>"
                    src={equipment.images[selectedImageIndex]} ;
                    alt={equipment.name} ;"
                    className="w-full h-full object-contain bg-zion-blue-light/10 p-4";"
                          src={image} ;`;
                          alt={`${equipment.name} - image ${index + 1}`} ;"
                          className="w-full h-full object-cover";"
                              <span className="text-zion-slate-light">{spec.name}</span>;""
                              <span className="text-white font-medium">{spec.value}</span>;"
                          </li>;                        ))}
              <div className="mt-8">"
                <Tabs defaultValue="description" className="w-full">"
                  <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-3 h-auto">"
                    <TabsTrigger value="description" className="py-3 data-[state=active]:bg-zion-purple/10">"

                    <TabsTrigger value="specifications" className="py-3 data-[state=active]:bg-zion-purple/10">"

                    <TabsTrigger value="features" className="py-3 data-[state=active]:bg-zion-purple/10">"

                  <TabsContent value="description" className="mt-4">"
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">"
                      <p className="text-zion-slate-light whitespace-pre-line">"
                  <TabsContent value="specifications" className="mt-4">"
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
                          <div key={index} className="border-b border-zion-blue-light pb-2 mb-2 last:border-0 last:mb-0 last:pb-0">"
                            <div className="flex justify-between">"
                              <span className="text-zion-slate-light">{spec.name}</span>""
                              <span className="text-white font-medium">{spec.value}</span>"
                  <TabsContent value="features" className="mt-4">"
                      <ul className="space-y-2">"
                          <li key={index} className="flex items-start gap-2">"
                            <div className="text-zion-cyan mt-1 flex-shrink-0">•</div>""
                            <span className="text-zion-slate-light">{feature}</span>"
                          </li>
                      </ul>
                      </ul>;
            <div className="lg:col-span-1">;"
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">;"
                <div className="flex flex-wrap gap-2 mb-3">;"
                  <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">;"

                <h1 className="text-2xl font-bold text-white mb-1">{equipment && equipment.name}</h1>;""
                <p className="text-zion-cyan mb-4">Brand: {equipment && equipment.brand}</p>;""
                  <div className="flex items-center gap-2 mb-4">;"
                    <div className="flex items-center">;"
                        <Star;
                          key={i}`;
                          className={`h-5 w-5 ${

                            i < Math && Math.floor(equipment && equipment.rating!) "
                              ? "text-zion-cyan fill-zion-cyan""
                            i < Math.floor(equipment.rating!) "
                              ? "text-zion-cyan fill-zion-cyan"""
                              : "text-zion-slate-light""`;
                          }`}
            {/* Right Column - Purchase Info */}"

                    ;                  )}
                <h1 className="text-2xl font-bold text-white mb-1">{equipment.name}</h1>;""
                <p className="text-zion-cyan mb-4">Brand:{equipment.brand}</p>;""
                          className={`h-5 w-5 ${;
                            i < Math.floor(equipment.rating!) ;"
                              ? "text-zion-cyan fill-zion-cyan" ;""`;
                              :"text-zion-slate-light";                          }`}""

                    <span className="text-sm text-zion-slate-light">;"
</span>
                    </span>;
                <div className="text-3xl font-bold text-white mb-4">;"
                <div className="mb-6">;"
                    <div className="text-emerald-400 flex items-center gap-1">;"
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>;"
                      <span>In Stock</span>;"
                        <span className="text-zion-slate-light ml-1 text-sm">;"
                    <div className="text-rose-400 flex items-center gap-1">;"
                      <span className="w-2 h-2 bg-rose-400 rounded-full"></span>;"
                      <span>Out of Stock</span>;
                    <button;"
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50""
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
</button>
                      disabled={quantity <= 1 |!equipment.inStock}
                    >
                      -

                    <input;"
                      type="number"""
                      className="w-full text-center bg-transparent border-0 text-white focus:ring-0""
                      value={quantity}
                      readOnly;
</input>

                      onClick={() => setQuantity(prev => prev + 1)}
                <div className="space-y-3 mb-6">"
                  <Button;
                    onClick={handleBuyNow}
                    disabled={isAdding |!equipment.inStock}"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6""

                    onClick={handleAddToCart}
                    variant="outline"""
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10""
                    <ShoppingCart className="h-4 w-4 mr-2" />"

                  </div>;                )}"
                <div className="text-3xl font-bold text-white mb-4">;                  {equipment.currency}{equipment.price.toLocaleString()}"
                    </div>;                  )}
                  <label className="text-sm text-zion-slate-light block mb-2">Quantity</label>;""
                  <div className="flex items-center border border-zion-blue-light rounded-md w-32">;"
                      onClick={() => setQuantity(prev => Math && Math.max(1, prev - 1))}
                      disabled={quantity <= 1 || !equipment && equipment.inStock}
                    >;
                      -;
                    </button>;
                    <button ;"
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50";"
                      disabled={quantity <= 1 || !equipment.inStock}
                    <input ;"
                      type="number" ;""
                      className="w-full text-center bg-transparent border-0 text-white focus:ring-0";"
                <div className="space-y-3 mb-6">;"
                    disabled={isAdding || !equipment && equipment.inStock}"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6">;"

                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;"
                  <Button ;
                    disabled={isAdding || !equipment.inStock}"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";"

                    variant="outline";""
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10";"
                    <ShoppingCart className="h-4 w-4 mr-2" />;"

                <div className="space-y-4 border-t border-zion-blue-light pt-4">;"
                  <div className="flex gap-3 text-zion-slate-light">;"
                    <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />;"

                    <div>;
                      <p className="text-white text-sm font-medium">Free Shipping</p>;""
                      <p className="text-xs">For orders over $100 within the US</p>;"
                      <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />;"

                        <p className="text-white text-sm font-medium">Warranty</p>;""
                        <p className="text-xs">{equipment && equipment.warranty}</p>;"
                        <p className="text-xs">{equipment.warranty}</p>;"
                    </div>;                  )}"
                      <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />;"

                        <p className="text-white text-sm font-medium">Returns</p>;""
                        <p className="text-xs">{equipment && equipment.returnPolicy}</p>;"
            <div className="lg:col - span - 1">;"
              <div className="bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light sticky top - 6">;"
                <div className="flex flex - wrap gap - 2 mb - 3">;"
                  <Badge variant="outline" className="text - zion - slate - light border - zion - blue - light">;"

                    )}
                <h1 className="text - 2xl font - bold text - white mb - 1">{equipment.name}</h1>;""
                <p className="text - zion - cyan mb - 4">Brand: {equipment.brand}</p>;""
                  <div className="flex items - center gap - 2 mb - 4">;"
                    <div className="flex items - center">;"
                          className={`h - 5 w - 5 ${
                            i < Math.floor (equipment.rating!);"
                              ? "text - zion - cyan fill - zion - cyan";""
                              : "text - zion - slate - light";"`;
                        />))}

                    <span className="text - sm text - zion - slate - light">;"
                  </div>)}"
                <div className="text - 3xl font - bold text - white mb - 4">;"
                <div className="mb - 6">;"
                    <div className="text - emerald - 400 flex items - center gap - 1">;"
                      <span className="w - 2 h - 2 bg - emerald - 400 rounded - full"></span>;"
                      <span > In Stock</span>;"
                        <span className="text - zion - slate - light ml - 1 text - sm">;"
                        </span>)}
                    </div>) : ("
                    <div className="text - rose - 400 flex items - center gap - 1">;"
                      <span className="w - 2 h - 2 bg - rose - 400 rounded - full"></span>;"
                      <span > Out of Stock</span>;)
                    </div>)}
                  <label className="text - sm text - zion - slate - light block mb - 2">Quantity</label>;""
                  <div className="flex items - center border border - zion - blue - light rounded - md w - 32">;"
                      className="px - 3 py - 1 text - zion - slate - light hover:text - white disabled:opacity - 50";"
                      on_click={() => set_quantity (prev => Math.max (1, prev - 1))}
                      disabled={quantity <= 1 || !equipment.in_stock}
                      type="number";""
                      className="w - full text - center bg - transparent border - 0 text - white focus:ring - 0";"
                      read_only;
                      on_click={() => set_quantity (prev => prev + 1)}
                <div className="space - y-3 mb - 6">;"
                    on_click={handleBuyNow}
                    disabled={is_adding || !equipment.in_stock}"
                    className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6";"

                    on_click={handleAddToCart}
                    className="w - full border - zion - purple text - zion - cyan hover:bg - zion - purple / 10";"
                    <ShoppingCart className="h - 4 w - 4 mr - 2" />;"

                <div className="space - y-4 border - t border - zion - blue - light pt - 4">;"
                  <div className="flex gap - 3 text - zion - slate - light">;"
                    <Truck className="h - 5 w - 5 text - zion - cyan flex - shrink - 0" />;"

                      <p className="text - white text - sm font - medium">Free Shipping</p>;""
                      <p className="text - xs">For orders over $100 within the US</p>;"
                      <Shield className="h - 5 w - 5 text - zion - cyan flex - shrink - 0" />;"

                        <p className="text - white text - sm font - medium">Warranty</p>;""
                        <p className="text - xs">{equipment.warranty}</p>;"
                <div className="space-y-4 border-t border-zion-blue-light pt-4">"
                  <div className="flex gap-3 text-zion-slate-light">"
                    <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />"

                    <div>
                      <p className="text-white text-sm font-medium">Free Shipping</p>""
                      <p className="text-xs">For orders over $100 within the US</p>"
                      <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />"

                        <p className="text-white text-sm font-medium">Warranty</p>""
                        <p className="text-xs">{equipment.warranty}</p>"
                      <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />"

                        <p className="text-white text-sm font-medium">Returns</p>""
                        <p className="text-xs">{equipment.returnPolicy}</p>"
                      <RotateCcw className="h - 5 w - 5 text - zion - cyan flex - shrink - 0" />;"

                        <p className="text - white text - sm font - medium">Returns</p>;""
                        <p className="text - xs">{equipment.return_policy}</p>;"
                        <p className="text-xs">{equipment.returnPolicy}</p>;"

    </>

    </>);

;
    </>;
  ),; interface EquipmentSpecification {
  // TODO: Implement
  name: string;,
}interface EquipmentDetails {

<<<<<<< HEAD
=======

category: string;
images: string[];,
  price: number;
currency: string;
reviewCount?: number;
inStock: boolean;
expectedShipping?: string;
specifications: EquipmentSpecification[];,
  features: string[];
warranty?: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
}</div>) 
}</div> Description  <TabsTrigger value="specifications" className="py-3 data-[state=active]:bg-zion-purple/10" > Specifications  <TabsTrigger value="features" className="py-3 data-[state=active]:bg-zion-purple/10" > Features   </p> </div>  </div> </div>) )"
}</div> </div>  </li>) ) 
}</ul> </div>   </div> </div> {
}) 
}</div> <Star key= {
  i;
}className= {`;
  `h-5 w-5 $ {
  i < Math.floor (equipment.rating!) </span> </div>) 

}</p> </div> </div>) 
}</div> </div> </div> </div> </div> </div> <Footer /> </>) 

  );
"`;
pr-12325
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
