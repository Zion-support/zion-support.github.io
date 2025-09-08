import { useState } from "react",
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes",
import { Input } from "@/components/ui/input",
import { Card } from "@/components/ui/card",  const handleItemSelect = (item: ListingItem) => {
    updateFormData({
      specificItem: item,
      serviceCategory: item.category,
      serviceType: item.category.toLowerCase() as ServiceType,
    })
};

  const filteredListings = SAMPLE_LISTINGS.filter((item) => {
    // Filter by category only when a service type has been selected
    if (formData.serviceType !== "") {
      const categoryMatch =
        item.category.toLowerCase() === formData.serviceType.toLowerCase();
      if (!categoryMatch) return false;

    }

    if (searchQuery.trim() === "") return true;
    return (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">
          What are you looking for?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "service"
                ? "bg-zion-purple/20 border-zion-purple"
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
              formData.serviceType === "talent"
                ? "bg-zion-purple/20 border-zion-purple"
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("talent")}
          >
            <h4 className="font-medium text-white">Talent</h4>
            <p className="text-sm text-zion-slate-light">
              AI specialists, developers, consultants
            </p>
          </Card>

          <Card
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "equipment"
                ? "bg-zion-purple/20 border-zion-purple"
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("equipment")}
          >
            <h4 className="font-medium text-white">Equipment</h4>
            <p className="text-sm text-zion-slate-light">
              Servers, workstations, specialized hardware
            </p>
          </Card>
        </div>
      </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
            <Input
          <h3 className="text-xl font-semibold text-white">
            Select a specific {formData.serviceType}
          </h3>
            on_click={() => handleTypeSelect ("service")}
          >;
            <h4 className="font - medium text-white">Services</h4>;
            <p className="text - sm text - zion - slate-light">;
              AI solutions, consulting, development;
            </p>;
          </Card>;
          <Card;
            className={`p - 4 cursor - pointer border - 2 transition - colors ${
              form_data.service_type === "talent";
                ? "bg - zion - purple / 20 border - zion - purple";
                : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";
            }`}
            on_click={() => handleTypeSelect ("talent")}
          >;
            <h4 className="font - medium text-white">Talent</h4>;
            <p className="text - sm text - zion - slate-light">;
              AI specialists, developers, consultants;
            </p>;
          </Card>;
          <Card;`
            className={`p - 4 cursor - pointer border - 2 transition - colors ${"
              form_data.service_type === "equipment";"
                ? "bg - zion - purple / 20 border - zion - purple";"
                : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";`
            }`}"
            on_click={() => handleTypeSelect ("equipment")}
          >;
            <h4 className="font - medium text-white">Equipment</h4>;
            <p className="text - sm text - zion - slate-light">;
              Servers, workstations, specialized hardware;
            </p>;
          </Card>;
        </div>;
      </div>;
      {form_data.service_type && (
        <div className="space-y-4">;
          <h3 className="text - xl font - semibold text-white">;
            Select a specific {form_data.service_type}
          </h3>;
          <div className="relative">;
            <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate - light h - 4 w-4" />;
            <Input;
              placeholder={`Search ${form_data.service_type}...`}
              value={search_query}
              on_change={(e) => setSearchQuery (e.target.value)}
              className="pl - 10 bg - zion - blue border border - zion - blue - light focus:border - zion-purple";
            />;
          </div>;
          <div className="grid grid - cols - 1 gap - 4 mt-4">;
            {filtered_listings.length > 0 ? (
              filtered_listings.map ((item) => (
                <div;
                  key={item.id}
                  on_click={() => handleItemSelect (item)}`
                  className={`cursor - pointer transition - all ${}
                    form_data.specific_item?.id === item.id;"
                      ? "ring - 2 ring - zion - purple rounded - lg";"
                      : "";`
                  }`}
                >;
                  <ListingScoreCard;
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
"
    <div className="space-y-6">"
</Input>
          </div>;"
          <div className="grid grid - cols - 1 gap - 4 mt - 4">;"
</div>
      <div>
</div>"
        <h3 className="text-xl font-semibold text-white mb-4">"
</h3>
        </h3>"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">"
          <Card;
            className={`p-4 cursor-pointer border-2 transition-colors ${"
              formData.serviceType === "service"""
                ? "bg-zion-purple/20 border-zion-purple"""
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50""`;
            }`}"
            onClick={() => handleTypeSelect("service")}"
            <h4 className="font-medium text-white">Services</h4>""
            <p className="text-sm text-zion-slate-light">"
</p>

          <Card;`;
              formData.serviceType === "talent"""
            onClick={() => handleTypeSelect("talent")}"
            <h4 className="font-medium text-white">Talent</h4>""

              formData.serviceType === "equipment"""
            onClick={() => handleTypeSelect("equipment")}"
            <h4 className="font-medium text-white">Equipment</h4>""
        <div className="space-y-4">"
          <h3 className="text-xl font-semibold text-white">"
          <h3 className="text-xl font-semibold text-white">Select a specific {formData.serviceType}</h3>""
          <div className="relative">"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />"

            <Input;`;
              placeholder={`Search ${formData.serviceType}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}

          <div className="grid grid-cols-1 gap-4 mt-4">"
                <div;
                  key={item.id}
                  onClick={() => handleItemSelect(item)}
                  <ListingScoreCard;
                    title={item && item.title}
                    category={item && item.category}
                    aiScore={Math && Math.floor(Math && Math.random() * 30) + 70}
                    rating={Math && Math.floor(Math && Math.random() * 2) + 3}
                    reviewCount={Math && Math.floor(Math && Math.random() * 50) + 10}
                    image={item && item.image}"
                    description="Sample listing description""
                  />;

                </div>;"
              <div className="text-center py-8 text-zion-slate-light">;"
              </div>;
            <h4 className="font - medium text - white">Services</h4>;""
            <p className="text - sm text - zion - slate - light">;"
            </p>;
          ;
            className={`p - 4 cursor - pointer border - 2 transition - colors ${"
              form_data.service_type === "talent";""
                ? "bg - zion - purple / 20 border - zion - purple";""
                : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";"`;
            on_click={() => handleTypeSelect ("talent")}"
            <h4 className="font - medium text - white">Talent</h4>;""
              form_data.service_type === "equipment";""
            on_click={() => handleTypeSelect ("equipment")}"
            <h4 className="font - medium text - white">Equipment</h4>;""
        <div className="space - y-4">;"
          <h3 className="text - xl font - semibold text - white">;"
          </h3>;"
          <div className="relative">;"
            <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate - light h - 4 w - 4" />;"

              placeholder={`Search ${form_data.service_type}...`}
              value={search_query}
              on_change={(e) => setSearchQuery (e.target.value)}

          <div className="grid grid - cols - 1 gap - 4 mt - 4">;"
                  on_click={() => handleItemSelect (item)}
pr-12325
                    title={item.title}
                  on_click={() => handleItemSelect (item)}
</div>

                  <ListingScoreCard;
title={item.title}
                    category={item.category}

                    ai_score={Math.floor (Math.random () * 30) + 70}
                    rating={Math.floor (Math.random () * 2) + 3}
                    review_count={Math.floor (Math.random () * 50) + 10}
                    image={item.image}}