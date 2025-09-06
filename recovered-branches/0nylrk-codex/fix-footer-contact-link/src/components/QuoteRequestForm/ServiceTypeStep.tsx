  });
;
  return (
    <div className="space - y-6">;
      <div>;
        <h3 className="text - xl font - semibold text - white mb - 4">;
          What are you looking for?;
        </h3>;
        <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4">;
          <Card;
            className={`p - 4 cursor - pointer border - 2 transition - colors ${
              form_data.service_type === "service";
                ? "bg - zion - purple / 20 border - zion - purple";
                : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";
            }`}
            <Input
              placeholder={`Search ${formData && formData.serviceType}...`}
              value={searchQuery}
                  }`}
                >;
                  <ListingScoreCard
                    title={item && item.title}
                    category={item && item.category}
                    aiScore={Math && Math.floor(Math && Math.random() * 30) + 70}
                    rating={Math && Math.floor(Math && Math.random() * 2) + 3}
                    reviewCount={Math && Math.floor(Math && Math.random() * 50) + 10}
                    image={item && item.image}
                    description="Sample listing description"
                  />;
                </div>;
              ));
            ) : (;
              <div className="text-center py-8 text-zion-slate-light">;
                No items found. Please try a different search.;
              </div>;
            )}
          </div>;
        </div>;
      )}
  );
=======
            on_click={() => handleTypeSelect ("service")}
          >;
            <h4 className="font - medium text - white">Services</h4>;
            <p className="text - sm text - zion - slate - light">;
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
            <h4 className="font - medium text - white">Talent</h4>;
            <p className="text - sm text - zion - slate - light">;
              AI specialists, developers, consultants;
            </p>;
          </Card>;
          <Card;
            className={`p - 4 cursor - pointer border - 2 transition - colors ${
              form_data.service_type === "equipment";
                ? "bg - zion - purple / 20 border - zion - purple";
                : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";
            }`}
            on_click={() => handleTypeSelect ("equipment")}
          >;
            <h4 className="font - medium text - white">Equipment</h4>;
            <p className="text - sm text - zion - slate - light">;
              Servers, workstations, specialized hardware;
            </p>;
          </Card>;
        </div>;
      </div>;
      {form_data.service_type && (
        <div className="space - y-4">;
          <h3 className="text - xl font - semibold text - white">;
            Select a specific {form_data.service_type}
          </h3>;
          <div className="relative">;
            <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate - light h - 4 w - 4" />;
            <Input;
              placeholder={`Search ${form_data.service_type}...`}
              value={search_query}
              on_change={(e) => setSearchQuery (e.target.value)}
              className="pl - 10 bg - zion - blue border border - zion - blue - light focus:border - zion - purple";
            />;
          </div>;
          <div className="grid grid - cols - 1 gap - 4 mt - 4">;
            {filtered_listings.length > 0 ? (
              filtered_listings.map ((item) => (
                <div;
                  key={item.id}
                  on_click={() => handleItemSelect (item)}
                  className={`cursor - pointer transition - all ${
                    form_data.specific_item?.id === item.id;
                      ? "ring - 2 ring - zion - purple rounded - lg";
                      : "";
                  }`}
                >;
                  <ListingScoreCard;
                    title={item.title}
                    category={item.category}
                    ai_score={Math.floor (Math.random () * 30) + 70}
                    rating={Math.floor (Math.random () * 2) + 3}
                    review_count={Math.floor (Math.random () * 50) + 10}
                    image={item.image}
                    description="Sample listing description";
                  />;
                </div>))) : (
              <div className="text - center py - 8 text - zion - slate - light">;
                No items found. Please try a different search.;
              </div>)}
          </div>;
        </div>)}
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}