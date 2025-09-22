<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientHeading } from "@/components/GradientHeading";

import { AIMatchmaker } from "@/components/AIMatchmaker";
import {}
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
SelectItem,
} from "@/components/ui/select";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { toast } from "@/hooks/use-toast";
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

}

  },

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

            <AIMatchmaker

            <AIMatchmaker 
            <AIMatchmaker 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

              serviceType={selectedCategory === "all" ? "" : selectedCategory}
              onMatchSelect={handleMatchSelect}

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

import { useState } from "react";""
import { useNavigate } from "react-router-dom";""
import { Header } from "@/components/Header";""
import { Footer } from "@/components/Footer";""
import { GradientHeading } from "@/components/GradientHeading";""
import { AIMatchmaker } from "@/components/AIMatchmaker";"
import {
  // TODO: Implement
}
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,"
} from "@/components/ui/select";""
import { toast } from "@/hooks/use-toast";""
import { MatchResult } from "@/lib/ai-matchmaking";"
export default function AIMatcherPage() {
  const navigate = useNavigate();"
  const [selectedCategory, setSelectedCategory] = useState<string>("all");"
</string>
    <>
      <Header />
"
      <div className="min-h-screen bg-zion-blue py-12 px-4">"
</div>"
        <div className="container mx-auto">"
          <div className="text-center mb-12">"
</div>
            <GradientHeading>AI Matchmaker"
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">"
</p>
          <div className="max-w-4xl mx-auto">"
            <div className="mb-8">"
              <label className="block text-sm font-medium text-zion-slate-light mb-2">"
</label>
              <Select;
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">"
                  <SelectValue placeholder="All Categories" />"

                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">"
                  <SelectItem value="all" className="text-white">"

                  <SelectItem value="service" className="text-white">"

                  <SelectItem value="talent" className="text-white">"

                  <SelectItem value="equipment" className="text-white">"

</SelectValue>
                </SelectTrigger>"
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">"
</SelectContent>"
                  <SelectItem value="all" className="text-white">"
</SelectItem>
                  </SelectItem>"
                  <SelectItem value="service" className="text-white">"
</SelectItem>
                  </SelectItem>"
                  <SelectItem value="talent" className="text-white">"
</SelectItem>
                  </SelectItem>"
                  <SelectItem value="equipment" className="text-white">"
</SelectItem>

                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <AIMatchmaker;"
              serviceType={selectedCategory === "all" ? "" : selectedCategory}"

              onMatchSelect={handleMatchSelect}
            />

      <Footer />

</AIMatchmaker>
          </div>
        </div>
      </div>
      <Footer />
</Footer>
    </>
  );

}"
        category === "data science" || category === "development") {""
      item_type = "talent";"
    } else // Check condition;"
if (|| category === "hardware") {) {"
  $2;
      item_type = "equipment";"
    toast ({"
      title: "Match Selected",")"
      description: `You've selected ${match.item.title}`}),
    // Navigate to the quote request page with the selected item;
    navigate ("/request - quote", {"
      state: {,
  service_type: item_type,
        specific_item: match.item;
      })

    });
pr-12325
;
  return (
    <>;
<Header />;
      <div className="min - h-screen bg - zion - blue py - 12 px-4">;
        <div className="container mx-auto">;
          <div className="text - center mb-12">;
            <GradientHeading > AI Matchmaker</GradientHeading>;
            <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx-auto">;
              Describe your needs and our AI will match you with the perfect services, talents, or equipment.;
            </p>;
          </div>;
          <div className="max - w-4xl mx-auto">;
            <div className="mb-8">;
              <label className="block text - sm font - medium text - zion - slate - light mb-2">;
                I'm looking for:;
              </label>;
              <Select value={selected_category} onValueChange={setSelectedCategory}>;
                <SelectTrigger className="bg - zion - blue border border - zion - blue - light text-white">;
                  <SelectValue placeholder="All Categories" />;
                </SelectTrigger>;
<<<<<<< HEAD
                <SelectContent className="bg - zion - blue - dark border border - zion - blue-light">;
                  <SelectItem value="all" className="text-white">All Categories</SelectItem>;
                  <SelectItem value="service" className="text-white">Services</SelectItem>;
                  <SelectItem value="talent" className="text-white">Talent</SelectItem>;
                  <SelectItem value="equipment" className="text-white">Equipment</SelectItem>;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                </SelectContent>;
              </Select>;
            </div>;
            <AIMatchmaker;"
              service_type={selected_category === "all" ? "" : selected_category}
<<<<<<< HEAD
              onMatchSelect={handleMatchSelect}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            ;
            <AIMatchmaker ;
              serviceType={selectedCategory === "all" ? "" :selectedCategory}
              onMatchSelect={handleMatchSelect}
            <AIMatchmaker;
              serviceType={selectedCategory === "all" ? "" : selectedCategory}
              onMatchSelect={handleMatchSelect}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

</Header>"
      <div className="min - h-screen bg - zion - blue py - 12 px - 4">;"
        <div className="container mx - auto">;"
          <div className="text - center mb - 12">;"
            <GradientHeading > AI Matchmaker;"
            <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto">;"
            </p>;
          </div>;"
          <div className="max - w-4xl mx - auto">;"
            <div className="mb - 8">;"
              <label className="block text - sm font - medium text - zion - slate - light mb - 2">;"
              </label>;
              <Select value={selected_category} onValueChange={setSelectedCategory}>;
                <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white">;"
                  <SelectValue placeholder="All Categories" />;"

                ;"
                <SelectContent className="bg - zion - blue - dark border border - zion - blue - light">;"
                  <SelectItem value="all" className="text - white">All Categories;""
                  <SelectItem value="service" className="text - white">Services;""
                  <SelectItem value="talent" className="text - white">Talent;""
                  <SelectItem value="equipment" className="text - white">Equipment;"
            </div>;
              service_type={selected_category === "all" ? "" : selected_category}"
            <AIMatchmaker ;"
              serviceType={selectedCategory === "all" ? "" :selectedCategory}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            />;

      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD

    </>);
}
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

    </>;
  ),; const handleMatchSelect = (match: MatchResult) => {"
  //Get the item type from the category //Navigate to the quote request page with the selected item navigate ("/request-quote", {}
  state: {}
  serviceType: itemType;
specificItem: match.item;
=======

)
    </>);

    </>;
  ),; const handleMatchSelect = (match: MatchResult) => {"
  //Get the item type from the category //Navigate to the quote request page with the selected item navigate ("/request-quote", {"
  serviceType: itemType;
specificItem: match.item 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

}) 
};'"
min-h-screen bg-zion-blue py-12 px-4"> <div className=" container mx-auto"> <div className=" text-center mb-12"> <GradientHeading>AI Matchmaker</GradientHeading> <p className=" mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto"> Describe your needs and our AI will match you with the perfect services, talents, or equipment. </p> </div> <div className=" max-w-4xl mx-auto"> <div className=" mb-8"> <label className=" block text-sm font-medium text-zion-slate-light mb-2"> I'm looking for: </label> </SelectTrigger> <SelectContent className=" bg-zion-blue-dark border border-zion-blue-light"> <SelectItem value=" all"className=" text-white">All Categories</SelectItem> <SelectItem value=" service"className=" text-white">Services</SelectItem> <SelectItem value=" talent"className=" text-white">Talent</SelectItem> <SelectItem value=" equipment"className=" text-white" >Equipment</SelectItem> </SelectContent> </Select> </div> <AIMatchmaker /> </div> </div> </div> <Footer /> </>) 
};"
min-h-screen bg-zion-blue py-12 px-4"> <div className=" container mx-auto"> <div className=" text-center mb-12"> <GradientHeading>AI Matchmaker <p className=" mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto"> Describe your needs and our AI will match you with the perfect services, talents, or equipment. </p> </div> <div className=" max-w-4xl mx-auto"> <div className=" mb-8"> <label className=" block text-sm font-medium text-zion-slate-light mb-2"> I'm looking for: </label>  <SelectContent className=" bg-zion-blue-dark border border-zion-blue-light"> <SelectItem value=" all"className=" text-white">All Categories <SelectItem value=" service"className=" text-white">Services <SelectItem value=" talent"className=" text-white">Talent <SelectItem value=" equipment"className=" text-white" >Equipment   </div> <AIMatchmaker /> </div> </div> </div> <Footer /> </>)"
"`;
pr-12325
min-h-screen bg-zion-blue py-12 px-4"> <div className=" container mx-auto"> <div className=" text-center mb-12"> <GradientHeading>AI Matchmaker</GradientHeading> <p className=" mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto"> Describe your needs and our AI will match you with the perfect services, talents, or equipment. </p> </div> <div className=" max-w-4xl mx-auto"> <div className=" mb-8"> <label className=" block text-sm font-medium text-zion-slate-light mb-2"> I'm looking for: </label> </SelectTrigger> <SelectContent className=" bg-zion-blue-dark border border-zion-blue-light"> <SelectItem value=" all"className=" text-white">All Categories</SelectItem> <SelectItem value=" service"className=" text-white">Services</SelectItem> <SelectItem value=" talent"className=" text-white">Talent</SelectItem> <SelectItem value=" equipment"className=" text-white" >Equipment</SelectItem> </SelectContent> </Select> </div> <AIMatchmaker /> </div> </div> </div> <Footer /> </>)"
}
    </>;
  );
}
;
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              onMatchSelect={handleMatchSelect}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
