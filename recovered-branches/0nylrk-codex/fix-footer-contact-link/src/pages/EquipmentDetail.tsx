<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

<<<<<<< HEAD

import { useState } from "react",
import { useParams } from "react-router-dom",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { AspectRatio } from "@/components/ui/aspect-ratio",
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useState} from "react";
import {useParams} from "react-router-dom";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {ShoppingCart, Star, Truck, Shield, RotateCcw, Clock} from "lucide-react";
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
interface EquipmentSpecification {;
  name: string,;
  value: string;
}
interface EquipmentDetails {;
  id: string,;
  name: string,;
  description: string,;
  brand: string,;
  category: string,;
import { useState } from './react';
import { use_params } from './react-router-dom';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { AspectRatio } from '@/components / ui / aspect - ratio';
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock } from './lucide-react';
import { toast } from '@/hooks / use - toast';
interface EquipmentSpecification {
  name: string,
  value: string;
}
=======
interface EquipmentSpecification {
  name: string,
  value: string
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface EquipmentDetails {
  id: string,
  name: string,
  description: string,
  brand: string,
  category: string,
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
  subcategory?: string;
  images: string[],;
  price: number,;
  currency: string,;
  rating?: number;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
  subcategory?: string;
  images: string[],
  price: number,
  currency: string,
  rating?: number;
  reviewCount?: number;
  inStock: boolean,
  expectedShipping?: string;
  specifications: EquipmentSpecification[],
  features: string[],
  warranty?: string;
  returnPolicy?: string
import { useState } from "react",
import { useParams } from "react-router-dom",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
interface EquipmentSpecification {

  name: string

  value: string
}
interface EquipmentDetails {

  id: string
  name: string
  description: string
  brand: string
  category: string
  subcategory?: string;
  images: string[]
  price: number
  currency: string
  rating?: number;
  reviewCount?: number;
  inStock: boolean
  expectedShipping?: string;
  specifications: EquipmentSpecification[]
  features: string[]

  warranty?: string;
  returnPolicy?: string
}
// Sample data - in a real app this would come from an API
const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } = {
  "pro-camera-x1000": {

    id: "pro-camera-x1000"
    name: "Pro Camera X1000"
    description: "Professional-grade cinema camera with 8K resolution, advanced color science, and exceptional low-light performance. Designed for feature films, high-end commercials, and documentary production. Includes comprehensive shooting modes, customizable settings, and industry-leading dynamic range.";
    brand: "CineTech"
    category: "Equipment"
    subcategory: "Cameras"
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock } from "lucide-react",
import { toast } from "@/hooks/use-toast",
interface EquipmentSpecification {
  name: string,
  value: string
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
interface EquipmentSpecification {;
  name: string,;
  value: string;
}
;
interface EquipmentDetails {;
  id: string,;
  name: string,;
  description: string,;
  brand: string,;
  category: string,;
  subcategory?: string,;
  images: string[],;
  price: number,;
  currency: string,;
  rating?: number,;
  reviewCount?: number,;
  inStock: boolean,;
  expectedShipping?: string,;
  specifications: EquipmentSpecification[],;
  features: string[],;
  warranty?: string,;
  returnPolicy?: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800";
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800";
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=1200&h=800"
    ]
    price: 6999
    currency: "$"
    rating: 4.9
    reviewCount: 87
    inStock: true
    expectedShipping: "3-5 business days"
    specifications: [
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
// Sample data - in a real app this would come from an API;
const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } = {;
  "pro-camera-x1000": {;
    id: "pro-camera-x1000",;
    name: "Pro Camera X1000",;
    description: "Professional-grade cinema camera with 8K resolution, advanced color science, and exceptional low-light performance. Designed for feature films, high-end commercials, and documentary production. Includes comprehensive shooting modes, customizable settings, and industry-leading dynamic range.";
    brand: "CineTech",;
    category: "Equipment",;
    subcategory: "Cameras",;
    images: [;
      "https://images && images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800";
      "https://images && images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800";
      "https://images && images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=1200&h=800";
    ],;
    price: 6999,;
    currency: "$",;
    rating: 4 && 4.9,;
    reviewCount: 87,;
    inStock: true,;
    expectedShipping: "3-5 business days",;
    specifications: [;
      { name: "Sensor", value: "Full-frame CMOS (36 x 24 mm)" },;
      { name: "Resolution", value: "8K (8192 x 4320)" },;
      { name: "Dynamic Range", value: "16+ stops" },;
      { name: "ISO Range", value: "100-51,200 (expandable to 50-204,800)" };
      { name: "Recording Format", value: "RAW, ProRes, H && H.265" };
      { name: "Frame Rates", value: "Up to 120fps at 4K, 60fps at 8K" };
      { name: "Storage", value: "Dual CFexpress Type B" },;
      { name: "Battery Life", value: "~3 hours continuous recording" },;
      { name: "Weight", value: "4 && 4.5 lbs (body only)" },;
      { name: "Connectivity", value: "HDMI 2 && 2.1, USB-C, Wi-Fi, Bluetooth" }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
    ];
    features: [;
      "Advanced 8K full-frame sensor";
      "16+ stops of dynamic range";
      "Internal RAW recording";
      "Dual native ISO technology";
      "5-axis in-body image stabilization";
      "AI-powered autofocus with subject tracking";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

      "Weather-sealed magnesium alloy body",;

========
      "Weather-sealed magnesium alloy body",;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
      "Multiple assist tools: false color, waveform, vectorscope";
      "Anamorphic de-squeeze options";
      "Custom 3D LUT support";
    ];
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      { name: "Sensor", value: "Full-frame CMOS (36 x 24 mm)" }
      { name: "Resolution", value: "8K (8192 x 4320)" }
      { name: "Dynamic Range", value: "16+ stops" }
      { name: "ISO Range", value: "100-51,200 (expandable to 50-204,800)" }
      { name: "Recording Format", value: "RAW, ProRes, H.265" }
      { name: "Frame Rates", value: "Up to 120fps at 4K, 60fps at 8K" }
      { name: "Storage", value: "Dual CFexpress Type B" }
      { name: "Battery Life", value: "~3 hours continuous recording" }
      { name: "Weight", value: "4.5 lbs (body only)" }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      { name: "Connectivity", value: "HDMI 2.1, USB-C, Wi-Fi, Bluetooth" }
    ],
    features: [

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800";
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&h=800"
    ]
    price: 3499
    currency: "$"
    rating: 4.8
    reviewCount: 42
    inStock: true
    expectedShipping: "5-7 business days"
    specifications: [
      { name: "Channels", value: "32 input channels" }
      { name: "Faders", value: "16 motorized faders" }
      { name: "Preamps", value: "24 premium mic preamps" }
      { name: "Sampling Rate", value: "Up to 96kHz" }
      { name: "EQ", value: "4-band parametric per channel" }
      { name: "Dynamics", value: "Compressor/Gate on all channels" }
      { name: "Effects", value: "8 stereo effects processors" }
      { name: "Recording", value: "64-channel USB interface" }
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      { name: "Weight", value: "32 lbs" }
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
    ]
    warranty: "3 years manufacturer warranty"
    returnPolicy: "21-day return policy for items in original condition"
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  // In a real app, this would fetch from an API
  const equipment = equipmentId ? SAMPLE_EQUIPMENT[equipmentId] : undefined,
=======

},

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export default function EquipmentDetail() {
  const { equipmentId } = useParams() as { equipmentId?: string }
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  // In a real app, this would fetch from an API
  const equipment = equipmentId ? SAMPLE_EQUIPMENT[equipmentId] : undefined;
},

export default function EquipmentDetail() {;
  const { equipmentId } = useParams() as { equipmentId?: string };
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
export default function EquipmentDetail() {
  const { equipmentId } = useParams() as { equipmentId?: string },
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),
  const [quantity, setQuantity] = useState(1),
  const [isAdding, setIsAdding] = useState(false),
  
  // In a real app, this would fetch from an API
  const equipment = equipmentId ? SAMPLE_EQUIPMENT[equipmentId] : undefined,
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  if (!equipment) {
    return (
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
    )
  }
  const handleAddToCart = () => {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
    setIsAdding(true),
    

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    setIsAdding(true);
    setIsAdding(true),
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    // Simulate API call
    setTimeout(() => {
      setIsAdding(false),
      toast({
        title: "Added to cart"
        description: `${quantity}x ${equipment.name} added to your cart.`})
    }, 800)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
  }
  const handleBuyNow = () => {
    setIsAdding(true);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
  const handleBuyNow = () => {
    setIsAdding(true);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },

  const handleBuyNow = () => {
    setIsAdding(true),
    
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    // Simulate API call
    setTimeout(() => {
      setIsAdding(false),
      toast({
        title: "Proceeding to checkout"
        description: `Preparing your order for ${equipment.name}.`})
    }, 800)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

  },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">
                {/* Main Image */}
                <div className="aspect-video w-full relative">
                  <img
                    src={equipment.images[selectedImageIndex]}
                    alt={equipment.name}
                    className="w-full h-full object-contain bg-zion-blue-light/10 p-4"
                  />
                </div>
                {/* Thumbnail Gallery */}
                {equipment.images.length > 1 && (
                  <div className="flex p-4 gap-2 overflow-x-auto">
                    {equipment.images.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${equipment.name} - image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
// Sample data - in a real app this would come from an API;
const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } = {;
  "pro-camera-x1000": {;
    id: "pro-camera-x1000",;
    name: "Pro Camera X1000",;
    description: "Professional-grade cinema camera with 8K resolution, advanced color science, and exceptional low-light window.window.window.performance. Designed for feature films, high-end commercials, and documentary production. Includes comprehensive shooting modes, customizable settings, and industry-leading dynamic range.",;
    brand: "CineTech",;
    category: "Equipment",;
    subcategory: "Cameras",;
    images: [;
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800",;
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800",;
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=1200&h=800";
    ],;
    price: 6999,;
    currency: "$",;
    rating: 4.9,;
    reviewCount: 87,;
    inStock: true,;
    expectedShipping: "3-5 business days",;
    specifications: [;
      { name: "Sensor", value: "Full-frame CMOS (36 x 24 mm)" },;
      { name: "Resolution", value: "8K (8192 x 4320)" },;
      { name: "Dynamic Range", value: "16+ stops" },;
      { name: "ISO Range", value: "100-51,200 (expandable to 50-204,800)" },;
      { name: "Recording Format", value: "RAW, ProRes, H.265" },;
      { name: "Frame Rates", value: "Up to 120fps at 4K, 60fps at 8K" },;
      { name: "Storage", value: "Dual CFexpress Type B" },;
      { name: "Battery Life", value: "~3 hours continuous recording" },;
      { name: "Weight", value: "4.5 lbs (body only)" },;
      { name: "Connectivity", value: "HDMI 2.1, USB-C, Wi-Fi, Bluetooth" }
    ],;
    features: [;
      "Advanced 8K full-frame sensor",;
      "16+ stops of dynamic range",;
      "Internal RAW recording",;
      "Dual native ISO technology",;
      "5-axis in-body image stabilization",;
      "AI-powered autofocus with subject tracking",;
      "Weather-sealed magnesium alloy body",;
      "Multiple assist tools: false color, waveform, vectorscope",;
      "Anamorphic de-squeeze options",;
      "Custom 3D LUT support";
    ],;
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
    warranty: "2 years manufacturer warranty",;
    returnPolicy: "30-day return policy for unused items in original packaging";
  };
  "audio-mixer-pro": {;
    id: "audio-mixer-pro",;
    name: "AudioMixer Pro Digital Mixing Console",;
    description: "Professional digital mixing console designed for studio recording, live sound mixing, and post-production applications. Features 32 channels, premium preamps, extensive routing options, and intuitive control interface.";
=======
    warranty: "2 years manufacturer warranty",;
    returnPolicy: "30-day return policy for unused items in original packaging";
  },;
  "audio-mixer-pro": {;
    id: "audio-mixer-pro",;
    name: "AudioMixer Pro Digital Mixing Console",;
    description: "Professional digital mixing console designed for studio recording, live sound mixing, and post-production applications. Features 32 channels, premium preamps, extensive routing options, and intuitive control interface.",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    brand: "AudioTech",;
    category: "Equipment",;
    subcategory: "Audio",;
    images: [;
<<<<<<< HEAD
      "https://images && images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800";
      "https://images && images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&h=800";
    ],;
    price: 3499,;
    currency: "$",;
    rating: 4 && 4.8,;
=======
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800",;
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&h=800";
    ],;
    price: 3499,;
    currency: "$",;
    rating: 4.8,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    reviewCount: 42,;
    inStock: true,;
    expectedShipping: "5-7 business days",;
    specifications: [;
      { name: "Channels", value: "32 input channels" },;
      { name: "Faders", value: "16 motorized faders" },;
      { name: "Preamps", value: "24 premium mic preamps" },;
      { name: "Sampling Rate", value: "Up to 96kHz" },;
      { name: "EQ", value: "4-band parametric per channel" },;
      { name: "Dynamics", value: "Compressor/Gate on all channels" },;
      { name: "Effects", value: "8 stereo effects processors" },;
      { name: "Recording", value: "64-channel USB interface" },;
      { name: "Weight", value: "32 lbs" }
<<<<<<< HEAD
    ];
    features: [;
      "32-channel digital mixer with 24 premium mic preamps";
      "16 motorized faders with touch-sensitive control";
      "7-inch high-resolution color touchscreen";
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
      "Comprehensive routing matrix";
      "Onboard multi - track recording to USB";
      "iOS and Android remote control app";
      "Configurable user layers";
      "8 DCA groups and 6 mute groups";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
      "Integrated WiFi for wireless control";
    ],;
    warranty: "3 years manufacturer warranty",;
    returnPolicy: "21-day return policy for items in original condition";
  }
};
export default function EquipmentDetail() {;
  const { equipmentId } = useParams() as { equipmentId?: string };
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  // In a real app, this would fetch from an API;
  const equipment = equipmentId ? SAMPLE_EQUIPMENT[equipmentId] : undefined;
  if (!equipment) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
    return (
      <>;
        <Header />;
        <div className="min-h-screen bg-zion-blue py-12 px-4">;
          <div className="container mx-auto">;
            <div className="text-center py-20">;
              <h1 className="text-3xl font-bold text-white mb-4">Equipment Not Found</h1>;
              <p className="text-zion-slate-light mb-8">The equipment you're looking for doesn't exist or has been removed.</p>;
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
            </div>;
          </div>;
        </div>;
        <Footer />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
  const handleAddToCart = () => {;
    setIsAdding(true);
    // Simulate API call;
    setTimeout(() => {;
      setIsAdding(false);
      toast({;
        title: "Added to cart",;
        description: `${quantity}x ${equipment && equipment.name} added to your cart.`});
    }, 800);
  };
  const handleBuyNow = () => {;
    setIsAdding(true);
    // Simulate API call;
    setTimeout(() => {;
      setIsAdding(false);
      toast({;
        title: "Proceeding to checkout",;
        description: `Preparing your order for ${equipment && equipment.name}.`});
    }, 800);
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
  return (
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
=======
    ],;
    features: [;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
    ),;
=======
    );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
;
  const handleAddToCart = () => {;
    setIsAdding(true),;
<<<<<<< HEAD
    ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Simulate API call;
    setTimeout(() => {;
      setIsAdding(false),;
      toast({;
<<<<<<< HEAD
        title:"Added to cart",;
        description:`${quantity}x ${equipment.name} added to your cart.`}),;
    }, 800),;
  },;
;
  const handleBuyNow = () => {;
    setIsAdding(true),;
    ;
=======
        title: "Added to cart",;
        description: `${quantity}x ${equipment.name} added to your cart.`});
    }, 800);
  },;
  const handleBuyNow = () => {;
    setIsAdding(true),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Simulate API call;
    setTimeout(() => {;
      setIsAdding(false),;
      toast({;
<<<<<<< HEAD
        title:"Proceeding to checkout",;
        description:`Preparing your order for ${equipment.name}.`}),;
    }, 800),;
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        title: "Proceeding to checkout";
        description: `Preparing your order for ${equipment.name}.`});
    }, 800);
  };
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            {/* Left Column - Images */}
<<<<<<< HEAD
            <div className="lg:col-span-2">;
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">;
                {/* Main Image */}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
                <div className="aspect-video w-full relative">;
<<<<<<< HEAD
                  <img
                    src={equipment && equipment.images[selectedImageIndex]} 
                    alt={equipment && equipment.name} 
                    className="w-full h-full object-contain bg-zion-blue-light/10 p-4"
                  />;
                </div>;
                {/* Thumbnail Gallery */}
                {equipment && equipment.images.length > 1 && (;
                  <div className="flex p-4 gap-2 overflow-x-auto">;
                    {equipment && equipment.images.map((image, index) => (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
                      <div
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${;
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent";
                        }`}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
                      >;
                        <img
                          src={image} 
                          alt={`${equipment && equipment.name} - image ${index + 1}`} 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
                          className="w-full h-full object-cover"
                        />;
                      </div>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    ))}
                  </div>;
                )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
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
                  <TabsContent value="description" className="mt-4">;
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
                      <p className="text-zion-slate-light whitespace-pre-line">;
                        {equipment && equipment.description}
                      </p>;
                    </div>;
                  </TabsContent>;
                  <TabsContent value="specifications" className="mt-4">;
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
                        {equipment && equipment.specifications.map((spec, index) => (;
                          <div key={index} className="border-b border-zion-blue-light pb-2 mb-2 last:border-0 last:mb-0 last:pb-0">;
                            <div className="flex justify-between">;
                              <span className="text-zion-slate-light">{spec && spec.name}</span>;
                              <span className="text-white font-medium">{spec && spec.value}</span>;
                            </div>;
                          </div>;
                        ))}
                      </div>;
                    </div>;
                  </TabsContent>;
                  <TabsContent value="features" className="mt-4">;
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
                      <ul className="space-y-2">;
                        {equipment && equipment.features.map((feature, index) => (;
                          <li key={index} className="flex items-start gap-2">;
                            <div className="text-zion-cyan mt-1 flex-shrink-0">•</div>;
                            <span className="text-zion-slate-light">{feature}</span>;
                          </li>;
                        ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
<<<<<<< HEAD

=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
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
=======
                  <img ;
=======
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">
                {/* Main Image */}
                <div className="aspect-video w-full relative">;
                  <img;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    src={equipment.images[selectedImageIndex]} ;
                    alt={equipment.name} ;
                    className="w-full h-full object-contain bg-zion-blue-light/10 p-4";
                  />;
                </div>;
<<<<<<< HEAD
                ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {/* Thumbnail Gallery */}
                {equipment.images.length > 1 && (;
                  <div className="flex p-4 gap-2 overflow-x-auto">;
                    {equipment.images.map((image, index) => (;
<<<<<<< HEAD
                      <div ;
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${;
                          index === selectedImageIndex ? "border-zion-purple" :"border-transparent";
                        }`}
                      >;
                        <img ;
=======
                      <div;
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${;
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent";
                        }`}
                      >;
                        <img;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          src={image} ;
                          alt={`${equipment.name} - image ${index + 1}`} ;
                          className="w-full h-full object-cover";
                        />;
<<<<<<< HEAD
                      </div>;                    ))}
                  </div>;
                )}
              </div>;
;
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
                  ;
                  <TabsContent value="description" className="mt-4">;
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
                      <p className="text-zion-slate-light whitespace-pre-line">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        {equipment.description}
                      </p>;
                    </div>;
                  </TabsContent>;
<<<<<<< HEAD
                  <TabsContent value="specifications" className="mt - 4">;
                    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6">;
                      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
                        {equipment.specifications.map ((spec, index) => (
                          <div key={index} className="border - b border - zion - blue - light pb - 2 mb - 2 last:border - 0 last:mb - 0 last:pb - 0">;
                            <div className="flex justify - between">;
                              <span className="text - zion - slate - light">{spec.name}</span>;
                              <span className="text - white font - medium">{spec.value}</span>;
                            </div>;
                          </div>))}
                      </div>;
                    </div>;
                  </TabsContent>;
                  <TabsContent value="features" className="mt - 4">;
                    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6">;
                      <ul className="space - y-2">;
                        {equipment.features.map ((feature, index) => (
                          <li key={index} className="flex items - start gap - 2">;
                            <div className="text - zion - cyan mt - 1 flex - shrink - 0">•</div>;
                            <span className="text - zion - slate - light">{feature}</span>;
                          </li>))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
=======
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
                  ;
                  <TabsContent value="features" className="mt-4">;
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
                      <ul className="space-y-2">;
                        {equipment.features.map((feature, index) => (;
                          <li key={index} className="flex items-start gap-2">;
                            <div className="text-zion-cyan mt-1 flex-shrink-0">•</div>;
                            <span className="text-zion-slate-light">{feature}</span>;
                          </li>;                        ))}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                      </ul>;
                    </div>;
                  </TabsContent>;
                </Tabs>;
              </div>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
                </div>;
                {/* Product Title */}
<<<<<<< HEAD
                <h1 className="text-2xl font-bold text-white mb-1">{equipment.name}</h1>
                <p className="text-zion-cyan mb-4">Brand: {equipment.brand}</p>

=======
                <h1 className="text-2xl font-bold text-white mb-1">{equipment && equipment.name}</h1>;
                <p className="text-zion-cyan mb-4">Brand: {equipment && equipment.brand}</p>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx


=======

                

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
                {/* Rating */}
                {equipment && equipment.rating && (;
                  <div className="flex items-center gap-2 mb-4">;
                    <div className="flex items-center">;
                      {[...Array(5)].map((_, i) => (;
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

<<<<<<< HEAD
=======
                            i < Math && Math.floor(equipment && equipment.rating!) 
                              ? "text-zion-cyan fill-zion-cyan" 

=======

                            i < Math.floor(equipment.rating!) 
                              ? "text-zion-cyan fill-zion-cyan" 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
                            i < Math && Math.floor(equipment && equipment.rating!) 
                              ? "text-zion-cyan fill-zion-cyan" 
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
                              : "text-zion-slate-light"
                          }`}
=======
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
                          key={i}
                          className={`h-5 w-5 ${;
                            i < Math.floor(equipment.rating!) ;
                              ? "text-zion-cyan fill-zion-cyan" ;
                              :"text-zion-slate-light";                          }`}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        />;
                      ))}
                    </div>;
                    <span className="text-sm text-zion-slate-light">;
<<<<<<< HEAD
                      {equipment && equipment.rating.toFixed(1)} ({equipment && equipment.reviewCount} reviews);
                    </span>;
                  </div>;
                )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
                {/* Price */}
                <div className="text-3xl font-bold text-white mb-4">;
                  {equipment && equipment.currency}{equipment && equipment.price.toLocaleString()}
                </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {/* Right Column - Purchase Info */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                {/* Category and Brand */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">
                    {equipment.category}
                  </Badge>
                  {equipment.subcategory && (
                    <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">
                      {equipment.subcategory}
                    </Badge>
                  )}
                </div>
                {/* Product Title */}
                <h1 className="text-2xl font-bold text-white mb-1">{equipment.name}</h1>
                <p className="text-zion-cyan mb-4">Brand: {equipment.brand}</p>
                
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>
                {/* Quantity */}
                <div className="mb-6">
                  <label className="text-sm text-zion-slate-light block mb-2">Quantity</label>
                  <div className="flex items-center border border-zion-blue-light rounded-md w-32">
<<<<<<< HEAD
<<<<<<< HEAD
=======


                    <button 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    <button
                    <button 
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======

                    <button 


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    <button
                    <button 
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50"
                      onClick={() => setQuantity(prev => prev + 1)}
                      disabled={!equipment.inStock}
                    >
                      +
                    </button>
                  </div>
                </div>
                {/* Purchase Buttons */}
                <div className="space-y-3 mb-6">
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

                  <Button 


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <Button
                  <Button 
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    onClick={handleBuyNow}
                    disabled={isAdding |!equipment.inStock}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                  >
                    {isAdding ? "Processing..." : "Buy Now"}
                  </Button>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

                  <Button 


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <Button
                  <Button 
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    onClick={handleAddToCart}
                    disabled={isAdding |!equipment.inStock}
                    variant="outline"
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
                </div>;
=======
                      {equipment.rating.toFixed(1)} ({equipment.reviewCount} reviews);
                    </span>;
                  </div>;                )}
                ;
                {/* Price */}
                <div className="text-3xl font-bold text-white mb-4">;                  {equipment.currency}{equipment.price.toLocaleString()}
                </div>;
                ;
                {/* Stock Status */}
                <div className="mb-6">;
                  {equipment.inStock ? (;
                    <div className="text-emerald-400 flex items-center gap-1">;
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>;
                      <span>In Stock</span>;
                      {equipment.expectedShipping && (;
                        <span className="text-zion-slate-light ml-1 text-sm">;
                          (Ships in {equipment.expectedShipping});
                        </span>;
                      )}
                    </div>;
                  ) :(;
                    <div className="text-rose-400 flex items-center gap-1">;
                      <span className="w-2 h-2 bg-rose-400 rounded-full"></span>;
                      <span>Out of Stock</span>;
                    </div>;                  )}
                </div>;
                ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {/* Quantity */}
                <div className="mb-6">;
                  <label className="text-sm text-zion-slate-light block mb-2">Quantity</label>;
                  <div className="flex items-center border border-zion-blue-light rounded-md w-32">;
<<<<<<< HEAD
                    <button
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50"
                      onClick={() => setQuantity(prev => Math && Math.max(1, prev - 1))}
                      disabled={quantity <= 1 || !equipment && equipment.inStock}
                    >;
                      -;
                    </button>;
                    <input
                      type="number" 
                      className="w-full text-center bg-transparent border-0 text-white focus:ring-0"
                      value={quantity}
                      readOnly
                    />;
                    <button
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50"
                      onClick={() => setQuantity(prev => prev + 1)}
                      disabled={!equipment && equipment.inStock}
=======
                    <button ;
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50";
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      disabled={quantity <= 1 || !equipment.inStock}
                    >;
                      -;
                    </button>;
                    <input ;
                      type="number" ;
                      className="w-full text-center bg-transparent border-0 text-white focus:ring-0";
                      value={quantity}
                      readOnly;
                    />;
                    <button ;
                      className="px-3 py-1 text-zion-slate-light hover:text-white disabled:opacity-50";
                      onClick={() => setQuantity(prev => prev + 1)}
                      disabled={!equipment.inStock}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    >;
                      +;
                    </button>;
                  </div>;
                </div>;
<<<<<<< HEAD
                {/* Purchase Buttons */}
                <div className="space-y-3 mb-6">;
                  <Button
                    onClick={handleBuyNow}
                    disabled={isAdding || !equipment && equipment.inStock}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6">;
                    {isAdding ? "Processing..." : "Buy Now"}
                  </Button>;
                  <Button
                    onClick={handleAddToCart}
                    disabled={isAdding || !equipment && equipment.inStock}
                    variant="outline"
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;
=======
                ;
                {/* Purchase Buttons */}
                <div className="space-y-3 mb-6">;
                  <Button ;
                    onClick={handleBuyNow}
                    disabled={isAdding || !equipment.inStock}
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";
                  >;
                    {isAdding ? "Processing..." :"Buy Now"}
                  </Button>;
                  ;
                  <Button ;
                    onClick={handleAddToCart}
                    disabled={isAdding || !equipment.inStock}
                    variant="outline";
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10";
                  >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    <ShoppingCart className="h-4 w-4 mr-2" />;
                    Add to Cart;
                  </Button>;
                </div>;
<<<<<<< HEAD
=======
                ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {/* Additional Info */}
                <div className="space-y-4 border-t border-zion-blue-light pt-4">;
                  {/* Shipping */}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
                  <div className="flex gap-3 text-zion-slate-light">;
                    <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />;
                    <div>;
                      <p className="text-white text-sm font-medium">Free Shipping</p>;
                      <p className="text-xs">For orders over $100 within the US</p>;
                    </div>;
                  </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx


========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
                  {/* Warranty */}
                  {equipment && equipment.warranty && (;
=======
                  ;
                  {/* Warranty */}
                  {equipment.warranty && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    <div className="flex gap-3 text-zion-slate-light">;
                      <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />;
                      <div>;
                        <p className="text-white text-sm font-medium">Warranty</p>;
<<<<<<< HEAD
                        <p className="text-xs">{equipment && equipment.warranty}</p>;
                      </div>;
                    </div>;
                  )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx



========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
                  {/* Return Policy */}
                  {equipment && equipment.returnPolicy && (;
=======
                        <p className="text-xs">{equipment.warranty}</p>;
                      </div>;
                    </div>;                  )}
                  ;
                  {/* Return Policy */}
                  {equipment.returnPolicy && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    <div className="flex gap-3 text-zion-slate-light">;
                      <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />;
                      <div>;
                        <p className="text-white text-sm font-medium">Returns</p>;
<<<<<<< HEAD
                        <p className="text-xs">{equipment && equipment.returnPolicy}</p>;
                      </div>;
                    </div>;
                  )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
            {/* Right Column - Purchase Info */}
            <div className="lg:col - span - 1">;
              <div className="bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light sticky top - 6">;
                {/* Category and Brand */}
                <div className="flex flex - wrap gap - 2 mb - 3">;
                  <Badge variant="outline" className="text - zion - slate - light border - zion - blue - light">;
                    {equipment.category}
                  </Badge>;
                  {equipment.subcategory && (
                    <Badge variant="outline" className="text - zion - slate - light border - zion - blue - light">;
                      {equipment.subcategory}
                    </Badge>)}
                </div>;
                {/* Product Title */}
                <h1 className="text - 2xl font - bold text - white mb - 1">{equipment.name}</h1>;
                <p className="text - zion - cyan mb - 4">Brand: {equipment.brand}</p>;
                {/* Rating */}
                {equipment.rating && (
                  <div className="flex items - center gap - 2 mb - 4">;
                    <div className="flex items - center">;
                      {[...Array (5)].map ((_, i) => (
                        <Star;
                          key={i}
                          className={`h - 5 w - 5 ${
                            i < Math.floor (equipment.rating!);
                              ? "text - zion - cyan fill - zion - cyan";
                              : "text - zion - slate - light";
                          }`}
                        />))}
                    </div>;
                    <span className="text - sm text - zion - slate - light">;
                      {equipment.rating.to_fixed (1)} ({equipment.review_count} reviews);
                    </span>;
                  </div>)}
                {/* Price */}
                <div className="text - 3xl font - bold text - white mb - 4">;
                  {equipment.currency}{equipment.price.toLocaleString ()}
                </div>;
                {/* Stock Status */}
                <div className="mb - 6">;
                  {equipment.in_stock ? (
                    <div className="text - emerald - 400 flex items - center gap - 1">;
                      <span className="w - 2 h - 2 bg - emerald - 400 rounded - full"></span>;
                      <span > In Stock</span>;
                      {equipment.expected_shipping && (
                        <span className="text - zion - slate - light ml - 1 text - sm">;
                          (Ships in {equipment.expected_shipping});
                        </span>)}
                    </div>) : (
                    <div className="text - rose - 400 flex items - center gap - 1">;
                      <span className="w - 2 h - 2 bg - rose - 400 rounded - full"></span>;
                      <span > Out of Stock</span>;
                    </div>)}
                </div>;
                {/* Quantity */}
                <div className="mb - 6">;
                  <label className="text - sm text - zion - slate - light block mb - 2">Quantity</label>;
                  <div className="flex items - center border border - zion - blue - light rounded - md w - 32">;
                    <button;
                      className="px - 3 py - 1 text - zion - slate - light hover:text - white disabled:opacity - 50";
                      on_click={() => set_quantity (prev => Math.max (1, prev - 1))}
                      disabled={quantity <= 1 || !equipment.in_stock}
                    >;
                      -;
                    </button>;
                    <input;
                      type="number";
                      className="w - full text - center bg - transparent border - 0 text - white focus:ring - 0";
                      value={quantity}
                      read_only;
                    />;
                    <button;
                      className="px - 3 py - 1 text - zion - slate - light hover:text - white disabled:opacity - 50";
                      on_click={() => set_quantity (prev => prev + 1)}
                      disabled={!equipment.in_stock}
                    >;
                      +;
                    </button>;
                  </div>;
                </div>;
                {/* Purchase Buttons */}
                <div className="space - y-3 mb - 6">;
                  <Button;
                    on_click={handleBuyNow}
                    disabled={is_adding || !equipment.in_stock}
                    className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6";
                  >;
                    {is_adding ? "Processing..." : "Buy Now"}
                  </Button>;
                  <Button;
                    on_click={handleAddToCart}
                    disabled={is_adding || !equipment.in_stock}
                    variant="outline";
                    className="w - full border - zion - purple text - zion - cyan hover:bg - zion - purple / 10";
                  >;
                    <ShoppingCart className="h - 4 w - 4 mr - 2" />;
                    Add to Cart;
                  </Button>;
                </div>;
                {/* Additional Info */}
                <div className="space - y-4 border - t border - zion - blue - light pt - 4">;
                  {/* Shipping */}
                  <div className="flex gap - 3 text - zion - slate - light">;
                    <Truck className="h - 5 w - 5 text - zion - cyan flex - shrink - 0" />;
                    <div>;
                      <p className="text - white text - sm font - medium">Free Shipping</p>;
                      <p className="text - xs">For orders over $100 within the US</p>;
                    </div>;
                  </div>;
                  {/* Warranty */}
                  {equipment.warranty && (
                    <div className="flex gap - 3 text - zion - slate - light">;
                      <Shield className="h - 5 w - 5 text - zion - cyan flex - shrink - 0" />;
                      <div>;
                        <p className="text - white text - sm font - medium">Warranty</p>;
                        <p className="text - xs">{equipment.warranty}</p>;
                      </div>;
                    </div>)}
                  {/* Return Policy */}
<<<<<<< HEAD
=======
                {/* Additional Info */}
                <div className="space-y-4 border-t border-zion-blue-light pt-4">
                  {/* Shipping */}
                  <div className="flex gap-3 text-zion-slate-light">
                    <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Free Shipping</p>
                      <p className="text-xs">For orders over $100 within the US</p>
                    </div>
                  </div>
                  {/* Warranty */}
                  {equipment.warranty && (
                    <div className="flex gap-3 text-zion-slate-light">
                      <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium">Warranty</p>
                        <p className="text-xs">{equipment.warranty}</p>
                      </div>
                    </div>
                  )}
                  {/* Return Policy */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  {equipment.returnPolicy && (
                    <div className="flex gap-3 text-zion-slate-light">
                      <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium">Returns</p>
                        <p className="text-xs">{equipment.returnPolicy}</p>
                      </div>
                    </div>
                  )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
                  {equipment.return_policy && (
                    <div className="flex gap - 3 text - zion - slate - light">;
                      <RotateCcw className="h - 5 w - 5 text - zion - cyan flex - shrink - 0" />;
                      <div>;
                        <p className="text - white text - sm font - medium">Returns</p>;
                        <p className="text - xs">{equipment.return_policy}</p>;
                      </div>;
                    </div>)}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
=======
                        <p className="text-xs">{equipment.returnPolicy}</p>;
                      </div>;
                    </div>;
                  )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
    </>);
=======
    </>;
  ),; interface EquipmentSpecification {
  name: string;
value: string 
}interface EquipmentDetails {
  id: string;
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
returnPolicy?: string 
}//Sample data - in a real app this would come from an API const SAMPLE EQUIPMENT: {
  [key: string]: EquipmentDetails 
}= {
  images: [ "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800";
"https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800";
"https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&w=1200&h=800" ];
price: 6999;
currency: "$";
rating: 4.9;
reviewCount: 87;
inStock: true;
expectedShipping: "3-5 business days";
specifications: [ {
  name: "Sensor", value: "Full-frame CMOS (36 x 24 mm) " 
};
{
  name: "Resolution", value: "8K (8192 x 4320) " 
};
{
  name: "Dynamic Range", value: "16+ stops" 
};
{
  name: "ISO Range", value: "100-51, 200 (expandable to 50-204, 800) " 
};
{
  name: "Recording Format", value: "RAW, ProRes, H.265" 
};
{
  name: "Frame Rates", value: "Up to 120fps at 4K, 60fps at 8K" 
};
{
  name: "Storage", value: "Dual CFexpress Type B" 
};
{
  name: "Battery Life", value: "~3 hours continuous recording" 
};
{
  name: "Weight", value: "4.5 lbs (body only) " 
};
{
  name: "Connectivity", value: "HDMI 2.1, USB-C, Wi-Fi, Bluetooth" 
}features: [ "Advanced 8K full-frame sensor";
"16+ stops of dynamic range";
"Internal RAW recording";
"Dual native ISO technology";
"5-axis in-body image stabilization";
"AI-powered autofocus with subject tracking";
"Weather-sealed magnesium alloy body";
"Multiple assist tools: false color, waveform, vectorscope";
"Anamorphic de-squeeze options";
"Custom 3D LUT support" ];
warranty: "2 years manufacturer warranty";
returnPolicy: "30-day return policy for unused items in original packaging" 
};
];
features: [ "32-channel digital mixer with 24 premium mic preamps";
"16 motorized faders with touch-sensitive control";
"7-inch high-resolution color touchscreen";
"Comprehensive routing matrix";
"Onboard multi-track recording to USB";
"iOS and Android remote control app";
"Configurable user layers";
"8 DCA groups and 6 mute groups";
"Integrated WiFi for wireless control" ];
warranty: "3 years manufacturer warranty";
returnPolicy: "21-day return policy for items in original condition" 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
if (!equipment) {
  return (<> <Header /> <div className="min-h-screen bg-zion-blue py-12 px-4" > <div className="container mx-auto" > <div className="text-center py-20" > <h1 className="text-3xl font-bold text-white mb-4" >Equipment Not Found</h1> <p className="text-zion-slate-light mb-8" >The equipment you're looking for doesn't exist or has been removed.</p> </div> </div> </div> <Footer /> </> 
}, 800);
};
}, 800);
};
}</div>) 
}</div> Description </TabsTrigger> <TabsTrigger value="specifications" className="py-3 data-[state=active]:bg-zion-purple/10" > Specifications </TabsTrigger> <TabsTrigger value="features" className="py-3 data-[state=active]:bg-zion-purple/10" > Features </TabsTrigger> </TabsList> </p> </div> </TabsContent> </div> </div>) ) 
}</div> </div> </TabsContent> </li>) ) 
}</ul> </div> </TabsContent> </Tabs> </div> </div> {
  equipment.subcategory 
}</Badge>) 
}</div> <Star key= {
  i 
}className= {
  `h-5 w-5 $ {
  i < Math.floor (equipment.rating!) </span> </div>) 
}<span>In Stock</span> {
  equipment.expectedShipping && (<span className="text-zion-slate-light ml-1 text-sm" > (Ships in {
  equipment.expectedShipping 
}) </span>) 
}</div>) : (<div className="text-rose-400 flex items-center gap-1" > <span className="w-2 h-2 bg-rose-400 rounded-full" ></span> <span>Out of Stock</span> </div>) 
}</div> > - </button> <input > + </button> </div> </div> > <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart </Button> </div> <div> <p className="text-white text-sm font-medium" >Free Shipping</p> <p className="text-xs" >For orders over $100 within the US</p> </div> </div> <div> <p className="text-white text-sm font-medium" >Warranty</p> <p className="text-xs" > {
  equipment.warranty 
}</p> </div> </div>) 
}<div> <p className="text-white text-sm font-medium" >Returns</p> <p className="text-xs" > {
  equipment.returnPolicy 
}</p> </div> </div>) 
}</div> </div> </div> </div> </div> </div> <Footer /> </>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EquipmentDetail.tsx
=======
    </>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
