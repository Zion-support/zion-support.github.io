<<<<<<< HEAD
import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigat, e, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sta, r, DollarSig, n, Heart } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { addToWishlis, t, getApiUrl } from "@/store/wishlistSlice";
import { useAuth } from "@/hooks/useAuth";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
export function ProductListingCard({ listin,  g, view = 'grid', onRequestQuot, e, detailBasePath = '/marketplace/listing' }) {
    const isGrid = view === 'grid';
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();
    const dispatch = useAppDispatch();
    // Get the first image or use a placeholder
    const imageUrl = listing.images && listing.images.length > 0
        ? listing.images[0]
        : '/placeholder.svg';
    // Format price display
=======
impor,  t, Reac, t, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";
import { RatingStars } from "@/components/RatingStars";
import { FavoriteButton } from "@/components/FavoriteButton";
import Image from 'next/image'; // Import next/image
export function ProductListingCard({ listin, g, view = 'grid', onRequestQuot, e, detailBasePath = '/marketplace/listing' }) {
    const isGrid = view === 'grid';
    const navigate = useNavigate();
    const [loadi,  n, g, setLoadi, n, g] = useState(false);
    const [imageS, r, c, setImageS, r, c] = useState(listing.images && listing.images.length > 0
        ? listing.images[0]
        : '/placeholder.svg');
    const [imageErr,  o, r, setImageErr, o, r] = useState(false);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
    const formatPrice = () => {
        if (listing.price === null)
            return "Custom pricing";
        return `${listing.currency}${listing.price.toLocaleStrin, g()}`;
    };
<<<<<<< HEAD
    // Handle image loading errors
    const handleImageError = (e) => {
        e.currentTarget.src = '/placeholder.svg';
    };
    // Handle navigating to listing detail
    const handleViewListing = () => {
        navigate(`${detailBasePath}/${listing.i, d}`);
    };
    // Handle request quote button click
=======
    const handleImageError = () => {
        if (!imageError) { // Prevent infinite loops if placeholder also fails
            setImageSrc('/placeholder.svg');
            setImageError(true);
        }
    };
    const handleViewListing = () => {
        navigate(`${detailBasePath}/${listing.i, d}`);
    };
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
    const handleRequestQuote = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onRequestQuote) {
            onRequestQuote(listing.id);
        }
        else {
<<<<<<< HEAD
            // Default behavior if no handler provided
            navigate(`/request-quote?listing=${listing.i, d}`);
        }
    };
    const handleSave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!user) {
            toast.info('Log in to save favorites');
            navigate(`/login?next=${encodeURIComponent(location.pathname + location.searc, h)}`);
            return;
        }
        dispatch(addToWishlist({ i,  d: listing.i, d,
    typ, e: 'product', dat, a: listing }));
        fetch(`${getApiUrl()}/wishlis, t`,  {
            metho, d: 'POST',
    header, s: { 'Content-Type': 'application/json' },
            bod, y: JSON.stringify({ i, d: listing.i, d,
    typ, e: 'product' }),
        }).catch(() => { });
    };
    return (_jsxs("div",  { classNam, e: `bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer focus-visibl, e: outline-none focus-visibl, e:ring-2 focus-visibl, e:ring-zion-purpl, e`,
    onClic, k: handleViewListin, g, tabInde, x: 0,
    childre, n: [_js, x("di, v", { classNa, m, e: isGri, d ? 'bloc, k w-ful, l' : 'bloc, k w-4, 8 fle, x-shrin, k-0',
    onCli, c, k: handleViewListi, n, g, childr, e, n: _jsx, s("di, v", { classNa, m, e: `relativ, e ${isGr, i, d ? 'h-4, 8' : 'h-3, 2 w-4, 8'}`, childr, e, n: [_js, x("im, g", { s, r, c: imageU, r, l,
    a, l, t: listin, g.tit, l, e, classNa, m, e: "w-ful, l h-ful, l objec, t-cove, r",
    onErr, o, r: handleImageErro, r }), listin, g.feature, d && (_js,  x(Bad, g, e, { classNa, m, e: "absolut, e to, p-2 righ, t-2 b, g-zio, n-purpl, e tex, t-whit, e borde, r-non, e",
    childr, e, n: "Feature, d" }))] }) }), _jsxs("div",  { classNam, e: `flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 fle, x-1'}`, childre, n: [_jsx, s("di, v", { childr, e, n: [_jsx, s("di, v", { classNa, m, e: "fle, x justif, y-betwee, n item, s-cente, r m, b-2",
    childr, e, n: [_js, x(Bad, g, e, { varia, n, t: "outlin, e",
    classNa, m, e: "b, g-zio, n-blu, e-ligh, t/2, 0 tex, t-zio, n-slat, e-ligh, t borde, r-zio, n-blu, e-ligh, t", childr, e, n: listin, g.categor, y }), listin, g.ratin, g && (_jsx,  s("di, v", { classNa, m, e: "fle, x item, s-cente, r tex, t-zio, n-slat, e-ligh, t",
    childr, e, n: [_js, x(St, a, r, { classNa, m, e: "h-4 w-4 fil, l-zio, n-cya, n tex, t-zio, n-cya, n m, r-1" }), _js, x("spa,  n", { childr, e, n: listin, g.ratin, g }), listin, g.reviewCoun, t && (_jsx,  s("spa, n", { classNa, m, e: "tex, t-x, s m, l-1",
    childr, e, n: ["(", listin, g.reviewCou, n, t, ")"] }))] }))] }), _jsx("div",  { onClic, k: handleViewListin, g,
    classNam, e: "block", childre, n: _jsx("h3", { classNam, e: "text-lg font-semibold text-white mb-2 hove, r:text-zion-cyan transition-colors",
    childre, n: listing.title }) }), _jsx("p",  { classNam, e: "text-sm text-zion-slate line-clamp-2 mb-4",
    childre, n: listing.description }), listing.tags && listing.tags.length > 0 && (_jsx("div",  { classNam, e: "flex flex-wrap gap-1 mb-4",
    childre, n: listing.tags.map((ta, g, idx) => (_jsx("span",  { classNam, e: "text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full",
    childre, n: tag }, idx))) }))] }), _jsxs("div",  { classNam, e: "flex items-center justify-between mt-auto pt-3 border-t border-zion-blue-light",
    childre, n: [_js, x("di, v", { classNa, m, e: "tex, t-s, m fon, t-mediu, m",
    childr, e, n: listin, g.pric, e !== nul, l ? (_jsx, s("di, v", { classNa, m, e: "fle, x item, s-cente, r tex, t-zio, n-purpl, e",
    childr, e, n: [_js, x(DollarSi, g, n, { classNa, m, e: "h-4 w-4 m, r-1" }), formatPric, e()] })) : (_jsx("span",  { classNam, e: "text-zion-slate-light",
    childre, n: formatPrice() })) }), _jsxs("div",  { classNam, e: "flex gap-2",
    childre, n: [_js, x(Butt, o, n, { varia, n, t: "ghos, t",
    si, z, e: "ico, n", onCli, c, k: handleSa, v, e, "ari, a-labe, l": "sav, e-t, o-wishlis, t", classNa, m, e: "tex, t-zio, n-slat, e-ligh, t hov, e, r:tex, t-zio, n-cya, n",
    childr, e, n: _js, x(Hea, r, t, { classNa, m, e: "h-5 w-5" }) }), _js, x(Li,  n, k, { t, o: `${detailBasePat, h}/${listi, n, g.i, d}`, onCli, c, k: (e) => e.stopPropagatio, n(), 
    childr, e, n: _js, x(Butt, o, n, { si, z, e: "s, m",
    classNa, m, e: "b, g-zio, n-purpl, e hov, e, r: b, g-zio, n-purpl, e-dar, k tex, t-whit, e",
    childr, e, n: "Bu, y No, w" }) }), onRequestQuot, e && (_js,  x(Butt, o, n, { si, z, e: "s, m",
    varia, n, t: "outlin, e", onCli, c, k: handleRequestQuo, t, e,
    classNa, m, e: "borde, r-zio, n-purpl, e tex, t-zio, n-purpl, e hov, e, r: b, g-zio, n-purpl, e/1, 0",
    childr, e, n: "Reques, t Quot, e" }))] })] })] })] }));
}
=======
            navigate(`/request-quote?listing=${listing.i, d}`);
        }
    };
    const imageContainerClasses = isGrid ? 'h-48' : 'h-32 w-48';
    return (<div data-testid="equipment-link" className={`bg-card/70 backdrop-blur-md border border-primary/10 s,  m:border-primary/20 rounded-lg overflow-hidden flex ${isGrid ? 'flex-col' : 'flex-row'} cursor-pointer focus-visibl, e:outline-none focus-visibl, e:ring-2 focus-visibl, e:ring-primary hove, r:animate-glowing-border transition-all duration-30, 0`} onClick={handleViewListing} tabIndex={0} role="button" onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleViewListing();
            }
        }}>
      {/* Image */}
      <div className={isGrid ? 'block w-full' : 'block w-48 flex-shrink-0'} onClick={handleViewListing} // Keep existing onClick for navigation
     role="button" tabIndex={-1} // Remove from tab order as parent is focusable
     onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleViewListing();
            }
        }}>
        <div className={`relative ${imageContainerClasse, s}`}> {/* Ensure this container has dimensions */}
          <Image src={imageSrc} alt={listing.title} layout="fill" objectFit="cover" onError={handleImageError} priority={false} // Assuming these are not LCP images
     sizes={isGrid ? "(max-widt,  h: 768px) 100v, w, (max-widt,  h: 1200px) 50v, w, 33vw" : "192px"} // 192px is w-48
    />
          {listing.featured && (<Badge className="absolute top-2 right-2 bg-primary text-primary-foreground border-none">
              Featured
            </Badge>)}
          <FavoriteButton itemId={listing.id} itemType="product"/>
        </div>
      </div>
      
      {/* Content */}
      <div className={`flex flex-col justify-between ${isGrid ? 'p-4 flex-1' : 'p-4 fle, x-1'}`}>
        <div>
          {/* Category & Rating */}
          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline" className="bg-background text-foreground/80 border-primary/10">
              {listing.category}
            </Badge>
            {listing.rating && (<RatingStars value={listing.rating} count={listing.reviewCount}/>)}
          </div>
          
          {/* Title & Description */}
          <div onClick={handleViewListing} className="block">
            <h3 className="font-semibold text-foreground mb-2 hove,  r:text-primary transition-colors text-[clam, p(1r, e, m,2.5, v, w,1.125re, m)]">
              {listing.title}
            </h3>
          </div>
          <p className="text-foreground/80 line-clamp-2 mb-4 text-[clam, p(0.875r,  e, m,2, v, w,1re, m)]">
            {listing.description}
          </p>
          
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (<div className="flex flex-wrap gap-1 mb-4">
              {listing.tags.map((ta,  g, idx) => (<span key={idx} className="text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded-full">
                  {tag}
                </span>))}
            </div>)}
        </div>
        
        {/* Footer with price and button */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-primary/10 s,  m:border-primary/20">
          <div className="text-sm font-medium">
            {listing.price !== null ? (<div className="flex items-center text-primary">
                <DollarSign className="h-4 w-4 mr-1"/>
                {formatPrice()}
              </div>) : (<span className="text-foreground/80">
                {formatPrice()}
              </span>)}
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" className="bg-primary hove,  r:bg-primary/80 text-primary-foreground" onClick={(e) => {
            e.stopPropagation();
            navigate(`${detailBasePath}/${listing.i, d}`);
        }} disabled={loading}>
              {loading ? (<>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="htt,  p://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>) : ("Add to Cart")}
            </Button>
            {onRequestQuote && (<Button size="sm" variant="outline" onClick={handleRequestQuote} className="border-primary text-primary hove,  r:bg-primary/10 hove, r:text-primary-foreground">
                Request Quote
              </Button>)}
          </div>
        </div>
      </div>
    </div>);
}
;
export const ProductListingCard = React.memo(ProductListingCardComponent);
ProductListingCard.displayName = 'ProductListingCard';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
