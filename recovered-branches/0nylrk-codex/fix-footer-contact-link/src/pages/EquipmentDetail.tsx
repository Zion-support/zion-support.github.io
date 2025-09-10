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
interface EquipmentDetails {
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

}
// Sample data - in a real app this would come from an API
const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } = {
  "pro-camera-x1000": {interface EquipmentDetails {;
  id: string,;
  name: string,,
  description: string,;
  brand: string,;
  category: string,;
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
  id: string,
  name: string,
  description: string,
  brand: string,
  category: string,
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800";
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800";    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800";
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800";
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&h=800",
    ]
    price: 6999
    currency: "$"
    rating: 4.9
    reviewCount: 87
    inStock: true
    expectedShipping: "3-5 business days"
    specifications: [      "Advanced 8K full-frame sensor";
      "16+ stops of dynamic range";
      "Internal RAW recording";
      "Dual native ISO technology";
      "5-axis in-body image stabilization";
      "AI-powered autofocus with subject tracking";
    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800",      "Multiple assist tools: false color, waveform, vectorscope";
      "Anamorphic de-squeeze options";
      "Custom 3D LUT support";
    ];

      { name: "Sensor", value: "Full-frame CMOS (36 x 24 mm)" },
      { name: "Resolution", value: "8K (8192 x 4320)" },
      { name: "Dynamic Range", value: "16+ stops" },
      { name: "ISO Range", value: "100-51,200 (expandable to 50-204,800)" },
      { name: "Recording Format", value: "RAW, ProRes, H.265" },
      { name: "Frame Rates", value: "Up to 120fps at 4K, 60fps at 8K" },
      { name: "Storage", value: "Dual CFexpress Type B" },
      { name: "Battery Life", value: "~3 hours continuous recording" },
      { name: "Weight", value: "4.5 lbs (body only)" },
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

    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800";    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800",
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

  },

  const handleBuyNow = () => {}
    setIsAdding(true),



export default function EquipmentDetail() {;

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
                <div className="space-y-4 border-t border-zion-blue-light pt-4">;
                  {/* Shipping */}

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

            <div className="lg:col - span-1">;
              <div className="bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light sticky top-6">;
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
                  <div className="flex items - center gap - 2 mb-4">;
                    <div className="flex items-center">;
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
                    </div>;
                    <span className="text - sm text - zion - slate-light">;
                      {equipment.rating.to_fixed (1)} ({equipment.review_count} reviews);
                    </span>;
                  </div>)}
                {/* Price */}
                <div className="text - 3xl font - bold text - white mb-4">;
                  {equipment.currency}{equipment.price.toLocaleString ()}
                </div>;
                {/* Stock Status */}
                <div className="mb-6">;
                  {equipment.in_stock ? (
                    <div className="text - emerald - 400 flex items - center gap-1">;
                      <span className="w - 2 h - 2 bg - emerald - 400 rounded-full"></span>;
                      <span > In Stock</span>;
                      {equipment.expected_shipping && (
                        <span className="text - zion - slate - light ml - 1 text-sm">;
                          (Ships in {equipment.expected_shipping});
                        </span>)}
                    </div>) : (
                    <div className="text - rose - 400 flex items - center gap-1">;
                      <span className="w - 2 h - 2 bg - rose - 400 rounded-full"></span>;
                      <span > Out of Stock</span>;
                    </div>)}
                </div>;
                {/* Quantity */}
                <div className="mb-6">;
                  <label className="text - sm text - zion - slate - light block mb-2">Quantity</label>;
                  <div className="flex items - center border border - zion - blue - light rounded - md w-32">;
                    <button;
                      className="px - 3 py - 1 text - zion - slate - light hover:text - white disabled:opacity-50";
                      on_click={() => set_quantity (prev => Math.max (1, prev - 1))}
</button>

                      disabled={quantity <= 1 || !equipment.in_stock}
                    >;
                      -;
                    </button>;
                    <input;
                      type="number";
                      className="w - full text - center bg - transparent border - 0 text - white focus:ring-0";
                      value={quantity}
                      read_only;
                    />;
                    <button;
                      className="px - 3 py - 1 text - zion - slate - light hover:text - white disabled:opacity-50";
                      on_click={() => set_quantity (prev => prev + 1)}
                      disabled={!equipment.in_stock}
                    >;
                      +;
                    </button>;
                  </div>;
                </div>;
                {/* Purchase Buttons */}
                <div className="space - y-3 mb-6">;
                  <Button;
                    on_click={handleBuyNow}
                    disabled={is_adding || !equipment.in_stock}
                    className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py-6";
                  >;
                    {is_adding ? "Processing..." : "Buy Now"}
                  </Button>;
                  <Button;
                    on_click={handleAddToCart}
                    disabled={is_adding || !equipment.in_stock}
                    variant="outline";
                    className="w - full border - zion - purple text - zion - cyan hover:bg - zion-purple / 10";
                  >;
                    <ShoppingCart className="h - 4 w - 4 mr-2" />;
                    Add to Cart;
                  </Button>;
                </div>;
                {/* Additional Info */}
                <div className="space - y-4 border - t border - zion - blue - light pt-4">;
                  {/* Shipping */}
                  <div className="flex gap - 3 text - zion - slate-light">;
                    <Truck className="h - 5 w - 5 text - zion - cyan flex - shrink-0" />;
                    <div>;
                      <p className="text - white text - sm font-medium">Free Shipping</p>;
                      <p className="text-xs">For orders over $100 within the US</p>;
                    </div>;
                  </div>;
                  {/* Warranty */}
                  {equipment.warranty && (
                    <div className="flex gap - 3 text - zion - slate-light">;
                      <Shield className="h - 5 w - 5 text - zion - cyan flex - shrink-0" />;
                      <div>;
                        <p className="text - white text - sm font-medium">Warranty</p>;
                        <p className="text-xs">{equipment.warranty}</p>;
                      </div>;
                    </div>)}
                  {/* Return Policy */}

