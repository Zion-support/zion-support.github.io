import { useState } from "react";""
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes";""
import { Input } from "@/components/ui/input";""
import { Card } from "@/components/ui/card";""
import { Search } from "lucide-react";""
import { ListingScoreCard } from "@/components/ListingScoreCard";"
interface ServiceTypeStepProps {
  // TODO: Implement
}
  formData: QuoteFormData;,
  updateFormData: (data: Partial<QuoteFormData>) => void;
</QuoteFormData>"
    <div className="space-y-6">"
</div>
      <div>
</div>"
        <h3 className="text-xl font-semibold text-white mb-4">"
</h3>
        </h3>"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">"
</div>
          <Card;
            className={`p-4 cursor-pointer border-2 transition-colors ${"
              formData.serviceType === "service"""
                ? "bg-zion-purple/20 border-zion-purple"""
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50""
            }`}"
            onClick={() => handleTypeSelect("service")}"
</Card>"
            <h4 className="font-medium text-white">Services</h4>""
            <p className="text-sm text-zion-slate-light">"
</p>
            </p>
          </Card>

          <Card;
            className={`p-4 cursor-pointer border-2 transition-colors ${"
              formData.serviceType === "talent"""
                ? "bg-zion-purple/20 border-zion-purple"""
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50""
            }`}"
            onClick={() => handleTypeSelect("talent")}"
</Card>"
            <h4 className="font-medium text-white">Talent</h4>""
            <p className="text-sm text-zion-slate-light">"
</p>
            </p>
          </Card>

          <Card;
            className={`p-4 cursor-pointer border-2 transition-colors ${"
              formData.serviceType === "equipment"""
                ? "bg-zion-purple/20 border-zion-purple"""
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50""
            }`}"
            onClick={() => handleTypeSelect("equipment")}"
</Card>"
            <h4 className="font-medium text-white">Equipment</h4>""
            <p className="text-sm text-zion-slate-light">"
</p>
            </p>
          </Card>
        </div>
      </div>"
        <div className="space-y-4">"
</div>"
          <h3 className="text-xl font-semibold text-white">"
</h3>
          </h3>"
        <div className="space-y-4">"
</div>"
          <h3 className="text-xl font-semibold text-white">Select a specific {formData.serviceType}</h3>""
          <div className="relative">"
</div>"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />"
</Search>
            <Input;
              placeholder={`Search ${formData.serviceType}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
</Input>
          </div>
"
          <div className="grid grid-cols-1 gap-4 mt-4">"
</div>
                <div;
                  key={item.id}
                  onClick={() => handleItemSelect(item)}
</div>
                  <ListingScoreCard;
                    title={item && item.title}
                    category={item && item.category}
                    aiScore={Math && Math.floor(Math && Math.random() * 30) + 70}
                    rating={Math && Math.floor(Math && Math.random() * 2) + 3}
                    reviewCount={Math && Math.floor(Math && Math.random() * 50) + 10}
                    image={item && item.image}"
                    description="Sample listing description""
                  />;
</ListingScoreCard>
                </div>;"
              <div className="text-center py-8 text-zion-slate-light">;"
</div>
              </div>;
          </div>;
        </div>;
    </div>;"
            <h4 className="font - medium text - white">Services</h4>;""
            <p className="text - sm text - zion - slate - light">;"
</p>
            </p>;
          </Card>;
          <Card;
            className={`p - 4 cursor - pointer border - 2 transition - colors ${"
              form_data.service_type === "talent";""
                ? "bg - zion - purple / 20 border - zion - purple";""
                : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";"
            }`}"
            on_click={() => handleTypeSelect ("talent")}"
</Card>"
            <h4 className="font - medium text - white">Talent</h4>;""
            <p className="text - sm text - zion - slate - light">;"
</p>
            </p>;
          </Card>;
          <Card;
            className={`p - 4 cursor - pointer border - 2 transition - colors ${"
              form_data.service_type === "equipment";""
                ? "bg - zion - purple / 20 border - zion - purple";""
                : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";"
            }`}"
            on_click={() => handleTypeSelect ("equipment")}"
</Card>"
            <h4 className="font - medium text - white">Equipment</h4>;""
            <p className="text - sm text - zion - slate - light">;"
</p>
            </p>;
          </Card>;
        </div>;
      </div>;"
        <div className="space - y-4">;"
</div>"
          <h3 className="text - xl font - semibold text - white">;"
</h3>
          </h3>;"
          <div className="relative">;"
</div>"
            <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate - light h - 4 w - 4" />;"
</Search>
            <Input;
              placeholder={`Search ${form_data.service_type}...`}
              value={search_query}
              on_change={(e) => setSearchQuery (e.target.value)}
</Input>
          </div>;"
          <div className="grid grid - cols - 1 gap - 4 mt - 4">;"
</div>
                <div;
                  key={item.id}
                  on_click={() => handleItemSelect (item)}
</div>
                  <ListingScoreCard;
                    title={item.title}
                    category={item.category}
                    ai_score={Math.floor (Math.random () * 30) + 70}
                    rating={Math.floor (Math.random () * 2) + 3}
                    review_count={Math.floor (Math.random () * 50) + 10}
                    image={item.image}"
                    description="Sample listing description";"
                  />;
</ListingScoreCard>
                </div>))) : ("
              <div className="text - center py - 8 text - zion - slate - light">;"
</div>)
              </div>)}
          </div>;
        </div>)}
    </div>);
                </div>"
              <div className="text-center py-8 text-zion-slate-light">"
</div>
              </div>
          </div>
        </div>
    </div>"