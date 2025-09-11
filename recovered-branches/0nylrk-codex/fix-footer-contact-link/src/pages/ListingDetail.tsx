
import {useState} from "react";
import {useParams} from "react-router-dom";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Skeleton} from "@/components/ui/skeleton";
import {Star, MessageSquare, Brain, Shield} from "lucide-react";
import {cn} from "@/lib/utils";
import {MARKETPLACE_LISTINGS} from "@/data/marketplaceData";
import {toast} from "@/hooks/use-toast";
import {PaymentButton} from "@/components/transactions/PaymentButton";
import {AppLayout} from "@/layout/AppLayout";
import {ProfileContact} from "@/components/profile/ProfileContact";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
<<<<<<< HEAD
<<<<<<< HEAD
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
=======

export default function ListingDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export default function ListingDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { id } = useParams() as { id?: string };
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

<<<<<<< HEAD
<<<<<<< HEAD

import { useState } from "react",
import { useParams } from "react-router-dom",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Skeleton } from "@/components/ui/skeleton",
import { Star, MessageSquare, Brain, Shield } from "lucide-react",
import { cn } from "@/lib/utils",
import { MARKETPLACE_LISTINGS } from "@/data/marketplaceData",
import { toast } from "@/hooks/use-toast",
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { AppLayout } from "@/layout/AppLayout",
import { ProfileContact } from "@/components/profile/ProfileContact",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { id } = useParams() as { id?: string }
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  // Find the listing from our shared data source - now also checking equipment listings
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { id } = useParams() as { id?: string },
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),
  const [isLoading, setIsLoading] = useState(false),
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false),

  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),
<<<<<<< HEAD
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id);
  if (!listing) {
    return (
      <AppLayout>
        <div className="min-h-screen bg-zion-blue py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-white mb-4">Listing Not Found</h1>
              <p className="text-zion-slate-light mb-8">The listing you're looking for doesn't exist or has been removed.</p>
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark">
                <a href="/marketplace">Back to Marketplace</Link>
              </Button>
            </div>
          </div>
        </div>
      </AppLayout>
    )
  }
  const handleContact = () => {
    setIsContactDialogOpen(true)
<<<<<<< HEAD

  },


<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <AppLayout>
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">
                <div className="aspect-[16/9] w-full relative">
                  {listing.images && listing.images.length > 0 ? (
                    <img
                      src={listing.images[selectedImageIndex]}
                      alt={listing.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement,
                        target.src = "/placeholder.svg"
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zion-blue-light/20">
                      <span className="text-zion-slate-light">No image available</span>
                    </div>
                  )}
                </div>
                {listing.images && listing.images.length > 1 && (
                  <div className="flex p-4 gap-2 overflow-x-auto">
                    {listing.images.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={cn(
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2",
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        )}
                      >
                        <img
                          src={image}
                          alt={`${listing.title} - image ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
<<<<<<< HEAD
<<<<<<< HEAD
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder.svg"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder.svg"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            const target = e.target as HTMLImageElement,
                            target.src = "/placeholder.svg"
import { useState } from "react",;
import { useParams } from "react-router-dom",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Skeleton } from "@/components/ui/skeleton",;
import { Star, MessageSquare, Brain, Shield } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { MARKETPLACE_LISTINGS } from "@/data/marketplaceData",;
import { toast } from "@/hooks/use-toast",;
import { PaymentButton } from "@/components/transactions/PaymentButton",;
import { AppLayout } from "@/layout/AppLayout",;
import { ProfileContact } from "@/components/profile/ProfileContact",;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
export default function ListingDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { id } = useParams() as { id?: string },;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),;
  const [isLoading, setIsLoading] = useState(false),;
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false),;
<<<<<<< HEAD
<<<<<<< HEAD
  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.find(item => item && item.id === id);
  if (!listing) {;
    return (

import { useState } from "react",;
import { useParams } from "react-router-dom",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Skeleton } from "@/components/ui/skeleton",;
import { Star, MessageSquare, Brain, Shield } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { MARKETPLACE_LISTINGS } from "@/data/marketplaceData",;
import { toast } from "@/hooks/use-toast",;
import { PaymentButton } from "@/components/transactions/PaymentButton",;
import { AppLayout } from "@/layout/AppLayout",;
import { ProfileContact } from "@/components/profile/ProfileContact",;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
;
export default function ListingDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { id } = useParams() as { id?:string },;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),;
  const [isLoading, setIsLoading] = useState(false),;
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false),;
;
  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),;
;
  if (!listing) {;
    return (;
  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),;
  if (!listing) {;
    return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.find(item => item && item.id === id);

  if (!listing) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <AppLayout>;
        <div className="min-h-screen bg-zion-blue py-12 px-4">;
          <div className="container mx-auto">;
            <div className="text-center py-20">;
              <h1 className="text-3xl font-bold text-white mb-4">Listing Not Found</h1>;
              <p className="text-zion-slate-light mb-8">The listing you're looking for doesn't exist or has been removed.</p>;
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark">;
                <a href="/marketplace">Back to Marketplace</a>;
              </Button>;
            </div>;
          </div>;
        </div>;
      </AppLayout>;
<<<<<<< HEAD
  const handleContact = () => {;
    setIsContactDialogOpen(true);
  };
  return (
    ),;
  }
;
  const handleContact = () => {;
    setIsContactDialogOpen(true),;
  },;
;
  return (;
    );
  }
<<<<<<< HEAD
;
  const handleContact = () => {;
    setIsContactDialogOpen(true);
  },;
  return (;
=======
=======
    );
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  const handleContact = () => {;
    setIsContactDialogOpen(true);
  };


  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <AppLayout>;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            {/* Left Column - Images */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="lg:col-span-2">;
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">;
                <div className="aspect-[16/9] w-full relative">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <div className="lg:col-span-2">;
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">;
                <div className="aspect-[16/9] w-full relative">;
                  {listing && listing.images && listing && listing.images.length > 0 ? (;
                    <img
                      src={listing && listing.images[selectedImageIndex]} 
                      alt={listing && listing.title} 

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      className="w-full h-full object-cover"
                      onError={(e) => {;
                        const target = e && e.target as HTMLImageElement;
                        target && target.src = "/placeholder && placeholder.svg";
<<<<<<< HEAD
<<<<<<< HEAD
                      }}
                    />;
                  ) : (;
                  {listing.images && listing.images.length > 0 ? (;
                    <img ;
            <div className="lg:col-span-2">;
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">;
                <div className="aspect-[16/9] w-full relative">;
                  {listing.images && listing.images.length > 0 ? (;
                    <img;
                      src={listing.images[selectedImageIndex]} ;
                      alt={listing.title} ;
                      className="w-full h-full object-cover";
                      onError={(e) => {;
                        const target = e.target as HTMLImageElement,;
                        target.src = "/placeholder.svg";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      }}
                    />;
                  ) : (;
                    <div className="w-full h-full flex items-center justify-center bg-zion-blue-light/20">;
                      <span className="text-zion-slate-light">No image available</span>;
                    </div>;
                  )}
<<<<<<< HEAD
<<<<<<< HEAD
                </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </div>;

                {listing && listing.images && listing && listing.images.length > 1 && (;
                  <div className="flex p-4 gap-2 overflow-x-auto">;
                    {listing && listing.images.map((image, index) => (;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={cn(;
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2";
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent";
                        )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      >;
                        <img
                          src={image} 
                          alt={`${listing && listing.title} - image ${index + 1}`} 
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          className="w-full h-full object-cover"
                          onError={(e) => {;
                            const target = e && e.target as HTMLImageElement;
                            target && target.src = "/placeholder && placeholder.svg";
<<<<<<< HEAD
<<<<<<< HEAD
                </div>;
                {listing.images && listing.images.length > 1 && (;
                  <div className="flex p-4 gap-2 overflow-x-auto">;
                    {listing.images.map((image, index) => (;
                      <div;
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={cn(;
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2",;
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent";
                        )}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      >;
                        <img;
                          src={image} ;
                          alt={`${listing.title} - image ${index + 1}`} ;
                          className="w-full h-full object-cover";
                          onError={(e) => {;
                            const target = e.target as HTMLImageElement,;
                            target.src = "/placeholder.svg";
<<<<<<< HEAD
<<<<<<< HEAD
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Description Section */}
              <div className="mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
                <p className="text-zion-slate-light whitespace-pre-line">{listing.description}</p>
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                          }}
                        />;
                      </div>;
                    ))}
                  </div>;
                )}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                


<<<<<<< HEAD
                
                
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </div>
              {/* Description Section */}
              <div className="mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
                <p className="text-zion-slate-light whitespace-pre-line">{listing.description}</p>
                


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Features */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-zion-purple/20">
                        <Brain className="h-5 w-5 text-zion-purple" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Advanced AI</h4>
                        <p className="text-sm text-zion-slate-light">State-of-the-art machine learning techniques</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-zion-cyan/20">
                        <Shield className="h-5 w-5 text-zion-cyan" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Enterprise Security</h4>
                        <p className="text-sm text-zion-slate-light">Built-in data protection and encryption</p>
                      </div>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
              </div>;
=======
=======
              </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
              </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Description Section */}
              <div className="mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">;
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>;
                <p className="text-zion-slate-light whitespace-pre-line">{listing && listing.description}</p>;
<<<<<<< HEAD
<<<<<<< HEAD
                ;
                {listing.images && listing.images.length > 1 && (;
                  <div className="flex p-4 gap-2 overflow-x-auto">;
                    {listing.images.map((image, index) => (;
                      <div ;
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={cn(;
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2",;
                          index === selectedImageIndex ? "border-zion-purple" :"border-transparent";
                        )}
                      >;
                        <img ;
                          src={image} ;
                          alt={`${listing.title} - image ${index + 1}`} ;
                          className="w-full h-full object-cover";
                          onError={(e) => {;
                            const target = e.target as HTMLImageElement,;
                            target.src = "/placeholder.svg",;
                          }}
                        />;
                      </div>;                    ))}
                  </div>;
                )}
              </div>;
;
              {/* Description Section */}
              <div className="mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">;
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>;
                <p className="text-zion-slate-light whitespace-pre-line">{listing.description}</p>;
                ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Features */}
                <div className="mt-8">;
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>;
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
                    <div className="flex items-start gap-3">;
                      <div className="p-2 rounded-full bg-zion-purple/20">;
                        <Brain className="h-5 w-5 text-zion-purple" />;
                      </div>;
                      <div>;
                        <h4 className="font-medium text-white">Advanced AI</h4>;
                        <p className="text-sm text-zion-slate-light">State-of-the-art machine learning techniques</p>;
                      </div>;
                    </div>;
                    <div className="flex items-start gap-3">;
                      <div className="p-2 rounded-full bg-zion-cyan/20">;
                        <Shield className="h-5 w-5 text-zion-cyan" />;
                      </div>;
                      <div>;
                        <h4 className="font-medium text-white">Enterprise Security</h4>;
                        <p className="text-sm text-zion-slate-light">Built-in data protection and encryption</p>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                ;
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Tags */}
                <div className="mt-8">;
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>;
                  <div className="flex flex-wrap gap-2">;
<<<<<<< HEAD
<<<<<<< HEAD
                    {listing.tags.map((tag, i) => (;
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">;
                        {tag}
                      </Badge>;                    ))}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {listing && listing.tags.map((tag, i) => (;
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">;
                        {tag}
                      </Badge>;
                    ))}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
            ;
            {/* Right Column - Details */}
            <div className="lg:col-span-1">;
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">;
                <div className="mb-2">;
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
                    {listing.category}
                  </Badge>;
                  {listing.featured && (;
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">;
                      Featured;
                    </Badge>;
                  )}
                </div>;

                            "h-5 w-5",


                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                        <Star
                          key={i}
                          className={cn(
                            "h-5 w-5"
                            i < Math && Math.floor(listing && listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                ;
                <h1 className="text-2xl font-bold text-white mb-4">{listing.title}</h1>;
                ;
                {listing.rating && (;
                  <div className="flex items-center gap-2 mb-6">;
                    <div className="flex items-center">;
                      {[...Array(5)].map((_, i) => (;
                        <Star;
                          key={i}
                          className={cn(;
                            "h-5 w-5",;
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" :"text-zion-slate-light";
                          )}
                        />;
                      ))}
                    </div>;
                    <span className="text-sm text-zion-slate-light">;
                {/* Price */}
                <div className="mb-6">;
                  {listing && listing.price !== null ? (;
                    <div className="text-3xl font-bold text-white">;
                      {listing && listing.currency}{listing && listing.price.toLocaleString()}
                    </div>;
                  ) : (;
                    <div className="text-2xl font-bold text-white">;
                      Custom Pricing;
                    </div>;
                  )}
                </div>;
                {/* Action Buttons */}
                <div className="space-y-3 mb-8">;
                  {listing && listing.price !== null ? (;
                    <PaymentButton
                      amount={listing && listing.price}
                      serviceId={listing && listing.id}
                      providerId={listing && listing.author.id}
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                {/* Tags */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {listing.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Details */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
                    {listing.category}
                  </Badge>
                  {listing.featured && (
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">
                      Featured
                    </Badge>
                  )}
                </div>
                <h1 className="text-2xl font-bold text-white mb-4">{listing.title}</h1>
                {listing.rating && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-5 w-5";
                            "h-5 w-5",
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-zion-slate-light">
                      {listing.rating.toFixed(1)} ({listing.reviewCount} reviews)
                    </span>
                  </div>
                )}
                {/* Price */}
                <div className="mb-6">
                  {listing.price !== null ? (
                    <div className="text-3xl font-bold text-white">
                      {listing.currency}{listing.price.toLocaleString()}
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-white">
                      Custom Pricing
                    </div>
                  )}
                </div>
                {/* Action Buttons */}
                <div className="space-y-3 mb-8">
                  {listing.price !== null ? (
                    <PaymentButton
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                      onPaymentInitiated={() => {
                        toast({
                          title: "Payment Processing"
                          description: "Redirecting to secure checkout..."
                        })


=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            {/* Right Column - Details */}
            <div className="lg:col-span-1">;
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">;
                <div className="mb-2">;
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
                    {listing && listing.category}
                  </Badge>;
                  {listing && listing.featured && (;
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">;
                      Featured;
                    </Badge>;
                  )}

                </div>;

                <h1 className="text-2xl font-bold text-white mb-4">{listing && listing.title}</h1>;

                {listing && listing.rating && (;
                  <div className="flex items-center gap-2 mb-6">;
                    <div className="flex items-center">;
                      {[...Array(5)].map((_, i) => (;

                        <Star
                          key={i}
                          className={cn(
<<<<<<< HEAD


=======
                            "h-5 w-5";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            "h-5 w-5",


                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                          )}
                        />;
                      ))}
                    </div>;
                    <span className="text-sm text-zion-slate-light">;
                      {listing && listing.rating.toFixed(1)} ({listing && listing.reviewCount} reviews);
                    </span>;
                  </div>;
                )}



                {/* Price */}
                <div className="mb-6">;
                  {listing && listing.price !== null ? (;
                    <div className="text-3xl font-bold text-white">;
                      {listing && listing.currency}{listing && listing.price.toLocaleString()}
                    </div>;
                  ) : (;
                    <div className="text-2xl font-bold text-white">;
                      Custom Pricing;
                    </div>;
                  )}

                </div>;


                {/* Action Buttons */}
                <div className="space-y-3 mb-8">;
                  {listing && listing.price !== null ? (;
                    <PaymentButton
                      amount={listing && listing.price}
                      serviceId={listing && listing.id}
                      providerId={listing && listing.author.id}
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
<<<<<<< HEAD


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                      onPaymentInitiated={() => {
                        toast({
                          title: "Payment Processing"
                          description: "Redirecting to secure checkout..."
                        })
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="space-y-3 mb-8">;
                  {listing.price !== null ? (;
                    <PaymentButton;
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
                      buttonText="Buy Now";
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";
                      onPaymentInitiated={() => {;
                        toast({;
                          title: "Payment Processing";
                          description: "Redirecting to secure checkout...";
                        });
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      }}
                    />
                  ) : (
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      onPaymentInitiated={() => {;
                        toast({;
                          title: "Payment Processing",;
                          description: "Redirecting to secure checkout...";
                        });
                      }}
                    />;
                  ) : (;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Button
                      onClick={handleContact}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6">;
                      {isLoading ? "Processing..." : "Request Quote"}
                    </Button>;
                  )}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                          const target = e.target as HTMLImageElement,


                          target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Button
                    variant="outline" 
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;
<<<<<<< HEAD
<<<<<<< HEAD
                      {listing.rating.toFixed(1)} ({listing.reviewCount} reviews);
                    </span>;
                  </div>;                )}
                ;
                {/* Price */}
                <div className="mb-6">;
                  {listing.price !== null ? (;
                    <div className="text-3xl font-bold text-white">;
                      {listing.currency}{listing.price.toLocaleString()}
                    </div>;
                  ) :(;
                    <div className="text-2xl font-bold text-white">;
                      Custom Pricing;
                    </div>;                  )}
                </div>;
                ;
                {/* Action Buttons */}
                <div className="space-y-3 mb-8">;
                  {listing.price !== null ? (;
                    <PaymentButton;
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
                      buttonText="Buy Now";
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";
                      onPaymentInitiated={() => {;
                        toast({;
                          title:"Payment Processing",;
                          description:"Redirecting to secure checkout...";
                        }),;
                      }}
                    />;
                  ) :(;
                    <Button ;
                      onClick={handleContact}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";
                    >;
                      {isLoading ? "Processing..." :"Request Quote"}
                    </Button>;
                  )}
                  ;
                  <Button ;
                    variant="outline" ;
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10";
                  >;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <MessageSquare className="h-4 w-4 mr-2" />;
                    Contact Publisher;
                  </Button>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Publisher Info */}
                <div className="border-t border-zion-blue-light pt-6">;
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>;
                  <div className="flex items-center gap-3">;
<<<<<<< HEAD
<<<<<<< HEAD
                      }}
                    />
                  ) : (
                    <Button
                      onClick={handleContact}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                    >
                      {isLoading ? "Processing..." : "Request Quote"}
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Publisher
                  </Button>
                </div>
                {/* Publisher Info */}
                <div className="border-t border-zion-blue-light pt-6">
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>
                  <div className="flex items-center gap-3">
                    {listing.author.avatarUrl ? (
                      <img
                        src={listing.author.avatarUrl}
                        alt={listing.author.name}
                        className="h-12 w-12 rounded-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;

                          const target = e.target as HTMLImageElement,
                          target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
                        }}
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span>
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-white">{listing.author.name}</p>
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>
                    </div>
                  </div>
                </div>
                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-zion-slate-light">Listed on</span>
                    <span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-zion-slate-light">ID</span>
                    <span className="text-white">{listing.id}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>
          </DialogHeader>
          <ProfileContact
            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}
            profileType="service"
          />
        </DialogContent>
      </Dialog>
    </AppLayout>
  )
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {listing && listing.author.avatarUrl ? (;
                      <img
                        src={listing && listing.author.avatarUrl} 
                        alt={listing && listing.author.name} 
                        className="h-12 w-12 rounded-full"
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        onError={(e) => {;
                          const target = e && e.target as HTMLImageElement;
                          target && target.src = "https: //ui-avatars && avatars.com/api/?name=" + encodeURIComponent(listing && listing.author.name);
                        onError={(e) => {;
                          const target = e && e.target as HTMLImageElement;
                          target && target.src = "https: //ui-avatars && avatars.com/api/?name=" + encodeURIComponent(listing && listing.author.name);
                        }}
                      />;
                    ) : (;
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">;
                        <span className="text-lg font-medium text-zion-purple">{listing && listing.author.name && name.charAt(0)}</span>;
                      </div>;
                    )}


<<<<<<< HEAD
}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;

=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";
                    >;
                      {isLoading ? "Processing..." : "Request Quote"}
                    </Button>;
                  )}
;
                  <Button;
                    variant="outline";
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10";
                  >;
                    <MessageSquare className="h-4 w-4 mr-2" />;
                    Contact Publisher;
                  </Button>;
                </div>;
                {/* Publisher Info */}
                <div className="border-t border-zion-blue-light pt-6">;
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>;
                  <div className="flex items-center gap-3">;
                    {listing.author.avatarUrl ? (;
                      <img;
                        src={listing.author.avatarUrl} ;
                        alt={listing.author.name} ;
                        className="h-12 w-12 rounded-full";
                        onError={(e) => {;
                          const target = e.target as HTMLImageElement;
                          target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name);
                        }}
                      />;
                    ) : (;
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">;
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span>;
                      </div>;
                    )}
<<<<<<< HEAD
<<<<<<< HEAD
                    <div>;
                      <p className="font-medium text-white">{listing && listing.author.name}</p>;
                    {listing.author.avatarUrl ? (;
                      <img ;
                        src={listing.author.avatarUrl} ;
                        alt={listing.author.name} ;
                        className="h-12 w-12 rounded-full";
                        onError={(e) => {;
                          const target = e.target as HTMLImageElement,;
                          target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name);
                        }}
                      />;
                    ) :(;
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">;
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span>;
                      </div>;                    )}
                    <div>;
                      <p className="font-medium text-white">{listing.author.name}</p>;
                    <div>;
                      <p className="font-medium text-white">{listing.author.name}</p>;
=======

                    <div>;
                      <p className="font-medium text-white">{listing && listing.author.name}</p>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                    <div>;
                      <p className="font-medium text-white">{listing && listing.author.name}</p>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>;
                    </div>;
                  </div>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6">;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">Listed on</span>;
<<<<<<< HEAD
<<<<<<< HEAD
                    <span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span>;
                  </div>;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">ID</span>;
                    <span className="text-white">{listing.id}</span>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <span className="text-white">{new Date(listing && listing.createdAt).toLocaleDateString()}</span>;
                  </div>;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">ID</span>;
                    <span className="text-white">{listing && listing.id}</span>;
=======
import { useState } from './react';
import { use_params } from './react-router-dom';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Skeleton } from '@/components / ui / skeleton';
import { Star, MessageSquare, Brain, Shield } from './lucide-react';
import { cn } from '@/lib / utils';
import { MARKETPLACE_LISTINGS } from '@/data / marketplace_data';
import { toast } from '@/hooks / use - toast';
import { PaymentButton } from '@/components / transactions / PaymentButton';
import { AppLayout } from '@/layout / AppLayout';
import { ProfileContact } from '@/components / profile / ProfileContact';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components / ui / dialog';
export default /**
 * ListingDetail - Function description
 */
function ListingDetail() {
  // use_params may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { id } = use_params () as { id?: string }
  const [selectedImageIndex, setSelectedImageIndex] = useState (0);
  const [is_loading, setIsLoading] = useState (false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState (false);
;
  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS.find (item => item.id === id);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <AppLayout>;
        <div className="min - h-screen bg - zion - blue py - 12 px - 4">;
          <div className="container mx - auto">;
            <div className="text - center py - 20">;
              <h1 className="text - 3xl font - bold text - white mb - 4">Listing Not Found</h1>;
              <p className="text - zion - slate - light mb - 8">The listing you're looking for doesn't exist or has been removed.</p>;
              <Button as_child className="bg - gradient - to - r from - zion - purple to - zion - purple - dark">;
                <a href="/marketplace">Back to Marketplace</a>;
              </Button>;
            </div>;
          </div>;
        </div>;
      </AppLayout>);
  }
  const handle_contact = () =>: any {
    setIsContactDialogOpen (true);
  }
;
  return (
    <AppLayout>;
      <div className="min - h-screen bg - zion - blue py - 12 px - 4">;
        <div className="container mx - auto">;
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;
            {/* Left Column - Images */}
            <div className="lg:col - span - 2">;
              <div className="bg - zion - blue - dark rounded - lg overflow - hidden border border - zion - blue - light">;
                <div className="aspect-[16 / 9] w - full relative">;
                  {listing.images && listing.images.length > 0 ? (
                    <img;
                      src={listing.images[selectedImageIndex]}
                      alt={listing.title}
                      className="w - full h - full object - cover";
                      on_error={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />) : (
                    <div className="w - full h - full flex items - center justify - center bg - zion - blue - light / 20">;
                      <span className="text - zion - slate - light">No image available</span>;
                    </div>)}
                </div>;
                {listing.images && listing.images.length > 1 && (
                  <div className="flex p - 4 gap - 2 overflow - x-auto">;
                    {listing.images.map ((image, index) => (
                      <div;
                        key={index}
                        on_click={() => setSelectedImageIndex (index)}
                        className={cn (
                          "w - 20 h - 20 flex - shrink - 0 cursor - pointer rounded overflow - hidden border - 2";
                          index === selectedImageIndex ? "border - zion - purple" : "border - transparent")}
                      >;
                        <img;
                          src={image}
                          alt={`${listing.title} - image ${index + 1}`}
                          className="w - full h - full object - cover";
                          on_error={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder.svg";
                          }}
                        />;
                      </div>))}
                  </div>)}
              </div>;
              {/* Description Section */}
              <div className="mt - 8 bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light">;
                <h2 className="text - 2xl font - bold text - white mb - 4">Description</h2>;
                <p className="text - zion - slate - light whitespace - pre - line">{listing.description}</p>;
                {/* Features */}
                <div className="mt - 8">;
                  <h3 className="text - xl font - bold text - white mb - 4">Key Features</h3>;
                  <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
                    <div className="flex items - start gap - 3">;
                      <div className="p - 2 rounded - full bg - zion - purple / 20">;
                        <Brain className="h - 5 w - 5 text - zion - purple" />;
                      </div>;
                      <div>;
                        <h4 className="font - medium text - white">Advanced AI</h4>;
                        <p className="text - sm text - zion - slate - light">State - of - the - art machine learning techniques</p>;
                      </div>;
                    </div>;
                    <div className="flex items - start gap - 3">;
                      <div className="p - 2 rounded - full bg - zion - cyan / 20">;
                        <Shield className="h - 5 w - 5 text - zion - cyan" />;
                      </div>;
                      <div>;
                        <h4 className="font - medium text - white">Enterprise Security</h4>;
                        <p className="text - sm text - zion - slate - light">Built - in data protection and encryption</p>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
                {/* Tags */}
                <div className="mt - 8">;
                  <h3 className="text - xl font - bold text - white mb - 4">Tags</h3>;
                  <div className="flex flex - wrap gap - 2">;
                    {listing.tags.map ((tag, i) => (
                      <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light py - 1 px - 3">;
                        {tag}
                      </Badge>))}
                  </div>;
                </div>;
              </div>;
            </div>;
            {/* Right Column - Details */}
            <div className="lg:col - span - 1">;
              <div className="bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light sticky top - 6">;
                <div className="mb - 2">;
                  <Badge variant="secondary" className="bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30">;
                    {listing.category}
                  </Badge>;
                  {listing.featured && (
                    <Badge className="ml - 2 bg - zion - cyan / 20 text - zion - cyan">;
                      Featured;
                    </Badge>)}
                </div>;
                <h1 className="text - 2xl font - bold text - white mb - 4">{listing.title}</h1>;
                {listing.rating && (
                  <div className="flex items - center gap - 2 mb - 6">;
                    <div className="flex items - center">;
                      {[...Array (5)].map ((_, i) => (
                        <Star;
                          key={i}
                          className={cn (
                            "h - 5 w - 5";
                            i < Math.floor (listing.rating!) ? "text - zion - cyan fill - zion - cyan" : "text - zion - slate - light")}
                        />))}
                    </div>;
                    <span className="text - sm text - zion - slate - light">;
                      {listing.rating.to_fixed (1)} ({listing.review_count} reviews);
                    </span>;
                  </div>)}
                {/* Price */}
                <div className="mb - 6">;
                  {listing.price !== null ? (
                    <div className="text - 3xl font - bold text - white">;
                      {listing.currency}{listing.price.toLocaleString ()}
                    </div>) : (
                    <div className="text - 2xl font - bold text - white">;
                      Custom Pricing;
                    </div>)}
                </div>;
                {/* Action Buttons */}
                <div className="space - y-3 mb - 8">;
                  {listing.price !== null ? (
                    <PaymentButton;
                      amount={listing.price}
                      service_id={listing.id}
                      provider_id={listing.author.id}
                      button_text="Buy Now";
                      className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6";
                      onPaymentInitiated={() => {
                        toast ({
                          title: "Payment Processing",
                          description: "Redirecting to secure checkout...";
                        });
                      }}
                    />) : (
                    <Button;
                      on_click={handle_contact}
                      disabled={is_loading}
                      className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6";
                    >;
                      {is_loading ? "Processing..." : "Request Quote"}
                    </Button>)}
                  <Button;
                    variant="outline";
                    on_click={handle_contact}
                    disabled={is_loading}
                    className="w - full border - zion - purple text - zion - cyan hover:bg - zion - purple / 10";
                  >;
                    <MessageSquare className="h - 4 w - 4 mr - 2" />;
                    Contact Publisher;
                  </Button>;
                </div>;
                {/* Publisher Info */}
                <div className="border - t border - zion - blue - light pt - 6">;
                  <h3 className="text - lg font - bold text - white mb - 3">Publisher</h3>;
                  <div className="flex items - center gap - 3">;
                    {listing.author.avatar_url ? (
                      <img;
                        src={listing.author.avatar_url}
                        alt={listing.author.name}
                        className="h - 12 w - 12 rounded - full";
                        on_error={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https: //ui - avatars.com / api/?name=" + encodeURIComponent (listing.author.name);
                        }}
                      />) : (
                      <div className="h - 12 w - 12 rounded - full bg - zion - purple / 20 flex items - center justify - center">;
                        <span className="text - lg font - medium text - zion - purple">{listing.author.name.char_at (0)}</span>;
                      </div>)}
                    <div>;
                      <p className="font - medium text - white">{listing.author.name}</p>;
                      <p className="text - xs text - zion - slate - light">Member since 2022</p>;
                    </div>;
                  </div>;
                </div>;
                {/* Additional Info */}
                <div className="border - t border - zion - blue - light mt - 6 pt - 6">;
                  <div className="flex justify - between mb - 2">;
                    <span className="text - zion - slate - light">Listed on</span>;
                    <span className="text - white">{new Date (listing.created_at).toLocaleDateString ()}</span>;
                  </div>;
                  <div className="flex justify - between mb - 2">;
                    <span className="text - zion - slate - light">ID</span>;
                    <span className="text - white">{listing.id}</span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </AppLayout>);
;
      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>;
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">;
          <DialogHeader>;
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>;
          </DialogHeader>;
          <ProfileContact;
            email={listing.author.email} // TypeScript now knows this might be undefined;
            profileName={listing.author.name}
            profileType="service";
          />;
        </DialogContent>;
      </Dialog>;
    </AppLayout>;
}w-full h-full flex items-center justify-center bg-zion-blue-light/20"> <span className=" text-zion-slate-light">No image available</span> </div>) 
}</div> 
}
}
}</div>) 
}</div> </div> <div> <h4 className=" font-medium text-white">Advanced AI</h4> <p className=" text-sm text-zion-slate-light">State-of-the-art machine learning techniques</p> </div> </div> <div className=" flex items-start gap-3"> <div className=" p-2 rounded-full bg-zion-cyan/20"> <Shield className=" h-5 w-5 text-zion-cyan"/> </div> <div> <h4 className=" font-medium text-white">Enterprise Security</h4> <p className=" text-sm text-zion-slate-light">Built-in data protection and encryption</p> </div> </div> </div> </div> </Badge>) ) 
}</div> </div> </div> </div> Featured </Badge>) 
}</div>) 
}/>) ) 
}</div> </span> </div>) 
}</div>) : (<div className=" text-2xl font-bold text-white"> Custom Pricing </div>) 
}</div> 
}
}/>) : (<Button </Button>) 
}<Button > <MessageSquare className=" h-4 w-4 mr-2"/> Contact Publisher </Button> </div> 
}
}/>) : (<div className=" h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center"> <span className=" text-lg font-medium text-zion-purple"> {
  listing.author.name.charAt (0) 
}</span> </div>) 
}<div> <p className=" font-medium text-white"> {
  listing.author.name 
}</p> <p className=" text-xs text-zion-slate-light">Member since 2022</p> text-xl font-bold text-white" >Contact Publisher</DialogTitle> </DialogHeader> <ProfileContact /> </DialogContent> </Dialog> </AppLayout>) 
}
  );
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>;
        <DialogContent className="bg - zion - blue - dark border border - zion - blue - light text - white sm:max - w-md">;
          <DialogHeader>;
            <DialogTitle className="text - xl font - bold text - white">Contact Publisher</DialogTitle>;
          </DialogHeader>;
          <ProfileContact;
            email={listing.author.email} // TypeScript now knows this might be undefined;
            profile_name={listing.author.name}
            profile_type="service";
          />;
        </DialogContent>;
      </Dialog>;
    </AppLayout>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
