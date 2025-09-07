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
</Header>"
      <div className="min-h-screen bg-zion-blue py-12 px-4">"
</div>"
        <div className="container mx-auto">"
</div>"
          <div className="text-center mb-12">"
</div>
            <GradientHeading>AI Matchmaker</GradientHeading>"
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">"
</p>
            </p>
          </div>
"
          <div className="max-w-4xl mx-auto">"
</div>"
            <div className="mb-8">"
</div>"
              <label className="block text-sm font-medium text-zion-slate-light mb-2">"
</label>
              </label>
              <Select;
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
</Select>"
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">"
</SelectTrigger>"
                  <SelectValue placeholder="All Categories" />"
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
}"
      item_type = "equipment";"
    }
    toast ({"
      title: "Match Selected",")"
      description: `You've selected ${match.item.title}`}),'
    // Navigate to the quote request page with the selected item;'
    navigate ("/request - quote", {"
      state: {,
  service_type: item_type,
        specific_item: match.item;
      })
    });
  }
;
  return (
    <>;
      <Header />;
</Header>"
      <div className="min - h-screen bg - zion - blue py - 12 px - 4">;"
</div>"
        <div className="container mx - auto">;"
</div>"
          <div className="text - center mb - 12">;"
</div>
            <GradientHeading > AI Matchmaker</GradientHeading>;"
            <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto">;"
</p>
            </p>;
          </div>;"
          <div className="max - w-4xl mx - auto">;"
</div>"
            <div className="mb - 8">;"
</div>"
              <label className="block text - sm font - medium text - zion - slate - light mb - 2">;"
</label>
              </label>;
              <Select value={selected_category} onValueChange={setSelectedCategory}>;
</Select>"
                <SelectTrigger className="bg - zion - blue border border - zion - blue - light text - white">;"
</SelectTrigger>"
                  <SelectValue placeholder="All Categories" />;"
</SelectValue>
                </SelectTrigger>;"
                <SelectContent className="bg - zion - blue - dark border border - zion - blue - light">;"
</SelectContent>"
                  <SelectItem value="all" className="text - white">All Categories</SelectItem>;""
                  <SelectItem value="service" className="text - white">Services</SelectItem>;""
                  <SelectItem value="talent" className="text - white">Talent</SelectItem>;""
                  <SelectItem value="equipment" className="text - white">Equipment</SelectItem>;"
                </SelectContent>;
              </Select>;
            </div>;
            <AIMatchmaker;"
              service_type={selected_category === "all" ? "" : selected_category}"
              onMatchSelect={handleMatchSelect}
            ;
            <AIMatchmaker ;"
              serviceType={selectedCategory === "all" ? "" :selectedCategory}"
              onMatchSelect={handleMatchSelect}
            <AIMatchmaker;"
              serviceType={selectedCategory === "all" ? "" : selectedCategory}"
              onMatchSelect={handleMatchSelect}
            />;
</AIMatchmaker>
          </div>;
        </div>;
      </div>;
      <Footer />;
</Footer>
)
    </>);
}

    </>;
  ),; const handleMatchSelect = (match: MatchResult) => {"
  //Get the item type from the category //Navigate to the quote request page with the selected item navigate ("/request-quote", {"
  state: {,
  serviceType: itemType;
specificItem: match.item;
}

)
}) 
};"
min-h-screen bg-zion-blue py-12 px-4"> <div className=" container mx-auto"> <div className=" text-center mb-12"> <GradientHeading>AI Matchmaker</GradientHeading> <p className=" mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto"> Describe your needs and our AI will match you with the perfect services, talents, or equipment. </p> </div> <div className=" max-w-4xl mx-auto"> <div className=" mb-8"> <label className=" block text-sm font-medium text-zion-slate-light mb-2"> I'm looking for: </label> </SelectTrigger> <SelectContent className=" bg-zion-blue-dark border border-zion-blue-light"> <SelectItem value=" all"className=" text-white">All Categories</SelectItem> <SelectItem value=" service"className=" text-white">Services</SelectItem> <SelectItem value=" talent"className=" text-white">Talent</SelectItem> <SelectItem value=" equipment"className=" text-white" >Equipment</SelectItem> </SelectContent> </Select> </div> <AIMatchmaker /> </div> </div> </div> <Footer /> </>)"
}
    </>;
  );
}
;
;
"