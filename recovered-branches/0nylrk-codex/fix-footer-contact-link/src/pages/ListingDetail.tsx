<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx

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

  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
export default function ListingDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
=======
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { id } = useParams() as { id?: string };
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { id } = useParams() as { id?: string }
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  // Find the listing from our shared data source - now also checking equipment listings
=======
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",

export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { id } = useParams() as { id?: string },
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),
  const [isLoading, setIsLoading] = useState(false),
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD

=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
<<<<<<< HEAD
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder.svg"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
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

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.find(item => item && item.id === id);
  if (!listing) {;
    return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),;
  if (!listing) {;
    return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx


  const handleContact = () => {;
    setIsContactDialogOpen(true);
  };


========
  const handleContact = () => {;
    setIsContactDialogOpen(true);
  };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
  return (
=======
    ),;
  }
;
  const handleContact = () => {;
    setIsContactDialogOpen(true),;
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
    );
  }
;
  const handleContact = () => {;
    setIsContactDialogOpen(true);
  },;
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <AppLayout>;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            {/* Left Column - Images */}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
            <div className="lg:col-span-2">;
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">;
                <div className="aspect-[16/9] w-full relative">;
<<<<<<< HEAD
                  {listing && listing.images && listing && listing.images.length > 0 ? (;
                    <img
                      src={listing && listing.images[selectedImageIndex]} 
                      alt={listing && listing.title} 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
                      className="w-full h-full object-cover"
                      onError={(e) => {;
                        const target = e && e.target as HTMLImageElement;
                        target && target.src = "/placeholder && placeholder.svg";
                      }}
                    />;
                  ) : (;
=======
                  {listing.images && listing.images.length > 0 ? (;
                    <img ;
=======
            <div className="lg:col-span-2">;
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">;
                <div className="aspect-[16/9] w-full relative">;
                  {listing.images && listing.images.length > 0 ? (;
                    <img;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      src={listing.images[selectedImageIndex]} ;
                      alt={listing.title} ;
                      className="w-full h-full object-cover";
                      onError={(e) => {;
                        const target = e.target as HTMLImageElement,;
<<<<<<< HEAD
                        target.src = "/placeholder.svg",;
                      }}
                    />;
                  ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                        target.src = "/placeholder.svg";
                      }}
                    />;
                  ) : (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div className="w-full h-full flex items-center justify-center bg-zion-blue-light/20">;
                      <span className="text-zion-slate-light">No image available</span>;
                    </div>;
                  )}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
                </div>;
<<<<<<< HEAD
                {listing && listing.images && listing && listing.images.length > 1 && (;
                  <div className="flex p-4 gap-2 overflow-x-auto">;
                    {listing && listing.images.map((image, index) => (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
                      <div
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={cn(;
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2";
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent";
                        )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
                      >;
                        <img
                          src={image} 
                          alt={`${listing && listing.title} - image ${index + 1}`} 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
                          className="w-full h-full object-cover"
                          onError={(e) => {;
                            const target = e && e.target as HTMLImageElement;
                            target && target.src = "/placeholder && placeholder.svg";
=======
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      >;
                        <img;
                          src={image} ;
                          alt={`${listing.title} - image ${index + 1}`} ;
                          className="w-full h-full object-cover";
                          onError={(e) => {;
                            const target = e.target as HTMLImageElement,;
                            target.src = "/placeholder.svg";
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                          }}
                        />;
                      </div>;
                    ))}
                  </div>;
                )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>
              {/* Description Section */}
              <div className="mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
                <p className="text-zion-slate-light whitespace-pre-line">{listing.description}</p>
<<<<<<< HEAD

=======


                


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
                
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
              </div>;
              {/* Description Section */}
              <div className="mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">;
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>;
                <p className="text-zion-slate-light whitespace-pre-line">{listing && listing.description}</p>;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
=======
                ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {/* Tags */}
                <div className="mt-8">;
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>;
                  <div className="flex flex-wrap gap-2">;
<<<<<<< HEAD
                    {listing && listing.tags.map((tag, i) => (;
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">;
                        {tag}
                      </Badge>;
                    ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx

========
=======
                    {listing.tags.map((tag, i) => (;
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">;
                        {tag}
                      </Badge>;                    ))}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
                  </div>;
                </div>;
              </div>;
            </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx


========
<<<<<<< HEAD
=======
            ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
            {/* Right Column - Details */}
            <div className="lg:col-span-1">;
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">;
                <div className="mb-2">;
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">;
<<<<<<< HEAD
                    {listing && listing.category}
                  </Badge>;
                  {listing && listing.featured && (;
=======
                    {listing.category}
                  </Badge>;
                  {listing.featured && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">;
                      Featured;
                    </Badge>;
                  )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
                </div>;
<<<<<<< HEAD
                <h1 className="text-2xl font-bold text-white mb-4">{listing && listing.title}</h1>;
                {listing && listing.rating && (;
                  <div className="flex items-center gap-2 mb-6">;
                    <div className="flex items-center">;
                      {[...Array(5)].map((_, i) => (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx

                        <Star
                          key={i}
                          className={cn(

<<<<<<< HEAD
=======

                            "h-5 w-5",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
                        <Star
                          key={i}
                          className={cn(
                            "h-5 w-5"
                            i < Math && Math.floor(listing && listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
                          )}
                        />;
                      ))}
                    </div>;
                    <span className="text-sm text-zion-slate-light">;
<<<<<<< HEAD
                      {listing && listing.rating.toFixed(1)} ({listing && listing.reviewCount} reviews);
                    </span>;
                  </div>;
                )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx



========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx

                </div>;


========
                </div>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
                {/* Action Buttons */}
                <div className="space-y-3 mb-8">;
                  {listing && listing.price !== null ? (;
                    <PaymentButton
                      amount={listing && listing.price}
                      serviceId={listing && listing.id}
                      providerId={listing && listing.author.id}
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
                            "h-5 w-5";
=======
                            "h-5 w-5",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      onPaymentInitiated={() => {
                        toast({
                          title: "Payment Processing"
                          description: "Redirecting to secure checkout..."
                        })
<<<<<<< HEAD

=======


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      }}
                    />
                  ) : (
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
                      onPaymentInitiated={() => {;
                        toast({;
                          title: "Payment Processing",;
                          description: "Redirecting to secure checkout...";
                        });
                      }}
                    />;
                  ) : (;
                    <Button
                      onClick={handleContact}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6">;
                      {isLoading ? "Processing..." : "Request Quote"}
                    </Button>;
                  )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx


                          const target = e.target as HTMLImageElement,


                          target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
                  <Button
                    variant="outline" 
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    <MessageSquare className="h-4 w-4 mr-2" />;
                    Contact Publisher;
                  </Button>;
                </div>;
<<<<<<< HEAD
=======
                ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {/* Publisher Info */}
                <div className="border-t border-zion-blue-light pt-6">;
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>;
                  <div className="flex items-center gap-3">;
<<<<<<< HEAD
                    {listing && listing.author.avatarUrl ? (;
                      <img
                        src={listing && listing.author.avatarUrl} 
                        alt={listing && listing.author.name} 
                        className="h-12 w-12 rounded-full"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
<<<<<<< HEAD
                        onError={(e) => {

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
                          const target = e.target as HTMLImageElement;

=======
                          const target = e.target as HTMLImageElement,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
                        onError={(e) => {;
                          const target = e && e.target as HTMLImageElement;
                          target && target.src = "https: //ui-avatars && avatars.com/api/?name=" + encodeURIComponent(listing && listing.author.name);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
========
                        onError={(e) => {;
                          const target = e && e.target as HTMLImageElement;
                          target && target.src = "https: //ui-avatars && avatars.com/api/?name=" + encodeURIComponent(listing && listing.author.name);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
                        }}
                      />;
                    ) : (;
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">;
                        <span className="text-lg font-medium text-zion-purple">{listing && listing.author.name && name.charAt(0)}</span>;
                      </div>;
                    )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx

=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
                    <div>;
                      <p className="font-medium text-white">{listing && listing.author.name}</p>;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                    <div>;
                      <p className="font-medium text-white">{listing.author.name}</p>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>;
                    </div>;
                  </div>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
                ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6">;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">Listed on</span>;
<<<<<<< HEAD
<<<<<<< HEAD
                    <span className="text-white">{new Date(listing && listing.createdAt).toLocaleDateString()}</span>;
                  </div>;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">ID</span>;
                    <span className="text-white">{listing && listing.id}</span>;
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
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span>;
                  </div>;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">ID</span>;
                    <span className="text-white">{listing.id}</span>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
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
<<<<<<< HEAD
    </AppLayout>;
  );

}
;

=======
    </AppLayout>);
=======
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>;
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">;
          <DialogHeader>;
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>;
          </DialogHeader>;
<<<<<<< HEAD
          <ProfileContact ;
=======
          <ProfileContact;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            email={listing.author.email} // TypeScript now knows this might be undefined;
            profileName={listing.author.name}
            profileType="service";
          />;
        </DialogContent>;
      </Dialog>;
    </AppLayout>;
<<<<<<< HEAD
  ),; //useParams may be untyped in this environment, so avoid passing a //type argument and cast the result instead to prevent TS2347 errors. if (!listing) {
  return (<AppLayout> <div className="min-h-screen bg-zion-blue py-12 px-4" > <div className="container mx-auto" > <div className="text-center py-20" > <h1 className="text-3xl font-bold text-white mb-4" >Listing Not Found</h1> <p className="text-zion-slate-light mb-8" >The listing you're looking for doesn't exist or has been removed.</p> <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark" > <a href="/marketplace" >Back to Marketplace</Link> </Button> </div> </div> </div> </AppLayout> 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ListingDetail.tsx
=======
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
