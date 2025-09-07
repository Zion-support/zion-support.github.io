<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {/* Public Pages */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Public Pages</h2>;
            <ul className="space-y-2">;
              {completeSitemap;

          {/* Dynamic Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Dynamic Pages</h2>;
            <p className="text-sm text-zion-slate mb-4">Pages with dynamic parameters</p>;
            <ul className="space-y-2">;

                <li key={key}>;
                  <div className="flex items-center text-zion-slate">;
                    <ChevronRight className="h-4 w-4 mr-2" />;
                    {path} <span className="ml-2 text-xs italic">({key})</span>;
                  </div>;
                </li>;
              ))}
            </ul>;
          </div>;