<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD




=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState } from "react",
import { useNavigate } from "react-router-dom",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { AIMatchmaker } from "@/components/AIMatchmaker",
<<<<<<< HEAD
<<<<<<< HEAD
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientHeading } from "@/components/GradientHeading";
<<<<<<< HEAD
=======
import { useState } from "react";"
import { useNavigate } from "react-router-dom";"
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer";"
import { GradientHeading } from "@/components/GradientHeading";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { AIMatchmaker } from "@/components/AIMatchmaker";
import {}
=======
import { AIMatchmaker } from "@/components/AIMatchmaker";
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
<<<<<<< HEAD
<<<<<<< HEAD
  SelectItem,
} from "@/components/ui/select";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { toast } from "@/hooks/use-toast";
=======
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",import { toast } from "@/hooks/use-toast";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",import { toast } from "@/hooks/use-toast";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  SelectItem,";
} from "@/components/ui/select";"
import { toast } from "@/hooks/use-toast";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  SelectItem,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { MatchResult } from "@/lib/ai-matchmaking";
export default function AIMatcherPage() {};
  const navigate = useNavigate();"
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleMatchSelect = (match: MatchResult) => {}
    // Get the item type from the category"
    let itemType = "service";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    const category = match.item.category.toLowerCase()
    if (category.includes("talent") |category === "engineering" |
        category === "data science" |category === "development") {
import { toast } from "@/hooks/use-toast",
import { MatchResult } from "@/lib/ai-matchmaking",
export default function AIMatcherPage() {
  const navigate = useNavigate(),
  const [selectedCategory, setSelectedCategory] = useState<string>("all"),
<<<<<<< HEAD
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const handleMatchSelect = (match: MatchResult) => {
    // Get the item type from the category
    let itemType = "service",
    const category = match.item.category.toLowerCase(),

    if (category.includes("talent") || category === "engineering" ||
        category === "data science" || category === "development") {
<<<<<<< HEAD

=======
<<<<<<< HEAD



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
  
=======
    const category = match.item.category.toLowerCase();

    if ("
      category.includes("talent") ||"
      category === "engineering" ||"
      category === "data science" ||"
      category === "development"
    ) {"
      itemType = "talent";"
    } else if (category.includes("equipment") || category === "hardware") {"
      itemType = "equipment";
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

    (toast({"
      title: "Match Selected",
      description: `You've selected ${match.item.title}`,
    }),
      // Navigate to the quote request page with the selected item"
      navigate("/request-quote", {}
        state: {}
          serviceType: itemType,
          specificItem: match.item,
        },
      }));
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }

  },
  
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
=======
  
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
    })  return (
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    const category = match.item.category.toLowerCase();

    if (
      category.includes("talent") ||
      category === "engineering" ||
      category === "data science" ||
      category === "development"
    ) {
      itemType = "talent";
    } else if (category.includes("equipment") || category === "hardware") {
      itemType = "equipment";
    }

    (toast({
      title: "Match Selected",
      description: `You've selected ${match.item.title}`,
    }),
      // Navigate to the quote request page with the selected item
      navigate("/request-quote", {
        state: {
          serviceType: itemType,
          specificItem: match.item,
        },
      }));
  };

  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <>
      <Header />"
      <div className="min-h-screen bg-zion-blue py-12 px-4">"
        <div className="container mx-auto">"
          <div className="text-center mb-12">
            <GradientHeading>AI Matchmaker</GradientHeading>"
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Describe your needs and our AI will match you with the perfect;
              services, talents, or equipment.
            </p>
          </div>
"
          <div className="max-w-4xl mx-auto">"
            <div className="mb-8">"
              <label className="block text-sm font-medium text-zion-slate-light mb-2">'
                I'm looking for:
              </label>
              <Select;
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >"
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">"
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>"
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">"
                  <SelectItem value="all" className="text-white">
                    All Categories;
                  </SelectItem>"
                  <SelectItem value="service" className="text-white">
                    Services;
                  </SelectItem>"
                  <SelectItem value="talent" className="text-white">
                    Talent;
                  </SelectItem>"
                  <SelectItem value="equipment" className="text-white">
                    Equipment;
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function AIMatcherPage() {;
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
            <AIMatchmaker
=======


            <AIMatchmaker"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              serviceType={selectedCategory === "all" ? "" : selectedCategory}
              onMatchSelect={handleMatchSelect}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

=======
          ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
            <AIMatchmaker;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

            <AIMatchmaker

            
            <AIMatchmaker 
            <AIMatchmaker 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

              serviceType={selectedCategory === "all" ? "" : selectedCategory}
              onMatchSelect={handleMatchSelect}
<<<<<<< HEAD
=======
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
=======
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
        category === "data science" || category === "development") {
=======
}"
        category === "data science" || category === "development") {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      item_type = "talent";
    } else // Check condition"
if (|| category === "hardware") {) {}
  $2;
}"
      item_type = "equipment";
    }
    toast ({"
      title: "Match Selected",'`
      description: `You've selected ${match.item.title}`}),
    // Navigate to the quote request page with the selected item;"
    navigate ("/request - quote", {}
      state: {}
        service_type: item_type,
        specific_item: match.item;
      }
    });
  }
;
  return (
    <>;
<<<<<<< HEAD
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
<<<<<<< HEAD
                <SelectContent className="bg - zion - blue - dark border border - zion - blue-light">;
                  <SelectItem value="all" className="text-white">All Categories</SelectItem>;
                  <SelectItem value="service" className="text-white">Services</SelectItem>;
                  <SelectItem value="talent" className="text-white">Talent</SelectItem>;
                  <SelectItem value="equipment" className="text-white">Equipment</SelectItem>;
=======
      <Header />;"
      <div className="min - h-screen bg - zion - blue py - 12 px - 4">;"
        <div className="container mx - auto">;"
          <div className="text - center mb - 12">;
            <GradientHeading > AI Matchmaker</GradientHeading>;"
            <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto">;
              Describe your needs and our AI will match you with the perfect services, talents, or equipment.;
            </p>;
          </div>;"
          <div className="max - w-4xl mx - auto">;"
            <div className="mb - 8">;"
              <label className="block text - sm font - medium text - zion - slate - light mb - 2">;'
                I'm looking for:;
              </label>;
              <Select value={selected_category} onValueChange={setSelectedCategory}>;"
                <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white">;"
                  <SelectValue placeholder="All Categories" />;
                </SelectTrigger>;"
                <SelectContent className="bg - zion - blue - dark border border - zion - blue - light">;"
                  <SelectItem value="all" className="text - white">All Categories</SelectItem>;"
                  <SelectItem value="service" className="text - white">Services</SelectItem>;"
                  <SelectItem value="talent" className="text - white">Talent</SelectItem>;"
                  <SelectItem value="equipment" className="text - white">Equipment</SelectItem>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                <SelectContent className="bg - zion - blue - dark border border - zion - blue - light">;
                  <SelectItem value="all" className="text - white">All Categories</SelectItem>;
                  <SelectItem value="service" className="text - white">Services</SelectItem>;
                  <SelectItem value="talent" className="text - white">Talent</SelectItem>;
                  <SelectItem value="equipment" className="text - white">Equipment</SelectItem>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                </SelectContent>;
              </Select>;
            </div>;
            <AIMatchmaker;"
              service_type={selected_category === "all" ? "" : selected_category}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              onMatchSelect={handleMatchSelect}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
              onMatchSelect={handleMatchSelect}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            ;
            <AIMatchmaker ;
              serviceType={selectedCategory === "all" ? "" :selectedCategory}
              onMatchSelect={handleMatchSelect}
            <AIMatchmaker;
              serviceType={selectedCategory === "all" ? "" : selectedCategory}
              onMatchSelect={handleMatchSelect}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            />;
          </div>;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    </>);
}
<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


    </>;
  ),; const handleMatchSelect = (match: MatchResult) => {"
  //Get the item type from the category //Navigate to the quote request page with the selected item navigate ("/request-quote", {}
  state: {}
  serviceType: itemType;
specificItem: match.item;
=======

    </>);
}

    </>;
  ),; const handleMatchSelect = (match: MatchResult) => {
  //Get the item type from the category //Navigate to the quote request page with the selected item navigate ("/request-quote", {
  state: {
  serviceType: itemType;
specificItem: match.item 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}


}) 
<<<<<<< HEAD
};'"
=======
};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
min-h-screen bg-zion-blue py-12 px-4"> <div className=" container mx-auto"> <div className=" text-center mb-12"> <GradientHeading>AI Matchmaker</GradientHeading> <p className=" mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto"> Describe your needs and our AI will match you with the perfect services, talents, or equipment. </p> </div> <div className=" max-w-4xl mx-auto"> <div className=" mb-8"> <label className=" block text-sm font-medium text-zion-slate-light mb-2"> I'm looking for: </label> </SelectTrigger> <SelectContent className=" bg-zion-blue-dark border border-zion-blue-light"> <SelectItem value=" all"className=" text-white">All Categories</SelectItem> <SelectItem value=" service"className=" text-white">Services</SelectItem> <SelectItem value=" talent"className=" text-white">Talent</SelectItem> <SelectItem value=" equipment"className=" text-white" >Equipment</SelectItem> </SelectContent> </Select> </div> <AIMatchmaker /> </div> </div> </div> <Footer /> </>) 
}
    </>;
  );
}
;
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              onMatchSelect={handleMatchSelect}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              onMatchSelect={handleMatchSelect}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
