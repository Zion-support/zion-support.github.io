
<<<<<<< HEAD
<<<<<<< HEAD
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
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
  
  const handleMatchSelect = (match: MatchResult) => {
    // Get the item type from the category
    let itemType = "service",
    const category = match.item.category.toLowerCase(),
    
    if (category.includes("talent") || category === "engineering" || 
        category === "data science" || category === "development") {
<<<<<<< HEAD



=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }

  },
  
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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

import { useState } from "react",;
import { useNavigate } from "react-router-dom",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { GradientHeading } from "@/components/GradientHeading",;
import { AIMatchmaker } from "@/components/AIMatchmaker",;
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",;
import { toast } from "@/hooks/use-toast",;
import { MatchResult } from "@/lib/ai-matchmaking",;
;
export default function AIMatcherPage() {;
  const navigate = useNavigate(),;
  const [selectedCategory, setSelectedCategory] = useState<string>("all"),;
  ;
  const handleMatchSelect = (match:MatchResult) => {;
    // Get the item type from the category;
    let itemType = "service",;
    const category = match.item.category.toLowerCase(),;
    ;
    if (category.includes("talent") || category === "engineering" || ;
        category === "data science" || category === "development") {;
      itemType = "talent";
    } else if (category.includes("equipment") || category === "hardware") {;
      itemType = "equipment",;
    }
    ;
    toast({;
      title:"Match Selected",;
      description:`You've selected ${match.item.title}`}),;
    ;
    // Navigate to the quote request page with the selected item;
    navigate("/request-quote", {;
      state:{ ;
        serviceType:itemType,;
        specificItem:match.item;
      }
    }),;
  },;
  ;
  return (;
export default function AIMatcherPage() {;
  const navigate = useNavigate(),;
  const [selectedCategory, setSelectedCategory] = useState<string>("all"),;
  const handleMatchSelect = (match: MatchResult) => {;
    // Get the item type from the category;
    let itemType = "service",;
    const category = match.item.category.toLowerCase(),;
    if (category.includes("talent") || category === "engineering" ||;
        category === "data science" || category === "development") {;
      itemType = "talent";
    } else if (category.includes("equipment") || category === "hardware") {;
      itemType = "equipment";
    }
;
    toast({;
      title: "Match Selected",;
      description: `You've selected ${match.item.title}`}),;
    // Navigate to the quote request page with the selected item;
    navigate("/request-quote", {;
      state: {;
        serviceType: itemType;
        specificItem: match.item;
      }
    });
  };
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
          ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

            <AIMatchmaker
<<<<<<< HEAD

            
            <AIMatchmaker 
=======
=======

            
            <AIMatchmaker 
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <AIMatchmaker 


              serviceType={selectedCategory === "all" ? "" : selectedCategory}
              onMatchSelect={handleMatchSelect}
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState } from './react';
import { use_navigate } from './react-router-dom';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { GradientHeading } from '@/components / GradientHeading';
import { AIMatchmaker } from '@/components / AIMatchmaker';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components / ui / select';
import { toast } from '@/hooks / use - toast';
import { MatchResult } from '@/lib / ai - matchmaking';
export default /**
 * AIMatcherPage - Function description
 */
function AIMatcherPage() {
  const navigate = use_navigate ();
  const [selected_category, setSelectedCategory] = useState < string>("all");
;
  const handleMatchSelect = (match: MatchResult) =>: any {
    // Get the item type from the category;
    let item_type = "service";
    const category = match.item.category.toLowerCase (),
    // Check condition
if (|| category === "engineering" ||) {
  $2
}
        category === "data science" || category === "development") {
      item_type = "talent";
    } else // Check condition
if (|| category === "hardware") {) {
  $2
}
      item_type = "equipment";
    }
    toast ({
      title: "Match Selected",
      description: `You've selected ${match.item.title}`}),
    // Navigate to the quote request page with the selected item;
    navigate ("/request - quote", {
      state: {
        service_type: item_type,
        specific_item: match.item;
      }
    });
  }
;
  return (
    <>;
      <Header />;
      <div className="min - h-screen bg - zion - blue py - 12 px - 4">;
        <div className="container mx - auto">;
          <div className="text - center mb - 12">;
            <GradientHeading > AI Matchmaker</GradientHeading>;
            <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto">;
              Describe your needs and our AI will match you with the perfect services, talents, or equipment.;
            </p>;
          </div>;
          <div className="max - w-4xl mx - auto">;
            <div className="mb - 8">;
              <label className="block text - sm font - medium text - zion - slate - light mb - 2">;
                I'm looking for:;
              </label>;
              <Select value={selected_category} onValueChange={setSelectedCategory}>;
                <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white">;
                  <SelectValue placeholder="All Categories" />;
                </SelectTrigger>;
                <SelectContent className="bg - zion - blue - dark border border - zion - blue - light">;
                  <SelectItem value="all" className="text - white">All Categories</SelectItem>;
                  <SelectItem value="service" className="text - white">Services</SelectItem>;
                  <SelectItem value="talent" className="text - white">Talent</SelectItem>;
                  <SelectItem value="equipment" className="text - white">Equipment</SelectItem>;
                </SelectContent>;
              </Select>;
            </div>;
            <AIMatchmaker;
              service_type={selected_category === "all" ? "" : selected_category}
              onMatchSelect={handleMatchSelect}
<<<<<<< HEAD
<<<<<<< HEAD
            ;
            <AIMatchmaker ;
              serviceType={selectedCategory === "all" ? "" :selectedCategory}
              onMatchSelect={handleMatchSelect}
            <AIMatchmaker;
              serviceType={selectedCategory === "all" ? "" : selectedCategory}
              onMatchSelect={handleMatchSelect}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />;
          </div>;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD
    </>;
  ),; const handleMatchSelect = (match: MatchResult) => {
  //Get the item type from the category //Navigate to the quote request page with the selected item navigate ("/request-quote", {
  state: {
  serviceType: itemType;
specificItem: match.item 
}


}) 
};
min-h-screen bg-zion-blue py-12 px-4"> <div className=" container mx-auto"> <div className=" text-center mb-12"> <GradientHeading>AI Matchmaker</GradientHeading> <p className=" mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto"> Describe your needs and our AI will match you with the perfect services, talents, or equipment. </p> </div> <div className=" max-w-4xl mx-auto"> <div className=" mb-8"> <label className=" block text-sm font-medium text-zion-slate-light mb-2"> I'm looking for: </label> </SelectTrigger> <SelectContent className=" bg-zion-blue-dark border border-zion-blue-light"> <SelectItem value=" all"className=" text-white">All Categories</SelectItem> <SelectItem value=" service"className=" text-white">Services</SelectItem> <SelectItem value=" talent"className=" text-white">Talent</SelectItem> <SelectItem value=" equipment"className=" text-white" >Equipment</SelectItem> </SelectContent> </Select> </div> <AIMatchmaker /> </div> </div> </div> <Footer /> </>) 
}
    </>;
  );
}
;
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </>);
}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
