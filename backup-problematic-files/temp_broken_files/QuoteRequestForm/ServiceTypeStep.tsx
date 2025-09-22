
    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">What are you looking for?</h3>;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;

            }`}
            onClick={() => handleTypeSelect("service")}
          >;
            <h4 className="font-medium text-white">Services</h4>;
            <p className="text-sm text-zion-slate-light">AI solutions, consulting, development</p>;
          </Card>;

            }`}
            onClick={() => handleTypeSelect("talent")}
          >;
            <h4 className="font-medium text-white">Talent</h4>;
            <p className="text-sm text-zion-slate-light">AI specialists, developers, consultants</p>;
          </Card>;

            }`}
            onClick={() => handleTypeSelect("equipment")}
          >;
            <h4 className="font-medium text-white">Equipment</h4>;
            <p className="text-sm text-zion-slate-light">Servers, workstations, specialized hardware</p>;
          </Card>;
        </div>;
      </div>;

}