



import {useParams, Link} from "react-router-dom";""
import {Header} from "@/components/header/Header";""
import {Footer} from "@/components/Footer";""
import {GradientHeading} from "@/components/GradientHeading";""
import {ProductListingCard} from "@/components/ProductListingCard";""
import {useState, useEffect} from "react";""
import {Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase} from "lucide-react";""
import {MARKETPLACE_LISTINGS} from "@/data/listingData";""
import {useNavigate} from "react-router-dom";""
import {toast} from "@/hooks/use-toast";"
export default function CategoryDetail() {
  // Cast to specify the expected route param type since useParams may be untyped;
  const { slug } = useParams() as { slug?: string };
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS);"
import { useParams, Link } from "react-router-dom",""
import { Header } from "@/components/header/Header",""
import { Footer } from "@/components/Footer",""
import { GradientHeading } from "@/components/GradientHeading",""
import { ProductListingCard } from "@/components/ProductListingCard",""
import { useState, useEffect } from "react",""
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from "lucide-react",""
import { MARKETPLACE_LISTINGS } from "@/data/listingData",""
import { useNavigate } from "react-router-dom",""
import { toast } from "@/hooks/use-toast";"
  // Cast to specify the expected route param type since useParams may be untyped;
  const { slug } = useParams() as { slug?: string }
import { toast } from "@/hooks/use-toast","
  // Cast to specify the expected route param type since useParams may be untyped;
  const { slug } = useParams() as { slug?: string },
  const navigate = useNavigate(),
  const [isLoading, setIsLoading] = useState(true),
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS),
  const [category, setCategory] = useState<{title: string, description: string, icon: JSX.Element}>({"
    title: ""","
  description: """"
    icon: <Bot className="w-6 h-6" />"
"
      icon: <Briefcase className="w-6 h-6" />"
      icon: <Brain className="w-6 h-6" />"
      icon: <Code className="w-6 h-6" />"
      icon: <PenLine className="w-6 h-6" />"
      icon: <BarChart className="w-6 h-6" />"
      icon: <Eye className="w-6 h-6" />"
      icon: <Mic className="w-6 h-6" />"

  const [category, setCategory] = useState<{title: string, description: string, icon: JSX && JSX.Element}>({;"
    title: "",;""
    description: "",;""
    icon: <Bot className="w-6 h-6" />;"
      icon: <Briefcase className="w-6 h-6" />;"
      icon: <Brain className="w-6 h-6" />;"
      icon: <Code className="w-6 h-6" />;"
      icon: <PenLine className="w-6 h-6" />;"
      icon: <BarChart className="w-6 h-6" />;"
      icon: <Eye className="w-6 h-6" />;"
      icon: <Mic className="w-6 h-6" />;"

  const [category, setCategory] = useState<{title: string, description: string, icon: JSX.Element}>({;"

  const [category, set_category] = useState<{title: string, description: string, icon: JSX.Element}>({"
    title: "",""
    description: "",""
    icon: <Bot className="w - 6 h - 6" />;"
      icon: <Briefcase className="w - 6 h - 6" />;"
      icon: <Brain className="w - 6 h - 6" />;"
      icon: <Code className="w - 6 h - 6" />;"
      icon: <PenLine className="w - 6 h - 6" />;"
      icon: <BarChart className="w - 6 h - 6" />;"
      icon: <Eye className="w - 6 h - 6" />;"
      icon: <Mic className="w - 6 h - 6" />;"

    <>;
      <Header />;
      <div className="min - h-screen bg - zion - blue">;"
</div>"
        <div className="container mx - auto px - 4 py - 12">;"
          <div className="mb - 4">;"
            <Link to="/categories" className="text - zion - cyan hover:text - zion - cyan - light transition - colors inline - flex items - center">;"

            ;
          </div>;"
          <div className="text - center mb - 12">;"
            <div className="flex justify - center mb - 6">;"
              <div className="text - zion - cyan p - 4 bg - zion - blue - dark rounded - full">;"
</div>
              </div>;
            <GradientHeading className="text - 4xl md:text - 5xl font - bold mb - 4">;"

            ;"
            <p className="text - zion - slate - light text - lg max - w-3xl mx - auto">;"
</p>


                <ProductListingCard;
                  key={listing.id} 


                  listing={listing}
                  onRequestQuote={handleRequestQuote}
                />

      <div className="min-h-screen bg-zion-blue">;"
        <div className="container mx-auto px-4 py-12">;"
          <div className="mb-4">;"
            <Link to="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center">;"

          <div className="text-center mb-12">;"
            <div className="flex justify-center mb-6">;"
              <div className="text-zion-cyan p-4 bg-zion-blue-dark rounded-full">;"
            <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">;"

            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">;"
            </p>;
            <div className="flex justify-center items-center h-64">;"
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-purple"></div>;"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">;"
                  key={listing && listing.id} 
                />;

      <Footer />;

    </>;)
  );
}

              ))}
            <div className="flex justify - center items - center h - 64">;"
              <div className="animate - spin rounded - full h - 12 w - 12 border - t-2 border - b-2 border - zion - purple"></div>;"
            </div>) : ("
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 6">;"
                  onRequestQuote={handleRequestQuote})
                />))}

            </div>)}

    </>);

  ),; export default function CategoryDetail () {
  //Cast to specify the expected route param type since useParams may be untyped const {
  // TODO: Implement
  slug;
}= useParams () as {
  // TODO: Implement
  slug?: string;
};
const navigate = useNavigate ();
const [isLoading, setIsLoading] = useState (true);
const [listings, setListings] = useState (MARKETPLACE LISTINGS);
const [category, setCategory] = useState< {
  title: string, description: string, icon: JSX.Element;
}> ({
  //Map of category slugs to their display data const categoryData = {"
  'services': {
  title: "Services";","
  description: "On-demand IT support, consulting, development, and more";""
return (<> <Header /> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto px-4 py-12" > <div className="mb-4" > <Link to="/categories" className="text-zion-cyan hover:text-zion-cyan-light transition-colors inline-flex items-center" > ← Back to Categories  </div> {"
)
  listings.map ( (listing) => (<ProductListingCard key= {
  listing.id;
}listing= {
  listing;
}onRequestQuote= {
  handleRequestQuote;)
}/>) ) 

}</div>) 
}</div> </div> <Footer /> </>) 