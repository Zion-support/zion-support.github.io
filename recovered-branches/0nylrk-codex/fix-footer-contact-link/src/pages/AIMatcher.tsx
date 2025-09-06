
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {GradientHeading} from "@/components/GradientHeading";
import {AIMatchmaker} from "@/components/AIMatchmaker";
import {Select, SelectValue, SelectTrigger, SelectContent, SelectItem} from "@/components/ui/select";
import {toast} from "@/hooks/use-toast";
import {MatchResult} from "@/lib/ai-matchmaking";
export default function AIMatcherPage() {;
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
import { useState } from "react",
import { useNavigate } from "react-router-dom",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { AIMatchmaker } from "@/components/AIMatchmaker",
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",
import { toast } from "@/hooks/use-toast";
import { MatchResult } from "@/lib/ai-matchmaking";
export default function AIMatcherPage() {

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const handleMatchSelect = (match: MatchResult) => {
    // Get the item type from the category
    let itemType = "service";
    const category = match.item.category.toLowerCase()
    if (category.includes("talent") |category === "engineering" |
        category === "data science" |category === "development") {
import { toast } from "@/hooks/use-toast",
import { MatchResult } from "@/lib/ai-matchmaking",
export default function AIMatcherPage() {
  const navigate = useNavigate(),
  const [selectedCategory, setSelectedCategory] = useState<string>("all"),
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const handleMatchSelect = (match: MatchResult) => {
    // Get the item type from the category
    let itemType = "service",
    const category = match.item.category.toLowerCase(),

    if (category.includes("talent") || category === "engineering" ||
        category === "data science" || category === "development") {

      itemType = "talent"
    } else if (category.includes("equipment") |category === "hardware") {
      itemType = "equipment"
    }
    toast({
      title: "Match Selected"
      description: `You've selected ${match.item.title}`})
    // Navigate to the quote request page with the selected item
    navigate("/request-quote", {
      state: {
        serviceType: itemType
        specificItem: match.item
      }
    })

=======
  }

  },
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>AI Matchmaker</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Describe your needs and our AI will match you with the perfect services, talents, or equipment.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                I'm looking for:
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  <SelectItem value="all" className="text-white">All Categories</SelectItem>
                  <SelectItem value="service" className="text-white">Services</SelectItem>
                  <SelectItem value="talent" className="text-white">Talent</SelectItem>
                  <SelectItem value="equipment" className="text-white">Equipment</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <AIMatchmaker
              serviceType={selectedCategory === "all" ? "" : selectedCategory}
              onMatchSelect={handleMatchSelect}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
            
            <AIMatchmaker 
            <AIMatchmaker 
              serviceType={selectedCategory === "all" ? "" : selectedCategory}
import { useState } from "react",;
import { useNavigate } from "react-router-dom",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { GradientHeading } from "@/components/GradientHeading",;
import { AIMatchmaker } from "@/components/AIMatchmaker",;
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",;
import { toast } from "@/hooks/use-toast",;
import { MatchResult } from "@/lib/ai-matchmaking",;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export default function AIMatcherPage() {;
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleMatchSelect = (match: MatchResult) => {;
    // Get the item type from the category;
    let itemType = "service";
    const category = match && match.item.category && category.toLowerCase(),;

    if (category && category.includes("talent") || category === "engineering" || ;
        category === "data science" || category === "development") {;
      itemType = "talent";
    } else if (category && category.includes("equipment") || category === "hardware") {;
      itemType = "equipment";
    }

    toast({;
      title: "Match Selected",;
      description: `You've selected ${match && match.item.title}`}),;

    // Navigate to the quote request page with the selected item;
    navigate("/request-quote", {;
      state: { ;
        serviceType: itemType,;
        specificItem: match && match.item;
      }
    });
  };

  return (
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="text-center mb-12">;
            <GradientHeading>AI Matchmaker</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
              Describe your needs and our AI will match you with the perfect services, talents, or equipment.;
            </p>;
          </div>;

          <div className="max-w-4xl mx-auto">;
            <div className="mb-8">;
              <label className="block text-sm font-medium text-zion-slate-light mb-2">;
                I'm looking for:;
              </label>;
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>;
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                  <SelectValue placeholder="All Categories" />;
                </SelectTrigger>;
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                  <SelectItem value="all" className="text-white">All Categories</SelectItem>;
                  <SelectItem value="service" className="text-white">Services</SelectItem>;
                  <SelectItem value="talent" className="text-white">Talent</SelectItem>;
                  <SelectItem value="equipment" className="text-white">Equipment</SelectItem>;
                </SelectContent>;
              </Select>;
            </div>;
            <AIMatchmaker;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              serviceType={selectedCategory === "all" ? "" : selectedCategory}
              onMatchSelect={handleMatchSelect}
            />;
          </div>;
        </div>;
      </div>;
      <Footer />;

    </>);
}
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
