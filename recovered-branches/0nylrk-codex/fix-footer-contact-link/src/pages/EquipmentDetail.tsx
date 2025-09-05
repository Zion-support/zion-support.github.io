 interface EquipmentSpecification {
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
};
if (!equipment) {
  return (<> <Header /> <div className="min-h-screen bg-zion-blue py-12 px-4" > <div className="container mx-auto" > <div className="text-center py-20" > <h1 className="text-3xl font-bold text-white mb-4" >Equipment Not Found</h1> <p className="text-zion-slate-light mb-8" >The equipment you're looking for doesn't exist or has been removed.</p> </div> </div> </div> <Footer /> </> 
}, 800);
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}, 800);
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 return (<> <Header /> /> </div>) ) 
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
}